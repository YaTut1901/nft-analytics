import axiosClient, { AxiosStatic } from 'axios';
import { CachedItem } from './types';

abstract class Provider<T, E> {
    protected cacheInterval: number;
    protected url: string;
    protected axios: AxiosStatic;
    protected storage: Storage;
    private maxRetries: number;
    private retryDelay: number;

    constructor(url: string, 
                cacheInterval: number = 1000 * 60 * 15, 
                axios: AxiosStatic = axiosClient, 
                storage: Storage = localStorage,
                maxRetries: number = 3,
                retryDelay: number = 1000) {
        this.url = url;
        this.cacheInterval = cacheInterval;
        this.axios = axios;
        this.storage = storage;
        this.maxRetries = maxRetries;
        this.retryDelay = retryDelay;
    }

    async provide(): Promise<T> {
        const item = this.storage.getItem(this.getHashForCashing());

        if (!item) {
            return this.cacheAndReturn();
        } else {
            const cachedItem = JSON.parse(item as string);
            if (Date.now() - cachedItem.timestamp > this.cacheInterval) {
                return this.cacheAndReturn();
            } else {
                return JSON.parse(cachedItem.data);
            }
        }
    }

    protected abstract get(): Promise<T>;

    protected abstract shouldRetry(error: E): boolean;

    protected abstract onError(error: E): Error;

    protected abstract getHashForCashing(): string;

    private async fetch(): Promise<T> {
        return this.getWithRetry(0);
    }

    private async getWithRetry(retries: number): Promise<T> {
        function delay(ms: number): Promise<void> {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        return this.get().catch(async (error: E) => {
            if (this.shouldRetry(error) && retries < this.maxRetries) {
                retries++;
                await delay(this.retryDelay * Math.pow(2, retries));
                return this.getWithRetry(retries);
            } else {
                throw this.onError(error);
            }
        });
    }

    private async cacheAndReturn(): Promise<T> {
        return this.fetch().then((response: T) => {
            const hash = this.getHashForCashing();
            const cachedItem: CachedItem = {
                timestamp: Date.now(),
                data: JSON.stringify(response)
            };
            this.storage.setItem(hash, JSON.stringify(cachedItem));
            return response;
        });
    }
}

export default Provider;
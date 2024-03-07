import React, { CSSProperties } from "react";
import { Currency, Period, RawCapVolumeData } from "../provider/types";
import { ComposedChart, Bar, Line, Tooltip, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

function CapVolumeChart(props: { data: RawCapVolumeData, period: Period, currency: Currency, style: CSSProperties | undefined }): React.JSX.Element {
    const formatDate = (value: number) => {
        const date = new Date(value * 1000);
        switch (props.period.mark) {
            case "24H":
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            case "7D":
                return date.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            case "30D":
                return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
            default:
                return "";
        }
    };

    const formatTicks = (value: number, index: number) => {
        if (index === 0 || index === props.data.length - 1) {
            return formatDate(value);
        }
        return "";
    };

    const formatCurrency = (value: number) => {
        if (value < 1000) {
            return value.toString();
        }
    
        const suffixes = ["", "K", "M", "B", "T"];
        let suffixIndex = 0;
        while (value >= 1000) {
            value /= 1000;
            suffixIndex++;
        }
    
        return value.toFixed(1) + suffixes[suffixIndex];
    }

    const CustomTooltip = ({ payload, label }: any): React.JSX.Element => {
        if (payload.length === 0) {
            return <></>;
        }
    
        const cap = payload[0].value;
        const volume = payload[1].value;
    
        return (
            <div className="border p-2 shadow-md bg-white rounded-md border-slate-900">
                <p>{formatDate(label)}</p>
                <p>Cap: {formatCurrency(cap)}</p>
                <p>Volume: {formatCurrency(volume)}</p>
            </div>
        );
    };

    return (
    <ResponsiveContainer>
        <ComposedChart
            width={500}
            height={400}
            data={props.data}
            style={props.style}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" tickFormatter={() => ""}/>
            <YAxis yAxisId="left" orientation="left" stroke="black" opacity={0.6} tickFormatter={formatCurrency}/>
            <YAxis yAxisId="right" orientation="right" stroke="black" opacity={0.6} tickFormatter={formatCurrency}/>
            <Tooltip content={<CustomTooltip />} />
            <Line yAxisId="left" type="monotone" dataKey="cap" stroke="#9749ae" dot={false} />
            <Bar yAxisId="right" dataKey="volume" fill="#4b97d0" barSize={5} />
        </ComposedChart>
    </ResponsiveContainer>);
}

export default CapVolumeChart;
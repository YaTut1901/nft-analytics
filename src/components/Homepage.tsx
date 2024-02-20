import React from 'react';
import UpBoard from './homepage/UpBoard';
import MidBoard from './homepage/MidBoard';
import BottomBoard from './homepage/BottomBoard';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

function Homepage(): React.JSX.Element {
    return (
        <div>
        <div className="flex flex-col gap-6 justify-between max-w-full p-6">
            <div className="flex flex-col gap-6">
              <UpBoard />
              <MidBoard />
            </div>
        </div>
        <BottomBoard />
        </div>
    );
}

export default Homepage;
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

// Chart data
export const data = {
    labels: ["April 1, 2022", "", "", "", "", "", "April 30, 2022"],
    datasets: [
        {
            // label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.4,
        },
    ],
}

// Chart config
export const options = {
    responsive: true,
    // maintainAspectRatio: false, // Set to false to keep width fixed at 100%
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false, // Disable x-axis grid lines
            },
        },
        y: {
            grid: {
                display: false, // Disable y-axis grid lines
            },
            ticks: {
                display: false, // Hide y-axis labels
            },
        },
    },
}

const Chart = () => {
    return <Line options={options} data={data} />
}

export default Chart

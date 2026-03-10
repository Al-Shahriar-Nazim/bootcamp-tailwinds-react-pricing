import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "nazim",
    physics: 60,
    chemistry: 32,
    math: 90,
  },
  {
    id: 2,
    name: "Jihad",
    physics: 90,
    chemistry: 92,
    math: 10,
  },
  {
    id: 3,
    name: "Arman",
    physics: 80,
    chemistry: 72,
    math: 10,
  },
  {
    id: 4,
    name: "rahim",
    physics: 70,
    chemistry: 92,
    math: 30,
  },
];
const ResultChart = () => {
  return (
    <div className="container mx-auto mt-6">
      <LineChart width={400} height={400} data={resultData}>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
        <Line dataKey="physics" stroke="crimson"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default ResultChart;

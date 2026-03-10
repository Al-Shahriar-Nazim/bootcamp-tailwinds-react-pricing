import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
const Student = [
  {
    id: 1,
    name: "Nuhar",
    math: 60,
    Physics: 80,
    chemistry: 60,
    Biology: 50,
    HigerMath: 80,
  },
  {
    id: 2,
    name: "Ajruhan",
    math: 90,
    Physics: 40,
    chemistry: 50,
    Biology: 20,
    HigerMath: 50,
  },
  {
    id: 3,
    name: "Simi",
    math: 30,
    Physics: 50,
    chemistry: 90,
    Biology: 20,
    HigerMath: 50,
  },
  {
    id: 4,
    name: "Muntasir",
    math: 50,
    Physics: 30,
    chemistry: 20,
    Biology: 10,
    HigerMath: 90,
  },
];

const StudentMarks = () => {
  return (
    <div>
      <LineChart width={600} height={400} data={Student}>
        <Line dataKey="math"></Line>
        <Line stroke="violet" dataKey="Physics"></Line>
        <Tooltip></Tooltip>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default StudentMarks;

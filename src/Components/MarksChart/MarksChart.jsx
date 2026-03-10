import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksRes = use(marksPromise);
  // console.log(marks)
  const mark = marksRes.data;
  console.log(mark);

  // data processing for the chart
  const marksChartData = mark.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.physics,
      chemistry: studentData.chemistry,
      math: studentData.math,
    };
    const avg =
      (studentData.physics + studentData.chemistry + studentData.math) / 3;
    student.avg = avg;
    return student;
  });
  console.log(marksChartData);
  return (
    <div>
      <BarChart width={400} height={500} data={marksChartData}>
        <XAxis dataKey="name"> </XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="physics" fill="crimson"></Bar>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default MarksChart;

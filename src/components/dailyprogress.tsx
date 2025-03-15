"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "./ui/chart";

const dummyData = [
  { day: "Mon", progress: 0.1 },
  { day: "Tue", progress: 0.3 },
  { day: "Wed", progress: 0.4 },
  { day: "Thu", progress: 0.8 },
  { day: "Fri", progress: 1.0 },
];

const chartConfig = {
  desktop: {
    label: "Day",
    color: "blue",
  },
} satisfies ChartConfig;

const DailyProgress: React.FC = () => {
  //TODO: Add props and connect to state

  return (
    <div className="mt-1 mr-4 mb-1 ml-4">
      <h2 className="text-lg font-bold">Daily Progress</h2>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={dummyData}>
          <CartesianGrid vertical={false} horizontal={true} />

          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <Bar dataKey="progress" fill="green" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default DailyProgress;

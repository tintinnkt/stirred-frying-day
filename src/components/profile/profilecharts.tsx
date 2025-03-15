"use client";

import Image from "next/image";
import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "../ui/chart";

const chartData = [{ percentage: 0.5, fill: "green" }];

const chartConfig = {
  precentage: {
    label: "%",
  },
} satisfies ChartConfig;

const ProfileChart: React.FC = () => {
  return (
    <>
      <span className="text-2xl font-bold">Completion</span>
      <div className="mr-2 ml-2 flex">
        <div className="flex-1/2">
          <div>Learning</div>
          <ChartContainer config={chartConfig} className="m-auto">
            <RadialBarChart
              data={chartData}
              startAngle={0}
              endAngle={230}
              innerRadius={40}
              outerRadius={55}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey={"percentage"} background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {(chartData[0].percentage * 100).toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            %
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </div>
        <div className="flex-1/2">
          <div>Lucky Shrimp</div>
          <div className="mt-5 flex justify-center">
            <Image src="/shrimp.svg" width={60} height={60} alt="shrimp" />
          </div>
          <span className="text-lg font-bold">100%</span>
        </div>
      </div>
    </>
  );
};

export default ProfileChart;

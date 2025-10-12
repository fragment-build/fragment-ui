import { ResponsiveContainer, Cell, RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

/**
 * Primary UI component for Dashboard Charts
 */

import React from 'react';
import type { ButtonProps } from "@heroui/button";

interface ChartData {
  name: string;
  value: number;
  [key: string]: string | number;
};

interface ChartGaugeProps {
  color: ButtonProps["color"];
  chartData: ChartData[];
  total: number;
  width?: number | string;
  height?: number | string;
};


const formatTotal = (value: number | undefined) => {
  return value?.toLocaleString() ?? "0";
};

export const ChartGauge: React.FC<ChartGaugeProps> = ({ total, color, chartData, width, height }) => {
  return (
    <ResponsiveContainer
      className="[&_.recharts-surface]:outline-hidden"
      width={width}
      height={height}
    >
      <RadialBarChart
        barSize={10}
        cx="50%"
        cy="50%"
        data={chartData}
        endAngle={-45}
        innerRadius={90}
        outerRadius={70}
        startAngle={225}
      >
        <PolarAngleAxis angleAxisId={0} domain={[0, total]} tick={false} type="number" />
        <RadialBar
          angleAxisId={0}
          animationDuration={1000}
          animationEasing="ease"
          background={{
            fill: "hsl(var(--heroui-default-100))",
          }}
          cornerRadius={12}
          dataKey="value"
        >
          {chartData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`hsl(var(--heroui-${color === "default" ? "foreground" : color}))`}
            />
          ))}
        </RadialBar>
        <g>
          <text textAnchor="middle" x="50%" y="48%">
            <tspan className="fill-default-500 text-tiny" dy="-0.5em" x="50%">
              {chartData?.[0].name}
            </tspan>
            <tspan className="fill-foreground text-medium font-semibold" dy="1.5em" x="50%">
              {formatTotal(total)}
            </tspan>
          </text>
        </g>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

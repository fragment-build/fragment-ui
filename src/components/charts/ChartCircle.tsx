import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

/**
 * Primary UI component for Dashboard Charts
 */

import React from 'react';
import type { ButtonProps } from "@heroui/button";

interface ChartData {
  name: string;
  [key: string]: string | number;
};

export interface ChartCircleProps {
  color: ButtonProps["color"];
  categories: string[];
  chartData: ChartData[];
  width?: number | string;
  height?: number | string;
};

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

export const ChartCircle: React.FC<ChartCircleProps> = ({ categories, color, chartData, width, height }) => {
  return (
    <ResponsiveContainer
      className="[&_.recharts-surface]:outline-hidden"
      width={width}
      height={height}
    >
      <PieChart accessibilityLayer margin={{top: 0, right: 0, left: 0, bottom: 0}}>
        <Tooltip
          content={({label, payload}) => (
            <div className="rounded-medium bg-background text-tiny shadow-small flex h-8 min-w-[120px] items-center gap-x-2 px-1">
              <span className="text-foreground font-medium">{label}</span>
              {payload?.map((p, index) => {
                const name = p.name;
                const value = p.value;
                const category = categories.find((c) => c.toLowerCase() === name) ?? name;

                return (
                  <div key={`${index}-${name}`} className="flex w-full items-center gap-x-2">
                    <div
                      className="h-2 w-2 flex-none rounded-full"
                      style={{
                        backgroundColor: p.payload.fill,
                      }}
                    />
                    <div className="text-default-700 flex w-full items-center justify-between gap-x-2 pr-1 text-xs">
                      <span className="text-default-500">{category}</span>
                      <span className="text-default-700 font-mono font-medium">
                        {formatTotal(value as number)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          cursor={false}
        />
        <Pie
          animationDuration={1000}
          animationEasing="ease"
          data={chartData}
          dataKey="value"
          innerRadius="68%"
          nameKey="name"
          paddingAngle={-20}
          strokeWidth={0}
        >
          {chartData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

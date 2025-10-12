import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import React from 'react';
import type { ButtonProps } from "@heroui/button";

/**
 * Primary UI component for Dashboard Charts
 */

type ChartData = Record<string, string | number>;

interface ChartBarProps {
  color: ButtonProps["color"];
  categories: string[];
  dataKey: string;
  data: ChartData[];
  total: number;
  width?: number | string;
  height?: number | string;
};


const formatTotal = (value: number | undefined) => {
  return value?.toLocaleString() ?? "0";
};

export const ChartBar: React.FC<ChartBarProps> = ({ categories, color, data, dataKey, width, height }) => {
  return (
    <ResponsiveContainer
      className="[&_.recharts-surface]:outline-hidden"
      width={width}
      height={height}
    >
      <BarChart
        accessibilityLayer
        data={data}
        margin={{ top: 20, right: 14, left: -8, bottom: 5 }}
      >
        <XAxis dataKey={dataKey} fontSize="var(--heroui-font-size-tiny)" tickLine={false} />
        <YAxis axisLine={false} fontSize="var(--heroui-font-size-tiny)" tickLine={false} />
        <Tooltip
          content={({label, payload}) => (
            <div className="rounded-medium bg-background text-tiny shadow-small flex h-auto min-w-[120px] items-center gap-x-2 p-2">
              <div className="flex w-full flex-col gap-y-1">
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
                          backgroundColor: p.fill,
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
            </div>
          )}
          cursor={false}
        />
        {categories.map((cat, index) => (
          <Bar
              key={`${cat}-${index}`}
              dataKey={cat}
              fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
              barSize={24}
              stackId="bars"
              radius={index === categories.length - 1 ? [4, 4, 0, 0] : 0}
              animationDuration={450}
              animationEasing="ease"
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

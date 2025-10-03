/**
 * Primary UI component for Dashboard Charts
 */

import React, { lazy, Suspense, useContext } from 'react';
import type { Props as ApexChartProps } from 'react-apexcharts';
import defaultsDeep from 'lodash.defaultsdeep';
import { FragmentUIContext } from '../../context';

const ApexChart = lazy(async () => {
	const module = await import("react-apexcharts");
	return { default: module.default };
});

export interface ChartProps {
  type: 'area' | 'line' | 'column' | 'bar' | 'pie' | 'donut' | 'radial';
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexCharts.ApexOptions;
  height?: ApexChartProps['height'];
  width?: ApexChartProps['width'];
}

export const Chart: React.FC<ChartProps> = (props) => {
  const context = useContext(FragmentUIContext);
  const defaults = context['defaults']['chart']?.[props.type];
  const mergedProps: ApexChartProps = React.useMemo(() => defaultsDeep({ ...props }, defaults ?? {}), [props, defaults]);

  return (
    <Suspense>
      <ApexChart
        {...mergedProps}
        type={defaults?.options?.chart?.type}
        height={props.height ?? defaults?.options?.chart?.height}
        width={props.width ?? defaults?.options?.chart?.width}
      />
    </Suspense>
  );
};

/**
 * Primary UI component for Dashboard Charts
 */

import React, { useContext, useEffect, useState } from "react";
import type { Props as ApexChartProps } from "react-apexcharts";
import defaultsDeep from "lodash.defaultsdeep";
import { Spinner } from "../base";
import { FragmentUIContext } from "../../context";

export interface ChartProps {
  type: 'line';
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexCharts.ApexOptions;
  height?: ApexChartProps['height'];
  width?: ApexChartProps['width'];
}

export const Chart: React.FC<ChartProps> = (props) => {
  const context = useContext(FragmentUIContext);
  const defaults = context['defaults']['chart']?.[props.type];
  const mergedProps: ChartProps = React.useMemo(() => defaultsDeep(structuredClone(props), defaults ?? {}), [props, defaults]);
  const [component, setComponent] = useState<React.ReactNode>(
    <div style={{ height: mergedProps.height, width: mergedProps.width }} className="flex justify-center align-center"><Spinner /></div>
  );

  useEffect(() => {
    const importComponent = async () => {
      const module = await import('react-apexcharts');
      const ApexChart = module.default;
      setComponent(<ApexChart {...mergedProps} />);
    };

    importComponent();
  }, [mergedProps]);

  return component;
};

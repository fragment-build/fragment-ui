/**
 * Primary UI component for Dashboard Charts
 */

import ApexChart, { Props as ApexChartProps } from "react-apexcharts";
import { FragmentUIContext } from "../../context";
import { useContext } from "react";
import defaultsDeep from "lodash.defaultsdeep";

export interface ChartProps {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexCharts.ApexOptions;
  type: 'line';
  height?: ApexChartProps['height'];
  width?: ApexChartProps['width'];
}

export const Chart: React.FC<ChartProps> = (props) => {
  const context = useContext(FragmentUIContext);
  console.log(context['defaults']['chart']?.[props.type]);
  console.log('props', props);
  const defaults = defaultsDeep(structuredClone(props), context['defaults']['chart']?.[props.type] || {})
  return (
    <ApexChart {...defaults} />
  );
};

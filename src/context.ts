import { createContext } from 'react';
import type { Props as ApexChartProps } from 'react-apexcharts';
import type { ChartProps } from './components/chart/Chart';
import type { FormProps } from './fragments/form/Form';
import type { FormSectionProps } from './fragments/form/FormSection';
import type { MultiSwitchProps } from './components/multi-switch/MultiSwitch';

export interface FragmentUIContext {
  defaults: {
    chart?: Partial<Record<ChartProps['type'], Partial<Pick<ApexChartProps, 'options' | 'series'>>>>;
    form?: Partial<FormProps>;
    formSection?: Partial<FormSectionProps>;
    multiSwitch?: Partial<MultiSwitchProps>;
  }
}

export const defaultContext: FragmentUIContext = {
  defaults: {
    chart: {
      area: {
        options: {
          chart: {
            height: '100%',
            width: '100%',
            type: 'area',
            fontFamily: 'Inter, sans-serif',
            dropShadow: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          tooltip: {
            theme: 'dark',
            enabled: true,
            x: {
              show: false,
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.55,
              opacityTo: 0,
              shade: '#1C64F2',
              gradientToColors: ['#1C64F2'],
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 3,
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: 0
            },
          },
          xaxis: {
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
        },
      },
      line: {
        options: {
          chart: {
            type: 'line',
            width: '100%',
            height: '100%',
            fontFamily: 'Inter, sans-serif',
            dropShadow: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
            animations: {
              enabled: false
            },
            zoom: {
              enabled: false,
            },
          },
          tooltip: {
            theme: 'dark',
            enabled: true,
            x: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 3,
            curve: 'smooth'
          },
          grid: {
            show: true,
            strokeDashArray: 4,
            padding: {
              left: 20,
              right: 20,
            },
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left'
          },
          xaxis: {
            categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
            labels: {
              show: true,
              style: {
                fontFamily: 'Inter, sans-serif',
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
              }
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
        },
      },
      column: {
        options: {
          chart: {
            type: 'bar',
            fontFamily: 'Inter, sans-serif',
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '70%',
              borderRadiusApplication: 'end',
              borderRadius: 8,
            },
          },
          tooltip: {
            theme: 'dark',
            shared: true,
            intersect: false,
            style: {
              fontFamily: 'Inter, sans-serif',
            },
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: -14
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            floating: false,
            labels: {
              show: true,
              style: {
                fontFamily: 'Inter, sans-serif',
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
              }
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          fill: {
            opacity: 1,
          },
        },
      },
      bar: {
        options: {
          chart: {
            sparkline: {
              enabled: false,
            },
            type: 'bar',
            width: '100%',
            height: 400,
            toolbar: {
              show: false,
            }
          },
          fill: {
            opacity: 1,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: '100%',
              borderRadiusApplication: 'end',
              borderRadius: 6,
              dataLabels: {
                position: 'top',
              },
            },
          },
          legend: {
            show: true,
            position: 'bottom',
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            theme: 'dark',
            shared: true,
            intersect: false,
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontFamily: 'Inter, sans-serif',
              },
              formatter: function(value: string) {
                return '$' + value
              }
            },
            categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: true,
              style: {
                fontFamily: 'Inter, sans-serif',
              }
            }
          },
          grid: {
            show: true,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: -20
            },
          }
        },
      },
      pie: {
        options: {
          chart: {
            height: '100%',
            width: '100%',
            type: 'pie',
          },
          stroke: {
            width: 5,
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              dataLabels: {
                offset: -25,
              }
            },
          },
          dataLabels: {
            enabled: true,
            style: {
              fontFamily: 'Inter, sans-serif',
            },
            background: {
              enabled: true,
              padding: 10,
              borderWidth: 0,
              borderRadius: 5,
              dropShadow: {
                enabled: true,
              }
            },
            dropShadow: {
              enabled: false,
            }
          },
          legend: {
            position: 'bottom',
            fontFamily: 'Inter, sans-serif',
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
        },
      },
      donut: {
        options: {
          chart: {
            height: '100%',
            width: '100%',
            type: 'donut',
          },
          stroke: {
            width: 5,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontFamily: 'Inter, sans-serif',
                    offsetY: 20,
                  },
                  total: {
                    showAlways: true,
                    show: true,
                    fontFamily: 'Inter, sans-serif',
                  },
                  value: {
                    show: true,
                    fontFamily: 'Inter, sans-serif',
                    offsetY: -20,
                  },
                },
                size: '80%',
              },
            },
          },
          grid: {
            padding: {
              top: -2,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            position: 'bottom',
            fontFamily: 'Inter, sans-serif',
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
        },
      },
      radial: {
        options: {
          chart: {
            height: '100%',
            width: '100%',
            type: 'radialBar',
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            lineCap: 'round',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                show: false,
              },
              hollow: {
                margin: 0,
                size: '32%',
              }
            },
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: -23,
              bottom: -20,
            },
          },
          legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'Inter, sans-serif',
          },
          tooltip: {
            theme: 'dark',
            enabled: true,
            x: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          }
        },
      },
    },
  },
};

export const FragmentUIContext = createContext(defaultContext);

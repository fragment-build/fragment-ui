import { AccordionItemProps, AccordionProps, AutocompleteItemProps, AutocompleteProps, AutocompleteSectionProps, AvatarGroupProps, AvatarProps, BadgeProps, BreadcrumbItemProps, BreadcrumbsProps, ButtonProps, CardProps, CheckboxGroupProps, CheckboxProps, ChipProps, CircularProgressProps, CodeProps, DividerProps, DropdownItemProps, DropdownMenuProps, DropdownProps, DropdownSectionProps, DropdownTriggerProps, HTMLNextUIProps, ImageProps, InputProps, KbdProps, LinkProps, ListboxItemProps, ListboxProps, ListboxSectionProps, ModalBodyProps, ModalContentProps, ModalFooterProps, ModalHeaderProps, ModalProps, NavbarBrandProps, NavbarContentProps, NavbarItemProps, NavbarMenuItemProps, NavbarMenuProps, NavbarMenuToggleProps, NavbarProps, PaginationCursorProps, PaginationItemProps, PaginationProps, PopoverContentProps, PopoverProps, PopoverTriggerProps, ProgressProps, RadioGroupProps, RadioProps, ScrollShadowProps, SelectItemProps, SelectProps, SelectSectionProps, SkeletonProps, SliderProps, SnippetProps, SpacerProps, SpinnerProps, SwitchProps, TabItemProps, TableBodyProps, TableCellProps, TableColumnProps, TableHeaderProps, TableProps, TabsProps, TextAreaProps, TooltipProps, UserProps } from "@nextui-org/react";
import { createContext } from "react";
import { RowProps } from '@react-types/table';
import type { Props as ApexChartProps } from "react-apexcharts";
import { ColorInputProps, ColorSelectorProps } from "./components";
import { ChartProps } from "./components/chart/Chart";

// Copied type due to missing export from @nextui-org/react
export type TableRowProps<T = object> = RowProps<T> & Omit<HTMLNextUIProps<"tr">, keyof RowProps<T>>;

export interface FragmentUIContext {
  defaults: {
    avatar?: Partial<AvatarProps>;
    avatarGroup?: Partial<AvatarGroupProps>;
    accordion?: Partial<AccordionProps>;
    accordionItem?: Partial<AccordionItemProps>;
    autocomplete?: Partial<AutocompleteProps>;
    autocompleteItem?: Partial<AutocompleteItemProps>;
    autocompleteSection?: Partial<AutocompleteSectionProps>;
    badge?: Partial<BadgeProps>;
    button?: Partial<ButtonProps>;
    breadcrumbs?: Partial<BreadcrumbsProps>;
    breadcrumbItem?: Partial<BreadcrumbItemProps>;
    card?: Partial<CardProps>;
    chart?: Partial<{[chartType in ChartProps['type']]: Partial<Pick<ApexChartProps, 'options' | 'series'>>}>;
    checkbox?: Partial<CheckboxProps>;
    checkboxGroup?: Partial<CheckboxGroupProps>;
    chip?: Partial<ChipProps>;
    circularProgress?: Partial<CircularProgressProps>;
    code?: Partial<CodeProps>;
    colorInput?: Partial<ColorInputProps>;
    colorSelector?: Partial<ColorSelectorProps>;
    divider?: Partial<DividerProps>;
    dropdown?: Partial<DropdownProps>;
    dropdownItem?: Partial<DropdownItemProps>;
    dropdownMenu?: Partial<DropdownMenuProps>;
    dropdownSection?: Partial<DropdownSectionProps>;
    dropdownTrigger?: Partial<DropdownTriggerProps>;
    image?: Partial<ImageProps>;
    input?: Partial<InputProps>;
    kbd?: Partial<KbdProps>;
    link?: Partial<LinkProps>;
    listbox?: Partial<ListboxProps>;
    listboxItem?: Partial<ListboxItemProps>;
    listboxSection?: Partial<ListboxSectionProps>;
    modal?: Partial<ModalProps>;
    modalBody?: Partial<ModalBodyProps>;
    modalContent?: Partial<ModalContentProps>;
    modalFooter?: Partial<ModalFooterProps>;
    modalHeader?: Partial<ModalHeaderProps>;
    navbar?: Partial<NavbarProps>;
    navbarBrand?: Partial<NavbarBrandProps>;
    navbarContent?: Partial<NavbarContentProps>;
    navbarItem?: Partial<NavbarItemProps>;
    navbarMenu?: Partial<NavbarMenuProps>;
    navbarMenuItem?: Partial<NavbarMenuItemProps>;
    navbarMenuToggle?: Partial<NavbarMenuToggleProps>;
    pagination?: Partial<PaginationProps>;
    paginationItem?: Partial<PaginationItemProps>;
    paginationCursor?: Partial<PaginationCursorProps>;
    popover?: Partial<PopoverProps>;
    popoverContent?: Partial<PopoverContentProps>;
    popoverTrigger?: Partial<PopoverTriggerProps>;
    progress?: Partial<ProgressProps>;
    radio?: Partial<RadioProps>;
    radioGroup?: Partial<RadioGroupProps>;
    select?: Partial<SelectProps>;
    selectItem?: Partial<SelectItemProps>;
    selectSection?: Partial<SelectSectionProps>;
    skeleton?: Partial<SkeletonProps>;
    snippet?: Partial<SnippetProps>;
    scrollShadow?: Partial<ScrollShadowProps>;
    spacer?: Partial<SpacerProps>;
    spinner?: Partial<SpinnerProps>;
    switch?: Partial<SwitchProps>;
    slider?: Partial<SliderProps>;
    table?: Partial<TableProps>;
    tableBody?: Partial<TableBodyProps<unknown>>;
    tableCell?: Partial<TableCellProps>;
    tableColumn?: Partial<TableColumnProps<unknown>>;
    tableHeader?: Partial<TableHeaderProps<unknown>>;
    tableRow?: Partial<TableRowProps>;
    tab?: Partial<TabItemProps>;
    tabs?: Partial<TabsProps>;
    textArea?: Partial<TextAreaProps>;
    tooltip?: Partial<TooltipProps>;
    user?: Partial<UserProps>;
  }
}

export const defaultContext: FragmentUIContext = {
  defaults: {
    avatar: {
      radius: 'full',
    },
    table: {
      removeWrapper: true,
    },
    user: {
      avatarProps: {
        radius: 'full',
      },
    },
    chart: {
      area: {
        options: {
          chart: {
            height: "100%",
            width: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
              enabled: false,
            },
            toolbar: {
              show: false,
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
            type: "gradient",
            gradient: {
              opacityFrom: 0.55,
              opacityTo: 0,
              shade: "#1C64F2",
              gradientToColors: ["#1C64F2"],
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 6,
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
            categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
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
            fontFamily: "Inter, sans-serif",
            dropShadow: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
            animations: {
              enabled: false
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
                fontFamily: "Inter, sans-serif",
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
          colors: ["#1A56DB", "#FDBA8C"],
          chart: {
            type: "bar",
            fontFamily: "Inter, sans-serif",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "70%",
              borderRadiusApplication: "end",
              borderRadius: 8,
            },
          },
          tooltip: {
            theme: 'dark',
            shared: true,
            intersect: false,
            style: {
              fontFamily: "Inter, sans-serif",
            },
          },
          states: {
            hover: {
              filter: {
                type: "darken",
                value: 1,
              },
            },
          },
          stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
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
                fontFamily: "Inter, sans-serif",
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
            type: "bar",
            width: "100%",
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
              columnWidth: "100%",
              borderRadiusApplication: "end",
              borderRadius: 6,
              dataLabels: {
                position: "top",
              },
            },
          },
          legend: {
            show: true,
            position: "bottom",
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            theme: 'dark',
            shared: true,
            intersect: false,
            y: {
              formatter: function (value) {
                return "$" + value
              }
            }
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontFamily: "Inter, sans-serif",
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
              },
              formatter: function(value) {
                return "$" + value
              }
            },
            categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
                fontFamily: "Inter, sans-serif",
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
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
          colors: ["#1C64F2", "#16BDCA", "#9061F9"],
          chart: {
            height: 420,
            width: "100%",
            type: "pie",
          },
          stroke: {
            colors: ["white"],
          },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -25,
              }
            },
          },
          labels: ["Direct", "Organic search", "Referrals"],
          dataLabels: {
            enabled: true,
            style: {
              fontFamily: "Inter, sans-serif",
            },
          },
          legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return value + "%"
              },
            },
          },
          xaxis: {
            labels: {
              formatter: function (value) {
                return value  + "%"
              },
            },
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
          colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
          chart: {
            height: "100%",
            width: "100%",
            type: "donut",
          },
          stroke: {
            colors: ["transparent"],
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontFamily: "Inter, sans-serif",
                    offsetY: 20,
                  },
                  total: {
                    showAlways: true,
                    show: true,
                    label: "Unique visitors",
                    fontFamily: "Inter, sans-serif",
                    formatter: function (w) {
                      const sum = w.globals.seriesTotals.reduce((a: number, b: number) => {
                        return a + b
                      }, 0)
                      return '$' + sum + 'k'
                    },
                  },
                  value: {
                    show: true,
                    fontFamily: "Inter, sans-serif",
                    offsetY: -20,
                    formatter: function (value) {
                      return value + "k"
                    },
                  },
                },
                size: "80%",
              },
            },
          },
          grid: {
            padding: {
              top: -2,
            },
          },
          labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
          dataLabels: {
            enabled: false,
          },
          legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return value + "k"
              },
            },
          },
          xaxis: {
            labels: {
              formatter: function (value) {
                return value  + "k"
              },
            },
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
          colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
          chart: {
            height: "380px",
            width: "100%",
            type: "radialBar",
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            radialBar: {
              track: {
                background: '#E5E7EB',
              },
              dataLabels: {
                show: false,
              },
              hollow: {
                margin: 0,
                size: "32%",
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
          labels: ["Done", "In progress", "To do"],
          legend: {
            show: true,
            position: "bottom",
            fontFamily: "Inter, sans-serif",
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
            },
          },
          yaxis: {
            show: false,
            labels: {
              formatter: function (value) {
                return value + '%';
              }
            }
          }
        },
      },
    },
  },
};

export const FragmentUIContext = createContext(defaultContext);

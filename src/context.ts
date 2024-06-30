import { AccordionItemProps, AccordionProps, AutocompleteItemProps, AutocompleteProps, AutocompleteSectionProps, AvatarGroupProps, AvatarProps, BadgeProps, BreadcrumbsProps, ButtonGroupProps, ButtonProps, CardProps, CheckboxGroupProps, CheckboxProps, ChipProps, CircularProgressProps, CodeProps, DividerProps, DropdownItemProps, DropdownMenuProps, DropdownProps, DropdownSectionProps, DropdownTriggerProps, ImageProps, InputProps, KbdProps, LinkProps, ListboxItemProps, ListboxProps, ListboxSectionProps, ModalBodyProps, ModalContentProps, ModalFooterProps, ModalHeaderProps, ModalProps, NavbarBrandProps, NavbarContentProps, NavbarItemProps, NavbarMenuItemProps, NavbarMenuToggleProps, NavbarProps, PaginationCursorProps, PaginationItemProps, PaginationProps, PopoverContentProps, PopoverProps, PopoverTriggerProps, ProgressProps, RadioGroupProps, RadioProps, ScrollShadowProps, SelectItemProps, SelectProps, SelectSectionProps, SkeletonProps, SliderProps, SnippetProps, SpacerProps, SpinnerProps, SwitchProps, TabItemProps, TableBodyProps, TableCellProps, TableColumnProps, TableHeaderProps, TableProps, TableRowProps, TabsProps, TextAreaProps, TooltipProps, UserProps } from "@nextui-org/react";
import { createContext } from "react";
import type { Props as ApexChartProps } from "react-apexcharts";
import { ChartProps, ColorInputProps, ColorSelectorProps, MultiSwitchProps } from "./components";

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
    buttonGroup?: Partial<ButtonGroupProps>;
    breadcrumbs?: Partial<BreadcrumbsProps>;
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
    multiSwitch?: Partial<MultiSwitchProps>;
    navbar?: Partial<NavbarProps>;
    navbarBrand?: Partial<NavbarBrandProps>;
    navbarContent?: Partial<NavbarContentProps>;
    navbarItem?: Partial<NavbarItemProps>;
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
    tabs: {
      classNames: {
        tabList: 'p-0',
        panel: 'border-t-[1px] border-default-200 pt-6',
      },
      variant: "underlined",
    },
    user: {
      avatarProps: {
        radius: 'full',
      },
    },
    multiSwitch: {
      variant: 'flat',
    },
    button: {
      variant: 'flat',
      radius: 'sm',
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
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontFamily: "Inter, sans-serif",
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
            height: "100%",
            width: "100%",
            type: "pie",
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
              fontFamily: "Inter, sans-serif",
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
            position: "bottom",
            fontFamily: "Inter, sans-serif",
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
            height: "100%",
            width: "100%",
            type: "donut",
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
                    fontFamily: "Inter, sans-serif",
                    offsetY: 20,
                  },
                  total: {
                    showAlways: true,
                    show: true,
                    fontFamily: "Inter, sans-serif",
                  },
                  value: {
                    show: true,
                    fontFamily: "Inter, sans-serif",
                    offsetY: -20,
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
          dataLabels: {
            enabled: false,
          },
          legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
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
            height: "100%",
            width: "100%",
            type: "radialBar",
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
          legend: {
            show: true,
            position: "bottom",
            fontFamily: "Inter, sans-serif",
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

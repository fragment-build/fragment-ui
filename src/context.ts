import { AccordionItemProps, AccordionProps, AutocompleteItemProps, AutocompleteProps, AutocompleteSectionProps, AvatarGroupProps, AvatarProps, BadgeProps, BreadcrumbItemProps, BreadcrumbsProps, ButtonProps, CardProps, CheckboxGroupProps, CheckboxProps, ChipProps, CircularProgressProps, CodeProps, DividerProps, DropdownItemProps, DropdownMenuProps, DropdownProps, DropdownSectionProps, DropdownTriggerProps, ImageProps, InputProps, KbdProps, LinkProps, ListboxItemProps, ListboxProps, ListboxSectionProps, ModalBodyProps, ModalContentProps, ModalFooterProps, ModalHeaderProps, ModalProps, NavbarBrandProps, NavbarContentProps, NavbarItemProps, NavbarMenuItemProps, NavbarMenuProps, NavbarMenuToggleProps, NavbarProps, PaginationCursorProps, PaginationItemProps, PaginationProps, PopoverContentProps, PopoverProps, PopoverTriggerProps, ProgressProps, RadioGroupProps, RadioProps, ScrollShadowProps, SelectItemProps, SelectProps, SelectSectionProps, SkeletonProps, SliderProps, SnippetProps, SpacerProps, SpinnerProps, SwitchProps, TabItemProps, TableBodyProps, TableCellProps, TableColumnProps, TableHeaderProps, TableProps, TabsProps, TextAreaProps, TooltipProps, UserProps } from "@nextui-org/react";
import { TableRowProps } from "@nextui-org/table/dist/base/table-row";
import { createContext } from "react";
import { ColorInputProps, ColorSelectorProps } from "./components";

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
  },
}

export const FragmentUIContext = createContext(defaultContext);
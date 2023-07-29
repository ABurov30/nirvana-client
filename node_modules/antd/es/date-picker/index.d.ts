import type { Dayjs } from 'dayjs';
import type { RangePickerProps as BaseRangePickerProps, PickerDateProps, PickerProps } from './generatePicker';
export type DatePickerProps = PickerProps<Dayjs>;
export type MonthPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'>;
export type WeekPickerProps = Omit<PickerDateProps<Dayjs>, 'picker'>;
export type RangePickerProps = BaseRangePickerProps<Dayjs>;
declare const PurePanel: any;
declare const PureRangePanel: any;
declare const _default: import("./generatePicker/interface").PickerComponentClass<PickerProps<Dayjs> & {
    status?: "" | "warning" | "error" | undefined;
    hashId?: string | undefined;
    popupClassName?: string | undefined;
    rootClassName?: string | undefined;
}, unknown> & {
    WeekPicker: import("./generatePicker/interface").PickerComponentClass<Omit<PickerProps<Dayjs> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    MonthPicker: import("./generatePicker/interface").PickerComponentClass<Omit<PickerProps<Dayjs> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    YearPicker: import("./generatePicker/interface").PickerComponentClass<Omit<PickerProps<Dayjs> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    RangePicker: import("./generatePicker/interface").PickerComponentClass<BaseRangePickerProps<Dayjs> & {
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
    }, unknown>;
    TimePicker: import("./generatePicker/interface").PickerComponentClass<Omit<Omit<import("rc-picker/lib/Picker").PickerTimeProps<Dayjs>, "locale" | "generateConfig" | "hideHeader" | "components"> & {
        locale?: import("./generatePicker").PickerLocale | undefined;
        size?: import("../button").ButtonSize;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
    } & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    QuarterPicker: import("./generatePicker/interface").PickerComponentClass<Omit<Omit<import("rc-picker/lib/Picker").PickerTimeProps<Dayjs>, "locale" | "generateConfig" | "hideHeader" | "components"> & {
        locale?: import("./generatePicker").PickerLocale | undefined;
        size?: import("../button").ButtonSize;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
    } & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
} & {
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
    _InternalRangePanelDoNotUseOrYouWillBeFired: typeof PureRangePanel;
};
export default _default;

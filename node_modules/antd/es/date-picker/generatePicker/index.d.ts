import type { GenerateConfig } from 'rc-picker/lib/generate/index';
import type { Locale as RcPickerLocale, PickerMode } from 'rc-picker/lib/interface';
import type { SharedTimeProps } from 'rc-picker/lib/panels/TimePanel';
import type { PickerBaseProps as RCPickerBaseProps, PickerDateProps as RCPickerDateProps, PickerTimeProps as RCPickerTimeProps } from 'rc-picker/lib/Picker';
import type { RangePickerBaseProps as RCRangePickerBaseProps, RangePickerDateProps as RCRangePickerDateProps, RangePickerTimeProps as RCRangePickerTimeProps } from 'rc-picker/lib/RangePicker';
import type { SizeType } from '../../config-provider/SizeContext';
import type { TimePickerLocale } from '../../time-picker';
import type { InputStatus } from '../../_util/statusUtils';
import PickerButton from '../PickerButton';
export declare const Components: {
    button: typeof PickerButton;
};
export declare function getTimeProps<DateType, DisabledTime>(props: {
    format?: string;
    picker?: PickerMode;
} & Omit<SharedTimeProps<DateType>, 'disabledTime'> & {
    disabledTime?: DisabledTime;
}): {
    format?: string | undefined;
    picker?: PickerMode | undefined;
    defaultValue?: DateType | undefined;
    showNow?: boolean | undefined;
    showHour?: boolean | undefined;
    showMinute?: boolean | undefined;
    showSecond?: boolean | undefined;
    use12Hours?: boolean | undefined;
    hourStep?: import("rc-picker/lib/interface").IntRange<1, 23> | undefined;
    minuteStep?: import("rc-picker/lib/interface").IntRange<1, 59> | undefined;
    secondStep?: import("rc-picker/lib/interface").IntRange<1, 59> | undefined;
    hideDisabledOptions?: boolean | undefined;
    disabledHours?: (() => number[]) | undefined;
    disabledMinutes?: ((hour: number) => number[]) | undefined;
    disabledSeconds?: ((hour: number, minute: number) => number[]) | undefined;
    disabledTime?: DisabledTime | undefined;
} | {
    showTime: {
        format?: string | undefined;
        picker?: PickerMode | undefined;
        defaultValue?: DateType | undefined;
        showNow?: boolean | undefined;
        showHour?: boolean | undefined;
        showMinute?: boolean | undefined;
        showSecond?: boolean | undefined;
        use12Hours?: boolean | undefined;
        hourStep?: import("rc-picker/lib/interface").IntRange<1, 23> | undefined;
        minuteStep?: import("rc-picker/lib/interface").IntRange<1, 59> | undefined;
        secondStep?: import("rc-picker/lib/interface").IntRange<1, 59> | undefined;
        hideDisabledOptions?: boolean | undefined;
        disabledHours?: (() => number[]) | undefined;
        disabledMinutes?: ((hour: number) => number[]) | undefined;
        disabledSeconds?: ((hour: number, minute: number) => number[]) | undefined;
        disabledTime?: DisabledTime | undefined;
    };
};
declare const DataPickerPlacements: readonly ["bottomLeft", "bottomRight", "topLeft", "topRight"];
type DataPickerPlacement = typeof DataPickerPlacements[number];
type InjectDefaultProps<Props> = Omit<Props, 'locale' | 'generateConfig' | 'hideHeader' | 'components'> & {
    locale?: PickerLocale;
    size?: SizeType;
    placement?: DataPickerPlacement;
    bordered?: boolean;
    status?: InputStatus;
};
export type PickerLocale = {
    lang: RcPickerLocale & AdditionalPickerLocaleLangProps;
    timePickerLocale: TimePickerLocale;
} & AdditionalPickerLocaleProps;
export type AdditionalPickerLocaleProps = {
    dateFormat?: string;
    dateTimeFormat?: string;
    weekFormat?: string;
    monthFormat?: string;
};
export type AdditionalPickerLocaleLangProps = {
    placeholder: string;
    yearPlaceholder?: string;
    quarterPlaceholder?: string;
    monthPlaceholder?: string;
    weekPlaceholder?: string;
    rangeYearPlaceholder?: [string, string];
    rangeQuarterPlaceholder?: [string, string];
    rangeMonthPlaceholder?: [string, string];
    rangeWeekPlaceholder?: [string, string];
    rangePlaceholder?: [string, string];
};
export type PickerBaseProps<DateType> = InjectDefaultProps<RCPickerBaseProps<DateType>>;
export type PickerDateProps<DateType> = InjectDefaultProps<RCPickerDateProps<DateType>>;
export type PickerTimeProps<DateType> = InjectDefaultProps<RCPickerTimeProps<DateType>>;
export type PickerProps<DateType> = PickerBaseProps<DateType> | PickerDateProps<DateType> | PickerTimeProps<DateType>;
export type RangePickerBaseProps<DateType> = InjectDefaultProps<RCRangePickerBaseProps<DateType>>;
export type RangePickerDateProps<DateType> = InjectDefaultProps<RCRangePickerDateProps<DateType>>;
export type RangePickerTimeProps<DateType> = InjectDefaultProps<RCRangePickerTimeProps<DateType>>;
export type RangePickerProps<DateType> = RangePickerBaseProps<DateType> | RangePickerDateProps<DateType> | RangePickerTimeProps<DateType>;
declare function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>): import("./interface").PickerComponentClass<PickerProps<DateType> & {
    status?: "" | "warning" | "error" | undefined;
    hashId?: string | undefined;
    popupClassName?: string | undefined;
    rootClassName?: string | undefined;
}, unknown> & {
    WeekPicker: import("./interface").PickerComponentClass<Omit<PickerProps<DateType> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    MonthPicker: import("./interface").PickerComponentClass<Omit<PickerProps<DateType> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    YearPicker: import("./interface").PickerComponentClass<Omit<PickerProps<DateType> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    RangePicker: import("./interface").PickerComponentClass<RangePickerProps<DateType> & {
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
    }, unknown>;
    TimePicker: import("./interface").PickerComponentClass<Omit<Omit<RCPickerTimeProps<DateType>, "locale" | "generateConfig" | "hideHeader" | "components"> & {
        locale?: PickerLocale | undefined;
        size?: SizeType;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
    } & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    QuarterPicker: import("./interface").PickerComponentClass<Omit<Omit<RCPickerTimeProps<DateType>, "locale" | "generateConfig" | "hideHeader" | "components"> & {
        locale?: PickerLocale | undefined;
        size?: SizeType;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
    } & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
};
export default generatePicker;

import type { GenerateConfig } from 'rc-picker/lib/generate/index';
import type { PickerProps } from '.';
import type { PickerComponentClass } from './interface';
export default function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>): {
    DatePicker: PickerComponentClass<PickerProps<DateType> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, unknown>;
    WeekPicker: PickerComponentClass<Omit<PickerProps<DateType> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    MonthPicker: PickerComponentClass<Omit<PickerProps<DateType> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    YearPicker: PickerComponentClass<Omit<PickerProps<DateType> & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    TimePicker: PickerComponentClass<Omit<Omit<import("rc-picker/lib/Picker").PickerTimeProps<DateType>, "locale" | "generateConfig" | "hideHeader" | "components"> & {
        locale?: import(".").PickerLocale | undefined;
        size?: import("../../config-provider/SizeContext").SizeType;
        placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
    } & {
        status?: "" | "warning" | "error" | undefined;
        hashId?: string | undefined;
        popupClassName?: string | undefined;
        rootClassName?: string | undefined;
    }, "picker">, unknown>;
    QuarterPicker: PickerComponentClass<Omit<Omit<import("rc-picker/lib/Picker").PickerTimeProps<DateType>, "locale" | "generateConfig" | "hideHeader" | "components"> & {
        locale?: import(".").PickerLocale | undefined;
        size?: import("../../config-provider/SizeContext").SizeType;
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

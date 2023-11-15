import type { CSSProperties } from 'react';
import type { FullToken, GenerateStyle } from '../../theme/internal';
export interface ComponentToken {
    /**
     * @desc 默认内间距
     * @descEN Default padding
     */
    defaultPadding: CSSProperties['padding'];
    /**
     * @desc 带有描述的内间距
     * @descEN Padding with description
     */
    withDescriptionPadding: CSSProperties['padding'];
    /**
     * @desc 带有描述时的图标尺寸
     * @descEN Icon size with description
     */
    withDescriptionIconSize: number;
}
type AlertToken = FullToken<'Alert'> & {};
export declare const genBaseStyle: GenerateStyle<AlertToken>;
export declare const genTypeStyle: GenerateStyle<AlertToken>;
export declare const genActionStyle: GenerateStyle<AlertToken>;
export declare const genAlertStyle: GenerateStyle<AlertToken>;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;

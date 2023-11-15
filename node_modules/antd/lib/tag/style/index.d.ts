import type React from 'react';
import type { GlobalToken } from '../../theme';
import type { FullToken } from '../../theme/internal';
import type { GenStyleFn } from '../../theme/util/genComponentStyleHook';
export interface ComponentToken {
    /**
     * @desc 默认背景色
     * @descEN Default background color
     */
    defaultBg: string;
    /**
     * @desc 默认文字颜色
     * @descEN Default text color
     */
    defaultColor: string;
}
export interface TagToken extends FullToken<'Tag'> {
    tagFontSize: number;
    tagLineHeight: React.CSSProperties['lineHeight'];
    tagIconSize: number;
    tagPaddingHorizontal: number;
    tagBorderlessBg: string;
}
export declare const prepareToken: (token: Parameters<GenStyleFn<'Tag'>>[0]) => TagToken;
export declare const prepareCommonToken: (token: GlobalToken) => ComponentToken;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;

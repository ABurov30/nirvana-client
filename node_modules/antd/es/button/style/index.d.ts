import type { CSSProperties } from 'react';
import type { GlobalToken } from '../../theme';
import type { FullToken } from '../../theme/internal';
import type { GenStyleFn } from '../../theme/util/genComponentStyleHook';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc 文字字重
     * @descEN Font weight of text
     */
    fontWeight: CSSProperties['fontWeight'];
    /**
     * @desc 默认按钮阴影
     * @descEN Shadow of default button
     */
    defaultShadow: string;
    /**
     * @desc 主要按钮阴影
     * @descEN Shadow of primary button
     */
    primaryShadow: string;
    /**
     * @desc 危险按钮阴影
     * @descEN Shadow of danger button
     */
    dangerShadow: string;
    /**
     * @desc 主要按钮文本颜色
     * @descEN Text color of primary button
     */
    primaryColor: string;
    /**
     * @desc 默认按钮文本颜色
     * @descEN Text color of default button
     */
    defaultColor: string;
    /**
     * @desc 默认按钮背景色
     * @descEN Background color of default button
     */
    defaultBg: string;
    /**
     * @desc 默认按钮边框颜色
     * @descEN Border color of default button
     */
    defaultBorderColor: string;
    /**
     * @desc 危险按钮文本颜色
     * @descEN Text color of danger button
     */
    dangerColor: string;
    /**
     * @desc 禁用状态边框颜色
     * @descEN Border color of disabled button
     */
    borderColorDisabled: string;
    /**
     * @desc 默认幽灵按钮文本颜色
     * @descEN Text color of default ghost button
     */
    defaultGhostColor: string;
    /**
     * @desc 幽灵按钮背景色
     * @descEN Background color of ghost button
     */
    ghostBg: string;
    /**
     * @desc 默认幽灵按钮边框颜色
     * @descEN Border color of default ghost button
     */
    defaultGhostBorderColor: string;
    /**
     * @desc 按钮横向内间距
     * @descEN Horizontal padding of button
     */
    paddingInline: CSSProperties['paddingInline'];
    /**
     * @desc 大号按钮横向内间距
     * @descEN Horizontal padding of large button
     */
    paddingInlineLG: CSSProperties['paddingInline'];
    /**
     * @desc 小号按钮横向内间距
     * @descEN Horizontal padding of small button
     */
    paddingInlineSM: CSSProperties['paddingInline'];
    /**
     * @desc 只有图标的按钮图标尺寸
     * @descEN Icon size of button which only contains icon
     */
    onlyIconSize: number;
    /**
     * @desc 大号只有图标的按钮图标尺寸
     * @descEN Icon size of large button which only contains icon
     */
    onlyIconSizeLG: number;
    /**
     * @desc 小号只有图标的按钮图标尺寸
     * @descEN Icon size of small button which only contains icon
     */
    onlyIconSizeSM: number;
    /**
     * @desc 按钮组边框颜色
     * @descEN Border color of button group
     */
    groupBorderColor: string;
    /**
     * @desc 链接按钮悬浮态背景色
     * @descEN Background color of link button when hover
     */
    linkHoverBg: string;
    /**
     * @desc 文本按钮悬浮态背景色
     * @descEN Background color of text button when hover
     */
    textHoverBg: string;
    /**
     * @desc 按钮内容字体大小
     * @descEN Font size of button content
     */
    contentFontSize: number;
    /**
     * @desc 大号按钮内容字体大小
     * @descEN Font size of large button content
     */
    contentFontSizeLG: number;
    /**
     * @desc 小号按钮内容字体大小
     * @descEN Font size of small button content
     */
    contentFontSizeSM: number;
}
export interface ButtonToken extends FullToken<'Button'> {
    buttonPaddingHorizontal: CSSProperties['paddingInline'];
    buttonIconOnlyFontSize: number;
}
export declare const prepareToken: (token: Parameters<GenStyleFn<'Button'>>[0]) => ButtonToken;
export declare const prepareComponentToken: (token: GlobalToken) => {
    fontWeight: number;
    defaultShadow: string;
    primaryShadow: string;
    dangerShadow: string;
    primaryColor: string;
    dangerColor: string;
    borderColorDisabled: string;
    defaultGhostColor: string;
    ghostBg: string;
    defaultGhostBorderColor: string;
    paddingInline: number;
    paddingInlineLG: number;
    paddingInlineSM: number;
    onlyIconSize: number;
    onlyIconSizeSM: number;
    onlyIconSizeLG: number;
    groupBorderColor: string;
    linkHoverBg: string;
    textHoverBg: string;
    defaultColor: string;
    defaultBg: string;
    defaultBorderColor: string;
    defaultBorderColorDisabled: string;
    contentFontSize: number;
    contentFontSizeSM: number;
    contentFontSizeLG: number;
};
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;

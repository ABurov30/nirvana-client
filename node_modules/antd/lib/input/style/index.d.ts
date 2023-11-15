import type { CSSObject } from '@ant-design/cssinjs';
import type { GlobalToken } from '../../theme/interface';
import type { FullToken } from '../../theme/internal';
export interface SharedComponentToken {
    /**
     * @desc 输入框横向内边距
     * @descEN Horizontal padding of input
     */
    paddingInline: number;
    /**
     * @desc 小号输入框横向内边距
     * @descEN Horizontal padding of small input
     */
    paddingInlineSM: number;
    /**
     * @desc 大号输入框横向内边距
     * @descEN Horizontal padding of large input
     */
    paddingInlineLG: number;
    /**
     * @desc 输入框纵向内边距
     * @descEN Vertical padding of input
     */
    paddingBlock: number;
    /**
     * @desc 小号输入框纵向内边距
     * @descEN Vertical padding of small input
     */
    paddingBlockSM: number;
    /**
     * @desc 大号输入框纵向内边距
     * @descEN Vertical padding of large input
     */
    paddingBlockLG: number;
    /**
     * @desc 前/后置标签背景色
     * @descEN Background color of addon
     */
    addonBg: string;
    /**
     * @desc 悬浮态边框色
     * @descEN Hover border color
     */
    hoverBorderColor: string;
    /**
     * @desc 激活态边框色
     * @descEN Active border color
     */
    activeBorderColor: string;
    /**
     * @desc 激活态阴影
     * @descEN Box-shadow when active
     */
    activeShadow: string;
    /**
     * @desc 错误状态时激活态阴影
     * @descEN Box-shadow when active in error status
     */
    errorActiveShadow: string;
    /**
     * @desc 警告状态时激活态阴影
     * @descEN Box-shadow when active in warning status
     */
    warningActiveShadow: string;
    /**
     * @desc 输入框hover状态时背景颜色
     * @descEN Background color when the input box hovers
     */
    hoverBg: string;
    /**
     * @desc 输入框激活状态时背景颜色
     * @descEN Background color when the input box is activated
     */
    activeBg: string;
}
export interface ComponentToken extends SharedComponentToken {
}
export interface SharedInputToken {
    inputAffixPadding: number;
}
interface InputToken extends FullToken<'Input'>, SharedInputToken {
}
export declare const genPlaceholderStyle: (color: string) => CSSObject;
export declare const genHoverStyle: (token: InputToken) => CSSObject;
export declare const genActiveStyle: (token: InputToken) => {
    borderColor: string;
    boxShadow: string;
    outline: number;
    backgroundColor: string;
};
export declare const genDisabledStyle: (token: InputToken) => CSSObject;
export declare const genInputSmallStyle: (token: InputToken) => CSSObject;
export declare const genStatusStyle: (token: InputToken, parentCls: string) => CSSObject;
export declare const genBasicInputStyle: (token: InputToken) => CSSObject;
export declare const genInputGroupStyle: (token: InputToken) => CSSObject;
export declare function initInputToken(token: GlobalToken): SharedInputToken;
export declare const initComponentToken: (token: GlobalToken) => SharedComponentToken;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;

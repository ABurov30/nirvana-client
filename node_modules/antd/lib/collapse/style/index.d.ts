import type { CSSProperties } from 'react';
import type { FullToken, GenerateStyle } from '../../theme/internal';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc 折叠面板头部内边距
     * @descEN Padding of header
     */
    headerPadding: CSSProperties['padding'];
    /**
     * @desc 折叠面板头部背景
     * @descEN Background of header
     */
    headerBg: string;
    /**
     * @desc 折叠面板内容内部编辑
     * @descEN Padding of content
     */
    contentPadding: CSSProperties['padding'];
    /**
     * @desc 折叠面板内容背景
     * @descEN Background of content
     */
    contentBg: string;
}
type CollapseToken = FullToken<'Collapse'> & {
    collapseHeaderPaddingSM: string;
    collapseHeaderPaddingLG: string;
    collapsePanelBorderRadius: number;
};
export declare const genBaseStyle: GenerateStyle<CollapseToken>;
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;

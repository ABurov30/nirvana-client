import type { SharedComponentToken } from '../../input/style';
export interface ComponentToken extends SharedComponentToken {
    /**
     * @desc 弹层 z-index
     * @descEN z-index of popup
     */
    zIndexPopup: number;
    /**
     * @desc 弹层高度
     * @descEN Height of popup
     */
    dropdownHeight: number;
    /**
     * @desc 菜单项高度
     * @descEN Height of menu item
     */
    controlItemWidth: number;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;

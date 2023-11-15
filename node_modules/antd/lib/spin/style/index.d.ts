export interface ComponentToken {
    /**
     * @desc 内容区域高度
     * @descEN Height of content area
     */
    contentHeight: number;
    /**
     * @desc 加载图标尺寸
     * @descEN Loading icon size
     */
    dotSize: number;
    /**
     * @desc 小号加载图标尺寸
     * @descEN Small loading icon size
     */
    dotSizeSM: number;
    /**
     * @desc 大号加载图标尺寸
     * @descEN Large loading icon size
     */
    dotSizeLG: number;
}
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;

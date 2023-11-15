import type { TreeSharedToken } from '../../tree/style';
export interface ComponentToken extends TreeSharedToken {
}
export default function useTreeSelectStyle(prefixCls: string, treePrefixCls: string): import("../../theme/interface").UseComponentStyleResult;

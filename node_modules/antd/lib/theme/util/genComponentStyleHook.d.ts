import { type ComponentType } from 'react';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import type { ComponentTokenMap, GlobalToken, OverrideToken, UseComponentStyleResult } from '../interface';
export type OverrideTokenWithoutDerivative = ComponentTokenMap;
export type OverrideComponent = keyof OverrideTokenWithoutDerivative;
export type GlobalTokenWithComponent<ComponentName extends OverrideComponent> = GlobalToken & ComponentTokenMap[ComponentName];
type ComponentToken<ComponentName extends OverrideComponent> = Exclude<OverrideToken[ComponentName], undefined>;
type ComponentTokenKey<ComponentName extends OverrideComponent> = keyof ComponentToken<ComponentName>;
export interface StyleInfo<ComponentName extends OverrideComponent> {
    hashId: string;
    prefixCls: string;
    rootPrefixCls: string;
    iconPrefixCls: string;
    overrideComponentToken: ComponentTokenMap[ComponentName];
}
export type TokenWithCommonCls<T> = T & {
    /** Wrap component class with `.` prefix */
    componentCls: string;
    /** Origin prefix which do not have `.` prefix */
    prefixCls: string;
    /** Wrap icon class with `.` prefix */
    iconCls: string;
    /** Wrap ant prefixCls class with `.` prefix */
    antCls: string;
};
export type FullToken<ComponentName extends OverrideComponent> = TokenWithCommonCls<GlobalTokenWithComponent<ComponentName>>;
export type GenStyleFn<ComponentName extends OverrideComponent> = (token: FullToken<ComponentName>, info: StyleInfo<ComponentName>) => CSSInterpolation;
export default function genComponentStyleHook<ComponentName extends OverrideComponent>(componentName: ComponentName | [ComponentName, string], styleFn: GenStyleFn<ComponentName>, getDefaultToken?: null | OverrideTokenWithoutDerivative[ComponentName] | ((token: GlobalToken) => OverrideTokenWithoutDerivative[ComponentName]), options?: {
    resetStyle?: boolean;
    deprecatedTokens?: [ComponentTokenKey<ComponentName>, ComponentTokenKey<ComponentName>][];
    /**
     * Only use component style in client side. Ignore in SSR.
     */
    clientOnly?: boolean;
    /**
     * Set order of component style. Default is -999.
     */
    order?: number;
}): (prefixCls: string) => UseComponentStyleResult;
export interface SubStyleComponentProps {
    prefixCls: string;
}
type RestParameters<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;
export declare const genSubStyleComponent: <ComponentName extends OverrideComponent>(componentName: [ComponentName, string], ...args: RestParameters<Parameters<typeof genComponentStyleHook<ComponentName>>>) => ComponentType<SubStyleComponentProps>;
export {};

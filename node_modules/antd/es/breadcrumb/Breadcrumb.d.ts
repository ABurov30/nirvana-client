import * as React from 'react';
import type { BreadcrumbItemProps } from './BreadcrumbItem';
export interface BreadcrumbItemType {
    key?: React.Key;
    /**
     * Different with `path`. Directly set the link of this item.
     */
    href?: string;
    /**
     * Different with `href`. It will concat all prev `path` to the current one.
     */
    path?: string;
    title?: React.ReactNode;
    breadcrumbName?: string;
    menu?: BreadcrumbItemProps['menu'];
    /** @deprecated Please use `menu` instead */
    overlay?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
    /** @deprecated Please use `menu` instead */
    children?: Omit<BreadcrumbItemType, 'children'>[];
}
export interface BreadcrumbSeparatorType {
    type: 'separator';
    separator?: React.ReactNode;
}
export type ItemType = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;
export type InternalRouteType = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;
export interface BreadcrumbProps {
    prefixCls?: string;
    params?: any;
    separator?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    rootClassName?: string;
    children?: React.ReactNode;
    /** @deprecated Please use `items` instead */
    routes?: ItemType[];
    items?: ItemType[];
    itemRender?: (route: ItemType, params: any, routes: ItemType[], paths: string[]) => React.ReactNode;
}
declare const Breadcrumb: {
    (props: BreadcrumbProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Item: {
        (props: BreadcrumbItemProps): JSX.Element;
        __ANT_BREADCRUMB_ITEM: boolean;
    };
    Separator: React.FC<{
        children?: React.ReactNode;
    }> & {
        __ANT_BREADCRUMB_SEPARATOR: boolean;
    };
    displayName: string;
};
export default Breadcrumb;

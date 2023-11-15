import type { DrawerProps as RCDrawerProps } from 'rc-drawer';
import * as React from 'react';
export interface DrawerClassNames {
    header?: string;
    body?: string;
    footer?: string;
    mask?: string;
    content?: string;
}
export interface DrawerStyles {
    header?: React.CSSProperties;
    body?: React.CSSProperties;
    footer?: React.CSSProperties;
    mask?: React.CSSProperties;
    content?: React.CSSProperties;
}
export interface DrawerPanelProps {
    prefixCls: string;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    extra?: React.ReactNode;
    /**
     * Recommend to use closeIcon instead
     *
     * e.g.
     *
     * `<Drawer closeIcon={false} />`
     */
    closable?: boolean;
    closeIcon?: boolean | React.ReactNode;
    onClose?: RCDrawerProps['onClose'];
    /** Wrapper dom node style of header and body */
    drawerStyle?: React.CSSProperties;
    /** @deprecated Please use `styles.header` instead */
    headerStyle?: React.CSSProperties;
    /** @deprecated Please use `styles.body` instead */
    bodyStyle?: React.CSSProperties;
    /** @deprecated Please use `styles.footer` instead */
    footerStyle?: React.CSSProperties;
    children?: React.ReactNode;
    classNames?: DrawerClassNames;
    styles?: DrawerStyles;
}
declare const DrawerPanel: React.FC<DrawerPanelProps>;
export default DrawerPanel;

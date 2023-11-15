import * as React from 'react';
import type { TabNavListProps } from '.';
export type TabNavListWrapperProps = Required<Omit<TabNavListProps, 'children' | 'className'>> & TabNavListProps;
export default function TabNavListWrapper({ renderTabBar, ...restProps }: TabNavListWrapperProps): React.JSX.Element;

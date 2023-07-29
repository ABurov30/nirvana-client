import * as React from 'react';
import type { NamePath, StoreValue, ValidatorRule, Meta } from './interface';
export interface ListField {
    name: number;
    key: number;
    isListField: boolean;
}
export interface ListOperations {
    add: (defaultValue?: StoreValue, index?: number) => void;
    remove: (index: number | number[]) => void;
    move: (from: number, to: number) => void;
}
export interface ListProps {
    name: NamePath;
    rules?: ValidatorRule[];
    validateTrigger?: string | string[] | false;
    initialValue?: any[];
    children?: (fields: ListField[], operations: ListOperations, meta: Meta) => JSX.Element | React.ReactNode;
    /** @private Passed by Form.List props. Do not use since it will break by path check. */
    isListField?: boolean;
}
declare const List: React.FunctionComponent<ListProps>;
export default List;

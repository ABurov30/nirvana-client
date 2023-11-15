"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCellProps = getCellProps;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _Cell = _interopRequireDefault(require("../Cell"));
var _TableContext = require("../context/TableContext");
var _useRenderTimes = _interopRequireDefault(require("../hooks/useRenderTimes"));
var _useRowInfo = _interopRequireDefault(require("../hooks/useRowInfo"));
var _ExpandedRow = _interopRequireDefault(require("./ExpandedRow"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// ==================================================================================
// ==                                 getCellProps                                 ==
// ==================================================================================
function getCellProps(rowInfo, column, colIndex, indent, index) {
  var record = rowInfo.record,
    prefixCls = rowInfo.prefixCls,
    columnsKey = rowInfo.columnsKey,
    fixedInfoList = rowInfo.fixedInfoList,
    expandIconColumnIndex = rowInfo.expandIconColumnIndex,
    nestExpandable = rowInfo.nestExpandable,
    indentSize = rowInfo.indentSize,
    expandIcon = rowInfo.expandIcon,
    expanded = rowInfo.expanded,
    hasNestChildren = rowInfo.hasNestChildren,
    onTriggerExpand = rowInfo.onTriggerExpand;
  var key = columnsKey[colIndex];
  var fixedInfo = fixedInfoList[colIndex];

  // ============= Used for nest expandable =============
  var appendCellNode;
  if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
    appendCellNode = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        paddingLeft: "".concat(indentSize * indent, "px")
      },
      className: "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
    }), expandIcon({
      prefixCls: prefixCls,
      expanded: expanded,
      expandable: hasNestChildren,
      record: record,
      onExpand: onTriggerExpand
    }));
  }
  var additionalCellProps;
  if (column.onCell) {
    additionalCellProps = column.onCell(record, index);
  }
  return {
    key: key,
    fixedInfo: fixedInfo,
    appendCellNode: appendCellNode,
    additionalCellProps: additionalCellProps || {}
  };
}

// ==================================================================================
// ==                                 getCellProps                                 ==
// ==================================================================================
function BodyRow(props) {
  if (process.env.NODE_ENV !== 'production') {
    (0, _useRenderTimes.default)(props);
  }
  var className = props.className,
    style = props.style,
    record = props.record,
    index = props.index,
    renderIndex = props.renderIndex,
    rowKey = props.rowKey,
    _props$indent = props.indent,
    indent = _props$indent === void 0 ? 0 : _props$indent,
    RowComponent = props.rowComponent,
    cellComponent = props.cellComponent,
    scopeCellComponent = props.scopeCellComponent;
  var rowInfo = (0, _useRowInfo.default)(record, rowKey, index, indent);
  var prefixCls = rowInfo.prefixCls,
    flattenColumns = rowInfo.flattenColumns,
    expandedRowClassName = rowInfo.expandedRowClassName,
    expandedRowRender = rowInfo.expandedRowRender,
    rowProps = rowInfo.rowProps,
    expanded = rowInfo.expanded,
    rowSupportExpand = rowInfo.rowSupportExpand;

  // Force render expand row if expanded before
  var expandedRef = React.useRef(false);
  expandedRef.current || (expandedRef.current = expanded);
  if (process.env.NODE_ENV !== 'production') {
    (0, _useRenderTimes.default)(props);
  }

  // ======================== Base tr row ========================
  var baseRowNode = /*#__PURE__*/React.createElement(RowComponent, (0, _extends2.default)({}, rowProps, {
    "data-row-key": rowKey,
    className: (0, _classnames.default)(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), rowProps === null || rowProps === void 0 ? void 0 : rowProps.className),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), rowProps === null || rowProps === void 0 ? void 0 : rowProps.style)
  }), flattenColumns.map(function (column, colIndex) {
    var render = column.render,
      dataIndex = column.dataIndex,
      columnClassName = column.className;
    var _getCellProps = getCellProps(rowInfo, column, colIndex, indent, index),
      key = _getCellProps.key,
      fixedInfo = _getCellProps.fixedInfo,
      appendCellNode = _getCellProps.appendCellNode,
      additionalCellProps = _getCellProps.additionalCellProps;
    return /*#__PURE__*/React.createElement(_Cell.default, (0, _extends2.default)({
      className: columnClassName,
      ellipsis: column.ellipsis,
      align: column.align,
      scope: column.rowScope,
      component: column.rowScope ? scopeCellComponent : cellComponent,
      prefixCls: prefixCls,
      key: key,
      record: record,
      index: index,
      renderIndex: renderIndex,
      dataIndex: dataIndex,
      render: render,
      shouldCellUpdate: column.shouldCellUpdate
    }, fixedInfo, {
      appendNode: appendCellNode,
      additionalProps: additionalCellProps
    }));
  }));

  // ======================== Expand Row =========================
  var expandRowNode;
  if (rowSupportExpand && (expandedRef.current || expanded)) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
    expandRowNode = /*#__PURE__*/React.createElement(_ExpandedRow.default, {
      expanded: expanded,
      className: (0, _classnames.default)("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
      prefixCls: prefixCls,
      component: RowComponent,
      cellComponent: cellComponent,
      colSpan: flattenColumns.length,
      isEmpty: false
    }, expandContent);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, baseRowNode, expandRowNode);
}
BodyRow.displayName = 'BodyRow';
var _default = (0, _TableContext.responseImmutable)(BodyRow);
exports.default = _default;
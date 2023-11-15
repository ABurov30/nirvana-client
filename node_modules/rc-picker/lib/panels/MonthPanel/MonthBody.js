"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MONTH_COL_COUNT = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));
var _RangeContext = _interopRequireDefault(require("../../RangeContext"));
var _dateUtil = require("../../utils/dateUtil");
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var MONTH_COL_COUNT = exports.MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;
function MonthBody(props) {
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig,
    cellRender = props.cellRender;
  var _React$useContext = React.useContext(_RangeContext.default),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = (0, _useCellClassName.default)({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return (0, _dateUtil.isSameMonth)(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset);
    }
  });
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var baseMonth = generateConfig.setMonth(viewDate, 0);
  var getCellNode = cellRender ? function (date, wrapperNode) {
    return cellRender(date, {
      originNode: wrapperNode,
      locale: locale,
      today: generateConfig.getNow(),
      type: 'month'
    });
  } : undefined;
  return /*#__PURE__*/React.createElement(_PanelBody.default, (0, _extends2.default)({}, props, {
    rowNum: MONTH_ROW_COUNT,
    colNum: MONTH_COL_COUNT,
    baseDate: baseMonth,
    getCellNode: getCellNode,
    getCellText: function getCellText(date) {
      return locale.monthFormat ? (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: locale.monthFormat,
        generateConfig: generateConfig
      }) : monthsLocale[generateConfig.getMonth(date)];
    },
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addMonth,
    titleCell: function titleCell(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: 'YYYY-MM',
        generateConfig: generateConfig
      });
    }
  }));
}
var _default = exports.default = MonthBody;
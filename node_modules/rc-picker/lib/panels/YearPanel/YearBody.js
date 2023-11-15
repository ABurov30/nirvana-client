"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YEAR_COL_COUNT = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _constant = require("./constant");
var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));
var _dateUtil = require("../../utils/dateUtil");
var _RangeContext = _interopRequireDefault(require("../../RangeContext"));
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var YEAR_COL_COUNT = exports.YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;
function YearBody(props) {
  var prefixCls = props.prefixCls,
    value = props.value,
    viewDate = props.viewDate,
    locale = props.locale,
    generateConfig = props.generateConfig,
    cellRender = props.cellRender;
  var _React$useContext = React.useContext(_RangeContext.default),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var yearPrefixCls = "".concat(prefixCls, "-cell");

  // =============================== Year ===============================
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / _constant.YEAR_DECADE_COUNT) * _constant.YEAR_DECADE_COUNT;
  var endYear = startYear + _constant.YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - _constant.YEAR_DECADE_COUNT) / 2));
  var today = generateConfig.getNow();
  var isInView = function isInView(date) {
    var currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  var getCellClassName = (0, _useCellClassName.default)({
    cellPrefixCls: yearPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return (0, _dateUtil.isSameYear)(generateConfig, current, target);
    },
    isInView: isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addYear(date, offset);
    }
  });
  var getCellNode = cellRender ? function (date, wrapperNode) {
    return cellRender(date, {
      originNode: wrapperNode,
      today: today,
      type: 'year',
      locale: locale
    });
  } : undefined;
  return /*#__PURE__*/React.createElement(_PanelBody.default, (0, _extends2.default)({}, props, {
    rowNum: YEAR_ROW_COUNT,
    colNum: YEAR_COL_COUNT,
    baseDate: baseYear,
    getCellNode: getCellNode,
    getCellText: generateConfig.getYear,
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addYear,
    titleCell: function titleCell(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: 'YYYY',
        generateConfig: generateConfig
      });
    }
  }));
}
var _default = exports.default = YearBody;
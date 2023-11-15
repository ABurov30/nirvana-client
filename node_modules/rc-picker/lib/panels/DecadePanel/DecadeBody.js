"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DECADE_COL_COUNT = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _constant = require("./constant");
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var DECADE_COL_COUNT = exports.DECADE_COL_COUNT = 3;
var DECADE_ROW_COUNT = 4;
function DecadeBody(props) {
  var DECADE_UNIT_DIFF_DES = _constant.DECADE_UNIT_DIFF - 1;
  var prefixCls = props.prefixCls,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig,
    cellRender = props.cellRender,
    locale = props.locale;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var yearNumber = generateConfig.getYear(viewDate);
  var decadeYearNumber = Math.floor(yearNumber / _constant.DECADE_UNIT_DIFF) * _constant.DECADE_UNIT_DIFF;
  var startDecadeYear = Math.floor(yearNumber / _constant.DECADE_DISTANCE_COUNT) * _constant.DECADE_DISTANCE_COUNT;
  var endDecadeYear = startDecadeYear + _constant.DECADE_DISTANCE_COUNT - 1;
  var baseDecadeYear = generateConfig.setYear(viewDate, startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * _constant.DECADE_UNIT_DIFF - _constant.DECADE_DISTANCE_COUNT) / 2));
  var getCellClassName = function getCellClassName(date) {
    var _ref;
    var startDecadeNumber = generateConfig.getYear(date);
    var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(cellPrefixCls, "-in-view"), startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear), (0, _defineProperty2.default)(_ref, "".concat(cellPrefixCls, "-selected"), startDecadeNumber === decadeYearNumber), _ref;
  };
  var getCellNode = cellRender ? function (date, wrapperNode) {
    return cellRender(date, {
      originNode: wrapperNode,
      today: generateConfig.getNow(),
      type: 'decade',
      locale: locale
    });
  } : undefined;
  return /*#__PURE__*/React.createElement(_PanelBody.default, (0, _extends2.default)({}, props, {
    rowNum: DECADE_ROW_COUNT,
    colNum: DECADE_COL_COUNT,
    baseDate: baseDecadeYear,
    getCellNode: getCellNode,
    getCellText: function getCellText(date) {
      var startDecadeNumber = generateConfig.getYear(date);
      return "".concat(startDecadeNumber, "-").concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
    },
    getCellClassName: getCellClassName,
    getCellDate: function getCellDate(date, offset) {
      return generateConfig.addYear(date, offset * _constant.DECADE_UNIT_DIFF);
    }
  }));
}
var _default = exports.default = DecadeBody;
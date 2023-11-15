"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PanelBody;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _PanelContext = _interopRequireDefault(require("../PanelContext"));
var _dateUtil = require("../utils/dateUtil");
var _timeUtil = require("../utils/timeUtil");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function PanelBody(_ref) {
  var prefixCls = _ref.prefixCls,
    disabledDate = _ref.disabledDate,
    onSelect = _ref.onSelect,
    picker = _ref.picker,
    rowNum = _ref.rowNum,
    colNum = _ref.colNum,
    prefixColumn = _ref.prefixColumn,
    rowClassName = _ref.rowClassName,
    baseDate = _ref.baseDate,
    getCellClassName = _ref.getCellClassName,
    getCellText = _ref.getCellText,
    getCellNode = _ref.getCellNode,
    getCellDate = _ref.getCellDate,
    generateConfig = _ref.generateConfig,
    titleCell = _ref.titleCell,
    headerCells = _ref.headerCells;
  var _React$useContext = React.useContext(_PanelContext.default),
    onDateMouseEnter = _React$useContext.onDateMouseEnter,
    onDateMouseLeave = _React$useContext.onDateMouseLeave,
    mode = _React$useContext.mode;
  var cellPrefixCls = "".concat(prefixCls, "-cell");

  // =============================== Body ===============================
  var rows = [];
  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;
    var _loop = function _loop() {
      var _objectSpread2;
      var offset = i * colNum + j;
      var currentDate = getCellDate(baseDate, offset);
      var disabled = (0, _dateUtil.getCellDateDisabled)({
        cellDate: currentDate,
        mode: mode,
        disabledDate: disabledDate,
        generateConfig: generateConfig
      });
      if (j === 0) {
        rowStartDate = currentDate;
        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }
      var title = titleCell && titleCell(currentDate);
      var inner = /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellPrefixCls, "-inner")
      }, getCellText(currentDate));
      row.push( /*#__PURE__*/React.createElement("td", {
        key: j,
        title: title,
        className: (0, _classnames.default)(cellPrefixCls, (0, _objectSpread3.default)((_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, "".concat(cellPrefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_objectSpread2, "".concat(cellPrefixCls, "-start"), getCellText(currentDate) === 1 || picker === 'year' && Number(title) % 10 === 0), (0, _defineProperty2.default)(_objectSpread2, "".concat(cellPrefixCls, "-end"), title === (0, _timeUtil.getLastDay)(generateConfig, currentDate) || picker === 'year' && Number(title) % 10 === 9), _objectSpread2), getCellClassName(currentDate))),
        onClick: function onClick() {
          if (!disabled) {
            onSelect(currentDate);
          }
        },
        onMouseEnter: function onMouseEnter() {
          if (!disabled && onDateMouseEnter) {
            onDateMouseEnter(currentDate);
          }
        },
        onMouseLeave: function onMouseLeave() {
          if (!disabled && onDateMouseLeave) {
            onDateMouseLeave(currentDate);
          }
        }
      }, getCellNode ? getCellNode(currentDate, inner) : inner));
    };
    for (var j = 0; j < colNum; j += 1) {
      _loop();
    }
    rows.push( /*#__PURE__*/React.createElement("tr", {
      key: i,
      className: rowClassName && rowClassName(rowStartDate)
    }, row));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-body")
  }, /*#__PURE__*/React.createElement("table", {
    className: "".concat(prefixCls, "-content")
  }, headerCells && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headerCells)), /*#__PURE__*/React.createElement("tbody", null, rows)));
}
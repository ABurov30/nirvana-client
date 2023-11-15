"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRangeDisabled;
var React = _interopRequireWildcard(require("react"));
var _dateUtil = require("../utils/dateUtil");
var _miscUtil = require("../utils/miscUtil");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function useRangeDisabled(_ref, firstTimeOpen) {
  var picker = _ref.picker,
    locale = _ref.locale,
    selectedValue = _ref.selectedValue,
    disabledDate = _ref.disabledDate,
    disabled = _ref.disabled,
    generateConfig = _ref.generateConfig;
  var startDate = (0, _miscUtil.getValue)(selectedValue, 0);
  var endDate = (0, _miscUtil.getValue)(selectedValue, 1);
  function weekFirstDate(date) {
    return generateConfig.locale.getWeekFirstDate(locale.locale, date);
  }
  function monthNumber(date) {
    var year = generateConfig.getYear(date);
    var month = generateConfig.getMonth(date);
    return year * 100 + month;
  }
  function quarterNumber(date) {
    var year = generateConfig.getYear(date);
    var quarter = (0, _dateUtil.getQuarter)(generateConfig, date);
    return year * 10 + quarter;
  }
  var disabledStartDate = React.useCallback(function (date) {
    if (disabled[0] || disabledDate && disabledDate(date)) {
      return true;
    }

    // Disabled range
    if (disabled[1] && endDate) {
      return !(0, _dateUtil.isSameDate)(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
    }

    // Disabled part
    if (!firstTimeOpen && endDate) {
      switch (picker) {
        case 'quarter':
          return quarterNumber(date) > quarterNumber(endDate);
        case 'month':
          return monthNumber(date) > monthNumber(endDate);
        case 'week':
          return weekFirstDate(date) > weekFirstDate(endDate);
        default:
          return !(0, _dateUtil.isSameDate)(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
      }
    }
    return false;
  }, [disabledDate, disabled[1], endDate, firstTimeOpen]);
  var disabledEndDate = React.useCallback(function (date) {
    if (disabled[1] || disabledDate && disabledDate(date)) {
      return true;
    }

    // Disabled range
    if (disabled[0] && startDate) {
      return !(0, _dateUtil.isSameDate)(generateConfig, date, endDate) && generateConfig.isAfter(startDate, date);
    }

    // Disabled part
    if (!firstTimeOpen && startDate) {
      switch (picker) {
        case 'quarter':
          return quarterNumber(date) < quarterNumber(startDate);
        case 'month':
          return monthNumber(date) < monthNumber(startDate);
        case 'week':
          return weekFirstDate(date) < weekFirstDate(startDate);
        default:
          return !(0, _dateUtil.isSameDate)(generateConfig, date, startDate) && generateConfig.isAfter(startDate, date);
      }
    }
    return false;
  }, [disabledDate, disabled[0], startDate, firstTimeOpen]);
  return [disabledStartDate, disabledEndDate];
}
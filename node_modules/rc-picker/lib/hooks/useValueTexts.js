"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useValueTexts;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useMemo3 = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));
var _isEqual = _interopRequireDefault(require("rc-util/lib/isEqual"));
var React = _interopRequireWildcard(require("react"));
var _dateUtil = require("../utils/dateUtil");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function useValueTexts(value, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  var _useMemo = (0, _useMemo3.default)(function () {
      if (!value) {
        return [[''], ''];
      }

      // We will convert data format back to first format
      var firstValueText = '';
      var fullValueTexts = [];
      for (var i = 0; i < formatList.length; i += 1) {
        var format = formatList[i];
        var formatStr = (0, _dateUtil.formatValue)(value, {
          generateConfig: generateConfig,
          locale: locale,
          format: format
        });
        fullValueTexts.push(formatStr);
        if (i === 0) {
          firstValueText = formatStr;
        }
      }
      return [fullValueTexts, firstValueText];
    }, [value, formatList, locale], function (prev, next) {
      return (
        // Not Same Date
        !(0, _dateUtil.isEqual)(generateConfig, prev[0], next[0]) ||
        // Not Same format
        !(0, _isEqual.default)(prev[1], next[1], true) ||
        // Not Same locale
        !(0, _isEqual.default)(prev[2], next[2], true)
      );
    }),
    _useMemo2 = (0, _slicedToArray2.default)(_useMemo, 2),
    texts = _useMemo2[0],
    text = _useMemo2[1];
  return React.useMemo(function () {
    return [texts, text];
  }, [texts.join(''), text]);
}
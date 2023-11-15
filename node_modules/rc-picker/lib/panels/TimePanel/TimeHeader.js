"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _Header = _interopRequireDefault(require("../Header"));
var _PanelContext = _interopRequireDefault(require("../../PanelContext"));
var _dateUtil = require("../../utils/dateUtil");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TimeHeader(props) {
  var _React$useContext = React.useContext(_PanelContext.default),
    hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value,
    format = props.format;
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /*#__PURE__*/React.createElement(_Header.default, {
    prefixCls: headerPrefixCls
  }, value ? (0, _dateUtil.formatValue)(value, {
    locale: locale,
    format: format,
    generateConfig: generateConfig
  }) : "\xA0");
}
var _default = exports.default = TimeHeader;
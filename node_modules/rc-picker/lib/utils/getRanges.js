"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRanges;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function getRanges(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$components = _ref.components,
    components = _ref$components === void 0 ? {} : _ref$components,
    needConfirmButton = _ref.needConfirmButton,
    onNow = _ref.onNow,
    onOk = _ref.onOk,
    okDisabled = _ref.okDisabled,
    showNow = _ref.showNow,
    locale = _ref.locale;
  var presetNode;
  var okNode;
  if (needConfirmButton) {
    var Button = components.button || 'button';
    if (onNow && showNow !== false) {
      presetNode = /*#__PURE__*/React.createElement("li", {
        className: "".concat(prefixCls, "-now")
      }, /*#__PURE__*/React.createElement("a", {
        className: "".concat(prefixCls, "-now-btn"),
        onClick: onNow
      }, locale.now));
    }
    okNode = needConfirmButton && /*#__PURE__*/React.createElement("li", {
      className: "".concat(prefixCls, "-ok")
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: okDisabled,
      onClick: onOk
    }, locale.ok));
  }
  if (!presetNode && !okNode) {
    return null;
  }
  return /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefixCls, "-ranges")
  }, presetNode, okNode);
}
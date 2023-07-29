"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genComponentStyleHook;
var _cssinjs = require("@ant-design/cssinjs");
var _react = require("react");
var _context = require("../../config-provider/context");
var _style = require("../../style");
var _internal = require("../internal");
function genComponentStyleHook(component, styleFn, getDefaultToken, options) {
  return prefixCls => {
    const [theme, token, hashId] = (0, _internal.useToken)();
    const {
      getPrefixCls,
      iconPrefixCls,
      csp
    } = (0, _react.useContext)(_context.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    // Shared config
    const sharedConfig = {
      theme,
      token,
      hashId,
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
    };
    // Generate style for all a tags in antd component.
    (0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      path: ['Shared', rootPrefixCls]
    }), () => [{
      // Link
      '&': (0, _style.genLinkStyle)(token)
    }]);
    return [(0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      path: [component, prefixCls, iconPrefixCls]
    }), () => {
      const {
        token: proxyToken,
        flush
      } = (0, _internal.statisticToken)(token);
      const defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = Object.assign(Object.assign({}, defaultComponentToken), token[component]);
      const componentCls = `.${prefixCls}`;
      const mergedToken = (0, _internal.mergeToken)(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls,
        overrideComponentToken: token[component]
      });
      flush(component, mergedComponentToken);
      return [(options === null || options === void 0 ? void 0 : options.resetStyle) === false ? null : (0, _style.genCommonStyle)(token, prefixCls), styleInterpolation];
    }), hashId];
  };
}
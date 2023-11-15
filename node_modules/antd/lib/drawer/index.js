"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcDrawer = _interopRequireDefault(require("rc-drawer"));
var _useZIndex = require("../_util/hooks/useZIndex");
var _motion = require("../_util/motion");
var _warning = require("../_util/warning");
var _configProvider = require("../config-provider");
var _context = require("../form/context");
var _Compact = require("../space/Compact");
var _context2 = require("../watermark/context");
var _DrawerPanel = _interopRequireDefault(require("./DrawerPanel"));
var _style = _interopRequireDefault(require("./style"));
var _zindexContext = _interopRequireDefault(require("../_util/zindexContext"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

// CSSINJS

const SizeTypes = ['default', 'large'];
const defaultPushState = {
  distance: 180
};
const Drawer = props => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  const {
      rootClassName,
      width,
      height,
      size = 'default',
      mask = true,
      push = defaultPushState,
      open,
      afterOpenChange,
      onClose,
      prefixCls: customizePrefixCls,
      getContainer: customizeGetContainer,
      style,
      className,
      // Deprecated
      visible,
      afterVisibleChange
    } = props,
    rest = __rest(props, ["rootClassName", "width", "height", "size", "mask", "push", "open", "afterOpenChange", "onClose", "prefixCls", "getContainer", "style", "className", "visible", "afterVisibleChange"]);
  const {
    getPopupContainer,
    getPrefixCls,
    direction,
    drawer
  } = React.useContext(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const getContainer =
  // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? () => getPopupContainer(document.body) : customizeGetContainer;
  const drawerClassName = (0, _classnames.default)({
    'no-mask': !mask,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, rootClassName, hashId);
  // ========================== Warning ===========================
  if (process.env.NODE_ENV !== 'production') {
    const warning = (0, _warning.devUseWarning)('Drawer');
    [['visible', 'open'], ['afterVisibleChange', 'afterOpenChange'], ['headerStyle', 'styles.header'], ['bodyStyle', 'styles.body'], ['footerStyle', 'styles.footer']].forEach(_ref => {
      let [deprecatedName, newName] = _ref;
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
    if (getContainer !== undefined && ((_a = props.style) === null || _a === void 0 ? void 0 : _a.position) === 'absolute') {
      process.env.NODE_ENV !== "production" ? warning(false, 'breaking', '`style` is replaced by `rootStyle` in v5. Please check that `position: absolute` is necessary.') : void 0;
    }
  }
  // ============================ Size ============================
  const mergedWidth = React.useMemo(() => width !== null && width !== void 0 ? width : size === 'large' ? 736 : 378, [width, size]);
  const mergedHeight = React.useMemo(() => height !== null && height !== void 0 ? height : size === 'large' ? 736 : 378, [height, size]);
  // =========================== Motion ===========================
  const maskMotion = {
    motionName: (0, _motion.getTransitionName)(prefixCls, 'mask-motion'),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
  };
  const panelMotion = motionPlacement => ({
    motionName: (0, _motion.getTransitionName)(prefixCls, `panel-motion-${motionPlacement}`),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
  });
  // ============================ Refs ============================
  // Select `ant-modal-content` by `panelRef`
  const panelRef = (0, _context2.usePanelRef)();
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0, _useZIndex.useZIndex)('Drawer', rest.zIndex);
  // =========================== Render ===========================
  return wrapSSR( /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
    status: true,
    override: true
  }, /*#__PURE__*/React.createElement(_zindexContext.default.Provider, {
    value: contextZIndex
  }, /*#__PURE__*/React.createElement(_rcDrawer.default, Object.assign({
    prefixCls: prefixCls,
    onClose: onClose,
    maskMotion: maskMotion,
    motion: panelMotion
  }, rest, {
    classNames: {
      mask: (0, _classnames.default)((_b = rest.classNames) === null || _b === void 0 ? void 0 : _b.mask, (_c = drawer === null || drawer === void 0 ? void 0 : drawer.classNames) === null || _c === void 0 ? void 0 : _c.mask),
      content: (0, _classnames.default)((_d = rest.classNames) === null || _d === void 0 ? void 0 : _d.content, (_e = drawer === null || drawer === void 0 ? void 0 : drawer.classNames) === null || _e === void 0 ? void 0 : _e.content)
    },
    styles: {
      mask: Object.assign(Object.assign({}, (_f = rest.styles) === null || _f === void 0 ? void 0 : _f.mask), (_g = drawer === null || drawer === void 0 ? void 0 : drawer.styles) === null || _g === void 0 ? void 0 : _g.mask),
      content: Object.assign(Object.assign({}, (_h = rest.styles) === null || _h === void 0 ? void 0 : _h.content), (_j = drawer === null || drawer === void 0 ? void 0 : drawer.styles) === null || _j === void 0 ? void 0 : _j.content)
    },
    open: open !== null && open !== void 0 ? open : visible,
    mask: mask,
    push: push,
    width: mergedWidth,
    height: mergedHeight,
    style: Object.assign(Object.assign({}, drawer === null || drawer === void 0 ? void 0 : drawer.style), style),
    className: (0, _classnames.default)(drawer === null || drawer === void 0 ? void 0 : drawer.className, className),
    rootClassName: drawerClassName,
    getContainer: getContainer,
    afterOpenChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
    panelRef: panelRef,
    zIndex: zIndex
  }), /*#__PURE__*/React.createElement(_DrawerPanel.default, Object.assign({
    prefixCls: prefixCls
  }, rest, {
    onClose: onClose
  })))))));
};
/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
      prefixCls: customizePrefixCls,
      style,
      className,
      placement = 'right'
    } = props,
    restProps = __rest(props, ["prefixCls", "style", "className", "placement"]);
  const {
    getPrefixCls
  } = React.useContext(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const cls = (0, _classnames.default)(prefixCls, `${prefixCls}-pure`, `${prefixCls}-${placement}`, hashId, className);
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/React.createElement(_DrawerPanel.default, Object.assign({
    prefixCls: prefixCls
  }, restProps))));
};
Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = 'Drawer';
}
var _default = exports.default = Drawer;
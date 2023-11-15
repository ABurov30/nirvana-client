"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _classnames = _interopRequireDefault(require("classnames"));
var _uiUtil = require("../../utils/uiUtil");
var _PanelContext = _interopRequireDefault(require("../../PanelContext"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TimeUnitColumn(props) {
  var prefixCls = props.prefixCls,
    units = props.units,
    onSelect = props.onSelect,
    value = props.value,
    active = props.active,
    hideDisabledOptions = props.hideDisabledOptions,
    info = props.info,
    type = props.type;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var _React$useContext = React.useContext(_PanelContext.default),
    open = _React$useContext.open;
  var ulRef = (0, _react.useRef)(null);
  var liRefs = (0, _react.useRef)(new Map());
  var scrollRef = (0, _react.useRef)();

  // `useLayoutEffect` here to avoid blink by duration is 0
  (0, _react.useLayoutEffect)(function () {
    var li = liRefs.current.get(value);
    if (li && open !== false) {
      (0, _uiUtil.scrollTo)(ulRef.current, li.offsetTop, 120);
    }
  }, [value]);
  (0, _react.useLayoutEffect)(function () {
    if (open) {
      var li = liRefs.current.get(value);
      if (li) {
        scrollRef.current = (0, _uiUtil.waitElementReady)(li, function () {
          (0, _uiUtil.scrollTo)(ulRef.current, li.offsetTop, 0);
        });
      }
    }
    return function () {
      var _scrollRef$current;
      (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 || _scrollRef$current.call(scrollRef);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("ul", {
    className: (0, _classnames.default)("".concat(prefixCls, "-column"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-column-active"), active)),
    ref: ulRef,
    style: {
      position: 'relative'
    }
  }, units.map(function (unit) {
    var _classNames2;
    if (hideDisabledOptions && unit.disabled) {
      return null;
    }
    return /*#__PURE__*/React.createElement("li", {
      key: unit.value,
      ref: function ref(element) {
        liRefs.current.set(unit.value, element);
      },
      className: (0, _classnames.default)(cellPrefixCls, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), (0, _defineProperty2.default)(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
      onClick: function onClick() {
        if (unit.disabled) {
          return;
        }
        onSelect(unit.value);
      }
    }, info.cellRender ? info.cellRender(unit.value, {
      today: info.today,
      locale: info.locale,
      originNode: /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellPrefixCls, "-inner")
      }, unit.label),
      type: 'time',
      subType: type
    }) : /*#__PURE__*/React.createElement("div", {
      className: "".concat(cellPrefixCls, "-inner")
    }, unit.label));
  }));
}
var _default = exports.default = TimeUnitColumn;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _Collapse = _interopRequireDefault(require("./Collapse"));
var _AccordionContext = require("./AccordionContext");
var _excluded = ["className", "cssModule", "tag", "innerRef", "children", "accordionId"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes = {
  /** Unique key used to control item's collapse/expand */
  accordionId: _propTypes["default"].string.isRequired,
  /** To add custom class */
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  /** Change existing base class name with a new class name */
  cssModule: _propTypes["default"].object,
  /** Pass ref to the component */
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].func]),
  /** Set a custom element for this component */
  tag: _utils.tagPropType
};
var defaultProps = {
  tag: 'div'
};
function AccordionBody(props) {
  var className = props.className,
    cssModule = props.cssModule,
    Tag = props.tag,
    innerRef = props.innerRef,
    children = props.children,
    accordionId = props.accordionId,
    attributes = _objectWithoutProperties(props, _excluded);
  var _useContext = (0, _react.useContext)(_AccordionContext.AccordionContext),
    open = _useContext.open;
  var classes = (0, _utils.mapToCssModules)((0, _classnames["default"])(className, 'accordion-collapse'), cssModule);
  return /*#__PURE__*/_react["default"].createElement(_Collapse["default"], _extends({}, attributes, {
    className: classes,
    ref: innerRef,
    isOpen: Array.isArray(open) ? open.includes(accordionId) : open === accordionId
  }), /*#__PURE__*/_react["default"].createElement(Tag, {
    className: "accordion-body"
  }, children));
}
AccordionBody.propTypes = propTypes;
AccordionBody.defaultProps = defaultProps;
var _default = AccordionBody;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _excluded = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "container", "tag", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes = {
  children: _propTypes["default"].node,
  /** Add custom class */
  className: _propTypes["default"].string,
  /** Theme the navbar by adding a background color  */
  color: _propTypes["default"].string,
  /** Use any of the responsive containers to change how wide the content in your navbar is presented. */
  container: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  /** Change underlying component's CSS base class name */
  cssModule: _propTypes["default"].object,
  /** This prop is passed if the background is dark, to make the text lighter */
  dark: _propTypes["default"].bool,
  /** Determine if to show toggler button */
  expand: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  /** Make the navbar fixed at the top */
  fixed: _propTypes["default"].string,
  /** Add `.navbar-light` class */
  light: _propTypes["default"].bool,
  role: _propTypes["default"].string,
  /** Use `position: sticky` which isn't fully supported in every browser */
  sticky: _propTypes["default"].string,
  /** Set a custom element for this component */
  tag: _utils.tagPropType
};
var defaultProps = {
  tag: 'nav',
  expand: false,
  container: 'fluid'
};
var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  }
  if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }
  return "navbar-expand-".concat(expand);
};
function Navbar(props) {
  var _classNames;
  var expand = props.expand,
    className = props.className,
    cssModule = props.cssModule,
    light = props.light,
    dark = props.dark,
    fixed = props.fixed,
    sticky = props.sticky,
    color = props.color,
    container = props.container,
    Tag = props.tag,
    children = props.children,
    attributes = _objectWithoutProperties(props, _excluded);
  var classes = (0, _utils.mapToCssModules)((0, _classnames["default"])(className, 'navbar', getExpandClass(expand), (_classNames = {
    'navbar-light': light,
    'navbar-dark': dark
  }, _defineProperty(_classNames, "bg-".concat(color), color), _defineProperty(_classNames, "fixed-".concat(fixed), fixed), _defineProperty(_classNames, "sticky-".concat(sticky), sticky), _classNames)), cssModule);
  var containerClass = container && container === true ? 'container' : "container-".concat(container);
  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), container ? /*#__PURE__*/_react["default"].createElement("div", {
    className: containerClass
  }, children) : children);
}
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
var _default = Navbar;
exports["default"] = _default;
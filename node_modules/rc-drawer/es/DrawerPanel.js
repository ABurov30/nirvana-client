import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import classNames from 'classnames';
import { useComposeRef } from 'rc-util';
import * as React from 'react';
import { RefContext } from "./context";
var DrawerPanel = function DrawerPanel(props) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    children = props.children,
    containerRef = props.containerRef,
    id = props.id,
    onMouseEnter = props.onMouseEnter,
    onMouseOver = props.onMouseOver,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    onKeyDown = props.onKeyDown,
    onKeyUp = props.onKeyUp;
  var eventHandlers = {
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  };
  var _React$useContext = React.useContext(RefContext),
    panelRef = _React$useContext.panel;
  var mergedRef = useComposeRef(panelRef, containerRef);

  // =============================== Render ===============================

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    id: id,
    className: classNames("".concat(prefixCls, "-content"), className),
    style: _objectSpread({}, style),
    "aria-modal": "true",
    role: "dialog",
    ref: mergedRef
  }, eventHandlers), children));
};
if (process.env.NODE_ENV !== 'production') {
  DrawerPanel.displayName = 'DrawerPanel';
}
export default DrawerPanel;
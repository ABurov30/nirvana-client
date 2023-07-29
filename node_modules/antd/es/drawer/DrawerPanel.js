import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import * as React from 'react';
const DrawerPanel = props => {
  const {
    prefixCls,
    title,
    footer,
    extra,
    closable = true,
    closeIcon = /*#__PURE__*/React.createElement(CloseOutlined, null),
    onClose,
    headerStyle,
    drawerStyle,
    bodyStyle,
    footerStyle,
    children
  } = props;
  const closeIconNode = closable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    className: `${prefixCls}-close`
  }, closeIcon);
  const headerNode = React.useMemo(() => {
    if (!title && !closable) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      style: headerStyle,
      className: classNames(`${prefixCls}-header`, {
        [`${prefixCls}-header-close-only`]: closable && !title && !extra
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-header-title`
    }, closeIconNode, title && /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-title`
    }, title)), extra && /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-extra`
    }, extra));
  }, [closable, closeIconNode, extra, headerStyle, prefixCls, title]);
  const footerNode = React.useMemo(() => {
    if (!footer) {
      return null;
    }
    const footerClassName = `${prefixCls}-footer`;
    return /*#__PURE__*/React.createElement("div", {
      className: footerClassName,
      style: footerStyle
    }, footer);
  }, [footer, footerStyle, prefixCls]);
  return /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-wrapper-body`,
    style: drawerStyle
  }, headerNode, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-body`,
    style: bodyStyle
  }, children), footerNode);
};
export default DrawerPanel;
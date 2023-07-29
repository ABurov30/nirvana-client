var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import * as React from 'react';
import { isPresetColor, isPresetStatusColor } from '../_util/colors';
import warning from '../_util/warning';
import Wave from '../_util/wave';
import { ConfigContext } from '../config-provider';
import CheckableTag from './CheckableTag';
import useStyle from './style';
const InternalTag = (tagProps, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style,
      children,
      icon,
      color,
      onClose,
      closeIcon,
      closable = false,
      bordered = true
    } = tagProps,
    props = __rest(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable", "bordered"]);
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const [visible, setVisible] = React.useState(true);
  // Warning for deprecated usage
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(!('visible' in props), 'Tag', '`visible` is deprecated, please use `visible && <Tag />` instead.') : void 0;
  }
  React.useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  const isInternalColor = isPresetColor(color) || isPresetStatusColor(color);
  const tagStyle = Object.assign({
    backgroundColor: color && !isInternalColor ? color : undefined
  }, style);
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const tagClassName = classNames(prefixCls, {
    [`${prefixCls}-${color}`]: isInternalColor,
    [`${prefixCls}-has-color`]: color && !isInternalColor,
    [`${prefixCls}-hidden`]: !visible,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered
  }, className, rootClassName, hashId);
  const handleCloseClick = e => {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  const closeIconNode = React.useMemo(() => {
    if (closable) {
      return closeIcon ? /*#__PURE__*/React.createElement("span", {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/React.createElement(CloseOutlined, {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      });
    }
    return null;
  }, [closable, closeIcon, prefixCls, handleCloseClick]);
  const isNeedWave = typeof props.onClick === 'function' || children && children.type === 'a';
  const iconNode = icon || null;
  const kids = iconNode ? /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement("span", null, children)) : children;
  const tagNode = /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, closeIconNode);
  return wrapSSR(isNeedWave ? /*#__PURE__*/React.createElement(Wave, null, tagNode) : tagNode);
};
const Tag = /*#__PURE__*/React.forwardRef(InternalTag);
if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = 'Tag';
}
Tag.CheckableTag = CheckableTag;
export default Tag;
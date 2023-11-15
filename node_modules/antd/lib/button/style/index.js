"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareToken = exports.prepareComponentToken = exports.default = void 0;
var _style = require("../../style");
var _internal = require("../../theme/internal");
var _group = _interopRequireDefault(require("./group"));
// ============================== Shared ==============================
const genSharedButtonStyle = token => {
  const {
    componentCls,
    iconCls,
    fontWeight
  } = token;
  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      fontWeight,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: 'none',
      touchAction: 'manipulation',
      lineHeight: token.lineHeight,
      color: token.colorText,
      '&:disabled > *': {
        pointerEvents: 'none'
      },
      '> span': {
        display: 'inline-block'
      },
      [`${componentCls}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      [`&:not(${componentCls}-icon-only) > ${componentCls}-icon`]: {
        [`&${componentCls}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: token.marginXS
        }
      },
      '> a': {
        color: 'currentColor'
      },
      '&:not(:disabled)': Object.assign({}, (0, _style.genFocusStyle)(token)),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: '0.34em'
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: '-0.34em',
        letterSpacing: '0.34em'
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: 'none'
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: 'inline-block',
            width: token.lineWidth,
            height: `calc(100% + ${token.lineWidth * 2}px)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      '&-compact-vertical-item': {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: 'relative',
            '&:before': {
              position: 'absolute',
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: 'inline-block',
              width: `calc(100% + ${token.lineWidth * 2}px)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    '&:hover': hoverStyle,
    '&:active': activeStyle
  }
});
// ============================== Shape ===============================
const genCircleButtonStyle = token => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
});
const genRoundButtonStyle = token => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
// =============================== Type ===============================
const genDisabledStyle = token => ({
  cursor: 'not-allowed',
  borderColor: token.borderColorDisabled,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: 'none'
});
const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || undefined,
    backgroundColor: background,
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    backgroundColor: background
  }, hoverStyle), Object.assign({
    backgroundColor: background
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token))
});
const genSolidButtonStyle = token => Object.assign({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
});
// Type: Default
const genDefaultButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  backgroundColor: token.defaultBg,
  borderColor: token.defaultBorderColor,
  color: token.defaultColor,
  boxShadow: token.defaultShadow
}), genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.defaultGhostColor, token.defaultGhostBorderColor, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
// Type: Primary
const genPrimaryButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  color: token.primaryColor,
  backgroundColor: token.colorPrimary,
  boxShadow: token.primaryShadow
}), genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: token.colorError,
    boxShadow: token.dangerShadow,
    color: token.dangerColor
  }, genHoverActiveButtonStyle(token.componentCls, {
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
// Type: Dashed
const genDashedButtonStyle = token => Object.assign(Object.assign({}, genDefaultButtonStyle(token)), {
  borderStyle: 'dashed'
});
// Type: Link
const genLinkButtonStyle = token => Object.assign(Object.assign(Object.assign({
  color: token.colorLink
}, genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorLinkHover,
  backgroundColor: token.linkHoverBg
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token.colorError
  }, genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
// Type: Text
const genTextButtonStyle = token => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorText,
  backgroundColor: token.textHoverBg
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
const genTypeButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token),
    [`${componentCls}-ghost`]: genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)
  };
};
// =============================== Size ===============================
const genSizeButtonStyle = function (token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const {
    componentCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
  // Size
  {
    [`${componentCls}${sizePrefixCls}`]: {
      fontSize,
      height: controlHeight,
      padding: `${paddingVertical}px ${buttonPaddingHorizontal}px`,
      borderRadius,
      [`&${iconOnlyCls}`]: {
        width: controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        [`&${componentCls}-round`]: {
          width: 'auto'
        },
        [iconCls]: {
          fontSize: token.buttonIconOnlyFontSize
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: token.opacityLoading,
        cursor: 'default'
      },
      [`${componentCls}-loading-icon`]: {
        transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
      }
    }
  },
  // Shape - patch prefixCls again to override solid border radius style
  {
    [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
  }, {
    [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
  }];
};
const genSizeBaseButtonStyle = token => genSizeButtonStyle((0, _internal.mergeToken)(token, {
  fontSize: token.contentFontSize
}));
const genSizeSmallButtonStyle = token => {
  const smallToken = (0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightSM,
    fontSize: token.contentFontSizeSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: token.paddingInlineSM,
    borderRadius: token.borderRadiusSM,
    buttonIconOnlyFontSize: token.onlyIconSizeSM
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = token => {
  const largeToken = (0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.contentFontSizeLG,
    buttonPaddingHorizontal: token.paddingInlineLG,
    borderRadius: token.borderRadiusLG,
    buttonIconOnlyFontSize: token.onlyIconSizeLG
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: '100%'
      }
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const {
    paddingInline,
    onlyIconSize
  } = token;
  const buttonToken = (0, _internal.mergeToken)(token, {
    buttonPaddingHorizontal: paddingInline,
    buttonIconOnlyFontSize: onlyIconSize
  });
  return buttonToken;
};
exports.prepareToken = prepareToken;
const prepareComponentToken = token => ({
  fontWeight: 400,
  defaultShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,
  primaryShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,
  dangerShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`,
  primaryColor: token.colorTextLightSolid,
  dangerColor: token.colorTextLightSolid,
  borderColorDisabled: token.colorBorder,
  defaultGhostColor: token.colorBgContainer,
  ghostBg: 'transparent',
  defaultGhostBorderColor: token.colorBgContainer,
  paddingInline: token.paddingContentHorizontal - token.lineWidth,
  paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
  paddingInlineSM: 8 - token.lineWidth,
  onlyIconSize: token.fontSizeLG,
  onlyIconSizeSM: token.fontSizeLG - 2,
  onlyIconSizeLG: token.fontSizeLG + 2,
  groupBorderColor: token.colorPrimaryHover,
  linkHoverBg: 'transparent',
  textHoverBg: token.colorBgTextHover,
  defaultColor: token.colorText,
  defaultBg: token.colorBgContainer,
  defaultBorderColor: token.colorBorder,
  defaultBorderColorDisabled: token.colorBorder,
  contentFontSize: token.fontSize,
  contentFontSizeSM: token.fontSize,
  contentFontSizeLG: token.fontSizeLG
});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _internal.genComponentStyleHook)('Button', token => {
  const buttonToken = prepareToken(token);
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeSmallButtonStyle(buttonToken), genSizeBaseButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Group (type, ghost, danger, loading)
  genTypeButtonStyle(buttonToken),
  // Button Group
  (0, _group.default)(buttonToken)];
}, prepareComponentToken);
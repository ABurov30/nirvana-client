"use client";

import { resetComponent, resetIcon, textEllipsis } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import genDropdownStyle from './dropdown';
import genMultipleStyle from './multiple';
import genSingleStyle from './single';
// ============================= Selector =============================
const genSelectorStyle = token => {
  const {
    componentCls,
    selectorBg
  } = token;
  return {
    position: 'relative',
    backgroundColor: selectorBg,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: 'pointer'
    },
    [`${componentCls}-show-search&`]: {
      cursor: 'text',
      input: {
        cursor: 'auto',
        color: 'inherit',
        height: '100%'
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: 'not-allowed',
      [`${componentCls}-multiple&`]: {
        background: token.multipleSelectorBgDisabled
      },
      input: {
        cursor: 'not-allowed'
      }
    }
  };
};
// ============================== Status ==============================
const genStatusStyle = function (rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    antCls,
    borderActiveColor,
    outlineColor,
    controlOutlineWidth
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderActiveColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: Object.assign(Object.assign({}, overwriteStyle), {
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor
        },
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderActiveColor,
          boxShadow: `0 0 0 ${controlOutlineWidth}px ${outlineColor}`,
          outline: 0
        }
      })
    }
  };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      fontFamily: 'inherit',
      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none'
      }
    }
  };
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    antCls,
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: 'normal',
        position: 'relative',
        userSelect: 'none'
      }, textEllipsis), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${antCls}-typography`]: {
          display: 'inline'
        }
      }),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, textEllipsis), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none'
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        [iconCls]: {
          verticalAlign: 'top',
          transition: `transform ${token.motionDurationSlow}`,
          '> svg': {
            verticalAlign: 'top'
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: 'auto'
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: 'not-allowed'
        },
        '> *:not(:last-child)': {
          marginInlineEnd: 8 // FIXME: magic
        }
      }),

      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        background: token.clearBg,
        cursor: 'pointer',
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: 'auto',
        '&:before': {
          display: 'block'
        },
        '&:hover': {
          color: token.colorTextTertiary
        }
      },
      '&:hover': {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXS
      }
    }
  };
};
// ============================== Styles ==============================
const genSelectStyle = token => {
  const {
    componentCls
  } = token;
  return [{
    [componentCls]: {
      // ==================== BorderLess ====================
      [`&-borderless ${componentCls}-selector`]: {
        backgroundColor: `transparent !important`,
        borderColor: `transparent !important`,
        boxShadow: `none !important`
      },
      // ==================== In Form ====================
      [`&${componentCls}-in-form-item`]: {
        width: '100%'
      }
    }
  },
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle(token),
  // Single
  genSingleStyle(token),
  // Multiple
  genMultipleStyle(token),
  // Dropdown
  genDropdownStyle(token),
  // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  {
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    }
  },
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, mergeToken(token, {
    borderHoverColor: token.colorPrimaryHover,
    borderActiveColor: token.colorPrimary,
    outlineColor: token.controlOutline
  })), genStatusStyle(`${componentCls}-status-error`, mergeToken(token, {
    borderHoverColor: token.colorErrorHover,
    borderActiveColor: token.colorError,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(`${componentCls}-status-warning`, mergeToken(token, {
    borderHoverColor: token.colorWarningHover,
    borderActiveColor: token.colorWarning,
    outlineColor: token.colorWarningOutline
  }), true),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  genCompactItemStyle(token, {
    borderElCls: `${componentCls}-selector`,
    focusElCls: `${componentCls}-focused`
  })];
};
// ============================== Export ==============================
export default genComponentStyleHook('Select', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = mergeToken(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1,
    multipleSelectItemHeight: token.multipleItemHeight,
    selectHeight: token.controlHeight
  });
  return [genSelectStyle(selectToken)];
}, token => {
  const {
    fontSize,
    lineHeight,
    controlHeight,
    controlPaddingHorizontal,
    zIndexPopupBase,
    colorText,
    fontWeightStrong,
    controlItemBgActive,
    controlItemBgHover,
    colorBgContainer,
    colorFillSecondary,
    controlHeightLG,
    controlHeightSM,
    colorBgContainerDisabled,
    colorTextDisabled
  } = token;
  return {
    zIndexPopup: zIndexPopupBase + 50,
    optionSelectedColor: colorText,
    optionSelectedFontWeight: fontWeightStrong,
    optionSelectedBg: controlItemBgActive,
    optionActiveBg: controlItemBgHover,
    optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    optionFontSize: fontSize,
    optionLineHeight: lineHeight,
    optionHeight: controlHeight,
    selectorBg: colorBgContainer,
    clearBg: colorBgContainer,
    singleItemHeightLG: controlHeightLG,
    multipleItemBg: colorFillSecondary,
    multipleItemBorderColor: 'transparent',
    multipleItemHeight: controlHeightSM,
    multipleItemHeightLG: controlHeight,
    multipleSelectorBgDisabled: colorBgContainerDisabled,
    multipleItemColorDisabled: colorTextDisabled,
    multipleItemBorderColorDisabled: 'transparent'
  };
});
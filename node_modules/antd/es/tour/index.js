"use client";

var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import React, { useContext, useMemo } from 'react';
import RCTour from '@rc-component/tour';
import classNames from 'classnames';
import { useZIndex } from '../_util/hooks/useZIndex';
import getPlacements from '../_util/placements';
import zIndexContext from '../_util/zindexContext';
import { ConfigContext } from '../config-provider';
import { useToken } from '../theme/internal';
import TourPanel from './panelRender';
import PurePanel from './PurePanel';
import useStyle from './style';
const Tour = props => {
  const {
      prefixCls: customizePrefixCls,
      type,
      rootClassName,
      indicatorsRender,
      steps
    } = props,
    restProps = __rest(props, ["prefixCls", "type", "rootClassName", "indicatorsRender", "steps"]);
  const {
    getPrefixCls,
    direction
  } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tour', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const [, token] = useToken();
  const mergedSteps = useMemo(() => steps === null || steps === void 0 ? void 0 : steps.map(step => {
    var _a;
    return Object.assign(Object.assign({}, step), {
      className: classNames(step.className, {
        [`${prefixCls}-primary`]: ((_a = step.type) !== null && _a !== void 0 ? _a : type) === 'primary'
      })
    });
  }), [steps, type]);
  const builtinPlacements = getPlacements({
    arrowPointAtCenter: true,
    autoAdjustOverflow: true,
    offset: token.marginXXS,
    arrowWidth: token.sizePopupArrow,
    borderRadius: token.borderRadius
  });
  const customClassName = classNames({
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, hashId, rootClassName);
  const mergedRenderPanel = (stepProps, stepCurrent) => /*#__PURE__*/React.createElement(TourPanel, {
    type: type,
    stepProps: stepProps,
    current: stepCurrent,
    indicatorsRender: indicatorsRender
  });
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = useZIndex('Tour', restProps.zIndex);
  return wrapSSR( /*#__PURE__*/React.createElement(zIndexContext.Provider, {
    value: contextZIndex
  }, /*#__PURE__*/React.createElement(RCTour, Object.assign({}, restProps, {
    zIndex: zIndex,
    rootClassName: customClassName,
    prefixCls: prefixCls,
    animated: true,
    renderPanel: mergedRenderPanel,
    builtinPlacements: builtinPlacements,
    steps: mergedSteps
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  Tour.displayName = 'Tour';
}
Tour._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default Tour;
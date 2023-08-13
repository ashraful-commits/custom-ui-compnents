import { useState } from "react";

const Col = ({
  children,
  width,
  height,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  boxShadow,
  alignItems,
  display,
  justifyContent,
  textCenter,
  gap,
  borderRadius,
  backgroundImage,
  backgroundSize,
  backgroundColor,
  backgroundRepeat,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  fontStyle,
  hover = {},
  transition,
  transform,
  position,
  before = {},
  after = {},
  overflow,
  zIndex,
  outline,
  extraBefore = {},
  extraAfter = {},
}) => {
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const [Hover, setHover] = useState(false);

  const hoverAfterStyles = {
    width: hover.after?.width,
    height: hover.after?.height,
    padding: hover.after?.padding,
    paddingBottom: hover.after?.paddingBottom,
    paddingRight: hover.after?.paddingRight,
    paddingLeft: hover.after?.paddingLeft,
    paddingTop: hover.after?.paddingTop,
    margin: hover.after?.margin,
    marginLeft: hover.after?.marginLeft,
    marginRight: hover.after?.marginRight,
    marginBottom: hover.after?.marginBottom,
    marginTop: hover.after?.marginTop,
    border: hover.after?.border,
    borderLeft: hover.after?.borderLeft,
    borderRight: hover.after?.borderRight,
    borderTop: hover.after?.borderTop,
    borderBottom: hover.after?.borderBottom,
    boxShadow: hover.after?.boxShadow,
    alignItems: hover.after?.alignItems,
    display: hover.after?.display,
    justifyContent: hover.after?.justifyContent,
    textAlign: hover.after?.textAlign,
    gap: hover.after?.gap,
    borderRadius: hover.after?.borderRadius,
    backgroundImage: hover.after?.backgroundImage,
    backgroundSize: hover.after?.backgroundSize,
    backgroundColor: hover.after?.backgroundColor,
    backgroundRepeat: hover.after?.backgroundRepeat,
    color: hover.after?.color,
    fontSize: hover.after?.fontSize,
    fontWeight: hover.after?.fontWeight,
    fontStyle: hover.after?.fontStyle,
    lineHeight: hover.after?.lineHeight,
    transition: hover.after?.transition,
    transform: hover.after?.transform,
    position: hover.after?.position,
    top: hover.after?.top,
    bottom: hover.after?.bottom,
    left: hover.after?.left,
    right: hover.after?.right,
    overflow: hover.after?.overflow,
    zIndex: hover.after?.zIndex,
    outline: hover.after?.outline,
  };
  const ExtraHoverAfterStyles = {
    width: hover.extraAfter?.width,
    height: hover.extraAfter?.height,
    padding: hover.extraAfter?.padding,
    paddingBottom: hover.extraAfter?.paddingBottom,
    paddingRight: hover.extraAfter?.paddingRight,
    paddingLeft: hover.extraAfter?.paddingLeft,
    paddingTop: hover.extraAfter?.paddingTop,
    margin: hover.extraAfter?.margin,
    marginLeft: hover.extraAfter?.marginLeft,
    marginRight: hover.extraAfter?.marginRight,
    marginBottom: hover.extraAfter?.marginBottom,
    marginTop: hover.extraAfter?.marginTop,
    border: hover.extraAfter?.border,
    borderLeft: hover.extraAfter?.borderLeft,
    borderRight: hover.extraAfter?.borderRight,
    borderTop: hover.extraAfter?.borderTop,
    borderBottom: hover.extraAfter?.borderBottom,
    boxShadow: hover.extraAfter?.boxShadow,
    alignItems: hover.extraAfter?.alignItems,
    display: hover.extraAfter?.display,
    justifyContent: hover.extraAfter?.justifyContent,
    textAlign: hover.extraAfter?.textAlign,
    gap: hover.extraAfter?.gap,
    borderRadius: hover.extraAfter?.borderRadius,
    backgroundImage: hover.extraAfter?.backgroundImage,
    backgroundSize: hover.extraAfter?.backgroundSize,
    backgroundColor: hover.extraAfter?.backgroundColor,
    backgroundRepeat: hover.extraAfter?.backgroundRepeat,
    color: hover.extraAfter?.color,
    fontSize: hover.extraAfter?.fontSize,
    fontWeight: hover.extraAfter?.fontWeight,
    fontStyle: hover.extraAfter?.fontStyle,
    lineHeight: hover.extraAfter?.lineHeight,
    transition: hover.extraAfter?.transition,
    transform: hover.extraAfter?.transform,
    position: hover.extraAfter?.position,
    top: hover.extraAfter?.top,
    bottom: hover.extraAfter?.bottom,
    left: hover.extraAfter?.left,
    right: hover.extraAfter?.right,
    overflow: hover.extraAfter?.overflow,
    zIndex: hover.extraAfter?.zIndex,
    outline: hover.extraAfter?.outline,
  };
  const afterStyles = {
    width: after.width,
    height: after.height,
    padding: after.padding,
    paddingBottom: after.paddingBottom,
    paddingRight: after.paddingRight,
    paddingLeft: after.paddingLeft,
    paddingTop: after.paddingTop,
    margin: after.margin,
    marginLeft: after.marginLeft,
    marginRight: after.marginRight,
    marginBottom: after.marginBottom,
    marginTop: after.marginTop,
    border: after.border,
    borderLeft: after.borderLeft,
    borderRight: after.borderRight,
    borderTop: after.borderTop,
    borderBottom: after.borderBottom,
    boxShadow: after.boxShadow,
    alignItems: after.alignItems,
    display: after.display,
    justifyContent: after.justifyContent,
    textAlign: after.textAlign,
    gap: after.gap,
    borderRadius: after.borderRadius,
    backgroundImage: after.backgroundImage,
    backgroundSize: after.backgroundSize,
    backgroundColor: after.backgroundColor,
    backgroundRepeat: after.backgroundRepeat,
    color: after.color,
    fontSize: after.fontSize,
    fontWeight: after.fontWeight,
    fontStyle: after.fontStyle,
    lineHeight: after.lineHeight,
    transition: after.transition,
    transform: after.transform,
    position: after.position,
    top: after.top,
    bottom: after.bottom,
    left: after.left,
    right: after.right,
    overflow: after.overflow,
    zIndex: after.zIndex,
    outline: after.outline,
  };
  const ExtraAfterStyles = {
    width: extraAfter?.width,
    height: extraAfter?.height,
    padding: extraAfter?.padding,
    paddingBottom: extraAfter?.paddingBottom,
    paddingRight: extraAfter?.paddingRight,
    paddingLeft: extraAfter?.paddingLeft,
    paddingTop: extraAfter?.paddingTop,
    margin: extraAfter?.margin,
    marginLeft: extraAfter?.marginLeft,
    marginRight: extraAfter?.marginRight,
    marginBottom: extraAfter?.marginBottom,
    marginTop: extraAfter?.marginTop,
    border: extraAfter?.border,
    borderLeft: extraAfter?.borderLeft,
    borderRight: extraAfter?.borderRight,
    borderTop: extraAfter?.borderTop,
    borderBottom: extraAfter?.borderBottom,
    boxShadow: extraAfter?.boxShadow,
    alignItems: extraAfter?.alignItems,
    display: extraAfter?.display,
    justifyContent: extraAfter?.justifyContent,
    textAlign: extraAfter?.textAlign,
    gap: extraAfter?.gap,
    borderRadius: extraAfter?.borderRadius,
    backgroundImage: extraAfter?.backgroundImage,
    backgroundSize: extraAfter.backgroundSize,
    backgroundColor: extraAfter.backgroundColor,
    backgroundRepeat: extraAfter.backgroundRepeat,
    color: extraAfter.color,
    fontSize: extraAfter.fontSize,
    fontWeight: extraAfter.fontWeight,
    fontStyle: extraAfter.fontStyle,
    lineHeight: extraAfter.lineHeight,
    transition: extraAfter.transition,
    transform: extraAfter.transform,
    position: extraAfter.position,
    top: extraAfter.top,
    bottom: extraAfter.bottom,
    left: extraAfter.left,
    right: extraAfter.right,
    overflow: extraAfter.overflow,
    zIndex: extraAfter.zIndex,
    outline: extraAfter.outline,
  };
  const hoverBeforeStyles = {
    width: hover.before?.width,
    height: hover.before?.height,
    padding: hover.before?.padding,
    paddingBottom: hover.before?.paddingBottom,
    paddingRight: hover.before?.paddingRight,
    paddingLeft: hover.before?.paddingLeft,
    paddingTop: hover.before?.paddingTop,
    margin: hover.before?.margin,
    marginLeft: hover.before?.marginLeft,
    marginRight: hover.before?.marginRight,
    marginBottom: hover.before?.marginBottom,
    marginTop: hover.before?.marginTop,
    border: hover.before?.border,
    borderLeft: hover.before?.borderLeft,
    borderRight: hover.before?.borderRight,
    borderTop: hover.before?.borderTop,
    borderBottom: hover.before?.borderBottom,
    boxShadow: hover.before?.boxShadow,
    alignItems: hover.before?.alignItems,
    display: hover.before?.display,
    justifyContent: hover.before?.justifyContent,
    textAlign: hover.before?.textAlign,
    gap: hover.before?.gap,
    borderRadius: hover.before?.borderRadius,
    backgroundImage: hover.before?.backgroundImage,
    backgroundSize: hover.before?.backgroundSize,
    backgroundColor: hover.before?.backgroundColor,
    backgroundRepeat: hover.before?.backgroundRepeat,
    color: hover.before?.color,
    fontSize: hover.before?.fontSize,
    fontWeight: hover.before?.fontWeight,
    fontStyle: hover.before?.fontStyle,
    lineHeight: hover.before?.lineHeight,
    transition: hover.before?.transition,
    transform: hover.before?.transform,
    position: hover.before?.position,
    top: hover.before?.top,
    bottom: hover.before?.bottom,
    left: hover.before?.left,
    right: hover.before?.right,
    overflow: hover.before?.overflow,
    zIndex: hover.before?.zIndex,
    outline: hover.before?.outline,
  };
  const ExtraHoverBeforeStyles = {
    width: hover.extraBefore?.width,
    height: hover.extraBefore?.height,
    padding: hover.extraBefore?.padding,
    paddingBottom: hover.extraBefore?.paddingBottom,
    paddingRight: hover.extraBefore?.paddingRight,
    paddingLeft: hover.extraBefore?.paddingLeft,
    paddingTop: hover.extraBefore?.paddingTop,
    margin: hover.extraBefore?.margin,
    marginLeft: hover.extraBefore?.marginLeft,
    marginRight: hover.extraBefore?.marginRight,
    marginBottom: hover.extraBefore?.marginBottom,
    marginTop: hover.extraBefore?.marginTop,
    border: hover.extraBefore?.border,
    borderLeft: hover.extraBefore?.borderLeft,
    borderRight: hover.extraBefore?.borderRight,
    borderTop: hover.extraBefore?.borderTop,
    borderBottom: hover.extraBefore?.borderBottom,
    boxShadow: hover.extraBefore?.boxShadow,
    alignItems: hover.extraBefore?.alignItems,
    display: hover.extraBefore?.display,
    justifyContent: hover.extraBefore?.justifyContent,
    textAlign: hover.extraBefore?.textAlign,
    gap: hover.extraBefore?.gap,
    borderRadius: hover.extraBefore?.borderRadius,
    backgroundImage: hover.extraBefore?.backgroundImage,
    backgroundSize: hover.extraBefore?.backgroundSize,
    backgroundColor: hover.extraBefore?.backgroundColor,
    backgroundRepeat: hover.extraBefore?.backgroundRepeat,
    color: hover.extraBefore?.color,
    fontSize: hover.extraBefore?.fontSize,
    fontWeight: hover.extraBefore?.fontWeight,
    fontStyle: hover.extraBefore?.fontStyle,
    lineHeight: hover.extraBefore?.lineHeight,
    transition: hover.extraBefore?.transition,
    transform: hover.extraBefore?.transform,
    position: hover.extraBefore?.position,
    top: hover.extraBefore?.top,
    bottom: hover.extraBefore?.bottom,
    left: hover.extraBefore?.left,
    right: hover.extraBefore?.right,
    overflow: hover.extraBefore?.overflow,
    zIndex: hover.extraBefore?.zIndex,
    outline: hover.extraBefore?.outline,
  };
  const beforeStyles = {
    width: before.width,
    height: before.height,
    padding: before.padding,
    paddingBottom: before.paddingBottom,
    paddingRight: before.paddingRight,
    paddingLeft: before.paddingLeft,
    paddingTop: before.paddingTop,
    margin: before.margin,
    marginLeft: before.marginLeft,
    marginRight: before.marginRight,
    marginBottom: before.marginBottom,
    marginTop: before.marginTop,
    border: before.border,
    borderLeft: before.borderLeft,
    borderRight: before.borderRight,
    borderTop: before.borderTop,
    borderBottom: before.borderBottom,
    boxShadow: before.boxShadow,
    alignItems: before.alignItems,
    display: before.display,
    justifyContent: before.justifyContent,
    textAlign: before.textAlign,
    gap: before.gap,
    borderRadius: before.borderRadius,
    backgroundImage: before.backgroundImage,
    backgroundSize: before.backgroundSize,
    backgroundColor: before.backgroundColor,
    backgroundRepeat: before.backgroundRepeat,
    color: before.color,
    fontSize: before.fontSize,
    fontWeight: before.fontWeight,
    fontStyle: before.fontStyle,
    lineHeight: before.lineHeight,
    transition: before.transition,
    transform: before.transform,
    position: before.position,
    top: before.top,
    bottom: before.bottom,
    left: before.left,
    right: before.right,
    overflow: before.overflow,
    zIndex: before.zIndex,
    outline: before.outline,
  };
  const ExtraBeforeStyles = {
    width: extraBefore?.width,
    height: extraBefore?.height,
    padding: extraBefore?.padding,
    paddingBottom: extraBefore?.paddingBottom,
    paddingRight: extraBefore?.paddingRight,
    paddingLeft: extraBefore?.paddingLeft,
    paddingTop: extraBefore?.paddingTop,
    margin: extraBefore?.margin,
    marginLeft: extraBefore?.marginLeft,
    marginRight: extraBefore?.marginRight,
    marginBottom: extraBefore?.marginBottom,
    marginTop: extraBefore?.marginTop,
    border: extraBefore?.border,
    borderLeft: extraBefore?.borderLeft,
    borderRight: extraBefore?.borderRight,
    borderTop: extraBefore?.borderTop,
    borderBottom: extraBefore?.borderBottom,
    boxShadow: extraBefore?.boxShadow,
    alignItems: extraBefore.alignItems,
    display: extraBefore.display,
    justifyContent: extraBefore.justifyContent,
    textAlign: extraBefore.textAlign,
    gap: extraBefore.gap,
    borderRadius: extraBefore.borderRadius,
    backgroundImage: extraBefore.backgroundImage,
    backgroundSize: extraBefore.backgroundSize,
    backgroundColor: extraBefore.backgroundColor,
    backgroundRepeat: extraBefore.backgroundRepeat,
    color: extraBefore.color,
    fontSize: extraBefore.fontSize,
    fontWeight: extraBefore.fontWeight,
    fontStyle: extraBefore.fontStyle,
    lineHeight: extraBefore.lineHeight,
    transition: extraBefore.transition,
    transform: extraBefore.transform,
    position: extraBefore.position,
    top: extraBefore.top,
    bottom: extraBefore.bottom,
    left: extraBefore.left,
    right: extraBefore.right,
    overflow: extraBefore.overflow,
    zIndex: extraBefore.zIndex,
    outline: extraBefore.outline,
  };
  const styles = {
    width,
    height,
    padding,
    paddingBottom,
    paddingRight,
    paddingLeft,
    paddingTop,
    margin,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    border: border ? border : "none !importent",
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    boxShadow: Hover ? hover.boxShadow : boxShadow,
    alignItems,
    display,
    justifyContent,
    textCenter,
    gap: gap,
    borderRadius,
    backgroundImage: backgroundImage,
    backgroundSize,
    backgroundColor: Hover ? hover.backgroundColor : backgroundColor,
    backgroundRepeat,
    color: Hover ? hover.color : color,
    fontSize: Hover ? hover.fontSize : fontSize,
    fontWeight: Hover ? hover.fontWeight : fontWeight,
    fontStyle: Hover ? hover.fontStyle : fontStyle,
    lineHeight,
    transition,
    transform: Hover ? hover.transform : transform,
    position,
    overflow: overflow,
    zIndex,
    outline,
  };
  return (
    <>
      <div style={styles}>
        {children}
        {Hover && (
          <span style={Hover ? ExtraHoverAfterStyles : ExtraAfterStyles}></span>
        )}
        {Hover && (
          <span
            style={Hover ? ExtraHoverBeforeStyles : ExtraBeforeStyles}
          ></span>
        )}
        {Hover && <span style={Hover ? hoverAfterStyles : afterStyles}></span>}
        {Hover && (
          <span style={Hover ? hoverBeforeStyles : beforeStyles}></span>
        )}
        {ExtraAfterStyles == "" ? <span style={ExtraAfterStyles}></span> : ""}
        {ExtraBeforeStyles == "" ? <span style={ExtraBeforeStyles}></span> : ""}
        {afterStyles == "" ? <span style={afterStyles}></span> : ""}
        {beforeStyles == "" ? <span style={beforeStyles}></span> : ""}
      </div>
    </>
  );
};

export default Col;

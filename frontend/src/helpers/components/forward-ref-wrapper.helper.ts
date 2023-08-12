import {
  forwardRef, ForwardRefRenderFunction
} from "react";

const forwardRefWrapper = <T, P>(componentFunction: ForwardRefRenderFunction<T, P>) => forwardRef<T, P>(componentFunction)

export {
  forwardRefWrapper
}
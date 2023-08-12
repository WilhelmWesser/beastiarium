import { CSSProperties, FC, FormEventHandler, HTMLInputTypeAttribute } from "react";
import styles from './styles.module.scss';
import { forwardRefWrapper } from "@/helpers/helpers";
import { ForwardRefExoticComponent, InputStyles, RefAttributes } from "@/types/types";

type Props = {
  onInput: FormEventHandler<HTMLInputElement>,
  placeholder?: string,
  stylesConfig?: InputStyles,
  type?: HTMLInputTypeAttribute,
  accept?: string,
}

const DEFAULT_INPUT_TYPE: HTMLInputTypeAttribute = "text"

const Input: FC<Props> = ({onInput, placeholder, stylesConfig, type}) => {
  return  <input className={styles.input} onInput={onInput} style={stylesConfig} placeholder={placeholder} type={type ?? DEFAULT_INPUT_TYPE}/>
}

const FormInput: ForwardRefExoticComponent<Props & RefAttributes<unknown>> = forwardRefWrapper<unknown, Props>(({onInput, placeholder, stylesConfig, type, accept}, ref) => {
  return  <input className={styles.input} onChange={onInput} onInput={onInput} style={stylesConfig} placeholder={placeholder} type={type ?? DEFAULT_INPUT_TYPE} accept={accept}/>
})

export {
  Input,
  FormInput
}
import { FC } from "react";
import { ForwardRefExoticComponent, RefAttributes, TextAreaStyles } from "@/types/types";
import { forwardRefWrapper } from "@/helpers/helpers";

import styles from './styles.module.scss';

type Props = {
  onInput: () => void,
  placeholder?: string,
  stylesConfig?: TextAreaStyles,
}

const TextArea: FC<Props> = ({onInput, placeholder, stylesConfig}) => {
  return  <textarea className={styles.customTextArea} onInput={() => onInput()} style={stylesConfig} placeholder={placeholder}/>
}

const FormTextArea: ForwardRefExoticComponent<Props & RefAttributes<unknown>> = forwardRefWrapper<unknown, Props>(({onInput, placeholder, stylesConfig}, ref) => {
  return  <textarea className={styles.customTextArea} onInput={() => onInput()} style={stylesConfig} placeholder={placeholder}/>
})

export {
  TextArea,
  FormTextArea
}
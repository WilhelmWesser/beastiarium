import { CSSProperties, FC } from "react";
import styles from './styles.module.scss';

type InputStyles = CSSProperties & {
  "--custom-input-border-color": string,
}

const defaultInputStyles: InputStyles = {
  "--custom-input-border-color": 'firebrick'
}

type Props = {
  onInput: () => void,
  placeholder?: string,
  stylesConfig?: InputStyles
}

const Input: FC<Props> = ({placeholder, onInput, stylesConfig}) => {
  return  <input className={styles.customInput} onInput={() => onInput()} style={stylesConfig ?? defaultInputStyles} placeholder={placeholder}/>
}

export {
  Input
}
import { CSSProperties, FC } from "react";
import styles from './styles.module.scss'

type ButtonStyles = CSSProperties & {
  "--button-bg-color": string,
  "--button-name-color": string,
}

const defaultInputStyles: ButtonStyles = {
  "--button-bg-color": 'firebrick',
  "--button-name-color": 'black'
}

type Props = {
  name: string,
  onClick: () => void,
  stylesConfig?: ButtonStyles
}
const Button: FC<Props> = ({name, onClick, stylesConfig}) => {
  return <button className={styles.button} onClick={onClick} style={stylesConfig ?? defaultInputStyles} dangerouslySetInnerHTML={{__html: name}}></button>
}

export {
  Button
}
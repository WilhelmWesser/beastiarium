import { FC } from "react";
import { ButtonStyles } from "@/types/types";

import styles from './styles.module.scss'

type Props = {
  name: string,
  onClick: () => void,
  stylesConfig?: ButtonStyles
}
const Button: FC<Props> = ({name, onClick, stylesConfig}) => {
  return <button className={styles.button} onClick={onClick} style={stylesConfig} dangerouslySetInnerHTML={{__html: name}}></button>
}

export {
  Button
}
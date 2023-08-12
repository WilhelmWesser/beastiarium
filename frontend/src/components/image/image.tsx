import { FC } from "react";
import { ImageStyles } from "@/types/types";

import styles from './styles.module.scss';

type Props = {
  src: string
  stylesConfig?: ImageStyles,
  alt?: string
}

const Image: FC<Props> = ({src, stylesConfig, alt}) => {
  return  <img className={styles.image} style={stylesConfig} src={src} alt={alt}/>
}

export {
  Image
}
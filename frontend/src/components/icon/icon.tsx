import { FC, ReactElement } from "react";
import styles from './styles.module.scss'
import { LeadershipPosition } from "@/types/types";

type IconType = LeadershipPosition

const iconTypeToIconElement: Record<IconType, ReactElement> = {
  '1': <div className={styles.leadershipPosition}>1</div>,

  '2': <div className={styles.leadershipPosition}>2</div>,

  '3': <div className={styles.leadershipPosition}>3</div>,
}

type Props = {
  icon: IconType,
  onClick?: () => void
}

const Icon: FC<Props> = ({icon, onClick}) => {
  const iconToBindOnClick = iconTypeToIconElement[icon]

  if (!iconToBindOnClick) {
    return null
  }

  if (!onClick) {
    return iconToBindOnClick
  }

  return {...iconToBindOnClick, className: styles.icon, onClick}
}

export {
  Icon
}
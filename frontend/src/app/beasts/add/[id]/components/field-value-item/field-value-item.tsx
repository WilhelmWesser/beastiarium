import { FC } from "react";
import { Icon } from "@/components/components";

import styles from './styles.module.scss'
import { isLeadershipPosition } from "@/helpers/helpers";

type Props = {
  content: string,
  onClick: () => void,
  position: string,
  isSelected: boolean,
}

const FieldValueItem: FC<Props> = ({content, onClick, position, isSelected}) => {
  const isPositionLeaderPosition = isLeadershipPosition(position)

  return <div className={isSelected ? styles.fieldValueItemSelected : styles.fieldValueItem} onClick={onClick}>
    {isPositionLeaderPosition && <div className={styles.positionIconWrapper}><Icon icon={position}/></div>}
    <p className={styles.fieldValueItemContent}>{content}</p>
  </div>
}

export {
  FieldValueItem
}
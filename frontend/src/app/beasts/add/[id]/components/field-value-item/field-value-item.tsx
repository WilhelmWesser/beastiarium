import { FC } from "react";
import { Icon } from "@/components/components";

import styles from './styles.module.scss'
import { isLeadershipPosition } from "@/helpers/helpers";

type Props = {
  content: string,
  onClick: () => void,
  position: string
}

const FieldValueItem: FC<Props> = ({content, onClick, position}) => {
  const isPositionLeaderPosition = isLeadershipPosition(position)

  return <div className={styles.fieldValueItem} onClick={onClick}>
    {isPositionLeaderPosition && <div className={styles.positionIconWrapper}><Icon icon={position}/></div>}
    <p>{content}</p>
  </div>
}

export {
  FieldValueItem
}
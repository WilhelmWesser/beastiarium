import { FC } from "react";
import { Icon } from "@/components/components";
import { isLeadershipPosition } from "@/helpers/helpers";
import { SelectionFlag } from "./components/components";

import styles from './styles.module.scss'

type Props = {
  content: string,
  onClick: () => void,
  position: string,
  isSelected: boolean,
}

const FieldValueItem: FC<Props> = ({content, onClick, position, isSelected}) => {
  const isPositionLeaderPosition = isLeadershipPosition(position)

  return <div className={isSelected ? styles.selectedFieldValueItem : styles.fieldValueItem} onClick={onClick}>
    <div className={styles.fieldValueUpperSection}>{isSelected && <SelectionFlag/>}  {isPositionLeaderPosition && <div className={styles.topPadding}><Icon icon={position}/></div>}</div>
    <p className={styles.fieldValueItemContent}>{content}</p>
  </div>
}

export {
  FieldValueItem
}
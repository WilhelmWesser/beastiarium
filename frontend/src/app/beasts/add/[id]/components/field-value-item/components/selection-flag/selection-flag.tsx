import { FC } from "react";

import styles from './styles.module.scss'

const SelectionFlag: FC = () => (
  <div className={styles.selectionFlag}>
    <div className={styles.star}></div>
  </div>
)

export {
  SelectionFlag
}
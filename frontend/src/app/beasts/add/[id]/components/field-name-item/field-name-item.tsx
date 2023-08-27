import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  name: string,
  onClick: () => void
}

const FieldNameItem: FC<Props> = ({name, onClick}) => {
  return <div className={styles.field_name_item} onClick={() => onClick()}>
    <h3>{name}</h3>
  </div>
}

export {
  FieldNameItem
}
import { FC } from "react";
import styles from "./styles.module.scss"

type Props = {

}

const BeastPage: FC<Props> = () => {
  return (
    <div className={styles.beastPageWrapper}>
      <div className={styles.beastPage}></div>
    </div>
  )
}

export default BeastPage
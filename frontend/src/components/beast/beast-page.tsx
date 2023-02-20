import { FC } from "~/common/types/types";
import styles from "./styles.module.scss";

type Props = {};

const BeastPage: FC<Props> = () => {
  return (
    <div className={styles.beastPageWrapper}>
      <div className={styles.beastPage}></div>
    </div>
  );
};

export { BeastPage };

import { FC, ISteamStyles } from "@/types/types";
import styles from "./styles.module.scss";

type Props = {
  delayValue: number;
};

const Steam: FC<Props> = ({ delayValue }) => {
  const steamStyle: ISteamStyles = {
    "--steam-delay": delayValue,
  };
  return <div className={styles.steam} style={steamStyle}></div>;
};

export { Steam };

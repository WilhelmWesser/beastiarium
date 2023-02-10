import React from "react";
import { Steam } from "../../common/components/components";
import { FC } from "~/common/types/types";
import { BeastPage } from "../components";
import styles from "./styles.module.scss";
import { randomNumberHelper } from "../../common/helpers/helpers";

const viewPortWidth: number = window.visualViewport?.width ?? 1920;
const steamBlockWidth: number = viewPortWidth * 0.05;
const quantityOfSteamBlocks = Math.ceil(viewPortWidth / steamBlockWidth);
const steamsDelays: number[] = Array.from(Array(quantityOfSteamBlocks).keys());

const App: FC = () => {
  const STEAM_DELAY_WIGHT_MIN = 40;
  const STEAM_DELAY_WEIGHT_MAX = 50;
  return (
    <div id="app">
      <main>
        <BeastPage />
      </main>
      <div className={styles.steamSource}>
        {steamsDelays.map((_, index) => (
          <Steam
            key={index}
            delayValue={
              randomNumberHelper(1, steamsDelays.length) +
              randomNumberHelper(STEAM_DELAY_WIGHT_MIN, STEAM_DELAY_WEIGHT_MAX)
            }
          />
        ))}
      </div>
    </div>
  );
};

export { App };

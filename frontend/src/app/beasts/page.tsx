"use client"

import { FC } from "react";
import styles from "./styles.module.scss";
import { BeastCard } from "./components/components";
import { BeastsClasses } from "@/enums/beasts/beasts-classes";
import { Button, Input } from "@/components/components";

const filterIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-funnel\" viewBox=\"0 0 16 16\">\n" +
  "  <path d=\"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z\"/>\n" +
  "</svg>"

type Props = {};
const BeastPage: FC<Props> = () => {
  return (
    <div className={styles.beastsPageWrapper}>
        <div className={styles.beastsArea}>
          <div className={styles.upperBeastsArea}>
            <div className={styles.searchBeastInputWrapper}>
              <Input placeholder={'Search the beast...'} onInput={() => console.log('wassap')} stylesConfig={{'--custom-input-border-color': 'firebrick'}}/>
            </div>
            <Button name={filterIcon} onClick={() => console.log("Filters")}/>
          </div>
          <div className={styles.beastsCardsArea}>
            <div className={styles.beastsCardsList}>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
              <BeastCard name={"Ghoul"} image={"/ghoul.jpg"} beastClass={BeastsClasses.BEAST}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BeastPage
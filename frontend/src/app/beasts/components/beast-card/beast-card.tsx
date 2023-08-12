"use client"

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss"
import { BeastsClassesEnum } from "@/enums/beasts/beasts-classes.enum";
import { BeastCardFrameStyles } from "@/types/styles/styles";
import { getBeastCardFrameStyleConfig } from "@/configs/configs";

type Props = {
  name: string;
  image: string;
  beastClass: BeastsClassesEnum;
}

const BeastCard: FC<Props> = ({name, image, beastClass }) => {

  const [beastCardFrameStylesConfig, setBeastCardFrameStylesConfig] = useState<BeastCardFrameStyles>(getBeastCardFrameStyleConfig(beastClass))

  useEffect(() => {
    setBeastCardFrameStylesConfig(getBeastCardFrameStyleConfig(beastClass))
  }, [])

  return (
    <div className={styles.beastCard} style={beastCardFrameStylesConfig}>
      <div className={styles.imgWrapper} style={{overflow: 'hidden'}}>
        <Image src={image} alt={`${name} image`} width={200} height={250} style={{borderWidth: '2px'}}/>
      </div>
      <div className={styles.beastNameWrapper}>
        <h4 className={styles.beastName}>{name}</h4>
      </div>
    </div>
  )
}

export { BeastCard };
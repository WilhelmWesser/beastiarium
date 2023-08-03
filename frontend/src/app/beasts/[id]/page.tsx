import { FC } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import { getBeastInfoStylesConfig } from "@/configs/configs";
import { BeastsClasses } from "@/enums/enums";
import { BeastInfoPlotStyles } from "@/types/styles/styles";

type Props = {}

const beastClass: BeastsClasses = BeastsClasses.BEAST
const beastInfoStylesConfig: BeastInfoPlotStyles = getBeastInfoStylesConfig(beastClass)
const BeastPage: FC<Props> = () => {
  return (
    <div className={styles.beastPageWrapper}>
      <div className={styles.beastPage} style={beastInfoStylesConfig}>
        <div className={styles.beastAdditionalInfoWrapper}>
          <div className={styles.beastImageWrapper}>
            <Image src="/ghoul.jpg" alt="ghoul img" width={250} height={350} style={{borderRadius: '40px'}}/>
            <div className={styles.additionalInfoSectionsList}>
              <div className={styles.additionalInfoSection}>
                <h3 className={styles.additionalInfoSectionTitle}>
                  Weaknesses
                </h3>
                <p className={styles.additionalInfoSectionData}>
                  Silver sword, beast oil, blalalalalalallalalalallalalalallalalAAAAAAAAAAAAAAAAAAAA
                </p>
              </div>
              <div className={styles.additionalInfoSection}>
                <h3 className={styles.additionalInfoSectionTitle}>
                  Weaknesses
                </h3>
                <p className={styles.additionalInfoSectionData}>
                  Silver sword, beast oil, blalalalalalallalalalallalalalallalal
                </p>
              </div>
              <div className={styles.additionalInfoSection}>
                <h3 className={styles.additionalInfoSectionTitle}>
                  Weaknesses
                </h3>
                <p className={styles.additionalInfoSectionData}>
                  Silver sword, beast oil, blalalalalalallalalalallalalalallalalAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </p>
            </div>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.beastDescription}>
            <h1 className={styles.beastName}>Ghoul</h1>
            <hr className={styles.beastInfoTitleTextSeparator}/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lacus et lectus luctus fringilla fermentum id mauris. Quisque laoreet auctor ornare. Sed quis viverra turpis. Donec pharetra maximus augue, ac eleifend justo dapibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget nulla ut tellus vulputate placerat. Integer ullamcorper lacinia augue, a molestie nisl tempor id. Integer eu nibh id sem dapibus imperdiet. Sed viverra quis velit quis tristique. Quisque hendrerit pharetra mattis. Nam iaculis elit quis urna pellentesque, blandit tempus dolor porta. Duis est sem, fermentum sed lectus sed, tempus finibus justo. Aenean ut ligula varius, placerat ligula eu, sodales nibh.
            Mauris a tortor non leo interdum pellentesque fringilla a metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer consectetur hendrerit metus sed mollis. Quisque scelerisque fringilla massa, eget efficitur elit dapibus non. Integer sit.
          </p>
          <p className={styles.beastInGameDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante sem, interdum eget interdum quis, iaculis maximus nibh. Curabitur tristique accumsan felis ac mollis. Pellentesque enim dolor, iaculis scelerisque lacinia non, aliquet id ligula. Integer malesuada efficitur lorem, quis accumsan odio finibus sed. Quisque dictum efficitur urna et pharetra. Duis egestas blandit arcu in consectetur. Suspendisse nec odio placerat, auctor enim eget, interdum sem. Vivamus id semper ante. Donec blandit justo vitae efficitur facilisis. Proin purus mi, varius in arcu eu, porttitor elementum turpis. Suspendisse potenti. Curabitur ornare tristique euismod. Sed placerat risus vel risus pulvinar, sed suscipit nibh porta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BeastPage
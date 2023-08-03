import { BeastCardFrameStyles } from "@/types/types";
import { BeastsClasses } from "@/enums/beasts/beasts-classes";

const defaultBeastCardFrameStylesConfig: BeastCardFrameStyles = {
  "--card-color": '#4c4e52',
}

const beastsCardsFrameStylesConfigs: Record<BeastsClasses, BeastCardFrameStyles> = {
  [BeastsClasses.BEAST]: {
    "--card-color": 'firebrick',
  },
  [BeastsClasses.CURSED_ONES]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.DRACONID]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.ELEMENTA]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.HYBRID]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.INSECTICOID]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.NECROPHAG]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.OGROID]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.RELICT]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.SPECTER]: defaultBeastCardFrameStylesConfig,
  [BeastsClasses.VAMPIRE]: defaultBeastCardFrameStylesConfig,
};

const getBeastCardFrameStyleConfig: (beast: BeastsClasses) => BeastCardFrameStyles = (beast: BeastsClasses) => beastsCardsFrameStylesConfigs[beast] ?? defaultBeastCardFrameStylesConfig

export { getBeastCardFrameStyleConfig }
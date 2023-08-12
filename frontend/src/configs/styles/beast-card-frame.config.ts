import { BeastCardFrameStyles } from "@/types/types";
import { BeastsClassesEnum } from "@/enums/beasts/beasts-classes.enum";

const defaultBeastCardFrameStylesConfig: BeastCardFrameStyles = {
  "--card-color": '#4c4e52',
}

const beastsCardsFrameStylesConfigs: Record<BeastsClassesEnum, BeastCardFrameStyles> = {
  [BeastsClassesEnum.BEAST]: {
    "--card-color": 'firebrick',
  },
  [BeastsClassesEnum.CURSED_ONES]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.DRACONID]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.ELEMENTA]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.HYBRID]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.INSECTICOID]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.NECROPHAG]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.OGROID]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.RELICT]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.SPECTER]: defaultBeastCardFrameStylesConfig,
  [BeastsClassesEnum.VAMPIRE]: defaultBeastCardFrameStylesConfig,
};

const getBeastCardFrameStyleConfig: (beast: BeastsClassesEnum) => BeastCardFrameStyles = (beast: BeastsClassesEnum) => beastsCardsFrameStylesConfigs[beast] ?? defaultBeastCardFrameStylesConfig

export { getBeastCardFrameStyleConfig }
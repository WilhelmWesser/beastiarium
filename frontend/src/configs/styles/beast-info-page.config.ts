import { BeastInfoPlotStyles } from "@/types/types";
import { BeastsClassesEnum } from "@/enums/beasts/beasts-classes.enum";

const defaultBeastInfoStylesConfig: BeastInfoPlotStyles = {
  "--left-fade-border-color": '#4c4e52',
  "--blur-border-color": '#4c4e52',
  "--font-color": 'white'
}

const beastInfoPageConfigs: Record<BeastsClassesEnum, BeastInfoPlotStyles> = {
  [BeastsClassesEnum.BEAST]: {
    "--left-fade-border-color": 'firebrick',
    "--blur-border-color": 'firebrick',
    "--font-color": 'white'
  },
  [BeastsClassesEnum.CURSED_ONES]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.DRACONID]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.ELEMENTA]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.HYBRID]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.INSECTICOID]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.NECROPHAG]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.OGROID]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.RELICT]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.SPECTER]: defaultBeastInfoStylesConfig,
  [BeastsClassesEnum.VAMPIRE]: defaultBeastInfoStylesConfig,
};

const getBeastInfoStylesConfig: (beast: BeastsClassesEnum) => BeastInfoPlotStyles = (beast: BeastsClassesEnum) => beastInfoPageConfigs[beast] ?? defaultBeastInfoStylesConfig

export { getBeastInfoStylesConfig }
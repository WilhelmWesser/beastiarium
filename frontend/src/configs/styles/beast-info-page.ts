import { BeastInfoPlotStyles } from "@/types/types";
import { BeastsClasses } from "@/enums/beasts/beasts-classes";

const defaultBeastInfoStylesConfig: BeastInfoPlotStyles = {
  "--left-fade-border-color": '#4c4e52',
  "--blur-border-color": '#4c4e52',
  "--font-color": 'white'
}

const beastInfoPageConfigs: Record<BeastsClasses, BeastInfoPlotStyles> = {
  [BeastsClasses.BEAST]: {
    "--left-fade-border-color": 'firebrick',
    "--blur-border-color": 'firebrick',
    "--font-color": 'white'
  },
  [BeastsClasses.CURSED_ONES]: defaultBeastInfoStylesConfig,
  [BeastsClasses.DRACONID]: defaultBeastInfoStylesConfig,
  [BeastsClasses.ELEMENTA]: defaultBeastInfoStylesConfig,
  [BeastsClasses.HYBRID]: defaultBeastInfoStylesConfig,
  [BeastsClasses.INSECTICOID]: defaultBeastInfoStylesConfig,
  [BeastsClasses.NECROPHAG]: defaultBeastInfoStylesConfig,
  [BeastsClasses.OGROID]: defaultBeastInfoStylesConfig,
  [BeastsClasses.RELICT]: defaultBeastInfoStylesConfig,
  [BeastsClasses.SPECTER]: defaultBeastInfoStylesConfig,
  [BeastsClasses.VAMPIRE]: defaultBeastInfoStylesConfig,
};

const getBeastInfoStylesConfig: (beast: BeastsClasses) => BeastInfoPlotStyles = (beast: BeastsClasses) => beastInfoPageConfigs[beast] ?? defaultBeastInfoStylesConfig

export { getBeastInfoStylesConfig }
import StyleDictionary from "style-dictionary";

const styleDictionary = new StyleDictionary("config.json");
await styleDictionary.buildAllPlatforms();

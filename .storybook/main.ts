import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
const { override, fixBabelImports, adjustStyleLoaders, addLessLoader } = require('customize-cra');
import webPackConfig from "../config-overrides";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack"
    ],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	staticDirs: ["../public"],
    webpack: webPackConfig,
};


export default config;

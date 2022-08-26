import { deepMerge } from "grommet/utils";
import {grommet} from "grommet";

export const customTheme = deepMerge(grommet, {
    global: {
        font: {
            family: "'Metric', Arial, sans-serif",
            face: `
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }`
        },
        colors:{
            "neutral-3":"#DB7F8E"
        }

    }
});
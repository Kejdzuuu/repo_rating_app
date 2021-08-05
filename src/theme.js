import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    barTextPrimary: '#f7f7f7',
    appBarBackground: '#24292e',
    appBackground: '#e1e4e8',
    containerBackground: '#f7f7f7',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  padding: {
    barText: 14,
  }
};

export default theme;

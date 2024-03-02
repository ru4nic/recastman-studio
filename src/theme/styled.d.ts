import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: '#d3d3d3';
      darkText: '#454545';
      line: 'rgba(255, 255, 255, 0.25)';
    };
    font: {
      openSans: 'Open Sans';
    };
    borderRadius: '8px';
  }
}

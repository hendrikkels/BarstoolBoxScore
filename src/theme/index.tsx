declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: string,
    borderRadius: string,
    cardPadding: string,
    cardHeaderMargin: string,
    cardHeaderFontSize: string,
    cardFooterMargin: string,
    cardFooterFontSize: string,
    navbarHeight: string,
    navbarPaddingX: string,
    navbarItemFontSize: string,
    inputHeight: string,
    inputPaddingX: string,
    inputPaddingY: string,
    inputBorderWidth: string,
    inputBorderRadius: string,
    inputValueFontSize: string,
    inputLabelFontSize: string,
    inputLabelHeight: string,
    inputLabelPaddingLeft: string,
    inputErrorFontSize: string,
    inputErrorHeight: string,
    inputErrorPaddingLeft: string,
    buttonHeight: string,
    buttonPaddingX: string,
    buttonPaddingY: string,
    buttonBorderWidth: string,
    buttonBorderRadius: string,
    buttonLabelFontSize: string,
    buttonLabelLineHeight: string,
    scoreTableMinWidth: string,
    scoreTableBorderWidth: string,
    scoreTableFontSize: string,
    scoreTableTeamNameFontSize: string,
    scoreTableScoreFontSize: string,
    scoreTableRowHeight: string,
    scoreTableFooterHeight: string,

    fontFamily: string,
    navbarItemFontFamily: string,
    inputValueFontFamily: string,
    inputLabelFontFamily: string,
    inputErrorFontFamily: string,
    buttonLabelFontFamily: string,



    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      success: string,
      error: string,
      info: string,
      warning: string,
      red: string,
      orange: string,
      yellow: string,
      green: string,
      blue: string,
      purple: string,
      pink: string,
      gray: string,
      white: string,
      black: string,
      text: string,
      primaryBackground: string,
      secondaryBackground: string,
      navbarBackground: string,
      navbarItemActive: string,
      navbarItemInactive: string,
      inputText: string,
      inputTextDisabled: string,
      inputBackground: string,
      inputBorder: string,
      inputLabel: string,
      inputError: string,
      buttonForeground: string,
      buttonBackground: string,
      buttonBorder: string,
      buttonHoverMask: string,
      buttonPressMask: string,

      scoreTablePrimaryBackground: string,
      scoreTableSecondaryBackground: string,
      scoreTableTertiaryBackground: string,
      scoreTableHeaderBackground: string,
      scoreTableHeaderForeground: string,
      scoreTableForeground: string,
      scoreTableHeaderBorder: string,
      scoreTableBorder: string,
      scoreTableFooterBorder: string,
      scoreTableAwayBackground: string,
      scoreTableAwayForeground: string,
      scoreTableHomeBackground: string,
      scoreTableHomeForeground: string,
      scoreTableFooterBackground: string,
    },
  }
}

export const base = {
  fontSize: '1em',
  lineHeight: '1.75',
  borderRadius: '6px',
  cardPadding: '2.5em',
  cardHeaderMargin: '1.5em',
  cardHeaderFontSize: '2em',
  cardFooterMargin: '1.5em',
  cardFooterFontSize: '2em',
  navbarHeight: '5em',
  navbarPaddingX: '2.625em',
  navbarItemFontSize: '1.125em',
  inputHeight: '3em',
  inputPaddingX: '0.5em',
  inputPaddingY: '0.125em',
  inputBorderWidth: '0px',
  inputBorderRadius: '4px',
  inputValueFontSize: '1.25em',
  inputLabelFontSize: '0.875em',
  inputLabelHeight: '1.25em',
  inputLabelPaddingLeft: '0.125em',
  inputErrorFontSize: '0.625em',
  inputErrorHeight: '1.125em',
  inputErrorPaddingLeft: '0.25em',
  buttonHeight: '3em',
  buttonPaddingX: '1em',
  buttonPaddingY: '0em',
  buttonBorderWidth: '0px',
  buttonBorderRadius: '6px',
  buttonLabelFontSize: '1em',
  buttonLabelLineHeight: '1.75',

  scoreTableMinWidth: '200px',
  scoreTableBorderWidth: '0px',
  scoreTableFontSize: '1.25em',
  scoreTableTeamNameFontSize: '1em',
  scoreTableScoreFontSize: '1em',
  scoreTableRowHeight: '2.625em',
  scoreTableFooterHeight: '5em',

  fontFamily: '',
  navbarItemFontFamily: '',
  inputValueFontFamily: '',
  inputLabelFontFamily: '',
  inputErrorFontFamily: '',
  buttonLabelFontFamily: '',
};

export const light = {
  primary: '#5677fc',
  secondary: '#00c375',
  tertiary: '#f49e4c',
  success: '#00c375',
  error: '#ff5a5a',
  info: '#00cecb',
  warning: '#f49e4c',
  red: '#ff5a5a',
  orange: '#f49e4c',
  yellow: '#ffee6b',
  green: '#23d18c',
  blue: '#5677fc',
  purple: '#a29bfe',
  pink: '#ff5d8f',
  gray: '#cccccc',
  white: '#ffffff',
  black: '#000000',
  text: '#000000',
  primaryBackground: '#ffffff',
  secondaryBackground: '#f8f8f8',
  navbarBackground: '#e1e1e1',
  navbarItemActive: '#5677fc',
  navbarItemInactive: '#000000',
  inputText: '#000000',
  inputTextDisabled: '#757575',
  inputBackground: '#0000000d',
  inputBorder: '#0000000d',
  inputLabel: '#888888',
  inputError: '#ff5a5a',
  buttonForeground: '#ffffff',
  buttonBackground: '#5677fc',
  buttonBorder: '#5677fc',
  buttonHoverMask: '#0000000e',
  buttonPressMask: '#0000000e',

  scoreTablePrimaryBackground: '#ffffff',
  scoreTableSecondaryBackground: '#eeeeee',
  scoreTableTertiaryBackground: '#bbbbbb',
  scoreTableHeaderBackground: '#ffffff',
  scoreTableHeaderForeground: '#000000',
  scoreTableForeground: '#000000',
  scoreTableHeaderBorder: '#cccccc',
  scoreTableBorder: '#cccccc',
  scoreTableFooterBorder: '#cccccc',
  scoreTableAwayBackground: '#ff5a5a',
  scoreTableAwayForeground: '#ffffff',
  scoreTableHomeBackground: '#5677fc',
  scoreTableHomeForeground: '#ffffff',
  scoreTableFooterBackground: '#bbbbbb',
};

export const dark = {
  primary: '#5677fc',
  secondary: '#23d18c',
  tertiary: '#f49e4c',
  success: '#00c375',
  error: '#ff5a5a',
  info: '#00cecb',
  warning: '#f49e4c',
  red: '#ff5a5a',
  orange: '#f49e4c',
  yellow: '#ffee6b',
  green: '#23d18c',
  blue: '#5677fc',
  purple: '#a29bfe',
  pink: '#ff5d8f',
  gray: '#555555',
  white: '#ffffff',
  black: '#000000',
  text: '#ffffff',
  primaryBackground: '#000000',
  secondaryBackground: '#111111',
  navbarBackground: '#1a1a1a',
  navbarItemActive: '#5677fc',
  navbarItemInactive: '#ffffff',
  inputText: '#ffffff',
  inputTextDisabled: '#757575',
  inputBackground: '#ffffff40',
  inputBorder: '#ffffff40',
  inputLabel: '#cccccc',
  inputError: '#ff5a5a',
  buttonForeground: '#ffffff',
  buttonBackground: '#5677fc',
  buttonBorder: '#5677fc',
  buttonHoverMask: '#ffffff20',
  buttonPressMask: '#ffffff20',

  scoreTablePrimaryBackground: '#222222',
  scoreTableSecondaryBackground: '#444444',
  scoreTableTertiaryBackground: '#111111',
  scoreTableHeaderBackground: '#222222',
  scoreTableHeaderForeground: '#ffffff',
  scoreTableForeground: '#ffffff',
  scoreTableHeaderBorder: '#555555',
  scoreTableBorder: '#555555',
  scoreTableFooterBorder: '#555555',
  scoreTableAwayBackground: '#ff5a5a',
  scoreTableAwayForeground: '#ffffff',
  scoreTableHomeBackground: '#5677fc',
  scoreTableHomeForeground: '#ffffff',
  scoreTableFooterBackground: '#555555',
};
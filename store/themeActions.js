import { lightTheme, darkTheme } from "../constants";

export const TOGGLE_THEME_BEGIN = "TOGGLE_THEME_BEGIN";
export const TOGGLE_THEME_SUCCESS = "TOGGLE_THEME_SUCCESS";
export const TOGGLE_THEME_FAILURE = "TOGGLE_THEME_FAILURE";

export const toggleThemeBegin = () => ({
  type: TOGGLE_THEME_BEGIN,
});

export const toggleThemeSuccess = (selectedTheme) => ({
  type: TOGGLE_THEME_SUCCESS,
  payload: { selectedTheme },
});

export const toggleThemeFailure = (error) => ({
  type: TOGGLE_THEME_FAILURE,
  payload: { error },
});

export function toggleTheme(themeType) {
  return (dispatch) => {
    dispatch(toggleThemeBegin());

    switch (themeType) {
      case "dark":
        dispatch(toggleThemeSuccess(darkTheme));
        break;
      case "light":
        dispatch(toggleThemeSuccess(lightTheme));
        break;
      default:
        dispatch(toggleThemeFailure({ error: "Invalid theme type" }));
        break;
    }
  };
}

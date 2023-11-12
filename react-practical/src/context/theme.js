import { createContext, useContext } from "react";

// create a context with a default value211
export const ThemeContext = createContext({
    themeMode:'light',
    lightTheme:()=>{},
    darkTheme:()=>{}
});
// create a themeProvider as well
export const ThemeContextProvider = ThemeContext.Provider;
// create a custom hook for useContext
export default function useTheme(){
    return useContext(ThemeContext);
}

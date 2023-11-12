# Project to toggle from between dark and ligh mode
- In this we will learn a newer style to use Context Api , by using custom hooks, in which we wirte everything in one place.
- First we createContext in theme.js , by providing default values and methods with only decaltions
```bash
./src/context/theme.js
```
```javascript
import {createContext} from 'react;
export const ThemeContext = createContext({
    themeMode:'light',
    lightTheme:()=>{},
    darkTheme:()=>{}
});
```
- Second in the same file we create ThemeContextProvider as a **variable** and export it.
```javascript
import {createContext} from 'react;
export const ThemeContext = createContext();
export const ThemeContextProvider = ThemeContext.Provider;
```
- Thirdly, we create a **custom hook** that can use useContext w/o providing someContext.
```javascript
import {createContext,useContext} from 'react;
export const ThemeContext = createContext();
export const ThemeContextProvider = ThemeContext.Provider;
export default useTheme(){
    return useContext(ThemeContext);
}
```
- In the previous method or style , we did this similar process in three pieces
- Fourth, we now come in App.jsx and add `ThemeContextProvider` having value props as defined while creating context.
- Additionaly , we also need to define all the value props inside App function.
```javascript
function App() {
    const [themeMode, setThemeMode] = useState("light");
    function lightTheme() { 
      setThemeMode("light");
    }
    function darkTheme() {
      setThemeMode("dark");
    }
    // everytime the themeMode changes i re-render my page
    useEffect(()=>{
      document.querySelector('html').classList.remove('light','dark');
      if(themeMode === 'light'){
        document.querySelector('html').classList.add('light');
      }else{
        document.querySelector('html').classList.add('dark');
      
      }
    },[themeMode])
    return (
        <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme}}>
            <ThemeBtn/>
            <Card/>
        </ThemeContextProvider>
    )
}  
```
- Fifth , inside ThemeBtn, we make use of our custom hook to get values for our theme context.
```javascript
function ThemeBtn(){
    const {themeMode, lightTheme, darkTheme}=useTheme();
    function themeSwitch(e){
        let themeStatus = e.currentTarget.checked;
        if(themeStaus===true){
            darkTheme();
        }else{
            lightTheme();
        }
    }
    return(
        <div>
            <input
            type="checkbox"
            onChange={(e)=>themeSwitch(e)}
            value={themeMode}
            />
            <label>Theme</label>
        </div>
}

```
- this is how we do it using customHooks.
- **Note** - Dont forget to add configurations in tailwind for darkMode.
```bash
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
```
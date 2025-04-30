/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-23 21:46:25
 * @LastEditTime: 2025-04-26 21:15:52
 * @LastEditors: renlirong
 */
// 使用Context API实现主题切换功能（light/dark模式）

















// const ThemeContext = React.createContext()


// const ThemeProvider = ({ children })=>{
//     const [theme,setTheme] = useState('light')
//     const changeTheme = ()=>{
//         setTheme(theme=>theme==='light'?'dark':'light')
//     }
//     return (
//         <ThemeContext.Provider value = {{theme,changeTheme}}>
//             <div className={theme}>
//             { children }
//             </div>
//         </ThemeContext.Provider>
//     )
// }

// function App(){
//     const {theme,changeTheme} = useContext(ThemeContext)
//     return (
//         <div>
//             <ThemeProvider>
//                 <button onClick={changeTheme}>change Theme</button>
//                 Theme: {theme}
//             </ThemeProvider>
//         </div>
//     )
// }




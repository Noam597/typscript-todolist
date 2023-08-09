import React,{useState,useContext,createContext} from 'react'

interface ContextProps  {
    dark:boolean,
    setDark:React.Dispatch<React.SetStateAction<boolean>>
}
type DarkThemeProps = {
    children:React.ReactNode
}

const DarkThemeContext = createContext({} as ContextProps)

 
export const TodoThemeContext = ({children}:DarkThemeProps) => {

    const [dark, setDark] = useState<boolean>(false)
   
  return (
    <DarkThemeContext.Provider value={{dark,setDark}}>
       {children}
    </DarkThemeContext.Provider>
  )
}


export const DarkTheme =()=>{
    return useContext(DarkThemeContext)
}


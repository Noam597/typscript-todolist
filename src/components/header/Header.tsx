import React,{useState,useEffect} from 'react'
import { DarkTheme } from '../context'
import styles from './header.module.css'

const Header:React.FC = () => {

  const {dark,setDark} = DarkTheme()
    const [clock, setClock] = useState<string>();

    
  const style ={
    backgroundColor:dark?"black":"#5def5d"
  }

    useEffect(() => {
        setInterval(() => {
          let time = new Date();
          setClock(time.toLocaleTimeString());
        }, 1000);
      }, []);
    const switchDarkTheme = ()=>{
        setDark(!dark)
    }


    
  return (
    <div className={`${styles.header} ` + (dark?`${styles.light}`:`${styles.dark}`)}>
        <h1>{clock}</h1>
        <h1>TO-DO List</h1>
        <div className={styles.themeButton} onClick={switchDarkTheme} style={style}>
                <div className={dark?`${styles.night}`:`${styles.day}`}></div>
                
        </div>
            
        
    </div>
  )
}

export default Header
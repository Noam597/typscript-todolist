import React from 'react';
import styles from './footer.module.css';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';


const Footer :React.FC= () => {
  return (
    <div className={styles.footer}>
     <div>
        <a href='https://linkedin.com/in/noam-harris'  rel="noreferrer" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/Noam597/typscript-todolist" rel="noreferrer" target="_blank"><AiFillGithub/></a>
     </div>
    </div>
  )
}

export default Footer
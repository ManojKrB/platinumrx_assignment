import React from 'react';
import styles from './Note.module.css';

const Note = () => {
  return (
    <div className={styles.note}>
        <div className={styles.delete}>&times;</div>  
        <textarea name='' cols={30} rows={10}></textarea>
        <div className={styles.edit}>Edit</div>  
    </div>
  )
}

export default Note
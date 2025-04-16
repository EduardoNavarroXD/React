import React from 'react'

import "./StylesExamples.css"

import styles from "./StylesExamples.module.css"

const StylesExamples = () => {

    const inlineStyle = {
        color: "red",
        fontsize: "20px",
    }

  return (
    <div>
        <h2 style={inlineStyle}>Estilos inline</h2>

        <p className='text'>Meu CSS</p>

        <p className={styles.textPurple}>meu css modules</p>
    </div>
  )
}

export default StylesExamples
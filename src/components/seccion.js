import React from 'react'
import AudioPlayer from './audioPlayer'
import TextoConInputs from './textoConInputs'

function Seccion() {
  return (
    <>
    <AudioPlayer src={'/audios/audio1.mp3'}></AudioPlayer>
    <TextoConInputs></TextoConInputs>
   </>
  )
}

export default Seccion


export default function Controls({
  buttonPause, 
  buttonPlay,  
}){

  function play() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
  }

  function pause() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
  }

  function resetControls() {    
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")    
  }  

  return {
    play,
    pause,
    resetControls,    
  }
}
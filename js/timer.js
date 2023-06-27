import { buttonPause, buttonPlay } from "./elements.js"

export default function Timer ({
  displayMinutes,
  displaySeconds,
}){

  let minutes = Number(displayMinutes.textContent)
  let timerTimerOut

  function resetControls(){
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }
  

  function updateDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, "0") 
    displaySeconds.textContent = String(seconds).padStart(2, "0")
  }

  function reset(){  
    updateDisplay(minutes, 0)
    clearTimeout(timerTimerOut)
  }

  function countdown(){
    timerTimerOut = setTimeout(function() {

      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) { 
        resetControls()              
        updateDisplay(minutes, 0)
        return
      }

      if ( seconds <= 0 ) {
        seconds = 60

        displayMinutes.textContent = String(minutes - 1).padStart(2, "0")
      }
      
      displaySeconds.textContent = String(seconds - 1).padStart(2, "0")

      countdown()

    }, 1000) 
  }


  function updateMinutes() {
    minutes = Number(displayMinutes.textContent)
  }

  function hold() {
    clearTimeout(timerTimerOut)
  }

  function addTimer(minutes){
    minutes = Number(displayMinutes.textContent)
    displayMinutes.textContent = String(Number(minutes + 5)).padStart(2, "0")
  }
  
  
  function decreaseTimer(minutes){
    minutes = displayMinutes.textContent;

    if (minutes > 0) {
        displayMinutes.textContent = String(Number(Math.max(minutes - 5, 0))).padStart(2, "0");
    }
  }

  return {
    updateDisplay,
    reset,
    countdown,
    updateMinutes,
    hold,
    addTimer,
    decreaseTimer
  }

  
}
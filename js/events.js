import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonTree,
  buttonTree1,
  buttonRain,
  buttonRain1,
  buttonCoffeeShop,
  buttonCoffeeShop1,
  buttonFire,
  buttonFire1,  
} from "./elements.js"


export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
  })
  
  buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
  })
  
  buttonStop.addEventListener('click', function(){
    controls.resetControls()
    timer.reset()
  })
  
  buttonAdd.addEventListener('click', function(){
    timer.addTimer()
  })
  
  buttonRemove.addEventListener('click', function(){
    timer.decreaseTimer()
  })
  
  buttonTree.addEventListener('click', function(){
    buttonTree.classList.add("hide")
    buttonTree1.classList.remove("hide")    
    sound.tree()
  })
  
  buttonTree1.addEventListener('click', function(){
    buttonTree1.classList.add("hide")
    buttonTree.classList.remove("hide")
    sound.soundOff()
  })
  
  buttonRain.addEventListener('click', function(){
    buttonRain.classList.add("hide")
    buttonRain1.classList.remove("hide")
    sound.rain()
  })
  
  buttonRain1.addEventListener('click', function(){
    buttonRain1.classList.add("hide")
    buttonRain.classList.remove("hide")
    sound.soundOff()
  })
  
  buttonCoffeeShop.addEventListener('click', function(){
    buttonCoffeeShop.classList.add("hide")
    buttonCoffeeShop1.classList.remove("hide")
    sound.coffeeShop()
  })
  
  buttonCoffeeShop1.addEventListener('click', function(){
    buttonCoffeeShop1.classList.add("hide")
    buttonCoffeeShop.classList.remove("hide")
    sound.soundOff()
  })
  
  buttonFire.addEventListener('click', function(){
    buttonFire.classList.add("hide")
    buttonFire1.classList.remove("hide")
    sound.fire()
  })
  
  buttonFire1.addEventListener('click', function(){
    buttonFire1.classList.add("hide")
    buttonFire.classList.remove("hide")
    sound.soundOff()
  })
}
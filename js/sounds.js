export default function () {
  const soundsTree = new Audio("./sounds/Floresta.wav")
  const soundsRain = new Audio("./sounds/Chuva.wav")
  const soundsCoffeeShop = new Audio("./sounds/Cafeteria.wav")
  const soundsFire = new Audio("./sounds/Lareira.wav")

  soundsTree.loop = true
  soundsRain.loop = true
  soundsCoffeeShop.loop = true
  soundsFire.loop = true

  function tree() {
    soundsTree.play()
  }

  function rain() {
    soundsRain.play()
  }

  function coffeeShop() {
    soundsCoffeeShop.play()
  }

  function fire() {
    soundsFire.play()
  }
  function soundOff() {
    soundsTree.pause()
    soundsRain.pause()
    soundsCoffeeShop.pause()
    soundsFire.pause()
  }

  
  return {
    tree,
    rain,
    coffeeShop,
    fire,
    soundOff
  }
}


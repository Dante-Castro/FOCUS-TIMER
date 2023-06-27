import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
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
  displayMinutes,
  displaySeconds
} from "./elements.js"

const sound = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause,  
})

const timer = Timer({
  displayMinutes,
  displaySeconds
})


Events({controls, sound, timer})

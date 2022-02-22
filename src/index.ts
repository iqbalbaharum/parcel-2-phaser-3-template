import Phaser from "phaser"

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#333333',
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight,
    pageAlignHorizontally: true,
  },
  pixelArt: true,
  fps: {
    target: 60,
    min: 15,
    forceSetTimeOut: true,
  },
  scene: [],
}

export default new Phaser.Game(config)

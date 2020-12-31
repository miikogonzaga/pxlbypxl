import Gohan from '../images/Gohan.png'

import Pichu from '../images/pichu/pichu.png'
import PichuWallpaper from '../images/pichu/pichu-wallpaper.png'

import Vulpix from '../images/vulpix/vulpix.png'
import VulpixWallpaper from '../images/vulpix/vulpix-wp.png'

import Squirtle from '../images/squirtle/squirtle.png'
import SquirtleWallpaper from '../images/squirtle/squirtle-wp.png'

const Characters = [
  {
    topic: 'Pokémon',
    name: 'Squirtle',
    img: {
      url: Squirtle,
      alt: 'Squirtle',
      wallpaper: SquirtleWallpaper
    }
  },
  {
    topic: 'Pokémon',
    name: 'Pichu',
    img: {
      url: Pichu,
      alt: 'Pichu',
      wallpaper: PichuWallpaper
    }
  },
  {
    topic: 'Pokémon',
    name: 'Vulpix',
    img: {
      url: Vulpix,
      alt: 'Vulpix',
      wallpaper: VulpixWallpaper
    }
  },
  {
    topic: 'Dragonball Z',
    name: 'Gohan',
    img: {
      url: Gohan,
      alt: 'Gohan',
      wallpaper: null
    }
  }
]

export default Characters

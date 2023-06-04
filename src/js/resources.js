import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import background from '../images/background.png'
import tile from '../images/tile.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Background: new ImageSource(background),
    Tile: new ImageSource(tile)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Background, Resources.Tile])

export { Resources, ResourceLoader }
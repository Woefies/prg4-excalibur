import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerrun from '../images/punk/punk_run.png'
import playeridle from '../images/punk/punk_idle.png'
import enemyrun from '../images/5/Walk.png'
import background from '../images/background-cropped.png'
import tile from '../images/tile.png'

const Resources = {
    PlayerRun: new ImageSource(playerrun),
    PlayerIdle: new ImageSource(playeridle),
    EnemyRun: new ImageSource(enemyrun),
    Background: new ImageSource(background),
    Tile: new ImageSource(tile)
}
const ResourceLoader = new Loader([Resources.PlayerRun, Resources.PlayerIdle, Resources.EnemyRun, Resources.Background, Resources.Tile])

export { Resources, ResourceLoader }
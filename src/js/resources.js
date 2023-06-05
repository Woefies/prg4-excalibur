import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import punk from '../images/punk/punk.png'
import playerrun from '../images/punk/punk_run.png'
import playeridle from '../images/punk/punk_idle.png'
import enemyrun from '../images/5/enemy.png'
import background from '../images/background-cropped.png'
import tile from '../images/tile.png'

const Resources = {
    Punk: new ImageSource(punk),
    PlayerRun: new ImageSource(playerrun),
    PlayerIdle: new ImageSource(playeridle),
    EnemyRun: new ImageSource(enemyrun),
    Background: new ImageSource(background),
    Tile: new ImageSource(tile)
}
const ResourceLoader = new Loader([Resources.Punk, Resources.PlayerRun, Resources.PlayerIdle, Resources.EnemyRun, Resources.Background, Resources.Tile])

export { Resources, ResourceLoader }
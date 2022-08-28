import './cards.css'
import {Imagenes} from './imagenes/imagenes'
import aatrox from '../../assets/aatrox.jpg'
import brand from '../../assets/brand.jpg'
import caitlyn from '../../assets/caitlyn.jpg'
import corki from '../../assets/corki.jpg'
import darius from '../../assets/darius.jpg'
import drmundo from '../../assets/drmundo.jpg'
import draven from '../../assets/draven.jpg'
import fizz from '../../assets/fizz.jpg'
import janna from '../../assets/janna.jpg'
import jax from '../../assets/jax.jpg'
import karma from '../../assets/karma.jpg'
import jinx from '../../assets/jinx.jpg'
import leeSin from '../../assets/leeSin.jpg'
import lucian from '../../assets/lucian.jpg'
import lulu from '../../assets/lulu.jpg'
import lux from '../../assets/lux.jpg'
import maestroyi from '../../assets/maestroyi.jpg'
import missfortune from '../../assets/missfortune.jpg'

export const Cards = () => {
    return(
        <div className='cardContainer'>
        <Imagenes imagen={aatrox} poder={100} texto="soy aatrox"/>
        <Imagenes imagen={brand} poder={99} texto="soy nombre de champion"/>
        <Imagenes imagen={caitlyn} poder={98} texto="soy nombre de champion"/>
        <Imagenes imagen={corki} poder={9} texto="soy nombre de champion"/>
        <Imagenes imagen={darius} poder={56} texto="soy nombre de champion"/>
        <Imagenes imagen={draven} poder={65} texto="soy nombre de champion"/>
        <Imagenes imagen={drmundo} poder={55} texto="soy nombre de champion"/>
        <Imagenes imagen={fizz} poder={66} texto="soy nombre de champion"/>
        <Imagenes imagen={janna} poder={77} texto="soy nombre de champion"/>
        <Imagenes imagen={jax} poder={88} texto="soy nombre de champion"/>
        <Imagenes imagen={lucian} poder={99} texto="soy nombre de champion"/>
        <Imagenes imagen={jinx} poder={11} texto="soy nombre de champion"/>
        <Imagenes imagen={karma} poder={22} texto="soy nombre de champion"/>
        <Imagenes imagen={leeSin} poder={33} texto="soy nombre de champion"/>
        <Imagenes imagen={lulu} poder={44} texto="soy nombre de champion"/>
        <Imagenes imagen={lux} poder={55} texto="soy nombre de champion"/>
        <Imagenes imagen={missfortune} poder={47} texto="soy nombre de champion"/>
        <Imagenes imagen={maestroyi} poder={85} texto="soy nombre de champion"/>
        </div>
    )
}
import React from "react";
import './stylesInfografia.css';
import img_proceso_transquilado from './imagenes/proceso_trasnquilado.png'
import img_lavado_lana from './imagenes/lavando_lana.png'
import img_lavado_lana_animado from './imagenes/animation_fox.mp4'
import img_pushca from './imagenes/la_pushca.png'
import img_preparando_hierbas from './imagenes/preparando_hierbas.png'
import animation_preparando_hierbas from './imagenes/fox_cooking.mp4'
import img_teñido_lana from './imagenes/tiñendo_lana.png'
import { useTranslation } from 'react-i18next';

function Infografia(){
    const {t} = useTranslation()
    return(
        <div className="infografia">
            <div className="seccion">
                <div className="imagen_referencia">
                    <img src={img_proceso_transquilado} alt="imagen_referencia" />
                </div>
                <div className="descripcion_imagen">
                    <h1>Transquilado de la lana de oveja</h1>
                    <p>Se corta la lana de la oveja cuidadosamente usando tijeras especiales. Este proceso no daña al animal y permite recolectar la fibra base del tejido artesanal.</p>
                </div>
            </div>

            <div className="seccion">
                <div className="descripcion_imagen">
                    <h1>Lavado de la lana</h1>
                    <p>La lana se sumerge en agua tibia varias veces para eliminar la suciedad, la grasa natural y otras impurezas, dejándola lista para el hilado.</p>
                </div>
                <div className="imagen_referencia hover-cambio">
                    <img src={img_lavado_lana} alt="imagen_referencia" className="img-estatica"/>
                    <video
                        src={img_lavado_lana_animado}
                        className="img-animada"
                        autoPlay
                        loop
                        muted
                        playsInline
                        />
                </div>
            </div>

            <div className="seccion">
                <div className="imagen_referencia">
                    <img src={img_pushca} alt="imagen_referencia" />
                </div>
                <div className="descripcion_imagen">
                    <h1>Hilado de la lana</h1>
                    <p>Utilizando una herramienta tradicional llamada pushka, la lana se convierte en hilos delgados y resistentes, listos para el teñido o tejido.</p>
                </div> 
            </div>

            <div className="seccion">
                <div className="descripcion_imagen">
                    <h1>Hervido de hierbas</h1>
                    <p>Se recolectan y hierven plantas y raíces de la zona andina, como la cochinilla o molle, para obtener tintes completamente naturales.</p>
                </div>
                <div className="imagen_referencia hover-cambio">
                    <img src={img_preparando_hierbas} alt="imagen_referencia" className="img-estatica"/>
                    <video
                        src={animation_preparando_hierbas}
                        className="img-animada"
                        autoPlay
                        loop
                        muted
                        playsInline
                        />
                </div>
            </div>

            <div className="seccion">
                <div className="imagen_referencia">
                    <img src={img_teñido_lana} alt="imagen_referencia" />
                </div>
                <div className="descripcion_imagen">
                    <h1>Teñido de la lana hilada</h1>
                    <p>La lana ya hilada se tiñe sumergiéndola en el extracto de hierbas caliente. Se remueve constantemente para lograr colores vivos y duraderos.</p>
                </div>
            </div>

            <div className="seccion">
                <div className="descripcion_imagen">
                    <h1>Resultado final</h1>
                    <p>Finalmente se obtiene una lana colorida, suave y ecológica, lista para ser tejida en prendas o artesanías únicas.</p>
                </div>
                <div className="imagen_referencia">
                    <img src={img_teñido_lana} alt="imagen_referencia" />
                </div>
            </div>
        </div>

    )
}

export default Infografia
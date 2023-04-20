import React, { useContext, useRef } from "react";
import { AliensContext } from "../contexts/AliensContext";
import anime from "animejs";



const GameOver = () => {
  const ovniRef = useRef(null);
  const { currentScene, assets } = useContext(AliensContext);

  //para reiniciar la pantalla y comenzar la partida
  const startGame = (e) => {
    window.location.reload();
    return false;
  };

  anime({
    targets: ovniRef.current,
    rotate: {
        value: '+=2turn',
        duration: 1800,
        easing: 'easeInOutSine'
    },
    autoplay: true,
    loop: true
});

  const isActive= currentScene === "gameover" ? "ative": "";
  return <div className={isActive + " scene gameover"} ><h2>Game Over</h2>
  <img ref={ovniRef} src={assets.enem2} alt="aliens"/>
  <button className="button" onClick={startGame}>Reiniciar</button>
  </div>;
};

export default GameOver;

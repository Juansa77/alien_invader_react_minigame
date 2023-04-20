import React, { useRef, useEffect, useContext} from 'react'
import { AliensContext } from '../contexts/AliensContext'
import anime from 'animejs'
import laser from '../img/laser.png';

const Laser = ({id}) => {
  const laserRef = useRef(null);
    const { shoot, setShoot } = useContext(AliensContext);

    useEffect(() => {
        if (shoot.hit && shoot.id === id) {
            anime({
                targets: laserRef.current,
                translateY: '-50vh',
                opacity: 0,
                duration: 500,
                complete: function(anim) {
                    console.log(anim);
                    this.reset();
                    setShoot({id: id, hit: false});
                }
            });
        }
        
    });
  return (
    <div id={id} className="laser" ref={laserRef}>
            <img src={laser} alt='laser'/>
        </div>
  )
}

export default Laser
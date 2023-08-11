import {useRef} from 'react';
import moon from './moon.png';
import greenland from './greenland.png';
import cat from './cat.gif';

import{Parallax, ParallaxLayer} from '@react-spring/Parallax';
function App() {
  const ref = useRef();
  return (
  
      <div>
        <Parallax pages={4} ref={ref}>

        <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize:'cover',
        }}
        />

        <ParallaxLayer
        offset={1}
        speed={1}
        factor={4}
        style={{
          backgroundImage:`url(${greenland})`,
          backgroundSize: 'cover',
        }}>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{ start: 1, end: 2.6}}
        style={{ textAlign : 'center'}}>
        <img src={cat}/>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0.2}
        speed={0.05}
        onClick={() => ref.current.scrollTo(1)}>
          <h1>Welcome to my website</h1>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={3}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}>
          <h1>Reached</h1>
          <h1>........</h1>
        </ParallaxLayer>


        </Parallax>
      </div>
      
  );
}
export default App;


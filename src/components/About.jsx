import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const About = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className=' m-3 px-3 rounded-[20px]'>
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_dHiAy3oz6Q.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
        </div>
    );
};

export default About;
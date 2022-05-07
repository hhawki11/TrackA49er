import React from 'react';
import poster from './poster.png'


function Home() {
    return (
        <>
            <img className='poster' src={poster} alt="Poster" style={{maxHeight: '57%', maxWidth: '57%', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
        </>
    );
} 

export default Home;
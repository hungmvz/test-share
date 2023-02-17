import React, { useCallback } from 'react';
import './App.css';
import image from './bye.jpg';
import bg from './bg.jpg';
import test from './mv_cryptogfm.png';

function App() {
    const title = 'this is share title';
    const text = 'this is share text';
    const onShareClick = useCallback(() => {
        navigator.share({
            title,
        })
    }, []);

    const onShareMailClick = useCallback(() => {
        window.open("mailto:?subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(text), '_blank');
    }, []);

    return (
        <div className='bg'>
            <div className='container'>
                <div className='main-container' style={{
                    height: window.innerHeight,
                }}>
                    <img src={image} className="w-100" style={{
                        objectFit: 'contain',
                        maxHeight: '90vh'
                    }} />
                </div>
            </div>
        </div>
    );
}

export default App;

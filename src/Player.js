import React from 'react';
import Body from './Body.js';
import Footer from './Footer.js';
import './Player.css'
import Sidebar from './Sidebar.js';

function Player({spotify}){
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player
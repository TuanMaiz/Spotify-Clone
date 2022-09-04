import React from 'react'
import "./Body.css"
import Header from "./Header.js"
import SongRow from './SongRow.js'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import {useDataLayerValue} from "./DataLayer.js"


function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src= {discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledOutlinedIcon className="body__shuffle"/>
                    <FavoriteBorderOutlinedIcon fontSize="large"/>
                    <MoreHorizOutlinedIcon />
                </div>
                <div> 
                    {discover_weekly?.tracks.items.map(item =>{
                        return (
                            <SongRow track={item.track}/>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Body
import React from 'react'
import './Sidebar.css'
import { useDataLayerValue } from './DataLayer';
import SidebarOption from './SidebarOption.js'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="" />
            <SidebarOption Icon={HomeOutlinedIcon} title={"Home"}/>
            <SidebarOption Icon={SearchOutlinedIcon} title={"Search"}/>
            <SidebarOption Icon={LibraryMusicOutlinedIcon} title={"Your Library"}/>
            <strong className="sidebar__title">Playlists</strong>
            <hr />
            {/* Playlist down here */}
            {playlists?.items?.map((playlist)=>{
                return (
                    <SidebarOption title={playlist.name}/>
                )
            })}
            {/* <Playlist> */}


            
        </div>
    )
}

export default Sidebar
import React from 'react'
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Avatar} from "@mui/material";
import {useDataLayerValue} from './DataLayer.js'
function Header() {
    const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchOutlinedIcon/>
                <input
                    placeholder="Search for artists, song and more.."
                    type="text" />
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>

            </div>
        </div>
    )
}

export default Header

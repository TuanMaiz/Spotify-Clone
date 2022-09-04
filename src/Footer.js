import React from 'react'
import './Footer.css'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import { Grid, Slider } from "@mui/material";
function Footer() {
    return (
    <div className="footer">
        <div className="footer__left">
            <img
                className="footer__albumLogo"
                src=""
                alt="" />
            <div className="footer__songInfo">
                <h4 className="footer__songName">{ "No song is playing"}</h4>
                <p className="footer__artist">{"asd"}</p>
            </div>
        </div>
        <div className="footer__center">
            <ShuffleOutlinedIcon className="footer__green"/>
            <SkipPreviousOutlinedIcon className="footer__icon"/>
            <PlayCircleFilledWhiteOutlinedIcon className="large"/>
            <SkipNextOutlinedIcon className="footer__icon"/>
            <RepeatOutlinedIcon className="footer__green"/>
        </div>
        <div className="footer__right">
        <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayOutlinedIcon />
            </Grid>
            <Grid item>
                <VolumeDownOutlinedIcon />
            </Grid>
            <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
            </Grid>
        </Grid>
        </div>
    </div>
    )
}

export default Footer
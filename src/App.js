import './App.css'
import {useState ,useEffect} from "react";
import Login from './Login.js';
import Player from './Player.js'
import {getTokenFromUrl} from './spotify.js'
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './DataLayer.js'

const spotify = new SpotifyWebApi();


function App() {
  const [{user, token}, dispatch] = useDataLayerValue();



  useEffect(() =>{
    const hash = getTokenFromUrl(); // lấy được một đối tượng có chứa token,...
    window.location.hash = ""; //giấu đi url trên thanh địa chỉ
    const _token = hash.access_token; // lấy token
    if(_token)
    {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe() //return a promise about user information 
      .then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }
    spotify.getUserPlaylists() // return a promise about user's playlists
      .then((playlists) => {
        console.log(JSON.stringify(playlists));
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,
          })
      })
  }, []);
    spotify.getPlaylist('37i9dQZEVXcWImhpQxBNPY')
      .then((res) =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        })
      })

  return (
    <div className="app">
      {
        token ? 
        (<Player spotify={spotify}/>) : (<Login/>) // nếu có token thì đưa về trang player còn ko thì yêu cầu đăng nhập
      }
    </div>
  );
}

export default App;

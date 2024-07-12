/** Creando componente MyPlaylist */

import { SpotifyPlayer } from "./SpotifyPlayer";
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export function MyPlaylist() {
    /**
     * Creando variables para asociar con inputs usando hook useRef
     */
    const urlRef = useRef() // Esto es un hook que asociamos a un input
    const favoriteRef = useRef()
    const [mensaje, setMensaje] = useState('');
    /**
     * useState es un hook que permite vigilar el ciclo de vida de un elemento
     */
    const [songList, setSongList] = useState([
        { id: uuid(), url: "3fn4HfVz5dhmE0PG24rh6h", favorite: true },
        { id: uuid(), url: "2UJcKiJxNryhL050F5Z1Fk", favorite: false },
        { id: uuid(), url: "5B4PYA7wNN4WdEXdIJu58a", favorite: true },
        { id: uuid(), url: "1XqzXn8a7Z15Z5tBSouXcH", favorite: false }
    ]);

    /**Funcion para agregar canciones */
    function addSong() {
        console.log('Presionando boton agregar')
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;
        console.log(`Se escribio ${url} ${favorite}`);

        if(url.trim() === ''){
            setMensaje('Campos vacios');

            setTimeout(() => {
                setMensaje('');
            }, 3000);

            return
        }

        /**Con los datos obtenidos podemos crear un objeto song */
        const newSong = {
            id: uuid(),
            url: url,
            favorite: favorite
        }

        const newSongList = [...songList, newSong]
        setSongList(newSongList);

        alert('Se agrego cancion');
    }

    function removeSongs() {
        const updatedList = songList.filter(song => song.favorite === true);
        console.log(updatedList);
        setSongList(updatedList);
        alert('Se eliminaron no favoritas');
    }

    function setFavorite(id) {
        console.log(id);
        const newList = [...songList];
        console.log(newList);
        const song = newList.find(c => c.id === id);
        console.log(song);
        song.favorite = !song.favorite;
        console.log(song);
        setSongList(newList);
    }


    return (
        <div className="container">
            <h1>My favorite songs</h1>
            <div className="d-flex">
                <input ref={urlRef} className="form-control m-2" type="text" placeholder="URL Song" />
                <input ref={favoriteRef} id="checkbox" className="m-2" type="checkbox" />
                <label className="m-2">Favorite?</label>
                <button className="btn btn-success m-2" onClick={addSong}><i class="bi bi-check-circle"></i></button>
                <button className='btn btn-danger m-2' onClick={removeSongs}><i class="bi bi-trash"></i></button>
            </div>
            <div class="alert alert-danger mt-2" role="alert" hidden={!mensaje}>
                {mensaje}
            </div>
            <div>
                {

                    songList.map(song => <SpotifyPlayer setFavorite={setFavorite} song={song} key={song.id} />)
                }
            </div>
        </div>
    )
}


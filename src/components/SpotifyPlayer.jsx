export function SpotifyPlayer({song, setFavorite}) {
    const { id, url, favorite } = song; /** {id: uuid, url:"asdadasdas", favorite:true} */

    const newFavorite = () => setFavorite(id);

    const urlSong = "https://open.spotify.com/embed/album/" + url

    if (favorite) {
        return (
            <div className="d-flex my-2">
                <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button className="btn" onClick={newFavorite}><i class="bi bi-star-fill"></i></button>
            </div>
        )
    }

    return (
        <div className="d-flex my-2">
            <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <button className="btn" onClick={newFavorite}><i class="bi bi-star"></i></button>
        </div>
    )
}
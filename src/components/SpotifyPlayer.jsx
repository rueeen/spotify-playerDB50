export function SpotifyPlayer({urlSong, favorite}) {
    const url = "https://open.spotify.com/embed/album/" + urlSong

    if (favorite) {
        return (
            <div className="d-flex my-2">
                <iframe src={url} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button className="btn"><i class="bi bi-star-fill"></i></button>
            </div>
        )
    }

    return (
        <div className="d-flex">
            <iframe src={url} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <button className="btn"><i class="bi bi-star"></i></button>
        </div>
    )
}
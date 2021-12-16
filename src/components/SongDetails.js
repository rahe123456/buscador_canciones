import React from 'react';
import Message from './Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

function SongDetails({search, lyric, bio}) {

    if(!lyric || !bio) return null;

    return (
        <>
            {lyric.error || lyric.name === "AbortError"?(
                <Message 
                    msg={`Error: No existe la canción ${search.song}`} bgColor="#dc3545"
                />
                ):(
                <SongLyric title={search.song} lyrics={lyric.lyrics}/>
            )}
            {bio.artists?(
                <SongArtist artist={bio.artists[0]}/>
                ):(
                <Message
                    msg={`Error: No existe el interprete ${search.artist}`} bgColor="#dc3545"
                />
            )}
        </>
    )
}

export default SongDetails;
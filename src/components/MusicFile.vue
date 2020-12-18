<template>
    <div id="musicfile">
        <h1 class="title">WorK Out</h1>
         <section>
            <songlist :songs="songs" @add="moveToPlaylist" @addNewSong="addNewSong"></songlist>
            <playlist :songs="playlistSongs" @remove="moveToSonglist"></playlist>
        </section>
    </div>
</template>

<script>
import Playlist from './Playlist';
import Songlist from './Songlist';

export default {
    name: 'MusicFile',
    components: { Playlist, Songlist },
    data() {
        return {
            playlistSongs: [],  
            songs: [
                { artist: 'Eminem, Juice WRLD', title: 'Godzila' },
                { artist: 'The Game', title: 'Ali Bomaye' },
                { artist: '50 Cent, Lloyd Banks & Tony YaYo', title: 'Catch Me in the Hood' },
                { artist: 'Tyga, Desiigner', title: 'Gucci Snake' },
                { artist: 'TI', title: '24s' },
                { artist: 'Roy Jones', title: 'Cant be Touched' },
                { artist: 'Juicy J, The Weeknd', title: 'One of Those Nights' },
                { artist: 'David Guetta, Showtek', title: 'Bad' }
            ]
        }
    },
    methods: {
        addNewSong(song) {
            this.splice(0, 0, song);
        },
        moveToPlaylist(index) {
            let song = this.songs.splice(index, 1)[0];
            this.playlistSongs.splice(0, 0, song);
        },
        moveToSonglist(index) {
            let song = this.playlistSongs.splice(index, 1)[0];
            this.songs.splice(0, 0, song);
        }
    }

    
}
</script>

<style scoped>
#musicfile > section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
}

</style>
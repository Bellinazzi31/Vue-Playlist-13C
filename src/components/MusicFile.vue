<template>
    <div id="musicfile">
        <h1 class="title">WorK Out</h1>
         <section>
            <!-- <songlist :songs="songs" @add="moveToPlaylist" @addNewSong="addNewSong"></songlist> -->
            <!-- <playlist :songs="playlistSongs" @remove="moveToSonglist"></playlist> -->
            <songlist></songlist>
            <playlist></playlist>
        </section>
    </div>
</template>

<script>
import Playlist from './Playlist.vue';
import Songlist from './Songlist.vue';

export default {
    name: 'MusicFile',
    components: { Playlist, Songlist },
    data() {
        return {
            
        }
    },
    // computed: {
    //     playlistSongs() {
    //         return this.$store.state.playlistSongs;
    //     },
    //     song() {
    //         return
    //     }
    // },
    // methods: {
    //     addNewSong(song) {
    //         this.splice(0, 0, song);
    //     },
    //     moveToPlaylist(index) {
    //         let song = this.songs.splice(index, 1)[0];
    //         this.playlistSongs.splice(0, 0, song);
    //     },
    //     moveToSonglist(index) {
    //         let song = this.playlistSongs.splice(index, 1)[0];
    //         this.songs.splice(0, 0, song);
    //     }
    // }

    
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
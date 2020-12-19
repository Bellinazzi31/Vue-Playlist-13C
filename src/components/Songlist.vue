<template>
    <div>
        <nav class="panel is-info">
            <p class="panel-heading">
                Songlist ({{ songCount }})
            </p>
            <a class="panel-block is-active" 
                v-for="(song, index) in songs" 
                :key="index"
                @click="addToPlaylist(index)">
                <span class="panel-icon">
                    <i class="fas fa-plus" aria-hidden="true"></i>
                </span>
                {{ song.artist }} - {{ song.title }}
            </a>
            <add-song @addNewSong="addNewSong"></add-song>
            
        </nav>
    </div>
</template>

<script>
import AddSong from './AddSong';


export default {
    name: 'Songlist',

    components: { AddSong },

    computed: {
        songs() {
            return this.$store.state.songs;
        },
        songCount() {
            return this.$store.getters.songCount;
        }
    },
    methods: {
        // addNewSong(song) {
        //     this.$emit('addNewSong', song);
        // },
        addToPlaylist(index) {
            this.$store.commit('addToPlylist', index);
        }
    }
}
</script>

<style scoped>

</style>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlistSongs: [],  
            songs: [
                { artist: 'Eminem, Juice WRLD', title: 'Godzilla' },
                { artist: 'The Game', title: 'Ali Bomaye' },
                { artist: '50 Cent, Lloyd Banks & Tony YaYo', title: 'Catch Me in the Hood' },
                { artist: 'Tyga, Desiigner', title: 'Gucci Snake' },
                { artist: 'TI', title: '24s' },
                { artist: 'Roy Jones', title: 'Cant be Touched' },
                { artist: 'Juicy J, The Weeknd', title: 'One of Those Nights' },
                { artist: 'David Guetta, Showtek', title: 'Bad' }
            ]
  },
  mutations: {
    addNewSong(state, song) {
      state.songs.splice(0, 0, song);
    },
    addToPlaylist(state, index) {
      let song = state.songs.splice(index, 1)[0];
      state.songs.splice(0, 0, song);
    },
    removeFromPlaylist(state, index) {
      let song = state.playlistSongs.splice(index, 1)[0];
      state.song.splice(0, 0, song);


    }
  },
  actions: {
  },
  modules: {
  },
  getters: {

  }
})

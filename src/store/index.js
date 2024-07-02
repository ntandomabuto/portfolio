import { createStore } from 'vuex'
export default createStore({
  state: {
    aboutMe: null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state,info){
      state.aboutMe = info
    }
  },
  actions: {
    async getAboutMe(context){
      let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
      let about = await fetchedData.json();
      let {aboutMe} =about
      context.commit('setAboutMe',aboutMe)
    
     
    }
  },
  modules: {
  }
})

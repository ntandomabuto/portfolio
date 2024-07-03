import { createStore } from 'vuex'
export default createStore({
  state: {
    aboutMe: null,
    education: null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state,info){
      state.aboutMe = info
    },
    setEducation(state,info){
      state.education = info
    }
  },
  actions: {
    async getAboutMe(context){
      let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
      let about = await fetchedData.json();
      let {aboutMe} =about
      context.commit('setAboutMe',aboutMe)
    },
    async getEducation(context){
      let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
      let vitae = await fetchedData.json();
      let {education} =vitae
      context.commit('setEducation',education)
    },
  },
  modules: {
  }
})

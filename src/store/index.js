import { createStore } from 'vuex'
export default createStore({
  state: {
    aboutMe: null,
    education: null,
    projects:null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state,info){
      state.aboutMe = info
    },
    setEducation(state,info){
      state.education = info
    },
    setProjects(state,info){
      state.projects =info
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
    async getProjects(context){
      let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
      let pro = await fetchedData.json();
      let {projects} =pro
      context.commit('setProjects',projects)
    }
  },
  modules: {
  }
})

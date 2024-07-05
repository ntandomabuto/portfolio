import { createStore } from 'vuex'
export default createStore({
  state: {
    aboutMe: null,
    education: null,
    projects:null,
    testimonials:null
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
    },
    setTestimonials(state,info){
      state.testimonials = info
    }
  },
  actions: {
    async getAboutMe(context){
      try {
        let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
        let about = await fetchedData.json();
        let {aboutMe} = about;
        context.commit('setAboutMe', aboutMe);
      } catch (error) {
        console.error('Error fetching about me data:', error);
      }
    },  
    async getEducation(context){
      try {
        let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
        let vitae = await fetchedData.json();
        let {education} = vitae;
        context.commit('setEducation', education);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    },
    async getProjects(context){
      try {
        let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
        let pro = await fetchedData.json();
        let {projects} = pro;
        context.commit('setProjects', projects);
      } catch (error) {
        console.error('Error fetching projects data:', error);
      }
    },
    async getTestimonials(context){
      try {
        let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
        let review = await fetchedData.json();
        let {testimonials} = review;
        context.commit('setTestimonials', testimonials);
      } catch (error) {
        console.error('Error fetching testimonials data:', error);
      }
    }
  },
  modules: {
  }
})

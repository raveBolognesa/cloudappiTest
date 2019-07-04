Vue.component('emit',
{
  data() {
      return {
          carBrand:'toyota'
      }
  },
  template:`
  <div>
  <h2>emit</h2>
  <p @click="$emit('showcar', carBrand)">emitir e vento</p>
  
  </div>
  `
});
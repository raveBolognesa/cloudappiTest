Vue.component('message',{
    data(){
        return{
            message: `Hola rafa`,
            info: null,
        }
    },
    mounted () {
        axios
          .get('http://my-json-server.typicode.com/raveBolognesa/vueTest/db')
          .then(response => (this.info = response))
      },
    template: `
    <div>
      <h2>Desde componente</h2>
      <p> {{ message }}
      </p>

      <p> {{ info }}
      </p>
   
      
    </div>`,
});
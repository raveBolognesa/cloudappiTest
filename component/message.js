Vue.component('message',{
    data(){
        return{
            message: `Hola rafa`
        }
    },
    template: `
    <div>
      <h2>Desde componente</h2>
      <p> {{ message }}
      </p>
   
      
    </div>`,
});
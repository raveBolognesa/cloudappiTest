Vue.component('second',{
    data(){
        return{
            name: `rafa`,
            surname: `arrieta`,
        }
    },
    computed: {
        fullName(){
            return `${this.name} ${this.surname}`
        },
    },
    template: `
    <div>
      <h2>Desde second</h2>
      <p> {{ fullName }}
      </p>
   
      
    </div>`,
});
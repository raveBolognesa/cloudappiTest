Vue.component('methods',{
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
    methods: {
        hello(){
            alert(this.fullName)
        }
    },
    template: `
    <div>
      <h2>Desde methods</h2>
      <p @click='hello'>  onclick
      </p>
   
      
    </div>`,
});
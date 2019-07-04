Vue.component('vmodel',{
    data(){
        return{
            framework:'Vue js2'
        }
    },
    template:`
    <div>
    <h2>Vmodel </h2>
    <input v-model='framework'/>
    <p>el framework elegido es {{ framework }}</p>
    </div>
    `
})
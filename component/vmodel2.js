Vue.component('vmodel2',{
    data(){
        return{
            frameworks: []
        }
    },
    template:`
    <div>
    <h2>Vmodel Array</h2>
    <input type="checkbox" id="vuejs2" value="Vue js 2" v-model="frameworks"/>
    <label for="Vue js 2">Vue js 2</label>

    <input type="checkbox" id="react" value="react" v-model="frameworks"/>
    <label for="react"> react</label>


    <input type="checkbox" id="angular" value="angular" v-model="frameworks"/>
    <label for="angular">angular</label>
    <p>el framework elegido es {{ frameworks }}</p>
    </div>
    `
})
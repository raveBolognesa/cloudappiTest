Vue.component('child',{
    data() {
        return {
            cmp:'child data cmp!!!!!'
        }
    },
    methods: {
        showcmp(){
            alert(this.cmp+'ojlnj')
        }
    },
    template:`<div>
    
    
    <h2>child</h2>
    </div>`

})
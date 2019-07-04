Vue.component('parent',{
    template:`<div>
    
    
    <h2>parent</h2>
    <p> {{ $parent.appName }}</p>
    </div>`

})
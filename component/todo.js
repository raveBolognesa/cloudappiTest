Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        {{more }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title','more']
  })
Vue.component('todo-item', {
    template: `\
      <li>\
        {{ title }}\
        {{ more  }}\
        {{ name }}
        {{ email }}
        {{ birthdate }}
        {{ address }}
        {{ street }}
        {{ state }}
        {{ city }}
        {{ country }}
        {{ zip }}
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    `,
    props: ['title','more',"name", "email","birthdate",  "address",  "street",  "state",   "city",    "country",    "zip",]
  })
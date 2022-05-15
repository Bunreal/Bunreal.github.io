const xxx = document.querySelector('#labeltest')
xxx.addEventListener('click', ()=>{
  console.log('3')
})

new Vue({
  el: "#app",
  data: {
    title: 'bear todo',
    newOne: '',
    test: {
      id: uuidv4(),
    }
  },
  methods: {
    test2(){
      console.log('2')
    }
  }
});

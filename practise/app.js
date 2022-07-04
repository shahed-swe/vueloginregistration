Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.enteredValue ? this.goals.push(this.enteredValue) : null;
      this.enteredValue = '';
    },
    removeGoal(text){
      // console.log(goals.findIndex(text))
      alert(this.goals.findIndex(value => value === text))
    }
  }
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
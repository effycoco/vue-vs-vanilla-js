Vue.createApp({
  data() {
    return {
      goals: [],
      newGoal: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
      this.newGoal = "";
    },
  },
}).mount("#app");
// const addGoalBtn = document.querySelector("#app button");
// const ul = document.querySelector("ul");
// const goalInput = document.querySelector("#goal");
// addGoalBtn.addEventListener("click", addGoal);
// function addGoal() {
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(goalInput.value));
//   // li.textContent = goalInput.value;
//   ul.appendChild(li);
//   goalInput.value = "";
// }

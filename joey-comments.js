let clearAllStorage = document.getElementById("clearAllstorage");
let showStorage = document.getElementById("showStorage");
let createTestData = document.getElementById("creatData");
let createTest2Data = document.getElementById("creat2Data");
let createTest3Data = document.getElementById("creat3Data");
let createTest4Data = document.getElementById("creat4Data");
let appendTest4Data = document.getElementById("appendTest4Data");
let taskBox = document.getElementById("tasks");
let loadTasks = document.getElementById("loadTasks");
let textTitle = document.getElementById("textTitle");

const person1 = {
  name: "Nobody Somone",
  location: "CA",
};
const person = {
  name: "Obaseki Nosa",
  location: "Lagos",
};

const tasks = [
  {
    person: person,
  },
];

createTestData.addEventListener("click", () => {
  window.localStorage.setItem("user", JSON.stringify(person));
  console.log(localStorage);
});

createTest2Data.addEventListener("click", () => {
  const person = {
    name: "Nobody Somone",
    location: "CA",
  };
  window.localStorage.setItem("tasks-list", JSON.stringify(person1));
  console.log(localStorage);
});

createTest3Data.addEventListener("click", () => {
  let data = ["1", "2", "3"];

  window.localStorage.setItem("data", JSON.stringify(data));
  console.log(localStorage);
});

createTest4Data.addEventListener("click", () => {
  let tasks = ["4", "5", "6"];

  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(localStorage);
});

appendTest4Data.addEventListener("click", () => {
  let tasks2 = ["4a", "b", "6"];

  window.localStorage.setItem("tasks2", JSON.stringify(tasks2.push(tasks2)));
  let tasksarr = JSON.parse(localStorage.getItem("tasks2"));
  console.log(tasksarr);
});

clearAllStorage.addEventListener("click", () => {
  localStorage.clear();
  //console.log('cleared')
});

showStorage.addEventListener("click", () => {
  console.log(localStorage);
  //console.log('showed')
});

loadTasks.addEventListener("click", () => {
  data = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(data);
  taskBox.innerHTML = data;
});


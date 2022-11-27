//form element
//submit button
//submit date/time
//text box
//error message
//show all tasks
//add task button

let clearAllStorage = document.getElementById('clearAllstorage')
let showStorage = document.getElementById('showStorage')
let createTestData = document.getElementById('creatData')
let createTest2Data = document.getElementById('creat2Data')
let createTest3Data = document.getElementById('creat3Data')
let createTest4Data = document.getElementById('creat4Data')
let appendTest4Data = document.getElementById('appendTest4Data')
let taskBox = document.getElementById('tasks')
let loadTasks = document.getElementById('loadTasks')

let taskTitle = document.getElementById('taskTitle')
let dateDue = document.getElementById('dateDue')
let addBtn = document.getElementById('addBtn')

let tasks = []

let task = []

let taskID

let map1;
let i = 1;
addBtn.addEventListener('click', () => {
  taskID = "highest ID + 1"

  task = [
    taskID,
     taskTitle.value, 
     dateDue.value
  ]
  tasks.push(
    {task}
  )
//  console.log(tasks)
  updateTasks(tasks)
  makeObjectFromArray(tasks)
})

makeObjectFromArray = (tasks) => {
  
  map1 = tasks.map(() => {
    
    'rain'
    
    
    



  });
}

let updateTasks = (tasks) => {

  
  
//console.log(tasks)
}
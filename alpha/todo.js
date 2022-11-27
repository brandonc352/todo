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
let textTitle = document.getElementById('textTitle')

const person1 = {
  name: "Nobody Somone",
  location: "CA",
}
const person = {
  name: "Obaseki Nosa",
  location: "Lagos",
}

const tasks =  [{
  person:person
},]



createTestData.addEventListener('click', () => {
    window.localStorage.setItem('user', JSON.stringify(person));
    console.log(localStorage)
})

createTest2Data.addEventListener('click', () => {
  const person = {
    name: "Nobody Somone",
    location: "CA",
  }
  window.localStorage.setItem('tasks-list', JSON.stringify(person1));
    console.log(localStorage)
})

createTest3Data.addEventListener('click', () => {
    let data = ["1", "2", "3"];

    window.localStorage.setItem('data', JSON.stringify(data));
    console.log(localStorage)
})











createTest4Data.addEventListener('click', () => {
   let tasks = [
    "4",
    "5",
    "6"];

    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage)
})



appendTest4Data.addEventListener('click', () => {
  
  let tasks2 = [
    "4a",
    "b",
    "6"];

  window.localStorage.setItem('tasks2', JSON.stringify(tasks2.push(tasks2)));
  let tasksarr = JSON.parse(localStorage.getItem('tasks2') );
  console.log(tasksarr)
})














clearAllStorage.addEventListener('click', () => {
  localStorage.clear()
  //console.log('cleared')
})

showStorage.addEventListener('click', () => {
  console.log(localStorage)
  //console.log('showed')
})


loadTasks.addEventListener('click', ()=> {
  data = JSON.parse(localStorage.getItem('tasks')) || [];
  console.log(data)
  taskBox.innerHTML = data
})




//create array of objects for test
  //on click create the object


//display applicatoin
    //show app title, 
    //show count of undone tasks, iminate tasks, overdue tasks
    //show button with quickAdd form with title, date, and submit button
    //show button to open full add form and keep the value of the quick add form title and date if entered


//get tasks from local

//update task list with undone
    //task name, description, dueDate, done/undone, edit button, delete button
        //highlight iminent tasks
        //hilight overdue tasks


//create task write to local
  //show add form
    //on submit validate form
        //validate not empty
            //if not empty procceed else display error in errorMSG
                //create task in local storage
                //close window
                //update tasks
    //on cancel close form (empty values or new form each create task?)

//update task 
  //display div with this.task with current values of task
  //on save find task and update

//mark done
  //find task in local and update to done

//delete task
  //display confirmation to delete or do you want to mark as done


//let testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
//localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
//var retrievedObject = localStorage.getItem('testObject');

//console.log('retrievedObject: ', JSON.parse(retrievedObject));

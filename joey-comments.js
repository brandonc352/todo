let clearAllStorage = document.getElementById("clearAllstorage");
let showStorage = document.getElementById("showStorage");
// We dont need a button for creating the data
// We can just populatae the data in LS when the page loads

// We dont need these, we can dynamically create the data
let taskBox = document.getElementById("tasks");
let loadTasks = document.getElementById("loadTasks");
let textTitle = document.getElementById("textTitle");
// We need to grab that new form tag we created
// And the people list/button
let newTaskForm = document.getElementById("new-task-form");
let peopleList = document.getElementById("people-list");
let loadPeople = document.getElementById("load-people");

const person1 = {
  name: "Nobody Somone",
  location: "CA",
};
const person2 = {
  name: "Obaseki Nosa",
  location: "Lagos",
};

// Here it looks like you are trying to add the people into an array.
// We already have the objects built out above, so lets just add them to an array
const people = [person1, person2];

// Now, instead of a button, lets set the people into LS
// NOTE: This is just for getting the initial data into LS
// We will need to rethink this approach, because the above array is going to be populated everytime the page loads
window.localStorage.setItem("people", JSON.stringify(people));

// Lets recreate the array and add an empty array to LS so we can mimic a proper flow
// Im also going to put this in a function, because we will need to reuse the code later

let newPeople = [];

const setPeople = () => {
  window.localStorage.setItem("newPeople", JSON.stringify(newPeople));
};

// Dont forget to run the function on page load
// We dont want to override the data we already have in LS with an empty array, so we will only run this if there is no data in LS
let isNewPeopleExist = window.localStorage.getItem("newPeople");
// isNewPeopleExist will be null if there is no data in LS, so we can run a conditional statement to check against it, and only run the function if there is no data

if (!isNewPeopleExist) {
  setPeople();
}

// Same as above, we dont need these anymore, our data is already in LS
// Though, I see you are practicing with different data, but the idea is the same
// And this new structure will work with any data you want to store

clearAllStorage.addEventListener("click", () => {
  localStorage.clear();
  //console.log('cleared')
});

// Lets hoist these variables so we can set them in the next function
// We will need to use them later when we are creating or updating the data
// We are safe to get the data on page load if it is there
// Thus the below function will only be responsible for logging the data to the console
// As of right now, on page load, we have 2 arrays in LS (people and newPeople)
// The reason it was looking kind of funky, is because we need to get the items and parse the JSON
let peopleArray = JSON.parse(localStorage.getItem("people"));
let newPeopleArray = JSON.parse(localStorage.getItem("newPeople"));

showStorage.addEventListener("click", () => {
  // Now that we have that data, we can do stuff with it.
  // That will be up to you, for now, lets just console.log it
  console.log(peopleArray, "prepopulated data");
  console.log(newPeopleArray, "new data we will be adding and updating");

  // You should see 2 arrays in the console when you click the show button
  // The first array is the prepopulated data with 2 objects in it
  // The second will be an empty array at first
});

loadTasks.addEventListener("click", () => {
  // It looks like here, you want to render the data that is in local storage
  // Im going to make another event Listener below, but for People instead of Tasks
  // The reason this isnt working, is because you are trying to just dump an array into the DOM
  // We need to loop through the array and create the elements
  data = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(data);
  taskBox.innerHTML = data;
});

loadPeople.addEventListener("click", () => {
  // We have a prepopulated peopleArray we got from LS
  // So lets just loop through that array and create the elements

  peopleArray.forEach((person) => {
    // For each person, we will need to create a list item
    // Populate the list item with some innerText
    // And append it to the peopleList ul
    let li = document.createElement("li");
    li.innerText = `${person.name} - ${person.location}`;
    peopleList.append(li);
  });
});

// I am not going to address the form submission because I think
// that you should pretty much stop here and move away from local storage
// And start using a database
// Learning a form with this current project may inroduce more confusion
// Essentially you would need to create a new object with the form data
// and add it to the local storage array if it exists
// If you want to practice with forms, I would suggest
// Just having a basic form and see if you can create an object with it
// and add it to an array and log it.

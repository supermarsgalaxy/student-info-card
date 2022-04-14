window.addEventListener("load", init);

const photo = document.getElementById("studentPic");
const firstName = document.getElementById("firstName");
const studentLocation = document.getElementById("location");
const interest = document.getElementById("interests");
const hobbies = document.getElementById("hobbies");
const info = document.getElementById("info-container");
const randomButton = document.getElementById("randomize");
let currentStudentIndex = 0;

let students = [
  {
    name: "Sarah",
    location: "Gainesville, Florida",
    interest: "Tattoos",
    hobbies: "Drawing",
    pic: "https://images.unsplash.com/photo-1550703703-c6f229024ba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdoaXRlJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Anthony",
    location: "Miami, Florida",
    interest: "Concerts and Festivals",
    hobbies: "Playing Video Games",
    pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGJsYWNrJTIwY3VybHklMjBoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Kevin",
    location: "Gainesville, Florida",
    interest: "Pharmaceuticals",
    hobbies: "Running and Fishing",
    pic: "https://images.unsplash.com/photo-1606216769898-c88daccaa479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXJkZWQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Mariah",
    location: "Orlando, Florida",
    interest: "Psychology",
    hobbies: "Twitch Streaming",
    pic: "https://images.unsplash.com/photo-1555893205-6aa790755864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Cara",
    location: "Richmond, Virginia",
    interest: "Elementary Eduaction",
    hobbies: "Music",
    pic: "https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Ciara",
    location: "Gainesville, Florida",
    interest: "Reading Books",
    hobbies: "Crocheting",
    pic: "https://images.unsplash.com/photo-1597179761147-08a63e7622ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRyZWFkbG9ja3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Douglas",
    location: "Idlewild, Michigan",
    interest: "Water Sports",
    hobbies: "Watching Movies",
    pic: "https://images.unsplash.com/photo-1579880651719-3cef00eae7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Stephanie",
    location: "Orlando, Florida",
    interest: "Night Life",
    hobbies: "Nail Design",
    pic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Zoii",
    location: "Baton Rouge, Louisiana",
    interest: "Sports Management",
    hobbies: "Singing",
    pic: "https://images.unsplash.com/photo-1606416132922-22ab37c1231e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
  },
  {
    name: "Erick",
    location: "New Orleans, Louisiana",
    interest: "Fashion Design",
    hobbies: "Skateboarding",
    pic: "https://img1.wsimg.com/isteam/ip/8b8a61b6-c87d-40eb-88d0-684a33c63829/IMG_8156.JPEG/:/cr=t:8.06%25,l:6.51%25,w:88.85%25,h:88.85%25/rs=w:1333,h:2000,cg:true,m",
  },
  {
    name: "Lauren",
    location: "Muncie, Indiana",
    interest: "Black Education",
    hobbies: "Fashion",
    pic: "https://images.unsplash.com/photo-1563132305-24784f57eeea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Nicole",
    location: "Hollywood, Florida",
    interest: "History",
    hobbies: "Reading Books",
    pic: "https://images.unsplash.com/photo-1606216769898-c88daccaa479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXJkZWQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
];

function init() {
  showStudents();
}

randomButton.addEventListener("click", showStudents);

function showStudents() {
  currentStudentIndex = Math.floor(Math.random() * 11);
  studentsContent();
}

function studentsContent() {
  firstName.textContent = students[currentStudentIndex].name;
  studentLocation.textContent = students[currentStudentIndex].location;
  interest.textContent = students[currentStudentIndex].interest;
  hobbies.textContent = students[currentStudentIndex].hobbies;
  photo.src = students[currentStudentIndex].pic;
}

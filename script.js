// Array Of Object
const persons = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    gender: "Male",
    occupation: "Software Engineer",
    contact: {
      email: "johndoe@example.com",
      // phone: "123-456-7890",
    },
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    hobbies: ["Reading", "Hiking", "Coding"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    gender: "Female",
    occupation: "Graphic Designer",
    contact: {
      email: "janesmith@example.com",
      phone: "987-654-3210",
    },
    address: {
      street: "456 Elm St",
      city: "San Francisco",
      state: "CA",
      zip: "94101",
    },
    // hobbies: ["Drawing", "Photography", "Traveling"],
  },
  {
    id: 3,
    name: "Robert Brown",
    // age: 40,
    gender: "Male",
    occupation: "Project Manager",
    contact: {
      email: "robertbrown@example.com",
      phone: "555-123-4567",
    },
    address: {
      street: "789 Oak St",
      city: "Chicago",
      state: "IL",
      zip: "60601",
    },
    hobbies: ["Cycling", "Cooking", "Gardening"],
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 35,
    gender: "Female",
    occupation: "Data Analyst",
    contact: {
      // email: "emilydavis@example.com",
      phone: "555-765-4321",
    },
    address: {
      street: "101 Pine St",
      city: "Austin",
      state: "TX",
      zip: "73301",
    },
    hobbies: ["Yoga", "Running", "Writing"],
  },
];

const PeopleList = document.getElementById("people-list");
const PeopleInfo = document.getElementById("person-info");

const renderPeople = (persons) => {
  const newArray = persons.map((persons) => {
    const li = document.createElement("li");
    li.classList.add("cursor-pointer", "text-blue-500", "p-2");
    li.textContent = persons.name;

    li.addEventListener("click", () => {
      findPeople(persons.id);
    });

    PeopleList.appendChild(li);
  });
};

const displayInfo = (person) => {
  // console.log(person);
document.getElementById("no-selection").classList.add("hidden")
  PeopleInfo.classList.remove("hidden");
  
  PeopleInfo.innerHTML = `
  <h2 class= "text-2xl font-bold mb-2"> ${person.name} </h2>

  <p class="text-lg"> Age: ${person.age || "N/A" } </p>

  <p class="text-lg"> Phone: ${person?.contact?.phone || "N/A"} </p>

  <p class="text-lg"> Email: ${person?.contact?.email || "N/A"} </p>

  <p class="text-lg"> Hobbies: ${person?.hobbies?.map((hobby) => {
    return hobby
  }) || "N/A"} </p>
  
  
  
  `;
};

const findPeople = (id) => {
  const person = persons.find((person) => person.id === id);
  displayInfo(person);
};

renderPeople(persons);

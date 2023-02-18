import {
  collections,
  ourTeam,
  weProvide,
  testimonials,
  questions,
} from "./data.js";

window.showForm = showForm;
window.hideForm = hideForm;
window.saveChange = saveChange;
window.showAddForm = showAddForm;
window.hideAddForm = hideAddForm;
window.saveNew = saveNew;
window.hideAll = hideAll;
window.showInfoForm = showInfoForm;
window.hideEmployeesForm = hideEmployeesForm;
window.saveInfoChange = saveInfoChange;
window.searchItem = searchItem;

let searchValue = document.getElementById("search");
let collectionsList = document.querySelector(".collections-list");
let ourTeamList = document.querySelector(".ourteam-list");
let weProvideList = document.querySelector(".weprovide-list");
let testimonialsList1 = document.querySelector(".testimonials-list1");
let testimonialsList2 = document.querySelector(".testimonials-list2");
let testimonialsList3 = document.querySelector(".testimonials-list3");
let testimonials1 = [];
let testimonials2 = [];
let testimonials3 = [];
let faquestionsList1 = document.querySelector(".faquestions-list1");
let faquestionsList2 = document.querySelector(".faquestions-list2");
let questions1 = [];
let questions2 = [];
let employeesList = document.querySelector(".employees-list");
let myData = [];

let blurBg = document.querySelector(".blur-background");

let changeForm = document.querySelector(".change-form");
let changeName = document.querySelector(".change-name");
let changeDescribe = document.querySelector(".change-describe");
let saveIndex = document.getElementById("save-index").value;
let showForm2 = document.querySelector(".add-form");
let newNftImg = document.querySelector(".new-nft-img");
let newNftName = document.querySelector(".new-nft-name");
let newNftDescribe = document.querySelector(".new-nft-describe");
let showForm3 = document.querySelector(".change-employees-form");
let changeEmployeesName = document.querySelector(".change-employees-name");
let changeEmployeesAge = document.querySelector(".change-employees-age");
let changeEmployeesSalary = document.querySelector(".change-employees-salary");
let saveEmployeesIndex = document.getElementById("save-employees-index").value;
let findIndex = document.getElementsByClassName("collections-item");

collectionsFunction(collections);
ourteamFunction(ourTeam);
weprovideFunction(weProvide);
divideTestimonials();
testimonialsFunction(testimonials1, testimonials2, testimonials3);
getData();
divideFAQuestions();
faquestionsFunction(questions1, questions2);

// Hottest collections
function collectionsFunction(collections) {
  collections.forEach((item) => {
    let collectionsItem = document.createElement("div");
    collectionsItem.classList.add("collections-item");
    collectionsItem.innerHTML = `
    <button class="show-btn" type="button" onclick="showForm(${item.id})">
      <img src="./assets/images/pen.png" alt="" />
    </button>
    <img class="nft-img" src="${item.img}" alt="" />
    <p class="nft-name text-center">${item.name}</p>
    <p class="nft-describe text-center">
    ${item.describe}
    </p>
  `;
    collectionsList.appendChild(collectionsItem);
  });
}

// Show form, edit and save
function showForm(itemId) {
  changeForm.classList.add("show");
  blurBg.classList.add("show");
  changeName.value = collections[itemId].name;
  changeDescribe.value = collections[itemId].describe;
  saveIndex = itemId;
}
function hideForm() {
  changeForm.classList.remove("show");
  blurBg.classList.remove("show");
}
function saveChange() {
  if (changeName.value.length == 0 || changeDescribe.value == 0) {
    alert("Enter NFT's name and NFT's describe");
  } else {
    collections[saveIndex].name = changeName.value;
    collections[saveIndex].describe = changeDescribe.value;
    hideForm();
    collectionsList.innerHTML = "";
    collectionsFunction(collections);
  }
}

// Add new NFT
function showAddForm() {
  showForm2.classList.add("show");
  blurBg.classList.add("show");
}
function hideAddForm() {
  showForm2.classList.remove("show");
  blurBg.classList.remove("show");
}
function saveNew() {
  let item = {
    id: collections.length,
    img: newNftImg.value,
    name: newNftName.value,
    describe: newNftDescribe.value,
  };
  if (
    newNftImg.value.length == 0 ||
    newNftName.value.length == 0 ||
    newNftDescribe.value.length == 0
  ) {
    alert("Enter NFT image's link, NFT's name and NFT's describe");
  } else {
    collections.push(item);
    hideAddForm();
    collectionsList.innerHTML = "";
    collectionsFunction(collections);
    newNftImg.value = "";
    newNftName.value = "";
    newNftDescribe.value = "";
  }
}

// Look for
function searchItem() {
  collections.forEach((item) => {
    findIndex[item.id].classList.remove("hide");
  });
  let searchChar = searchValue.value.split("");
  collections.forEach((item) => {
    let nameChar = item.name.split("");
    searchChar.forEach((char) => {
      if (!nameChar.includes(char)) {
        findIndex[item.id].classList.add("hide");
      }
    });
  });
}

// Our team
function ourteamFunction(ourTeam) {
  ourTeam.forEach((item) => {
    let ourteamItem = document.createElement("div");
    ourteamItem.classList.add("ourteam-item");
    ourteamItem.classList.add("text-center");
    ourteamItem.innerHTML = `
    <img class="ourteam-img" src="${item.img}" alt="" />
    <p class="ourteam-name">${item.name}</p>
    <p class="ourteam-job">${item.job}</p>
  `;
    ourTeamList.appendChild(ourteamItem);
  });
}

// We provide
function weprovideFunction(weProvide) {
  weProvide.forEach((item) => {
    let weProvideItem = document.createElement("div");
    weProvideItem.classList.add("weprovide-item");
    weProvideItem.classList.add("text-center");
    weProvideItem.innerHTML = `
      <img class="weprovide-img" src="${item.img}" alt="" />
      <p class="weprovide-name">${item.name}</p>
      <p class="weprovide-describe">
      ${item.describe}
      </p>
  `;
    weProvideList.appendChild(weProvideItem);
  });
}

// Testimonials
function divideTestimonials() {
  if (testimonials.length % 3 == 0) {
    let chunk = testimonials.length / 3;
    testimonials1 = testimonials.slice(0, chunk);
    testimonials2 = testimonials.slice(chunk, 2 * chunk);
    testimonials3 = testimonials.slice(2 * chunk, testimonials.length);
  } else {
    let chunk = testimonials.length / 3;
    testimonials1 = testimonials.slice(0, chunk + 1);
    testimonials2 = testimonials.slice(chunk + 1, 2 * chunk + 1);
    testimonials3 = testimonials.slice(2 * chunk + 1, testimonials.length);
  }
}
function testimonialsFunction(testimonials1, testimonials2, testimonials3) {
  testimonials1.forEach((item) => {
    let testimonialsItem1 = document.createElement("div");
    testimonialsItem1.classList.add("testimonials-item1");
    testimonialsItem1.innerHTML = `
    <div class="item-group">
      <img class="testimonials-img" src="${item.img}" alt="" />
      <div class="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-tag">${item.tag}</p>
      </div>
    </div>
    <p class="testimonials-describe">
      ${item.describe}
    </p>
    `;
    testimonialsList1.appendChild(testimonialsItem1);
  });
  testimonials2.forEach((item) => {
    let testimonialsItem2 = document.createElement("div");
    testimonialsItem2.classList.add("testimonials-item2");
    testimonialsItem2.innerHTML = `
    <div class="item-group">
      <img class="testimonials-img" src="${item.img}" alt="" />
      <div class="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-tag">${item.tag}</p>
      </div>
    </div>
    <p class="testimonials-describe">
      ${item.describe}
    </p>
    `;
    testimonialsList2.appendChild(testimonialsItem2);
  });
  testimonials3.forEach((item) => {
    let testimonialsItem3 = document.createElement("div");
    testimonialsItem3.classList.add("testimonials-item3");
    testimonialsItem3.innerHTML = `
    <div class="item-group">
      <img class="testimonials-img" src="${item.img}" alt="" />
      <div class="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-tag">${item.tag}</p>
      </div>
    </div>
    <p class="testimonials-describe">
      ${item.describe}
    </p>
    `;
    testimonialsList3.appendChild(testimonialsItem3);
  });
}

// Employees show form, edit and save
function getData() {
  const xhtml = new XMLHttpRequest();
  xhtml.onload = function () {
    const responseData = JSON.parse(this.responseText);
    responseData.data.forEach((item) => {
      myData.push(item);
      employeesFunction(myData);
    });
  };
  xhtml.open("GET", "https://dummy.restapiexample.com/api/v1/employees");
  xhtml.send();
}
function employeesFunction(myData) {
  myData.forEach((item) => {
    let employeesItem = document.createElement("div");
    employeesItem.classList.add("employees-item");
    employeesItem.innerHTML = `
      <button
      class="show-form-btn"
      type="button"
      onclick="showInfoForm(${item.id})"
    >
      <img src="./assets/images/pen.png" alt="" />
    </button>
    <img
      class="employees-img"
      src="./assets/images/user.jpg"
      alt=""
    />
    <p class="employees-name">${item.employee_name}</p>
    <div class="age-group">
      <p class="info-age">Age</p>
      <p class="symbol">:</p>
      <p class="employees-age">${item.employee_age}</p>
    </div>
    <div class="salary-group">
      <p class="info-salary">salary</p>
      <p class="symbol">:</p>
      <p class="employees-salary">${item.employee_salary}</p>
    </div>`;
    employeesList.appendChild(employeesItem);
  });
}
function showInfoForm(itemId) {
  showForm3.classList.add("show");
  blurBg.classList.add("show");
  changeEmployeesName.value = myData[itemId - 1].employee_name;
  changeEmployeesAge.value = myData[itemId - 1].employee_age;
  changeEmployeesSalary.value = myData[itemId - 1].employee_salary;
  saveEmployeesIndex = itemId;
}
function hideEmployeesForm() {
  showForm3.classList.remove("show");
  blurBg.classList.remove("show");
}
function saveInfoChange() {
  if (
    changeEmployeesName.value.length == 0 ||
    changeEmployeesAge.value.length == 0 ||
    changeEmployeesSalary.value.length == 0
  ) {
    alert("Enter employee's name, employee's age and employee's salary");
  } else {
    myData[saveEmployeesIndex - 1].employee_name = changeEmployeesName.value;
    myData[saveEmployeesIndex - 1].employee_age = changeEmployeesAge.value;
    myData[saveEmployeesIndex - 1].employee_salary =
      changeEmployeesSalary.value;
    hideEmployeesForm();
    employeesList.innerHTML = "";
    employeesFunction(myData);
  }
}

// Frequently Asked Questions
function divideFAQuestions() {
  if (questions.length % 2 == 0) {
    let chunk = questions.length / 2;
    questions1 = questions.slice(0, chunk);
    questions2 = questions.slice(chunk, questions.length);
  } else {
    let chunk = questions.length / 2;
    questions1 = questions.slice(0, chunk + 1);
    questions2 = questions.slice(chunk + 1, questions.length);
  }
}
function faquestionsFunction(questions1, questions2) {
  questions1.forEach((item) => {
    let faquestionsItem1 = document.createElement("div");
    faquestionsItem1.classList.add("faquestions-item1");
    faquestionsItem1.innerHTML = `
    <label for="ask${item.id}">
    ${item.question}
    </label>
    <input type="checkbox" id="ask${item.id}" />
    <img class="faquestions-img" src="./assets/images/angle-down.png" />
    <p class="faquestions-describe">
    ${item.answer}
    </p>
    `;
    faquestionsList1.appendChild(faquestionsItem1);
  });
  questions2.forEach((item) => {
    let faquestionsItem2 = document.createElement("div");
    faquestionsItem2.classList.add("faquestions-item2");
    faquestionsItem2.innerHTML = `
    <label for="ask${item.id}">
    ${item.question}
    </label>
    <input type="checkbox" id="ask${item.id}" />
    <img class="faquestions-img" src="./assets/images/angle-down.png" />
    <p class="faquestions-describe">
    ${item.answer}
    </p>
    `;
    faquestionsList2.appendChild(faquestionsItem2);
  });
}

// Hide all
function hideAll() {
  changeForm.classList.remove("show");
  showForm2.classList.remove("show");
  showForm3.classList.remove("show");
  blurBg.classList.remove("show");
}

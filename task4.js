
function page(){
    location.href="task2.html";
        alert ("Leave page Width Unsaved changes ?\nLeaving This Page Will delete all unsaved changes");
}
// --------price------
function find() {
    cp = document.getElementById("cp").value;
    sp = document.getElementById("sp").value;
    if (sp > cp) {
      profit = sp - cp;
      document.getElementById("pl").innerHTML = "profit &#x20b9; " + profit + "";
      margin = (sp-cp)/(sp)*100
      document.getElementById("mg").innerHTML = "margin " + margin + "%";
    }
    if (sp < cp) {
      profit = sp - cp;
      document.getElementById("pl").innerHTML = "profit &#x20b9; " + profit + "";
      margin = (sp-cp)/(sp)*100
      document.getElementById("mg").innerHTML = "margin " + margin + "%";
    }
  }
  
   
// ----------------vendor--------


let searchKeyword = "";
let options = [
  { value:"Add", label: "<b>&#8853;<b>Add"},
  { value: "Collection", label: "Collection" },
  { value: "Tiger", label: "Tiger" },
  { value: "Animals", label: "Animals" },
  { value: "cat", label: "cat" },
  { value: "colony", label: "colony" },
];
function search(value) {
  searchKeyword = value;
  loadOptions();
}
function loadOptions() {
  let dropdownElement = document.querySelector("#autoComplete #dropdown");
  dropdownElement.innerHTML = "";
  let filteredOptions = searchKeyword == "" ? options : options.filter((option) => option.label.toLowerCase().includes(searchKeyword.toLowerCase()));
  filteredOptions.forEach((option) => {
    let optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.innerHTML = option.label;
    optionElement.addEventListener("click", (event) => {
      hideDropdown();
      let selectedValue = event.target.innerHTML;
      document.querySelector("#autoComplete input").value = selectedValue;
    })
    dropdownElement.appendChild(optionElement);
  })
}

loadOptions();
document.querySelector("#autoComplete input").addEventListener("click", (event) => {
  event.stopPropagation();
  showDropdown();
});

function showDropdown() {
  let dropdownElement = document.querySelector("#autoComplete #dropdown");
  dropdownElement.classList.add("active");
}
function hideDropdown() {
  let dropdownElement = document.querySelector("#autoComplete #dropdown");
  dropdownElement.classList.remove("active");
}

document.addEventListener("click", function handleClickOutsideBox(event) {
  document.getElementById("dropdown").classList.remove("active");
});
function myFunction() {
  var x = document.getElementById("rockk");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function change() {
  var x = document.getElementById("rockk");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}


// ------------------tag---------------------


function sachin() {
  document.getElementById("dropdown23").classList.toggle("show");
}
function patil() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdown23");
  a = div.getElementsByTagName("label");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}



window.onclick = function(event) {
  if (!event.target.matches('.dropinput')) {
    var dropdowns = document.getElementsByClassName("MYdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const colors = [
  {
    font: 'black',
    background: 'lightgray'
  },
]

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const removeTag = (event) => {
  if (event.target.classList.contains('tag-close')) {
    event.target.parentElement.remove();
  }
}

const addTag = (event) => {
  if (event.keyCode === 13) {
    const input = document.getElementById('input')
    const tagsContainer = document.querySelector('.tags-container');
    const color = getRandomColor();
    const value = event.target.value;
    const spanElement = document.createElement('span');

    spanElement.innerHTML = `
      <span class="tag-text">${value}</span>
      <span class="tag-close">&times;</span>
    `
    spanElement.classList.add('tag');
    spanElement.style.backgroundColor = color.background;
    spanElement.style.color = color.font;

    tagsContainer.appendChild(spanElement);
    input.value = '';
  }
}
window.onload = () => {
  const tagsContainer = document.querySelector('.tags-container');
  tagsContainer.addEventListener('click', removeTag);
}


// --------------------checkbox-----------------------------------
var tag = [];

var section = document.getElementsByTagName('section')[0];
var inpu = document.querySelectorAll('#autocompletebox1 .checkbox');
function updateCheckboxStatus(element) {
  if(element.checked){
    tag.push(element.value)
  }else{
    tag.splice(tag.indexOf(element.value), 1);
  }
  displayTags();
}
  function displayTags () {
    section.innerHTML = ""
    tag.forEach( function (val) {
      section.innerHTML +=  "<span onclick='myDelete(this)'>" + "<span>" + val + "</span>" + "<span  class='close_list hide'>X</span>" + "</span>";
    })
  }
 function myDelete(index){
  var span = index;
  span.remove(span.selectedIndex);
  tag.splice(tag.indexOf(index.firstChild.innerText), 1);
  console.log(index.firstChild.innerText, tag);
  check();
}
function check(){
  console.log(inpu);
  inpu.forEach(function check1(value){
    if(tag.includes(value.value)){
    value.checked=true;
    }else{
      value.checked=false;
    }
    });
} 

// --------------------------------tag create----------------


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("span");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  } else {
    document.getElementById("paragraph").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      console.log("cloase abc")
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}













































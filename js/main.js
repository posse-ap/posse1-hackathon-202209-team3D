const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const formForm = document.querySelector(".submit-form");
const todos = JSON.parse(localStorage.getItem("todos"));
const replyContents = JSON.parse(localStorage.getItem("replyContents"));

if (todos) {
  todos.forEach(todo => {
    add(todo);
  })
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
})

function add(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo;
  }

  if (todoText) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
    saveData();
    const button = document.createElement("button");
    button.classList.add("reply-button");
    li.appendChild(button);
  }
}
  const liItems = document.querySelectorAll(".list-group-item"); 
  liItems.forEach(function(items) {
    inputReply = "";
    
    const replyButton = document.querySelector(".reply-button");
    const submitForm = '<form class="submit-form"></form>';
    const submitButton = '<button class="submit-button"></button>';
    replyButton.insertAdjacentHTML('afterend',submitForm);
    const submit = document.querySelector(".submit-form");
    const input = '<input class="reply-items" name="my-text">';
    submit.insertAdjacentHTML('afterbegin',input);
    items.insertAdjacentHTML('beforeend', submitButton);
    saveReply();
  })

const replyButton = document.querySelectorAll(".reply-button");
replyButton.forEach(function(e, i) {
  e.addEventListener("click", () => {
    createReply(i)
  })
})

const submitButton = document.querySelectorAll(".submit-button");
submitButton.forEach(function(e, i) {
  e.addEventListener("click", () => {
    saveReply(i)
  })
})

function saveData() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(list => {
    todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function saveReply() {
  const replyText = document.querySelectorAll('.reply-items');
  let replyContents = [];
  let val = $('[name=my-text]');
  console.log(val);
  replyText.forEach(content => {
    replyContents.push(content.innerText);
    });
    localStorage.setItem("replyContents", JSON.stringify(replyContents));
  }

  $(function(){
    // ローカルストレージへの書き込み関数
    function setLocalStorage(replyContents, value) {
      localStorage.setItem(replyContents, value);
    }
    
    // ローカルストレージからの読み込み関数
    function getLocalStorage(replyContents) {
      return localStorage.getItem(replyContents);
    }  
    // 初期表示時に前回保存された値を読み込んでセット
    $(".reply-items").val(getLocalStorage("value-1"));
    // 保存ボタンクリック時の処理
    $(".submit-button").click(function(){
      setLocalStorage("value-1", $(".reply-items").val());
    });
    
  });
  
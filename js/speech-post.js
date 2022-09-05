const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("speechPost"));
if (todos) {
  todos.forEach((todo) => {
    add(todo);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

function add(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement("li");

    li.innerText = todoText;
    li.classList.add('list-group-item')

    const replyBtn = document.getElementById('r-button');
    replyBtn.style.display = 'block';
    ul.appendChild(li);
    input.value = "";
    saveData();
  }
}

function saveData() {
  const lists = document.querySelectorAll("li");
  const todos = [];

  lists.forEach((li) => {
    todos.push({
      text: li.innerText,
      completed: li.classList.contains("text-decoration-line-through"),
    });
  });

  localStorage.setItem("speechPost", JSON.stringify(todos));
}

//リロード時の挙動
window.addEventListener("DOMContentLoaded", () => {
  const replyContent = document.getElementById('reply-content');
  const replyItem = localStorage.getItem('speechPost-post');

  if (replyItem) {
    replyContent.style.display = 'block';
  } else {
    replyContent.style.display = 'none';
  }

  const inputText = document.getElementById('reply');

  inputText.value = replyItem;
})

const replyContent = document.getElementById('reply-content');
const replyBtn = document.getElementById('r-button');
replyBtn.addEventListener('click', () => {
  replyContent.style.display = 'block';
})

function test() {
  let reply = document.getElementById('reply').value;

  let replyText = localStorage.setItem("speechPost-post", reply);

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    alert('メッセージを保存しました！');
  })
}
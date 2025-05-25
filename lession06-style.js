
let todoListDB = [
  {
    id: 1,
    content: "Nhậu",
    status: false,
  },
  {
    id: 2,
    content: "Massage trườn",
    status: true,
  },
  {
    id: 3,
    content: "Xông hơi",
    status: false,
  },
  {
    id: 4,
    content: "Đá bát phở nạm",
    status: true,
  },
];

let ul = document.getElementById("myUL");

for (let index in todoListDB) {
  let li;
  if (todoListDB[index].status) {
    li = `
    <li class="checked">
        ${todoListDB[index].content}
        <span class="close">X</span>
    </li>
    `;
  } else {
    li = `
    <li>
        ${todoListDB[index].content}
        <span class="close">X</span>
    </li>
    `;
  }
  ul.innerHTML = ul.innerHTML + li;
}
// Ex01:

let studentList = [
  {
    id: 1,
    name: "John",
    age: 18,
    address: "New York",
  },
  {
    id: 2,
    name: "Mike",
    age: 22,
    address: "Canada",
  },
  {
    id: 3,
    name: "Linda",
    age: 19,
    address: "California",
  },
  {
    id: 4,
    name: "Peter",
    age: 25,
    address: "London",
  },
  {
    id: 5,
    name: "Tony",
    age: 17,
    address: "New York",
  },
];

let table = document.getElementById("main-table");

for (let index in studentList) {
  let tableRow = `
    <tr>
      <td>${+index + 1}</td>
      <td>${studentList[index].name}</td>
      <td>${studentList[index].age}</td>
      <td>${studentList[index].address}</td>
    </tr>
  `;
  console.log(table.innerHTML);
  console.log(tableRow);
  table.innerHTML = table.innerHTML + tableRow;
}
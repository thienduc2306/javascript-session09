// B1: Giao diện

// B2: Phân tích cấu trúc dữ liệu cần fai lưu trữ của ứng dụng

//TẠO KHO LƯU TRỮ DỮ LIỆU MO PHỎNG

//Quan sát HTML (Giao diện)---> suy luận
// các phần tử todo HTML có cấu trúc giống hệt nhau conten,status
//{content,status}

let todoListDB = [
    {
        id: 1,
        content: "Hit the gym",
        status: false,
    },
    {
        id: 2,
        content: "Pay bills",
        status: true,
    },
    {
        id: 3,
        content: "Meet Geogre",
        status: false,
    },
    {
        id: 4,
        content: "Buy eggs",
        status: false,
    },
];

// B3: RENDER
// Chuyển đổi các đối tượng dữu liệu thành các phần tử HTML---> Xuất hiện trên trình duyệt
// <li class="checked">Pay bills</li>;

//B3.1 :CHọn vị trí cần gắn các phần tử HTML chuyển đỏi dữu liệu(ul#HTML)

let ul = document.getElementById("myUL");

// B3.2 : Chuyển đổi dữ liệu
// for...in
render();
//B3.3: Mỗi khi tạo ra được 1 phần tử HTML li
// ---> Gắn phần tử li đó vào ul



//B4: Thực hiện tính năng CREATE (thêm mới todo)
//B4.1 : Xác định nguồn gốc của tính  năng
// ---> Nút ADD

let addBtn = document.getElementById("addBtn");
let input = document.getElementById("myInput");


//B4.2: gắn sự kiện onclick cho nút add
addBtn.onclick = function () {
    //B4.3: cần lấy ra nội dung nằm tr ô input(.value)
    let content = input.value;//content....
    if (content !== "") {
        //B4.4: Tạo ra 1 đối tượng dữ liệu có cấu trúc giống hệt các đói tuợng dữ liệu todo tr mảng todoList
        let todoData = {
            id: Math.random(),
            content: content,
            status: false,
        };

        //B4.5 :Thêm đói tượng dữ liệu này vào tr todoListDB
        todoListDB.push(todoData);

        //B4.6:  duyệt qua todoListDB ---> phản ánh sự thay đỏi tr todoListDB có theme phần tử mới ---->HTML

        ul.innerHTML = "";
        render();
        //B4.7:Clear ô input
        input.value = "";
    };
}



function render() {
    for (let index in todoListDB) {
        let li;
        if (todoListDB[index].status) {
            li = `
    <li id ="${todoListDB[index].id}" class="list-item checked">
        ${todoListDB[index].content}
        <span class="close">×</span>
    </li>
    `;
        } else {
            li = `
    <li id ="${todoListDB[index].id}" class="list-item">
        ${todoListDB[index].content}
        <span class="close">×</span>
    </li>
    `;
        }
        ul.innerHTML = ul.innerHTML + li;
    }

    //B5: Tính năng Update (Cập nhật)
    //B5.1 : Xác định nguồn gốc của tính năng    
    // Toàn bộ thẻ li
    let liCollection = document.getElementsByClassName("list-item");
    // Gắn sự kiện cho toàn bộ thẻ li
    for (let i = 0; i < liCollection.length; i++) {
        liCollection[i].onclick = function () {
            // B5.3: Mỗi khi bấm vào thẻ li nào hì fai cần đc tìm ra đối tượng dữ liệu tương ứng tr cơ sở dữu liệu
            let id = +liCollection[i].getAttribute("id");

            //B5.3.1:Tìm kiếm vị trí của đối tượng dữu liệu tương ứng thông qua id
            let updateIndex = -1;
            for (let j = 0; j < todoListDB.length; j++) {
                if (todoListDB[j].id === id) {
                    updateIndex = j;
                    break;
                }
            }
            console.log(updateIndex);

            //B5.4: Cập nhạt lại trạng thái của  đối tượng dữ liệu đó (true-> false,false->true)
            todoListDB[updateIndex].status = !todoListDB[updateIndex].status;

            //B5.5: CSDL có sự thay đổi--> phản ánh sự thay đổi tr CSDL đó bằng cách gọi lại hàm render() 
            ul.innerHTML = "";
            render();
        };
    }
    //B6 :Tính năng DELETE
    //B8.1 :Xác định nguồn gốc cảu tính năng (span.close)
    let spanCollection = document.getElementsByClassName("close");
    console.log(spanCollection);

    //B6.2:Gắn toàn bộ cho toàn bộ nút close
    for (let i = 0; i < spanCollection.length; i++) {
        spanCollection[i].onclick = function (event) {
            event.stopPropagation();
            //B6.3 : khi bấm vào nút x nào --> xác định đc vị trí của đối tượng dữ liệu tương ứng tr CSDL
            let deleteIndex = spanCollection[i].parentElement.getAttribute("id");
            //B6.4 : Tiến hành xóa đối tượng đó đi
            // for (let i = 0; i < todoListDB.length; i++) {
            //     if (deleteId === todoListDB[i].id) {
            //         todoListDB.splice(i, 1)
            //     }
        //     }
        //     //B6.5: Gọi render
        //     render();
        }
    }
};


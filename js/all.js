//指定 dom
var listEl = document.querySelector('.list');
var todoBtnEl = document.querySelector('.todoBtn');
var todoData = JSON.parse(localStorage.getItem('myTodo'))||[];
var inputTodoEl = document.querySelector('.inputTodo');


//監聽與更新
todoBtnEl.addEventListener('click', addList, false);
listEl.addEventListener('click', delTodFun, false);
updateList();



//更新列表
function updateList() {
    var todoDataStr = JSON.stringify(todoData);
    localStorage.setItem('myTodo', todoDataStr);
    str = '';
    for(var i = 0; i< todoData.length; i++){
        str += '<li ><a href="#" data-num=' + i +' class="delTodo">刪除</a> ' + todoData[i].content + '</li>';
    }
    listEl.innerHTML = str;
}
//加入列表 更新並同步新增localStorage資料
function addList(e) {
    if (inputTodoEl.value == ""){
        alert('欄位不可為空!');
        return;
    }
    var data = {
        content: inputTodoEl.value
    }
    todoData.push(data);
    updateList();
    inputTodoEl.value = "";
}
//刪除列表
function delTodFun(e){
    e.preventDefault();
    if(e.target.nodeName !=='A'){return;}
    var todoNum = e.target.dataset.num;
    // console.log(todoNum[e.target.dataset.num]);
    todoData.splice(todoNum,1);
    updateList();
}
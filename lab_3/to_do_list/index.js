
const inputBox=document.getElementById('input');
const listBox=document.getElementById('list');

function Addtask(){
    if(inputBox.value==""){
        alert("Enter task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}

listBox.addEventListener('click', function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('active');
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        let a=confirm("Are you sure?");
        if(a) e.target.parentElement.remove();
        saveData()
    }

},false )

function saveData(){
    localStorage.setItem("data",listBox.innerHTML);
}
function showList(){
    listBox.innerHTML=localStorage.getItem("data");
}
showList();
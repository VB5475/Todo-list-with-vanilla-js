//**task array for task list
let task = [] ; 
let donelist = [];

 //**updating the pending task list
function updatependinglist() {
    let pendinglist = document.querySelector(".ul");

    if(task.length !== 0){
       
    //giving the whole array of task to pending list in html
   pendinglist.innerHTML = task.map((taskname,index)=>{return `<li class = "li" id=li${index} ><label class="label" id=label${index} >${taskname}</label><button id=${index} class="donebtn" onclick="done_logic(this.id)"> done</button>
   <button id=${index} class="deletebtn" onclick="delete_logic(this.id)"> delete</button></li>
   `}).join("");   
  }

    else {
        pendinglist.innerHTML = `<li class = "li" ><label class="label" >no tasks are added</label></li>` ;
    }
}

//**logic for addtask button
function addtask () {
    //input value catching
let inputvalue = document.getElementById("inputtag");
let taskcontent = inputvalue.value;
console.log(taskcontent);

       //condition if input is empty or not
if(taskcontent){
//pushing new task to task list
task.push(taskcontent);
console.log(task);
//**updating the pending task list
updatependinglist();
document.getElementById("inputtag").value='';
}
  else alert("add task");
}

//** logic for done button
function done_logic(buttonid) { 
    console.log(buttonid);
    
    let labelindex = document.getElementById(`label${buttonid}`);
    
    if (labelindex) {
        // Log the text content
        console.log("Text Content:", labelindex.textContent);
    } else {
        console.log(`Label with ID label${buttonid} not found.`);
    }

    if(task.length !== 0){

        let donetask = task.filter((taskname) => taskname.includes(labelindex.textContent) );

    donelist.push(donetask);

    const indextoremove = task.findIndex((element) => {return element.includes(labelindex.textContent)} );
    console.log( indextoremove);

    task.splice(indextoremove,1);
    
console.log("done list : " + donelist);
console.log("task list : " + task);

//**updating the done  list
 let donenodelist = document.querySelector(".doneul");

    //giving the whole array of donetask to done list in html
   donenodelist.innerHTML = donelist.map((taskname)=>{return `<li class = "li" ><label class="label" > ${taskname}</label></li>
   `}).join("");   

   document.getElementById(`li${buttonid}`).innerHTML = "";
}
    else alert("all tasks are done");
};

//** logic for delete button
function delete_logic(buttonid) { 
    
    console.log(buttonid);

    task.splice(buttonid,1);

//**updating the pending task list 
    updatependinglist();
console.log("task list : " + task);
 }
   
document.addEventListener("DOMContentLoaded",() => {
    
//**onclick event of add task button
let buttonselector = document.querySelector(".button");

buttonselector.addEventListener("click",addtask);

// logic to add task by clicking enter key
let forenterkeyclick = document.getElementById('inputtag');

forenterkeyclick.addEventListener("keyup",(event)=>{
    event.preventDefault();
    if(event.key === 'Enter')
    addtask();
    
})

});

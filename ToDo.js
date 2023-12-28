let todoList=[
    {
        item:'Do - Coding' ,
        Duedate:'10/10/2020'
    },
    {
        item:'Do - Blogging' ,
        Duedate:'10/01/2020'
    }
];
displayItem();

function addToDo()
{
 let inputTask = document.querySelector('#ftext');
 let todoItem=inputTask.value;

 let dateElement=document.querySelector('#ToDo-date');
 let datedisplay=dateElement.value;
 
 todoList.push({item:todoItem, Duedate:datedisplay});
 inputTask.value='';
 dateElement.value='';
 displayItem();
}

function displayItem()
{
    let taskToDo =document.querySelector('.todocontainer');

    let newhtml='';
    for(let i=0;i<todoList.length;i++)
    {
        let item=todoList[i].item;
        let Duedate=todoList[i].Duedate;
        newhtml+=
        `
        <span>${item}</span>
        <span>${Duedate}</span>
        <button id="delete" onclick="todoList.splice(${i},1);
        displayItem();">Delete</button>
       
        `;
        
    }
    taskToDo.innerHTML=newhtml;
}


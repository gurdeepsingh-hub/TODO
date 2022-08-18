import PromptSync from "prompt-sync";
import {ListInstance} from './List_.js';

const read = PromptSync();

function Task(listId){

    this.name;
    this.id;
    this.listId=listId;
    this.MarkTask= "Have to do";
    this.content;

    Object.defineProperties(this,{
        TaskName:{
            get: function(){
                return this.name;
            },
            set: function(value){
                this.name=value;
            }
        },
        TaskId:{
            get: function(){
                return this.id;
            },
            set: function(value){
                this.id= value;
            }
        },
        TaskContent:{
            get: function(){
                return this.content;
            },
            set: function(value){
                this.content=value;
            }
        },
        TaskMark:{
            get: function(){
                return this.MarkTask;
            },
            set: function(value){
                this.MarkTask=value;
            }
        }
    });
}

function TaskFeatures(){
    this.AllTasks = [[],[]];

    this.CreateTask = (listId,name,content) =>{

        let taskId = this.AllTasks[listId] != undefined ? 
                    this.AllTasks[listId].length:
                    "0";
        
        this.AllTasks[listId][taskId]= new Task(listId);
        this.AllTasks[listId][taskId].TaskId=taskId;
        this.AllTasks[listId][taskId].TaskName = name;
        this.AllTasks[listId][taskId].TaskContent= content;
    }

    this.EditContent = (listId,taskId,content) =>{
                this.AllTasks[listId][taskId].TaskContent = content;      
    }

    this.veiwList= (id) => {
                console.table(this.AllTasks[id]);
    }
    this.ReturnTaskId=(listId,T_Name)=>{
        for(let key in this.AllTasks[listId]){
            if(this.AllTasks[listId][key].TaskName == T_name){
                return this.AllTasks[listId][key].TaskId;
            }
        }
    }
}

let listId = 0;
let L_name,EnterTask= true,L_Id;
let T_name,T_Id,T_content;

function SwitchFn(answer){
    
    switch(answer){
        case "1": 
            L_name=read("Enter the name of list: ");
            ListInstance.CreateList(
                L_name,
                listId
                );
            TaskInstance.AllTasks[listId];
            listId++;
        break;

        case "2":
            ListInstance.veiwLists();
            L_name=read("Enter the name of list: ");
            if(ListInstance.ReturnListId(L_name) != undefined){
                L_Id= ListInstance.ReturnListId(L_name); 
                EnterTask= true;    
                while(EnterTask == true){
                TaskInstance.CreateTask(
                    L_Id,
                    read("Enter name of task: "),
                    read("Enter task content:")
                    );
                    EnterTask=read("More Tasks to add? Y/N") == "Y" ? true :false; 
                }
            } else{
                ListInstance.CreateList(
                    L_name,
                    listId
                    );
                TaskInstance.AllTasks[listId];//=L_name;
                EnterTask= true;
                while(EnterTask == true){
                    TaskInstance.CreateTask(
                        listId,
                        read("Enter name of task: "),
                        read("Enter task content:")
                        );
                        EnterTask =read("More Tasks to add? Y/N") == 'Y' ? true :false; 
                    }
                    listId++;
            }
        break;
        case "3":
            ListInstance.veiwLists();
        break;
        case "4":
            ListInstance.veiwLists();
            L_name = read("Enter name of list: ");

            TaskInstance.veiwList(ListInstance.ReturnListId(L_name));
        break;
        case "5":
            ListInstance.veiwLists();
            ListInstance.RenameList(
                read("Enter name of list to rename: "),
                read("Enter new name: ")
            );
        break;
        case "6":
            ListInstance.veiwLists();
            L_name=read("Enter list name: ");
            L_Id = ListInstance.ReturnListId(L_name);

            TaskInstance.veiwList(L_Id);
            T_name=read("Enter task name: ");
            T_Id= TaskInstance.ReturnTaskId(L_Id,T_name);
            T_content= read("Enter task new content: ");
            TaskInstance.AllTasks[L_Id][T_Id].TaskContent=T_content;
        break;
        case "7":
            ListInstance.veiwLists();
            L_name=read("Enter list name: ");
            L_Id = ListInstance.ReturnListId(L_name);

            TaskInstance.veiwList(L_Id);
            T_name=read("Enter task name: ");
            T_Id= TaskInstance.ReturnTaskId(L_Id,T_name);
            TaskInstance.AllTasks.splice([L_Id][T_Id],1);
        break;
        case "8":
            ListInstance.veiwLists();
            L_name=read("Enter list name: ");
            L_Id = ListInstance.ReturnListId(L_name);

            TaskInstance.veiwList(L_Id);
            T_name=read("Enter task name to mark as completed: ");
            T_Id= TaskInstance.ReturnTaskId(L_Id,T_name);
            TaskInstance.AllTasks[L_Id][T_Id].TaskMark="Completed";
        break;
        case "9":
            return 0;
    }
}



//testing
const TaskInstance = new TaskFeatures();

let answer;
while(answer != "9"){
console.log("TO DO");
console.log("1. To make a new list      2. To make a new task");
console.log("3. To show all lists       4. To show a list");
console.log("5. To Rename a list        6. To edit task content");
console.log("7. To delete a task        8. To mark a task");
console.log("9. To Exit")
answer= read("Enter your choice: ");
SwitchFn(answer);
}


// let ListId =0;
// let TaskId =0;
// ListInstance.CreateList("today", ListId++);
// ListInstance.veiwLists();
// instance.CreateTask(0,"complete_project",0,"complete todo list app");
// instance.CreateTask(0,"complete_project1",2,"complete todo list app1");
// TaskInstance.EditContent(0,2);
function Task(listId){

    this.name;
    this.id;
    this.listId=listId;
    this.MarkTask= false;
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

    this.CreateTask = (listId,name,taskId,content) =>{
        this.AllTasks[listId][taskId]= new Task(listId);
        this.AllTasks[listId][taskId].Taskid= taskId;
        this.AllTasks[listId][taskId].TaskName = name;
        this.AllTasks[listId][taskId].TaskContent= content;
    }
    this.EditContent = (listId,taskId) =>{
        for( [listId][taskId] in this.AllTasks){

            console.log(this.AllTasks[listId][taskId]);
        }
    }

}

//testing
//hello
const instance = new TaskFeatures();
instance.CreateTask(0,"complete_project",1,"complete todo list app");
instance.CreateTask(0,"complete_project1",2,"complete todo list app1");
instance.EditContent(0,1);
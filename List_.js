function list(){
    this.id;
    this.name;
    Object.defineProperties(this,{
    ListId:{
        get: function(){
            return this.id;
        },
        set: function(value){
            this.id=value;
        }
    },
    ListName:{
        get: function(){
            return this.name;
        },
        set: function(value){
            this.name=value;
        }
    }
    });

}

function ListFeatures(){

    this.allLists =[];

    this.CreateList= (name,id)=> {
        this.allLists[id]=new list();
        this.allLists[id].ListId = id;
        this.allLists[id].ListName = name;
        //console.log(allLists[id].id , allLists[id].name);
    }

    this.veiwLists= () => {

            console.table(this.allLists);
    }

    this.ReturnListId =(name)=>{
        for(let key in this.allLists){
            if(this.allLists[key].ListName == name){
                return this.allLists[key].ListId;
            }
        }
    }

    this.RenameList= (name, newName) =>{
        for(let key in this.allLists){
            if(this.allLists[key].ListName == name){
                this.allLists[key].ListName = newName;
            }
        }
    }
}

//testing

export let ListInstance = new ListFeatures();

// let id =0;
// ListInstance.CreateList("today",id++);
// ListInstance.CreateList("Tomorrow",id++);
// ListInstance.veiwLists();
// console.log(ListInstance.allLists);
// ListInstance.RenameList("Tomorrow","yesterday");
// ListInstance.veiwLists();
// console.log(ListInstance.allLists);
console.log(ListInstance.ReturnListId("today"));
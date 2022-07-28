function list(){
    this.id;
    this.name;
    Object.defineProperties(this,this.id,{
        get: function(){
            return this.id;
        },
        set: function(value){
            this.id=value;
        }
    });
    Object.defineProperty(this,this.name,{
        get: function(){
            return this.name;
        },
        set: function(value){
            this.name=value;
        }
    });

}

function ListFeatures(){

    this.allLists =[];

    this.CreateList= (name,id)=> {
        this.allLists[id]=new list();
        this.allLists[id].id = id;
        this.allLists[id].name = name;
        //console.log(allLists[id].id , allLists[id].name);
    }

    this.veiwLists= () => {

            console.table(this.allLists);
    }

    this.ReturnListId =(name)=>{
        for(let key in this.allLists){
            if(this.allLists[key].name == name){
                return this.allLists[key].id;
            }
        }
    }

    this.RenameList= (name, newName) =>{
        for(let key in this.allLists){
            if(this.allLists[key].name == name){
                this.allLists[key].name=newName;
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
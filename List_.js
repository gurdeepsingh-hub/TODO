function list(){
    this.id;
    this.name;
    Object.defineProperties(this,id,{
        get: function(){
            return id;
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
        for(key in this.allLists){
            console.log(this.allLists[key].name);
        }
    }

    this.veiwList= (id,name) => {
        for(key in this.allLists){
            if(this.allLists[key].id == id){
                console.log();
            }
        }
    }

    this.RenameList= (id,name) =>{
        for(key in this.allLists){
            if(this.allLists[key].id == id){
                this.allLists[key].name=name;
            }
        }
    }
}

//testing

let instance = new ListFeatures();
let id =0;
instance.CreateList("today",id++);
instance.CreateList("Tomorrow",id++);
instance.veiwLists();
console.log(instance.allLists);
instance.RenameList(1,"yesterday");
instance.veiwLists();
console.log(instance.allLists);

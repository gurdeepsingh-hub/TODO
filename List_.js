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
let allLists =[];

function CreateList(name,id){
    allLists[id]=new list();
    allLists[id].id = id;
    allLists[id].name = name;
    console.log(allLists[id].id , allLists[id].name);
}
let id =0;
CreateList("today",id++);
CreateList("Tomorrow",id++);

// const list1 = new list();
// list1.id=id++;
// list1.name = "today";
// console.log(list1.id , list1.name);

// const list2 = new list();
// list1.id=id++;
// list1.name = "tommorow";
// console.log(list1.id , list1.name);

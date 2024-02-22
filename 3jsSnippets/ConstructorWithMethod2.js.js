function BellBoy(name,age){
    this.name=name;
    this.age=age;
    this.showMe=function(){
        alert(this.name);
    }
}
var houseKeeper=new BellBoy('rehan',48);
houseKeeper.showMe();
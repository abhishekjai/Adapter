class ArrayAdapter{
    storage = [];
    save(_adapter){
        this.storage.push(_adapter);
    }
    show(){
        console.log(this.storage);
    }
    update(id,obj){
        const user = this.storage.find(c => id === c.id);
        if(!user){
            console.log('User not available');
            return;
        }
        const index = this.storage.indexOf(user);
        this.storage[index]=obj;
    }
}
class User{
    constructor(instance,schema){
        this.instance = instance
        this.schema =schema;
    }
    show(){
        this.instance.show()
    }
    save(id,name){
        this.instance.save(new this.schema(id,name));
    }
    update(id,obj){
        this.instance.update(id,obj)
    }
}
class Schema{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
}
const adapt = new ArrayAdapter();
const user = new User(adapt,Schema);
user.save(1,'abhishek');
user.save(2,'jaiswal');
user.save(3,'rohan');
user.show()

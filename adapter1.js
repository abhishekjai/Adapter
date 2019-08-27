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
        const uarr = Object.keys(user);
        const oarr = Object.keys(obj);
        const index = this.storage.indexOf(user);
        oarr.forEach((val)=>{
            if(uarr.includes(val)){
                console.log(val);
                this.storage[index][val]=obj[val];
            }
        })
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
        if(!id || !name){
            throw new error('id and name is required');
        }
        this.id=id;
        this.name=name;
    }
 }
 const adapt = new ArrayAdapter();
 const user = new User(adapt,Schema);
 user.save(1,'abhishek');
 user.save(2,'jaiswal');
 user.save(3,'rohan');
 user.show();
 user.update(1,{name:'satyam'});
 user.show()
 

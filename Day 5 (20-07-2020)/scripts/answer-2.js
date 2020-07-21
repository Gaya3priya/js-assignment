class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
 
class Moderator extends User{
    Addcoins(user){
        user.lucoins++;
        console.log(user);
    }
    Removecoins(user){
        user.lucoins--;
        console.log(user)
    }

}
class Admin extends Moderator{
    Addcourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    Removecourse(user,course){
        
        for (let i=0;i<user.courses.length;i++){
            if(course==user.courses[i]){
                user.courses.splice(i,1);
            }
        }
        console.log(user);
    }
}
let user1=new User('Gayathri','20','gp@gmail.com')
let user2=new User('priya','19','pg@gmail.com')
let mod=new Moderator('Anusha','22','ap@gmail.com')
let admin=new Admin('Ammu','24','am@gmail.com')
user1.login()
mod.Addcoins(user1)
mod.Addcoins(user1)
mod.Removecoins(user1)
admin.Addcourse(user1,'Javascript');
admin.Addcourse(user1,'Python');
admin.Addcourse(user1,'Blockchain');
admin.Removecourse(user1,'Blockchain');
user1.logout();
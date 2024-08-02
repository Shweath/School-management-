class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    
}
class teacher extends user{    
    constructor(name,email,subject){
        super(name,email);
        this.subject=subject;
    }
}
class student extends user{
    constructor(name,email,grade){
        super(name,email);
        this.grade=grade;
    }
}
let teacher1=new teacher("ram sir","ram@gamil.com","math");
let student1=new student ("hari kumar","hari@gmail.com",8);
let teacher2=new teacher("sita mam","sita@gamil.com","Nepali");

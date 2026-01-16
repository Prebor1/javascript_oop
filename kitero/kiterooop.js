class Student{
    constructor(name){
        this.name = name;
        this.askedQuestionNum = 0;
    }
    askedQuestion(){
        console.log("???");
        this.askedQuestionNum++;
    }
}

const stu1 = new Student('Jhonny');
const stu2 = new Student('Prebor');

console.log(stu1);
console.log(stu2);

class StudentWithWork extends Student{
    constructor(name){
        super(name);
        this.workDone = 0;
    }

    doWork(){
        this.workDone++;
    }
}

const stu11 = new StudentWithWork('Jhonny');
const stu22 = new StudentWithWork('Prebor');

stu11.doWork();
console.log(stu11)

stu22.doWork();
console.log(stu22)
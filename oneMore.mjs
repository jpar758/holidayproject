import {Person} from "./ exersesssss";

export class Teacher extends Person{
	constructor(name, degree){
		super(name);
		this.degree = degree;
	}
	teach(){
		console.log("hello i can teach");
		
	}
	haveDegree(){
		console.log("hello i have a degree");
	}
}


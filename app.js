function grading (x,s,grades) {
  if (x === grades.length)
{
	console.log("All students " + s +"ed.")
}



}

 //Grades App
 //Variables
 let names = ["John","Nick","Lance"];
 let grades = [80,45,51];
 let min = 51; // Passing grade
 let pass = 0;  // Amount of passing students
 fail = 0;      //Failing students
 let s = ""  
 let str="";

 //Count the students that passed and failed
 for (let i = 0 ; i < names.length ; i++)
 {
	  if (grades[i] >= min)
	  {
	     pass += 1
	  }

	  else 
    {
	    fail +=1
	  }

}

//Message for all students, if all passed or failed
grading(pass,"pass",grades);

grading(fail,"fail",grades);
if (pass < grades.length && fail < grades.length){
  //If some  passed, and others did not, this happens. 
  // The "s" strings depends on the sentence. 
  for (let i = 0 ; i < grades.length ; i++)
  
  {

     if (i == names.length - 2)
    {
	    s = ", and ";
    }

    else if (i < names.length - 2)
    {
	    s = ", ";
    }
    else 
    {
	    s ="."
    }
    // This code is combining points into a sentence.
  if (grades[i] >= min)
   {
     str += (names[i] + " has passed with a grade of " + grades[i] + s);
   }
   else {
     str += (names[i] + " has failed with a grade of " + grades[i] + s);
   }
 }
}


console.log(str);

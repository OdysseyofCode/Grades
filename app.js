 //Grades App
 //Variables
 let names = ["John","Nick","Lance"];
 let grades = [80,45,51];
 let min = 51; // Passing grade
 let pass = 0;  // Amount of passing students
 fail = 0;      //Failing students
 let s = ""  


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
if (pass === grades.length)
{
	console.log("All students passed")
}

else if (fail ===2)
	{
	console.log("All students failed")
	}
else 
{ 
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
  if (grades[i] >= min)
   {
     console.log(names[i] + " has passed with a grade of " + grades[i] + s);
   }
   else {
     console.log(names[i] + " has failed with a grade of " + grades[i] + s);
   }
 }
}

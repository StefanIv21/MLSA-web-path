var student = {
    name : "ahshdhedu", 
    grade : 6 , 
    id : 1 
 };

student.check = function()
{
    if(this.grade >= 5)
        console.log("Felicitari");
};

student.check();
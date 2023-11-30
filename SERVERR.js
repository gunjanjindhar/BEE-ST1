const express = require('express') ;


const app = express() ;
app.use(express.json()) ;

let students = [] ;


app.get('/students' , (req , res)=>{
    res.send(students) ;
});


app.get("/student/:rollno" ,(req,res)=>{
    const {rollno} = req.params ;

    const stu = students.find((stud)=>stud.rollno == rollno) ;


    if(stu == null){
        res.send("No Such Student") ;
    }
    else{
        res.send(stu) ;
    }
})


app.post('/student', (req,res)=>{

    const newStudent = req.body ;

    students.push(newStudent) ;

    res.send("student added successfully....") ;
}) ;


 
app.put("/student/:rollno" , (req , res)=>{

    const {rollno} = req.params ;

    const updated = req.body ;

    const index = students.findIndex(stu => stu.rollno == rollno) ;
    students[index] = updated ;


    res.send("updated successfully") ;
});


app.delete("/student/:rollno" , (req , res)=>{

    const {rollno} = req.params ;
    
    students = students.filter((stu)=>{
        return stu.rollno != rollno;
    });

    res.send("Student deleted Successfully...") ;
})



app.listen(3000 , ()=>{
    console.log("http://localhost:3000") ;
})
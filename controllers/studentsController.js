const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json');

controller.get('/', (request,response)=>{
    response.json(studentData)


    //how do I handle a query string?

    // const { limit = 25} = req.query; //10
    // limit = Number(limit); // 10

    // how do I change the student data according to the limit?

    // studentData.students = studentData.students.slice(0, limit)
    // response.json(studentData)
})
controller.get('/:id', (request, response)=>{
    try{
        const studentId = request.params.id;
    
        if(!/[0-9]/.test(studentId)){
            response.send('Student id must be a number.')
            return;
        }
    
        const singleStudent = studentData.students.find(student => {
            return student.id === studentId;
        });
    
        if(singleStudent){
            response.json(singleStudent)
        } else {
            response.send('Student not found');
        }
    } catch (err){
        response.status(500).send("An error occurred");

    }
})
module.exports = controller;
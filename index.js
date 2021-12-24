const inquirer = require ('inquirer');
const fs = require ('fs')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const groupArray =[];

function addMana (){
    inquirer
        .prompt([
            {
               type: 'input',
               name:'name',
               message:'What is your name?',

            },
            {
               type: 'input',
               name: 'email',
               message: 'what is your email?'
            },
            {
                type: 'input',
                name: 'manager',
                message: 'who is the manager of this team?'
            },
            {
                type: 'input',
                name: 'id',
                message:'Please enter your employee id number?'
            },
            {
                type:'input',
                name:'officeNumber',
                massage: 'Please enter your office number?'
            }
        ])
        .then(managerInput => {
            const {name, id, email, officeNumber} = managerInput;
            const manager = new manager(name, id, email,officeNumber);

            groupArray.push(manager)
            console.log(manager);
        })
    
};

function addEmployee () {
    inquirer
        .prompt([
            {
                type:'list',
                name:'role',
                message:'Please choose a role?',
                chocies:[
                    'engineer',
                    'intern'
                ]
            },
            {
                type:'input',
                name:'name',
                message:'what is the name of the employee?'
            },
            {
                type:'input',
                name:'id',
                message: 'Please enter the employees id'
            },
            {
                type:'input',
                name:'email',
                message:'Please enter your email'
            },
            {
                type:'input',
                name:'school',
                message:'Please enter your school name',
                when:(input) => input.role === 'intern'
            },
            {
                type:'input',
                name:'github',
                message:'Please enter your github username',
                when:(input) => input.role === 'engineer'
            },
        ])
}
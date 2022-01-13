const inquirer = require ('inquirer');
const fs = require ('fs')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const geneTeamHtml = require('./src/genHtml')
const groupArray =[];

function addMana (){
    inquirer
        .prompt([
            {
               type: 'input',
               name:'name',
               message:'Please enter the managers name?',

            },
            {
               type: 'input',
               name: 'email',
               message: 'what is your email?'
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
            const manager = new Manager(name, id, email,officeNumber);

            groupArray.push(manager)
            addEmployee();
        })
    
};

function addEmployee () {
    return inquirer
        .prompt([
            {
                type:'list',
                name:'role',
                message:'Please choose a role for the employee?',
                choices:[
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
                message: 'Please enter the employees id?'
            },
            {
                type:'input',
                name:'email',
                message:'Please enter your email?'
            },
            {
                type:'input',
                name:'school',
                message:'Please enter your school name?',
                when:(input) => input.role === 'intern'
            },
            {
                type:'input',
                name:'github',
                message:'Please enter your github username?',
                when:(input) => input.role === 'engineer'
            },
            {
                type: 'list',
                name:' confrimAddEmployee',
                message: 'Would you like to add another employee?',
                choices: ["yes","no"]
            }

        ])
        .then (employData => {
            let {name, id, email, role, github, school, confrimAddEmployee} = employData;
            let employee;
            if (role === 'engineer'){
                employee = new Engineer(name, id, email, github);
            } else if (role === 'intern'){
                employee = new Intern (name,id, email, school);
            }
            groupArray.push(employee);

            if (confrimAddEmployee === "yes"){
                addEmployee();

            }else{
                const teamData = geneTeamHtml(groupArray);
                console.log(teamData);
                writeToFile(teamData);
            }

        })
}

const writeToFile = data => {
    fs.writeFile('./dist/output.html', data, err =>{
        if (err){
            console.log(err);
            return;
        }else{
            console.log("Your team profile was created! check index.html")
        }
    } )
};

addMana();

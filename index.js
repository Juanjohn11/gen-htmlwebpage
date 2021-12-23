const inquirer = require ('inquirer');
const fs = require ('fs')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

function addMana (){
    inquirer
        .prompt([
            {
               type: 'text',
               name:'name',
               message:'What is your name?',

            },
            {
               type: 'text',
               name: 'email',
               message: 'what is your email?'
            }
        ])
    
}
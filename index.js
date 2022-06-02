const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { validate } = require('@babel/types');
const { off } = require('process');

const employeeArray = [];

const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                return true;
            } else {
                console.log("Please enter manager's name!");
            }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's id!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        
        employeeArray.push(manager);
    })
}

console.log('Please build your team');
createManager();
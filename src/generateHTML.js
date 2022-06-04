const fs = require('fs');
const writeFile = require('./generate-page')

// sends employee data to other functions to create html layout
generatePage = data => {
    console.log(`
    =====================
    Creating HTML file...
    =====================
    `)
    
    pageArr = [];


    data.forEach(data => {
        const card = generateCard(data);
        pageArr.push(card);
    })

    const allCards = pageArr.join('');

    const pageContent = generateBasePage(allCards);

    writePage(pageContent);
};

// generates the cards on the html for each employee
const generateCard = function(data) {
    return `
    <div class="justify-content-around col-4 p-3">
        <div class="border shadow rounded">
            <div class="bg-primary text-light p-3">
                <h2>${data.getName()}</h2>
                <h2>${getRoleSymbol(data)} ${data.getRole()}</h2>
            </div>
            <div class="border m-3 p-3">
                <p class="border-bottom ">${data.getId()}</p>
                <p>Email: <a href="mailto: ${data.getEmail()}">${data.getEmail()}</a></p>
                <p>${rolePrompt(data)}</p>
            </div>
        </div>
    </div>`
};


// sets what the last value for each employee is in the html based on their roles
const rolePrompt = function (employee) {
    if (employee.getRole() === 'Manager') {
        return `Office number: ${employee.getOfficeNumber()}`
    } else if (employee.getRole() === 'Engineer') {
        return `Github: <a href="https://github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a>`
    } else {
        return `School: ${employee.getSchool()}`
    }
};

// creates the base of the html page then adds all the employee cards
generateBasePage = allCards => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    <title>Team Generator</title>
</head>
<body>
    <header>
        <h1 class="p-5 bg-danger text-light text-center">My Team</h1>
    </header>
    <div class="container">
        <div class="d-flex justify-content-center flex-wrap row">
        ${allCards}
        </div>
    </div>
</div>
</body>
</html>
    `
};

const getRoleSymbol = function (data) {
    if (data.getRole() === 'Manager') {
        return `<span class="material-symbols-outlined">coffee</span>`;
    } else if (data.getRole() === 'Engineer') {
        return `<span class="material-symbols-outlined">engineering</span>`;
    } else {
        return `<span class="material-symbols-outlined">school</span>`;
    };
};

// send data to write file
writePage = pageHTML => {
    writeFile(pageHTML)
    console.log(`
    ==================================
    HTML Created in the 'dist/' repo!
    =================================
    `)
};

module.exports = generatePage;
const fs = require('fs');

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

    const pageContent = pageArr.join('');
    writePage(pageContent);
};

const generateCard = function(data) {
    return `
    <div class="justify-content-around col-4 p-3">
        <div class="border shadow rounded">
            <div class="bg-primary text-light p-3">
                <h2>${data.getName()}</h2>
                <h2>${data.getRole()}</h2>
            </div>
            <div class="border m-3 p-3">
                <p class="border-bottom ">${data.getId()}</p>
                <p>Email: <a href="mailto: ${data.getEmail()}">${data.getEmail()}</a></p>
                <p>${rolePrompt(data)}</p>
            </div>
        </div>
    </div>`
};

const rolePrompt = function (employee) {
    if (employee.getRole() === 'Manager') {
        return `Office number: ${employee.getOfficeNumber()}`
    } else if (employee.getRole() === 'Engineer') {
        return `Github: <a href="github.com/${employee.getGitHub()}">${employee.getGitHub()}</a>`
    } else {
        return `School: ${employee.getSchool()}`
    }
}


// send data to write file
writePage = pageHTML => {
    // writeFile(pageHTML)
    console.log(pageArr)
    console.log('HTML Created!')
}


module.exports = generatePage;
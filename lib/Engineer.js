const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGitHub() {

    }

    getRole() { // overridden to return 'engineer'

    }
}

module.exports = Engineer;
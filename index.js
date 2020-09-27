var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8886,
    user: "root",
    password: "root",
    database: "employeeTracker_db"
});

main();

// function which prompts the user for what action they should take
function main() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View Department",
                "View Employee",
                "View Roles",
                "Add Employee",
                "Add Role",
                "Add Department",
                // "Update Employee Roles"
            ]
        })

        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            switch (answer.action) {
                case "View Department":
                    selectTable("department");
                    break;
                case "View Employee":
                    console.log("employee selected");
                    selectTable("employee");
                    break;
                case "View Roles":
                    selectTable("role");
                    break;
                case "Add Employee":
                    addRecord("employee");
                    break;
                case "Add Role":
                    addRecord("role");
                    break;
                case "Add Department":
                    addRecord("department");
                    break;

                default:
                    break;
            }
        });
}

function selectTable(tableName) {
    var query = `SELECT * FROM ${tableName}`;

    connection.query(query, function (err, res) {
        if (tableName == "employee") {
            console.log("EMPLOYEE TABLE");//title
            console.log("id \t first_name \t last_name \t role_id \t manager_id");//header
            res.forEach(element => {

                console.log(element.id + "\t" + element.first_name + "\t\t" + element.last_name + "\t\t" + element.role_id + "\t\t" + element.manager_id);//content
            });

        }
        else if (tableName == "department") {
            console.log("----DEPARTMENT TABLE----");//table title
            console.log("id \t name"); //header
            res.forEach(element => {
                console.log(element.id + "\t" + element.name); //content
            });

        }
        else if (tableName == "role") {
            console.log("----ROLE TABLE----");//table title
            console.log("id \t title \t \t salary \t department_id"); //header
            res.forEach(element => {
                console.log(element.id + "\t" + element.title + "\t\t" + element.salary + "\t\t" + element.department_id); //content
            });

        }
    });

}

function addRecord(tableName) {
    if (tableName == "employee") {

        // prompt to add new employee
        inquirer
            .prompt([
                {
                    name: "firstName",
                    type: "input",
                    message: "What is the employee's first name?"
                },
                {
                    name: "lastName",
                    type: "input",
                    message: "What is the employee's last name?"
                },
                {
                    name: "role",
                    type: "input",
                    message: "What is the employee's role?"
                },
                {
                    name: "manager",
                    type: "input",
                    message: "Who is the employee's manager?"
                },

            ])
            .then(function (answer) {
                var query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.firstName}', '${answer.lastName}', '${answer.role}', '${answer.manager}')`;

                connection.query(query, function (err, res) {
                    if (err) throw err;
                    console.log("Your new employee was created successfully!");
                });

                
            });
            

    }
    else if (tableName == "department") {
        // prompt for info about the item being put up for auction
        inquirer
            .prompt([
                {
                    name: "name",
                    type: "input",
                    message: "What is the department's name?"
                },
            ])
            .then(function (answer) {
                var query = `INSERT INTO department (name) VALUES ('${answer.name}')`;

                connection.query(query, function (err, res) {
                    if (err) throw err;
                    console.log("Your new department was created successfully!");
                });

            });

    }
    else if (tableName == "role") {
        inquirer
            .prompt([
                {
                    name: "title",
                    type: "input",
                    message: "What is the new title you would like to add?"
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is the salary?"
                },
                {
                    name: "department_id",
                    type: "input",
                    message: "What is the department?"
                },
            ])
            .then(function (answer) {
                var query = `INSERT INTO role (title, salary, department_id) VALUES ('${answer.title}', '${answer.salary}', '${answer.department_id}')`;

                connection.query(query, function (err, res) {
                    if (err) throw err;
                    console.log("Your new role was created successfully!");
                });

            });


    };

};
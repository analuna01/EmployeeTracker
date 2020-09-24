class role{
    constructor(id, title, salary, departmentId){
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId
    }

    getId = () => this.id;

    getTitle = () => this.title;

    getSalary = () => this.salary;

    getDepartmentId = () => this.departmentId
}

module.exports = role;

class employee{
    constructor (id,firstName, lastName, roleId, managerId){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.roleId = roleId,
        this.managerId = managerId
    }

    getId = () => this.id;

    getfirstName = () => this.firstName;

    getlastName = () => this.lastName;

    getroleId = () => this.roleId;

    getmanagerId = () => this.managerId

}

module.exports = employee;
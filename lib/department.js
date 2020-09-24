class department{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    getId = () => this.id;

    getName = () => this.name
}

module.exports = department

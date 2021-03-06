class MyCreep {
    constructor(creep) {
        this.creep = creep
        this.role = creep.memory.role
    }

    //abstract
    run() {}

    isFull() {
        return this.creep.store.getFreeCapacity() === 0
    }

    changeRole(roleName) {
        creep.memory.role = roleName
    }
}

module.exports = MyCreep
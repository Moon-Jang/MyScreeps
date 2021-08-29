const MyCreep = require("./MyCreep")

class MyHarvest extends MyCreep {
    constructor(creep) {
        super(creep)
    }

    run() {
        if(this.isEmpty()) {
            this.role = "upgrade"
        }
    }
}

module.exports = MyHarvest
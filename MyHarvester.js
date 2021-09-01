const MyCreep = require("./MyCreep")

class MyHarvester extends MyCreep {
    constructor(creep) {
        super(creep)
    }

    run() {
        console.log("role >",this.role)

        // pos.findClosestByPath Method로 가까이 있는 활성화된 source를 찾기
        const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE)
        // creep이 source 채취를 시도해보고, 만약 옆에 source가 없어 채취가 불가능하면 source를 향해서 이동합니다.
        if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
            creep.moveTo(source)
        }
    }
}

module.exports = MyHarvester
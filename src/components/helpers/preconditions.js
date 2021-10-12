

export default function getButtons(itemState, order) {
    let type = itemState.type.toUpperCase();
    if (type === "FRUIT") {
        if (order === "PRIMARY") {
            console.log(itemState.ableToHarvest && !itemState.ableToWater)
            if (itemState.ableToHarvest && !itemState.ableToWater) {
                return {name: "HARVEST", clickable: true};
            } else {
                return {name: 'HARVEST', clickable: false};
            }
        } else {
            return {name: 'WATER', clickable: (itemState.ableToWater)};
        }
    } else if (type === "FLOWER") {
        if (order === "PRIMARY") {
            if (itemState.ableToPollinate && !itemState.ableToWater) {
                return {name: "POLLINATE", clickable: true};
            } else {
                return {name: 'POLLINATE', clickable: false};
            }
        } else {
            return {name: 'WATER', clickable: (itemState.ableToWater)};
        }
    } else if (type === "ANIMAL") {
        if (order === "PRIMARY") {
            if (itemState.ableToPet && !itemState.ableToFeed) {
                return {name: "PET", clickable: true};
            } else {
                return {name: 'PET', clickable: false};
            }
        } else {
            return {name: 'FEED', clickable: (itemState.ableToFeed)};
        }
    }

}
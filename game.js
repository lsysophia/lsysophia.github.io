const water = () => {

    allPlants.forEach((plant) => {
        plant.grow()
        console.log(plant.plantLife)
    })
}

const water_plants = document.getElementById("watering")
water_plants.addEventListener("click", water)


const feed = () => {
    allPlants.forEach((plant) => {
        plant.grow()
        console.log(plant.plantLife)
    })
}

document.getElementById("feeding").addEventListener("click", feed)

class Plants {
    constructor (){
        this.plantId = 0
        this.plantLife = 0
    }

    grow () {
        this.plantLife += 1
    }

}

class Plant1 extends Plants {
    constructor() {
        super()
    }

    grow () {
        this.plantLife += 1

        if (this.plantLife === 2) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_1.png")
            document.getElementById(this.plantId).style.height = "15%"
        }
    }
}

class Plant2 extends Plants {
    constructor() {
        super()
    }

    grow () {
        this.plantLife += 1

        if (this.plantLife === 3) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_2.png")
            document.getElementById(this.plantId).style.height = "15%"
        }
    }
 
}

class Plant3 extends Plants {
    constructor() {
        super()
    }

    grow () {
        this.plantLife += 1

        if (this.plantLife === 2) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_3.png")
            document.getElementById(this.plantId).setAttribute("height", "15%")
        }
    }
 
}

class Plant4 extends Plants {
    constructor() {
        super()
    }

    grow () {
        this.plantLife += 1

        if (this.plantLife === 4) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_4.png")
            document.getElementById(this.plantId).setAttribute("height", "15%")
        }
    }
 
}


const allPlants = []

// let current_day = true


// while (current_day === true)

const plantNew = (event) => {
    if (allPlants.length === 0 || (allPlants[0] && allPlants[0].plantLife <= 4)) {
        const newPlantId = Math.random()
        let plant = ""
        if(event.currentTarget.id === "plant1") {
            plant = new Plant1()
        } else if(event.currentTarget.id === "plant2") {
            plant = new Plant2()
        } else if(event.currentTarget.id === "plant3") {
            plant = new Plant3()
        } else {
            plant = new Plant4()
        }
        plant.plantId = newPlantId
        allPlants.push(plant)
        weed_increase()

        const newPlant = document.createElement("img")
        newPlant.setAttribute("id", newPlantId)
        newPlant.setAttribute("class", "plants")
        newPlant.setAttribute("src", "images/sprout.png")
        document.querySelector(".plants").append(newPlant)
    }
}

const weed_increase = () => {
    if (allPlants.length > 0) {
        const weeds_img = document.createElement("img")
        weeds_img.setAttribute("src", "images/mushroom.png")
        weeds_img.classList.add("mushroom")
        document.querySelector(".weed").append(weeds_img)
        }
}

const weeding = () => {
    // if (weed_count > 0) {
        const currentWeeds = document.querySelector(".mushroom")
        document.querySelector(".weed").removeChild(currentWeeds)
        // Plants.life += 1
    // }
}


document.getElementById("plant1").addEventListener("click", plantNew)
document.getElementById("plant2").addEventListener("click", plantNew)
document.getElementById("plant3").addEventListener("click", plantNew)
document.getElementById("plant4").addEventListener("click", plantNew)
document.getElementById("weeding").addEventListener("click", weeding)




// }

// const watering_cans = {
//     basic: {
//         feed_power: 1,
//     },
    
//     better: {
//         feed_power: 3,
//         cost: 10,
//     },
// }

// const plant_food = {
//     basic: {
//         feed_power: 1,
//     },

//     better:{
//         feed_power: 2,
//         cost: 15,
//     },
// }

// const ask_to_plant = prompt ("Would you like to plant something?")
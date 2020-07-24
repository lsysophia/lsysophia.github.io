class Person {
    constructor() {
        this.score = 0
        this.portfolio = {
            plant1: [],
            plant2: [],
            plant3: [],
            plant4: [],
        }
    }
}

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
        // console.log(this.plantLife)
        if (this.plantLife === 2) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_1.png")            
        }
    }
}

class Plant2 extends Plants {
    constructor() {
        super()
    }

    grow () {
        this.plantLife += 1

        if (this.plantLife === 5) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_2.png")
        }
    }
 
}

class Plant3 extends Plants {
    constructor() {
        super()
    }

    grow () {
        this.plantLife += 1

        if (this.plantLife === 9) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_3.png")
        }
    }
 
}

class Plant4 extends Plants {
    constructor() {
        super()
    }

    grow () {
        this.plantLife += 1

        if (this.plantLife === 15) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_4.png")
        }
    }
 
}


const person = new Person()
const allPlants = []
let numberOfWeed = 0

const water = () => {
    allPlants.forEach((plant) => {
        plant.grow()
    })
}
 
const feed = () => {
    allPlants.forEach((plant) => {
        plant.grow()
    })
}


const plantNew = (event) => {
        const newPlantId = Math.random()
        let plant = ""
        if (event.currentTarget.id === "plant1") {
            plant = new Plant1()
            person.portfolio.plant1.push(plant)
        } 
        else if (event.currentTarget.id === "plant2") {
            plant = new Plant2()
            person.portfolio.plant2.push(plant)
        } 
        else if (event.currentTarget.id === "plant3") {
            plant = new Plant3()
            person.portfolio.plant3.push(plant)
        } 
        else {
            plant = new Plant4()
            person.portfolio.plant4.push(plant)
        }
        plant.plantId = newPlantId
        allPlants.push(plant)

        const newPlant = document.createElement("img")
        newPlant.setAttribute("id", newPlantId)
        newPlant.setAttribute("class", "plants")
        newPlant.setAttribute("src", "images/sprout.png")
        document.querySelector("#garden").append(newPlant)
    weedGrowth()
    activateNewPlant()
}

const activateNewPlant = () => {
    person.portfolio.plant1.forEach((plant) => {
        if (plant.plantLife === 2) {
            document.getElementById("plant2").removeAttribute("disabled")
        }
    })
    person.portfolio.plant2.forEach((plant) => {
        if (plant.plantLife === 5) {
            document.getElementById("plant3").removeAttribute("disabled")
        }
    })
    person.portfolio.plant3.forEach((plant) => {
        if (plant.plantLife === 9) {
            document.getElementById("plant4").removeAttribute("disabled")
        }
    })
}



const weedGrowth = () => {
    const weeds_img = document.createElement("img")
    const weeds2_img = document.createElement("img")
    weeds_img.setAttribute("src", "images/mushroom.png")
    weeds_img.classList.add("newWeed")
    weeds2_img.setAttribute("src", "images/grass.png")
    weeds2_img.classList.add("newWeed")
    const allWeeds = [weeds_img, weeds2_img]
    document.querySelector("#garden").append(allWeeds[Math.floor(Math.random() * allWeeds.length)])
    console.log(numberOfWeed)
    return numberOfWeed += 1
}

const weedRemoval = () => {
    const weed = document.querySelector(".newWeed")
    if (weed) {
        weed.remove()
    }
}

document.getElementById("plant1").addEventListener("click", plantNew)
document.getElementById("plant2").addEventListener("click", plantNew)
document.getElementById("plant3").addEventListener("click", plantNew)
document.getElementById("plant4").addEventListener("click", plantNew)
document.getElementById("weeding").addEventListener("click", weedRemoval)
document.getElementById("watering").addEventListener("click", water)
document.getElementById("feeding").addEventListener("click", feed)

const weedIncrease = setInterval(() => {
    weedGrowth()
    if (numberOfWeed === 4) {
        clearInterval(weedIncrease)
    }
}, 3000)


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
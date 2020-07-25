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

    keepScore (n) {
        const totalPlant1 = this.portfolio.plant1.length * 1
        const totalPlant2 = this.portfolio.plant2.length * 2
        const totalPlant3 = this.portfolio.plant3.length * 3
        const totalPlant4 = this.portfolio.plant4.length * 5

        const plantScore = this.score + totalPlant1 + totalPlant2 + totalPlant3 + totalPlant4

        return plantScore - n * 2
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

        if (this.plantLife === 8) {
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

        if (this.plantLife === 12) {
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

        if (this.plantLife === 18) {
            document.getElementById(this.plantId).setAttribute("src", "images/flower_4.png")
        }
    }
 
}

const person = new Person()
const allPlants = []
let numberOfWeed = 0

//creating garden plot with 100 individual spaces to be taken up by either flower or weed
for (let i = 0; i < 100; i ++) {
    const newPlot = document.createElement("div")
    newPlot.setAttribute("class", "emptyDiv")
    newPlot.setAttribute("id", i)
    document.getElementById("garden").append(newPlot)
}

//watering function
const water = () => {
    allPlants.forEach((plant) => {
        plant.grow()
    })
}

//feeding function
const feed = () => {
    allPlants.forEach((plant) => {
        plant.grow()
    })
}

//planting new plant function. new plant will get a random number as ID and will be added to player object portfolio
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
    
    const emptyPlantDiv = document.querySelectorAll(".emptyDiv")
    const randomEmptyDiv = emptyPlantDiv[Math.floor(Math.random() * emptyPlantDiv.length)]
    if (randomEmptyDiv) {
        randomEmptyDiv.insertAdjacentElement("beforebegin", newPlant)
        randomEmptyDiv.remove()

        activateNewPlant()
    }
}

//new plant will be activated when the old plant has been successfully grown
const activateNewPlant = () => {
    person.portfolio.plant1.forEach((plant) => {
        if (plant.plantLife >= 2) {
            document.getElementById("plant2").removeAttribute("disabled")
        }
    })
    person.portfolio.plant2.forEach((plant) => {
        if (plant.plantLife >= 8) {
            document.getElementById("plant3").removeAttribute("disabled")
        }
    })
    person.portfolio.plant3.forEach((plant) => {
        if (plant.plantLife >= 12) {
            document.getElementById("plant4").removeAttribute("disabled")
        }
    })
}

//a random selection between the two images will be added as garden weed
const weedGrowth = () => {
    const weeds_img = document.createElement("img")
    const weeds2_img = document.createElement("img")
    weeds_img.setAttribute("src", "images/mushroom.png")
    weeds_img.classList.add("newWeed")
    weeds2_img.setAttribute("src", "images/grass.png")
    weeds2_img.classList.add("newWeed")
    const allWeeds = [weeds_img, weeds2_img]

    const emptyWeedDiv = document.querySelectorAll(".emptyDiv")
    const randomEmptyDiv = emptyWeedDiv[Math.floor(Math.random() * emptyWeedDiv.length)]
    if (randomEmptyDiv) {
        randomEmptyDiv.insertAdjacentElement("beforebegin", allWeeds[Math.floor(Math.random() * allWeeds.length)])
        randomEmptyDiv.remove()

       return numberOfWeed += 1
    }
}

const weedRemoval = () => {
    const weed = document.querySelector(".newWeed")
    const emptyDiv = document.createElement("div")
    emptyDiv.setAttribute("class", "emptyDiv")
    if (weed) {
        weed.remove()
        document.getElementById("garden").append(emptyDiv)
        return numberOfWeed -= 1
    }
}

document.getElementById("plant1").addEventListener("click", plantNew)
document.getElementById("plant2").addEventListener("click", plantNew)
document.getElementById("plant3").addEventListener("click", plantNew)
document.getElementById("plant4").addEventListener("click", plantNew)
document.getElementById("weeding").addEventListener("click", weedRemoval)
document.getElementById("watering").addEventListener("click", water)
document.getElementById("feeding").addEventListener("click", feed)

if (window.innerWidth < 700) {
    document.getElementById("sun").style.display = "none"
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
        document.getElementById("sun").style.display = "none"
    } else if (window.innerWidth >= 700) {
        document.getElementById("sun").style.display = "inline"
    }
})

const weedIncrease = setInterval(() => {
    weedGrowth()
    const playerScore = person.keepScore(numberOfWeed)
    document.getElementById("score").innerText = "Score: " + playerScore
    if (document.querySelector(".emptyDiv") === null) {
        if (allPlants.length > numberOfWeed) {
            alert ("Congrats! You have successfully made a garden!")
        } else if (allPlants.length < numberOfWeed) {
            alert ("Your garden has been flooded by weeds. But You can collect your mushrooms for dinner!")
        } else if (allPlants.lenth === numberOfWeed) {
            alert ("You half-assed it! Try again?")
        }
        document.querySelector(".mask").style.display = "flex"
        clearInterval(weedIncrease)
    }
}, 1000)

const gameInstruction = () => {
    alert ("Click on one of the flower icons to plant a sprout. Use Watering and Feeding to grow them into flowers, they each grow the flower by 1 point. The other flowers will be unlocked one by one as you successfully grow them. Don't forget to weed!")
}

document.getElementById("instructions").addEventListener("click", gameInstruction)
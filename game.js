class Plants {
    constructor (maturity){
        this.life = 0;
        this.maturity = maturity;
        //this.img = /Users/sophiali/Documents/General_Assembly/projects/unit_1_project/Project_1_Grow_Your_Garden/Grow-Your-Garden-game/images;
    }

    grow () {
        if (water) {
            this.life += 1
        } else if (weeding) {
            this.life += 1
        } 
    }

}

const plant1 = new Plants(15)
const plant2 = new Plants(10)
const plant3 = new Plants(12)
const plant4 = new Plants(8)

const allPlants = [plant1, plant2, plant3, plant4]

const watering_cans = {
    basic: {
        feed_power: 1,
    },
    
    better: {
        feed_power: 3,
        cost: 10,
    },
}

const plant_food = {
    basic: {
        feed_power: 1,
    },

    better:{
        feed_power: 2,
        cost: 15,
    },
}




// const ask_to_plant = prompt ("Would you like to plant something?")


const plant = () => {
    const newPlant = document.createElement("img")
    newPlant.setAttribute("class", "newPlant")
    newPlant.setAttribute("src", "images/sprout.png")
    document.getElementById("plants").appendChild(newPlant)
    // if (Plants.life === Plants.maturity) {
    //     newPlant.src = Plants.maturity_img
    // }
}



let plant_life = 0

const water = () => {
    // if () {
        if (watering_cans.basic) {
            Plants.life += watering_cans.basic.feed_power
        }
        else if (watering_cans.better) {
            Plants.life += watering_cans.better.feed_power
        }
    // }
}

const water_plants = document.getElementById("watering")
water_plants.addEventListener("click", water)
// water_plants.getAnimations()

const weed_increase = () => {
    // if (plant_num > 1) {
        let weed_count = 0
        const weeds_img = document.createElement("img")
        weeds_img.setAttribute("src", "images/mushroom.png")
        weeds_img.classList.add("mushroom")
        document.getElementById("weed").appendChild(weeds_img)
        return weed_count += 1
    // }
}

const weeding = () => {
    // if (weed_count > 0) {
        const currentWeeds = document.querySelector(".mushroom")
        document.getElementById("weed").removeChild(currentWeeds)
        Plants.life += 1
    // }
}

document.getElementById("planting").addEventListener("click", plant)
weed_increase()
document.getElementById("weeding").addEventListener("click", weeding)

const feed = () => {
    if (plant_food.basic) {
        Plants.life += plant_food.basic.feed_power
    } 
    else if (plant_food.better) {
        Plants.life += plant_food.better.feed_power
    }
}



// let current_day = true


// while (current_day === true) {
//     let planted = false
// document.getElementById("planting").addEventListener("click", plant {
//     planted = true
// })
//     
    


// }
const plants = [
    {
        name: "echinacea",
        life: 0,
        young_plant: 8,
        buds: 9,
        maturity: 15,
        young_plant_img: href = "#", // img of young plant
        buds_img: href = "#", // img of buds forming
        maturity_img: href = "#", // img of blooms
    },

    {
        name: "rose",
        life: 0,
        young_plant: 10,
        buds: 18,
        maturity: 20,
        young_plant_img: href = "#", // img of young plant
        buds_img: href = "#", // img of buds forming
        maturity_img: href = "#", // img of blooms
    },

]

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

const plant = () => {

}

const water = () => {
    if (water) {
        if (watering_cans.basic) {
            plants.life += watering_cans.basic.feed_power
        }
        else if (watering_cans.better) {
            plants.life += watering_cans.better.feed_power
        }
    }
}

const weeds = document.getElementById("weed")

const weed_increase = () => {
    const weeds_img = document.createElement("div")
    weeds_img.setAttribute("src", "weeds.jpg") 
    weeds.appendChild(weeds_img)
}

const weed = () => {
    if (weed) { 
        plants.life += 1
        weeds.removeChild(weeds_img)
    }
    else {
        weed_increase()
    }
}

const feed= () => {
    if (feed) {
        if (plant_food.basic) {
            plants.life += plant_food.basic.feed_power
        } 
        else if (plant_food.better) {
            plants.life += plant_food.better.feed_power
        }
        
    }
}

let game_status = true


while (game_status === true) {


    const water_plants = document.getElementById("watering")
    water_plants.addEventListener("click", water())

    const weeding_plants = document.getElementById("weeding")
    weeding_plants.addEventListener("click", weed())

}


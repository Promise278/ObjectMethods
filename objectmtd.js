// 1. Given two user profile objects (e.g., personalInfo and contactInfo), merge them into a single userProfile object.

let  personalInfo = { 
    name: 'Promise',
    age:19,
    gender: 'male'
}

let contactInfo = {
    number: 8167288650,
    Github: 'Promiseobi278'
}

let info = Object.assign(personalInfo, contactInfo)
console.log(info)



// 2. Given a product object, log all its keys and values. Bonus: Format them as "key: value" pairs in an array or print them line by line.

let product = {
    users: ["promise", "pius", "obi"],
    fruits: ["mango", "apple", "pear"],
    animals: ["goat", "dog", "lion"],
    cars: ["Bmw", "Lambo", "ferrari"]
}

let keys = Object.keys(product)
let values = Object.values(product)

console.log("these are the keys of the products", keys)
console.log("these are the values of the product", values)


// 3. Create a settings object (e.g., theme: "dark", notifications: true). Freeze it and try changing a value. Use Object.isFrozen to confirm if it's immutable.

let settings = {
    theme: "dark",
    notification: "true",
}

Object.freeze(settings)


if (Object.isFrozen(settings)) {
    console.log("settings is in state of lock down cant be change")
} else {
    settings.theme = "white"
}

settings.theme = "white"

console.log(settings)
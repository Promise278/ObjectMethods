// 2. Given a product object, log all its keys and values. Bonus: Format them as "key: value" pairs in an array or print them line by line.

let product = {
    users: ["promise", "pius", "obi"],
    fruits: ["mango", "apple", "pear"],
    animals: ["goat", "dog", "lion"],
    cars: ["Bmw", "porshe", "ferrari"]
}

let keys = Object.keys(product)
let values = Object.values(product)

console.log("these are the keys of the products", keys)
console.log("these are the values of the product", values)

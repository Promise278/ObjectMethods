
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
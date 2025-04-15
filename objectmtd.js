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
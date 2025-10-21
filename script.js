// const character = {
//     name: "Justynian",
//     role: "Wizard",
//     level: 1,
//     skills: ["Fireball", "Healing field"],
//     equipment: {
//         weapon: "dagger",
//         armor: "wooden armor",
//         items: ["Healing potion", "Compass"]
//     }
// }


// function createCharacter(name, role) {

// }

// function addItem(character, item) {

// }

// function learnSkill(character, newSkill) {

// }

// function levelUp(character) {

// }

// function levelUp(character) {

// }

function createCharacter(userName, userRole, userLevel) {
    return {
        level: userLevel,
        role: userRole,
        name: userName,
        skills: [],
        equipment: { // nowy objekt
            weapon: "grey hammer",
            armor: "heavy plates",
            items: ["holy water", "Bible"]
        }
    }
}

const mojaPostac = createCharacter("Grzmotosław", "Paladyn", 5, ) // 1

console.log(mojaPostac);
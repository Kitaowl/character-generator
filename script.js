function createCharacter(userName, userRole, userLevel, umiejetnosci) {
    return {
        level: userLevel,
        role: userRole,
        name: userName,
        skills: umiejetnosci,
        equipment: { // nowy objekt
            weapon: "grey hammer",
            armor: "heavy plates",
            items: ["holy water", "Bible"]
        }
    }
}
const mojaPostac = createCharacter("Grzmotosław", "Paladyn", 5, "Podnoszenie ciękich przedmiotów") // 1

function addItem(sword, shield, Iron_chest, Iron_boots, Iron_greaves, Iron_helmet) {
    return {
        weapon: sword,
        defend: shield,
        armor: {
            head: Iron_helmet,
            chest: Iron_chest,
            legs: Iron_greaves,
            feet: Iron_boots
        }
    }
}
const bron = addItem("Miecz", "Tarcza", "Żelazny chest", "Żelazne buty", "Żelazne greaves", "Żelazny helmet")

function learnSkill(character, newSkill) {
    return {
        userCharacter: character,
        userNewSkill: newSkill
        }
    }
const newSkill = learnSkill("Grzmotosław", "Teleport")

function levelUp(character) {
    return {
        levelUp: character
    }
}
const levelingUp = levelUp("Podwyzszenie postaci o jeden level")

function characterDescription(character) {
    return {
        opis: character
    }
}
const opisPostaci = characterDescription("Grzmotosław jest bardzo silną i waleczną postacią.")

console.log(mojaPostac, bron, newSkill, levelingUp, opisPostaci)

// function addItem(character, item) {
//     const mojEkwipunek = addItem
//     return {

//     }
// }

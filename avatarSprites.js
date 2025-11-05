// avatarSprites.js

const avatarSprites = [];

// Load character and equipment sprite sheets
function loadSprites() {
    const characterSprites = [
        '/assets/sprites/character1.png',
        '/assets/sprites/character2.png',
        '/assets/sprites/character3.png'
    ];

    const equipmentSprites = [
        '/assets/sprites/equipment1.png',
        '/assets/sprites/equipment2.png'
    ];

    characterSprites.forEach((sprite) => {
        avatarSprites.push(loadImage(sprite)); // Assume loadImage is defined elsewhere
    });

    equipmentSprites.forEach((sprite) => {
        avatarSprites.push(loadImage(sprite));
    });
}

// Function to generate a random avatar
function generateRandomAvatar() {
    const randomCharacter = Math.floor(Math.random() * (avatarSprites.length / 2)); // Assuming half are characters
    const randomEquipment = Math.floor(Math.random() * equipmentSprites.length);
    return {
        character: avatarSprites[randomCharacter],
        equipment: avatarSprites[randomCharacter + (avatarSprites.length / 2)]
    };
}

// Call loadSprites on startup
loadSprites();

export { generateRandomAvatar };
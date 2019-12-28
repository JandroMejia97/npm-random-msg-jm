const messages = [
    "Carlos",
    "Marta",
    "Melisa",
    "Anabel",
    "Roberto",
    "Elías",
    "Jaíme",
    "Pablo",
    "Petronila"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message)
};

module.exports = { randomMsg }
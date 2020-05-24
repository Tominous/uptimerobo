const axios = require("axios");

const uptimerobo = async () => {
    setInterval(() => {
        /* Aurora Boat */
        axios.get("https://auroradiscordbot.glitch.me/ping").then(() => console.log("Pong at " + Date.now()));
    }, 60 * 1000);
};

uptimerobo();

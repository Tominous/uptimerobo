const axios = require("axios");

const uptimerobo = async () => {
    setInterval(() => {
        /* Aurora Boat */
        axios.get("https://auroradiscordbot.ga").then(() => console.log("Pong at " + Date.now()));
    }, 60 * 1000);
};

uptimerobo();
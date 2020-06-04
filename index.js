const axios = require("axios");

const urls = [
    "https://aurora-discord.glitch.me/ping",
    "http://ecobot-inex.glitch.me",
    "http://pikabot-discord.glitch.me",
    "http://giveawayboat-discord.glitch.me",
    "http://snowboats.glitch.me"
];

const uptimerobo = async () => {
    setInterval(() => {
        urls.forEach(url => {
            axios.get(url).then(() => console.log("Pong at " + Date.now())).catch(() => {});
        });
    }, 60 * 1000);
};

uptimerobo();

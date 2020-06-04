const axios = require("axios");
const urls = require("./url.js");

const uptimerobo = async () => {
    setInterval(() => {
        urls.forEach(url => {
            axios.get(url).then(() => console.log("Pong at " + Date.now())).catch(() => {});
        });
    }, 60 * 1000);
};

uptimerobo();

const handler = require('serve-handler');
const http = require('http');

const games = {
    hotScatterDeluxe: 'hotScatterDeluxe',
    fierySevens: 'fiery7s'
}

const layoutTypes = {
    desktop: 'desktop',
    mobile: 'mobile'
}

const gameEntrys = {
    game: 'game',
    test: 'gametest',
    history: 'history'
}

const gameName = games.fierySevens;
const gameType = layoutTypes.desktop;
const gameHash = 'd21e7ea2536af3588706c27b4baec371';
const gameEntry = gameEntrys.game;

const server = http.createServer((request, response) => {
    return handler(request, response, {
        public: `game`,
        cleanUrls: false
    });
});

const port = 8080;
server.listen(port, () => {
    // console.log(`Running at http://localhost:${port}/${gameEntry}.html?game=${gameName}&hash=${gameHash}&type=${gameType}`);
    console.log(`Running at http://localhost:${port}/index.html`);
});
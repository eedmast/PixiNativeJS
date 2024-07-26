// Asynchronous IIFE pixi V8
let game = {}

const app = new PIXI.Application();
globalThis.__PIXI_APP__ = app;

game.resources = new ResourceManager().init();
game.resources.onAssetsLoaded = createMainStage;

game.resources.loadAssets();

async function createMainStage() {

    await app.init({
        background: '#1099bb',
        resizeTo: window
    });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);

    const bunnyTexture = game.resources.getTexture('bunny');
    const bunnySprite = new PIXI.Sprite(bunnyTexture);
    bunnySprite.anchor.set(0.5);
    bunnySprite.x = app.screen.width * 0.5;
    bunnySprite.y = app.screen.height * 0.5;
    bunnySprite.interactive = true;

    app.stage.addChild(bunny);
    const bunny2 = Bunny();
    app.stage.addChild(bunny2);
}
let game = {}

let app = new PIXI.Application({
    width: 1024,
    height: 768,
    backgroundColor: 0x1099bb
});
globalThis.__PIXI_APP__ = app;
app.renderer.autoresize = true;

const ROOT_CONTAINER = new PIXI.Container();

this.onresize = function( event ){
    // app.screen.width = event.target.innerWidth;
    // app.screen.height = event.target.innerHeight;

    // app.view.width = event.target.innerWidth;
    // app.view.height = event.target.innerHeight;

    // app.renderer.width = event.target.innerWidth;
    // app.renderer.height = event.target.innerHeight;

    // repositionRootContainer();
}

game.resources = new ResourceManagerV4().init();
game.resources.onAssetsLoaded = createMainStageV4;
game.resources.loadAssets();


function createMainStageV4() {
    console.warn(`Creating v4 view.`);
    document.body.appendChild(app.view);

    app.stage.name = 'APP.stage'
    app.stage.addChild(ROOT_CONTAINER);
    repositionRootContainer();
    createDudes();
}

function createDudes() {
    const dist = 150;
    let dudePositions = [
        new PIXI.Point(-dist, 0),
        new PIXI.Point(0, -dist),
        new PIXI.Point(dist, 0),
        new PIXI.Point(0, dist),
    ]

    for(let i = 0; i < dudePositions.length; i++) {
        let dude = new Dude();
        dude.position.x = dudePositions[i].x;
        dude.position.y = dudePositions[i].y;
        ROOT_CONTAINER.addChild(dude);
    }
}

function adjustRendererSize() {
    let xRatio = this.innerWidth / app.renderer.width;
    let yRatio = this.innerHeight / app.renderer.height;
    let scale = Math.min(Math.min(xRatio, yRatio), 1);

    // ROOT_CONTAINER.scale.set(scale);
    // app.screen.scale.set(scale);
}

function repositionRootContainer() {
    // ROOT_CONTAINER.x = app.screen.width / 2;
    // ROOT_CONTAINER.y = app.screen.height / 2;
    // ROOT_CONTAINER.x = app.view.width / 2;
    // ROOT_CONTAINER.y = app.view.height / 2;
    ROOT_CONTAINER.x = app.renderer.width / 2;
    ROOT_CONTAINER.y = app.renderer.height / 2;
}
function Bunny() {
    PIXI.Container.call(this);

    this.rotationSpeed = 1;
    this.interactive = true;
    this.interactiveChildren = true;

    this.on('click', (event) => {
        console.warn(`You clicked bunny object container.`);
    });

    this.click = (event) => {
        console.warn(`You clicked bunny object container.`);
        // rotateComponent(bunny);
    }

    const bunnyTexture = game.resources.getTexture('bunny');
    const bunnySprite = new PIXI.Sprite(bunnyTexture);

    bunnySprite.anchor.set(0.5);
    bunnySprite.scale.set(2.5);
    bunnySprite.interactive = true;
    bunnySprite.on('click', () => {
        console.warn(`You clicked bunny object sprite.`);
    });


        this.addChild(bunnySprite);
    // bunny.interactive = true;
}

Bunny.prototype = Object.create(PIXI.Container.prototype);
Bunny.prototype.constructor = Bunny;

Bunny.prototype.SayMyName = function() {
    console.warn(`Bunny name is '${this.name}'`);
}
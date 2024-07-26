function Dude() {
    PIXI.Container.call(this);

    this.rotationSpeed = 1;
    this.interactive = true;
    this.interactiveChildren = true;
    this.switchTimeline = null;

    this.dudeNum = 0;
    this.isBlocked = false;

    const textures = [
        game.resources.getTexture('flowerTop'),
        game.resources.getTexture('eggHead'),
        game.resources.getTexture('helmlok'),
        game.resources.getTexture('skully')
    ]

    textures.forEach( texture => {
        this.addDude(texture);
    })



    this.switchDude();

    this.on('pointertap', function() {
        if(this.switchTimeline) {
            this.switchTimeline.paused(!this.switchTimeline.paused());
        }
    });
}

Dude.prototype = Object.create(PIXI.Container.prototype);
Dude.prototype.constructor = Dude;

Dude.prototype.switchDude = function() {
    const duration = 0.5;
    let spr1 = this.children[this.dudeNum];
    spr1.alpha = 1;
    this.dudeNum = this.dudeNum + 1 < this.children.length ? this.dudeNum + 1 : 0;
    let spr2 = this.children[this.dudeNum];
    spr2.alpha = 0;

    const switchEase = 'none';
    // const switchEase = 'slow(0.1,0.6,false)';

    this.switchTimeline = gsap.timeline({
        paused: false,
        onComplete: () => {
            this.rotation = 0;
            this.switchDude();
            // this.isBlocked = false;
        }
    });

    this.switchTimeline.to(spr1, {alpha: 0, duration: duration, ease: switchEase}, 0);
    this.switchTimeline.to(spr2, {alpha: 1, duration: duration, ease: switchEase}, 0);
    this.switchTimeline.to(this, {rotation: Math.PI * 2, duration: duration, ease: switchEase}, 0);
    // this.switchTimeline.play();
}



Dude.prototype.addDude = function(texture) {
    let spr = new PIXI.Sprite(texture);
    spr.anchor.set(0.5);
    spr.interactive = true;
    spr.buttonMode = true;
    spr.alpha = this.children.length ? 0 : 1
    this.addChild(spr);
}
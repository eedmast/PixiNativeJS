function ResourceManagerV4() {

    //public vars
    this.loaderResources = null;
    this.assetsResources = null;

    let resUrls = [
        './assets/bunny.png',
        './assets/eggHead.png',
        './assets/flowerTop.png',
        './assets/helmlok.png',
        './assets/skully.png'
    ]

    let resList = [
        {alias: 'bunny', src: './assets/bunny.png'}
    ]

    let resources;
    let self = this;

    this.init = function()
    {
        this.canStart = true;
        this.failedToLoadPixiResources = false;
        return this;
    };

    this.loadAssets = async function() {
        this.loader = PIXI.loader;
        this.loader.add(resUrls).load(this.onAssetsLoaded)
    }

    this.onAssetsLoaded = function() {
    }

    this.getTexture = function(textureId) {
        return this.loader.resources[`./assets/${textureId}.png`].texture;
    }
}
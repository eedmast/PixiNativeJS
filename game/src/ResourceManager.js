function ResourceManager() {

    //public vars
    this.loaderResources = null;
    this.assetsResources = null;

    let resUrls = [
        './assets/bunny.png'
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
        this.loader = new PIXI.Loader();
        this.assetsResources = await PIXI.Assets.load(resList);
        this.onAssetsLoaded();
    }

    this.onAssetsLoaded = function() {
    }

    this.getTexture = function(textureId) {
        return this.loader.resources[`./assets/${textureId}.png`];
    }
}
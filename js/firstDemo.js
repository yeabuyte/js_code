let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache;

//create a pixi app
let  app = new Application({width:900,height:600});

//加载图片
    loader.add("images/treasureHunter.json")
    .load(setup);

//This `setup` function will run when the image has loaded
//回调
function setup() {

    let texture = TextureCache["blob.png"],
        sprite = new Sprite(texture),
        sprite1 = new Sprite(texture);
    sprite1.position.set(199,20);
    app.stage.addChild(sprite);
    app.stage.addChild(sprite1);
}
document.body.appendChild(app.view);







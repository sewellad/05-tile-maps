scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(52, 87)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
characterAnimations.loopFrames(
mySprite,
[img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d 4 e f e . 
    . f e f f b b b e d d 4 e . 
    . e 4 f b 3 3 3 e d d e . . 
    . . . f 6 6 6 6 f e e . . . 
    . . . f f f f f f f . . . . 
    . . . f f f . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . e f e 4 d d d d d f f . . 
    . e 4 d d e b b b f f e f . 
    . . e d d e 3 3 b e f 4 e . 
    . . . e e f 6 6 6 6 f . . . 
    . . . . f f f f f f f . . . 
    . . . . . . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c c c c c c c f . 
    . f f c c c c c c c c f f . 
    . f f f c c c c c c f f f . 
    . f f f f f f f f f f f f . 
    . . f f f f f f f f f f . . 
    . . e f f f f f f f f e . . 
    . e 4 f f f f f f f f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c c c c c c f f . 
    . f f c c c c c c c c f f . 
    . f f c c c c c c f f f f . 
    . f f f f f f f f f f f f . 
    . . f f f f f f f f f f . . 
    . . e f f f f f f f f e . . 
    . . e f f f f f f f f 4 e . 
    . . 4 f 3 3 3 3 3 e d d 4 . 
    . . e f f f f f f e e 4 . . 
    . . . f f f . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f f c c c c c c c c c f . 
    . f f c c c c c c c c f f . 
    . f f f f c c c c c c f f . 
    . f f f f f f f f f f f f . 
    . . f f f f f f f f f f . . 
    . . e f f f f f f f f e . . 
    . e 4 f f f f f f f f e . . 
    . 4 d d e 3 3 3 3 3 f 4 . . 
    . . 4 e e f f f f f f e . . 
    . . . . . . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f e 4 4 c c c f f f f . 
    . f f e 4 4 f b f 4 4 f f . 
    . . f f d d f 1 4 d 4 f . . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e e f . . . 
    . . . f 3 3 3 e d d 4 . . . 
    . . . f 3 3 3 e d d e . . . 
    . . . f 6 6 6 f e e f . . . 
    . . . . f f f f f f . . . . 
    . . . . . . f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f c 4 4 c c c f f f f . 
    . f f f 4 4 f b f 4 4 f f . 
    . . f f d d f 1 4 d 4 f . . 
    . . . f d d d e e f f f . . 
    . . . f e 4 e d d 4 f . . . 
    . . . f 3 3 e d d e f . . . 
    . . f f 6 6 f e e f f f . . 
    . . f f f f f f f f f f . . 
    . . . f f f . . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f c 4 4 c c c f f f f . 
    . f f f 4 4 f b f 4 4 f f . 
    . . f c d d f 1 4 d 4 f f . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e d d 4 . . 
    . . . f 3 3 3 3 e d d e . . 
    . . f f 6 6 6 6 f e e f . . 
    . . f f f f f f f f f f . . 
    . . . f f f . . . f f . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 c f f . 
    . f f 4 4 f b f 4 4 f f f . 
    . f f 4 d 4 1 f d d c f . . 
    . . f f f 4 d d d d f . . . 
    . . 4 d d e 4 4 4 e f . . . 
    . . e d d e 3 3 3 3 f . . . 
    . . f e e f 6 6 6 6 f f . . 
    . . f f f f f f f f f f . . 
    . . . f f . . . f f f . . . 
    `,img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 c f f . 
    . f f 4 4 f b f 4 4 f f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f e e d d d f . . . 
    . . . f 4 d d e 4 e f . . . 
    . . . f e d d e 3 3 f . . . 
    . . f f f e e f 6 6 f f . . 
    . . f f f f f f f f f f . . 
    . . . f f . . . f f f . . . 
    `,img`
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 e f f . 
    . f f 4 4 f b f 4 4 e f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f 4 d d d d f . . . 
    . . . f e e 4 4 4 e f . . . 
    . . . 4 d d e 3 3 3 f . . . 
    . . . e d d e 3 3 3 f . . . 
    . . . f e e f 6 6 6 f . . . 
    . . . . f f f f f f . . . . 
    . . . . . f f f . . . . . . 
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)

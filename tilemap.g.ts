// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000001020202020202020202020202030000040a0a0a0a0a0f060a0a0a0a0a050000040a0a0d0a0a0f060a0a100a0a050000040a0a040a0a0f060a0a050a0a050000040a0a040a0a0f060a0a050a0a050000040a0a040a0a0f060a0a050a0a050000040a0a040a0a0f060a0a051111050000040e0e0c0a0a0f060a0a0b0e0e050000060a0a0a0a0a05060a0a0a0a0a050000060a0a0a0a0a050709090d0a0a050000060a0a100909080a0a0a060a0a050000060a0a050a0a0a0a0a0a060a0a050000060a0a0b0e0e0e0e0e0e0c0a0a050000060a0a0a0a0a0a0a0a0a0a0a0a05000007090909090909090909090909080000000000000000000000000000000000`, img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . 2 2 . . . . . 2 . 
. 2 . . 2 . . 2 2 . . 2 . . 2 . 
. 2 . . 2 . . 2 2 . . 2 . . 2 . 
. 2 . . 2 . . 2 2 . . 2 . . 2 . 
. 2 . . 2 . . 2 2 . . 2 . . 2 . 
. 2 . . 2 . . 2 2 . . 2 . . 2 . 
. 2 2 2 2 . . 2 2 . . 2 2 2 2 . 
. 2 . . . . . 2 2 . . . . . 2 . 
. 2 . . . . . 2 2 2 2 2 . . 2 . 
. 2 . . 2 2 2 2 . . . 2 . . 2 . 
. 2 . . 2 . . . . . . 2 . . 2 . 
. 2 . . 2 2 2 2 2 2 2 2 . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight4,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.floorLight2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

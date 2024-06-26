let mySprite = sprites.create(assets.image`SparoCollector`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    ...cc...................
    ..c36cccc...............
    ..c633336c..............
    .c33333cc6c.cc..........
    c33333c55c6c55b.........
    c33333ff5c6c5ff.........
    cc3336ff5c6c5ff.........
    cc6666c553c355b.........
    c333333c55355b..........
    c3333ccb55555cc.........
    .c33c55b4555455c........
    ..bbc5bb4444b45b........
    .b54c4555b4b554c........
    .c5c4c555c4c555c........
    .c5c4c5555c5555c........
    .ccc..ccccccccc.........
    `,img`
    ........................
    ...cc...................
    ..c36cccc...............
    ..c633336c..............
    .c33333366c.............
    c33333cc66cccb..........
    c3333c55c6c55b..........
    cc333ff5c6c5ff..........
    cc666ff5ccc5ff..........
    c33333c55355b...........
    c333ccb55555cc..........
    .c3c5cccccccc5c.........
    ..bc55555c5555c.........
    .b5c4555c4c555c.........
    .c54c555c4c554c.........
    .ccccccc444ccc..........
    `,img`
    ...cc...................
    ..c36cccc...............
    ..c633336c..............
    .c333ccccccc............
    c333c555c555c...........
    c33c555c4c555c..........
    c33c555c4c555c..........
    cc3c555ccc55cc..........
    cc6c55c55c5c55c.........
    c33c4cff5ccc5ff.........
    c33c5cff5ccc5ff.........
    .ccc54c553c355c.........
    .c54c44c55555c..........
    .c5cccc45555cc..........
    .c5cccc4555cc...........
    .ccc..cccccc............
    `,img`
    ..cc....................
    .c36cccccccc............
    cc63c555c555c...........
    c33c555c4c555c..........
    c33c555c4c555c..........
    c33c555c4c555c..........
    cc3c555ccc55cc..........
    cc6c55ff5ccc5ff.........
    c33c4cff5ccc5ff.........
    c33c5cc55ccc55c.........
    c33c5cc55ccc55c.........
    .ccc54c553c355c.........
    .c54c44c55555c..........
    .c5cccc45555cc..........
    .c5cccc4555cc...........
    .ccc..cccccc............
    `,img`
    ...cc...................
    ..c36cccc...............
    ..c633336c..............
    .c33333366c.............
    c3333336666c............
    c333336cc66cccb.........
    cc3336c55c6c55b.........
    cc6666ff5c6c5ff.........
    c33333ff5cc35ff.........
    c33333c555355b..........
    .c33333c45554c..........
    ..bbccccb44bbbbbb.......
    .b54ccc55cbb555b5c......
    .c5ccccc5545555c5c......
    .c5c...cc5455555c5c.....
    .ccc....ccccccccccc.....
    `],
200,
true
)
let list = [
tilemap`level4`,
tilemap`level4`,
0,
0
]

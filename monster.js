function Monster(src, canvas) {
  // Base
  var monster = this;

  // Global Attributes
  monster.canvas = canvas;
  monster.context = monster.canvas.getContext('2d');

  // Specifications
  monster.x = 115;
  monster.y = 115;
  monster.w = 115;
  monster.h = 115;
  monster.vy = 0;
  monster.g = 0.10;
  monster.src = src;
  monster.img = null;
  monster.frame = 0;

  // Create Monster Tile Image
  monster.create();
}


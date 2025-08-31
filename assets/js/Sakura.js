(function() {
  var stop, staticx;
  stop = false;
  staticx = document.createElement('canvas');
  staticx.setAttribute('id', 'sakura');
  staticx.style.position = 'fixed';
  staticx.style.top = '0';
  staticx.style.left = '0';
  staticx.style.pointerEvents = 'none';
  staticx.style.zIndex = '9999';
  document.body.appendChild(staticx);

  var context = staticx.getContext('2d');
  var width = window.innerWidth;
  var height = window.innerHeight;
  staticx.width = width;
  staticx.height = height;

  var flakes = [];

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function Flake() {
    this.x = random(0, width);
    this.y = random(-height, 0);
    this.size = random(8, 15);
    this.speed = random(1, 3);
    this.wind = random(-1, 1);
    this.opacity = random(0.5, 1);
  }

  Flake.prototype.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fillStyle = "rgba(255,182,193," + this.opacity + ")";
    context.fill();
  };

  Flake.prototype.update = function() {
    this.y += this.speed;
    this.x += this.wind;
    if (this.y > height) {
      this.y = -10;
      this.x = random(0, width);
    }
  };

  function snow() {
    context.clearRect(0, 0, width, height);
    if (flakes.length < 100) {
      flakes.push(new Flake());
    }
    for (var i = 0; i < flakes.length; i++) {
      flakes[i].update();
      flakes[i].draw();
    }
    requestAnimationFrame(snow);
  }

  snow();
})();

class Ball
{
    constructor(x, y, radius)
    {
      var options = {
                      'density':1,
                      'restitution':0.7
                    }
      this.body = Bodies.circle(x,y,radius)
      this.radius = radius;
      World.add(world, this.body)

    }
    
    display()
    {
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}
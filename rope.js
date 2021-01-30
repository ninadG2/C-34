class Rope
{
    constructor(body1, body2)
    {
      var options = {
                      bodyA:body1,
                      bodyB:body2,
                      stiffness:0.2,
                      length:300
                    }

        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }

    display()
    {
        var firstpos = this.rope.bodyA.position
        var secpos = this.rope.bodyB.position
        push()
        strokeWeight(10)
        line(firstpos.x, firstpos.y, secpos.x, secpos.y)
        pop();
        
    }
}


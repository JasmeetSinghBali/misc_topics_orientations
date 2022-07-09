interface Entity {
    attackDamage
    health
    name

    move()
    attack()
    takeDamage(amount)
}

class Character implements Entity{
    move(){
        //Do Something
    }

    attack(){
        //Do Something
    }

    takeDamage(amount){
        //Do Something
    }
}

class Turret implements Entity{
    move(){
        // ERROR: Cannot move
    }
}
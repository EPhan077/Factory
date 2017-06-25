class SetUp{
      constructor(_type, _life, _firePower){
            this.life = _life;
            this.power = _firePower;
            this.type = _type;
      }
}

export class Soldier extends SetUp {
      constructor(_type, _life, _firePower){
            super(_type, _life, _firePower);
      }
}
export class Tank extends SetUp {
      constructor(_type, _life, _firePower){
            super(_type, _life, _firePower);
      }
}

export class Jet extends SetUp {
      constructor(_type, _life, _firePower){
            super(_type, _life, _firePower);
      }
}
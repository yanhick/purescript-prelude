package data;

class HeytingAlgebraForeign {

    public static function boolConj (b1) {
      return function (b2) {
        return b1 && b2;
      };
    }

    public static function boolDisj (b1) {
      return function (b2) {
        return b1 || b2;
      };
    }

    public static function boolNot (b) {
      return !b;

    }
}


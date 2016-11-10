package data;

class SemiringForeign {
    public static function intAdd (x) {
      return function (y) {
        /* jshint bitwise: false */
        return x + y | 0;
      };
    };

    public static function intMul (x) {
      return function (y) {
        /* jshint bitwise: false */
        return x * y | 0;
      };
    };

    public static function numAdd (n1) {
      return function (n2) {
        return n1 + n2;
      };
    };

    public static function numMul (n1) {
      return function (n2) {
        return n1 * n2;
      };
    };
}


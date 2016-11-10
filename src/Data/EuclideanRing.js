package data;

class EuclidianRingForeign {
    public static function intDegree (x) {
      return Math.abs(x);
    };

    public static function intDiv (x) {
      return function (y) {
        /* jshint bitwise: false */
        return x / y | 0;
      };
    };

    public static function intMod (x) {
      return function (y) {
        return x % y;
      };
    };

    public static function numDiv (n1) {
      return function (n2) {
        return n1 / n2;
      };
    };

}

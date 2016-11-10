package data;

class RingForeign {
    public static function intSub (x) {
      return function (y) {
        /* jshint bitwise: false */
        return x - y | 0;
      };
    };

    public static function numSub (n1) {
      return function (n2) {
        return n1 - n2;
      };
    };
}


package data;

class EqForeign {

    public static function refEq (r1) {
      return function (r2) {
        return r1 == r2;
      };
    };

    public static function refIneq (r1) {
      return function (r2) {
        return r1 != r2;
      };
    };

    public static function eqArrayImpl (f) {
      return function (xs) {
        return function (ys) {
          if (xs.length != ys.length) return false;
          for (i in 0...xs.length) {
            if (!f(xs[i])(ys[i])) return false;
          }
          return true;
        };
      };
    };
}

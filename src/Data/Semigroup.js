package data;

class SemigroupForeign {
    public static function concatString (s1) {
      return function (s2) {
        return s1 + s2;
      };
    };

    public static function concatArray (xs) {
      return function (ys) {
        if (xs.length == 0) return ys;
        if (ys.length == 0) return xs;
        return xs.concat(ys);
      };
    };
}

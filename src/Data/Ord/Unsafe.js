package data.ord;

class UnsafeForeign {
    public static function unsafeCompareImpl (lt) {
      return function (eq) {
        return function (gt) {
          return function (x) {
            return function (y) {
              return x < y ? lt : x == y ? eq : gt;
            };
          };
        };
      };
    };
}



package data;

class BoundedForeign {
    public static function topInt () {
        return 2147483647;
    }

    public static function bottomInt () {
        return -2147483648;
    }

    public static function topChar () {
        return String.fromCharCode(65535);
    }

    public static function bottomChar () {
        return String.fromCharCode(0);
    }
}


module.exports = (function () {
    "use strict";

    var context = {console: console};
    require('nodeunit').utils.sandbox('src/objectHelper.js', context);
    var objectHelper = context.objectHelper;

    return {
        'reduce works with initial value': function (test) {
            var callNum = 0;
            var result = objectHelper.reduce({a: 1, b: 2, c: 17}, function (current, value, name) {
                if (callNum === 0) {
                    test.equal(current, -1);
                    test.equal(value, 1);
                    test.equal(name, 'a');
                }
                else if (callNum === 1) {
                    test.equal(current, 1);
                    test.equal(value, 2);
                    test.equal(name, 'b');
                }
                else {
                    test.equal(current, 2);
                    test.equal(value, 17);
                    test.equal(name, 'c');
                }
                callNum += 1;
                return Math.max(current, value);
            }, -1);
            test.equal(result, 17);
            test.done();
        }
    };
}());

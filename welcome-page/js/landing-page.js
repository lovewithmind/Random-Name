(function () {
    let animateHeader, init;

    animateHeader = function () {
        return $('.title-number-section .odometer').addClass('odometer-animating-up odometer-animating');
    };

    init = function () {
        return setTimeout(function () {
            return animateHeader();
        }, 500);
    };

    init();

}).call(this);

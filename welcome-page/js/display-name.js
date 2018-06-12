function setAndAnimate(body) {
    let p1 = document.getElementById("p1");
    p1.innerHTML = "";
    let odometer = $('.title-number-section .odometer');

    odometer.removeClass('odometer-animating-up odometer-animating');
    generateHtml(body, htmlCode => p1.innerHTML += htmlCode);
    setTimeout(() => odometer.addClass('odometer-animating-up odometer-animating'), 50);
}

function getName() {
    fetch("/name")
        .then(res => res.text())
        .then(setAndAnimate);
}

function generateHtml(name, target) {
    target = target || document.write;
    let count = 2;
    for (let i = 0; i < name.length; i++) {
        let char = "&nbsp";
        if (name.charAt(i) !== " ") {
            char = name.charAt(i).toUpperCase();
        }
        let tmp = "<span class=\"odometer-digit\"><span class=\"odometer-digit-spacer\">" + char + "</span><span\n" +
            "                            class=\"odometer-digit-inner\"><span class=\"odometer-ribbon\"><span\n" +
            "                            class=\"odometer-ribbon-inner\">\n" +
            "                                <span class=\"odometer-value odometer-first-value\">&nbsp;</span>\n" +
            randomSpanCreator(count % 26) +
            "                                <span class=\"odometer-value odometer-last-value\">" + char + "</span>\n" +
            "                            </span></span></span></span>";
        target(tmp);
        count++;
    }

}

function randomSpanCreator(random) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let template = "";
    for (let i = 0; i < random; i++) {
        template = template + "<span class=\"odometer-value\">" + possible.charAt(i) + "</span>\n"
    }
    return template;

}

module.exports = generateHtml;
module.exports = getName;
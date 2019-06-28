function olympic() {
    var count = 0;
    for (let i = 1896; i <= 2020; i += 4){
        count++;
        if (i === 1916) {
            continue;
        } else if (i === 1940) {
            continue;
        } else if (i === 1944) {
            continue;
        } else {
        console.log("第" + count + "回" + " " + i + "年開催");
        }
    }
}

function hiragana2Word() {
    const array = ["あ", "い", "う", "え", "お",
        "か", "き", "く", "け", "こ",
        "さ", "し", "す", "せ", "そ",
        "た", "ち", "つ", "て", "と",
        "な", "に", "ぬ", "ね", "の",
        "は", "ひ", "ふ", "へ", "ほ",
        "ま", "み", "む", "め", "も",
        "や", "ゆ", "よ",
        "ら", "り", "る", "れ", "ろ",
        "わ", "を", "ん"]
}
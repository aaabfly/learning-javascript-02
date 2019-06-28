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
    //3040-3093までのひらがなに対応するunicodeの番号をランダムにだす
    const random = Math.floor(Math.random() * (3093 - 3041) + 3041);
    var hiragana = String.fromCharCode(random);
    console.log(hiragana + hiragana);
}
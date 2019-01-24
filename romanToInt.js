const romanToInt = (s) => {
    let total = 0;

    const keys = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i + 1]) {
            let subWord = s[i] + s[i + 1];
            if (keys[subWord]) {
                total += keys[subWord];
                i += 1;
            } else {
                total += keys[s[i]];
            }
        } else {
            total += keys[s[i]];
        }

    }

    return total;

};

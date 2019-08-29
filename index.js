const kaomoji = [
    '(*^ω^)',
    '(◕‿◕✿)',
    '(◕ᴥ◕)',
    'ʕ•ᴥ•ʔ',
    'ʕ￫ᴥ￩ʔ',
    '(*^.^*)',
    'owo',
    'OwO',
    '(｡♥‿♥｡)',
    'uwu',
    'UwU',
    '(*￣з￣)',
    '>w<',
    '^w^',
    '(つ✧ω✧)つ',
    '(/ =ω=)/',
];

module.exports = (str) => {
    str = str.replace(/(?:l|r)/g, 'w');
    str = str.replace(/(?:L|R)/g, 'W');
    str = str.replace(/n([aeiou])/g, 'ny$1');
    str = str.replace(/N([aeiou])|N([AEIOU])/g, 'Ny$1');
    str = str.replace(/ove/g, 'uv');
    str = str.replace(
        /!+/g,
        ` ${kaomoji[Math.floor(Math.random() * kaomoji.length)]}`
    );

    return str;
};

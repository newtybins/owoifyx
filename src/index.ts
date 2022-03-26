const kaomoji = [
  "(*^ω^)",
  "(◕‿◕✿)",
  "(◕ᴥ◕)",
  "ʕ•ᴥ•ʔ",
  "ʕ￫ᴥ￩ʔ",
  "(*^.^*)",
  "owo",
  "OwO",
  "(｡♥‿♥｡)",
  "uwu",
  "UwU",
  "(*￣з￣)",
  ">w<",
  "^w^",
  "(つ✧ω✧)つ",
  "(/ =ω=)/",
];

const owoify = (input: string) =>
  input
    .replace(/(?:l|r)/g, "w")
    .replace(/(?:L|R)/g, "W")
    .replace(/n([aeiou])/g, "ny$1")
    .replace(/N([aeiou])|N([AEIOU])/g, "Ny$1")
    .replace(/ove/g, "uv")
    .replace(/nd(?= |$)/g, "ndo")
    .replace(/!+/g, " " + kaomoji[Math.floor(Math.random() * kaomoji.length)]);

export { owoify };
export default owoify;

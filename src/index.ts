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

const owoify = (input: string) => {
  input = input.replace(/(?:l|r)/g, "w");
  input = input.replace(/(?:L|R)/g, "W");
  input = input.replace(/n([aeiou])/g, "ny$1");
  input = input.replace(/N([aeiou])|N([AEIOU])/g, "Ny$1");
  input = input.replace(/ove/g, "uv");
  input = input.replace(/nd(?= |$)/g, "ndo");
  input = input.replace(
    /!+/g,
    ` ${kaomoji[Math.floor(Math.random() * kaomoji.length)]}`
  );

  return input;
};

export { owoify };
export default owoify;

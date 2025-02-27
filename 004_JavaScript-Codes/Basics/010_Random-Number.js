const generateRandom = () => {
  let Number = Math.floor(Math.random() * 6);
  Number += 1;
  console.log(Number);
};

for (let i = 0; i < 10; i++) {
  generateRandom();
}

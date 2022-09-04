let RandomKey = (length = 10) => {
  let chars = "1234567890abcdefghijklmnopqrstuvwxyz";
  let key = "";
  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }
  return key;
};

export default RandomKey;

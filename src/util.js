function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}
export function reduceString(str) {
  let n = str.length;
  let res = [];
  for (let i = 0; i < n; i++) {
    let count = 1;
    while (i < n - 1 && str[i] == str[i + 1]) {
      count++;
      i++;
    }
    res.push(str[i]);
    if (count >= 2) res.push(count);
  }
  return res;
}

export default function decode(str) {
  let res = "";
  if (str.length <= 1) return str;
  for (let i = 0; i < str.length; i++) {
    if (!i) res += str[i];
    else if (isLetter(str[i])) res += str[i];
    else {
      let num = parseInt(str[i]);
      if (num >= 1)
        while (num - 1) {
          res += str[i - 1];
          num--;
        }
    }
  }
  return res;
}

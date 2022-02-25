let number = 11;
let baseURL = "http://numbersapi.com";

// First
async function part1() {
  let res = await $.getJSON(`${baseURL}/${number}?json`);
  console.log(res);
}

// Second
const favNumbers = [9, 4, 12];
async function part2() {
  let res = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(res);
}
part2();

// Third;
async function part3() {
  let numFacts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${number}?json`))
  );
  numFacts.forEach((res) => {
    $("body").append(`<p>${res.text}</p>`);
  });
}
part3();

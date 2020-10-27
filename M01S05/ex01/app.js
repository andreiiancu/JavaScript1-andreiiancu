// let date = new Date();
// let hours = date.getHours(); //EX01/01
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// // let getMilliseconds = date.getMilliseconds();

// let message = `${hours}:${minutes}:${seconds}:${milliseconds}, am ajuns la Pixellab.`;

function getTime() {
  let date = new Date();
  let hours = date.getHours(); //EX01/01
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  // let getMilliseconds = date.getMilliseconds();

  // return `${hours}:${minutes}:${seconds}, am ajuns la Pixellab.`;
  console.log(`${hours}:${minutes}:${seconds}, am ajuns la Pixellab.`);
}
// console.log(
//   `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${
//     date.getMilliseconds
//   }`,
//   `Am ajuns la Pixellab`,
// );
// console.log(getTime);

setInterval(getTime, 1000);

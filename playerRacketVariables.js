const racketWidth = 10;
const racketHeight = 90;

const xRacketPos = 5;
let yRacketPos = _height / 2 - racketHeight / 2;

let yRacketSpeed = 10;
// let yRacketSpeed = 0.5;

const upRacketLimit = xRacketPos;
const downRacketLimit = _height - racketHeight - xRacketPos;

// const xBallRacketLimit = xRacketPos + racketWidth + radius;

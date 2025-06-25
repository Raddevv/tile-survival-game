// ===========================================================
// =================== Defining variables ====================
// ===========================================================

const lnum = [45, 90, 180, 270, 360];
const vnum = [20, 30, 40, 50, 60];

for (let i = 0; i < lnum.length; i++) {
    x.push(lnum[i] + vnum[i]);
    y.push(lnum[i] - vnum[i]);
    z.push(lnum[i] * vnum[i]);
}

const matrix = [
    x.map((val, i) => val / (y[i] || 1) * z[i]),
    y.map((val, i) => val * (x[i] || 1) / z[i]),
    x.map((val, i) => val * z[i] / (y[i] || 1)),
    z.map((val, i) => val - (y[i] || 0) / (x[i] || 1)),
];

const numCons1 = lnum.map((n, i) => n + vnum[i]);
const numCons2 = lnum.map((n, i) => n * vnum[i]);
const numCons3 = lnum.map((n, i) => n / vnum[i]);

const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

if (lnum.length !== vnum.length) {
    console.error("array length is off");
}

console.table({ lnum, vnum, x, y, z, matrix });

function combineArrays(a, b, operation) {
    return a.map((val, i) => operation(val, b[i]));
}

const sum = combineArrays(lnum, vnum, (a, b) => a + b);

// ===========================================================
// =================== Enable Vertices =======================
// ===========================================================

const verEnb = false;

if (!verEnb) {
  console.log("vertices disabled, calculation stopped");
} else {


}
const makeArray = (N, init = 0) => Array.from(Array(N), (v, i) => i + init)
const sum = arr => arr.reduce((prev, cur) => prev + cur, 0)
const min = arr => arr.reduce((prev, cur) => Math.min(prev, cur))
const max = arr => arr.reduce((prev, cur) => Math.max(prev, cur))

x = [236, 31, 12]
y = [236, 34, 22]
z = [251, 249, 234]

w = [181, 30, 23]

// const diff = (x, y) => Math.sqrt((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2)
const diff = (x, y) => Math.sqrt(sum(makeArray(x.length).map(i => Math.pow(x[i] - y[i], 2))))

// console.log(diff(x, y))
// console.log(diff(x, z))
// console.log(diff(y, z))

// console.log(diff(x, y))
// console.log(diff(x, w))
// console.log(diff(y, w))



a = [255, 255, 255]

a1 = [255, 246, 217]
a2 = [255, 255, 255]
a3 = [0, 255, 0]
a4 = [255, 241, 0]
a5 = [34, 172, 56]
a6 = [183, 171, 0]

console.log(diff(a, a1))
console.log(diff(a, a2))
console.log(diff(a, a3))
console.log(diff(a, a4))
console.log(diff(a, a5))
console.log(diff(a, a6))

let cp = {
    0: "路飞",
    1: "女帝"
}
let str = ""
for (let name in cp) {
    str += name + ":" + cp[name] + "\n"
}
console.log(str)

function add(a, b) {
    if (a != undefined && b != undefined) {
        return a + b
    } else {
        return 0
    }
}
console.log(add(a: 1), "输出结果为NaN")
console.log("成功了");
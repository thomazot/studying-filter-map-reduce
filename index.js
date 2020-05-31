const carrinho = [
    { nome: "Caneta", qtde: 10, preco: 7.99 },
    { nome: "Impressora", qtde: 0, preco: 649.5 },
    { nome: "Caderno", qtde: 4, preco: 27.1 },
    { nome: "Lapis", qtde: 3, preco: 5.82 },
    { nome: "Tesoura", qtde: 1, preco: 19.202 },
]

Array.prototype.f = function (fn) {
    const newArray = []
    this.forEach((item) => fn(item) && newArray.push(item))
    return newArray
}

Array.prototype.m = function (fn) {
    const newArray = []
    this.forEach((item) => newArray.push(fn(item)))
    return newArray
}

Array.prototype.r = function (fn, init) {
    let value = init
    this.forEach((item, index) => (value = fn(value, item, index, item)))
    return value
}

const filter = carrinho.f((item) => item.qtde > 0)
const map = carrinho.m((item) => ({ ...item, total: item.qtde + item.preco }))
const reduce = carrinho.r((prev, curr, index, array) => curr.preco + prev, 0)

console.log(filter)
console.log(map)
console.log(reduce)

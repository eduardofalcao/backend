const soma = (req, res) => {
    console.log("soma")
    const {a,b} = req.params
    const soma = parseInt(a) + parseInt(b)
    console.log(soma)

    res.send(`soma: ${soma}`) 
}

const sub = (req, res) => {
    console.log("sub")
    const {a,b} = req.params
    const sub = parseInt(a) - parseInt(b)
    res.send(`sub: ${sub}`)
}

module.exports = {
    soma,
    sub
}

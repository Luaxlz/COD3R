// O this em uma função arrow é fixo, ou seja, é baseado no contexto em que a função foi escrita e não é influenciada pelo local onde é chamada.

function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new pessoa
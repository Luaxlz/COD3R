function Pessoa() {
    const self = this // armazena o this em uma constante no momento em que você quer referenciar.
    this.idade = 0
    setInterval(function() {
        self.idade++ // Referencia o THIS armazenado em outro ponto.
        console.log(self.idade)
    }, 500);
}

new Pessoa
function Pessoa() {
    const self = this
    this.idade = 0
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 500);
}

new Pessoa
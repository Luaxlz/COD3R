function comparaTamanhoSapatos(sapatoIsabela, sapatoLuisa) {
    if (sapatoIsabela > sapatoLuisa) {
        console.log("Isabela calça mais.");
    }else if(sapatoIsabela < sapatoLuisa) {
        console.log("Luisa calça mais.");
    }else if(sapatoIsabela === sapatoLuisa) {
        console.log("Isabela e Luisa calçam o mesmo tamanho de sapato");  
    }
}

comparaTamanhoSapatos(45, 45)
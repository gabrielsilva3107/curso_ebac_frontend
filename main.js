class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    info() {
        return `${this.ano} ${this.marca} ${this.modelo}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroDePortas) {
        super(marca, modelo, ano);
        this.numeroDePortas = numeroDePortas;
    }

    info() {
        return `${super.info()} com ${this.numeroDePortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, tipoDeGuidao) {
        super(marca, modelo, ano);
        this.tipoDeGuidao = tipoDeGuidao;
    }

    info() {
        return `${super.info()} com guidão ${this.tipoDeGuidao}`;
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2020, 4);
const carro2 = new Carro("Honda", "Civic", 2018, 2);
const moto1 = new Moto("Yamaha", "MT-07", 2021, "esportivo");

console.log(carro1.info());
console.log(carro2.info());
console.log(moto1.info());
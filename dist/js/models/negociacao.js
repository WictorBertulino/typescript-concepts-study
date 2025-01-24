export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    // programação defensiva - O conceito diz aonde não 
    // devo autorizar meu atributo do construtor em ser alterado.
    // dessa forma crio uma cópia do meu atributo da classe e busco o valor dele retornando a cópia.
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}

export class Negociacao {

    constructor(
        private  _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number
    ){}


    get volume(): number {
        return this.valor * this.quantidade;
    }
    // programação defensiva - O conceito diz aonde não 
    // devo autorizar meu atributo do construtor em ser alterado.
    // dessa forma crio uma cópia do meu atributo da classe e busco o valor dele retornando a cópia.
    get data() : Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}
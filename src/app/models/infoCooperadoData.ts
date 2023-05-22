
export class InfoCooperadoData {
    cpf: string;
    nome: string;
    situacaoCpf: string;
    numeroContaAplicacao: string;
    numeroContaCorrente: string;

    constructor(data: InfoCooperadoData) {
        if (!data) {
            this.cpf = '';
            this.nome = '';
            this.situacaoCpf = '';
            this.numeroContaAplicacao = '';
            this.numeroContaCorrente = '';
            return;
        }

        this.cpf = data.cpf;
        this.nome = data.nome;
        this.situacaoCpf = data.situacaoCpf;
        this.numeroContaAplicacao = data.numeroContaAplicacao;
        this.numeroContaCorrente = data.numeroContaCorrente;

    }
}

// Exercício 1: Criação de Classe Simples
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.nome);  
console.log(pessoa1.idade); 

// Exercício 2: Modificadores de Acesso
class PessoaPrivada {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }
}

// Exercício 3: Método de Atualização
class PessoaComSetters {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.setIdade(idade);
    }

    setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    setIdade(novaIdade: number): void {
        if (novaIdade >= 0) {
            this.idade = novaIdade;
        } else {
            console.error("Idade não pode ser negativa");
        }
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }
}

// Exercício 5: Atributos Somente Leitura
class Produto {
    readonly nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.setPreco(preco);
    }

    // Exercício 6: Validação no Setter
    setPreco(valor: number): void {
        if (valor >= 0) {
            this.preco = valor;
        } else {
            console.error("Preço não pode ser negativo");
            this.preco = 0;
        }
    }

    // Exercício 7: Método Privado
    private calcularDesconto(): number {
        return this.preco * 0.9;  // 10% de desconto
    }

    getPrecoComDesconto(): number {
        return this.calcularDesconto();
    }

    // Exercício 8: Método para Exibir Informações
    exibirInformacoes(): string {
        return `Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`;
    }
}

// Exercício 9: Classe com Lista de Objetos
class Carrinho {
    private produtos: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    calcularTotal(): number {
        return this.produtos.reduce((total, produto) => {
            const precoComDesconto = produto.getPrecoComDesconto();
            return total + precoComDesconto;
        }, 0);
    }
}

// Demonstração dos exercícios
const pessoaExemplo = new PessoaComSetters("Maria", 25);
pessoaExemplo.setIdade(26);

const produto1 = new Produto("Notebook", 3000);
const produto2 = new Produto("Mouse", 100);

const carrinho = new Carrinho();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

console.log(produto1.exibirInformacoes());
console.log("Total do carrinho: R$", carrinho.calcularTotal());
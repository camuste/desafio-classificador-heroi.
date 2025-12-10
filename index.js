/**
 * Desafio: Escrevendo as Classes de um Jogo
 * Author: Seu Nome (Engenheiro de Software)
 * Stack: JavaScript (ES6+) & JSON
 */

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Dicionário de Estratégia (Object Lookup)
        // Elimina a necessidade de múltiplos if/else ou switch-case
        const ataques = {
            "mago": "magia",
            "guerreiro": "espada",
            "monge": "artes marciais",
            "ninja": "shuriken"
        };

        // Define o ataque ou um padrão caso o tipo não exista
        const ataque = ataques[this.tipo] || "um ataque desconhecido";

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// ---------------------------------------------------------
// Simulação de Dados Externos (JSON)
// Imagine que isso veio de um Banco de Dados ou API
// ---------------------------------------------------------
const jsonEntrada = `[
    {"nome": "Gandalf", "idade": 1000, "tipo": "mago"},
    {"nome": "Aragorn", "idade": 87, "tipo": "guerreiro"},
    {"nome": "Bruce Lee", "idade": 32, "tipo": "monge"},
    {"nome": "Hanzo", "idade": 25, "tipo": "ninja"}
]`;

// 1. Parse do JSON (Transforma string em Objeto JS)
const heroisData = JSON.parse(jsonEntrada);

// 2. Processamento (Instanciação e Execução)
// Usamos .forEach para um código mais limpo que o 'for' tradicional
heroisData.forEach(data => {
    const heroi = new Heroi(data.nome, data.idade, data.tipo);
    heroi.atacar();
});
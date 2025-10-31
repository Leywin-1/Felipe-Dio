# 1️⃣ Desafio: Classificador de Nível de Herói

Este projeto faz parte de um desafio de código focado em praticar conceitos fundamentais de programação.

## 🎯 Objetivo

O desafio consiste em criar um script que armazena duas informações principais:
1.  O nome de um herói.
2.  A quantidade de experiência (XP) desse herói.

Com base na quantidade de XP, o script deve utilizar uma estrutura de decisão para classificar o herói em um dos níveis listados abaixo e, ao final, exibir uma mensagem formatada.

---

## 🛠️ Conceitos Utilizados

Para a resolução deste desafio, é esperado o uso dos seguintes conceitos:

-   **Variáveis:** Para armazenar o nome e o XP do herói.
-   **Operadores:** Para realizar as comparações de XP.
-   **Laços de Repetição:** Embora o objetivo principal possa ser resolvido sem loops, eles podem ser usados para testar múltiplos heróis ou em lógicas mais complexas.
-   **Estruturas de Decisão:** Essencial para classificar o herói (ex: `if/else if/else` ou `switch`).

---

## 📋 Regras de Classificação

A classificação do herói deve seguir estritamente a tabela abaixo:

| XP do Herói | Nível |
| :--- | :--- |
| Menor que 1.000 | Ferro |
| Entre 1.001 e 2.000 | Bronze |
| Entre 2.001 e 5.000 | Prata |
| Entre 5.001 e 7.000 | Ouro |
| Entre 7.001 e 8.000 | Platina |
| Entre 8.001 e 9.000 | Ascendente |
| Entre 9.001 e 10.000 | Imortal |
| Maior ou igual a 10.001 | Radiante |

---

## 🚀 Saída Esperada

Ao final da execução, o script deve exibir uma mensagem no seguinte formato:

> "O Herói de nome **{nome}** está no nível de **{nivel}**"

**Exemplos:**

* Se `nome = "Aragorn"` e `xp = 8500`:
    > "O Herói de nome **Aragorn** está no nível de **Ascendente**"
* Se `nome = "Link"` e `xp = 500`:
    > "O Herói de nome **Link** está no nível de **Ferro**"
* Se `nome = "Kratos"` e `xp = 15000`:
    > "O Herói de nome **Kratos** está no nível de **Radiante**"

---

## 🏃 Como Executar (Exemplo em JavaScript/Node.js)

1.  Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  Crie um arquivo (ex: `desafio.js`).
3.  Implemente o código para satisfazer o objetivo.
4.  No início do seu script, defina as variáveis:
    ```javascript
    let nome = "Seu Herói";
    let xp = 7500;
    let nivelHeroi = "";
    ```
5.  Execute o script no seu terminal:
    ```bash
    node desafio.js
    ```

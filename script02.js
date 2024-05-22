
function exercicio5() {
    alert("Escreva um algoritmo para ler um valor e escrever o seu antecessor")
    var numero = parseInt(prompt("Digite um número para saber seu antecessor"))
    var resultado = numero - 1
    alert(resultado)
}
function exercicio6() {
    alert("Escreva um algoritmo para ler as dimensões de um retângulo(base e altura), calcular e escrever a área do retângulo")
    var base = parseInt(prompt("Digite a base do retângulo"))
    var altura = parseInt(prompt("Digite a altura do retângulo"))
    var area = base * altura

    alert(area);
}
function exercicio7() {
    alert("Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.")
    let anos = parseInt(prompt("Digite quantos anos você tem: "))
    let meses = parseInt(prompt("Digite quantos meses você tem: "))
    let dias = parseInt(prompt("Digite quantos dias você tem: "))
    idade = anos * 365 + meses * 30 + dias
    alert("A sua idade expressa em dias é: " + idade)
}
function exercicio8() {
    alert("Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos  brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.")
    let total = parseInt(prompt("Digite o total de eleitores de um município: "))
    let brancos = parseInt(prompt("Digite o total de votos em branco: "))
    let nulos = parseInt(prompt("Digite o total de votos nulos: "))
    let validos = parseInt(prompt("Digite o total de votos válidos: "))

    percentbrancos = (brancos * 100) / total
    percentnulos = (nulos * 100) / total
    percentvalidos = (validos * 100) / total

    alert("Os valores em porcentagem são:\n%" + percentbrancos + " Votos em branco;\n%" + percentnulos + " Votos nulos;\n%" + percentvalidos + " Votos válidos.")
}

function exercicio9() {
    alert("Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.")
    let salario = parseFloat(prompt("Digite seu salário mensal: "))
    let reajuste = parseFloat(prompt("Digite o percentual de reajuste: "))

    salarionovo = salario + (salario * (reajuste / 100))
    alert("O valor do seu novo salário será: R$" + salarionovo.toFixed(2))
}


function exercicio10() { 
    alert("O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do  distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor  seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. ")
    let custo = parseFloat(prompt("Digite o valor de fábrica do carro: "))
custofinal = custo+(custo*0.28)+(custo*0.45)

alert("O valor do carro para o consumidor será de: R$"+custofinal.toFixed(2))

}
function exercicio11() {
    alert("Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,   mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele  efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas   vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do  vendedor. ")
 salario = parseFloat(prompt("Digite seu salário fixo: "))
valorvenda = parseFloat(prompt("Digite o valor total de suas vendas: "))
carrosvendido = parseInt(prompt("Digite a quantidade de carros vendidos: "))
valorcar = parseFloat(prompt("Digite o valor que você recebe por carro vendido: "))

salariofinal = (carrosvendido*valorcar)+(valorvenda*0.05)+salario
alert("O salário total do funcionário será de R$"+salariofinal.toFixed(2)) 

}
function exercicio12() {
    alert("Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor  correspondente em graus Celsius")
    var fahr = parseFloat(prompt("Digite a temperatura em Fahrenheit:"))
celsius = ((fahr-32)/9)*5
alert(`O valor em graus Celsius é de ${celsius}°C.`) 
}


function exercicio13() {
    alert("Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.")
    var nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"))
var nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"))
var nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"))
media = ((nota1*2)+(nota2*3)+(nota3*5))/10
alert(`A média final do aluno é de ${media}.`)
 }


function exercicio14() {
    alert("Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! ")
    var valor = parseFloat(prompt("Digite um valor qualquer:"))
if (valor > 10) {
    alert(`O valor ${valor} é maior que 10!`)
} else {
    alert(`O valor ${valor} não é maior que 10!`)
} }

function exercicio15() {
    alert("Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).")
     var valor = parseFloat(prompt("Digite um valor qualquer:"))
if (valor < 0) {
    alert(`O valor ${valor} é negativo.`)
} else {
    alert(`O valor ${valor} é positivo.`)
}}

function exercicio16() {
    alert("As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e  escreva o custo total da compra. ")
    var macas = parseInt(prompt("Digite a quantidade de maçãs que foram compradas:"))
if (macas<12) {
    valor = macas*1.30
} else {
    valor = macas
}
alert(`O valor total das maçãs compradas é de R$${valor}.`) 
}

function exercicio17() { 
    alert("Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. ")
    var nota1 = parseFloat(prompt("Digite a nota da primeira avaliação do aluno:"))
var nota2 = parseFloat(prompt("Digite a nota da segunda avaliação do aluno:"))
media = (nota1+nota2)/2
if (media<6) {
    alert(`O aluno foi reprovado com a média ${media}. :c`)
} else {
    alert(`O aluno foi aprovado com a média ${media}. c:`)
}}


function exercicio18() { 
    alert("Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela  poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).")
    var anoatual = parseInt(prompt("Digite o ano atual:"))
var anonasc = parseInt(prompt("Digite o ano em que você nasceu:"))
idade = anoatual-anonasc
if (idade<16){
    alert(`Você não podera votar esse ano.`)
} else {
    if(idade<18){
        alert(`O voto é opcional.`)
    } else {
        alert(`Seu voto é obrigatório.`)
    }
}}


function exercicio19() {
    alert(" Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.")
    var valor1 = parseFloat(prompt("Digite o primeiro valor:"))
var valor2 = parseFloat(prompt("Digite o segundo valor:"))
if (valor1>valor2){
    alert(`O maior valor entre os dois é o ${valor1}`)
} else {
    alert(`O maior valor entre os dois é o ${valor2}`)
} }


function exercicio20() { 
    alert("Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. ")
    var valor1 = parseFloat(prompt("Digite o primeiro valor:"))
var valor2 = parseFloat(prompt("Digite o segundo valor:"))
if (valor1>valor2){
    alert(`Os valores em ordem crescente são: ${valor2}, ${valor1}.`)
} else {
    alert(`Os valores em ordem crescente são: ${valor1}, ${valor2}.`)
}}


function exercicio21() {
    alert("Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os   minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é  de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.")
    var inicio = parseInt(prompt("Digite a hora de início da partida:"))
var fim = parseInt(prompt("Digite a hora em que a partida acabou:"))
if (inicio>fim){
    duracao = (fim+24)-inicio
} else {
    duracao = fim-inicio
}
alert(`A duração da partida foi de ${duracao} horas.`)
}


function exercicio22() {
    alert("A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais   de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.   Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva   o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas  (considere que o mês possua 4 semanas exatas). ")
    let horas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"))
let valor = parseFloat(prompt("Digite o valor da hora trabalhada:"))
if (horas>160) {
    extra = (horas-160)*valor*1.5
    salario = 160*valor+extra
} else {
    salario = horas*valor
}
alert(`O salário do funcionário nesse mês será de R$${salario}.`) 
}


function exercicio23() {
    alert("Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém    erros   , identifique os erros no algoritmo apresentado abaixo:   Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule   e mostre seu peso ideal, utilizando as seguintes fórmulas:")
    let nome = prompt("Digite o seu primeiro nome:")
let sexo = prompt("Digite o seu sexo (M ou F):")
let altura = parseFloat(prompt("Digite a sua altura:"))
if (sexo = "M"){
    pesoIdeal = (72.1*altura)-58
} else {
    pesoIdeal = (62.1*altura)-44.7 
}
alert(`${nome}, o seu peso ideal é de ${pesoIdeal.toFixed(2)}kg.`)
}


function exercicio24() {
    alert("Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que  ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que   ultrapassar este valor, calcular e escrever o seu salário total. ")
    let salario = parseFloat(prompt("Digite o seu salário fixo:"))
let vendas = parseFloat(prompt("Digite o valor total das suas vendas:"))
if (vendas>1500){
    bonus1 = 1500*0.03
    bonus2 = (vendas-1500)*0.05
    salarioTotal = salario+bonus1+bonus2
} else {
    bonus1 = vendas*0.03
    salarioTotal = salario+bonus1
}
alert(`O seu salário total será de R$${salarioTotal.toFixed(2)}.`)
}


function exercicio25() {
    alert("Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e  escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior  ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. ")
    let conta = parseInt(prompt("Digite o número da conta:"))
let saldo = parseFloat(prompt("Digite o seu saldo atual:"))
let debito = parseFloat(prompt("Digite o valor que será débitado:"))
let credito = parseFloat(prompt("Digite o seu limite de crédito atual:"))
saldoAtual = saldo-debito+credito
if (saldoAtual > 0){
    alert(`Seu saldo atual é de R$${saldoAtual.toFixed(2)} | Saldo Positivo`)
} else {
    alert(`Seu saldo atual é de R$${saldoAtual.toFixed(2)} | Saldo Negativo`)
} }



function exercicio26() {
    alert("Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e  quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade  média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual  a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'. ")
    let qtdmax = parseInt(prompt("Digite a quantidade máxima de estoque do produto:"))
let qtdmin = parseInt(prompt("Digite a quantidade mínima de estoque do produto:"))
let qtdatual = parseInt(prompt("Digite a quantidade atual de estoque do produto:"))
if (qtdatual < (qtdmax+qtdmin)/2) {
    alert(`Efetuar compra.`)
} else {
    alert(`Não efetuar compra.`)
}}


function exercicio27(){
    alert(" Ler um valor e escrever se é positivo, negativo ou zero.")
    let valor = parseFloat(prompt("Digite um valor:"))
if (valor > 0) {
    alert(`O valor digitado é positivo!`)
} else{
    if (valor == 0) {
        alert(`O valor digitado é igual a zero!`)
    } else{
        alert(`O valor digitado é negativo!`)
    }
}}

function exercicio28(){
    alert(" Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.")
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
if ((valor1 > valor2) && (valor1 > valor3)) {
    alert(`O maior valor é o ${valor1}`)
} else{
    if (valor2 > valor3) {
        alert(`O maior valor é o ${valor2}`)
    } else{
        alert(`O maior valor é o ${valor3}`)
    }
}}

function exercicio29(){
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.")
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
if ((valor1 > valor2) && (valor2 > valor3)){
    soma = valor1+valor2
    alert(`A soma dos dois maiores valores é ${soma}.`)
} else{
    if ((valor2 > valor1) && (valor3 > valor1)){
        soma = valor2+valor3
        alert(`A soma dos dois maiores valores é ${soma}.`)
    } else{
        soma = valor1+valor3
        alert(`A soma dos dois maiores valores é ${soma}`)
    }
}}

function exercicio30(){
    alert("Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. ")
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
if ((valor1 > valor2) && (valor2 > valor3)) {
    alert(`Os valores em ordem crescente são: ${valor3}, ${valor2}, ${valor1}`)
} else{
    if ((valor1 > valor3) && (valor3 > valor2)){
        alert(`Os valores em ordem crescente são: ${valor2}, ${valor3}, ${valor1}`)
    } else{
        if ((valor2 > valor1) && (valor1 > valor3)){
            alert(`Os valores em ordem crescente são: ${valor3}, ${valor1}, ${valor2}`)
        } else{
            if ((valor2 > valor3) && (valor3 > valor1)){
                alert(`Os valores em ordem crescente são: ${valor1}, ${valor3}, ${valor2}`)
            } else{
                if ((valor3 > valor1) && (valor1 > valor2)){
                    alert(`Os valores em ordem crescente são: ${valor2}, ${valor1}, ${valor3}`)
                } else{
                    if ((valor3 > valor2) && (valor2 > valor1)){
                        alert(`Os valores em ordem crescente são: ${valor1}, ${valor2}, ${valor}`)
                    }
                }
            }
        }
    }
}}

function exercicio31(){
    alert(" Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. ")
    let lado1 = parseFloat(prompt("Digite o primeiro lado:"))
let lado2 = parseFloat(prompt("Digite o segundo lado:"))
let lado3 = parseFloat(prompt("Digite o terceiro lado:"))
if ((lado1 >= lado2+lado3) || (lado2 >= lado1+lado3) || (lado3 >= lado1+lado2)){
    alert(`Não é possível formar um triângulo.`)
} else{
    alert(`É possível formar um triângulo.`)
}}

function exercicio32(){
    alert("Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome  do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. ")
    let time1 = prompt("Digite o nome do primeiro time:")
let time2 = prompt("Digite o nome do segundo time")
let gols1 = parseInt(prompt("Digite a quantidade de gols do primeiro time:"))
let gols2 = parseInt(prompt("Digite a quantidade de gols do segundo time:"))
if (gols1 > gols2){
    alert(`O time vencedor foi o ${time1}.`)
} else {
    if (gols2 > gols1){
        alert(`O time vencedor foi o ${time2}.`)
    } else{
        alert(`O resultado da partida foi um EMPATE!`)
    }
}}

function exercicio33(){
    alert(") Ler dois valores e imprimir uma das três mensagens a seguir:  ‘Números iguais’, caso os números sejam iguais  ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;   ‘Segundo maior’, caso o segundo seja maior que o primeiro. ")
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
if (valor1>valor2){
    alert(`Primeiro é maior.`)
} else{
    if (valor2>valor1){
        alert(`Segundo é maior.`)
    } else{
        alert(`Números iguais.`)
    }
}}

function exercicio35(){
    alert("Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da  seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se  que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. ")
    let tipo = prompt("Digite o tipo do combustível (A = Alcool e G = Gasolina):")
let litros = parseFloat(prompt("Digite quantos litros foram comprados:"))
if (tipo == "A"){
    if (litros <= 20){
        desconto = (litros*2.9)*0.03
    } else{
        desconto = (litros*2.9)*0.05
    }
    preco = litros*2.9-desconto
} else{
    if (litros <= 20){
        desconto = (litros*3.3)*0.04
    } else{
        desconto = (litros*3.3)*0.06
    }
    preco = litros*3.3-desconto
}
alert(`O valor a ser pago é de R$$${preco.toFixed(2)}.`)
}

function exercicio36(){
    alert("Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades   dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma   das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais   novo com a mulher mais velha.")
    let homem1 = parseInt(prompt("Digite a idade do primeiro homem:"))
let homem2 = parseInt(prompt("Digite a idade do segundo homem:"))
let mulher1 = parseInt(prompt("Digite a idade da primeira mulher:"))
let mulher2 = parseInt(prompt("Digite a idade da segunda mulher:"))
if (mulher1 > mulher2){
    if (homem1 > homem2){
        soma = mulher2+homem1
        mult = mulher1*homem2
    } else{
        soma = mulher2+homem2
        mult = mulher1*homem1
    }
} else{
    if (homem1 > homem2){
        soma = mulher1+homem1
        mult = mulher2*homem2
    } else{
        soma = mulher1+homem2
        mult = mulher2*homem1
    }
}
alert(`O resultado da soma é ${soma}, e o resultado da multiplicação é ${mult}.`)
}

function exercicio37(){
    alert("Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá  ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de  morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.")
    let macas = parseFloat(prompt("Digite a quantidade em Kg de maçãs compradas:"))
let morangos = parseFloat(prompt("Digite a quantidade em Kg de morangos compradas:"))
if (macas>5){
    totalmacas = macas*1.5
} else{
    totalmacas = macas*1.8
}
if (morangos > 5){
    totalmorango = morangos*2.2
} else{
    totalmorango = morangos*2.5
}
total = totalmacas+totalmorango
if ((morangos+macas > 8) || (total > 25)) {
    total = total-(total*0.1)
}
alert(`O valor total das frutas foi de R$${total.toFixed(2)}`)
}

function exercicio38(){
    alert("Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja  diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a  mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se  esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a  senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’. ")
    let usuario = parseInt(prompt("Digite o código do usuário:"))
if (usuario == 1234) {
    let senha = parseInt(prompt("Digite a senha:"))
    if (senha == 9999){
        alert(`Acesso permitido!`)
    } else{
        alert(`Senha incorreta!`)
    }
}else {
    alert(`Usuário inválido!`)
}}

function exercicio40(){
    alert("Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço   unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total   a pagar (total a pagar = total - desconto), sabendo-se que: - Se quantidade  <= 5  o desconto será de 2% - Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3% - Se quantidade  >  10 o desconto será de 5%")
    let nome = prompt("Digite o nome do produto:")
let quantidade = parseInt(prompt("Digite a quantidade comprada:"))
let precounit = parseFloat(prompt("Digite o preço unitário"))
total = quantidade*precounit
if (quantidade <= 5){
    desconto = total*0.02
} else {
    if ((quantidade > 5) && (quantidade <= 10)){
        desconto = total*0.03
    } else{
        desconto = total*0.05
    }
}

totalapagar = total-desconto
alert(`O valor total foi de R$${total.toFixed(2)}, o desconto foi de R$${desconto.toFixed(2)} e o total a pagar será de R$${totalapagar.toFixed(2)}.`)
}


function exercicio41(){
    alert("Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos  exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo  e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:")
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"))
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"))
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"))
let exercicios = parseFloat(prompt("Digite a média dos exercícios:"))
media = (nota1+nota2*2+nota3*3+exercicios)/7
if (media >= 9){
    alert(`O aluno ficou com o conceito A.`)
} else{
    if (media >= 7.5){
        alert(`O aluno ficou com o conceito B.`)
    } else{
        if (media >= 6){
            alert(`O aluno ficou com o conceito C.`)
        } else{
            alert(`O aluno ficou com o conceito D.`)
        }
    }
}
}

function exercicio42(){
    alert(" Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para   estar em condições, um dos  seguintes requisitos deve ser satisfeito: - Ter no mínimo 65 anos de idade. - Ter trabalhado no mínimo 30 anos. - Ter no mínimo 60 anos  e  ter trabalhado no mínimo 25 anos.  Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano   de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo   de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'. ")
    let codigo = parseInt(prompt("Digite o número do empregado:"))
let anoidade = parseInt(prompt("Digite o ano de nascimento:"))
let anoempresa = parseInt(prompt("Digite o ano de sua contratação:"))
let anoatual = parseInt(prompt("Digite o ano atual:"))
idade = anoatual-anoidade
contribuicao = anoatual-anoempresa
if ((idade >= 65) || (contribuicao >= 30) || ((idade >= 60) && (contribuicao >= 25))){
    alert(`O empregado do código ${codigo} requer aposentadoria!`)
} else {
    alert(`O empregado do código ${codigo} não requer aposentadoria.`)
}}



function exercicio43(){}

function exercicio43(){}

function exercicio44(){}

function exercicio45(){}


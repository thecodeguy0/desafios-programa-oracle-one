//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Digite um número de 0 a 200:');
if (pontuacao >= 100) {
    console.log('Parabéns você venceu!')
}else {
    console.log('Tente novamente para ganhar');
}
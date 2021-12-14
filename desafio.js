// Números de Exemplo (a função considera apenas um número, mas montamos o array para já validar todos os números passados no exemplo)
const nums = [53590, 674030098567819, 9012364509789, 1, 13579, 0, 1123, 151231, 81231, 512314561789]
// Função Auxiliar para checar se um número é o seguinte do número que o antecede (importante checar valor e tipo)
const isNextNum = (prevNum, curNum) => parseInt(curNum) === (parseInt(prevNum) + 1) || (parseInt(prevNum) === 9 && parseInt(curNum) === 0)
// Função Auxiliar para criar um array com números a partir de um número inteiro
const numToArray = num => num.toString().split('')
const getGreatestSequencialNumberFromNumber = num => {
    // Transformando número em array
    const arrayFromNum = numToArray(num)
    // console.log('arrayFromNum', arrayFromNum)
    // Criando array com os números sequenciais dentro do número original
    const sequencialNums = []
    // console.log('sequencialNums no início da função', sequencialNums)
    // Criando variável temporária para guardar o número sequencial (começa valendo 0 pois 0 à esquerda não vale nada)
    let sequencialNum = 0
    // console.log('sequencialNum no início da função', sequencialNum)
    // Percorrendo cada número para montar números sequenciais que existam dentro do próprio número
    // Importante: começamos com o índice 1, pois não há números antes do índice 0
    for (let i = 1; i < arrayFromNum.length; i++) {
        // console.groupCollapsed(`Loop ${i}`)
        // console.log(`Número atual: ${arrayFromNum[i]}`)
        // console.log(`Número anterior: ${arrayFromNum[i - 1]}`)
        // console.log(`Checando se são sequenciais com a função isNextNum(${arrayFromNum[i - 1]},${arrayFromNum[i]}): ${isNextNum(arrayFromNum[i - 1], arrayFromNum[i])}`)
        // Usando a função auxiliar isNextNum para checar se é sequencial
        if (!!isNextNum(arrayFromNum[i - 1], arrayFromNum[i])) {
            // console.log('É sequencial')
            // Se a condição for verdadeira e i for 1, acrescentamos os dois números (como string para que não ocorra a soma)
            if (i === 1) {
                // console.log(`i é 1`)
                sequencialNum += parseInt(arrayFromNum[i - 1]).toString() + parseInt(arrayFromNum[0]).toString()
                // console.log(`sequencialNum: ${sequencialNum}`)
            } else {
                // console.log(`i não é 1`)
                sequencialNum += parseInt(arrayFromNum[i]).toString()
                // console.log(`sequencialNum: ${sequencialNum}`)
            }
            // Senão
        } else {
            // console.log('Não é sequencial')
            // Incluímos o sequencialNum ao array caso o número atual não pertença a uma sequência (caso não seja 0)
            sequencialNum > 0 && sequencialNums.push(sequencialNum)
            // console.log(`sequencialNums: ${sequencialNums}`)
            // E redefinimos o sequencialNum com o número atual (pois pode ser parte de uma eventual sequência seguinte)
            sequencialNum = parseInt(arrayFromNum[i]).toString()
            // console.log(`Zerando o sequencialNum. sequencialNum: ${sequencialNum}`)
        }
        // console.groupEnd()
    }
    // Incluímos o sequencialNum ao array caso o último número pertença a uma sequência (caso não seja 0)
    sequencialNum > 0 && sequencialNums.push(sequencialNum)
    // console.log(`sequencialNums: ${sequencialNums}`)
    // Criando variável para ser retornada
    let result = 0
    // console.log(`result inicial: ${result}`)
    // Se houver algum número no sequencialNums
    if (sequencialNums.length > 0) {
        // console.log(`sequencialNums possui itens dentro`)
        // console.log(`sequencialNums: ${sequencialNums}`)
        // Ordenando o array por ordem decrescente com sort()
        sequencialNums.sort((a, b) => parseInt(a) > parseInt(b) ? -1 : 0)
        // console.log(`sequencialNums reordenado: ${sequencialNums}`)
        // Pegando o maior número
        result = sequencialNums[0]
        // console.log(`resultado final: ${result}`)
        // Senão...
    } else if (arrayFromNum.length) {
        // console.log(`sequencialNums não possui itens dentro, usando arrayFromNum`)
        // console.log(`arrayFromNum: ${arrayFromNum}`)
        // Pegamos o maior número de algarismo único
        arrayFromNum.sort((a, b) => parseInt(a) > parseInt(b) ? -1 : 0)
        // console.log(`arrayFromNum reordenado: ${arrayFromNum}`)
        // Pegando o maior número
        result = arrayFromNum[0]
        // console.log(`resultado final: ${result}`)
    }
    // Retornando o resultado calculado (com um console.log antes para visualizarmos o resultado)
    // console.log(`Resultado retornado: ${result}`)
    return result
}
// Função para checar cada um dos números declarados em nums (retorna apenas no console)
const checkNumbers = nums => {
    // Rodando a função para cada número a ser testado
    for (let num of nums) {
        // Executando nossa função getGreatestSequencialNumberFromNumber
        const result = parseInt(getGreatestSequencialNumberFromNumber(num))
        console.log(`NÚMERO: ${num}\nRESULTADO FINAL: ${result}\n`)
    }
}
checkNumbers(nums)

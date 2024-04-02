//conta corrente foi construida como uma heranca da conta

import readlinesync = require('readline-sync');
import { colors } from './src/util/colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {


let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
let titular: string;
const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

const contas: ContaController = new ContaController();

const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 454, 1, 'Jaime Sand', 99000, 1000);
contas.cadastrar(contaCorrente);

const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 453, 1, 'Nike Jones', 5000, 10);
contas.cadastrar(contaPoupanca);



  while (true) {
    

    console.log(colors.bg.black, colors.fg.cyanstrong,
               '*********************************************************');
    console.log('                                                        ');
    console.log('                     BLUESKIN BANK                      ');
    console.log('                                                        ');
    console.log('********************************************************');
    console.log('                                                        ');
    console.log('                 1 - Criar Conta                        ');
    console.log('                 2 - Listar todas as Contas             ');
    console.log('                 3 - Buscar Conta por Numero            ');
    console.log('                 4 - Atualizar Dados da Conta           ');
    console.log('                 5 - Apagar Conta                       ');
    console.log('                 6 - Sacar                              ');
    console.log('                 7 - Depositar                          ');
    console.log('                 8 - Transferir valores entre Contas    ');
    console.log('                 9 - Buscar Conta por Titular            ');
    console.log('                 0 - Sair                               ');
    console.log('********************************************************');
    console.log('                                                        ',
    colors.reset);

    console.log(colors.fg.whitestrong,
      'Entre a opção desejada: ', colors.reset);
    opcao = readlinesync.questionInt('');

    if (opcao == 0) {
      console.log(colors.fg.cyanstrong,
        '\nBlueSkin Bank - O seu futuro começa aqui!');
      sobre()
      console.log(colors.reset, '');
      process.exit(0)
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, //CHECAR SE CRIAR CONTA VAI EMCIMA
          '\n\nCriar Conta\n\n', colors.reset);
          console.log('Digite o Número da Agência: ');
          agencia = readlinesync.questionInt('');          
          
          console.log('Digite o Nome do Titular da Conta: ');
          titular = readlinesync.question('');          
          
          console.log('Informe o tipo da Conta: ');
          tipo = readlinesync.keyInSelect(tipoContas, '', {cancel: false}) + 1;   
          
          console.log('Digite o Saldo da Conta: ');
          saldo = readlinesync.questionFloat('');
         
    
          switch(tipo){
            case 1: 
             console.log('Digit o Limite da Conta: ');
             limite = readlinesync.questionFloat('')
             contas.cadastrar(
              new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
             )
            break;
            case 2:
              console.log('Digite o dia do aniversario da Conta: ')
              aniversario = readlinesync.questionInt('')
              contas.cadastrar(
              new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
              )
              break;
          }
        
        keyPress()
        break;
      case 2:
        console.log(colors.fg.whitestrong,
          '\n\nListar todas as Contas\n\n', colors.reset);
          contas.listarTodas();
        
        keyPress()
        break;
      case 3:
        console.log(colors.fg.whitestrong,
          '\n\nConsultar dados da Conta\n\n', colors.reset);
        console.log('Digit o Número da Conta: ');
        numero = readlinesync.questionInt('')
        contas.procurarPorNumero(numero);

        keyPress()
        break;
      case 4:
        console.log(colors.fg.whitestrong,
          '\n\Atualizar dados da Conta\n\n', colors.reset);
        console.log('Digite o Número da Conta: ')
        numero = readlinesync.questionInt('')

        let conta = contas.buscarNoArray(numero)

        if (conta !== null) {
          console.log('Digite o Número da Agência: ')
          agencia = readlinesync.questionInt('')

          console.log('Digite o Nome do Titular: ')
          titular = readlinesync.question('')

          tipo = conta.tipo

          console.log('Digite o Saldo da Conta: ')
          saldo = readlinesync.questionFloat('')

          switch(tipo) {
            case 1:
              console.log('Digite o Limite da Conta: ')
              limite = readlinesync.questionFloat('')
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite )
              )
              break;
            case 2:
              console.log('Digite o dia do aniversário da Conta: ')
              aniversario = readlinesync.questionInt('')
              contas.atualizar(
                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
              )
              break;
            }
          }else {
            console.log('A Conta não foi encontrada!')
          }

        keyPress()
        break;
      case 5:
        console.log(colors.fg.whitestrong,
          '\n\nApagar uma Conta\n\n', colors.reset);
        console.log('Digite o Número da Conta: ')
        numero = readlinesync.questionInt('')
        contas.deletar(numero);

        keyPress()
        break;
      case 6:
        console.log(colors.fg.whitestrong,
          '\n\nSaque\n\n', colors.reset);
        console.log('Digite o número da Conta: ');
        numero = readlinesync.questionInt('');

        console.log('\nDigite o valor do Saque: ');
        valor = readlinesync.questionFloat('');

        contas.sacar(numero,valor);

        keyPress()
        break;
      case 7:
        console.log(colors.fg.whitestrong,
          '\n\nDepósito\n\n', colors.reset);
        console.log('Digite o número da Conta:')
        numero = readlinesync.questionInt('')

        console.log('Digite o valor do Depósito: ');
        valor = readlinesync.questionFloat('');

        contas.depositar(numero, valor);

        keyPress()
        break;
      case 8:
        console.log(colors.fg.whitestrong,
          '\n\nTransferência entre contas\n\n', colors.reset);

          console.log('Digite o número da Conta de Origem: ');
          numero = readlinesync.questionInt('');

          console.log('Digite o número da Conta do Destino: ');
          numeroDestino = readlinesync.questionInt('');

          console.log('Digite o valor do Depósito: ');
          valor = readlinesync.questionFloat('');

          contas.transferir(numero, numeroDestino, valor);

        keyPress()
        break;

        case 9:
          console.log(colors.fg.whitestrong,
            "\n\nConsultar conta por titular\n\n", colors.reset);

            console.log("Digite o Nome do Titular: ")
            titular = readlinesync.question("")

            contas.procurarPorTitular(titular);

          keyPress();
          break;
    

      default:
        console.log(colors.fg.whitestrong,
          '\n\nOpção Inválida\n\n', colors.reset);

        keyPress()
        break;
      }

    }

  }

  function sobre(): void {
    console.log(colors.fg.cyanstrong,
      '\n************************************************', colors.reset);
    console.log('Projeto Desenvolvido por: Pamela Rodrigues        ');
    console.log('Generation Brasil - generation@generation.org');
    console.log('github.com/conteudosGeneration');
    console.log(colors.fg.cyanstrong,
      '\n**************************************************', colors.reset);
  }

  function keyPress(): void {
    console.log(colors.reset, '');
    console.log('\nPressione enter para continuar...');
    readlinesync.prompt();
  }
  main();


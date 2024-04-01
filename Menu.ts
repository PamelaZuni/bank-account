//conta corrente foi construida como uma heranca da conta

import readlinesync = require('readline-sync');
import { colors } from './src/util/colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {


let opcao: number, agencia, tipo, saldo, limite, aniversario: number;
//let titular: string;
//const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

const contas: ContaController = new ContaController();

const contaCorrente: ContaCorrente = new ContaCorrente(2, 454, 1, 'Jaime Sand', 99000, 1000);
contas.cadastrar(contaCorrente);
// let cc1: ContaCorrente = new ContaCorrente(2, 454, 1, 'Jaime Sand', 99000, 1000);
// contas.cadastrar(cc1);

const contaPoupanca: ContaPoupanca = new ContaPoupanca(6, 453, 1, 'Nike Jones', 5000, 10);
contas.cadastrar(contaPoupanca);

// console.log('\nCriar o Objeto da Classe Conta');

// let c1: Conta = new Conta(1, 123, 1, 'Miguel Juarez', 112000);

// c1.visualizar();

// console.log('\nAlterar o Saldo para R$ 320000.00');
// c1.saldo = 320000;

// console.log(`\nNovo Saldo da Conta: ${c1.saldo}`);
// c1.visualizar();

// console.log(`\nSacar R$ 900.00 da conta: ${c1.sacar(900)}`);
// c1.visualizar();

// console.log('\nDepositar R$ 3000.00 na Conta: ');
// c1.depositar(3000);
// c1.visualizar();

const cc1: ContaCorrente = new ContaCorrente(2, 454, 1, 'Jaime Sand', 99000, 1000); //create a new object using const
cc1.visualizar(); 
cc1.sacar(3000);
cc1.visualizar();
cc1.depositar(2000);
cc1.visualizar();

const ccc1: ContaPoupanca = new ContaPoupanca(6, 453, 1, 'Nike Jones', 5000, 10);
ccc1.visualizar();
ccc1.sacar(500);
ccc1.visualizar();
ccc1.depositar(7000);
ccc1.visualizar();

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
    console.log('                 9 - Sair                               ');
    console.log('                                                        ');
    console.log('********************************************************');
    console.log('                                                        ',
    colors.reset);

    console.log(colors.fg.whitestrong,
      'Entre a opção desejada: ', colors.reset);
    opcao = readlinesync.questionInt('');

    if (opcao == 9) {
      console.log(colors.fg.cyanstrong,
        '\nBlueSkin Bank - O seu futuro começa aqui!');
      sobre()
      console.log(colors.reset, '');
      process.exit(0)
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong,
          '\n\nCriar Conta\n\n', colors.reset);
          /*console.log('Digite o Número da Agência: ');
          agencia = readlinesync.questionInt('');          
          
          console.log('Digite o Nome do Titular: ');
          agencia = readlinesync.questionInt('');          
          
          console.log('Informe o tipo da Conta: ');
          tipo = readlinesync.keyInSelect(tipoContas, '', {cancel: false}) + 1;   
          
          console.log('Digite o Saldo da Conta: ');
          saldo = readlinesync.questionFloat('');
         */
          keyPress()
          break;
          /*switch(tipo){
            case 1: 
             console.log('Digit o Limite da Conta: ');
             limite = readlinesync.questionFloat('')
             contas.cadastrar(
              new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
             )
            break;
            case 2:
              console.log('Digite o dia do aniversario da Conta: ')
              aniversario = readlinesync.question('')
              contas.cadastrar(

              )
              limite = readlinesync.questionInt('')
              break;

          }
          
          


        
          keyPress()
        break;
        */
      case 2:
        console.log(colors.fg.whitestrong,
          '\n\nListar todas as Contas\n\n', colors.reset);
          contas.listarTodas();
        
        keyPress()
        break;
      case 3:
        console.log(colors.fg.whitestrong,
          '\n\nConsultar dados da Conta\n\n', colors.reset);

        keyPress()
        break;
      case 4:
        console.log(colors.fg.whitestrong,
          '\n\Atualizar dados da Conta\n\n', colors.reset);

        keyPress()
        break;
      case 5:
        console.log(colors.fg.whitestrong,
          '\n\nApagar uma Conta\n\n', colors.reset);

        keyPress()
        break;
      case 6:
        console.log(colors.fg.whitestrong,
          '\n\nSaque\n\n', colors.reset);

        keyPress()
        break;
      case 7:
        console.log(colors.fg.whitestrong,
          '\n\nDepósito\n\n', colors.reset);

        keyPress()
        break;
      case 8:
        console.log(colors.fg.whitestrong,
          '\n\nTransferência entre contar\n\n', colors.reset);

        keyPress()
        break;
      case 9:
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
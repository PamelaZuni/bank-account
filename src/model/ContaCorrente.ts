import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

  private _limite: number;

	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {//limite is attribute from the class 'Conta Corrente'
    super(numero, agencia, tipo, titular, saldo)
		this._limite = limite;
	}

     // the get and set it generate only the get and set from limit because the others, agencia, numero, titulo, saldo  he will push from heranca of the class Conta
 
	public get limite(): number {
		return this._limite;
	}

 
	public set limite(value: number) {
		this._limite = value;
	}

  public sacar(valor: number): boolean{

    if((this.saldo + this._limite) >= valor){
      this.saldo = (this.saldo - valor);
      return true;
    }

    console.log('\nSaldo é insuficiente');
    return false;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Limite da Conta Corrente: ${this._limite}`);
  }

}




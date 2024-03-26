export class Conta { 

  private _numero: number;
  private _agencia: number;
	private _tipo: number; 
  private _titular: string;
  private _saldo: number;

	constructor(_numero: number, _agencia: number, _tipo: number, _titular: string, _saldo: number) {
		this._numero = _numero;
		this._agencia = _agencia;
		this._tipo = _tipo;
		this._titular = _titular;
		this._saldo = _saldo;
	}
	
	public get_numero(): number {
		return this._numero;
	}

	public get_agencia(): number {
		return this._agencia;
	}

	public get_tipo(): number {
		return this._tipo;
	}

	public get_titular(): string {
		return this._titular;
	}


	public get_saldo(): number {
		return this._saldo;
	}

	public set_numero(value: number) {
		this._numero = value;
	}


	public set_agencia(value: number) {
		this._agencia = value;
	}

	public set_tipo(value: number) {
		this._tipo = value;
	}


	public set_titular(value: string) {
		this._titular = value;
	}


	public set_saldo(value: number) {
		this._saldo = value;
	}


	public sacar(valor: number): boolean{

    if(this._saldo >= valor){
      this.set_saldo(this._saldo - valor)
      return true;
    }

    console.log('Saldo é insuficiente');
    return false;
  }
  
  public depositar(valor: number): void{
    this.set_saldo(this._saldo + valor);

  }

  public visualizar(): void{

    let tipo: string = '';

    switch(this._tipo){
      case 1:
        tipo = 'Conta Corrente';
        break;
      case 2:
        tipo = 'Conta Poupanca';
        break;
    }


    console.log(`************************************************`);
    console.log('Dados da Conta');
    console.log('*************************************************');
    console.log(`Numero da conta: ${this._numero}`);
    console.log(`Numero da agencia: ${this._agencia}`);
    console.log(`Tipo da conta: ${this._tipo}`);
    console.log(`Tipo da conta: ${this._titular}`);
    console.log(`Saldo da conta: ${this._saldo.toFixed(2)}`);
	}
    
}

class Telefono {
    private tipo: string;
    private numero: number;
  
    constructor(tipo: string, numero: number) {
      this.tipo = tipo;
      this.numero = numero;
    }
  
    // Funciones para acceso a los atributos
    public getTipo(): string {
      return this.tipo;
    }
  
    public setTipo(tipo: string): void {
      this.tipo = tipo;
    }
  
    public getNumero(): number {
      return this.numero;
    }
  
    public setNumero(numero: number): void {
      this.numero = numero;
    }
  }
  
  export { Telefono };

  
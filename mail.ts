class Mail {
    private tipo: string;
    private direccion: string;
  
    constructor(tipo: string, direccion: string) {
      this.tipo = tipo;
      this.direccion = direccion;
    }
  
    // Funciones para acceso a los atributos
    public getTipo(): string {
      return this.tipo;
    }
  
    public setTipo(tipo: string): void {
      this.tipo = tipo;
    }
  
    public getDireccion(): string {
      return this.direccion;
    }
  
    public setDireccion(direccion: string): void {
      this.direccion = direccion;
    }
  }
  
  export { Mail };
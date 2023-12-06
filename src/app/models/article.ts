export class Article {
  private code: string;
  private description: string;
  private price: number;

  constructor(code: string, description: string, price: number) {
    this.code = code;
    this.description = description;
    this.price = price;
  }

  public getCode = (): string => {
    return this.code;
  };

  public getDescription = (): string => {
    return this.description;
  };

  public getPrice = (): number => {
    return this.price;
  };
}

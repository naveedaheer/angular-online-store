export class User {
  constructor(
    private username: string,
    private token: string,
    private expirationDate: Date
  ) {}

  getExpirationDate(): Date {
    return this.expirationDate;
  }

  getUserToken(): string {
    return this.token;
  }
}

export class User {
  constructor(
    public username: string,
    private token: string,
    private expirationDate: Date
  ) {}

  getExpirationDate(): Date {
    return this.expirationDate;
  }

  getUserToken(): string {
    return this.token;
  }

  getUserType(): string {
    return this.username.toLowerCase();
  }
}

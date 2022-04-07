import { HttpStatusCode } from "./HttpStatusCodes";

interface IHttpError {
  status: number
  name: string
  message: string
  stack?: string
}

/**
 * Represents an error that occurred during an HTTP request.
 */
export class HttpError extends Error implements IHttpError {
  public status: number;

  /**
   * Creates a new instance of HttpError.
   * @param {number} status
   * @param {string} message
   */
  constructor(status: number, message?: string) {
    super(message);

    Object.setPrototypeOf(this, HttpError.prototype);

    this.status = status;
    this.name = HttpStatusCode[status];
    this.message = message || HttpStatusCode[status];
  }

  /**
   *
   * @return {boolean}
   */
  public isClientError(): boolean {
    return this.status >= 400 && this.status <= 499;
  }

  /**
   *
   * @return {boolean}
   */
  public isServerError(): boolean {
    return this.status >= 500 && this.status <= 599;
  }

  /**
   *
   * @param {number} status
   * @param {string} message
   * @return {HttpError}
   */
  public static fromStatus(status: number, message?: string) {
    return new this(status, message);
  }

  /**
   *
   * @param {string} message
   * @param {number} status
   * @return {HttpError}
   */
  public static fromMessage(message: string, status = 400) {
    return new this(status, message);
  }
}

export const isHttpError = (e: Error): e is HttpError => {
  return Number.isInteger((e as HttpError).status);
};

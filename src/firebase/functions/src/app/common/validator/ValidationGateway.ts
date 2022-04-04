import { IJsvExternalInterface } from "./IJsvExternalInterface";
import { IValidationGateway } from "./IValidationGateway";

/**
 * @class ValidationGateway
 */
export class ValidationGateway implements IValidationGateway {
  /**
   *
   * @param {IJsvExternalInterface} jsvExternalInterface
   */
  constructor(private jsvExternalInterface: IJsvExternalInterface) { }

  /**
   * validates json with schema
   * @param {object} schemaValidator
   * @param {any} toValidateObject
   * @return {Promise<void>}
   */
  public async validate(
    schemaValidator: object,
    toValidateObject: any
  ): Promise<void> {
    const validationErrorMessage = await this.jsvExternalInterface.validate(
      schemaValidator,
      toValidateObject
    );

    if (validationErrorMessage !== null) {
      throw new Error(validationErrorMessage);
    }
  }
}

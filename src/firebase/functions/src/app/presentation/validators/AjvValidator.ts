import Ajv from 'ajv';
import { IJsvExternalInterface } from '../../common/validator/IJsvExternalInterface';

// eslint-disable-next-line require-jsdoc
export class AjvValidator implements IJsvExternalInterface {
  private ajv: Ajv.Ajv;

  /**
   * @constructor
   */
  constructor() {
    this.ajv = new Ajv({ useDefaults: true });
  }

  /**
   * Validates
   * @param {object} schemaValidator
   * @param {any} toValidateObject
   * @return {Promise<string | null>}
   */
  public async validate(schemaValidator: object, toValidateObject: any): Promise<string | null> {
    const validate = this.ajv.compile(schemaValidator);
    console.log('FROM VALIDATOR => ', validate(toValidateObject));
    if (!validate(toValidateObject)) {
      return this.ajv.errorsText(validate.errors);
    }
    return null;
  }
}

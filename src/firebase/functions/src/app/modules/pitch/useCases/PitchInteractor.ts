/* eslint-disable max-len */
import { PitchEntity } from "../domain/PitchEntity";
import { IPitchInputPort, IPitchOutputPort } from "./PitchContract";

/**
 * @class PitchInteractor
 */
export class PitchInteractor implements IPitchInputPort {
  /**
   * @constructor
   * @param {IPitchOutputPort} gateway
   */
  constructor(private gateway: IPitchOutputPort) { }

  /**
   *
   * @param {string} id
   * @param {PitchEntity} data
   * @return {Promise<void | boolean>}
   */
  public async saveData(id: string, data: PitchEntity): Promise<void | boolean> {
    try {
      const result = await this.gateway.saveDataInFirstPersistence(id, data);
      return result;
    } catch (error: any) {
      return error;
    }
  }

  /**
   *
   * @param {string} id
   * @param {PitchEntity} data
   * @return {Promise<void | boolean>}
   */
  public async copyData(id: string, data: PitchEntity): Promise<void | boolean> {
    try {
      const result = await this.gateway.saveDataInSecondPersistence(id, data);
      return result;
    } catch (error: any) {
      return error;
    }
  }
}

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
   * @return {Promise<boolean>}
   */
  public async saveData(id: string, data: PitchEntity): Promise<boolean> {
    await this.gateway.saveDataInFirstPersistence(id, data);
    return true;
  }

  /**
   *
   * @param {string} id
   * @param {PitchEntity} data
   * @return {Promise<boolean>}
   */
  public async copyData(id: string, data: PitchEntity): Promise<boolean> {
    await this.gateway.saveDataInSecondPersistence(id, data);
    return true;
  }
}

/* eslint-disable max-len */
import { db } from "../../../../firebase";
import { DummyCollectionNames, PitchEntity } from "../domain/PitchEntity";
import { IPitchOutputPort } from "../useCases/PitchContract";

/**
 * @class PitchFirestoreGateway
 */
export class PitchFirestoreGateway implements IPitchOutputPort {
  /**
   * @method saveDataInFirstPersistence
   * @param {string} id
   * @param {PitchEntity} data
   * @return {boolean}
   */
  public async saveDataInFirstPersistence(id: string, data: PitchEntity): Promise<boolean> {
    await db.collection(DummyCollectionNames.DUMMY_1).doc(id).set(data);
    return true;
  }

  /**
   * @method saveDataInSecondPersistence
   * @param {string} id
   * @param {PitchEntity} data
   * @return {boolean}
   */
  public async saveDataInSecondPersistence(id: string, data: PitchEntity): Promise<boolean> {
    await db.collection(DummyCollectionNames.DUMMY_2).doc(id).set(data);
    return true;
  }
}

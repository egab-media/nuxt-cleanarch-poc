import { db } from "../../../../firebase";
import { DummyCollectionNames, PitchEntity } from "../domain/PitchEntity";
import { IPitchOutputPort } from "../useCases/PitchContract";

export class PitchFirestoreGateway implements IPitchOutputPort {
  public async saveDataInFirstPersistence(id: string, data: PitchEntity): Promise<boolean> {
    await db.collection(DummyCollectionNames.DUMMY_1).doc(id).set(data)
    return true
  }

  public async saveDataInSecondPersistence(id: string, data: PitchEntity): Promise<boolean> {
    await db.collection(DummyCollectionNames.DUMMY_2).doc(id).set(data)
    return true
  }
}

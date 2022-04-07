/* eslint-disable max-len */
import { functions } from "../../../../firebase";
import { PitchEntity } from "../domain/PitchEntity";
import { IPitchInputPort, IPitchOutputPort } from "../useCases/PitchContract";
import { PitchInteractor } from "../useCases/PitchInteractor";
import { PitchFirestoreGateway } from "./PitchFirestoreGateway";

const gateway: IPitchOutputPort = new PitchFirestoreGateway();
const interactor: IPitchInputPort = new PitchInteractor(gateway);

export const createPitchEntity =
  functions.https.onCall(async (data: PitchEntity, context) => {
    const id = "newPitch";

    await interactor.saveData(id, data);
    return id;
  });

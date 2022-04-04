import { functions } from "../../../../firebase";
import { DummyCollectionNames } from "../domain/PitchEntity";
import { IPitchInputPort, IPitchOutputPort } from "../useCases/PitchContract";
import { PitchInteractor } from "../useCases/PitchInteractor";
import { PitchFirestoreGateway } from "./PitchFirestoreGateway";

const gateway: IPitchOutputPort = new PitchFirestoreGateway();
const interactor: IPitchInputPort = new PitchInteractor(gateway);

export const onCreatePitchEntity = functions.firestore
  .document(DummyCollectionNames.DUMMY_1 + "/{docId}")
  .onCreate(async (snapshot) => {
    const data = snapshot.data();
    await interactor.copyData(snapshot.id, {
      title: data.title,
      description: data.description,
      schedule: data.schedule,
      due: data.due,
      state: data.state,
    });
  });

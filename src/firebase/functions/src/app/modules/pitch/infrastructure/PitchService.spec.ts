/* eslint-disable max-len */
import * as firebase from "@firebase/rules-unit-testing";
import functions from "firebase-functions-test";
import { admin } from "../../../../firebase";
import { AjvValidator } from "../../../presentation/validators/AjvValidator";
import { DummyCollectionNames, PitchEntity } from "../domain/PitchEntity";
import { PitchEntitySchemaValidator } from "../domain/PitchEntitySchemaValidator";
import { createPitchEntity } from "./PitchFirestoreController";
import { onCreatePitchEntity } from "./PitchFirestoreTrigger";

const databaseURL = "localhost:8080";
const projectId = "egab-backend-test";

const testEnv = functions({ databaseURL, projectId });

describe("Pitch Basic test", () => {
  const data: PitchEntity = {
    title: "some title",
    state: "APPROVED",
    description: "some description",
    schedule: null,
    due: null,
  };

  beforeEach(async () => {
    await firebase.initializeTestEnvironment({
      projectId,
      firestore: {
        host: "localhost",
        port: 8080,
      },
    });
  });

  test("should create callable pitch Entity", async () => {
    const wrappedCallable = testEnv.wrap(createPitchEntity);

    // Exec
    const docIndex = await wrappedCallable(data);
    const doc = await admin.firestore()
      .doc(DummyCollectionNames.DUMMY_1 + "/" + docIndex)
      .get();

    const valid = new AjvValidator();
    expect(doc.data()).toStrictEqual(data);

    const checkValidation = await valid.validate(PitchEntitySchemaValidator, doc.data());
    expect(checkValidation).toEqual(null);
  });

  test("should Firestore trigger onCreatePitchEntity", async () => {
    const wrappedTrigger: any = testEnv.wrap(onCreatePitchEntity);

    const docIndex = "exampleTest";
    // create snapshot
    const snap = testEnv.firestore.makeDocumentSnapshot(data, DummyCollectionNames.DUMMY_1 + "/" + docIndex);

    // Exec
    await wrappedTrigger(snap);

    const doc = await admin.firestore()
      .doc(DummyCollectionNames.DUMMY_2 + "/" + docIndex)
      .get();

    expect(doc.data()).toEqual(data);
  });

  xtest("should edit callable pitch Entity", async () => {
    const wrappedCallable = testEnv.wrap(editPitchEntity);

    // Exec
    const docIndex = await wrappedCallable(data);
    const doc = await admin.firestore()
      .doc(DummyCollectionNames.DUMMY_1 + "/" + docIndex)
      .get();

    const valid = new AjvValidator();
    expect(doc.data()).toStrictEqual(data);

    const checkValidation = await valid.validate(PitchEntitySchemaValidator, doc.data());
    expect(checkValidation).toEqual(null);
  });

  afterEach((done) => {
    done();
  });
});

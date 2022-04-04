// Run below command to generate the schema validator
// and replace it into DummyEntitySchemaValidator.ts
// npx typescript-json-schema .\src\app\dummy\domain\DummyEntity.ts * --required

import { IPitchData, PitchState } from "./Pitch.types";

/**
 * @class DummyCollectionNames
 */
export class DummyCollectionNames {
  public static readonly DUMMY_1 = "TestCollection";
  public static readonly DUMMY_2 = "TestCollectionCopy";
}

/**
 * @class PitchEntity
 */
export class PitchEntity {
  title: string;
  description: string;
  state: PitchState;
  schedule: Date | null;
  due: Date | null;

  /**
   * @constructor
   * @param {IPitchData} data
   */
  constructor(data: IPitchData) {
    // this.validate(data)
    this.title = data.title;
    this.description = data.description;
    this.state = data.state;
    this.schedule = data.schedule;
    this.due = data.due;
  }

  // validate(data: IPitchData): void {
  //   if (data.schedule && data.schedule < new Date()) {
  //     throw new Error('Invalid schedule date')
  //   }

  //   if (data.due && data.due < new Date()) {
  //     throw new Error('Invalid due date')
  //   }
  // }

  // changeState(state: PitchState): void {
  //   this.state = state
  // }

  // serialize(): IPitchData {
  //   return { ...this }
  // }
}

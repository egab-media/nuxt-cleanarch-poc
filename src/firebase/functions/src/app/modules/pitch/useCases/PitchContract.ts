/* eslint-disable max-len */
import { PitchEntity } from "../domain/PitchEntity";

export interface IPitchInputPort {
  saveData(id: string, data: PitchEntity): Promise<void | boolean>
  copyData(id: string, data: PitchEntity): Promise<void | boolean>
}

export interface IPitchOutputPort {
  saveDataInFirstPersistence(id: string, data: PitchEntity): Promise<boolean>
  saveDataInSecondPersistence(id: string, data: PitchEntity): Promise<boolean>
}

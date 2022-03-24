import { Result } from 'neverthrow'
import { HttpError } from '@@/src/rest/presentation/http/HttpError'
import { ParseError } from '@@/src/rest/presentation/parseError'

export type PitchState = 'REVIEW' | 'CHANGE' | 'APPROVED'

export interface IPitchData {
  title: string
  description: string
  state: PitchState
  schedule: Date | null
  due: Date | null
}

export interface IPitch extends IPitchData {
  validate(data: IPitchData): void
  changeState(state: PitchState): void
  serialize(): IPitchData
}

export interface IPitchRepository {
  create(): Promise<Result<IPitchData, ParseError | HttpError>>
  edit(): Promise<Result<IPitchData, ParseError | HttpError>>
  getRecent(): Promise<Result<IPitchData[], ParseError | HttpError>>
  getOne(): Promise<Result<IPitchData, ParseError | HttpError>>
}

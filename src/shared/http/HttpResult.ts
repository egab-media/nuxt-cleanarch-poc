import { ParseError } from '../parseError'
import { AsyncResult } from '../result'
import { HttpError } from './HttpError'

export type HttpResult<T> = AsyncResult<T, HttpError | ParseError>

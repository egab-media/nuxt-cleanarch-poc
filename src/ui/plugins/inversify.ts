import 'reflect-metadata'

import { container } from 'inversify-props'
import { GetRecent, IUseCase } from '@@/src/modules/pitch/usecase/getRecent'
import { IPitchRepository } from '@@/src/modules/pitch/domain/Pitch.types'
import { PitchService } from '@@/src/modules/pitch/infrastructure/PitchService'
import { AxiosCreator, HttpService, IAxiosCreator, IHttpService } from '@@/src/shared/http/HttpService'

export function containerBuilder() {
  container.addTransient<IAxiosCreator>(AxiosCreator)
  container.addTransient<IHttpService>(HttpService)
  container.addTransient<IPitchRepository>(PitchService)
  container.addTransient<IUseCase>(GetRecent)
}

containerBuilder()

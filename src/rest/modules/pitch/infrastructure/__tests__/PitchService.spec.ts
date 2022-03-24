import 'reflect-metadata'
import { cid, container, resetContainer, mockTransient } from 'inversify-props'
import { PitchService } from '../PitchService'
import { containerBuilder } from '@@/src/ui/plugins/inversify'
import { IAxiosCreator, IHttpService } from '@@/src/rest/presentation/http/HttpService'
import { MockAxiosCreator, TestActions } from '@@/src/rest/presentation/http/HttpService.mock'

beforeEach(() => {
  resetContainer()
  containerBuilder()
  mockTransient<IAxiosCreator>(cid.AxiosCreator, MockAxiosCreator)
})

describe('PitchService', () => {
  describe('getRecent', () => {
    it('should get pitches', async () => {
      container.bind<TestActions>('ActionType').toConstantValue('ok')
      const httpService = container.get<IHttpService>(cid.HttpService)
      const service = new PitchService(httpService)
      const result = await service.getRecent()

      expect(result.isOk()).toBeTruthy()
    })
  })
})

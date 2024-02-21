import { UnauthorizedException } from '@athenna/http'
import { Test, type Context, Mock } from '@athenna/test'
import { RiotApiService } from '#src/services/riotapi.service'
import { SUMMONER_DTO } from '#tests/fixtures/dtos/summoner.dto'

export default class RiotApiServiceTest {
  @Test()
  public async shouldBeAbleToGetSummonerByRegionAndName({ assert }: Context) {
    const riotApiService = new RiotApiService()

    Mock.when(riotApiService, 'client').return({
      get: async () => ({ statusCode: 200, body: SUMMONER_DTO })
    })

    const summoner = await riotApiService.getSummoner('br1', 'iLenon7')

    assert.deepEqual(summoner, SUMMONER_DTO)
  }

  @Test()
  public async shouldThrowUnauthorizedExceptionIfRiotApiResponseStatusCodeIs401({ assert }: Context) {
    const riotApiService = new RiotApiService()

    Mock.when(riotApiService, 'client').return({
      get: async () => ({ statusCode: 401 })
    })

    await assert.rejects(() => riotApiService.getSummoner('br1', 'iLenon7'), UnauthorizedException)
  }
}

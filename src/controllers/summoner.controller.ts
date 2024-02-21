import { Inject } from '@athenna/ioc'
import { Controller, type Context } from '@athenna/http'
import type { RiotApiService } from '#src/services/riotapi.service'

@Controller()
export class SummonerController {
  @Inject()
  public riotApiService: RiotApiService

  public async show({ request, response }: Context) {
    const { region, name } = request.params
    const data = await this.riotApiService.getSummoner(region, name)

    return response.status(200).send(data)
  }
}

import { Service } from '@athenna/ioc'
import { HttpClient } from '@athenna/common'
import { SummonerDto } from '#src/dtos/summoner.dto'
import { UnauthorizedException } from '@athenna/http'

@Service()
export class RiotApiService {
  public client(region: string) {
    const url = Config.get('riot.baseUrl').replace('{{ region }}', region)

    return HttpClient.builder()
      .prefixUrl(url)
      .responseType('json')
      .throwHttpErrors(false)
      .header('X-Riot-Token', Config.get('riot.apiKey'))
  }

  public async getSummoner(region: string, name: string) {
    const response = await this.client(region).get<SummonerDto>(
      `/lol/summoner/v4/summoners/by-name/${name}`
    )

    if (response.statusCode === 401) {
      throw new UnauthorizedException('Riot API Key is wrong or is expired')
    }

    return response.body
  }
}

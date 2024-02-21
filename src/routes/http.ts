import { Route } from '@athenna/http'

Route.group(() => {
  Route.get('/summoners/:region/:name', 'SummonerController.show')
    .tags(['Summoner'])
    .response(200, Config.get('swagger.summoners.responses.get.200'))
}).prefix('/api/v1')

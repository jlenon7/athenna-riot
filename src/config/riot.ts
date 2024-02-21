import { Env } from '@athenna/config'

export default {
  baseUrl: 'https://{{ region }}.api.riotgames.com',
  apiKey: Env('RIOT_API_KEY', '')
}

export default {
  summoners: {
    responses: {
      get: {
        200: {
          description: 'Return summoner',
          properties: {
            accountId: {
              type: 'string',
              description: 'Encrypted account ID. Max length 56 characters.'
            },
            profileIconId: {
              type: 'integer',
              description:
                'ID of the summoner icon associated with the summoner.'
            },
            revisionDate: {
              type: 'integer',
              description:
                'Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.'
            },
            name: { type: 'string', description: 'Summoner name.' },
            id: {
              type: 'string',
              description: 'Encrypted summoner ID. Max length 63 characters.'
            },
            puuid: {
              type: 'string',
              description: 'Encrypted PUUID. Exact length of 78 characters.'
            },
            summonerLevel: {
              type: 'string',
              description: 'Summoner level associated with the summoner.'
            }
          }
        }
      }
    }
  }
}

import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Variables,
  Store,
} from 'relay-runtime'

const fetchRelay = async (params: RequestParameters, variables: Variables) => {
  const response = await fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
    credentials: 'include',
  })

  return await response.json()
}

export const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})

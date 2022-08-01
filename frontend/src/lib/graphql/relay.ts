import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Variables,
  Store,
} from 'relay-runtime'
import { EnvironmentKey } from 'recoil-relay'

const fetchRelay = async (params: RequestParameters, variables: Variables) => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) throw Error('Set GRAPHQL_URL env')

  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
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

export const relayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})

export const relayEnvironmentKey = new EnvironmentKey('RecoilRelayEnvironment')

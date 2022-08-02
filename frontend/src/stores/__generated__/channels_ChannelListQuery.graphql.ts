/**
 * @generated SignedSource<<6645bb4b8c0d8057303a720102cce929>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type channels_ChannelListQuery$variables = {};
export type channels_ChannelListQuery$data = {
  readonly viewer: {
    readonly channels: {
      readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      } | null> | null;
    } | null;
  };
};
export type channels_ChannelListQuery = {
  response: channels_ChannelListQuery$data;
  variables: channels_ChannelListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ChannelsConnection",
        "kind": "LinkedField",
        "name": "channels",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Channel",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "channels_ChannelListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "channels_ChannelListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "560073dcc81e7ef84d1f961b25ca984c",
    "id": null,
    "metadata": {},
    "name": "channels_ChannelListQuery",
    "operationKind": "query",
    "text": "query channels_ChannelListQuery {\n  viewer {\n    channels {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fd20042120c235395052fead435f3a58";

export default node;

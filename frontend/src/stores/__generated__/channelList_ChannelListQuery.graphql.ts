/**
 * @generated SignedSource<<3bd1a1d87cc0f8e60267205d8555c152>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type channelList_ChannelListQuery$variables = {};
export type channelList_ChannelListQuery$data = {
  readonly viewer: {
    readonly channels: {
      readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      } | null> | null;
    } | null;
  };
};
export type channelList_ChannelListQuery = {
  response: channelList_ChannelListQuery$data;
  variables: channelList_ChannelListQuery$variables;
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
    "name": "channelList_ChannelListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "channelList_ChannelListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a6ae05688518319c50a99a7b835a1024",
    "id": null,
    "metadata": {},
    "name": "channelList_ChannelListQuery",
    "operationKind": "query",
    "text": "query channelList_ChannelListQuery {\n  viewer {\n    channels {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "30df0f80eda4c216455763d58eabf111";

export default node;

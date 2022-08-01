/**
 * @generated SignedSource<<eead5fa9132f0676d0bf2fb6ad335bff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type messages_MessagesQuery$variables = {
  date: string;
  names?: ReadonlyArray<string> | null;
};
export type messages_MessagesQuery$data = {
  readonly viewer: {
    readonly channels: {
      readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly messages: {
          readonly edges: ReadonlyArray<{
            readonly text?: string;
            readonly ts: string;
            readonly type: string;
          } | null> | null;
        } | null;
        readonly name: string;
      } | null> | null;
    } | null;
  };
};
export type messages_MessagesQuery = {
  response: messages_MessagesQuery$data;
  variables: messages_MessagesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "date"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "names"
},
v2 = [
  {
    "kind": "Variable",
    "name": "names",
    "variableName": "names"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "date",
    "variableName": "date"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ts",
  "storageKey": null
},
v8 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "TextMessage",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "messages_MessagesQuery",
    "selections": [
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
            "args": (v2/*: any*/),
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "ChannelMessagesConnection",
                    "kind": "LinkedField",
                    "name": "messages",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/)
                        ],
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
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "messages_MessagesQuery",
    "selections": [
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
            "args": (v2/*: any*/),
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "ChannelMessagesConnection",
                    "kind": "LinkedField",
                    "name": "messages",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/)
                        ],
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e7c2da3a792d4bd68f0e116fe3cf0449",
    "id": null,
    "metadata": {},
    "name": "messages_MessagesQuery",
    "operationKind": "query",
    "text": "query messages_MessagesQuery(\n  $names: [String!]\n  $date: String!\n) {\n  viewer {\n    channels(names: $names) {\n      nodes {\n        id\n        name\n        messages(date: $date) {\n          edges {\n            __typename\n            type\n            ts\n            ... on TextMessage {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "43e1460efb956ef996e6689265e6a4a6";

export default node;

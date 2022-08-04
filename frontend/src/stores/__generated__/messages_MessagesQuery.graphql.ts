/**
 * @generated SignedSource<<4e45bd129519a471f5dc66bed959eaae>>
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
            readonly __typename: string;
            readonly files?: ReadonlyArray<{
              readonly id: string;
              readonly name: string;
              readonly permalink: string | null;
              readonly thumb_360: string | null;
              readonly thumb_360_h: string | null;
              readonly thumb_360_w: string | null;
              readonly thumb_480: string | null;
              readonly thumb_480_h: string | null;
              readonly thumb_480_w: string | null;
              readonly thumb_720: string | null;
              readonly thumb_720_h: string | null;
              readonly thumb_720_w: string | null;
              readonly url_private: string | null;
            }> | null;
            readonly text?: string;
            readonly ts: string;
            readonly type: string;
            readonly user?: string;
            readonly user_profile?: {
              readonly display_name: string | null;
              readonly image_72: string | null;
              readonly real_name: string | null;
            } | null;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "user",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "UserProfile",
  "kind": "LinkedField",
  "name": "user_profile",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "display_name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "real_name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image_72",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/)
],
v8 = [
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
        "args": [
          {
            "kind": "Variable",
            "name": "names",
            "variableName": "names"
          }
        ],
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "date",
                    "variableName": "date"
                  }
                ],
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "ts",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v7/*: any*/),
                        "type": "UserMessage",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v7/*: any*/),
                        "type": "JoinMessage",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "UploadFileInfo",
                            "kind": "LinkedField",
                            "name": "files",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "permalink",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "url_private",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_360",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_360_h",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_360_w",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_480",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_480_h",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_480_w",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_720",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_720_h",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "thumb_720_w",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "UploadMessage",
                        "abstractKey": null
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "messages_MessagesQuery",
    "selections": (v8/*: any*/),
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
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "c04a7197a5ff0020a003d6c502b8f9ed",
    "id": null,
    "metadata": {},
    "name": "messages_MessagesQuery",
    "operationKind": "query",
    "text": "query messages_MessagesQuery(\n  $names: [String!]\n  $date: String!\n) {\n  viewer {\n    channels(names: $names) {\n      nodes {\n        id\n        name\n        messages(date: $date) {\n          edges {\n            __typename\n            type\n            ts\n            ... on UserMessage {\n              user\n              text\n              user_profile {\n                display_name\n                real_name\n                image_72\n              }\n            }\n            ... on JoinMessage {\n              user\n              text\n              user_profile {\n                display_name\n                real_name\n                image_72\n              }\n            }\n            ... on UploadMessage {\n              user\n              text\n              user_profile {\n                display_name\n                real_name\n                image_72\n              }\n              files {\n                id\n                name\n                permalink\n                url_private\n                thumb_360\n                thumb_360_h\n                thumb_360_w\n                thumb_480\n                thumb_480_h\n                thumb_480_w\n                thumb_720\n                thumb_720_h\n                thumb_720_w\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "815502ed64c866d11fc86bf2081884c7";

export default node;

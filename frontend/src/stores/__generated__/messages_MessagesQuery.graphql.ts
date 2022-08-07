/**
 * @generated SignedSource<<4c8d7765d376c378d1e1f965ee11eff1>>
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
            readonly blocks: ReadonlyArray<{
              readonly elements: ReadonlyArray<{
                readonly __typename: string;
                readonly elements?: ReadonlyArray<{
                  readonly elements?: ReadonlyArray<{
                    readonly emoji: {
                      readonly name: string;
                      readonly type: string;
                      readonly unicode: string | null;
                    } | null;
                    readonly style: {
                      readonly code: boolean | null;
                    } | null;
                    readonly text: string | null;
                    readonly type: string | null;
                    readonly url: string | null;
                    readonly user_id: string | null;
                  } | null> | null;
                  readonly emoji: {
                    readonly name: string;
                    readonly type: string;
                    readonly unicode: string | null;
                  } | null;
                  readonly style: {
                    readonly code: boolean | null;
                  } | null;
                  readonly text: string | null;
                  readonly type: string | null;
                  readonly url: string | null;
                  readonly user_id: string | null;
                } | null> | null;
                readonly type: string | null;
              } | null> | null;
              readonly type: string;
            } | null> | null;
            readonly files: ReadonlyArray<{
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
            } | null> | null;
            readonly icons: ReadonlyArray<{
              readonly image_72: string | null;
            } | null> | null;
            readonly subtype: string | null;
            readonly text: string | null;
            readonly ts: string;
            readonly type: string;
            readonly user: string | null;
            readonly user_profile: {
              readonly display_name: string | null;
              readonly image_72: string | null;
              readonly real_name: string | null;
            } | null;
            readonly username: string | null;
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
  "name": "type",
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
  "kind": "ScalarField",
  "name": "image_72",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "ElementItem",
  "kind": "LinkedField",
  "name": "elements",
  "plural": true,
  "selections": [
    (v4/*: any*/),
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "user_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Emoji",
      "kind": "LinkedField",
      "name": "emoji",
      "plural": false,
      "selections": [
        (v4/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "unicode",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TextStyle",
      "kind": "LinkedField",
      "name": "style",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "code",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
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
                    "concreteType": "Message",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "subtype",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "ts",
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "user",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "username",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "BotIcon",
                        "kind": "LinkedField",
                        "name": "icons",
                        "plural": true,
                        "selections": [
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
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
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Block",
                        "kind": "LinkedField",
                        "name": "blocks",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "elements",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "__typename",
                                "storageKey": null
                              },
                              (v4/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v7/*: any*/)
                                ],
                                "type": "RichTextSection",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "RichTextSection",
                                    "kind": "LinkedField",
                                    "name": "elements",
                                    "plural": true,
                                    "selections": [
                                      (v4/*: any*/),
                                      (v7/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "RichTextList",
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
    "cacheID": "63b50b5dcb827aa05d668c8bfbe16ad1",
    "id": null,
    "metadata": {},
    "name": "messages_MessagesQuery",
    "operationKind": "query",
    "text": "query messages_MessagesQuery(\n  $names: [String!]\n  $date: String!\n) {\n  viewer {\n    channels(names: $names) {\n      nodes {\n        id\n        name\n        messages(date: $date) {\n          edges {\n            type\n            subtype\n            ts\n            text\n            user\n            username\n            icons {\n              image_72\n            }\n            user_profile {\n              display_name\n              real_name\n              image_72\n            }\n            files {\n              id\n              name\n              permalink\n              url_private\n              thumb_360\n              thumb_360_h\n              thumb_360_w\n              thumb_480\n              thumb_480_h\n              thumb_480_w\n              thumb_720\n              thumb_720_h\n              thumb_720_w\n            }\n            blocks {\n              type\n              elements {\n                __typename\n                type\n                ... on RichTextSection {\n                  type\n                  elements {\n                    type\n                    text\n                    url\n                    user_id\n                    emoji {\n                      type\n                      name\n                      unicode\n                    }\n                    style {\n                      code\n                    }\n                  }\n                }\n                ... on RichTextList {\n                  type\n                  elements {\n                    type\n                    elements {\n                      type\n                      text\n                      url\n                      user_id\n                      emoji {\n                        type\n                        name\n                        unicode\n                      }\n                      style {\n                        code\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff502a91c690a8176789077960b82aa7";

export default node;

import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Block = {
  __typename?: 'Block';
  alt_text?: Maybe<Scalars['String']>;
  block_id?: Maybe<Scalars['String']>;
  elements?: Maybe<Array<Maybe<Element>>>;
  type: Scalars['String'];
};

export type BotIcon = {
  __typename?: 'BotIcon';
  image_36?: Maybe<Scalars['String']>;
  image_48?: Maybe<Scalars['String']>;
  image_72?: Maybe<Scalars['String']>;
};

export type Channel = {
  __typename?: 'Channel';
  created: Scalars['Int'];
  creator: Scalars['String'];
  id: Scalars['String'];
  is_archived: Scalars['Boolean'];
  is_general: Scalars['Boolean'];
  members?: Maybe<Array<User>>;
  messages?: Maybe<ChannelMessagesConnection>;
  name: Scalars['String'];
  purpose: ChannelPurpose;
  topic: ChannelTopic;
};


export type ChannelMessagesArgs = {
  date: Scalars['String'];
};

export type ChannelMessagesConnection = {
  __typename?: 'ChannelMessagesConnection';
  date: Scalars['String'];
  edges?: Maybe<Array<Maybe<Message>>>;
};

export type ChannelMessagesEdge = {
  __typename?: 'ChannelMessagesEdge';
  node?: Maybe<Array<Maybe<Message>>>;
};

export type ChannelPurpose = {
  __typename?: 'ChannelPurpose';
  creator?: Maybe<Scalars['String']>;
  lastSet?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type ChannelTopic = {
  __typename?: 'ChannelTopic';
  creator?: Maybe<Scalars['String']>;
  lastSet?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type ChannelsConnection = {
  __typename?: 'ChannelsConnection';
  nodes?: Maybe<Array<Maybe<Channel>>>;
};

export type Element = {
  type?: Maybe<Scalars['String']>;
};

export type ElementItem = {
  __typename?: 'ElementItem';
  emoji?: Maybe<Emoji>;
  style?: Maybe<TextStyle>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Emoji = {
  __typename?: 'Emoji';
  name: Scalars['String'];
  type: Scalars['String'];
  unicode?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  blocks?: Maybe<Array<Maybe<Block>>>;
  files?: Maybe<Array<Maybe<UploadFileInfo>>>;
  icons?: Maybe<Array<Maybe<BotIcon>>>;
  purpose?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  ts: Scalars['String'];
  type: Scalars['String'];
  user?: Maybe<Scalars['String']>;
  user_profile?: Maybe<UserProfile>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<User>>;
  viewer: Viewer;
};

export type RichTextList = Element & {
  __typename?: 'RichTextList';
  elements?: Maybe<Array<Maybe<RichTextSection>>>;
  type?: Maybe<Scalars['String']>;
};

export type RichTextSection = Element & {
  __typename?: 'RichTextSection';
  elements?: Maybe<Array<Maybe<ElementItem>>>;
  type?: Maybe<Scalars['String']>;
};

export type TextStyle = {
  __typename?: 'TextStyle';
  code?: Maybe<Scalars['Boolean']>;
};

export type UploadFileInfo = {
  __typename?: 'UploadFileInfo';
  id: Scalars['String'];
  name: Scalars['String'];
  permalink?: Maybe<Scalars['String']>;
  thumb_360?: Maybe<Scalars['String']>;
  thumb_360_h?: Maybe<Scalars['String']>;
  thumb_360_w?: Maybe<Scalars['String']>;
  thumb_480?: Maybe<Scalars['String']>;
  thumb_480_h?: Maybe<Scalars['String']>;
  thumb_480_w?: Maybe<Scalars['String']>;
  thumb_720?: Maybe<Scalars['String']>;
  thumb_720_h?: Maybe<Scalars['String']>;
  thumb_720_w?: Maybe<Scalars['String']>;
  url_private?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  team_id?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Int']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  avatar_hash?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  image_24?: Maybe<Scalars['String']>;
  image_32?: Maybe<Scalars['String']>;
  image_48?: Maybe<Scalars['String']>;
  image_72?: Maybe<Scalars['String']>;
  image_192?: Maybe<Scalars['String']>;
  image_512?: Maybe<Scalars['String']>;
  image_original?: Maybe<Scalars['String']>;
  is_restricted?: Maybe<Scalars['Boolean']>;
  real_name?: Maybe<Scalars['String']>;
  real_name_normalized?: Maybe<Scalars['String']>;
  status_emoji?: Maybe<Scalars['String']>;
  status_text?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Viewer = {
  __typename?: 'Viewer';
  channels?: Maybe<ChannelsConnection>;
  userId: Scalars['String'];
};


export type ViewerChannelsArgs = {
  names?: InputMaybe<Array<Scalars['String']>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Block: ResolverTypeWrapper<Block>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BotIcon: ResolverTypeWrapper<BotIcon>;
  Channel: ResolverTypeWrapper<Channel>;
  ChannelMessagesConnection: ResolverTypeWrapper<ChannelMessagesConnection>;
  ChannelMessagesEdge: ResolverTypeWrapper<ChannelMessagesEdge>;
  ChannelPurpose: ResolverTypeWrapper<ChannelPurpose>;
  ChannelTopic: ResolverTypeWrapper<ChannelTopic>;
  ChannelsConnection: ResolverTypeWrapper<ChannelsConnection>;
  Element: ResolversTypes['RichTextList'] | ResolversTypes['RichTextSection'];
  ElementItem: ResolverTypeWrapper<ElementItem>;
  Emoji: ResolverTypeWrapper<Emoji>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Message: ResolverTypeWrapper<Message>;
  Query: ResolverTypeWrapper<{}>;
  RichTextList: ResolverTypeWrapper<RichTextList>;
  RichTextSection: ResolverTypeWrapper<RichTextSection>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TextStyle: ResolverTypeWrapper<TextStyle>;
  UploadFileInfo: ResolverTypeWrapper<UploadFileInfo>;
  User: ResolverTypeWrapper<User>;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  Viewer: ResolverTypeWrapper<Viewer>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Block: Block;
  Boolean: Scalars['Boolean'];
  BotIcon: BotIcon;
  Channel: Channel;
  ChannelMessagesConnection: ChannelMessagesConnection;
  ChannelMessagesEdge: ChannelMessagesEdge;
  ChannelPurpose: ChannelPurpose;
  ChannelTopic: ChannelTopic;
  ChannelsConnection: ChannelsConnection;
  Element: ResolversParentTypes['RichTextList'] | ResolversParentTypes['RichTextSection'];
  ElementItem: ElementItem;
  Emoji: Emoji;
  Int: Scalars['Int'];
  Message: Message;
  Query: {};
  RichTextList: RichTextList;
  RichTextSection: RichTextSection;
  String: Scalars['String'];
  TextStyle: TextStyle;
  UploadFileInfo: UploadFileInfo;
  User: User;
  UserProfile: UserProfile;
  Viewer: Viewer;
}>;

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = ResolversObject<{
  alt_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  block_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elements?: Resolver<Maybe<Array<Maybe<ResolversTypes['Element']>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BotIconResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotIcon'] = ResolversParentTypes['BotIcon']> = ResolversObject<{
  image_36?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_48?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_72?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Channel'] = ResolversParentTypes['Channel']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_general?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  members?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  messages?: Resolver<Maybe<ResolversTypes['ChannelMessagesConnection']>, ParentType, ContextType, RequireFields<ChannelMessagesArgs, 'date'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ChannelPurpose'], ParentType, ContextType>;
  topic?: Resolver<ResolversTypes['ChannelTopic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelMessagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelMessagesConnection'] = ResolversParentTypes['ChannelMessagesConnection']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelMessagesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelMessagesEdge'] = ResolversParentTypes['ChannelMessagesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelPurposeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelPurpose'] = ResolversParentTypes['ChannelPurpose']> = ResolversObject<{
  creator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelTopicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelTopic'] = ResolversParentTypes['ChannelTopic']> = ResolversObject<{
  creator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChannelsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelsConnection'] = ResolversParentTypes['ChannelsConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Channel']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Element'] = ResolversParentTypes['Element']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RichTextList' | 'RichTextSection', ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ElementItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ElementItem'] = ResolversParentTypes['ElementItem']> = ResolversObject<{
  emoji?: Resolver<Maybe<ResolversTypes['Emoji']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['TextStyle']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmojiResolvers<ContextType = any, ParentType extends ResolversParentTypes['Emoji'] = ResolversParentTypes['Emoji']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = ResolversObject<{
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileInfo']>>>, ParentType, ContextType>;
  icons?: Resolver<Maybe<Array<Maybe<ResolversTypes['BotIcon']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ts?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  viewer?: Resolver<ResolversTypes['Viewer'], ParentType, ContextType>;
}>;

export type RichTextListResolvers<ContextType = any, ParentType extends ResolversParentTypes['RichTextList'] = ResolversParentTypes['RichTextList']> = ResolversObject<{
  elements?: Resolver<Maybe<Array<Maybe<ResolversTypes['RichTextSection']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RichTextSectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RichTextSection'] = ResolversParentTypes['RichTextSection']> = ResolversObject<{
  elements?: Resolver<Maybe<Array<Maybe<ResolversTypes['ElementItem']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextStyleResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextStyle'] = ResolversParentTypes['TextStyle']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadFileInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileInfo'] = ResolversParentTypes['UploadFileInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permalink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_360?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_360_h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_360_w?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_480?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_480_h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_480_w?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_720?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_720_h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumb_720_w?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_private?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  team_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = ResolversObject<{
  avatar_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_24?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_32?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_48?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_72?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_192?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_512?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_original?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_restricted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  real_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  real_name_normalized?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_emoji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = ResolversObject<{
  channels?: Resolver<Maybe<ResolversTypes['ChannelsConnection']>, ParentType, ContextType, Partial<ViewerChannelsArgs>>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Block?: BlockResolvers<ContextType>;
  BotIcon?: BotIconResolvers<ContextType>;
  Channel?: ChannelResolvers<ContextType>;
  ChannelMessagesConnection?: ChannelMessagesConnectionResolvers<ContextType>;
  ChannelMessagesEdge?: ChannelMessagesEdgeResolvers<ContextType>;
  ChannelPurpose?: ChannelPurposeResolvers<ContextType>;
  ChannelTopic?: ChannelTopicResolvers<ContextType>;
  ChannelsConnection?: ChannelsConnectionResolvers<ContextType>;
  Element?: ElementResolvers<ContextType>;
  ElementItem?: ElementItemResolvers<ContextType>;
  Emoji?: EmojiResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RichTextList?: RichTextListResolvers<ContextType>;
  RichTextSection?: RichTextSectionResolvers<ContextType>;
  TextStyle?: TextStyleResolvers<ContextType>;
  UploadFileInfo?: UploadFileInfoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
  Viewer?: ViewerResolvers<ContextType>;
}>;


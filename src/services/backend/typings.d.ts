declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseCosCredentialVo_ = {
    code?: number;
    data?: CosCredentialVo;
    message?: string;
  };

  type BaseResponseInt_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseListHotPostVO_ = {
    code?: number;
    data?: HotPostVO[];
    message?: string;
  };

  type BaseResponseListUserChatResponse_ = {
    code?: number;
    data?: UserChatResponse[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePagePost_ = {
    code?: number;
    data?: PagePost_;
    message?: string;
  };

  type BaseResponsePagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
    message?: string;
  };

  type BaseResponsePageRoomMessageVo_ = {
    code?: number;
    data?: PageRoomMessageVo_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponsePostVO_ = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTokenLoginUserVo_ = {
    code?: number;
    data?: TokenLoginUserVo;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BaseResponseWebParseVO_ = {
    code?: number;
    data?: WebParseVO;
    message?: string;
  };

  type CosCredentialVo = {
    /** 桶名称 */
    bucket?: string;
    /** 文件地址 */
    key?: string;
    /** 区域 */
    region?: string;
    response?: Response;
  };

  type Credentials = {
    sessionToken?: string;
    tmpSecretId?: string;
    tmpSecretKey?: string;
    token?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type generatePresignedDownloadUrlUsingGETParams = {
    /** fileName */
    fileName: string;
  };

  type getCosCredentialUsingGETParams = {
    /** fileName */
    fileName?: string;
  };

  type getMinioPresignedUsingGETParams = {
    /** fileName */
    fileName?: string;
  };

  type getPostVoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type HotPostDataVO = {
    followerCount?: number;
    title?: string;
    url?: string;
  };

  type HotPostVO = {
    category?: number;
    categoryName?: string;
    data?: HotPostDataVO[];
    iconUrl?: string;
    id?: number;
    name?: string;
    type?: string;
    typeName?: string;
    updateTime?: string;
  };

  type LoginUserVO = {
    createTime?: string;
    email?: string;
    id?: number;
    lastSignInDate?: string;
    level?: number;
    points?: number;
    updateTime?: string;
    usedPoints?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type Message = {
    content?: string;
    id?: string;
    mentionedUsers?: Sender[];
    quotedMessage?: Message;
    sender?: Sender;
    timestamp?: string;
  };

  type MessageQueryRequest = {
    current?: number;
    pageSize?: number;
    roomId?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type MessageWrapper = {
    message?: Message;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PagePost_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Post[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageRoomMessageVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: RoomMessageVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type parseWebPageUsingGETParams = {
    /** url */
    url: string;
  };

  type Post = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type PostAddRequest = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    tagList?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type Response = {
    credentials?: Credentials;
    expiration?: string;
    expiredTime?: number;
    requestId?: string;
    startTime?: number;
  };

  type RoomMessageVo = {
    id?: number;
    messageWrapper?: MessageWrapper;
    roomId?: number;
    userId?: number;
  };

  type SaTokenInfo = {
    isLogin?: boolean;
    loginDevice?: string;
    loginId?: Record<string, any>;
    loginType?: string;
    sessionTimeout?: number;
    tag?: string;
    tokenActiveTimeout?: number;
    tokenName?: string;
    tokenSessionTimeout?: number;
    tokenTimeout?: number;
    tokenValue?: string;
  };

  type SaveTodoDto = {
    /** Todo data */
    todoData: Record<string, any>[];
  };

  type Sender = {
    avatar?: string;
    country?: string;
    id?: string;
    isAdmin?: boolean;
    level?: number;
    name?: string;
    points?: number;
    region?: string;
  };

  type TokenLoginUserVo = {
    createTime?: string;
    email?: string;
    id?: number;
    lastSignInDate?: string;
    level?: number;
    points?: number;
    saTokenInfo?: SaTokenInfo;
    updateTime?: string;
    usedPoints?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type uploadFileByMinioUsingPOSTParams = {
    biz?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    email?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserChatResponse = {
    /** 用户头像 */
    avatar?: string;
    /** 用户 ID */
    id?: string;
    /** 是否是管理员 */
    isAdmin?: boolean;
    /** 用户等级 */
    level?: number;
    /** 用户名称 */
    name?: string;
    /** 用户积分 */
    points?: number;
    /** 用户状态 */
    status?: string;
  };

  type userLoginByGithubUsingPOSTParams = {
    auth_code?: string;
    authorization_code?: string;
    code?: string;
    oauth_token?: string;
    oauth_verifier?: string;
    state?: string;
  };

  type UserLoginRequest = {
    email?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    captchaVerification?: string;
    checkPassword?: string;
    code?: string;
    email?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type WebParseVO = {
    description?: string;
    favicon?: string;
    title?: string;
  };
}

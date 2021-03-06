import { InterfaceRequest } from '../../src/types'

export const mockContext: AWSLambda.Context = {
  awsRequestId: 'foobar',
  callbackWaitsForEmptyEventLoop: true,
  done: () => undefined,
  fail: () => undefined,
  functionName: 'foobar',
  functionVersion: 'foobar',
  getRemainingTimeInMillis: () => 0,
  invokedFunctionArn: 'foobar',
  logGroupName: 'foobar',
  logStreamName: 'foobar',
  memoryLimitInMB: 128,
  succeed: () => undefined,
}

export const mockRequestContext: AWSLambda.APIGatewayEventRequestContext = {
  accountId: 'foobar',
  apiId: 'foobar',
  httpMethod: 'GET',
  identity: {
    accessKey: null,
    accountId: null,
    apiKey: null,
    caller: null,
    cognitoAuthenticationProvider: null,
    cognitoAuthenticationType: null,
    cognitoIdentityId: null,
    cognitoIdentityPoolId: null,
    sourceIp: 'foobar',
    user: null,
    userAgent: 'foobar',
    userArn: null,
  },
  requestId: 'foobar',
  requestTimeEpoch: 0,
  resourceId: 'foobar',
  resourcePath: 'foobar',
  stage: 'foobar',
}

export const get: InterfaceRequest = {
  body: 'foobar',
  context: mockContext,
  cookies: {},
  headers: {},
  httpMethod: 'GET',
  isBase64Encoded: false,
  path: '/',
  pathParameters: {},
  provider: 'aws',
  query: {},
  queryStringParameters: {},
  requestContext: mockRequestContext,
  resource: 'foobar',
  stageVariables: {},
}

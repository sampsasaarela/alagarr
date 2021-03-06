import { InterfaceRequest } from '../../types'

// Sets the hostname on the request object
export default function setHostname(
  request: InterfaceRequest,
): InterfaceRequest {
  return {
    ...request,
    hostname: (request.headers && request.headers.host) || undefined,
  }
}

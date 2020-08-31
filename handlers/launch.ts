import { getRequestType } from 'ask-sdk'
import { random } from '../services/jokes'

export const LaunchRequestHandler = {
  canHandle(handlerInput: any): any {
    return getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
  },
  handle(handlerInput: any): any {
    return random().then((response) => {
      return handlerInput.responseBuilder.speak(response).getResponse()
    })
  },
}

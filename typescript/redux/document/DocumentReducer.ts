import { DocumentAction } from './DocumentAction'
import { DocumentEvent } from './DocumentEvent'
import { Document } from './Document'
import { Subject } from './Subject'

export namespace DocumentReducer {
  /**
  * Create a subject in accordance with the given event into the given document.
  *
  * @param state - A document to update.
  * @param action - An event that describe the action to execute.
  *
  * @return An updated instance copied from the given document.
  */
  function createSubject (
    state : Document,
    action : DocumentEvent.SubjectCreationEvent
  ) : Document {
    const result : Document = state.clone()

    action.payback = result.create(action.payload.parent)

    return result
  }

  function updateName (
    state : Document,
    action : DocumentEvent.NameEvent
  ) : Document {
    const result : Document = state.clone()

    switch (action.type) {
      case DocumentAction.DEFINE_NAME:
        result.defineName(action.payload.subject, action.payload.name)
        break
      case DocumentAction.UPDATE_NAME:
        result.updateName(action.payload.subject, action.payload.name)
        break
      case DocumentAction.DELETE_NAME:
        result.deleteName(action.payload.subject)
        break
      default:
        break
    }

    return result
  }

  function updateKey (
    state : Document,
    action : DocumentEvent.KeyEvent
  ) : Document {
    const result : Document = state.clone()

    switch (action.type) {
      case DocumentAction.DEFINE_KEY:
        result.defineKey(action.payload.subject, action.payload.key)
        break
      case DocumentAction.UPDATE_KEY:
        result.updateKey(action.payload.subject, action.payload.key)
        break
      case DocumentAction.DELETE_KEY:
        result.deleteKey(action.payload.subject)
        break
      default:
        break
    }

    return result
  }

  /**
  *
  */
  export function reduce (
    state : Document = new Document(),
    action : DocumentEvent
  ) : Document {
    switch (action.type) {
      case DocumentAction.CREATE_SUBJECT:
        return createSubject(state, action as DocumentEvent.SubjectCreationEvent)
      case DocumentAction.DEFINE_NAME:
      case DocumentAction.UPDATE_NAME:
      case DocumentAction.DELETE_NAME:
        return updateName(state, action as DocumentEvent.NameEvent)
      case DocumentAction.DEFINE_KEY:
      case DocumentAction.UPDATE_KEY:
      case DocumentAction.DELETE_KEY:
        return updateKey(state, action as DocumentEvent.KeyEvent)
      default:
        return state
    }
  }
}

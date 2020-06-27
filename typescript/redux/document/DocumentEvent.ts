import { DocumentAction } from './DocumentAction'
import { Subject } from './Subject'

export type DocumentEvent = { type: DocumentAction, payload?: any }

export namespace DocumentEvent {
  /**
  * Event for the creation of a new subject into a document.
  */
  export type SubjectCreationEvent = {
    type: DocumentAction,
    payload: { parent: number },
    payback: Subject
  }

  /**
  * Event for the creation of a new subject into a document.
  */
  export type SubjectDeletionEvent = {
    type: DocumentAction,
    payload: { subject: number }
  }

  /**
  * Event for updating the name of a subject.
  */
  export type NameEvent = {
    type: DocumentAction,
    payload: { subject: number, name?: string }
  }

  /**
  * Event for updating the name of a subject.
  */
  export type KeyEvent = {
    type: DocumentAction,
    payload: { subject: number, key?: string }
  }

  /**
  * Create a new event for creating a subject into a document.
  *
  * @param [parent = -1] - Identifier of the parent subject of the subject to create.
  *
  * @return An event for creating a subject into a document.
  */
  export function createSubject (parent : number = -1) : SubjectCreationEvent {
    return {
      type: DocumentAction.CREATE_SUBJECT,
      payload: { parent },
      payback: null
    }
  }

  /**
  * Create a new event for deleting a subject from a document.
  *
  * @param subject - Identifier of the subject to delete.
  *
  * @return An event for deleting a subject from a document.
  */
  export function deleteSubject (subject : number) : SubjectDeletionEvent {
    return {
      type: DocumentAction.CREATE_SUBJECT,
      payload: { subject }
    }
  }

  export function defineName (subject : number, name : string) : NameEvent {
    return {
      type: DocumentAction.DEFINE_NAME,
      payload: { subject, name }
    }
  }

  export function updateName (subject : number, name : string) : NameEvent {
    return {
      type: DocumentAction.UPDATE_NAME,
      payload: { subject, name }
    }
  }

  export function deleteName (subject : number) : NameEvent {
    return {
      type: DocumentAction.DELETE_NAME,
      payload: { subject }
    }
  }

  export function defineKey (subject : number, key : string) : KeyEvent {
    return {
      type: DocumentAction.DEFINE_KEY,
      payload: { subject, key }
    }
  }

  export function updateKey (subject : number, key : string) : KeyEvent {
    return {
      type: DocumentAction.UPDATE_KEY,
      payload: { subject, key }
    }
  }

  export function deleteKey (subject : number) : KeyEvent {
    return {
      type: DocumentAction.DELETE_KEY,
      payload: { subject }
    }
  }
}

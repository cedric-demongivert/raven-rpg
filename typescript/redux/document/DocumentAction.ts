export type DocumentAction = string

export namespace DocumentAction {
  export const CREATE_SUBJECT : DocumentAction = 'document:subject:create'
  export const DELETE_SUBJECT : DocumentAction = 'document:subject:delete'
  export const DEFINE_NAME : DocumentAction = 'document:name:define'
  export const UPDATE_NAME : DocumentAction = 'document:name:update'
  export const DELETE_NAME : DocumentAction = 'document:name:delete'
  export const DEFINE_KEY : DocumentAction = 'document:key:define'
  export const UPDATE_KEY : DocumentAction = 'document:key:update'
  export const DELETE_KEY : DocumentAction = 'document:key:delete'

  export const ALL : DocumentAction[] = [
    CREATE_SUBJECT,
    DELETE_SUBJECT,
    DEFINE_NAME,
    UPDATE_NAME,
    DELETE_NAME,
    DEFINE_KEY,
    UPDATE_KEY,
    DELETE_KEY
  ]
}

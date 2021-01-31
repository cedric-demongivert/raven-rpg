import { UnidocValidationMessageType } from '@cedric-demongivert/unidoc'

export namespace IllFormedCommand {
  export const TYPE: UnidocValidationMessageType = UnidocValidationMessageType.FAILURE
  export const CODE: string = 'command:failure:ill-formed-command'

  export namespace Data {
    export const NAME: string = 'name'
    export const TYPE: string = 'type'
  }
}

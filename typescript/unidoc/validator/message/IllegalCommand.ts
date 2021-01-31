import { UnidocValidationMessageType } from '@cedric-demongivert/unidoc'

export namespace IllegalCommand {
  export const TYPE: UnidocValidationMessageType = UnidocValidationMessageType.FAILURE
  export const CODE: string = 'command:failure:illegal-command'

  export namespace Data {
    export const NAME: string = 'name'
  }
}

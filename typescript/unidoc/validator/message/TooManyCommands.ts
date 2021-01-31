import { UnidocValidationMessageType } from '@cedric-demongivert/unidoc'

export namespace TooManyCommands {
  export const TYPE: UnidocValidationMessageType = UnidocValidationMessageType.FAILURE
  export const CODE: string = 'command:failure:too-many-commands'

  export namespace Data {
    export const NAME: string = 'name'
    export const MAXIMUM: string = 'maximum'
  }
}

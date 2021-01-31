import { UnidocValidationMessageType } from '@cedric-demongivert/unidoc'

export namespace ExpectedCommand {
  export const TYPE: UnidocValidationMessageType = UnidocValidationMessageType.FAILURE
  export const CODE: string = 'command:failure:expected-command'

  export namespace Data {
    export const NAME: string = 'name'
  }
}

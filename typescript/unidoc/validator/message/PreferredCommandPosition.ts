import { UnidocValidationMessageType } from '@cedric-demongivert/unidoc'

export namespace PreferredCommandPosition {
  export const TYPE: UnidocValidationMessageType = UnidocValidationMessageType.WARNING
  export const CODE: string = 'command:failure:preferred-command-position'

  export namespace Data {
    export const NAME: string = 'name'
    export const OFFSET: string = 'offset'
  }
}

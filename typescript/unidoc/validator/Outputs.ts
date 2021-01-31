import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocKissValidatorOutput } from '@cedric-demongivert/unidoc'

import { ExpectedCommand } from './message/ExpectedCommand'
import { TooManyCommands } from './message/TooManyCommands'
import { IllegalCommand } from './message/IllegalCommand'
import { IllFormedCommand } from './message/IllFormedCommand'
import { PreferredCommandPosition } from './message/PreferredCommandPosition'

export namespace Outputs {
  /**
  *
  */
  export function expectedCommand(name: string): UnidocKissValidatorOutput {
    return UnidocKissValidator.output.message(
      UnidocKissValidator.output.message.builder()
        .setType(ExpectedCommand.TYPE)
        .setCode(ExpectedCommand.CODE)
        .setData(ExpectedCommand.Data.NAME, name)
        .get()
    )
  }

  /**
  *
  */
  export function preferredCommandPosition(name: string, offset: number): UnidocKissValidatorOutput {
    return UnidocKissValidator.output.message(
      UnidocKissValidator.output.message.builder()
        .setType(PreferredCommandPosition.TYPE)
        .setCode(PreferredCommandPosition.CODE)
        .setData(PreferredCommandPosition.Data.NAME, name)
        .setData(PreferredCommandPosition.Data.OFFSET, offset)
        .get()
    )
  }

  /**
  *
  */
  export function illegalCommand(name: string): UnidocKissValidatorOutput {
    return UnidocKissValidator.output.message(
      UnidocKissValidator.output.message.builder()
        .setType(IllegalCommand.TYPE)
        .setCode(IllegalCommand.CODE)
        .setData(IllegalCommand.Data.NAME, name)
        .get()
    )
  }

  /**
  *
  */
  export function illFormedCommand(name: string, type: string): UnidocKissValidatorOutput {
    return UnidocKissValidator.output.message(
      UnidocKissValidator.output.message.builder()
        .setType(IllFormedCommand.TYPE)
        .setCode(IllFormedCommand.CODE)
        .setData(IllFormedCommand.Data.NAME, name)
        .setData(IllFormedCommand.Data.TYPE, type)
        .get()
    )
  }

  /**
  *
  */
  export function tooManyCommands(name: string, maximum: number): UnidocKissValidatorOutput {
    return UnidocKissValidator.output.message(
      UnidocKissValidator.output.message.builder()
        .setType(TooManyCommands.TYPE)
        .setCode(TooManyCommands.CODE)
        .setData(TooManyCommands.Data.NAME, name)
        .setData(TooManyCommands.Data.MAXIMUM, maximum)
        .get()
    )
  }

  /**
  *
  */
  export function duplicatedCommand(name: string): UnidocKissValidatorOutput {
    return tooManyCommands(name, 1)
  }
}

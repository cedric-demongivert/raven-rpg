import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

export type TypeValidator<> = (
  (() => UnidocKissValidator) & {
    /**
    *
    */
    readonly type: string
  }
)

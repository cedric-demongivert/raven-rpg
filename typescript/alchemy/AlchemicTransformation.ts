export type AlchemicTransformation = number

export namespace AlchemicTransformation {
  export const INFUSION : AlchemicTransformation = 0
  export const DECOCTION : AlchemicTransformation = 1
  export const MACERATION : AlchemicTransformation = 2
  export const PERCOLATION : AlchemicTransformation = 3
  export const DISTILLATION : AlchemicTransformation = 4
  export const DILLUTION : AlchemicTransformation = 5
  export const CONCENTRATION : AlchemicTransformation = 6
  export const REDUCTION : AlchemicTransformation = 7

  export const ALL : AlchemicTransformation[] = [
    INFUSION,
    DECOCTION,
    MACERATION,
    PERCOLATION,
    DISTILLATION,
    DILLUTION,
    CONCENTRATION,
    REDUCTION
  ]

  export function toString (transformation : AlchemicTransformation) : string {
    switch (transformation) {
      case INFUSION      : return 'INFUSION'
      case DECOCTION     : return 'DECOCTION'
      case MACERATION    : return 'MACERATION'
      case PERCOLATION   : return 'PERCOLATION'
      case DISTILLATION  : return 'DISTILLATION'
      case DILLUTION     : return 'DILLUTION'
      case CONCENTRATION : return 'CONCENTRATION'
      case REDUCTION     : return 'REDUCTION'
      default            : return undefined
    }
  }

  export function toFrench (transformation : AlchemicTransformation) : string {
    switch (transformation) {
      case INFUSION      : return 'infusion'
      case DECOCTION     : return 'décoction'
      case MACERATION    : return 'macération'
      case PERCOLATION   : return 'percolation'
      case DISTILLATION  : return 'distillation'
      case DILLUTION     : return 'dillution'
      case CONCENTRATION : return 'concentration'
      case REDUCTION     : return 'réduction'
      default            : return undefined
    }
  }

}

import { StatsBase } from './StatsBase'

export interface BigIntStats extends StatsBase<bigint> {
  /**
  *
  */
  atimeNs: bigint

  /**
  *
  */
  mtimeNs: bigint

  /**
  *
  */
  ctimeNs: bigint

  /**
  *
  */
  birthtimeNs: bigint
}

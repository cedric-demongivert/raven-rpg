import { Comparable } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReduction } from "@cedric-demongivert/unidoc"

import { CorvusFloat } from "./CorvusFloat"
import { CorvusInteger } from "./CorvusInteger"
import { CorvusOptional } from "./CorvusOptional"
import { CorvusRequired } from "./CorvusRequired"
import { CorvusString } from "./CorvusString"
import { CorvusToken } from "./CorvusToken"

/**
 * 
 */
export interface CorvusDataType<Type> extends Comparable {
  /**
   * 
   */
  reduce(): UnidocReduction<Type>

  /**
   * 
   */
  isInline(): boolean

  /**
   * 
   */
  toString(padding?: string): string
}

/**
 * 
 */
export namespace CorvusDataType {
  /**
   * 
   */
  export const integer = CorvusInteger.create

  /**
   * 
   */
  export const float = CorvusFloat.create

  /**
   * 
   */
  export const token = CorvusToken.create

  /**
   * 
   */
  export const string = CorvusString.create

  /**
   * 
   */
  export const optional = CorvusOptional.create

  /**
   * 
   */
  export const required = CorvusRequired.create
}
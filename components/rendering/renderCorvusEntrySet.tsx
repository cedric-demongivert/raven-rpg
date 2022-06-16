import React from 'react'
import { CorvusWeapon, CorvusWeaponType } from '../../typescript/data'
import { CorvusEntrySet } from '../../typescript/model'

import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusWeaponSet } from './renderCorvusWeaponSet'

/**
 * 
 */
export function renderCorvusEntrySet(context: CorvusTreeRenderingContext<CorvusEntrySet<unknown>>) : React.ReactElement {
  if (context.node.entryType.equals(CorvusWeaponType.INSTANCE)) {
    return renderCorvusWeaponSet(context as CorvusTreeRenderingContext<CorvusEntrySet<CorvusWeapon>>)
  }

  throw new Error('No renderer defined for entry sets of type ' + context.node.entryType.toString())
}
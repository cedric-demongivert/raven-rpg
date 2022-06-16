import React from 'react'
import { CorvusWeapon } from '../../typescript/data'
import { CorvusEntrySet } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusBlock } from './renderCorvusBlock'

function renderCorvusWeapon(context: CorvusWeapon, index: number) : React.ReactElement {
  return (
    <tr key={index}>
      <td>{context.name}</td>
      <td>{context.damageTypes}</td>
      <td>{context.damage}</td>
      <td>{context.criticalRange}/{context.criticalMultiplier}</td>
      <td>{context.charge}</td>
    </tr>
  )
}

/**
 * 
 */
export function renderCorvusWeaponSet(context: CorvusTreeRenderingContext<CorvusEntrySet<CorvusWeapon>>) : React.ReactElement {
  return renderCorvusBlock(
    context, 
    'corvus-entry-set', 
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Type</th>
          <th>Dégâts</th>
          <th>Critiques</th>
          <th>Charge</th>
        </tr>
      </thead>
      <tbody>
        { context.node.entries.map(renderCorvusWeapon) }
      </tbody>
    </table>
  )
}
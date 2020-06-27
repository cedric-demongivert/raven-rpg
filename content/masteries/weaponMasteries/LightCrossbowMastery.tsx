import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function LightCrossbowMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-light-crossbow</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Arbalète</SubjectKeyword>
      <SubjectKeyword>Arbalète légère</SubjectKeyword>
      <SubjectTitle>Arbalètes légères</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='instinct-modifier'>
          <thead>
            <tr>
              <th>Majeure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src='./images/characteristics/dexterity.svg'/></td>
            </tr>
          </tbody>
        </table>

        <p>
          L'arbalète légère est une arme à distance à la cadence de tir lente mais
          infligeant de bon dégâts avec une capacité de pénétration des armures.
          C'est une arme exotique associé à un style martial hybride de combat au
          corps à corps et à distance bien que sa recharge puisse rapidement poser
          un problème aux individus les moins préparés.
        </p>
      </SubjectContent>
    </Subject>
  )
}

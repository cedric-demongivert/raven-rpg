import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { Bonus } from '../../../components/Bonus'
import { Malus } from '../../../components/Malus'

export function Heavy () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-weapons-heavy</SubjectIdentifier>
      <SubjectTitle>Armes lourdes</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='table-1d table-vertical fill'>
          <thead>
            <tr>
              <th style={{width: '150px'}}>Arme</th>
              <th style={{width: '200px'}}>Type</th>
              <th style={{width: '175px'}}>Dégâts / Poids </th>
              <th style={{width: '100px'}}>Espérance</th>
              <th style={{width: '200px'}}>Blessure Lg./Gr.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Epée bâtarde</td>
              <td>Tranchant</td>
              <td className='text-center'>3D6(x2) / 7</td>
              <td className='text-center'>10.5</td>
              <td>10+ / 14+</td>
            </tr>
            <tr>
              <td>Espadon* (Zweihänder)</td>
              <td>Tranchant</td>
              <td className='text-center'>2D6 +1D8 (x3) / 9</td>
              <td className='text-center'>11.5</td>
              <td>10+ / 14+</td>
            </tr>
            <tr>
              <td>Marteau de guerre**</td>
              <td>Contondant</td>
              <td className='text-center'>2D6 + 1D6!(x3) / 9</td>
              <td className='text-center'>10.5</td>
              <td>9+ / 13+</td>
            </tr>
            <tr>
              <td>Hache d'arme</td>
              <td>Tranchant</td>
              <td className='text-center'>2D6 + 1D6A(x3) / 9</td>
              <td className='text-center'>10.5</td>
              <td>9+ / 13+</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>

        <p>
          <strong>*Espadon.</strong> L'espadon permet de frapper plusieurs
          adversaires à la fois.
        </p>

        <p>
          <strong>**Marteau de guerre.</strong> En cas de blessure grave le
          marteau de guerre projette l'adversaire.
        </p>
      </SubjectContent>
    </Subject>
  )
}

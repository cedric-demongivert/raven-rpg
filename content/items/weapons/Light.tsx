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

export function Light () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-weapons-light</SubjectIdentifier>
      <SubjectTitle>Armes légères</SubjectTitle>
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
              <th style={{width: '200px'}}>Blessure Lg. / Gr.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dague</td>
              <td>Tranchant</td>
              <td className='text-center'>1D8(x2) / 1</td>
              <td className='text-center'>4</td>
              <td>5+ / 7+</td>
            </tr>
            <tr>
              <td>Epée courte</td>
              <td>Tranchant</td>
              <td className='text-center'>2D4(x2) / 3</td>
              <td className='text-center'>5</td>
              <td>6+ / 8+</td>
            </tr>
            <tr>
              <td>Marteau</td>
              <td>Contondant</td>
              <td className='text-center'>1D6 + 2!(x2) / 4</td>
              <td className='text-center'>5</td>
              <td>6+ / 8+</td>
            </tr>
            <tr>
              <td>Hachette</td>
              <td>Tranchant</td>
              <td className='text-center'>1D6 + 2A(x2) / 4</td>
              <td className='text-center'>5</td>
              <td>6+ / 8+</td>
            </tr>
            <tr>
              <td>Morgenstern</td>
              <td>Contondant + Perforant</td>
              <td className='text-center'>1D6 + 1A + 1!(x2) / 4</td>
              <td className='text-center'>5</td>
              <td>6+ / 8+</td>
            </tr>
            <tr>
              <td>Lance*</td>
              <td>Perforant</td>
              <td className='text-center'>1D8 (19-20x3) / 3</td>
              <td className='text-center'>4</td>
              <td>6+ / 8+</td>
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
          <strong>*Lances.</strong> En cas de blessure grave la lance frappe
          l'adversaire dans une zone critique et ignore totalement l'armure.
        </p>
      </SubjectContent>
    </Subject>
  )
}

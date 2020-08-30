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

export function UnarmedCombat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-weapons-unarmed-combat</SubjectIdentifier>
      <SubjectTitle>Combat à main nues</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='table-1d table-vertical fill'>
          <thead>
            <tr>
              <th style={{width: '150px'}}>Arme</th>
              <th style={{width: '200px'}}>Type</th>
              <th style={{width: '175px'}}>Dégâts / Poids</th>
              <th style={{width: '100px'}}>Espérance</th>
              <th style={{width: '200px'}}>Blessure Lg. / Gr.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Poing</td>
              <td>Contondant</td>
              <td className='text-center'>1D4(x2) / 0</td>
              <td className='text-center'>2</td>
              <td>4+ / 8+</td>
            </tr>
            <tr>
              <td>Gantelet clouté</td>
              <td>Contondant</td>
              <td className='text-center'>1D6(x2) / 1</td>
              <td className='text-center'>3</td>
              <td>4+ / 8+</td>
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
      </SubjectContent>
    </Subject>
  )
}

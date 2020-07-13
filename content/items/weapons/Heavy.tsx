import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

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
              <th style={{width: '150px'}}>Dégâts</th>
              <th style={{width: '200px'}}>Type</th>
              <th style={{width: '100px'}}>Poid(s)</th>
              <th>Blessure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Epée longue</td>
              <td>15D/x2</td>
              <td>Tranchant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Espadon</td>
              <td>17D/x3</td>
              <td>Tranchant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Marteau de guerre</td>
              <td>9D + 6D!/x3</td>
              <td>Contondant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Hache d'arme</td>
              <td>9D + 6DA/x2</td>
              <td>Tranchant</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

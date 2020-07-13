import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

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
              <th style={{width: '150px'}}>Dégâts</th>
              <th style={{width: '200px'}}>Type</th>
              <th style={{width: '100px'}}>Poid(s)</th>
              <th>Blessure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dague</td>
              <td>7D/x2</td>
              <td>Tranchant</td>
              <td></td>
            </tr>
            <tr>
              <td>Epée courte</td>
              <td>9D/x2</td>
              <td>Tranchant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Marteau</td>
              <td>7D + 2D!/x2</td>
              <td>Contondant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Hachette</td>
              <td>7D + 2DA/x2</td>
              <td>Tranchant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Morgenstern</td>
              <td>7D + 2D!/x2</td>
              <td>Contondant + Perforant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Lance</td>
              <td>7D/x4</td>
              <td>Perforant</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

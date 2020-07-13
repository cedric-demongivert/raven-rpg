import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

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
              <th style={{width: '150px'}}>Dégâts</th>
              <th style={{width: '200px'}}>Type</th>
              <th style={{width: '100px'}}>Poid(s)</th>
              <th>Blessure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Poing</td>
              <td>3D/x2</td>
              <td>Contondant</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Gantelet clouté</td>
              <td>5D/x2</td>
              <td>Contondant</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

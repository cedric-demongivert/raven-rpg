import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Distance () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-weapons-distance</SubjectIdentifier>
      <SubjectTitle>Projectiles</SubjectTitle>
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
              <td>Arbalète de poing</td>
              <td>7D + 3D!/x2</td>
              <td>Perforant</td>
              <td></td>
              <td>0.5 Tir / Round</td>
            </tr>
            <tr>
              <td>Arbalète légère</td>
              <td>10D + 4D!/x2</td>
              <td>Perforant</td>
              <td></td>
              <td>0.5 Tir / Round</td>
            </tr>
            <tr>
              <td>Arbalète lourde</td>
              <td>10D + 7D!/x2</td>
              <td>Perforant</td>
              <td></td>
              <td>0.5 Tir / Round</td>
            </tr>
            <tr>
              <td>Arc court</td>
              <td>8D/x2</td>
              <td>Perforant</td>
              <td></td>
              <td>1 Tir / Round</td>
            </tr>
            <tr>
              <td>Arc long</td>
              <td>10D + 5D!/x3</td>
              <td>Perforant</td>
              <td></td>
              <td>1 Tir / Round</td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

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
              <th style={{width: '200px'}}>Type / Cadence</th>
              <th style={{width: '175px'}}>Dégâts / Poids </th>
              <th style={{width: '100px'}}>Espérance</th>
              <th style={{width: '200px'}}>Blessure Lg. / Gr.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arbalète de poing</td>
              <td>Perforant / ½</td>
              <td className='text-center'>1D6 + 2!(x2) / 3</td>
              <td className='text-center'>5</td>
              <td>6+ / 8+</td>
            </tr>
            <tr>
              <td>Arbalète légère</td>
              <td>Perforant / ½</td>
              <td className='text-center'>2D6 + 1D6!(x2) / 5</td>
              <td className='text-center'>10.5</td>
              <td>10+ / 14+</td>
            </tr>
            <tr>
              <td>Arbalète lourde</td>
              <td>Perforant / ½</td>
              <td className='text-center'>3D6 + 2D6! (x2) / 9</td>
              <td className='text-center'>17.5</td>
              <td>14+ / 20+</td>
            </tr>
            <tr>
              <td>Arc court</td>
              <td>Perforant / 1</td>
              <td className='text-center'>1D8 (x2) / 4</td>
              <td className='text-center'>4</td>
              <td>5+ / 7+</td>
            </tr>
            <tr>
              <td>Arc long</td>
              <td>Perforant / 1</td>
              <td className='text-center'>2D6 +1D6!(x3) / 8</td>
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
      </SubjectContent>
    </Subject>
  )
}

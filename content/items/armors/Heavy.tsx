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
      <SubjectIdentifier>items-armors-heavy</SubjectIdentifier>
      <SubjectTitle>Armures lourdes</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='table-1d table-vertical fill'>
          <thead>
            <tr>
              <th style={{width: '200px'}}>Armure</th>
              <th style={{width: '100px'}}>Bonus</th>
              <th style={{width: '100px'}}>Poids</th>
              <th>Effets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Armure de plates</td>
              <td className='text-center'>+8</td>
              <td className='text-center'>10</td>
              <td rowSpan={3}>
                Dégâts des flèches transformés en dégâts contondant réduits de
                moitié. <br />
                Les dégâts tranchant légers et dégâts à mains nues sont nullifiés.
              </td>
            </tr>
            <tr>
              <td>Armure de plaques</td>
              <td className='text-center'>+10</td>
              <td className='text-center'>10</td>
            </tr>
            <tr>
              <td>Harnois</td>
              <td className='text-center'>+12</td>
              <td className='text-center'>9</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
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

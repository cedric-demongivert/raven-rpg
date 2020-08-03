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
              <th style={{width: '75px'}}>Qualité</th>
              <th style={{width: '175px'}}>Dégâts / Poids </th>
              <th style={{width: '200px'}}>Blessure Légère</th>
              <th style={{width: '200px'}}>Blessure Grave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Poing</td>
              <td>Contondant</td>
              <td className='text-center'>*</td>
              <td className='text-center'>1D4(x2) / 0</td>
              <td>4+ Contusion</td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan={5}>Gantelet clouté</td>
              <td rowSpan={5}>Contondant</td>
              <td className='text-center'> 0-4 </td>
              <td className='text-center'>1D6 <Malus>-2</Malus>(x2) / 1</td>
              <td rowSpan={5}>4+ Contusion</td>
              <td rowSpan={5}>8+ Fracture</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>1D6 <Malus>-1</Malus>(x2) / 1</td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>1D6(x2) / 1</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'>1D6 <Bonus>+1</Bonus>(x2) / 1</td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'>1D6 <Bonus>+2</Bonus>(x2) / 1</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
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

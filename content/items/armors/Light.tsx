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
      <SubjectIdentifier>items-armors-light</SubjectIdentifier>
      <SubjectTitle>Armures légères</SubjectTitle>
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
              <td>Armure matelassée</td>
              <td className='text-center'>+2</td>
              <td className='text-center'>3</td>
              <td></td>
            </tr>
            <tr>
              <td>Armure de cuir (souple)</td>
              <td className='text-center'>+1</td>
              <td className='text-center'>2</td>
              <td></td>
            </tr>
            <tr>
              <td>Armure de cuir (rigide)</td>
              <td className='text-center'>+2</td>
              <td className='text-center'>3</td>
              <td></td>
            </tr>
            <tr>
              <td>Armure de cuir (cloutée)</td>
              <td className='text-center'>+3</td>
              <td className='text-center'>4</td>
              <td></td>
            </tr>
            <tr>
              <td>Chemise de mailles</td>
              <td className='text-center'>+3</td>
              <td className='text-center'>4</td>
              <td>
                Remplace une armure intermédiaire. <br/>
                Inefficace en cas de critique. <br/>
                Dégâts tranchants légers et dégâts à mains nues réduit de moitié.
              </td>
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

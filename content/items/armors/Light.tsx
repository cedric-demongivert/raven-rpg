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
              <th colSpan={5}>Points / Poids par qualité</th>
              <th>Effets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Armure matelassée</td>
              <td className='text-center'><Malus>+0</Malus> / 3</td>
              <td className='text-center'><Malus>+1</Malus> / 3</td>
              <td className='text-center'>+2 / 3</td>
              <td className='text-center'>+2 / <Bonus>2</Bonus></td>
              <td className='text-center'><Bonus>+3</Bonus> / <Bonus>2</Bonus></td>
              <td></td>
            </tr>
            <tr>
              <td>Armure de cuir (souple)</td>
              <td className='text-center'><Malus>+0</Malus> / 2</td>
              <td className='text-center'><Malus>+0</Malus> / 2</td>
              <td className='text-center'>+1 / 2</td>
              <td className='text-center'><Bonus>+2</Bonus> / 2</td>
              <td className='text-center'><Bonus>+2</Bonus> / <Bonus>1</Bonus></td>
              <td></td>
            </tr>
            <tr>
              <td>Armure de cuir (rigide)</td>
              <td className='text-center'><Malus>+0</Malus> / 3</td>
              <td className='text-center'><Malus>+1</Malus> / 3</td>
              <td className='text-center'>+2 / 3</td>
              <td className='text-center'><Bonus>+3</Bonus> / 3</td>
              <td className='text-center'><Bonus>+3</Bonus> / <Bonus>2</Bonus></td>
              <td></td>
            </tr>
            <tr>
              <td>Armure de cuir (cloutée)</td>
              <td className='text-center'><Malus>+1</Malus> / <Malus>5</Malus></td>
              <td className='text-center'><Malus>+2</Malus> / 4</td>
              <td className='text-center'>+3 / 4</td>
              <td className='text-center'><Bonus>+4</Bonus> / 4</td>
              <td className='text-center'><Bonus>+4</Bonus> / <Bonus>3</Bonus></td>
              <td></td>
            </tr>
            <tr>
              <td>Chemise de mailles</td>
              <td className='text-center'><Malus>+1</Malus> / 4</td>
              <td className='text-center'><Malus>+2</Malus> / 4</td>
              <td className='text-center'>+3 / 4</td>
              <td className='text-center'><Bonus>+4</Bonus> / 4</td>
              <td className='text-center'><Bonus>+5</Bonus> / 4</td>
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
              <th className='text-center' style={{width: '75px'}}>0 - 4</th>
              <th className='text-center' style={{width: '75px'}}>5 - 9</th>
              <th className='text-center' style={{width: '75px'}}>10 - 14</th>
              <th className='text-center' style={{width: '75px'}}>15 - 19</th>
              <th className='text-center' style={{width: '75px'}}>20+</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </SubjectContent>
    </Subject>
  )
}

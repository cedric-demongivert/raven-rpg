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
              <th colSpan={5}>Points / Poids par qualité</th>
              <th>Effets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Armure de plates</td>
              <td className='text-center'><Malus>+7</Malus> / <Malus>14</Malus></td>
              <td className='text-center'>+8 / <Malus>14</Malus></td>
              <td className='text-center'>+8 / 13</td>
              <td className='text-center'><Bonus>+9</Bonus> / <Bonus>12</Bonus></td>
              <td className='text-center'><Bonus>+9</Bonus> / <Bonus>10</Bonus></td>
              <td rowSpan={3}>
                Dégâts des flèches transformés en dégâts contondant réduits de
                moitié. <br />
                Les dégâts tranchant légers et dégâts à mains nues sont nullifiés.
              </td>
            </tr>
            <tr>
              <td>Armure de plaques</td>
              <td className='text-center'><Malus>+8</Malus> / <Malus>14</Malus></td>
              <td className='text-center'><Malus>+9</Malus> / 13</td>
              <td className='text-center'>+10 / 13</td>
              <td className='text-center'>+10 / <Bonus>12</Bonus></td>
              <td className='text-center'>+10 / <Bonus>10</Bonus></td>
            </tr>
            <tr>
              <td>Harnois</td>
              <td className='text-center'><Malus>+9</Malus> / <Malus>14</Malus></td>
              <td className='text-center'><Malus>+10</Malus> / <Malus>13</Malus></td>
              <td className='text-center'>+12 / 12</td>
              <td className='text-center'>+12 / <Bonus>10</Bonus></td>
              <td className='text-center'>+12 / <Bonus>10</Bonus></td>
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
              <th></th>
            </tr>
          </tfoot>
        </table>
      </SubjectContent>
    </Subject>
  )
}

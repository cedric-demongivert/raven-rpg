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
      <SubjectIdentifier>items-weapons-heavy</SubjectIdentifier>
      <SubjectTitle>Armes lourdes</SubjectTitle>
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
              <td rowSpan={5}>Epée longue</td>
              <td rowSpan={5}>Tranchant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>11D</Malus>(x2) / <Malus>11</Malus></td>
              <td rowSpan={5}>9+ Plaie superficielle</td>
              <td rowSpan={5}>13+ Plaie profonde <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'><Malus>13D</Malus>(x2) / <Malus>10</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>15D(x2) / 9</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>16D</Bonus>(x2) / <Bonus>8</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>17D</Bonus>(x2) / <Bonus>7</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Espadon</td>
              <td rowSpan={5}>Tranchant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>13D</Malus>(x3) / <Malus>13</Malus></td>
              <td rowSpan={5}>10+ Plaie superficielle</td>
              <td rowSpan={5}>14+ Plaie profonde <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'><Malus>15D</Malus>(x3) / <Malus>12</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>17D(x3) / 11</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>18D</Bonus>(x3) / <Bonus>10</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>18D</Bonus>(x3) / <Bonus>9</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Marteau de guerre</td>
              <td rowSpan={5}>Contondant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>8D</Malus> + <Malus>5D!</Malus>(x3) / <Malus>11</Malus></td>
              <td rowSpan={5}>9+ Contusion</td>
              <td rowSpan={5}>13+ Fracture <br/> Projection DD10 FRC</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'><Malus>8D</Malus> + 6D!(x3) / <Malus> 11</Malus> </td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>9D + 6D!(x3) / 10</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>10D</Bonus> + 6D!(x3) / <Bonus>9</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>10D</Bonus> + <Bonus>7D!</Bonus>(x3) / <Bonus>8</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Hache d'arme</td>
              <td rowSpan={5}>Tranchant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>8D</Malus> + <Malus>5DA</Malus>(x2) / <Malus>11</Malus></td>
              <td rowSpan={5}>9+ Plaie superficielle</td>
              <td rowSpan={5}>13+ Plaie profonde <br/> Saignement DD10 CNT <br/> Mise à terre DD10 FRC</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'><Malus>8D</Malus> + 6DA(x2) / <Malus> 11</Malus> </td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>9D + 6DA(x2) / 10</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>10D</Bonus> + 6DA(x2) / <Bonus>9</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>10D</Bonus> + <Bonus>7DA</Bonus>(x2) / <Bonus>8</Bonus></td>
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

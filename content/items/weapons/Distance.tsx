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
              <th style={{width: '200px'}}>Type et cadence</th>
              <th style={{width: '75px'}}>Qualité</th>
              <th style={{width: '175px'}}>Dégâts / Poids </th>
              <th style={{width: '200px'}}>Blessure Légère</th>
              <th style={{width: '200px'}}>Blessure Grave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={5}>Arbalète de poing</td>
              <td rowSpan={5}>Perforant <br/> 0.5 Tir / Round</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>6D</Malus> + <Malus>2D!</Malus>(x2) / <Malus>5</Malus></td>
              <td rowSpan={5}>7+ Plaie</td>
              <td rowSpan={5}>9+ Plaie profonde <br/> Ignore l'armure (!) <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>7D + <Malus>2D!</Malus>(x2) / <Malus>5</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>7D + 3D!(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>8D</Bonus> + 3D!(x2) / <Bonus>3</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>8D</Bonus> + <Bonus>4D!</Bonus>(x2) / <Bonus>2</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Arbalète légère</td>
              <td rowSpan={5}>Perforant <br/> 0.5 Tir / Round</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>9D</Malus> + <Malus>3D!</Malus>(x2) / <Malus>6</Malus></td>
              <td rowSpan={5}>9+ Plaie</td>
              <td rowSpan={5}>12+ Plaie profonde <br/> Ignore l'armure (!) <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>10D + <Malus>3D!</Malus>(x2) / <Malus>6</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>10D + 4D!(x2) / 5</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>11D</Bonus> + 4D!(x2) / <Bonus>4</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>11D</Bonus> + <Bonus>5D!</Bonus>(x2) / <Bonus>4</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Arbalète lourde</td>
              <td rowSpan={5}>Perforant <br/> 0.5 Tir / Round</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>8D</Malus> + <Malus>5D!</Malus>(x2) / <Malus>12</Malus></td>
              <td rowSpan={5}>11+ Plaie</td>
              <td rowSpan={5}>14+ Plaie profonde <br/> Ignore l'armure (!) <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'><Malus>9D</Malus> + <Malus>6D!</Malus>(x2) / <Malus>11</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>10D + 7D!(x2) / 10</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>11D</Bonus> + 7D!(x2) / <Bonus>9</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>11D</Bonus> + <Bonus>8D!</Bonus>(x2) / <Bonus>9</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Arc court</td>
              <td rowSpan={5}>Perforant <br/> 1 Tir / Round</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>6D</Malus>(x2) / <Malus>6</Malus></td>
              <td rowSpan={5}>5+ Plaie</td>
              <td rowSpan={5}>7+ Plaie profonde <br/> Ignore l'armure (!) <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'><Malus>7D</Malus>(x2) / <Malus>6</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>8D(x2) / 5</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>9D</Bonus>(x2) / <Bonus>4</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>9D</Bonus> + <Bonus>1D!</Bonus>(x2) / <Bonus>4</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Arc long</td>
              <td rowSpan={5}>Perforant <br/> 1 Tir / Round</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'><Malus>8D</Malus> + <Malus>4D!</Malus>(x3) / <Malus>11</Malus></td>
              <td rowSpan={5}>9+ Plaie</td>
              <td rowSpan={5}>13+ Plaie profonde <br/> Ignore l'armure (!) <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'><Malus>9D</Malus> + 5D!(x3) / <Malus>11</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>10D + 5D!(x3) / 10</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'><Bonus>11D</Bonus> + 5D!(x3) / <Bonus>9</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'><Bonus>11D</Bonus> + <Bonus>6D!</Bonus>(x3) / <Bonus>9</Bonus></td>
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

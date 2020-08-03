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
      <SubjectIdentifier>items-weapons-light</SubjectIdentifier>
      <SubjectTitle>Armes légères</SubjectTitle>
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
              <td rowSpan={5}>Dague</td>
              <td rowSpan={5}>Tranchant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'>1D8 <Malus>-2</Malus>(x2) / 2</td>
              <td rowSpan={5}>5+ Plaie superficielle</td>
              <td rowSpan={5}>7+ Plaie profonde <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>1D8 <Malus>-1</Malus>(x2) / 2</td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>1D8(x2) / 2</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'>1D8 <Bonus>+1</Bonus>(x2) / 2</td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'>1D8 <Bonus>+2</Bonus>(x2) / 2</td>
            </tr>
            <tr>
              <td rowSpan={5}>Epée courte</td>
              <td rowSpan={5}>Tranchant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'>2D4 <Malus>-2</Malus>(x2) / <Malus>5</Malus></td>
              <td rowSpan={5}>6+ Plaie superficielle</td>
              <td rowSpan={5}>8+ Plaie profonde <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>2D4 <Malus>-1</Malus>(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>2D4(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'>2D4 <Bonus>+1</Bonus>(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'>2D4 <Bonus>+2</Bonus>(x2) / <Bonus>3</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Marteau</td>
              <td rowSpan={5}>Contondant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'>1D6 <Malus>-1</Malus> <Malus>+1!</Malus>(x2) / <Malus>5</Malus></td>
              <td rowSpan={5}>6+ Contusion</td>
              <td rowSpan={5}>
               8+ <br />
               Si armure physique {'<'} 5 <br/>
               Fracture <br />
               Sinon <br />
               Contusion et dégâts bruts x2
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>1D6 <Malus>-1</Malus> +2!(x2) / <Malus>5</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>1D6 + 2!(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'>1D6 <Bonus>+1</Bonus> +2!(x2) / <Bonus>3</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'>1D6 <Bonus>+2</Bonus> +2!(x2) / <Bonus>3</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Hachette</td>
              <td rowSpan={5}>Tranchant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'>1D6 <Malus>-1</Malus> <Malus>+1A</Malus>(x2) / <Malus>5</Malus></td>
              <td rowSpan={5}>6+ Plaie superficielle</td>
              <td rowSpan={5}>8+ Plaie profonde <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>1D6 <Malus>-1</Malus> +2A(x2) / <Malus>5</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>1D6 + 2A(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'>1D6 <Bonus>+1</Bonus> +2A(x2) / <Bonus>3</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'>1D6 <Bonus>+2</Bonus> +2A(x2) / <Bonus>3</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Morgenstern</td>
              <td rowSpan={5}>Contondant + Perforant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'>1D6 <Malus>-1</Malus> +1! <Malus>+0A</Malus>(x2) / <Malus>5</Malus></td>
              <td rowSpan={5}>6+ contusion</td>
              <td rowSpan={5}>
                8+ <br />
                Si armure physique {'<'} 5 <br/>
                Fracture <br />
                Sinon <br />
                Contusion et dégâts bruts x2
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>1D6 <Malus>-1</Malus> + 1A + 1!(x2) / <Malus>5</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>1D6 + 1A + 1!(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'>1D6 <Bonus>+1</Bonus> +1A +1!(x2) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'>1D6 <Bonus>+2</Bonus> +1A + 1!(x2) / <Bonus>3</Bonus></td>
            </tr>
            <tr>
              <td rowSpan={5}>Lance</td>
              <td rowSpan={5}>Perforant</td>
              <td className='text-center'>0-4</td>
              <td className='text-center'>1D6 <Malus>-1</Malus> (19-20<Malus>x2</Malus>) / <Malus>5</Malus></td>
              <td rowSpan={5}>6+ Plaie</td>
              <td rowSpan={5}>8+ Empalement <br/> Ignore l'armure <br/> Saignement DD10 CNT</td>
            </tr>
            <tr>
              <td className='text-center'> 5-9 </td>
              <td className='text-center'>1D6 (19-20<Malus>x2</Malus>) / <Malus>5</Malus></td>
            </tr>
            <tr>
              <td className='text-center'> 10-14 </td>
              <td className='text-center'>1D6 (19-20x3) / 4</td>
            </tr>
            <tr>
              <td className='text-center'> 15-19 </td>
              <td className='text-center'>1D6 <Bonus>+1</Bonus> (19-20x3) / <Bonus>4</Bonus></td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td className='text-center'>1D6 <Bonus>+2</Bonus> (19-20x3) / <Bonus>3</Bonus></td>
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

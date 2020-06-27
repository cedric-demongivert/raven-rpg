import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { Table2D } from '../../../components/table/Table2D'

function range (value : number) : number[] {
  const result : number[] = []

  for (let index = 0; index <= value; ++index) {
    result.push(index)
  }

  return result
}

export function AdversialTestRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-adversial-test</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Résolution</SubjectKeyword>
      <SubjectKeyword>Résolution par opposition</SubjectKeyword>
      <SubjectTitle>Résolution par opposition</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La résolution par opposition décide de l'issue d'une confrontation entre
          deux éléments du récit. C'est le test type pour résoudre le succès des
          attaques d'un épéiste ou la résistance d'une serrure à une tentative de
          crochetage.
        </p>

        <p>
          Le joueur qui lance les dés est dit acteur de la résolution et c'est de
          son point de vue que les chances de succès sont calculées. Le joueur qui
          subit le test est dit opposant à la résolution. Un joueur est toujours
          acteur de la résolution lorsqu'il se confronte à un élément du récit. Dans
          le cas où deux joueurs se confrontent, l'acteur est décidé d'un commun
          accord ou à pile ou face. Finalement, si deux éléments du récit
          interagissent entre-eux, c'est au maître du jeu de répartir les rôles.
        </p>

        <p>
          Une résolution par opposition compare une compétence de l'acteur appelée
          compétence offensive à une compétence de l'opposant dite compétence
          défensive. Pour que l'issue du test soit favorable pour l'acteur celui-ci
          doit obtenir un score inférieur ou égal à son seuil de succès sur un dé
          100. Le seuil de succès est la différence entre la compétence offensive et
          la compétence défensive multipliée par 5 et ajoutée à une constante de 50.
          Par exemple un personnage avec une compétence de 10 en discrétion tentant
          de se faire discret en escaladant une muraille surveillée par un garde
          ayant une compétence de 12 en perception aura un seuil de succès de 40%.
          Et ce sera toujours au joueur de résoudre le test.
        </p>

        <table className='table-1d'>
          <tbody>
            <tr>
              <td style={{width: '35px'}}>  5<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}>  5<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 10<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 15<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 20<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 25<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 30<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 35<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 40<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 45<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 50<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 55<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 60<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 65<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 70<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 75<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 80<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 85<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 90<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 95<span className='percent'>%</span> </td>
              <td style={{width: '35px'}}> 95<span className='percent'>%</span> </td>
            </tr>
            <tr>
              <th> -∞ </th>
              <th> -9 </th>
              <th> -8 </th>
              <th> -7 </th>
              <th> -6 </th>
              <th> -5 </th>
              <th> -4 </th>
              <th> -3 </th>
              <th> -2 </th>
              <th> -1 </th>
              <th>  0 </th>
              <th> +1 </th>
              <th> +2 </th>
              <th> +3 </th>
              <th> +4 </th>
              <th> +5 </th>
              <th> +6 </th>
              <th> +7 </th>
              <th> +8 </th>
              <th> +9 </th>
              <th> +∞ </th>
            </tr>
          </tbody>
        </table>

        <Table2D className='text-center'>
          {
            range(20).map(function renderRow (index : number) : ReactNode {
              return (
                <Table2D.Row key={index}>
                  <Table2D.Cell heading>{index}</Table2D.Cell>
                  {
                    range(20).map((other : number) : ReactNode => (
                      <Table2D.Cell key={other}>
                        {Math.min(Math.max(index - other, -9), +9) * 5 + 50}
                        <span className='percent'>%</span>
                      </Table2D.Cell>
                    ))
                  }
                </Table2D.Row>
              )
            }).reverse()
          }
          <Table2D.Row>
            <Table2D.Cell heading width='35px' />
            {
              range(20).map((index : number) : ReactNode => (
                <Table2D.Cell key={index} heading width='35px'>
                  {index}
                </Table2D.Cell>
              ))
            }
          </Table2D.Row>
        </Table2D>
      </SubjectContent>
    </Subject>
  )
}

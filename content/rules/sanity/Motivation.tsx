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

function printrange (a : number, b : number) : string {
  return a === b ? a.toString() : a + ' - ' + b
}

export function Motivation () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-motivation</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Motivation, démotivation et démoralisation</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Motivation.</em> La motivation est un puissant moteur lorsqu'il
          s'agit de puiser les ressources nécéssaires pour vaincre. Un
          personnage est motivé s'il possède un nombre de points de volonté
          supérieur ou égal aux 3 quarts de son score de contrôle. Dans une
          telle situation, le personnage gagne deux points bonus à l'ensemble de
          ses jets quels qu'ils soient.
        </p>

        <p>
          <em>Démotivation.</em> La démotivation est au contraire un frein à
          toute chose. Un personnage est démotivé s'il possède un nombre de
          points de volonté strictement inférieur à la moitiée de son score de
          contrôle. Dans une telle situation, le personnage subit un point de
          malus à l'ensemble de ses jets quels qu'ils soient.
        </p>

        <p>
          <em>Démoralisation.</em> La démoralisation est le dernier stage de
          la démotivation, le personnage ce voit alors sombrer peut à peut dans
          le désespoir le plus absolu. Un personnage est démoralisé s'il possède
          un nombre de points de volonté strictement inférieur au quart de son
          score de contrôle. Dans une telle situation, le personnage subit deux
          point de malus à l'ensemble de ses jets quels qu'ils soient.
        </p>

        <table className='table-1d table-vertical text-center' style={{width: '700px'}}>
          <thead>
            <tr>
              <Table2D.Cell heading width='100px'>Contrôle</Table2D.Cell>
              <Table2D.Cell heading width='150px'>Démoralisation</Table2D.Cell>
              <Table2D.Cell heading width='150px'>Démotivation</Table2D.Cell>
              <Table2D.Cell heading width='150px'>État normal</Table2D.Cell>
              <Table2D.Cell heading width='150px'>Motivation</Table2D.Cell>
            </tr>
          </thead>
          <tbody>
            <Table2D.Row>
              <Table2D.Cell> 0 </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
            </Table2D.Row>
            <Table2D.Row>
              <Table2D.Cell> 1 </Table2D.Cell>
              <Table2D.Cell> 1 </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
            </Table2D.Row>
            <Table2D.Row>
              <Table2D.Cell> 2 </Table2D.Cell>
              <Table2D.Cell> 1 </Table2D.Cell>
              <Table2D.Cell> 2 </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
            </Table2D.Row>
            <Table2D.Row>
              <Table2D.Cell> 3 </Table2D.Cell>
              <Table2D.Cell> 1 </Table2D.Cell>
              <Table2D.Cell> 2 </Table2D.Cell>
              <Table2D.Cell> 3 </Table2D.Cell>
              <Table2D.Cell> ~ </Table2D.Cell>
            </Table2D.Row>
            <Table2D.Row>
              <Table2D.Cell> 4 </Table2D.Cell>
              <Table2D.Cell> 1 </Table2D.Cell>
              <Table2D.Cell> 2 </Table2D.Cell>
              <Table2D.Cell> 3 </Table2D.Cell>
              <Table2D.Cell> 4 </Table2D.Cell>
            </Table2D.Row>
          {
            range(15).map((index : number) => index + 5).map((index : number) : ReactNode => (
              <Table2D.Row key={index}>
                <Table2D.Cell>
                  {index}
                </Table2D.Cell>
                <Table2D.Cell>
                  {
                    printrange(
                      1,
                      index % 4 === 0 ? index / 4 - 1 : Math.floor(index / 4)
                    )
                  }
                </Table2D.Cell>
                <Table2D.Cell>
                  {
                    printrange(
                      Math.ceil(index / 4),
                      index % 2 === 0 ? index / 2 - 1 : Math.floor(index / 2)
                    )
                  }
                </Table2D.Cell>
                <Table2D.Cell>
                  {
                    printrange(
                      Math.ceil(index / 2),
                      index % 4 === 0 ? 3 * index / 4 - 1 : Math.floor(3 * index / 4)
                    )
                  }
                </Table2D.Cell>
                <Table2D.Cell>
                  {
                    printrange(
                      Math.ceil(3 * index / 4),
                      index
                    )
                  }
                </Table2D.Cell>
              </Table2D.Row>
            ))
          }
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

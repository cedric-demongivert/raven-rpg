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

export function SelfResolutionRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-self-resolution</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Résolution</SubjectKeyword>
      <SubjectKeyword>Auto-résolution</SubjectKeyword>
      <SubjectTitle>Auto-résolution</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Définition.</em> L'auto-résolution permet de mesurer la qualité
          de la réussite d'une action en fonction des capacités seules d'un
          personnage. C'est le test pour mesurer la dangerosité d'un piège
          installé, la fiabilité d'une serrure ou la qualité d'une production
          d'alchimie. L'auto-résolution produit donc un  degré de difficulté
          ou une qualité dépendamment que la production soit une épreuve ou
          un objet.
        </p>

        <p>
          <em>Acteur.</em> Le joueur qui lance les dés est dit acteur de
          l'auto-résolution. Il n'y a pas de joueur qui subisse le test dans
          le cadre d'une auto-résolution. Les degrés de difficulté définis dans
          la section concernant la résolution par opposition peuvent être
          utilisés par le maître du jeu pour réaliser un test d'auto-résolution.
        </p>

        <table className='table-1d' style={{width: 20 * 35 + 'px'}}>
          <tbody>
            <tr>
              <td> &lfloor;&divide;5&rfloor; </td>
              <td> &lfloor;&divide;4&rfloor; </td>
              <td> &lfloor;&divide;3&rfloor; </td>
              <td> &lfloor;&divide;3&rfloor; </td>
              <td> -2 </td>
              <td> -2 </td>
              <td> -1</td>
              <td> -1 </td>
              <td> +0</td>
              <td> +0</td>
              <td> +0</td>
              <td> +0</td>
              <td> +0</td>
              <td> +0</td>
              <td> +1</td>
              <td> +1</td>
              <td> +1</td>
              <td> +2</td>
              <td> +2</td>
              <td> +3</td>
            </tr>
            <tr>
              {
                range(19).map(function renderRow (index : number) : ReactNode {
                  return (
                    <th key={index} style={{width: '35px'}}>
                      {(index + 1)}
                    </th>
                  )
                })
              }
            </tr>
          </tbody>
        </table>

        <Table2D className='text-center' width={20 * 35 + 'px'}>
            {
              range(20).map(function renderRow (index : number) : ReactNode {
                return (
                  <Table2D.Row key={index}>
                    <Table2D.Cell heading>{index}</Table2D.Cell>
                    <Table2D.Cell>{Math.floor(index / 5)}</Table2D.Cell>
                    <Table2D.Cell>{Math.floor(index / 4)}</Table2D.Cell>
                    <Table2D.Cell>{Math.floor(index / 3)}</Table2D.Cell>
                    <Table2D.Cell>{Math.floor(index / 3)}</Table2D.Cell>
                    <Table2D.Cell>{Math.max(index - 2, 0)}</Table2D.Cell>
                    <Table2D.Cell>{Math.max(index - 2, 0)}</Table2D.Cell>
                    <Table2D.Cell>{Math.max(index - 1, 0)}</Table2D.Cell>
                    <Table2D.Cell>{Math.max(index - 1, 0)}</Table2D.Cell>
                    <Table2D.Cell>{index}</Table2D.Cell>
                    <Table2D.Cell>{index}</Table2D.Cell>
                    <Table2D.Cell>{index}</Table2D.Cell>
                    <Table2D.Cell>{index}</Table2D.Cell>
                    <Table2D.Cell>{index}</Table2D.Cell>
                    <Table2D.Cell>{index}</Table2D.Cell>
                    <Table2D.Cell>{index + 1}</Table2D.Cell>
                    <Table2D.Cell>{index + 1}</Table2D.Cell>
                    <Table2D.Cell>{index + 1}</Table2D.Cell>
                    <Table2D.Cell>{index + 2}</Table2D.Cell>
                    <Table2D.Cell>{index + 2}</Table2D.Cell>
                    <Table2D.Cell>{index + 3}</Table2D.Cell>
                  </Table2D.Row>
                )
              }).reverse()
            }
            <Table2D.Row>
              <th style={{width: '35px'}}></th>
              {
                range(19).map(function renderRow (index : number) : ReactNode {
                  return (
                    <Table2D.Cell heading key={index} width='35px'>
                      {index + 1}
                    </Table2D.Cell>
                  )
                })
              }
            </Table2D.Row>
        </Table2D>

      </SubjectContent>
    </Subject>
  )
}

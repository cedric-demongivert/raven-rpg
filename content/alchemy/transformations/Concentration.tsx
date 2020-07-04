import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

function range (count : number) : number[] {
  const result : number[] = []

  for (let index = 0; index < count; ++index) {
    result.push(index)
  }

  return result
}

export function Concentration () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-concentration</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Concentration</SubjectKeyword>
      <SubjectTitle>Concentration</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La concentration est une transformation qui permet de sommer les
          effets de deux matière liquide ayant les mêmes propriétés alchimiques.
          La qualité d'une concentration est la moyenne des qualités des
          produits concentrés arrondie à l'inférieur. La concentration de deux
          produits somme aussi le niveau d'intoxication de ceux-ci. Pour
          concentrer il faut uniquement une téhière et une source de chaleur
          suffisante pour réduire la quantité de solvant total.
        </p>

        <p>
          La concentration de deux produits nécéssite un test d'opposition
          entre la connaissance de la concentration de son utilisateur et un
          degré de difficulté équivalent à 4 fois la concentration actuelle.
        </p>

        <table className='table-1d'>
          <tbody>
            <tr>
              <td> Degré de difficulté</td>
              {
                range(10).map(function renderCell (index : number) : ReactElement {
                  return (
                    <td key={index}>
                      {(index + 1) * 5}
                    </td>
                  )
                })
              }
            </tr>
            <tr>
              <th style={{width: '200px'}}> Degré de concentration</th>
              {
                range(10).map(function renderCell (index : number) : ReactElement {
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
      </SubjectContent>
    </Subject>
  )
}

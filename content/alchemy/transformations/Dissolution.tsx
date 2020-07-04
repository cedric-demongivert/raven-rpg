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

export function Dissolution () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-dissolution</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Dissolution</SubjectKeyword>
      <SubjectTitle>Dissolution</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La dissolution est une transformation qui permet de produire un
          produit alchimique sous forme de liquide en mélangeant une matière
          dans un solvant. Le résultat d'une dissolution est, en fonction de la
          matière et du solvant soit une potion, soit un poison ou soit une
          huile.
        </p>

        <p>
          Pour dissoudre de la matière alchimique il faut réussir un test
          d'opposition entre la connaissance de la dissolution de l'alchimiste
          et un degré de difficulté égal au degré de difficulté de base du
          solvant additionné au degré de difficulté lié au nombre de propriétés
          que l'on tente de dissoudre.
        </p>

        <table className='table-1d'>
          <tbody>
            <tr>
              <td>Degré de difficulté</td>
              {
                range(10).map(function renderCell (index : number) : ReactElement {
                  return (
                    <td key={index}>
                      {(index + 1) * (index + 2) / 2}
                    </td>
                  )
                })
              }
            </tr>
            <tr>
              <th style={{width: '200px'}}>Nombre de propriétés</th>
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

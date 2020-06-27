import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function AcrobaticsMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-acrobatic</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Acrobatie</SubjectKeyword>
      <SubjectTitle>Acrobatie</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='instinct-modifier'>
          <thead>
            <tr>
              <th>Majeure</th>
              <th>Mineure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src='./images/characteristics/dexterity.svg' /></td>
              <td><img src='./images/characteristics/strength.svg' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La maîtrise de l'acrobatie apprécie la capacité à utiliser son corps de
          manière ingénieuse pour s'extirper d'une situation délicate. Sauter en
          travers d'un ravin, passer sous les jambes d'un adversaire ou courrir en
          terrain difficile sont des exemples de situation où un test d'acrobatie
          est nécéssaire.
        </p>

        <p>
          La maîtrise de l'acrobatie est complémentaire à la maîtrise de l'esquive
          et permet d'augmenter le nombre d'esquive disponible par round grâce aux
          atouts qui lui sont associés.
        </p>
      </SubjectContent>
    </Subject>
  )
}

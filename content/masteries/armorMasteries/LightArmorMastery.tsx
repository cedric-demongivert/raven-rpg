import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function LightArmorMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-armor-light-armor</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Armure</SubjectKeyword>
      <SubjectKeyword>Armure légère</SubjectKeyword>
      <SubjectTitle>Armures légères</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <table className='instinct-modifier'>
          <thead>
            <tr>
              <th>Majeure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src='./images/characteristics/dexterity.svg'/></td>
            </tr>
          </tbody>
        </table>

        <p>
          Cette maîtrise apprécie l'aisance d'un personnage vis-à-vis d'une certaine
          classe d'armure ainsi que des manoeuvres qui lui sont associé. Tous les 5
          points investi dans la maîtrise d'une certaine classe d'armure permet de
          profiter d'un bonus d'un point d'armure supplémentaire quand une armure du
          type considéré est équipée par le personnage.
        </p>

        <p>
          En outre, une bonne spécialisation est essentielle pour débloquer des
          effets uniques liés au style martial associé à la classe d'armure que la
          maîtrise représente.
        </p>
      </SubjectContent>
    </Subject>
  )
}

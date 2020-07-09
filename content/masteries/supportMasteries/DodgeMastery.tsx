import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { Data } from '../../../components/data/Data'
import { FeatLinks } from '../../../components/feat/FeatLinks'
import { Feat } from '../../../typescript/feat/Feat'

import { ALL } from '../../../typescript/data/feat'

export function DodgeMastery () : ReactElement {
  const feats : Feat[] = ALL.filter((x : Feat) => x.keywords.has('esquive'))

  feats.sort(function (a : Feat, b : Feat) : number {
    return a.name.localeCompare(b.name)
  })

  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-dodge</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Esquive</SubjectKeyword>
      <SubjectTitle>Esquive</SubjectTitle>
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
              <td><img src='./images/characteristics/dexterity.svg' width='100' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La maîtrise de l'esquive apprécie la capacité d'un personnage à se mouvoir
          dans l'objectif d'échapper à une menace. L'esquive est une maîtrise
          importante pour les combats car elle permet d'éviter un coup par tour tout
          en se repositionnant. Elle est aussi la seule compétence permettant
          d'échapper à certains pièges ou sortilèges.
        </p>

        <p>
          L'esquive se joue toujours en opposition avec le degré de difficulté de la
          menace. Esquiver une attaque influera les chances de succès de l'attaquant
          vis-à-vis de sa propre maîtrise de son arme. Esquiver un sort ou un piège
          influera ses chances de succès vis-à-vis de son propre degré de
          difficulté. Le succès d'une esquive peut être mitigé dans certaines
          situations.
        </p>

        <Data>
          <Data.Header>Atouts</Data.Header>
          <FeatLinks>{ feats }</FeatLinks>
        </Data>
      </SubjectContent>
    </Subject>
  )
}

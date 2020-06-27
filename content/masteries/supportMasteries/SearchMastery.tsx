import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function SearchMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-misc-search</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Utilitaire</SubjectKeyword>
      <SubjectKeyword>Fouille</SubjectKeyword>
      <SubjectTitle>Fouille</SubjectTitle>
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
              <td><img src='./images/characteristics/luck.svg' width='100' /></td>
            </tr>
          </tbody>
        </table>

        <p>
          La compétence fouille évalue la capacité d'un personnage à trouver
          ce qu'il cherche dans un environnement étranger. Un personnage avec
          une bonne compétence fouille est donc capable d'estimer précisément
          si un document est présent dans une pièce qu'il vient de forcer, de
          délester un cadavre de ses biens de valeur en un temps record ou de
          rechercher d'éventuels passages secrets et pièges.
        </p>

        <p>
          La compétence fouille se joue toujours en opposition du degré de
          difficulté de l'objet ou du sujet recherché. Si le sujet de la
          fouille à été intentionellement dissimulé la fouille se joue contre
          le degré de succès de la tentative de dissimulation. Quand aux
          éléments en évidence ils doivnet toujours être portées à la
          connaissance du joueur.
        </p>
      </SubjectContent>
    </Subject>
  )
}

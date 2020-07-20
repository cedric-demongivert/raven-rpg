import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function OwlDance () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-owl-dance</SubjectIdentifier>
      <SubjectTitle>Danse du rapace</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <strong>Coût :</strong> 2
        </p>

        <table className="table-1d table-vertical">
          <thead>
            <tr>
              <th style={{width: '75px'}}> Bestialité </th>
              <th style={{width: '300px'}}> Effets </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center'> 0 </td>
              <td>
                <p>
                  <strong>Ouïe fine.</strong> Le personnage entend bien mieux
                  que la moyenne ce qui l'aide à mieux se positionner dans
                  l'espace et à entendre ce qui ce dit de bien plus loin.
                </p>

                <p>
                  Dextérité +1
                </p>

                <p>
                  Perception +2 quand il s'agit d'entendre.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Écoute asymétrique.</strong> La position des oreilles
                  du personnage est devenue asymétrique, une des deux oreilles
                  est plus basse que l'autre. Les oreilles sont bien plus
                  plaquées au crâne. Le personnage commence à percevoir son
                  environnement par l'audition et à placer certains éléments
                  dans l'espace.
                </p>

                <p>
                  Perception +4 quand il s'agit d'entendre.
                </p>

                <p>
                  Esquive +2
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Aigrettes naissantes.</strong> Un plumage naissant du
                  centre du crâne jusqu'aux oreilles sous la forme de deux
                  aigrettes naissantes permet au personnage de bien mieux guider
                  le son jusqu'à ces oreilles de rapace.
                </p>

                <p>
                  Perception +6 quand il s'agit d'entendre.
                </p>

                <p>
                  Esquive +4
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Aigrettes.</strong> La tête du personnage est montée
                  de deux grandes aigrettes de plumes qui de concert avec un
                  rafinement de son instinct lui permette quasiment de voir
                  grâce au son.
                </p>

                <p>
                  Perception +8 quand il s'agit d'entendre.
                </p>

                <p>
                  Esquive +6
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Danse du rapace.</strong> L'instinct du personnage est
                  tellement affuté qu'il est capable d'esquiver gratuitement une
                  attaque tous les deux rounds.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

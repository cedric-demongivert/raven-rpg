import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Skin () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-bear-skin</SubjectIdentifier>
      <SubjectTitle>Peau de bête</SubjectTitle>
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
                  <strong>Peau épaisse.</strong> La peau du personnage est plus
                  épaisse et absorbe un peut mieux les chocs.
                </p>

                <p>
                  Réduction des dégâts contondants de 1.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Cuir naissant.</strong> La peau du personnage
                  ressemble plus à du cuir qu'à une peau.
                </p>

                <p>
                  Réduction des dégâts contondants de 2.
                </p>

                <p>
                  Armure physique +1.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Cuir.</strong> La peau du personnage se comporte
                  commune une armure légère.
                </p>

                <p>
                  Armure physique +2.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Fourrure.</strong> Le personnage est couvert d'une
                  fine fourrure brune ou noire.
                </p>

                <p>
                  Armure physique +3.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Habit de l'ours.</strong> Le personnage porte une
                  véritable peau de bête.
                </p>

                <p>
                  Armure physique +4.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

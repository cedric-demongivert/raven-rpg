import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Morphology () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-bear-morphology</SubjectIdentifier>
      <SubjectTitle>Morphologie de géant</SubjectTitle>
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
                  <strong>Stature.</strong> Le corps du personnage est plus
                  grand et sa musculature est plus développée, au prix de repas
                  bien plus copieux qu'à l'ordinaire.
                </p>

                <p>
                  Constitution +2
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Musculature.</strong> La musculature du personnage
                  croît à vue d'oeil entraînant une légère déformation de son
                  corps.
                </p>

                <p>
                  Force + 1
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Géant.</strong> Le personnage à doublé de taille. Il
                  n'est plus possible de porter une armure si celle-ci n'a pas
                  été adaptée pour un brusque changement de taille.
                </p>

                <p>
                  PV * 2
                </p>

                <p>
                  Taille + 1
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Corps bestial.</strong> Le corps du personnage est
                  suffisamment déformé pour faire penser à celui d'un ours. En
                  plus de la taille et de la musculature celui-ci à pris une
                  masse de graisse supplémentaire. Seule les armures de qualité
                  18+ spécialement adaptée à la situation peuvent être portée
                  par ce personnage.
                </p>

                <p>
                  PV * 4
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Avatar de l'ours.</strong> La folie meurtrière du
                  personnage l'aide à supporter une quantitée mortelle de coups.
                </p>

                <p>
                  PV * 8
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

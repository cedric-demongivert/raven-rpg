import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function SilentCoat () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-owl-silent-coat</SubjectIdentifier>
      <SubjectTitle>Manteau d'air</SubjectTitle>
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
                  <strong>Perception de l'air.</strong> Les sens du personnage
                  sont bien plus développés que la moyenne. Il perçoit et
                  comprend bien mieux les mouvements d'airs et son environnement
                  ce qui l'aide à ce mouvoir sans aucun bruit.
                </p>

                <p>
                  Discrétion +2
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Cuir naissant.</strong> La peau du personnage est bien
                  plus épaisse et prend peut à peut la forme d'une couche de
                  cuir plus que de peau.
                </p>

                <p>
                  Réduction des dégâts contondants de 1.
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
                  <strong>Duvet.</strong> Le personnage est parcourut d'un duvet
                  de jeunes plumes capablent de dévier certains coups mal
                  portés.
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
                  <strong>Manteau silencieux</strong> Le corps du personnage est
                  couvert d'un manteau de plumes matures qui atténuent
                  grandement les frottements de son corps avec l'air.
                </p>

                <p>
                  Discrétion +4
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Avatar du hiboux</strong> L'instinct du personnage et
                  la spécialisation plus importante de certaines de ces plumes
                  lui permettent de ce mouvoir bien mieux dans l'espace.
                </p>

                <p>
                  Dextérité + 2
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

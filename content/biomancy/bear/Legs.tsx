import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Legs () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-bear-legs</SubjectIdentifier>
      <SubjectTitle>Course bestiale</SubjectTitle>
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
                  <strong>Musculature.</strong> Les muscles des jambes du
                  personnage sont plus développées que la moyenne.
                </p>

                <p>
                  Force +1
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Course.</strong> L'adaptation progressive des jambes
                  du personnage lui permet de ce mouvoir un peut plus
                  rapidement.
                </p>

                <p>
                  Mouvement +3m
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Course.</strong> L'adaptation progressive des jambes
                  du personnage lui permet de ce mouvoir un peut plus
                  rapidement.
                </p>

                <p>
                  Mouvement +6m
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Jambes d'ours.</strong> Les jambes du personnages
                  sont clairement hypertrophiées et il ne peut plus porter
                  d'armure qui n'ont pas été adapté au préalable.
                </p>

                <p>
                  <strong>Charge de l'ours.</strong> Quand le personnage charge
                  il peut ajouter aux dégâts portées son total de point de vie
                  présent divisé par 4.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Furie.</strong> L'instinct du personnage lui permet
                  de mieux charger ses adversaires.
                </p>

                <p>
                  <strong>Charge de l'ours.</strong> Quand le personnage charge
                  il peut ajouter aux dégâts portées son total de point de vie
                  présent divisé par 2.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

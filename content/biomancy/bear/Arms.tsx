import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Arms () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-bear-arms</SubjectIdentifier>
      <SubjectTitle>Pattes d'ours</SubjectTitle>
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
                  <strong>Musculature.</strong> Les muscles des bras du
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
                  <strong>Griffes naissantes.</strong> Les ongles du personnage
                  sont plus épais et coupants, ceux-ci peuvent être utilisés
                  pour griffer sans risque ces adversaires.
                </p>

                <p>
                  <strong>Griffure.</strong> Un personnage dans cet état peut
                  griffer ses adversaires ayant une armure inférieure à 5 points
                  pour 1D6 (x2) points de dégâts. La maîtrise instinctive de
                  cette arme naturelle est de 4 points plus modificateur de
                  dextérité. Cette maîtrise peut être remplacée par la maîtrise
                  du combat à main nue. Une griffure est toujours réalisable
                  dans le cas où le personnage est immobilisé par un aggresseur.
                  Cette arme ne peut pas être utilisée lors d'une attaque à
                  outrance.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Griffes d'ours.</strong> Les mains du personnage
                  sont totalement déformées et ses ongles sont devenus de
                  véritables griffes tranchantes. Il n'est plus possible de
                  manipuler des armes inadaptées à cette nouvelle morphologie
                  des mains.
                </p>

                <p>
                  <strong>Griffure.</strong> Un personnage dans cet état peut
                  griffer ses adversaires pour 1D8 +1 (x2) points de dégâts. La
                  maîtrise instinctive de cette arme naturelle est de 6 points
                  plus modificateur de dextérité. Cette maîtrise peut être
                  remplacée par la maîtrise du combat à main nue. Une griffure
                  est toujours réalisable dans le cas où le personnage est
                  immobilisé par un aggresseur. Les deux mains peuvent frapper
                  lors d'une attaque à outrance.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Bras de bête.</strong> Les bras du personnage sont
                  clairement hypertrophiés et les armures qui n'on pas été
                  adaptées à ce type de mutation ne peuvent plus être portées.
                </p>

                <p>
                  Force +1
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Force de l'ours</strong> L'affinement de l'instinct du
                  personnage améliore sa capacité à utiliser son corps et à
                  maximiser l'usage de ses bras.
                </p>

                <p>
                  Force +1
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

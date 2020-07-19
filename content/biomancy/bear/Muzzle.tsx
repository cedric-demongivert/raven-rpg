import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Muzzle () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-bear-muzzle</SubjectIdentifier>
      <SubjectTitle>Gueule d'ours</SubjectTitle>
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
                  <strong>Odorat.</strong> Le personnage possède un odorat bien
                  plus développé que la normale. Toute tentative de perception
                  basée sur l'odorat est sujet à un bonus de 5 points. Un
                  personnage avec ce trait peut sentir une odeur à 9 mètre de
                  portée, cette portée est divisée par deux si l'odeur est à
                  contre vent et multipliée par deux à l'inverse.
                </p>

                <p>
                  Un personnage avec odorat peut toujours tenter de pister une
                  cible dont il connait l'odeur en utilisant sa perception
                  plutôt que la compétence usuelle de pistage. L'eau et les
                  odeurs intenses peuvent perturber voir empêcher l'utilisation
                  de l'odorat d'un personnage. Un personnage avec odorat
                  percevant une puanteur hors norme doit réussir un jet de
                  constitution DD10 pour ne pas devenir nauséeux.
                </p>

                <p>
                  Un personnage ayant le trait odorat peut évaluer la nature de
                  l'origine des odeurs qu'il perçoit aussi bien qu'un être
                  humain normal peut estimer la nature d'un objet par sa forme
                  ou sa couleur. L'odorat ajoute un bonus de 5 points aux
                  tentatives d'identification des potions et poisons si ceux-ci
                  ont une odeur particulière.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Crocs.</strong> La dentition du personnage devient
                  plus animale, ses canines deviennent plus saillantes et ses
                  molaires plus puissantes. Un renforcement subtil de la
                  machoire permet au personnage de mordre ses adversaires.
                </p>

                <p>
                  <strong>Morsure.</strong> Un personnage dans cet état peut
                  mordre ses adversaires ayant une armure inférieure à 5 points
                  pour 5D (x2) points de dégâts. La maîtrise de la morsure est
                  de 5 points plus modificateur de dextérité. Une morsure est
                  toujours réalisable dans le cas où le personnage est
                  immobilisé par un aggresseur. Cette morsure ne peut pas être
                  utilisée lors d'une attaque à outrance.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Gueule naissante.</strong> La bouche du personnage
                  est suffisamment déformée pour laisser apparaitre une gueule
                  naissante d'ours. Celle-ci est incomplète mais facilite
                  déjà plus les morsures au détriment de la communication.
                </p>

                <p>
                  <strong>Morsure.</strong> Un personnage dans cet état
                  peut mordre ses adversaires ayant une armure inférieure à 5
                  points en infligeant 6D (x2) points de dégâts. La maîtrise de
                  la morsure est de 8 points plus modificateur de dextérité.
                  Cette morsure ne peut pas être utilisée lors d'une attaque à
                  outrance.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Gueule complète.</strong> Le personnage possède une
                  gueule d'ours complète. Mordre ces adversaire n'a jamais été
                  aussi naturel, mais il n'est plus possible de s'équiper d'un
                  casque qui n'a pas été adapté spécialement pour cet effet. La
                  parole est difficile.
                </p>

                <p>
                  <strong>Morsure.</strong> Un personnage dans cet état
                  peut mordre ses adversaires ayant une armure inférieure à 10
                  points en infligeant par la même occasion un total de 7D + 1DA
                  (x2) points de dégâts. La maîtrise de la morsure d'un
                  personnage dans cet état est de 12 points plus son
                  modificateur de dextérité. Le personnage peut tenter de placer
                  une morsure dans une attaque à outrance s'il le désire.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Rugissement.</strong> Le personnage peut tenter
                  d'insuffler la peur en rugissant et en prenant une pose
                  extrêmement aggressive. Contrôle contre DD8 pour fuite.
                  [Amélioration à venir avec le module de volonté]
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

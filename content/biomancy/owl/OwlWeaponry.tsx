import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function OwlWeaponry () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-owl-weaponry</SubjectIdentifier>
      <SubjectTitle>Bec et ongles</SubjectTitle>
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
                  Les doigts du personnage sont plus longs que la moyenne et ses
                  mais sont étrangement plus adaptées pour l'aider à escalader
                  les paroies ou pour nager.
                </p>

                <p>
                  Escalade +3
                </p>

                <p>
                  Natation +3
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Serres naissantes.</strong> Les mains du personnage
                  sont couvertes d'écailles et ses ongles sont plus épais et
                  solides. Le personnage peut toujours tenter de griffer ses
                  adversaires. La persistance d'un pouce opposable authorise
                  toujours à tenir des armes.
                </p>

                <p>
                  <strong>Griffure.</strong> Un personnage dans cet état peut
                  griffer ses adversaires pour 1D4 (x2) points de dégâts. La
                  maîtrise instinctive de cette arme naturelle est de 4 points
                  plus modificateur de dextérité. Cette maîtrise peut être
                  remplacée par la maîtrise du combat à main nue. Une griffure
                  est toujours réalisable dans le cas où le personnage est
                  immobilisé par un aggresseur. Les deux mains peuvent frapper
                  lors d'une attaque à outrance.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Serres.</strong> Les mains du personnage sont devenu
                  de véritables serres de rapace. Le personnage peut toujours
                  tenter de griffer ses adversaires. La persistance d'un pouce
                  opposable authorise toujours à tenir des armes mais celles-ci
                  doivent être spécialement conçue pour la nouvelle morphologie
                  de la main.
                </p>

                <p>
                  <strong>Griffure.</strong> Un personnage dans cet état peut
                  griffer ses adversaires pour 1D6 (x2) points de dégâts. La
                  maîtrise instinctive de cette arme naturelle est de 4 points
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
                  <strong>Bec.</strong> La bouche du personnage est devenu un
                  solide bec à la fois tranchant et perforant. Celui-ci peut lui
                  servir pour perforer certaines couches d'armures et venir
                  extraire directement des morceau de chair du corps de ses
                  énemis. Cette nouvelle morphologie ne lui permet cependant
                  plus de communiquer avec la parole.
                </p>

                <p>
                  <strong>Coup de bec.</strong> Un personnage dans cet état peut
                  tenter de perforer le corps de ses adversaires ses adversaires
                  pour 1D8 +1D4A (x2) points de dégâts. La maîtrise instinctive
                  de cette arme naturelle est de 8 points plus modificateur de
                  dextérité. Cette maîtrise peut être remplacée par la maîtrise
                  du combat à main nue. Un coup de bec est toujours réalisable
                  dans le cas où le personnage est immobilisé par un aggresseur.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Bec et ongles.</strong> Les pieds du personnage sont
                  aussi considérés comme des serres parfaitement utilisable pour
                  frapper ses adversaires.
                </p>

                <p>
                  Dextérité +1
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}

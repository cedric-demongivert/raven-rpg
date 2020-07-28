import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Heroism () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-heroism</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Héroïsme</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand le désespoir amène à une forme d'héroïsme, la victime doit alors
          choisir un comportement à adopter dans la liste suivante :
        </p>

        <p>
          <strong>Baroud d'honneur.</strong> Vous allez mourrir, certes, mais
          vous partirez en beauté. Quand un personnage décide de réaliser un
          baroud d'honneur il devient insensible et ne peut plus fuir le combat.
          Le personnage gagne 3D6 * 3 points de vie supplémentaire pour
          l'entièreté du combat, la limite de dégâts imposée par la constitution
          du personnage ne prime plus. Cependant celui-ci ne peut plus connaître
          exactement son nombre de points de vie. Si quand le combat est
          terminé, le personnage se retrouve avec un nombre de points de vie
          inférieur à zéro à cause de la perte des points de vie bonus, ceux-ci
          sont ramenés à zéro, le personnage sombre alors dans le coma est est
          l'objet de 1D4 blessures graves tirées au hasard. S'il sort indemme du
          baroud d'honneur, le personnage subit 1D4 blessures légères
          aléatoires.
        </p>
      </SubjectContent>
    </Subject>
  )
}

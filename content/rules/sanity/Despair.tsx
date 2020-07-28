import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Despair () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-despair</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Désespoir</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand la volonté du personnage atteind zéro points il est alors face
          au désespoir le plus absolu contre lequel il ne peut plus qu'adopter
          un comportement parfaitement irrationel pour continuer à tenir face à
          l'adversité. C'est exactement dans cette situation que l'esprit du
          personnage doit faire un choix entre un verser dans l'héroïsme ou la
          folie.
        </p>

        <p>
          Quand la volonté d'un personnage tombe a zéro, le joueur doit alors
          lancer un dé 20. Si le résultat obtenu est inférieur ou égal à 12
          points le joueur doit choisir une folie, et s'y tenir jusqu'à la fin
          du conflit. Si le score est strictement supérieur à 12 points, le
          joueur doit choisir un acte d'héroïsme et s'y tenir jusqu'à la fin du
          conflit. Il est toujours possible de ne pas faire de jet et de
          préférer aux affres du hasard la certitude de devoir choisir une
          folie.
        </p>

        <p>
          Les personnages non-joueurs, sauf contre indication, ne peuvent pas
          faire montre d'héroïsme et sombre immédiatement dans la folie si leur
          volonté tombe à zéro. C'est alors au maître du jeu, sauf indication
          spécifique, de choisir la nature de la folie qui frappe le personnage
          non-joueur.
        </p>
      </SubjectContent>
    </Subject>
  )
}

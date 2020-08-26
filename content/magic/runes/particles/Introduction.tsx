import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles-introduction</SubjectIdentifier>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          Les particules sont aux runes ce que les os sont au corps humain :
          elles n'ont aucun pouvoir en particulier si ce n'est celui de
          structurer le sortilège final. Pour ce faire, les particules se
          comportent comme des marqueurs au sein d'une phrase évocative : elles
          présentent de manière explicite la nature de la rune qui lui succède.
        </p>

        <p>
          Comme dit plus haut, l'astral est une langue agglutinante de type <a href='https://fr.wikipedia.org/wiki/Langue_SOV'>SOV</a> sans
          genre et sans nombre. L'évocation astrale minimale peut par ailleurs
          ne comporter aucune particule, dans un tel cas, la rune dessinée est
          considéré comme jouant le rôle d'un verbe et l'on parle alors plus de
          sygil que d'évocation. Tout adjectif ou adverbe au sein d'une
          évocation doit toujours succéder au nom ou au verbe auquel il fait
          référence.
        </p>

        <p>
          Une proposition astrale typique peut prendre la forme d'un sujet
          éventuel suivit d'aucun ou plusieurs adjectifs, d'un objet éventuel
          suivit d'aucun ou plusieurs adjectifs et d'un verbe suivit d'aucun ou
          plusieurs adverbes. Formellement, une proposition astrale prend donc
          la forme suivante :
        </p>

        <p className='text-center'>
          Proposition = (Sujet Adjectif*)* (Objet Adjectif*)* Verbe (Adverbe)*
        </p>
      </SubjectContent>
    </Subject>
  )
}

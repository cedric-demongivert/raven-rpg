import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'
import { LocalSummary } from '../../../../components/LocalSummary'

import { Spell } from '../../../../components/Spell'

export function FireBreath () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-evocation-spells-fire-breath</SubjectIdentifier>
      <SubjectTitle>Vent de flamme</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <Spell
          runes={['zet', 'semet', 'ket', 'yemet']}
          rows={2}
        />

        <p className='text-center ipa'>
          [zɛt se.mɛt kɛt je.mɛt]
        </p>

        <p>
          Le personnage enflamme l'air ambiant donnant ainsi l'impression qu'une
          vague de flamme se déploie dans la direction choisie sous la forme
          d'un cone ouvert à 120°. La vague s'étend sur une distance de 2m par
          point d'éther canalisé et provoque 1d6 points de dégats plus 1d6
          points supplémentaire tous les 3 points d'éther canalisé. Les dégâts
          de vent de flamme sont des dégâts mystiques et passent totalement
          l'armure.
        </p>

        <p>
          Les cibles du vent peuvent toujours choisir d'esquiver le sortilège en
          se jetant au sol moyennant un jet d'esquive dont le degré de
          difficulté est équivalent à 5 plus la quantitée d'éther canalisé. Si
          une cible réussit son esquive, les dégâts sont divisés par deux, mais
          le personnage est alors considéré au sol.
        </p>
      </SubjectContent>
    </Subject>
  )
}

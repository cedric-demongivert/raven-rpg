import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function ArmorRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-armor</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Armure</SubjectKeyword>
      <SubjectTitle>Armure</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Toute entitée possède un score d'armure physique et un score d'armure
          magique. L'armure physique diminue le nombre de dégâts physiques reçus
          mais s'avère inefficace contre les dégâts magiques. L'armure magique
          diminue le nombre de dégâts magiques reçus mais s'avère inefficace
          contre les dégâts physique. Un score d'armure peut, comme les points
          de vie d'une entitée, faire l'objet de dégâts. Quand un score d'armure
          est supérieur aux dégâts pris, l'entité ne prends aucun dégâts.
        </p>

        <p>
          Une entitée peut s'équiper de trois types d'armure en même temps, une
          armure légère, une armure intermédiaire et une armure lourde. Si elle
          équipe plusieurs couche d'armure elle somme alors l'ensemble des
          effets de celles-ci, y compris les effets négatifs. Certaines armures
          peuvent interdire l'utilisation d'autres pièces d'armure, comme
          l'utilisation d'une plaque seule, interdisant l'armure de plaque
          complète.
        </p>

        <p>
          Si une pièce d'armure accumule plus de dégâts d'armure qu'elle n'offre
          de points elle est alors détruite. C'est toujours la couche d'armure
          la plus à l'extérieure qui prends les dégâts en premier. Pour qu'une
          pièce d'armure récupère les points d'armure perdus en combat elle doit
          être réparée.
        </p>
      </SubjectContent>
    </Subject>
  )
}

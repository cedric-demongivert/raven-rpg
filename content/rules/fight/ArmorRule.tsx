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
          <em>Armure physique.</em> Toute entitée possède un score d'armure
          physique équivalent à la somme des modificateurs d'armure apportés par
          son équipement et les éventuels effets secondaires dont elle peut
          faire l'objet. L'armure physique diminue le nombre de dégâts physiques
          reçus mais s'avère inefficace contre les dégâts magiques.
        </p>

        <p>
          <em>Armure magique.</em> Toute entitée possède un score d'armure
          magique équivalent à la somme des modificateurs d'armure apportés par
          son équipement et les éventuels effets secondaires dont elle peut
          faire l'objet. L'armure magique diminue le nombre de dégâts magiques
          reçus mais s'avère inefficace contre les dégâts physique.
        </p>

        <p>
          <em>Couches d'armure.</em> Une entitée peut équiper plusieurs armures
          en même temps, on dit alors qu'elle utilise des couches d'armures.
          Dans une telle situation, l'ensemble des effets des armures équipées
          doivent être sommés, y compris les effets négatifs. Il n'est pas
          possible d'équiper plus d'une armure par couche. Attention aussi, car
          certaines armures peuvent interdire l'utilisation d'autres pièces
          tierces, comme dans le cas de l'utilisation d'une cuirasse en tant
          qu'armure intermédiaire interdisant par le fait même l'équipement de
          toute armure lourde. Les couches standards sont : le corps, la ou les
          enveloppes, la couche d'armure légère, la couche d'armure
          intermédiaire, la couche d'armure lourde et les champs.
        </p>

        <p>
          <em>Couches d'armure physique.</em> Les couches d'armure physique
          sont : la couche d'armure légère, la couche d'armure intermédiaire et
          la couche d'armure lourde toutes équipées dans cet ordre précis.
        </p>

        <p>
          <em>Couches d'armure magique.</em> Les couches d'armure magique sont
          le corps, sujet aux mutations modifiant la nature même de la chair du
          sujet, la ou les enveloppes, pour les mutations modifiant la nature
          de la peau du sujet et les champs accueillant tous les effets
          assimilables à des champs de force.
        </p>

        <p>
          <em>Dégâts d'armures.</em> Un score d'armure, qu'il soit magique ou
          physique, peut, tout comme les points de vie d'une entitée, faire
          l'objet de dégâts. Dans le cas où une entitée subit des dégâts
          d'armure, c'est la ou les couches les plus périphériques qui
          encaissent les dégâts. Quand un modificateur d'armure tombe à zéro
          l'objet ou l'effet qui en est à l'origine est endomagé, détruit ou
          dissipé.
        </p>

        <p>
          <em>Protection totale.</em> Quand un score d'armure est supérieur aux
          dégâts pris, l'entité ne prends aucun dégâts.
        </p>
      </SubjectContent>
    </Subject>
  )
}

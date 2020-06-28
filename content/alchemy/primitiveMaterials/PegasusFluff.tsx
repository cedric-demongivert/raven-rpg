import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function PegasusFluff () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-material-pegasus-fluff</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Plumeau de pégase</SubjectKeyword>
      <SubjectTitle>Plumeau de pégase</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Le plumeau de pégase est une forme de céréale sauvage que l'on
          retrouve principalement dans les grandes plaines rocailleuses. Cette
          plante est constituée d'une grande tige terminée de deux à trois épis
          ressemblant à des plumes. La tige du plumeau de pégase se raidifie au
          fur et a mesure de sa croissance, à maturité le plumeau se détache en
          cas de vents violents pour éssémer plus loin.
        </p>
      </SubjectContent>
    </Subject>
  )
}

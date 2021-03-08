import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'

import { RepositoryAction } from './RepositoryAction'
import { Repository } from './Repository'

export namespace RepositoryEvent {
  /**
  *
  */
  export type Subscribe = ApplicationEvent<string>

  /**
  *
  */
  export type Clone = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type Cloning = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type Cloned = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type CloningFailure = ApplicationEvent<{
    identifier: Reference<Repository>,
    reason: Error
  }>

  /**
  *
  */
  export type ExtractCommits = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type ExtractingCommits = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type CommitsExtracted = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type CommitsExtractionFailure = ApplicationEvent<{
    identifier: Reference<Repository>,
    reason: Error
  }>

  /**
  *
  */
  export type ExtractLabels = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type ExtractingLabels = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type LabelsExtracted = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export type LabelsExtractionFailure = ApplicationEvent<{
    identifier: number,
    reason: Error
  }>

  /**
  *
  */
  export type Ready = ApplicationEvent<Reference<Repository>>

  /**
  *
  */
  export function subscribe(payload: string): Subscribe {
    return {
      type: RepositoryAction.SUBSCRIBE,
      payload
    }
  }

  /**
  *
  */
  export function clone(identifiable: Entry<Repository> | number): Clone {
    return {
      type: RepositoryAction.CLONE,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function cloning(identifiable: Entry<Repository> | number): Cloning {
    return {
      type: RepositoryAction.CLONING,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function cloned(identifiable: Entry<Repository> | number): Cloned {
    return {
      type: RepositoryAction.CLONED,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function cloningFailure(identifiable: Entry<Repository> | number, reason: Error): CloningFailure {
    return {
      type: RepositoryAction.CLONING_FAILURE,
      payload: {
        identifier: Reference.get(identifiable),
        reason
      }
    }
  }

  /**
  *
  */
  export function extractCommits(identifiable: Entry<Repository> | number): ExtractCommits {
    return {
      type: RepositoryAction.EXTRACT_COMMITS,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function extractingCommits(identifiable: Entry<Repository> | number): ExtractingCommits {
    return {
      type: RepositoryAction.EXTRACTING_COMMITS,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function commitsExtracted(identifiable: Entry<Repository> | number): CommitsExtracted {
    return {
      type: RepositoryAction.COMMITS_EXTRACTED,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function commitsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): CommitsExtractionFailure {
    return {
      type: RepositoryAction.COMMITS_EXTRACTION_FAILURE,
      payload: {
        identifier: Reference.get(identifiable),
        reason
      }
    }
  }

  /**
  *
  */
  export function extractLabels(identifiable: Entry<Repository> | number): ExtractLabels {
    return {
      type: RepositoryAction.EXTRACT_LABELS,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function extractingLabels(identifiable: Entry<Repository> | number): ExtractingLabels {
    return {
      type: RepositoryAction.EXTRACTING_LABELS,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function labelsExtracted(identifiable: Entry<Repository> | number): LabelsExtracted {
    return {
      type: RepositoryAction.LABELS_EXTRACTED,
      payload: Reference.get(identifiable)
    }
  }

  /**
  *
  */
  export function labelsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): LabelsExtractionFailure {
    return {
      type: RepositoryAction.LABELS_EXTRACTION_FAILURE,
      payload: {
        identifier: Reference.get(identifiable),
        reason
      }
    }
  }

  /**
  *
  */
  export function ready(identifiable: Entry<Repository> | number): Ready {
    return {
      type: RepositoryAction.READY,
      payload: Reference.get(identifiable)
    }
  }
}

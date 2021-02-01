import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'

import { RepositoryAction } from './RepositoryAction'
import { Repository } from './Repository'

export namespace RepositoryEvent {
  /**
  *
  */
  export type Add = ApplicationEvent<string>

  /**
  *
  */
  export type Clone = ApplicationEvent<number>

  /**
  *
  */
  export type Cloning = ApplicationEvent<number>

  /**
  *
  */
  export type Cloned = ApplicationEvent<number>

  /**
  *
  */
  export type CloningFailure = ApplicationEvent<{
    identifier: number,
    reason: Error
  }>

  /**
  *
  */
  export type ExtractCommits = ApplicationEvent<number>

  /**
  *
  */
  export type ExtractingCommits = ApplicationEvent<number>

  /**
  *
  */
  export type CommitsExtracted = ApplicationEvent<number>

  /**
  *
  */
  export type CommitsExtractionFailure = ApplicationEvent<{
    identifier: number,
    reason: Error
  }>

  /**
  *
  */
  export type ExtractLabels = ApplicationEvent<number>

  /**
  *
  */
  export type ExtractingLabels = ApplicationEvent<number>

  /**
  *
  */
  export type LabelsExtracted = ApplicationEvent<number>

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
  export type Ready = ApplicationEvent<number>

  /**
  *
  */
  export type Remove = ApplicationEvent<number>

  /**
  *
  */
  export function add(payload: string): Add {
    return {
      type: RepositoryAction.ADD,
      payload
    }
  }

  /**
  *
  */
  export function clone(identifiable: Entry<Repository> | number): Clone {
    return {
      type: RepositoryAction.CLONE,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function cloning(identifiable: Entry<Repository> | number): Cloning {
    return {
      type: RepositoryAction.CLONING,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function cloned(identifiable: Entry<Repository> | number): Cloned {
    return {
      type: RepositoryAction.CLONED,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function cloningFailure(identifiable: Entry<Repository> | number, reason: Error): CloningFailure {
    return {
      type: RepositoryAction.CLONING_FAILURE,
      payload: {
        identifier: Entry.identifier(identifiable),
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
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function extractingCommits(identifiable: Entry<Repository> | number): ExtractingCommits {
    return {
      type: RepositoryAction.EXTRACTING_COMMITS,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function commitsExtracted(identifiable: Entry<Repository> | number): CommitsExtracted {
    return {
      type: RepositoryAction.COMMITS_EXTRACTED,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function commitsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): CommitsExtractionFailure {
    return {
      type: RepositoryAction.COMMITS_EXTRACTION_FAILURE,
      payload: {
        identifier: Entry.identifier(identifiable),
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
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function extractingLabels(identifiable: Entry<Repository> | number): ExtractingLabels {
    return {
      type: RepositoryAction.EXTRACTING_LABELS,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function labelsExtracted(identifiable: Entry<Repository> | number): LabelsExtracted {
    return {
      type: RepositoryAction.LABELS_EXTRACTED,
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function labelsExtractionFailure(identifiable: Entry<Repository> | number, reason: Error): LabelsExtractionFailure {
    return {
      type: RepositoryAction.LABELS_EXTRACTION_FAILURE,
      payload: {
        identifier: Entry.identifier(identifiable),
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
      payload: Entry.identifier(identifiable)
    }
  }

  /**
  *
  */
  export function remove(identifiable: Entry<Repository> | number): Remove {
    return {
      type: RepositoryAction.REMOVE,
      payload: Entry.identifier(identifiable)
    }
  }
}

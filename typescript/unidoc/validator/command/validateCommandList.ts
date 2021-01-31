import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocEvent } from '@cedric-demongivert/unidoc'

import { Outputs } from '../Outputs'

import { validateCommand } from './validateCommand'
import { CommandList } from './CommandList'
import { CommandListNode } from './CommandListNode'

/**
*
*/
function match(nodes: CommandListNode[], tag?: string | undefined): number {
  let index: number = 0
  let matchIndex: number = -1

  for (; index < nodes.length; ++index) {
    const node: CommandListNode = nodes[index]
    const name: string | undefined = node.element.name

    if (name == null || name === tag) {
      if (node.count < node.element.maximum) {
        return index
      } else {
        matchIndex = index
      }
    }
  }

  return matchIndex
}

/**
*
*/
function offset(nodes: CommandListNode[], from: number): number {
  let result: number = 0

  for (let index: number = from + 1; index < nodes.length; ++index) {
    result += nodes[index].count
  }

  return result
}

/**
*
*/
function* validateCommandListState(state: CommandListNode[]): UnidocKissValidator {
  for (const node of state) {
    if (node.count < node.element.minimum) {
      yield UnidocKissValidator.output.validation(yield UnidocKissValidator.output.current())
      yield Outputs.expectedCommand(node.element.name || '*')
      return UnidocKissValidator.output.end()
    }
  }

  return UnidocKissValidator.output.match()
}

/**
*
*/
export function* validateCommandList(blueprint: CommandList): UnidocKissValidator {
  const nodes: CommandListNode[] = blueprint.map(CommandListNode.fromElement)

  while (true) {
    yield* UnidocKissValidator.validateManyWhitespace()

    const nextElement: UnidocEvent | undefined = yield UnidocKissValidator.output.current()

    if (nextElement == null) {
      return yield* validateCommandListState(nodes)
    } else if (nextElement.isStartOfAnyTag() || nextElement.isWord()) {
      const tag: string | undefined = nextElement.isWord() ? undefined : nextElement.tag
      const index: number = match(nodes, tag)

      if (index < 0) {
        yield UnidocKissValidator.output.validation(nextElement)
        yield Outputs.illegalCommand(tag)
        return UnidocKissValidator.output.end()
      }

      const node: CommandListNode = nodes[index]

      if (node.count < node.element.maximum) {
        if (node.element.name == null) {
          yield* node.element.validator()
        } else {
          yield* validateCommand(node.element.name, node.element.validator)
        }

        node.count += 1

        if (!node.element.anywhere) {
          const order: number = offset(nodes, index)
          if (order > 0) {
            yield Outputs.preferredCommandPosition(tag, -order)
          }
        }
      } else {
        yield UnidocKissValidator.output.validation(nextElement)
        yield Outputs.tooManyCommands(tag, node.element.maximum)
        return UnidocKissValidator.output.end()
      }
    } else {
      return yield* validateCommandListState(nodes)
    }
  }
}

/**
*
*/
export namespace validateCommandList {
  /**
  *
  */
  export function factory(list: CommandList): UnidocKissValidator {
    return validateCommandList.bind(undefined, list)
  }
}

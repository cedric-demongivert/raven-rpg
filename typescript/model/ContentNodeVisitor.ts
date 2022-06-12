import type { Acronym } from "./Acronym"
import type { ContentNode } from "./ContentNode"
import type { Emphasize } from "./Emphasize"
import type { EmptyNode } from "./EmptyNode"
import type { Link } from "./Link"
import { Paragraph } from "./Paragraph"
import { Section } from "./Section"

/**
 * 
 */
export interface ContentNodeVisitor {
  /**
   * 
   */
  visitString(node: string): void

  /**
   * 
   */
  enterParagraph(node: Paragraph): void

  /**
   * 
   */
  exitParagraph(node: Paragraph): void

  /**
   * 
   */
  enterSection(node: Section): void

  /**
   * 
   */
  exitSection(node: Section): void

  /**
   * 
   */
  visitNode(node: ContentNode): void

  /**
   * 
   */
  enterEmphasize(node: Emphasize): void

  /**
   * 
   */
  exitEmphasize(node: Emphasize): void

  /**
   * 
   */
  visitEmpty(node: EmptyNode): void

  /**
   * 
   */
  visitLink(node: Link): void

  /**
   * 
   */
  visitAcronym(acronym: Acronym): void
}
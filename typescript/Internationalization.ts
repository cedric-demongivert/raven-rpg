import { Record } from 'immutable'
import { Map } from 'immutable'

type InternationalizationProperties<Content> = {
  /**
  *
  */
  fallback: string,

  /**
  *
  */
  langs: Map<string, Content>
}

/**
*
*/
const DEFAULT_PROPERTIES: InternationalizationProperties<any> = {
  fallback: 'en',
  langs: Map()
}

/**
*
*/
export class Internationalization<Content> extends Record(DEFAULT_PROPERTIES) {
  /**
  *
  */
  public getFallback(): string {
    return this.get(Internationalization.Properties.FALLBACK)
  }

  /**
  *
  */
  public getLangs(): Map<string, Content> {
    return this.get(Internationalization.Properties.LANGS)
  }

  /**
  *
  */
  public getLang(lang: string): Content | undefined {
    const langs: Map<string, Content> = this.getLangs()

    return langs.get(lang, langs.get(this.getFallback()))
  }
}

/**
*
*/
export namespace Internationalization {
  /**
  *
  */
  export const EMPTY: Internationalization<any> = new Internationalization()

  /**
  *
  */
  export function empty<Content>(): Internationalization<Content> {
    return EMPTY
  }

  /**
  *
  */
  export type Properties<Content> = InternationalizationProperties<Content>

  /**
  *
  */
  export namespace Properties {
    /**
    *
    */
    export const LANGS: 'langs' = 'langs'

    /**
    *
    */
    export const FALLBACK: 'fallback' = 'fallback'

    /**
    *
    */
    export const ALL: string[] = [
      LANGS,
      FALLBACK
    ]
  }
}

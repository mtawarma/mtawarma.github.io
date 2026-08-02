declare module '@pagefind/default-ui' {
  export interface PagefindUIOptions {
    element: string;
    bundlePath?: string;
    showImages?: boolean;
    showSubResults?: boolean;
    maxResults?: number;
    excerptLength?: number;
    highlightParam?: string;
    translations?: Record<string, string>;
    processResult?: (result: PagefindResult) => PagefindResult | Promise<PagefindResult>;
    processTerm?: (term: string) => string;
  }

  export interface PagefindResult {
    url: string;
    content: string;
    word_count: number;
    sub_results: Array<{
      title: string;
      url: string;
      anchor: string;
    }>;
    meta: Record<string, any>;
  }

  export class PagefindUI {
    constructor(options: PagefindUIOptions);
    triggerSearch(term: string): void;
    destroy(): void;
  }
}


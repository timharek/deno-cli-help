interface Flag {
  name: string;
  aliases: string[];
  description: string;
}

export interface Options {
  name: string;
  version: string;
  description: string;
  author?: Array<{
    name: string;
    email?: string;
  }>;
  source?: string;
  flags: Flag[];
  examples?: string[];
}

/**
 * Prints help text.
 *
 * Common to run when no options is passed.
 */
export function printHelp(options: Options) {
  console.log(`${options.name} ${options.version ?? ''}`);
  console.log(`${options.description}`);
  console.log();
  if (options.author && options.author?.length > 0) {
    console.log(
      '%cAUTHOR',
      'font-weight: bold',
    );
    options.author.forEach((author) => {
      console.log(`\t${author.name} <${author.email}>`);
    });
  }
  if (options.source) {
    console.log(
      '%cSOURCE',
      'font-weight: bold',
      `\n\t${options.source}`,
    );
  }
  console.log();
  console.log('%cUSAGE', 'font-weight: bold', `\n\t${options.name} [OPTIONS]`);
  console.log();
  console.log('%cOPTIONS', 'font-weight: bold');
  options.flags.forEach((flag) => {
    console.log(`\t-${flag.aliases.join(', -')}, --${flag.name}\t\t${flag.description}`)
  })
  if (options.examples) {
    console.log();
    console.log('%cEXAMPLES', 'font-weight: bold');
    options.examples.forEach((example) => {
      console.log(`\t$ ${example}`)
    })
  }
}

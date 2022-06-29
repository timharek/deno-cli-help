# deno-cli-help

Prints out flag options.

## Example

```ts
import { printHelp } from "https://deno.land/x/deno-cli-help@v1.0.0/mod.ts"

const options: Options = {
  name: '<cli-command>',
  version: '1.0.0',
  description: 'Brief description of what this tool does.',
  author: [{ name: 'Tim Hårek Andreassen', email: 'tim@harek.no' }],
  source: 'https://github.com/timharek/deno-cli-help',
  flags: [
    {
      name: 'version',
      aliases: ['v', 'V'],
      description: 'Prints version.'
    }
  ]
}

printHelp(options);
```

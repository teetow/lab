## Honoring our past

This rudimentary, and quite fake, C64-style terminal screen uses a "template" SVG with glyphs defined inside a `<defs>` block. The glyph names are derived from the JS KeyboardEvent naming table, within reason.

```xml
  <path id="period" d="M 3,5 L 3,7 L 5,7 L 5,5 L 3,5"/>
  <path id="slash" d="M 6,1 L 6,2 L 5,2 L 5,3 L 4,3 L 4,4 L 3,4 L 3,5 L 2,5 L 2,6 L 1,6 L 1,7 L 3,7 L 3,6 L 4,6 L 4,5 L 5,5 L 5,4 L 6,4 L 6,3 L 7,3 L 7,2 L 8,2 L 8,1 L 6,1"/>
  <path id="digit0" d="M 1,1 L 2,1 L 2,0 L 6,0 L 6,1 L 7,1 L 7,6 L 6,6 L 6,7 L 2,7 L 2,6 L 1,6 L 1,1 M 3,1 L 3,3 L 4,3 L 4,4 L 3,4 L 3,6 L 5,6 L 5,3 L 4,3 L 4,2 L 5,2 L 5,1 L 3,1"/>
```

The terminal window is the assembled with a series of `<use>` tags, setting `x` and `y` according to their screen position.

As an example on how _not_ to do a terminal emulator in React, the input events are redirected to a hidden `<input>` element, in order to determine if a printable character was entered.

This component simulates a 7-segment numeric display. The implementation uses a generated SVG, where CSS classes are added to indicate which digit is being displayed.

To light up the corresponding segments, an SCSS function generates the necessary CSS. For each potential number, the function generates a CSS class that sets the fill color for each segment.

```scss
@mixin segments($digit, $segments) {
  &.d-#{$digit} {
    @include utils.per-char($segments, "#{$p}") {
      fill: color-mix(in srgb, currentColor 95%, white 5%);
      --fade: 0.01s;
    }
  }
}

@include segments(1, (b c));
@include segments(2, (a b d e g));
@include segments(3, (a b c d g));
@include segments(4, (b c f g));
@include segments(5, (a c d f g));
@include segments(6, (a c d e f g));
@include segments(7, (a b c));
@include segments(8, (a b c d e f g));
@include segments(9, (a b c d f g));
@include segments(0, (a b c d e f));
```


## Conditions and conditional expressions

```js
function stepX(i) {
  var d = (i % 2 === 0) ? 90 : -90;
  forward(50);
  right(d);
  forward(10);
  right(d);
}
```

Note the use of the conditional expression. This program looks a lot better than:

```js
function stepX(i) {
  var d = (i % 2 === 0) ? 90 : -90;
  forward(50);
  if (i % 2 === 0) {
    right(90);
  } else {
    right(-90);
  }
  forward(10);
  if (i % 2 === 0) {
    right(90);
  } else {
    right(-90);
  }}

```

* This is also an example of "DRY".
* Note that this example does not work when we would have separate functions for right and left.

## Leaf

```js
function leaf(rad, deg) {
  right(-deg);
  turnRight(rad, 2 * deg);
  right(180 - 2 * deg);
  turnRight(rad, 2 * deg);
  right(180 - deg);
}
```
Suggestion: first start with a half-leaf: straight line, circle fragment, straight line.

```js
function halfLeaf(rad, deg) {
  forwarid(40);
  right(-deg);
  turnRight(rad, 2 * deg);
  right(-deg);
  forward(40);
}
```
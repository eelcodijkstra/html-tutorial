
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




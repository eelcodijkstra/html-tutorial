## Notes for Programming in Javascript

* We use similar approach as for HTML-0.
* But, Thimble has been replaced by JSBin.
    * The main reasons for this are: (i) separate JS window; (ii) availability of console;
*

## How to publish the lessons

* the lessons can be published as a static website, with multiple files per lesson.
* for the time being, infvo.com is a suitable environment.
    * publishing is in this case: copying by means of FTP (a little primitive).
    * this environment is under our own control.
* alternative: using GitHub Pages?
* the JSBin-parts are published using JSBin.
* the JSBin-parts are derived from Gists on GitHub.

It is possible to import a gist directly into JSBin; but, apparently, this does not work for the embedded representation of JSBin. (And, probably, this adds another layer of overhead to the system, and an extra risk factor.) Thus, we need the following way of working:

* 

## Wishlist

* add to the Turtle-functions: qCircle(n) - where n is the size (arc size, or radius?)
    * it is an alternative way to turn: it requires a distance.
* button on tutorial-frame, to reduce the size (as in HTML-0)
* the tutorial-frame may be used for all lessons, with easy navigation between the lessons.

## Steps in programming

* we start with elementary commands; sequencing (semicolon); and functions (!)
* first use of functions, then function definition.
* first functions without parameters, then functions with parameters.
* in order to show the power of functions (and of repetition), we combine a number of functions;
* repetition may lead the turtle outside the box (it dies there: flat earth model)
* we may prevent this by the use of a condition;
    * alternatives: next action/drawing to the right, or below
* this is a first step towards recursion...

## Notes

* the use of JSBin implies that this material can only be used when internet access is available.

## Turtle behaviour

* TODO: change behaviour such that it fails ("dies") when outside its world ("flat world"). 
    * this approach has the advantage that it shows the importance of border cases, and its analysis in programming.
    * we might do this in lesson 2.

## Gist code 

Add another button, to be linked to a user-defined function:

```js
  $("#sqfdButton").on("click", function () {
    if (typeof sqFd50 === "function") {
      sqFd50();
    } else {
      alert("no function sqFd50");
    }
  });
```
and in html:

```html
        <button type="button" id="sqfdButton"> sqFd50 (); </button> <br>
```

```html

```
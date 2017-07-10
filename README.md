# Ajax-Fetch-example

I set out to create a really simple example showing how **jQuery Ajax** works.

Why jQuery Ajax and not "plain Ajax" (`XMLHttpRequest`)? Less code and easier to write. Make sure you're loading the jQuery library if you do this.

I'm used to using jQuery's `$.ajax()` ([see docs](http://api.jquery.com/jquery.ajax/)) to send data to a server-side script, receive a response, and use that response data in an open HTML page. I saw an example where a guy didn't use a script on the server but instead retrieved a chunk of HTML from an .html file on the server. I thought that might be an easier example for beginners to grok.

You can see it in action [here](https://macloo.github.io/Ajax-Fetch-example/).

## Fetch-API

It looks like this will replace uses of Ajax in the future, so I wanted to try to convert my example to use `fetch().then()` instead of Ajax. The Fetch code looks more convoluted because I added error-checking stuff, which is missing from the Ajax example. It's also convoluted because — well, it's JavaScript.

I used the ES6 "[fat arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)" in the Fetch code. Here's [a nice overview](https://github.com/lukehoban/es6features) of ES6, the future of JavaScript.

```
.then(text => {
  $( text ).each(function( index ) {
    var stuff = $( text ).get(index);
    if (stuff.id === data) {
      $( '#content' ).html( stuff );
      return;
    }
  });
})
```

So to simplify that: `(text => { });` is equivalent to `(function(text) { });`. Kind of cool! I still find it a bit confusing, but I'm trying to get used to it.

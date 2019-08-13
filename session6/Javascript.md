# Session 6 - Javascript

In this session we're going to look at the basics of Javascript, a programming language used to add complex functionality and interactivity to almost all modern websites.

## 1. What is Javascript?

Javascript is a programming language that runs in every modern web browser, allowing you to write code to add interactivity to your website. On a basic level this might be coding a button to carry out some action. At a more advanced level it will involve updating multiple elements in response to different user interactions, live updating data from a website, adding comments to images, uploading data, instant messaging (e.g Instagram, Facebook).

Javascript is a massive topic in itself so we will only be covering the basics here, but we'll also give you some useful links if you want to learn more.

## 2. Looking at the blog-writer.html file

To start with, open blog-writer.html in a web browser. Try putting in a title and some text, then clicking the "Update preview" button. You'll see that the title is updated in the preview part of the page, but the text isn't yet (that's because you're going to implement this!).

If you have a look at the code for the blog-writer.html file, you'll see the html structure of the page along with bootstrap css. You should also notice that some of the html elements have an id attribute

- The `input` on line 80 has `id="blogTitle"`
- The `button` on line 86 has `id="updatePreview"`
- The `h5` on line 99 has `id="titlePreview"`

These `id` attributes let you identify specific elements so that you can reference them from your Javascript code.

Now that you've looked at the html, if you scroll down towards the bottom of the file you'll see that theres a `<script>` tag. The contents of this tag look a lot different to the rest of the page because this is no longer html/css, it's javascript. Embedding the code in the page like this is useful for small pages and prototyping. For larger, more complex projects it's also possible to include external javascript files (e.g. this is what we've done on lines 113-121 to load the javascript code required for bootstrap).

Some of the lines start with `//`, these are comments and don't do anything, they just serve as a way for the developer to make helpful comments on the code

There are a few key concepts in the code.

A **function** is piece of code that does something and can be "called" as many times as you like. We use the keyword `function` followed by the name we want to give to the function (e.g. `updateTitle`), followed by parentheses `()`. We then use curly braces to define the start and end of the function `{}`. Everything inside the curly braces is the body of the function and defines what it will do.

A **variable** is a placeholder for some data you want to store, it might be a piece of text, a number, or a more complex object. In most cases you can declare a variable using the `let` keyword followed by the name you want to give to the variable (e.g. `titleInput`), followed by an `=` sign, then whatever value you want to store. The value is often something that comes from user input.

## Useful links

- Mozilla Developer Network - One of the best resources for learning about web development
    - [Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
    - [Learn HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
    - [Learn CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
    - [Learn Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [StackOverflow](https://stackoverflow.com/) - A Q&A site where you can ask for help from the community when you get stuck on a problem
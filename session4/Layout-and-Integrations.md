# Layout

## Styling Boxes

### Box model

In the example html - have a look at the box model of each individual element on the page by opening up the browser developer tools and clicking on the elements in the DOM inspector.

Set some margin-bottom on the main element, say 20px. Now set some margin-top on the footer element, say 15px. Note how the 2nd one of these actions makes no difference to the layout — this shows margin collapsing in action; When two boxes touch against one another, the distance between them is the value of the largest of the two touching margins, and not their sum.

Set a margin of 30px and a padding of 30px on every side of the main element — note how the space around the element (the margin) and the space between the border and the content (the padding) both increase, causing the actual content to take up a smaller amount of space. Again, check this with the browser developer tools.

Set a larger border on all sides of the main element, say 40px, and notice how this takes space away from the content rather than the margin or padding.

By default, the content width is set to 100% of the available space (after the margin, border, and padding have taken their share) — if you change the browser window width, the boxes will grow or shrink to stay contained inside the example output window. The height of the content will default to the height of the content inside it.
Try setting a new width and height on the main element — start with say 400px width and 200px height — and observe the effect. You'll notice that the width no longer changes as the browser window is resized.

Try setting a percentage width on the main element instead — say 60% width — and observe the effect. You should see that the width now changes again as the browser window is resized. Remove the main element's height setting for now.

Margins can accept negative values, which can be used to cause element boxes to overlap. Try setting margin-top: -50px; on the main element to see the effect.

Keep experimenting!

### Background

Try adding to the main element in the example
`background-image: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);`

You can see the image repeated to fill the element. Now set ` background-repeat: no-repeat;`

Still not quite right. Try this:
`background-position: 99% center;`

You can also add colour gradients to the background by replacing the background image with:
`background-image: linear-gradient(to bottom, yellow, #dddd00 50%, orange);`

Try combining the two like this:
`background: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png) no-repeat 99% center,linear-gradient(to bottom, yellow, #dddd00 50%, orange);`

# Integrate
## YouTube

Add this video to your site: https://www.youtube.com/watch?v=0zgtNDAEht4

##Instagram

Add a post from this feed into your blog: https://www.instagram.com/p/B0iKhH4hgUZ/

# Learning tools

## Useful links

HTML cheatsheet: https://digital.com/tools/html-cheatsheet/
CSS cheatsheet: https://www.onblastblog.com/css3-cheat-sheet/

CodePen - useful tool for trying out code and viwing examples.
https://codepen.io

I found this nice example: https://codepen.io/ludmila-tretyakova/pen/VoaMzG

HTML dog is similar but also has some good tutorials: https://htmldog.com/
# Random quotes generator
 Generate random quotes and share to Twitter


# About
A single web page to generate and display a Random quote fetched from a quotes API by clicking a button and also share on Twitter if logged in.

## Table of contents

  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Screenshot

![Desktop screenshot](./desktop-1.png)
![Desktop screenshot](./desktop-2.png)
![Mobile screenshot](./mobile-ipad.png)


### Links

- Live Site URL: [Click here](https://kb-jr.github.io/Random-quotes-generator/)

## My process

#### Interface:
- Build User interface using HTML5 and CSS custom properties.
- Create loader animation using CSS animations
- Import font type from Google fonts API
- Import icons like Quote icon and twitter icon from Fontawesome

#### Behavior:
- Create an asynchronous function to retrieve quotes from the Quotes API. This is done by fetching data from the API url in JSON format. This returns an array of several objects with text and author properties.

- Create a function to generate a random quote and dynamically populate the interface with quotes and Authors. This is done by using the 'math.random' method on the quotes object retrieevd from the API and storing the result quote in a variable. The quote text property is then used to update the text content of the field created for quotes in the interface (Apply same step to retrieve quote authors and update the interface). Additional conditions are also added to manioulate the contents being displayed such as the font size and placeholder text in the event that an author is not available. This is done using if else statements.

- Create a function to share quote directly to twitter. Do this by storing the twitter sharing link and passing in the content to be shared as a text parameter using template literal syntax in a variable. Template literal syntax allows you to pass in variables as string format. Open the variable using window.open and specify '_blank' in order for twitter to open in a new tab.

- Add eevnt listeners to the new quote and tweet buttons such that when clicked, the new quote and tweet quote functions will be run respectively.



### Built with

- HTML5 
- CSS custom properties
- Flexbox
- Javascript
- Desktop-first workflow


### Useful resources

- [api for quotes](https://type.fit/api/quotes) - This link is an API which contains an array of several quotes.

- [url to share on twitter](https:twitter.com/intent/tweet) - Use this link in addition with other query parameters to share specified content to twitter. For more info on query parameters, visit https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent.

- [to create a loader](https://www.w3schools.com/howto/howto_css_loader.asp) - Code snippets from here was used to build a customized loader

- [fontawesome](https://kit.fontawesome.com/61ca9c0951.js) - Adding this link to the head section of the HTML grants one access to use some free icons delivered from Fontawesome. What is needed is to include the appropriate HTML code for the required icon. 

- [Google fonts](https://fonts.googleapis.com/css?family=Ubuntu) - Adding this link to the head section of the HTML grants one access to use the 'Ubuntu' font from google fonts. To use any other font, replace 'Ubuntu' with prefered font type or family in the link.


## Author

- Github - [@Kb-Jr](https://github.com/Kb-Jr)
- Twitter - [@Joker__XL](https://www.twitter.com/Joker__XL)


## Acknowledgments
https://zerotomastery.io/



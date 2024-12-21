## Mocalc

This project came about, naturally, while using other mortgage calculators. I particularly
like the calculator available on the [Government of Canada’s website](https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MC-CH-eng.aspx). It features a helpful table 
breaking down all the payments made over the course of the mortgage’s term and beyond—all the way until 
the mortgage is paid off in full—into portions paid toward interest and principal. 
Seeing the payment broken down like this prompted me to learn more about how all of 
this is calculated, and ultimately lead me to creating my own calculator.

Despite these useful features, though, there was something missing. I wanted an easier way to compare 
multiple mortgage scenarios side-by-side. And I wanted to be able to quickly adjust the values used in the 
calculations, without having to re-submit the form, or having to navigate back to the page containing the 
form, and then re-submit. I mean, I’m getting tired just writing down all those steps 😅. To me, this 
sounded like a job for React, and a great opportunity to put into practice some of my burgeoning knowledge
of the math behind mortgages.

With MoCalc, I included a payment schedule table, but chose to limit it to just the length of the
mortgage’s term. And work to add prepayment options is in progress. After establishing the app’s initial 
React components, I realized that the bulk of the work for this project would be more design-based. 
Specifically, considering how best to use available space efficiently in order to summarize the info from
multiple mortgage scenarios at once. The goal is to write all the CSS from scratch, without relying on any
existing utility or component libraries like Bootstrap or Tailwind. For that reason, I suspect much of the
work going forward will be in the area of CSS; improving the composition of individual components, the page
as a whole, and finding the best approach to organize the CSS code, and the stylesheets themselves.

MoCalc has become my go-to calculator. For that reason I wanted to get it online asap, but it remains a
work in progress. Between adding new feature and improving data presentation, there's lots to keep me busy
for a while yet. It’ll take more coding to turn those ideas into 
reality, so I’d better get back to it!
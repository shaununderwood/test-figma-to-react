This was a test to see if we can recrete UIs from Figma into React using Cursor.

Two hours was spent.

The result was visually pretty good.

The downsides is localised to CSS:
* CSS classes should have been tailwind but its' severally generalised and just using
  `className="text-[color] text-[size] ..."` type expression, which is not very useful or maintainable.
* No attempt has been made to use a theming or design system

Code production is ok, in part due to ensuring the promopt enforced props and emit behviours.

Thoughts for improvement:

* Using BEM and @apply and tailwind classes WILL make the css better
* Implementing a design system
* Breakdown everything into components, feeding off the design system will be much speedier for development.
* Crafting prompts further to help Cursor understand the design system and components
* Semantic naming of items in figma could help with css and coding semantics
* There is still the issue of converting the UI to take advantage of the wider displays on browsers

Next steps

* Check how Pradeep has implemented a design system, if any, and handled css.
* Consider creating a component library that can be used in Cursor to help with the above.
* Take a few components and attempt to design system them

---
Actioning next steps
* Check how Pradeep has implemented a design system, if any, and handled css.
  * Observations
    * Component reuse hasn't been prioritised
    * Some effort to use css variables, but still a lot of inline styles
    * On blob of css
    * is LOOKS light touch on css, but its actually heavy handed within each component with inline styling
  * Conclusions
    * Good effort considering resource constraints and no explicit designs, but
    * Considering the heavy handed use of inline styling, each component essentially has it's own css file
    * Lots of repeated styles (16px 20px etc) common container formats all should be in a component library
    * Heavy componentisation will help a lot
  * Actions
    * Convert test page into better component structure
    * Using BEM and @apply and tailwind classes WILL make the css better and components easier
    * 100% needed especially for very repetitious UIs later on
  * Questions
    * How do we change app designs into webapp designs, we need a nice analog, some simple rules
      * eg action cards on device to modals on web
      * Split screen into 3 large areas, with large parts taking 2 columns, for example
      It becomes more a block fitting strategy than a design system problem
    * Can we actually create an App from this code? Prove it
    * How is bootstrap used?

So yes, after looking at Pradeeps work so far, I think we must make improvements in design system and componentisation,
which makes these two previously suggested next steps even more important:
* Consider creating a component library that can be used in Cursor to help with the above.
* Take a few components and attempt to design system them



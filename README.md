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




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
  * So tried to start this and got analysis paralysis
  * I'll look more broadly at figma to spot patterns of components
  * Getting tailwind working in Cursor is a must

Some conclusions from yesterday's work:
* Cursor is a great tool for quickly generating React code from Figma designs.
* Generated code is fine for the view aspect, but the CSS may need some refinement.
* Bulk of the figma designs are very amenable to componentisation. Pattern reuse high so should speed up UI development considerably
* We need to valid the application and design with the market, so not too much emphasis on pristine code, lets get it out there and build more for speed
* Mobile app can wait - if people like the webapp enough we'll have money enough to meet that demand
* We need to focus on the webapp first, then mobile app
* For enterprise users, I feel they will feed off of the admin panel product

Morning Maxine.

After Friday's call with Pradeep I spent yesterday exploring what AI can do with Figma designs and I'm pretty impressed with the results.

I want to clear up the webapp / mobile / pwa situation so we get our nemonclature right.

We should build a mobile-first webapp, a PWA.  This is essentially a building a website that focus on displaying on mobile devices.
This will get us a working customer facing product fastest and validated by users and the market, for the cheapest price.  Also allows us to quickly make changes and deliver faster.

Going through your figma has been great; we've good pattern reuse, consistent styling, high quality positioning, and the explicit display of variability in the UX answers a lot of questions about structure and data expectations.


App UI Strategy
* We build a mobile-first webapp, a PWA, which is essentially a website that focuses on displaying on mobile devices.
* We do not focus on building a desktop version of the figma designs
* If demand and funding is high enough, and the benefits we get from a mobile app are high enough, we then think about mobile app version.

Web / Desktop UI Strategy
* With the App UI Strategy desktop users will immediately see the mobile view of the app, so all functionality and look and feel should be present.
* When we have a need and know the painpoints for mobile, we can use these to help re-style the mobile site to look presentable on desktop.

Admin Panel UI Strategy
* The admin panel aims to give us visibility and control over the app and all the data in the system
* We need bulk tasks to be done, like listing all properties, all users, all documents, managing questions and text and videos etc
* This will be a webapp, but with a desktop-first design, functional, business like - eg not flashy - secured, not many frills but answers our business needs

Enterprise UI Strategy
* These are bulk users as well, just like us, so a derivative of the Admin Panel makes sense
* We may even setup the Admin Panel to be accessible by enterprise users, with features disabled and data locked down to prevent data breeches etc

Backend Strategy
* We will build a backend that supports all the UI strategies above
* It will be a single "monolith" providing all services and managing all data
* It'll be permissioned and secured to allow for the different UI strategies to access the data they need, and not that they dont
* That's one build, not multiple builds, so we can focus on the UI and the backend at the same time, without duplication


Changes to current efforts
* Nothing to change on Figma: keep doing, great design, pattern reuse, consistency, all great for reducing dev time, and the repetition you've introduced clearly highlights the data needs and functionality expected.
* App development:
  * We change tact and build for the App UI Strategy.
  * Pradeep will need a licence for Cursor, if he doesn't have one it's £20/month per seat. I have my own, Pradeep will need his own
  * I'll work with Pradeep on process and strategy to hasten his adoption of AI tools
  * Thanks to your consistent Figma approach, we should not aim for prestine code, instead gear for fidelity with designs, speed to market, consistent approach, and easy of change, so we can validate the product, get feedback from users, and push updates.
  * Bringing in other developers will speed this up, but must stay a small team to maintain consistency
  * I will spend some time building some pages to work out a consistent approach that can scale out well.



Questions
* Phase 1 has had considerable updates since Pradeep implemented it first time around. Are these likely to change again?  Will these changes be brought forward to any other parts of Figma?
* Taking the App UI Strategy above we'll need Phase 1 to be redone anyway so if these designs are final we can push ahead.
* We would benefit from extra developers, do we have any we can tap into? In the meantime I can put some time to assisting with other UIs eg the Boundaries section and onwards, and assist Pradeep with using AI tools to speed up development.


My next steps
* Building out further the Boundaries pages to 
* Build out the data architecture needed to support the App UI Strategy
* Ensure Pradeep has a Cursor licence and is setup to use it, and take him through my AI approach
* Review the funding document






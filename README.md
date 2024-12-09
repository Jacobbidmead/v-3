Personal Portfolio rebuild.

My current projects code base is a mess - I decided to rebuild the project, make it more manageable, and practice a few technolgies in the process.

Tech stack - Migrating from JS and create-react-app, with a big CSS file, to TypeScript & Next.js, with styled components and some tailwind. Strange to mix the two, but I used v0 to create the image gallery and so all the styling there is tailwind, with the rest of the project using styled components. I'm still using MUI & Framer Motion for some UI animations.

Im following Next.js best practices, fetching data on the server and passing props to the UI components.

Its a modern front end application using Sanity.io as a headless CMS, fetching the data using GROQ queries and server side API routes, then rendering on the client side with react state management.

The two main bits of functionality are the floating nav and the photo gallery.

The photo gallery fetches the image data form the CMS and filters images by category on the client.

Organising the code base has been really satisfying! 



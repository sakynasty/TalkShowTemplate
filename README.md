# Virtual Show Production Rework

## 🚧 Important notice
Everyone has the right to use the code of the repo "VSPRework" by [@sakyblume](https://github.com/sakyblume) nevertheless all quotations of the code and original design must remain effective by respect of the working hours on the site which you avoid thanks to that.

## 👀 Launch & Demo 
Install & Launch Dev Server
```cmd
git clone https://github.com/sakyblume/VSPRework
cd VSPRework
npm i
npm run dev
```

Check which adapter is right for you in production mode with the [Astro Guides: Deploy](https://docs.astro.build/guides/deploy/).

Warning: If you don't need [Astro's server side](https://docs.astro.build/guides/server-side-rendering/) or "hybrid" mode, change "server"/"hybrid" to "static".

[![Open in StackBlitz](https://github.com/sakyblume/VSPRework/blob/main/r.md_assets/launch/stackblitz.svg?raw=true)](https://stackblitz.com/github/sakyblume/VSPRework?file=README.md)
[![Open in GitHub Codespaces](https://github.com/sakyblume/VSPRework/blob/main/r.md_assets/launch/github-codespaces.svg?raw=true)](https://codespaces.new/sakyblume/VSPRework)

> 🧑‍🚀 **Why Rework?** A breath of fresh air for the VSP! [Watch the comparison](https://github.com/sakyblume/VSPRework/tree/main/r.md_assets/vsp-compare/)

![new-homepage](https://github.com/sakyblume/VSPRework/blob/main/r.md_assets/vsp-compare/rework-by-me/vsp-demo-2023-09-20-20_50_35.png?raw=true)

## 🚀 Project Structure

Inside of my Astro project for VSP, you'll see the following folders and files:

```
/
├── public/
│   ├── assets/
│   │    └── img/
│   │        ├── FavEmission/ # Link to FavEmission Component
│   │        │   └── *.png-jpg 
│   │        ├── HeadImage/ # Link to HeadImage Component
│   │        │   └── *.png-jpg 
│   │        ├── JoinSocial/ # Link to JoinSocial Component
│   │        │   └── *.png-jpg 
│   │        ├── LastPost/ # Link to LastPost Component
│   │        │   └── *.png-jpg 
│   │        ├── Partner/ # Link to Partner Component
│   │        │   └── *.png-jpg
│   │        └── Staff/ # Link to Staff Component
│   │        └── *.webp
│   ├── fakeAPI/ # Fake API for LastPost Component
│   │   └── lastPost.json 
│   └── favicon.svg
├── src/
│   ├── assets/
│   │    └── js/*.js
│   ├── components/
│   │    ├── Emissions/
│   │    │    ├── Head.astro
│   │    │    └── Video.astro
│   │    ├── LastPost/ # Link to LastPost Component
│   │    │    └── Card.astro
│   │    ├── AboutVSP.astro
│   │    ├── FavEmission.astro
│   │    ├── Footer.astro
│   │    ├── HeadImage.astro
│   │    ├── LastPost.astro 
│   │    ├── Navbar.astro
│   │    ├── Partner.astro
│   │    └── StaffCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── emission/
│       │   ├── kus-talk-show.astro
│       │   ├── personal-journey.astro
│       │   └── reportages.astro
│       ├── film/
│       │   ├── lost-in-the-metaverse.astro
│       │   └── wrong-person-bad-job.astro
│       ├── participer/
│       │   └── personal-journey.astro
│       ├── a-propos.astro
│       ├── contact.astro
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or contact me for help.

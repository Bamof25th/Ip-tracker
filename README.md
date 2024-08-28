# IP address tracker

📍A website to track and obtain information based on an IP address or a domain. This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). To get the IP Address info I used the [IP Geolocation API by IPify](https://geo.ipify.org/). To generate the map I used [LeafletJS](https://leafletjs.com/).

[Solution][solution-url] . [Live Page][live-page]

</div>

<details>
<summary>Table of contents</summary>

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

</details>

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location



### Links

- [Solution][solution-url]
- [Live Page][live-page]

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Vitejs](https://vitejs.dev)
- [Axios](https://axios-http.com)
- [LeafletJS](https://leafletjs.com/) - For map generation
- [IP Geolocation API by IPify](https://geo.ipify.org/) - To obtain the information of the IP or domain

<p align="right">(<a href="#top">back to top</a>)</p>

### What I learned

This challenge in particular was easy except for one thing: updating the map when getting the information, in the official Leaflet documentation it is made clear that the map is immutable, so I decided to investigate and found [React Leaflet](https://react-leaflet.js.org), which made it much easier for me. To update the map I used React's key.

At the end the code of the map is as follows:

```js
<MapContainer
  key={JSON.stringify([info.location.lat, info.location.lng])}
  center={[info.location.lat || 0, info.location.lng || 0]}
  zoom={17.5}
  id="map"
>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker
    position={[info.location.lat || 0, info.location.lng || 0]}
    icon={locationIcon}
  ></Marker>
</MapContainer>
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Useful resources

- [React Leaflet](https://react-leaflet.js.org) - Made it easy for me to use leaflet in React

<p align="right">(<a href="#top">back to top</a>)</p>

## Author

- Email - [cosmohydra17@gmail.com](mailto:cosmohydra17@gmail.com)
- Instagram - [@cosmo_art0](https://www.instagram.com/cosmo_art0/)
- Twitter - [@CosmoArt0](https://twitter.com/cosmoart0)
- Frontend Mentor - [@CosmoArt](https://www.frontendmentor.io/profile/cosmoart)

<p align="right">(<a href="#top">back to top</a>)</p>

[live-page]: https://ip-trackerr.vercel.app
[solution-url]: https://www.frontendmentor.io/solutions/ip-address-tracker-solution-tHNFTFIXxt

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# Angular Webapp

<!-- toc -->

- [Create an Angular project](#Create-an-Angular-project)
- [An overview of folder `src`](#An-overview-of-folder-src)
  * [`styles.css`](#stylescss)
  * [`main.ts`](#maints)
  * [`index.html`](#indexhtml)
  * [Folder `app`](#Folder-app)
    + [`app.module.ts`](#appmodulets)
    + [Component `AppComponent`](#Component-AppComponent)
- [Implementation](#Implementation)
  * [Component `Map`](#Component-Map)
    + [Generate new component named `MapComponent`](#Generate-new-component-named-MapComponent)
    + [Install the package Leaflet and its peer dependencies](#Install-the-package-Leaflet-and-its-peer-dependencies)

<!-- tocstop -->

### Create an Angular project

```
ng new my-dream-app
cd my-dream-app
ng serve
```

Open browser with `http://localhost:4200`

### An overview of folder `src`

#### `styles.css`

#### `main.ts`

Entry point

#### `index.html`

Angular program will generate a webapp by constructing this file from folder `app`

TODO: Change title

#### Folder `app`

##### `app.module.ts`

Importing modules and declaring components, which are used in this webapp.

##### Component `AppComponent`

- The boostrap and base component, including 4 files: 
  - `app.component.ts`: implementing javascript part
  - `app.component.spec.ts` (optional): declare testcases
  - `app.component.html`: implementing html part
  - `app.component.css`: implementing css part

### Implementation

#### Component `Map`

##### Generate new component named `MapComponent`

```
ng generate component map
```

##### Install the package Leaflet and its peer dependencies

[GitHub - Asymmetrik/ngx-leaflet: Core Leaflet package for Angular.io](https://github.com/Asymmetrik/ngx-leaflet)

1. Install Leaflet, this library, and potentially the Leaflet typings

```
npm install leaflet
npm install @asymmetrik/ngx-leaflet
npm install --save-dev @types/leaflet
```

2. Import the Leaflet stylesheet

Adding Styles in Angular CLI

3. Import the Leaflet module into your Angular project

Typescript Angular.io Module Import

`app.module.ts`

4. Create and configure a map


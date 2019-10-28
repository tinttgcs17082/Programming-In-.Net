---
marp: true
---

# Angular Webapp Development

Add Google Map to the SPA

---

## Outline

- Requirements
- Installing required packages
  - `ngx-leaflet`
  - `boostrap`

---

## Requirements

Following the guide in `1-angular-webapp-slides.pdf`

---

## Installing required packages

---

### Required Packages: `ngx-leaflet`

Check the following [link](https://github.com/Asymmetrik/ngx-leaflet)

Apply the following steps:

- Install Leaflet, this library, and potentially the Leaflet typings
- Import the Leaflet stylesheet - Adding Styles in Angular CLI
- Import the Leaflet module into your Angular project - Typescript Angular.io Module Import
- Create and configure a map (read only)

---

### Import the Leaflet module into your Angular project

Open file `app.module.ts`, and modify as follows:

```typescript
...
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  ...
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot()
  ],
  ...
})
export class AppModule { }
```

---

### Required Packages: `boostrap`

Run the following commands to install the package

```bash
$ npm install bootstrap --save
$ npm install jquery --save
$ npm install popper.js --save
```

---

### Required Packages: `boostrap` (con't)

Modify in `angular.json` as follows:

```json
{
  ...
  "projects": {
    "AngularGrid": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "assets": [
              "src/favicon.ico",
              "src/assets",
              {
                "glob": "**/*",
                "input": "./node_modules/leaflet/dist/images",
                "output": "assets/"
              }
            ],
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss",
              "./node_modules/leaflet/dist/leaflet.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },
          ...
        },
        ...
      }
    }},
  ...
}
```

---

## Adding Components

---

### Start the webapp

```bash
$ ng serve
```

### Adding `leaflet-demo` component

Open new termninal at the same directory

```bash
$ ng generate component leaflet-demo
```

A new folder including source files which are added

---

### Modify `app.component.html`

Modify to the content as follows

```html
<app-leaflet-demo></app-leaflet-demo>
```

And check your browser, what do you see?

---

### Modify `app.module.ts`

Add the following content

```typescript
...
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
...

@NgModule({
  ...
  imports: [
    ...
    CommonModule,
    FormsModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

---

### Modifying `leaflet-demo.component.html`

Copy content of the file in `oct-28/angular-webapp/src/app/leaflet-demo/leaflet-demo.component.html`

---

### Modifying `leaflet-demo.component.ts`

Copy content of the file in `oct-28/angular-webapp/src/app/leaflet-demo/leaflet-demo.component.ts`
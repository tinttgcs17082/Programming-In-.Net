Take node

1. Install NodeJS

[Node.js](https://nodejs.org/en/)

2. Install Angular CLI and create new project

- If window, open `cmd`. If mac os, open `terminal`

```
npm install -g @angular/cli
ng new my-first-app
cd new my-first-app

ng serve
```

- Open browser with `http://localhost:4200`

3. Add `product-list` component

```
ng generate component product-list
```

4. Open `app.component.html` file

- Select all, then delete and add the content

```html
<app-product-list></app-product-list>
```
- Check the browser
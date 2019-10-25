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

5. Open `product-list.component.ts` and add

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

```
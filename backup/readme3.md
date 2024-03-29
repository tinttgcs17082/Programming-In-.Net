Take node

1. Install NodeJS

[Node.js](https://nodejs.org/en/)

2. Install Angular CLI and create new project

- If window, open `cmd`. If mac os, open `terminal`

```
npm install -g @angular/cli
ng new my-first-app
cd my-first-app

ng serve
```

- Open browser with `http://localhost:4200`

3. Open `index.html` and add

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My First App</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

4. Add `product-list` component

```
ng generate component product-list
```

5. Open `app.component.html` file

- Select all, then delete and add the content

```html
<app-product-list></app-product-list>
```
- Check the browser

6. Open `product-list.component.ts` and add

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

  share() {
    window.alert('The product has been shared!');
  }

}


```

7. Open `product-list.component.html` and add

```html
<h2>Products</h2>
```

8. Config router

Open `app-routing.module.ts`, add the following code 

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

9. Open `app.component.html` and add

```typescript
<app-top-bar></app-top-bar>

<div class="container">
  <router-outlet></router-outlet>
</div>
```

10. Open `app.component.css` and add

```css
p {
  font-family: Lato;
}
```

11. Open `styles.css` and add

```css
/* Global Styles */

* {
  font-family: 'Roboto', Arial, sans-serif;
  color: #616161;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

.container {
  display: flex;
  flex-direction: row;
}

router-outlet + *  {
  padding: 0 16px;
}

/* Text */

h1 {
  font-size: 32px;
}

h2 {
  font-size: 20px;
}

h1, h2 {
  font-weight: lighter;
}

p {
  font-size: 14px;
}

/* Hyperlink */

a {
  cursor: pointer;
  color: #1976d2;
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
}

/* Input */

input {
  font-size: 14px;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #BDBDBD;
}

label {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
  text-transform: uppercase;
}

/* Button */
.button, button {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  background-color: #1976d2;
  color: white;
  border: none;
}

.button:hover, button:hover {
  opacity: 0.8;
  font-weight: normal;
}

.button:disabled, button:disabled {
  opacity: 0.5;
  cursor: auto;
}

/* Fancy Button */

.fancy-button {
  background-color: white;
  color: #1976d2;
}

.fancy-button i.material-icons {
  color: #1976d2;
  padding-right: 4px;
}

/* Top Bar */

app-top-bar {
  width: 100%;
  height: 68px;
  background-color: #1976d2;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

app-top-bar h1 {
  color: white;
  margin: 0;
}

/* Checkout Cart, Shipping Prices */

.cart-item, .shipping-item {
  width: 100%;
  min-width: 400px;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 32px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: #EEEEEE;
}
```

12. Add `top-bar` component

```
ng g c top-bar
```

13. Open `top-bar.component.html` and add

```typescript
<a [routerLink]="['/']">
  <h1>My Store</h1>
</a>

<a [routerLink]="['/cart']" class="button fancy-button"><i class="material-icons">shopping_cart</i>Checkout</a>
```

14. Open `product-list.component.html` and add

```html
<h2>Products</h2>

<div *ngFor="let product of products">
    <h3>
        {{ product.name }}
    </h3>
</div>
```

15. Open `product-list.component.html` and add

```html
<h2>Products</h2>

<div *ngFor="let product of products">
    <h3>
        <a [title]="product.name + ' details'">
            {{ product.name }}
        </a>
    </h3>
</div>
```

16. Open `product-list.component.html` and add

```html
<h2>Products</h2>

<div *ngFor="let product of products">

  <h3>
    <a [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>

  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

</div>
```

17. Open `product-list.component.html` and add

```html
<h2>Products</h2>

<div *ngFor="let product of products">

  <h3>
    <a [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>

  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

  <button (click)="share()">
    Share
  </button>

</div>
```

18. Add `product-alerts` component

```
ng g c product-alerts
```

19. Open `product-alerts.component.ts` and add

```typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
```

20. Open `product-alerts.component.html` and add

```html
<p *ngIf="product.price > 700">
  <button>Notify Me</button>
</p>
```

21. Open `product-list.component.html` and add

```html
<h2>Products</h2>

<div *ngFor="let product of products">

  <h3>
    <a [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>

  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

  <button (click)="share()">
    Share
  </button>

  <app-product-alerts [product]="product">
  </app-product-alerts>

</div>
```

22. Open `product-alerts.component.ts` and add

```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
```

23. Open `product-alerts.component.html` and add

```html
<p *ngIf="product.price > 700">
  <button (click)="notify.emit()">Notify Me</button>
</p>
```

24. Open `product-list.component.ts` and add

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

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

```

25. Open `product-list.component.html` and add

```html
<h2>Products</h2>

<div *ngFor="let product of products">

  <h3>
    <a [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>

  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

  <button (click)="share()">
    Share
  </button>

  <app-product-alerts [product]="product" (notify)="onNotify()">
  </app-product-alerts>

</div>
```
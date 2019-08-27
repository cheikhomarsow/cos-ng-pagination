### Generic Pagination for Angular

Angular component that provides pagination. Navigating through the pagination triggers an event that will load the current page. 
[DEMO](https://stackblitz.com/edit/angular-qckd5k)

#### Install

The module can be installed using [npm](https://www.npmjs.com).

```javascript
npm i cos-pagination
```

#### Usage

Import **CosNgPaginationModule** from **cos-pagination**:

```javascript
import { CosNgPaginationModule } from 'cos-pagination'
```

Add **CosNgPaginationModule** to the imports of your NgModule:

```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CosNgPaginationModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

use in your templates to add pagination in your view like below

```javascript
<cos-pagination [total]="total" [current]="current" [size]="size" (pageChanged)="onPageChanged($event)"></cos-pagination>
```

#### Options

*   total

    **[Number]** The total number of items in the database.

*   size

    **[Number]** The number of items to display per page.

*   current

    **[Number]** Current page (active) page number.

*   startFrom

    **[Number]** Start index, should equals to 0 or 1. Default is 1.

*   isDirectionLinksEnabled

    **[boolean]** If set to false, the "previous" and "next" links will not be displayed. Default is true.

*   pageChanged

    **[event handler]** The expression specified will be invoked whenever the page changes via a click on one of the pagination controls. The $event argument will be the number of the new page. This should be used to update the value of the currentPage variable which was passed to the PaginatePipe.

*   language

    **[string]** Default language is **English** (**'en'**). Also **French** (**'fr'**), **Portuguese** (**'pt'**) are available


For making the styling work fine, you should included bootstrap to your project.




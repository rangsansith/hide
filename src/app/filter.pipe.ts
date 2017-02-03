import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, category: any): any {
    if (category === 'all') return products;
    return products.filter(product => {
      return product.category === category;
    });
  }

}

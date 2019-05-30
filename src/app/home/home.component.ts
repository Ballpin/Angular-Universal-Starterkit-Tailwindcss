import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="rounded-lg md:w-56" [src]="image" alt="Woman paying for a purchase">
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">{{message}}</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">With Tailwindcss</a>
          <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae commodi corporis culpa
            cum dicta ea, explicabo id illum laudantium minima nostrum odio perferendis quibusdam ullam. Nesciunt quaerat sit ut.</p>
        </div>
      </div>
    `
})
export class HomeComponent {
    public message = `Angular Universal`;
    // tslint:disable-next-line:max-line-length
    public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';

    constructor() {
    }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProducatsService } from '../producats.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories$: Observable<any>;
    constructor(public http: HttpClient, public prudactService: ProducatsService, private router: Router) { }

  ngOnInit() {
    this.categories$ = this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories',
    );
    this.categories$.subscribe((data) => {
      console.log(data);
    }, error => {console.log(error);
    });
  }
 public redirectToProdactsPage(category: any) {
  this.prudactService.category = category;
  // redriect to the products page
  this.router.navigateByUrl('category-details');
  }
}

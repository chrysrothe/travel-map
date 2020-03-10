import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class LocationService {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public updateQueryParams(params: Params): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: params,
        queryParamsHandling: 'merge'
      }
    );
  }
}

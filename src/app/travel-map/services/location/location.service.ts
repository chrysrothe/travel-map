import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WindowService } from '../window/window.service';

@Injectable()
export class LocationService {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private windowService: WindowService
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

  public redirectToPrivacy(): void {
    this.windowService.window.open('https://christianrothe.blog/privacy');
  }

  public redirectToImprint(): void {
    this.windowService.window.open('https://christianrothe.blog/imprint');
  }

  public redirectToInstagram(): void {
    this.windowService.window.open('https://www.instagram.com/travelwithchrys/');
  }
}

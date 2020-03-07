import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent {
  @HostBinding('class.is-active')
  @Input() public isActive: boolean = false;

  public toggleSideBarOpen(): void {
    this.isActive = !this.isActive;
  }
}

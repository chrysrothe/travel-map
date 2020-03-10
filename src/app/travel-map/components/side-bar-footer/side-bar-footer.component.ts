import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar-footer',
  templateUrl: './side-bar-footer.component.html',
  styleUrls: ['./side-bar-footer.component.less']
})
export class SideBarFooterComponent {
  @Output() public privacyClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() public imprintClick: EventEmitter<void> = new EventEmitter<void>();

  public onPrivacyClick(): void {
    this.privacyClick.emit();
  }

  public onImprintClick(): void {
    this.imprintClick.emit();
  }
}

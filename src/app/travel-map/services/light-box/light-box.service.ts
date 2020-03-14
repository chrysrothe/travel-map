import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ImageSize } from '../../components/light-box/light-box.component';

const IMAGE_OFFSET_WIDTH = 50;
const IMAGE_OFFSET_HEIGHT = 150;

@Injectable()
export class LightBoxService {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  public calculateImageSize(
    imageHeight: number,
    imageWidth: number
  ): ImageSize {
    let calculatedImageHeight = imageHeight;
    let calculatedImageWidth = imageWidth;

    const maxImageWidth = this.getWindowWidth() - IMAGE_OFFSET_WIDTH;
    const maxImageHeight = this.getWindowHeight() - IMAGE_OFFSET_HEIGHT;

    if (imageWidth < maxImageWidth && imageHeight < maxImageHeight) {
      return {
        height: imageHeight,
        width: imageWidth
      };
    }

    if ((imageWidth / maxImageWidth) > (imageHeight / maxImageHeight)) {
      calculatedImageWidth = maxImageWidth;
      calculatedImageHeight = Math.round(imageHeight / (imageWidth / calculatedImageWidth));
    } else {
      calculatedImageHeight = maxImageHeight;
      calculatedImageWidth = Math.round(imageWidth / (imageHeight / calculatedImageHeight));
    }

    return {
      height: calculatedImageHeight,
      width: calculatedImageWidth
    };
  }

  private getWindowWidth(): number {
    return Math.max(
      this.document.body.scrollWidth,
      this.document.body.offsetWidth,
      this.document.documentElement.clientWidth,
      this.document.documentElement.scrollWidth,
      this.document.documentElement.offsetWidth
    );
  }

  private getWindowHeight(): number {
    return Math.max(
      this.document.body.scrollHeight,
      this.document.body.offsetHeight,
      this.document.documentElement.clientHeight,
      this.document.documentElement.scrollHeight,
      this.document.documentElement.offsetHeight
    );
  }
}

import { NgModule } from "@angular/core";
import { TextContentComponent } from "./text-content/text-content.component";
import { VideoContentComponent } from "./video-content/video-content.component";


@NgModule({
  declarations: [TextContentComponent, VideoContentComponent],
  exports: [TextContentComponent, VideoContentComponent],
})
export class BaseUiModule {}

import { NgModule } from "@angular/core";
import { SamplePipe } from './sample.pipe';

@NgModule({
    imports: [],
    declarations: [SamplePipe],
    exports: [SamplePipe]
})
export class PipesModule { }
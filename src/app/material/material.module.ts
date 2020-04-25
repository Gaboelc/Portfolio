import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

const MaterialComponents = [MatTabsModule, MatCardModule, MatButtonModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}

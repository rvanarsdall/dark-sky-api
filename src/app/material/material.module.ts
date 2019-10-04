import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {
  MatInputModule,
  MatToolbarModule,
  MatStepperModule,
  MatNativeDateModule
} from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";

const material = [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatRadioModule,
  MatTableModule,
  MatGridListModule,
  MatSelectModule,
  MatTabsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatStepperModule,
  MatNativeDateModule
];
@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule {}

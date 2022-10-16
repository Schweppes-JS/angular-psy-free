import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MaterialComponents = [MatProgressSpinnerModule, MatTabsModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule];

@NgModule({ imports: [MaterialComponents], exports: [MaterialComponents] })
export class MaterialModule { }

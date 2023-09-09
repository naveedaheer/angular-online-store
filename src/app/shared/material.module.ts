// Also see: https://github.com/angular/material2/blob/master/CHANGELOG.md#materialmodule

import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule, 
        MatInputModule, 
        MatFormFieldModule, 
        ReactiveFormsModule,
        MatCardModule,
        MatChipsModule
    ]
})
export class MaterialModule { }

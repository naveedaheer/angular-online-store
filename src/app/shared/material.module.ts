// Also see: https://github.com/angular/material2/blob/master/CHANGELOG.md#materialmodule

import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule { }

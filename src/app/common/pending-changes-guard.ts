import { CanDeactivate, Router } from '@angular/router';
import { Optional } from '@angular/core';
import { ComponentCanDeactivate } from './ComponentCanDeactivate';

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {

    constructor(@Optional() private router?: Router) {
    }

    canDeactivate(component: ComponentCanDeactivate) {
        console.log('deactivate');
        return false;
    }
}
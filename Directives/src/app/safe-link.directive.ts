import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    queryParam = input('myapp');
    constructor() {
        console.log("SafeLink is active");
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm("Want to leave?");
        // private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

        if(wantsToLeave) {
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from' + this.queryParam();
            return;
        }

        event?.preventDefault();
    }
}
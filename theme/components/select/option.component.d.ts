import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NbFocusableOption } from '../cdk';
export declare class NbOptionComponent<T> implements OnDestroy, NbFocusableOption {
    protected parent: any;
    protected elementRef: ElementRef;
    protected cd: ChangeDetectorRef;
    protected disabledByGroup: boolean;
    /**
     * Option value that will be fired on selection.
     * */
    value: T;
    disabled: boolean;
    protected _disabled: boolean;
    /**
     * Fires value when option selection change.
     * */
    selectionChange: EventEmitter<NbOptionComponent<T>>;
    /**
     * Fires when option clicked
     */
    private click$;
    readonly click: Observable<NbOptionComponent<T>>;
    selected: boolean;
    protected alive: boolean;
    constructor(parent: any, elementRef: ElementRef, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    /**
     * Determines should we render checkbox.
     * */
    readonly withCheckbox: boolean;
    readonly content: any;
    readonly multiple: any;
    readonly selectedClass: boolean;
    readonly disabledAttribute: '' | null;
    readonly tabindex: string;
    onClick(event: Event): void;
    select(): void;
    deselect(): void;
    /**
     * Sets disabled by group state and marks component for check.
     */
    setDisabledByGroupState(disabled: boolean): void;
    protected setSelection(selected: boolean): void;
    focus(): void;
    getLabel(): string;
}

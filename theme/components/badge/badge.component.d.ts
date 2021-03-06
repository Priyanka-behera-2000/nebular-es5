/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbComponentStatus } from '../component-status';
export declare type NbBadgePhysicalPosition = 'top left' | 'top right' | 'bottom left' | 'bottom right';
export declare type NbBadgeLogicalPosition = 'top start' | 'top end' | 'bottom start' | 'bottom end';
export declare type NbBadgePosition = NbBadgePhysicalPosition | NbBadgeLogicalPosition;
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-border-radius:
 * badge-text-font-family:
 * badge-text-font-size:
 * badge-text-font-weight:
 * badge-text-line-height:
 * badge-padding:
 * badge-primary-background-color:
 * badge-primary-text-color:
 * badge-success-background-color:
 * badge-success-text-color:
 * badge-info-background-color:
 * badge-info-text-color:
 * badge-warning-background-color:
 * badge-warning-text-color:
 * badge-danger-background-color:
 * badge-danger-text-color:
 */
export declare class NbBadgeComponent {
    /**
     * Text to display
     * @type string
     */
    text: string;
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    position: NbBadgePosition;
    protected _defaultPosition: NbBadgePosition;
    protected _position: NbBadgePosition;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     */
    status: NbComponentStatus;
    readonly primary: boolean;
    readonly success: boolean;
    readonly info: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    readonly top: boolean;
    readonly right: boolean;
    readonly bottom: boolean;
    readonly left: boolean;
    readonly start: boolean;
    readonly end: boolean;
}

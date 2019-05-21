import { NbComponentStatus } from '../component-status';
import { NbPosition, NbRenderableContainer } from '../cdk';
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-max-width:
 * tooltip-primary-background-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-text-color:
 * tooltip-shadow:
 */
export declare class NbTooltipComponent implements NbRenderableContainer {
    content: string;
    /**
     * Popover position relatively host element.
     * */
    position: NbPosition;
    readonly binding: string;
    readonly show: boolean;
    context: {
        icon?: string;
        status?: '' | NbComponentStatus;
    };
    readonly statusClass: string;
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent(): void;
}

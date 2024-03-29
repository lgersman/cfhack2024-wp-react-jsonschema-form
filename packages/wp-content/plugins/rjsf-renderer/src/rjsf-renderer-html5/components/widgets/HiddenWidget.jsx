/** The `HiddenWidget` is a widget for rendering a hidden input field.
 *  It is typically used by setting type to "hidden".
 *
 * @param props - The `WidgetProps` for this component
 */
function HiddenWidget({ id, value, }) {
    return <input type='hidden' id={id} name={id} value={typeof value === 'undefined' ? '' : value}/>;
}
export default HiddenWidget;

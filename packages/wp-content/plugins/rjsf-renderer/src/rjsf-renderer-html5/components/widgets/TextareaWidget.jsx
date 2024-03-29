import { useCallback } from 'react';
import { ariaDescribedByIds } from '@rjsf/utils';
/** The `TextareaWidget` is a widget for rendering input fields as textarea.
 *
 * @param props - The `WidgetProps` for this component
 */
function TextareaWidget({ id, options = {}, placeholder, value, required, disabled, readonly, autofocus = false, onChange, onBlur, onFocus, }) {
    const handleChange = useCallback(({ target: { value } }) => onChange(value === '' ? options.emptyValue : value), [onChange, options.emptyValue]);
    const handleBlur = useCallback(({ target: { value } }) => onBlur(id, value), [onBlur, id]);
    const handleFocus = useCallback(({ target: { value } }) => onFocus(id, value), [id, onFocus]);
    return (<textarea id={id} name={id} className='form-control' value={value ? value : ''} placeholder={placeholder} required={required} disabled={disabled} readOnly={readonly} autoFocus={autofocus} rows={options.rows} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} aria-describedby={ariaDescribedByIds(id)}/>);
}
TextareaWidget.defaultProps = {
    autofocus: false,
    options: {},
};
export default TextareaWidget;

import { labelValue, schemaRequiresTrueValue, } from '@rjsf/utils';
import { CheckboxControl } from '@wordpress/components';
/** The `CheckBoxWidget` is a widget for rendering boolean properties.
 *  It is typically used to represent a boolean.
 *
 * @param props - The `WidgetProps` for this component
 */
function CheckboxWidget({ schema, uiSchema, options, id, value, disabled, readonly, label, hideLabel, autofocus = false, onBlur, onFocus, onChange, registry, }) {
  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema);
  const description = options.description ?? schema.description;

  return (
    <>
      <CheckboxControl
        required={required}
        checked={typeof value === 'undefined' ? false : value}
        label={labelValue(<span>{label}</span>, hideLabel)}
        help={description}
        onChange={onChange}
      />
    </>
  );
}
export default CheckboxWidget;

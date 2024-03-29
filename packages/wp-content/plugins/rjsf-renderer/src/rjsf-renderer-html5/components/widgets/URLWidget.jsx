import { getTemplate } from '@rjsf/utils';
/** The `URLWidget` component uses the `BaseInputTemplate` changing the type to `url`.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function URLWidget(props) {
    const { options, registry } = props;
    const BaseInputTemplate = getTemplate('BaseInputTemplate', registry, options);
    return <BaseInputTemplate type='url' {...props}/>;
}

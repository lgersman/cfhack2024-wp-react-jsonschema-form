import ArrayFieldDescriptionTemplate from './ArrayFieldDescriptionTemplate';
import ArrayFieldItemTemplate from './ArrayFieldItemTemplate';
import ArrayFieldTemplate from './ArrayFieldTemplate';
import ArrayFieldTitleTemplate from './ArrayFieldTitleTemplate';
import BaseInputTemplate from './BaseInputTemplate';
import ButtonTemplates from './ButtonTemplates';
import DescriptionField from './DescriptionField';
import ErrorList from './ErrorList';
import FieldTemplate from './FieldTemplate';
import FieldErrorTemplate from './FieldErrorTemplate';
import FieldHelpTemplate from './FieldHelpTemplate';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import TitleField from './TitleField';
import UnsupportedField from './UnsupportedField';
import WrapIfAdditionalTemplate from './WrapIfAdditionalTemplate';
import TabFieldTemplate from './TabFieldTemplate';
function templates() {
    return {
        ArrayFieldDescriptionTemplate,
        ArrayFieldItemTemplate,
        ArrayFieldTemplate,
        ArrayFieldTitleTemplate,
        ButtonTemplates: ButtonTemplates(),
        BaseInputTemplate,
        DescriptionFieldTemplate: DescriptionField,
        ErrorListTemplate: ErrorList,
        FieldTemplate,
        FieldErrorTemplate,
        FieldHelpTemplate,
        ObjectFieldTemplate,
        TitleFieldTemplate: TitleField,
        UnsupportedFieldTemplate: UnsupportedField,
        WrapIfAdditionalTemplate,
        TabFieldTemplate
    };
}
export default templates;

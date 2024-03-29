import { Panel, PanelBody, TextareaControl } from '@wordpress/components';
import { useRef, useState, useCallback } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

import Icon from '../../../../../../shared/src/hackathon-icon.js';

function Icon32() {
  return (
    <Icon size={ 32 }/>
  );
}

export default function Sidebar() {
  const data = useSelect( select => {
    return select( 'core/editor' ).getEditedPostAttribute( 'meta' )?.['editor-sidebar-plugin-data'] || '{}';
  }, [] );

  const { editPost } = useDispatch( 'core/editor' );
  const setData = useCallback( ( value ) => {
    editPost( { meta: { 'editor-sidebar-plugin-data' : value } } );
  }, [] );

  const [ intermediateValue, setIntermediateValue ] = useState(JSON.stringify(JSON.parse( data), null, 2));
  const textareaRef = useRef();

  const onChange = (value) => {
    try {
      const object = JSON.parse(value);
      setData(JSON.stringify(object, null, 2));
      textareaRef.current?.setCustomValidity('');
    } catch(ex) {
      textareaRef.current?.setCustomValidity(ex.message);
    }
    setIntermediateValue(value);
  };

  return (
    <>
      <PluginSidebarMoreMenuItem target="editor-sidebar-plugin-panel">
      { __( 'cfhack2024 Sidebar Plugin', 'editor-sidebar-plugin' ) }
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
          name="editor-sidebar-plugin-panel"
          title={ __( 'cfhack2024 Sidebar Plugin', 'editor-sidebar-plugin' ) }
      >
        <Panel>
          <PanelBody
              title={ __( 'cfhack2024 Sidebar Plugin JSON Schema Form', 'editor-sidebar-plugin' ) }
              icon={ Icon32 }
          >
            <TextareaControl
                className="editor-sidebar-plugin-jsoneditor"
                ref={ textareaRef }
                value={ intermediateValue }
                help={ __( 'This textarea acts as a placeholder for the JSON Schema form to be rendered. The entered data will be spit into the published page header.', 'editor-sidebar-plugin' ) }
                label={ __( 'JSON data', 'editor-sidebar-plugin' ) }
                onChange={ onChange }
            />
          </PanelBody>
        </Panel>
      </PluginSidebar>
    </>
  );
}

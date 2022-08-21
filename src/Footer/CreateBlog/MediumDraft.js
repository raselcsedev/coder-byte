import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { Editor } from "react-draft-wysiwyg";
import { RichUtils, EditorState, convertToRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./WYSIWYG.scss";
// import Editor from "draft-js-plugins-editor";
import createMentionPlugin, {
    defaultSuggestionsFilter

} from "draft-js-mention-plugin";
import "draft-js/dist/Draft.css";
import "draft-js-mention-plugin/lib/plugin.css";

// import mentions from "./mentions";
// import {
//   BlockStyleControls,
//   InlineStyleControls,
//   getBlockStyle,
//   styleMap
// } from "./draftjsUtils";
// import ConceptChip from "./ConceptChip";
// import "./rich-editor.css";
import {
    Editor as MediumEditor,
    createEditorState, ImageSideButton, BreakSideButton
} from "medium-draft";

import EmbedSideButton from './EmbedSideButton'

import "medium-draft/lib/index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// Draft-JS-Mentions plugin configuration
const mentionPlugin = createMentionPlugin({
    mentionTrigger: ">"
    // mentionComponent: ({ entityKey, mention, className, decoratedText }) => {
    //   return (
    //     <div className={className} onMouseOver={() => console.log(mention)}>
    //       {decoratedText}
    //     </div>
    //   );
    // mentionComponent: ({ entityKey, mention, className, decoratedText }) => (
    //   <ConceptChip
    //     label={decoratedText}
    //     concept={mention}
    //     onHover={concept => console.log(concept)}
    //   />
    // )
});
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];



const MediumDraft = () => {
    const { handleSubmit, control, watch } = useForm({
        mode: "onChange"
    });
    //   const [suggestions, setSuggestions] = React.useState(mentions);

    // Draft-JS editor configuration
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );
    const editor = React.useRef(null);

    const [mEditorState, setmEditorState] = React.useState(() =>
        createEditorState()
    );
    const mEditor = React.useRef(null);
    const [user] = useAuthState(auth);


    const sideButtons = [
        {
            title: "Image",
            component: ImageSideButton
        },
        {
            title: 'Embed',
            component: EmbedSideButton,
        },
        {
            title: "Break",
            component: BreakSideButton
        }
    ];
    // Check editor text for mentions
    const onSearchChange = ({ value }) => {
        // setSuggestions(defaultSuggestionsFilter(value, mentions));
    };

    const onAddMention = () => { };

    // Focus on editor window
    //   const focusEditor = () => {
    //     editor.current.focus();
    //   };
    const focusmEditor = () => {
        mEditor.current.focus();
    };

    const handleSubmitOnClick = (d) => {
        console.log('dd', d);
        const s = editorState.getCurrentContent();
        console.log(convertToRaw(s));
    };

    // console.log(watch("editor_content"));

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return true;
        }
        return false;
    };

    const toggleBlockType = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };
    const toggleInlineStyle = (inlineStyle) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    return (
        <section>

            <form  onSubmit={handleSubmit(handleSubmitOnClick)}>
                <div className="flex justify-between mb-10 mr-28">
                    <h1 className="text-[brown] font-semibold">{user?.email}</h1>
                    <button type="submit" className=" btn bg-[brown] btn-xs ">
                        Publish
                    </button>

                </div>
                <Controller
                    name="editor_content2"
                    control={control}
                    defaultValue=""
                    render={(props) => (
                        <div onClick={focusmEditor}>
                            <MediumEditor

                                {...props}
                                ref={mEditor}
                                editorState={mEditorState}

                                plugins={plugins}
                                onChange={(eState) => {
                                    setmEditorState(eState);
                                }}

                                sideButtons={sideButtons}
                                placeholder={<p className="text-2xl font-semibold">Write Blog...</p>}

                            />
                        </div>
                    )}
                />


            </form>
        </section>
    );
};
export default MediumDraft;

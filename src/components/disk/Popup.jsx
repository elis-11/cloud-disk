import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../reducers/fileReducer";
import {createDir} from "../../actions/file";

const Popup = () => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
    }

    return (
        <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">create new folder</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>delete</button>
                </div>
                <Input type="text" placeholder="enter folder name..." value={dirName} setValue={setDirName}/>
                <button className="popup__create" onClick={() => createHandler()}>create</button>
            </div>
        </div>
    );
};

export default Popup;

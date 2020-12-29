import { useState } from "react";
import { MasteringPreview } from "../popup/MasteringPreview";
import { MasteringOptions } from "../popup/MasteringOptions";
import {ToggleButton} from "../btn/ToggleButton";

export function AudioController() {
  const [ audioFile, setAudioFile ] = useState(() => {
    let initData = localStorage.getItem("audio");
    if (initData) {
      return JSON.parse(initData);
    } else {
      return { fileName: "", src: "", type: ""};
    }
  });

  const [uploading, setUploading] = useState(false);
  const [ showOptions, setShowOptions ] = useState(false);
  const [ showUpload, setShowUpload ] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [toggleRef, setToggleRef] = useState(false);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const uploadFile = (e) => {
    let file = e.target.files[0];
    setUploading(true);
    getBase64(file).then(base64 => {
      let data = {
        fileName: file.name,
        type: file.type,
        src: base64
      }
      setAudioFile(data);
      localStorage.setItem("audio", JSON.stringify(data));
      setUploading(false)
    });
  }

    return (
        <div className={"above-the-fold__content page-delays page-loaded kill-delays" + (showUpload ? " upload-initiated" : "")  + (showOptions ? " options-only-initiated no-bg" : "") + (hovered ? " hovered" : "")}>
            {audioFile.type == "" && !showOptions && <div>
                <div className="container app-block">
                    <div className="row">
                        <div className="col position-inherit">
                            {!showUpload && <h1 id="heroHeading" className="hide-on-action">
                                Master<br/> Your<br/> Track,<br/><span>Instantly</span>
                            </h1>}
                            {showUpload && <h1 id="heroHeading" className="hide-on-action">Upload Track</h1>}

                            {showUpload &&  <ToggleButton toggleRef={toggleRef} setToggleRef={setToggleRef}></ToggleButton>}
                            <div className="hide-on-action above-the-fold__content-text  position-inherit">
                                <p>An online mastering engine that’s fast, easy to use, and sounds incredible</p>
                                <p><b>Made by Grammy-winning engineers, powered by AI</b></p>
                                <p id="uploadFileNotification" className="above-the-fold__notification">
                                    <img className=" lazyloaded"
                                         data-src="https://static.emastered.com/img/icon_arrow_down-1.svg"
                                         src="https://static.emastered.com/img/icon_arrow_down-1.svg"/>
                                        <span className="above-the-fold__notification--upload">Upload your track and hear it now for free</span>
                                        <span className="above-the-fold__notification--upload-2 d-none">Now upload your <span
                                            className="remaining-file-text"></span> track</span>
                                        <img className=" lazyloaded"
                                             data-src="https://static.emastered.com/img/icon_arrow_down-1.svg"
                                             src="https://static.emastered.com/img/icon_arrow_down-1.svg"/>
                                </p>
                                <a className="button-grad" id="uploadTrackMobile" href="#" onClick={() => setShowUpload(true)}>
                                    UPLOAD A TRACK
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                                        <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Desktop_Full-Length" transform="translate(-1200.000000, -7279.000000)" fill="#fff">
                                                <g id="Group-18" transform="translate(1052.000000, 7263.000000)">
                                                    <polygon id="icon_arrow_right" transform="translate(156.000000, 24.000000) rotate(-180.000000) translate(-156.000000, -24.000000) " points="164 22.989899 164 25.010101 151.878788 25.010101 157.434343 30.5656566 156 32 148 24 156 16 157.434343 17.4343434 151.878788 22.989899"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="upload hide-on-action">
                    <div className={"upload__handle upload__switch upload__handle-reference" + (toggleRef ? " diff": "")}>
                    <div className="upload__handle upload__handle--cell em-original">

                        <svg className="progress-ring" width="184" height="184">
                            <circle className="progress-ring__circle" stroke="#3d3d3d" width="184" height="184"
                                    stroke-width="10" fill="transparent" r="85" cx="92" cy="92"></circle>
                        </svg>


                        <div className="rotor">
                            <img src="https://static.emastered.com/img/upload.svg" className="upload__handle--cell-bg"/>
                                <img src="https://static.emastered.com/img/Circle.svg"
                                     className="upload__handle--cell-bg upload__handle--cell-bg-alter d-none"/>
                        </div>

                        <input id="original-fileUpload" name="file" type="file" className="upload__handle-input"
                               accept="audio/*,.mp3,.wav,.m4a,.aif,.wma,.flac,.aiff,.aax,.ogg" onChange={uploadFile} onMouseEnter={() => setHovered(true)} onMouseOut={() => setHovered(false)}/>

                            <div id="original-uploadContent" className="upload__handle-content">
                                <img src="https://static.emastered.com/img/icon_upload-1.svg"
                                     className="upload__handle--cell-img"/>
                                    <h4 className="file-upload-progress">0%</h4>
                                    <h4 className="persistant">Original</h4>
                                    <h4 className="unpersistant">Drop your track here<span>or click to browse</span></h4>
                            </div>
                        </div>
                        <div className="upload__handle upload__handle--cell upload__handle--cell-last em-reference">
                            <svg className="progress-ring" width="184" height="184">
                                <circle className="progress-ring__circle" stroke="#3d3d3d" width="184" height="184"
                                        stroke-width="10" fill="transparent" r="85" cx="92" cy="92"></circle>
                            </svg>


                            <div className="rotor">
                                <img src="https://static.emastered.com/img/upload.svg"
                                     className="upload__handle--cell-bg ls-is-cached lazyloaded"/>
                                    <img src="https://static.emastered.com/img/Circle.svg"
                                         className="lazyload upload__handle--cell-bg upload__handle--cell-bg-alter d-none"/>
                            </div>


                            <input id="reference-fileUpload" name="file" type="file" className="upload__handle-input"
                               accept="audio/*,.mp3,.wav,.m4a,.aif,.wma,.flac,.aiff,.aax,.ogg"  onChange={uploadFile} onMouseEnter={() => setHovered(true)} onMouseOut={() => setHovered(false)}/>

                            <div id="reference-uploadContent" className="upload__handle-content">
                                <img src="https://static.emastered.com/img/icon_upload-1.svg"
                                     className="upload__handle--cell-img"/>
                                    <h4 className="file-upload-progress">0%</h4>

                                    <h4 className="persistant">REFERENCE</h4>
                                    <h4 className="unpersistant">Drop your track here<span>or click to browse</span></h4>
                            </div>
                        </div>
                        <div className="upload__handle upload__handle--button d-none">
                            <a className="button round" id="cancelUpload">CANCEL</a>
                            <a className="toggleMasteringOptions button round">OPTIONS</a>
                        </div>

                    </div>
                </div>

                <div className="can hide-on-action">
                  {!showUpload && <ToggleButton toggleRef={toggleRef} setToggleRef={setToggleRef}></ToggleButton>}
                  <a className="toggleMasteringOptions button round" onClick={() => setShowOptions(true)}>OPTIONS</a>
                </div>
                <img data-src="https://static.emastered.com/img/icon_scroll_down.svg"
                  className="above-the-fold__down scroll-down-btn hide-on-action lazyloaded"
                  data-scrollto="hearTheDifferenceSection"
                  src="https://static.emastered.com/img/icon_scroll_down.svg" />
      </div>}

      {showOptions && <MasteringOptions setShowOptions={setShowOptions}></MasteringOptions>}

      { audioFile.type != "" && <MasteringPreview audio={audioFile} setAudioFile={setAudioFile}></MasteringPreview>}
    </div>
  )
}

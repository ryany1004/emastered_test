import {useState} from "react";

export function MasteringOptions(props) {
  const [tabActive, setTabActive] = useState("compressor");

  return (
    <div className="em-mastering sc-visible options-only" id="masteringPreview">
      <div className="em-mastering__header">
        <div className="em-mastering__header-left d-none">
          <span className="d-none">Title</span>
          <h3 className="em-mastering__header-left--editable">
            <p className="previewTrackTitle">-</p>
          </h3>
        </div>
        <div className="em-mastering__header-right">
          <a><i className="fas fa-window-minimize"></i></a>
          <a className="closeMasteringModal" onClick={() => props.setShowOptions(false)}><img src="https://static.emastered.com/img/x_gray.svg"/></a>
        </div>
        <div className="em-mastering__header-mobile">
          <a href="#" id="backButton"><i className="fa fa-chevron-left"></i></a>
          <span id="panelTitle">Settings</span>
          <div className="em-mastering__header-left--more" id="previewHeaderDropdownBtn">
            <div className="dropdown">
              <a id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i className="fa fa-ellipsis-h"></i>
              </a>
              <div id="previewHeaderDropdownMenu" className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton5">
                <a className="dropdown-item" id="saveToLibBtn" href="#">Save to Library</a>
                <a className="dropdown-item" id="newMasterHeader" href="../..">New Master</a>
              </div>
            </div>
          </div>
          <a  onClick={() => props.setShowOptions(false)} className="closeMasteringModal"><img src="https://static.emastered.com/img/x_gray.svg"/></a>
        </div>
      </div>
      <div className="em-mastering__sidebar">
        <div className="em-mastering__sidebar-collapse" id="accordion" role="tablist">
            <div className="em-mastering__sidebar-collapse-item playback-sidebar" data-toggle="tab"
                 href="#playback" role="tab" aria-controls="playback" aria-selected="true">
                <div className="em-mastering__sidebar-collapse-item--heading">
                    <i className="fa fa-play"></i>
                    <div className="em-mastering__sidebar-collapse-item--heading-wrapper">
                        <span></span>
                        <h3>Playback</h3>

                    </div>
                    <img src="https://static.emastered.com/img/icon_chevron_white.svg"/>
                </div>
            </div>

            <div className="em-mastering__sidebar-collapse-item active" data-toggle="tab" href="#advanced"
                 id="advancedTrigger" role="tab" aria-controls="advanced" aria-selected="true">
                <div className="em-mastering__sidebar-collapse-item--heading">
                    <i className="fa fa-sliders-h"></i>
                    <div className="em-mastering__sidebar-collapse-item--heading-wrapper">
                        <span></span>
                        <h3 className="d-block d-lg-none">Settings</h3>
                        <h3 className="d-none d-lg-block">Mastering Options</h3>
                    </div>
                    <img src="https://static.emastered.com/img/icon_chevron_white.svg"/>
                </div>
            </div>

            <div id="previewDownloadBtnWrapper" className="em-mastering__sidebar-collapse-item preset-sidebar">
                <a href="#" className="previewDownloadBtn button pink"> <img
                    src="https://static.emastered.com/img/download.svg"/>Download</a>
            </div>
            <div className="em-mastering__sidebar-collapse-item reference-track-sidebar" data-panel="refs"
                 data-toggle="tab" href="#refs" role="tab" aria-controls="refs" aria-selected="false">
                <div className="em-mastering__sidebar-collapse-item--heading">
                    <i className="fa fa-crosshairs"></i>
                    <div className="em-mastering__sidebar-collapse-item--heading-wrapper">
                        <span></span>
                        <h3>Reference</h3>
                    </div>
                    <img src="https://static.emastered.com/img/icon_chevron_white.svg"/>
                </div>
            </div>

            <div className="em-mastering__sidebar-collapse-item preset-sidebar" data-panel="presets"
                 data-toggle="tab" href="#presets" role="tab" aria-controls="presets" aria-selected="false">
                <div className="em-mastering__sidebar-collapse-item--heading">
                    <i className="fa fa-star"></i>
                    <div className="em-mastering__sidebar-collapse-item--heading-wrapper">
                        <span></span>
                        <h3>Presets</h3>
                    </div>
                    <img src="https://static.emastered.com/img/icon_chevron_white.svg"/>
                </div>
            </div>
        </div>
      </div>
      <div className="em-mastering__main" id="mainPanel">
        <div className="tab-content">
          <div className="tab-pane fade active show" id="advanced" role="tabpanel" aria-expanded="false"
               aria-labelledby="advanced-tab">

            <div id="settingsList" className="em-mastering__main-left em-mastering__main-left--options">
              <ul className="em-mastering__main-left-options nav nav-tabs kill">
                <li className="nav-item active" data-option="compressor">
                  <a className={"nav-link" + (tabActive == "compressor" ? " active": "")} onClick={() => setTabActive("compressor")} data-toggle="tab" href="#compressor">
                    <h4>Compressor Intensity</h4>
                    <span>Normal</span>
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
                <li className="nav-item active" data-option="mastering-strength">
                  <a className={"nav-link" + (tabActive == "strength" ? " active": "")} onClick={() => setTabActive("strength")} data-toggle="tab" href="#strength">
                    <h4>Mastering Strength</h4>
                    <span>Normal</span>
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
                <li className="nav-item active" data-option="stereo-width">
                  <a className={"nav-link" + (tabActive == "stereo" ? " active": "")} onClick={() => setTabActive("stereo")} data-toggle="tab" href="#stereo">
                    <h4>Stereo Width</h4>
                    <span>Normal</span>
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
                <li className="nav-item active" data-option="volume">
                  <a className={"nav-link" + (tabActive == "volume" ? " active": "")} onClick={() => setTabActive("volume")} data-toggle="tab" href="#volume">
                    <h4>Volume</h4>
                    <span>Normal</span>
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
                <li className="nav-item" data-option="eq-intensity">
                  <a className={"nav-link" + (tabActive == "equalizationIntensity" ? " active": "")} onClick={() => setTabActive("equalizationIntensity")} data-toggle="tab" href="#equalizationIntensity">
                    <h4>Equalization Intensity</h4>
                    <span>Normal</span>
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
                <li className="nav-item" data-option="eq">
                  <a className={"nav-link" + (tabActive == "equalizations" ? " active": "")} onClick={() => setTabActive("equalizations")}data-toggle="tab" href="#equalizations">
                    <h4>Equalization</h4>
                      <span>
                        <span className="slider-block__selection--multi-one">Normal</span>&nbsp;-&nbsp;
                        <span className="slider-block__selection--multi-two">Normal</span>&nbsp;-&nbsp;
                        <span className="slider-block__selection--multi-three">Normal</span>
                       </span>
                      <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="em-mastering__footer">
        <div className="em-mastering__footer-wrapper" id="masteringFooter">
          <a href="#" id="closePreMasterOptions" className="button dark" onClick={() => props.setShowOptions(false)}>Cancel</a>
          <a href="#" id="preMasterOptionsSaveBtn" className="button pink" onClick={() => props.setShowOptions(false)}> <i
            className="fa fa-check"></i>&nbsp;Save and Close</a>
        </div>
      </div>
    </div>
  )
}

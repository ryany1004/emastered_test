

export function MasteringPreview(props) {

  const removeAudio = () => {
    props.setAudioFile({fileName: "", src: "", type: ""})
    localStorage.removeItem('audio');
  }

  return (
    <div className="em-mastering sc-visible" id="masteringPreview">
      <div className="em-mastering__header">
        <div className="em-mastering__header-left d-none d-lg-block">
          <span>Title</span>
          <h3 className="em-mastering__header-left--editable">
              <p className="previewTrackTitle">{props.audio.fileName}</p>
          </h3>
        </div>
        <div className="em-mastering__header-right">
          <a><i className="fas fa-window-minimize"></i></a>
          <a className="closeMasteringModal" onClick={removeAudio}><img src="https://static.emastered.com/img/x_gray.svg"/></a>
        </div>
        <div className="em-mastering__header-mobile">
          <a href="#" id="backButton"><i className="fa fa-chevron-left"></i></a>
          <span id="panelTitle">Playback</span>
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
          <a className="closeMasteringModal"><img src="https://static.emastered.com/img/x_gray.svg"/></a>
        </div>
      </div>
      <div className="em-mastering__sidebar">
        <div className="em-mastering__sidebar-collapse" id="accordion" role="tablist">
          <div className="em-mastering__sidebar-collapse-item playback-sidebar active" data-toggle="tab"
               href="#playback" role="tab" aria-controls="playback" aria-selected="true">
            <div className="em-mastering__sidebar-collapse-item--heading">
              <i className="fa fa-play"></i>
              <div className="em-mastering__sidebar-collapse-item--heading-wrapper">
                <span></span>
                <h3>Playback</h3>

              </div>
              <img src="https://static.emastered.com/img/icon_chevron_white.svg" />
            </div>
          </div>

          <div className="em-mastering__sidebar-collapse-item" data-toggle="tab" href="#advanced" id="advancedTrigger"
               role="tab" aria-controls="advanced" aria-selected="true">
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
            <a href="#" className="previewDownloadBtn button pink"  href={props.audio.src} download={props.audio.fileName}> <img
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

          <div className="em-mastering__sidebar-collapse-item preset-sidebar" data-panel="presets" data-toggle="tab"
               href="#presets" role="tab" aria-controls="presets" aria-selected="false">
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
        <div className="tab-content d-flex justify-content-center">
          <audio controls="controls" autobuffer="autobuffer" autoPlay="autoplay" style={{display: 'inline-block', margin: "50px auto"}}>
            <source src={props.audio.src}/>
          </audio>
        </div>
      </div>
      <div className="em-mastering__footer">
        <div className="em-mastering__footer-wrapper" id="masteringFooter">
          <a href="#" id="previewDownloadBtn" className="previewDownloadBtn button pink" href={props.audio.src} download={props.audio.fileName}>
          <img src="https://static.emastered.com/img/download.svg"/>Download</a>
        </div>
      </div>
    </div>
  )
}

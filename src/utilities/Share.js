import {
    TwitterShareButton,
    WhatsappShareButton
  } from "react-share";
  import wlogo from "../images/wsharelogo.png";
  import tlogo from "../images/tsharelogo.png";
  import copy from "../images/copy.png";
  import React, { useState, useEffect } from "react";
  import { CopyToClipboard } from "react-copy-to-clipboard";

const Share = ({handleCopy}) => {
    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {
      setPageURL(window.location.href);
    }, []);
    return ( 
        <div className="share-container">
            <TwitterShareButton data-tooltip="Share to Twitter" className="share-icons tweet-share" url={pageURL}>
                <img src={tlogo} alt="twitter logo" />
            </TwitterShareButton>
            <WhatsappShareButton data-tooltip="Share to Whatsapp" className="share-icons what-share" url={pageURL}>
                <img src={wlogo} alt="whatsapp logo" />
            </WhatsappShareButton>
            <CopyToClipboard onCopy={handleCopy} data-tooltip="Copy Link to Clipboard" className="copy-share" text={pageURL}>
                <div className="copied-share">
                  <img data-tooltip="Copy Link to Clipboard" src={copy} alt="clip path" />
                </div>
            </CopyToClipboard>
        </div>
     );
}
 
export default Share;
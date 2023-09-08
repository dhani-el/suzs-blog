const RenderHtml = ({htmlContent}) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
 
export default RenderHtml;
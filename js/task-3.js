function getElemetWidth(content, padding, border) {
    let  contentWidth = parseFloat(content);
    let  paddingtWidth = parseFloat(padding);
    let  borderWidth = parseFloat(border);
    let totalWidth = contentWidth + 2 * paddingtWidth + 2 *  borderWidth;
    return totalWidth;
}
console.log(getElemetWidth( "50px", "8px", "4px", ));
    console.log(getElemetWidth( "60px", "12px", "8.5px",));
    console.log(getElemetWidth( "200px", "0px", "0px",));
 
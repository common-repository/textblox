tinyMCEPopup.onInit.add(function(ed) {
    var form = window.document.forms[0];
    function insertTBshortcode(e) {
        var tagtext;
        var textblox_id = document.getElementById('tbid').value;
        if (textblox_id != "0" ) {
            tagtext = "[textblox id=" + textblox_id + "]";
            //alert(tagtext);
        } else {
            tinyMCEPopup.close();
        }
        
        ed.execCommand('mceInsertContent', 0, tagtext);
        tinyMCEPopup.close();
        return false;
    }
	form.onsubmit = insertTBshortcode;
	tinyMCEPopup.resizeToInnerSize();
});
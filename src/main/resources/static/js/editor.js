/**
 * Adjust the textarea's height based on the height of the full container.
 */
function adjustTextAreaHeight() {
    $('#inputText').height($('#asciidocContainer').height());
}

/**
 * Update the rendered area with the converted text
 *
 * @param responseData The converted text
 */
function updateConverted(responseData) {
    $('#converted').empty().append(responseData);
    adjustTextAreaHeight();
}

/**
 * Given an input format, get the request API to use.
 *
 * @param inputFormat The input format
 */
function getAPI(inputFormat) {
    switch(inputFormat) {
        case "markdown":
            return '/convertMarkdown';
            break;
        case "asciidoc":
        default:
            return '/convertAsciidoc';
            break;
    }
}

/**
 * Given some input text, make a request to get the converted text.
 *
 * @param inputText The raw text
 * @param inputFormat The expected format
 */
function processText(inputText, inputFormat) {

    var posting = $.ajax({
        url: getAPI(inputFormat),
        processData: false,
        type: 'POST',
        data: inputText,
        dataType: 'html',
        contentType: 'text/plain; charset=UTF-8',
        success: function(responseData) {
            updateConverted(responseData);
        }
    });
}

/**
 * Update the "Download" link to embed the data.
 */
function updateDownloadLink() {

    var dataUri = 'data:text/plain;charset=utf-8,' + encodeURIComponent($('#inputText').val());
    $('#btnExport').attr({'href': dataUri, 'target': '_blank'});
}

/**
 * Once the document is ready, set up a handler that
 * triggers a request call when a "key up" event is triggered.
 */
$( document ).ready(function() {

    var lastWasChar = false;
    var inputFormat = $('.inputFormat:checked').val();
    adjustTextAreaHeight();

    var inputText = $('#inputText');

    inputText.keyup(function(){
        if (lastWasChar) {
            processText($(this).val(), inputFormat);
        }
    });

    inputText.keypress(function(e){
        lastWasChar = (e.which !== 0);
    });

    $('.inputFormat').click(function() {
        inputFormat = $(this).attr("value");
        processText($('#inputText').val(), inputFormat);
    });

    $('#btnExport').click(function (event) {
        updateDownloadLink();
    });

    processText(inputText.val(), inputFormat);
});

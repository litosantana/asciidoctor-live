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
 * Given some Asciidoc text, make a request to get the converted text.
 *
 * @param inputText The raw text
 */
function processText(inputText) {

    var posting = $.ajax({
        url: '/convert',
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
 * Once the document is ready, set up a handler that
 * triggers a request call when a "key up" event is triggered.
 */
$( document ).ready(function() {

    adjustTextAreaHeight();

    $('#inputText').keyup(function(){
        processText($(this).val());
     });
});

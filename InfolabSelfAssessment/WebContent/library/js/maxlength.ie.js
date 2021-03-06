// jQuery shim for supporting <textarea> `maxlength` attribute in IE < 10
// Author: Chris O'Brien, prettycode.org

(function ($) {

    // Target only IE browsers that don't support `maxlength`

    if (typeof document.selection === 'undefined' ||
        'maxLength' in document.createElement('textarea')
    ) {
        return;
    }

    // IE's API into document selections

    var selection = document.selection;

    // There's a global selection (vs. getting element selection)

    function selectionLength() {
        return selection.createRange().text.length;
    }

    // One of several implementations that work

    function cursorIndex() {
        var current = selection.createRange(),
            diff = current.duplicate();

        diff.moveToElementText(this);
        diff.setEndPoint('EndToEnd', current);

        return diff.text.length - current.text.length;
    }

    function setCursorPosition(index) {
        var range = this.createTextRange();
        range.collapse(true);
        range.moveStart('character', index);
        range.moveEnd('character', 0);
        range.select();
    }

    // Don't store this anywhere; it could change dynamically

    function maxlength() {
        return parseInt(this.getAttribute('maxlength'), 10);
    }

    // For every <textarea maxlength...> that does or will exist...

    $('body')

        // Only allow key actions that won't exceed maxlength, and pasting

        .on('keydown', 'textarea[maxlength]', function (e) {
            var value = this.value,
                length = value.length,
                maxLength = maxlength.call(this),
                keyCode = e.keyCode,
                hasSelection = !!selectionLength();

            return (
                length < maxLength ||
                keyCode === 8 || // backspace
                keyCode === 9 || // tab
                keyCode === 46 || // delete
                (keyCode >= 37 && keyCode <= 40) || // arrows
                e.ctrlKey ||
                hasSelection
            );
        })

        // 'paste' event, can happen via mouse, keyboard, or Edit menu

        .on('paste', 'textarea[maxlength]', function () {
            var textbox = this,
                value = textbox.value,
                selectionLen = selectionLength(),
                cursorPos = cursorIndex.call(textbox),
                pasteText = window.clipboardData.getData('Text'),
                maxLength = maxlength.call(textbox);

            var prefix = value.substring(0, cursorPos),
                paste = pasteText.substring(0, maxLength - value.length + selectionLen),
                suffix = value.substr(cursorPos + selectionLen);

            textbox.value = prefix + paste + suffix;

            window.setTimeout(function () {
                setCursorPosition.call(textbox, prefix.length + paste.length);
                $(textbox).change();
            }, 0);

            return false;
        })
    ;

}(jQuery));
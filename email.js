







var timer;
var clicksCount = 0;
var clicksLimit = 20;
var speedOfClick = 2000;
var listOfFoundedEmails = [];
var keywords = ["react", "mern", "node.js", "nodejs", "javascript"];

function initScript() {
    simulateLoadMoreCommentsClick();
    timer = setInterval(simulateLoadMoreCommentsClick, speedOfClick);
}

function simulateLoadMoreCommentsClick() {
    var button = document.querySelector(".comments-comments-list__load-more-comments-button");
    var showMoreButton = document.querySelector(".scaffold-finite-scroll__load-button");

    if (showMoreButton) {
        showMoreButton.click();
        return;
    }

    if (button && clicksCount < clicksLimit) {
        clicksCount += 1;
        console.log('Clicking ' + clicksCount);
        button.click();
        scrollPageToBottom();
        if (clicksCount > 60) {
            speedOfClick = speedOfClick + 1500;
        }
    } else {
        clearInterval(timer);
        console.clear();
        extractEmailsFromComments();
        console.log(listOfFoundedEmails.join("\n"));
    }
}

function scrollPageToBottom() {
    var n = document.documentElement.scrollHeight;
    window.scrollTo(0, n);
}

function extractEmailsFromComments() {
    var commentsList = document.querySelectorAll('.update-components-text.relative');
    if (!commentsList) {
        console.error('Comments list not found.');
        return;
    }
    commentsList.forEach(comment => {
        var commentContent = comment.querySelector('.tvm-parent-container');
        if (!commentContent) return;
        var commentText = commentContent.innerText.toLowerCase();
        if (keywords.some(keyword => commentText.includes(keyword))) {
            var emailsFoundedInComment = extractEmailFromString(commentText);
            if (emailsFoundedInComment && emailsFoundedInComment.length > 0) {
                for (var email of emailsFoundedInComment) {
                    var emailSanitized = email.toString().toLowerCase();
                    listOfFoundedEmails.push(emailSanitized);
                }
            }
        }
    });
}

function extractEmailFromString(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

initScript();

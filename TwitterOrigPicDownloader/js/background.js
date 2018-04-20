chrome.contextMenus.create({
    title: "Open original picture with new tab",
    contexts: ["image"],
    type: "normal",
    onclick: function (info) {
        var twimg = 'https://pbs.twimg.com/media/';
        var origTag = ':orig';
        var twiImg = /^https:\/\/pbs.twimg.com\/media\/.*\.(jpg)|(png)(:.*)?$/;

        var filenameEx = info.srcUrl.match(".+/(.+?)([\?#;].*)?(:.*)?$")[1];

        var url;

        if (twiImg.test(info.srcUrl)) {
            url = twimg + filenameEx + origTag;
        } else {
            url = info.srcUrl;
        }

        chrome.tabs.create({ url: url });
    }
});

chrome.contextMenus.create({
    title: "Download original twitter picture",
    contexts: ["image"],
    type: "normal",
    onclick: function (info) {
        var twimg = 'https://pbs.twimg.com/media/';
        var origTag = ':orig';
        var twiImg = /^https:\/\/pbs.twimg.com\/media\/.*\.(jpg)|(png)(:.*)?$/;

        var filenameEx = info.srcUrl.match(".+/(.+?)([\?#;].*)?(:.*)?$")[1];

        var dlurl;

        if (twiImg.test(info.srcUrl)) {
            dlurl = twimg + filenameEx + origTag;
        } else {
            dlurl = info.srcUrl;
        }

        chrome.downloads.download({
            url: dlurl,
            filename: filenameEx
        });
    }
});

chrome.contextMenus.create({
    title: "Download original twitter picture as...",
    contexts: ["image"],
    type: "normal",
    onclick: function (info) {
        var twimg = 'https://pbs.twimg.com/media/';
        var origTag = ':orig';
        var twiImg = /^https:\/\/pbs.twimg.com\/media\/.*\.(jpg)|(png)(:.*)?$/;

        var filenameEx = info.srcUrl.match(".+/(.+?)([\?#;].*)?(:.*)?$")[1];

        var dlurl;

        if (twiImg.test(info.srcUrl)) {
            dlurl = twimg + filenameEx + origTag;
        } else {
            dlurl = info.srcUrl;
        }

        chrome.downloads.download({
            url: dlurl,
            filename: filenameEx,
            saveAs: true
        });
    }
});


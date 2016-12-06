require(["gitbook"], function(gitbook) {
    // add meta tag
    gitbook.events.bind("start", function(e, config) {
      var meta = document.createElement("meta");

      meta.name = "naver-site-verification";
      meta.content = config.content;

      document.getElementsByTagName("head")[0].appendChild(meta);
    });
});
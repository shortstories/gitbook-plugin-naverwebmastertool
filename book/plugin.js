require(["gitbook"], function(gitbook) {
    // add meta tag
    gitbook.events.bind("start", function(e, config) {
      var naverMetaContent = config.verifications.naverWebmasterContent;

      if (naverMetaContent) {
        var meta = document.createElement("meta");
        meta.name = "naver-site-verification";
        meta.content = naverMetaContent;
        document.getElementsByTagName("head")[0].appendChild(meta);
      }

      var googleMetaContent = config.verifications.googleSearchConsoleContent;

      if (googleSearchConsoleContent) {
        var meta = document.createElement("meta");
        meta.name = "google-site-verification";
        meta.content = googleSearchConsoleContent;
        document.getElementsByTagName("head")[0].appendChild(meta);
      }      
    });
});
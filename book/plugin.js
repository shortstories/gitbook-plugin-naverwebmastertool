require(["gitbook"], function(gitbook) {
    // add meta tag
    gitbook.events.bind("start", function(e, config) {
      var metaDataList = config.verifications;

      metaDataList.forEach(function(data) {
        var meta = document.createElement("meta");
        meta.name = data.name;
        meta.content = data.content;
        document.getElementsByTagName("head")[0].appendChild(meta);
      });
    });
});
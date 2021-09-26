function compareVersion(version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  for (let i = 0; i < v1.length || i < v2.length; ++i) {
    let x = 0,
      y = 0;
    if (i < v1.length) {
      x = parseInt(v1[i]);
    }
    if (i < v2.length) {
      y = parseInt(v2[i]);
    }
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
  }
  return 0;
}

function getCliByVersion() {
  var params = window.location.search;
  var latestVersion = document.getElementById("latestVersion").textContent;
  var clientModule = document.getElementById("clientModule").textContent;
  if (!clientModule) {
    clientModule = "pulsar-admin";
  }
  params = params.replace("?", "");
  const paramsList = params.split("&");
  var version = "master";
  for (var i in paramsList) {
    var param = paramsList[i].split("=");
    if (param[0] === "version") {
      version = param[1];
    }
  }

  if (version === "master") {
    var latestVersionSplit = latestVersion.split(".");
    version =
      parseInt(latestVersionSplit[0]) +
      "." +
      (parseInt(latestVersionSplit[1]) + 1) +
      ".0";
  }
  var versions = version.split(".");
  var majorVersion = parseInt(versions[0]);

  var referenceLink = "/pulsar-admin";
  var thresholdVersion = "2.6.0";
  if (clientModule != "pulsar-admin") {
    thresholdVersion = "2.8.1";
    referenceLink = "/reference-cli-tools/#" + clientModule;
  }

  if (
    (majorVersion > 1 && compareVersion(version, thresholdVersion) < 0) ||
    majorVersion === 1
  ) {
    if (version === latestVersion) {
      window.location.href = "/docs/en" + referenceLink;
    } else {
      window.location.href = "/docs/en/" + version + referenceLink;
    }
  } else {
    window.location.href =
      "http://pulsar.apache.org" +
      "/tools/" +
      clientModule +
      "/" +
      version +
      "-SNAPSHOT";
  }
}
window.onload = getCliByVersion;

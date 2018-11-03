var toTitle = require("to-title")

module.exports = urlToTitle

function urlToTitle(url) {
  url = unescape(url).replace(/_/g, " ")
  url = url.replace(/^\w+:\/\//, "")
  url = url.replace(/^www\./, "")
  url = url.replace(/(\/|\?)$/, "")

  var parts = url.split("?")
  url = parts[0]
  url = url.replace(/\.\w+$/, "")

  parts = url.split("/")

  var name = parts[0]
  name = name.replace(/\.\w+(\/|$)/, "").replace(/\.(com?|net|org|fr)$/, "")

  if (parts.length == 1) {
    return title(name)
  }

  return (
    toTitle(
      parts
        .slice(1)
        .reverse()
        .filter(isValidPart)
        .map(toTitle)
        .join(" - ")
    ) +
    " on " +
    title(name)
  )
}

function isValidPart(part) {
  return part.length > 2 && !/^[0-9]+$/.test(part)
}

function title(host) {
  if (/^[\w\.\-]+:\d+/.test(host)) {
    return host
  }

  return toTitle(
    host
      .split(".")
      .filter(isValidPart)
      .join(", ")
  )
}

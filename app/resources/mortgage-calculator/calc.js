if (window && !window.mcalcEmbedJSLoaded) {
  var mcalcEmbedJS = {
    loadCalculator: function () {
      const calculators = document.querySelectorAll(".mcalculator:not(.loaded)")

      calculators.forEach((calculator) => {
        const calcUrl = calculator.getAttribute("data-calc")
        const calcWidth = calculator.getAttribute("data-width")

        const iframe = document.createElement("iframe")
        iframe.setAttribute("src", calcUrl)
        iframe.setAttribute("frameborder", "0")
        iframe.style.width = "100%"
        iframe.style.overflow = "hidden"
        iframe.scrolling = "no"
        calculator.style.width = "100%"
        calculator.style.maxWidth = calcWidth + "px"
        calculator.appendChild(iframe)

        calculator.classList.add("loaded")
      })
    },

    /**
     * Load the attribution for the calculators
     * If the calculator is premium, don't load the attribution
     * If the calculator is not premium, load the attribution
     *
     */
    loadAttribution: function () {
      const calculators = document.querySelectorAll(".mcalculator")

      calculators.forEach((calculator) => {
        const calcUrl = calculator.getAttribute("data-calc")
        const calcDomain = calcUrl.split("/")[0] + "//" + calcUrl.split("/")[2]
        const iframe = calculator.querySelector("iframe")

        if (iframe) {
          // Send a message to the iframe to get the premium status
          iframe.contentWindow.postMessage("isPremium", calcDomain)
        }

        // Listen for messages from the iframe
        window.addEventListener("message", function (event) {
          // Check that the message came from the correct origin
          if (
            event.origin === calcDomain &&
            event.source === iframe.contentWindow
          ) {
            // Get the premium status from the message data
            var isPremium = event.data

            if (!isPremium) {
              const attribution = document.createElement("div")
              attribution.setAttribute("class", "attribution")
              attribution.setAttribute("style", "display:block!important")
              attribution.innerHTML = `<div style="text-align: center;">
                                      <p>Widget by <a href="https://www.mtgcalcs.com" target=" _blank">Mortgage Calculator Widgets</a></p>
                                    </div>`
              calculator.appendChild(attribution)
            }
          }
        })
      })
    },

    resizeCalcIframes: function () {
      const calculators = document.querySelectorAll(".mcalculator")

      calculators.forEach((calculator) => {
        const calcUrl = calculator.getAttribute("data-calc")
        const calcDomain = calcUrl.split("/")[0] + "//" + calcUrl.split("/")[2]

        const iframe = calculator.querySelector("iframe")

        // Send a message to the iframe to request its height
        iframe.contentWindow.postMessage("getHeight", calcDomain)

        // Listen for messages from the iframe
        window.addEventListener("message", function (event) {
          // Check that the message came from the correct origin
          if (
            event.origin === calcDomain &&
            event.source === iframe.contentWindow
          ) {
            // Get the height from the message data
            var height = parseInt(event.data)
            // Set the iframe height
            iframe.style.height = height + "px"
          }
        })
      })
    },
  }

  window.addEventListener("load", function () {
    mcalcEmbedJS.loadAttribution()
    mcalcEmbedJS.resizeCalcIframes()
  })

  window.addEventListener("resize", function () {
    mcalcEmbedJS.resizeCalcIframes()
  })

  var mcalcEmbedJSLoaded = true
} else {
  console.log("embed.js already loaded")
}

if (typeof mcalcEmbedJS !== "undefined") {
  mcalcEmbedJS.loadCalculator()
}

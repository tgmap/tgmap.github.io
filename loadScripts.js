function loadScript(src, callback)
{
        let script = document.createElement('script')  // Creates the <script> element.
        document.head.append(script)                   // Places the element in the document's <head> section.
        script.src = src                               // Adds the src, <script src='...'>.
        script.onload = () => callback()               // Adds the onload, <script src='...' onload='...()'>
  }

  loadScript('https://d3js.org/d3.v5.min.js', function() {
    loadScript('leaflet-heat.js', function() {             // Heatmap Javascript.
      loadScript('variables.js', function() {             // Variables.
        loadScript('map.js', function() {                 // Load the map.
            loadScript('heatmap.js', function() {         // Heatmap Layer.

            })
          })
        })
      })
    })

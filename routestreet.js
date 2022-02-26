   const apiKey = "AAPK3d05476e8fbe4fe7a6f85d573c73fb94QzXMPfiekyKlBE7SyHhdZeaLfuYt-OqPwf4ciDx-XyYQGy-5CL9ueCQPol1u0Hll";
    
          const map = new ol.Map({
            target: "map"
          });
    
          const view = new ol.View({
    
            center: ol.proj.fromLonLat([-77.038, -12.085]), // Toronto
    
            zoom: 15
          });
          map.setView(view);
    
          //Devolver coordenadas segun los puntos puestos por el usuario (si confirma el viaje)
          // y se acaboo!
         

          let startLayer, endLayer, routeLayer;
          function addCircleLayers() {
    
            startLayer = new ol.layer.Vector({
              style: new ol.style.Style({
                image: new ol.style.Circle({
                  radius: 6,
                  fill: new ol.style.Fill({ color: "white" }),
                  stroke: new ol.style.Stroke({ color: "black", width: 2 })
                })
              })
            });
            map.addLayer(startLayer);
            endLayer = new ol.layer.Vector({
              style: new ol.style.Style({
                image: new ol.style.Circle({
                  radius: 7,
                  fill: new ol.style.Fill({ color: "black" }),
                  stroke: new ol.style.Stroke({ color: "white", width: 2 })
                })
              })
            });
    
            map.addLayer(endLayer);
    
          }
          let currentStep = "start";
          let startCoords, endCoords;
    
          const geojson = new ol.format.GeoJSON({
            defaultDataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
          });
        
         map.on("click", (e) => {
    
            const coordinates = ol.proj.transform(e.coordinate, "EPSG:3857", "EPSG:4326");  //check
            const point = {
              type: "Point",
              coordinates
            };
     if (currentStep === "start") {
    
              startLayer.setSource(
                new ol.source.Vector({
                  features: geojson.readFeatures(point)
                })
              );
              startCoords = coordinates;
    
           if (endCoords) {
                endCoords = null;
                endLayer.getSource().clear();
    
                routeLayer.getSource().clear();
    
                document.getElementById("directions").innerHTML = "";
                document.getElementById("directions").style.display = "none";
      
    
              }
             
              currentStep = "end";
            } else {
    
              endLayer.setSource(
                new ol.source.Vector({
                  features: geojson.readFeatures(point)
                })
              );
              endCoords = coordinates;
              currentStep = "start";
    
              updateRoute(startCoords, endCoords);
    
            }
   
          });
    
          function addRouteLayer() {
            routeLayer = new ol.layer.Vector({
              style: new ol.style.Style({
                stroke: new ol.style.Stroke({ color: "hsl(205, 100%, 50%)", width: 4, opacity: 0.6 })
              })
            });
    
            map.addLayer(routeLayer);
         
          }

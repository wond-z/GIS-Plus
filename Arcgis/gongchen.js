var arcgisCss = document.createElement('link');
arcgisCss.setAttribute('rel', 'stylesheet');
arcgisCss.setAttribute('href', 'http://js.arcgis.com/4.10/esri/css/main.css');
document.head.appendChild(arcgisCss)


var classLoading = function(a) {
    var e = "", n = new XMLHttpRequest;
    n.open("GET", a, !1), n.send(null), 4 === n.readyState && 200 === n.status && (e += n.response);
    var i = document.createElement("script");
    i.text = "//@ sourceURL=" + a + "\n" + e, document.head.appendChild(i)
    //   i.onload = function() {

    var id = HorizontalLayout1.getDomId()
    //   require([
    //       "esri/Map",
    //       "dojo/_base/xhr",
    //       "esri/views/MapView",
    //       "esri/widgets/Home",
    //       "esri/layers/TileLayer",
    //       "esri/layers/MapImageLayer",
    //       "esri/layers/FeatureLayer",
    //       "esri/layers/support/Sublayer",
    //       "esri/layers/support/LabelClass",
    //       "esri/symbols/TextSymbol",
    //       "esri/geometry/Extent",
    //       "esri/Graphic",
    //       "esri/geometry/Point",
    //       "esri/symbols/MarkerSymbol",
    //       "dojo/domReady!",
    //     ], (Map,xhr, MapView, Home, TileLayer,MapImageLayer,FeatureLayer,Sublayer,LabelClass,TextSymbol,Extent,Graphic,Point) => {
    //       const map = new Map({
    //         basemap: "topo-vector"
    //       });

    //       const view = new MapView({
    //         container: id,
    //         map: map,
    //         zoom: 12,
    //         center: [20, 20] // longitude, latitude
    //       });
    //              layerUrl1 = "http://192.168.0.189:6080/arcgis/rest/services/HFGAS/Basemap/MapServer",
    //         layer1 = new TileLayer(layerUrl1, null);
    //          map.layers.add(layer1);
    //       view.on('click', e => {
    //         console.log(e)
    //         //     var lat = Math.round(e.mapPoint.getLatitude() * 1000) / 1000;
    //         // var lon = Math.round(e.mapPoint.getLongitude() * 1000) / 1000;
    //         // console.log(lat+","+lon);
    //         var mapPointx = e.mapPoint.longitude;
    //         var mapPointy = e.mapPoint.latitude;
    //         let point = {
    //           type: "point",  // autocasts as new Point()
    //           longitude: mapPointx,
    //           latitude: mapPointy,
    //         };

    //         // Create a symbol for drawing the point
    //         let markerSymbol = {
    //           type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
    //           color: [0, 0, 0]
    //         };

    //         // Create a graphic and add the geometry and symbol to it
    //         let pointGraphic = new Graphic({
    //           geometry: point,
    //           symbol: markerSymbol
    //         });


    //         view.graphics.add(pointGraphic)
    //         view.hitTest(e)
    //           .then(res => {
    //             console.log(res);
    //           })

    //       })
    //     });
    require([
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/Home",
            "esri/layers/TileLayer",
            "esri/layers/MapImageLayer",
            "esri/layers/FeatureLayer",
            "esri/layers/GraphicsLayer",
            "esri/geometry/Point",
            "esri/geometry/SpatialReference",
            "esri/Graphic",
            "esri/tasks/GeometryService",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "dojo/domReady!"
        ],
        function(Map, MapView, Home, TileLayer, MapImageLayer, FeatureLayer, GraphicsLayer, Point, SpatialReference, Graphic, geometryService, SimpleMarkerSymbol, PictureMarkerSymbol) {
            var map = new Map();
            var layer = null,
                layerUrl = "https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Basemap/MapServer",
                layer = new TileLayer(layerUrl, null),
                layerUrl2 = "https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Map/MapServer",
                layer2 = new TileLayer(layerUrl2, null);
            //   layerUrl3 = "http://192.168.0.189:6080/arcgis/rest/services/HFGAS/Map_vector/MapServer",
            // layer3 = new MapImageLayer(layerUrl3, null);
            map.layers.add(layer);
            window.layer = layer
            window.layer2 = layer2
            // window.layer3 = layer3
            map.layers.add(layer2);
            // map.layers.add(layer3);
            var view = new MapView({
                container: id,
                map: map
            });
            var homeBtn = new Home({
                view: view
            });
            view.ui.add(homeBtn, "top-left");
            view.on('pointer-move', e => {
                view.hitTest(e).then(res => {
                    if (res.results.length !== 0) {
                        // alert(res.results[0].graphic.attributes);
                        var aaa = res.results[0].graphic.attributes
                        var tagValue = $System[res.results[0].graphic.attributes];
                    }
                    console.log(res);
                })
            })
            view.on('click', e => {
                console.log(e);
                var mapPointx = Math.round(e.mapPoint.x);
                var mapPointy = Math.round(e.mapPoint.y);
                var point11 = new Point(Math.round(37973.15), Math.round(27341.19), new SpatialReference(2436))
                var point12 = new Point(Math.round(15816), Math.round(6069), new SpatialReference(2436))
                // var point11 =  new Point(mapPointx,mapPointy, new SpatialReference(2436))
                //   var point = new Point(x, y, new SpatialReference({wkid:4326}));
                var simpleMarkerSymbol = new PictureMarkerSymbol({
                    //   type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
                    //   style: "square",
                    //   color: [0, 0, 0],
                    //   size: "8px",  // pixels
                    url: "http://192.168.101.8:11001/public/javascripts/ThirdParty/jquery-easyui-1.6.4/themes/icons/menzhan.png",
                    width: '32px',
                    height: '48px',
                    attributes: "1ass"
                });
                var simpleMarkerSymbol2 = new PictureMarkerSymbol({
                    //   type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
                    //   style: "square",
                    //   color: [0, 0, 0],
                    //   size: "8px",  // pixels
                    url: "http://192.168.101.8:11001/public/javascripts/ThirdParty/jquery-easyui-1.6.4/themes/icons/edit_add.png",
                    width: '32px',
                    height: '48px',
                    attributes: "1ass"
                });
                var graphic = new Graphic(point11, simpleMarkerSymbol);
                var graphic2 = new Graphic(point12, simpleMarkerSymbol2);

                view.graphics.add(graphic)
                graphic.attributes = "aaaaa"
                //   graphic.visible = false;
                view.goTo({
                    center: point11,
                    //   zoom: 10, //聚焦等级
                }, {
                    duration: 2000 //视角跳转时长为2秒
                })
                view.hitTest(e)
                    .then(res => {
                        debugger
                        if (res.results.length === 0) {

                            // view.graphics.add(graphic2)
                            // graphic2.visible = false
                        } else {
                            //   res.results[0].graphic.visible = !res.results[0].graphic.visible
                            //   res.results[1].graphic.visible = !res.results[0].graphic.visible
                        }
                        console.log(res);
                    })
            })
        });
    //   }
}
classLoading('https://js.arcgis.com/4.10/dojo/dojo.js');
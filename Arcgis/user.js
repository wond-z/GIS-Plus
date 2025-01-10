var node = $('#' + Tree1.id).tree('find', 1);
$('#' + Tree1.id).tree('check', node.target);

// 引入样式
var linkcss = document.createElement('link');
linkcss .setAttribute('rel', 'stylesheet');
linkcss .setAttribute('href', 'https://js.arcgis.com/3.36/esri/css/esri.css');
document.head.appendChild(linkcss );

// 引入脚本
var linkjs = 'http://js.arcgis.com/3.36/';
var myScript = "", xmlHttp = new XMLHttpRequest;
xmlHttp.open("GET", linkjs, false);
xmlHttp.send(null);
if (xmlHttp.readyState === 4 && 200 === xmlHttp.status) {
    myScript += xmlHttp.response;
}
var scriptNode = document.createElement("script");
scriptNode.text = "//@ sourceURL=" + linkjs+ "\n" + myScript;
document.head.appendChild(scriptNode);

// var oHead = document.getElementsByTagName('head').item(0);
// var oScript= document.createElement("script");
// oScript.type = "text/javascript";
// oScript.src = arcURL;
// oHead.appendChild(oScript);

// dom容器
var id = HorizontalLayout1.getDomId();

// 定义点数据
var points = [
    {
        x: 15816.05,
        y: 6069,
        group: '门站',
        name: '北张门站'
    }, {
        x: 37973.15,
        y: 27270.42,
        group: '门站',
        name: '肥东门站'
    }, {
        x: 22631.11,
        y: 54322.9,
        group: '门站',
        name: '罗集门站'
    }, {
        x: 23890.76,
        y: -38711,
        group: '门站',
        name: '庐江八里站'
    }, {
        x: 11904.4,
        y: 41017.17,
        group: '高中压调压站',
        name: '岗集调压站'
    }, {
        x: 23983.74,
        y: 44629.52,
        group: '高中压调压站',
        name: '合水路调压站'
    }, {
        x: 8907.45,
        y: 26994.76,
        group: '高中压调压站',
        name: '湖光西路调压站'
    }, {
        x: -2248.27,
        y: 35426.79,
        group: '高中压调压站',
        name: '机场路调压站'
    }, {
        x: 14943.63,
        y: 15158.54,
        group: '高中压调压站',
        name: '九龙路调压站'
    }, {
        x: 25430.50,
        y: -23573.82,
        group: '高中压调压站',
        name: '石头调压站'
    }, {
        x: 24641.22,
        y: -15611.55,
        group: '高中压调压站',
        name: '台创园调压站'
    }, {
        x: 10402.96,
        y: 16899.18,
        group: '高中压调压站',
        name: '汤口路调压站'
    }, {
        x: 8992.80,
        y: 19898.29,
        group: '高中压调压站',
        name: '香蒲路调压站'
    }, {
        x: 32623.84,
        y: 43288.91,
        group: '高中压调压站',
        name: '新蚌埠路调压站'
    }, {
        x: 4485.85,
        y: 38270.02,
        group: '高中压调压站',
        name: '长岗调压站'
    }, {
        x: 23476.98,
        y: 10346,
        group: '高中压调压站',
        name: '云谷路调压站'
    }, {
        x: 23286.74,
        y: 18692,
        group: '高中压调压站',
        name: '习友路调压站'
    }, {
        x: 25584.39,
        y: 17049.00,
        group: '高中压调压站',
        name: '观海路调压站'
    }, {
        x: 24664.28,
        y: 19072.98,
        group: '高中压调压站',
        name: '宿松路调压站'
    }, {
        x: 26995.53,
        y: -34305.38,
        group: '高中压调压站',
        name: '庐北门站'
    }, {
        x: -21486.18,
        y: 30504,
        group: '高中压调压站',
        name: '六安站'
    }, {
        x: 9564.28,
        y: 8614.34,
        group: '阀室',
        name: '合安阀室'
    }, {
        x: -14702.89,
        y: 32360.77,
        group: '阀室',
        name: '高店阀室'
    }, {
        x: -21485.54,
        y: 30501.28,
        group: '阀室',
        name: '官亭阀室'
    }, {
        x: -6547.28,
        y: 32123.74,
        group: '阀室',
        name: '高刘阀室'
    }, {
        x: -12716.78,
        y: 32718.80,
        group: '阀室',
        name: '高升阀室'
    }, {
        x: 20201.72,
        y: 553.89,
        group: '阀室',
        name: '严店阀室'
    }, {
        x: 26427.57,
        y: 15441.47,
        group: '阀室',
        name: '锦绣大道阀室'
    }, {
        x: 5287.00,
        y: 30240.05,
        group: '阀室',
        name: '马岗阀室'
    }, {
        x: -668.63,
        y: 36050.50,
        group: '阀室',
        name: '南仓阀室'
    }, {
        x: 40900.95,
        y: 25095.69,
        group: '阀室',
        name: '龙塘阀室'
    }, {
        x: 46951.13,
        y: 33605.25,
        group: '阀室',
        name: '花滩阀室'
    }, {
        x: 48470.11,
        y: 29690.28,
        group: '阀室',
        name: '马厂阀室'
    }, {
        x: 45096.10,
        y: 36609.65,
        group: '阀室',
        name: '牌坊阀室'
    }, {
        x: 23200.44,
        y: -6277.41,
        group: '阀室',
        name: '三河阀室'
    }, {
        x: 16471.39,
        y: 42868.85,
        group: '阀室',
        name: '新元阀室'
    }, {
        x: 26620.49,
        y: -31017.00,
        group: '阀室',
        name: '罗埠阀室'
    }, {
        x: 35642.3,
        y: 19793.00,
        group: '阀室',
        name: '南淝河阀室'
    }, {
        x: 17972.25,
        y: 25894.95,
        group: '中中压调压站',
        name: '丰乐中中压'
    }, {
        x: 23438.54,
        y: 22766.43,
        group: '中中压调压站',
        name: '轴承厂中中压'
    }, {
        x: 26669.67,
        y: 29212.93,
        group: '中中压调压站',
        name: '双岗中中压'
    }, {
        x: 31756.62,
        y: 28528.36,
        group: '中中压调压站',
        name: '森海豪庭中中压'
    }, {
        x: 31870.14,
        y: 25236.52,
        group: '中中压调压站',
        name: '合钢中中压'
    }, {
        x: 26474.32,
        y: 21456.13,
        group: '中中压调压站',
        name: '南二环中中压'
    }, {
        x: 23133.68,
        y: 28147.00,
        group: '中中压调压站',
        name: '四里河中中压'
    }, {
        x: 35165.5,
        y: 27331.00,
        group: '中中压调压站',
        name: '八百户中中压'
    }, {
        x: 27736.97,
        y: 21335.00,
        group: '中中压调压站',
        name: '望湖东苑中中压'
    }, {
        x: -7499.55,
        y: 40669.00,
        group: '中中压调压站',
        name: '新桥大道中中压'
    },
];
var map;
var graphicLayer;
require(["esri/map",
        "esri/graphic",
        "esri/Color",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/geometry/Point",
        "esri/SpatialReference",
        "esri/layers/GraphicsLayer",
        "esri/symbols/TextSymbol",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/Font",
        "dojo/domReady!"
    ],
    function(Map, Graphic, Color, ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer, Point, SpatialReference, GraphicsLayer, TextSymbol, SimpleMarkerSymbol, Font) {
        map = new Map(id, {
        //   basemap: "topo",
        //   center: [23122.32377085801, 27237.25285194374],
          zoom: 3
        });
        
        // graphicLayer = new GraphicsLayer();
        
        var layer = new ArcGISTiledMapServiceLayer('https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Basemap/MapServer');
        map.addLayer(layer);
        
        var layer2 = new ArcGISTiledMapServiceLayer('https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Map/MapServer');
        map.addLayer(layer2);

        map.on('click', function(e) {
            console.log(e)
        })

        // //设置地图坐标系类型
        var spatialReference = new SpatialReference(4326);
        map.spatialReference = spatialReference;
        
        // 中心基于地图位置
        // map.centerAt(new Point(37973.15, 27270.42, spatialReference));

        
        //创建图层
        graphicLayer = new GraphicsLayer();
        //把图层添加到地图上
        map.addLayer(graphicLayer);
        HorizontalLayout1.layer = graphicLayer;

        map.on('load', function() {
            points.forEach((item) => {
                addMarker(item);
            });
            // map.getLayersVisibleAtScale().forEach(function(item) {
            //     showAllPopup(item);
            // });
        });

        // map.on("click", function(e) {
        //     console.log(e)
        //     // 点击位置没有标注时创建新标注
        //     if (e.graphic === undefined) {
        //         addMarker(e.mapPoint.x, e.mapPoint.y);
        //     }
        // });
        map.showZoomSlider();
    }
);

function addMarker(pointInfo) {
    // 坐标转换
    let itempoint = new esri.geometry.Point(pointInfo.x, pointInfo.y, map.spatialReference);

    // 定义点标注
    var markerSymbol = new esri.symbol.SimpleMarkerSymbol({
        // style: "esriSMSCircle",
        style: "STYLE_SQUARE",
        size: 12,
        color: [255, 0, 0, 255],
        outline: {
            color: [0, 0, 0, 255],
            width: 1,
            type: "esriSLS",
            style: "esriSLSSolid"
        }
    });

    // 定义文字标注
    var textSymbol = new esri.symbol.TextSymbol({
        text: pointInfo.name,
        color: [0, 0, 0, 255],
        haloColor: [255, 255, 255, 255],
        haloSize: 2,
        angle: 0,
        xoffset: 0,
        yoffset: 12,
        font: new esri.symbol.Font({ size: 9, family: "Microsoft YaHei" })
    });
    
    // 圆点标注属性
    var pointAttr = {
        type: 'point',
        group: pointInfo.group,
        name: pointInfo.name,
        info: '' // 用于占位，具体变量数据刷新在定时器中完成
    };
    // 文字标注属性
    var textAttr = {
        type: 'text',
        group: pointInfo.group,
        name: pointInfo.name,
        info: ''
    };
    // 气泡模板
    var infoTemplate = new esri.InfoTemplate(pointInfo.name, "${info}");
    
    var graphic = new esri.Graphic(itempoint, markerSymbol, pointAttr, infoTemplate);
    
    var textGraphic = new esri.Graphic(itempoint, textSymbol, textAttr, infoTemplate);
    
    // 添加图形到图层
    graphicLayer.add(graphic);
    graphicLayer.add(textGraphic);
}


// require([
//         "esri/Map",
//         "esri/views/MapView",
//         "esri/widgets/Home",
//         "esri/layers/TileLayer",
//         "esri/layers/MapImageLayer",
//         "esri/layers/FeatureLayer",
//         "esri/layers/GraphicsLayer",
//         "esri/geometry/Point",
//         "esri/geometry/SpatialReference",
//         "esri/graphic",
//         "esri/tasks/GeometryService",
//         "esri/symbols/SimpleMarkerSymbol",
//         "esri/symbols/PictureMarkerSymbol",
//         "dojo/domReady!"
//     ],
//     function(Map, MapView, Home, TileLayer, MapImageLayer, FeatureLayer, GraphicsLayer, Point, SpatialReference, Graphic, geometryService, SimpleMarkerSymbol, PictureMarkerSymbol) {
//         var map = new Map();
//         var layer = null,
//             layerUrl = "https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Basemap/MapServer",
//             layer = new TileLayer(layerUrl, null),
//             layerUrl2 = "https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Map/MapServer",
//             layer2 = new TileLayer(layerUrl2, null);
//         //   layerUrl3 = "http://192.168.0.189:6080/arcgis/rest/services/HFGAS/Map_vector/MapServer",
//         // layer3 = new MapImageLayer(layerUrl3, null);
//         map.layers.add(layer);
//         window.layer = layer
//         window.layer2 = layer2
//         // window.layer3 = layer3
//         map.layers.add(layer2);
//         // map.layers.add(layer3);
//         var view = new MapView({
//             container: id,
//             map: map
//         });
//         var homeBtn = new Home({
//             view: view
//         });
//         view.ui.add(homeBtn, "top-left");
//         view.on('pointer-move', e => {
//             view.hitTest(e).then(res => {

//                 if (res.results.length !== 0) {
//                     // alert(res.results[0].graphic.attributes);
//                     var aaa = res.results[0].graphic.attributes
//                     var tagValue = $System[res.results[0].graphic.attributes];
//                 }
//                 console.log(res);
//             })
//         })
//         view.on('click', e => {
//             console.log(e);
//             var mapPointx = Math.round(e.mapPoint.x);
//             var mapPointy = Math.round(e.mapPoint.y);
//             var point11 = new Point(Math.round(37973.15), Math.round(27341.19), new SpatialReference(2436))
//             var point12 = new Point(Math.round(15816), Math.round(6069), new SpatialReference(2436))
//             // var point11 =  new Point(mapPointx,mapPointy, new SpatialReference(2436))
//             //   var point = new Point(x, y, new SpatialReference({wkid:4326}));
//             var simpleMarkerSymbol = new PictureMarkerSymbol({
//                 //   type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
//                 //   style: "square",
//                 //   color: [0, 0, 0],
//                 //   size: "8px",  // pixels
//                 url: "http://192.168.101.8:11001/public/javascripts/ThirdParty/jquery-easyui-1.6.4/themes/icons/menzhan.png",
//                 width: '32px',
//                 height: '48px',
//                 attributes: "1ass"
//             });
//             var simpleMarkerSymbol2 = new PictureMarkerSymbol({
//                 //   type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
//                 //   style: "square",
//                 //   color: [0, 0, 0],
//                 //   size: "8px",  // pixels
//                 url: "http://192.168.101.8:11001/public/javascripts/ThirdParty/jquery-easyui-1.6.4/themes/icons/edit_add.png",
//                 width: '32px',
//                 height: '48px',
//                 attributes: "1ass"
//             });
//             var graphic = new Graphic(point11, simpleMarkerSymbol);
//             var graphic2 = new Graphic(point12, simpleMarkerSymbol2);

//             view.graphics.add(graphic)
//             graphic.attributes = "aaaaa"
//             //   graphic.visible = false;
//             view.goTo({
//                 center: point11,
//                 //   zoom: 10, //聚焦等级
//             }, {
//                 duration: 2000 //视角跳转时长为2秒
//             })
//             view.hitTest(e)

//                 .then(res => {
//                     debugger
//                     if (res.results.length === 0) {

//                         // view.graphics.add(graphic2)
//                         // graphic2.visible = false
//                     } else {
//                         //   res.results[0].graphic.visible = !res.results[0].graphic.visible
//                         //   res.results[1].graphic.visible = !res.results[0].graphic.visible
//                     }
//                     console.log(res);
//                 })
//         })
//     }
// );


// var arcgisCss = document.createElement('link');
// arcgisCss.setAttribute('rel','stylesheet');
// arcgisCss.setAttribute('href','http://js.arcgis.com/4.10/esri/css/main.css');
// document.head.appendChild(arcgisCss)


// var classLoading = function(a) {
//     var e = "",
//       n = new XMLHttpRequest;
//     n.open("GET", a, !1), n.send(null), 4 === n.readyState && 200 === n.status && (e += n.response);
//     var i = document.createElement("script");
//     i.text = "//@ sourceURL=" + a + "\n" + e, document.head.appendChild(i)
// //   i.onload = function() {
        
//         debugger;
//     var id = HorizontalLayout1.getDomId()

// require([
// "esri/Map",
// "esri/views/MapView",
// "esri/widgets/Home",
// "esri/layers/TileLayer",
// "esri/layers/MapImageLayer",
// "esri/layers/FeatureLayer",
// "esri/layers/GraphicsLayer",
// "esri/geometry/Point",
// "esri/geometry/SpatialReference",
// "esri/Graphic",
// "esri/tasks/GeometryService",
// "esri/symbols/SimpleMarkerSymbol",
// "esri/symbols/PictureMarkerSymbol",
// "dojo/domReady!"
// ],
//         function(Map, MapView, Home, TileLayer,MapImageLayer,FeatureLayer,GraphicsLayer,Point,SpatialReference,Graphic,geometryService,SimpleMarkerSymbol,PictureMarkerSymbol) {
//         var map = new Map();
//         var layer = null,
//         layerUrl = "https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Basemap/MapServer",
//         layer = new TileLayer(layerUrl, null);
//           layerUrl2 = "https://192.168.0.189:6443/arcgis/rest/services/HFGAS/Map/MapServer",
//         layer2 = new TileLayer(layerUrl2, null);
//         //   layerUrl3 = "http://192.168.0.189:6080/arcgis/rest/services/HFGAS/Map_vector/MapServer",
//         // layer3 = new MapImageLayer(layerUrl3, null);
//         map.layers.add(layer);
//         window.layer = layer
//         window.layer2 = layer2
//         // window.layer3 = layer3
//         map.layers.add(layer2);
//         // map.layers.add(layer3);
//           var view = new MapView({
//           container: id,
//           map: map
//         });
//         var homeBtn = new Home({
//             view: view
//         });
//         view.ui.add(homeBtn, "top-left");
//           view.on('pointer-move', e => {
//               view.hitTest(e) .then(res => {
            
//               if (res.results.length !==0) {
//             // alert(res.results[0].graphic.attributes);
//             var aaa = res.results[0].graphic.attributes
//             var tagValue = $System[res.results[0].graphic.attributes];
//               }
//               console.log(res);
//           })
//           })
//         // view.on('click', e => {
//         //     console.log(e);
//         {
//             var mapPointx = Math.round(e.mapPoint.x);
//             var mapPointy = Math.round(e.mapPoint.y);
//             var point11 =  new Point(15816.05,6069.00)
//             var point11 =  new Point(37973.15,27270.42) 
//             //   var point = new Point(x, y, new SpatialReference({wkid:4326}));
//                 var simpleMarkerSymbol = new PictureMarkerSymbol({
//                 //   type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
//                     //   style: "square",
//                     //   color: [0, 0, 0],
//                     //   size: "8px",  // pixels
//                     url:"http://192.168.101.8:11001/public/javascripts/ThirdParty/jquery-easyui-1.6.4/themes/icons/edit_remove.png",
//                       width: '32px',
//                       height: '48px',
//                       attributes:"1ass"
//                     });
//                 var simpleMarkerSymbol2 = new PictureMarkerSymbol({
//                 //   type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
//                     //   style: "square",
//                     //   color: [0, 0, 0],
//                     //   size: "8px",  // pixels
//                     url:"http://192.168.101.8:11001/public/javascripts/ThirdParty/jquery-easyui-1.6.4/themes/icons/edit_add.png",
//                       width: '32px',
//                       height: '48px',
//                       attributes:"1ass"
//                     });
//                 var graphic = new Graphic(point11, simpleMarkerSymbol);
//                 var graphic2 = new Graphic(point11, simpleMarkerSymbol2);

//         graphic.attributes = "aaaaa"
//       view.graphics.add(graphic)
//     //   graphic.visible = false;
//       view.goTo({
//           center: point11,
//         //   zoom: 10, //聚焦等级
//         }, {
//           duration: 2000 //视角跳转时长为2秒
//         })
//              view.hitTest(e)
             
//           .then(res => {
//               debugger
//               if (res.results.length ===0) {
                    
//             // view.graphics.add(graphic2)
//             // graphic2.visible = false
//               } else {
//                 //   res.results[0].graphic.visible = !res.results[0].graphic.visible
//                 //   res.results[1].graphic.visible = !res.results[0].graphic.visible
//               }
//               console.log(res);
//           })
//         }
//         // )
//     });
// //   }
//   }
//   classLoading('https://js.arcgis.com/4.10/dojo/dojo.js');

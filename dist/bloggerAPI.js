!function(e,t){if("function"==typeof define&&define.amd)define("gulpEasyTaskBabelModuleId2508535",["exports","module","babel-runtime/core-js/promise","babel-runtime/regenerator","babel-runtime/core-js/get-iterator","lodash","babel-runtime/helpers/interop-require-default","./asyncLog","debug","is-url","request-promise","html-img-digger","html-taiwan-address-digger"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module,require("babel-runtime/core-js/promise"),require("babel-runtime/regenerator"),require("babel-runtime/core-js/get-iterator"),require("lodash"),require("babel-runtime/helpers/interop-require-default"),require("./asyncLog"),require("debug"),require("is-url"),require("request-promise"),require("html-img-digger"),require("html-taiwan-address-digger"));else{var r={exports:{}};t(r.exports,r,e._Promise,e._regeneratorRuntime,e._getIterator,e._,e._interopRequireDefault,e.asyncLog,e.debug,e.isUrl,e.request,e.imgDigger,e.addrDigger),e.gulpEasyTaskBabelModuleId2508535=r.exports}}(this,function(e,t,r,a,s,u,n,l,i,o,d,g,f){"use strict";function c(e){var t=this,u=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=(arguments.length<=2||void 0===arguments[2]?{}:arguments[2],h["default"](k.namespace+":getPostsList"));return e||r["default"].reject(n.namespace+": expect first arg to be a number as bloggerId"),u=p["default"].defaults({},u,{key:null,maxResults:20,status:"live",fetchBodies:!0,fetchImages:!1,pageToken:void 0}),n("[start] get posts by bloggerId: "+e+", pageToken: "+u.pageToken),x["default"]({json:!0,method:"GET",url:"https://www.googleapis.com/blogger/v3/blogs/"+e+"/posts",qs:u}).then(b["default"](n),b["default"](n)).then(function(e){var r,u,n,l,i,o,d;return a["default"].async(function(t){for(;;)switch(t.prev=t.next){case 0:r=!0,u=!1,n=void 0,t.prev=3,l=s["default"](e.items);case 5:if(r=(i=l.next()).done){t.next=23;break}return o=i.value,t.next=9,a["default"].awrap(q["default"].dig(o.content));case 9:if(t.t0=t.sent,t.t0){t.next=12;break}t.t0=[];case 12:return o.address=t.t0,t.next=15,a["default"].awrap(v["default"].dig(o.content));case 15:if(t.t1=t.sent,t.t1){t.next=18;break}t.t1=[];case 18:o.images=t.t1,o.location&&o.location.name&&o.address.unshift(o.location.name);case 20:r=!0,t.next=5;break;case 23:t.next=29;break;case 25:t.prev=25,t.t2=t["catch"](3),u=!0,n=t.t2;case 29:t.prev=29,t.prev=30,!r&&l["return"]&&l["return"]();case 32:if(t.prev=32,!u){t.next=35;break}throw n;case 35:return t.finish(32);case 36:return t.finish(29);case 37:return d=p["default"].map(e.items,function(e){return{address:e.address,body:e.content,cover:p["default"].get(e,"images[0].url",""),datetime:e.published,images:p["default"].pluck(e.images,"url"),title:e.title,url:e.url}}),e.nextPageToken&&(d.nextPageToken=e.nextPageToken),t.abrupt("return",d);case 40:case"end":return t.stop()}},null,t,[[3,25,29,37],[30,,32,36]])})}function m(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=h["default"](k.namespace+":getByUrl");return e=p["default"].defaults({},e,{key:null}),t("[start] GET byUrl "+e.url),x["default"]({json:!0,method:"GET",url:"https://www.googleapis.com/blogger/v3/blogs/byurl",qs:e}).then(b["default"](t),b["default"](t))}var p=n["default"](u),b=n["default"](l),h=n["default"](i),x=(n["default"](o),n["default"](d)),v=n["default"](g),q=n["default"](f),k=h["default"]("blogger-posts-crawler:bloggerAPI");t.exports={getByUrl:m,getPostsList:c}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dnZXJBUEkuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwibW9kIiwiX1Byb21pc2UiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiX2dldEl0ZXJhdG9yIiwiXyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJhc3luY0xvZyIsImRlYnVnIiwiaXNVcmwiLCJyZXF1ZXN0IiwiaW1nRGlnZ2VyIiwiYWRkckRpZ2dlciIsImd1bHBFYXN5VGFza0JhYmVsTW9kdWxlSWQyNTA4NTM1IiwidGhpcyIsIl9iYWJlbFJ1bnRpbWVDb3JlSnNQcm9taXNlIiwiX2JhYmVsUnVudGltZVJlZ2VuZXJhdG9yIiwiX2JhYmVsUnVudGltZUNvcmVKc0dldEl0ZXJhdG9yIiwiX2xvZGFzaCIsIl9iYWJlbFJ1bnRpbWVIZWxwZXJzSW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2FzeW5jTG9nIiwiX2RlYnVnIiwiX2lzVXJsIiwiX3JlcXVlc3RQcm9taXNlIiwiX2h0bWxJbWdEaWdnZXIiLCJfaHRtbFRhaXdhbkFkZHJlc3NEaWdnZXIiLCJnZXRQb3N0c0xpc3QiLCJibG9nZ2VySWQiLCJfdGhpcyIsInFzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibG9nMiIsIl9kZWJ1ZzIiLCJsb2ciLCJuYW1lc3BhY2UiLCJyZWplY3QiLCJfMiIsImRlZmF1bHRzIiwia2V5IiwibWF4UmVzdWx0cyIsInN0YXR1cyIsImZldGNoQm9kaWVzIiwiZmV0Y2hJbWFnZXMiLCJwYWdlVG9rZW4iLCJfcmVxdWVzdCIsImpzb24iLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwiX2FzeW5jTG9nMiIsInJlc3VsdCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJpdGVtIiwiaXRlbXMiLCJhc3luYyIsImNvbnRleHQkMiQwIiwicHJldiIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJhd3JhcCIsIl9hZGRyRGlnZ2VyIiwiZGlnIiwiY29udGVudCIsInQwIiwic2VudCIsImFkZHJlc3MiLCJfaW1nRGlnZ2VyIiwidDEiLCJpbWFnZXMiLCJsb2NhdGlvbiIsIm5hbWUiLCJ1bnNoaWZ0IiwidDIiLCJmaW5pc2giLCJtYXAiLCJib2R5IiwiY292ZXIiLCJnZXQiLCJkYXRldGltZSIsInB1Ymxpc2hlZCIsInBsdWNrIiwidGl0bGUiLCJuZXh0UGFnZVRva2VuIiwiYWJydXB0Iiwic3RvcCIsImdldEJ5VXJsIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQSxFQUFRQyxHQUNqQixHQUFzQixrQkFBWEMsU0FBeUJBLE9BQU9DLElBQ3pDRCxPQUFPLG9DQUFxQyxVQUFXLFNBQVUsZ0NBQWlDLDRCQUE2QixxQ0FBc0MsU0FBVSxnREFBaUQsYUFBYyxRQUFTLFNBQVUsa0JBQW1CLGtCQUFtQiw4QkFBK0JELE9BQ2pVLElBQXVCLG1CQUFaRyxVQUE2QyxtQkFBWEMsUUFDbERKLEVBQVFHLFFBQVNDLE9BQVFDLFFBQVEsaUNBQWtDQSxRQUFRLDZCQUE4QkEsUUFBUSxzQ0FBdUNBLFFBQVEsVUFBV0EsUUFBUSxpREFBa0RBLFFBQVEsY0FBZUEsUUFBUSxTQUFVQSxRQUFRLFVBQVdBLFFBQVEsbUJBQW9CQSxRQUFRLG1CQUFvQkEsUUFBUSxtQ0FDNVYsQ0FDTCxHQUFJQyxJQUNGSCxXQUVGSCxHQUFRTSxFQUFJSCxRQUFTRyxFQUFLUCxFQUFPUSxTQUFVUixFQUFPUyxvQkFBcUJULEVBQU9VLGFBQWNWLEVBQU9XLEVBQUdYLEVBQU9ZLHVCQUF3QlosRUFBT2EsU0FBVWIsRUFBT2MsTUFBT2QsRUFBT2UsTUFBT2YsRUFBT2dCLFFBQVNoQixFQUFPaUIsVUFBV2pCLEVBQU9rQixZQUMzTmxCLEVBQU9tQixpQ0FBbUNaLEVBQUlILFVBRS9DZ0IsS0FBTSxTQUFVaEIsRUFBU0MsRUFBUWdCLEVBQTRCQyxFQUEwQkMsRUFB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LFNBQUFBLEVBQ0FsRSxhQUFBQSIsImZpbGUiOiJibG9nZ2VyQVBJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFzeW5jTG9nIGZyb20gJy4vYXN5bmNMb2cnXG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnXG5pbXBvcnQgaXNVcmwgZnJvbSAnaXMtdXJsJ1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlJ1xuXG5pbXBvcnQgaW1nRGlnZ2VyIGZyb20gJ2h0bWwtaW1nLWRpZ2dlcidcbmltcG9ydCBhZGRyRGlnZ2VyIGZyb20gJ2h0bWwtdGFpd2FuLWFkZHJlc3MtZGlnZ2VyJ1xuXG5sZXQgbG9nID0gZGVidWcoJ2Jsb2dnZXItcG9zdHMtY3Jhd2xlcjpibG9nZ2VyQVBJJylcblxuLyoqXG5HZXQgcG9zdHMgb2YgYmxvZ2dlciBieSBibG9nZ2VySWRcblxubGluazogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYXBpcy1leHBsb3Jlci8/aGw9ZW5fVVMjcC9ibG9nZ2VyL3YzL2Jsb2dnZXIucG9zdHMubGlzdD9ibG9nSWQ9NzE2NTI5OTQ4MDI2NTgxMDQ1OCZmZXRjaEJvZGllcz1mYWxzZSZmZXRjaEltYWdlcz1mYWxzZSZtYXhSZXN1bHRzPTUwMCZzdGF0dXM9bGl2ZSZfaD0xJlxuKi9cbmZ1bmN0aW9uIGdldFBvc3RzTGlzdChibG9nZ2VySWQsIHFzID0ge30sIG9wdHMgPSB7fSkge1xuXG4gIGxldCBsb2cyID0gZGVidWcobG9nLm5hbWVzcGFjZSArICc6Z2V0UG9zdHNMaXN0JylcblxuICBpZiAoIWJsb2dnZXJJZCkge1xuICAgIFByb21pc2UucmVqZWN0KGAke2xvZzIubmFtZXNwYWNlfTogZXhwZWN0IGZpcnN0IGFyZyB0byBiZSBhIG51bWJlciBhcyBibG9nZ2VySWRgKVxuICB9XG5cbiAgcXMgPSBfLmRlZmF1bHRzKHt9LCBxcywge1xuICAgIGtleTogbnVsbCxcbiAgICBtYXhSZXN1bHRzOiAyMCxcbiAgICBzdGF0dXM6ICdsaXZlJyxcbiAgICBmZXRjaEJvZGllczogdHJ1ZSxcbiAgICBmZXRjaEltYWdlczogZmFsc2UsXG4gICAgcGFnZVRva2VuOiB1bmRlZmluZWQsXG4gIH0pXG5cbiAgbG9nMihgW3N0YXJ0XSBnZXQgcG9zdHMgYnkgYmxvZ2dlcklkOiAke2Jsb2dnZXJJZH0sIHBhZ2VUb2tlbjogJHtxcy5wYWdlVG9rZW59YClcblxuICByZXR1cm4gcmVxdWVzdCh7XG4gICAganNvbjogdHJ1ZSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jsb2dnZXIvdjMvYmxvZ3MvJHtibG9nZ2VySWR9L3Bvc3RzYCxcbiAgICBxcyxcbiAgfSlcbiAgLnRoZW4oYXN5bmNMb2cobG9nMiksIGFzeW5jTG9nKGxvZzIpKVxuICAudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIHJlc3VsdC5pdGVtcykge1xuICAgICAgaXRlbS5hZGRyZXNzID0gYXdhaXQgYWRkckRpZ2dlci5kaWcoaXRlbS5jb250ZW50KSB8fCBbXVxuICAgICAgaXRlbS5pbWFnZXMgPSBhd2FpdCBpbWdEaWdnZXIuZGlnKGl0ZW0uY29udGVudCkgfHwgW11cblxuICAgICAgaWYgKGl0ZW0ubG9jYXRpb24gJiYgaXRlbS5sb2NhdGlvbi5uYW1lKSB7XG4gICAgICAgIGl0ZW0uYWRkcmVzcy51bnNoaWZ0KGl0ZW0ubG9jYXRpb24ubmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaXRlbXMgPSBfLm1hcChyZXN1bHQuaXRlbXMsIChpdGVtKSA9PiB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZHJlc3M6IGl0ZW0uYWRkcmVzcyxcbiAgICAgICAgYm9keTogaXRlbS5jb250ZW50LFxuICAgICAgICBjb3ZlcjogXy5nZXQoaXRlbSwgJ2ltYWdlc1swXS51cmwnLCAnJyksXG4gICAgICAgIGRhdGV0aW1lOiBpdGVtLnB1Ymxpc2hlZCxcbiAgICAgICAgaW1hZ2VzOiBfLnBsdWNrKGl0ZW0uaW1hZ2VzLCAndXJsJyksXG4gICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAocmVzdWx0Lm5leHRQYWdlVG9rZW4pIHtcbiAgICAgIGl0ZW1zLm5leHRQYWdlVG9rZW4gPSByZXN1bHQubmV4dFBhZ2VUb2tlblxuICAgIH1cblxuICAgIHJldHVybiBpdGVtc1xuICB9KVxufVxuXG4vKipcbkdldCBkZXRhaWwgb2YgYmxvZ2dlciBieSBibG9nc3BvdCB1cmxcbkBwYXJhbSBxcyB7b2JqZWN0fSBVcmwgcXVlcnkgc3RyaW5nIHBhcmFtc1xuQHBhcmFtIHFzLmtleSB7c3RyaW5nfSBBUEkga2V5XG5AcmV0dXJuIHtQcm9taXNlKG9iamVjdCl9IFRyeSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hcGlzLWV4cGxvcmVyLz9obD1lbl9VUyNwL2Jsb2dnZXIvdjMvYmxvZ2dlci5ibG9ncy5nZXRCeVVybD91cmw9aHR0cCUyNTNBJTI1MkYlMjUyRmhhcHB5Y2xvdWQyMDEzLmJsb2dzcG90LnR3JTI1MkYmX2g9NiZcbiovXG5mdW5jdGlvbiBnZXRCeVVybChxcyA9IHt9KSB7XG5cbiAgbGV0IGxvZzIgPSBkZWJ1Zyhsb2cubmFtZXNwYWNlICsgJzpnZXRCeVVybCcpXG5cbiAgcXMgPSBfLmRlZmF1bHRzKHt9LCBxcywge1xuICAgIGtleTogbnVsbCxcbiAgfSlcblxuICBsb2cyKGBbc3RhcnRdIEdFVCBieVVybCAke3FzLnVybH1gKVxuXG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBqc29uOiB0cnVlLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgdXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYmxvZ2dlci92My9ibG9ncy9ieXVybGAsXG4gICAgcXMsXG4gIH0pXG4gIC50aGVuKGFzeW5jTG9nKGxvZzIpLCBhc3luY0xvZyhsb2cyKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRCeVVybCxcbiAgZ2V0UG9zdHNMaXN0XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
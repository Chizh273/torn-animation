// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _animation = require("./animation");
var _animationDefault = parcelHelpers.interopDefault(_animation);
var _canvas = require("./canvas");
var _canvasDefault = parcelHelpers.interopDefault(_canvas);
const WIDTH = window.innerWidth + 600;
const HEIGHT = window.innerHeight + 600;
const canvas = new (0, _canvasDefault.default)(document.createElement("canvas"), WIDTH, HEIGHT);
const img = document.createElement("img");
document.body.append(canvas.canvas);
const animation = new (0, _animationDefault.default)(canvas, img, WIDTH, HEIGHT, {
    x: 600,
    y: 600
});
(function render() {
    animation.dispatch();
    requestAnimationFrame(render);
})();

},{"./animation":"iKgaV","./canvas":"1Z0N5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKgaV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rxjs = require("rxjs");
var _math = require("./math");
class Animation {
    get tick$() {
        return this._tick$.asObservable();
    }
    constructor(canvas, prevCanvasImg, width, height, offset, lineLifeTicks = 100, speed = 7, backgroundColor = "black", lineColor = "white"){
        this.canvas = canvas;
        this.prevCanvasImg = prevCanvasImg;
        this.width = width;
        this.height = height;
        this.offset = offset;
        this.lineLifeTicks = lineLifeTicks;
        this.speed = speed;
        this.backgroundColor = backgroundColor;
        this.lineColor = lineColor;
        this._tick$ = new (0, _rxjs.BehaviorSubject)(0);
        this.sides = (0, _math.generateSides)(this.width, this.height);
        this.setup();
    }
    dispatch() {
        this._tick$.next(this._tick$.value + 1);
    }
    setup() {
        this.canvas.fill(this.backgroundColor);
        // Generate torn line every ${this.speed} ticks.
        this.tick$.pipe((0, _rxjs.filter)((time)=>time % this.lineLifeTicks === 0), (0, _rxjs.switchMap)(()=>{
            return this.canvas.toDataUrl();
        }), (0, _rxjs.tap)((canvasImg)=>{
            this.prevCanvasImg.src = canvasImg;
        })).subscribe(()=>{
            this.currentLine = (0, _math.createLine)(this.sides, this.offset);
            const lineLength = (0, _math.calcLineLength)(this.currentLine.start, this.currentLine.end);
            this.tornLine = (0, _math.generateTornLine)(this.currentLine.start, this.currentLine.end, lineLength, parseInt(`${lineLength / 5}`, 10), Math.PI);
        });
        // Draw and animate torn line on the canvas.
        this.tick$.pipe((0, _rxjs.filter)((time)=>time % this.lineLifeTicks !== 0), (0, _rxjs.map)((time)=>time % this.lineLifeTicks), (0, _rxjs.map)((timer)=>{
            const endPointWithoutOffset = {
                x: this.currentLine.end.x - this.currentLine.start.x,
                y: this.currentLine.end.y - this.currentLine.start.y
            };
            const lineRadianAngle = (0, _math.calcLineAngle)(endPointWithoutOffset);
            return {
                left: (0, _math.calcPointInPolarSystem)(lineRadianAngle + Math.PI / 2, timer / this.speed),
                right: (0, _math.calcPointInPolarSystem)(lineRadianAngle - Math.PI / 2, timer / this.speed)
            };
        }), (0, _rxjs.map)(({ left , right  })=>({
                left: this.tornLine.map((point)=>(0, _math.applyOffset)(point, left)),
                right: this.tornLine.reverse().map((point)=>(0, _math.applyOffset)(point, right))
            })), (0, _rxjs.switchMap)((figure)=>(0, _rxjs.forkJoin)([
                this.canvas.drawImage(this.prevCanvasImg, {
                    x: 0,
                    y: 0
                }),
                this.canvas.drawFigure(figure, this.lineColor, this.backgroundColor)
            ]))).subscribe();
    }
}
exports.default = Animation;

},{"rxjs":"lLy7s","./math":"itVG6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLy7s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>(0, _observable.Observable));
parcelHelpers.export(exports, "ConnectableObservable", ()=>(0, _connectableObservable.ConnectableObservable));
parcelHelpers.export(exports, "observable", ()=>(0, _observable1.observable));
parcelHelpers.export(exports, "animationFrames", ()=>(0, _animationFrames.animationFrames));
parcelHelpers.export(exports, "Subject", ()=>(0, _subject.Subject));
parcelHelpers.export(exports, "BehaviorSubject", ()=>(0, _behaviorSubject.BehaviorSubject));
parcelHelpers.export(exports, "ReplaySubject", ()=>(0, _replaySubject.ReplaySubject));
parcelHelpers.export(exports, "AsyncSubject", ()=>(0, _asyncSubject.AsyncSubject));
parcelHelpers.export(exports, "asap", ()=>(0, _asap.asap));
parcelHelpers.export(exports, "asapScheduler", ()=>(0, _asap.asapScheduler));
parcelHelpers.export(exports, "async", ()=>(0, _async.async));
parcelHelpers.export(exports, "asyncScheduler", ()=>(0, _async.asyncScheduler));
parcelHelpers.export(exports, "queue", ()=>(0, _queue.queue));
parcelHelpers.export(exports, "queueScheduler", ()=>(0, _queue.queueScheduler));
parcelHelpers.export(exports, "animationFrame", ()=>(0, _animationFrame.animationFrame));
parcelHelpers.export(exports, "animationFrameScheduler", ()=>(0, _animationFrame.animationFrameScheduler));
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>(0, _virtualTimeScheduler.VirtualTimeScheduler));
parcelHelpers.export(exports, "VirtualAction", ()=>(0, _virtualTimeScheduler.VirtualAction));
parcelHelpers.export(exports, "Scheduler", ()=>(0, _scheduler.Scheduler));
parcelHelpers.export(exports, "Subscription", ()=>(0, _subscription.Subscription));
parcelHelpers.export(exports, "Subscriber", ()=>(0, _subscriber.Subscriber));
parcelHelpers.export(exports, "Notification", ()=>(0, _notification.Notification));
parcelHelpers.export(exports, "NotificationKind", ()=>(0, _notification.NotificationKind));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipe.pipe));
parcelHelpers.export(exports, "noop", ()=>(0, _noop.noop));
parcelHelpers.export(exports, "identity", ()=>(0, _identity.identity));
parcelHelpers.export(exports, "isObservable", ()=>(0, _isObservable.isObservable));
parcelHelpers.export(exports, "lastValueFrom", ()=>(0, _lastValueFrom.lastValueFrom));
parcelHelpers.export(exports, "firstValueFrom", ()=>(0, _firstValueFrom.firstValueFrom));
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>(0, _argumentOutOfRangeError.ArgumentOutOfRangeError));
parcelHelpers.export(exports, "EmptyError", ()=>(0, _emptyError.EmptyError));
parcelHelpers.export(exports, "NotFoundError", ()=>(0, _notFoundError.NotFoundError));
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>(0, _objectUnsubscribedError.ObjectUnsubscribedError));
parcelHelpers.export(exports, "SequenceError", ()=>(0, _sequenceError.SequenceError));
parcelHelpers.export(exports, "TimeoutError", ()=>(0, _timeout.TimeoutError));
parcelHelpers.export(exports, "UnsubscriptionError", ()=>(0, _unsubscriptionError.UnsubscriptionError));
parcelHelpers.export(exports, "bindCallback", ()=>(0, _bindCallback.bindCallback));
parcelHelpers.export(exports, "bindNodeCallback", ()=>(0, _bindNodeCallback.bindNodeCallback));
parcelHelpers.export(exports, "combineLatest", ()=>(0, _combineLatest.combineLatest));
parcelHelpers.export(exports, "concat", ()=>(0, _concat.concat));
parcelHelpers.export(exports, "connectable", ()=>(0, _connectable.connectable));
parcelHelpers.export(exports, "defer", ()=>(0, _defer.defer));
parcelHelpers.export(exports, "empty", ()=>(0, _empty.empty));
parcelHelpers.export(exports, "forkJoin", ()=>(0, _forkJoin.forkJoin));
parcelHelpers.export(exports, "from", ()=>(0, _from.from));
parcelHelpers.export(exports, "fromEvent", ()=>(0, _fromEvent.fromEvent));
parcelHelpers.export(exports, "fromEventPattern", ()=>(0, _fromEventPattern.fromEventPattern));
parcelHelpers.export(exports, "generate", ()=>(0, _generate.generate));
parcelHelpers.export(exports, "iif", ()=>(0, _iif.iif));
parcelHelpers.export(exports, "interval", ()=>(0, _interval.interval));
parcelHelpers.export(exports, "merge", ()=>(0, _merge.merge));
parcelHelpers.export(exports, "never", ()=>(0, _never.never));
parcelHelpers.export(exports, "of", ()=>(0, _of.of));
parcelHelpers.export(exports, "onErrorResumeNext", ()=>(0, _onErrorResumeNext.onErrorResumeNext));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairs.pairs));
parcelHelpers.export(exports, "partition", ()=>(0, _partition.partition));
parcelHelpers.export(exports, "race", ()=>(0, _race.race));
parcelHelpers.export(exports, "range", ()=>(0, _range.range));
parcelHelpers.export(exports, "throwError", ()=>(0, _throwError.throwError));
parcelHelpers.export(exports, "timer", ()=>(0, _timer.timer));
parcelHelpers.export(exports, "using", ()=>(0, _using.using));
parcelHelpers.export(exports, "zip", ()=>(0, _zip.zip));
parcelHelpers.export(exports, "scheduled", ()=>(0, _scheduled.scheduled));
parcelHelpers.export(exports, "EMPTY", ()=>(0, _empty.EMPTY));
parcelHelpers.export(exports, "NEVER", ()=>(0, _never.NEVER));
parcelHelpers.export(exports, "config", ()=>(0, _config.config));
parcelHelpers.export(exports, "audit", ()=>(0, _audit.audit));
parcelHelpers.export(exports, "auditTime", ()=>(0, _auditTime.auditTime));
parcelHelpers.export(exports, "buffer", ()=>(0, _buffer.buffer));
parcelHelpers.export(exports, "bufferCount", ()=>(0, _bufferCount.bufferCount));
parcelHelpers.export(exports, "bufferTime", ()=>(0, _bufferTime.bufferTime));
parcelHelpers.export(exports, "bufferToggle", ()=>(0, _bufferToggle.bufferToggle));
parcelHelpers.export(exports, "bufferWhen", ()=>(0, _bufferWhen.bufferWhen));
parcelHelpers.export(exports, "catchError", ()=>(0, _catchError.catchError));
parcelHelpers.export(exports, "combineAll", ()=>(0, _combineAll.combineAll));
parcelHelpers.export(exports, "combineLatestAll", ()=>(0, _combineLatestAll.combineLatestAll));
parcelHelpers.export(exports, "combineLatestWith", ()=>(0, _combineLatestWith.combineLatestWith));
parcelHelpers.export(exports, "concatAll", ()=>(0, _concatAll.concatAll));
parcelHelpers.export(exports, "concatMap", ()=>(0, _concatMap.concatMap));
parcelHelpers.export(exports, "concatMapTo", ()=>(0, _concatMapTo.concatMapTo));
parcelHelpers.export(exports, "concatWith", ()=>(0, _concatWith.concatWith));
parcelHelpers.export(exports, "connect", ()=>(0, _connect.connect));
parcelHelpers.export(exports, "count", ()=>(0, _count.count));
parcelHelpers.export(exports, "debounce", ()=>(0, _debounce.debounce));
parcelHelpers.export(exports, "debounceTime", ()=>(0, _debounceTime.debounceTime));
parcelHelpers.export(exports, "defaultIfEmpty", ()=>(0, _defaultIfEmpty.defaultIfEmpty));
parcelHelpers.export(exports, "delay", ()=>(0, _delay.delay));
parcelHelpers.export(exports, "delayWhen", ()=>(0, _delayWhen.delayWhen));
parcelHelpers.export(exports, "dematerialize", ()=>(0, _dematerialize.dematerialize));
parcelHelpers.export(exports, "distinct", ()=>(0, _distinct.distinct));
parcelHelpers.export(exports, "distinctUntilChanged", ()=>(0, _distinctUntilChanged.distinctUntilChanged));
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>(0, _distinctUntilKeyChanged.distinctUntilKeyChanged));
parcelHelpers.export(exports, "elementAt", ()=>(0, _elementAt.elementAt));
parcelHelpers.export(exports, "endWith", ()=>(0, _endWith.endWith));
parcelHelpers.export(exports, "every", ()=>(0, _every.every));
parcelHelpers.export(exports, "exhaust", ()=>(0, _exhaust.exhaust));
parcelHelpers.export(exports, "exhaustAll", ()=>(0, _exhaustAll.exhaustAll));
parcelHelpers.export(exports, "exhaustMap", ()=>(0, _exhaustMap.exhaustMap));
parcelHelpers.export(exports, "expand", ()=>(0, _expand.expand));
parcelHelpers.export(exports, "filter", ()=>(0, _filter.filter));
parcelHelpers.export(exports, "finalize", ()=>(0, _finalize.finalize));
parcelHelpers.export(exports, "find", ()=>(0, _find.find));
parcelHelpers.export(exports, "findIndex", ()=>(0, _findIndex.findIndex));
parcelHelpers.export(exports, "first", ()=>(0, _first.first));
parcelHelpers.export(exports, "groupBy", ()=>(0, _groupBy.groupBy));
parcelHelpers.export(exports, "ignoreElements", ()=>(0, _ignoreElements.ignoreElements));
parcelHelpers.export(exports, "isEmpty", ()=>(0, _isEmpty.isEmpty));
parcelHelpers.export(exports, "last", ()=>(0, _last.last));
parcelHelpers.export(exports, "map", ()=>(0, _map.map));
parcelHelpers.export(exports, "mapTo", ()=>(0, _mapTo.mapTo));
parcelHelpers.export(exports, "materialize", ()=>(0, _materialize.materialize));
parcelHelpers.export(exports, "max", ()=>(0, _max.max));
parcelHelpers.export(exports, "mergeAll", ()=>(0, _mergeAll.mergeAll));
parcelHelpers.export(exports, "flatMap", ()=>(0, _flatMap.flatMap));
parcelHelpers.export(exports, "mergeMap", ()=>(0, _mergeMap.mergeMap));
parcelHelpers.export(exports, "mergeMapTo", ()=>(0, _mergeMapTo.mergeMapTo));
parcelHelpers.export(exports, "mergeScan", ()=>(0, _mergeScan.mergeScan));
parcelHelpers.export(exports, "mergeWith", ()=>(0, _mergeWith.mergeWith));
parcelHelpers.export(exports, "min", ()=>(0, _min.min));
parcelHelpers.export(exports, "multicast", ()=>(0, _multicast.multicast));
parcelHelpers.export(exports, "observeOn", ()=>(0, _observeOn.observeOn));
parcelHelpers.export(exports, "pairwise", ()=>(0, _pairwise.pairwise));
parcelHelpers.export(exports, "pluck", ()=>(0, _pluck.pluck));
parcelHelpers.export(exports, "publish", ()=>(0, _publish.publish));
parcelHelpers.export(exports, "publishBehavior", ()=>(0, _publishBehavior.publishBehavior));
parcelHelpers.export(exports, "publishLast", ()=>(0, _publishLast.publishLast));
parcelHelpers.export(exports, "publishReplay", ()=>(0, _publishReplay.publishReplay));
parcelHelpers.export(exports, "raceWith", ()=>(0, _raceWith.raceWith));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduce.reduce));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeat.repeat));
parcelHelpers.export(exports, "repeatWhen", ()=>(0, _repeatWhen.repeatWhen));
parcelHelpers.export(exports, "retry", ()=>(0, _retry.retry));
parcelHelpers.export(exports, "retryWhen", ()=>(0, _retryWhen.retryWhen));
parcelHelpers.export(exports, "refCount", ()=>(0, _refCount.refCount));
parcelHelpers.export(exports, "sample", ()=>(0, _sample.sample));
parcelHelpers.export(exports, "sampleTime", ()=>(0, _sampleTime.sampleTime));
parcelHelpers.export(exports, "scan", ()=>(0, _scan.scan));
parcelHelpers.export(exports, "sequenceEqual", ()=>(0, _sequenceEqual.sequenceEqual));
parcelHelpers.export(exports, "share", ()=>(0, _share.share));
parcelHelpers.export(exports, "shareReplay", ()=>(0, _shareReplay.shareReplay));
parcelHelpers.export(exports, "single", ()=>(0, _single.single));
parcelHelpers.export(exports, "skip", ()=>(0, _skip.skip));
parcelHelpers.export(exports, "skipLast", ()=>(0, _skipLast.skipLast));
parcelHelpers.export(exports, "skipUntil", ()=>(0, _skipUntil.skipUntil));
parcelHelpers.export(exports, "skipWhile", ()=>(0, _skipWhile.skipWhile));
parcelHelpers.export(exports, "startWith", ()=>(0, _startWith.startWith));
parcelHelpers.export(exports, "subscribeOn", ()=>(0, _subscribeOn.subscribeOn));
parcelHelpers.export(exports, "switchAll", ()=>(0, _switchAll.switchAll));
parcelHelpers.export(exports, "switchMap", ()=>(0, _switchMap.switchMap));
parcelHelpers.export(exports, "switchMapTo", ()=>(0, _switchMapTo.switchMapTo));
parcelHelpers.export(exports, "switchScan", ()=>(0, _switchScan.switchScan));
parcelHelpers.export(exports, "take", ()=>(0, _take.take));
parcelHelpers.export(exports, "takeLast", ()=>(0, _takeLast.takeLast));
parcelHelpers.export(exports, "takeUntil", ()=>(0, _takeUntil.takeUntil));
parcelHelpers.export(exports, "takeWhile", ()=>(0, _takeWhile.takeWhile));
parcelHelpers.export(exports, "tap", ()=>(0, _tap.tap));
parcelHelpers.export(exports, "throttle", ()=>(0, _throttle.throttle));
parcelHelpers.export(exports, "throttleTime", ()=>(0, _throttleTime.throttleTime));
parcelHelpers.export(exports, "throwIfEmpty", ()=>(0, _throwIfEmpty.throwIfEmpty));
parcelHelpers.export(exports, "timeInterval", ()=>(0, _timeInterval.timeInterval));
parcelHelpers.export(exports, "timeout", ()=>(0, _timeout.timeout));
parcelHelpers.export(exports, "timeoutWith", ()=>(0, _timeoutWith.timeoutWith));
parcelHelpers.export(exports, "timestamp", ()=>(0, _timestamp.timestamp));
parcelHelpers.export(exports, "toArray", ()=>(0, _toArray.toArray));
parcelHelpers.export(exports, "window", ()=>(0, _window.window));
parcelHelpers.export(exports, "windowCount", ()=>(0, _windowCount.windowCount));
parcelHelpers.export(exports, "windowTime", ()=>(0, _windowTime.windowTime));
parcelHelpers.export(exports, "windowToggle", ()=>(0, _windowToggle.windowToggle));
parcelHelpers.export(exports, "windowWhen", ()=>(0, _windowWhen.windowWhen));
parcelHelpers.export(exports, "withLatestFrom", ()=>(0, _withLatestFrom.withLatestFrom));
parcelHelpers.export(exports, "zipAll", ()=>(0, _zipAll.zipAll));
parcelHelpers.export(exports, "zipWith", ()=>(0, _zipWith.zipWith));
var _observable = require("./internal/Observable");
var _connectableObservable = require("./internal/observable/ConnectableObservable");
var _observable1 = require("./internal/symbol/observable");
var _animationFrames = require("./internal/observable/dom/animationFrames");
var _subject = require("./internal/Subject");
var _behaviorSubject = require("./internal/BehaviorSubject");
var _replaySubject = require("./internal/ReplaySubject");
var _asyncSubject = require("./internal/AsyncSubject");
var _asap = require("./internal/scheduler/asap");
var _async = require("./internal/scheduler/async");
var _queue = require("./internal/scheduler/queue");
var _animationFrame = require("./internal/scheduler/animationFrame");
var _virtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");
var _scheduler = require("./internal/Scheduler");
var _subscription = require("./internal/Subscription");
var _subscriber = require("./internal/Subscriber");
var _notification = require("./internal/Notification");
var _pipe = require("./internal/util/pipe");
var _noop = require("./internal/util/noop");
var _identity = require("./internal/util/identity");
var _isObservable = require("./internal/util/isObservable");
var _lastValueFrom = require("./internal/lastValueFrom");
var _firstValueFrom = require("./internal/firstValueFrom");
var _argumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");
var _emptyError = require("./internal/util/EmptyError");
var _notFoundError = require("./internal/util/NotFoundError");
var _objectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");
var _sequenceError = require("./internal/util/SequenceError");
var _timeout = require("./internal/operators/timeout");
var _unsubscriptionError = require("./internal/util/UnsubscriptionError");
var _bindCallback = require("./internal/observable/bindCallback");
var _bindNodeCallback = require("./internal/observable/bindNodeCallback");
var _combineLatest = require("./internal/observable/combineLatest");
var _concat = require("./internal/observable/concat");
var _connectable = require("./internal/observable/connectable");
var _defer = require("./internal/observable/defer");
var _empty = require("./internal/observable/empty");
var _forkJoin = require("./internal/observable/forkJoin");
var _from = require("./internal/observable/from");
var _fromEvent = require("./internal/observable/fromEvent");
var _fromEventPattern = require("./internal/observable/fromEventPattern");
var _generate = require("./internal/observable/generate");
var _iif = require("./internal/observable/iif");
var _interval = require("./internal/observable/interval");
var _merge = require("./internal/observable/merge");
var _never = require("./internal/observable/never");
var _of = require("./internal/observable/of");
var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");
var _pairs = require("./internal/observable/pairs");
var _partition = require("./internal/observable/partition");
var _race = require("./internal/observable/race");
var _range = require("./internal/observable/range");
var _throwError = require("./internal/observable/throwError");
var _timer = require("./internal/observable/timer");
var _using = require("./internal/observable/using");
var _zip = require("./internal/observable/zip");
var _scheduled = require("./internal/scheduled/scheduled");
var _types = require("./internal/types");
parcelHelpers.exportAll(_types, exports);
var _config = require("./internal/config");
var _audit = require("./internal/operators/audit");
var _auditTime = require("./internal/operators/auditTime");
var _buffer = require("./internal/operators/buffer");
var _bufferCount = require("./internal/operators/bufferCount");
var _bufferTime = require("./internal/operators/bufferTime");
var _bufferToggle = require("./internal/operators/bufferToggle");
var _bufferWhen = require("./internal/operators/bufferWhen");
var _catchError = require("./internal/operators/catchError");
var _combineAll = require("./internal/operators/combineAll");
var _combineLatestAll = require("./internal/operators/combineLatestAll");
var _combineLatestWith = require("./internal/operators/combineLatestWith");
var _concatAll = require("./internal/operators/concatAll");
var _concatMap = require("./internal/operators/concatMap");
var _concatMapTo = require("./internal/operators/concatMapTo");
var _concatWith = require("./internal/operators/concatWith");
var _connect = require("./internal/operators/connect");
var _count = require("./internal/operators/count");
var _debounce = require("./internal/operators/debounce");
var _debounceTime = require("./internal/operators/debounceTime");
var _defaultIfEmpty = require("./internal/operators/defaultIfEmpty");
var _delay = require("./internal/operators/delay");
var _delayWhen = require("./internal/operators/delayWhen");
var _dematerialize = require("./internal/operators/dematerialize");
var _distinct = require("./internal/operators/distinct");
var _distinctUntilChanged = require("./internal/operators/distinctUntilChanged");
var _distinctUntilKeyChanged = require("./internal/operators/distinctUntilKeyChanged");
var _elementAt = require("./internal/operators/elementAt");
var _endWith = require("./internal/operators/endWith");
var _every = require("./internal/operators/every");
var _exhaust = require("./internal/operators/exhaust");
var _exhaustAll = require("./internal/operators/exhaustAll");
var _exhaustMap = require("./internal/operators/exhaustMap");
var _expand = require("./internal/operators/expand");
var _filter = require("./internal/operators/filter");
var _finalize = require("./internal/operators/finalize");
var _find = require("./internal/operators/find");
var _findIndex = require("./internal/operators/findIndex");
var _first = require("./internal/operators/first");
var _groupBy = require("./internal/operators/groupBy");
var _ignoreElements = require("./internal/operators/ignoreElements");
var _isEmpty = require("./internal/operators/isEmpty");
var _last = require("./internal/operators/last");
var _map = require("./internal/operators/map");
var _mapTo = require("./internal/operators/mapTo");
var _materialize = require("./internal/operators/materialize");
var _max = require("./internal/operators/max");
var _mergeAll = require("./internal/operators/mergeAll");
var _flatMap = require("./internal/operators/flatMap");
var _mergeMap = require("./internal/operators/mergeMap");
var _mergeMapTo = require("./internal/operators/mergeMapTo");
var _mergeScan = require("./internal/operators/mergeScan");
var _mergeWith = require("./internal/operators/mergeWith");
var _min = require("./internal/operators/min");
var _multicast = require("./internal/operators/multicast");
var _observeOn = require("./internal/operators/observeOn");
var _pairwise = require("./internal/operators/pairwise");
var _pluck = require("./internal/operators/pluck");
var _publish = require("./internal/operators/publish");
var _publishBehavior = require("./internal/operators/publishBehavior");
var _publishLast = require("./internal/operators/publishLast");
var _publishReplay = require("./internal/operators/publishReplay");
var _raceWith = require("./internal/operators/raceWith");
var _reduce = require("./internal/operators/reduce");
var _repeat = require("./internal/operators/repeat");
var _repeatWhen = require("./internal/operators/repeatWhen");
var _retry = require("./internal/operators/retry");
var _retryWhen = require("./internal/operators/retryWhen");
var _refCount = require("./internal/operators/refCount");
var _sample = require("./internal/operators/sample");
var _sampleTime = require("./internal/operators/sampleTime");
var _scan = require("./internal/operators/scan");
var _sequenceEqual = require("./internal/operators/sequenceEqual");
var _share = require("./internal/operators/share");
var _shareReplay = require("./internal/operators/shareReplay");
var _single = require("./internal/operators/single");
var _skip = require("./internal/operators/skip");
var _skipLast = require("./internal/operators/skipLast");
var _skipUntil = require("./internal/operators/skipUntil");
var _skipWhile = require("./internal/operators/skipWhile");
var _startWith = require("./internal/operators/startWith");
var _subscribeOn = require("./internal/operators/subscribeOn");
var _switchAll = require("./internal/operators/switchAll");
var _switchMap = require("./internal/operators/switchMap");
var _switchMapTo = require("./internal/operators/switchMapTo");
var _switchScan = require("./internal/operators/switchScan");
var _take = require("./internal/operators/take");
var _takeLast = require("./internal/operators/takeLast");
var _takeUntil = require("./internal/operators/takeUntil");
var _takeWhile = require("./internal/operators/takeWhile");
var _tap = require("./internal/operators/tap");
var _throttle = require("./internal/operators/throttle");
var _throttleTime = require("./internal/operators/throttleTime");
var _throwIfEmpty = require("./internal/operators/throwIfEmpty");
var _timeInterval = require("./internal/operators/timeInterval");
var _timeoutWith = require("./internal/operators/timeoutWith");
var _timestamp = require("./internal/operators/timestamp");
var _toArray = require("./internal/operators/toArray");
var _window = require("./internal/operators/window");
var _windowCount = require("./internal/operators/windowCount");
var _windowTime = require("./internal/operators/windowTime");
var _windowToggle = require("./internal/operators/windowToggle");
var _windowWhen = require("./internal/operators/windowWhen");
var _withLatestFrom = require("./internal/operators/withLatestFrom");
var _zipAll = require("./internal/operators/zipAll");
var _zipWith = require("./internal/operators/zipWith");

},{"./internal/Observable":"4Jvxr","./internal/observable/ConnectableObservable":false,"./internal/symbol/observable":"byHtV","./internal/observable/dom/animationFrames":false,"./internal/Subject":"94RSe","./internal/BehaviorSubject":"4s6yS","./internal/ReplaySubject":false,"./internal/AsyncSubject":false,"./internal/scheduler/asap":false,"./internal/scheduler/async":false,"./internal/scheduler/queue":false,"./internal/scheduler/animationFrame":false,"./internal/scheduler/VirtualTimeScheduler":false,"./internal/Scheduler":false,"./internal/Subscription":"lFyhg","./internal/Subscriber":"1VFFQ","./internal/Notification":false,"./internal/util/pipe":"1GN6U","./internal/util/noop":"l8uEm","./internal/util/identity":"8Xfg6","./internal/util/isObservable":false,"./internal/lastValueFrom":false,"./internal/firstValueFrom":false,"./internal/util/ArgumentOutOfRangeError":false,"./internal/util/EmptyError":false,"./internal/util/NotFoundError":false,"./internal/util/ObjectUnsubscribedError":"6Gcwa","./internal/util/SequenceError":false,"./internal/operators/timeout":false,"./internal/util/UnsubscriptionError":"GSF7Z","./internal/observable/bindCallback":false,"./internal/observable/bindNodeCallback":false,"./internal/observable/combineLatest":false,"./internal/observable/concat":false,"./internal/observable/connectable":false,"./internal/observable/defer":false,"./internal/observable/empty":false,"./internal/observable/forkJoin":"fjZ2d","./internal/observable/from":"dBWag","./internal/observable/fromEvent":false,"./internal/observable/fromEventPattern":false,"./internal/observable/generate":false,"./internal/observable/iif":false,"./internal/observable/interval":false,"./internal/observable/merge":false,"./internal/observable/never":false,"./internal/observable/of":"lnQPU","./internal/observable/onErrorResumeNext":false,"./internal/observable/pairs":false,"./internal/observable/partition":false,"./internal/observable/race":false,"./internal/observable/range":false,"./internal/observable/throwError":false,"./internal/observable/timer":false,"./internal/observable/using":false,"./internal/observable/zip":false,"./internal/scheduled/scheduled":"l8eo2","./internal/types":"c58fk","./internal/config":"fX0gC","./internal/operators/audit":false,"./internal/operators/auditTime":false,"./internal/operators/buffer":false,"./internal/operators/bufferCount":false,"./internal/operators/bufferTime":false,"./internal/operators/bufferToggle":false,"./internal/operators/bufferWhen":false,"./internal/operators/catchError":false,"./internal/operators/combineAll":false,"./internal/operators/combineLatestAll":false,"./internal/operators/combineLatestWith":false,"./internal/operators/concatAll":false,"./internal/operators/concatMap":false,"./internal/operators/concatMapTo":false,"./internal/operators/concatWith":false,"./internal/operators/connect":false,"./internal/operators/count":false,"./internal/operators/debounce":false,"./internal/operators/debounceTime":false,"./internal/operators/defaultIfEmpty":false,"./internal/operators/delay":false,"./internal/operators/delayWhen":false,"./internal/operators/dematerialize":false,"./internal/operators/distinct":false,"./internal/operators/distinctUntilChanged":false,"./internal/operators/distinctUntilKeyChanged":false,"./internal/operators/elementAt":false,"./internal/operators/endWith":false,"./internal/operators/every":false,"./internal/operators/exhaust":false,"./internal/operators/exhaustAll":false,"./internal/operators/exhaustMap":false,"./internal/operators/expand":false,"./internal/operators/filter":"gA0i5","./internal/operators/finalize":false,"./internal/operators/find":false,"./internal/operators/findIndex":false,"./internal/operators/first":false,"./internal/operators/groupBy":false,"./internal/operators/ignoreElements":false,"./internal/operators/isEmpty":false,"./internal/operators/last":false,"./internal/operators/map":"25iUP","./internal/operators/mapTo":false,"./internal/operators/materialize":false,"./internal/operators/max":false,"./internal/operators/mergeAll":false,"./internal/operators/flatMap":false,"./internal/operators/mergeMap":false,"./internal/operators/mergeMapTo":false,"./internal/operators/mergeScan":false,"./internal/operators/mergeWith":false,"./internal/operators/min":false,"./internal/operators/multicast":false,"./internal/operators/observeOn":"21OcU","./internal/operators/pairwise":false,"./internal/operators/pluck":false,"./internal/operators/publish":false,"./internal/operators/publishBehavior":false,"./internal/operators/publishLast":false,"./internal/operators/publishReplay":false,"./internal/operators/raceWith":false,"./internal/operators/reduce":false,"./internal/operators/repeat":false,"./internal/operators/repeatWhen":false,"./internal/operators/retry":false,"./internal/operators/retryWhen":false,"./internal/operators/refCount":false,"./internal/operators/sample":false,"./internal/operators/sampleTime":false,"./internal/operators/scan":false,"./internal/operators/sequenceEqual":false,"./internal/operators/share":false,"./internal/operators/shareReplay":false,"./internal/operators/single":false,"./internal/operators/skip":false,"./internal/operators/skipLast":false,"./internal/operators/skipUntil":false,"./internal/operators/skipWhile":false,"./internal/operators/startWith":false,"./internal/operators/subscribeOn":"3SFol","./internal/operators/switchAll":false,"./internal/operators/switchMap":"jbzg2","./internal/operators/switchMapTo":false,"./internal/operators/switchScan":false,"./internal/operators/take":false,"./internal/operators/takeLast":false,"./internal/operators/takeUntil":false,"./internal/operators/takeWhile":false,"./internal/operators/tap":"dVdZH","./internal/operators/throttle":false,"./internal/operators/throttleTime":false,"./internal/operators/throwIfEmpty":false,"./internal/operators/timeInterval":false,"./internal/operators/timeoutWith":false,"./internal/operators/timestamp":false,"./internal/operators/toArray":false,"./internal/operators/window":false,"./internal/operators/windowCount":false,"./internal/operators/windowTime":false,"./internal/operators/windowToggle":false,"./internal/operators/windowWhen":false,"./internal/operators/withLatestFrom":false,"./internal/operators/zipAll":false,"./internal/operators/zipWith":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Jvxr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable);
var _subscriber = require("./Subscriber");
var _subscription = require("./Subscription");
var _observable = require("./symbol/observable");
var _pipe = require("./util/pipe");
var _config = require("./config");
var _isFunction = require("./util/isFunction");
var _errorContext = require("./util/errorContext");
var Observable = function() {
    function Observable(subscribe) {
        if (subscribe) this._subscribe = subscribe;
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new (0, _subscriber.SafeSubscriber)(observerOrNext, error, complete);
        (0, _errorContext.errorContext)(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 || subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[0, _observable.observable] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        return (0, _pipe.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : (0, _config.config).Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0, _isFunction.isFunction)(value.next) && (0, _isFunction.isFunction)(value.error) && (0, _isFunction.isFunction)(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof (0, _subscriber.Subscriber) || isObserver(value) && (0, _subscription.isSubscription)(value);
}

},{"./Subscriber":"1VFFQ","./Subscription":"lFyhg","./symbol/observable":"byHtV","./util/pipe":"1GN6U","./config":"fX0gC","./util/isFunction":"dEyyK","./util/errorContext":"gU38l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VFFQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscriber", ()=>Subscriber);
parcelHelpers.export(exports, "SafeSubscriber", ()=>SafeSubscriber);
parcelHelpers.export(exports, "EMPTY_OBSERVER", ()=>EMPTY_OBSERVER);
var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _subscription = require("./Subscription");
var _config = require("./config");
var _reportUnhandledError = require("./util/reportUnhandledError");
var _noop = require("./util/noop");
var _notificationFactories = require("./NotificationFactories");
var _timeoutProvider = require("./scheduler/timeoutProvider");
var _errorContext = require("./util/errorContext");
var Subscriber = function(_super) {
    (0, _tslib.__extends)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0, _subscription.isSubscription)(destination)) destination.add(_this);
        } else _this.destination = EMPTY_OBSERVER;
        return _this;
    }
    Subscriber.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function(value) {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.nextNotification)(value), this);
        else this._next(value);
    };
    Subscriber.prototype.error = function(err) {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.errorNotification)(err), this);
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.COMPLETE_NOTIFICATION), this);
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber;
}((0, _subscription.Subscription));
var SafeSubscriber = function(_super) {
    (0, _tslib.__extends)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if ((0, _isFunction.isFunction)(observerOrNext)) next = observerOrNext;
        else if (observerOrNext) {
            next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete;
            var context_1;
            if (_this && (0, _config.config).useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
            } else context_1 = observerOrNext;
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next, _this) : (0, _noop.noop),
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
            complete: complete ? wrapForErrorHandling(complete, _this) : (0, _noop.noop)
        };
        return _this;
    }
    return SafeSubscriber;
}(Subscriber);
function wrapForErrorHandling(handler, instance) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        try {
            handler.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
        } catch (err) {
            if ((0, _config.config).useDeprecatedSynchronousErrorHandling) (0, _errorContext.captureError)(err);
            else (0, _reportUnhandledError.reportUnhandledError)(err);
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = (0, _config.config).onStoppedNotification;
    onStoppedNotification && (0, _timeoutProvider.timeoutProvider).setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: (0, _noop.noop),
    error: defaultErrorHandler,
    complete: (0, _noop.noop)
};

},{"tslib":"99ylF","./util/isFunction":"dEyyK","./Subscription":"lFyhg","./config":"fX0gC","./util/reportUnhandledError":"aVM3K","./util/noop":"l8uEm","./NotificationFactories":"hwqFj","./scheduler/timeoutProvider":"1FR9J","./util/errorContext":"gU38l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99ylF":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dEyyK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
function isFunction(value) {
    return typeof value === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFyhg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscription", ()=>Subscription);
parcelHelpers.export(exports, "EMPTY_SUBSCRIPTION", ()=>EMPTY_SUBSCRIPTION);
parcelHelpers.export(exports, "isSubscription", ()=>isSubscription);
var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _unsubscriptionError = require("./util/UnsubscriptionError");
var _arrRemove = require("./util/arrRemove");
var Subscription = function() {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) try {
                    for(var _parentage_1 = (0, _tslib.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                        var parent_1 = _parentage_1_1.value;
                        parent_1.remove(this);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                else _parentage.remove(this);
            }
            var initialTeardown = this.initialTeardown;
            if ((0, _isFunction.isFunction)(initialTeardown)) try {
                initialTeardown();
            } catch (e) {
                errors = e instanceof (0, _unsubscriptionError.UnsubscriptionError) ? e.errors : [
                    e
                ];
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for(var _teardowns_1 = (0, _tslib.__values)(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()){
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof (0, _unsubscriptionError.UnsubscriptionError)) errors = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(errors)), (0, _tslib.__read)(err.errors));
                            else errors.push(err);
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) throw new (0, _unsubscriptionError.UnsubscriptionError)(errors);
        }
    };
    Subscription.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) execTeardown(teardown);
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) return;
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) this._parentage = null;
        else if (Array.isArray(_parentage)) (0, _arrRemove.arrRemove)(_parentage, parent);
    };
    Subscription.prototype.remove = function(teardown) {
        var _teardowns = this._teardowns;
        _teardowns && (0, _arrRemove.arrRemove)(_teardowns, teardown);
        if (teardown instanceof Subscription) teardown._removeParent(this);
    };
    Subscription.EMPTY = function() {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    }();
    return Subscription;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && (0, _isFunction.isFunction)(value.remove) && (0, _isFunction.isFunction)(value.add) && (0, _isFunction.isFunction)(value.unsubscribe);
}
function execTeardown(teardown) {
    if ((0, _isFunction.isFunction)(teardown)) teardown();
    else teardown.unsubscribe();
}

},{"tslib":"99ylF","./util/isFunction":"dEyyK","./util/UnsubscriptionError":"GSF7Z","./util/arrRemove":"dLHeW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GSF7Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>UnsubscriptionError);
var _createErrorClass = require("./createErrorClass");
var UnsubscriptionError = (0, _createErrorClass.createErrorClass)(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
    };
});

},{"./createErrorClass":"i1v8Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1v8Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createErrorClass", ()=>createErrorClass);
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLHeW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrRemove", ()=>arrRemove);
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fX0gC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVM3K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reportUnhandledError", ()=>reportUnhandledError);
var _config = require("../config");
var _timeoutProvider = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    (0, _timeoutProvider.timeoutProvider).setTimeout(function() {
        var onUnhandledError = (0, _config.config).onUnhandledError;
        if (onUnhandledError) onUnhandledError(err);
        else throw err;
    });
}

},{"../config":"fX0gC","../scheduler/timeoutProvider":"1FR9J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FR9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutProvider", ()=>timeoutProvider);
var _tslib = require("tslib");
var timeoutProvider = {
    setTimeout: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
    },
    clearTimeout: function(handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
};

},{"tslib":"99ylF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8uEm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwqFj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMPLETE_NOTIFICATION", ()=>COMPLETE_NOTIFICATION);
parcelHelpers.export(exports, "errorNotification", ()=>errorNotification);
parcelHelpers.export(exports, "nextNotification", ()=>nextNotification);
parcelHelpers.export(exports, "createNotification", ()=>createNotification);
var COMPLETE_NOTIFICATION = function() {
    return createNotification("C", undefined, undefined);
}();
function errorNotification(error) {
    return createNotification("E", undefined, error);
}
function nextNotification(value) {
    return createNotification("N", value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gU38l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorContext", ()=>errorContext);
parcelHelpers.export(exports, "captureError", ()=>captureError);
var _config = require("../config");
var context = null;
function errorContext(cb) {
    if ((0, _config.config).useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) context = {
            errorThrown: false,
            error: null
        };
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) throw error;
        }
    } else cb();
}
function captureError(err) {
    if ((0, _config.config).useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}

},{"../config":"fX0gC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byHtV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observable", ()=>observable);
var observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GN6U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "pipeFromArray", ()=>pipeFromArray);
var _identity = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) return 0, _identity.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}

},{"./identity":"8Xfg6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Xfg6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
function identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94RSe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subject", ()=>Subject);
parcelHelpers.export(exports, "AnonymousSubject", ()=>AnonymousSubject);
var _tslib = require("tslib");
var _observable = require("./Observable");
var _subscription = require("./Subscription");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var _arrRemove = require("./util/arrRemove");
var _errorContext = require("./util/errorContext");
var Subject = function(_super) {
    (0, _tslib.__extends)(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function() {
        if (this.closed) throw new (0, _objectUnsubscribedError.ObjectUnsubscribedError)();
    };
    Subject.prototype.next = function(value) {
        var _this = this;
        (0, _errorContext.errorContext)(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                var copy = _this.observers.slice();
                try {
                    for(var copy_1 = (0, _tslib.__values)(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()){
                        var observer = copy_1_1.value;
                        observer.next(value);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            }
        });
    };
    Subject.prototype.error = function(err) {
        var _this = this;
        (0, _errorContext.errorContext)(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while(observers.length)observers.shift().error(err);
            }
        });
    };
    Subject.prototype.complete = function() {
        var _this = this;
        (0, _errorContext.errorContext)(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while(observers.length)observers.shift().complete();
            }
        });
    };
    Subject.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function(subscriber) {
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        return hasError || isStopped ? (0, _subscription.EMPTY_SUBSCRIPTION) : (observers.push(subscriber), new (0, _subscription.Subscription)(function() {
            return (0, _arrRemove.arrRemove)(observers, subscriber);
        }));
    };
    Subject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) subscriber.complete();
    };
    Subject.prototype.asObservable = function() {
        var observable = new (0, _observable.Observable)();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}((0, _observable.Observable));
var AnonymousSubject = function(_super) {
    (0, _tslib.__extends)(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : (0, _subscription.EMPTY_SUBSCRIPTION);
    };
    return AnonymousSubject;
}(Subject);

},{"tslib":"99ylF","./Observable":"4Jvxr","./Subscription":"lFyhg","./util/ObjectUnsubscribedError":"6Gcwa","./util/arrRemove":"dLHeW","./util/errorContext":"gU38l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Gcwa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>ObjectUnsubscribedError);
var _createErrorClass = require("./createErrorClass");
var ObjectUnsubscribedError = (0, _createErrorClass.createErrorClass)(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
    };
});

},{"./createErrorClass":"i1v8Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4s6yS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BehaviorSubject", ()=>BehaviorSubject);
var _tslib = require("tslib");
var _subject = require("./Subject");
var BehaviorSubject = function(_super) {
    (0, _tslib.__extends)(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) throw thrownError;
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}((0, _subject.Subject));

},{"tslib":"99ylF","./Subject":"94RSe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjZ2d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forkJoin", ()=>forkJoin);
var _observable = require("../Observable");
var _argsArgArrayOrObject = require("../util/argsArgArrayOrObject");
var _innerFrom = require("./innerFrom");
var _args = require("../util/args");
var _operatorSubscriber = require("../operators/OperatorSubscriber");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var _createObject = require("../util/createObject");
function forkJoin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = (0, _args.popResultSelector)(args);
    var _a = (0, _argsArgArrayOrObject.argsArgArrayOrObject)(args), sources = _a.args, keys = _a.keys;
    var result = new (0, _observable.Observable)(function(subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex) {
            var hasValue = false;
            (0, _innerFrom.innerFrom)(sources[sourceIndex]).subscribe(new (0, _operatorSubscriber.OperatorSubscriber)(subscriber, function(value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function() {
                return remainingCompletions--;
            }, undefined, function() {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) subscriber.next(keys ? (0, _createObject.createObject)(keys, values) : values);
                    subscriber.complete();
                }
            }));
        };
        for(var sourceIndex = 0; sourceIndex < length; sourceIndex++)_loop_1(sourceIndex);
    });
    return resultSelector ? result.pipe((0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector)) : result;
}

},{"../Observable":"4Jvxr","../util/argsArgArrayOrObject":"sN5w7","./innerFrom":"27e4p","../util/args":"i1opM","../operators/OperatorSubscriber":"96z9b","../util/mapOneOrManyArgs":"hlLvg","../util/createObject":"1ntWm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sN5w7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "argsArgArrayOrObject", ()=>argsArgArrayOrObject);
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) return {
            args: first_1,
            keys: null
        };
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function(key) {
                    return first_1[key];
                }),
                keys: keys
            };
        }
    }
    return {
        args: args,
        keys: null
    };
}
function isPOJO(obj) {
    return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27e4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "innerFrom", ()=>innerFrom);
parcelHelpers.export(exports, "fromInteropObservable", ()=>fromInteropObservable);
parcelHelpers.export(exports, "fromArrayLike", ()=>fromArrayLike);
parcelHelpers.export(exports, "fromPromise", ()=>fromPromise);
parcelHelpers.export(exports, "fromIterable", ()=>fromIterable);
parcelHelpers.export(exports, "fromAsyncIterable", ()=>fromAsyncIterable);
parcelHelpers.export(exports, "fromReadableStreamLike", ()=>fromReadableStreamLike);
var _tslib = require("tslib");
var _isArrayLike = require("../util/isArrayLike");
var _isPromise = require("../util/isPromise");
var _observable = require("../Observable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isAsyncIterable = require("../util/isAsyncIterable");
var _throwUnobservableError = require("../util/throwUnobservableError");
var _isIterable = require("../util/isIterable");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
var _isFunction = require("../util/isFunction");
var _reportUnhandledError = require("../util/reportUnhandledError");
var _observable1 = require("../symbol/observable");
function innerFrom(input) {
    if (input instanceof (0, _observable.Observable)) return input;
    if (input != null) {
        if ((0, _isInteropObservable.isInteropObservable)(input)) return fromInteropObservable(input);
        if ((0, _isArrayLike.isArrayLike)(input)) return fromArrayLike(input);
        if ((0, _isPromise.isPromise)(input)) return fromPromise(input);
        if ((0, _isAsyncIterable.isAsyncIterable)(input)) return fromAsyncIterable(input);
        if ((0, _isIterable.isIterable)(input)) return fromIterable(input);
        if ((0, _isReadableStreamLike.isReadableStreamLike)(input)) return fromReadableStreamLike(input);
    }
    throw (0, _throwUnobservableError.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
    return new (0, _observable.Observable)(function(subscriber) {
        var obs = obj[0, _observable1.observable]();
        if ((0, _isFunction.isFunction)(obs.subscribe)) return obs.subscribe(subscriber);
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
function fromArrayLike(array) {
    return new (0, _observable.Observable)(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new (0, _observable.Observable)(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, (0, _reportUnhandledError.reportUnhandledError));
    });
}
function fromIterable(iterable) {
    return new (0, _observable.Observable)(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = (0, _tslib.__values)(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) return;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new (0, _observable.Observable)(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable((0, _isReadableStreamLike.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var value, e_2_1;
        return (0, _tslib.__generator)(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = (0, _tslib.__asyncValues)(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) return [
                        2
                    ];
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
}

},{"tslib":"99ylF","../util/isArrayLike":"i81jv","../util/isPromise":"aVkee","../Observable":"4Jvxr","../util/isInteropObservable":"7Yp6b","../util/isAsyncIterable":"fuDY5","../util/throwUnobservableError":"Il45E","../util/isIterable":"cGlpL","../util/isReadableStreamLike":"bnSKo","../util/isFunction":"dEyyK","../util/reportUnhandledError":"aVM3K","../symbol/observable":"byHtV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i81jv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike);
var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVkee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
var _isFunction = require("./isFunction");
function isPromise(value) {
    return (0, _isFunction.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

},{"./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Yp6b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInteropObservable", ()=>isInteropObservable);
var _observable = require("../symbol/observable");
var _isFunction = require("./isFunction");
function isInteropObservable(input) {
    return (0, _isFunction.isFunction)(input[0, _observable.observable]);
}

},{"../symbol/observable":"byHtV","./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuDY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAsyncIterable", ()=>isAsyncIterable);
var _isFunction = require("./isFunction");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && (0, _isFunction.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

},{"./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Il45E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInvalidObservableTypeError", ()=>createInvalidObservableTypeError);
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGlpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIterable", ()=>isIterable);
var _iterator = require("../symbol/iterator");
var _isFunction = require("./isFunction");
function isIterable(input) {
    return (0, _isFunction.isFunction)(input === null || input === void 0 ? void 0 : input[0, _iterator.iterator]);
}

},{"../symbol/iterator":"l85ff","./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l85ff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSymbolIterator", ()=>getSymbolIterator);
parcelHelpers.export(exports, "iterator", ()=>iterator);
function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
    return Symbol.iterator;
}
var iterator = getSymbolIterator();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnSKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "readableStreamLikeToAsyncGenerator", ()=>readableStreamLikeToAsyncGenerator);
parcelHelpers.export(exports, "isReadableStreamLike", ()=>isReadableStreamLike);
var _tslib = require("tslib");
var _isFunction = require("./isFunction");
function readableStreamLikeToAsyncGenerator(readableStream) {
    return (0, _tslib.__asyncGenerator)(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return (0, _tslib.__generator)(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    return [
                        4,
                        (0, _tslib.__await)(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        (0, _tslib.__await)(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        (0, _tslib.__await)(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return (0, _isFunction.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

},{"tslib":"99ylF","./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1opM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popResultSelector", ()=>popResultSelector);
parcelHelpers.export(exports, "popScheduler", ()=>popScheduler);
parcelHelpers.export(exports, "popNumber", ()=>popNumber);
var _isFunction = require("./isFunction");
var _isScheduler = require("./isScheduler");
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return (0, _isFunction.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return (0, _isScheduler.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
}

},{"./isFunction":"dEyyK","./isScheduler":"67Brk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67Brk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isScheduler", ()=>isScheduler);
var _isFunction = require("./isFunction");
function isScheduler(value) {
    return value && (0, _isFunction.isFunction)(value.schedule);
}

},{"./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"96z9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OperatorSubscriber", ()=>OperatorSubscriber);
var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var OperatorSubscriber = function(_super) {
    (0, _tslib.__extends)(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function() {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
    };
    return OperatorSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"99ylF","../Subscriber":"1VFFQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlLvg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapOneOrManyArgs", ()=>mapOneOrManyArgs);
var _tslib = require("tslib");
var _map = require("../operators/map");
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return (0, _map.map)(function(args) {
        return callOrApply(fn, args);
    });
}

},{"tslib":"99ylF","../operators/map":"25iUP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25iUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function map(project, thisArg) {
    return (0, _lift.operate)(function(source, subscriber) {
        var index = 0;
        source.subscribe(new (0, _operatorSubscriber.OperatorSubscriber)(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

},{"../util/lift":"7CiSs","./OperatorSubscriber":"96z9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CiSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasLift", ()=>hasLift);
parcelHelpers.export(exports, "operate", ()=>operate);
var _isFunction = require("./isFunction");
function hasLift(source) {
    return (0, _isFunction.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function(source) {
        if (hasLift(source)) return source.lift(function(liftedSource) {
            try {
                return init(liftedSource, this);
            } catch (err) {
                this.error(err);
            }
        });
        throw new TypeError("Unable to lift unknown Observable type");
    };
}

},{"./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ntWm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createObject", ()=>createObject);
function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBWag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from);
var _scheduled = require("../scheduled/scheduled");
var _innerFrom = require("./innerFrom");
function from(input, scheduler) {
    return scheduler ? (0, _scheduled.scheduled)(input, scheduler) : (0, _innerFrom.innerFrom)(input);
}

},{"../scheduled/scheduled":"l8eo2","./innerFrom":"27e4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8eo2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduled", ()=>scheduled);
var _scheduleObservable = require("./scheduleObservable");
var _schedulePromise = require("./schedulePromise");
var _scheduleArray = require("./scheduleArray");
var _scheduleIterable = require("./scheduleIterable");
var _scheduleAsyncIterable = require("./scheduleAsyncIterable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isPromise = require("../util/isPromise");
var _isArrayLike = require("../util/isArrayLike");
var _isIterable = require("../util/isIterable");
var _isAsyncIterable = require("../util/isAsyncIterable");
var _throwUnobservableError = require("../util/throwUnobservableError");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
var _scheduleReadableStreamLike = require("./scheduleReadableStreamLike");
function scheduled(input, scheduler) {
    if (input != null) {
        if ((0, _isInteropObservable.isInteropObservable)(input)) return (0, _scheduleObservable.scheduleObservable)(input, scheduler);
        if ((0, _isArrayLike.isArrayLike)(input)) return (0, _scheduleArray.scheduleArray)(input, scheduler);
        if ((0, _isPromise.isPromise)(input)) return (0, _schedulePromise.schedulePromise)(input, scheduler);
        if ((0, _isAsyncIterable.isAsyncIterable)(input)) return (0, _scheduleAsyncIterable.scheduleAsyncIterable)(input, scheduler);
        if ((0, _isIterable.isIterable)(input)) return (0, _scheduleIterable.scheduleIterable)(input, scheduler);
        if ((0, _isReadableStreamLike.isReadableStreamLike)(input)) return (0, _scheduleReadableStreamLike.scheduleReadableStreamLike)(input, scheduler);
    }
    throw (0, _throwUnobservableError.createInvalidObservableTypeError)(input);
}

},{"./scheduleObservable":"g2JIf","./schedulePromise":"aQruY","./scheduleArray":"e4o4N","./scheduleIterable":"1884S","./scheduleAsyncIterable":"bCUem","../util/isInteropObservable":"7Yp6b","../util/isPromise":"aVkee","../util/isArrayLike":"i81jv","../util/isIterable":"cGlpL","../util/isAsyncIterable":"fuDY5","../util/throwUnobservableError":"Il45E","../util/isReadableStreamLike":"bnSKo","./scheduleReadableStreamLike":"6KcBM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2JIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleObservable", ()=>scheduleObservable);
var _innerFrom = require("../observable/innerFrom");
var _observeOn = require("../operators/observeOn");
var _subscribeOn = require("../operators/subscribeOn");
function scheduleObservable(input, scheduler) {
    return (0, _innerFrom.innerFrom)(input).pipe((0, _subscribeOn.subscribeOn)(scheduler), (0, _observeOn.observeOn)(scheduler));
}

},{"../observable/innerFrom":"27e4p","../operators/observeOn":"21OcU","../operators/subscribeOn":"3SFol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21OcU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeOn", ()=>observeOn);
var _executeSchedule = require("../util/executeSchedule");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function observeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return (0, _lift.operate)(function(source, subscriber) {
        source.subscribe(new (0, _operatorSubscriber.OperatorSubscriber)(subscriber, function(value) {
            return (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                return subscriber.next(value);
            }, delay);
        }, function() {
            return (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                return subscriber.complete();
            }, delay);
        }, function(err) {
            return (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                return subscriber.error(err);
            }, delay);
        }));
    });
}

},{"../util/executeSchedule":"lF0MM","../util/lift":"7CiSs","./OperatorSubscriber":"96z9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF0MM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "executeSchedule", ()=>executeSchedule);
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) delay = 0;
    if (repeat === void 0) repeat = false;
    var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) parentSubscription.add(this.schedule(null, delay));
        else this.unsubscribe();
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) return scheduleSubscription;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SFol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeOn", ()=>subscribeOn);
var _lift = require("../util/lift");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return (0, _lift.operate)(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}

},{"../util/lift":"7CiSs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQruY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schedulePromise", ()=>schedulePromise);
var _innerFrom = require("../observable/innerFrom");
var _observeOn = require("../operators/observeOn");
var _subscribeOn = require("../operators/subscribeOn");
function schedulePromise(input, scheduler) {
    return (0, _innerFrom.innerFrom)(input).pipe((0, _subscribeOn.subscribeOn)(scheduler), (0, _observeOn.observeOn)(scheduler));
}

},{"../observable/innerFrom":"27e4p","../operators/observeOn":"21OcU","../operators/subscribeOn":"3SFol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4o4N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleArray", ()=>scheduleArray);
var _observable = require("../Observable");
function scheduleArray(input, scheduler) {
    return new (0, _observable.Observable)(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) subscriber.complete();
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) this.schedule();
            }
        });
    });
}

},{"../Observable":"4Jvxr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1884S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleIterable", ()=>scheduleIterable);
var _observable = require("../Observable");
var _iterator = require("../symbol/iterator");
var _isFunction = require("../util/isFunction");
var _executeSchedule = require("../util/executeSchedule");
function scheduleIterable(input, scheduler) {
    return new (0, _observable.Observable)(function(subscriber) {
        var iterator;
        (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
            iterator = input[0, _iterator.iterator]();
            (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                var _a;
                var value;
                var done;
                try {
                    _a = iterator.next(), value = _a.value, done = _a.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) subscriber.complete();
                else subscriber.next(value);
            }, 0, true);
        });
        return function() {
            return (0, _isFunction.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}

},{"../Observable":"4Jvxr","../symbol/iterator":"l85ff","../util/isFunction":"dEyyK","../util/executeSchedule":"lF0MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCUem":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleAsyncIterable", ()=>scheduleAsyncIterable);
var _observable = require("../Observable");
var _executeSchedule = require("../util/executeSchedule");
function scheduleAsyncIterable(input, scheduler) {
    if (!input) throw new Error("Iterable cannot be null");
    return new (0, _observable.Observable)(function(subscriber) {
        (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
            var iterator = input[Symbol.asyncIterator]();
            (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                iterator.next().then(function(result) {
                    if (result.done) subscriber.complete();
                    else subscriber.next(result.value);
                });
            }, 0, true);
        });
    });
}

},{"../Observable":"4Jvxr","../util/executeSchedule":"lF0MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KcBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleReadableStreamLike", ()=>scheduleReadableStreamLike);
var _scheduleAsyncIterable = require("./scheduleAsyncIterable");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
function scheduleReadableStreamLike(input, scheduler) {
    return (0, _scheduleAsyncIterable.scheduleAsyncIterable)((0, _isReadableStreamLike.readableStreamLikeToAsyncGenerator)(input), scheduler);
}

},{"./scheduleAsyncIterable":"bCUem","../util/isReadableStreamLike":"bnSKo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnQPU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "of", ()=>of);
var _args = require("../util/args");
var _from = require("./from");
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = (0, _args.popScheduler)(args);
    return (0, _from.from)(args, scheduler);
}

},{"../util/args":"i1opM","./from":"dBWag","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c58fk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gA0i5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function filter(predicate, thisArg) {
    return (0, _lift.operate)(function(source, subscriber) {
        var index = 0;
        source.subscribe(new (0, _operatorSubscriber.OperatorSubscriber)(subscriber, function(value) {
            return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
    });
}

},{"../util/lift":"7CiSs","./OperatorSubscriber":"96z9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbzg2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchMap", ()=>switchMap);
var _innerFrom = require("../observable/innerFrom");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function switchMap(project, resultSelector) {
    return (0, _lift.operate)(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
            return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(new (0, _operatorSubscriber.OperatorSubscriber)(subscriber, function(value) {
            innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            (0, _innerFrom.innerFrom)(project(value, outerIndex)).subscribe(innerSubscriber = new (0, _operatorSubscriber.OperatorSubscriber)(subscriber, function(innerValue) {
                return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
            }, function() {
                innerSubscriber = null;
                checkComplete();
            }));
        }, function() {
            isComplete = true;
            checkComplete();
        }));
    });
}

},{"../observable/innerFrom":"27e4p","../util/lift":"7CiSs","./OperatorSubscriber":"96z9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVdZH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tap", ()=>tap);
var _isFunction = require("../util/isFunction");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
var _identity = require("../util/identity");
function tap(observerOrNext, error, complete) {
    var tapObserver = (0, _isFunction.isFunction)(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error: error,
        complete: complete
    } : observerOrNext;
    return tapObserver ? (0, _lift.operate)(function(source, subscriber) {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 || _a.call(tapObserver);
        var isUnsub = true;
        source.subscribe(new (0, _operatorSubscriber.OperatorSubscriber)(subscriber, function(value) {
            var _a;
            (_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
            subscriber.next(value);
        }, function() {
            var _a;
            isUnsub = false;
            (_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
            subscriber.complete();
        }, function(err) {
            var _a;
            isUnsub = false;
            (_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
            subscriber.error(err);
        }, function() {
            var _a, _b;
            if (isUnsub) (_a = tapObserver.unsubscribe) === null || _a === void 0 || _a.call(tapObserver);
            (_b = tapObserver.finalize) === null || _b === void 0 || _b.call(tapObserver);
        }));
    }) : (0, _identity.identity);
}

},{"../util/isFunction":"dEyyK","../util/lift":"7CiSs","./OperatorSubscriber":"96z9b","../util/identity":"8Xfg6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itVG6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcPointInPolarSystem", ()=>(0, _calcPointInPolarSystemDefault.default));
parcelHelpers.export(exports, "generateTornLine", ()=>(0, _generateTornLineDefault.default));
parcelHelpers.export(exports, "calcLineLength", ()=>(0, _calcLineLengthDefault.default));
parcelHelpers.export(exports, "calcLineAngle", ()=>(0, _calcLineAngleDefault.default));
parcelHelpers.export(exports, "generateSides", ()=>(0, _generateSidesDefault.default));
parcelHelpers.export(exports, "applyOffset", ()=>(0, _applyOffsetDefault.default));
parcelHelpers.export(exports, "createLine", ()=>(0, _createLineDefault.default));
var _calcPointInPolarSystem = require("./calcPointInPolarSystem");
var _calcPointInPolarSystemDefault = parcelHelpers.interopDefault(_calcPointInPolarSystem);
var _generateTornLine = require("./generateTornLine");
var _generateTornLineDefault = parcelHelpers.interopDefault(_generateTornLine);
var _calcLineLength = require("./calcLineLength");
var _calcLineLengthDefault = parcelHelpers.interopDefault(_calcLineLength);
var _calcLineAngle = require("./calcLineAngle");
var _calcLineAngleDefault = parcelHelpers.interopDefault(_calcLineAngle);
var _generateSides = require("./generateSides");
var _generateSidesDefault = parcelHelpers.interopDefault(_generateSides);
var _applyOffset = require("./applyOffset");
var _applyOffsetDefault = parcelHelpers.interopDefault(_applyOffset);
var _createLine = require("./createLine");
var _createLineDefault = parcelHelpers.interopDefault(_createLine);

},{"./calcPointInPolarSystem":"gadvB","./generateTornLine":"vvy7R","./calcLineLength":"29Fgs","./calcLineAngle":"dCIrZ","./generateSides":"dYgMu","./applyOffset":"dUi6w","./createLine":"i3fs0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gadvB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const calcPointInPolarSystem = (angle, distance)=>({
        x: distance * Math.cos(angle),
        y: distance * Math.sin(angle)
    });
exports.default = calcPointInPolarSystem;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vvy7R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPointOnLine", ()=>getPointOnLine);
var _random = require("random");
var _randomDefault = parcelHelpers.interopDefault(_random);
var _applyOffset = require("./applyOffset");
var _applyOffsetDefault = parcelHelpers.interopDefault(_applyOffset);
const getPointOnLine = (lineStart, lineEnd, lineDistance, distanceToPoint)=>{
    const fractionOfTotal = distanceToPoint / lineDistance;
    return {
        x: lineStart.x + (lineEnd.x - lineStart.x) * fractionOfTotal,
        y: lineStart.y + (lineEnd.y - lineStart.y) * fractionOfTotal
    };
};
const generateTornLine = (start, end, lineLength, countOfPoints, offset)=>{
    const onePartSize = lineLength / countOfPoints;
    const { points  } = Array.from({
        length: countOfPoints - 1
    }).reduce((acc, _, i)=>{
        const randDistance = (0, _randomDefault.default).float(onePartSize * i, onePartSize * (i + 1));
        const point = getPointOnLine(start, end, lineLength, randDistance);
        const offsetAbs = Math.abs(offset) * -1;
        const offsetPoint = {
            x: (0, _randomDefault.default).float(offsetAbs * -1, offsetAbs),
            y: (0, _randomDefault.default).float(offsetAbs * -1, offsetAbs)
        };
        return {
            points: [
                ...acc.points,
                (0, _applyOffsetDefault.default)(point, offsetPoint)
            ],
            prevPoint: point
        };
    }, {
        points: [],
        prevPoint: start
    });
    return [
        start,
        ...points,
        end
    ];
};
exports.default = generateTornLine;

},{"random":"1Hoco","./applyOffset":"dUi6w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Hoco":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RNG", ()=>RNG);
parcelHelpers.export(exports, "RNGFactory", ()=>RNGFactory);
parcelHelpers.export(exports, "Random", ()=>Random);
parcelHelpers.export(exports, "default", ()=>random);
var _seedrandom = require("seedrandom");
var _seedrandomDefault = parcelHelpers.interopDefault(_seedrandom);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
var RNG = /*#__PURE__*/ function() {
    function RNG() {}
    var _proto = RNG.prototype;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _proto._seed = function _seed(seed, _opts) {
        // TODO: add entropy and stuff
        if (seed === (seed || 0)) return seed;
        else {
            var strSeed = "" + seed;
            var s = 0;
            for(var k = 0; k < strSeed.length; ++k)s ^= strSeed.charCodeAt(k) | 0;
            return s;
        }
    };
    return RNG;
}();
var RNGFunction = /*#__PURE__*/ function(_RNG) {
    _inheritsLoose(RNGFunction, _RNG);
    function RNGFunction(thunk, opts) {
        var _this;
        _this = _RNG.call(this) || this;
        _this._rng = void 0;
        _this.seed(thunk, opts);
        return _this;
    }
    var _proto = RNGFunction.prototype;
    _proto.next = function next() {
        return this._rng();
    };
    _proto.seed = function seed(thunk, _opts) {
        this._rng = thunk;
    };
    _proto.clone = function clone(_, opts) {
        return new RNGFunction(this._rng, opts);
    };
    _createClass(RNGFunction, [
        {
            key: "name",
            get: function get() {
                return "function";
            }
        }
    ]);
    return RNGFunction;
}(RNG);
/**
 * Construct an RNG with variable inputs. Used in calls to Random constructor
 * @param {...*} args - Distribution-specific arguments
 * @return RNG
 *
 * @example
 * new Random(RNGFactory(...args))
 */ var RNGFactory = function() {
    var args = [].slice.call(arguments);
    var _args = args, _args$ = _args[0], arg0 = _args$ === void 0 ? "default" : _args$;
    switch(typeof arg0){
        case "object":
            if (arg0 instanceof RNG) return arg0;
            break;
        case "function":
            return new RNGFunction(arg0);
        case "number":
        case "string":
        default:
            return new RNGFunction((0, _seedrandomDefault.default).apply(void 0, args));
    }
    throw new Error('invalid RNG "' + arg0 + '"');
};
var uniform = function(random, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return function() {
        return random.next() * (max - min) + min;
    };
};
function numberValidator(num) {
    return new NumberValidator(num);
}
var NumberValidator = function NumberValidator(num) {
    var _this = this;
    this.n = void 0;
    this.isInt = function() {
        if (Number.isInteger(_this.n)) return _this;
        throw new Error("Expected number to be an integer, got " + _this.n);
    };
    this.isPositive = function() {
        if (_this.n > 0) return _this;
        throw new Error("Expected number to be positive, got " + _this.n);
    };
    this.lessThan = function(v) {
        if (_this.n < v) return _this;
        throw new Error("Expected number to be less than " + v + ", got " + _this.n);
    };
    this.greaterThanOrEqual = function(v) {
        if (_this.n >= v) return _this;
        throw new Error("Expected number to be greater than or equal to " + v + ", got " + _this.n);
    };
    this.greaterThan = function(v) {
        if (_this.n > v) return _this;
        throw new Error("Expected number to be greater than " + v + ", got " + _this.n);
    };
    this.n = num;
};
var uniformInt = function(random, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    if (max === undefined) {
        max = min === undefined ? 1 : min;
        min = 0;
    }
    numberValidator(min).isInt();
    numberValidator(max).isInt();
    return function() {
        return Math.floor(random.next() * (max - min + 1) + min);
    };
};
var uniformBoolean = function(random) {
    return function() {
        return random.next() >= 0.5;
    };
};
var normal = function(random, mu, sigma) {
    if (mu === void 0) mu = 0;
    if (sigma === void 0) sigma = 1;
    return function() {
        var x, y, r;
        do {
            x = random.next() * 2 - 1;
            y = random.next() * 2 - 1;
            r = x * x + y * y;
        }while (!r || r > 1);
        return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
};
var logNormal = function(random, mu, sigma) {
    if (mu === void 0) mu = 0;
    if (sigma === void 0) sigma = 1;
    var normal = random.normal(mu, sigma);
    return function() {
        return Math.exp(normal());
    };
};
var bernoulli = function(random, p) {
    if (p === void 0) p = 0.5;
    numberValidator(p).greaterThanOrEqual(0).lessThan(1);
    return function() {
        return Math.floor(random.next() + p);
    };
};
var binomial = function(random, n, p) {
    if (n === void 0) n = 1;
    if (p === void 0) p = 0.5;
    numberValidator(n).isInt().isPositive();
    numberValidator(p).greaterThanOrEqual(0).lessThan(1);
    return function() {
        var i = 0;
        var x = 0;
        while(i++ < n)if (random.next() < p) x++;
        return x;
    };
};
var geometric = function(random, p) {
    if (p === void 0) p = 0.5;
    numberValidator(p).greaterThan(0).lessThan(1);
    var invLogP = 1.0 / Math.log(1.0 - p);
    return function() {
        return Math.floor(1 + Math.log(random.next()) * invLogP);
    };
};
var logFactorialTable = [
    0.0,
    0.0,
    0.69314718055994529,
    1.791759469228055,
    3.1780538303479458,
    4.7874917427820458,
    6.5792512120101012,
    8.5251613610654147,
    10.604602902745251,
    12.801827480081469
];
var logFactorial = function logFactorial(k) {
    return logFactorialTable[k];
};
var logSqrt2PI = 0.91893853320467267;
var poisson = function(random, lambda) {
    if (lambda === void 0) lambda = 1;
    numberValidator(lambda).isPositive();
    if (lambda < 10) {
        // inversion method
        var expMean = Math.exp(-lambda);
        return function() {
            var p = expMean;
            var x = 0;
            var u = random.next();
            while(u > p){
                u = u - p;
                p = lambda * p / ++x;
            }
            return x;
        };
    } else {
        // generative method
        var smu = Math.sqrt(lambda);
        var b = 0.931 + 2.53 * smu;
        var a = -0.059 + 0.02483 * b;
        var invAlpha = 1.1239 + 1.1328 / (b - 3.4);
        var vR = 0.9277 - 3.6224 / (b - 2);
        return function() {
            while(true){
                var u = void 0;
                var v = random.next();
                if (v <= 0.86 * vR) {
                    u = v / vR - 0.43;
                    return Math.floor((2 * a / (0.5 - Math.abs(u)) + b) * u + lambda + 0.445);
                }
                if (v >= vR) u = random.next() - 0.5;
                else {
                    u = v / vR - 0.93;
                    u = (u < 0 ? -0.5 : 0.5) - u;
                    v = random.next() * vR;
                }
                var us = 0.5 - Math.abs(u);
                if (us < 0.013 && v > us) continue;
                var k = Math.floor((2 * a / us + b) * u + lambda + 0.445);
                v = v * invAlpha / (a / (us * us) + b);
                if (k >= 10) {
                    var t = (k + 0.5) * Math.log(lambda / k) - lambda - logSqrt2PI + k - (1 / 12.0 - (1 / 360.0 - 1 / (1260.0 * k * k)) / (k * k)) / k;
                    if (Math.log(v * smu) <= t) return k;
                } else if (k >= 0) {
                    var _logFactorial;
                    var f = (_logFactorial = logFactorial(k)) != null ? _logFactorial : 0;
                    if (Math.log(v) <= k * Math.log(lambda) - lambda - f) return k;
                }
            }
        };
    }
};
var exponential = function(random, lambda) {
    if (lambda === void 0) lambda = 1;
    numberValidator(lambda).isPositive();
    return function() {
        return -Math.log(1 - random.next()) / lambda;
    };
};
var irwinHall = function(random, n) {
    if (n === void 0) n = 1;
    numberValidator(n).isInt().greaterThanOrEqual(0);
    return function() {
        var sum = 0;
        for(var i = 0; i < n; ++i)sum += random.next();
        return sum;
    };
};
var bates = function(random, n) {
    if (n === void 0) n = 1;
    numberValidator(n).isInt().isPositive();
    var irwinHall = random.irwinHall(n);
    return function() {
        return irwinHall() / n;
    };
};
var pareto = function(random, alpha) {
    if (alpha === void 0) alpha = 1;
    numberValidator(alpha).greaterThanOrEqual(0);
    var invAlpha = 1.0 / alpha;
    return function() {
        return 1.0 / Math.pow(1.0 - random.next(), invAlpha);
    };
};
var RNGMathRandom = /*#__PURE__*/ function(_RNG) {
    _inheritsLoose(RNGMathRandom, _RNG);
    function RNGMathRandom() {
        return _RNG.apply(this, arguments) || this;
    }
    var _proto = RNGMathRandom.prototype;
    _proto.next = function next() {
        return Math.random();
    };
    _proto.seed = function seed(_seed, _opts) {
    // intentionally empty
    };
    _proto.clone = function clone() {
        return new RNGMathRandom();
    };
    _createClass(RNGMathRandom, [
        {
            key: "name",
            get: function get() {
                return "default";
            }
        }
    ]);
    return RNGMathRandom;
}(RNG);
/**
 * Seedable random number generator supporting many common distributions.
 *
 * Defaults to Math.random as its underlying pseudorandom number generator.
 *
 * @name Random
 * @class
 *
 * @param {RNG|function} [rng=Math.random] - Underlying pseudorandom number generator.
 */ var Random = /*#__PURE__*/ function() {
    function Random(rng) {
        var _this = this;
        this._rng = void 0;
        this._patch = void 0;
        this._cache = {};
        this.next = function() {
            return _this._rng.next();
        };
        this["float"] = function(min, max) {
            return _this.uniform(min, max)();
        };
        this["int"] = function(min, max) {
            return _this.uniformInt(min, max)();
        };
        this.integer = function(min, max) {
            return _this.uniformInt(min, max)();
        };
        this.bool = function() {
            return _this.uniformBoolean()();
        };
        this["boolean"] = function() {
            return _this.uniformBoolean()();
        };
        this.uniform = function(min, max) {
            return _this._memoize("uniform", uniform, min, max);
        };
        this.uniformInt = function(min, max) {
            return _this._memoize("uniformInt", uniformInt, min, max);
        };
        this.uniformBoolean = function() {
            return _this._memoize("uniformBoolean", uniformBoolean);
        };
        this.normal = function(mu, sigma) {
            return normal(_this, mu, sigma);
        };
        this.logNormal = function(mu, sigma) {
            return logNormal(_this, mu, sigma);
        };
        this.bernoulli = function(p) {
            return bernoulli(_this, p);
        };
        this.binomial = function(n, p) {
            return binomial(_this, n, p);
        };
        this.geometric = function(p) {
            return geometric(_this, p);
        };
        this.poisson = function(lambda) {
            return poisson(_this, lambda);
        };
        this.exponential = function(lambda) {
            return exponential(_this, lambda);
        };
        this.irwinHall = function(n) {
            return irwinHall(_this, n);
        };
        this.bates = function(n) {
            return bates(_this, n);
        };
        this.pareto = function(alpha) {
            return pareto(_this, alpha);
        };
        if (rng && rng instanceof RNG) this.use(rng);
        else this.use(new RNGMathRandom());
        this._cache = {};
    }
    /**
   * @member {RNG} Underlying pseudo-random number generator
   */ var _proto = Random.prototype;
    /**
   * Creates a new `Random` instance, optionally specifying parameters to
   * set a new seed.
   *
   * @see RNG.clone
   *
   * @param {string} [seed] - Optional seed for new RNG.
   * @param {object} [opts] - Optional config for new RNG options.
   * @return {Random}
   */ _proto.clone = function clone() {
        var args = [].slice.call(arguments);
        if (args.length) return new Random(RNGFactory.apply(void 0, args));
        else return new Random(this.rng.clone());
    } /**
   * Sets the underlying pseudorandom number generator used via
   * either an instance of `seedrandom`, a custom instance of RNG
   * (for PRNG plugins), or a string specifying the PRNG to use
   * along with an optional `seed` and `opts` to initialize the
   * RNG.
   *
   * @example
   * import random from 'random'
   *
   * random.use('example_seedrandom_string')
   * // or
   * random.use(seedrandom('kittens'))
   * // or
   * random.use(Math.random)
   *
   * @param {...*} args
   */ ;
    _proto.use = function use() {
        this._rng = RNGFactory.apply(void 0, [].slice.call(arguments));
    } /**
   * Patches `Math.random` with this Random instance's PRNG.
   */ ;
    _proto.patch = function patch() {
        if (this._patch) throw new Error("Math.random already patched");
        this._patch = Math.random;
        Math.random = this.uniform();
    } /**
   * Restores a previously patched `Math.random` to its original value.
   */ ;
    _proto.unpatch = function unpatch() {
        if (this._patch) {
            Math.random = this._patch;
            delete this._patch;
        }
    } /**
   * Convenience wrapper around `this.rng.next()`
   *
   * Returns a floating point number in [0, 1).
   *
   * @return {number}
   */ ;
    /**
   * Returns an item chosen uniformly at trandom from the given array.
   *
   * Convence wrapper around `random.uniformInt()`
   *
   * @param {Array<T>} [array] - Lower bound (integer, inclusive)
   * @return {T | undefined}
   */ _proto.choice = function choice(array) {
        if (!Array.isArray(array)) throw new Error("Random.choice expected input to be an array, got " + typeof array);
        var length = array == null ? void 0 : array.length;
        if (length > 0) {
            var index = this.uniformInt(0, length - 1)();
            return array[index];
        } else return undefined;
    } /**
   * Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).
   *
   * @param {number} [min=0] - Lower bound (float, inclusive)
   * @param {number} [max=1] - Upper bound (float, exclusive)
   * @return {function}
   */ ;
    // --------------------------------------------------------------------------
    // Internal
    // --------------------------------------------------------------------------
    /**
   * Memoizes distributions to ensure they're only created when necessary.
   *
   * Returns a thunk which that returns independent, identically distributed
   * samples from the specified distribution.
   *
   * @private
   *
   * @param {string} label - Name of distribution
   * @param {function} getter - Function which generates a new distribution
   * @param {...*} args - Distribution-specific arguments
   *
   * @return {function}
   */ _proto._memoize = function _memoize(label, getter) {
        var args = [].slice.call(arguments, 2);
        var key = "" + args.join(";");
        var value = this._cache[label];
        if (value === undefined || value.key !== key) {
            value = {
                key: key,
                distribution: getter.apply(void 0, [
                    this
                ].concat(args))
            };
            this._cache[label] = value;
        }
        return value.distribution;
    };
    _createClass(Random, [
        {
            key: "rng",
            get: function get() {
                return this._rng;
            }
        }
    ]);
    return Random;
}();
// defaults to Math.random as its RNG
var random = new Random();

},{"seedrandom":"kcfU7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcfU7":[function(require,module,exports) {
// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.
// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = require("b2700f0f8f5fd164");
// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = require("4a28dd5573ce1379");
// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = require("829b70a86312d1ec");
// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = require("7959f4c1f076775e");
// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = require("6ec635af9081ef4c");
// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = require("98b26b752c271f72");
// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = require("8bbd32b1926e09cf");
sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;
module.exports = sr;

},{"b2700f0f8f5fd164":"c47hP","4a28dd5573ce1379":"hy9Go","829b70a86312d1ec":"8ktBo","7959f4c1f076775e":"i5aBa","6ec635af9081ef4c":"7tXtZ","98b26b752c271f72":"eVmNr","8bbd32b1926e09cf":"lbeKh"}],"c47hP":[function(require,module,exports) {
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
(function(global, module1, define1) {
    function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
            var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
            me.s0 = me.s1;
            me.s1 = me.s2;
            return me.s2 = t - (me.c = t | 0);
        };
        // Apply the seeding algorithm from Baagoe.
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) me.s0 += 1;
        me.s1 -= mash(seed);
        if (me.s1 < 0) me.s1 += 1;
        me.s2 -= mash(seed);
        if (me.s2 < 0) me.s2 += 1;
        mash = null;
    }
    function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
    }
    function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
            return xg.next() * 0x100000000 | 0;
        };
        prng.double = function() {
            return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
        };
        prng.quick = prng;
        if (state) {
            if (typeof state == "object") copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    function Mash() {
        var n = 0xefc8249d;
        var mash = function(data) {
            data = String(data);
            for(var i = 0; i < data.length; i++){
                n += data.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 0x100000000; // 2^32
            }
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        };
        return mash;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.alea = impl;
})(this, module, typeof define == "function" && define // present with an AMD loader
);

},{}],"hy9Go":[function(require,module,exports) {
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x << 11;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == "object") copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xor128 = impl;
})(this, module, typeof define == "function" && define // present with an AMD loader
);

},{}],"8ktBo":[function(require,module,exports) {
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = "";
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x >>> 2;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            me.w = me.v;
            return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            if (k == strseed.length) me.d = me.x << 10 ^ me.x >>> 4;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == "object") copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xorwow = impl;
})(this, module, typeof define == "function" && define // present with an AMD loader
);

},{}],"i5aBa":[function(require,module,exports) {
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this;
        // Set up generator function.
        me.next = function() {
            // Update xor generator.
            var X = me.x, i = me.i, t, v, w;
            t = X[i];
            t ^= t >>> 7;
            v = t ^ t << 24;
            t = X[i + 1 & 7];
            v ^= t ^ t >>> 10;
            t = X[i + 3 & 7];
            v ^= t ^ t >>> 3;
            t = X[i + 4 & 7];
            v ^= t ^ t << 7;
            t = X[i + 7 & 7];
            t = t ^ t << 13;
            v ^= t ^ t << 9;
            X[i] = v;
            me.i = i + 1 & 7;
            return v;
        };
        function init(me, seed) {
            var j, w, X = [];
            if (seed === (seed | 0)) // Seed state array using a 32-bit integer.
            w = X[0] = seed;
            else {
                // Seed state using a string.
                seed = "" + seed;
                for(j = 0; j < seed.length; ++j)X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
            // Enforce an array length of 8, not all zeroes.
            while(X.length < 8)X.push(0);
            for(j = 0; j < 8 && X[j] === 0; ++j);
            if (j == 8) w = X[7] = -1;
            else w = X[j];
            me.x = X;
            me.i = 0;
            // Discard an initial 256 values.
            for(j = 256; j > 0; --j)me.next();
        }
        init(me, seed);
    }
    function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.x) copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xorshift7 = impl;
})(this, module, typeof define == "function" && define // present with an AMD loader
);

},{}],"7tXtZ":[function(require,module,exports) {
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this;
        // Set up generator function.
        me.next = function() {
            var w = me.w, X = me.X, i = me.i, t, v;
            // Update Weyl generator.
            me.w = w = w + 0x61c88647 | 0;
            // Update xor generator.
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            // Update Xor generator array state.
            v = X[i] = v ^ t;
            me.i = i;
            // Result is the combination.
            return v + (w ^ w >>> 16) | 0;
        };
        function init(me, seed) {
            var t, v, i, j, w, X = [], limit = 128;
            if (seed === (seed | 0)) {
                // Numeric seeds initialize v, which is used to generates X.
                v = seed;
                seed = null;
            } else {
                // String seeds are mixed into v and X one character at a time.
                seed = seed + "\0";
                v = 0;
                limit = Math.max(limit, seed.length);
            }
            // Initialize circular array and weyl value.
            for(i = 0, j = -32; j < limit; ++j){
                // Put the unicode characters into the array, and shuffle them.
                if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
                // After 32 shuffles, take v as the starting w value.
                if (j === 0) w = v;
                v ^= v << 10;
                v ^= v >>> 15;
                v ^= v << 4;
                v ^= v >>> 13;
                if (j >= 0) {
                    w = w + 0x61c88647 | 0; // Weyl.
                    t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
                    i = 0 == t ? i + 1 : 0; // Count zeroes.
                }
            }
            // We have detected all zeroes; make the key nonzero.
            if (i >= 128) X[(seed && seed.length || 0) & 127] = -1;
            // Run the generator 512 times to further mix the state before using it.
            // Factoring this as a function slows the main generator, so it is just
            // unrolled here.  The weyl generator is not advanced while warming up.
            i = 127;
            for(j = 512; j > 0; --j){
                v = X[i + 34 & 127];
                t = X[i = i + 1 & 127];
                v ^= v << 13;
                t ^= t << 17;
                v ^= v >>> 15;
                t ^= t >>> 12;
                X[i] = v ^ t;
            }
            // Storing state as object members is faster than using closure variables.
            me.w = w;
            me.X = X;
            me.i = i;
        }
        init(me, seed);
    }
    function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.X) copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xor4096 = impl;
})(this, module, typeof define == "function" && define // present with an AMD loader
);

},{}],"eVmNr":[function(require,module,exports) {
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = "";
        // Set up generator function.
        me.next = function() {
            var b = me.b, c = me.c, d = me.d, a = me.a;
            b = b << 25 ^ b >>> 7 ^ c;
            c = c - d | 0;
            d = d << 24 ^ d >>> 8 ^ a;
            a = a - b | 0;
            me.b = b = b << 20 ^ b >>> 12 ^ c;
            me.c = c = c - d | 0;
            me.d = d << 16 ^ c >>> 16 ^ a;
            return me.a = a - b | 0;
        };
        /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */ me.a = 0;
        me.b = 0;
        me.c = -1640531527;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
            // Integer seed.
            me.a = seed / 0x100000000 | 0;
            me.b = seed | 0;
        } else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 20; k++){
            me.b ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == "object") copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.tychei = impl;
})(this, module, typeof define == "function" && define // present with an AMD loader
);

},{}],"lbeKh":[function(require,module,exports) {
/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/ (function(global, pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto; // node.js crypto module, initialized at the bottom.
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    function seedrandom(seed, options, callback) {
        var key = [];
        options = options == true ? {
            entropy: true
        } : options || {};
        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(options.entropy ? [
            seed,
            tostring(pool)
        ] : seed == null ? autoseed() : seed, 3), key);
        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);
        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks), d = startdenom, x = 0; //   and no 'extra last byte'.
            while(n < significance){
                n = (n + x) * width; //   shifting numerator and
                d *= width; //   denominator and generating a
                x = arc4.g(1); //   new least-significant-byte.
            }
            while(n >= overflow){
                n /= 2; //   last byte, shift everything
                d /= 2; //   right using integer math until
                x >>>= 1; //   we have exactly the desired bits.
            }
            return (n + x) / d; // Form the number within [0, 1).
        };
        prng.int32 = function() {
            return arc4.g(4) | 0;
        };
        prng.quick = function() {
            return arc4.g(4) / 0x100000000;
        };
        prng.double = prng;
        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);
        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback || function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) copy(state, arc4);
                // Only provide the .state method if requested via options.state.
                prng.state = function() {
                    return copy(arc4, {});
                };
            }
            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) {
                math[rngname] = prng;
                return seed;
            } else return prng;
        })(prng, shortseed, "global" in options ? options.global : this == math, options.state);
    }
    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        // The empty key [] is treated as [0].
        if (!keylen) key = [
            keylen++
        ];
        // Set up S using the standard key scheduling algorithm.
        while(i < width)s[i] = i++;
        for(i = 0; i < width; i++){
            s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
            s[j] = t;
        }
        // The "g" method returns the next (count) outputs as one number.
        (me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0, i = me.i, j = me.j, s = me.S;
            while(count--){
                t = s[i = mask & i + 1];
                r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
            }
            me.i = i;
            me.j = j;
            return r;
        // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
        })(width);
    }
    //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }
    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
            for(prop in obj)try {
                result.push(flatten(obj[prop], depth - 1));
            } catch (e) {}
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
    }
    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while(j < stringseed.length)key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        return tostring(key);
    }
    //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //
    function autoseed() {
        try {
            var out;
            if (nodecrypto && (out = nodecrypto.randomBytes)) // The use of 'out' to remember randomBytes makes tight minified code.
            out = out(width);
            else {
                out = new Uint8Array(width);
                (global.crypto || global.msCrypto).getRandomValues(out);
            }
            return tostring(out);
        } catch (e) {
            var browser = global.navigator, plugins = browser && browser.plugins;
            return [
                +new Date,
                global,
                plugins,
                global.screen,
                tostring(pool)
            ];
        }
    }
    //
    // tostring()
    // Converts an array of charcodes to a string
    //
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }
    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);
    //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    if (0, module.exports) {
        module.exports = seedrandom;
        // When in node.js, try using crypto package for autoseeding.
        try {
            nodecrypto = require("a37761c53bb968c2");
        } catch (ex) {}
    } else if (typeof define == "function" && define.amd) define(function() {
        return seedrandom;
    });
    else // When included as a plain script, set up Math.seedrandom global.
    math["seed" + rngname] = seedrandom;
// End anonymous scope, and pass initial values.
})(// global: `self` in browsers (including strict mode and web workers),
// otherwise `this` in Node and other environments
typeof self !== "undefined" ? self : this, [], Math // math: package containing random, pow, and seedrandom
);

},{"a37761c53bb968c2":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"dUi6w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const applyOffset = (point, offset)=>({
        x: point.x + offset.x,
        y: point.y + offset.y
    });
exports.default = applyOffset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29Fgs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const calcLineLength = (start, end)=>{
    const x = (end.x - start.x) ** 2;
    const y = (end.y - start.y) ** 2;
    return Math.sqrt(x + y);
};
exports.default = calcLineLength;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCIrZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const calcLineRadianAngle = ({ x , y  })=>{
    if (x > 0 && y >= 0) return Math.atan(y / x);
    if (x > 0 && y < 0) return Math.atan(y / x) + 2 * Math.PI;
    if (x < 0) return Math.atan(y / x) + Math.PI;
    if (x === 0 && y > 0) return Math.PI / 2;
    if (x === 0 && y < 0) return Math.PI * 3 / 2;
    return 0;
};
exports.default = calcLineRadianAngle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dYgMu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const generateSides = (width, height)=>({
        TOP: {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: width,
                y: 0
            }
        },
        RIGHT: {
            start: {
                x: width,
                y: 0
            },
            end: {
                x: width,
                y: height
            }
        },
        BOTTOM: {
            start: {
                x: 0,
                y: height
            },
            end: {
                x: width,
                y: height
            }
        },
        LEFT: {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: height
            }
        }
    });
exports.default = generateSides;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3fs0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _random = require("random");
var _randomDefault = parcelHelpers.interopDefault(_random);
const getRandomPointOnSide = ({ start , end  }, offset)=>{
    return {
        x: start.x === end.x ? start.x : (0, _randomDefault.default).float(start.x + offset.x, end.x - offset.x),
        y: start.y === end.y ? start.y : (0, _randomDefault.default).float(start.y + offset.y, end.y - offset.y)
    };
};
const createRandomLine = ({ TOP , RIGHT , BOTTOM , LEFT  }, offset)=>{
    const startSide = (0, _randomDefault.default).choice([
        TOP,
        RIGHT,
        BOTTOM,
        LEFT
    ]);
    let endSide = (0, _randomDefault.default).choice([
        TOP,
        RIGHT,
        BOTTOM,
        LEFT
    ]);
    // Start side and end side can't be the same.
    while(startSide === endSide)endSide = (0, _randomDefault.default).choice([
        TOP,
        RIGHT,
        BOTTOM,
        LEFT
    ]);
    return {
        start: getRandomPointOnSide(startSide, offset),
        end: getRandomPointOnSide(endSide, offset)
    };
};
exports.default = createRandomLine;

},{"random":"1Hoco","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Z0N5":[function(require,module,exports) {
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _innerFrom = require("rxjs/src/internal/observable/innerFrom");
var _rxjs = require("rxjs");
class Canvas {
    get ctx() {
        return this._ctx;
    }
    get canvas() {
        return this._canvas;
    }
    constructor(_canvas, width, height){
        this._canvas = _canvas;
        this.width = width;
        this.height = height;
        this._canvas.width = width;
        this._canvas.height = height;
        this._ctx = this._canvas.getContext("2d");
    }
    reset() {
        return (0, _innerFrom.fromPromise)(Promise.resolve().then(()=>{
            // @ts-ignore
            this.ctx.reset();
        }));
    }
    drawImage(img, point) {
        return (0, _innerFrom.fromPromise)(Promise.resolve().then(()=>{
            this.ctx.drawImage(img, point.x, point.y, this.canvas.width, this.canvas.height);
        }));
    }
    drawFigure({ left , right  }, lineColor, backgroundColor) {
        return (0, _innerFrom.fromPromise)(Promise.resolve().then(()=>{
            this.ctx.lineWidth = 4;
            this.ctx.strokeStyle = lineColor;
            this.ctx.fillStyle = backgroundColor;
            this.ctx.beginPath();
            [
                ...left,
                ...right
            ].forEach(({ x , y  })=>this.ctx.lineTo(x, y));
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        })).pipe((0, _rxjs.map)(()=>this.canvas.toDataURL()));
    }
    clear() {
        return (0, _innerFrom.fromPromise)(Promise.resolve().then(()=>{
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }));
    }
    toDataUrl() {
        return (0, _rxjs.of)(this.canvas.toDataURL());
    }
    fill(color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.closePath();
        this.ctx.fill();
    }
}
exports.default = Canvas;

},{"rxjs/src/internal/observable/innerFrom":"b7PZ7","rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7PZ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "innerFrom", ()=>innerFrom);
/**
 * Creates an RxJS Observable from an object that implements `Symbol.observable`.
 * @param obj An object that properly implements `Symbol.observable`.
 */ parcelHelpers.export(exports, "fromInteropObservable", ()=>fromInteropObservable);
/**
 * Synchronously emits the values of an array like and completes.
 * This is exported because there are creation functions and operators that need to
 * make direct use of the same logic, and there's no reason to make them run through
 * `from` conditionals because we *know* they're dealing with an array.
 * @param array The array to emit values from
 */ parcelHelpers.export(exports, "fromArrayLike", ()=>fromArrayLike);
parcelHelpers.export(exports, "fromPromise", ()=>fromPromise);
parcelHelpers.export(exports, "fromIterable", ()=>fromIterable);
parcelHelpers.export(exports, "fromAsyncIterable", ()=>fromAsyncIterable);
parcelHelpers.export(exports, "fromReadableStreamLike", ()=>fromReadableStreamLike);
var _isArrayLike = require("../util/isArrayLike");
var _isPromise = require("../util/isPromise");
var _observable = require("../Observable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isAsyncIterable = require("../util/isAsyncIterable");
var _throwUnobservableError = require("../util/throwUnobservableError");
var _isIterable = require("../util/isIterable");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
var _isFunction = require("../util/isFunction");
var _reportUnhandledError = require("../util/reportUnhandledError");
var _observable1 = require("../symbol/observable");
function innerFrom(input) {
    if (input instanceof (0, _observable.Observable)) return input;
    if (input != null) {
        if ((0, _isInteropObservable.isInteropObservable)(input)) return fromInteropObservable(input);
        if ((0, _isArrayLike.isArrayLike)(input)) return fromArrayLike(input);
        if ((0, _isPromise.isPromise)(input)) return fromPromise(input);
        if ((0, _isAsyncIterable.isAsyncIterable)(input)) return fromAsyncIterable(input);
        if ((0, _isIterable.isIterable)(input)) return fromIterable(input);
        if ((0, _isReadableStreamLike.isReadableStreamLike)(input)) return fromReadableStreamLike(input);
    }
    throw (0, _throwUnobservableError.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
    return new (0, _observable.Observable)((subscriber)=>{
        const obs = obj[0, _observable1.observable]();
        if ((0, _isFunction.isFunction)(obs.subscribe)) return obs.subscribe(subscriber);
        // Should be caught by observable subscribe function error handling.
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
function fromArrayLike(array) {
    return new (0, _observable.Observable)((subscriber)=>{
        // Loop over the array and emit each value. Note two things here:
        // 1. We're making sure that the subscriber is not closed on each loop.
        //    This is so we don't continue looping over a very large array after
        //    something like a `take`, `takeWhile`, or other synchronous unsubscription
        //    has already unsubscribed.
        // 2. In this form, reentrant code can alter that array we're looping over.
        //    This is a known issue, but considered an edge case. The alternative would
        //    be to copy the array before executing the loop, but this has
        //    performance implications.
        for(let i = 0; i < array.length && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new (0, _observable.Observable)((subscriber)=>{
        promise.then((value)=>{
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, (err)=>subscriber.error(err)).then(null, (0, _reportUnhandledError.reportUnhandledError));
    });
}
function fromIterable(iterable) {
    return new (0, _observable.Observable)((subscriber)=>{
        for (const value of iterable){
            subscriber.next(value);
            if (subscriber.closed) return;
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new (0, _observable.Observable)((subscriber)=>{
        process(asyncIterable, subscriber).catch((err)=>subscriber.error(err));
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable((0, _isReadableStreamLike.readableStreamLikeToAsyncGenerator)(readableStream));
}
async function process(asyncIterable, subscriber) {
    for await (const value of asyncIterable){
        subscriber.next(value);
        // A side-effect may have closed our subscriber,
        // check before the next iteration.
        if (subscriber.closed) return;
    }
    subscriber.complete();
}

},{"../util/isArrayLike":"crO2N","../util/isPromise":"hHp5Z","../Observable":"4HRwd","../util/isInteropObservable":"dxjTt","../util/isAsyncIterable":"3dOQy","../util/throwUnobservableError":"jEuhY","../util/isIterable":"3TCpA","../util/isReadableStreamLike":"i5Xu6","../util/isFunction":"e887M","../util/reportUnhandledError":"azNpb","../symbol/observable":"cjx6b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crO2N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike);
const isArrayLike = (x)=>x && typeof x.length === "number" && typeof x !== "function";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHp5Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Tests to see if the object is "thennable".
 * @param value the object to test
 */ parcelHelpers.export(exports, "isPromise", ()=>isPromise);
var _isFunction = require("./isFunction");
function isPromise(value) {
    return (0, _isFunction.isFunction)(value?.then);
}

},{"./isFunction":"e887M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e887M":[function(require,module,exports) {
/**
 * Returns true if the object is a function.
 * @param value The value to check
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
function isFunction(value) {
    return typeof value === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4HRwd":[function(require,module,exports) {
/**
 * @prettier
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */ parcelHelpers.export(exports, "Observable", ()=>Observable);
var _subscriber = require("./Subscriber");
var _subscription = require("./Subscription");
var _observable = require("./symbol/observable");
var _pipe = require("./util/pipe");
var _config = require("./config");
var _isFunction = require("./util/isFunction");
var _errorContext = require("./util/errorContext");
class Observable {
    /**
   * @constructor
   * @param {Function} subscribe the function that is called when the Observable is
   * initially subscribed to. This function is given a Subscriber, to which new values
   * can be `next`ed, or an `error` method can be called to raise an error, or
   * `complete` can be called to notify of a successful completion.
   */ constructor(subscribe){
        if (subscribe) this._subscribe = subscribe;
    }
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
   * Creates a new Observable by calling the Observable constructor
   * @owner Observable
   * @method create
   * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
   * @return {Observable} a new observable
   * @nocollapse
   * @deprecated Use `new Observable()` instead. Will be removed in v8.
   */ static create = (subscribe)=>{
        return new Observable(subscribe);
    };
    /**
   * Creates a new Observable, with this Observable instance as the source, and the passed
   * operator defined as the new observable's operator.
   * @method lift
   * @param operator the operator defining the operation to take on the observable
   * @return a new observable with the Operator applied
   * @deprecated Internal implementation detail, do not use directly. Will be made internal in v8.
   * If you have implemented an operator using `lift`, it is recommended that you create an
   * operator by simply returning `new Observable()` directly. See "Creating new operators from
   * scratch" section here: https://rxjs.dev/guide/operators
   */ lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
   * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
   *
   * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
   *
   * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
   * might be for example a function that you passed to Observable's constructor, but most of the time it is
   * a library implementation, which defines what will be emitted by an Observable, and when it be will emitted. This means
   * that calling `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
   * the thought.
   *
   * Apart from starting the execution of an Observable, this method allows you to listen for values
   * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
   * of the following ways.
   *
   * The first way is creating an object that implements {@link Observer} interface. It should have methods
   * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
   * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular, do
   * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
   * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
   * do anything, you can simply omit it. Note however, if the `error` method is not provided and an error happens,
   * it will be thrown asynchronously. Errors thrown asynchronously cannot be caught using `try`/`catch`. Instead,
   * use the {@link onUnhandledError} configuration option or use a runtime handler (like `window.onerror` or
   * `process.on('error)`) to be notified of unhandled errors. Because of this, it's recommended that you provide
   * an `error` method to avoid missing thrown errors.
   *
   * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
   * This means you can provide three functions as arguments to `subscribe`, where the first function is equivalent
   * of a `next` method, the second of an `error` method and the third of a `complete` method. Just as in case of an Observer,
   * if you do not need to listen for something, you can omit a function by passing `undefined` or `null`,
   * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
   * to the `error` function, as with an Observer, if not provided, errors emitted by an Observable will be thrown asynchronously.
   *
   * You can, however, subscribe with no parameters at all. This may be the case where you're not interested in terminal events
   * and you also handled emissions internally by using operators (e.g. using `tap`).
   *
   * Whichever style of calling `subscribe` you use, in both cases it returns a Subscription object.
   * This object allows you to call `unsubscribe` on it, which in turn will stop the work that an Observable does and will clean
   * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
   * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
   *
   * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
   * It is an Observable itself that decides when these functions will be called. For example {@link of}
   * by default emits all its values synchronously. Always check documentation for how given Observable
   * will behave when subscribed and if its default behavior can be modified with a `scheduler`.
   *
   * ## Example
   * ### Subscribe with an Observer
   * ```ts
   * import { of } from 'rxjs';
   *
   * const sumObserver = {
   *   sum: 0,
   *   next(value) {
   *     console.log('Adding: ' + value);
   *     this.sum = this.sum + value;
   *   },
   *   error() {
   *     // We actually could just remove this method,
   *     // since we do not really care about errors right now.
   *   },
   *   complete() {
   *     console.log('Sum equals: ' + this.sum);
   *   }
   * };
   *
   * of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
   *   .subscribe(sumObserver);
   *
   * // Logs:
   * // "Adding: 1"
   * // "Adding: 2"
   * // "Adding: 3"
   * // "Sum equals: 6"
   * ```
   *
   * ### Subscribe with functions
   * ```ts
   * import { of } from 'rxjs'
   *
   * let sum = 0;
   *
   * of(1, 2, 3).subscribe(
   *   value => {
   *     console.log('Adding: ' + value);
   *     sum = sum + value;
   *   },
   *   undefined,
   *   () => console.log('Sum equals: ' + sum)
   * );
   *
   * // Logs:
   * // "Adding: 1"
   * // "Adding: 2"
   * // "Adding: 3"
   * // "Sum equals: 6"
   * ```
   *
   * ### Cancel a subscription
   * ```ts
   * import { interval } from 'rxjs';
   *
   * const subscription = interval(1000).subscribe({
   *   next(num) {
   *     console.log(num)
   *   },
   *   complete() {
   *     // Will not be called, even when cancelling subscription.
   *     console.log('completed!');
   *   }
   * });
   *
   * setTimeout(() => {
   *   subscription.unsubscribe();
   *   console.log('unsubscribed!');
   * }, 2500);
   *
   * // Logs:
   * // 0 after 1s
   * // 1 after 2s
   * // "unsubscribed!" after 2.5s
   * ```
   *
   * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
   *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
   *  Observable.
   * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
   *  the error will be thrown asynchronously as unhandled.
   * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
   * @return {Subscription} a subscription reference to the registered handlers
   * @method subscribe
   */ subscribe(observerOrNext, error, complete) {
        const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new (0, _subscriber.SafeSubscriber)(observerOrNext, error, complete);
        (0, _errorContext.errorContext)(()=>{
            const { operator , source  } = this;
            subscriber.add(operator ? // operator chain to one of our lifted operators.
            operator.call(subscriber, source) : source ? // had intimate knowledge of our API, like our `Subject`, must have
            // set it. We're going to just call `_subscribe` directly.
            this._subscribe(subscriber) : // function, so we need to catch errors and handle them appropriately.
            this._trySubscribe(subscriber));
        });
        return subscriber;
    }
    /** @internal */ _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            // We don't need to return anything in this case,
            // because it's just going to try to `add()` to a subscription
            // above.
            sink.error(err);
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject)=>{
            // Must be declared in a separate statement to avoid a ReferenceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            let subscription;
            subscription = this.subscribe((value)=>{
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    subscription?.unsubscribe();
                }
            }, reject, resolve);
        });
    }
    /** @internal */ _subscribe(subscriber) {
        return this.source?.subscribe(subscriber);
    }
    /**
   * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
   * @method Symbol.observable
   * @return {Observable} this instance of the observable
   */ [(0, _observable.observable)]() {
        return this;
    }
    /* tslint:enable:max-line-length */ /**
   * Used to stitch together functional operators into a chain.
   * @method pipe
   * @return {Observable} the Observable result of all of the operators having
   * been called in the order they were passed in.
   *
   * ### Example
   * ```ts
   * import { interval } from 'rxjs';
   * import { map, filter, scan } from 'rxjs/operators';
   *
   * interval(1000)
   *   .pipe(
   *     filter(x => x % 2 === 0),
   *     map(x => x + x),
   *     scan((acc, x) => acc + x)
   *   )
   *   .subscribe(x => console.log(x))
   * ```
   */ pipe(...operations) {
        return (0, _pipe.pipeFromArray)(operations)(this);
    }
    /* tslint:enable:max-line-length */ /**
   * Subscribe to this Observable and get a Promise resolving on
   * `complete` with the last emission (if any).
   *
   * **WARNING**: Only use this with observables you *know* will complete. If the source
   * observable does not complete, you will end up with a promise that is hung up, and
   * potentially all of the state of an async function hanging out in memory. To avoid
   * this situation, look into adding something like {@link timeout}, {@link take},
   * {@link takeWhile}, or {@link takeUntil} amongst others.
   *
   * @method toPromise
   * @param [promiseCtor] a constructor function used to instantiate
   * the Promise
   * @return A Promise that resolves with the last value emit, or
   * rejects on an error. If there were no emissions, Promise
   * resolves with undefined.
   * @deprecated Replaced with {@link firstValueFrom} and {@link lastValueFrom}. Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise
   */ toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject)=>{
            let value;
            this.subscribe((x)=>value = x, (err)=>reject(err), ()=>resolve(value));
        });
    }
}
/**
 * Decides between a passed promise constructor from consuming code,
 * A default configured promise constructor, and the native promise
 * constructor and returns it. If nothing can be found, it will throw
 * an error.
 * @param promiseCtor The optional promise constructor to passed by consuming code
 */ function getPromiseCtor(promiseCtor) {
    return promiseCtor ?? (0, _config.config).Promise ?? Promise;
}
function isObserver(value) {
    return value && (0, _isFunction.isFunction)(value.next) && (0, _isFunction.isFunction)(value.error) && (0, _isFunction.isFunction)(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof (0, _subscriber.Subscriber) || isObserver(value) && (0, _subscription.isSubscription)(value);
}

},{"./Subscriber":"bbMuU","./Subscription":"58BOG","./symbol/observable":"cjx6b","./util/pipe":"eiDAX","./config":"9IVgT","./util/isFunction":"e887M","./util/errorContext":"b8kMf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbMuU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */ parcelHelpers.export(exports, "Subscriber", ()=>Subscriber);
parcelHelpers.export(exports, "SafeSubscriber", ()=>SafeSubscriber);
parcelHelpers.export(exports, "EMPTY_OBSERVER", ()=>EMPTY_OBSERVER);
var _isFunction = require("./util/isFunction");
var _subscription = require("./Subscription");
var _config = require("./config");
var _reportUnhandledError = require("./util/reportUnhandledError");
var _noop = require("./util/noop");
var _notificationFactories = require("./NotificationFactories");
var _timeoutProvider = require("./scheduler/timeoutProvider");
var _errorContext = require("./util/errorContext");
class Subscriber extends (0, _subscription.Subscription) {
    /**
   * A static factory for a Subscriber, given a (potentially partial) definition
   * of an Observer.
   * @param next The `next` callback of an Observer.
   * @param error The `error` callback of an
   * Observer.
   * @param complete The `complete` callback of an
   * Observer.
   * @return A Subscriber wrapping the (partially defined)
   * Observer represented by the given arguments.
   * @nocollapse
   * @deprecated Do not use. Will be removed in v8. There is no replacement for this
   * method, and there is no reason to be creating instances of `Subscriber` directly.
   * If you have a specific use case, please file an issue.
   */ static create(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    }
    /** @deprecated Internal implementation detail, do not use directly. Will be made internal in v8. */ isStopped = false;
    /**
   * @deprecated Internal implementation detail, do not use directly. Will be made internal in v8.
   * There is no reason to directly create an instance of Subscriber. This type is exported for typings reasons.
   */ constructor(destination){
        super();
        if (destination) {
            this.destination = destination;
            // Automatically chain subscriptions together here.
            // if destination is a Subscription, then it is a Subscriber.
            if ((0, _subscription.isSubscription)(destination)) destination.add(this);
        } else this.destination = EMPTY_OBSERVER;
    }
    /**
   * The {@link Observer} callback to receive notifications of type `next` from
   * the Observable, with a value. The Observable may call this method 0 or more
   * times.
   * @param {T} [value] The `next` value.
   * @return {void}
   */ next(value) {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.nextNotification)(value), this);
        else this._next(value);
    }
    /**
   * The {@link Observer} callback to receive notifications of type `error` from
   * the Observable, with an attached `Error`. Notifies the Observer that
   * the Observable has experienced an error condition.
   * @param {any} [err] The `error` exception.
   * @return {void}
   */ error(err) {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.errorNotification)(err), this);
        else {
            this.isStopped = true;
            this._error(err);
        }
    }
    /**
   * The {@link Observer} callback to receive a valueless notification of type
   * `complete` from the Observable. Notifies the Observer that the Observable
   * has finished sending push-based notifications.
   * @return {void}
   */ complete() {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.COMPLETE_NOTIFICATION), this);
        else {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (!this.closed) {
            this.isStopped = true;
            super.unsubscribe();
            this.destination = null;
        }
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    }
    _complete() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    }
}
class SafeSubscriber extends Subscriber {
    constructor(observerOrNext, error, complete){
        super();
        let next;
        if ((0, _isFunction.isFunction)(observerOrNext)) // The first argument is a function, not an observer. The next
        // two arguments *could* be observers, or they could be empty.
        next = observerOrNext;
        else if (observerOrNext) {
            // The first argument is an observer object, we have to pull the handlers
            // off and capture the owner object as the context. That is because we're
            // going to put them all in a new destination with ensured methods
            // for `next`, `error`, and `complete`. That's part of what makes this
            // the "Safe" Subscriber.
            ({ next , error , complete  } = observerOrNext);
            let context;
            if (this && (0, _config.config).useDeprecatedNextContext) {
                // This is a deprecated path that made `this.unsubscribe()` available in
                // next handler functions passed to subscribe. This only exists behind a flag
                // now, as it is *very* slow.
                context = Object.create(observerOrNext);
                context.unsubscribe = ()=>this.unsubscribe();
            } else context = observerOrNext;
            next = next?.bind(context);
            error = error?.bind(context);
            complete = complete?.bind(context);
        }
        // Once we set the destination, the superclass `Subscriber` will
        // do it's magic in the `_next`, `_error`, and `_complete` methods.
        this.destination = {
            next: next ? wrapForErrorHandling(next, this) : (0, _noop.noop),
            error: wrapForErrorHandling(error ?? defaultErrorHandler, this),
            complete: complete ? wrapForErrorHandling(complete, this) : (0, _noop.noop)
        };
    }
}
/**
 * Wraps a user-provided handler (or our {@link defaultErrorHandler} in one case) to
 * ensure that any thrown errors are caught and handled appropriately.
 *
 * @param handler The handler to wrap
 * @param instance The SafeSubscriber instance we're going to mark if there's an error.
 */ function wrapForErrorHandling(handler, instance) {
    return (...args)=>{
        try {
            handler(...args);
        } catch (err) {
            if ((0, _config.config).useDeprecatedSynchronousErrorHandling) (0, _errorContext.captureError)(err);
            else // Ideal path, we report this as an unhandled error,
            // which is thrown on a new call stack.
            (0, _reportUnhandledError.reportUnhandledError)(err);
        }
    };
}
/**
 * An error handler used when no error handler was supplied
 * to the SafeSubscriber -- meaning no error handler was supplied
 * do the `subscribe` call on our observable.
 * @param err The error to handle
 */ function defaultErrorHandler(err) {
    throw err;
}
/**
 * A handler for notifications that cannot be sent to a stopped subscriber.
 * @param notification The notification being sent
 * @param subscriber The stopped subscriber
 */ function handleStoppedNotification(notification, subscriber) {
    const { onStoppedNotification  } = (0, _config.config);
    onStoppedNotification && (0, _timeoutProvider.timeoutProvider).setTimeout(()=>onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
    closed: true,
    next: (0, _noop.noop),
    error: defaultErrorHandler,
    complete: (0, _noop.noop)
};

},{"./util/isFunction":"e887M","./Subscription":"58BOG","./config":"9IVgT","./util/reportUnhandledError":"azNpb","./util/noop":"26BkH","./NotificationFactories":"7CCRi","./scheduler/timeoutProvider":"4Ke6B","./util/errorContext":"b8kMf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58BOG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */ parcelHelpers.export(exports, "Subscription", ()=>Subscription);
parcelHelpers.export(exports, "EMPTY_SUBSCRIPTION", ()=>EMPTY_SUBSCRIPTION);
parcelHelpers.export(exports, "isSubscription", ()=>isSubscription);
var _isFunction = require("./util/isFunction");
var _unsubscriptionError = require("./util/UnsubscriptionError");
var _arrRemove = require("./util/arrRemove");
class Subscription {
    /** @nocollapse */ static EMPTY = (()=>{
        const empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    /**
   * @param initialTeardown A function executed first as part of the teardown
   * process that is kicked off when {@link #unsubscribe} is called.
   */ constructor(initialTeardown){
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    /**
   * Disposes the resources held by the subscription. May, for instance, cancel
   * an ongoing Observable execution or cancel any other type of work that
   * started when the Subscription was created.
   * @return {void}
   */ unsubscribe() {
        let errors;
        if (!this.closed) {
            this.closed = true;
            // Remove this from it's parents.
            const { _parentage  } = this;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) for (const parent of _parentage)parent.remove(this);
                else _parentage.remove(this);
            }
            const { initialTeardown  } = this;
            if ((0, _isFunction.isFunction)(initialTeardown)) try {
                initialTeardown();
            } catch (e) {
                errors = e instanceof (0, _unsubscriptionError.UnsubscriptionError) ? e.errors : [
                    e
                ];
            }
            const { _teardowns  } = this;
            if (_teardowns) {
                this._teardowns = null;
                for (const teardown of _teardowns)try {
                    execTeardown(teardown);
                } catch (err) {
                    errors = errors ?? [];
                    if (err instanceof (0, _unsubscriptionError.UnsubscriptionError)) errors = [
                        ...errors,
                        ...err.errors
                    ];
                    else errors.push(err);
                }
            }
            if (errors) throw new (0, _unsubscriptionError.UnsubscriptionError)(errors);
        }
    }
    /**
   * Adds a teardown to this subscription, so that teardown will be unsubscribed/called
   * when this subscription is unsubscribed. If this subscription is already {@link #closed},
   * because it has already been unsubscribed, then whatever teardown is passed to it
   * will automatically be executed (unless the teardown itself is also a closed subscription).
   *
   * Closed Subscriptions cannot be added as teardowns to any subscription. Adding a closed
   * subscription to a any subscription will result in no operation. (A noop).
   *
   * Adding a subscription to itself, or adding `null` or `undefined` will not perform any
   * operation at all. (A noop).
   *
   * `Subscription` instances that are added to this instance will automatically remove themselves
   * if they are unsubscribed. Functions and {@link Unsubscribable} objects that you wish to remove
   * will need to be removed manually with {@link #remove}
   *
   * @param teardown The teardown logic to add to this subscription.
   */ add(teardown) {
        // Only add the teardown if it's not undefined
        // and don't add a subscription to itself.
        if (teardown && teardown !== this) {
            if (this.closed) // If this subscription is already closed,
            // execute whatever teardown is handed to it automatically.
            execTeardown(teardown);
            else {
                if (teardown instanceof Subscription) {
                    // We don't add closed subscriptions, and we don't add the same subscription
                    // twice. Subscription unsubscribe is idempotent.
                    if (teardown.closed || teardown._hasParent(this)) return;
                    teardown._addParent(this);
                }
                (this._teardowns = this._teardowns ?? []).push(teardown);
            }
        }
    }
    /**
   * Checks to see if a this subscription already has a particular parent.
   * This will signal that this subscription has already been added to the parent in question.
   * @param parent the parent to check for
   */ _hasParent(parent) {
        const { _parentage  } = this;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    }
    /**
   * Adds a parent to this subscription so it can be removed from the parent if it
   * unsubscribes on it's own.
   *
   * NOTE: THIS ASSUMES THAT {@link _hasParent} HAS ALREADY BEEN CHECKED.
   * @param parent The parent subscription to add
   */ _addParent(parent) {
        const { _parentage  } = this;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    }
    /**
   * Called on a child when it is removed via {@link #remove}.
   * @param parent The parent to remove
   */ _removeParent(parent) {
        const { _parentage  } = this;
        if (_parentage === parent) this._parentage = null;
        else if (Array.isArray(_parentage)) (0, _arrRemove.arrRemove)(_parentage, parent);
    }
    /**
   * Removes a teardown from this subscription that was previously added with the {@link #add} method.
   *
   * Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
   * from every other `Subscription` they have been added to. This means that using the `remove` method
   * is not a common thing and should be used thoughtfully.
   *
   * If you add the same teardown instance of a function or an unsubscribable object to a `Subcription` instance
   * more than once, you will need to call `remove` the same number of times to remove all instances.
   *
   * All teardown instances are removed to free up memory upon unsubscription.
   *
   * @param teardown The teardown to remove from this subscription
   */ remove(teardown) {
        const { _teardowns  } = this;
        _teardowns && (0, _arrRemove.arrRemove)(_teardowns, teardown);
        if (teardown instanceof Subscription) teardown._removeParent(this);
    }
}
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && (0, _isFunction.isFunction)(value.remove) && (0, _isFunction.isFunction)(value.add) && (0, _isFunction.isFunction)(value.unsubscribe);
}
function execTeardown(teardown) {
    if ((0, _isFunction.isFunction)(teardown)) teardown();
    else teardown.unsubscribe();
}

},{"./util/isFunction":"e887M","./util/UnsubscriptionError":"5nx89","./util/arrRemove":"3QAVh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5nx89":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>UnsubscriptionError);
var _createErrorClass = require("./createErrorClass");
const UnsubscriptionError = (0, _createErrorClass.createErrorClass)((_super)=>function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i)=>`${i + 1}) ${err.toString()}`).join("\n  ")}` : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
    });

},{"./createErrorClass":"aFsyM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFsyM":[function(require,module,exports) {
/**
 * Used to create Error subclasses until the community moves away from ES5.
 *
 * This is because compiling from TypeScript down to ES5 has issues with subclassing Errors
 * as well as other built-in types: https://github.com/Microsoft/TypeScript/issues/12123
 *
 * @param createImpl A factory function to create the actual constructor implementation. The returned
 * function should be a named function that calls `_super` internally.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createErrorClass", ()=>createErrorClass);
function createErrorClass(createImpl) {
    const _super = (instance)=>{
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    const ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3QAVh":[function(require,module,exports) {
/**
 * Removes an item from an array, mutating it.
 * @param arr The array to remove the item from
 * @param item The item to remove
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrRemove", ()=>arrRemove);
function arrRemove(arr, item) {
    if (arr) {
        const index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IVgT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azNpb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles an error on another job either with the user-configured {@link onUnhandledError},
 * or by throwing it on that new job so it can be picked up by `window.onerror`, `process.on('error')`, etc.
 *
 * This should be called whenever there is an error that is out-of-band with the subscription
 * or when an error hits a terminal boundary of the subscription and no error handler was provided.
 *
 * @param err the error to report
 */ parcelHelpers.export(exports, "reportUnhandledError", ()=>reportUnhandledError);
var _config = require("../config");
var _timeoutProvider = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    (0, _timeoutProvider.timeoutProvider).setTimeout(()=>{
        const { onUnhandledError  } = (0, _config.config);
        if (onUnhandledError) // Execute the user-configured error handler.
        onUnhandledError(err);
        else // Throw so it is picked up by the runtime's uncaught error mechanism.
        throw err;
    });
}

},{"../config":"9IVgT","../scheduler/timeoutProvider":"4Ke6B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Ke6B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutProvider", ()=>timeoutProvider);
const timeoutProvider = {
    // When accessing the delegate, use the variable rather than `this` so that
    // the functions can be called without being bound to the provider.
    setTimeout (...args) {
        const { delegate  } = timeoutProvider;
        return (delegate?.setTimeout || setTimeout)(...args);
    },
    clearTimeout (handle) {
        const { delegate  } = timeoutProvider;
        return (delegate?.clearTimeout || clearTimeout)(handle);
    },
    delegate: undefined
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26BkH":[function(require,module,exports) {
/* tslint:disable:no-empty */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CCRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMPLETE_NOTIFICATION", ()=>COMPLETE_NOTIFICATION);
/**
 * Internal use only. Creates an optimized error notification that is the same "shape"
 * as other notifications.
 * @internal
 */ parcelHelpers.export(exports, "errorNotification", ()=>errorNotification);
/**
 * Internal use only. Creates an optimized next notification that is the same "shape"
 * as other notifications.
 * @internal
 */ parcelHelpers.export(exports, "nextNotification", ()=>nextNotification);
/**
 * Ensures that all notifications created internally have the same "shape" in v8.
 *
 * TODO: This is only exported to support a crazy legacy test in `groupBy`.
 * @internal
 */ parcelHelpers.export(exports, "createNotification", ()=>createNotification);
const COMPLETE_NOTIFICATION = (()=>createNotification("C", undefined, undefined))();
function errorNotification(error) {
    return createNotification("E", undefined, error);
}
function nextNotification(value) {
    return createNotification("N", value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind,
        value,
        error
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b8kMf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles dealing with errors for super-gross mode. Creates a context, in which
 * any synchronously thrown errors will be passed to {@link captureError}. Which
 * will record the error such that it will be rethrown after the call back is complete.
 * TODO: Remove in v8
 * @param cb An immediately executed function.
 */ parcelHelpers.export(exports, "errorContext", ()=>errorContext);
/**
 * Captures errors only in super-gross mode.
 * @param err the error to capture
 */ parcelHelpers.export(exports, "captureError", ()=>captureError);
var _config = require("../config");
let context = null;
function errorContext(cb) {
    if ((0, _config.config).useDeprecatedSynchronousErrorHandling) {
        const isRoot = !context;
        if (isRoot) context = {
            errorThrown: false,
            error: null
        };
        cb();
        if (isRoot) {
            const { errorThrown , error  } = context;
            context = null;
            if (errorThrown) throw error;
        }
    } else // This is the general non-deprecated path for everyone that
    // isn't crazy enough to use super-gross mode (useDeprecatedSynchronousErrorHandling)
    cb();
}
function captureError(err) {
    if ((0, _config.config).useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}

},{"../config":"9IVgT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cjx6b":[function(require,module,exports) {
/** Symbol.observable or a string "@@observable". Used for interop */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observable", ()=>observable);
const observable = (()=>typeof Symbol === "function" && Symbol.observable || "@@observable")();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eiDAX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
/** @internal */ parcelHelpers.export(exports, "pipeFromArray", ()=>pipeFromArray);
var _identity = require("./identity");
function pipe(...fns) {
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) return 0, _identity.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce((prev, fn)=>fn(prev), input);
    };
}

},{"./identity":"iFPZh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFPZh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
function identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxjTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Identifies an input as being Observable (but not necessary an Rx Observable) */ parcelHelpers.export(exports, "isInteropObservable", ()=>isInteropObservable);
var _observable = require("../symbol/observable");
var _isFunction = require("./isFunction");
function isInteropObservable(input) {
    return (0, _isFunction.isFunction)(input[0, _observable.observable]);
}

},{"../symbol/observable":"cjx6b","./isFunction":"e887M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dOQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAsyncIterable", ()=>isAsyncIterable);
var _isFunction = require("./isFunction");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && (0, _isFunction.isFunction)(obj?.[Symbol.asyncIterator]);
}

},{"./isFunction":"e887M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEuhY":[function(require,module,exports) {
/**
 * Creates the TypeError to throw if an invalid object is passed to `from` or `scheduled`.
 * @param input The object that was passed.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInvalidObservableTypeError", ()=>createInvalidObservableTypeError);
function createInvalidObservableTypeError(input) {
    // TODO: We should create error codes that can be looked up, so this can be less verbose.
    return new TypeError(`You provided ${input !== null && typeof input === "object" ? "an invalid object" : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TCpA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Identifies an input as being an Iterable */ parcelHelpers.export(exports, "isIterable", ()=>isIterable);
var _iterator = require("../symbol/iterator");
var _isFunction = require("./isFunction");
function isIterable(input) {
    return (0, _isFunction.isFunction)(input?.[0, _iterator.iterator]);
}

},{"../symbol/iterator":"95FGD","./isFunction":"e887M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"95FGD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSymbolIterator", ()=>getSymbolIterator);
parcelHelpers.export(exports, "iterator", ()=>iterator);
function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
    return Symbol.iterator;
}
const iterator = getSymbolIterator();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5Xu6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "readableStreamLikeToAsyncGenerator", ()=>readableStreamLikeToAsyncGenerator);
parcelHelpers.export(exports, "isReadableStreamLike", ()=>isReadableStreamLike);
var _isFunction = require("./isFunction");
async function* readableStreamLikeToAsyncGenerator(readableStream) {
    const reader = readableStream.getReader();
    try {
        while(true){
            const { value , done  } = await reader.read();
            if (done) return;
            yield value;
        }
    } finally{
        reader.releaseLock();
    }
}
function isReadableStreamLike(obj) {
    // We don't want to use instanceof checks because they would return
    // false for instances from another Realm, like an <iframe>.
    return (0, _isFunction.isFunction)(obj?.getReader);
}

},{"./isFunction":"e887M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequire6af4")

//# sourceMappingURL=index.b71e74eb.js.map

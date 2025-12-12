var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x2, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert2, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert: assert2,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/@prisma/client-runtime-utils/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@prisma/client-runtime-utils/dist/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod2) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod2), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      AnyNull: /* @__PURE__ */ __name(() => AnyNull2, "AnyNull"),
      AnyNullClass: /* @__PURE__ */ __name(() => AnyNullClass, "AnyNullClass"),
      DbNull: /* @__PURE__ */ __name(() => DbNull2, "DbNull"),
      DbNullClass: /* @__PURE__ */ __name(() => DbNullClass, "DbNullClass"),
      Decimal: /* @__PURE__ */ __name(() => Decimal2, "Decimal"),
      JsonNull: /* @__PURE__ */ __name(() => JsonNull2, "JsonNull"),
      JsonNullClass: /* @__PURE__ */ __name(() => JsonNullClass, "JsonNullClass"),
      NullTypes: /* @__PURE__ */ __name(() => NullTypes2, "NullTypes"),
      ObjectEnumValue: /* @__PURE__ */ __name(() => ObjectEnumValue2, "ObjectEnumValue"),
      PrismaClientInitializationError: /* @__PURE__ */ __name(() => PrismaClientInitializationError2, "PrismaClientInitializationError"),
      PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => PrismaClientKnownRequestError2, "PrismaClientKnownRequestError"),
      PrismaClientRustError: /* @__PURE__ */ __name(() => PrismaClientRustError, "PrismaClientRustError"),
      PrismaClientRustPanicError: /* @__PURE__ */ __name(() => PrismaClientRustPanicError2, "PrismaClientRustPanicError"),
      PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => PrismaClientUnknownRequestError2, "PrismaClientUnknownRequestError"),
      PrismaClientValidationError: /* @__PURE__ */ __name(() => PrismaClientValidationError2, "PrismaClientValidationError"),
      Sql: /* @__PURE__ */ __name(() => Sql2, "Sql"),
      empty: /* @__PURE__ */ __name(() => empty2, "empty"),
      hasBatchIndex: /* @__PURE__ */ __name(() => hasBatchIndex, "hasBatchIndex"),
      isAnyNull: /* @__PURE__ */ __name(() => isAnyNull2, "isAnyNull"),
      isDbNull: /* @__PURE__ */ __name(() => isDbNull2, "isDbNull"),
      isJsonNull: /* @__PURE__ */ __name(() => isJsonNull2, "isJsonNull"),
      join: /* @__PURE__ */ __name(() => join2, "join"),
      raw: /* @__PURE__ */ __name(() => raw3, "raw"),
      sql: /* @__PURE__ */ __name(() => sql, "sql")
    });
    module.exports = __toCommonJS(index_exports);
    function hasBatchIndex(value) {
      return typeof value["batchRequestIdx"] === "number";
    }
    __name(hasBatchIndex, "hasBatchIndex");
    function setClassName(classObject, name) {
      Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
      });
    }
    __name(setClassName, "setClassName");
    var PrismaClientInitializationError2 = class _PrismaClientInitializationError extends Error {
      static {
        __name(this, "_PrismaClientInitializationError");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(message, clientVersion, errorCode) {
        super(message);
        this.name = "PrismaClientInitializationError";
        this.clientVersion = clientVersion;
        this.errorCode = errorCode;
        Error.captureStackTrace(_PrismaClientInitializationError);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    setClassName(PrismaClientInitializationError2, "PrismaClientInitializationError");
    var PrismaClientKnownRequestError2 = class extends Error {
      static {
        __name(this, "PrismaClientKnownRequestError");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientKnownRequestError";
        this.code = code;
        this.clientVersion = clientVersion;
        this.meta = meta;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          enumerable: false,
          writable: true
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    setClassName(PrismaClientKnownRequestError2, "PrismaClientKnownRequestError");
    function getBacktrace(log32) {
      if (log32.fields?.message) {
        let str = log32.fields?.message;
        if (log32.fields?.file) {
          str += ` in ${log32.fields.file}`;
          if (log32.fields?.line) {
            str += `:${log32.fields.line}`;
          }
          if (log32.fields?.column) {
            str += `:${log32.fields.column}`;
          }
        }
        if (log32.fields?.reason) {
          str += `
${log32.fields?.reason}`;
        }
        return str;
      }
      return "Unknown error";
    }
    __name(getBacktrace, "getBacktrace");
    function isPanic(err) {
      return err.fields?.message === "PANIC";
    }
    __name(isPanic, "isPanic");
    var PrismaClientRustError = class extends Error {
      static {
        __name(this, "PrismaClientRustError");
      }
      clientVersion;
      _isPanic;
      constructor({ clientVersion, error: error3 }) {
        const backtrace = getBacktrace(error3);
        super(backtrace ?? "Unknown error");
        this._isPanic = isPanic(error3);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustError";
      }
      isPanic() {
        return this._isPanic;
      }
    };
    setClassName(PrismaClientRustError, "PrismaClientRustError");
    var PrismaClientRustPanicError2 = class extends Error {
      static {
        __name(this, "PrismaClientRustPanicError");
      }
      clientVersion;
      constructor(message, clientVersion) {
        super(message);
        this.name = "PrismaClientRustPanicError";
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    setClassName(PrismaClientRustPanicError2, "PrismaClientRustPanicError");
    var PrismaClientUnknownRequestError2 = class extends Error {
      static {
        __name(this, "PrismaClientUnknownRequestError");
      }
      clientVersion;
      batchRequestIdx;
      constructor(message, { clientVersion, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientUnknownRequestError";
        this.clientVersion = clientVersion;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          writable: true,
          enumerable: false
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    setClassName(PrismaClientUnknownRequestError2, "PrismaClientUnknownRequestError");
    var PrismaClientValidationError2 = class extends Error {
      static {
        __name(this, "PrismaClientValidationError");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(message, { clientVersion }) {
        super(message);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    setClassName(PrismaClientValidationError2, "PrismaClientValidationError");
    var secret = Symbol();
    var representations = /* @__PURE__ */ new WeakMap();
    var ObjectEnumValue2 = class {
      static {
        __name(this, "ObjectEnumValue");
      }
      constructor(arg) {
        if (arg === secret) {
          representations.set(this, `Prisma.${this._getName()}`);
        } else {
          representations.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
        }
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return representations.get(this);
      }
    };
    function setClassName2(classObject, name) {
      Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
      });
    }
    __name(setClassName2, "setClassName2");
    var NullTypesEnumValue = class extends ObjectEnumValue2 {
      static {
        __name(this, "NullTypesEnumValue");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var DbNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "DbNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_DbNull;
    };
    setClassName2(DbNullClass, "DbNull");
    var JsonNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "JsonNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_JsonNull;
    };
    setClassName2(JsonNullClass, "JsonNull");
    var AnyNullClass = class extends NullTypesEnumValue {
      static {
        __name(this, "AnyNullClass");
      }
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_AnyNull;
    };
    setClassName2(AnyNullClass, "AnyNull");
    var NullTypes2 = {
      DbNull: DbNullClass,
      JsonNull: JsonNullClass,
      AnyNull: AnyNullClass
    };
    var DbNull2 = new DbNullClass(secret);
    var JsonNull2 = new JsonNullClass(secret);
    var AnyNull2 = new AnyNullClass(secret);
    function isDbNull2(value) {
      return value === DbNull2;
    }
    __name(isDbNull2, "isDbNull");
    function isJsonNull2(value) {
      return value === JsonNull2;
    }
    __name(isJsonNull2, "isJsonNull");
    function isAnyNull2(value) {
      return value === AnyNull2;
    }
    __name(isAnyNull2, "isAnyNull");
    var EXP_LIMIT = 9e15;
    var MAX_DIGITS = 1e9;
    var NUMERALS = "0123456789abcdef";
    var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var DEFAULTS = {
      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.
      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,
      // 1 to MAX_DIGITS
      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,
      // 0 to 8
      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,
      // 0 to 9
      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,
      // 0 to -EXP_LIMIT
      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos: 21,
      // 0 to EXP_LIMIT
      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,
      // -1 to -EXP_LIMIT
      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,
      // 1 to EXP_LIMIT
      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false
      // true/false
    };
    var inexact;
    var quadrant;
    var external = true;
    var decimalError = "[DecimalError] ";
    var invalidArgument = decimalError + "Invalid argument: ";
    var precisionLimitExceeded = decimalError + "Precision limit exceeded";
    var cryptoUnavailable = decimalError + "crypto unavailable";
    var tag = "[object Decimal]";
    var mathfloor = Math.floor;
    var mathpow = Math.pow;
    var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var BASE = 1e7;
    var LOG_BASE = 7;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var LN10_PRECISION = LN10.length - 1;
    var PI_PRECISION = PI.length - 1;
    var P2 = { toStringTag: tag };
    P2.absoluteValue = P2.abs = function() {
      var x2 = new this.constructor(this);
      if (x2.s < 0) x2.s = 1;
      return finalise(x2);
    };
    P2.ceil = function() {
      return finalise(new this.constructor(this), this.e + 1, 2);
    };
    P2.clampedTo = P2.clamp = function(min2, max2) {
      var k2, x2 = this, Ctor = x2.constructor;
      min2 = new Ctor(min2);
      max2 = new Ctor(max2);
      if (!min2.s || !max2.s) return new Ctor(NaN);
      if (min2.gt(max2)) throw Error(invalidArgument + max2);
      k2 = x2.cmp(min2);
      return k2 < 0 ? min2 : x2.cmp(max2) > 0 ? max2 : new Ctor(x2);
    };
    P2.comparedTo = P2.cmp = function(y) {
      var i, j, xdL, ydL, x2 = this, xd = x2.d, yd = (y = new x2.constructor(y)).d, xs = x2.s, ys = y.s;
      if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
      }
      if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
      if (xs !== ys) return xs;
      if (x2.e !== y.e) return x2.e > y.e ^ xs < 0 ? 1 : -1;
      xdL = xd.length;
      ydL = yd.length;
      for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
        if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
      }
      return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    };
    P2.cosine = P2.cos = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.d) return new Ctor(NaN);
      if (!x2.d[0]) return new Ctor(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x2 = cosine(Ctor, toLessThanHalfPi(Ctor, x2));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 3 ? x2.neg() : x2, pr, rm, true);
    };
    P2.cubeRoot = P2.cbrt = function() {
      var e, m, n, r, rep, s, sd, t, t3, t3plusx, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      external = false;
      s = x2.s * mathpow(x2.s * x2, 1 / 3);
      if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x2.d);
        e = x2.e;
        if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
        s = mathpow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
        r.s = x2.s;
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x2);
        r = divide(t3plusx.plus(x2).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).times(t).eq(x2)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).times(r).eq(x2);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P2.decimalPlaces = P2.dp = function() {
      var w2, d = this.d, n = NaN;
      if (d) {
        w2 = d.length - 1;
        n = (w2 - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w2 = d[w2];
        if (w2) for (; w2 % 10 == 0; w2 /= 10) n--;
        if (n < 0) n = 0;
      }
      return n;
    };
    P2.dividedBy = P2.div = function(y) {
      return divide(this, new this.constructor(y));
    };
    P2.dividedToIntegerBy = P2.divToInt = function(y) {
      var x2 = this, Ctor = x2.constructor;
      return finalise(divide(x2, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    };
    P2.equals = P2.eq = function(y) {
      return this.cmp(y) === 0;
    };
    P2.floor = function() {
      return finalise(new this.constructor(this), this.e + 1, 3);
    };
    P2.greaterThan = P2.gt = function(y) {
      return this.cmp(y) > 0;
    };
    P2.greaterThanOrEqualTo = P2.gte = function(y) {
      var k2 = this.cmp(y);
      return k2 == 1 || k2 === 0;
    };
    P2.hyperbolicCosine = P2.cosh = function() {
      var k2, n, pr, rm, len, x2 = this, Ctor = x2.constructor, one = new Ctor(1);
      if (!x2.isFinite()) return new Ctor(x2.s ? 1 / 0 : NaN);
      if (x2.isZero()) return one;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + 4;
      Ctor.rounding = 1;
      len = x2.d.length;
      if (len < 32) {
        k2 = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k2)).toString();
      } else {
        k2 = 16;
        n = "2.3283064365386962890625e-10";
      }
      x2 = taylorSeries(Ctor, 1, x2.times(n), new Ctor(1), true);
      var cosh2_x, i = k2, d8 = new Ctor(8);
      for (; i--; ) {
        cosh2_x = x2.times(x2);
        x2 = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
      }
      return finalise(x2, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P2.hyperbolicSine = P2.sinh = function() {
      var k2, pr, rm, len, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + 4;
      Ctor.rounding = 1;
      len = x2.d.length;
      if (len < 3) {
        x2 = taylorSeries(Ctor, 2, x2, x2, true);
      } else {
        k2 = 1.4 * Math.sqrt(len);
        k2 = k2 > 16 ? 16 : k2 | 0;
        x2 = x2.times(1 / tinyPow(5, k2));
        x2 = taylorSeries(Ctor, 2, x2, x2, true);
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for (; k2--; ) {
          sinh2_x = x2.times(x2);
          x2 = x2.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
      }
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(x2, pr, rm, true);
    };
    P2.hyperbolicTangent = P2.tanh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(x2.s);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 7;
      Ctor.rounding = 1;
      return divide(x2.sinh(), x2.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
    };
    P2.inverseCosine = P2.acos = function() {
      var x2 = this, Ctor = x2.constructor, k2 = x2.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
      if (k2 !== -1) {
        return k2 === 0 ? x2.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
      }
      if (x2.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x2 = new Ctor(1).minus(x2).div(x2.plus(1)).sqrt().atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(2);
    };
    P2.inverseHyperbolicCosine = P2.acosh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (x2.lte(1)) return new Ctor(x2.eq(1) ? 0 : NaN);
      if (!x2.isFinite()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(Math.abs(x2.e), x2.sd()) + 4;
      Ctor.rounding = 1;
      external = false;
      x2 = x2.times(x2).minus(1).sqrt().plus(x2);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.ln();
    };
    P2.inverseHyperbolicSine = P2.asinh = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite() || x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 2 * Math.max(Math.abs(x2.e), x2.sd()) + 6;
      Ctor.rounding = 1;
      external = false;
      x2 = x2.times(x2).plus(1).sqrt().plus(x2);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.ln();
    };
    P2.inverseHyperbolicTangent = P2.atanh = function() {
      var pr, rm, wpr, xsd, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.e >= 0) return new Ctor(x2.abs().eq(1) ? x2.s / 0 : x2.isZero() ? x2 : NaN);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      xsd = x2.sd();
      if (Math.max(xsd, pr) < 2 * -x2.e - 1) return finalise(new Ctor(x2), pr, rm, true);
      Ctor.precision = wpr = xsd - x2.e;
      x2 = divide(x2.plus(1), new Ctor(1).minus(x2), wpr + pr, 1);
      Ctor.precision = pr + 4;
      Ctor.rounding = 1;
      x2 = x2.ln();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(0.5);
    };
    P2.inverseSine = P2.asin = function() {
      var halfPi, k2, pr, rm, x2 = this, Ctor = x2.constructor;
      if (x2.isZero()) return new Ctor(x2);
      k2 = x2.abs().cmp(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (k2 !== -1) {
        if (k2 === 0) {
          halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
          halfPi.s = x2.s;
          return halfPi;
        }
        return new Ctor(NaN);
      }
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x2 = x2.div(new Ctor(1).minus(x2.times(x2)).sqrt().plus(1)).atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x2.times(2);
    };
    P2.inverseTangent = P2.atan = function() {
      var i, j, k2, n, px, t, r, wpr, x2, x3 = this, Ctor = x3.constructor, pr = Ctor.precision, rm = Ctor.rounding;
      if (!x3.isFinite()) {
        if (!x3.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
          r = getPi(Ctor, pr + 4, rm).times(0.5);
          r.s = x3.s;
          return r;
        }
      } else if (x3.isZero()) {
        return new Ctor(x3);
      } else if (x3.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x3.s;
        return r;
      }
      Ctor.precision = wpr = pr + 10;
      Ctor.rounding = 1;
      k2 = Math.min(28, wpr / LOG_BASE + 2 | 0);
      for (i = k2; i; --i) x3 = x3.div(x3.times(x3).plus(1).sqrt().plus(1));
      external = false;
      j = Math.ceil(wpr / LOG_BASE);
      n = 1;
      x2 = x3.times(x3);
      r = new Ctor(x3);
      px = x3;
      for (; i !== -1; ) {
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--; ) ;
      }
      if (k2) r = r.times(2 << k2 - 1);
      external = true;
      return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P2.isFinite = function() {
      return !!this.d;
    };
    P2.isInteger = P2.isInt = function() {
      return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
    };
    P2.isNaN = function() {
      return !this.s;
    };
    P2.isNegative = P2.isNeg = function() {
      return this.s < 0;
    };
    P2.isPositive = P2.isPos = function() {
      return this.s > 0;
    };
    P2.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    P2.lessThan = P2.lt = function(y) {
      return this.cmp(y) < 0;
    };
    P2.lessThanOrEqualTo = P2.lte = function(y) {
      return this.cmp(y) < 1;
    };
    P2.logarithm = P2.log = function(base) {
      var isBase10, d, denominator, k2, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
      if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
      } else {
        base = new Ctor(base);
        d = base.d;
        if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
      }
      d = arg.d;
      if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
      }
      if (isBase10) {
        if (d.length > 1) {
          inf = true;
        } else {
          for (k2 = d[0]; k2 % 10 === 0; ) k2 /= 10;
          inf = k2 !== 1;
        }
      }
      external = false;
      sd = pr + guard;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (checkRoundingDigits(r.d, k2 = pr, rm)) {
        do {
          sd += 10;
          num = naturalLogarithm(arg, sd);
          denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
          r = divide(num, denominator, sd, 1);
          if (!inf) {
            if (+digitsToString(r.d).slice(k2 + 1, k2 + 15) + 1 == 1e14) {
              r = finalise(r, pr + 1, 0);
            }
            break;
          }
        } while (checkRoundingDigits(r.d, k2 += 10, rm));
      }
      external = true;
      return finalise(r, pr, rm);
    };
    P2.minus = P2.sub = function(y) {
      var d, e, i, j, k2, len, pr, rm, xd, xe, xLTy, yd, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.d) {
        if (!x2.s || !y.s) y = new Ctor(NaN);
        else if (x2.d) y.s = -y.s;
        else y = new Ctor(y.d || x2.s !== y.s ? x2 : NaN);
        return y;
      }
      if (x2.s != y.s) {
        y.s = -y.s;
        return x2.plus(y);
      }
      xd = x2.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (yd[0]) y.s = -y.s;
        else if (xd[0]) y = new Ctor(x2);
        else return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
      }
      e = mathfloor(y.e / LOG_BASE);
      xe = mathfloor(x2.e / LOG_BASE);
      xd = xd.slice();
      k2 = xe - e;
      if (k2) {
        xLTy = k2 < 0;
        if (xLTy) {
          d = xd;
          k2 = -k2;
          len = yd.length;
        } else {
          d = yd;
          e = xe;
          len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k2 > i) {
          k2 = i;
          d.length = 1;
        }
        d.reverse();
        for (i = k2; i--; ) d.push(0);
        d.reverse();
      } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy) len = i;
        for (i = 0; i < len; i++) {
          if (xd[i] != yd[i]) {
            xLTy = xd[i] < yd[i];
            break;
          }
        }
        k2 = 0;
      }
      if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
      }
      len = xd.length;
      for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
      for (i = yd.length; i > k2; ) {
        if (xd[--i] < yd[i]) {
          for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
          --xd[j];
          xd[i] += BASE;
        }
        xd[i] -= yd[i];
      }
      for (; xd[--len] === 0; ) xd.pop();
      for (; xd[0] === 0; xd.shift()) --e;
      if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P2.modulo = P2.mod = function(y) {
      var q, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
      if (!y.d || x2.d && !x2.d[0]) {
        return finalise(new Ctor(x2), Ctor.precision, Ctor.rounding);
      }
      external = false;
      if (Ctor.modulo == 9) {
        q = divide(x2, y.abs(), 0, 3, 1);
        q.s *= y.s;
      } else {
        q = divide(x2, y, 0, Ctor.modulo, 1);
      }
      q = q.times(y);
      external = true;
      return x2.minus(q);
    };
    P2.naturalExponential = P2.exp = function() {
      return naturalExponential(this);
    };
    P2.naturalLogarithm = P2.ln = function() {
      return naturalLogarithm(this);
    };
    P2.negated = P2.neg = function() {
      var x2 = new this.constructor(this);
      x2.s = -x2.s;
      return finalise(x2);
    };
    P2.plus = P2.add = function(y) {
      var carry, d, e, i, k2, len, pr, rm, xd, yd, x2 = this, Ctor = x2.constructor;
      y = new Ctor(y);
      if (!x2.d || !y.d) {
        if (!x2.s || !y.s) y = new Ctor(NaN);
        else if (!x2.d) y = new Ctor(y.d || x2.s === y.s ? x2 : NaN);
        return y;
      }
      if (x2.s != y.s) {
        y.s = -y.s;
        return x2.minus(y);
      }
      xd = x2.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (!yd[0]) y = new Ctor(x2);
        return external ? finalise(y, pr, rm) : y;
      }
      k2 = mathfloor(x2.e / LOG_BASE);
      e = mathfloor(y.e / LOG_BASE);
      xd = xd.slice();
      i = k2 - e;
      if (i) {
        if (i < 0) {
          d = xd;
          i = -i;
          len = yd.length;
        } else {
          d = yd;
          e = k2;
          len = xd.length;
        }
        k2 = Math.ceil(pr / LOG_BASE);
        len = k2 > len ? k2 + 1 : len + 1;
        if (i > len) {
          i = len;
          d.length = 1;
        }
        d.reverse();
        for (; i--; ) d.push(0);
        d.reverse();
      }
      len = xd.length;
      i = yd.length;
      if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
      }
      for (carry = 0; i; ) {
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
      }
      if (carry) {
        xd.unshift(carry);
        ++e;
      }
      for (len = xd.length; xd[--len] == 0; ) xd.pop();
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P2.precision = P2.sd = function(z) {
      var k2, x2 = this;
      if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
      if (x2.d) {
        k2 = getPrecision(x2.d);
        if (z && x2.e + 1 > k2) k2 = x2.e + 1;
      } else {
        k2 = NaN;
      }
      return k2;
    };
    P2.round = function() {
      var x2 = this, Ctor = x2.constructor;
      return finalise(new Ctor(x2), x2.e + 1, Ctor.rounding);
    };
    P2.sine = P2.sin = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x2.e, x2.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x2 = sine(Ctor, toLessThanHalfPi(Ctor, x2));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant > 2 ? x2.neg() : x2, pr, rm, true);
    };
    P2.squareRoot = P2.sqrt = function() {
      var m, n, sd, r, rep, t, x2 = this, d = x2.d, e = x2.e, s = x2.s, Ctor = x2.constructor;
      if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x2 : 1 / 0);
      }
      external = false;
      s = Math.sqrt(+x2);
      if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0) n += "0";
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        r = t.plus(divide(x2, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).eq(x2)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).eq(x2);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P2.tangent = P2.tan = function() {
      var pr, rm, x2 = this, Ctor = x2.constructor;
      if (!x2.isFinite()) return new Ctor(NaN);
      if (x2.isZero()) return new Ctor(x2);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 10;
      Ctor.rounding = 1;
      x2 = x2.sin();
      x2.s = 1;
      x2 = divide(x2, new Ctor(1).minus(x2.times(x2)).sqrt(), pr + 10, 0);
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 4 ? x2.neg() : x2, pr, rm, true);
    };
    P2.times = P2.mul = function(y) {
      var carry, e, i, k2, r, rL, t, xdL, ydL, x2 = this, Ctor = x2.constructor, xd = x2.d, yd = (y = new Ctor(y)).d;
      y.s *= x2.s;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
      }
      e = mathfloor(x2.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
      xdL = xd.length;
      ydL = yd.length;
      if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
      }
      r = [];
      rL = xdL + ydL;
      for (i = rL; i--; ) r.push(0);
      for (i = ydL; --i >= 0; ) {
        carry = 0;
        for (k2 = xdL + i; k2 > i; ) {
          t = r[k2] + yd[i] * xd[k2 - i - 1] + carry;
          r[k2--] = t % BASE | 0;
          carry = t / BASE | 0;
        }
        r[k2] = (r[k2] + carry) % BASE | 0;
      }
      for (; !r[--rL]; ) r.pop();
      if (carry) ++e;
      else r.shift();
      y.d = r;
      y.e = getBase10Exponent(r, e);
      return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    };
    P2.toBinary = function(sd, rm) {
      return toStringBinary(this, 2, sd, rm);
    };
    P2.toDecimalPlaces = P2.toDP = function(dp, rm) {
      var x2 = this, Ctor = x2.constructor;
      x2 = new Ctor(x2);
      if (dp === void 0) return x2;
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
      return finalise(x2, dp + x2.e + 1, rm);
    };
    P2.toExponential = function(dp, rm) {
      var str, x2 = this, Ctor = x2.constructor;
      if (dp === void 0) {
        str = finiteToString(x2, true);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x2 = finalise(new Ctor(x2), dp + 1, rm);
        str = finiteToString(x2, true, dp + 1);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.toFixed = function(dp, rm) {
      var str, y, x2 = this, Ctor = x2.constructor;
      if (dp === void 0) {
        str = finiteToString(x2);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x2), dp + x2.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.toFraction = function(maxD) {
      var d, d0, d1, d2, e, k2, n, n0, n1, pr, q, r, x2 = this, xd = x2.d, Ctor = x2.constructor;
      if (!xd) return new Ctor(x2);
      n1 = d0 = new Ctor(1);
      d1 = n0 = new Ctor(0);
      d = new Ctor(d1);
      e = d.e = getPrecision(xd) - x2.e - 1;
      k2 = e % LOG_BASE;
      d.d[0] = mathpow(10, k2 < 0 ? LOG_BASE + k2 : k2);
      if (maxD == null) {
        maxD = e > 0 ? d : n1;
      } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
      }
      external = false;
      n = new Ctor(digitsToString(xd));
      pr = Ctor.precision;
      Ctor.precision = e = xd.length * LOG_BASE * 2;
      for (; ; ) {
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1) break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
      }
      d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x2.s;
      r = divide(n1, d1, e, 1).minus(x2).abs().cmp(divide(n0, d0, e, 1).minus(x2).abs()) < 1 ? [n1, d1] : [n0, d0];
      Ctor.precision = pr;
      external = true;
      return r;
    };
    P2.toHexadecimal = P2.toHex = function(sd, rm) {
      return toStringBinary(this, 16, sd, rm);
    };
    P2.toNearest = function(y, rm) {
      var x2 = this, Ctor = x2.constructor;
      x2 = new Ctor(x2);
      if (y == null) {
        if (!x2.d) return x2;
        y = new Ctor(1);
        rm = Ctor.rounding;
      } else {
        y = new Ctor(y);
        if (rm === void 0) {
          rm = Ctor.rounding;
        } else {
          checkInt32(rm, 0, 8);
        }
        if (!x2.d) return y.s ? x2 : y;
        if (!y.d) {
          if (y.s) y.s = x2.s;
          return y;
        }
      }
      if (y.d[0]) {
        external = false;
        x2 = divide(x2, y, 0, rm, 1).times(y);
        external = true;
        finalise(x2);
      } else {
        y.s = x2.s;
        x2 = y;
      }
      return x2;
    };
    P2.toNumber = function() {
      return +this;
    };
    P2.toOctal = function(sd, rm) {
      return toStringBinary(this, 8, sd, rm);
    };
    P2.toPower = P2.pow = function(y) {
      var e, k2, pr, r, rm, s, x2 = this, Ctor = x2.constructor, yn = +(y = new Ctor(y));
      if (!x2.d || !y.d || !x2.d[0] || !y.d[0]) return new Ctor(mathpow(+x2, yn));
      x2 = new Ctor(x2);
      if (x2.eq(1)) return x2;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (y.eq(1)) return finalise(x2, pr, rm);
      e = mathfloor(y.e / LOG_BASE);
      if (e >= y.d.length - 1 && (k2 = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x2, k2, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
      }
      s = x2.s;
      if (s < 0) {
        if (e < y.d.length - 1) return new Ctor(NaN);
        if ((y.d[e] & 1) == 0) s = 1;
        if (x2.e == 0 && x2.d[0] == 1 && x2.d.length == 1) {
          x2.s = s;
          return x2;
        }
      }
      k2 = mathpow(+x2, yn);
      e = k2 == 0 || !isFinite(k2) ? mathfloor(yn * (Math.log("0." + digitsToString(x2.d)) / Math.LN10 + x2.e + 1)) : new Ctor(k2 + "").e;
      if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
      external = false;
      Ctor.rounding = x2.s = 1;
      k2 = Math.min(12, (e + "").length);
      r = naturalExponential(y.times(naturalLogarithm(x2, pr + k2)), pr);
      if (r.d) {
        r = finalise(r, pr + 5, 1);
        if (checkRoundingDigits(r.d, pr, rm)) {
          e = pr + 10;
          r = finalise(naturalExponential(y.times(naturalLogarithm(x2, e + k2)), e), e + 5, 1);
          if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }
        }
      }
      r.s = s;
      external = true;
      Ctor.rounding = rm;
      return finalise(r, pr, rm);
    };
    P2.toPrecision = function(sd, rm) {
      var str, x2 = this, Ctor = x2.constructor;
      if (sd === void 0) {
        str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x2 = finalise(new Ctor(x2), sd, rm);
        str = finiteToString(x2, sd <= x2.e || x2.e <= Ctor.toExpNeg, sd);
      }
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.toSignificantDigits = P2.toSD = function(sd, rm) {
      var x2 = this, Ctor = x2.constructor;
      if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      }
      return finalise(new Ctor(x2), sd, rm);
    };
    P2.toString = function() {
      var x2 = this, Ctor = x2.constructor, str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      return x2.isNeg() && !x2.isZero() ? "-" + str : str;
    };
    P2.truncated = P2.trunc = function() {
      return finalise(new this.constructor(this), this.e + 1, 1);
    };
    P2.valueOf = P2.toJSON = function() {
      var x2 = this, Ctor = x2.constructor, str = finiteToString(x2, x2.e <= Ctor.toExpNeg || x2.e >= Ctor.toExpPos);
      return x2.isNeg() ? "-" + str : str;
    };
    function digitsToString(d) {
      var i, k2, ws, indexOfLastWord = d.length - 1, str = "", w2 = d[0];
      if (indexOfLastWord > 0) {
        str += w2;
        for (i = 1; i < indexOfLastWord; i++) {
          ws = d[i] + "";
          k2 = LOG_BASE - ws.length;
          if (k2) str += getZeroString(k2);
          str += ws;
        }
        w2 = d[i];
        ws = w2 + "";
        k2 = LOG_BASE - ws.length;
        if (k2) str += getZeroString(k2);
      } else if (w2 === 0) {
        return "0";
      }
      for (; w2 % 10 === 0; ) w2 /= 10;
      return str + w2;
    }
    __name(digitsToString, "digitsToString");
    function checkInt32(i, min2, max2) {
      if (i !== ~~i || i < min2 || i > max2) {
        throw Error(invalidArgument + i);
      }
    }
    __name(checkInt32, "checkInt32");
    function checkRoundingDigits(d, i, rm, repeating) {
      var di, k2, r, rd;
      for (k2 = d[0]; k2 >= 10; k2 /= 10) --i;
      if (--i < 0) {
        i += LOG_BASE;
        di = 0;
      } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
      }
      k2 = mathpow(10, LOG_BASE - i);
      rd = d[di] % k2 | 0;
      if (repeating == null) {
        if (i < 3) {
          if (i == 0) rd = rd / 100 | 0;
          else if (i == 1) rd = rd / 10 | 0;
          r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
        } else {
          r = (rm < 4 && rd + 1 == k2 || rm > 3 && rd + 1 == k2 / 2) && (d[di + 1] / k2 / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k2 / 2 || rd == 0) && (d[di + 1] / k2 / 100 | 0) == 0;
        }
      } else {
        if (i < 4) {
          if (i == 0) rd = rd / 1e3 | 0;
          else if (i == 1) rd = rd / 100 | 0;
          else if (i == 2) rd = rd / 10 | 0;
          r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
          r = ((repeating || rm < 4) && rd + 1 == k2 || !repeating && rm > 3 && rd + 1 == k2 / 2) && (d[di + 1] / k2 / 1e3 | 0) == mathpow(10, i - 3) - 1;
        }
      }
      return r;
    }
    __name(checkRoundingDigits, "checkRoundingDigits");
    function convertBase(str, baseIn, baseOut) {
      var j, arr = [0], arrL, i = 0, strL = str.length;
      for (; i < strL; ) {
        for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] === void 0) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    __name(convertBase, "convertBase");
    function cosine(Ctor, x2) {
      var k2, len, y;
      if (x2.isZero()) return x2;
      len = x2.d.length;
      if (len < 32) {
        k2 = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k2)).toString();
      } else {
        k2 = 16;
        y = "2.3283064365386962890625e-10";
      }
      Ctor.precision += k2;
      x2 = taylorSeries(Ctor, 1, x2.times(y), new Ctor(1));
      for (var i = k2; i--; ) {
        var cos2x = x2.times(x2);
        x2 = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
      }
      Ctor.precision -= k2;
      return x2;
    }
    __name(cosine, "cosine");
    var divide = /* @__PURE__ */ (function() {
      function multiplyInteger(x2, k2, base) {
        var temp, carry = 0, i = x2.length;
        for (x2 = x2.slice(); i--; ) {
          temp = x2[i] * k2 + carry;
          x2[i] = temp % base | 0;
          carry = temp / base | 0;
        }
        if (carry) x2.unshift(carry);
        return x2;
      }
      __name(multiplyInteger, "multiplyInteger");
      function compare(a, b2, aL, bL) {
        var i, r;
        if (aL != bL) {
          r = aL > bL ? 1 : -1;
        } else {
          for (i = r = 0; i < aL; i++) {
            if (a[i] != b2[i]) {
              r = a[i] > b2[i] ? 1 : -1;
              break;
            }
          }
        }
        return r;
      }
      __name(compare, "compare");
      function subtract(a, b2, aL, base) {
        var i = 0;
        for (; aL--; ) {
          a[aL] -= i;
          i = a[aL] < b2[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b2[aL];
        }
        for (; !a[0] && a.length > 1; ) a.shift();
      }
      __name(subtract, "subtract");
      return function(x2, y, pr, rm, dp, base) {
        var cmp, e, i, k2, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x2.constructor, sign2 = x2.s == y.s ? 1 : -1, xd = x2.d, yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
          return new Ctor(
            // Return NaN if either NaN, or both Infinity or 0.
            !x2.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
              // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
              xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
            )
          );
        }
        if (base) {
          logBase = 1;
          e = x2.e - y.e;
        } else {
          base = BASE;
          logBase = LOG_BASE;
          e = mathfloor(x2.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign2);
        qd = q.d = [];
        for (i = 0; yd[i] == (xd[i] || 0); i++) ;
        if (yd[i] > (xd[i] || 0)) e--;
        if (pr == null) {
          sd = pr = Ctor.precision;
          rm = Ctor.rounding;
        } else if (dp) {
          sd = pr + (x2.e - y.e) + 1;
        } else {
          sd = pr;
        }
        if (sd < 0) {
          qd.push(1);
          more = true;
        } else {
          sd = sd / logBase + 2 | 0;
          i = 0;
          if (yL == 1) {
            k2 = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k2) && sd--; i++) {
              t = k2 * base + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k2 = t % yd | 0;
            }
            more = k2 || i < xL;
          } else {
            k2 = base / (yd[0] + 1) | 0;
            if (k2 > 1) {
              yd = multiplyInteger(yd, k2, base);
              xd = multiplyInteger(xd, k2, base);
              yL = yd.length;
              xL = xd.length;
            }
            xi = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; ) rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= base / 2) ++yd0;
            do {
              k2 = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                k2 = rem0 / yd0 | 0;
                if (k2 > 1) {
                  if (k2 >= base) k2 = base - 1;
                  prod = multiplyInteger(yd, k2, base);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k2--;
                    subtract(prod, yL < prodL ? yz : yd, prodL, base);
                  }
                } else {
                  if (k2 == 0) cmp = k2 = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL) prod.unshift(0);
                subtract(rem, prod, remL, base);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k2++;
                    subtract(rem, yL < remL ? yz : yd, remL, base);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k2++;
                rem = [0];
              }
              qd[i++] = k2;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi] || 0;
              } else {
                rem = [xd[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] !== void 0) && sd--);
            more = rem[0] !== void 0;
          }
          if (!qd[0]) qd.shift();
        }
        if (logBase == 1) {
          q.e = e;
          inexact = more;
        } else {
          for (i = 1, k2 = qd[0]; k2 >= 10; k2 /= 10) i++;
          q.e = i + e * logBase - 1;
          finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
      };
    })();
    function finalise(x2, sd, rm, isTruncated) {
      var digits, i, j, k2, rd, roundUp, w2, xd, xdi, Ctor = x2.constructor;
      out: if (sd != null) {
        xd = x2.d;
        if (!xd) return x2;
        for (digits = 1, k2 = xd[0]; k2 >= 10; k2 /= 10) digits++;
        i = sd - digits;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w2 = xd[xdi = 0];
          rd = w2 / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k2 = xd.length;
          if (xdi >= k2) {
            if (isTruncated) {
              for (; k2++ <= xdi; ) xd.push(0);
              w2 = rd = 0;
              digits = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            w2 = k2 = xd[xdi];
            for (digits = 1; k2 >= 10; k2 /= 10) digits++;
            i %= LOG_BASE;
            j = i - LOG_BASE + digits;
            rd = j < 0 ? 0 : w2 / mathpow(10, digits - j - 1) % 10 | 0;
          }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w2 : w2 % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x2.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w2 / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x2.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
          xd.length = 0;
          if (roundUp) {
            sd -= x2.e + 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x2.e = -sd || 0;
          } else {
            xd[0] = x2.e = 0;
          }
          return x2;
        }
        if (i == 0) {
          xd.length = xdi;
          k2 = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k2 = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w2 / mathpow(10, digits - j) % mathpow(10, j) | 0) * k2 : 0;
        }
        if (roundUp) {
          for (; ; ) {
            if (xdi == 0) {
              for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
              j = xd[0] += k2;
              for (k2 = 1; j >= 10; j /= 10) k2++;
              if (i != k2) {
                x2.e++;
                if (xd[0] == BASE) xd[0] = 1;
              }
              break;
            } else {
              xd[xdi] += k2;
              if (xd[xdi] != BASE) break;
              xd[xdi--] = 0;
              k2 = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; ) xd.pop();
      }
      if (external) {
        if (x2.e > Ctor.maxE) {
          x2.d = null;
          x2.e = NaN;
        } else if (x2.e < Ctor.minE) {
          x2.e = 0;
          x2.d = [0];
        }
      }
      return x2;
    }
    __name(finalise, "finalise");
    function finiteToString(x2, isExp, sd) {
      if (!x2.isFinite()) return nonFiniteToString(x2);
      var k2, e = x2.e, str = digitsToString(x2.d), len = str.length;
      if (isExp) {
        if (sd && (k2 = sd - len) > 0) {
          str = str.charAt(0) + "." + str.slice(1) + getZeroString(k2);
        } else if (len > 1) {
          str = str.charAt(0) + "." + str.slice(1);
        }
        str = str + (x2.e < 0 ? "e" : "e+") + x2.e;
      } else if (e < 0) {
        str = "0." + getZeroString(-e - 1) + str;
        if (sd && (k2 = sd - len) > 0) str += getZeroString(k2);
      } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k2 = sd - e - 1) > 0) str = str + "." + getZeroString(k2);
      } else {
        if ((k2 = e + 1) < len) str = str.slice(0, k2) + "." + str.slice(k2);
        if (sd && (k2 = sd - len) > 0) {
          if (e + 1 === len) str += ".";
          str += getZeroString(k2);
        }
      }
      return str;
    }
    __name(finiteToString, "finiteToString");
    function getBase10Exponent(digits, e) {
      var w2 = digits[0];
      for (e *= LOG_BASE; w2 >= 10; w2 /= 10) e++;
      return e;
    }
    __name(getBase10Exponent, "getBase10Exponent");
    function getLn10(Ctor, sd, pr) {
      if (sd > LN10_PRECISION) {
        external = true;
        if (pr) Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
      }
      return finalise(new Ctor(LN10), sd, 1, true);
    }
    __name(getLn10, "getLn10");
    function getPi(Ctor, sd, rm) {
      if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
      return finalise(new Ctor(PI), sd, rm, true);
    }
    __name(getPi, "getPi");
    function getPrecision(digits) {
      var w2 = digits.length - 1, len = w2 * LOG_BASE + 1;
      w2 = digits[w2];
      if (w2) {
        for (; w2 % 10 == 0; w2 /= 10) len--;
        for (w2 = digits[0]; w2 >= 10; w2 /= 10) len++;
      }
      return len;
    }
    __name(getPrecision, "getPrecision");
    function getZeroString(k2) {
      var zs = "";
      for (; k2--; ) zs += "0";
      return zs;
    }
    __name(getZeroString, "getZeroString");
    function intPow(Ctor, x2, n, pr) {
      var isTruncated, r = new Ctor(1), k2 = Math.ceil(pr / LOG_BASE + 4);
      external = false;
      for (; ; ) {
        if (n % 2) {
          r = r.times(x2);
          if (truncate(r.d, k2)) isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
          n = r.d.length - 1;
          if (isTruncated && r.d[n] === 0) ++r.d[n];
          break;
        }
        x2 = x2.times(x2);
        truncate(x2.d, k2);
      }
      external = true;
      return r;
    }
    __name(intPow, "intPow");
    function isOdd(n) {
      return n.d[n.d.length - 1] & 1;
    }
    __name(isOdd, "isOdd");
    function maxOrMin(Ctor, args, n) {
      var k2, y, x2 = new Ctor(args[0]), i = 0;
      for (; ++i < args.length; ) {
        y = new Ctor(args[i]);
        if (!y.s) {
          x2 = y;
          break;
        }
        k2 = x2.cmp(y);
        if (k2 === n || k2 === 0 && x2.s === n) {
          x2 = y;
        }
      }
      return x2;
    }
    __name(maxOrMin, "maxOrMin");
    function naturalExponential(x2, sd) {
      var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k2 = 0, Ctor = x2.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (!x2.d || !x2.d[0] || x2.e > 17) {
        return new Ctor(x2.d ? !x2.d[0] ? 1 : x2.s < 0 ? 0 : 1 / 0 : x2.s ? x2.s < 0 ? 0 : x2 : 0 / 0);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      t = new Ctor(0.03125);
      while (x2.e > -2) {
        x2 = x2.times(t);
        k2 += 5;
      }
      guard = Math.log(mathpow(2, k2)) / Math.LN10 * 2 + 5 | 0;
      wpr += guard;
      denominator = pow2 = sum2 = new Ctor(1);
      Ctor.precision = wpr;
      for (; ; ) {
        pow2 = finalise(pow2.times(x2), wpr, 1);
        denominator = denominator.times(++i);
        t = sum2.plus(divide(pow2, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          j = k2;
          while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
          if (sd == null) {
            if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += 10;
              denominator = pow2 = t = new Ctor(1);
              i = 0;
              rep++;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
      }
    }
    __name(naturalExponential, "naturalExponential");
    function naturalLogarithm(y, sd) {
      var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x3 = y, xd = x3.d, Ctor = x3.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (x3.s < 0 || !xd || !xd[0] || !x3.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x3.s != 1 ? NaN : xd ? 0 : x3);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      Ctor.precision = wpr += guard;
      c = digitsToString(xd);
      c0 = c.charAt(0);
      if (Math.abs(e = x3.e) < 15e14) {
        while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
          x3 = x3.times(y);
          c = digitsToString(x3.d);
          c0 = c.charAt(0);
          n++;
        }
        e = x3.e;
        if (c0 > 1) {
          x3 = new Ctor("0." + c);
          e++;
        } else {
          x3 = new Ctor(c0 + "." + c.slice(1));
        }
      } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + "");
        x3 = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x3, pr, rm, external = true) : x3;
      }
      x1 = x3;
      sum2 = numerator = x3 = divide(x3.minus(1), x3.plus(1), wpr, 1);
      x2 = finalise(x3.times(x3), wpr, 1);
      denominator = 3;
      for (; ; ) {
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          sum2 = sum2.times(2);
          if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
          sum2 = divide(sum2, new Ctor(n), wpr, 1);
          if (sd == null) {
            if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += guard;
              t = numerator = x3 = divide(x1.minus(1), x1.plus(1), wpr, 1);
              x2 = finalise(x3.times(x3), wpr, 1);
              denominator = rep = 1;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
        denominator += 2;
      }
    }
    __name(naturalLogarithm, "naturalLogarithm");
    function nonFiniteToString(x2) {
      return String(x2.s * x2.s / 0);
    }
    __name(nonFiniteToString, "nonFiniteToString");
    function parseDecimal(x2, str) {
      var e, i, len;
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
      for (i = 0; str.charCodeAt(i) === 48; i++) ;
      for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
      str = str.slice(i, len);
      if (str) {
        len -= i;
        x2.e = e = e - i - 1;
        x2.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
          if (i) x2.d.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) x2.d.push(+str.slice(i, i += LOG_BASE));
          str = str.slice(i);
          i = LOG_BASE - str.length;
        } else {
          i -= len;
        }
        for (; i--; ) str += "0";
        x2.d.push(+str);
        if (external) {
          if (x2.e > x2.constructor.maxE) {
            x2.d = null;
            x2.e = NaN;
          } else if (x2.e < x2.constructor.minE) {
            x2.e = 0;
            x2.d = [0];
          }
        }
      } else {
        x2.e = 0;
        x2.d = [0];
      }
      return x2;
    }
    __name(parseDecimal, "parseDecimal");
    function parseOther(x2, str) {
      var base, Ctor, divisor, i, isFloat, len, p2, xd, xe;
      if (str.indexOf("_") > -1) {
        str = str.replace(/(\d)_(?=\d)/g, "$1");
        if (isDecimal.test(str)) return parseDecimal(x2, str);
      } else if (str === "Infinity" || str === "NaN") {
        if (!+str) x2.s = NaN;
        x2.e = NaN;
        x2.d = null;
        return x2;
      }
      if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
      } else if (isBinary.test(str)) {
        base = 2;
      } else if (isOctal.test(str)) {
        base = 8;
      } else {
        throw Error(invalidArgument + str);
      }
      i = str.search(/p/i);
      if (i > 0) {
        p2 = +str.slice(i + 1);
        str = str.substring(2, i);
      } else {
        str = str.slice(2);
      }
      i = str.indexOf(".");
      isFloat = i >= 0;
      Ctor = x2.constructor;
      if (isFloat) {
        str = str.replace(".", "");
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
      }
      xd = convertBase(str, base, BASE);
      xe = xd.length - 1;
      for (i = xe; xd[i] === 0; --i) xd.pop();
      if (i < 0) return new Ctor(x2.s * 0);
      x2.e = getBase10Exponent(xd, xe);
      x2.d = xd;
      external = false;
      if (isFloat) x2 = divide(x2, divisor, len * 4);
      if (p2) x2 = x2.times(Math.abs(p2) < 54 ? mathpow(2, p2) : Decimal2.pow(2, p2));
      external = true;
      return x2;
    }
    __name(parseOther, "parseOther");
    function sine(Ctor, x2) {
      var k2, len = x2.d.length;
      if (len < 3) {
        return x2.isZero() ? x2 : taylorSeries(Ctor, 2, x2, x2);
      }
      k2 = 1.4 * Math.sqrt(len);
      k2 = k2 > 16 ? 16 : k2 | 0;
      x2 = x2.times(1 / tinyPow(5, k2));
      x2 = taylorSeries(Ctor, 2, x2, x2);
      var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
      for (; k2--; ) {
        sin2_x = x2.times(x2);
        x2 = x2.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
      }
      return x2;
    }
    __name(sine, "sine");
    function taylorSeries(Ctor, n, x2, y, isHyperbolic) {
      var j, t, u, x22, i = 1, pr = Ctor.precision, k2 = Math.ceil(pr / LOG_BASE);
      external = false;
      x22 = x2.times(x2);
      u = new Ctor(y);
      for (; ; ) {
        t = divide(u.times(x22), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x22), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k2] !== void 0) {
          for (j = k2; t.d[j] === u.d[j] && j--; ) ;
          if (j == -1) break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
      }
      external = true;
      t.d.length = k2 + 1;
      return t;
    }
    __name(taylorSeries, "taylorSeries");
    function tinyPow(b2, e) {
      var n = b2;
      while (--e) n *= b2;
      return n;
    }
    __name(tinyPow, "tinyPow");
    function toLessThanHalfPi(Ctor, x2) {
      var t, isNeg = x2.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
      x2 = x2.abs();
      if (x2.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x2;
      }
      t = x2.divToInt(pi);
      if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
      } else {
        x2 = x2.minus(t.times(pi));
        if (x2.lte(halfPi)) {
          quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
          return x2;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
      }
      return x2.minus(pi).abs();
    }
    __name(toLessThanHalfPi, "toLessThanHalfPi");
    function toStringBinary(x2, baseOut, sd, rm) {
      var base, e, i, k2, len, roundUp, str, xd, y, Ctor = x2.constructor, isExp = sd !== void 0;
      if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      }
      if (!x2.isFinite()) {
        str = nonFiniteToString(x2);
      } else {
        str = finiteToString(x2);
        i = str.indexOf(".");
        if (isExp) {
          base = 2;
          if (baseOut == 16) {
            sd = sd * 4 - 3;
          } else if (baseOut == 8) {
            sd = sd * 3 - 2;
          }
        } else {
          base = baseOut;
        }
        if (i >= 0) {
          str = str.replace(".", "");
          y = new Ctor(1);
          y.e = str.length - i;
          y.d = convertBase(finiteToString(y), 10, base);
          y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for (; xd[--len] == 0; ) xd.pop();
        if (!xd[0]) {
          str = isExp ? "0p+0" : "0";
        } else {
          if (i < 0) {
            e--;
          } else {
            x2 = new Ctor(x2);
            x2.d = xd;
            x2.e = e;
            x2 = divide(x2, y, sd, rm, 0, base);
            xd = x2.d;
            e = x2.e;
            roundUp = inexact;
          }
          i = xd[sd];
          k2 = base / 2;
          roundUp = roundUp || xd[sd + 1] !== void 0;
          roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x2.s < 0 ? 3 : 2)) : i > k2 || i === k2 && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x2.s < 0 ? 8 : 7));
          xd.length = sd;
          if (roundUp) {
            for (; ++xd[--sd] > base - 1; ) {
              xd[sd] = 0;
              if (!sd) {
                ++e;
                xd.unshift(1);
              }
            }
          }
          for (len = xd.length; !xd[len - 1]; --len) ;
          for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
          if (isExp) {
            if (len > 1) {
              if (baseOut == 16 || baseOut == 8) {
                i = baseOut == 16 ? 4 : 3;
                for (--len; len % i; len++) str += "0";
                xd = convertBase(str, base, baseOut);
                for (len = xd.length; !xd[len - 1]; --len) ;
                for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
              } else {
                str = str.charAt(0) + "." + str.slice(1);
              }
            }
            str = str + (e < 0 ? "p" : "p+") + e;
          } else if (e < 0) {
            for (; ++e; ) str = "0" + str;
            str = "0." + str;
          } else {
            if (++e > len) for (e -= len; e--; ) str += "0";
            else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
      }
      return x2.s < 0 ? "-" + str : str;
    }
    __name(toStringBinary, "toStringBinary");
    function truncate(arr, len) {
      if (arr.length > len) {
        arr.length = len;
        return true;
      }
    }
    __name(truncate, "truncate");
    function abs(x2) {
      return new this(x2).abs();
    }
    __name(abs, "abs");
    function acos(x2) {
      return new this(x2).acos();
    }
    __name(acos, "acos");
    function acosh(x2) {
      return new this(x2).acosh();
    }
    __name(acosh, "acosh");
    function add(x2, y) {
      return new this(x2).plus(y);
    }
    __name(add, "add");
    function asin(x2) {
      return new this(x2).asin();
    }
    __name(asin, "asin");
    function asinh(x2) {
      return new this(x2).asinh();
    }
    __name(asinh, "asinh");
    function atan(x2) {
      return new this(x2).atan();
    }
    __name(atan, "atan");
    function atanh(x2) {
      return new this(x2).atanh();
    }
    __name(atanh, "atanh");
    function atan2(y, x2) {
      y = new this(y);
      x2 = new this(x2);
      var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
      if (!y.s || !x2.s) {
        r = new this(NaN);
      } else if (!y.d && !x2.d) {
        r = getPi(this, wpr, 1).times(x2.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
      } else if (!x2.d || y.isZero()) {
        r = x2.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
      } else if (!y.d || x2.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
      } else if (x2.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x2, wpr, 1));
        x2 = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x2) : r.plus(x2);
      } else {
        r = this.atan(divide(y, x2, wpr, 1));
      }
      return r;
    }
    __name(atan2, "atan2");
    function cbrt(x2) {
      return new this(x2).cbrt();
    }
    __name(cbrt, "cbrt");
    function ceil(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 2);
    }
    __name(ceil, "ceil");
    function clamp(x2, min2, max2) {
      return new this(x2).clamp(min2, max2);
    }
    __name(clamp, "clamp");
    function config2(obj) {
      if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
      var i, p2, v, useDefaults = obj.defaults === true, ps = [
        "precision",
        1,
        MAX_DIGITS,
        "rounding",
        0,
        8,
        "toExpNeg",
        -EXP_LIMIT,
        0,
        "toExpPos",
        0,
        EXP_LIMIT,
        "maxE",
        0,
        EXP_LIMIT,
        "minE",
        -EXP_LIMIT,
        0,
        "modulo",
        0,
        9
      ];
      for (i = 0; i < ps.length; i += 3) {
        if (p2 = ps[i], useDefaults) this[p2] = DEFAULTS[p2];
        if ((v = obj[p2]) !== void 0) {
          if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p2] = v;
          else throw Error(invalidArgument + p2 + ": " + v);
        }
      }
      if (p2 = "crypto", useDefaults) this[p2] = DEFAULTS[p2];
      if ((v = obj[p2]) !== void 0) {
        if (v === true || v === false || v === 0 || v === 1) {
          if (v) {
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
              this[p2] = true;
            } else {
              throw Error(cryptoUnavailable);
            }
          } else {
            this[p2] = false;
          }
        } else {
          throw Error(invalidArgument + p2 + ": " + v);
        }
      }
      return this;
    }
    __name(config2, "config");
    function cos(x2) {
      return new this(x2).cos();
    }
    __name(cos, "cos");
    function cosh(x2) {
      return new this(x2).cosh();
    }
    __name(cosh, "cosh");
    function clone(obj) {
      var i, p2, ps;
      function Decimal22(v) {
        var e, i2, t, x2 = this;
        if (!(x2 instanceof Decimal22)) return new Decimal22(v);
        x2.constructor = Decimal22;
        if (isDecimalInstance(v)) {
          x2.s = v.s;
          if (external) {
            if (!v.d || v.e > Decimal22.maxE) {
              x2.e = NaN;
              x2.d = null;
            } else if (v.e < Decimal22.minE) {
              x2.e = 0;
              x2.d = [0];
            } else {
              x2.e = v.e;
              x2.d = v.d.slice();
            }
          } else {
            x2.e = v.e;
            x2.d = v.d ? v.d.slice() : v.d;
          }
          return;
        }
        t = typeof v;
        if (t === "number") {
          if (v === 0) {
            x2.s = 1 / v < 0 ? -1 : 1;
            x2.e = 0;
            x2.d = [0];
            return;
          }
          if (v < 0) {
            v = -v;
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          if (v === ~~v && v < 1e7) {
            for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
            if (external) {
              if (e > Decimal22.maxE) {
                x2.e = NaN;
                x2.d = null;
              } else if (e < Decimal22.minE) {
                x2.e = 0;
                x2.d = [0];
              } else {
                x2.e = e;
                x2.d = [v];
              }
            } else {
              x2.e = e;
              x2.d = [v];
            }
            return;
          }
          if (v * 0 !== 0) {
            if (!v) x2.s = NaN;
            x2.e = NaN;
            x2.d = null;
            return;
          }
          return parseDecimal(x2, v.toString());
        }
        if (t === "string") {
          if ((i2 = v.charCodeAt(0)) === 45) {
            v = v.slice(1);
            x2.s = -1;
          } else {
            if (i2 === 43) v = v.slice(1);
            x2.s = 1;
          }
          return isDecimal.test(v) ? parseDecimal(x2, v) : parseOther(x2, v);
        }
        if (t === "bigint") {
          if (v < 0) {
            v = -v;
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          return parseDecimal(x2, v.toString());
        }
        throw Error(invalidArgument + v);
      }
      __name(Decimal22, "Decimal2");
      Decimal22.prototype = P2;
      Decimal22.ROUND_UP = 0;
      Decimal22.ROUND_DOWN = 1;
      Decimal22.ROUND_CEIL = 2;
      Decimal22.ROUND_FLOOR = 3;
      Decimal22.ROUND_HALF_UP = 4;
      Decimal22.ROUND_HALF_DOWN = 5;
      Decimal22.ROUND_HALF_EVEN = 6;
      Decimal22.ROUND_HALF_CEIL = 7;
      Decimal22.ROUND_HALF_FLOOR = 8;
      Decimal22.EUCLID = 9;
      Decimal22.config = Decimal22.set = config2;
      Decimal22.clone = clone;
      Decimal22.isDecimal = isDecimalInstance;
      Decimal22.abs = abs;
      Decimal22.acos = acos;
      Decimal22.acosh = acosh;
      Decimal22.add = add;
      Decimal22.asin = asin;
      Decimal22.asinh = asinh;
      Decimal22.atan = atan;
      Decimal22.atanh = atanh;
      Decimal22.atan2 = atan2;
      Decimal22.cbrt = cbrt;
      Decimal22.ceil = ceil;
      Decimal22.clamp = clamp;
      Decimal22.cos = cos;
      Decimal22.cosh = cosh;
      Decimal22.div = div;
      Decimal22.exp = exp;
      Decimal22.floor = floor;
      Decimal22.hypot = hypot;
      Decimal22.ln = ln;
      Decimal22.log = log3;
      Decimal22.log10 = log10;
      Decimal22.log2 = log22;
      Decimal22.max = max;
      Decimal22.min = min;
      Decimal22.mod = mod;
      Decimal22.mul = mul;
      Decimal22.pow = pow;
      Decimal22.random = random;
      Decimal22.round = round;
      Decimal22.sign = sign;
      Decimal22.sin = sin;
      Decimal22.sinh = sinh;
      Decimal22.sqrt = sqrt;
      Decimal22.sub = sub;
      Decimal22.sum = sum;
      Decimal22.tan = tan;
      Decimal22.tanh = tanh;
      Decimal22.trunc = trunc;
      if (obj === void 0) obj = {};
      if (obj) {
        if (obj.defaults !== true) {
          ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
          for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p2 = ps[i++])) obj[p2] = this[p2];
        }
      }
      Decimal22.config(obj);
      return Decimal22;
    }
    __name(clone, "clone");
    function div(x2, y) {
      return new this(x2).div(y);
    }
    __name(div, "div");
    function exp(x2) {
      return new this(x2).exp();
    }
    __name(exp, "exp");
    function floor(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 3);
    }
    __name(floor, "floor");
    function hypot() {
      var i, n, t = new this(0);
      external = false;
      for (i = 0; i < arguments.length; ) {
        n = new this(arguments[i++]);
        if (!n.d) {
          if (n.s) {
            external = true;
            return new this(1 / 0);
          }
          t = n;
        } else if (t.d) {
          t = t.plus(n.times(n));
        }
      }
      external = true;
      return t.sqrt();
    }
    __name(hypot, "hypot");
    function isDecimalInstance(obj) {
      return obj instanceof Decimal2 || obj && obj.toStringTag === tag || false;
    }
    __name(isDecimalInstance, "isDecimalInstance");
    function ln(x2) {
      return new this(x2).ln();
    }
    __name(ln, "ln");
    function log3(x2, y) {
      return new this(x2).log(y);
    }
    __name(log3, "log");
    function log22(x2) {
      return new this(x2).log(2);
    }
    __name(log22, "log2");
    function log10(x2) {
      return new this(x2).log(10);
    }
    __name(log10, "log10");
    function max() {
      return maxOrMin(this, arguments, -1);
    }
    __name(max, "max");
    function min() {
      return maxOrMin(this, arguments, 1);
    }
    __name(min, "min");
    function mod(x2, y) {
      return new this(x2).mod(y);
    }
    __name(mod, "mod");
    function mul(x2, y) {
      return new this(x2).mul(y);
    }
    __name(mul, "mul");
    function pow(x2, y) {
      return new this(x2).pow(y);
    }
    __name(pow, "pow");
    function random(sd) {
      var d, e, k2, n, i = 0, r = new this(1), rd = [];
      if (sd === void 0) sd = this.precision;
      else checkInt32(sd, 1, MAX_DIGITS);
      k2 = Math.ceil(sd / LOG_BASE);
      if (!this.crypto) {
        for (; i < k2; ) rd[i++] = Math.random() * 1e7 | 0;
      } else if (crypto.getRandomValues) {
        d = crypto.getRandomValues(new Uint32Array(k2));
        for (; i < k2; ) {
          n = d[i];
          if (n >= 429e7) {
            d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
          } else {
            rd[i++] = n % 1e7;
          }
        }
      } else if (crypto.randomBytes) {
        d = crypto.randomBytes(k2 *= 4);
        for (; i < k2; ) {
          n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
          if (n >= 214e7) {
            crypto.randomBytes(4).copy(d, i);
          } else {
            rd.push(n % 1e7);
            i += 4;
          }
        }
        i = k2 / 4;
      } else {
        throw Error(cryptoUnavailable);
      }
      k2 = rd[--i];
      sd %= LOG_BASE;
      if (k2 && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k2 / n | 0) * n;
      }
      for (; rd[i] === 0; i--) rd.pop();
      if (i < 0) {
        e = 0;
        rd = [0];
      } else {
        e = -1;
        for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
        for (k2 = 1, n = rd[0]; n >= 10; n /= 10) k2++;
        if (k2 < LOG_BASE) e -= LOG_BASE - k2;
      }
      r.e = e;
      r.d = rd;
      return r;
    }
    __name(random, "random");
    function round(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, this.rounding);
    }
    __name(round, "round");
    function sign(x2) {
      x2 = new this(x2);
      return x2.d ? x2.d[0] ? x2.s : 0 * x2.s : x2.s || NaN;
    }
    __name(sign, "sign");
    function sin(x2) {
      return new this(x2).sin();
    }
    __name(sin, "sin");
    function sinh(x2) {
      return new this(x2).sinh();
    }
    __name(sinh, "sinh");
    function sqrt(x2) {
      return new this(x2).sqrt();
    }
    __name(sqrt, "sqrt");
    function sub(x2, y) {
      return new this(x2).sub(y);
    }
    __name(sub, "sub");
    function sum() {
      var i = 0, args = arguments, x2 = new this(args[i]);
      external = false;
      for (; x2.s && ++i < args.length; ) x2 = x2.plus(args[i]);
      external = true;
      return finalise(x2, this.precision, this.rounding);
    }
    __name(sum, "sum");
    function tan(x2) {
      return new this(x2).tan();
    }
    __name(tan, "tan");
    function tanh(x2) {
      return new this(x2).tanh();
    }
    __name(tanh, "tanh");
    function trunc(x2) {
      return finalise(x2 = new this(x2), x2.e + 1, 1);
    }
    __name(trunc, "trunc");
    P2[Symbol.for("nodejs.util.inspect.custom")] = P2.toString;
    P2[Symbol.toStringTag] = "Decimal";
    var Decimal2 = P2.constructor = clone(DEFAULTS);
    LN10 = new Decimal2(LN10);
    PI = new Decimal2(PI);
    var Sql2 = class _Sql {
      static {
        __name(this, "_Sql");
      }
      constructor(rawStrings, rawValues) {
        if (rawStrings.length - 1 !== rawValues.length) {
          if (rawStrings.length === 0) {
            throw new TypeError("Expected at least 1 string");
          }
          throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
        }
        const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
        this.values = new Array(valuesLength);
        this.strings = new Array(valuesLength + 1);
        this.strings[0] = rawStrings[0];
        let i = 0, pos = 0;
        while (i < rawValues.length) {
          const child = rawValues[i++];
          const rawString = rawStrings[i];
          if (child instanceof _Sql) {
            this.strings[pos] += child.strings[0];
            let childIndex = 0;
            while (childIndex < child.values.length) {
              this.values[pos++] = child.values[childIndex++];
              this.strings[pos] = child.strings[childIndex];
            }
            this.strings[pos] += rawString;
          } else {
            this.values[pos++] = child;
            this.strings[pos] = rawString;
          }
        }
      }
      get sql() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `?${this.strings[i++]}`;
        return value;
      }
      get statement() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `:${i}${this.strings[i++]}`;
        return value;
      }
      get text() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `$${i}${this.strings[i++]}`;
        return value;
      }
      inspect() {
        return {
          sql: this.sql,
          statement: this.statement,
          text: this.text,
          values: this.values
        };
      }
    };
    function join2(values, separator = ",", prefix = "", suffix = "") {
      if (values.length === 0) {
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      }
      return new Sql2([prefix, ...Array(values.length - 1).fill(separator), suffix], values);
    }
    __name(join2, "join");
    function raw3(value) {
      return new Sql2([value], []);
    }
    __name(raw3, "raw");
    var empty2 = raw3("");
    function sql(strings, ...values) {
      return new Sql2(strings, values);
    }
    __name(sql, "sql");
  }
});

// ../../node_modules/@prisma/client/runtime/wasm-compiler-edge.js
var require_wasm_compiler_edge = __commonJS({
  "../../node_modules/@prisma/client/runtime/wasm-compiler-edge.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var nu = Object.create;
    var pr = Object.defineProperty;
    var iu = Object.getOwnPropertyDescriptor;
    var ou = Object.getOwnPropertyNames;
    var su = Object.getPrototypeOf;
    var au = Object.prototype.hasOwnProperty;
    var fe = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "fe");
    var oe = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "oe");
    var Ye = /* @__PURE__ */ __name((e, t) => {
      for (var r in t) pr(e, r, { get: t[r], enumerable: true });
    }, "Ye");
    var Ui = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of ou(t)) !au.call(e, i) && i !== r && pr(e, i, { get: /* @__PURE__ */ __name(() => t[i], "get"), enumerable: !(n = iu(t, i)) || n.enumerable });
      return e;
    }, "Ui");
    var Ue = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? nu(su(e)) : {}, Ui(t || !e || !e.__esModule ? pr(r, "default", { value: e, enumerable: true }) : r, e)), "Ue");
    var $i = /* @__PURE__ */ __name((e) => Ui(pr({}, "__esModule", { value: true }), e), "$i");
    function xn(e, t) {
      if (t = t.toLowerCase(), t === "utf8" || t === "utf-8") return new h(pu.encode(e));
      if (t === "base64" || t === "base64url") return e = e.replace(/-/g, "+").replace(/_/g, "/"), e = e.replace(/[^A-Za-z0-9+/]/g, ""), new h([...atob(e)].map((r) => r.charCodeAt(0)));
      if (t === "binary" || t === "ascii" || t === "latin1" || t === "latin-1") return new h([...e].map((r) => r.charCodeAt(0)));
      if (t === "ucs2" || t === "ucs-2" || t === "utf16le" || t === "utf-16le") {
        let r = new h(e.length * 2), n = new DataView(r.buffer);
        for (let i = 0; i < e.length; i++) n.setUint16(i * 2, e.charCodeAt(i), true);
        return r;
      }
      if (t === "hex") {
        let r = new h(e.length / 2);
        for (let n = 0, i = 0; i < e.length; i += 2, n++) r[n] = parseInt(e.slice(i, i + 2), 16);
        return r;
      }
      Vi(`encoding "${t}"`);
    }
    __name(xn, "xn");
    function lu(e) {
      let r = Object.getOwnPropertyNames(DataView.prototype).filter((a) => a.startsWith("get") || a.startsWith("set")), n = r.map((a) => a.replace("get", "read").replace("set", "write")), i = /* @__PURE__ */ __name((a, d) => function(f2 = 0) {
        return H(f2, "offset"), ie(f2, "offset"), W(f2, "offset", this.length - 1), new DataView(this.buffer)[r[a]](f2, d);
      }, "i"), o = /* @__PURE__ */ __name((a, d) => function(f2, P2 = 0) {
        let A = r[a].match(/set(\w+\d+)/)[1].toLowerCase(), S2 = cu[A];
        return H(P2, "offset"), ie(P2, "offset"), W(P2, "offset", this.length - 1), uu(f2, "value", S2[0], S2[1]), new DataView(this.buffer)[r[a]](P2, f2, d), P2 + parseInt(r[a].match(/\d+/)[0]) / 8;
      }, "o"), s = /* @__PURE__ */ __name((a) => {
        a.forEach((d) => {
          d.includes("Uint") && (e[d.replace("Uint", "UInt")] = e[d]), d.includes("Float64") && (e[d.replace("Float64", "Double")] = e[d]), d.includes("Float32") && (e[d.replace("Float32", "Float")] = e[d]);
        });
      }, "s");
      n.forEach((a, d) => {
        a.startsWith("read") && (e[a] = i(d, false), e[a + "LE"] = i(d, true), e[a + "BE"] = i(d, false)), a.startsWith("write") && (e[a] = o(d, false), e[a + "LE"] = o(d, true), e[a + "BE"] = o(d, false)), s([a, a + "LE", a + "BE"]);
      });
    }
    __name(lu, "lu");
    function Vi(e) {
      throw new Error(`Buffer polyfill does not implement "${e}"`);
    }
    __name(Vi, "Vi");
    function mr(e, t) {
      if (!(e instanceof Uint8Array)) throw new TypeError(`The "${t}" argument must be an instance of Buffer or Uint8Array`);
    }
    __name(mr, "mr");
    function W(e, t, r = fu + 1) {
      if (e < 0 || e > r) {
        let n = new RangeError(`The value of "${t}" is out of range. It must be >= 0 && <= ${r}. Received ${e}`);
        throw n.code = "ERR_OUT_OF_RANGE", n;
      }
    }
    __name(W, "W");
    function H(e, t) {
      if (typeof e != "number") {
        let r = new TypeError(`The "${t}" argument must be of type number. Received type ${typeof e}.`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(H, "H");
    function ie(e, t) {
      if (!Number.isInteger(e) || Number.isNaN(e)) {
        let r = new RangeError(`The value of "${t}" is out of range. It must be an integer. Received ${e}`);
        throw r.code = "ERR_OUT_OF_RANGE", r;
      }
    }
    __name(ie, "ie");
    function uu(e, t, r, n) {
      if (e < r || e > n) {
        let i = new RangeError(`The value of "${t}" is out of range. It must be >= ${r} and <= ${n}. Received ${e}`);
        throw i.code = "ERR_OUT_OF_RANGE", i;
      }
    }
    __name(uu, "uu");
    function qi(e, t) {
      if (typeof e != "string") {
        let r = new TypeError(`The "${t}" argument must be of type string. Received type ${typeof e}`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(qi, "qi");
    function gu(e, t = "utf8") {
      return h.from(e, t);
    }
    __name(gu, "gu");
    var h;
    var cu;
    var pu;
    var mu;
    var du;
    var fu;
    var y;
    var En;
    var l2 = fe(() => {
      "use strict";
      h = class e extends Uint8Array {
        static {
          __name(this, "e");
        }
        _isBuffer = true;
        get offset() {
          return this.byteOffset;
        }
        static alloc(t, r = 0, n = "utf8") {
          return qi(n, "encoding"), e.allocUnsafe(t).fill(r, n);
        }
        static allocUnsafe(t) {
          return e.from(t);
        }
        static allocUnsafeSlow(t) {
          return e.from(t);
        }
        static isBuffer(t) {
          return t && !!t._isBuffer;
        }
        static byteLength(t, r = "utf8") {
          if (typeof t == "string") return xn(t, r).byteLength;
          if (t && t.byteLength) return t.byteLength;
          let n = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.');
          throw n.code = "ERR_INVALID_ARG_TYPE", n;
        }
        static isEncoding(t) {
          return du.includes(t);
        }
        static compare(t, r) {
          mr(t, "buff1"), mr(r, "buff2");
          for (let n = 0; n < t.length; n++) {
            if (t[n] < r[n]) return -1;
            if (t[n] > r[n]) return 1;
          }
          return t.length === r.length ? 0 : t.length > r.length ? 1 : -1;
        }
        static from(t, r = "utf8") {
          if (t && typeof t == "object" && t.type === "Buffer") return new e(t.data);
          if (typeof t == "number") return new e(new Uint8Array(t));
          if (typeof t == "string") return xn(t, r);
          if (ArrayBuffer.isView(t)) {
            let { byteOffset: n, byteLength: i, buffer: o } = t;
            return "map" in t && typeof t.map == "function" ? new e(t.map((s) => s % 256), n, i) : new e(o, n, i);
          }
          if (t && typeof t == "object" && ("length" in t || "byteLength" in t || "buffer" in t)) return new e(t);
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        static concat(t, r) {
          if (t.length === 0) return e.alloc(0);
          let n = [].concat(...t.map((o) => [...o])), i = e.alloc(r !== void 0 ? r : n.length);
          return i.set(r !== void 0 ? n.slice(0, r) : n), i;
        }
        slice(t = 0, r = this.length) {
          return this.subarray(t, r);
        }
        subarray(t = 0, r = this.length) {
          return Object.setPrototypeOf(super.subarray(t, r), e.prototype);
        }
        reverse() {
          return super.reverse(), this;
        }
        readIntBE(t, r) {
          H(t, "offset"), ie(t, "offset"), W(t, "offset", this.length - 1), H(r, "byteLength"), ie(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
          return n.getUint8(0) & 128 && (i -= Math.pow(256, r)), i;
        }
        readIntLE(t, r) {
          H(t, "offset"), ie(t, "offset"), W(t, "offset", this.length - 1), H(r, "byteLength"), ie(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
          return n.getUint8(r - 1) & 128 && (i -= Math.pow(256, r)), i;
        }
        readUIntBE(t, r) {
          H(t, "offset"), ie(t, "offset"), W(t, "offset", this.length - 1), H(r, "byteLength"), ie(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
          return i;
        }
        readUintBE(t, r) {
          return this.readUIntBE(t, r);
        }
        readUIntLE(t, r) {
          H(t, "offset"), ie(t, "offset"), W(t, "offset", this.length - 1), H(r, "byteLength"), ie(r, "byteLength");
          let n = new DataView(this.buffer, t, r), i = 0;
          for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
          return i;
        }
        readUintLE(t, r) {
          return this.readUIntLE(t, r);
        }
        writeIntBE(t, r, n) {
          return t = t < 0 ? t + Math.pow(256, n) : t, this.writeUIntBE(t, r, n);
        }
        writeIntLE(t, r, n) {
          return t = t < 0 ? t + Math.pow(256, n) : t, this.writeUIntLE(t, r, n);
        }
        writeUIntBE(t, r, n) {
          H(r, "offset"), ie(r, "offset"), W(r, "offset", this.length - 1), H(n, "byteLength"), ie(n, "byteLength");
          let i = new DataView(this.buffer, r, n);
          for (let o = n - 1; o >= 0; o--) i.setUint8(o, t & 255), t = t / 256;
          return r + n;
        }
        writeUintBE(t, r, n) {
          return this.writeUIntBE(t, r, n);
        }
        writeUIntLE(t, r, n) {
          H(r, "offset"), ie(r, "offset"), W(r, "offset", this.length - 1), H(n, "byteLength"), ie(n, "byteLength");
          let i = new DataView(this.buffer, r, n);
          for (let o = 0; o < n; o++) i.setUint8(o, t & 255), t = t / 256;
          return r + n;
        }
        writeUintLE(t, r, n) {
          return this.writeUIntLE(t, r, n);
        }
        toJSON() {
          return { type: "Buffer", data: Array.from(this) };
        }
        swap16() {
          let t = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 2) t.setUint16(r, t.getUint16(r, true), false);
          return this;
        }
        swap32() {
          let t = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 4) t.setUint32(r, t.getUint32(r, true), false);
          return this;
        }
        swap64() {
          let t = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 8) t.setBigUint64(r, t.getBigUint64(r, true), false);
          return this;
        }
        compare(t, r = 0, n = t.length, i = 0, o = this.length) {
          return mr(t, "target"), H(r, "targetStart"), H(n, "targetEnd"), H(i, "sourceStart"), H(o, "sourceEnd"), W(r, "targetStart"), W(n, "targetEnd", t.length), W(i, "sourceStart"), W(o, "sourceEnd", this.length), e.compare(this.slice(i, o), t.slice(r, n));
        }
        equals(t) {
          return mr(t, "otherBuffer"), this.length === t.length && this.every((r, n) => r === t[n]);
        }
        copy(t, r = 0, n = 0, i = this.length) {
          W(r, "targetStart"), W(n, "sourceStart", this.length), W(i, "sourceEnd"), r >>>= 0, n >>>= 0, i >>>= 0;
          let o = 0;
          for (; n < i && !(this[n] === void 0 || t[r] === void 0); ) t[r] = this[n], o++, n++, r++;
          return o;
        }
        write(t, r, n, i = "utf8") {
          let o = typeof r == "string" ? 0 : r ?? 0, s = typeof n == "string" ? this.length - o : n ?? this.length - o;
          return i = typeof r == "string" ? r : typeof n == "string" ? n : i, H(o, "offset"), H(s, "length"), W(o, "offset", this.length), W(s, "length", this.length), (i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le") && (s = s - s % 2), xn(t, i).copy(this, o, 0, s);
        }
        fill(t = 0, r = 0, n = this.length, i = "utf-8") {
          let o = typeof r == "string" ? 0 : r, s = typeof n == "string" ? this.length : n;
          if (i = typeof r == "string" ? r : typeof n == "string" ? n : i, t = e.from(typeof t == "number" ? [t] : t ?? [], i), qi(i, "encoding"), W(o, "offset", this.length), W(s, "end", this.length), t.length !== 0) for (let a = o; a < s; a += t.length) super.set(t.slice(0, t.length + a >= this.length ? this.length - a : t.length), a);
          return this;
        }
        includes(t, r = null, n = "utf-8") {
          return this.indexOf(t, r, n) !== -1;
        }
        lastIndexOf(t, r = null, n = "utf-8") {
          return this.indexOf(t, r, n, true);
        }
        indexOf(t, r = null, n = "utf-8", i = false) {
          let o = i ? this.findLastIndex.bind(this) : this.findIndex.bind(this);
          n = typeof r == "string" ? r : n;
          let s = e.from(typeof t == "number" ? [t] : t, n), a = typeof r == "string" ? 0 : r;
          return a = typeof r == "number" ? a : null, a = Number.isNaN(a) ? null : a, a ??= i ? this.length : 0, a = a < 0 ? this.length + a : a, s.length === 0 && i === false ? a >= this.length ? this.length : a : s.length === 0 && i === true ? (a >= this.length ? this.length : a) || this.length : o((d, f2) => (i ? f2 <= a : f2 >= a) && this[f2] === s[0] && s.every((A, S2) => this[f2 + S2] === A));
        }
        toString(t = "utf8", r = 0, n = this.length) {
          if (r = r < 0 ? 0 : r, t = t.toString().toLowerCase(), n <= 0) return "";
          if (t === "utf8" || t === "utf-8") return mu.decode(this.slice(r, n));
          if (t === "base64" || t === "base64url") {
            let i = btoa(this.reduce((o, s) => o + En(s), ""));
            return t === "base64url" ? i.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : i;
          }
          if (t === "binary" || t === "ascii" || t === "latin1" || t === "latin-1") return this.slice(r, n).reduce((i, o) => i + En(o & (t === "ascii" ? 127 : 255)), "");
          if (t === "ucs2" || t === "ucs-2" || t === "utf16le" || t === "utf-16le") {
            let i = new DataView(this.buffer.slice(r, n));
            return Array.from({ length: i.byteLength / 2 }, (o, s) => s * 2 + 1 < i.byteLength ? En(i.getUint16(s * 2, true)) : "").join("");
          }
          if (t === "hex") return this.slice(r, n).reduce((i, o) => i + o.toString(16).padStart(2, "0"), "");
          Vi(`encoding "${t}"`);
        }
        toLocaleString() {
          return this.toString();
        }
        inspect() {
          return `<Buffer ${this.toString("hex").match(/.{1,2}/g).join(" ")}>`;
        }
      };
      cu = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn], biguint64: [0n, 0xffffffffffffffffn] }, pu = new TextEncoder(), mu = new TextDecoder(), du = ["utf8", "utf-8", "hex", "base64", "ascii", "binary", "base64url", "ucs2", "ucs-2", "utf16le", "utf-16le", "latin1", "latin-1"], fu = 4294967295;
      lu(h.prototype);
      y = new Proxy(gu, { construct(e, [t, r]) {
        return h.from(t, r);
      }, get(e, t) {
        return h[t];
      } }), En = String.fromCodePoint;
    });
    var g;
    var x2;
    var u = fe(() => {
      "use strict";
      g = { nextTick: /* @__PURE__ */ __name((e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, "nextTick"), env: {}, version: "", cwd: /* @__PURE__ */ __name(() => "/", "cwd"), stderr: {}, argv: ["/bin/node"], pid: 1e4 }, { cwd: x2 } = g;
    });
    var w2;
    var c = fe(() => {
      "use strict";
      w2 = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: /* @__PURE__ */ __name(() => Date.now() - e, "now") };
      })();
    });
    var b2;
    var p2 = fe(() => {
      "use strict";
      b2 = /* @__PURE__ */ __name(() => {
      }, "b");
      b2.prototype = b2;
    });
    function Hi(e, t) {
      var r, n, i, o, s, a, d, f2, P2 = e.constructor, A = P2.precision;
      if (!e.s || !t.s) return t.s || (t = new P2(e)), B ? _(t, A) : t;
      if (d = e.d, f2 = t.d, s = e.e, i = t.e, d = d.slice(), o = s - i, o) {
        for (o < 0 ? (n = d, o = -o, a = f2.length) : (n = f2, i = s, a = d.length), s = Math.ceil(A / $), a = s > a ? s + 1 : a + 1, o > a && (o = a, n.length = 1), n.reverse(); o--; ) n.push(0);
        n.reverse();
      }
      for (a = d.length, o = f2.length, a - o < 0 && (o = a, n = f2, f2 = d, d = n), r = 0; o; ) r = (d[--o] = d[o] + f2[o] + r) / G | 0, d[o] %= G;
      for (r && (d.unshift(r), ++i), a = d.length; d[--a] == 0; ) d.pop();
      return t.d = d, t.e = i, B ? _(t, A) : t;
    }
    __name(Hi, "Hi");
    function ye(e, t, r) {
      if (e !== ~~e || e < t || e > r) throw Error(qe + e);
    }
    __name(ye, "ye");
    function ge(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++) n = e[t] + "", r = $ - n.length, r && (o += Re(r)), o += n;
        s = e[t], n = s + "", r = $ - n.length, r && (o += Re(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(ge, "ge");
    function Ji(e, t) {
      var r, n, i, o, s, a, d = 0, f2 = 0, P2 = e.constructor, A = P2.precision;
      if (J(e) > 16) throw Error(Pn + J(e));
      if (!e.s) return new P2(se);
      for (t == null ? (B = false, a = A) : a = t, s = new P2(0.03125); e.abs().gte(0.1); ) e = e.times(s), f2 += 5;
      for (n = Math.log($e(2, f2)) / Math.LN10 * 2 + 5 | 0, a += n, r = i = o = new P2(se), P2.precision = a; ; ) {
        if (i = _(i.times(e), a), r = r.times(++d), s = o.plus(Ae(i, r, a)), ge(s.d).slice(0, a) === ge(o.d).slice(0, a)) {
          for (; f2--; ) o = _(o.times(o), a);
          return P2.precision = A, t == null ? (B = true, _(o, A)) : o;
        }
        o = s;
      }
    }
    __name(Ji, "Ji");
    function J(e) {
      for (var t = e.e * $, r = e.d[0]; r >= 10; r /= 10) t++;
      return t;
    }
    __name(J, "J");
    function Tn(e, t, r) {
      if (t > e.LN10.sd()) throw B = true, r && (e.precision = r), Error(le + "LN10 precision limit exceeded");
      return _(new e(e.LN10), t);
    }
    __name(Tn, "Tn");
    function Re(e) {
      for (var t = ""; e--; ) t += "0";
      return t;
    }
    __name(Re, "Re");
    function Ct(e, t) {
      var r, n, i, o, s, a, d, f2, P2, A = 1, S2 = 10, C = e, M = C.d, R = C.constructor, k2 = R.precision;
      if (C.s < 1) throw Error(le + (C.s ? "NaN" : "-Infinity"));
      if (C.eq(se)) return new R(0);
      if (t == null ? (B = false, f2 = k2) : f2 = t, C.eq(10)) return t == null && (B = true), Tn(R, f2);
      if (f2 += S2, R.precision = f2, r = ge(M), n = r.charAt(0), o = J(C), Math.abs(o) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) C = C.times(e), r = ge(C.d), n = r.charAt(0), A++;
        o = J(C), n > 1 ? (C = new R("0." + r), o++) : C = new R(n + "." + r.slice(1));
      } else return d = Tn(R, f2 + 2, k2).times(o + ""), C = Ct(new R(n + "." + r.slice(1)), f2 - S2).plus(d), R.precision = k2, t == null ? (B = true, _(C, k2)) : C;
      for (a = s = C = Ae(C.minus(se), C.plus(se), f2), P2 = _(C.times(C), f2), i = 3; ; ) {
        if (s = _(s.times(P2), f2), d = a.plus(Ae(s, new R(i), f2)), ge(d.d).slice(0, f2) === ge(a.d).slice(0, f2)) return a = a.times(2), o !== 0 && (a = a.plus(Tn(R, f2 + 2, k2).times(o + ""))), a = Ae(a, new R(A), f2), R.precision = k2, t == null ? (B = true, _(a, k2)) : a;
        a = d, i += 2;
      }
    }
    __name(Ct, "Ct");
    function Bi(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
      for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
      if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = et(r / $), e.d = [], n = (r + 1) % $, r < 0 && (n += $), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= $; n < i; ) e.d.push(+t.slice(n, n += $));
          t = t.slice(n), n = $ - t.length;
        } else n -= i;
        for (; n--; ) t += "0";
        if (e.d.push(+t), B && (e.e > dr || e.e < -dr)) throw Error(Pn + r);
      } else e.s = 0, e.e = 0, e.d = [0];
      return e;
    }
    __name(Bi, "Bi");
    function _(e, t, r) {
      var n, i, o, s, a, d, f2, P2, A = e.d;
      for (s = 1, o = A[0]; o >= 10; o /= 10) s++;
      if (n = t - s, n < 0) n += $, i = t, f2 = A[P2 = 0];
      else {
        if (P2 = Math.ceil((n + 1) / $), o = A.length, P2 >= o) return e;
        for (f2 = o = A[P2], s = 1; o >= 10; o /= 10) s++;
        n %= $, i = n - $ + s;
      }
      if (r !== void 0 && (o = $e(10, s - i - 1), a = f2 / o % 10 | 0, d = t < 0 || A[P2 + 1] !== void 0 || f2 % o, d = r < 4 ? (a || d) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : a > 5 || a == 5 && (r == 4 || d || r == 6 && (n > 0 ? i > 0 ? f2 / $e(10, s - i) : 0 : A[P2 - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !A[0]) return d ? (o = J(e), A.length = 1, t = t - o - 1, A[0] = $e(10, ($ - t % $) % $), e.e = et(-t / $) || 0) : (A.length = 1, A[0] = e.e = e.s = 0), e;
      if (n == 0 ? (A.length = P2, o = 1, P2--) : (A.length = P2 + 1, o = $e(10, $ - n), A[P2] = i > 0 ? (f2 / $e(10, s - i) % $e(10, i) | 0) * o : 0), d) for (; ; ) if (P2 == 0) {
        (A[0] += o) == G && (A[0] = 1, ++e.e);
        break;
      } else {
        if (A[P2] += o, A[P2] != G) break;
        A[P2--] = 0, o = 1;
      }
      for (n = A.length; A[--n] === 0; ) A.pop();
      if (B && (e.e > dr || e.e < -dr)) throw Error(Pn + J(e));
      return e;
    }
    __name(_, "_");
    function Wi(e, t) {
      var r, n, i, o, s, a, d, f2, P2, A, S2 = e.constructor, C = S2.precision;
      if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new S2(e), B ? _(t, C) : t;
      if (d = e.d, A = t.d, n = t.e, f2 = e.e, d = d.slice(), s = f2 - n, s) {
        for (P2 = s < 0, P2 ? (r = d, s = -s, a = A.length) : (r = A, n = f2, a = d.length), i = Math.max(Math.ceil(C / $), a) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; ) r.push(0);
        r.reverse();
      } else {
        for (i = d.length, a = A.length, P2 = i < a, P2 && (a = i), i = 0; i < a; i++) if (d[i] != A[i]) {
          P2 = d[i] < A[i];
          break;
        }
        s = 0;
      }
      for (P2 && (r = d, d = A, A = r, t.s = -t.s), a = d.length, i = A.length - a; i > 0; --i) d[a++] = 0;
      for (i = A.length; i > s; ) {
        if (d[--i] < A[i]) {
          for (o = i; o && d[--o] === 0; ) d[o] = G - 1;
          --d[o], d[i] += G;
        }
        d[i] -= A[i];
      }
      for (; d[--a] === 0; ) d.pop();
      for (; d[0] === 0; d.shift()) --n;
      return d[0] ? (t.d = d, t.e = n, B ? _(t, C) : t) : new S2(0);
    }
    __name(Wi, "Wi");
    function Ve(e, t, r) {
      var n, i = J(e), o = ge(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Re(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Re(-i - 1) + o, r && (n = r - s) > 0 && (o += Re(n))) : i >= s ? (o += Re(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Re(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Re(n))), e.s < 0 ? "-" + o : o;
    }
    __name(Ve, "Ve");
    function ji(e, t) {
      if (e.length > t) return e.length = t, true;
    }
    __name(ji, "ji");
    function Gi(e) {
      var t, r, n;
      function i(o) {
        var s = this;
        if (!(s instanceof i)) return new i(o);
        if (s.constructor = i, o instanceof i) {
          s.s = o.s, s.e = o.e, s.d = (o = o.d) ? o.slice() : o;
          return;
        }
        if (typeof o == "number") {
          if (o * 0 !== 0) throw Error(qe + o);
          if (o > 0) s.s = 1;
          else if (o < 0) o = -o, s.s = -1;
          else {
            s.s = 0, s.e = 0, s.d = [0];
            return;
          }
          if (o === ~~o && o < 1e7) {
            s.e = 0, s.d = [o];
            return;
          }
          return Bi(s, o.toString());
        } else if (typeof o != "string") throw Error(qe + o);
        if (o.charCodeAt(0) === 45 ? (o = o.slice(1), s.s = -1) : s.s = 1, hu.test(o)) Bi(s, o);
        else throw Error(qe + o);
      }
      __name(i, "i");
      if (i.prototype = v, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Gi, i.config = i.set = wu, e === void 0 && (e = {}), e) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(Gi, "Gi");
    function wu(e) {
      if (!e || typeof e != "object") throw Error(le + "Object expected");
      var t, r, n, i = ["precision", 1, Xe, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (t = 0; t < i.length; t += 3) if ((n = e[r = i[t]]) !== void 0) if (et(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(qe + r + ": " + n);
      if ((n = e[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
      else throw Error(qe + r + ": " + n);
      return this;
    }
    __name(wu, "wu");
    var Xe;
    var yu;
    var Ki;
    var B;
    var le;
    var qe;
    var Pn;
    var et;
    var $e;
    var hu;
    var se;
    var G;
    var $;
    var Qi;
    var dr;
    var v;
    var Ae;
    var Ki;
    var zi = fe(() => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Xe = 1e9, yu = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, B = true, le = "[DecimalError] ", qe = le + "Invalid argument: ", Pn = le + "Exponent out of range: ", et = Math.floor, $e = Math.pow, hu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, G = 1e7, $ = 7, Qi = 9007199254740991, dr = et(Qi / $), v = {};
      v.absoluteValue = v.abs = function() {
        var e = new this.constructor(this);
        return e.s && (e.s = 1), e;
      };
      v.comparedTo = v.cmp = function(e) {
        var t, r, n, i, o = this;
        if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
        if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
        for (n = o.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
        return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
      };
      v.decimalPlaces = v.dp = function() {
        var e = this, t = e.d.length - 1, r = (t - e.e) * $;
        if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
        return r < 0 ? 0 : r;
      };
      v.dividedBy = v.div = function(e) {
        return Ae(this, new this.constructor(e));
      };
      v.dividedToIntegerBy = v.idiv = function(e) {
        var t = this, r = t.constructor;
        return _(Ae(t, new r(e), 0, 1), r.precision);
      };
      v.equals = v.eq = function(e) {
        return !this.cmp(e);
      };
      v.exponent = function() {
        return J(this);
      };
      v.greaterThan = v.gt = function(e) {
        return this.cmp(e) > 0;
      };
      v.greaterThanOrEqualTo = v.gte = function(e) {
        return this.cmp(e) >= 0;
      };
      v.isInteger = v.isint = function() {
        return this.e > this.d.length - 2;
      };
      v.isNegative = v.isneg = function() {
        return this.s < 0;
      };
      v.isPositive = v.ispos = function() {
        return this.s > 0;
      };
      v.isZero = function() {
        return this.s === 0;
      };
      v.lessThan = v.lt = function(e) {
        return this.cmp(e) < 0;
      };
      v.lessThanOrEqualTo = v.lte = function(e) {
        return this.cmp(e) < 1;
      };
      v.logarithm = v.log = function(e) {
        var t, r = this, n = r.constructor, i = n.precision, o = i + 5;
        if (e === void 0) e = new n(10);
        else if (e = new n(e), e.s < 1 || e.eq(se)) throw Error(le + "NaN");
        if (r.s < 1) throw Error(le + (r.s ? "NaN" : "-Infinity"));
        return r.eq(se) ? new n(0) : (B = false, t = Ae(Ct(r, o), Ct(e, o), o), B = true, _(t, i));
      };
      v.minus = v.sub = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? Wi(t, e) : Hi(t, (e.s = -e.s, e));
      };
      v.modulo = v.mod = function(e) {
        var t, r = this, n = r.constructor, i = n.precision;
        if (e = new n(e), !e.s) throw Error(le + "NaN");
        return r.s ? (B = false, t = Ae(r, e, 0, 1).times(e), B = true, r.minus(t)) : _(new n(r), i);
      };
      v.naturalExponential = v.exp = function() {
        return Ji(this);
      };
      v.naturalLogarithm = v.ln = function() {
        return Ct(this);
      };
      v.negated = v.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s || 0, e;
      };
      v.plus = v.add = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? Hi(t, e) : Wi(t, (e.s = -e.s, e));
      };
      v.precision = v.sd = function(e) {
        var t, r, n, i = this;
        if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(qe + e);
        if (t = J(i) + 1, n = i.d.length - 1, r = n * $ + 1, n = i.d[n], n) {
          for (; n % 10 == 0; n /= 10) r--;
          for (n = i.d[0]; n >= 10; n /= 10) r++;
        }
        return e && t > r ? t : r;
      };
      v.squareRoot = v.sqrt = function() {
        var e, t, r, n, i, o, s, a = this, d = a.constructor;
        if (a.s < 1) {
          if (!a.s) return new d(0);
          throw Error(le + "NaN");
        }
        for (e = J(a), B = false, i = Math.sqrt(+a), i == 0 || i == 1 / 0 ? (t = ge(a.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = et((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new d(t)) : n = new d(i.toString()), r = d.precision, i = s = r + 3; ; ) if (o = n, n = o.plus(Ae(a, o, s + 2)).times(0.5), ge(o.d).slice(0, s) === (t = ge(n.d)).slice(0, s)) {
          if (t = t.slice(s - 3, s + 1), i == s && t == "4999") {
            if (_(o, r + 1, 0), o.times(o).eq(a)) {
              n = o;
              break;
            }
          } else if (t != "9999") break;
          s += 4;
        }
        return B = true, _(n, r);
      };
      v.times = v.mul = function(e) {
        var t, r, n, i, o, s, a, d, f2, P2 = this, A = P2.constructor, S2 = P2.d, C = (e = new A(e)).d;
        if (!P2.s || !e.s) return new A(0);
        for (e.s *= P2.s, r = P2.e + e.e, d = S2.length, f2 = C.length, d < f2 && (o = S2, S2 = C, C = o, s = d, d = f2, f2 = s), o = [], s = d + f2, n = s; n--; ) o.push(0);
        for (n = f2; --n >= 0; ) {
          for (t = 0, i = d + n; i > n; ) a = o[i] + C[n] * S2[i - n - 1] + t, o[i--] = a % G | 0, t = a / G | 0;
          o[i] = (o[i] + t) % G | 0;
        }
        for (; !o[--s]; ) o.pop();
        return t ? ++r : o.shift(), e.d = o, e.e = r, B ? _(e, A.precision) : e;
      };
      v.toDecimalPlaces = v.todp = function(e, t) {
        var r = this, n = r.constructor;
        return r = new n(r), e === void 0 ? r : (ye(e, 0, Xe), t === void 0 ? t = n.rounding : ye(t, 0, 8), _(r, e + J(r) + 1, t));
      };
      v.toExponential = function(e, t) {
        var r, n = this, i = n.constructor;
        return e === void 0 ? r = Ve(n, true) : (ye(e, 0, Xe), t === void 0 ? t = i.rounding : ye(t, 0, 8), n = _(new i(n), e + 1, t), r = Ve(n, true, e + 1)), r;
      };
      v.toFixed = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? Ve(i) : (ye(e, 0, Xe), t === void 0 ? t = o.rounding : ye(t, 0, 8), n = _(new o(i), e + J(i) + 1, t), r = Ve(n.abs(), false, e + J(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
      };
      v.toInteger = v.toint = function() {
        var e = this, t = e.constructor;
        return _(new t(e), J(e) + 1, t.rounding);
      };
      v.toNumber = function() {
        return +this;
      };
      v.toPower = v.pow = function(e) {
        var t, r, n, i, o, s, a = this, d = a.constructor, f2 = 12, P2 = +(e = new d(e));
        if (!e.s) return new d(se);
        if (a = new d(a), !a.s) {
          if (e.s < 1) throw Error(le + "Infinity");
          return a;
        }
        if (a.eq(se)) return a;
        if (n = d.precision, e.eq(se)) return _(a, n);
        if (t = e.e, r = e.d.length - 1, s = t >= r, o = a.s, s) {
          if ((r = P2 < 0 ? -P2 : P2) <= Qi) {
            for (i = new d(se), t = Math.ceil(n / $ + 4), B = false; r % 2 && (i = i.times(a), ji(i.d, t)), r = et(r / 2), r !== 0; ) a = a.times(a), ji(a.d, t);
            return B = true, e.s < 0 ? new d(se).div(i) : _(i, n);
          }
        } else if (o < 0) throw Error(le + "NaN");
        return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, a.s = 1, B = false, i = e.times(Ct(a, n + f2)), B = true, i = Ji(i), i.s = o, i;
      };
      v.toPrecision = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? (r = J(i), n = Ve(i, r <= o.toExpNeg || r >= o.toExpPos)) : (ye(e, 1, Xe), t === void 0 ? t = o.rounding : ye(t, 0, 8), i = _(new o(i), e, t), r = J(i), n = Ve(i, e <= r || r <= o.toExpNeg, e)), n;
      };
      v.toSignificantDigits = v.tosd = function(e, t) {
        var r = this, n = r.constructor;
        return e === void 0 ? (e = n.precision, t = n.rounding) : (ye(e, 1, Xe), t === void 0 ? t = n.rounding : ye(t, 0, 8)), _(new n(r), e, t);
      };
      v.toString = v.valueOf = v.val = v.toJSON = v[Symbol.for("nodejs.util.inspect.custom")] = function() {
        var e = this, t = J(e), r = e.constructor;
        return Ve(e, t <= r.toExpNeg || t >= r.toExpPos);
      };
      Ae = /* @__PURE__ */ (function() {
        function e(n, i) {
          var o, s = 0, a = n.length;
          for (n = n.slice(); a--; ) o = n[a] * i + s, n[a] = o % G | 0, s = o / G | 0;
          return s && n.unshift(s), n;
        }
        __name(e, "e");
        function t(n, i, o, s) {
          var a, d;
          if (o != s) d = o > s ? 1 : -1;
          else for (a = d = 0; a < o; a++) if (n[a] != i[a]) {
            d = n[a] > i[a] ? 1 : -1;
            break;
          }
          return d;
        }
        __name(t, "t");
        function r(n, i, o) {
          for (var s = 0; o--; ) n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * G + n[o] - i[o];
          for (; !n[0] && n.length > 1; ) n.shift();
        }
        __name(r, "r");
        return function(n, i, o, s) {
          var a, d, f2, P2, A, S2, C, M, R, k2, Pe, re, F2, ne, Fe, bn, ce, ur, cr = n.constructor, ru = n.s == i.s ? 1 : -1, de = n.d, Q = i.d;
          if (!n.s) return new cr(n);
          if (!i.s) throw Error(le + "Division by zero");
          for (d = n.e - i.e, ce = Q.length, Fe = de.length, C = new cr(ru), M = C.d = [], f2 = 0; Q[f2] == (de[f2] || 0); ) ++f2;
          if (Q[f2] > (de[f2] || 0) && --d, o == null ? re = o = cr.precision : s ? re = o + (J(n) - J(i)) + 1 : re = o, re < 0) return new cr(0);
          if (re = re / $ + 2 | 0, f2 = 0, ce == 1) for (P2 = 0, Q = Q[0], re++; (f2 < Fe || P2) && re--; f2++) F2 = P2 * G + (de[f2] || 0), M[f2] = F2 / Q | 0, P2 = F2 % Q | 0;
          else {
            for (P2 = G / (Q[0] + 1) | 0, P2 > 1 && (Q = e(Q, P2), de = e(de, P2), ce = Q.length, Fe = de.length), ne = ce, R = de.slice(0, ce), k2 = R.length; k2 < ce; ) R[k2++] = 0;
            ur = Q.slice(), ur.unshift(0), bn = Q[0], Q[1] >= G / 2 && ++bn;
            do
              P2 = 0, a = t(Q, R, ce, k2), a < 0 ? (Pe = R[0], ce != k2 && (Pe = Pe * G + (R[1] || 0)), P2 = Pe / bn | 0, P2 > 1 ? (P2 >= G && (P2 = G - 1), A = e(Q, P2), S2 = A.length, k2 = R.length, a = t(A, R, S2, k2), a == 1 && (P2--, r(A, ce < S2 ? ur : Q, S2))) : (P2 == 0 && (a = P2 = 1), A = Q.slice()), S2 = A.length, S2 < k2 && A.unshift(0), r(R, A, k2), a == -1 && (k2 = R.length, a = t(Q, R, ce, k2), a < 1 && (P2++, r(R, ce < k2 ? ur : Q, k2))), k2 = R.length) : a === 0 && (P2++, R = [0]), M[f2++] = P2, a && R[0] ? R[k2++] = de[ne] || 0 : (R = [de[ne]], k2 = 1);
            while ((ne++ < Fe || R[0] !== void 0) && re--);
          }
          return M[0] || M.shift(), C.e = d, _(C, s ? o + J(C) + 1 : o);
        };
      })();
      Ki = Gi(yu);
      se = new Ki(1);
    });
    var m = fe(() => {
      "use strict";
      zi();
    });
    var In = {};
    Ye(In, { Hash: /* @__PURE__ */ __name(() => Ot, "Hash"), createHash: /* @__PURE__ */ __name(() => yo, "createHash"), default: /* @__PURE__ */ __name(() => rt, "default"), randomFillSync: /* @__PURE__ */ __name(() => wr, "randomFillSync"), randomUUID: /* @__PURE__ */ __name(() => hr, "randomUUID"), webcrypto: /* @__PURE__ */ __name(() => kt, "webcrypto") });
    function hr() {
      return globalThis.crypto.randomUUID();
    }
    __name(hr, "hr");
    function wr(e, t, r) {
      return t !== void 0 && (r !== void 0 ? e = e.subarray(t, t + r) : e = e.subarray(t)), globalThis.crypto.getRandomValues(e);
    }
    __name(wr, "wr");
    function yo(e) {
      return new Ot(e);
    }
    __name(yo, "yo");
    var kt;
    var Ot;
    var rt;
    var Be = fe(() => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      kt = globalThis.crypto;
      Ot = class {
        static {
          __name(this, "Ot");
        }
        #t = [];
        #e;
        constructor(t) {
          this.#e = t;
        }
        update(t) {
          this.#t.push(t);
        }
        async digest() {
          let t = new Uint8Array(this.#t.reduce((i, o) => i + o.length, 0)), r = 0;
          for (let i of this.#t) t.set(i, r), r += i.length;
          let n = await globalThis.crypto.subtle.digest(this.#e, t);
          return new Uint8Array(n);
        }
      }, rt = { webcrypto: kt, randomUUID: hr, randomFillSync: wr, createHash: yo, Hash: Ot };
    });
    var ho = oe(() => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
    });
    var wo = oe((jg, Au) => {
      Au.exports = { name: "@prisma/engines-version", version: "7.1.0-6.ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var bo = oe((br) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Object.defineProperty(br, "__esModule", { value: true });
      br.enginesVersion = void 0;
      br.enginesVersion = wo().prisma.enginesVersion;
    });
    var Po = oe((ry, To) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      To.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var vo = oe((Dy, Er) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Er.exports = (e = {}) => {
        let t;
        if (e.repoUrl) t = e.repoUrl;
        else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Er.exports.default = Er.exports;
    });
    var _n = oe((Ew, Ro) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Ro.exports = /* @__PURE__ */ (function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, d, f2, P2, A, S2, C, M, R, k2, Pe, re, F2, ne = [];
          for (d = 0; d < i; d++) ne.push(d + 1), ne.push(t.charCodeAt(s + d));
          for (var Fe = ne.length - 1; a < o - 3; ) for (k2 = r.charCodeAt(s + (f2 = a)), Pe = r.charCodeAt(s + (P2 = a + 1)), re = r.charCodeAt(s + (A = a + 2)), F2 = r.charCodeAt(s + (S2 = a + 3)), C = a += 4, d = 0; d < Fe; d += 2) M = ne[d], R = ne[d + 1], f2 = e(M, f2, P2, k2, R), P2 = e(f2, P2, A, Pe, R), A = e(P2, A, S2, re, R), C = e(A, S2, C, F2, R), ne[d] = C, S2 = A, A = P2, P2 = f2, f2 = M;
          for (; a < o; ) for (k2 = r.charCodeAt(s + (f2 = a)), C = ++a, d = 0; d < Fe; d += 2) M = ne[d], ne[d] = C = e(M, f2, C, k2, ne[d + 1]), f2 = M;
          return C;
        };
      })();
    });
    var Do = fe(() => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
    });
    var No = fe(() => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
    });
    var $r;
    var os = fe(() => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      $r = class {
        static {
          __name(this, "$r");
        }
        events = {};
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var ri = oe((Je) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Object.defineProperty(Je, "__esModule", { value: true });
      Je.anumber = ti;
      Je.abytes = Gs;
      Je.ahash = ip;
      Je.aexists = op;
      Je.aoutput = sp;
      function ti(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
      }
      __name(ti, "ti");
      function np(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      __name(np, "np");
      function Gs(e, ...t) {
        if (!np(e)) throw new Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
      }
      __name(Gs, "Gs");
      function ip(e) {
        if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
        ti(e.outputLen), ti(e.blockLen);
      }
      __name(ip, "ip");
      function op(e, t = true) {
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished) throw new Error("Hash#digest() has already been called");
      }
      __name(op, "op");
      function sp(e, t) {
        Gs(e);
        let r = t.outputLen;
        if (e.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
      }
      __name(sp, "sp");
    });
    var ya = oe((O) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Object.defineProperty(O, "__esModule", { value: true });
      O.add5L = O.add5H = O.add4H = O.add4L = O.add3H = O.add3L = O.rotlBL = O.rotlBH = O.rotlSL = O.rotlSH = O.rotr32L = O.rotr32H = O.rotrBL = O.rotrBH = O.rotrSL = O.rotrSH = O.shrSL = O.shrSH = O.toBig = void 0;
      O.fromBig = ii;
      O.split = Ks;
      O.add = ua;
      var Gr = BigInt(2 ** 32 - 1), ni = BigInt(32);
      function ii(e, t = false) {
        return t ? { h: Number(e & Gr), l: Number(e >> ni & Gr) } : { h: Number(e >> ni & Gr) | 0, l: Number(e & Gr) | 0 };
      }
      __name(ii, "ii");
      function Ks(e, t = false) {
        let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: o, l: s } = ii(e[i], t);
          [r[i], n[i]] = [o, s];
        }
        return [r, n];
      }
      __name(Ks, "Ks");
      var zs = /* @__PURE__ */ __name((e, t) => BigInt(e >>> 0) << ni | BigInt(t >>> 0), "zs");
      O.toBig = zs;
      var Zs = /* @__PURE__ */ __name((e, t, r) => e >>> r, "Zs");
      O.shrSH = Zs;
      var Ys = /* @__PURE__ */ __name((e, t, r) => e << 32 - r | t >>> r, "Ys");
      O.shrSL = Ys;
      var Xs = /* @__PURE__ */ __name((e, t, r) => e >>> r | t << 32 - r, "Xs");
      O.rotrSH = Xs;
      var ea = /* @__PURE__ */ __name((e, t, r) => e << 32 - r | t >>> r, "ea");
      O.rotrSL = ea;
      var ta = /* @__PURE__ */ __name((e, t, r) => e << 64 - r | t >>> r - 32, "ta");
      O.rotrBH = ta;
      var ra = /* @__PURE__ */ __name((e, t, r) => e >>> r - 32 | t << 64 - r, "ra");
      O.rotrBL = ra;
      var na = /* @__PURE__ */ __name((e, t) => t, "na");
      O.rotr32H = na;
      var ia = /* @__PURE__ */ __name((e, t) => e, "ia");
      O.rotr32L = ia;
      var oa = /* @__PURE__ */ __name((e, t, r) => e << r | t >>> 32 - r, "oa");
      O.rotlSH = oa;
      var sa = /* @__PURE__ */ __name((e, t, r) => t << r | e >>> 32 - r, "sa");
      O.rotlSL = sa;
      var aa = /* @__PURE__ */ __name((e, t, r) => t << r - 32 | e >>> 64 - r, "aa");
      O.rotlBH = aa;
      var la = /* @__PURE__ */ __name((e, t, r) => e << r - 32 | t >>> 64 - r, "la");
      O.rotlBL = la;
      function ua(e, t, r, n) {
        let i = (t >>> 0) + (n >>> 0);
        return { h: e + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
      }
      __name(ua, "ua");
      var ca = /* @__PURE__ */ __name((e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0), "ca");
      O.add3L = ca;
      var pa = /* @__PURE__ */ __name((e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0, "pa");
      O.add3H = pa;
      var ma = /* @__PURE__ */ __name((e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0), "ma");
      O.add4L = ma;
      var da = /* @__PURE__ */ __name((e, t, r, n, i) => t + r + n + i + (e / 2 ** 32 | 0) | 0, "da");
      O.add4H = da;
      var fa = /* @__PURE__ */ __name((e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0), "fa");
      O.add5L = fa;
      var ga = /* @__PURE__ */ __name((e, t, r, n, i, o) => t + r + n + i + o + (e / 2 ** 32 | 0) | 0, "ga");
      O.add5H = ga;
      var ap = { fromBig: ii, split: Ks, toBig: zs, shrSH: Zs, shrSL: Ys, rotrSH: Xs, rotrSL: ea, rotrBH: ta, rotrBL: ra, rotr32H: na, rotr32L: ia, rotlSH: oa, rotlSL: sa, rotlBH: aa, rotlBL: la, add: ua, add3L: ca, add3H: pa, add4L: ma, add4H: da, add5H: ga, add5L: fa };
      O.default = ap;
    });
    var ha = oe((Kr) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Object.defineProperty(Kr, "__esModule", { value: true });
      Kr.crypto = void 0;
      var Ne = (Be(), $i(In));
      Kr.crypto = Ne && typeof Ne == "object" && "webcrypto" in Ne ? Ne.webcrypto : Ne && typeof Ne == "object" && "randomBytes" in Ne ? Ne : void 0;
    });
    var xa = oe((N) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Object.defineProperty(N, "__esModule", { value: true });
      N.Hash = N.nextTick = N.byteSwapIfBE = N.isLE = void 0;
      N.isBytes = lp;
      N.u8 = up;
      N.u32 = cp;
      N.createView = pp;
      N.rotr = mp;
      N.rotl = dp;
      N.byteSwap = ai;
      N.byteSwap32 = fp;
      N.bytesToHex = yp;
      N.hexToBytes = hp;
      N.asyncLoop = bp;
      N.utf8ToBytes = ba;
      N.toBytes = zr;
      N.concatBytes = xp;
      N.checkOpts = Ep;
      N.wrapConstructor = Tp;
      N.wrapConstructorWithOpts = Pp;
      N.wrapXOFConstructorWithOpts = Ap;
      N.randomBytes = vp;
      var wt = ha(), si = ri();
      function lp(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      __name(lp, "lp");
      function up(e) {
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      __name(up, "up");
      function cp(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      __name(cp, "cp");
      function pp(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      __name(pp, "pp");
      function mp(e, t) {
        return e << 32 - t | e >>> t;
      }
      __name(mp, "mp");
      function dp(e, t) {
        return e << t | e >>> 32 - t >>> 0;
      }
      __name(dp, "dp");
      N.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
      function ai(e) {
        return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
      }
      __name(ai, "ai");
      N.byteSwapIfBE = N.isLE ? (e) => e : (e) => ai(e);
      function fp(e) {
        for (let t = 0; t < e.length; t++) e[t] = ai(e[t]);
      }
      __name(fp, "fp");
      var gp = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      function yp(e) {
        (0, si.abytes)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += gp[e[r]];
        return t;
      }
      __name(yp, "yp");
      var Ce = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function wa(e) {
        if (e >= Ce._0 && e <= Ce._9) return e - Ce._0;
        if (e >= Ce.A && e <= Ce.F) return e - (Ce.A - 10);
        if (e >= Ce.a && e <= Ce.f) return e - (Ce.a - 10);
      }
      __name(wa, "wa");
      function hp(e) {
        if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
        let t = e.length, r = t / 2;
        if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let i = 0, o = 0; i < r; i++, o += 2) {
          let s = wa(e.charCodeAt(o)), a = wa(e.charCodeAt(o + 1));
          if (s === void 0 || a === void 0) {
            let d = e[o] + e[o + 1];
            throw new Error('hex string expected, got non-hex character "' + d + '" at index ' + o);
          }
          n[i] = s * 16 + a;
        }
        return n;
      }
      __name(hp, "hp");
      var wp = /* @__PURE__ */ __name(async () => {
      }, "wp");
      N.nextTick = wp;
      async function bp(e, t, r) {
        let n = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          let o = Date.now() - n;
          o >= 0 && o < t || (await (0, N.nextTick)(), n += o);
        }
      }
      __name(bp, "bp");
      function ba(e) {
        if (typeof e != "string") throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      __name(ba, "ba");
      function zr(e) {
        return typeof e == "string" && (e = ba(e)), (0, si.abytes)(e), e;
      }
      __name(zr, "zr");
      function xp(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          (0, si.abytes)(i), t += i.length;
        }
        let r = new Uint8Array(t);
        for (let n = 0, i = 0; n < e.length; n++) {
          let o = e[n];
          r.set(o, i), i += o.length;
        }
        return r;
      }
      __name(xp, "xp");
      var oi = class {
        static {
          __name(this, "oi");
        }
        clone() {
          return this._cloneInto();
        }
      };
      N.Hash = oi;
      function Ep(e, t) {
        if (t !== void 0 && {}.toString.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
        return Object.assign(e, t);
      }
      __name(Ep, "Ep");
      function Tp(e) {
        let t = /* @__PURE__ */ __name((n) => e().update(zr(n)).digest(), "t"), r = e();
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
      }
      __name(Tp, "Tp");
      function Pp(e) {
        let t = /* @__PURE__ */ __name((n, i) => e(i).update(zr(n)).digest(), "t"), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      __name(Pp, "Pp");
      function Ap(e) {
        let t = /* @__PURE__ */ __name((n, i) => e(i).update(zr(n)).digest(), "t"), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      __name(Ap, "Ap");
      function vp(e = 32) {
        if (wt.crypto && typeof wt.crypto.getRandomValues == "function") return wt.crypto.getRandomValues(new Uint8Array(e));
        if (wt.crypto && typeof wt.crypto.randomBytes == "function") return wt.crypto.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
      }
      __name(vp, "vp");
    });
    var Ra = oe((V) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      Object.defineProperty(V, "__esModule", { value: true });
      V.shake256 = V.shake128 = V.keccak_512 = V.keccak_384 = V.keccak_256 = V.keccak_224 = V.sha3_512 = V.sha3_384 = V.sha3_256 = V.sha3_224 = V.Keccak = void 0;
      V.keccakP = Ca;
      var bt = ri(), zt = ya(), Se = xa(), Pa = [], Aa = [], va = [], Cp = BigInt(0), Kt = BigInt(1), Sp = BigInt(2), Rp = BigInt(7), Ip = BigInt(256), Op = BigInt(113);
      for (let e = 0, t = Kt, r = 1, n = 0; e < 24; e++) {
        [r, n] = [n, (2 * r + 3 * n) % 5], Pa.push(2 * (5 * n + r)), Aa.push((e + 1) * (e + 2) / 2 % 64);
        let i = Cp;
        for (let o = 0; o < 7; o++) t = (t << Kt ^ (t >> Rp) * Op) % Ip, t & Sp && (i ^= Kt << (Kt << BigInt(o)) - Kt);
        va.push(i);
      }
      var [kp, Mp] = (0, zt.split)(va, true), Ea = /* @__PURE__ */ __name((e, t, r) => r > 32 ? (0, zt.rotlBH)(e, t, r) : (0, zt.rotlSH)(e, t, r), "Ea"), Ta = /* @__PURE__ */ __name((e, t, r) => r > 32 ? (0, zt.rotlBL)(e, t, r) : (0, zt.rotlSL)(e, t, r), "Ta");
      function Ca(e, t = 24) {
        let r = new Uint32Array(10);
        for (let n = 24 - t; n < 24; n++) {
          for (let s = 0; s < 10; s++) r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
          for (let s = 0; s < 10; s += 2) {
            let a = (s + 8) % 10, d = (s + 2) % 10, f2 = r[d], P2 = r[d + 1], A = Ea(f2, P2, 1) ^ r[a], S2 = Ta(f2, P2, 1) ^ r[a + 1];
            for (let C = 0; C < 50; C += 10) e[s + C] ^= A, e[s + C + 1] ^= S2;
          }
          let i = e[2], o = e[3];
          for (let s = 0; s < 24; s++) {
            let a = Aa[s], d = Ea(i, o, a), f2 = Ta(i, o, a), P2 = Pa[s];
            i = e[P2], o = e[P2 + 1], e[P2] = d, e[P2 + 1] = f2;
          }
          for (let s = 0; s < 50; s += 10) {
            for (let a = 0; a < 10; a++) r[a] = e[s + a];
            for (let a = 0; a < 10; a++) e[s + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
          }
          e[0] ^= kp[n], e[1] ^= Mp[n];
        }
        r.fill(0);
      }
      __name(Ca, "Ca");
      var Zt = class e extends Se.Hash {
        static {
          __name(this, "e");
        }
        constructor(t, r, n, i = false, o = 24) {
          if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, (0, bt.anumber)(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200), this.state32 = (0, Se.u32)(this.state);
        }
        keccak() {
          Se.isLE || (0, Se.byteSwap32)(this.state32), Ca(this.state32, this.rounds), Se.isLE || (0, Se.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
        }
        update(t) {
          (0, bt.aexists)(this);
          let { blockLen: r, state: n } = this;
          t = (0, Se.toBytes)(t);
          let i = t.length;
          for (let o = 0; o < i; ) {
            let s = Math.min(r - this.pos, i - o);
            for (let a = 0; a < s; a++) n[this.pos++] ^= t[o++];
            this.pos === r && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = true;
          let { state: t, suffix: r, pos: n, blockLen: i } = this;
          t[n] ^= r, (r & 128) !== 0 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
        }
        writeInto(t) {
          (0, bt.aexists)(this, false), (0, bt.abytes)(t), this.finish();
          let r = this.state, { blockLen: n } = this;
          for (let i = 0, o = t.length; i < o; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, o - i);
            t.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, bt.anumber)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if ((0, bt.aoutput)(t, this), this.finished) throw new Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true, this.state.fill(0);
        }
        _cloneInto(t) {
          let { blockLen: r, suffix: n, outputLen: i, rounds: o, enableXOF: s } = this;
          return t || (t = new e(r, n, i, s, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.destroyed = this.destroyed, t;
        }
      };
      V.Keccak = Zt;
      var Le = /* @__PURE__ */ __name((e, t, r) => (0, Se.wrapConstructor)(() => new Zt(t, e, r)), "Le");
      V.sha3_224 = Le(6, 144, 224 / 8);
      V.sha3_256 = Le(6, 136, 256 / 8);
      V.sha3_384 = Le(6, 104, 384 / 8);
      V.sha3_512 = Le(6, 72, 512 / 8);
      V.keccak_224 = Le(1, 144, 224 / 8);
      V.keccak_256 = Le(1, 136, 256 / 8);
      V.keccak_384 = Le(1, 104, 384 / 8);
      V.keccak_512 = Le(1, 72, 512 / 8);
      var Sa = /* @__PURE__ */ __name((e, t, r) => (0, Se.wrapXOFConstructorWithOpts)((n = {}) => new Zt(t, e, n.dkLen === void 0 ? r : n.dkLen, true)), "Sa");
      V.shake128 = Sa(31, 168, 128 / 8);
      V.shake256 = Sa(31, 136, 256 / 8);
    });
    var _a = oe((LI, _e) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      var { sha3_512: Dp } = Ra(), Oa = 24, Yt = 32, li = /* @__PURE__ */ __name((e = 4, t = Math.random) => {
        let r = "";
        for (; r.length < e; ) r = r + Math.floor(t() * 36).toString(36);
        return r;
      }, "li");
      function ka(e) {
        let t = 8n, r = 0n;
        for (let n of e.values()) {
          let i = BigInt(n);
          r = (r << t) + i;
        }
        return r;
      }
      __name(ka, "ka");
      var Ma = /* @__PURE__ */ __name((e = "") => ka(Dp(e)).toString(36).slice(1), "Ma"), Ia = Array.from({ length: 26 }, (e, t) => String.fromCharCode(t + 97)), Np = /* @__PURE__ */ __name((e) => Ia[Math.floor(e() * Ia.length)], "Np"), Da = /* @__PURE__ */ __name(({ globalObj: e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {}, random: t = Math.random } = {}) => {
        let r = Object.keys(e).toString(), n = r.length ? r + li(Yt, t) : li(Yt, t);
        return Ma(n).substring(0, Yt);
      }, "Da"), Na = /* @__PURE__ */ __name((e) => () => e++, "Na"), Lp = 476782367, La = /* @__PURE__ */ __name(({ random: e = Math.random, counter: t = Na(Math.floor(e() * Lp)), length: r = Oa, fingerprint: n = Da({ random: e }) } = {}) => function() {
        let o = Np(e), s = Date.now().toString(36), a = t().toString(36), d = li(r, e), f2 = `${s + d + a + n}`;
        return `${o + Ma(f2).substring(1, r)}`;
      }, "La"), _p = La(), Fp = /* @__PURE__ */ __name((e, { minLength: t = 2, maxLength: r = Yt } = {}) => {
        let n = e.length, i = /^[0-9a-z]+$/;
        try {
          if (typeof e == "string" && n >= t && n <= r && i.test(e)) return true;
        } finally {
        }
        return false;
      }, "Fp");
      _e.exports.getConstants = () => ({ defaultLength: Oa, bigLength: Yt });
      _e.exports.init = La;
      _e.exports.createId = _p;
      _e.exports.bufToBigInt = ka;
      _e.exports.createCounter = Na;
      _e.exports.createFingerprint = Da;
      _e.exports.isCuid = Fp;
    });
    var Fa = oe((VI, Xt) => {
      "use strict";
      l2();
      u();
      c();
      p2();
      m();
      var { createId: Up, init: $p, getConstants: qp, isCuid: Vp } = _a();
      Xt.exports.createId = Up;
      Xt.exports.init = $p;
      Xt.exports.getConstants = qp;
      Xt.exports.isCuid = Vp;
    });
    var id = {};
    Ye(id, { AnyNull: /* @__PURE__ */ __name(() => X.AnyNull, "AnyNull"), DMMF: /* @__PURE__ */ __name(() => _t, "DMMF"), DbNull: /* @__PURE__ */ __name(() => X.DbNull, "DbNull"), Debug: /* @__PURE__ */ __name(() => Y, "Debug"), Decimal: /* @__PURE__ */ __name(() => tu.Decimal, "Decimal"), Extensions: /* @__PURE__ */ __name(() => An, "Extensions"), JsonNull: /* @__PURE__ */ __name(() => X.JsonNull, "JsonNull"), NullTypes: /* @__PURE__ */ __name(() => X.NullTypes, "NullTypes"), ObjectEnumValue: /* @__PURE__ */ __name(() => X.ObjectEnumValue, "ObjectEnumValue"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => D.PrismaClientInitializationError, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => D.PrismaClientKnownRequestError, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => D.PrismaClientRustPanicError, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => D.PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => D.PrismaClientValidationError, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => vn, "Public"), Sql: /* @__PURE__ */ __name(() => Te.Sql, "Sql"), createParam: /* @__PURE__ */ __name(() => Yo, "createParam"), defineDmmfProperty: /* @__PURE__ */ __name(() => ns, "defineDmmfProperty"), deserializeJsonResponse: /* @__PURE__ */ __name(() => De, "deserializeJsonResponse"), deserializeRawResult: /* @__PURE__ */ __name(() => hn, "deserializeRawResult"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => to, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => Te.empty, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => Yl, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => eu, "getRuntime"), isAnyNull: /* @__PURE__ */ __name(() => X.isAnyNull, "isAnyNull"), isDbNull: /* @__PURE__ */ __name(() => X.isDbNull, "isDbNull"), isJsonNull: /* @__PURE__ */ __name(() => X.isJsonNull, "isJsonNull"), join: /* @__PURE__ */ __name(() => Te.join, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => Xl, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => is, "makeTypedQueryFactory"), raw: /* @__PURE__ */ __name(() => Te.raw, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => _r, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => Lr, "skip"), sqltag: /* @__PURE__ */ __name(() => Te.sql, "sqltag"), warnOnce: /* @__PURE__ */ __name(() => Ln, "warnOnce") });
    module.exports = $i(id);
    l2();
    u();
    c();
    p2();
    m();
    var An = {};
    Ye(An, { defineExtension: /* @__PURE__ */ __name(() => Zi, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => Yi, "getExtensionContext") });
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function Zi(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(Zi, "Zi");
    l2();
    u();
    c();
    p2();
    m();
    function Yi(e) {
      return e;
    }
    __name(Yi, "Yi");
    var vn = {};
    Ye(vn, { validator: /* @__PURE__ */ __name(() => Xi, "validator") });
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function Xi(...e) {
      return (t) => t;
    }
    __name(Xi, "Xi");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var he = class {
      static {
        __name(this, "he");
      }
      _map = /* @__PURE__ */ new Map();
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    function Ie(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Ie, "Ie");
    l2();
    u();
    c();
    p2();
    m();
    function eo(e, t) {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    }
    __name(eo, "eo");
    l2();
    u();
    c();
    p2();
    m();
    function St(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(St, "St");
    l2();
    u();
    c();
    p2();
    m();
    function to(e) {
      return { models: Cn(e.models), enums: Cn(e.enums), types: Cn(e.types) };
    }
    __name(to, "to");
    function Cn(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    __name(Cn, "Cn");
    var ke = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var Sn;
    var ro;
    var no;
    var io;
    var oo = true;
    typeof g < "u" && ({ FORCE_COLOR: Sn, NODE_DISABLE_COLORS: ro, NO_COLOR: no, TERM: io } = g.env || {}, oo = g.stdout && g.stdout.isTTY);
    var bu = { enabled: !ro && no == null && io !== "dumb" && (Sn != null && Sn !== "0" || oo) };
    function U(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !bu.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(U, "U");
    var Jf = U(0, 0);
    var fr = U(1, 22);
    var gr = U(2, 22);
    var Wf = U(3, 23);
    var yr = U(4, 24);
    var Gf = U(7, 27);
    var Kf = U(8, 28);
    var zf = U(9, 29);
    var Zf = U(30, 39);
    var tt = U(31, 39);
    var so = U(32, 39);
    var ao = U(33, 39);
    var lo = U(34, 39);
    var Yf = U(35, 39);
    var uo = U(36, 39);
    var Xf = U(37, 39);
    var co = U(90, 39);
    var eg = U(90, 39);
    var tg = U(40, 49);
    var rg = U(41, 49);
    var ng = U(42, 49);
    var ig = U(43, 49);
    var og = U(44, 49);
    var sg = U(45, 49);
    var ag = U(46, 49);
    var lg = U(47, 49);
    l2();
    u();
    c();
    p2();
    m();
    var xu = 100;
    var po = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Rt = [];
    var mo = Date.now();
    var Eu = 0;
    var Rn = typeof g < "u" ? g.env : {};
    globalThis.DEBUG ??= Rn.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= Rn.DEBUG_COLORS ? Rn.DEBUG_COLORS === "true" : true;
    var It = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, "log"), formatters: {} };
    function Tu(e) {
      let t = { color: po[Eu++ % po.length], enabled: It.enabled(e), namespace: e, log: It.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && Rt.push([o, ...n]), Rt.length > xu && Rt.shift(), It.enabled(o) || i) {
          let d = n.map((P2) => typeof P2 == "string" ? P2 : Pu(P2)), f2 = `+${Date.now() - mo}ms`;
          mo = Date.now(), a(o, ...d, f2);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => t[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => t[i] = o, "set") });
    }
    __name(Tu, "Tu");
    var Y = new Proxy(Tu, { get: /* @__PURE__ */ __name((e, t) => It[t], "get"), set: /* @__PURE__ */ __name((e, t, r) => It[t] = r, "set") });
    function Pu(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    __name(Pu, "Pu");
    function fo(e = 7500) {
      let t = Rt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    __name(fo, "fo");
    function go() {
      Rt.length = 0;
    }
    __name(go, "go");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var xo = "prisma+postgres";
    var xr = `${xo}:`;
    function Eo(e) {
      return e?.toString().startsWith(`${xr}//`) ?? false;
    }
    __name(Eo, "Eo");
    function On(e) {
      if (!Eo(e)) return false;
      let { host: t } = new URL(e);
      return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
    }
    __name(On, "On");
    var Dt = {};
    Ye(Dt, { error: /* @__PURE__ */ __name(() => Su, "error"), info: /* @__PURE__ */ __name(() => Cu, "info"), log: /* @__PURE__ */ __name(() => vu, "log"), query: /* @__PURE__ */ __name(() => Ru, "query"), should: /* @__PURE__ */ __name(() => Ao, "should"), tags: /* @__PURE__ */ __name(() => Mt, "tags"), warn: /* @__PURE__ */ __name(() => kn, "warn") });
    l2();
    u();
    c();
    p2();
    m();
    var Mt = { error: tt("prisma:error"), warn: ao("prisma:warn"), info: uo("prisma:info"), query: lo("prisma:query") };
    var Ao = { warn: /* @__PURE__ */ __name(() => !g.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function vu(...e) {
      console.log(...e);
    }
    __name(vu, "vu");
    function kn(e, ...t) {
      Ao.warn() && console.warn(`${Mt.warn} ${e}`, ...t);
    }
    __name(kn, "kn");
    function Cu(e, ...t) {
      console.info(`${Mt.info} ${e}`, ...t);
    }
    __name(Cu, "Cu");
    function Su(e, ...t) {
      console.error(`${Mt.error} ${e}`, ...t);
    }
    __name(Su, "Su");
    function Ru(e, ...t) {
      console.log(`${Mt.query} ${e}`, ...t);
    }
    __name(Ru, "Ru");
    l2();
    u();
    c();
    p2();
    m();
    function ve(e, t) {
      throw new Error(t);
    }
    __name(ve, "ve");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function Mn({ onlyFirst: e = false } = {}) {
      let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
      return new RegExp(r, e ? void 0 : "g");
    }
    __name(Mn, "Mn");
    var Iu = Mn();
    function nt(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(Iu, "");
    }
    __name(nt, "nt");
    l2();
    u();
    c();
    p2();
    m();
    function Dn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(Dn, "Dn");
    l2();
    u();
    c();
    p2();
    m();
    function Tr(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Tr, "Tr");
    l2();
    u();
    c();
    p2();
    m();
    function Nn(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(Nn, "Nn");
    l2();
    u();
    c();
    p2();
    m();
    function Nt(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(Nt, "Nt");
    l2();
    u();
    c();
    p2();
    m();
    var Co = /* @__PURE__ */ new Set();
    var Ln = /* @__PURE__ */ __name((e, t, ...r) => {
      Co.has(e) || (Co.add(e), kn(t, ...r));
    }, "Ln");
    l2();
    u();
    c();
    p2();
    m();
    function it(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(it, "it");
    function Pr(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Pr, "Pr");
    l2();
    u();
    c();
    p2();
    m();
    var So = require_dist();
    function ot(e) {
      return So.Decimal.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(ot, "ot");
    l2();
    u();
    c();
    p2();
    m();
    var Jo = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    var _t = {};
    Ye(_t, { ModelAction: /* @__PURE__ */ __name(() => Lt, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => Ou, "datamodelEnumToSchemaEnum"), datamodelSchemaEnumToSchemaEnum: /* @__PURE__ */ __name(() => ku, "datamodelSchemaEnumToSchemaEnum") });
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function Ou(e) {
      return { name: e.name, data: e.values.map((t) => ({ key: t.name, value: t.dbName ?? t.name })) };
    }
    __name(Ou, "Ou");
    function ku(e) {
      return { name: e.name, data: e.values.map((t) => ({ key: t, value: t })) };
    }
    __name(ku, "ku");
    l2();
    u();
    c();
    p2();
    m();
    var Lt = ((F2) => (F2.findUnique = "findUnique", F2.findUniqueOrThrow = "findUniqueOrThrow", F2.findFirst = "findFirst", F2.findFirstOrThrow = "findFirstOrThrow", F2.findMany = "findMany", F2.create = "create", F2.createMany = "createMany", F2.createManyAndReturn = "createManyAndReturn", F2.update = "update", F2.updateMany = "updateMany", F2.updateManyAndReturn = "updateManyAndReturn", F2.upsert = "upsert", F2.delete = "delete", F2.deleteMany = "deleteMany", F2.groupBy = "groupBy", F2.count = "count", F2.aggregate = "aggregate", F2.findRaw = "findRaw", F2.aggregateRaw = "aggregateRaw", F2))(Lt || {});
    var Mu = Ue(Po());
    var Du = { red: tt, gray: co, dim: gr, bold: fr, underline: yr, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var Nu = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function Lu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(Lu, "Lu");
    function _u({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], d = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${d}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${d}`)), t && a.push(s.underline(Fu(t))), i) {
        a.push("");
        let f2 = [i.toString()];
        o && (f2.push(o), f2.push(s.dim(")"))), a.push(f2.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(_u, "_u");
    function Fu(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(Fu, "Fu");
    function Ar(e) {
      let t = e.showColors ? Du : Nu, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = Lu(e), _u(r, t);
    }
    __name(Ar, "Ar");
    l2();
    u();
    c();
    p2();
    m();
    var _o = Ue(_n());
    l2();
    u();
    c();
    p2();
    m();
    function ko(e, t, r) {
      let n = Mo(e), i = Uu(n), o = qu(i);
      o ? vr(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(ko, "ko");
    function Mo(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Mo(t) : [t]);
    }
    __name(Mo, "Mo");
    function Uu(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: $u(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(Uu, "Uu");
    function $u(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name($u, "$u");
    function qu(e) {
      return Nn(e, (t, r) => {
        let n = Io(t), i = Io(r);
        return n !== i ? n - i : Oo(t) - Oo(r);
      });
    }
    __name(qu, "qu");
    function Io(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(Io, "Io");
    function Oo(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(Oo, "Oo");
    l2();
    u();
    c();
    p2();
    m();
    var ae = class {
      static {
        __name(this, "ae");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    No();
    l2();
    u();
    c();
    p2();
    m();
    var st = class {
      static {
        __name(this, "st");
      }
      constructor(t = 0, r) {
        this.context = r;
        this.currentIndent = t;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    Do();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var Cr = class {
      static {
        __name(this, "Cr");
      }
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var Sr = /* @__PURE__ */ __name((e) => e, "Sr");
    var Rr = { bold: Sr, red: Sr, green: Sr, dim: Sr, enabled: false };
    var Lo = { bold: fr, red: tt, green: so, dim: gr, enabled: true };
    var at = { write(e) {
      e.writeLine(",");
    } };
    l2();
    u();
    c();
    p2();
    m();
    var we = class {
      static {
        __name(this, "we");
      }
      constructor(t) {
        this.contents = t;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((t) => t, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var Oe = class {
      static {
        __name(this, "Oe");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var lt = class extends Oe {
      static {
        __name(this, "lt");
      }
      items = [];
      addItem(t) {
        return this.items.push(new Cr(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let r = new we("[]");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithItems(t) {
        let { colors: r } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(at, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var ut = class e extends Oe {
      static {
        __name(this, "e");
      }
      fields = {};
      suggestions = [];
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [r, ...n] = t, i = this.getField(r);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof lt && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let r = this;
        for (let n of t) {
          if (!(r instanceof e)) return;
          let i = r.getSubSelectionValue(n);
          if (!i) return;
          r = i;
        }
        return r;
      }
      getDeepSelectionParent(t) {
        let r = this.getSelectionParent();
        if (!r) return;
        let n = r;
        for (let i of t) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let t = this.getField("select")?.value.asObject();
        if (t) return { kind: "select", value: t };
        let r = this.getField("include")?.value.asObject();
        if (r) return { kind: "include", value: r };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
      }
      write(t) {
        let r = Object.values(this.fields);
        if (r.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, r);
      }
      asObject() {
        return this;
      }
      writeEmpty(t) {
        let r = new we("{}");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithContents(t, r) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(at, [...r, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var K = class extends Oe {
      static {
        __name(this, "K");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new we(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var Ft = class {
      static {
        __name(this, "Ft");
      }
      fields = [];
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(at, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function vr(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Vu(e, t);
          break;
        case "IncludeOnScalar":
          Bu(e, t);
          break;
        case "EmptySelection":
          ju(e, t, r);
          break;
        case "UnknownSelectionField":
          Wu(e, t);
          break;
        case "InvalidSelectionValue":
          Gu(e, t);
          break;
        case "UnknownArgument":
          Ku(e, t);
          break;
        case "UnknownInputField":
          zu(e, t);
          break;
        case "RequiredArgumentMissing":
          Zu(e, t);
          break;
        case "InvalidArgumentType":
          Yu(e, t);
          break;
        case "InvalidArgumentValue":
          Xu(e, t);
          break;
        case "ValueTooLarge":
          ec(e, t);
          break;
        case "SomeFieldsMissing":
          tc(e, t);
          break;
        case "TooManyFieldsGiven":
          rc(e, t);
          break;
        case "Union":
          ko(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(vr, "vr");
    function Vu(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(Vu, "Vu");
    function Bu(e, t) {
      let [r, n] = ct(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new ae(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${Ut(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(Bu, "Bu");
    function ju(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          Qu(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          Hu(e, t);
          return;
        }
      }
      if (r?.[Ie(e.outputType.name)]) {
        Ju(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(ju, "ju");
    function Qu(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new ae(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Qu, "Qu");
    function Hu(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), $o(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Ut(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(Hu, "Hu");
    function Ju(e, t) {
      let r = new Ft();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new ae("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = ct(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let d = a?.value.asObject() ?? new ut();
          d.addSuggestion(n), a.value = d;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Ju, "Ju");
    function Wu(e, t) {
      let r = qo(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            $o(n, e.outputType);
            break;
          case "include":
            nc(n, e.outputType);
            break;
          case "omit":
            ic(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(Ut(n)), i.join(" ");
      });
    }
    __name(Wu, "Wu");
    function Gu(e, t) {
      let r = qo(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(Gu, "Gu");
    function Ku(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), oc(n, e.arguments)), t.addErrorMessage((i) => Fo(i, r, e.arguments.map((o) => o.name)));
    }
    __name(Ku, "Ku");
    function zu(e, t) {
      let [r, n] = ct(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && Vo(o, e.inputType);
      }
      t.addErrorMessage((o) => Fo(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(zu, "zu");
    function Fo(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = ac(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Ut(e)), n.join(" ");
    }
    __name(Fo, "Fo");
    function Zu(e, t) {
      let r;
      t.addErrorMessage((d) => r?.value instanceof K && r.value.text === "null" ? `Argument \`${d.green(o)}\` must not be ${d.red("null")}.` : `Argument \`${d.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = ct(e.argumentPath), s = new Ft(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) {
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let d of e.inputTypes[0].fields) s.addField(d.name, d.typeNames.join(" | "));
          a.addSuggestion(new ae(o, s).makeRequired());
        } else {
          let d = e.inputTypes.map(Uo).join(" | ");
          a.addSuggestion(new ae(o, d).makeRequired());
        }
        if (e.dependentArgumentPath) {
          n.getDeepField(e.dependentArgumentPath)?.markAsError();
          let [, d] = ct(e.dependentArgumentPath);
          t.addErrorMessage((f2) => `Argument \`${f2.green(o)}\` is required because argument \`${f2.green(d)}\` was provided.`);
        }
      }
    }
    __name(Zu, "Zu");
    function Uo(e) {
      return e.kind === "list" ? `${Uo(e.elementType)}[]` : e.name;
    }
    __name(Uo, "Uo");
    function Yu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Ir("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(Yu, "Yu");
    function Xu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Ir("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(Xu, "Xu");
    function ec(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof K && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(ec, "ec");
    function tc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && Vo(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Ir("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Ut(i)), o.join(" ");
      });
    }
    __name(tc, "tc");
    function rc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Ir("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(rc, "rc");
    function $o(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new ae(r.name, "true"));
    }
    __name($o, "$o");
    function nc(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new ae(r.name, "true"));
    }
    __name(nc, "nc");
    function ic(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new ae(r.name, "true"));
    }
    __name(ic, "ic");
    function oc(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new ae(r.name, r.typeNames.join(" | ")));
    }
    __name(oc, "oc");
    function qo(e, t) {
      let [r, n] = ct(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), d = o?.getField(n);
      return o && d ? { parentKind: "select", parent: o, field: d, fieldName: n } : (d = s?.getField(n), s && d ? { parentKind: "include", field: d, parent: s, fieldName: n } : (d = a?.getField(n), a && d ? { parentKind: "omit", field: d, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(qo, "qo");
    function Vo(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new ae(r.name, r.typeNames.join(" | ")));
    }
    __name(Vo, "Vo");
    function ct(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(ct, "ct");
    function Ut({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(Ut, "Ut");
    function Ir(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Ir, "Ir");
    var sc = 3;
    function ac(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, _o.default)(e, i);
        o > sc || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(ac, "ac");
    l2();
    u();
    c();
    p2();
    m();
    var jo = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    var $t = class {
      static {
        __name(this, "$t");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function pt(e) {
      return e instanceof $t;
    }
    __name(pt, "pt");
    l2();
    u();
    c();
    p2();
    m();
    var Bo = ": ";
    var Or = class {
      static {
        __name(this, "Or");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Bo.length;
      }
      write(t) {
        let r = new we(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Bo).write(this.value);
      }
    };
    var Un = class {
      static {
        __name(this, "Un");
      }
      arguments;
      errorMessages = [];
      constructor(t) {
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function mt(e) {
      return new Un(Qo(e));
    }
    __name(mt, "mt");
    function Qo(e) {
      let t = new ut();
      for (let [r, n] of Object.entries(e)) {
        let i = new Or(r, Ho(n));
        t.addField(i);
      }
      return t;
    }
    __name(Qo, "Qo");
    function Ho(e) {
      if (typeof e == "string") return new K(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new K(String(e));
      if (typeof e == "bigint") return new K(`${e}n`);
      if (e === null) return new K("null");
      if (e === void 0) return new K("undefined");
      if (ot(e)) return new K(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return y.isBuffer(e) ? new K(`Buffer.alloc(${e.byteLength})`) : new K(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Pr(e) ? e.toISOString() : "Invalid Date";
        return new K(`new Date("${t}")`);
      }
      return e instanceof jo.ObjectEnumValue ? new K(`Prisma.${e._getName()}`) : pt(e) ? new K(`prisma.${Ie(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? lc(e) : typeof e == "object" ? Qo(e) : new K(Object.prototype.toString.call(e));
    }
    __name(Ho, "Ho");
    function lc(e) {
      let t = new lt();
      for (let r of e) t.addItem(Ho(r));
      return t;
    }
    __name(lc, "lc");
    function kr(e, t) {
      let r = t === "pretty" ? Lo : Rr, n = e.renderAllMessages(r), i = new st(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(kr, "kr");
    function Mr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = mt(e);
      for (let A of t) vr(A, a, s);
      let { message: d, args: f2 } = kr(a, r), P2 = Ar({ message: d, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: f2 });
      throw new Jo.PrismaClientValidationError(P2, { clientVersion: o });
    }
    __name(Mr, "Mr");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function be(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(be, "be");
    l2();
    u();
    c();
    p2();
    m();
    function Go(e, t, r) {
      let n = be(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : uc({ ...e, ...Wo(t.name, e, t.result.$allModels), ...Wo(t.name, e, t.result[n]) });
    }
    __name(Go, "Go");
    function uc(e) {
      let t = new he(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Tr(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(uc, "uc");
    function Wo(e, t, r) {
      return r ? Tr(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: cc(t, o, i) })) : {};
    }
    __name(Wo, "Wo");
    function cc(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(cc, "cc");
    function Ko(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(Ko, "Ko");
    function zo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(zo, "zo");
    var Dr = class {
      static {
        __name(this, "Dr");
      }
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
      }
      computedFieldsCache = new he();
      modelExtensionsCache = new he();
      queryCallbacksCache = new he();
      clientExtensions = St(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = St(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => Go(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = be(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var dt = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Dr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Dr(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var Nr = class {
      static {
        __name(this, "Nr");
      }
      constructor(t) {
        this.name = t;
      }
    };
    function Zo(e) {
      return e instanceof Nr;
    }
    __name(Zo, "Zo");
    function Yo(e) {
      return new Nr(e);
    }
    __name(Yo, "Yo");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var Xo = Symbol();
    var qt = class {
      static {
        __name(this, "qt");
      }
      constructor(t) {
        if (t !== Xo) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Lr : t;
      }
    };
    var Lr = new qt(Xo);
    function xe(e) {
      return e instanceof qt;
    }
    __name(xe, "xe");
    var pc = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var es = "explicitly `undefined` values are not allowed";
    function _r({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = dt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: d, previewFeatures: f2, globalOmit: P2 }) {
      let A = new $n({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: d, previewFeatures: f2, globalOmit: P2 });
      return { modelName: e, action: pc[t], query: Vt(r, A) };
    }
    __name(_r, "_r");
    function Vt({ select: e, include: t, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: rs(r, n), selection: mc(e, t, i, n) };
    }
    __name(Vt, "Vt");
    function mc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), yc(e, n)) : dc(n, t, r);
    }
    __name(mc, "mc");
    function dc(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && fc(n, t, e), gc(n, r, e), n;
    }
    __name(dc, "dc");
    function fc(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (xe(i)) continue;
        let o = r.nestSelection(n);
        if (qn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = Vt(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Vt(i, o);
      }
    }
    __name(fc, "fc");
    function gc(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = zo(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (xe(a)) continue;
        qn(a, r.nestSelection(s));
        let d = r.findField(s);
        n?.[s] && !d || (e[s] = !a);
      }
    }
    __name(gc, "gc");
    function yc(e, t) {
      let r = {}, n = t.getComputedFields(), i = Ko(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (xe(s)) continue;
        let a = t.nestSelection(o);
        qn(s, a);
        let d = t.findField(o);
        if (!(n?.[o] && !d)) {
          if (s === false || s === void 0 || xe(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            d?.kind === "object" ? r[o] = Vt({}, a) : r[o] = true;
            continue;
          }
          r[o] = Vt(s, a);
        }
      }
      return r;
    }
    __name(yc, "yc");
    function ts(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (it(e)) {
        if (Pr(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Zo(e)) return { $type: "Param", value: e.name };
      if (pt(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return hc(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: y.from(r, n, i).toString("base64") };
      }
      if (wc(e)) return e.values;
      if (ot(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof ke.ObjectEnumValue) {
        if (!(0, ke.isDbNull)(e) && !(0, ke.isJsonNull)(e) && !(0, ke.isAnyNull)(e)) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (bc(e)) return e.toJSON();
      if (typeof e == "object") return rs(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(ts, "ts");
    function rs(e, t) {
      if (e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        xe(i) || (i !== void 0 ? r[n] = ts(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: es }));
      }
      return r;
    }
    __name(rs, "rs");
    function hc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || xe(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(ts(o, i));
      }
      return r;
    }
    __name(hc, "hc");
    function wc(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(wc, "wc");
    function bc(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(bc, "bc");
    function qn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: es });
    }
    __name(qn, "qn");
    var $n = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(t) {
        Mr({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Ie(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            ve(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    function ns(e, t) {
      let r = St(() => xc(t));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(ns, "ns");
    function xc(e) {
      throw new Error("Prisma.dmmf is not available when running in edge runtimes.");
    }
    __name(xc, "xc");
    l2();
    u();
    c();
    p2();
    m();
    var Bn = /* @__PURE__ */ new WeakMap();
    var Fr = "$$PrismaTypedSql";
    var Bt = class {
      static {
        __name(this, "Bt");
      }
      constructor(t, r) {
        Bn.set(this, { sql: t, values: r }), Object.defineProperty(this, Fr, { value: Fr });
      }
      get sql() {
        return Bn.get(this).sql;
      }
      get values() {
        return Bn.get(this).values;
      }
    };
    function is(e) {
      return (...t) => new Bt(e, t);
    }
    __name(is, "is");
    function Ur(e) {
      return e != null && e[Fr] === Fr;
    }
    __name(Ur, "Ur");
    l2();
    u();
    c();
    p2();
    m();
    var Zl = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    os();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function jt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(jt, "jt");
    l2();
    u();
    c();
    p2();
    m();
    function ee(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(ee, "ee");
    l2();
    u();
    c();
    p2();
    m();
    function je(e) {
      let t = new he();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(je, "je");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var qr = { enumerable: true, configurable: true, writable: true };
    function Vr(e) {
      let t = new Set(e);
      return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => qr, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => t.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => t.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...t], "ownKeys") };
    }
    __name(Vr, "Vr");
    var ss = Symbol.for("nodejs.util.inspect.custom");
    function pe(e, t) {
      let r = Ec(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = as(Reflect.ownKeys(o), r), a = as(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let d = r.get(s);
        return d ? d.getPropertyDescriptor ? { ...qr, ...d?.getPropertyDescriptor(s) } : qr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
      return i[ss] = function() {
        let o = { ...this };
        return delete o[ss], o;
      }, i;
    }
    __name(pe, "pe");
    function Ec(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    __name(Ec, "Ec");
    function as(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(as, "as");
    l2();
    u();
    c();
    p2();
    m();
    function ft(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(ft, "ft");
    l2();
    u();
    c();
    p2();
    m();
    function ls(e) {
      if (e === void 0) return "";
      let t = mt(e);
      return new st(0, { colors: Rr }).write(t).toString();
    }
    __name(ls, "ls");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var jn = class {
      static {
        __name(this, "jn");
      }
      getLocation() {
        return null;
      }
    };
    function Me(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new jn();
    }
    __name(Me, "Me");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var us = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function gt(e = {}) {
      let t = Pc(e);
      return Object.entries(t).reduce((n, [i, o]) => (us[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(gt, "gt");
    function Pc(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(Pc, "Pc");
    function Br(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(Br, "Br");
    function cs(e, t) {
      let r = Br(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: gt })(e);
    }
    __name(cs, "cs");
    l2();
    u();
    c();
    p2();
    m();
    function Ac(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? gt({ ...r, _count: t }) : gt({ ...r, _count: { _all: true } });
    }
    __name(Ac, "Ac");
    function vc(e = {}) {
      return typeof e.select == "object" ? (t) => Br(e)(t)._count : (t) => Br(e)(t)._count._all;
    }
    __name(vc, "vc");
    function ps(e, t) {
      return t({ action: "count", unpacker: vc(e), argsMapper: Ac })(e);
    }
    __name(ps, "ps");
    l2();
    u();
    c();
    p2();
    m();
    function Cc(e = {}) {
      let t = gt(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(Cc, "Cc");
    function Sc(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(Sc, "Sc");
    function ms(e, t) {
      return t({ action: "groupBy", unpacker: Sc(e), argsMapper: Cc })(e);
    }
    __name(ms, "ms");
    function ds(e, t, r) {
      if (t === "aggregate") return (n) => cs(n, r);
      if (t === "count") return (n) => ps(n, r);
      if (t === "groupBy") return (n) => ms(n, r);
    }
    __name(ds, "ds");
    l2();
    u();
    c();
    p2();
    m();
    function fs(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = eo(r, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new $t(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Vr(Object.keys(n)) });
    }
    __name(fs, "fs");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var gs = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "gs");
    var Qn = /* @__PURE__ */ __name((e, t) => gs(t).reduce((r, n) => r && r[n], e), "Qn");
    var ys = /* @__PURE__ */ __name((e, t, r) => gs(t).reduceRight((n, i, o, s) => Object.assign({}, Qn(e, s.slice(0, o)), { [i]: n }), r), "ys");
    function Rc(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(Rc, "Rc");
    function Ic(e, t, r) {
      return t === void 0 ? e ?? {} : ys(t, r, e || true);
    }
    __name(Ic, "Ic");
    function Hn(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((d, f2) => ({ ...d, [f2.name]: f2 }), {});
      return (d) => {
        let f2 = Me(e._errorFormat), P2 = Rc(n, i), A = Ic(d, o, P2), S2 = r({ dataPath: P2, callsite: f2 })(A), C = Oc(e, t);
        return new Proxy(S2, { get(M, R) {
          if (!C.includes(R)) return M[R];
          let Pe = [a[R].type, r, R], re = [P2, A];
          return Hn(e, ...Pe, ...re);
        }, ...Vr([...C, ...Object.getOwnPropertyNames(S2)]) });
      };
    }
    __name(Hn, "Hn");
    function Oc(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(Oc, "Oc");
    var kc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Mc = ["aggregate", "count", "groupBy"];
    function Jn(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Dc(e, t), Lc(e, t), jt(r), ee("name", () => t), ee("$name", () => t), ee("$parent", () => e._appliedParent)];
      return pe({}, n);
    }
    __name(Jn, "Jn");
    function Dc(e, t) {
      let r = be(t), n = Object.keys(Lt).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a) => (d) => {
          let f2 = Me(e._errorFormat);
          return e._createPrismaPromise((P2) => {
            let A = { args: d, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: P2, callsite: f2 };
            return e._request({ ...A, ...a });
          }, { action: o, args: d, model: t });
        }, "s");
        return kc.includes(o) ? Hn(e, t, s) : Nc(i) ? ds(e, i, s) : s({});
      } };
    }
    __name(Dc, "Dc");
    function Nc(e) {
      return Mc.includes(e);
    }
    __name(Nc, "Nc");
    function Lc(e, t) {
      return je(ee("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return fs(t, r);
      }));
    }
    __name(Lc, "Lc");
    l2();
    u();
    c();
    p2();
    m();
    function hs(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(hs, "hs");
    var Wn = Symbol();
    function Qt(e) {
      let t = [_c(e), Fc(e), ee(Wn, () => e), ee("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(jt(r)), pe(e, t);
    }
    __name(Qt, "Qt");
    function _c(e) {
      let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    __name(_c, "_c");
    function Fc(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(be), n = [...new Set(t.concat(r))];
      return je({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = hs(i);
        if (e._runtimeDataModel.models[o] !== void 0) return Jn(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return Jn(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(Fc, "Fc");
    function ws(e) {
      return e[Wn] ? e[Wn] : e;
    }
    __name(ws, "ws");
    function bs(e) {
      if (typeof e == "function") return e(this);
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } });
      return Qt(t);
    }
    __name(bs, "bs");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function xs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a = [];
      for (let d of Object.values(o)) {
        if (n) {
          if (n[d.name]) continue;
          let f2 = d.needs.filter((P2) => n[P2]);
          f2.length > 0 && a.push(ft(f2));
        } else if (r) {
          if (!r[d.name]) continue;
          let f2 = d.needs.filter((P2) => !r[P2]);
          f2.length > 0 && a.push(ft(f2));
        }
        Uc(e, d.needs) && s.push($c(d, pe(e, s)));
      }
      return s.length > 0 || a.length > 0 ? pe(e, [...s, ...a]) : e;
    }
    __name(xs, "xs");
    function Uc(e, t) {
      return t.every((r) => Dn(e, r));
    }
    __name(Uc, "Uc");
    function $c(e, t) {
      return je(ee(e.name, () => e.compute(t)));
    }
    __name($c, "$c");
    l2();
    u();
    c();
    p2();
    m();
    function jr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = jr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && Es({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Es({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(jr, "jr");
    function Es({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || xe(s)) continue;
        let d = n.models[r].fields.find((P2) => P2.name === o);
        if (!d || d.kind !== "object" || !d.relationName) continue;
        let f2 = typeof s == "object" ? s : {};
        t[o] = jr({ visitor: i, result: t[o], args: f2, modelName: d.type, runtimeDataModel: n });
      }
    }
    __name(Es, "Es");
    function Ts({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : jr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, d, f2) => {
        let P2 = be(d);
        return xs({ result: a, modelName: P2, select: f2.select, omit: f2.select ? void 0 : { ...o?.[P2], ...f2.omit }, extensions: n });
      }, "visitor") });
    }
    __name(Ts, "Ts");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var Qe = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    var qc = ["$connect", "$disconnect", "$on", "$transaction", "$extends"];
    var Ps = qc;
    function As(e) {
      if (e instanceof Qe.Sql) return Vc(e);
      if (Ur(e)) return Bc(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = Ht(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = Ht(e[r]);
      return t;
    }
    __name(As, "As");
    function Vc(e) {
      return new Qe.Sql(e.strings, e.values);
    }
    __name(Vc, "Vc");
    function Bc(e) {
      return new Bt(e.sql, e.values);
    }
    __name(Bc, "Bc");
    function Ht(e) {
      if (typeof e != "object" || e == null || e instanceof Qe.ObjectEnumValue || pt(e)) return e;
      if (ot(e)) return new Qe.Decimal(e.toFixed());
      if (it(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = Ht(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: Ht(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Ht(e[r]);
        return t;
      }
      ve(e, "Unknown value");
    }
    __name(Ht, "Ht");
    function Cs(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: As(t.args ?? {}), __internalParams: t, query: /* @__PURE__ */ __name((s, a = t) => {
          let d = a.customDataProxyFetch;
          return a.customDataProxyFetch = Os(o, d), a.args = s, Cs(e, a, r, n + 1);
        }, "query") });
      });
    }
    __name(Cs, "Cs");
    function Ss(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return Cs(e, t, s);
    }
    __name(Ss, "Ss");
    function Rs(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Is(r, n, 0, e) : e(r);
      };
    }
    __name(Rs, "Rs");
    function Is(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let d = a.customDataProxyFetch;
        return a.customDataProxyFetch = Os(i, d), Is(a, t, r + 1, n);
      } });
    }
    __name(Is, "Is");
    var vs = /* @__PURE__ */ __name((e) => e, "vs");
    function Os(e = vs, t = vs) {
      return (r) => e(t(r));
    }
    __name(Os, "Os");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var _s = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    var Jt = require_dist();
    function L(e, t) {
      throw new Error(t);
    }
    __name(L, "L");
    function Gn(e, t) {
      return e === t || e !== null && t !== null && typeof e == "object" && typeof t == "object" && Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => Gn(e[r], t[r]));
    }
    __name(Gn, "Gn");
    function yt(e, t) {
      let r = Object.keys(e), n = Object.keys(t);
      return (r.length < n.length ? r : n).every((o) => {
        if (typeof e[o] == typeof t[o] && typeof e[o] != "object") return e[o] === t[o];
        if (Jt.Decimal.isDecimal(e[o]) || Jt.Decimal.isDecimal(t[o])) {
          let s = ks(e[o]), a = ks(t[o]);
          return s && a && s.equals(a);
        } else if (e[o] instanceof Uint8Array || t[o] instanceof Uint8Array) {
          let s = Ms(e[o]), a = Ms(t[o]);
          return s && a && s.equals(a);
        } else {
          if (e[o] instanceof Date || t[o] instanceof Date) return Ds(e[o])?.getTime() === Ds(t[o])?.getTime();
          if (typeof e[o] == "bigint" || typeof t[o] == "bigint") return Ns(e[o]) === Ns(t[o]);
          if (typeof e[o] == "number" || typeof t[o] == "number") return Ls(e[o]) === Ls(t[o]);
        }
        return Gn(e[o], t[o]);
      });
    }
    __name(yt, "yt");
    function ks(e) {
      return Jt.Decimal.isDecimal(e) ? e : typeof e == "number" || typeof e == "string" ? new Jt.Decimal(e) : void 0;
    }
    __name(ks, "ks");
    function Ms(e) {
      return y.isBuffer(e) ? e : e instanceof Uint8Array ? y.from(e.buffer, e.byteOffset, e.byteLength) : typeof e == "string" ? y.from(e, "base64") : void 0;
    }
    __name(Ms, "Ms");
    function Ds(e) {
      return e instanceof Date ? e : typeof e == "string" || typeof e == "number" ? new Date(e) : void 0;
    }
    __name(Ds, "Ds");
    function Ns(e) {
      return typeof e == "bigint" ? e : typeof e == "number" || typeof e == "string" ? BigInt(e) : void 0;
    }
    __name(Ns, "Ns");
    function Ls(e) {
      return typeof e == "number" ? e : typeof e == "string" ? Number(e) : void 0;
    }
    __name(Ls, "Ls");
    function Wt(e) {
      return JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() : ArrayBuffer.isView(r) ? y.from(r.buffer, r.byteOffset, r.byteLength).toString("base64") : r);
    }
    __name(Wt, "Wt");
    function jc(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(jc, "jc");
    function Qc(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Qc, "Qc");
    function De(e) {
      return e === null ? e : Array.isArray(e) ? e.map(De) : typeof e == "object" ? jc(e) ? Hc(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Qc(e, De) : e;
    }
    __name(De, "De");
    function Hc({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = y.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new _s.Decimal(t);
        case "Json":
          return JSON.parse(t);
        default:
          L(t, "Unknown tagged value");
      }
    }
    __name(Hc, "Hc");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function Qr(e) {
      return e.name === "DriverAdapterError" && typeof e.cause == "object";
    }
    __name(Qr, "Qr");
    l2();
    u();
    c();
    p2();
    m();
    var I = { Int32: 0, Int64: 1, Float: 2, Double: 3, Numeric: 4, Boolean: 5, Character: 6, Text: 7, Date: 8, Time: 9, DateTime: 10, Json: 11, Enum: 12, Bytes: 13, Set: 14, Uuid: 15, Int32Array: 64, Int64Array: 65, FloatArray: 66, DoubleArray: 67, NumericArray: 68, BooleanArray: 69, CharacterArray: 70, TextArray: 71, DateArray: 72, TimeArray: 73, DateTimeArray: 74, JsonArray: 75, EnumArray: 76, BytesArray: 77, UuidArray: 78, UnknownNumber: 128 };
    var te = class extends Error {
      static {
        __name(this, "te");
      }
      name = "UserFacingError";
      code;
      meta;
      constructor(t, r, n) {
        super(t), this.code = r, this.meta = n ?? {};
      }
      toQueryResponseErrorObject() {
        return { error: this.message, user_facing_error: { is_panic: false, message: this.message, meta: this.meta, error_code: this.code } };
      }
    };
    function ht(e) {
      if (!Qr(e)) throw e;
      let t = Jc(e), r = Fs(e);
      throw !t || !r ? e : new te(r, t, { driverAdapterError: e });
    }
    __name(ht, "ht");
    function zn(e) {
      throw Qr(e) ? new te(`Raw query failed. Code: \`${e.cause.originalCode ?? "N/A"}\`. Message: \`${e.cause.originalMessage ?? Fs(e)}\``, "P2010", { driverAdapterError: e }) : e;
    }
    __name(zn, "zn");
    function Jc(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return "P1000";
        case "DatabaseNotReachable":
          return "P1001";
        case "DatabaseDoesNotExist":
          return "P1003";
        case "SocketTimeout":
          return "P1008";
        case "DatabaseAlreadyExists":
          return "P1009";
        case "DatabaseAccessDenied":
          return "P1010";
        case "TlsConnectionError":
          return "P1011";
        case "ConnectionClosed":
          return "P1017";
        case "TransactionAlreadyClosed":
          return "P1018";
        case "LengthMismatch":
          return "P2000";
        case "UniqueConstraintViolation":
          return "P2002";
        case "ForeignKeyConstraintViolation":
          return "P2003";
        case "UnsupportedNativeDataType":
          return "P2010";
        case "NullConstraintViolation":
          return "P2011";
        case "ValueOutOfRange":
          return "P2020";
        case "TableDoesNotExist":
          return "P2021";
        case "ColumnNotFound":
          return "P2022";
        case "InvalidIsolationLevel":
        case "InconsistentColumnData":
          return "P2023";
        case "MissingFullTextSearchIndex":
          return "P2030";
        case "TransactionWriteConflict":
          return "P2034";
        case "GenericJs":
          return "P2036";
        case "TooManyConnections":
          return "P2037";
        case "postgres":
        case "sqlite":
        case "mysql":
        case "mssql":
          return;
        default:
          L(e.cause, `Unknown error: ${e.cause}`);
      }
    }
    __name(Jc, "Jc");
    function Fs(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return `Authentication failed against the database server, the provided database credentials for \`${e.cause.user ?? "(not available)"}\` are not valid`;
        case "DatabaseNotReachable": {
          let t = e.cause.host && e.cause.port ? `${e.cause.host}:${e.cause.port}` : e.cause.host;
          return `Can't reach database server${t ? ` at ${t}` : ""}`;
        }
        case "DatabaseDoesNotExist":
          return `Database \`${e.cause.db ?? "(not available)"}\` does not exist on the database server`;
        case "SocketTimeout":
          return "Operation has timed out";
        case "DatabaseAlreadyExists":
          return `Database \`${e.cause.db ?? "(not available)"}\` already exists on the database server`;
        case "DatabaseAccessDenied":
          return `User was denied access on the database \`${e.cause.db ?? "(not available)"}\``;
        case "TlsConnectionError":
          return `Error opening a TLS connection: ${e.cause.reason}`;
        case "ConnectionClosed":
          return "Server has closed the connection.";
        case "TransactionAlreadyClosed":
          return e.cause.cause;
        case "LengthMismatch":
          return `The provided value for the column is too long for the column's type. Column: ${e.cause.column ?? "(not available)"}`;
        case "UniqueConstraintViolation":
          return `Unique constraint failed on the ${Kn(e.cause.constraint)}`;
        case "ForeignKeyConstraintViolation":
          return `Foreign key constraint violated on the ${Kn(e.cause.constraint)}`;
        case "UnsupportedNativeDataType":
          return `Failed to deserialize column of type '${e.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;
        case "NullConstraintViolation":
          return `Null constraint violation on the ${Kn(e.cause.constraint)}`;
        case "ValueOutOfRange":
          return `Value out of range for the type: ${e.cause.cause}`;
        case "TableDoesNotExist":
          return `The table \`${e.cause.table ?? "(not available)"}\` does not exist in the current database.`;
        case "ColumnNotFound":
          return `The column \`${e.cause.column ?? "(not available)"}\` does not exist in the current database.`;
        case "InvalidIsolationLevel":
          return `Error in connector: Conversion error: ${e.cause.level}`;
        case "InconsistentColumnData":
          return `Inconsistent column data: ${e.cause.cause}`;
        case "MissingFullTextSearchIndex":
          return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";
        case "TransactionWriteConflict":
          return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";
        case "GenericJs":
          return `Error in external connector (id ${e.cause.id})`;
        case "TooManyConnections":
          return `Too many database connections opened: ${e.cause.cause}`;
        case "sqlite":
        case "postgres":
        case "mysql":
        case "mssql":
          return;
        default:
          L(e.cause, `Unknown error: ${e.cause}`);
      }
    }
    __name(Fs, "Fs");
    function Kn(e) {
      return e && "fields" in e ? `fields: (${e.fields.map((t) => `\`${t}\``).join(", ")})` : e && "index" in e ? `constraint: \`${e.index}\`` : e && "foreignKey" in e ? "foreign key" : "(not available)";
    }
    __name(Kn, "Kn");
    function Us(e, t) {
      let r = e.map((i) => t.keys.reduce((o, s) => (o[s] = De(i[s]), o), {})), n = new Set(t.nestedSelection);
      return t.arguments.map((i) => {
        let o = r.findIndex((s) => yt(s, i));
        if (o === -1) return t.expectNonEmpty ? new te("An operation failed because it depends on one or more records that were required but not found", "P2025") : null;
        {
          let s = Object.entries(e[o]).filter(([a]) => n.has(a));
          return Object.fromEntries(s);
        }
      });
    }
    __name(Us, "Us");
    l2();
    u();
    c();
    p2();
    m();
    var qs = require_dist();
    var q = class extends Error {
      static {
        __name(this, "q");
      }
      name = "DataMapperError";
    };
    function Vs(e, t, r) {
      switch (t.type) {
        case "affectedRows":
          if (typeof e != "number") throw new q(`Expected an affected rows count, got: ${typeof e} (${e})`);
          return { count: e };
        case "object":
          return Yn(e, t.fields, r, t.skipNulls);
        case "field":
          return Zn(e, "<result>", t.fieldType, r);
        default:
          L(t, `Invalid data mapping type: '${t.type}'`);
      }
    }
    __name(Vs, "Vs");
    function Yn(e, t, r, n) {
      if (e === null) return null;
      if (Array.isArray(e)) {
        let i = e;
        return n && (i = i.filter((o) => o !== null)), i.map((o) => $s(o, t, r));
      }
      if (typeof e == "object") return $s(e, t, r);
      if (typeof e == "string") {
        let i;
        try {
          i = JSON.parse(e);
        } catch (o) {
          throw new q("Expected an array or object, got a string that is not valid JSON", { cause: o });
        }
        return Yn(i, t, r, n);
      }
      throw new q(`Expected an array or an object, got: ${typeof e}`);
    }
    __name(Yn, "Yn");
    function $s(e, t, r) {
      if (typeof e != "object") throw new q(`Expected an object, but got '${typeof e}'`);
      let n = {};
      for (let [i, o] of Object.entries(t)) switch (o.type) {
        case "affectedRows":
          throw new q(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);
        case "object": {
          if (o.serializedName !== null && !Object.hasOwn(e, o.serializedName)) throw new q(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          let s = o.serializedName !== null ? e[o.serializedName] : e;
          n[i] = Yn(s, o.fields, r, o.skipNulls);
          break;
        }
        case "field":
          {
            let s = o.dbName;
            if (Object.hasOwn(e, s)) n[i] = Wc(e[s], s, o.fieldType, r);
            else throw new q(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          }
          break;
        default:
          L(o, `DataMapper: Invalid data mapping node type: '${o.type}'`);
      }
      return n;
    }
    __name($s, "$s");
    function Wc(e, t, r, n) {
      return e === null ? r.arity === "list" ? [] : null : r.arity === "list" ? e.map((o, s) => Zn(o, `${t}[${s}]`, r, n)) : Zn(e, t, r, n);
    }
    __name(Wc, "Wc");
    function Zn(e, t, r, n) {
      switch (r.type) {
        case "unsupported":
          return e;
        case "string": {
          if (typeof e != "string") throw new q(`Expected a string in column '${t}', got ${typeof e}: ${e}`);
          return e;
        }
        case "int":
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string": {
              let i = Math.trunc(Number(e));
              if (Number.isNaN(i) || !Number.isFinite(i)) throw new q(`Expected an integer in column '${t}', got string: ${e}`);
              if (!Number.isSafeInteger(i)) throw new q(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e}. Consider using BigInt type.`);
              return i;
            }
            default:
              throw new q(`Expected an integer in column '${t}', got ${typeof e}: ${e}`);
          }
        case "bigint": {
          if (typeof e != "number" && typeof e != "string") throw new q(`Expected a bigint in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "BigInt", value: e };
        }
        case "float": {
          if (typeof e == "number") return e;
          if (typeof e == "string") {
            let i = Number(e);
            if (Number.isNaN(i) && !/^[-+]?nan$/.test(e.toLowerCase())) throw new q(`Expected a float in column '${t}', got string: ${e}`);
            return i;
          }
          throw new q(`Expected a float in column '${t}', got ${typeof e}: ${e}`);
        }
        case "boolean": {
          if (typeof e == "boolean") return e;
          if (typeof e == "number") return e === 1;
          if (typeof e == "string") {
            if (e === "true" || e === "TRUE" || e === "1") return true;
            if (e === "false" || e === "FALSE" || e === "0") return false;
            throw new q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
          }
          if (Array.isArray(e)) {
            for (let i of e) if (i !== 0) return true;
            return false;
          }
          throw new q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
        }
        case "decimal":
          if (typeof e != "number" && typeof e != "string" && !qs.Decimal.isDecimal(e)) throw new q(`Expected a decimal in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "Decimal", value: e };
        case "datetime": {
          if (typeof e == "string") return { $type: "DateTime", value: Kc(e) };
          if (typeof e == "number" || e instanceof Date) return { $type: "DateTime", value: e };
          throw new q(`Expected a date in column '${t}', got ${typeof e}: ${e}`);
        }
        case "object":
          return { $type: "Json", value: Wt(e) };
        case "json":
          return { $type: "Json", value: `${e}` };
        case "bytes": {
          switch (r.encoding) {
            case "base64":
              if (typeof e != "string") throw new q(`Expected a base64-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: e };
            case "hex":
              if (typeof e != "string" || !e.startsWith("\\x")) throw new q(`Expected a hex-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: y.from(e.slice(2), "hex").toString("base64") };
            case "array":
              if (Array.isArray(e)) return { $type: "Bytes", value: y.from(e).toString("base64") };
              if (e instanceof Uint8Array) return { $type: "Bytes", value: y.from(e).toString("base64") };
              throw new q(`Expected a byte array in column '${t}', got ${typeof e}: ${e}`);
            default:
              L(r.encoding, `DataMapper: Unknown bytes encoding: ${r.encoding}`);
          }
          break;
        }
        case "enum": {
          let i = n[r.name];
          if (i === void 0) throw new q(`Unknown enum '${r.name}'`);
          let o = i[`${e}`];
          if (o === void 0) throw new q(`Value '${e}' not found in enum '${r.name}'`);
          return o;
        }
        default:
          L(r, `DataMapper: Unknown result type: ${r.type}`);
      }
    }
    __name(Zn, "Zn");
    var Gc = /\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
    function Kc(e) {
      let t = Gc.exec(e);
      if (t === null) return `${e}T00:00:00Z`;
      let r = e, [n, i, o] = t;
      if (i !== void 0 && i !== "Z" && o === void 0 ? r = `${e}:00` : i === void 0 && (r = `${e}Z`), n.length === e.length) return `1970-01-01T${r}`;
      let s = t.index - 1;
      return r[s] === " " && (r = `${r.slice(0, s)}T${r.slice(s + 1)}`), r;
    }
    __name(Kc, "Kc");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function zc(e) {
      let t = Object.entries(e);
      return t.length === 0 ? "" : (t.sort(([n], [i]) => n.localeCompare(i)), `/*${t.map(([n, i]) => {
        let o = encodeURIComponent(n), s = encodeURIComponent(i).replace(/'/g, "\\'");
        return `${o}='${s}'`;
      }).join(",")}*/`);
    }
    __name(zc, "zc");
    function Hr(e, t) {
      let r = {};
      for (let n of e) {
        let i = n(t);
        for (let [o, s] of Object.entries(i)) s !== void 0 && (r[o] = s);
      }
      return r;
    }
    __name(Hr, "Hr");
    function Bs(e, t) {
      let r = Hr(e, t);
      return zc(r);
    }
    __name(Bs, "Bs");
    function js(e, t) {
      return t ? `${e} ${t}` : e;
    }
    __name(js, "js");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var Gt;
    (function(e) {
      e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
    })(Gt || (Gt = {}));
    function Zc(e) {
      switch (e) {
        case "postgresql":
        case "postgres":
        case "prisma+postgres":
          return "postgresql";
        case "sqlserver":
          return "mssql";
        case "mysql":
        case "sqlite":
        case "cockroachdb":
        case "mongodb":
          return e;
        default:
          L(e, `Unknown provider: ${e}`);
      }
    }
    __name(Zc, "Zc");
    async function Jr({ query: e, tracingHelper: t, provider: r, onQuery: n, execute: i }) {
      return await t.runInChildSpan({ name: "db_query", kind: Gt.CLIENT, attributes: { "db.query.text": e.sql, "db.system.name": Zc(r) } }, async () => {
        let o = /* @__PURE__ */ new Date(), s = w2.now(), a = await i(), d = w2.now();
        return n?.({ timestamp: o, duration: d - s, query: e.sql, params: e.args }), a;
      });
    }
    __name(Jr, "Jr");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function He(e, t) {
      var r = "000000000" + e;
      return r.substr(r.length - t);
    }
    __name(He, "He");
    var Qs = Ue(ho(), 1);
    function Yc() {
      try {
        return Qs.default.hostname();
      } catch {
        return g.env._CLUSTER_NETWORK_NAME_ || g.env.COMPUTERNAME || "hostname";
      }
    }
    __name(Yc, "Yc");
    var Hs = 2;
    var Xc = He(g.pid.toString(36), Hs);
    var Js = Yc();
    var ep = Js.length;
    var tp = He(Js.split("").reduce(function(e, t) {
      return +e + t.charCodeAt(0);
    }, +ep + 36).toString(36), Hs);
    function Xn() {
      return Xc + tp;
    }
    __name(Xn, "Xn");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function Wr(e) {
      return typeof e == "string" && /^c[a-z0-9]{20,32}$/.test(e);
    }
    __name(Wr, "Wr");
    function ei(e) {
      let n = Math.pow(36, 4), i = 0;
      function o() {
        return He((Math.random() * n << 0).toString(36), 4);
      }
      __name(o, "o");
      function s() {
        return i = i < n ? i : 0, i++, i - 1;
      }
      __name(s, "s");
      function a() {
        var d = "c", f2 = (/* @__PURE__ */ new Date()).getTime().toString(36), P2 = He(s().toString(36), 4), A = e(), S2 = o() + o();
        return d + f2 + P2 + A + S2;
      }
      __name(a, "a");
      return a.fingerprint = e, a.isCuid = Wr, a;
    }
    __name(ei, "ei");
    var rp = ei(Xn);
    var Ws = rp;
    var Qa = Ue(Fa());
    l2();
    u();
    c();
    p2();
    m();
    Be();
    l2();
    u();
    c();
    p2();
    m();
    var Ua = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    var Bp = 128;
    var We;
    var xt;
    function jp(e) {
      !We || We.length < e ? (We = y.allocUnsafe(e * Bp), kt.getRandomValues(We), xt = 0) : xt + e > We.length && (kt.getRandomValues(We), xt = 0), xt += e;
    }
    __name(jp, "jp");
    function ui(e = 21) {
      jp(e |= 0);
      let t = "";
      for (let r = xt - e; r < xt; r++) t += Ua[We[r] & 63];
      return t;
    }
    __name(ui, "ui");
    l2();
    u();
    c();
    p2();
    m();
    Be();
    var qa = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    var er = 32;
    var Qp = 16;
    var Va = 10;
    var $a = 281474976710655;
    var Ge;
    (function(e) {
      e.Base32IncorrectEncoding = "B32_ENC_INVALID", e.DecodeTimeInvalidCharacter = "DEC_TIME_CHAR", e.DecodeTimeValueMalformed = "DEC_TIME_MALFORMED", e.EncodeTimeNegative = "ENC_TIME_NEG", e.EncodeTimeSizeExceeded = "ENC_TIME_SIZE_EXCEED", e.EncodeTimeValueMalformed = "ENC_TIME_MALFORMED", e.PRNGDetectFailure = "PRNG_DETECT", e.ULIDInvalid = "ULID_INVALID", e.Unexpected = "UNEXPECTED", e.UUIDInvalid = "UUID_INVALID";
    })(Ge || (Ge = {}));
    var Ke = class extends Error {
      static {
        __name(this, "Ke");
      }
      constructor(t, r) {
        super(`${r} (${t})`), this.name = "ULIDError", this.code = t;
      }
    };
    function Hp(e) {
      let t = Math.floor(e() * er);
      return t === er && (t = er - 1), qa.charAt(t);
    }
    __name(Hp, "Hp");
    function Jp(e) {
      let t = Wp(), r = t && (t.crypto || t.msCrypto) || (typeof rt < "u" ? rt : null);
      if (typeof r?.getRandomValues == "function") return () => {
        let n = new Uint8Array(1);
        return r.getRandomValues(n), n[0] / 255;
      };
      if (typeof r?.randomBytes == "function") return () => r.randomBytes(1).readUInt8() / 255;
      if (rt?.randomBytes) return () => rt.randomBytes(1).readUInt8() / 255;
      throw new Ke(Ge.PRNGDetectFailure, "Failed to find a reliable PRNG");
    }
    __name(Jp, "Jp");
    function Wp() {
      return zp() ? self : typeof window < "u" ? window : typeof globalThis < "u" || typeof globalThis < "u" ? globalThis : null;
    }
    __name(Wp, "Wp");
    function Gp(e, t) {
      let r = "";
      for (; e > 0; e--) r = Hp(t) + r;
      return r;
    }
    __name(Gp, "Gp");
    function Kp(e, t = Va) {
      if (isNaN(e)) throw new Ke(Ge.EncodeTimeValueMalformed, `Time must be a number: ${e}`);
      if (e > $a) throw new Ke(Ge.EncodeTimeSizeExceeded, `Cannot encode a time larger than ${$a}: ${e}`);
      if (e < 0) throw new Ke(Ge.EncodeTimeNegative, `Time must be positive: ${e}`);
      if (Number.isInteger(e) === false) throw new Ke(Ge.EncodeTimeValueMalformed, `Time must be an integer: ${e}`);
      let r, n = "";
      for (let i = t; i > 0; i--) r = e % er, n = qa.charAt(r) + n, e = (e - r) / er;
      return n;
    }
    __name(Kp, "Kp");
    function zp() {
      return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
    }
    __name(zp, "zp");
    function Ba(e, t) {
      let r = t || Jp(), n = !e || isNaN(e) ? Date.now() : e;
      return Kp(n, Va) + Gp(Qp, r);
    }
    __name(Ba, "Ba");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var z = [];
    for (let e = 0; e < 256; ++e) z.push((e + 256).toString(16).slice(1));
    function Zr(e, t = 0) {
      return (z[e[t + 0]] + z[e[t + 1]] + z[e[t + 2]] + z[e[t + 3]] + "-" + z[e[t + 4]] + z[e[t + 5]] + "-" + z[e[t + 6]] + z[e[t + 7]] + "-" + z[e[t + 8]] + z[e[t + 9]] + "-" + z[e[t + 10]] + z[e[t + 11]] + z[e[t + 12]] + z[e[t + 13]] + z[e[t + 14]] + z[e[t + 15]]).toLowerCase();
    }
    __name(Zr, "Zr");
    l2();
    u();
    c();
    p2();
    m();
    Be();
    var Xr = new Uint8Array(256);
    var Yr = Xr.length;
    function Et() {
      return Yr > Xr.length - 16 && (wr(Xr), Yr = 0), Xr.slice(Yr, Yr += 16);
    }
    __name(Et, "Et");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    Be();
    var ci = { randomUUID: hr };
    function Zp(e, t, r) {
      if (ci.randomUUID && !t && !e) return ci.randomUUID();
      e = e || {};
      let n = e.random ?? e.rng?.() ?? Et();
      if (n.length < 16) throw new Error("Random bytes length must be >= 16");
      if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
        if (r = r || 0, r < 0 || r + 16 > t.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
        for (let i = 0; i < 16; ++i) t[r + i] = n[i];
        return t;
      }
      return Zr(n);
    }
    __name(Zp, "Zp");
    var pi = Zp;
    l2();
    u();
    c();
    p2();
    m();
    var mi = {};
    function Yp(e, t, r) {
      let n;
      if (e) n = ja(e.random ?? e.rng?.() ?? Et(), e.msecs, e.seq, t, r);
      else {
        let i = Date.now(), o = Et();
        Xp(mi, i, o), n = ja(o, mi.msecs, mi.seq, t, r);
      }
      return t ?? Zr(n);
    }
    __name(Yp, "Yp");
    function Xp(e, t, r) {
      return e.msecs ??= -1 / 0, e.seq ??= 0, t > e.msecs ? (e.seq = r[6] << 23 | r[7] << 16 | r[8] << 8 | r[9], e.msecs = t) : (e.seq = e.seq + 1 | 0, e.seq === 0 && e.msecs++), e;
    }
    __name(Xp, "Xp");
    function ja(e, t, r, n, i = 0) {
      if (e.length < 16) throw new Error("Random bytes length must be >= 16");
      if (!n) n = new Uint8Array(16), i = 0;
      else if (i < 0 || i + 16 > n.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
      return t ??= Date.now(), r ??= e[6] * 127 << 24 | e[7] << 16 | e[8] << 8 | e[9], n[i++] = t / 1099511627776 & 255, n[i++] = t / 4294967296 & 255, n[i++] = t / 16777216 & 255, n[i++] = t / 65536 & 255, n[i++] = t / 256 & 255, n[i++] = t & 255, n[i++] = 112 | r >>> 28 & 15, n[i++] = r >>> 20 & 255, n[i++] = 128 | r >>> 14 & 63, n[i++] = r >>> 6 & 255, n[i++] = r << 2 & 255 | e[10] & 3, n[i++] = e[11], n[i++] = e[12], n[i++] = e[13], n[i++] = e[14], n[i++] = e[15], n;
    }
    __name(ja, "ja");
    var di = Yp;
    var en = class {
      static {
        __name(this, "en");
      }
      #t = {};
      constructor() {
        this.register("uuid", new gi()), this.register("cuid", new yi()), this.register("ulid", new hi()), this.register("nanoid", new wi()), this.register("product", new bi());
      }
      snapshot() {
        return Object.create(this.#t, { now: { value: new fi() } });
      }
      register(t, r) {
        this.#t[t] = r;
      }
    };
    var fi = class {
      static {
        __name(this, "fi");
      }
      #t = /* @__PURE__ */ new Date();
      generate() {
        return this.#t.toISOString();
      }
    };
    var gi = class {
      static {
        __name(this, "gi");
      }
      generate(t) {
        if (t === 4) return pi();
        if (t === 7) return di();
        throw new Error("Invalid UUID generator arguments");
      }
    };
    var yi = class {
      static {
        __name(this, "yi");
      }
      generate(t) {
        if (t === 1) return Ws();
        if (t === 2) return (0, Qa.createId)();
        throw new Error("Invalid CUID generator arguments");
      }
    };
    var hi = class {
      static {
        __name(this, "hi");
      }
      generate() {
        return Ba();
      }
    };
    var wi = class {
      static {
        __name(this, "wi");
      }
      generate(t) {
        if (typeof t == "number") return ui(t);
        if (t === void 0) return ui();
        throw new Error("Invalid Nanoid generator arguments");
      }
    };
    var bi = class {
      static {
        __name(this, "bi");
      }
      generate(t, r) {
        if (t === void 0 || r === void 0) throw new Error("Invalid Product generator arguments");
        return Array.isArray(t) && Array.isArray(r) ? t.flatMap((n) => r.map((i) => [n, i])) : Array.isArray(t) ? t.map((n) => [n, r]) : Array.isArray(r) ? r.map((n) => [t, n]) : [[t, r]];
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    function tn(e, t) {
      return e == null ? e : typeof e == "string" ? tn(JSON.parse(e), t) : Array.isArray(e) ? tm(e, t) : em(e, t);
    }
    __name(tn, "tn");
    function em(e, t) {
      if (t.pagination) {
        let { skip: r, take: n, cursor: i } = t.pagination;
        if (r !== null && r > 0 || n === 0 || i !== null && !yt(e, i)) return null;
      }
      return Ja(e, t.nested);
    }
    __name(em, "em");
    function Ja(e, t) {
      for (let [r, n] of Object.entries(t)) e[r] = tn(e[r], n);
      return e;
    }
    __name(Ja, "Ja");
    function tm(e, t) {
      if (t.distinct !== null) {
        let r = t.linkingFields !== null ? [...t.distinct, ...t.linkingFields] : t.distinct;
        e = rm(e, r);
      }
      return t.pagination && (e = nm(e, t.pagination, t.linkingFields)), t.reverse && e.reverse(), Object.keys(t.nested).length === 0 ? e : e.map((r) => Ja(r, t.nested));
    }
    __name(tm, "tm");
    function rm(e, t) {
      let r = /* @__PURE__ */ new Set(), n = [];
      for (let i of e) {
        let o = Tt(i, t);
        r.has(o) || (r.add(o), n.push(i));
      }
      return n;
    }
    __name(rm, "rm");
    function nm(e, t, r) {
      if (r === null) return Ha(e, t);
      let n = /* @__PURE__ */ new Map();
      for (let o of e) {
        let s = Tt(o, r);
        n.has(s) || n.set(s, []), n.get(s).push(o);
      }
      let i = Array.from(n.entries());
      return i.sort(([o], [s]) => o < s ? -1 : o > s ? 1 : 0), i.flatMap(([, o]) => Ha(o, t));
    }
    __name(nm, "nm");
    function Ha(e, { cursor: t, skip: r, take: n }) {
      let i = t !== null ? e.findIndex((a) => yt(a, t)) : 0;
      if (i === -1) return [];
      let o = i + (r ?? 0), s = n !== null ? o + n : e.length;
      return e.slice(o, s);
    }
    __name(Ha, "Ha");
    function Tt(e, t) {
      return JSON.stringify(t.map((r) => e[r]));
    }
    __name(Tt, "Tt");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function xi(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "param";
    }
    __name(xi, "xi");
    function Ei(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "generatorCall";
    }
    __name(Ei, "Ei");
    function Ai(e, t, r, n) {
      let i = e.args.map((o) => me(o, t, r));
      switch (e.type) {
        case "rawSql":
          return [sm(e.sql, i, e.argTypes)];
        case "templateSql":
          return (e.chunkable ? lm(e.fragments, i, n) : [i]).map((s) => {
            if (n !== void 0 && s.length > n) throw new te("The query parameter limit supported by your database is exceeded.", "P2029");
            return im(e.fragments, e.placeholderFormat, s, e.argTypes);
          });
        default:
          L(e.type, "Invalid query type");
      }
    }
    __name(Ai, "Ai");
    function me(e, t, r) {
      for (; am(e); ) if (xi(e)) {
        let n = t[e.prisma__value.name];
        if (n === void 0) throw new Error(`Missing value for query variable ${e.prisma__value.name}`);
        e = n;
      } else if (Ei(e)) {
        let { name: n, args: i } = e.prisma__value, o = r[n];
        if (!o) throw new Error(`Encountered an unknown generator '${n}'`);
        e = o.generate(...i.map((s) => me(s, t, r)));
      } else L(e, `Unexpected unevaluated value type: ${e}`);
      return Array.isArray(e) && (e = e.map((n) => me(n, t, r))), e;
    }
    __name(me, "me");
    function im(e, t, r, n) {
      let i = "", o = { placeholderNumber: 1 }, s = [], a = [];
      for (let d of Pi(e, r, n)) {
        if (i += om(d, t, o), d.type === "stringChunk") continue;
        let f2 = s.length, P2 = s.push(...Wa(d)) - f2;
        if (d.argType.arity === "tuple") {
          if (P2 % d.argType.elements.length !== 0) throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${P2} parameters for a tuple of arity ${d.argType.elements.length}.`);
          for (let A = 0; A < P2 / d.argType.elements.length; A++) a.push(...d.argType.elements);
        } else for (let A = 0; A < P2; A++) a.push(d.argType);
      }
      return { sql: i, args: s, argTypes: a };
    }
    __name(im, "im");
    function om(e, t, r) {
      let n = e.type;
      switch (n) {
        case "parameter":
          return Ti(t, r.placeholderNumber++);
        case "stringChunk":
          return e.chunk;
        case "parameterTuple":
          return `(${e.value.length == 0 ? "NULL" : e.value.map(() => Ti(t, r.placeholderNumber++)).join(",")})`;
        case "parameterTupleList":
          return e.value.map((i) => {
            let o = i.map(() => Ti(t, r.placeholderNumber++)).join(e.itemSeparator);
            return `${e.itemPrefix}${o}${e.itemSuffix}`;
          }).join(e.groupSeparator);
        default:
          L(n, "Invalid fragment type");
      }
    }
    __name(om, "om");
    function Ti(e, t) {
      return e.hasNumbering ? `${e.prefix}${t}` : e.prefix;
    }
    __name(Ti, "Ti");
    function sm(e, t, r) {
      return { sql: e, args: t, argTypes: r };
    }
    __name(sm, "sm");
    function am(e) {
      return xi(e) || Ei(e);
    }
    __name(am, "am");
    function* Pi(e, t, r) {
      let n = 0;
      for (let i of e) switch (i.type) {
        case "parameter": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          yield { ...i, value: t[n], argType: r?.[n] }, n++;
          break;
        }
        case "stringChunk": {
          yield i;
          break;
        }
        case "parameterTuple": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          yield { ...i, value: Array.isArray(o) ? o : [o], argType: r?.[n] }, n++;
          break;
        }
        case "parameterTupleList": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          if (!Array.isArray(o)) throw new Error("Malformed query template. Tuple list expected.");
          if (o.length === 0) throw new Error("Malformed query template. Tuple list cannot be empty.");
          for (let s of o) if (!Array.isArray(s)) throw new Error("Malformed query template. Tuple expected.");
          yield { ...i, value: o, argType: r?.[n] }, n++;
          break;
        }
      }
    }
    __name(Pi, "Pi");
    function* Wa(e) {
      switch (e.type) {
        case "parameter":
          yield e.value;
          break;
        case "stringChunk":
          break;
        case "parameterTuple":
          yield* e.value;
          break;
        case "parameterTupleList":
          for (let t of e.value) yield* t;
          break;
      }
    }
    __name(Wa, "Wa");
    function lm(e, t, r) {
      let n = 0, i = 0;
      for (let s of Pi(e, t, void 0)) {
        let a = 0;
        for (let d of Wa(s)) a++;
        i = Math.max(i, a), n += a;
      }
      let o = [[]];
      for (let s of Pi(e, t, void 0)) switch (s.type) {
        case "parameter": {
          for (let a of o) a.push(s.value);
          break;
        }
        case "stringChunk":
          break;
        case "parameterTuple": {
          let a = s.value.length, d = [];
          if (r && o.length === 1 && a === i && n > r && n - a < r) {
            let f2 = r - (n - a);
            d = um(s.value, f2);
          } else d = [s.value];
          o = o.flatMap((f2) => d.map((P2) => [...f2, P2]));
          break;
        }
        case "parameterTupleList": {
          let a = s.value.reduce((A, S2) => A + S2.length, 0), d = [], f2 = [], P2 = 0;
          for (let A of s.value) r && o.length === 1 && a === i && f2.length > 0 && n - a + P2 + A.length > r && (d.push(f2), f2 = [], P2 = 0), f2.push(A), P2 += A.length;
          f2.length > 0 && d.push(f2), o = o.flatMap((A) => d.map((S2) => [...A, S2]));
          break;
        }
      }
      return o;
    }
    __name(lm, "lm");
    function um(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n += t) r.push(e.slice(n, n + t));
      return r;
    }
    __name(um, "um");
    l2();
    u();
    c();
    p2();
    m();
    function Ga(e) {
      return e.rows.map((t) => t.reduce((r, n, i) => (r[e.columnNames[i]] = n, r), {}));
    }
    __name(Ga, "Ga");
    function Ka(e) {
      return { columns: e.columnNames, types: e.columnTypes.map((t) => cm(t)), rows: e.rows.map((t) => t.map((r, n) => Pt(r, e.columnTypes[n]))) };
    }
    __name(Ka, "Ka");
    function Pt(e, t) {
      if (e === null) return null;
      switch (t) {
        case I.Int32:
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string":
              return Math.trunc(Number(e));
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int32`);
          }
        case I.Int32Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int32Array`);
          return e.map((r) => Pt(r, I.Int32));
        case I.Int64:
          switch (typeof e) {
            case "number":
              return BigInt(Math.trunc(e));
            case "string":
              return e;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int64`);
          }
        case I.Int64Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int64Array`);
          return e.map((r) => Pt(r, I.Int64));
        case I.Json:
          switch (typeof e) {
            case "string":
              return JSON.parse(e);
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Json`);
          }
        case I.JsonArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as JsonArray`);
          return e.map((r) => Pt(r, I.Json));
        case I.Bytes:
          if (Array.isArray(e)) return new Uint8Array(e);
          throw new Error(`Cannot serialize value of type ${typeof e} as Bytes`);
        case I.BytesArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as BytesArray`);
          return e.map((r) => Pt(r, I.Bytes));
        case I.Boolean:
          switch (typeof e) {
            case "boolean":
              return e;
            case "string":
              return e === "true" || e === "1";
            case "number":
              return e === 1;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Boolean`);
          }
        case I.BooleanArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as BooleanArray`);
          return e.map((r) => Pt(r, I.Boolean));
        default:
          return e;
      }
    }
    __name(Pt, "Pt");
    function cm(e) {
      switch (e) {
        case I.Int32:
          return "int";
        case I.Int64:
          return "bigint";
        case I.Float:
          return "float";
        case I.Double:
          return "double";
        case I.Text:
          return "string";
        case I.Enum:
          return "enum";
        case I.Bytes:
          return "bytes";
        case I.Boolean:
          return "bool";
        case I.Character:
          return "char";
        case I.Numeric:
          return "decimal";
        case I.Json:
          return "json";
        case I.Uuid:
          return "uuid";
        case I.DateTime:
          return "datetime";
        case I.Date:
          return "date";
        case I.Time:
          return "time";
        case I.Int32Array:
          return "int-array";
        case I.Int64Array:
          return "bigint-array";
        case I.FloatArray:
          return "float-array";
        case I.DoubleArray:
          return "double-array";
        case I.TextArray:
          return "string-array";
        case I.EnumArray:
          return "string-array";
        case I.BytesArray:
          return "bytes-array";
        case I.BooleanArray:
          return "bool-array";
        case I.CharacterArray:
          return "char-array";
        case I.NumericArray:
          return "decimal-array";
        case I.JsonArray:
          return "json-array";
        case I.UuidArray:
          return "uuid-array";
        case I.DateTimeArray:
          return "datetime-array";
        case I.DateArray:
          return "date-array";
        case I.TimeArray:
          return "time-array";
        case I.UnknownNumber:
          return "unknown";
        case I.Set:
          return "string";
        default:
          L(e, `Unexpected column type: ${e}`);
      }
    }
    __name(cm, "cm");
    l2();
    u();
    c();
    p2();
    m();
    function za(e, t, r) {
      if (!t.every((n) => vi(e, n))) {
        let n = pm(e, r), i = mm(r);
        throw new te(n, i, r.context);
      }
    }
    __name(za, "za");
    function vi(e, t) {
      switch (t.type) {
        case "rowCountEq":
          return Array.isArray(e) ? e.length === t.args : e === null ? t.args === 0 : t.args === 1;
        case "rowCountNeq":
          return Array.isArray(e) ? e.length !== t.args : e === null ? t.args !== 0 : t.args !== 1;
        case "affectedRowCountEq":
          return e === t.args;
        case "never":
          return false;
        default:
          L(t, `Unknown rule type: ${t.type}`);
      }
    }
    __name(vi, "vi");
    function pm(e, t) {
      switch (t.error_identifier) {
        case "RELATION_VIOLATION":
          return `The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;
        case "MISSING_RECORD":
          return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;
        case "MISSING_RELATED_RECORD": {
          let r = t.context.neededFor ? ` (needed to ${t.context.neededFor})` : "";
          return `An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`;
        }
        case "INCOMPLETE_CONNECT_INPUT":
          return `An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e) ? e.length : e}.`;
        case "INCOMPLETE_CONNECT_OUTPUT":
          return `The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e) ? e.length : e}.`;
        case "RECORDS_NOT_CONNECTED":
          return `The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;
        default:
          L(t, `Unknown error identifier: ${t}`);
      }
    }
    __name(pm, "pm");
    function mm(e) {
      switch (e.error_identifier) {
        case "RELATION_VIOLATION":
          return "P2014";
        case "RECORDS_NOT_CONNECTED":
          return "P2017";
        case "INCOMPLETE_CONNECT_OUTPUT":
          return "P2018";
        case "MISSING_RECORD":
        case "MISSING_RELATED_RECORD":
        case "INCOMPLETE_CONNECT_INPUT":
          return "P2025";
        default:
          L(e, `Unknown error identifier: ${e}`);
      }
    }
    __name(mm, "mm");
    var tr = class e {
      static {
        __name(this, "e");
      }
      #t;
      #e;
      #r;
      #n = new en();
      #l;
      #i;
      #s;
      #o;
      #u;
      #a;
      constructor({ transactionManager: t, placeholderValues: r, onQuery: n, tracingHelper: i, serializer: o, rawSerializer: s, provider: a, connectionInfo: d, sqlCommenter: f2 }) {
        this.#t = t, this.#e = r, this.#r = n, this.#l = i, this.#i = o, this.#s = s ?? o, this.#o = a, this.#u = d, this.#a = f2;
      }
      static forSql(t) {
        return new e({ transactionManager: t.transactionManager, placeholderValues: t.placeholderValues, onQuery: t.onQuery, tracingHelper: t.tracingHelper, serializer: Ga, rawSerializer: Ka, provider: t.provider, connectionInfo: t.connectionInfo, sqlCommenter: t.sqlCommenter });
      }
      async run(t, r) {
        let { value: n } = await this.interpretNode(t, r, this.#e, this.#n.snapshot()).catch((i) => ht(i));
        return n;
      }
      async interpretNode(t, r, n, i) {
        switch (t.type) {
          case "value":
            return { value: me(t.args, n, i) };
          case "seq": {
            let o;
            for (let s of t.args) o = await this.interpretNode(s, r, n, i);
            return o ?? { value: void 0 };
          }
          case "get":
            return { value: n[t.args.name] };
          case "let": {
            let o = Object.create(n);
            for (let s of t.args.bindings) {
              let { value: a } = await this.interpretNode(s.expr, r, o, i);
              o[s.name] = a;
            }
            return this.interpretNode(t.args.expr, r, o, i);
          }
          case "getFirstNonEmpty": {
            for (let o of t.args.names) {
              let s = n[o];
              if (!Za(s)) return { value: s };
            }
            return { value: [] };
          }
          case "concat": {
            let o = await Promise.all(t.args.map((s) => this.interpretNode(s, r, n, i).then((a) => a.value)));
            return { value: o.length > 0 ? o.reduce((s, a) => s.concat(Ci(a)), []) : [] };
          }
          case "sum": {
            let o = await Promise.all(t.args.map((s) => this.interpretNode(s, r, n, i).then((a) => a.value)));
            return { value: o.length > 0 ? o.reduce((s, a) => Ee(s) + Ee(a)) : 0 };
          }
          case "execute": {
            let o = Ai(t.args, n, i, this.#c()), s = 0;
            for (let a of o) {
              let d = this.#d(a);
              s += await this.#m(d, r, () => r.executeRaw(d).catch((f2) => t.args.type === "rawSql" ? zn(f2) : ht(f2)));
            }
            return { value: s };
          }
          case "query": {
            let o = Ai(t.args, n, i, this.#c()), s;
            for (let a of o) {
              let d = this.#d(a), f2 = await this.#m(d, r, () => r.queryRaw(d).catch((P2) => t.args.type === "rawSql" ? zn(P2) : ht(P2)));
              s === void 0 ? s = f2 : (s.rows.push(...f2.rows), s.lastInsertId = f2.lastInsertId);
            }
            return { value: t.args.type === "rawSql" ? this.#s(s) : this.#i(s), lastInsertId: s?.lastInsertId };
          }
          case "reverse": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args, r, n, i);
            return { value: Array.isArray(o) ? o.reverse() : o, lastInsertId: s };
          }
          case "unique": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args, r, n, i);
            if (!Array.isArray(o)) return { value: o, lastInsertId: s };
            if (o.length > 1) throw new Error(`Expected zero or one element, got ${o.length}`);
            return { value: o[0] ?? null, lastInsertId: s };
          }
          case "required": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args, r, n, i);
            if (Za(o)) throw new Error("Required value is empty");
            return { value: o, lastInsertId: s };
          }
          case "mapField": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args.records, r, n, i);
            return { value: Ya(o, t.args.field), lastInsertId: s };
          }
          case "join": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args.parent, r, n, i);
            if (o === null) return { value: null, lastInsertId: s };
            let a = await Promise.all(t.args.children.map(async (d) => ({ joinExpr: d, childRecords: (await this.interpretNode(d.child, r, n, i)).value })));
            return { value: dm(o, a), lastInsertId: s };
          }
          case "transaction": {
            if (!this.#t.enabled) return this.interpretNode(t.args, r, n, i);
            let o = this.#t.manager, s = await o.startInternalTransaction(), a = await o.getTransaction(s, "query");
            try {
              let d = await this.interpretNode(t.args, a, n, i);
              return await o.commitTransaction(s.id), d;
            } catch (d) {
              throw await o.rollbackTransaction(s.id), d;
            }
          }
          case "dataMap": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args.expr, r, n, i);
            return { value: Vs(o, t.args.structure, t.args.enums), lastInsertId: s };
          }
          case "validate": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args.expr, r, n, i);
            return za(o, t.args.rules, t.args), { value: o, lastInsertId: s };
          }
          case "if": {
            let { value: o } = await this.interpretNode(t.args.value, r, n, i);
            return vi(o, t.args.rule) ? await this.interpretNode(t.args.then, r, n, i) : await this.interpretNode(t.args.else, r, n, i);
          }
          case "unit":
            return { value: void 0 };
          case "diff": {
            let { value: o } = await this.interpretNode(t.args.from, r, n, i), { value: s } = await this.interpretNode(t.args.to, r, n, i), a = /* @__PURE__ */ __name((f2) => f2 !== null ? Tt(rn(f2), t.args.fields) : null, "a"), d = new Set(Ci(s).map(a));
            return { value: Ci(o).filter((f2) => !d.has(a(f2))) };
          }
          case "process": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args.expr, r, n, i);
            return { value: tn(o, t.args.operations), lastInsertId: s };
          }
          case "initializeRecord": {
            let { lastInsertId: o } = await this.interpretNode(t.args.expr, r, n, i), s = {};
            for (let [a, d] of Object.entries(t.args.fields)) s[a] = fm(d, o, n, i);
            return { value: s, lastInsertId: o };
          }
          case "mapRecord": {
            let { value: o, lastInsertId: s } = await this.interpretNode(t.args.expr, r, n, i), a = o === null ? {} : rn(o);
            for (let [d, f2] of Object.entries(t.args.fields)) a[d] = gm(f2, a[d], n, i);
            return { value: a, lastInsertId: s };
          }
          default:
            L(t, `Unexpected node type: ${t.type}`);
        }
      }
      #c() {
        return this.#u?.maxBindValues !== void 0 ? this.#u.maxBindValues : this.#p();
      }
      #p() {
        if (this.#o !== void 0) switch (this.#o) {
          case "cockroachdb":
          case "postgres":
          case "postgresql":
          case "prisma+postgres":
            return 32766;
          case "mysql":
            return 65535;
          case "sqlite":
            return 999;
          case "sqlserver":
            return 2098;
          case "mongodb":
            return;
          default:
            L(this.#o, `Unexpected provider: ${this.#o}`);
        }
      }
      #m(t, r, n) {
        return Jr({ query: t, execute: n, provider: this.#o ?? r.provider, tracingHelper: this.#l, onQuery: this.#r });
      }
      #d(t) {
        if (!this.#a || this.#a.plugins.length === 0) return t;
        let r = Bs(this.#a.plugins, { query: this.#a.queryInfo, sql: t.sql });
        return r ? { ...t, sql: js(t.sql, r) } : t;
      }
    };
    function Za(e) {
      return Array.isArray(e) ? e.length === 0 : e == null;
    }
    __name(Za, "Za");
    function Ci(e) {
      return Array.isArray(e) ? e : [e];
    }
    __name(Ci, "Ci");
    function Ee(e) {
      if (typeof e == "number") return e;
      if (typeof e == "string") return Number(e);
      throw new Error(`Expected number, got ${typeof e}`);
    }
    __name(Ee, "Ee");
    function rn(e) {
      if (typeof e == "object" && e !== null) return e;
      throw new Error(`Expected object, got ${typeof e}`);
    }
    __name(rn, "rn");
    function Ya(e, t) {
      return Array.isArray(e) ? e.map((r) => Ya(r, t)) : typeof e == "object" && e !== null ? e[t] ?? null : e;
    }
    __name(Ya, "Ya");
    function dm(e, t) {
      for (let { joinExpr: r, childRecords: n } of t) {
        let i = r.on.map(([a]) => a), o = r.on.map(([, a]) => a), s = {};
        for (let a of Array.isArray(e) ? e : [e]) {
          let d = rn(a), f2 = Tt(d, i);
          s[f2] || (s[f2] = []), s[f2].push(d), r.isRelationUnique ? d[r.parentField] = null : d[r.parentField] = [];
        }
        for (let a of Array.isArray(n) ? n : [n]) {
          if (a === null) continue;
          let d = Tt(rn(a), o);
          for (let f2 of s[d] ?? []) r.isRelationUnique ? f2[r.parentField] = a : f2[r.parentField].push(a);
        }
      }
      return e;
    }
    __name(dm, "dm");
    function fm(e, t, r, n) {
      switch (e.type) {
        case "value":
          return me(e.value, r, n);
        case "lastInsertId":
          return t;
        default:
          L(e, `Unexpected field initializer type: ${e.type}`);
      }
    }
    __name(fm, "fm");
    function gm(e, t, r, n) {
      switch (e.type) {
        case "set":
          return me(e.value, r, n);
        case "add":
          return Ee(t) + Ee(me(e.value, r, n));
        case "subtract":
          return Ee(t) - Ee(me(e.value, r, n));
        case "multiply":
          return Ee(t) * Ee(me(e.value, r, n));
        case "divide": {
          let i = Ee(t), o = Ee(me(e.value, r, n));
          return o === 0 ? null : i / o;
        }
        default:
          L(e, `Unexpected field operation type: ${e.type}`);
      }
    }
    __name(gm, "gm");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    async function ym() {
      return globalThis.crypto ?? await Promise.resolve().then(() => (Be(), In));
    }
    __name(ym, "ym");
    async function Xa() {
      return (await ym()).randomUUID();
    }
    __name(Xa, "Xa");
    l2();
    u();
    c();
    p2();
    m();
    async function el(e, t) {
      return new Promise((r) => {
        e.addEventListener(t, r, { once: true });
      });
    }
    __name(el, "el");
    l2();
    u();
    c();
    p2();
    m();
    var ue = class extends te {
      static {
        __name(this, "ue");
      }
      name = "TransactionManagerError";
      constructor(t, r) {
        super("Transaction API error: " + t, "P2028", r);
      }
    };
    var rr = class extends ue {
      static {
        __name(this, "rr");
      }
      constructor() {
        super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");
      }
    };
    var nn = class extends ue {
      static {
        __name(this, "nn");
      }
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`);
      }
    };
    var on2 = class extends ue {
      static {
        __name(this, "on");
      }
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`);
      }
    };
    var sn = class extends ue {
      static {
        __name(this, "sn");
      }
      constructor() {
        super("Unable to start a transaction in the given time.");
      }
    };
    var an = class extends ue {
      static {
        __name(this, "an");
      }
      constructor(t, { timeout: r, timeTaken: n }) {
        super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`, { operation: t, timeout: r, timeTaken: n });
      }
    };
    var At = class extends ue {
      static {
        __name(this, "At");
      }
      constructor(t) {
        super(`Internal Consistency Error: ${t}`);
      }
    };
    var ln = class extends ue {
      static {
        __name(this, "ln");
      }
      constructor(t) {
        super(`Invalid isolation level: ${t}`, { isolationLevel: t });
      }
    };
    var hm = 100;
    var nr = Y("prisma:client:transactionManager");
    var wm = /* @__PURE__ */ __name(() => ({ sql: "COMMIT", args: [], argTypes: [] }), "wm");
    var bm = /* @__PURE__ */ __name(() => ({ sql: "ROLLBACK", args: [], argTypes: [] }), "bm");
    var xm = /* @__PURE__ */ __name(() => ({ sql: '-- Implicit "COMMIT" query via underlying driver', args: [], argTypes: [] }), "xm");
    var Em = /* @__PURE__ */ __name(() => ({ sql: '-- Implicit "ROLLBACK" query via underlying driver', args: [], argTypes: [] }), "Em");
    var ir = class {
      static {
        __name(this, "ir");
      }
      transactions = /* @__PURE__ */ new Map();
      closedTransactions = [];
      driverAdapter;
      transactionOptions;
      tracingHelper;
      #t;
      #e;
      constructor({ driverAdapter: t, transactionOptions: r, tracingHelper: n, onQuery: i, provider: o }) {
        this.driverAdapter = t, this.transactionOptions = r, this.tracingHelper = n, this.#t = i, this.#e = o;
      }
      async startInternalTransaction(t) {
        let r = t !== void 0 ? this.#s(t) : {};
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async startTransaction(t) {
        let r = t !== void 0 ? this.#s(t) : this.transactionOptions;
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async #r(t) {
        let r = { id: await Xa(), status: "waiting", timer: void 0, timeout: t.timeout, startedAt: Date.now(), transaction: void 0 }, n = new AbortController(), i = tl(() => n.abort(), t.maxWait);
        switch (i?.unref?.(), r.transaction = await Promise.race([this.driverAdapter.startTransaction(t.isolationLevel).catch(ht).finally(() => clearTimeout(i)), el(n.signal, "abort").then(() => {
        })]), this.transactions.set(r.id, r), r.status) {
          case "waiting":
            if (n.signal.aborted) throw await this.#i(r, "timed_out"), new sn();
            return r.status = "running", r.timer = this.#l(r.id, t.timeout), { id: r.id };
          case "timed_out":
          case "running":
          case "committed":
          case "rolled_back":
            throw new At(`Transaction in invalid state ${r.status} although it just finished startup.`);
          default:
            L(r.status, "Unknown transaction status.");
        }
      }
      async commitTransaction(t) {
        return await this.tracingHelper.runInChildSpan("commit_transaction", async () => {
          let r = this.#n(t, "commit");
          await this.#i(r, "committed");
        });
      }
      async rollbackTransaction(t) {
        return await this.tracingHelper.runInChildSpan("rollback_transaction", async () => {
          let r = this.#n(t, "rollback");
          await this.#i(r, "rolled_back");
        });
      }
      async getTransaction(t, r) {
        let n = this.#n(t.id, r);
        if (n.status === "closing" && (await n.closing, n = this.#n(t.id, r)), !n.transaction) throw new rr();
        return n.transaction;
      }
      #n(t, r) {
        let n = this.transactions.get(t);
        if (!n) {
          let i = this.closedTransactions.find((o) => o.id === t);
          if (i) switch (nr("Transaction already closed.", { transactionId: t, status: i.status }), i.status) {
            case "closing":
            case "waiting":
            case "running":
              throw new At("Active transaction found in closed transactions list.");
            case "committed":
              throw new nn(r);
            case "rolled_back":
              throw new on2(r);
            case "timed_out":
              throw new an(r, { timeout: i.timeout, timeTaken: Date.now() - i.startedAt });
          }
          else throw nr("Transaction not found.", t), new rr();
        }
        if (["committed", "rolled_back", "timed_out"].includes(n.status)) throw new At("Closed transaction found in active transactions map.");
        return n;
      }
      async cancelAllTransactions() {
        await Promise.allSettled([...this.transactions.values()].map((t) => this.#i(t, "rolled_back")));
      }
      #l(t, r) {
        let n = Date.now(), i = tl(async () => {
          nr("Transaction timed out.", { transactionId: t, timeoutStartedAt: n, timeout: r });
          let o = this.transactions.get(t);
          o && ["running", "waiting"].includes(o.status) ? await this.#i(o, "timed_out") : nr("Transaction already committed or rolled back when timeout happened.", t);
        }, r);
        return i?.unref?.(), i;
      }
      async #i(t, r) {
        let n = /* @__PURE__ */ __name(async () => {
          nr("Closing transaction.", { transactionId: t.id, status: r });
          try {
            if (t.transaction && r === "committed") if (t.transaction.options.usePhantomQuery) await this.#o(xm(), t.transaction, () => t.transaction.commit());
            else {
              let i = wm();
              await this.#o(i, t.transaction, () => t.transaction.executeRaw(i)).then(() => t.transaction.commit(), (o) => {
                let s = /* @__PURE__ */ __name(() => Promise.reject(o), "s");
                return t.transaction.rollback().then(s, s);
              });
            }
            else if (t.transaction) if (t.transaction.options.usePhantomQuery) await this.#o(Em(), t.transaction, () => t.transaction.rollback());
            else {
              let i = bm();
              try {
                await this.#o(i, t.transaction, () => t.transaction.executeRaw(i));
              } finally {
                await t.transaction.rollback();
              }
            }
          } finally {
            t.status = r, clearTimeout(t.timer), t.timer = void 0, this.transactions.delete(t.id), this.closedTransactions.push(t), this.closedTransactions.length > hm && this.closedTransactions.shift();
          }
        }, "n");
        t.status === "closing" ? (await t.closing, this.#n(t.id, r === "committed" ? "commit" : "rollback")) : await Object.assign(t, { status: "closing", reason: r, closing: n() }).closing;
      }
      #s(t) {
        if (!t.timeout) throw new ue("timeout is required");
        if (!t.maxWait) throw new ue("maxWait is required");
        if (t.isolationLevel === "SNAPSHOT") throw new ln(t.isolationLevel);
        return { ...t, timeout: t.timeout, maxWait: t.maxWait };
      }
      #o(t, r, n) {
        return Jr({ query: t, execute: n, provider: this.#e ?? r.provider, tracingHelper: this.tracingHelper, onQuery: this.#t });
      }
    };
    function tl(e, t) {
      return t !== void 0 ? setTimeout(e, t) : void 0;
    }
    __name(tl, "tl");
    var Z = require_dist();
    var un = "7.1.0";
    l2();
    u();
    c();
    p2();
    m();
    function rl(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(rl, "rl");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    function nl(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    __name(nl, "nl");
    l2();
    u();
    c();
    p2();
    m();
    function il(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    __name(il, "il");
    l2();
    u();
    c();
    p2();
    m();
    var ol = Ue(vo());
    function sl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, ol.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    __name(sl, "sl");
    function al({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let a = fo(6e3 - (s?.length ?? 0)), d = il(nt(a)), f2 = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", P2 = nt(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${g.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${f2}

## Logs
\`\`\`
${d}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? nl(s) : ""}
\`\`\`
`), A = sl({ title: r, body: P2 });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${yr(A)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    __name(al, "al");
    l2();
    u();
    c();
    p2();
    m();
    var cn = class e {
      static {
        __name(this, "e");
      }
      #t;
      #e;
      #r;
      #n;
      constructor(t, r, n) {
        this.#t = t, this.#e = r, this.#r = n, this.#n = r.getConnectionInfo?.();
      }
      static async connect(t) {
        let r, n;
        try {
          r = await t.driverAdapterFactory.connect(), n = new ir({ driverAdapter: r, transactionOptions: t.transactionOptions, tracingHelper: t.tracingHelper, onQuery: t.onQuery, provider: t.provider });
        } catch (i) {
          throw await r?.dispose(), i;
        }
        return new e(t, r, n);
      }
      getConnectionInfo() {
        let t = this.#n ?? { supportsRelationJoins: false };
        return Promise.resolve({ provider: this.#e.provider, connectionInfo: t });
      }
      async execute({ plan: t, placeholderValues: r, transaction: n, batchIndex: i, queryInfo: o }) {
        let s = n ? await this.#r.getTransaction(n, i !== void 0 ? "batch query" : "query") : this.#e;
        return await tr.forSql({ transactionManager: n ? { enabled: false } : { enabled: true, manager: this.#r }, placeholderValues: r, onQuery: this.#t.onQuery, tracingHelper: this.#t.tracingHelper, provider: this.#t.provider, connectionInfo: this.#n, sqlCommenter: this.#t.sqlCommenters && { plugins: this.#t.sqlCommenters, queryInfo: o } }).run(t, s);
      }
      async startTransaction(t) {
        return { ...await this.#r.startTransaction(t), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#r.commitTransaction(t.id);
      }
      async rollbackTransaction(t) {
        await this.#r.rollbackTransaction(t.id);
      }
      async disconnect() {
        try {
          await this.#r.cancelAllTransactions();
        } finally {
          await this.#e.dispose();
        }
      }
      apiKey() {
        return null;
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var dl = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    var pn = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    function ll(e, t, r) {
      let n = r || {}, i = n.encode || encodeURIComponent;
      if (typeof i != "function") throw new TypeError("option encode is invalid");
      if (!pn.test(e)) throw new TypeError("argument name is invalid");
      let o = i(t);
      if (o && !pn.test(o)) throw new TypeError("argument val is invalid");
      let s = e + "=" + o;
      if (n.maxAge !== void 0 && n.maxAge !== null) {
        let a = n.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a);
      }
      if (n.domain) {
        if (!pn.test(n.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + n.domain;
      }
      if (n.path) {
        if (!pn.test(n.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + n.path;
      }
      if (n.expires) {
        if (!Pm(n.expires) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
        s += "; Expires=" + n.expires.toUTCString();
      }
      if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority) {
        case "low": {
          s += "; Priority=Low";
          break;
        }
        case "medium": {
          s += "; Priority=Medium";
          break;
        }
        case "high": {
          s += "; Priority=High";
          break;
        }
        default:
          throw new TypeError("option priority is invalid");
      }
      if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
        case true: {
          s += "; SameSite=Strict";
          break;
        }
        case "lax": {
          s += "; SameSite=Lax";
          break;
        }
        case "strict": {
          s += "; SameSite=Strict";
          break;
        }
        case "none": {
          s += "; SameSite=None";
          break;
        }
        default:
          throw new TypeError("option sameSite is invalid");
      }
      return n.partitioned && (s += "; Partitioned"), s;
    }
    __name(ll, "ll");
    function Pm(e) {
      return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
    }
    __name(Pm, "Pm");
    function ul(e, t) {
      let r = (e || "").split(";").filter((d) => typeof d == "string" && !!d.trim()), n = r.shift() || "", i = Am(n), o = i.name, s = i.value;
      try {
        s = t?.decode === false ? s : (t?.decode || decodeURIComponent)(s);
      } catch {
      }
      let a = { name: o, value: s };
      for (let d of r) {
        let f2 = d.split("="), P2 = (f2.shift() || "").trimStart().toLowerCase(), A = f2.join("=");
        switch (P2) {
          case "expires": {
            a.expires = new Date(A);
            break;
          }
          case "max-age": {
            a.maxAge = Number.parseInt(A, 10);
            break;
          }
          case "secure": {
            a.secure = true;
            break;
          }
          case "httponly": {
            a.httpOnly = true;
            break;
          }
          case "samesite": {
            a.sameSite = A;
            break;
          }
          default:
            a[P2] = A;
        }
      }
      return a;
    }
    __name(ul, "ul");
    function Am(e) {
      let t = "", r = "", n = e.split("=");
      return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, { name: t, value: r };
    }
    __name(Am, "Am");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var mn = class extends Error {
      static {
        __name(this, "mn");
      }
      clientVersion;
      cause;
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var dn = class extends mn {
      static {
        __name(this, "dn");
      }
      isRetryable;
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    function cl(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(cl, "cl");
    var ze = class extends dn {
      static {
        __name(this, "ze");
      }
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(t, r) {
        super(t, cl(r, false));
      }
    };
    Nt(ze, "InvalidDatasourceError");
    function pl(e) {
      let t = { clientVersion: e.clientVersion }, r;
      try {
        r = new URL(e.accelerateUrl);
      } catch (d) {
        let f2 = d.message;
        throw new ze(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${f2}`, t);
      }
      let { protocol: n, searchParams: i } = r;
      if (n !== "prisma:" && n !== xr) throw new ze("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`", t);
      let o = i.get("api_key");
      if (o === null || o.length < 1) throw new ze("Error validating `accelerateUrl`: the URL must contain a valid API key", t);
      let s = On(r) ? "http:" : "https:";
      g.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && r.searchParams.has("use_http") && (s = "http:");
      let a = new URL(r.href.replace(n, s));
      return { apiKey: o, url: a };
    }
    __name(pl, "pl");
    l2();
    u();
    c();
    p2();
    m();
    var ml = Ue(bo());
    var fn = class {
      static {
        __name(this, "fn");
      }
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, transactionId: r } = {}) {
        let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": ml.enginesVersion };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-Transaction-Id"] = r);
        let i = this.#t();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
      }
      #t() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    function vm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(vm, "vm");
    function Si(e) {
      return new Date(vm(e));
    }
    __name(Si, "Si");
    var fl = Y("prisma:client:clientEngine:remoteExecutor");
    var gn = class {
      static {
        __name(this, "gn");
      }
      #t;
      #e;
      #r;
      #n;
      #l;
      #i;
      constructor(t) {
        this.#t = t.clientVersion, this.#n = t.logEmitter, this.#l = t.tracingHelper, this.#i = t.sqlCommenters;
        let { url: r, apiKey: n } = pl({ clientVersion: t.clientVersion, accelerateUrl: t.accelerateUrl });
        this.#r = new Ri(r), this.#e = new fn({ apiKey: n, engineHash: t.clientVersion, logLevel: t.logLevel, logQueries: t.logQueries, tracingHelper: t.tracingHelper });
      }
      async getConnectionInfo() {
        return await this.#s({ path: "/connection-info", method: "GET" });
      }
      async execute({ plan: t, placeholderValues: r, batchIndex: n, model: i, operation: o, transaction: s, customFetch: a, queryInfo: d }) {
        let f2 = d && this.#i?.length ? Hr(this.#i, { query: d }) : void 0;
        return (await this.#s({ path: s ? `/transaction/${s.id}/query` : "/query", method: "POST", body: { model: i, operation: o, plan: t, params: r, comments: f2 && Object.keys(f2).length > 0 ? f2 : void 0 }, batchRequestIdx: n, fetch: a })).data;
      }
      async startTransaction(t) {
        return { ...await this.#s({ path: "/transaction/start", method: "POST", body: t }), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#s({ path: `/transaction/${t.id}/commit`, method: "POST" });
      }
      async rollbackTransaction(t) {
        await this.#s({ path: `/transaction/${t.id}/rollback`, method: "POST" });
      }
      disconnect() {
        return Promise.resolve();
      }
      apiKey() {
        return this.#e.apiKey;
      }
      async #s({ path: t, method: r, body: n, fetch: i = globalThis.fetch, batchRequestIdx: o }) {
        let s = await this.#r.request({ method: r, path: t, headers: this.#e.build(), body: n, fetch: i });
        s.ok || await this.#o(s, o);
        let a = await s.json();
        return typeof a.extensions == "object" && a.extensions !== null && this.#u(a.extensions), a;
      }
      async #o(t, r) {
        let n = t.headers.get("Prisma-Error-Code"), i = await t.text(), o, s = i;
        try {
          o = JSON.parse(i);
        } catch {
          o = {};
        }
        typeof o.code == "string" && (n = o.code), typeof o.error == "string" ? s = o.error : typeof o.message == "string" ? s = o.message : typeof o.InvalidRequestError == "object" && o.InvalidRequestError !== null && typeof o.InvalidRequestError.reason == "string" && (s = o.InvalidRequestError.reason), s = s || `HTTP ${t.status}: ${t.statusText}`;
        let a = typeof o.meta == "object" && o.meta !== null ? o.meta : o;
        throw new dl.PrismaClientKnownRequestError(s, { clientVersion: this.#t, code: n ?? "P6000", batchRequestIdx: r, meta: a });
      }
      #u(t) {
        if (t.logs) for (let r of t.logs) this.#a(r);
        t.traces && this.#l.dispatchEngineSpans(t.traces);
      }
      #a(t) {
        switch (t.level) {
          case "debug":
          case "trace":
            fl(t);
            break;
          case "error":
          case "warn":
          case "info": {
            this.#n.emit(t.level, { timestamp: Si(t.timestamp), message: t.attributes.message ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          case "query": {
            this.#n.emit("query", { query: t.attributes.query ?? "", timestamp: Si(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          default:
            throw new Error(`Unexpected log level: ${t.level}`);
        }
      }
    };
    var Ri = class {
      static {
        __name(this, "Ri");
      }
      #t;
      #e;
      #r;
      constructor(t) {
        this.#t = t, this.#e = /* @__PURE__ */ new Map();
      }
      async request({ method: t, path: r, headers: n, body: i, fetch: o }) {
        let s = new URL(r, this.#t), a = this.#n(s);
        a && (n.Cookie = a), this.#r && (n["Accelerate-Query-Engine-Jwt"] = this.#r);
        let d = await o(s.href, { method: t, body: i !== void 0 ? JSON.stringify(i) : void 0, headers: n });
        return fl(t, s, d.status, d.statusText), this.#r = d.headers.get("Accelerate-Query-Engine-Jwt") ?? void 0, this.#l(s, d), d;
      }
      #n(t) {
        let r = [], n = /* @__PURE__ */ new Date();
        for (let [i, o] of this.#e) {
          if (o.expires && o.expires < n) {
            this.#e.delete(i);
            continue;
          }
          let s = o.domain ?? t.hostname, a = o.path ?? "/";
          t.hostname.endsWith(s) && t.pathname.startsWith(a) && r.push(ll(o.name, o.value));
        }
        return r.length > 0 ? r.join("; ") : void 0;
      }
      #l(t, r) {
        let n = r.headers.getSetCookie?.() || [];
        if (n.length === 0) {
          let i = r.headers.get("Set-Cookie");
          i && n.push(i);
        }
        for (let i of n) {
          let o = ul(i), s = o.domain ?? t.hostname, a = o.path ?? "/", d = `${s}:${a}:${o.name}`;
          this.#e.set(d, { name: o.name, value: o.value, domain: s, path: a, expires: o.expires });
        }
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var Oi = require_dist();
    var Ii = {};
    var gl = { async loadQueryCompiler(e) {
      let { clientVersion: t, compilerWasm: r } = e;
      if (r === void 0) throw new Oi.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`", t);
      let n;
      return e.activeProvider === void 0 || Ii[e.activeProvider] === void 0 ? (n = (async () => {
        let i = await r.getRuntime(), o = await r.getQueryCompilerWasmModule();
        if (o == null) throw new Oi.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let s = { "./query_compiler_bg.js": i }, a = new WebAssembly.Instance(o, s), d = a.exports.__wbindgen_start;
        return i.__wbg_set_wasm(a.exports), d(), i.QueryCompiler;
      })(), e.activeProvider !== void 0 && (Ii[e.activeProvider] = n)) : n = Ii[e.activeProvider], await n;
    } };
    var Cm = "P2038";
    var or = Y("prisma:client:clientEngine");
    var hl = globalThis;
    hl.PRISMA_WASM_PANIC_REGISTRY = { set_message(e) {
      throw new Z.PrismaClientRustPanicError(e, un);
    } };
    var sr = class {
      static {
        __name(this, "sr");
      }
      name = "ClientEngine";
      #t;
      #e = { type: "disconnected" };
      #r;
      #n;
      config;
      datamodel;
      logEmitter;
      logQueries;
      logLevel;
      tracingHelper;
      #l;
      constructor(t, r) {
        if (t.accelerateUrl !== void 0) this.#n = { remote: true, accelerateUrl: t.accelerateUrl };
        else if (t.adapter) this.#n = { remote: false, driverAdapterFactory: t.adapter }, or("Using driver adapter: %O", t.adapter);
        else throw new Z.PrismaClientInitializationError("Missing configured driver adapter. Engine type `client` requires an active driver adapter. Please check your PrismaClient initialization code.", t.clientVersion, Cm);
        this.#r = r ?? gl, this.config = t, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, t.enableDebugLogs && (this.logLevel = "debug"), this.logQueries && (this.#l = (n) => {
          this.logEmitter.emit("query", { ...n, params: Wt(n.params), target: "ClientEngine" });
        });
      }
      async #i() {
        switch (this.#e.type) {
          case "disconnected": {
            let t = this.tracingHelper.runInChildSpan("connect", async () => {
              let r, n;
              try {
                r = await this.#s(), n = await this.#o(r);
              } catch (o) {
                throw this.#e = { type: "disconnected" }, n?.free(), await r?.disconnect(), o;
              }
              let i = { executor: r, queryCompiler: n };
              return this.#e = { type: "connected", engine: i }, i;
            });
            return this.#e = { type: "connecting", promise: t }, await t;
          }
          case "connecting":
            return await this.#e.promise;
          case "connected":
            return this.#e.engine;
          case "disconnecting":
            return await this.#e.promise, await this.#i();
        }
      }
      async #s() {
        return this.#n.remote ? new gn({ clientVersion: this.config.clientVersion, accelerateUrl: this.#n.accelerateUrl, logEmitter: this.logEmitter, logLevel: this.logLevel, logQueries: this.logQueries, tracingHelper: this.tracingHelper, sqlCommenters: this.config.sqlCommenters }) : await cn.connect({ driverAdapterFactory: this.#n.driverAdapterFactory, tracingHelper: this.tracingHelper, transactionOptions: { ...this.config.transactionOptions, isolationLevel: this.#m(this.config.transactionOptions.isolationLevel) }, onQuery: this.#l, provider: this.config.activeProvider, sqlCommenters: this.config.sqlCommenters });
      }
      async #o(t) {
        let r = this.#t;
        r === void 0 && (r = await this.#r.loadQueryCompiler(this.config), this.#t = r);
        let { provider: n, connectionInfo: i } = await t.getConnectionInfo();
        try {
          return this.#p(() => new r({ datamodel: this.datamodel, provider: n, connectionInfo: i }), void 0, false);
        } catch (o) {
          throw this.#u(o);
        }
      }
      #u(t) {
        if (t instanceof Z.PrismaClientRustPanicError) return t;
        try {
          let r = JSON.parse(t.message);
          return new Z.PrismaClientInitializationError(r.message, this.config.clientVersion, r.error_code);
        } catch {
          return t;
        }
      }
      #a(t, r) {
        if (t instanceof Z.PrismaClientInitializationError) return t;
        if (t.code === "GenericFailure" && t.message?.startsWith("PANIC:")) return new Z.PrismaClientRustPanicError(yl(this, t.message, r), this.config.clientVersion);
        if (t instanceof te) return new Z.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion });
        try {
          let n = JSON.parse(t);
          return new Z.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`, { clientVersion: this.config.clientVersion });
        } catch {
          return t;
        }
      }
      #c(t) {
        return t instanceof Z.PrismaClientRustPanicError ? t : typeof t.message == "string" && typeof t.code == "string" ? new Z.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion }) : typeof t.message == "string" ? new Z.PrismaClientUnknownRequestError(t.message, { clientVersion: this.config.clientVersion }) : t;
      }
      #p(t, r, n = true) {
        let i = hl.PRISMA_WASM_PANIC_REGISTRY.set_message, o;
        globalThis.PRISMA_WASM_PANIC_REGISTRY.set_message = (s) => {
          o = s;
        };
        try {
          return t();
        } finally {
          if (globalThis.PRISMA_WASM_PANIC_REGISTRY.set_message = i, o) throw this.#t = void 0, n && this.stop().catch((s) => or("failed to disconnect:", s)), new Z.PrismaClientRustPanicError(yl(this, o, r), this.config.clientVersion);
        }
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        await this.#i();
      }
      async stop() {
        switch (this.#e.type) {
          case "disconnected":
            return;
          case "connecting":
            return await this.#e.promise, await this.stop();
          case "connected": {
            let t = this.#e.engine, r = this.tracingHelper.runInChildSpan("disconnect", async () => {
              try {
                await t.executor.disconnect(), t.queryCompiler.free();
              } finally {
                this.#e = { type: "disconnected" };
              }
            });
            return this.#e = { type: "disconnecting", promise: r }, await r;
          }
          case "disconnecting":
            return await this.#e.promise;
        }
      }
      version() {
        return "unknown";
      }
      async transaction(t, r, n) {
        let i, { executor: o } = await this.#i();
        try {
          if (t === "start") {
            let s = n;
            i = await o.startTransaction({ ...s, isolationLevel: this.#m(s.isolationLevel) });
          } else if (t === "commit") {
            let s = n;
            await o.commitTransaction(s);
          } else if (t === "rollback") {
            let s = n;
            await o.rollbackTransaction(s);
          } else ve(t, "Invalid transaction action.");
        } catch (s) {
          throw this.#a(s);
        }
        return i ? { id: i.id, payload: void 0 } : void 0;
      }
      async request(t, { interactiveTransaction: r, customDataProxyFetch: n }) {
        or("sending request");
        let i = JSON.stringify(t), { executor: o, queryCompiler: s } = await this.#i().catch((d) => {
          throw this.#a(d, i);
        }), a;
        try {
          a = this.#p(() => this.#d({ queries: [t], execute: /* @__PURE__ */ __name(() => s.compile(i), "execute") }));
        } catch (d) {
          throw this.#c(d);
        }
        try {
          or("query plan created", a);
          let d = {}, f2 = await o.execute({ plan: a, model: t.modelName, operation: t.action, placeholderValues: d, transaction: r, batchIndex: void 0, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", modelName: t.modelName, action: t.action, query: t.query } });
          return or("query plan executed"), { data: { [t.action]: f2 } };
        } catch (d) {
          throw this.#a(d, i);
        }
      }
      async requestBatch(t, { transaction: r, customDataProxyFetch: n }) {
        if (t.length === 0) return [];
        let i = t[0].action, o = t[0].modelName, s = JSON.stringify(rl(t, r)), { executor: a, queryCompiler: d } = await this.#i().catch((P2) => {
          throw this.#a(P2, s);
        }), f2;
        try {
          f2 = this.#p(() => this.#d({ queries: t, execute: /* @__PURE__ */ __name(() => d.compileBatch(s), "execute") }));
        } catch (P2) {
          throw this.#c(P2);
        }
        try {
          let P2;
          r?.kind === "itx" && (P2 = r.options);
          let A = {};
          switch (f2.type) {
            case "multi": {
              if (r?.kind !== "itx") {
                let M = r?.options.isolationLevel ? { ...this.config.transactionOptions, isolationLevel: r.options.isolationLevel } : this.config.transactionOptions;
                P2 = await this.transaction("start", {}, M);
              }
              let S2 = [], C = false;
              for (let [M, R] of f2.plans.entries()) try {
                let k2 = await a.execute({ plan: R, placeholderValues: A, model: t[M].modelName, operation: t[M].action, batchIndex: M, transaction: P2, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", ...t[M] } });
                S2.push({ data: { [t[M].action]: k2 } });
              } catch (k2) {
                S2.push(k2), C = true;
                break;
              }
              return P2 !== void 0 && r?.kind !== "itx" && (C ? await this.transaction("rollback", {}, P2) : await this.transaction("commit", {}, P2)), S2;
            }
            case "compacted": {
              if (!t.every((M) => M.action === i && M.modelName === o)) {
                let M = t.map((k2) => k2.action).join(", "), R = t.map((k2) => k2.modelName).join(", ");
                throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${M}] and model names: [${R}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`);
              }
              if (o === void 0) throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");
              let S2 = await a.execute({ plan: f2.plan, placeholderValues: A, model: o, operation: i, batchIndex: void 0, transaction: P2, customFetch: n?.(globalThis.fetch), queryInfo: { type: "compacted", action: i, modelName: o, queries: t } });
              return Us(S2, f2).map((M) => ({ data: { [i]: M } }));
            }
          }
        } catch (P2) {
          throw this.#a(P2, s);
        }
      }
      async apiKey() {
        let { executor: t } = await this.#i();
        return t.apiKey();
      }
      #m(t) {
        switch (t) {
          case void 0:
            return;
          case "ReadUncommitted":
            return "READ UNCOMMITTED";
          case "ReadCommitted":
            return "READ COMMITTED";
          case "RepeatableRead":
            return "REPEATABLE READ";
          case "Serializable":
            return "SERIALIZABLE";
          case "Snapshot":
            return "SNAPSHOT";
          default:
            throw new Z.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``, { code: "P2023", clientVersion: this.config.clientVersion, meta: { providedIsolationLevel: t } });
        }
      }
      #d({ queries: t, execute: r }) {
        return this.tracingHelper.runInChildSpan({ name: "compile", attributes: { models: t.map((n) => n.modelName).filter((n) => n !== void 0), actions: t.map((n) => n.action) } }, r);
      }
    };
    function yl(e, t, r) {
      return al({ binaryTarget: void 0, title: t, version: e.config.clientVersion, engineVersion: "unknown", database: e.config.activeProvider, query: r });
    }
    __name(yl, "yl");
    function wl(e) {
      return new sr(e);
    }
    __name(wl, "wl");
    l2();
    u();
    c();
    p2();
    m();
    var bl = /* @__PURE__ */ __name((e) => ({ command: e }), "bl");
    l2();
    u();
    c();
    p2();
    m();
    var Sl = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    var xl = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "xl");
    l2();
    u();
    c();
    p2();
    m();
    var Pl = require_dist();
    function vt(e) {
      try {
        return El(e, "fast");
      } catch {
        return El(e, "slow");
      }
    }
    __name(vt, "vt");
    function El(e, t) {
      return JSON.stringify(e.map((r) => Al(r, t)));
    }
    __name(El, "El");
    function Al(e, t) {
      if (Array.isArray(e)) return e.map((r) => Al(r, t));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (it(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (Pl.Decimal.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (y.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (Sm(e)) return { prisma__type: "bytes", prisma__value: y.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: y.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? vl(e) : e;
    }
    __name(Al, "Al");
    function Sm(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(Sm, "Sm");
    function vl(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(Tl);
      let t = {};
      for (let r of Object.keys(e)) t[r] = Tl(e[r]);
      return t;
    }
    __name(vl, "vl");
    function Tl(e) {
      return typeof e == "bigint" ? e.toString() : vl(e);
    }
    __name(Tl, "Tl");
    var Rm = /^(\s*alter\s)/i;
    var Cl = Y("prisma:client");
    function ki(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Rm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(ki, "ki");
    var Mi = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (Ur(r)) n = r.sql, i = { values: vt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: vt(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: vt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: vt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = xl(r), i = { values: vt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return i?.values ? Cl(`prisma.${e}(${n}, ${i.values})`) : Cl(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "Mi");
    var Rl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new Sl.Sql(t, r);
    } };
    var Il = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    l2();
    u();
    c();
    p2();
    m();
    function Di(e) {
      return function(r, n) {
        let i, o = /* @__PURE__ */ __name((s = e) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= Ol(r(s)) : Ol(r(s));
          } catch (a) {
            return Promise.reject(a);
          }
        }, "o");
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(Di, "Di");
    function Ol(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(Ol, "Ol");
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    l2();
    u();
    c();
    p2();
    m();
    var kl = { name: "@prisma/instrumentation-contract", version: "7.1.0", description: "Shared types and utilities for Prisma instrumentation", main: "dist/index.js", module: "dist/index.mjs", types: "dist/index.d.ts", exports: { ".": { require: { types: "./dist/index.d.ts", default: "./dist/index.js" }, import: { types: "./dist/index.d.mts", default: "./dist/index.mjs" } } }, license: "Apache-2.0", homepage: "https://www.prisma.io", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/instrumentation-contract" }, bugs: "https://github.com/prisma/prisma/issues", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", prepublishOnly: "pnpm run build", test: "vitest run" }, files: ["dist"], sideEffects: false, devDependencies: { "@opentelemetry/api": "1.9.0" }, peerDependencies: { "@opentelemetry/api": "^1.8" } };
    var Om = kl.version.split(".")[0];
    var km = "PRISMA_INSTRUMENTATION";
    var Mm = `V${Om}_PRISMA_INSTRUMENTATION`;
    var Ml = globalThis;
    function Dl() {
      let e = Ml[Mm];
      return e?.helper ? e.helper : Ml[km]?.helper;
    }
    __name(Dl, "Dl");
    var Dm = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Ni = class {
      static {
        __name(this, "Ni");
      }
      isEnabled() {
        return this.getTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getTracingHelper().getTraceParent(t);
      }
      dispatchEngineSpans(t) {
        return this.getTracingHelper().dispatchEngineSpans(t);
      }
      getActiveContext() {
        return this.getTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getTracingHelper().runInChildSpan(t, r);
      }
      getTracingHelper() {
        return Dl() ?? Dm;
      }
    };
    function Nl() {
      return new Ni();
    }
    __name(Nl, "Nl");
    l2();
    u();
    c();
    p2();
    m();
    function Ll(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(Ll, "Ll");
    l2();
    u();
    c();
    p2();
    m();
    function _l(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(_l, "_l");
    l2();
    u();
    c();
    p2();
    m();
    var $l = require_dist();
    l2();
    u();
    c();
    p2();
    m();
    function Fl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Li(e.query.arguments)), t.push(Li(e.query.selection)), t.join("");
    }
    __name(Fl, "Fl");
    function Li(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Li(n)})` : r;
      }).join(" ")})`;
    }
    __name(Li, "Li");
    l2();
    u();
    c();
    p2();
    m();
    var Nm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function _i(e) {
      return Nm[e];
    }
    __name(_i, "_i");
    l2();
    u();
    c();
    p2();
    m();
    var yn = class {
      static {
        __name(this, "yn");
      }
      constructor(t) {
        this.options = t;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, g.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    l2();
    u();
    c();
    p2();
    m();
    var Ul = require_dist();
    function Ze(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = y.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new Ul.Decimal(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Ze("bigint", r));
        case "bytes-array":
          return t.map((r) => Ze("bytes", r));
        case "decimal-array":
          return t.map((r) => Ze("decimal", r));
        case "datetime-array":
          return t.map((r) => Ze("datetime", r));
        case "date-array":
          return t.map((r) => Ze("date", r));
        case "time-array":
          return t.map((r) => Ze("time", r));
        default:
          return t;
      }
    }
    __name(Ze, "Ze");
    function hn(e) {
      let t = [], r = Lm(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = Ze(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(hn, "hn");
    function Lm(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    __name(Lm, "Lm");
    var _m = Y("prisma:client:request_handler");
    var wn = class {
      static {
        __name(this, "wn");
      }
      client;
      dataloader;
      logEmitter;
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new yn({ batchLoader: Rs(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((A) => A.protocolQuery), d = this.client._tracingHelper.getTraceParent(s), f2 = n.some((A) => _i(A.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: d, transaction: Fm(o), containsWrite: f2, customDataProxyFetch: i })).map((A, S2) => {
            if (A instanceof Error) return A;
            try {
              return this.mapQueryEngineResult(n[S2], A);
            } catch (C) {
              return C;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? ql(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: _i(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Fl(n.protocolQuery), "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, t, r);
        return g.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (_m(t), Um(t, i)) throw t;
        if (t instanceof D.PrismaClientKnownRequestError && $m(t)) {
          let f2 = Vl(t.meta);
          Mr({ args: o, errors: [f2], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let d = t.message;
        if (n && (d = Ar({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: d })), d = this.sanitizeMessage(d), t.code) {
          let f2 = s ? { modelName: s, ...t.meta } : t.meta;
          throw new D.PrismaClientKnownRequestError(d, { code: t.code, clientVersion: this.client._clientVersion, meta: f2, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new D.PrismaClientRustPanicError(d, this.client._clientVersion);
          if (t instanceof D.PrismaClientUnknownRequestError) throw new D.PrismaClientUnknownRequestError(d, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof D.PrismaClientInitializationError) throw new D.PrismaClientInitializationError(d, this.client._clientVersion);
          if (t instanceof D.PrismaClientRustPanicError) throw new D.PrismaClientRustPanicError(d, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? nt(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((f2) => f2 !== "select" && f2 !== "include"), a = Qn(o, s), d = i === "queryRaw" ? hn(a) : De(a);
        return n ? n(d) : d;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Fm(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: ql(e) };
        ve(e, "Unknown transaction kind");
      }
    }
    __name(Fm, "Fm");
    function ql(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(ql, "ql");
    function Um(e, t) {
      return (0, $l.hasBatchIndex)(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(Um, "Um");
    function $m(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name($m, "$m");
    function Vl(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Vl) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(Vl, "Vl");
    l2();
    u();
    c();
    p2();
    m();
    var Fi = un;
    l2();
    u();
    c();
    p2();
    m();
    var Jl = Ue(_n());
    l2();
    u();
    c();
    p2();
    m();
    var j = class extends Error {
      static {
        __name(this, "j");
      }
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    Nt(j, "PrismaClientConstructorValidationError");
    var Bl = ["errorFormat", "adapter", "accelerateUrl", "log", "transactionOptions", "omit", "comments", "__internal"];
    var jl = ["pretty", "colorless", "minimal"];
    var Ql = ["info", "query", "warn", "error"];
    var qm = { adapter: /* @__PURE__ */ __name(() => {
    }, "adapter"), accelerateUrl: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (typeof e != "string") throw new j(`Invalid value ${JSON.stringify(e)} for "accelerateUrl" provided to PrismaClient constructor.`);
        if (e.trim().length === 0) throw new j('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.');
      }
    }, "accelerateUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new j(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!jl.includes(e)) {
          let t = ar(e, jl);
          throw new j(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new j(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Ql.includes(r)) {
          let n = ar(r, Ql);
          throw new j(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = ar(i, o);
            throw new j(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new j(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new j(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new j(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, t) => {
      if (typeof e != "object") throw new j('"omit" option is expected to be an object.');
      if (e === null) throw new j('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = jm(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let d = o.fields.find((f2) => f2.name === s);
          if (!d) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (d.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new j(Qm(e, r));
    }, "omit"), comments: /* @__PURE__ */ __name((e) => {
      if (e !== void 0) {
        if (!Array.isArray(e)) throw new j(`Invalid value ${JSON.stringify(e)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);
        for (let t = 0; t < e.length; t++) if (typeof e[t] != "function") throw new j(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`);
      }
    }, "comments"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new j(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = ar(r, t);
        throw new j(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function Vm(e) {
      let t = e.adapter !== void 0, r = e.accelerateUrl !== void 0;
      if (t && r) throw new j('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');
      if (!t && !r) throw new j('Using engine type "client" requires either "adapter" or "accelerateUrl" to be provided to PrismaClient constructor.');
    }
    __name(Vm, "Vm");
    function Wl(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Bl.includes(r)) {
          let i = ar(r, Bl);
          throw new j(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        qm[r](n, t);
      }
      Vm(e);
    }
    __name(Wl, "Wl");
    function ar(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = Bm(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(ar, "ar");
    function Bm(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, Jl.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(Bm, "Bm");
    function jm(e, t) {
      return Hl(t.models, e) ?? Hl(t.types, e);
    }
    __name(jm, "jm");
    function Hl(e, t) {
      let r = Object.keys(e).find((n) => Ie(n) === t);
      if (r) return e[r];
    }
    __name(Hl, "Hl");
    function Qm(e, t) {
      let r = mt(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = kr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(Qm, "Qm");
    l2();
    u();
    c();
    p2();
    m();
    var Gl = require_dist();
    function Kl(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), d = /* @__PURE__ */ __name((f2) => {
          o || (o = true, r(f2));
        }, "d");
        for (let f2 = 0; f2 < e.length; f2++) e[f2].then((P2) => {
          n[f2] = P2, a();
        }, (P2) => {
          if (!(0, Gl.hasBatchIndex)(P2)) {
            d(P2);
            return;
          }
          P2.batchRequestIdx === f2 ? d(P2) : (i || (i = P2), a());
        });
      });
    }
    __name(Kl, "Kl");
    var lr = Y("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Hm = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var Jm = Symbol.for("prisma.client.transaction.id");
    var Wm = { id: 0, nextId() {
      return ++this.id;
    } };
    function Yl(e) {
      class t {
        static {
          __name(this, "t");
        }
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = Di();
        constructor(n) {
          if (!n) throw new D.PrismaClientInitializationError("`PrismaClient` needs to be constructed with a non-empty, valid `PrismaClientOptions`:\n\n```\nnew PrismaClient({\n  ...\n})\n```\n\nor\n\n```\nconstructor() {\n  super({ ... });\n}\n```\n          ", Fi);
          e = n.__internal?.configOverride?.(e) ?? e, Wl(n, e);
          let i = new $r().on("error", () => {
          });
          this._extensions = dt.empty(), this._previewFeatures = e.previewFeatures, this._clientVersion = e.clientVersion ?? Fi, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Nl();
          let o;
          if (n.adapter) {
            o = n.adapter;
            let s = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
            if (o.provider !== s) throw new D.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`, this._clientVersion);
          }
          try {
            let s = n ?? {}, d = (s.__internal ?? {}).debug === true;
            if (d && Y.enable("prisma:client"), s.errorFormat ? this._errorFormat = s.errorFormat : g.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : g.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { enableDebugLogs: d, logLevel: s.log && _l(s.log), logQueries: s.log && !!(typeof s.log == "string" ? s.log === "query" : s.log.find((f2) => typeof f2 == "string" ? f2 === "query" : f2.level === "query")), compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: s.transactionOptions?.maxWait ?? 2e3, timeout: s.transactionOptions?.timeout ?? 5e3, isolationLevel: s.transactionOptions?.isolationLevel }, logEmitter: i, adapter: o, accelerateUrl: s.accelerateUrl, sqlCommenters: s.comments }, this._accelerateEngineConfig = Object.create(this._engineConfig), this._accelerateEngineConfig.accelerateUtils = { resolveDatasourceUrl: /* @__PURE__ */ __name(() => {
              if (s.accelerateUrl) return s.accelerateUrl;
              throw new D.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`, e.clientVersion);
            }, "resolveDatasourceUrl") }, lr("clientVersion", e.clientVersion), this._engine = wl(this._engineConfig), this._requestHandler = new wn(this, i), s.log) for (let f2 of s.log) {
              let P2 = typeof f2 == "string" ? f2 : f2.emit === "stdout" ? f2.level : null;
              P2 && this.$on(P2, (A) => {
                Dt.log(`${Dt.tags[P2] ?? ""}`, A.message || A.query);
              });
            }
          } catch (s) {
            throw s.clientVersion = this._clientVersion, s;
          }
          return this._appliedParent = Qt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            go();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Mi({ clientMethod: i, activeProvider: a }), callsite: Me(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = zl(n, i);
              return ki(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new D.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (ki(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new D.PrismaClientValidationError(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: bl, callsite: Me(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Mi({ clientMethod: i, activeProvider: a }), callsite: Me(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...zl(n, i));
            throw new D.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new D.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Wm.nextId(), s = Ll(n.length), a = n.map((d, f2) => {
            if (d?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let P2 = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, A = { kind: "batch", id: o, index: f2, isolationLevel: P2, lock: s };
            return d.requestTransaction?.(A) ?? d;
          });
          return Kl(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), d;
          try {
            let f2 = { kind: "itx", ...a };
            d = await n(this._createItxClient(f2)), await this._engine.transaction("commit", o, a);
          } catch (f2) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), f2;
          }
          return d;
        }
        _createItxClient(n) {
          return pe(Qt(pe(ws(this), [ee("_appliedParent", () => this._appliedParent._createItxClient(n)), ee("_createPrismaPromise", () => Di(n)), ee(Jm, () => n.id)])), [ft(Ps)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Hm, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = /* @__PURE__ */ __name(async (d) => {
            let { runInTransaction: f2, args: P2, ...A } = d, S2 = { ...n, ...A };
            P2 && (S2.args = i.middlewareArgsToRequestArgs(P2)), n.transaction !== void 0 && f2 === false && delete S2.transaction;
            let C = await Ss(this, S2);
            return S2.model ? Ts({ result: C, modelName: S2.model, args: S2.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : C;
          }, "a");
          return this._tracingHelper.runInChildSpan(s.operation, () => a(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: d, argsMapper: f2, transaction: P2, unpacker: A, otelParentCtx: S2, customDataProxyFetch: C }) {
          try {
            n = f2 ? f2(n) : n;
            let M = { name: "serialize" }, R = this._tracingHelper.runInChildSpan(M, () => _r({ modelName: d, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return Y.enabled("prisma:client") && (lr("Prisma Client call:"), lr(`prisma.${i}(${ls(n)})`), lr("Generated request:"), lr(JSON.stringify(R, null, 2) + `
`)), P2?.kind === "batch" && await P2.lock, this._requestHandler.request({ protocolQuery: R, modelName: d, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: P2, unpacker: A, otelParentCtx: S2, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: C });
          } catch (M) {
            throw M.clientVersion = this._clientVersion, M;
          }
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $extends = bs;
      }
      return t;
    }
    __name(Yl, "Yl");
    function zl(e, t) {
      return Gm(e) ? [new Zl.Sql(e, t), Rl] : [e, Il];
    }
    __name(zl, "zl");
    function Gm(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(Gm, "Gm");
    l2();
    u();
    c();
    p2();
    m();
    var Km = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Xl(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!Km.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(Xl, "Xl");
    l2();
    u();
    c();
    p2();
    m();
    var zm = /* @__PURE__ */ __name(() => globalThis.process?.release?.name === "node", "zm");
    var Zm = /* @__PURE__ */ __name(() => !!globalThis.Bun || !!globalThis.process?.versions?.bun, "Zm");
    var Ym = /* @__PURE__ */ __name(() => !!globalThis.Deno, "Ym");
    var Xm = /* @__PURE__ */ __name(() => typeof globalThis.Netlify == "object", "Xm");
    var ed = /* @__PURE__ */ __name(() => typeof globalThis.EdgeRuntime == "object", "ed");
    var td = /* @__PURE__ */ __name(() => globalThis.navigator?.userAgent === "Cloudflare-Workers", "td");
    function rd() {
      return [[Xm, "netlify"], [ed, "edge-light"], [td, "workerd"], [Ym, "deno"], [Zm, "bun"], [zm, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
    }
    __name(rd, "rd");
    var nd = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function eu() {
      let e = rd();
      return { id: e, prettyName: nd[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(eu, "eu");
    var D = require_dist();
    var Te = require_dist();
    var X = require_dist();
    var tu = require_dist();
  }
});

// ../../node_modules/.prisma/client/query_compiler_bg.js
var require_query_compiler_bg = __commonJS({
  "../../node_modules/.prisma/client/query_compiler_bg.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var h = Object.defineProperty;
    var T2 = Object.getOwnPropertyDescriptor;
    var M = Object.getOwnPropertyNames;
    var j = Object.prototype.hasOwnProperty;
    var D = /* @__PURE__ */ __name((e, t) => {
      for (var n in t) h(e, n, { get: t[n], enumerable: true });
    }, "D");
    var O = /* @__PURE__ */ __name((e, t, n, _) => {
      if (t && typeof t == "object" || typeof t == "function") for (let r of M(t)) !j.call(e, r) && r !== n && h(e, r, { get: /* @__PURE__ */ __name(() => t[r], "get"), enumerable: !(_ = T2(t, r)) || _.enumerable });
      return e;
    }, "O");
    var B = /* @__PURE__ */ __name((e) => O(h({}, "__esModule", { value: true }), e), "B");
    var xe = {};
    D(xe, { QueryCompiler: /* @__PURE__ */ __name(() => F2, "QueryCompiler"), __wbg_Error_e83987f665cf5504: /* @__PURE__ */ __name(() => q, "__wbg_Error_e83987f665cf5504"), __wbg_Number_bb48ca12f395cd08: /* @__PURE__ */ __name(() => C, "__wbg_Number_bb48ca12f395cd08"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => k2, "__wbg_String_8f0eb39a4a4c2f66"), __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68: /* @__PURE__ */ __name(() => W, "__wbg___wbindgen_boolean_get_6d5a1ee65bab5f68"), __wbg___wbindgen_debug_string_df47ffb5e35e6763: /* @__PURE__ */ __name(() => V, "__wbg___wbindgen_debug_string_df47ffb5e35e6763"), __wbg___wbindgen_in_bb933bd9e1b3bc0f: /* @__PURE__ */ __name(() => z, "__wbg___wbindgen_in_bb933bd9e1b3bc0f"), __wbg___wbindgen_is_object_c818261d21f283a4: /* @__PURE__ */ __name(() => L, "__wbg___wbindgen_is_object_c818261d21f283a4"), __wbg___wbindgen_is_string_fbb76cb2940daafd: /* @__PURE__ */ __name(() => P2, "__wbg___wbindgen_is_string_fbb76cb2940daafd"), __wbg___wbindgen_is_undefined_2d472862bd29a478: /* @__PURE__ */ __name(() => Q, "__wbg___wbindgen_is_undefined_2d472862bd29a478"), __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147: /* @__PURE__ */ __name(() => Y, "__wbg___wbindgen_jsval_loose_eq_b664b38a2f582147"), __wbg___wbindgen_number_get_a20bf9b85341449d: /* @__PURE__ */ __name(() => G, "__wbg___wbindgen_number_get_a20bf9b85341449d"), __wbg___wbindgen_string_get_e4f06c90489ad01b: /* @__PURE__ */ __name(() => J, "__wbg___wbindgen_string_get_e4f06c90489ad01b"), __wbg___wbindgen_throw_b855445ff6a94295: /* @__PURE__ */ __name(() => X, "__wbg___wbindgen_throw_b855445ff6a94295"), __wbg_entries_e171b586f8f6bdbf: /* @__PURE__ */ __name(() => H, "__wbg_entries_e171b586f8f6bdbf"), __wbg_getTime_14776bfb48a1bff9: /* @__PURE__ */ __name(() => K, "__wbg_getTime_14776bfb48a1bff9"), __wbg_get_7bed016f185add81: /* @__PURE__ */ __name(() => Z, "__wbg_get_7bed016f185add81"), __wbg_get_with_ref_key_1dc361bd10053bfe: /* @__PURE__ */ __name(() => v, "__wbg_get_with_ref_key_1dc361bd10053bfe"), __wbg_instanceof_ArrayBuffer_70beb1189ca63b38: /* @__PURE__ */ __name(() => ee, "__wbg_instanceof_ArrayBuffer_70beb1189ca63b38"), __wbg_instanceof_Uint8Array_20c8e73002f7af98: /* @__PURE__ */ __name(() => te, "__wbg_instanceof_Uint8Array_20c8e73002f7af98"), __wbg_isSafeInteger_d216eda7911dde36: /* @__PURE__ */ __name(() => ne, "__wbg_isSafeInteger_d216eda7911dde36"), __wbg_length_69bca3cb64fc8748: /* @__PURE__ */ __name(() => re, "__wbg_length_69bca3cb64fc8748"), __wbg_length_cdd215e10d9dd507: /* @__PURE__ */ __name(() => _e, "__wbg_length_cdd215e10d9dd507"), __wbg_new_0_f9740686d739025c: /* @__PURE__ */ __name(() => oe, "__wbg_new_0_f9740686d739025c"), __wbg_new_1acc0b6eea89d040: /* @__PURE__ */ __name(() => ce, "__wbg_new_1acc0b6eea89d040"), __wbg_new_5a79be3ab53b8aa5: /* @__PURE__ */ __name(() => ie, "__wbg_new_5a79be3ab53b8aa5"), __wbg_new_68651c719dcda04e: /* @__PURE__ */ __name(() => se, "__wbg_new_68651c719dcda04e"), __wbg_new_e17d9f43105b08be: /* @__PURE__ */ __name(() => ue, "__wbg_new_e17d9f43105b08be"), __wbg_prototypesetcall_2a6620b6922694b2: /* @__PURE__ */ __name(() => fe, "__wbg_prototypesetcall_2a6620b6922694b2"), __wbg_set_3f1d0b984ed272ed: /* @__PURE__ */ __name(() => be, "__wbg_set_3f1d0b984ed272ed"), __wbg_set_907fb406c34a251d: /* @__PURE__ */ __name(() => de, "__wbg_set_907fb406c34a251d"), __wbg_set_c213c871859d6500: /* @__PURE__ */ __name(() => ae, "__wbg_set_c213c871859d6500"), __wbg_set_message_82ae475bb413aa5c: /* @__PURE__ */ __name(() => ge, "__wbg_set_message_82ae475bb413aa5c"), __wbg_set_wasm: /* @__PURE__ */ __name(() => N, "__wbg_set_wasm"), __wbindgen_cast_2241b6af4c4b2941: /* @__PURE__ */ __name(() => le, "__wbindgen_cast_2241b6af4c4b2941"), __wbindgen_cast_4625c577ab2ec9ee: /* @__PURE__ */ __name(() => we, "__wbindgen_cast_4625c577ab2ec9ee"), __wbindgen_cast_9ae0607507abb057: /* @__PURE__ */ __name(() => pe, "__wbindgen_cast_9ae0607507abb057"), __wbindgen_cast_d6cd19b81560fd6e: /* @__PURE__ */ __name(() => ye, "__wbindgen_cast_d6cd19b81560fd6e"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => me, "__wbindgen_init_externref_table") });
    module.exports = B(xe);
    var A = /* @__PURE__ */ __name(() => {
    }, "A");
    A.prototype = A;
    var o;
    function N(e) {
      o = e;
    }
    __name(N, "N");
    var p2 = null;
    function a() {
      return (p2 === null || p2.byteLength === 0) && (p2 = new Uint8Array(o.memory.buffer)), p2;
    }
    __name(a, "a");
    var y = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    y.decode();
    var U = 2146435072;
    var S2 = 0;
    function R(e, t) {
      return S2 += t, S2 >= U && (y = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), y.decode(), S2 = t), y.decode(a().subarray(e, e + t));
    }
    __name(R, "R");
    function m(e, t) {
      return e = e >>> 0, R(e, t);
    }
    __name(m, "m");
    var f2 = 0;
    var g = new TextEncoder();
    "encodeInto" in g || (g.encodeInto = function(e, t) {
      const n = g.encode(e);
      return t.set(n), { read: e.length, written: n.length };
    });
    function l2(e, t, n) {
      if (n === void 0) {
        const i = g.encode(e), d = t(i.length, 1) >>> 0;
        return a().subarray(d, d + i.length).set(i), f2 = i.length, d;
      }
      let _ = e.length, r = t(_, 1) >>> 0;
      const s = a();
      let c = 0;
      for (; c < _; c++) {
        const i = e.charCodeAt(c);
        if (i > 127) break;
        s[r + c] = i;
      }
      if (c !== _) {
        c !== 0 && (e = e.slice(c)), r = n(r, _, _ = c + e.length * 3, 1) >>> 0;
        const i = a().subarray(r + c, r + _), d = g.encodeInto(e, i);
        c += d.written, r = n(r, _, c, 1) >>> 0;
      }
      return f2 = c, r;
    }
    __name(l2, "l");
    var b2 = null;
    function u() {
      return (b2 === null || b2.buffer.detached === true || b2.buffer.detached === void 0 && b2.buffer !== o.memory.buffer) && (b2 = new DataView(o.memory.buffer)), b2;
    }
    __name(u, "u");
    function x2(e) {
      return e == null;
    }
    __name(x2, "x");
    function I(e) {
      const t = typeof e;
      if (t == "number" || t == "boolean" || e == null) return `${e}`;
      if (t == "string") return `"${e}"`;
      if (t == "symbol") {
        const r = e.description;
        return r == null ? "Symbol" : `Symbol(${r})`;
      }
      if (t == "function") {
        const r = e.name;
        return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
      }
      if (Array.isArray(e)) {
        const r = e.length;
        let s = "[";
        r > 0 && (s += I(e[0]));
        for (let c = 1; c < r; c++) s += ", " + I(e[c]);
        return s += "]", s;
      }
      const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
      let _;
      if (n && n.length > 1) _ = n[1];
      else return toString.call(e);
      if (_ == "Object") try {
        return "Object(" + JSON.stringify(e) + ")";
      } catch {
        return "Object";
      }
      return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
    }
    __name(I, "I");
    function $(e, t) {
      return e = e >>> 0, a().subarray(e / 1, e / 1 + t);
    }
    __name($, "$");
    function w2(e) {
      const t = o.__wbindgen_externrefs.get(e);
      return o.__externref_table_dealloc(e), t;
    }
    __name(w2, "w");
    var E = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
    }, "register"), unregister: /* @__PURE__ */ __name(() => {
    }, "unregister") } : new FinalizationRegistry((e) => o.__wbg_querycompiler_free(e >>> 0, 1));
    var F2 = class {
      static {
        __name(this, "F");
      }
      __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, E.unregister(this), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        o.__wbg_querycompiler_free(t, 0);
      }
      compileBatch(t) {
        const n = l2(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f2, r = o.querycompiler_compileBatch(this.__wbg_ptr, n, _);
        if (r[2]) throw w2(r[1]);
        return w2(r[0]);
      }
      constructor(t) {
        const n = o.querycompiler_new(t);
        if (n[2]) throw w2(n[1]);
        return this.__wbg_ptr = n[0] >>> 0, E.register(this, this.__wbg_ptr, this), this;
      }
      compile(t) {
        const n = l2(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f2, r = o.querycompiler_compile(this.__wbg_ptr, n, _);
        if (r[2]) throw w2(r[1]);
        return w2(r[0]);
      }
    };
    Symbol.dispose && (F2.prototype[Symbol.dispose] = F2.prototype.free);
    function q(e, t) {
      return Error(m(e, t));
    }
    __name(q, "q");
    function C(e) {
      return Number(e);
    }
    __name(C, "C");
    function k2(e, t) {
      const n = String(t), _ = l2(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f2;
      u().setInt32(e + 4 * 1, r, true), u().setInt32(e + 4 * 0, _, true);
    }
    __name(k2, "k");
    function W(e) {
      const t = e, n = typeof t == "boolean" ? t : void 0;
      return x2(n) ? 16777215 : n ? 1 : 0;
    }
    __name(W, "W");
    function V(e, t) {
      const n = I(t), _ = l2(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f2;
      u().setInt32(e + 4 * 1, r, true), u().setInt32(e + 4 * 0, _, true);
    }
    __name(V, "V");
    function z(e, t) {
      return e in t;
    }
    __name(z, "z");
    function L(e) {
      const t = e;
      return typeof t == "object" && t !== null;
    }
    __name(L, "L");
    function P2(e) {
      return typeof e == "string";
    }
    __name(P2, "P");
    function Q(e) {
      return e === void 0;
    }
    __name(Q, "Q");
    function Y(e, t) {
      return e == t;
    }
    __name(Y, "Y");
    function G(e, t) {
      const n = t, _ = typeof n == "number" ? n : void 0;
      u().setFloat64(e + 8 * 1, x2(_) ? 0 : _, true), u().setInt32(e + 4 * 0, !x2(_), true);
    }
    __name(G, "G");
    function J(e, t) {
      const n = t, _ = typeof n == "string" ? n : void 0;
      var r = x2(_) ? 0 : l2(_, o.__wbindgen_malloc, o.__wbindgen_realloc), s = f2;
      u().setInt32(e + 4 * 1, s, true), u().setInt32(e + 4 * 0, r, true);
    }
    __name(J, "J");
    function X(e, t) {
      throw new Error(m(e, t));
    }
    __name(X, "X");
    function H(e) {
      return Object.entries(e);
    }
    __name(H, "H");
    function K(e) {
      return e.getTime();
    }
    __name(K, "K");
    function Z(e, t) {
      return e[t >>> 0];
    }
    __name(Z, "Z");
    function v(e, t) {
      return e[t];
    }
    __name(v, "v");
    function ee(e) {
      let t;
      try {
        t = e instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    __name(ee, "ee");
    function te(e) {
      let t;
      try {
        t = e instanceof Uint8Array;
      } catch {
        t = false;
      }
      return t;
    }
    __name(te, "te");
    function ne(e) {
      return Number.isSafeInteger(e);
    }
    __name(ne, "ne");
    function re(e) {
      return e.length;
    }
    __name(re, "re");
    function _e(e) {
      return e.length;
    }
    __name(_e, "_e");
    function oe() {
      return /* @__PURE__ */ new Date();
    }
    __name(oe, "oe");
    function ce() {
      return new Object();
    }
    __name(ce, "ce");
    function ie(e) {
      return new Uint8Array(e);
    }
    __name(ie, "ie");
    function se() {
      return /* @__PURE__ */ new Map();
    }
    __name(se, "se");
    function ue() {
      return new Array();
    }
    __name(ue, "ue");
    function fe(e, t, n) {
      Uint8Array.prototype.set.call($(e, t), n);
    }
    __name(fe, "fe");
    function be(e, t, n) {
      e[t] = n;
    }
    __name(be, "be");
    function de(e, t, n) {
      return e.set(t, n);
    }
    __name(de, "de");
    function ae(e, t, n) {
      e[t >>> 0] = n;
    }
    __name(ae, "ae");
    function ge(e, t) {
      global.PRISMA_WASM_PANIC_REGISTRY.set_message(m(e, t));
    }
    __name(ge, "ge");
    function le(e, t) {
      return m(e, t);
    }
    __name(le, "le");
    function we(e) {
      return BigInt.asUintN(64, e);
    }
    __name(we, "we");
    function pe(e) {
      return e;
    }
    __name(pe, "pe");
    function ye(e) {
      return e;
    }
    __name(ye, "ye");
    function me() {
      const e = o.__wbindgen_externrefs, t = e.grow(4);
      e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
    }
    __name(me, "me");
  }
});

// ../../node_modules/.prisma/client/wasm-worker-loader.mjs
var wasm_worker_loader_exports = {};
__export(wasm_worker_loader_exports, {
  default: () => wasm_worker_loader_default
});
var wasm_worker_loader_default;
var init_wasm_worker_loader = __esm({
  "../../node_modules/.prisma/client/wasm-worker-loader.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    wasm_worker_loader_default = import("./63cc0ecfb705b305bc4e51564ebbe93d734b5e49-query_compiler_bg.wasm");
  }
});

// ../../node_modules/.prisma/client/edge.js
var require_edge = __commonJS({
  "../../node_modules/.prisma/client/edge.js"(exports) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      DbNull: DbNull2,
      JsonNull: JsonNull2,
      AnyNull: AnyNull2,
      NullTypes: NullTypes2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_wasm_compiler_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "7.1.0",
      engine: "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = DbNull2;
    Prisma.JsonNull = JsonNull2;
    Prisma.AnyNull = AnyNull2;
    Prisma.NullTypes = NullTypes2;
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.TransactionScalarFieldEnum = {
      id: "id",
      invoiceNumber: "invoiceNumber",
      supplierName: "supplierName",
      amount: "amount",
      department: "department",
      rawPayload: "rawPayload",
      description: "description",
      status: "status",
      createdAt: "createdAt",
      processedAt: "processedAt"
    };
    exports.Prisma.DecisionScalarFieldEnum = {
      id: "id",
      transactionId: "transactionId",
      score: "score",
      riskLevel: "riskLevel",
      status: "status",
      flags: "flags",
      rulesTriggered: "rulesTriggered",
      auditSnapshot: "auditSnapshot",
      modelVersion: "modelVersion",
      createdAt: "createdAt"
    };
    exports.Prisma.RuleScalarFieldEnum = {
      id: "id",
      code: "code",
      name: "name",
      ruleType: "ruleType",
      severity: "severity",
      active: "active",
      payload: "payload",
      category: "category",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.NullableJsonNullValueInput = {
      DbNull: Prisma.DbNull,
      JsonNull: Prisma.JsonNull
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.JsonNullValueFilter = {
      DbNull: Prisma.DbNull,
      JsonNull: Prisma.JsonNull,
      AnyNull: Prisma.AnyNull
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      Transaction: "Transaction",
      Decision: "Decision",
      Rule: "Rule"
    };
    var config2 = {
      "previewFeatures": [],
      "clientVersion": "7.1.0",
      "engineVersion": "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba",
      "activeProvider": "postgresql",
      "inlineSchema": 'datasource db {\n  provider = "postgresql"\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\n// =====================\n//  Transaction Model\n// =====================\n\nmodel Transaction {\n  id            String     @id @default(cuid())\n  invoiceNumber String?\n  supplierName  String\n  amount        Float\n  department    String?\n  rawPayload    Json? // store original JSON, or pointer\n  description   String?\n  status        String     @default("PENDING") // PENDING, OK, REVIEW, BLOCK, ERROR\n  createdAt     DateTime   @default(now())\n  processedAt   DateTime?\n  // relation\n  decisions     Decision[]\n\n  // indexes\n  @@index([supplierName])\n  @@index([createdAt])\n}\n\nmodel Decision {\n  id             String      @id @default(cuid())\n  transaction    Transaction @relation(fields: [transactionId], references: [id])\n  transactionId  String\n  score          Int\n  riskLevel      String\n  status         String\n  flags          Json? // array of flags\n  rulesTriggered Json? // array of rule codes\n  auditSnapshot  Json? // full snapshot for audit/legal\n  modelVersion   String?\n  createdAt      DateTime    @default(now())\n\n  @@index([transactionId])\n}\n\nmodel Rule {\n  id        String   @id @default(cuid())\n  code      String   @unique\n  name      String\n  ruleType  String\n  severity  Int\n  active    Boolean  @default(true)\n  payload   Json?\n  category  String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n'
    };
    config2.runtimeDataModel = JSON.parse('{"models":{"Transaction":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"invoiceNumber","kind":"scalar","type":"String"},{"name":"supplierName","kind":"scalar","type":"String"},{"name":"amount","kind":"scalar","type":"Float"},{"name":"department","kind":"scalar","type":"String"},{"name":"rawPayload","kind":"scalar","type":"Json"},{"name":"description","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"processedAt","kind":"scalar","type":"DateTime"},{"name":"decisions","kind":"object","type":"Decision","relationName":"DecisionToTransaction"}],"dbName":null},"Decision":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"transaction","kind":"object","type":"Transaction","relationName":"DecisionToTransaction"},{"name":"transactionId","kind":"scalar","type":"String"},{"name":"score","kind":"scalar","type":"Int"},{"name":"riskLevel","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"flags","kind":"scalar","type":"Json"},{"name":"rulesTriggered","kind":"scalar","type":"Json"},{"name":"auditSnapshot","kind":"scalar","type":"Json"},{"name":"modelVersion","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Rule":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"code","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"ruleType","kind":"scalar","type":"String"},{"name":"severity","kind":"scalar","type":"Int"},{"name":"active","kind":"scalar","type":"Boolean"},{"name":"payload","kind":"scalar","type":"Json"},{"name":"category","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
    config2.compilerWasm = {
      getRuntime: /* @__PURE__ */ __name(async () => require_query_compiler_bg(), "getRuntime"),
      getQueryCompilerWasmModule: /* @__PURE__ */ __name(async () => {
        const loader = (await Promise.resolve().then(() => (init_wasm_worker_loader(), wasm_worker_loader_exports))).default;
        const compiler = (await loader).default;
        return compiler;
      }, "getQueryCompilerWasmModule")
    };
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient2 = getPrismaClient2(config2);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
  }
});

// ../../node_modules/@prisma/client/edge.js
var require_edge2 = __commonJS({
  "../../node_modules/@prisma/client/edge.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge()
    };
  }
});

// ../../node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "../../node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var default_index_exports = {};
    __export2(default_index_exports, {
      Prisma: /* @__PURE__ */ __name(() => Prisma, "Prisma"),
      PrismaClient: /* @__PURE__ */ __name(() => PrismaClient2, "PrismaClient"),
      default: /* @__PURE__ */ __name(() => default_index_default, "default")
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba"
    };
    var version2 = "7.1.0";
    var clientVersion = version2;
    var PrismaClient2 = class {
      static {
        __name(this, "PrismaClient");
      }
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    };
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    __name(defineExtension, "defineExtension");
    function getExtensionContext(that) {
      return that;
    }
    __name(getExtensionContext, "getExtensionContext");
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// .wrangler/tmp/bundle-S5TFoP/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-S5TFoP/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono-base.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/compose.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context2.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context2, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/context.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/http-exception.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GET_MATCH_RESULT = Symbol();

// node_modules/hono/dist/utils/body.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  }, "#cachedBody");
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context2 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    return this.#res ||= new Response(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  set res(_res) {
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k2, v] of this.#res.headers.entries()) {
        if (k2 === "content-type") {
          continue;
        }
        if (k2 === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k2, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#status = status;
  }, "status");
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k2, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k2, v);
        } else {
          responseHeaders.delete(k2);
          for (const v2 of v) {
            responseHeaders.append(k2, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return new Response(data, { status, headers: responseHeaders });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  body = /* @__PURE__ */ __name((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  }, "text");
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  redirect = /* @__PURE__ */ __name((location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// node_modules/hono/dist/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// node_modules/hono/dist/utils/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class {
  static {
    __name(this, "Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p2 of [path].flat()) {
        this.#path = p2;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context2.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// node_modules/hono/dist/router/reg-exp-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/reg-exp-router/matcher.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = /* @__PURE__ */ __name((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }, "match2");
  this.match = match2;
  return match2(method, path);
}
__name(match, "match");

// node_modules/hono/dist/router/reg-exp-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b2) {
  if (a.length === 1) {
    return b2.length === 1 ? a < b2 ? -1 : 1 : -1;
  }
  if (b2.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b2 === ONLY_WILDCARD_REG_EXP_STR || b2 === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b2 === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b2.length ? a < b2 ? -1 : 1 : b2.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class {
  static {
    __name(this, "Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context2, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k2) => k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context2.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k2) => k2.length > 1 && k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context2, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k2) => {
      const c = this.#children[k2];
      return (typeof c.#varIndex === "number" ? `(${k2})@${c.#varIndex}` : regExpMetaChars.has(k2) ? `\\${k2}` : k2) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k2 = 0, len3 = keys.length; k2 < len3; k2++) {
        map[keys[k2]] = paramReplacementMap[map[keys[k2]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k2 of Object.keys(middleware).sort((a, b2) => b2.length - a.length)) {
    if (buildWildcardRegExp(k2).test(path)) {
      return [...middleware[k2]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p2) => {
            re.test(p2) && middleware[m][p2].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p2) => re.test(p2) && routes[m][p2].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/reg-exp-router/prepared-router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  static {
    __name(this, "Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p2 = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p2, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p2;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k2 = 0, len3 = node.#patterns.length; k2 < len3; k2++) {
          const pattern = node.#patterns[k2];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b2) => {
        return a.score - b2.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/processors/score.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../core/scoring/riskEngine.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../core/rules/engine.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function evaluateRules(tx, rules) {
  const triggered = [];
  const flags = [];
  let deterministicScore = 0;
  for (const r of rules) {
    if (!r.active) continue;
    const payload = typeof r.payload === "string" ? JSON.parse(r.payload) : r.payload || {};
    const severity = Number(r.severity || 0);
    const category = r.category || "GENERAL";
    if (r.ruleType === "threshold" && payload.field === "amount") {
      const limits = payload.limitByDept || {};
      const deptLimit = tx.department ? limits[tx.department] : void 0;
      if (deptLimit && Number(tx.amount) > Number(deptLimit)) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${tx.amount} exceeds delegated limit ${deptLimit} for dept ${tx.department}`,
          legalRef: payload.legalRef,
          points: severity,
          category
        });
        flags.push(`LimitExceeded:${tx.department}`);
        deterministicScore += severity;
      }
    }
    if (r.ruleType === "custom" && payload.threshold != null) {
      if (Number(tx.amount) > Number(payload.threshold)) {
        triggered.push({
          ruleCode: r.code,
          reason: `Amount ${tx.amount} > threshold ${payload.threshold}`,
          legalRef: payload.legalRef,
          points: severity,
          category
        });
        flags.push("CustomThresholdExceeded");
        deterministicScore += severity;
      }
    }
    if (r.ruleType === "regex" && payload.field && payload.pattern) {
      const value = String(tx[payload.field] ?? "");
      const patterns = Array.isArray(payload.pattern) ? payload.pattern : [payload.pattern];
      for (const p2 of patterns) {
        const patt = new RegExp(p2, "i");
        if (patt.test(value)) {
          triggered.push({
            ruleCode: r.code,
            reason: `Field ${payload.field} matches pattern "${p2}"`,
            legalRef: payload.legalRef,
            points: severity,
            category,
            extra: { matchedValue: value, pattern: p2 }
          });
          flags.push(`RegexMatch:${payload.field}`);
          deterministicScore += severity;
          break;
        }
      }
    }
  }
  deterministicScore = Math.min(deterministicScore, 70);
  return { triggered, deterministicScore, flags };
}
__name(evaluateRules, "evaluateRules");

// ../../core/scoring/aiChecks.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../../core/scoring/utils/similarity.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function normalizeText(s) {
  if (!s) return "";
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
__name(normalizeText, "normalizeText");
function jaroWinkler(s1, s2) {
  s1 = normalizeText(s1);
  s2 = normalizeText(s2);
  if (s1 === s2) return 1;
  const len1 = s1.length, len2 = s2.length;
  if (len1 === 0 || len2 === 0) return 0;
  const matchDist = Math.floor(Math.max(len1, len2) / 2) - 1;
  const s1Matches = new Array(len1).fill(false);
  const s2Matches = new Array(len2).fill(false);
  let matches = 0;
  for (let i = 0; i < len1; i++) {
    const start = Math.max(0, i - matchDist);
    const end = Math.min(i + matchDist + 1, len2);
    for (let j = start; j < end; j++) {
      if (s2Matches[j]) continue;
      if (s1[i] !== s2[j]) continue;
      s1Matches[i] = true;
      s2Matches[j] = true;
      matches++;
      break;
    }
  }
  if (matches === 0) return 0;
  let t = 0, k2 = 0;
  for (let i = 0; i < len1; i++) {
    if (!s1Matches[i]) continue;
    while (!s2Matches[k2]) k2++;
    if (s1[i] !== s2[k2]) t++;
    k2++;
  }
  t = t / 2;
  const m = matches;
  const jaro = (m / len1 + m / len2 + (m - t) / m) / 3;
  let l2 = 0;
  const prefixLimit = 4;
  for (let i = 0; i < Math.min(prefixLimit, len1, len2); i++) {
    if (s1[i] === s2[i]) l2++;
    else break;
  }
  const p2 = 0.1;
  return jaro + l2 * p2 * (1 - jaro);
}
__name(jaroWinkler, "jaroWinkler");
function tokenJaccard(a, b2) {
  const na = normalizeText(a).split(" ").filter(Boolean);
  const nb = normalizeText(b2).split(" ").filter(Boolean);
  const sa = new Set(na);
  const sb = new Set(nb);
  const inter = new Set([...sa].filter((x2) => sb.has(x2)));
  const union = /* @__PURE__ */ new Set([...sa, ...sb]);
  if (union.size === 0) return 0;
  return inter.size / union.size;
}
__name(tokenJaccard, "tokenJaccard");

// ../../core/scoring/aiChecks.ts
function getPayloadField(obj, key) {
  const payload = obj?.rawPayload;
  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    const v = payload[key];
    return v ? String(v) : "";
  }
  return "";
}
__name(getPayloadField, "getPayloadField");
async function runAIChecks(tx, prisma) {
  const aiFlags = [];
  const aiDetails = {};
  let aiScore = 0;
  const recent = await prisma.transaction.findMany({
    where: { supplierName: tx.supplierName },
    orderBy: { createdAt: "desc" },
    take: 200
  });
  aiDetails.recentCount = recent.length;
  const txText = getPayloadField(tx, "invoiceText") || tx.description || tx.invoiceNumber || "";
  for (const r of recent) {
    const rText = getPayloadField(r, "invoiceText") || tx.description || r.invoiceNumber || "";
    const jaro = jaroWinkler(tx.invoiceNumber ?? "", r.invoiceNumber ?? "");
    const tokenSim = tokenJaccard(txText, rText);
    const amountMatch = Math.abs((tx.amount ?? 0) - (r.amount ?? 0)) < 1e-6;
    let local = 0;
    if (jaro > 0.92 && amountMatch) local = 20;
    else if (jaro > 0.85 && amountMatch) local = 15;
    else if (tokenSim > 0.8 && amountMatch) local = 12;
    else if (tokenSim > 0.85 && Math.abs((tx.amount - r.amount) / Math.max(1, r.amount)) < 0.01)
      local = 10;
    if (local > 0) {
      aiFlags.push({
        name: "DUPLICATE_SIMILAR",
        message: `Possible duplicate with transaction ${r.id}`,
        points: local,
        evidence: {
          compareInvoice: r.invoiceNumber,
          simJaro: jaro,
          simToken: tokenSim,
          compareAmount: r.amount
        }
      });
      aiScore += local;
      if (aiScore >= 40) break;
    }
  }
  const agg = await prisma.transaction.aggregate({
    _avg: { amount: true },
    where: { supplierName: tx.supplierName }
  });
  const avg = agg._avg?.amount ?? 0;
  aiDetails.avgAmount = avg;
  if (avg > 0 && tx.amount > avg * 3) {
    aiFlags.push({
      name: "ANOMALOUS_AMOUNT",
      message: `Amount ${tx.amount} is >3x supplier average ${avg}`,
      points: 12,
      evidence: { avg }
    });
    aiScore += 12;
  } else if (avg > 0 && tx.amount > avg * 1.6) {
    aiFlags.push({
      name: "AMOUNT_HIGH",
      message: `Amount ${tx.amount} >1.6x supplier average ${avg}`,
      points: 6,
      evidence: { avg }
    });
    aiScore += 6;
  }
  if ((tx.amount ?? 0) > 2e6) {
    aiFlags.push({
      name: "VERY_LARGE",
      message: "Very large payment",
      points: 8
    });
    aiScore += 8;
  }
  const last24h = recent.filter(
    (r) => Date.now() - new Date(r.createdAt).getTime() < 24 * 3600 * 1e3
  );
  if (last24h.length >= 5) {
    aiFlags.push({
      name: "SUPPLIER_ACTIVITY_SPIKE",
      message: `Supplier has ${last24h.length} transactions in last 24h`,
      points: 5,
      evidence: { last24hCount: last24h.length }
    });
    aiScore += 5;
  }
  aiDetails.last24hCount = last24h.length;
  if (recent.length >= 6) {
    const amounts = recent.map((t) => Number(t.amount || 0));
    const median = amounts.slice().sort((a, b2) => a - b2)[Math.floor(amounts.length / 2)];
    const deviations = amounts.map((a) => Math.abs(a - median));
    const mad = deviations.sort((a, b2) => a - b2)[Math.floor(deviations.length / 2)] || 0;
    aiDetails.median = median;
    aiDetails.mad = mad;
    if (mad > 0 && Math.abs(tx.amount - median) > 6 * mad) {
      aiFlags.push({
        name: "MAD_OUTLIER",
        message: `Amount ${tx.amount} is a strong outlier (median=${median}, MAD=${mad})`,
        points: 10
      });
      aiScore += 10;
    }
  }
  aiScore = Math.min(aiScore, 40);
  return {
    aiScore,
    aiFlags,
    aiDetails
  };
}
__name(runAIChecks, "runAIChecks");

// ../../core/scoring/riskEngine.ts
async function runRiskEngine(tx, prisma, activeRules) {
  const { triggered, deterministicScore } = evaluateRules(tx, activeRules || []);
  const ai = await runAIChecks(tx, prisma);
  const aiScore = ai.aiScore;
  const combined = Math.min(Math.round(deterministicScore + aiScore), 100);
  const riskLevel = combined >= 61 ? "HIGH" : combined >= 31 ? "WARNING" : "LOW";
  const status = combined >= 61 ? "BLOCK" : combined >= 31 ? "REVIEW" : "APPROVE";
  const flags = [
    ...triggered.map((t) => ({
      rule: t.ruleCode,
      reason: t.reason,
      legalRef: t.legalRef,
      points: t.points
    })),
    ...ai.aiFlags.map((f2) => ({
      rule: f2.name,
      reason: f2.message,
      evidence: f2.evidence,
      points: f2.points
    }))
  ];
  const auditSnapshot = {
    transaction: tx,
    deterministic: { triggered, deterministicScore },
    ai: { flags: ai.aiFlags, aiScore: ai.aiScore },
    combined: { combined, riskLevel, status },
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  return { combined, riskLevel, status, flags, triggered, auditSnapshot };
}
__name(runRiskEngine, "runRiskEngine");

// src/processors/score.ts
async function processScoreJob(prisma, jobBody) {
  const txId = jobBody.transactionId || jobBody.id;
  const tx = await prisma.transaction.findUnique({
    where: { id: txId }
  });
  if (!tx) throw new Error(`transaction not found: ${txId}`);
  const rules = await prisma.rule.findMany({
    where: { active: true }
  });
  const result = await runRiskEngine(tx, prisma, rules);
  const decision = await prisma.decision.create({
    data: {
      transactionId: tx.id,
      score: result.combined,
      riskLevel: result.riskLevel,
      status: result.status,
      flags: result.flags,
      rulesTriggered: result.triggered,
      auditSnapshot: result.auditSnapshot
    }
  });
  await prisma.transaction.update({
    where: { id: tx.id },
    data: {
      processedAt: /* @__PURE__ */ new Date(),
      status: result.status
    }
  });
  return {
    decisionId: decision.id,
    score: result.combined
  };
}
__name(processScoreJob, "processScoreJob");

// ../../core/prisma/prismaClient.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_edge = __toESM(require_edge2());

// ../../node_modules/@prisma/extension-accelerate/dist/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_default_index = __toESM(require_default_index(), 1);
var import_default_index2 = __toESM(require_default_index(), 1);
function f(a, n) {
  let [c = 0, u = 0, m = 0] = a.split(".").map(Number), [o = 0, h = 0, i = 0] = n.split(".").map(Number), r = o - c, e = h - u, t = i - m;
  return r || e || t;
}
__name(f, "f");
function p() {
  let a = import_default_index2.default.Prisma.prismaVersion;
  return [F(), `PrismaEngine/${a.engine}`, `PrismaClient/${a.client}`].join(" ");
}
__name(p, "p");
function F() {
  return typeof navigator < "u" ? "Cloudflare-Workers" : typeof process < "u" && typeof process.versions < "u" ? `Node/${process.versions.node} (${process.platform}; ${process.arch})` : "EdgeRuntime" in globalThis ? "Vercel-Edge-Runtime" : "UnknownRuntime";
}
__name(F, "F");
var P = "@prisma/extension-accelerate";
var x = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function S(a) {
  let n = p(), c;
  return async (u) => {
    let { args: m } = u, { cacheStrategy: o, __accelerateInfo: h = false, ...i } = m, r = null, { __internalParams: e, query: t } = u;
    return e.customDataProxyFetch = () => async (s, d) => {
      let A = new Array();
      typeof o?.ttl == "number" && A.push(`max-age=${o.ttl}`), typeof o?.swr == "number" && A.push(`stale-while-revalidate=${o.swr}`);
      let y = o?.tags?.join(",") ?? "";
      d.headers = { ...d.headers, "cache-control": A.length > 0 ? A.join(",") : "no-cache", "user-agent": n, ...y.length > 0 ? { "accelerate-cache-tags": y } : {} }, c && (d.headers["accelerate-query-engine-jwt"] = c);
      try {
        let g = await a(s, d);
        return r = { cacheStatus: g.headers.get("accelerate-cache-status"), lastModified: new Date(g.headers.get("last-modified") ?? ""), region: g.headers.get("cf-ray")?.split("-")[1] ?? "unspecified", requestId: g.headers.get("cf-ray") ?? "unspecified", signature: g.headers.get("accelerate-signature") ?? "unspecified" }, c = g.headers.get("accelerate-query-engine-jwt") ?? void 0, g;
      } catch {
        throw new Error(x);
      }
    }, h ? { data: await t(i, e), info: r } : t(i, e);
  };
}
__name(S, "S");
function T(a) {
  let n = f("5.1.0", import_default_index.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index.default.Prisma.defineExtension((c) => {
    let { apiKeyPromise: u, baseURL: m } = b(c), o = S(a);
    async function h(r) {
      let e = await u;
      if (!e) return { requestId: "unspecified" };
      let t;
      try {
        t = await a(new URL("/invalidate", m).href, { method: "POST", headers: { authorization: `Bearer ${e}`, "content-type": "application/json" }, body: JSON.stringify(r) });
      } catch {
        throw new Error(x);
      }
      if (!t?.ok) {
        let s = await t.text();
        throw new Error(`Failed to invalidate Accelerate cache. Response was ${t.status} ${t.statusText}. ${s}`);
      }
      return t.body?.cancel(), { requestId: t.headers.get("cf-ray") ?? "unspecified" };
    }
    __name(h, "h");
    let i = c.$extends({ name: P, query: { $allModels: { $allOperations: o } } });
    return i.$extends({ name: P, client: { $accelerate: { invalidate: /* @__PURE__ */ __name((r) => h(r), "invalidate"), invalidateAll: /* @__PURE__ */ __name(() => h({ tags: "all" }), "invalidateAll") } }, model: { $allModels: { aggregate(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.aggregate(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.aggregate({ ...r, __accelerateInfo: true });
      } });
    }, count(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.count(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.count({ ...r, __accelerateInfo: true });
      } });
    }, findFirst(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findFirst(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findFirst({ ...r, __accelerateInfo: true });
      } });
    }, findFirstOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findFirstOrThrow(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findFirstOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, findMany(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findMany(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findMany({ ...r, __accelerateInfo: true });
      } });
    }, findUnique(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findUnique(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findUnique({ ...r, __accelerateInfo: true });
      } });
    }, findUniqueOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findUniqueOrThrow(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findUniqueOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, groupBy(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.groupBy(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.groupBy({ ...r, __accelerateInfo: true });
      } });
    } } } });
  });
}
__name(T, "T");
function b(a) {
  let n = Reflect.get(a, "_accelerateEngineConfig");
  try {
    let { host: c, hostname: u, protocol: m, searchParams: o } = new URL(n?.accelerateUtils?.resolveDatasourceUrl?.(n));
    if (m === "prisma+postgres:" && (u === "localhost" || u === "127.0.0.1")) return { apiKeyPromise: Promise.resolve(o.get("api_key")), baseURL: new URL(`http://${c}`) };
  } catch {
  }
  return { apiKeyPromise: a._engine.start().then(() => a._engine.apiKey?.() ?? null), baseURL: new URL("https://accelerate.prisma-data.net") };
}
__name(b, "b");
function k(a) {
  let n = a?.fetch ?? fetch;
  return T(n);
}
__name(k, "k");

// ../../core/prisma/prismaClient.ts
function getPrisma(databaseUrl) {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL must be provided to initialize Prisma Client.");
  }
  const options = {
    accelerateUrl: databaseUrl
  };
  return new import_edge.PrismaClient(options).$extends(k());
}
__name(getPrisma, "getPrisma");

// src/index.ts
var app = new Hono2();
app.post("/worker/score", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  if (!body || typeof body.transactionId !== "string") {
    return c.json({ error: "Missing transactionId in job body" }, 400);
  }
  const resp = await processScoreJob(prisma, body);
  return c.json(resp);
});
var src_default = {
  fetch: app.fetch
};

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-S5TFoP/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-S5TFoP/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@prisma/client-runtime-utils/dist/index.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.5.0
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
//# sourceMappingURL=index.js.map

(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_586ddc._.js", {

"[project]/data/faqdata.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"idx\":1,\"question\":\"What is GDG?\",\"answer\":\"Googe Developer Groups (GDGs) are local communities of individuals wo have interest in technology and want to learn, connect, grow.\"},{\"idx\":2,\"question\":\"Who should Join GDG?\",\"answer\":\"Anyone who is interested in learning about Google's technologies, connecting with other developers, and growing their skillset is encouraged to join Google Developer Groups\"},{\"idx\":3,\"question\":\"What are the benefits as a member at GDG?\",\"answer\":\"Google Developer Groups (GDGs) offer many benefits to their members, including: \\n| Learning: Members can learn new skills through hands-on workshops and talks on a variety of technical topics. \\n| Networking: Members can meet local developers with similar interests and build a global network of developers, industry experts, and Googlers.\\n | Community: Members can collaborate and support each other in a community. GDGs aim to be inclusive and accessible, welcoming members of all skill levels.\\n | Innovation: Members can share ideas and projects, and be inspired to innovate and tackle challenges using technology. \"},{\"idx\":4,\"question\":\"What type of Events does GDG organize ?\",\"answer\":[\"Meetups: Regular gatherings where developers can meet, share ideas, and learn from each other.\",\"\\nWorkshops: Hands-on sessions where developers can learn new skills and techniques.\",\"\\nHackathons: Events where developers come together to solve a problem or build a project quickly.\",\"\\nConferences: Events that focus on Google technologies and the developer community.\",\"\\nOnline events: Virtual events such as webinars and virtual meetups.\",\"\\nOther events: Study groups, code jams, and social events.\"]},{\"idx\":5,\"question\":\"Do I need to have experience in google technology?\",\"answer\":\"No, You need no prior knowledge of google technology.\"}]"));}}),
"[project]/components/Faqs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$abc$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$abc$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/abc.svg.mjs { IMAGE => "[project]/assets/abc.svg [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqdata$2e$json__$28$json$29$__ = __turbopack_import__("[project]/data/faqdata.json (json)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false,
        false,
        false
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full p-10 m-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid place-items-center w-5/6 m-auto bg-slate-600 px-10 py-2 bg-opacity-20 rounded-2xl",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqdata$2e$json__$28$json$29$__["default"].map((que)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Accordion, {
                        question: que.question,
                        answer: que.answer,
                        turn: active,
                        setTurn: setActive,
                        idx: que.idx
                    }, void 0, false, {
                        fileName: "[project]/components/Faqs.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this)
                }, que.idx, false, {
                    fileName: "[project]/components/Faqs.tsx",
                    lineNumber: 22,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/Faqs.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Faqs.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Home, "O3NPPKeePqgnRzmPozTmKPbVvDk=");
_c = Home;
const Accordion = ({ question, answer, turn, setTurn, idx })=>{
    _s1();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Accordion.useEffect": ()=>{
            if (contentRef.current) {
                contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : "0px";
            }
        }
    }["Accordion.useEffect"], [
        contentRef,
        turn,
        idx
    ]);
    const handler = ()=>{
        const newTurn = [
            ...turn
        ];
        newTurn[idx] = !newTurn[idx];
        setTurn(newTurn);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center w-full px-2 text-lg lg:text-base",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handler,
            className: `m-2 border-2 border-slate-600 rounded-lg px-5 shadow cursor-pointer w-full h-full ${turn[idx]}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-14 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 font-light lg:text-lg text-sm text-amber-400",
                                children: question
                            }, void 0, false, {
                                fileName: "[project]/components/Faqs.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: turn[idx] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$abc$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$abc$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Faqs.tsx",
                                    lineNumber: 53,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$abc$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$abc$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Faqs.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Faqs.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Faqs.tsx",
                        lineNumber: 50,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        className: "mx-4 overflow-hidden text-left transition-all duration-500 h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg",
                            children: answer
                        }, void 0, false, {
                            fileName: "[project]/components/Faqs.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Faqs.tsx",
                        lineNumber: 57,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Faqs.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Faqs.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Faqs.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this);
};
_s1(Accordion, "4DWJwh4NdgM1uDLuR5KKKiIo21Q=");
_c1 = Accordion;
var _c, _c1;
__turbopack_refresh__.register(_c, "Home");
__turbopack_refresh__.register(_c1, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_586ddc._.js.map
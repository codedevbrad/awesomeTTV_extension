/*! For license information please see extension_js.js.LICENSE.txt */
!function(t){var g={};function c(I){if(g[I])return g[I].exports;var e=g[I]={i:I,l:!1,exports:{}};return t[I].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=g,c.d=function(t,g,I){c.o(t,g)||Object.defineProperty(t,g,{enumerable:!0,get:I})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,g){if(1&g&&(t=c(t)),8&g)return t;if(4&g&&"object"==typeof t&&t&&t.__esModule)return t;var I=Object.create(null);if(c.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:t}),2&g&&"string"!=typeof t)for(var e in t)c.d(I,e,function(g){return t[g]}.bind(null,e));return I},c.n=function(t){var g=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(g,"a",g),g},c.o=function(t,g){return Object.prototype.hasOwnProperty.call(t,g)},c.p="",c(c.s="./dev/extension_function.js")}({"./dev/_chatbox/_chatbox_emotes.js":function(module,exports){eval("\r\nvar matched__emotes = [\r\n  [ 'AWESOME_HA'  , 'https://res.cloudinary.com/dezoqwmss/image/upload/v1589817115/project_emotes/emote_3_shikj7.gif' ] ,\r\n  [ 'AWESOME_SI'  , 'https://res.cloudinary.com/dezoqwmss/image/upload/v1589817114/project_emotes/emote_2_bghcil.jpg' ] ,\r\n  [ 'AWESOME_SC'  , 'https://res.cloudinary.com/dezoqwmss/image/upload/v1589817114/project_emotes/emote_1_o8nz3p.jpg' ]\r\n]\r\n\r\nlet emotes = `\r\n\t\t<div class=\"item\">\r\n       <div data-emote=\"AWESOME_HA\">\r\n          <img src='https://res.cloudinary.com/dezoqwmss/image/upload/v1589817115/project_emotes/emote_3_shikj7.gif'/>\r\n       </div>\r\n    </div>\r\n    <div class=\"item\">\r\n       <div data-emote=\"AWESOME_SI\">\r\n          <img src='https://res.cloudinary.com/dezoqwmss/image/upload/v1589817114/project_emotes/emote_2_bghcil.jpg'/>\r\n       </div>\r\n    </div>\r\n    <div class=\"item\">\r\n       <div data-emote=\"AWESOME_SC\">\r\n          <img src='https://res.cloudinary.com/dezoqwmss/image/upload/v1589817114/project_emotes/emote_1_o8nz3p.jpg'/>\r\n       </div>\r\n    </div>\r\n`;\r\n\r\nmodule.exports.emotes_list = matched__emotes;\r\nmodule.exports.emotes_html = emotes;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvX2NoYXRib3gvX2NoYXRib3hfZW1vdGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L19jaGF0Ym94L19jaGF0Ym94X2Vtb3Rlcy5qcz9mYjAxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgbWF0Y2hlZF9fZW1vdGVzID0gW1xyXG4gIFsgJ0FXRVNPTUVfSEEnICAsICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXpvcXdtc3MvaW1hZ2UvdXBsb2FkL3YxNTg5ODE3MTE1L3Byb2plY3RfZW1vdGVzL2Vtb3RlXzNfc2hpa2o3LmdpZicgXSAsXHJcbiAgWyAnQVdFU09NRV9TSScgICwgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Rlem9xd21zcy9pbWFnZS91cGxvYWQvdjE1ODk4MTcxMTQvcHJvamVjdF9lbW90ZXMvZW1vdGVfMl9iZ2hjaWwuanBnJyBdICxcclxuICBbICdBV0VTT01FX1NDJyAgLCAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV6b3F3bXNzL2ltYWdlL3VwbG9hZC92MTU4OTgxNzExNC9wcm9qZWN0X2Vtb3Rlcy9lbW90ZV8xX284bnozcC5qcGcnIF1cclxuXVxyXG5cclxubGV0IGVtb3RlcyA9IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICA8ZGl2IGRhdGEtZW1vdGU9XCJBV0VTT01FX0hBXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV6b3F3bXNzL2ltYWdlL3VwbG9hZC92MTU4OTgxNzExNS9wcm9qZWN0X2Vtb3Rlcy9lbW90ZV8zX3NoaWtqNy5naWYnLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgPGRpdiBkYXRhLWVtb3RlPVwiQVdFU09NRV9TSVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2Rlem9xd21zcy9pbWFnZS91cGxvYWQvdjE1ODk4MTcxMTQvcHJvamVjdF9lbW90ZXMvZW1vdGVfMl9iZ2hjaWwuanBnJy8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgIDxkaXYgZGF0YS1lbW90ZT1cIkFXRVNPTUVfU0NcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXpvcXdtc3MvaW1hZ2UvdXBsb2FkL3YxNTg5ODE3MTE0L3Byb2plY3RfZW1vdGVzL2Vtb3RlXzFfbzhuejNwLmpwZycvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmVtb3Rlc19saXN0ID0gbWF0Y2hlZF9fZW1vdGVzO1xyXG5tb2R1bGUuZXhwb3J0cy5lbW90ZXNfaHRtbCA9IGVtb3RlcztcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/_chatbox/_chatbox_emotes.js\n")},"./dev/_chatbox/_chatbox_template.js":function(module,exports,__webpack_require__){eval('const emotes_html = __webpack_require__(/*! ./_chatbox_emotes.js */ "./dev/_chatbox/_chatbox_emotes.js").emotes_html;\r\n\r\nvar template = document.createElement(\'template\');\r\n    template.innerHTML = `\r\n       \t\t<style>\r\n              #chatbot-container {\r\n                  position: relative;\r\n                  display: inline-block;\r\n                  margin-top: 400px;\r\n                  margin-left: 100px;\r\n                  float: right;\r\n              }\r\n\r\n              .isOpen#chatbot-box {\r\n             \t\t \tdisplay: block;\r\n              }\r\n\r\n              #chatbot-box {\r\n                  width: 350px; height: 250px; background: white; border-radius: 10px;\r\n                  padding: 20px; display: none;\r\n                  position: absolute;\r\n                  right: 0;\r\n                  bottom: 50px;\r\n                  margin-bottom: 20px;\r\n              }\r\n\r\n               #column_adjust_2 {\r\n                   width: 100%; height: 100%; display: flex; flex-wrap: wrap;\r\n                   background: white; overflow-y: scroll;\r\n               }\r\n\r\n               #column_adjust_2 > .item {\r\n                   flex: 0 0 50%;\r\n                   height: auto;\r\n                   padding: 10px;\r\n                   box-sizing: border-box;\r\n               }\r\n\r\n               .item > div { width: 100%; height: auto;  cursor: pointer; }\r\n               .item > div > img {\r\n                   width: 100%; height: auto; border-radius: 10px;\r\n               }\r\n\r\n               #chatbot-button {\r\n               \t\t background: white; display: inline-block; padding: 10px 20px;\r\n                   border-radius: 15px; cursor: pointer;\r\n                   position: relative;\r\n               }\r\n\r\n          </style>\r\n\r\n          <div id="chatbot-container">\r\n              <div id="chatbot-box">\r\n                   <div id="column_adjust_2">\r\n                        ${ emotes_html }\r\n                   </div>\r\n              </div>\r\n              <p id="chatbot-button"> chatbox </p>\r\n          </div>\r\n`;\r\n\r\nmodule.exports.template = template;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvX2NoYXRib3gvX2NoYXRib3hfdGVtcGxhdGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvX2NoYXRib3gvX2NoYXRib3hfdGVtcGxhdGUuanM/OTY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbW90ZXNfaHRtbCA9IHJlcXVpcmUoJy4vX2NoYXRib3hfZW1vdGVzLmpzJykuZW1vdGVzX2h0bWw7XHJcblxyXG52YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgXHRcdDxzdHlsZT5cclxuICAgICAgICAgICAgICAjY2hhdGJvdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmlzT3BlbiNjaGF0Ym90LWJveCB7XHJcbiAgICAgICAgICAgICBcdFx0IFx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjY2hhdGJvdC1ib3gge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7IGhlaWdodDogMjUwcHg7IGJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4OyBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgI2NvbHVtbl9hZGp1c3RfMiB7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAjY29sdW1uX2FkanVzdF8yID4gLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAuaXRlbSA+IGRpdiB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87ICBjdXJzb3I6IHBvaW50ZXI7IH1cclxuICAgICAgICAgICAgICAgLml0ZW0gPiBkaXYgPiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgI2NoYXRib3QtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgXHRcdCBiYWNrZ3JvdW5kOiB3aGl0ZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4OyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjaGF0Ym90LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGF0Ym90LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbHVtbl9hZGp1c3RfMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkeyBlbW90ZXNfaHRtbCB9XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBpZD1cImNoYXRib3QtYnV0dG9uXCI+IGNoYXRib3ggPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbmA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/_chatbox/_chatbox_template.js\n')},"./dev/extension_function.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatbox_chatbox_emotes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_chatbox/_chatbox_emotes.js */ \"./dev/_chatbox/_chatbox_emotes.js\");\n/* harmony import */ var _chatbox_chatbox_emotes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatbox_chatbox_emotes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chatbox_chatbox_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_chatbox/_chatbox_template.js */ \"./dev/_chatbox/_chatbox_template.js\");\n/* harmony import */ var _chatbox_chatbox_template_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chatbox_chatbox_template_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _extension_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension_styles.scss */ \"./dev/extension_styles.scss\");\n/* harmony import */ var _extension_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_extension_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n//\r\n\r\n\r\n\r\n\r\n\r\nvar chatContainer = document.querySelector('.chat-scrollable-area__message-container');\r\n\r\nconst mutateString = ( words , string ) => {\r\n    var newString = string;\r\n\r\n    words.forEach( ( each_word ) => {\r\n        newString = newString.replace( each_word[0] , `<img src=${ each_word[1] } width=\"32\" height=\"32\" />` );\r\n    });\r\n    return newString;\r\n}\r\n\r\nvar chat__watchMessages = new MutationObserver( ( e ) => {\r\n\r\n    let chatMsg__all  = chatContainer.querySelectorAll('.chat-line__message .text-fragment');\r\n    let chatMsg__curr_index = chatMsg__all.length - 1;\r\n    let chatMsg__curr = chatMsg__all[ chatMsg__curr_index ].innerHTML;\r\n\r\n    let mutated = mutateString( _chatbox_chatbox_emotes_js__WEBPACK_IMPORTED_MODULE_0__[\"emotes_list\"] , chatMsg__curr );\r\n\r\n    let new__msg__container = chatContainer.querySelectorAll('.chat-line__message .text-fragment');\r\n    let new__msg__ready = new__msg__container[ new__msg__container.length - 1 ];\r\n\r\n    new__msg__ready.innerHTML = mutated;\r\n});\r\n\r\nchat__watchMessages.observe( chatContainer , { childList: true });\r\n\r\nclass Chatbox extends HTMLElement {\r\n    constructor() {\r\n         super();\r\n         this.attachShadow({ mode: 'open' });\r\n         this.shadowRoot.appendChild( _chatbox_chatbox_template_js__WEBPACK_IMPORTED_MODULE_1__[\"template\"].content.cloneNode( true ) );\r\n    }\r\n\r\n    appendToChat( emote ) {\r\n    \t\t let elem = document.getElementById('.chat-input__textarea');\r\n             elem.value += emote;\r\n    }\r\n\r\n    attachClicksToEmotes ( images ) {\r\n    \t\t for (let i = 0; i < images.length; i++ ) {\r\n             images[i].addEventListener(\"click\", ( e ) => {\r\n                 let emote = e.currentTarget.getAttribute('data-emote');\r\n                 this.appendToChat( emote );\r\n                 console.log( emote );\r\n             });\r\n         }\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.shadowRoot.querySelector('p').addEventListener('click' , ( ) => {\r\n             let el = this.shadowRoot.querySelector('#chatbot-box');\r\n                 el.classList.toggle('isOpen');\r\n        });\r\n        let images = this.shadowRoot.querySelectorAll('.item > div');\r\n\r\n        this.attachClicksToEmotes( images );\r\n    }\r\n}\r\n\r\nlet twitch_chat = 'chat-input.tw-block';\r\n\r\n // if the TTV_page doesn't have a chat window, don't load the app.\r\nif ( document.querySelector( twitch_chat ) == null ) {\r\n\r\n\t\t window.customElements.define('chatbox-card', Chatbox );\r\n     document.querySelector( twitch_chat ).appendChild( new Chatbox() );\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvZXh0ZW5zaW9uX2Z1bmN0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2V4dGVuc2lvbl9mdW5jdGlvbi5qcz9iYmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbmltcG9ydCB7IGVtb3Rlc19saXN0IGFzIG1hdGNoZWRfX2Vtb3RlcyAsIGVtb3Rlc19odG1sIGFzIGVtb3RlcyB9IGZyb20gJy4vX2NoYXRib3gvX2NoYXRib3hfZW1vdGVzLmpzJztcclxuaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICcuL19jaGF0Ym94L19jaGF0Ym94X3RlbXBsYXRlLmpzJztcclxuXHJcbmltcG9ydCAnLi9leHRlbnNpb25fc3R5bGVzLnNjc3MnO1xyXG5cclxudmFyIGNoYXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdC1zY3JvbGxhYmxlLWFyZWFfX21lc3NhZ2UtY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBtdXRhdGVTdHJpbmcgPSAoIHdvcmRzICwgc3RyaW5nICkgPT4ge1xyXG4gICAgdmFyIG5ld1N0cmluZyA9IHN0cmluZztcclxuXHJcbiAgICB3b3Jkcy5mb3JFYWNoKCAoIGVhY2hfd29yZCApID0+IHtcclxuICAgICAgICBuZXdTdHJpbmcgPSBuZXdTdHJpbmcucmVwbGFjZSggZWFjaF93b3JkWzBdICwgYDxpbWcgc3JjPSR7IGVhY2hfd29yZFsxXSB9IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+YCApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3U3RyaW5nO1xyXG59XHJcblxyXG52YXIgY2hhdF9fd2F0Y2hNZXNzYWdlcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCAoIGUgKSA9PiB7XHJcblxyXG4gICAgbGV0IGNoYXRNc2dfX2FsbCAgPSBjaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGF0LWxpbmVfX21lc3NhZ2UgLnRleHQtZnJhZ21lbnQnKTtcclxuICAgIGxldCBjaGF0TXNnX19jdXJyX2luZGV4ID0gY2hhdE1zZ19fYWxsLmxlbmd0aCAtIDE7XHJcbiAgICBsZXQgY2hhdE1zZ19fY3VyciA9IGNoYXRNc2dfX2FsbFsgY2hhdE1zZ19fY3Vycl9pbmRleCBdLmlubmVySFRNTDtcclxuXHJcbiAgICBsZXQgbXV0YXRlZCA9IG11dGF0ZVN0cmluZyggbWF0Y2hlZF9fZW1vdGVzICwgY2hhdE1zZ19fY3VyciApO1xyXG5cclxuICAgIGxldCBuZXdfX21zZ19fY29udGFpbmVyID0gY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhdC1saW5lX19tZXNzYWdlIC50ZXh0LWZyYWdtZW50Jyk7XHJcbiAgICBsZXQgbmV3X19tc2dfX3JlYWR5ID0gbmV3X19tc2dfX2NvbnRhaW5lclsgbmV3X19tc2dfX2NvbnRhaW5lci5sZW5ndGggLSAxIF07XHJcblxyXG4gICAgbmV3X19tc2dfX3JlYWR5LmlubmVySFRNTCA9IG11dGF0ZWQ7XHJcbn0pO1xyXG5cclxuY2hhdF9fd2F0Y2hNZXNzYWdlcy5vYnNlcnZlKCBjaGF0Q29udGFpbmVyICwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XHJcblxyXG5jbGFzcyBDaGF0Ym94IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKCB0cnVlICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRUb0NoYXQoIGVtb3RlICkge1xyXG4gICAgXHRcdCBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuY2hhdC1pbnB1dF9fdGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgIGVsZW0udmFsdWUgKz0gZW1vdGU7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoQ2xpY2tzVG9FbW90ZXMgKCBpbWFnZXMgKSB7XHJcbiAgICBcdFx0IGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICAgaW1hZ2VzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoIGUgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGVtb3RlID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbW90ZScpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9DaGF0KCBlbW90ZSApO1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBlbW90ZSApO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcigncCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICggKSA9PiB7XHJcbiAgICAgICAgICAgICBsZXQgZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2NoYXRib3QtYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXNPcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGltYWdlcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbSA+IGRpdicpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaENsaWNrc1RvRW1vdGVzKCBpbWFnZXMgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHR3aXRjaF9jaGF0ID0gJ2NoYXQtaW5wdXQudHctYmxvY2snO1xyXG5cclxuIC8vIGlmIHRoZSBUVFZfcGFnZSBkb2Vzbid0IGhhdmUgYSBjaGF0IHdpbmRvdywgZG9uJ3QgbG9hZCB0aGUgYXBwLlxyXG5pZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHR3aXRjaF9jaGF0ICkgPT0gbnVsbCApIHtcclxuXHJcblx0XHQgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2hhdGJveC1jYXJkJywgQ2hhdGJveCApO1xyXG4gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHR3aXRjaF9jaGF0ICkuYXBwZW5kQ2hpbGQoIG5ldyBDaGF0Ym94KCkgKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/extension_function.js\n")},"./dev/extension_styles.scss":function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvZXh0ZW5zaW9uX3N0eWxlcy5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2V4dGVuc2lvbl9zdHlsZXMuc2Nzcz81N2VjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev/extension_styles.scss\n")}});
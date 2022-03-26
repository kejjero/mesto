(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),n=document.querySelector(".popup__input_person"),r=document.querySelector(".popup__input_about-me"),o={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._cardTitle=e.name,this._cardLink=e.link,this._cardSelector=n,this._popupImage=r}var e,n;return e=t,(n=[{key:"_getTemplateCard",value:function(){return this.cardElement=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0),this.cardElement}},{key:"_setData",value:function(){this._cardName.textContent=this._cardTitle,this._cardImage.alt=this._cardTitle,this._cardImage.src=this._cardLink}},{key:"_handleLikeButton",value:function(){this._cardLike.classList.toggle("element__like_active")}},{key:"_handleTrashButton",value:function(){this._cardElement.remove()}},{key:"_handleCardClick",value:function(){this._popupImage.open(this._data)}},{key:"_setEventListeners",value:function(){var t=this;this._cardLike.addEventListener("click",(function(){return t._handleLikeButton()})),this._cardTrash.addEventListener("click",(function(){return t._handleTrashButton()})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick()}))}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplateCard(),this._cardName=this._cardElement.querySelector(".element__title"),this._cardImage=this._cardElement.querySelector(".element__image"),this._cardLike=this._cardElement.querySelector(".element__like"),this._cardTrash=this._cardElement.querySelector(".element__trash"),this._setEventListeners(),this._setData(),this._cardElement}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._container=document.querySelector(n),this._renderer=o}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=document.querySelector(n),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputs=function(t){if(Array.isArray(t))return l(t)}(r=this._form.querySelectorAll(this._inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._button=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_setFormsListeners",value:function(){var t=this;this._form.addEventListener("input",(function(){return t.setSubmitButtonState()})),this._inputs.forEach((function(e){return e.addEventListener("input",(function(){return t._handleField(e)}))})),this.setSubmitButtonState()}},{key:"_handleField",value:function(t){t.validity.valid?this._hideErrors(t):this._showErrors(t)}},{key:"_showErrors",value:function(t){t.classList.add(this._inputErrorClass),this._errorElement=this._form.querySelector("#".concat(t.id,"-errors")),this._errorElement.textContent=t.validationMessage}},{key:"_hideErrors",value:function(t){t.classList.remove(this._inputErrorClass),this._errorElement=this._form.querySelector("#".concat(t.id,"-errors")),this._errorElement.textContent=""}},{key:"setSubmitButtonState",value:function(){this._button.disabled=!this._form.checkValidity(),this._button.classList.toggle(this._inactiveButtonClass,!this._form.checkValidity())}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setFormsListeners()}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._overlay=this._popup.querySelector(".popup__overlay"),this._clossButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._clossButton.addEventListener("click",(function(){return t.close()})),this._overlay.addEventListener("click",(function(){t._popup.classList.contains("popup_opened")&&t.close()}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=m(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function m(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function v(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return v(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popup=document.querySelector(t),e._image=e._popup.querySelector(".popup__image"),e._subtitle=e._popup.querySelector(".popup__subtitle"),e}return e=a,(n=[{key:"open",value:function(t){_(w(a.prototype),"open",this).call(this),this._subtitle.textContent=t.name,this._image.src=t.link,this._image.alt=t.link}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(y);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=O(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}function j(t,e){return j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},j(t,e)}function C(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return C(this,t)});function a(t,e){var n,r,o=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callbackSubmitForm=o,n._popup=document.querySelector(t),n._form=n._popup.querySelector(".popup__form"),n._inputs=function(t){if(Array.isArray(t))return k(t)}(r=n._form.querySelectorAll(".popup__input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"close",value:function(){x(L(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;x(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues())}))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(y);function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var P=function(){function t(e){var n=e.data;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._person=document.querySelector(n.person),this._aboutMe=document.querySelector(n.aboutMe)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{person:this._person.textContent,aboutMe:this._aboutMe.textContent}}},{key:"setUserInfo",value:function(t){this._person.textContent=t.person,this._aboutMe.textContent=t.aboutMe}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),M=function(t){var e=function(t){return new a(t,"#element-template",H).generateCard()}(t);A.addItem(e)},A=new c({items:[{name:"Амерсфорт",link:"https://images.unsplash.com/photo-1602680229340-79ac2a8afbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Венеция",link:"https://images.unsplash.com/photo-1640020376653-6c3809a9132b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"},{name:"Ахен",link:"https://images.unsplash.com/photo-1630509707234-718d3c501736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"},{name:"Стокгольм",link:"https://images.unsplash.com/photo-1644574739831-d19ded59cae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Киото",link:"https://images.unsplash.com/photo-1561503972-839d0c56de17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Гальштат",link:"https://images.unsplash.com/photo-1628370964797-7e51aee90a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}],renderer:M},".elements"),I=new B(".popup_type_add-place",{callbackSubmitForm:function(t){var e={name:t.name,link:t.link};M(e),I.close()}}),T=new B(".popup_type_edit-profile",{callbackSubmitForm:function(t){D.setUserInfo(t),T.close()}}),D=new P({data:{person:".profile__person",aboutMe:".profile__about-me"}}),H=new S(".popup_type_image"),R=new f(o,".popup__form_add-place"),V=new f(o,".popup__form_edit-profile");t.addEventListener("click",(function(){var t=D.getUserInfo();n.value=t.person,r.value=t.aboutMe,T.open(),R.setSubmitButtonState()})),e.addEventListener("click",(function(){I.open(),R.setSubmitButtonState()})),V.enableValidation(),R.enableValidation(),A.renderItems(),H.setEventListeners(),I.setEventListeners(),T.setEventListeners()})();
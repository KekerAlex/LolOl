!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
    }

    return n.m = e, n.c = t, n.p = "", n(0)
}([function (e, t, n) {
    e.exports = n(38)
}, function () {
    var e = window, t = e.onDOMReady, n = e.onBodyResize, i = e.geByClass1, a = e.removeClass, r = e.addClass,
        o = e.gpeByClass, s = e.hasClass, l = e.toggleClass, c = window, u = c.clearCookie, d = c.setCookie;
    !function () {
        t(e), n(e);

        function e() {
            if (i("tabs_block_hideable")) {
                var e = i("tabs_block");
                i("tabs_list").offsetHeight > i("tabs_list_more").offsetHeight ? a("tabs_block_without_show_more", e) : r("tabs_block_without_show_more", e)
            }
        }

        function c(e) {
            var t = o("tabs_block", e);
            s("tabs_block_opened", t) ? u("remixm_tabs_expanded") : d("remixm_tabs_expanded", 1), l("tabs_block_opened", t)
        }

        window.Tabs = {actualizeShowMoreVisibility: e, toggle: c}
    }()
}, function () {
    window.Spinner = e;

    function e() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = e ? e.mix : "";
        return Icon({mix: t + " spinner", icon: "spinner"})
    }
}, function () {
    var e = r(['\n    <div class="', '" ', " ", ">\n      ", "\n    </div>\n  "], ['\n    <div class="', '" ', " ", ">\n      ", "\n    </div>\n  "]),
        t = r(["\n    ", '\n    <div class="msg__content">\n      <div class="msg__head">\n        <a class="msg__author" href="', '">', '</a>\n        <div class="msg__date">', "</div>\n        ", "\n        ", "\n        ", "\n        ", '\n      </div>\n      <div class="msg__text">\n        ', '\n      </div>\n    </div>\n    <div class="msg__restore">\n      ', "\n    </div>\n  "], ["\n    ", '\n    <div class="msg__content">\n      <div class="msg__head">\n        <a class="msg__author" href="', '">', '</a>\n        <div class="msg__date">', "</div>\n        ", "\n        ", "\n        ", "\n        ", '\n      </div>\n      <div class="msg__text">\n        ', '\n      </div>\n    </div>\n    <div class="msg__restore">\n      ', "\n    </div>\n  "]),
        n = r(['\n    <div class="msg__admin">\n      (<a class="msg__adminLink" href="', '">', "</a>)\n    </div>\n  "], ['\n    <div class="msg__admin">\n      (<a class="msg__adminLink" href="', '">', "</a>)\n    </div>\n  "]),
        i = r(['\n    <span class="msg__edited">\n      <span class="msg__editedMiddot">&middot;</span>', "\n    </span>\n  "], ['\n    <span class="msg__edited">\n      <span class="msg__editedMiddot">&middot;</span>', "\n    </span>\n  "]),
        a = r(['\n    <span class="msg__restoreText msg__restoreText_remove">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreText_spam">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreLink" ', ">\n      ", "\n    </span>\n  "], ['\n    <span class="msg__restoreText msg__restoreText_remove">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreText_spam">\n      ', '\n    </span>\n    <span class="msg__restoreText msg__restoreLink" ', ">\n      ", "\n    </span>\n  "]);

    function r(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    window.Msg = o, window.Msg_renderRestoreInner = u;

    function o(t) {
        var n = t.id, i = t.removed, a = t.service, r = s(t), o = q["class"]("msg", {
            id: n,
            service: a,
            unread: t.unread,
            important: t.important,
            removed: !!i,
            spam: "spam" === i
        }), l = "", c = "";
        return a || (l = q.onClick("Msg._onClick", "event", "this", n), c = q.onTouchStart("Msg._onTouchStart")), q.html(e, o, l, c, r)
    }

    function s(e) {
        if (e.service) return e.text;
        var n = Avatar({mix: "msg__avatar", url: e.authorUrl, photos: [e.authorPhoto], size: 40}),
            i = Icon({mix: "msg__check", icon: "check"}), a = Icon({mix: "msg__star", icon: "star", blue: !0}),
            r = e.admin ? l(e.admin) : "", o = e.removed ? u(e.id) : "", s = e.edited ? c() : "";
        return q.html(t, n, e.authorUrl, e.authorName, e.date, s, r, i, a, e.text, o)
    }

    function l(e) {
        return q.html(n, e.url, e.name)
    }

    function c() {
        var e = window.lang;
        return q.html(i, e.mobile_mail_edited)
    }

    function u(e) {
        var t = window.lang, n = q.onClick("Msg._onRestoreClick", "event", e);
        return q.html(a, t.mobile_msg_mail_message_deleted, t.mobile_msg_mail_message_marked_as_spam, n, t.mobile_restore)
    }
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var a = 35;

    function r(e, t) {
        return Math.log(t) / Math.log(e)
    }

    "undefined" == typeof window.isTouch && (window.isTouch = !1);
    t.Slider = function () {
        function e(t, n) {
            if (i(this, e), !t) throw new Error("No element was provided for Slider");
            t = ge(t), this.options = n || {size: 1}, "undefined" == typeof this.options.logfbase && (this.options.logfbase = a), this.options.backValue = this.options.backValue || 0;
            var r = 100 * this.options.backValue,
                o = this.options.withBackLine ? '<div class="slider_back" style="width:' + r + '%"></div>' : "",
                s = '<div class="slider_slide"><div class="slider_loading_bar" style="opacity: 0; display: none;"></div> ' + o + ' <div class="slider_amount"></div> <div class="slider_handler"></div> </div>';
            this._el = ce("div", {innerHTML: s, className: "slider", id: t.getAttribute("id") || ""});
            var l = this;
            if (t.classList) for (var c = t.classList, u = 0, d = c.length; d > u; u++) addClass(this._el, c[u]); else this._el.className = t.className;
            each(this._el.attributes, function (e, t) {
                ("id" != t.name || "class" != t.name) && l._el.setAttribute(t.name, t.value)
            }), t.parentNode.replaceChild(this._el, t), this._amountEl = geByClass1("slider_amount", this._el), this._handlerEl = geByClass1("slider_handler", this._el), this._slideEl = geByClass1("slider_slide", this._el), this._backEl = geByClass1("slider_back", this._el), this._progressEl = geByClass1("slider_loading_bar", this._el), this.options.color && (setStyle(this._amountEl, {backgroundColor: this.options.color}), setStyle(this._handlerEl, {backgroundColor: this.options.color})), this.options.backColor && setStyle(this._slideEl, {backgroundColor: this.options.backColor}), addClass(this._el, "slider_size_" + this.options.size), this.options.debounce && (this._onValueChangeDebounced = debounce(this._onValueChange, this.options.debounce)), !isTouch && n.formatHint && (addEvent(this._el, "mousemove", this._ev_onMouseOver = this._onMouseOver.bind(this)), addEvent(this._el, "mouseleave", this._ev_onMouseLeave = this._onMouseLeave.bind(this))), addEvent(this._el, isTouch ? "touchstart" : "mousedown", this._ev_onMouseDown = this._onMouseDown.bind(this)), addEvent(this._el, "click", cancelEvent), this.setValue(this.options.value || 0, !this.options.fireChangeEventOnInit, !1), this.setBackValue(this.options.backValue)
        }

        return e.prototype.toggleLoading = function (e) {
            e = !!e, toggle(this._progressEl, e), setStyle(this._progressEl, "opacity", e ? 1 : 0)
        }, e.prototype.destroy = function () {
            !isTouch && this.options.formatHint && (removeEvent(this._el, "mousemove", this._ev_onMouseOver), removeEvent(this._el, "mouseleave", this._ev_onMouseLeave), removeEvent(this._el, "mousedown", this._ev_onMouseDown));
            var e = window.re || window.remove;
            e(this._el), e(this._currHintEl)
        }, e.prototype._updateHint = function (e, t) {
            this._currHintEl || (this._currHintEl = ce("div", {
                className: "slider_hint",
                id: "slider_hint"
            }), this.options.hintClass && addClass(this._currHintEl, this.options.hintClass), this._el.appendChild(this._currHintEl));
            var n = this._getPos(), i = Math.round((e.pageX || e.touches[0].pageX) - n[0]), a = this._width;
            if (i = t ? Math.min(Math.max(0, i), a) : i, i >= 0 && a >= i) {
                var r = i / a;
                this._currHintEl.innerHTML = this.options.formatHint ? this.options.formatHint.call(this, r) : r;
                var o = this._currHintEl.getBoundingClientRect();
                setStyle(this._currHintEl, {
                    left: this._slideEl.offsetLeft + i - (o.right - o.left) / 2,
                    top: this._slideEl.offsetTop - (o.bottom - o.top) - 10
                }), !t && this._toggleHint(!0)
            } else !t && this._toggleHint(!1);
            this.options.formatHint || this._toggleHint(!1)
        }, e.prototype._toggleHint = function (e) {
            toggleClass(this._currHintEl, "visible", e)
        }, e.prototype._onMouseOver = function (t) {
            e._currenSliderDrag || hasClass(this._el, "active") || this._updateHint(t)
        }, e.prototype._onMouseLeave = function () {
            hasClass(this._el, "active") || this._toggleHint(!1)
        }, e.prototype._onMouseDown = function (t) {
            (0 == t.button || t.touches) && (delete cur._sliderMouseUpNowEl, addEvent(window, isTouch ? "touchmove" : "mousemove", this._ev_onMouseMove = this._onMouseMove.bind(this)), addEvent(window, isTouch ? "touchend touchcancel" : "mouseup", this._ev_onMouseUp = this._onMouseUp.bind(this)), this._onMouseMove(t), e._currenSliderDrag = this, addClass(this._el, "active"), cancelEvent(t))
        }, e.prototype._onMouseUp = function (t) {
            cur._sliderMouseUpNowEl = this._el, removeEvent(window, isTouch ? "touchmove" : "mousemove", this._ev_onMouseMove), removeEvent(window, isTouch ? "touchend touchcancel" : "mouseup", this._ev_onMouseUp), this._onValueChange(), removeClass(this._el, "active"), e._currenSliderDrag = !1, this._toggleHint(!1), this.options.onEndDragging && this.options.onEndDragging(this._currValue), cancelEvent(t)
        }, e.prototype._onMouseMove = function (e) {
            var t = this._getPos(), n = t[0];
            n = "undefined" != typeof e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.pageX, n = Math.max(n, t[0]), n = Math.min(n, t[0] + this._width), n -= t[0], this.setValue(n / this._width, !0, !0), this._onValueChangeDebounced ? this._onValueChangeDebounced() : this._onValueChange(), this._toggleHint(!0), this._updateHint(e, !0), cancelEvent(e)
        }, e.prototype._getPos = function () {
            return this._slidePos = getXY(this._slideEl)
        }, e.prototype._logf = function (e) {
            if (!this.options.log) return e;
            var t = this.options.logfbase;
            return (Math.pow(t, e) - 1) / (t - 1)
        }, e.prototype._unlogf = function (e) {
            if (!this.options.log) return e;
            var t = this.options.logfbase;
            return r(t, 1 + e * (t - 1))
        }, e.prototype.setValue = function (e, t, n) {
            if (!hasClass(this._el, "active") || n) {
                var i = n ? this._logf(e) : e;
                if (this._currValue != i) {
                    this._currValue = i;
                    var a = n ? e : this._unlogf(e);
                    a = 100 * a + "%", setStyle(this._amountEl, {width: a}), setStyle(this._handlerEl, {left: a}), !t && this._onValueChange()
                }
            }
        }, e.prototype.setBackValue = function (e) {
            toggleClass(this._backEl, "slider_back_transition", e > this._backValue), this._backValue = e;
            var t = 100 * e + "%";
            setStyle(this._backEl, {width: t})
        }, e.prototype._onValueChange = function () {
            this._lastValue = this._lastValue || 0, this._lastValue != this._currValue && (this._lastValue = this._currValue, this.options.onChange && this.options.onChange(this._currValue))
        }, n(e, [{
            key: "_width", get: function () {
                if (!this._widthCache) {
                    var e = this._el.getBoundingClientRect();
                    this._widthCache = e.right - e.left
                }
                return this._widthCache
            }
        }]), e
    }()
}, function () {
    var e = window, t = e.preventEvent, n = e.toggleClass, i = e.attr, a = e.gpeByClass, r = e.geByClass1, o = e.ajax,
        s = e.val, l = e.ge, c = e.addClass, u = e.removeClass, d = e.geBySel1, f = function () {
            var e = "_audioSnippet", f = "audio_item", p = "audioPlaylist__add_added", _ = "data-follow_text",
                m = "data-unfollow_text", h = "_audioPlaylistsPage__item", v = "audioPlaylistsPage__item_removed";

            function g(o, s) {
                t(o);
                var l = a(e, s), c = r(f, l);
                audioplayer.playPause(o, i(c, "data-id")), n("audioSnippet__playpause_paused", s)
            }

            function w(e, t) {
                var i = s(e), a = l(t + "_field"), r = "tab_item_cur_noactive";
                s(a, i), cur && cur[t] && cur[t].go();
                var o = d(".audioPage__tabs .tab_item_cur");
                o && n(r, o, i)
            }

            function y(e) {
                return '<div class="audioPlaylists__item">\n              <a href="' + e.href + '" class="audioPlaylists__itemLink al_playlist">\n                <span class="audioPlaylists__itemCover" style="' + e.thumb_style + '">' + e.grid_covers + '</span>\n                <span class="audioPlaylists__itemTitle">' + e.title + '</span>\n                <span class="audioPlaylists__itemAuthor">' + e.author_name + '</span>\n                <span class="audioPlaylists__itemStats">' + e.short_stats + "</span>\n              </a>\n            </div>"
            }

            function b(e, t, n, i) {
                return e ? '<div class="audioPlaylists">\n                <div class="audioPlaylists__header">\n                  <div class="audioPlaylists__cell">\n                    <div class="audioPlaylists__title">' + n + '</div>\n                  </div>\n                  <div class="audioPlaylists__cell">' + i + '</div>\n                </div>\n                <div class="audioPlaylists__body _preventMenuOpen">\n                  <div class="audioPlaylists__items">\n                    ' + e + "\n                  </div>\n                </div>\n              </div>" : ""
            }

            function k(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return '<div class="audioPlaylistsPage">\n              <div class="audioPage__search">\n                ' + t + '\n              </div>\n              <div class="audioPlaylistsPage__list _si_container" id="au_search_playlist_items">\n                ' + e + "\n              </div>\n            </div>"
            }

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                    n = '<div class="audioPlaylistsPage__cell audioPlaylistsPage__cell_actions">\n                <div class="audioPlaylistsPage__menu ai_menu_wrap">\n                  <a href="#" class="ai_menu_toggle_button" onclick="ActionMenu.toggleMenu(event, this);"></a>\n                  <i class="i_pointer"></i>\n                  <div class="ai_menu wi_actions">\n                    ' + e.follow_link + "\n                    " + e.publish_link + "\n                  </div>\n                </div>\n             </div>\n             " + e.actions;
                return t && (n = '<div class="audioPlaylistsPage__cell audioPlaylistsPage__cell_actions">\n                   <div class="audioPlaylistsPage__menu ai_menu_wrap">\n                     <a href="#" class="ai_menu_toggle_button"></a>\n                   </div>\n                 </div>'), '<div class="audioPlaylistsPage__item _audioPlaylistsPage__item' + e.owner_id + "_" + e.id + '">\n              <div class="audioPlaylistsPage__cell audioPlaylistsPage__cell_link">\n                <a href="' + e.href + '" class="audioPlaylistsPage__itemLink">\n                  <span class="audioPlaylistsPage__container">\n                    <span class="audioPlaylistsPage__cell audioPlaylistsPage__cell_cover">\n                      <span class="audioPlaylistsPage__cover" style="' + e.thumb_style + '">' + e.grid_covers + '</span>\n                    </span>\n                    <span class="audioPlaylistsPage__cell audioPlaylistsPage__cell_desc">\n                      <span class="audioPlaylistsPage__title">' + e.title + '</span>\n                      <span class="audioPlaylistsPage__author">' + e.author_name + '</span>\n                      <span class="audioPlaylistsPage__stats">' + e.short_stats + "</span>\n                    </span>\n                  </span>\n                </a>\n              </div>\n              " + n + "\n            </div>"
            }

            function C(e) {
                return '<div class="audioPlaylistsPage__notFound">\n              ' + e + "\n            </div>"
            }

            function S() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1, n = window, i = n.lang,
                    a = ('<input type="hidden" name="act" value="player"><input type="hidden" name="list" value="' + escapeAttr(e) + '">', '<input id="au_search_btn" class="button qs_button al_tab" type="submit" value="' + i.mobile_audio_search_btn + '" />', function (e, t, n) {
                        return '<form action="/audio" class="qsearch" onsubmit="return cur.au_search.go(event);">' + e(t, n) + "</form>"
                    }), r = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return '<div class="audioPage__search">\n              <div class="hp_block">\n                ' + e + '\n                <div class="qsearch">\n                  <table class="row_table">\n                    <tr>\n                      <td class="row_table_main_column">\n                        <div class="qs_field_wrap">\n                          <div class="iwrap">\n                            <input id="au_search_field" type="text" class="textfield qs_textfield" name="q" placeholder="' + i.mobile_audio_search_placeholder_simple + '">\n                          </div>\n                        </div>\n                      </td>\n                      <td class="row_table_last_column">\n                        ' + t + "\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>"
                    };
                return t ? r() : a(r)
            }

            function T(e, a) {
                t(e);
                var o = r(h + i(a, "data-playlist_owner_id") + "_" + i(a, "data-playlist_id"));
                hasClass(p, a) ? (a.innerText = i(a, _), c(v, o)) : (a.innerText = i(a, m), u(v, o)), E(a), n(p, a)
            }

            function E(e) {
                o.post("/audio", {
                    _ajax: 1,
                    act: "follow_playlist",
                    playlist_owner_id: i(e, "data-playlist_owner_id"),
                    playlist_id: i(e, "data-playlist_id"),
                    hash: i(e, "data-hash")
                }, {redirectToLoginPage: !0})
            }

            return {
                playPause: g,
                followPlaylist: T,
                tplSearchBlockItem: y,
                tplSearchBlock: b,
                tplSearchListItem: M,
                tplSearchListNull: C,
                tplPlaylistsPage: k,
                tplPlayerSearch: S,
                copyValue: w
            }
        }();
    window.AudioPlaylist = f
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(115), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = window, s = o.addEvent, l = o.removeEvent, c = {
        onIframeReady: a["default"]("{ is_api, check_transfer_url, on_success_url }"),
        onPostMessage: a["default"](),
        onAcceptCookieClick: a["default"]()
    };
    c.onIframeReady(function () {
        s(window, "message", u), window.cur.destroy.push(function () {
            l(window, "message", u)
        })
    });

    function u(e) {
        var t = e.origin, n = void 0;
        if (t.match(/^https?:\/\/([a-zA-Z0-9\-\.]+\.)?money\.mail\.ru$/)) {
            try {
                n = JSON.parse(e.data)
            } catch (i) {
                n = {}
            }
            "billing" === n.type && c.onPostMessage(n.action, n.action_params)
        }
    }

    window.BasisMoneyTransfer = c, t["default"] = c
}, function () {
    Object.assign(window, {
        uConvo: e,
        uConvo_getUnreadCount: i,
        uConvo_getLastMsg: o,
        uConvo_getPeer: a,
        uConvo_getLastMsgId: r,
        uConvo_getOnline: t
    });

    function e(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = "last" === a, s = store.mail,
            l = s.peers[e], c = l.url, u = null;
        if (a) {
            o || (c = c + "&msg=" + a);
            var d = o ? r(e) : a, f = s.msgs[d];
            u = {
                text: f.textShort,
                date: f.dateShort,
                unreadCount: i(e),
                muted: l.isMuted,
                typingNames: l.typing.map(n)
            }
        }
        return Convo({
            id: e,
            url: c,
            photos: l.avatarImages,
            title: l.title,
            online: t(l),
            important: l.isImportant,
            profileUrl: l.profileUrl,
            isLast: o,
            more: u
        })
    }

    function t(e) {
        return e.isOnline ? "desktop" === e.onlinePlatform ? "desktop" : "mobile" : !1
    }

    function n(e) {
        return store.mail.members[e].name
    }

    function i(e) {
        var t = a(e), n = t.countUnread;
        if (0 === n) {
            var i = store.mail, o = r(e), s = o ? i.msgs[o] : null;
            s && s.isUnread && s.authorId === i.cur.viewerId && (n = -1)
        }
        return n
    }

    function a(e) {
        var t = store.mail.peers[e];
        return t
    }

    function r(e) {
        var t = store.mail.rolls.peer[e], n = t ? last(t) : null;
        return n
    }

    function o(e) {
        var t = store.mail.msgs, n = r(e), i = n ? t[n] : null;
        return i
    }
}, function () {
    window.FeedBlocks = {
        hideReason: function e(t, n) {
            if (e.progress) return !1;
            e.progress = !0;
            var i = "block_" + t, a = ge(i);
            cur.feedBlocksHTML && delete cur.feedBlocksHTML[i], ajax.post("feed.php", {
                act: "block_hide_reason",
                block_id: t,
                reason: 0 | n,
                hash: attr(a, "data-hash"),
                pos: attr(a, "data-pos"),
                ref: attr(a, "data-ref")
            }, {
                onDone: function (t) {
                    e.progress = !1, t ? val(a, t) : hide(a), e.progress = !1
                }, onFail: function () {
                    e.progress = !1
                }
            })
        }, restore: function (e) {
            var t = "block_" + e, n = ge(t);
            cur.feedBlocksHTML && cur.feedBlocksHTML[t] && val(t, cur.feedBlocksHTML[t]), ajax.post("feed.php", {
                act: "block_restore",
                block_id: e,
                hash: attr(n, "data-hash"),
                pos: attr(n, "data-pos"),
                ref: attr(n, "data-ref")
            })
        }, hide: function t(e) {
            if (t.progress) return !1;
            t.progress = !0, post.wallActionsHide();
            var n = "block_" + e, i = ge(n);
            return ajax.post("feed.php", {
                act: "block_hide",
                block_id: e,
                hash: attr(i, "data-hash"),
                pos: attr(i, "data-pos"),
                ref: attr(i, "data-ref")
            }, {
                onDone: function (e) {
                    post.wallActionsHide(), cur.feedBlocksHTML || (cur.feedBlocksHTML = {}), cur.feedBlocksHTML[n] = val(i), val(i, e), t.progress = !1
                }, onFail: function () {
                    t.progress = !1
                }
            }), !1
        }
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {value: !0}), t.Resampler = void 0, t.fastResample = c;
    var i = n(113), a = n(118), r = n(88);

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var s = {avg: i.AverageAlgorithm, peak: a.PeakAlgorithm, quad: r.QuadAlgorithm}, l = t.Resampler = function () {
        function e(t) {
            o(this, e), this._normalizeAlgorithm = !1, s[t.normalizeAlgorithm] && (this._normalizeAlgorithm = new s[t.normalizeAlgorithm]), this._srcSampleRate = parseInt(t.srcSampleRate || 0), this._dstSampleRate = parseInt(t.dstSampleRate || 0), this._truncateTo = 1, "undefined" != typeof t.truncateTo && (this._truncateTo = t.truncateTo), this._sampleRate = this._dstSampleRate > 0 ? this._srcSampleRate / this._dstSampleRate : 0, s[t.algorithm] || (t.algorithm = "peak"), this._algorithm = new s[t.algorithm], this._sampleCount = 0, this._data = []
        }

        return e.prototype.push = function (e) {
            if (this._sampleRate <= 0) return [];
            for (var t, n = [], i = 0; i < e.length; i++) if (this._truncateTo > 0 && (e[i] = Math.min(this._truncateTo, Math.abs(e[i]))), this._sampleCount += 1, this._sampleCount >= this._sampleRate) for (; this._sampleCount >= this._sampleRate;) this._sampleCount -= this._sampleRate, this._sampleCount <= .8 && this._algorithm.push(e[i]), t = this._algorithm.get(), n.push(t), this._normalizeAlgorithm && this._normalizeAlgorithm.push(t), this._algorithm.clear(), this._sampleCount > .2 && this._algorithm.push(e[i]); else this._algorithm.push(e[i]);
            if (this._normalizeAlgorithm) {
                var a = this._normalizeAlgorithm.get();
                if (this._normalizeAlgorithm.clear(), a > 0) for (var r = 0; r < n.length; r++) n[r] = n[r] / a, this._truncateTo > 0 && (n[r] = Math.min(this._truncateTo, Math.abs(n[r])))
            }
            return n
        }, e
    }();

    function c(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "peak";
        return new l({srcSampleRate: e.length, dstSampleRate: t, normalizeAlgorithm: n, truncateTo: 0}).push(e)
    }
}, function (e, t, n) {
    var i = n(122);
    Object.assign(uMailWrite, {
        onToBottomClick: befall(),
        onAttachedMsgsRemove: befall(),
        onAfterSend: befall(),
        onSubmit: befall(),
        onMsgSend: befall(),
        showToBottom: p,
        hideToBottom: _,
        preventShowToBottom: d,
        openStickersPanel: C,
        uiClearAttachments: A,
        uiRedrawAttachments: x,
        updateAttachmentsVisibility: h,
        redrawToBottom: m,
        drawStickers: b,
        hideStickersPanel: M
    }), function () {
        uVK.onReady(h), uMailWrite._onAttachmentsRedraw = h, uMailWrite._onBlur = L, uMailWrite._onKeyUp = I, uMailWrite._onKeyDown = H, uMailWrite._onFocus = O, uMailWrite._onInput = B, uMailWrite._onSubmit = P, uMailWrite._onAttachClick = S, uMailWrite._onStickersClick = k, mediaUpload.onRemove(v), mediaUpload.onComplete(y), mediaUpload.onStart(g), mediaUpload.onError(w), post.onStickersTabSelected(T), post.onStickerClick(E), uMailWrite._onRedraw = f, uMailWrite.onToBottomClick(function () {
            var e = $(".uMailWrite__toBottom_visible");
            e && e.classList.remove("uMailWrite__toBottom_visible"), MailScrap.removeDivider()
        })
    }();
    var a = "uMailWrite__popupAttach_open", r = "uMailWrite__popupStickers_open", o = !1, s = !1, l = null, c = null,
        u = null;

    function d() {
        o = !0, setTimeout(function () {
            o = !1
        }, 300)
    }

    function f() {
        var e = $(".uMailWrite__textareaGhost");
        $$(".uMailWrite__textarea").forEach(function (t) {
            return setStyle(t, "height", e.offsetHeight)
        }), $$(".uMailWrite__main").forEach(function (t) {
            return setStyle(t, "height", e.offsetHeight)
        }), D($(".uMailWrite__textarea"))
    }

    function p() {
        o || (l && (clearTimeout(l), l = null), addClass("uMailWrite__toBottom_visible", $(".uMailWrite__toBottom")))
    }

    function _() {
        clearTimeout(c), l = setTimeout(function () {
            removeClass("uMailWrite__toBottom_visible", $(".uMailWrite__toBottom"))
        }, 100)
    }

    function m() {
        $$(".uMailWrite__toBottom").forEach(function (e) {
            return e.innerHTML = uMailWrite_ToBottomInner()
        })
    }

    function h() {
        if ("/mail" === location.pathname || 0 === location.pathname.indexOf("/write")) {
            var e = store.mail.cur;
            if (e && e.peerId) {
                var t = geBySel(".uMailWrite__attachments .medias_thumb").length,
                    n = geBySel(".uMailWrite__attachments .medias_row").length,
                    i = (e.msgAttached[e.peerId] || []).length ? 1 : 0;
                $$(".uMailWrite__attachments").forEach(function (e) {
                    toggleClass("uMailWrite__attachments_hasAttachments", e, t + n + i > 0)
                }), G()
            }
        }
    }

    function v() {
        if (store.mail.cur) {
            var e = store.mail, t = e.cur, n = e.peers, i = t.peerId;
            i && (n[i].attachmentsHTML = geBySel1(".uMailWrite__attachments_" + i + " .cp_attached_wrap").outerHTML, x(i), D($(".uMailWrite__textarea")))
        }
    }

    function g() {
        store.mail.cur && D($(".uMailWrite__textarea"))
    }

    function w() {
        var e = store.mail, t = e.cur, n = (e.peers, t.peerId);
        n && (A(), x(n), Messenger.scrollConvoToBottom())
    }

    function y() {
        var e = store.mail, t = e.cur, n = e.peers;
        if (t) {
            var i = t.peerId;
            i && (n[i].attachmentsHTML = geBySel1(".uMailWrite__attachments_" + i + " .cp_attached_wrap").outerHTML, D($(".uMailWrite__textarea")))
        }
    }

    function b() {
        var e = store.mail.cur, t = $(".uMailWrite__popupStickers");
        0 === t.innerHTML.trim().length && (t.innerHTML = e.stickersPanelHTML.replace(/mail0/g, "mail" + e.peerId), post.stickersSelectTab(null, -1))
    }

    function k(e) {
        var t = $(".uMailWrite__popupStickers");
        preventEvent(e), b(), $(".uMailWrite__textarea").blur(), hasClass(r, t) ? M() : C()
    }

    function M() {
        var e = $(".uMailWrite__popupStickers");
        removeClass(r, e), j(!1);
        var t = ge("stickers_panel");
        t && "block" === t.style.display && (t.style.display = "none")
    }

    function C() {
        var e = $(".uMailWrite__popupStickers");
        addClass(r, e), post.stickersInit(), j(!0)
    }

    function S(e) {
        var t = $(".uMailWrite__popupAttach"), n = $(".uMailWrite__popupStickers");
        preventEvent(e), stopEvent(e), hasClass(r, n) && removeClass(r, n), hasClass(a, t) ? removeClass(a, t) : (addClass(a, t), addEvent(window, "click", i));

        function i() {
            removeClass(a, t), removeEvent(window, "click", i)
        }
    }

    function T() {
        store.mail.cur && (cur.scroller && cur.scroller.destroy(), geByClass1("sp_body").scrollTop = 0, removeClass("scroller_wrap", geByClass1("sp_cont")), geByClass("sp_page").forEach(function (e) {
            return removeClass("scroller_page", e)
        }))
    }

    function E(e) {
        if (store.mail.cur) {
            var t = store.mail, n = t.cur, a = t.peers, o = (geByClass1("uMailWrite"), $(".uMailWrite__popupStickers")),
                s = i.random();
            n.localOutMsgIds.push(s), R({
                act: "send",
                to: n.peerId,
                from: "dialog",
                hash: a[n.peerId].hashSend,
                message: "",
                media: "sticker" + e,
                _af: n._af,
                random_id: s
            }), D($(".uMailWrite__textarea")), removeClass(r, o);
            var l = ge("stickers_panel");
            return l && "block" === l.style.display && (l.style.display = "none"), j(!1), !0
        }
    }

    function A() {
        var e = geByClass1("uMailWrite__attachments");
        e && (e.innerHTML = Brick({mix: "cp_attached_wrap", attrs: 'id="attached_wrap"'}))
    }

    function x(e) {
        $$(".uMailWrite__attachments_" + e).forEach(function (t) {
            t.outerHTML = uMailWrite_Attachments(e)
        }), $(".uMailWrite__textarea") && D($(".uMailWrite__textarea"))
    }

    function P(e) {
        preventEvent(e);
        var t = $(".uMailWrite__textarea");
        if (!mediaUpload.checkUploading()) return !1;
        var n = store.mail, a = n.cur, r = n.peers, o = i.random();
        a.localOutMsgIds.push(o);
        var l = {act: "send", to: a.peerId, from: "dialog", hash: r[a.peerId].hashSend, _af: a._af, random_id: o},
            c = !0;
        if (each(geByClass1("uMailWrite"), function (e, t) {
                return !t.name || t.disabled ? !0 : ("radio" !== t.type || t.checked) && ("checkbox" !== t.type || t.checked) ? "button" === t.type ? !0 : "submit" === t.type ? !0 : "image" === t.type ? !0 : (l[t.name] = t.value, void("message" !== t.name && (c = !1))) : !0
            }), (l.message || "").trim().length && (c = !1), c) return !1;
        R(l), t.value = "", a.texts[a.peerId] = "", a.textsHTML[a.peerId] = "", $$(".uMailWrite__textareaGhost").forEach(function (e) {
            return e.innerHTML = ""
        });
        var u = $(".uMailWrite__textareaGhost");
        $$(".uMailWrite__textarea").forEach(function (e) {
            return setStyle(e, "height", u.offsetHeight)
        }), $$(".uMailWrite__main").forEach(function (e) {
            return setStyle(e, "height", u.offsetHeight)
        }), uMailWrite.onAfterSend(), MailScrap.onSystemMessageClick(), h(), D(t), StickersHints.actualizeVisibility();
        var d = browser.ios ? setTimeout : requestAnimationFrame;
        s && (t.focus(), d(function () {
            return t.focus()
        }))
    }

    function I() {
        var e = I, t = e.typingData || (e.typingData = {});
        if (0 !== $(".uMailWrite__textarea").value.length) {
            var n = Date.now(), i = store.mail, a = i.cur, r = i.peers, o = a.peerId;
            -2e9 >= o || t[o] && n - t[o] < 7e3 || (t[o] = n, ajaxRequest("/mail", {
                _ajax: 1,
                act: "typing",
                peer: o,
                hash: r[o].hashTyping,
                community: nav.getQuery("community")
            }))
        }
    }

    function B(e, t) {
        var n = $(".uMailWrite__textareaGhost"), i = t.value;
        n.innerText = i, "\n" === last(i) && (n.innerHTML += "&nbsp;");
        var a = store.mail.cur;
        a.texts[a.peerId] = i, a.textsHTML[a.peerId] = i.replace(/\n/g, "<br/>"), $$(".uMailWrite__textarea").forEach(function (e) {
            return setStyle(e, "height", n.offsetHeight)
        }), $$(".uMailWrite__main").forEach(function (e) {
            return setStyle(e, "height", n.offsetHeight)
        }), D(t)
    }

    function H(e) {
        (10 == e.keyCode || 13 == e.keyCode && (e.ctrlKey || e.metaKey)) && P()
    }

    function N(e, t) {
        var n = document.body.scrollTop;
        n !== e ? requestAnimationFrame(function () {
            N(n, t)
        }) : t()
    }

    function O() {
        requestAnimationFrame(function () {
            b(), M(), StickersHints.init()
        }), clearTimeout(u), s = !0;
        var e = document.body;
        if (browser.safari && e.offsetHeight > e.offsetWidth) {
            var t = q["class"]("uMailWrite__textarea", {focus: !0});
            $$(".uMailWrite__textarea").forEach(function (e) {
                return e.className = t
            });
            var n = navigator.userAgent.indexOf("iPhone OS 11_1") > 0;
            if (!n) {
                var i = browser.ios < 10 ? 400 : 200;
                setTimeout(function () {
                    N(0, function () {
                        var n = 10;
                        e.scrollTop -= n, t = "uMailWrite__textarea", $$(".uMailWrite__textarea").forEach(function (e) {
                            return e.className = t
                        })
                    })
                }, i)
            }
        }
    }

    function L() {
        if (u = setTimeout(function () {
                s = !1
            }, 1e3), browser.safari) {
            var e = q["class"]("uMailWrite__textarea", {blur: !0});
            $$(".uMailWrite__textarea").forEach(function (t) {
                return t.className = e
            });
            var t = browser.ios < 10 ? 400 : 200;
            setTimeout(function () {
                N(0, function () {
                    e = "uMailWrite__textarea", $$(".uMailWrite__textarea").forEach(function (t) {
                        return t.className = e
                    })
                })
            }, t)
        }
    }

    function D(e) {
        var t = store.mail, n = t.cur, i = t.peers, a = t.queue;
        if (n.peerId) {
            var r = i[n.peerId].attachmentsHTML, o = e.value, s = n.msgAttached[n.peerId], l = s && s.length,
                c = q["class"]("uMailWrite__button", {
                    send: !0,
                    send_active: !!(o.length || r.length > 150 || l),
                    loading: !!(a[n.peerId] || []).length,
                    uploading: !mediaUpload.checkUploading()
                });
            $$(".uMailWrite__button_send").forEach(function (e) {
                return e.className = c
            })
        }
    }

    function j(e) {
        var t = q["class"]("uMailWrite__button", {stickers: !0, stickers_active: e});
        $$(".uMailWrite__button_stickers").forEach(function (e) {
            return e.className = t
        })
    }

    function R(e) {
        var t = store.mail.cur.peerId;
        if (t) {
            store.mail.queue[t] || (store.mail.queue[t] = []);
            var n = store.mail.queue[t];
            n.push(e), z(t)
        }
    }

    function z(e) {
        var t = store.mail.queue[e];
        1 === t.length && U(e)
    }

    function F(e, t) {
        var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, "/mail?act=send&to=" + e.to + "&from=" + e.from + "&hash=" + e.hash + "&_af=" + e._af);
        Object.keys(e).forEach(function (t) {
            ("act" === t || "to" === t || "from" === t || "hash" === t || "_af" == t) && delete e[t]
        }), ajaxRequest(n, e, function (e) {
            uMailWrite.onMsgSend(e), W(t)
        }, function (t) {
            if (2 === t) {
                delete e._ajax, delete e.random_id;
                var i = document.createElement("div"), a = Object.keys(e);
                i.innerHTML = '\n        <form action="' + n + '" method="POST">\n          ' + a.map(function (t) {
                    return '<input name="' + t + '" value="' + e[t] + '" />'
                }).join("") + "\n        </form>\n      ";
                var r = i.$("form");
                document.body.appendChild(r), r.submit()
            }
        })
    }

    function U(e) {
        var t = store.mail.queue[e];
        if (t.length) {
            var n = t[0];
            F(n, e)
        } else X()
    }

    function W(e) {
        {
            var t = store.mail.queue[e];
            t.shift()
        }
        MailScrap.clearSystemMessage2(), remove(geByClass1("message__newMsgsDivider")), remove(geByClass1("unfold__item_returnToChat")), t.length ? U(e) : V(e)
    }

    function V() {
        X()
    }

    function X() {
        D($(".uMailWrite__textarea"))
    }

    function Y() {
        var e = $(".uMailWrite__attachments");
        return e ? e.$$(".thumb_item").length + e.$$(".medias_row").length : 0
    }

    function G() {
        var e = $(".uMailWrite__button_attach");
        if (e) {
            var t = 10 === Y();
            e.classList.add("uMailWrite__button_disabled", t), t ? e.addEventListener("mousedown", Q, !0) : e.removeEventListener("mousedown", Q, !0)
        }
    }

    function Q(e) {
        e.stopPropagation(), alert(lang.mobile_mail_attachments_limit)
    }
}, function () {
    var e = window, t = e.ce, n = e.getCssPropertyName;
    if (!window._ua) var i = navigator.userAgent.toLowerCase();
    var a = {
        version: (i.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        amigo: /amigo.*mrchrome soc/i.test(i),
        opera: /opera/i.test(i),
        msie: /msie/i.test(i) && !/opera/i.test(i),
        msie6: /msie 6/i.test(i) && !/opera/i.test(i),
        msie7: /msie 7/i.test(i) && !/opera/i.test(i),
        msie8: /msie 8/i.test(i) && !/opera/i.test(i),
        msie9: /msie 9/i.test(i) && !/opera/i.test(i),
        mozilla: /firefox/i.test(i),
        chrome: /chrome/i.test(i) || /crios/i.test(i),
        safari: !/crios/i.test(i) && !/chrome/i.test(i) && /webkit|safari|khtml/i.test(i),
        iphone: /iphone/i.test(i),
        ipod: /ipod/i.test(i),
        iphone4: /iphone.*OS 4/i.test(i),
        ipod4: /ipod.*OS 4/i.test(i),
        ipad: /ipad/i.test(i),
        ios: +(i.match(/.+(?:ipod|ipad|iphone.*os) ([\d.]+)_/i) || [0, 0])[1],
        android: /android/i.test(i),
        bada: /bada/i.test(i),
        opera_mini: /opera mini/i.test(i),
        uc_mini: /mobile safari.*ucbrowser/i.test(i),
        mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile/i.test(i),
        msie_mobile: /iemobile/i.test(i),
        msie_edge: /edge/i.test(i) && !/opera/i.test(i),
        safari_mobile: /iphone|ipod|ipad/i.test(i),
        opera_mobile: /opera mini|opera mobi/i.test(i),
        mac: /mac/i.test(i)
    }, r = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1};
    a.desktop = (a.opera || a.msie || a.mozilla || a.chrome || a.safari) && !a.mobile;
    var o = "ontouchstart" in window, s = function (e) {
        if ("WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix) return !0;
        if ("MSCSSMatrix" in e && "m11" in new e.MSCSSMatrix) return !0;
        if ("CSSMatrix" in e && "m11" in new e.CSSMatrix) return !0;
        try {
            var i = t("div"), a = n(i, "transform");
            return a ? (i.style[a] = "translate3d(1px,1px,1px)", i.style[a] && "none" != i.style[a]) : !1
        } catch (r) {
            return !1
        }
    }(window);
    window._ua = i, window.browser = a, window.mobPlatforms = r, window.isTouch = o, window.has3d = s
}, function () {
    Object.assign(MailFilter, {onChange: befall("query"), onClear: befall(), setQuery: e}), function () {
        MailFilter._onInput = t, MailFilter._onClearMouseDown = n
    }();

    function e(e) {
        var t = $(".mailFilter__input");
        t && t.value !== e && (t.value = e, MailFilter.onChange(e), i(e))
    }

    function t(e) {
        requestAnimationFrame(function () {
            var t = e.value;
            i(e.value), MailFilter.onChange(t)
        })
    }

    function n(e) {
        var t = e.closest(".mailFilter").$(".mailFilter__input"), n = document.activeElement === t,
            a = browser.ios ? setTimeout : requestAnimationFrame;
        a(function () {
            i(""), t.value = "", n && t.focus(), MailFilter.onClear(), MailFilter.onChange("")
        })
    }

    function i(e) {
        $$(".mailFilter").forEach(function (t) {
            return t.classList.toggle("mailFilter_hasQuery", !!e)
        })
    }
}, function () {
    var e = window, t = e.se, n = e.each, i = e.remove, a = e.ajx2q, r = e.isArray, o = e.geByTag,
        s = e.checkElementNav, l = e.isHttpHref, c = e.attr, u = e.getHref, d = e.extend, f = e.ge, p = e.geByClass1,
        _ = e.obj2qs, m = e.unlockButton, h = e.scrollToHash, v = e.lockButton, g = (e.tag, e.addEvent, e.val),
        w = e.alLoadingFix, y = e.scrollTop, b = e.removeClass, k = e.addClass, M = e.clone, C = e.gpeByClass,
        S = e.outer, T = e.gpeByTag, E = e.geByTag1, A = e.getCh, x = e.hasClass, P = e.stripTags, I = e.langNumeric,
        B = e.clog, H = e.before, N = e.ce, O = e.append, L = e.escapeAttr, D = e.geByClass, j = e.htsc, q = e.getY,
        R = e.getCw, z = e.qs2obj, F = e.parseJSON, U = e.setNotify, W = e.setDocumentDomain, $ = e.createIframe,
        V = e.getW, X = e.escapeStr, Y = window, G = Y.browser, Q = {
            onBeforeRedirect: befall("url"),
            onBeforePageParse: befall(),
            onRedirect: t(),
            _tStart: !1,
            _tAlStart: !1,
            _init: function () {
                try {
                    new XMLHttpRequest && (Q._req = function () {
                        return new XMLHttpRequest
                    })
                } catch (e) {
                    var t = window, n = t.ActiveXObject;
                    try {
                        new n("Msxml2.XMLHTTP") && (Q._req = function () {
                            return new n("Msxml2.XMLHTTP")
                        })
                    } catch (e) {
                        try {
                            new n("Microsoft.XMLHTTP") && (Q._req = function () {
                                return new n("Microsoft.XMLHTTP")
                            })
                        } catch (e) {
                            Q._req = !1
                        }
                    }
                }
            },
            _getreq: function () {
                return Q._req || Q._init(), Q._req()
            },
            _al_reqs: [],
            _last_req: null,
            save_req: function (e) {
                Q._al_reqs.push(e || Q._last_req)
            },
            abort_reqs: function () {
                n(Q._al_reqs, function (e, t) {
                    t.readyState < 4 && t.abort()
                }), Q._al_reqs = []
            },
            _failed_relogin: !1,
            _failed_reqs: [],
            save_failed_req: function (e, t, n, i) {
                Q._failed_reqs.push([e, t, n, i])
            },
            repeat_reqs: function () {
                n(Q._failed_reqs, function () {
                    var e = this.shift(), t = this;
                    Q._post.apply(null, t), i(e)
                }), Q._failed_reqs = []
            },
            plainpost: function (e, t, n, i, r) {
                var o = Q._last_req = Q._getreq(), s = "string" != typeof t ? a(t) : t;
                o.onreadystatechange = function () {
                    4 == o.readyState && (o.status >= 200 && o.status < 300 ? n && n(o.responseText, o) : i && i(o.responseText, o))
                };
                try {
                    o.open("POST", e, !0)
                } catch (l) {
                    return !1
                }
                return o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.send(s), o
            },
            post: function (e, t, n) {
                return "/" != e.substr(0, 1) && (e = "/" + e), e = e.split("#")[0], Q._post(e, t, n || {})
            },
            onPrepared: t(),
            prepare_click: function (e) {
                var t = window, n = t.al;
                if (G.ios && !(G.ios >= 7) && window.al && n.ver) {
                    var i = [], a = !1;
                    e && "a" == (e.tagName || "").toLowerCase() ? i.push(e) : r(e) ? i = e : (i = o("a", e), a = !0);
                    for (var d = 0, f = i.length; f > d; d++) {
                        var p = i[d], _ = p && p.target || "";
                        if (p && p.getAttribute && (!a || !p.getAttribute("data-href") && s(p, {skip_onclick: !0}) && "_blank" != _)) {
                            var m = p.getAttribute("href");
                            if (null == m || !l(m)) continue;
                            c(p, "data-href", u(p)), c(p, "href", !1)
                        }
                    }
                }
            },
            click: function (e, t, i) {
                var a = window, r = a.nav;
                t = t || {};
                var o, s = !1, l = {_ajax: 1}, c = d(t, {link: e});
                if (i = i || {}, t.onStart) {
                    var u = Q.tAlGetParam();
                    Q.tAlStart = (new Date).getTime(), u && (l._talstat = u)
                }
                if (i.use_cache) {
                    var g = f(i.use_cache === !0 ? "preload_data" : i.use_cache),
                        w = g.innerHTML.replace(/(^<!--|-->$)/g, ""), y = w.split("--><!--");
                    if (w) {
                        g.innerHTML = "", t.onStart && t.onStart.apply(c), i.nav && r.go(s, null, {push_only: !0}), t.onDone && t.onDone.apply(c, y);
                        var e = p("show_more", p("pcont", "mcont"));
                        e && Q.click(e, {
                            onDone: function () {
                                var e = "";
                                n(arguments, function (t, n) {
                                    e += "<!--" + (n || "") + "-->"
                                }), g.innerHTML = e, f("show_more_loading") && Q.click(!1, t, i)
                            }
                        })
                    } else t.onStart && t.onStart.apply(c), i.nav && r.go(s, null, {push_only: !0});
                    return !1
                }
                if (!e) return !0;
                if (e.form) {
                    if (e.disabled) return !0;
                    var b = e.form, k = {};
                    s = (b.action || "").replace(/^https?:\/\/[^\/]+/i, ""), n(b, function (t, n) {
                        return !n.name || n.disabled ? !0 : ("radio" !== n.type || n.checked) && ("checkbox" !== n.type || n.checked) ? "button" === n.type ? !0 : "submit" === n.type && n !== e ? !0 : "image" === n.type && n !== e ? !0 : void(k[n.name] = n.value) : !0
                    }), "image" == e.type && (k[e.name] = e.value, k[e.name + ".x"] = 1, k[e.name + ".y"] = 1), b.method && "get" != b.method ? d(l, k) : s = s.split("?", 1).shift() + _(k)
                } else e.getAttribute && (s = e.getAttribute("data-href") || e.getAttribute("href"));
                if (s || (s = e.pathname ? e.pathname + e.search + e.hash : e), !s) return !0;
                d(l, i.url_params || {});
                var M = window, C = M.pStats, S = C.getSeenData();
                if (S) {
                    var T = window, E = T.cur;
                    l._pstat = S.data, E && E.module && (l._pstatref = E.module)
                }
                return o = Q.post(s, l, {
                    onDone: function () {
                        S && C.onSend(S.seen), i.lock && m(e), t.onDone && t.onDone.apply(c, arguments), (i.nav || i.scroll) && h()
                    }, onFail: function () {
                        i.lock && m(e), t.onFail && t.onFail.apply(c, arguments), (i.nav || i.scroll) && h()
                    }
                }), o && (t.onStart && t.onStart.apply(c), i.nav && r.go(s, null, {push_only: !0}), i.lock && v(e)), !o
            },
            prepare_nav: function (e) {
                return
            },
            nav: function K(e, t) {
                var a = window, K = a.nav, r = window, o = r.page, s = window, l = s.menu, m = window, v = m.cur;
                t = t || {}, t.nav = t.nav || {};
                var F, U, W = u(e), $ = o.getHash(t.nav);
                if (!(W = K.checkUrl(W))) return !1;
                "/" != W.substr(0, 1) && (W = "/" + W), l.close(null, !0);
                var V = Q.tGetParam();
                if (Q.tStart = (new Date).getTime(), t.need_restore && l && l.closeSearch(), window.isNewMail) {
                    if (t.need_restore && t.nav.push && (Q.abort_reqs(), K.onBeforeGo3())) return !0;
                    if (K.onBeforeGo2(t.nav.path, z(t.nav.params), t.nav.push, t)) return Q.abort_reqs(), !0
                }
                if (t.need_restore && t.nav.push && (U = o.restore($))) return Q.abort_reqs(), U.lm && d(U.lm, {
                    tn: !1,
                    bn: !1
                }), o.set($, U), t.zProcess && (t.zProcess(U.st), delete t.zProcess), K.set(t), Q.tModule = window.cur.module, Q.tRestoreRender = (new Date).getTime(), !0;
                var X = !1, Y = !1;
                if (t.fast) X = !0, o.set($, !1, {
                    before: !0,
                    beforeAppend: t.beforeAppend,
                    afterAppend: t.afterAppend
                }), Y = t.onAfterFast || !1; else if (t.target && t.target.className) {
                    var F = /(?:^|\s)(al_([a-z_]+)(-?[0-9]+)?)(?:\s|$)/i.exec(t.target.className), J = F && F[1] || !1,
                        Z = F && F[2] || !1;
                    switch (Z) {
                        case"menu":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    if (window.isNewMail) {
                                        var n = p("mcont", e) || p("layout__basis");
                                        g(n, '<div class="pcont bl_cont"><div id="al_loading"></div></div>')
                                    } else g(p("mcont", e), '<div class="pcont bl_cont"><div id="al_loading"></div></div>');
                                    o.setMhead(e, c(t.target, "data-header"), "/")
                                }, afterAppend: function () {
                                    w(), y(0)
                                }
                            });
                            break;
                        case"tab":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    g(p("upanel", e), '<div id="al_loading"></div>');
                                    var n = p("tabs_block", e) || p("tabs", e), i = p("active", n);
                                    i && (x("tab_item_top", i) ? (b("tab_item_cur", p("tab_item_cur", n)), k("tab_item_cur", p("tab_item", n))) : (b("tab_item_cur", p("tab_item_cur", n)), k("tab_item_cur", i))), o.setMhead(e, c(t.target, "data-header"))
                                }, afterAppend: function () {
                                    w()
                                }
                            }, t);
                            break;
                        case"post":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    function n(e, t, n, i, a, r, o, s) {
                                        return '<div class="pcont bl_cont"><div class="owner_panel">' + (t || "") + '<div class="op_cont">' + (n || "") + '<div class="op_info"><span class="item_date">' + (i || "") + '</span></div></div></div><div id="' + (e || "") + '" class="post_item single_post_item"><div class="pi_cont"><div class="pi_head">' + (a || "") + '</div><div class="pi_body">' + (r || "") + "</div></div>" + (s || "") + "</div>" + (o || "") + "</div>"
                                    }

                                    var a = window, r = a.lang, s = M(C("post_item", t.target)), l = s.id,
                                        u = S(T("a", p("pi_img", s))).replace("pi_img", "op_img"),
                                        d = T("div", p("pi_author", s)), f = i(p("pi_date", s)), _ = S(i(p("explain", d))),
                                        m = i(p("pi_fronly", s)), h = S(d), v = p("pi_body", s), w = p("pi_text_more", v),
                                        f = p("pi_date", s), y = p("pi_info", v), b = p("pi_links", v),
                                        k = p("replies_link", b), E = g(i(p("pi_actions_wrap", s))),
                                        A = g(i(p("item_replies", y))), x = A ? g(k) : r.mobile_wall_post_replies_title,
                                        P = k ? '<a name="comments"></a><h4 class="slim_header">' + (x || "") + '</h4><div id="al_loading"></div>' : "";
                                    if (w) {
                                        var I = w.nextSibling ? w : w.parentNode;
                                        I.nextSibling.style.display = "inline", I.style.display = "none"
                                    }
                                    g(b, S(p("like_wrap", v))), f && c(f, "data-date") && g(f, c(f, "data-date")), o.setMhead(e, c(t.target, "data-header"), !0), g(p("mcont", e), n(l, u, h, g(f) + (m ? '<b class="pi_fronly"></b>' : ""), _, g(v), P, E))
                                }, afterAppend: function (e) {
                                    var n = E("h4", e);
                                    n && w(t.nav.hash ? A() - n.offsetHeight : 0), t.nav.hash ? h(t.nav.hash) : y(0)
                                }
                            }, t);
                            break;
                        case"wall":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    function n(e, t, n) {
                                        return '<div class="pcont"><div class="wall_item single_wall_item" id="' + (e || "") + '">' + (t || "") + "</div>" + (n || "") + "</div>"
                                    }

                                    var a = window, r = a.lang,
                                        s = M(x("wall_item", t.target) ? t.target : C("wall_item", t.target)), l = s.id,
                                        u = p("wi_body", s), d = p("wi_buttons", s), f = p("item_like", d),
                                        _ = p("v_like", f), m = p("item_share", d), h = p("v_share", m),
                                        v = i(p("item_replies", d)), w = v ? p("v_replies", v) : !1,
                                        y = +P(g(w)).replace(/\D/g, ""), b = p("pi_text_more", u), k = p("wi_date", s),
                                        S = y ? I(y, r.mobile_wall_post_comments) : r.mobile_wall_post_replies_title,
                                        T = v && 50 > y ? '<a name="comments"></a><h4 class="slim_header">' + (S || "") + '</h4><div id="al_loading"></div>' : "";
                                    if (B(v), i(p("wi_actions_btn", s)), _ ? g(_) : O(N("span", {className: "v_like"}), f), h ? g(h) : O(N("span", {className: "v_share"}), m), b) {
                                        var E = b.nextSibling ? b : b.parentNode;
                                        E.nextSibling.style.display = "inline", E.style.display = "none"
                                    }
                                    k && c(k, "data-date") && g(k, c(k, "data-date")), o.setMhead(e, c(t.target, "data-header"), !0), g(p("mcont", e), n(l, g(s), T))
                                }, afterAppend: function (e) {
                                    var n = E("h4", e);
                                    n && w(t.nav.hash ? A() - n.offsetHeight : 0), t.nav.hash ? h(t.nav.hash) : y(0)
                                }
                            }, t);
                            break;
                        case"pinfo":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    var t = window, i = t.lang, a = p("owner_panel", e), r = p("pp_img", a),
                                        s = p("op_header", a), l = p("lvi", s), u = p("pp_last_activity", a), d = N("div");
                                    k("mhi_back", p("mh_header", e)), g(a, '<img src="' + L(c(r, "src") || "") + '" class="op_img"><div class="op_cont"><h2 class="op_header">' + P(g(s)) + '</h2><div class="pp_online">' + (l ? i.mobile_online : g(u)) + "</div></div>"), n(D("_pinfo", e), function (e, t) {
                                        d.appendChild(t)
                                    }), g(p("ipanel", e), "<div>" + g(d) + '</div><div id="al_loading"></div>'), o.setMhead(e, !1, !0)
                                }, afterAppend: function () {
                                    w(), y(0, 10)
                                }
                            }, t);
                            break;
                        case"player":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    var t = window, n = t.lang, i = window, a = i.audio, r = a.playlist(),
                                        s = a.playlist_q(), l = r[0] || {},
                                        c = (l.id || "").split("_").slice(2).join("_") || "", u = "";
                                    o.setMhead(e, n.mobile_menu_player_head_title, !0), g(p("mcont", e), '\n                <div class="pcont audioPage">\n                  <div class="audioPage__header">\n                    ' + AudioPlaylist.tplPlayerSearch(c) + '\n                  </div>\n                  <div id="au_search_items" class="upanel bl_cont">\n                    <div class="audios_block audios_list _si_container" data-query="' + L(s) + '">' + u + "</div>\n                  </div>\n                </div>"), g("m", e.innerHTML)
                                }
                            }, t), Y = function () {
                                var e = window, t = e.qsearch, i = window, a = i.audio, r = a.playlist(), o = r[0] || {},
                                    s = (o.id || "").split("_").slice(2).join("_") || "",
                                    l = "/audio" + _({act: "player", list: s}), c = [], u = {};
                                n(r, function (e, t) {
                                    c.push(t.id);
                                    var n = !1;
                                    u[t.id] = [t.artist + " " + t.title, t.id, t.src, t.artist, t.title, t.dur, t.can_add, n, t.cover_style, t.is_disabled]
                                }), t.init({
                                    action: l,
                                    al_action: l,
                                    container: f("au_search_items"),
                                    field: f("au_search_field"),
                                    btn: f("au_search_btn"),
                                    top_items: c,
                                    _cache: u,
                                    tpl: function (e, t, n, i) {
                                        return t ? i ? i : "" == i ? '<div class="audios_block audios_list _si_container" data-query="' + L(t) + '">' + e + "</div>" : '<div class="audios_block audios_list _si_container" data-query="' + L(t) + '"><div class="al_loading qs_loading">&nbsp;</div></div>' : '<div class="audios_block audios_list _si_container" data-query="' + L(a.playlist_q()) + '">' + e + "</div>"
                                    },
                                    item_tpl: function (e, t, n, i, a, r, o, s, l) {
                                        var c = window, u = c.audioplayer;
                                        return u && u.getDOMFromAudio({
                                            id: e,
                                            src: t,
                                            dur: a,
                                            artist: this.highlight(n),
                                            title: this.highlight(i),
                                            can_add: r,
                                            can_del: o,
                                            cover_style: s,
                                            is_disabled: l
                                        }, !0, this.q) || ""
                                    },
                                    null_tpl: function (e) {
                                        var t = window, n = t.lang;
                                        return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + (e ? n.mobile_audio_search_not_found.replace("%s", j(e)) : n.mobile_audio_no_audio) + "</div></div>"
                                    },
                                    soft_filter: !0,
                                    need_invalid_keys: G.desktop,
                                    top_len: 50,
                                    global_search: !0,
                                    onRendered: function () {
                                        var e = window, t = e.audioplayer;
                                        t && t.initAudio()
                                    },
                                    al_need: !0,
                                    init_offset: 0
                                });
                                var d = a.getCurrentId(), p = f("audio" + d);
                                if (p) {
                                    var m = q(p) + p.offsetHeight / 2 - A() / 2;
                                    y(m)
                                }
                            };
                            break;
                        case"photo":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    function i(e, t, n) {
                                        return '<div class="pcont bl_cont"><div class="media_view photo_view"><div class="pv_summary">&nbsp;<div class="summary_loading" style="float:left;"><i class="i_loading"></i></div></div><div class="pv_body"><div class="thumb_item" style="' + (t || "") + '"><img src="' + e + '" class="ph_img" alt="" style="' + (n || "") + '" /></div></div><div id="al_fill"></div></div></div>'
                                    }

                                    var a = E("img", t.target), r = a && a.src || "/images/mobile/blank.gif", s = "",
                                        l = "", u = (c(a, "data-src_big") || "").split("|"), d = u[0], f = +u[1] || 0,
                                        _ = +u[2] || 0, m = !0;
                                    if (f && _ || (f = a && a.width || 0, _ = a && a.height || 0, m = !1), d) {
                                        if (f && _) {
                                            var h = Math.min(604, R()), v = h / f,
                                                w = Math.min(604, Math.ceil(v >= 1 && m ? _ : _ * v));
                                            s += "height:" + w + "px;"
                                        }
                                        s += "background:url(" + r + ") #f7f7f7 no-repeat center top;", w > 100 && n(["-moz-", "-o-", "-webkit-", ""], function (e, t) {
                                            s += t + "background-size:contain;"
                                        }), r = d
                                    } else l += "width:100%;";
                                    o.setMhead(e, c(t.target, "data-header"), !0), g(p("mcont", e), i(r, s, l))
                                }, afterAppend: function () {
                                    w(0, "al_fill"), y(0)
                                }
                            }, t);
                            break;
                        case"u":
                        case"g":
                        case"p":
                        case"e":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    function n(e, t) {
                                        return "g" === Z || "p" === Z || "e" === Z ? '<div class="al_loading"></div>' : '<div class="pcont fit_box"><div class="owner_panel profile_panel"><img src="' + (e || "") + '" class="pp_img" /><div class="pp_cont"><h2 class="op_header">' + (t || "") + '</h2></div></div><div id="al_loading"></div>'
                                    }

                                    var i, a = window, r = a.lang, s = J.substr(2), l = p(s, e, "a") || p(s, e, "span"),
                                        u = P(c(t.target, "data-name") || c(l, "data-name") || g(l) || ""),
                                        d = l && l.parentNode && p("lvi", l.parentNode), f = S(d), _ = p(s, e, "img"),
                                        m = _ && _.src || c(t.target, "data-photo") || "/images/mobile/blank.gif";
                                    "u" == Z ? i = u.split(" ").shift() : "g" == Z ? i = r.mobile_group_head_title : "p" == Z ? i = r.mobile_public_head_title : "e" == Z && (i = r.mobile_event_head_title), o.setMhead(e, i, "/"), g(p("mcont", e), n(m, u, f))
                                }, afterAppend: function () {
                                    w(), y(0)
                                }
                            }, t);
                            break;
                        case"playlists":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    var i = D("audioPlaylists__item", e), a = "";
                                    i && n(i, function (e, t) {
                                        a += AudioPlaylist.tplSearchListItem({
                                            href: c(p("audioPlaylists__itemLink", t), "href"),
                                            thumb_style: c(p("audioPlaylists__itemCover", t), "style"),
                                            grid_covers: g(p("audioPlaylists__itemCover", t)),
                                            title: g(p("audioPlaylists__itemTitle", t)),
                                            author_name: g(p("audioPlaylists__itemAuthor", t)),
                                            short_stats: g(p("audioPlaylists__itemStats", t))
                                        }, !0)
                                    });
                                    var r = AudioPlaylist.tplPlayerSearch("", !0), s = AudioPlaylist.tplPlaylistsPage(a, r);
                                    g(p("mcont", e), '<div class="pcont bl_cont">' + s + "</div>"), o.setMhead(e, c(t.target, "data-header"), "/"), y(0)
                                }
                            });
                            break;
                        case"playlist":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    g(p("mcont", e), '<div class="pcont bl_cont"><div id="al_loading"></div></div>'), o.setMhead(e, c(t.target, "data-header"), "/")
                                }, afterAppend: function () {
                                    w(), y(0)
                                }
                            });
                            break;
                        case"news_subsection":
                            X = !0, o.set($, !1, {
                                before: !0, beforeAppend: function (e) {
                                    var t = p("news_subsections", e);
                                    t && !x("summary_loading", t.firstChild) && H(N("div", {
                                        className: "summary_loading",
                                        innerHTML: '<i class="i_loading"></i>'
                                    }), t.firstChild)
                                }
                            });
                        default:
                            var et = window, v = et.cur;
                            v.al_fast && v.al_fast[Z] && (X = !0, o.set($, !1, v.al_fast[Z](t), t))
                    }
                }
                if (Q.abort_reqs(), t.local) {
                    var tt = !0;
                    o.set($, {}, {after: !0, no_scroll: !0, force: !0}, !1), Y && Y()
                } else {
                    var nt = z(t.nav.params);
                    d(nt, t.params || {}), window.al && window.al.menu || (nt._nlm = 1), V && (nt._tstat = V);
                    var it = window, at = it.pStats, rt = at.getSeenData();
                    rt && (nt._pstat = rt.data, v && v.module && (nt._pstatref = v.module)), nt._ref || (nt._ref = (K.path || "").substr(1));
                    var tt = Q.post(W, nt, {
                        onPageDone: function (e, n, i, a, r) {
                            var s = window, l = s.cur;
                            rt && at.onSend(rt.seen), Q.tProcess = (new Date).getTime(), o.set($, {
                                title: e,
                                html: n,
                                js: i,
                                lm: a,
                                bc: r,
                                st: t.st || 0
                            }, {after: X, no_scroll: X}, X ? !1 : t), Q.tModule = l.module, Q.tRender = (new Date).getTime()
                        }
                    });
                    Q.save_req()
                }
                return X && (t.zProcess && (t.zProcess(), delete t.zProcess), K.set(t), Q.tModule = v.module, Q.tFastRender = (new Date).getTime()), tt
            },
            confirm: function (e) {
                function t() {
                    return e.apply(this, arguments)
                }

                return t.toString = function () {
                    return e.toString()
                }, t
            }(function (e, t, n, i) {
                return confirm(t) ? Q.click(e, i, {url_params: {hash: n}}) : !1
            }),
            _post: function (e, t, n) {
                var i = function (e, t) {
                    n.onFail && n.onFail.call(window, 0, e, t)
                }, a = function (a) {
                    var r = !1;
                    try {
                        r = F(a)
                    } catch (o) {
                        r = !1
                    }
                    r === !1 ? i() : Q.parseResponse(r, e, t, n)
                };
                return Q.plainpost(e, t, a, i)
            },
            parseResponse: function (e, t, n, i) {
                var a = window, o = a.al, s = window, l = s.nav, c = window, u = c.menu, d = window, f = d.page,
                    p = e.shift(), _ = e.shift(), m = e.shift(), h = t.indexOf("community") >= 0,
                    v = h ? window.al && p > o.ver : window.al && p > o.ver || (window.isNewMail ? !1 : !u.refreshCounters(_));
                switch (_ === !1 || h || U(_[2]), m) {
                    case 0:
                        if (v) return l.hard_go(l.cur, null, {replace: !0});
                        var g = e.shift();
                        i && i.onDone && (r(e) ? i.onDone.apply(window, g) : i.onDone.call(window, g));
                        break;
                    case 1:
                        Q.onRedirect(!0, e[0]);
                        var w = e.shift(), y = e.shift(), b = e.shift();
                        if (window.isNewMail && Q.onBeforeRedirect(w)) break;
                        if (v || y) l.hard_go(w); else if (b) {
                            W();
                            var k = w + (-1 == w.indexOf("?") ? "?" : "&") + "__extra=1", M = $({src: k})
                        } else l.go(w, null, {ignore_cur_process: !0});
                        break;
                    case 2:
                        var w = e.shift();
                        i && i.onFail ? (e.unshift(w), e.unshift(m), i.onFail.apply(window, e)) : l.hard_go(w);
                        break;
                    case 3:
                        f.need_hard_go = v;
                        var C = e[3];
                        if (C && C.rdr && window.al && o.menu && V("vk_wrap") >= 614) {
                            l.go(C.rdr, null, {replace: !0});
                            break
                        }
                        i = i || {}, i.onPageDone || (i.onPageDone = function (e, n, i, a, r) {
                            l.go(t, null, {push_only: !0}), f.set(f.getHash(l), {title: e, html: n, js: i, lm: a, bc: r})
                        }), i.onPageDone.apply(window, e);
                        break;
                    case 4:
                        if (i.redirectToLoginPage) {
                            var k = e.shift();
                            return window.location = k, !1
                        }
                        if (!Q._failed_relogin) {
                            var k = e.shift(), w = e.shift();
                            W();
                            var M = $({src: k})
                        }
                        Q._failed_relogin = !0, Q.save_failed_req(M, t, n, i)
                }
            },
            onReLoginDone: function () {
                Q.repeat_reqs(), Q._failed_relogin = !1
            },
            tGetParam: function () {
                if (Q.tStart && Q.tModule) {
                    var e = Q.tFastRender - Q.tStart, t = Q.tRestoreRender - Q.tStart, n = Q.tProcess - Q.tStart,
                        i = Q.tRender - Q.tProcess, a = "/" == Q.tModule.substr(0, 1) ? Q.tModule.substr(1) : Q.tModule,
                        r = [a, e, t, n, i];
                    for (var o in r) (!r[o] || r[o] < 0) && (r[o] = 0);
                    return Q.tStart = !1, r.join(",")
                }
            },
            tAlGetParam: function () {
                if (Q.tAlStart && Q.tAlModule) {
                    var e = Q.tAlProcess - Q.tAlStart, t = Q.tAlRender - Q.tAlProcess,
                        n = "/" == Q.tAlModule.substr(0, 1) ? Q.tAlModule.substr(1) : Q.tAlModule, i = ["al_" + n, e, t];
                    for (var a in i) (!i[a] || i[a] < 0) && (i[a] = 0);
                    return Q.tAlStart = !1, i.join(",")
                }
            },
            refreshLinks: function (e, t) {
                if (e) {
                    var n = p("mmi_fv", "lm_cont"), i = n && p("lfm_item", n), a = p("mmi_fv", "mfoot"),
                        r = a && p("lfm_item", a), o = f("fv_link");
                    c(i, "href", e), c(r, "href", e), c(o, "href", e)
                }
                if (t) {
                    var s = p("mmi_app", "lm_cont"), l = s && p("lfm_item", s), u = p("mmi_app", "mfoot"),
                        d = u && p("lfm_item", u), _ = f("app_link"),
                        m = t ? "return nav.app_go(this, event, '" + X(t) + "');" : !1;
                    c(l, "onclick", m), c(d, "onclick", m), c(_, "onclick", m)
                }
            }
        };
    window.ajax = Q
}, function () {
    Object.assign(window, {Oval: e, Oval_isHidden: t});

    function e(e) {
        return Brick({mix: q["class"](e.mix, "oval", {gray: e.gray, hidden: t(e.value)}), inner: e.value})
    }

    function t(e) {
        return !e || 0 >= e
    }
}, function (e, t, n) {
    var i = n(6), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = window, s = o.setStyle, l = o.geByClass1, c = "pageMoneyTransfer__iframe";
    a["default"].onPostMessage(function (e, t) {
        "resizeFrame" === e && s(l(c), "height", t.height + 40)
    })
}, function () {
    var e = window, t = e.geBySel1, n = e.geByClass1, i = e.gpeByClass, a = e.each, r = e.removeClass, o = e.addClass,
        s = e.hasClass, l = e.attr, c = e.addEvent, u = e.removeEvent, d = e.ajax,
        f = (e.replace, e.domClosestOverflowHidden), p = {
            OPEN_CLASS: "reply_owner_show",
            OPEN_BOTTOM_CLASS: "reply_owner_open_bottom",
            NO_LIMIT_CLASS: "reply_owner_picker_nolimit",
            CONTAINER_CLASS: "reply_owner_picker_container",
            PICKER_CLASS: "reply_owner_picker",
            PICKER_ITEM_CLASS: "reply_owner_option",
            LOADING_CLASS: "reply_owner_loading",
            IMAGE_CLASS: "_reply_owner_image",
            SELECTED_IMAGE_CLASS: "_reply_owner_selected_image",
            SELECTED_IMAGE_CONTAINER_CLASS: "reply_owner_selected_image",
            OPTION_CLASS: "reply_owner_option",
            PICKER_MAX_HEIGHT: null,
            LOADING_SHOW_TIME: 300,
            container: null,
            picker: null,
            clickEvent: "ontouchend" in document.documentElement ? "touchend" : "click",
            clickHandler: null,
            requestHandler: null,
            request: null,
            loading: !1,
            setElements: function (e) {
                this.container = i(this.CONTAINER_CLASS, e), this.picker = n(this.PICKER_CLASS, this.container), this.clickHandler = this.clickHandler || bind(this.onDocumentClick, this), this.requestHandler = this.requestHandler || bind(this.onDocumentClickBeforeLoad, this)
            },
            unsetElements: function () {
                u(document.body, this.clickEvent, this.clickHandler), u(document.body, this.clickEvent, this.requestHandler), this.container = this.picker = null
            },
            show: function (e) {
                this.setElements(e), o(this.OPEN_CLASS, this.container), this.calcPosition()
            },
            hide: function () {
                r(this.OPEN_CLASS, this.container), r(this.OPEN_BOTTOM_CLASS, this.container), this.unsetElements()
            },
            toggle: function () {
                toggleClass(this.OPEN_CLASS, this.container), this.calcPosition(), s(this.OPEN_CLASS, this.container) ? (this.scrollToSelected(), c(document.body, this.clickEvent, this.clickHandler)) : (this.hide(), this.unsetElements())
            },
            calcPosition: function () {
                var e = ge("mhead").offsetHeight, t = this.picker.getBoundingClientRect(),
                    n = (window.pageYOffset || document.documentElement.scrollTop, f(this.picker)), i = !0;
                n && n.getBoundingClientRect().bottom < this.container.getBoundingClientRect().bottom + this.PICKER_MAX_HEIGHT ? i = !1 : s(this.LOADING_CLASS, this.container) ? i = t.top - e - this.PICKER_MAX_HEIGHT + t.height < 0 : s(this.OPEN_BOTTOM_CLASS, this.container) || (i = t.top - e < 0), toggleClass(this.OPEN_BOTTOM_CLASS, this.container, i)
            },
            onDocumentClick: function (e) {
                var t = e.target;
                t === this.container || i(this.CONTAINER_CLASS, t) || this.hide()
            },
            onDocumentClickBeforeLoad: function (e) {
                var t = e.target;
                t === this.container || i(this.CONTAINER_CLASS, t) || this.cancelRequest()
            },
            cancelRequest: function () {
                this.request && (this.request.abort(), this.unsetElements())
            },
            getList: function () {
                var e = this;
                if (!this.loading) {
                    this.PICKER_MAX_HEIGHT = parseInt(getStyle(this.picker, "maxHeight"), 10);
                    var n = t('input[name="from_oid"]', this.container).value,
                        i = t('input[name="post_oid"]', this.container).value;
                    this.loading = !0;
                    var a = setTimeout(function () {
                        o(e.LOADING_CLASS, e.container), e.calcPosition()
                    }, this.LOADING_SHOW_TIME);
                    c(document.body, this.clickEvent, this.requestHandler), this.request = d.post("/wall.php", {
                        act: "get_reply_clubs_list",
                        oid: n,
                        post_oid: i
                    }, {
                        onDone: function (t) {
                            clearTimeout(a), e.picker.innerHTML = t, e.onLoadEnd(), e.toggle(e.picker)
                        }, onFail: function () {
                            e.onLoadEnd()
                        }
                    })
                }
            },
            onLoadEnd: function () {
                this.loading = !1, r(this.LOADING_CLASS, this.container), u(document.body, this.clickEvent, this.requestHandler)
            },
            onChange: function (e) {
                var t = i(this.OPTION_CLASS, e), r = n(this.IMAGE_CLASS, t).src;
                a(geByClass(this.SELECTED_IMAGE_CLASS), function () {
                    this.src = r
                }), l(n("al" + this.SELECTED_IMAGE_CLASS), "href", l(t, "data-href")), this.hide()
            },
            onClick: function (e) {
                this.setElements(e);
                var t = geByClass(this.PICKER_ITEM_CLASS, this.picker).length;
                t ? this.toggle() : this.getList()
            },
            scrollToSelected: function () {
                var e = i(this.OPTION_CLASS, t(":checked", this.picker));
                this.PICKER_MAX_HEIGHT || (this.PICKER_MAX_HEIGHT = parseInt(getStyle(this.picker, "maxHeight"), 10)), e && (this.picker.scrollTop = e.offsetTop - this.PICKER_MAX_HEIGHT / 2 + e.offsetHeight / 2)
            }
        };
    window.replyOwnerPicker = p
}, function () {
    var e = function () {
            function e(e, t) {
                var n = [], i = !0, a = !1, r = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0) ;
                } catch (l) {
                    a = !0, r = l
                } finally {
                    try {
                        !i && s["return"] && s["return"]()
                    } finally {
                        if (a) throw r
                    }
                }
                return n
            }

            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), t = window, n = t.getNotify, i = t.setNotify, a = t.setDocumentDomain, r = t.ce, o = t.onDOMReady,
        s = t.append, l = t.clog, c = t.extend, u = t.parseJSON, d = t.intval, f = t.each, p = window, _ = p.ajax,
        m = window, h = m.nav, v = window, g = v.menu, w = window, y = w.mail, b = function () {
            var t = null, p = !1, m = {}, v = 1, w = null, k = !1, M = !1;

            function C() {
                64 > v && (v *= 2)
            }

            function S(e, t) {
                var a = window, r = a.al;
                if (e === !1 && (e = n() + (t || 1)), i(e), window.al && window.al.menu) {
                    var o = new Array(r.menu.length);
                    o[2] = e, g.refreshCounters(o)
                }
            }

            function T(e) {
                return Object.keys(e).some(function (e) {
                    return -1 !== e.indexOf("attach")
                }) || e.fwd || e.emoji || e.geo
            }

            function E(e, t, n) {
                var i = toInt(e.from_admin) || null, a = toInt(h.getQuery("community"));
                return i && a ? a : 2 & t ? window.vk.id : toInt(e.from) || n
            }

            function A(e) {
                var t = new Date(1e3 * e), n = t.getHours(), i = t.getMinutes();
                return n + ":" + (10 > i ? "0" : "") + i
            }

            return {
                onNewMsg: befall("{ peerId, msgId, authorId, peerName, text, date, hasAttachments, flags, isService }"),
                onEditMsg: befall("{ peerId, msgId, authorId, peerName, text, date, hasAttachments, flags }"),
                onMsgReadByMe: befall("msgId", "dialogId"),
                onMsgReadByOther: befall("msgId", "dialogId"),
                onOnlineChange: befall("{ userId, isOnline, onlinePlatform, lastActionTime }"),
                onTyping: befall("dialogId", "authorId"),
                onMsgImportantRemove: befall("msgId"),
                onMsgImportantAdd: befall("msgId"),
                onMsgRemove: befall("msgId"),
                nu: !0,
                init: function (e, n) {
                    t || (a(), t = r("iframe", {src: e}, {display: "none"}), o(function () {
                        s(t, window.bodyNode), p = !0
                    })), b.refreshParams(n), setTimeout(b.check, 1e3)
                },
                on: function () {
                    l("[longpoll] start"), k = !0, setTimeout(b.check, 1e3)
                },
                off: function () {
                    l("[longpoll] pause"), k = !1
                },
                refreshParams: function (e) {
                    c(m, e || {}), c(b, m)
                },
                getKey: function () {
                    if (w) try {
                        w.abort()
                    } catch (e) {
                    }
                    w = _.post("/mail", {
                        _ajax: 1,
                        act: "im_get_key",
                        community: h.getQuery("community")
                    }, {
                        onDone: function (e) {
                            /[0-9a-f]{40}/i.test(e) ? (b.refreshParams({key: e}), b.check()) : l("[longpoll] invalid key")
                        }, onFail: function () {
                            setTimeout(b.getKey, 1e3 * v), l("[longpoll] from getKey delaying getKey for " + v + "secs"), C()
                        }
                    })
                },
                check: function () {
                    if (k && !M) {
                        if (!b.makeRequest) return void setTimeout(b.check, 1e3);
                        try {
                            b.makeRequest(function (e, t) {
                                if (M = !1, k) {
                                    var n = window, i = n.vk;
                                    if (i.__debug) {
                                        var a = b.checked(u(t));
                                        a && (b.check(), v = 1)
                                    } else try {
                                        var a = b.checked(u(t));
                                        a && (b.check(), v = 1)
                                    } catch (r) {
                                        try {
                                            l("[longpoll] error", r.message || "no message", r.type || "no type", r.stack || "no stack")
                                        } catch (r) {
                                        }
                                        setTimeout(b.check, 1e3 * v), C()
                                    }
                                }
                            }, function () {
                                M = !1, setTimeout(b.check, 1e3 * v), C()
                            }), M = !0
                        } catch (e) {
                            l("[longpoll] makeRequest failed")
                        }
                    }
                },
                checked: function (t) {
                    var n = t.failed;
                    if (1 == n || m.ts >= t.ts + 256) {
                        if (b.refreshParams({ts: t.ts}), n) return !0
                    } else {
                        if (2 == n) return l("[longpoll] delaying getKey for " + v + "secs"), setTimeout(b.getKey, 1e3 * v), C(), !1;
                        if (n) return void l("[longpoll]", t)
                    }
                    if (b.refreshParams({ts: t.ts}), t.updates) {
                        var i = [];
                        for (var a in t.updates) {
                            var r = t.updates[a], o = d(r[0]), s = d(r[1]), u = d(r[2]), p = d(r[3]);
                            if (1 === u) {
                                if (10 === o) {
                                    y.updateImportantDialog(s, !1);
                                    continue
                                }
                                if (12 === o) {
                                    y.updateImportantDialog(s, !0);
                                    continue
                                }
                            }
                            if (8 & u) {
                                if (2 === o) {
                                    if (window.isNewMail) {
                                        b.onMsgImportantAdd(s);
                                        continue
                                    }
                                    y.updateImportantMessages(p, s, 1);
                                    continue
                                }
                                if (3 === o) {
                                    if (window.isNewMail) {
                                        b.onMsgImportantRemove(s);
                                        continue
                                    }
                                    y.updateImportantMessages(p, s, -1);
                                    continue
                                }
                            }
                            if (51 != o) if (61 != o) if (62 != o) if (8 != o) if (9 != o) if (6 != o && 7 != o || !b.nu) if (80 != o || !s || h.getQuery("community")) {
                                if (p) if (4 != o && 5 != o) if (0 != o) if (2 != o) 3 != o || 1 & u && !b.nu && y.markAsRead(p, s); else {
                                    if (128 & u) {
                                        if (window.isNewMail) {
                                            b.onMsgRemove(s);
                                            continue
                                        }
                                        y.markAsDeleted(p, s)
                                    }
                                    window.isNewMail && 64 & u && b.onMsgRemove(s)
                                } else {
                                    if (window.isNewMail) {
                                        b.onMsgRemove(s);
                                        continue
                                    }
                                    y.markAsDeleted(s)
                                } else {
                                    var g = 5 == o;
                                    if (window.isNewMail) {
                                        var w = e(r, 9), k = w[1], M = w[3], x = w[4], P = w[5], I = w[6], B = w[7],
                                            H = void 0 === B ? {} : B, N = w[8], O = T(H), L = A(x),
                                            D = toInt(H.from_admin) || null,
                                            j = (toInt(h.getQuery("community")), E(H, u, M)), q = !!H.source_act;
                                        g ? b.onEditMsg({
                                            peerId: M,
                                            msgId: k,
                                            authorId: j,
                                            peerName: P,
                                            text: I,
                                            date: L,
                                            hasAttachments: O,
                                            flags: u,
                                            adminId: D,
                                            randomId: N,
                                            edited: g
                                        }) : b.onNewMsg({
                                            peerId: M,
                                            msgId: k,
                                            authorId: j,
                                            peerName: P,
                                            text: I,
                                            date: L,
                                            hasAttachments: O,
                                            flags: u,
                                            adminId: D,
                                            randomId: N,
                                            isService: q
                                        });
                                        continue
                                    }
                                    if (h.params.indexOf("offset=") >= 0 && Number(h.params.replace(/.*offset=(\d+).*/, "$1")) > 0) continue;
                                    var R = window, z = R.vk, F = 2 & u ? z.id : r[7] && r[7].from || p,
                                        U = r[7] && r[7].source_act,
                                        W = r[7].from_admin || U ? null : y.getMsgHTML(s, u, p, r[4], r[5], r[6], r[7], g);
                                    if (W && (g ? y.replaceMessage(p, s, F, W) : y.addMessage(p, s, F, W), 2 & u || h.getQuery("community") || S(!1, 1)), "chat_kick_user" === U && r[7].source_mid == z.id) {
                                        var $ = r[3];
                                        y.unpinMessage($)
                                    }
                                    W && "chat_pin_message" !== U && "chat_unpin_message" !== U || i.push({
                                        peer: p,
                                        msg_id: s,
                                        from_id: F,
                                        source_act: U
                                    })
                                }
                            } else S(s); else {
                                if (window.isNewMail) {
                                    var V = r[1], X = r[2];
                                    6 === o ? b.onMsgReadByMe(X, V) : b.onMsgReadByOther(X, V);
                                    continue
                                }
                                y.markPeerAsRead(s, u, 7 == o)
                            } else {
                                if (window.isNewMail) {
                                    b.onOnlineChange({userId: -s, isOnline: !1, lastActionTime: p});
                                    continue
                                }
                                y.updateOnline(-s, 0)
                            } else {
                                if (window.isNewMail) {
                                    b.onOnlineChange({
                                        userId: -s,
                                        isOnline: !0,
                                        onlinePlatform: 8 === u ? "vkmobile" : 7 === (u || 7) ? "desktop" : "mobile"
                                    });
                                    continue
                                }
                                y.updateOnline(-s, u || 7)
                            } else {
                                if (window.isNewMail) {
                                    var Y = 2e9 + u, G = s;
                                    b.onTyping(Y, G);
                                    continue
                                }
                                y.typing(2e9 + u, s)
                            } else {
                                if (window.isNewMail) {
                                    var Q = s, K = s;
                                    b.onTyping(Q, K);
                                    continue
                                }
                                y.typing(s)
                            }
                        }
                        if (i.length) {
                            var J = [];
                            f(i, function (e, t) {
                                J.push(t.msg_id)
                            }), _.post("/mail", {
                                _ajax: 1,
                                act: "get_messages",
                                msgs: J.join(","),
                                community: h.getQuery("community")
                            }, {
                                onDone: function (e, t) {
                                    var n = window, a = n.cur;
                                    f(i, function (t, n) {
                                        var i = e[n.msg_id], a = n.peer;
                                        i.text && y.addMessage(n.peer, n.msg_id, n.from_id, i.text), i.unpin && y.unpinMessage(a), i.pinned && y.pinMessage(a, i.pinned)
                                    }), t && (c(a, t), y.updateStickers())
                                }
                            })
                        }
                    }
                    return !0
                }
            }
        }();
    window.im = b
}, function () {
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function (e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this), n = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var i = arguments[1], a = 0; n > a;) {
                var r = t[a];
                if (e.call(i, r, a, t)) return r;
                a++
            }
            return void 0
        }
    })
}, function () {
    var e = t(["\n    <", ' class="', '" ', " ", ">\n      ", "\n    </", ">\n  "], ["\n    <", ' class="', '" ', " ", ">\n      ", "\n    </", ">\n  "]);

    function t(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    window.Brick = n;

    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = q.list(t.inner), i = void 0,
            a = void 0;
        return t.url ? (i = "a", a = q.attr("href", t.url)) : (i = "div", a = ""), q.html(e, i, t.mix, a, t.attrs, n, i)
    }
}, function () {
    function e(e, t, n, i) {
        n || (n = function () {
        }), t._ajax = 1;
        var a = nav.getQuery("community");
        return a && !t.community && (t.community = a), ajax.post(e, t, {onDone: n, onFail: i})
    }

    window.ajaxRequest = e
}, function () {
    var e = n(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "]),
        t = n(['\n    <div class="msg__newMsgsDivider">\n      <span class="msg__newMsgDividerText">', "</span>\n    </div>\n  "], ['\n    <div class="msg__newMsgsDivider">\n      <span class="msg__newMsgDividerText">', "</span>\n    </div>\n  "]);

    function n(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    window.uMsg = i;

    function i(t) {
        var n = t.msgId, i = t.withDivider ? a() : "", r = store.mail, o = r.msgs[n], s = r.members[o.authorId],
            l = void 0, c = o.peerId, u = "";
        return u = c > 2e9 ? s.name : c > -2e9 && 0 > c ? o.authorId === r.cur.userId ? s.firstName : s.name : s.firstName, l = Msg(o.isService ? {
            id: n,
            text: o.textFull,
            service: !0,
            unread: o.isUnread
        } : {
            id: n,
            text: o.textFull,
            important: o.isImportant,
            unread: o.isUnread,
            authorPhoto: s.avatar,
            authorName: u,
            authorUrl: s.url,
            date: o.date,
            removed: r.cur.msgRemoved[n],
            admin: o.adminName ? {name: o.adminName, url: o.adminUrl} : null,
            edited: o.edited
        }), q.html(e, i, l)
    }

    function a() {
        var e = window.lang;
        return q.html(t, e.mobile_mail_new_msgs)
    }
}, function () {
    var e = a(['\n    <div class="', '">\n      <div class="messenger__layer messenger__layer_main">\n        <div class="messenger__header">', "</div>\n        ", '\n      </div>\n      <div class="messenger__layer messenger__layer_convo ', '">\n        ', "\n      </div>\n    </div>\n  "], ['\n    <div class="', '">\n      <div class="messenger__layer messenger__layer_main">\n        <div class="messenger__header">', "</div>\n        ", '\n      </div>\n      <div class="messenger__layer messenger__layer_convo ', '">\n        ', "\n      </div>\n    </div>\n  "]),
        t = a(['\n    <div class="messenger__header">\n      ', '\n      <div class="messenger__pinned">', "</div>\n    </div>\n    ", '\n    <div class="messenger__footer">\n      <div class="messenger__write">', '</div>\n      <div class="messenger__acts">', "</div>\n    </div>\n  "], ['\n    <div class="messenger__header">\n      ', '\n      <div class="messenger__pinned">', "</div>\n    </div>\n    ", '\n    <div class="messenger__footer">\n      <div class="messenger__write">', '</div>\n      <div class="messenger__acts">', "</div>\n    </div>\n  "]),
        n = a(['\n    <div class="messenger__spinner">\n      ', "\n    </div>\n  "], ['\n    <div class="messenger__spinner">\n      ', "\n    </div>\n  "]);

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    Object.assign(window, {
        Messenger: o,
        uMessenger: r,
        uMessenger_class: u,
        uMessenger_getPinnedMsg: c,
        Messenger_renderConvoLayer: s,
        uMessenger_hasSelectedMsgs: d
    });

    function r() {
        var e = store.mail.cur.query, t = MailScrap({scrap: "folder"}), n = MailScrap({scrap: "search"});
        return o({
            mix: u(),
            actionsOpen: d() ? "messenger_actionsOpen" : "",
            mailHat: uMailHat(),
            convo: s(),
            query: e,
            createChatUrl: "/mail?act=new_chat",
            scrapFolder: t,
            scrapSearch: n
        })
    }

    function o(t) {
        var n = window.lang, i = n.mobile_mail_search_only_messages,
            a = MailFilter({query: t.query, createUrl: t.createChatUrl}), r = q.onClick("Messenger._onSearchMsgsClick"),
            o = ScrollView({
                mix: "messenger__body",
                attrs: q.onScroll("Messenger._onMainScroll", "this"),
                inner: [Brick({mix: "messenger__filter", inner: a}), Brick({
                    mix: "messenger__searchMsgs",
                    attrs: r,
                    inner: i
                }), Brick({
                    mix: "messenger__loadable",
                    inner: [Brick({
                        mix: "messenger__folderList",
                        inner: t.scrapFolder
                    }), Brick({mix: "messenger__searchList", inner: t.scrapSearch}), l()]
                })]
            });
        return q.html(e, t.mix, t.mailHat, o, t.actionsOpen, t.convo)
    }

    function s() {
        var e = store.mail, n = e.cur, i = e.peers[n.peerId], a = uMailHat(), r = c(), o = uMailWrite(),
            s = i && i.canPin, u = MailActs({canPin: s}), d = MailScrap({scrap: "peer"}), f = ScrollView({
                mix: "messenger__body",
                attrs: q.onScroll("Messenger._onConvoScroll", "this"),
                inner: [Brick({mix: "messenger__spacer"}), Brick({mix: "messenger__convoList", inner: d}), l()]
            });
        return q.html(t, a, r, f, o, u)
    }

    function l() {
        var e = Spinner();
        return q.html(n, e)
    }

    function c() {
        var e = store.mail, t = e.cur.peerId;
        return t && e.peers[t].pinnedMsg
    }

    function u() {
        var e, t = store.mail.cur, n = void 0;
        return n = t.peerId ? "view_dialog" : t.query && "msgs" === t.tab ? "view_searchMsgs" : t.query ? "view_searchPeers" : "folder_" + t.folder, q["class"]("e", "messenger", "uMessenger", (e = {}, i(e, n, !0), i(e, "community", !!t.groupId), e))
    }

    function d() {
        var e = store.mail.cur.msgSelected;
        return Object.keys(e).length > 0
    }
}, function () {
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, t = window, n = t.extend, i = {
        _def_opts: {enableHighAccuracy: !0, maximumAge: 3e5, timeout: 6e4}, _provider: null, initW3C: function () {
            i._provider = navigator.geolocation, i.getCurrentPosition = function (e, t, a) {
                i._provider.getCurrentPosition(function (t) {
                    e("undefined" != typeof t.latitude ? n(t, {
                        coords: n(t.coords || {}, {
                            latitude: t.latitude,
                            longitude: t.longitude
                        })
                    }) : t)
                }, t, a)
            }
        }, initGears: function () {
            var e = window, t = e.google;
            i._provider = t.gears.factory.create("beta.geolocation")
        }, initSymbian: function () {
            var e = window, t = e.device;
            i._provider = t.getServiceObject("Service.Location", "ILocation"), i.getCurrentPosition = function (e, t) {
                i._provider.ILocation.GetLocation({LocationInformationClass: "BasicLocationInformation"}, function (n, i, a) {
                    4 == i ? t({code: 2, message: "Position unavailable"}) : e({
                        timestamp: null,
                        coords: {
                            latitude: a.ReturnValue.Latitude,
                            longitude: a.ReturnValue.Longitude,
                            altitude: a.ReturnValue.Altitude,
                            heading: a.ReturnValue.Heading
                        }
                    })
                })
            }
        }, initPalm: function () {
            i.getCurrentPosition = function (e, t, n) {
                var i = {};
                n && (n.enableHighAccuracy && 1 == n.enableHighAccuracy && (i.accuracy = 1), n.maximumAge && (i.maximumAge = n.maximumAge), n.responseTime && (n.responseTime < 5 ? i.responseTime = 1 : n.responseTime < 20 ? i.responseTime = 2 : i.timeout = 3));
                var a = window, r = a.Mojo;
                new r.Service.Request("palm://com.palm.location", {
                    method: "getCurrentPosition",
                    parameters: i,
                    onSuccess: function (t) {
                        e({
                            timestamp: t.timestamp,
                            coords: {latitude: t.latitude, longitude: t.longitude, heading: t.heading}
                        })
                    },
                    onFailure: function (e) {
                        t(1 == e.errorCode ? {code: 3, message: "Timeout"} : 2 == e.errorCode ? {
                            code: 2,
                            message: "Position unavailable"
                        } : {code: 0, message: "Unknown Error: webOS-code" + e.errorCode})
                    }
                })
            }
        }, getCurrentPosition: function (e, t, a) {
            i._provider.getCurrentPosition(e, t, n(i._def_opts, a || {}))
        }, init: function () {
            var t = window, n = t.google, a = t.device, r = t.Mojo;
            try {
                var o = "undefined";
                if (e(navigator.geolocation) !== o) i.initW3C(); else if (e(window.google) !== o && e(n.gears) !== o) i.initGears(); else if (("undefined" == typeof a ? "undefined" : e(a)) !== o && e(a.getServiceObject) !== o) i.initSymbian(); else {
                    if (("undefined" == typeof r ? "undefined" : e(r)) === o || "Mojo.Service.Request" == typeof r.Service.Request) return !1;
                    i.initPalm()
                }
            } catch (s) {
                return !1
            }
            return !0
        }
    };
    window.geo = i
}, function () {
    var e = {
        onClose: befall(),
        inited: !1,
        width: !1,
        height: !1,
        onResize: null,
        _lastNav: !1,
        _opened: !1,
        _destroy: !1,
        init: function () {
            e.inited || (e.inited = !0, e.initEvents())
        },
        initEvents: function () {
            var t = function (t) {
                e.fixHeight(vkNow() + 2e3, t)
            };
            addEvent(window, "orientationchange", t), onBodyResize(t), t(!0)
        },
        opened: function () {
            return hasClass("z_opened", window.bodyNode) !== e.opened && toggleClass("z_opened", window.bodyNode, e._opened), e._opened
        },
        toggle: function (t, n) {
            return checkEvent(t) ? !0 : (e.opened() ? e.close(t, n) : e.open(t, n), !1)
        },
        open: function (t) {
            return checkEvent(t) ? !0 : e.opened() ? !1 : (thover.clear(), e.init(), e._st = scrollTop(), e._lastNav = !1, addClass("z_opened", window.bodyNode), e._opened = !0, e.fixHeight(vkNow() + 2e3, !0), scrollTop(0), !1)
        },
        close: function (t) {
            return checkEvent(t) ? !0 : e.opened() ? (thover.clear(), val("z", ""), removeClass("z_opened", window.bodyNode), e._lastNav = {
                cur: nav.cur,
                path: nav.path,
                params: nav.params,
                hash: nav.hash
            }, e._opened = !1, e._destroy && (e._destroy(), e._destroy = !1), scrollTop(e._st, 1), e._st = !1, e.onResize = null, e.onClose(), !1) : !1
        },
        updateSize: function () {
            var t = ge("z");
            t && t.offsetWidth && t.offsetHeight && (e.width = t.offsetWidth, e.height = t.offsetHeight, e.onResize && e.onResize())
        },
        fixHeight: function (t, n) {
            if ((e._opened || n) && (t && !(vkNow() > t) || n)) {
                var i = getCw(), a = getCh();
                (e._lastWidth != i || e._lastHeight != a || n) && (e._lastWidth = i, e._lastHeight = a, setStyle("z", "height", a), e.updateSize(), scrollTop() || scrollTop(0)), clearTimeout(e._fixTo), e._fixTo = setTimeout(e.fixHeight, 50, t)
            }
        },
        create: function (t, n) {
            val("z", t), e._destroy = n
        }
    };
    window.zlayer = e
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var r = t.PlayerFlash = function () {
        function e(t) {
            a(this, e), this.opts = t || {}, window._flashVoiceInstance = this
        }

        return e.prototype.fadeVolume = function (e, t) {
            return this.setVolume(e), t()
        }, e.prototype.destroy = function () {
            re(e.PLAYER_EL_ID)
        }, e.prototype.onReady = function (t) {
            if (this._player) return t(!0);
            if (this._player === !1) return t(!1);
            this._onReady = t;
            var n = {url: "/swf/audio_lite.swf", id: "flash_voice_player", height: 2},
                i = {swliveconnect: "true", allowscriptaccess: "always", wmode: "opaque"}, a = {
                    onPlayFinish: "VoicePlayerFlash.onAudioFinishCallback",
                    onLoadProgress: "VoicePlayerFlash.onAudioLoadProgressCallback",
                    onPlayProgress: "VoicePlayerFlash.onAudioProgressCallback"
                };
            ge(e.PLAYER_EL_ID) || document.body.appendChild(ce("div", {id: e.PLAYER_EL_ID, className: "fixed"}));
            var r = this;
            renderFlash(e.PLAYER_EL_ID, n, i, a) && setTimeout(function () {
                r._checkFlashLoaded()
            }, 50)
        }, e.prototype.setUrl = function (e, t) {
            return this._trackOptions = {}, t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && (this._trackOptions = t, t = t.callback), this._url == e ? void(t && t(!0)) : (this._url = e, this._player && this._player.loadAudio(e), void(t && t(!0)))
        }, e.prototype.setVolume = function (e) {
            this._player && this._player.setVolume && this._player.setVolume(e)
        }, e.prototype.play = function () {
            this._player && this._player.playAudio()
        }, e.prototype.seek = function (e) {
            var t = (this._total || 0) * e;
            this._player && this._player.playAudio(t)
        }, e.prototype.pause = function () {
            this._player && this._player.pauseAudio()
        }, e.prototype.isFullyLoaded = function () {
            return !1
        }, e.prototype.getPlayedTime = function () {
            return 0
        }, e.prototype.getCurrentProgress = function () {
            return this._currProgress || 0
        }, e.prototype.getCurrentBuffered = function () {
            return this._currBuffered || 0
        }, e.prototype.stop = function () {
            this._player && this._player.stopAudio()
        }, e.prototype._checkFlashLoaded = function () {
            var e = ge("flash_voice_player");
            if (this._checks = this._checks || 0, this._checks++, this._checks > 10) {
                this._player = !1;
                var t = this._onReady;
                return t && t(!1)
            }
            if (e && e.paused) {
                this._player = e;
                var t = this._onReady;
                t && t(!0), this._onReady = null
            } else {
                var n = this;
                setTimeout(function () {
                    n._checkFlashLoaded()
                }, 100)
            }
        }, e.onAudioFinishCallback = function () {
            var e = window._flashVoiceInstance;
            e.opts.onEnd && e.opts.onEnd()
        }, e.onAudioProgressCallback = function (e, t) {
            var n = window._flashVoiceInstance;
            t && (n._total = t, n._currProgress = e / t, n.opts.onProgressUpdate && n.opts.onProgressUpdate(n._currProgress))
        }, e.onAudioLoadProgressCallback = function (e, t) {
            var n = window._flashVoiceInstance;
            n._currBuffered = e / t, n.opts.onBufferUpdate && n.opts.onBufferUpdate(n._currBuffered)
        }, i(e, [{
            key: "type", get: function () {
                return "flash"
            }
        }, {
            key: "loaded", get: function () {
                return !!this._player
            }
        }]), e
    }();
    window.VoicePlayerFlash = r, r.PLAYER_EL_ID = "flash_voice"
}, function () {
    Array.prototype.filter || (Array.prototype.filter = function (e) {
        if (void 0 === this || null === this) throw new TypeError;
        var t = Object(this), n = t.length >>> 0;
        if ("function" != typeof e) throw new TypeError;
        for (var i = [], a = arguments.length >= 2 ? arguments[1] : void 0, r = 0; n > r; r++) if (r in t) {
            var o = t[r];
            e.call(a, o, r, t) && i.push(o)
        }
        return i
    })
}, function () {
    var e = t(['\n    <div class="', '">\n      ', '\n      <input\n        class="mailFilter__input"\n        placeholder="', '"\n        value="', '"\n        ', '\n      />\n      <div class="mailFilter__right">\n        ', "\n        ", "\n      </div>\n    </div>\n  "], ['\n    <div class="', '">\n      ', '\n      <input\n        class="mailFilter__input"\n        placeholder="', '"\n        value="', '"\n        ', '\n      />\n      <div class="mailFilter__right">\n        ', "\n        ", "\n      </div>\n    </div>\n  "]);

    function t(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    window.MailFilter = n;

    function n(t) {
        var n = window.lang, i = t.query, a = q["class"](t.mix, "mailFilter", {hasQuery: !!i}),
            r = q.onInput("MailFilter._onInput", "this"), o = Icon({icon: "search"}),
            s = Icon({mix: "mailFilter__create", icon: "plus", url: t.createUrl}), l = Icon({
                mix: "mailFilter__clear",
                icon: "close12",
                attrs: q.onMouseDown("MailFilter._onClearMouseDown", "this")
            });
        return q.html(e, a, o, n.mobile_search, i, r, s, l)
    }
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            var n = [], i = !0, a = !1, r = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0) ;
            } catch (l) {
                a = !0, r = l
            } finally {
                try {
                    !i && s["return"] && s["return"]()
                } finally {
                    if (a) throw r
                }
            }
            return n
        }

        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.deb = o, t.isParagraphEl = l, t.getCorrectedRange = c, t.isSelectionContainsNode = u, t.focusEl = d, t.prepareLineText = f, t.getElementIndex = p, t.isObjectParagraphEl = _, t.isObjectParagraph = m, t.isHeaderParagraph = h, t.isListParagraph = v, t.buildParagraph = g, t.getRange = w, t.prepareSpacesWithNBSP = y, t.cleanTextSpaces = b, t.getLineEl = k, t.mergeRanges = M, t.isWhiteSpaceChar = C, t.isAlienParagraphEl = S, t.getFocusedElement = T, t.isTrackedParagraphEl = E, t.getPhotoSize = A, t.getAbsoluteCursorPosition = P, t.restoreAbsoluteCursorPosition = I;
    var i = t.NBSP = "&nbsp;", a = t.DATA_ATTR_TRACKED = "data-t", r = t.ParagraphType = {
        Text: 1,
        Header1: 2,
        Header2: 3,
        Header3: 4,
        Code: 5,
        NumericList: 6,
        BulletList: 7,
        Quote: 8,
        Quote2: 9,
        ObjectAudioPlaylist: 100,
        ObjectPhoto: 101,
        ObjectVideo: 102,
        ObjectGIF: 103
    };

    function o(e, t) {
        cur[e] = cur[e] || 0, void 0 === t ? console.log(e, cur[e]) : cur[e] >= t, cur[e]++
    }

    var s = t.NodeContains = {None: 0, Partial: 1, Full: 2, FullAndOnlyOne: 3};

    function l(e) {
        return e && hasClass(e, "_article_paragraph")
    }

    function c(e) {
        if (e.endContainer != e.startContainer && e.endContainer.nodeType == Node.ELEMENT_NODE && l(e.endContainer) && 0 == e.endOffset && 0 == e.startOffset) {
            var t = e.cloneRange();
            t.selectNodeContents(domPS(e.endContainer));
            var n = e.cloneRange();
            return n.setEnd(t.endContainer, t.endOffset), n
        }
        return e
    }

    function u(e, t) {
        var n = e.getRangeAt(0);
        n = c(n);
        var i = traverseParent(n.startContainer, function (e) {
            return e == t
        }, 5), a = !0, r = !1;
        if (n.startContainer == n.endContainer) a = r = i; else if (a = traverseParent(n.endContainer, function (e) {
                return e == t
            }, 3), !i && !a) {
            var o = n.commonAncestorContainer, l = -1;
            traverseParent(n.startContainer, function (e) {
                return e.parentNode == o ? (l = p(e), !0) : void 0
            }, 5);
            var u = -1;
            traverseParent(n.endContainer, function (e) {
                return e.parentNode == o ? (u = p(e), !0) : void 0
            }, 5);
            var d = -1;
            traverseParent(t, function (e) {
                return e.parentNode == o ? (d = p(e), !0) : void 0
            }, 5), d >= l && u >= d && (r = traverseParent(t, function (e) {
                return e == o
            }))
        }
        return i && a ? s.FullAndOnlyOne : i != a ? s.Partial : i || a || !r ? i || a || r ? s.None : s.None : s.Full
    }

    function d(e) {
        if (e) {
            var t = document.createRange();
            t.setStart(e, 0), t.collapse();
            var n = window.getSelection();
            n.removeAllRanges(), n.addRange(t)
        }
    }

    function f(e, t, n, i) {
        if (e = e.substring(t, n), i && i.length) {
            var a = [], r = 0, o = !1;
            return i.forEach(function (n) {
                n -= t, 0 >= n || n > e.length || (a.push(y(e.substring(r, n) + "<br/>")), r = n)
            }), a.push(y(e.substring(r))), o && a.push("<br/>"), a.join("")
        }
        return y(e)
    }

    function p(e) {
        if (!e) return !1;
        for (var t = 0; null != (e = e.previousSibling);) t++;
        return t
    }

    function _(e) {
        return hasClass(e, "_article_object")
    }

    function m(e) {
        return e && e.type && e.type >= 100
    }

    function h(e) {
        var t = void 0;
        return t = isObject(e) ? e.type : e, inArray(t, [r.Header1, r.Header2, r.Header3])
    }

    function v(e) {
        return e && (e.type == r.NumericList || e.type == r.BulletList)
    }

    function g(e) {
        e = e || {};
        var t = {};
        return m(e) && (t._uuid = e._uuid), t.lines = e.lines || [{
            text: "",
            decorations: {},
            brs: []
        }], t.type = e.type ? parseInt(e.type) : r.Text, e._preparedData && (t._preparedData = e._preparedData), e.mediaId && (t.mediaId = e.mediaId), t
    }

    function w() {
        var e = window.getSelection();
        return e.rangeCount ? [e.getRangeAt(0), e.isCollapsed, e] : [!1]
    }

    function y(e) {
        return -1 != e.search(/^\s/) && (e = i + e.trimLeft()), -1 != e.search(/\s$/) && (e = e.trimRight() + i), e
    }

    function b(e) {
        return e.replace(/\s\s+/g, " ").replace(/\s/g, " ")
    }

    function k(e) {
        for (var t = 5; t--;) {
            if (hasClass(e, "_article_paragraph")) return e;
            e = e.parentNode
        }
        return !1
    }

    function M(e) {
        for (var t = e.slice().sort(function (e, t) {
            return e[0] > t[0]
        }), n = 0; n < t.length - 1;) {
            var i = t[n], a = t[n + 1];
            i[1] >= a[0] ? (i[1] = Math.max(i[1], a[1]), t.splice(n + 1, 1)) : n++
        }
        return t
    }

    function C(e) {
        return /\s/.test(e)
    }

    function S(e) {
        return e.nodeType != Node.ELEMENT_NODE || !e.hasAttribute(a)
    }

    function T() {
        var e = window.getSelection();
        return e.focusNode
    }

    function E(e) {
        if (e.hasAttribute(a)) {
            for (var t = e.getAttribute(a); e = e.previousSibling;) if (e.hasAttribute(a) && t == e.getAttribute(a)) return !1;
            return !0
        }
        return !1
    }

    function A(e) {
        var t = [];
        each(e, function (e, n) {
            t.push(n)
        });
        var n = t.sort(function (e, t) {
            return t[1] - e[1]
        })[0];
        return [n[1], n[2]]
    }

    function x(e) {
        for (var t = e.parentNode, n = 0; n < t.childNodes.length; n++) if (e == t.childNodes[n]) return n;
        return -1
    }

    function P(e) {
        e = e || document.body;
        var t = w(), i = n(t, 2), a = i[0], r = i[1], o = {
            startContainerPath: [],
            startOffset: a.startOffset,
            endContainerPath: [],
            endOffset: a.endOffset,
            isCollapsed: r
        };
        return traverseParent(a.startContainer, function (t) {
            return t == e ? !0 : void o.startContainerPath.unshift(x(t))
        }, 5), r || traverseParent(a.endContainer, function (t) {
            return t == e ? !0 : void o.endContainerPath.unshift(x(t))
        }, 5), o
    }

    function I(e, t) {
        for (var n = document.createRange(), i = t, a = 0; a < e.startContainerPath.length; a++) {
            var r = e.startContainerPath[a];
            if (!i.childNodes[r]) break;
            i = i.childNodes[r]
        }
        if (n.setStart(i, Math.min(i.textContent.length, e.startOffset)), e.isCollapsed) n.collapse(!0); else {
            for (var o = t, s = 0; s < e.endContainerPath.length; s++) {
                var l = e.endContainerPath[s];
                if (!o.childNodes[l]) break;
                o = o.childNodes[l]
            }
            n.setEnd(o, Math.min(o.textContent.length, e.endOffset))
        }
        var c = window.getSelection();
        c.removeAllRanges(), c.addRange(n)
    }
}, function () {
    Array.prototype.forEach || (Array.prototype.forEach = function (e) {
        var t, n;
        if (null == this) throw new TypeError("this is null or not defined");
        var i = Object(this), a = i.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (t = arguments[1]), n = 0; a > n;) {
            var r;
            n in i && (r = i[n], e.call(t, r, n, i)), n++
        }
    })
}, function () {
    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach)
}, function () {
    var e = window, t = e.attr, n = e.removeClass, i = e.addClass, a = e.hasClass, r = e.toggleClass, o = e.ge,
        s = e.val, l = e.geByClass1, c = e.langNumeric, u = e.each, d = e.lockButton, f = window, p = f.browser,
        _ = window, m = _.ajax, h = window, v = h.nav, g = window, w = g.page, y = window, b = y.mail, k = window,
        M = k.im, C = function () {
            var e, f, _ = [], h = !1, g = !1, y = {};

            function k(e) {
                return function () {
                    return h ? void 0 : e.apply(this, arguments)
                }
            }

            function C(e) {
                return "A" === e.tagName
            }

            function T(e) {
                var r = t(e, "data-id"), o = _.indexOf(r);
                o >= 0 ? (_.splice(o, 1), n("mi_selected", e), delete y[r]) : (_.push(r), i("mi_selected", e), y[r] = a("msg_item_important", e))
            }

            function E() {
                g = _.length > 0, r("vk_messages_actions_visible", o("vk"), g)
            }

            function A() {
                var e = window, t = e.lang, n = Math.max(_.length, 1);
                s(l("messagesActions__row_counter"), c(n, t.mobile_mail_messages_selected).replace("{count}", n))
            }

            function x() {
                g && (y = {}, u(_, function (e, t) {
                    n("mi_selected", l("_msg" + t))
                }), h = !1, _ = [], E())
            }

            function P() {
                return window.getSelection ? window.getSelection().toString().length > 0 : !1
            }

            function I(e) {
                var t = e.target, n = e.currentTarget, i = C(t) || C(t.parentNode);
                i && x(), p.uc_mini || P() || i || setTimeout(function () {
                    P() || (T(n), E(), A())
                }, 40)
            }

            function B(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1;
                h = !0, d(e), M.off(), m.click("/mail", {}, {
                    url_params: {
                        act: i ? "spam" : "delete",
                        peer: t,
                        hash: n,
                        ids: _.join(","),
                        community: S()
                    }
                })
            }

            function H(e, t, n) {
                B(e, t, n, !0)
            }

            function N(e, t, n) {
                h = !0, d(e), m.click("/attachments", {}, {
                    url_params: {
                        act: "add",
                        target: "mail" + t,
                        hash: n,
                        object: "mail" + _.join(";"),
                        community: S()
                    }
                })
            }

            function O(t, n) {
                h = !0, d(t), e = "mail" + _.join(";"), f = n;
                var i = S(), a = i ? "?community=" + i : "";
                v.go(location.pathname + a, null, {ignore_cur_process: !0})
            }

            function L() {
                return Boolean(e)
            }

            function D(t) {
                m.click("/attachments", {}, {
                    url_params: {
                        act: "add",
                        target: "mail" + t,
                        hash: f,
                        object: e,
                        community: S()
                    }
                }), e = ""
            }

            function j() {
                o("dialogs") && L() ? i("vk_dialogs_forwarding", o("vk")) : e = "", x()
            }

            function q(e) {
                var t, n = _.length, i = 0;
                for (t = 0; n > t; t++) if (!y[_[t]]) {
                    i = 1;
                    break
                }
                for (t = 0; n > t; t++) r("msg_item_important", l("_msg" + _[t]), 1 === i);
                m.post("/mail", {_ajax: 1, act: "mark_important", ids: _, val: i, hash: e}), x()
            }

            return w.onChange(j), b.onShowDialogsPageFromCache(j), b.onShowDialogFromCache(j), b.onMessagesRepainted(function () {
                u(_, function (e, t) {
                    i("mi_selected", l("_msg" + t))
                })
            }), {
                onMessageClick: k(I),
                remove: k(B),
                reply: k(N),
                forward: k(O),
                spam: k(H),
                close: k(x),
                toggleImportant: k(q),
                hasFwdMessages: L,
                attachFwdMessages: D
            }
        }();

    function S() {
        return v.getQuery("community")
    }

    window.MessagesActions = C
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var i = function () {
        function e(t, i) {
            n(this, e);
            var a = Object.assign({}, {
                tick: 100, onEnd: function () {
                }, onTick: function () {
                }, onStart: function () {
                }, onPause: function () {
                }, onStop: function () {
                }
            }, i);
            this.left = t, this.initialTime = t, this.tick = a.tick, this.onEnd = a.onEnd, this.onTick = a.onTick, this.onStart = a.onStart, this.onPause = a.onPause, this.onStop = a.onStop, this.started = !1
        }

        return e.prototype.stop = function () {
            this.started && (this.pause(), this.left = this.initialTime, this.onStop())
        }, e.prototype.pause = function () {
            this.timer && (this.timer = clearInterval(this.timer), this.started = !1, this.onPause())
        }, e.prototype.start = function () {
            var e = this;
            if (this.started) return !1;
            var t = new Date(Date.now() + this.left).getTime();
            this.started = !0, this.timer = setInterval(function () {
                var n = (new Date).getTime();
                e.left = t - n, e.left <= 0 ? (e.onTick(0), e.onEnd(), e.stop()) : e.onTick(e.left)
            }, this.tick), this.onStart()
        }, e.prototype.isStarted = function () {
            return this.started
        }, e.prototype.getTimeLeft = function () {
            return this.left
        }, e
    }();
    t["default"] = i
}, function (e, t, n) {
    var i = function () {
        function e(e, t) {
            var n = [], i = !0, a = !1, r = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0) ;
            } catch (l) {
                a = !0, r = l
            } finally {
                try {
                    !i && s["return"] && s["return"]()
                } finally {
                    if (a) throw r
                }
            }
            return n
        }

        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), a = n(6), r = o(a);

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var s = window, l = s.registeredEvents, c = s.removeEvent,
        u = ["touchstart", "touchend", "touchmove", "touchcancel"];
    r["default"].onIframeReady(function (e) {
        var t = e.is_api;
        t && l.forEach(function (e) {
            var t = i(e, 3), n = t[0], a = t[1], r = t[2];
            u.indexOf(a) >= 0 && c(n, a, r)
        })
    })
}, function (e, t, n) {
    var i = n(116), a = n(9), r = null;

    function o(e) {
        for (var t = geByClass("audio-msg-track--wave-wrapper", e), n = 0, i = 0; i < t.length; i++) {
            try {
                n = parseInt(window.getComputedStyle(t[i], null).getPropertyValue("width"))
            } catch (a) {
                n = parseInt(t[i].currentStyle.width)
            }
            if (n > 0) break
        }
        return n
    }

    function s(e, t) {
        t = Math.round(t), e.length != t && (e = a.fastResample(e, t));
        for (var n = "", i = 0, r = 0; r < e.length; r++) i = Math.floor(10 * e[r] * .95), 0 == i && (i = .5), n += "M" + (3 * r + 1) + "," + (10 - i) + "v" + 2 * i + "Z";
        return '<svg class="audio-msg-track--wave" width="' + 3 * e.length + 'px"><path d="' + n + '"></path></svg>'
    }

    function l() {
        for (var e = geByClass("audio-msg-track"), t = 0; t < e.length; t++) {
            var n = attr(e[t], "data-wave");
            hasClass(e[t], "audio-msg-player") && t > 0 && (n = attr(e[t - 1], "data-wave"));
            var i = o(e[t]);
            if (n && i) {
                n = n.split(",");
                for (var a = geByClass("audio-msg-track--wave", e[t]), r = s(n, i / 3), l = 0; l < a.length; l++) {
                    var c = ce("div", {innerHTML: r}).firstChild;
                    a[l].parentNode.replaceChild(c, a[l])
                }
            }
        }
    }

    addEvent(window, "orientationchange", function () {
        return setTimeout(l, 500)
    }), window.mail && window.mail.onMessagesRepainted && (onDOMReady(l), mail.onMessagesRepainted(l));

    function c() {
        return r || (r = new i.VoiceMessagePlayer), r
    }

    window.AudioMessagePlayer = {
        loaded: !0, togglePlay: function (e) {
            var t = c(), n = t.attachTo(e);
            n === !0 ? t.play() : n.then(function () {
                t.play()
            })
        }, detachPlayer: function (e) {
            var t = c();
            t.detach(e)
        }, pauseGlobalMedia: function () {
            i.VoiceMessagePlayer.pauseGlobalMedia()
        }, resumeGlobalMedia: function () {
            i.VoiceMessagePlayer.resumeGlobalMedia()
        }, redrawWaves: l, getWave: s
    };
    try {
        stManager.done("voice_message_player.js")
    } catch (u) {
    }
}, function () {
    var e = window, t = e.preventEvent, n = e.stopEvent, i = e.gpeByClass, a = e.toggleClass, r = e.removeClass,
        o = e.addEvent, s = e.removeEvent, l = "dropdown", c = "dropdown_open", u = {
            _onTogglerClick: function (e, u) {
                t(e), n(e);
                var d = i(l, u);
                if (a(d, c), d.isFirstClick !== !1) {
                    d.isFirstClick = !1;
                    var f = function () {
                        r(d, c)
                    };
                    o(window, "click", f), window.cur.destroy.push(function () {
                        s(window, "click", f), d.isFirstClick = !0
                    })
                }
            }
        };
    window.Dropdown = u
}, function (e, t, n) {
    var i = n(110), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    window.landingsSlider = a["default"]
}, function () {
    var e = window, t = e.hide;
    window.Informer = {
        close: function (e) {
            t(e)
        }
    }
}, function (e, t, n) {
    n(26), n(18), n(29), n(90), n(107), n(126), n(144), n(30), n(52), n(69), n(65), n(143), n(115), n(141), n(54), n(70), n(11), n(23), n(13), n(49), n(85), n(106), n(53), n(134), n(55), n(40), n(94), n(62), n(120), n(56), n(73), n(17), n(42), n(74), n(130), n(24), n(128), n(50), n(111), n(100), n(58), n(37), n(80), n(1), n(136), n(35), n(63), n(48), n(16), n(84), n(138), n(5), n(72), n(43), n(81), n(105), n(77), n(31), n(93), n(8), n(71), n(36), n(34), n(124), n(41), n(101);
    var i = window, a = i.addClass, r = i.addEvent, o = i.append, s = i.attr, l = i.cancelEvent, c = i.ce,
        u = i.checkNav, d = i.checkTouchHover, f = i.clog, p = i.ge, _ = i.geByClass1, m = i.getCh, h = i.gpeByClass,
        v = i.hasClass, g = i.lsCheck, w = i.lsGet, y = i.lsSet, b = i.onBodyScroll, k = i.onDOMReady, M = i.remove,
        C = i.scrollTop, S = i.sgFix;
    r(window, "scroll touchmove", function () {
        b(!0)
    }), r(window, "error", function (e) {
        f(e.lineno + ": " + e.message)
    }), window.cur = {destroy: []}, window.lang = {};
    var T = window, E = T.thover, A = T.browser, x = T.ajax, P = T.isTouch;
    r(document, "touchmove touchcancel", E.cancel), r(document, "touchend", E.end);

    function I() {
        if ((A.safari_mobile || A.android || A.opera_mobile && !A.opera_mini) && !v("body_fullscreen", window.bodyNode)) {
            var e = C();
            window.bodyNode.style.overflow = "hidden", window.bodyNode.style.minHeight = "5000px", C(10);
            var t = m() + (A.android ? 1 : 0);
            C(e), window.bodyNode.style.minHeight = t + "px", window.bodyNode.style.overflow = "", window.realClientHeight = t
        }
    }

    function B() {
        if (w("custom_opts")) return a("_copts", "vk_wrap");
        var e = c("div", {innerHTML: '<input id="copts_test_radio" type="radio" checked="checked"><div id="copts_test_label"></div>'});
        o(e, "vk_utils");
        var t = p("copts_test_label");
        t && Math.abs(t.offsetWidth - 5) < 1 && (a("_copts", "vk_wrap"), y("custom_opts", 1)), M(e)
    }

    var H = window, N = H.page;
    x._init(), x.enabled = x._req ? !0 : !1, x.enabled && (k(function () {
        M("app_go_frame"), x.prepare_nav(), x.prepare_click(), D && D.init(), j && j.initAudio(), a("_js", "vk_wrap")
    }), N.clear()), r(window, "orientationchange", I), r(document, "touchstart", function (e) {
        var t = d(e.target);
        t && E.start.call(t, e)
    }), r(document, "click", function (e) {
        var t = window, n = t.al;
        if (window.al && n.ver) {
            var i = h("al_after", e.target);
            if (i) {
                var a = s(i, "data-target"), r = a ? _(a, i) : !1;
                if (r && !L.go_after(r, e) || !L.go_after(i, e)) return
            }
            var o = u(e.target, {allow_post_away: !0});
            o && (L.go(o, e) || l(e))
        }
    }), r(document, "submit", function (e) {
        var t = e.target;
        v("vk_js_yes", geByTag1("html")) && !v("opera_mini_yes", geByTag1("body")) && v("qsearch", t) && h("audioPage", t) && (geBySel1('[type="submit"]', t).click(), l(e))
    }), r(document, P ? "touchstart" : "mousedown", function (e) {
        q.closeByTap(e)
    }), k(I), k(B), S();
    var O = window, L = O.nav, D = O.menu, j = O.audioplayer, q = O.tooltip, R = O.zlayer;
    k(function () {
        var e = window, t = e.vk;
        !t.id && g() && localStorage.clear()
    }), window.fixHeight = I, window.optionsTest = B, R.isReady = !0, window.isNewMail && (n(117), n(137), n(121), n(97), n(112), n(92), n(20), n(127), n(83), n(139), n(19), n(99), n(2), n(46), n(75), n(14), n(44), n(104), n(89), n(140), n(67), n(86), n(91), n(102), n(142), n(60), n(3), n(132), n(68), n(133), n(39), n(123), n(27), n(12), n(61), n(21), n(7), n(95), n(78), n(114), n(96), n(119), n(45), n(135), n(47), n(10), n(22), n(66), n(129))
}, function () {
    var e = n(['\n    <div class="', '">\n      ', '\n      <div class="mailActs__counter"></div>\n      <div class="mailActs__buttons">\n        ', "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n      </div>\n    </div>\n  "], ['\n    <div class="', '">\n      ', '\n      <div class="mailActs__counter"></div>\n      <div class="mailActs__buttons">\n        ', "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n      </div>\n    </div>\n  "]),
        t = n(['\n    <div class="', '" ', ">\n      ", "\n    </div>\n  "], ['\n    <div class="', '" ', ">\n      ", "\n    </div>\n  "]);

    function n(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    window.MailActs = i;

    function i(t) {
        t || (t = {});
        var n = Icon({mix: "mailActs__close", icon: "close12", attrs: q.onClick("MailActs._onCloseClick")}),
            i = a("remove"), r = a("important"), o = a("reply"), s = a("forward"), l = a("spam"), c = a("pin"),
            u = q["class"]("mailActs", {canPin: t.canPin});
        return q.html(e, u, n, i, r, o, s, l, c)
    }

    function a(e) {
        var n = window.lang, i = q["class"]("mailActs__button", {type: e}), a = q.onClick("MailActs._onButtonClick", e),
            r = void 0;
        switch (e) {
            case"remove":
                r = Icon({mix: "mailActs__buttonIcon", icon: "trash"});
                break;
            case"important":
                r = Icon({mix: "mailActs__buttonIcon", icon: "star"});
                break;
            case"reply":
                r = n.mobile_mail_messages_actions_reply;
                break;
            case"forward":
                r = n.mobile_mail_messages_actions_forward;
                break;
            case"spam":
                r = n.mobile_mail_messages_actions_spam;
                break;
            case"pin":
                r = "[pin]"
        }
        return q.html(t, i, a, r)
    }
}, function () {
    var e = window, t = e.ge, n = e.attr, i = (e.clog, e.lsCheck), a = e.isEmpty, r = e.vkNow, o = e.lsGet,
        s = e.intval, l = e.lsSet, c = e.extend, u = e.hasClass, d = e.gpeByClass, f = e.each, p = e.geByClass,
        _ = e.addClass, m = e.checkPostsSeen, h = e.hashCode, v = window, g = v.ajax, w = window, y = w.nav, b = {
            _seen: {},
            _saved: {},
            _saveTimer: null,
            _sendTimer: null,
            _cleanTimer: null,
            LS_ADS_EVENTS: "ads.events",
            postsGetRaws: function (e) {
                e = t(e);
                var i, a = e.id || "", r = n(e, "data-copy") || "", o = {};
                if ("block_" === a.substr(0, 6)) {
                    o[a] = 1, o.block = a.substr(6);
                    var l = n(e, "data-contain");
                    l && (l = l.split(","), l.forEach(function (e) {
                        e = e.split(":"), o[e[0]] = s(e[1]) || 1
                    }))
                } else (i = a.match(/^wall(-?\d+_\d+)$/)) && (o[i[1]] = 1, (i = r.match(/^(-?\d+_\d+)$/)) && (o[i[1]] = -1));
                var c = n(e, "data-ad-view");
                return c && (o["ad_" + c] = 1), o.index = indexOf(domPN(e).children, e) - 1, o
            },
            seen: function (e) {
                var t, n, i, a, r, o, s, l, c = window, u = c.vk;
                if (u.id && e.length) {
                    window._postsExtras || (window._postsExtras = {});
                    for (t in e) {
                        s = e[t].index, l = e[t].block;
                        for (n in e[t]) "index" != n && "block" != n && (a = e[t][n], r = b._seen[n], o = b._saved[n], -1 == o || -1 == r || 1 == a && (o || r) || (i = b._seen[n] = a, _postsExtras[n] = {
                            index: s,
                            block: l
                        }))
                    }
                    i && (clearTimeout(b._saveTimer), b._saveTimer = setTimeout(b.save, 2500), clearTimeout(b._sendTimer), b._sendTimer = setTimeout(b.send, 5e3))
                }
            },
            save: function () {
                if (!i() || a(b._seen)) return b._seen;
                var e, t, n, c, u, d = window, f = d.vk,
                    p = Math.floor((f.ts + Math.floor((r() - f.started) / 1e3)) / 3600), _ = o("posts_sent") || {},
                    m = o("posts_seen") || {}, h = o("posts_extras") || {};
                window._postsExtras || (window._postsExtras = {});
                for (t in b._seen) u = b._seen[t], _postsExtras[t] && (h[t] = {
                    index: _postsExtras[t].index,
                    block: _postsExtras[t].block
                }, delete window._postsExtras[t]), n = t.split("_"), "ad" !== n[0] && "block" !== n[0] && (n[0] = s(n[0]), n[1] = s(n[1])), c = (_[n[0]] || {})[n[1]], n[0] != f.id && (!c || -1 == u && c > 0) && (m[n[0]] || (m[n[0]] = {}), (!m[n[0]][n[1]] || -1 == u && m[n[0]][n[1]] > 0) && (e = m[n[0]][n[1]] = p * u)), b._saved[t] = u;
                b._seen = {}, e && (l("posts_seen", m), l("posts_extras", h))
            },
            getSeenData: function () {
                var e, a, r, l = {}, c = {}, u = [];
                if (i()) l = o("posts_seen"), c = o("posts_extras") || {}; else {
                    r = b.save();
                    for (e in r) {
                        var d = r[e], f = e.split("_");
                        f[0] = s(f[0]), f[0] && (f[1] = s(f[1])), l[f[0]] || (l[f[0]] = {}), (!l[f[0]][f[1]] || -1 == d && l[f[0]][f[1]] > 0) && (l[f[0]][f[1]] = d)
                    }
                }
                for (e in l) {
                    r = [];
                    for (a in l[e]) {
                        var p = l[e][a] > 0 ? a : -a, _ = c[e + "_" + a],
                            m = _ ? (":" + (_.index || "") + ":" + (_.block || "")).replace(/:+$/, "") : "";
                        "block" !== e || cur._pstatbref || (cur._pstatbref = n(t(e + "_" + a), "data-ref")), r.push(p + m)
                    }
                    r.length && u.push(e + "_" + r.join(","))
                }
                return u.length ? {seen: l, data: u.join(";")} : ""
            },
            onSend: function (e) {
                var t, n;
                if (!i()) return c(b._saved, b._seen);
                var t, n, r = o("posts_seen") || {}, s = o("posts_sent") || {};
                for (t in e) {
                    for (n in e[t]) s[t] || (s[t] = {}), -1 != s[t][n] && (s[t][n] = e[t][n]), (r[t] || {})[n] && delete r[t][n];
                    r[t] && a(r[t]) && delete r[t]
                }
                l("posts_seen", r), l("posts_sent", s), clearTimeout(b._cleanTimer), b._cleanTimer = setTimeout(b.clean, 1e4)
            },
            send: function () {
                var e = window, t = e.cur, n = window, i = n.vk, a = b.getSeenData();
                if (a.data) {
                    if (!i.id) return b.clear();
                    var r = "";
                    t && t.module ? r = t.module : y && "/feed" == y.cur && (r = "feed");
                    var o = {_ajax: 1, act: "ping", _pstat: a.data, _pstatref: r};
                    t._pstatbref && (o._pstatbref = t._pstatbref), g.post("/", o, {
                        onDone: function () {
                            b.onSend(a.seen)
                        }
                    }), delete t._pstatbref
                }
            },
            clean: function () {
                var e, t, n, i = window, s = i.vk, c = Math.floor((s.ts + Math.floor((r() - s.started) / 1e3)) / 3600),
                    u = o("posts_sent") || {};
                for (e in u) {
                    for (t in u[e]) n = u[e][t], c - (n > 0 ? n : -n) > 24 && delete u[e][t];
                    a(u[e]) && delete u[e]
                }
                l("posts_sent", u), b.cleanAdsEvents()
            },
            clear: function () {
                l("posts_seen", {}), l("posts_sent", b._saved = b._seen = {}), l(b.LS_ADS_EVENTS, b._lsAdsEvents = {})
            },
            getStatsObj: function (e) {
                return e = t(e), u("_stats_cont", e) ? e : d("_stats_cont", e)
            },
            getAdsEvents: function () {
                var e = b._lsAdsEvents;
                return e || (e = b._lsAdsEvents = o(b.LS_ADS_EVENTS) || {}), e
            },
            cleanAdsEvents: function () {
                var e = b.getAdsEvents(), t = (new Date).getTime() / 1e3 | 0, n = 3600, i = !1;
                f(e, function (a, r) {
                    t - r >= n && (delete e[a], i = !0)
                }), i && l(b.LS_ADS_EVENTS, e)
            },
            checkPixelEvent: function (e, t) {
                var n = e.getAttribute("data-ad-block-uid"), i = -1 !== indexOf(["load", "impression"], t);
                if (!n || !i) return !0;
                try {
                    var a = h("" + t + n), r = b.getAdsEvents();
                    if (r[a]) return !1;
                    var o = (new Date).getTime() / 1e3 | 0;
                    r[a] = o, l(b.LS_ADS_EVENTS, r)
                } catch (s) {
                    try {
                        console.log(s.message)
                    } catch (c) {
                    }
                }
                return !0
            },
            getPixelElements: function (e, t) {
                var i = [];
                return f(p(t, e), function () {
                    n(this, "data-src") && i.push(this)
                }), i
            },
            sendPixels: function (e) {
                f(e, function () {
                    n(this, "src", n(this, "data-src")), n(this, "data-src", !1), _("_cntr", this)
                })
            },
            viewed: function (e) {
                if (e = b.getStatsObj(e)) {
                    var t = b.getPixelElements(e, "_cntr_view");
                    t.length && b.checkPixelEvent(e, "impression") && b.sendPixels(t)
                }
            },
            clicked: function (e) {
                if (e = b.getStatsObj(e)) {
                    n(e, "data-clicked", "1");
                    var t = b.getPixelElements(e, "_cntr_click");
                    t.length && b.sendPixels(t), m()
                }
            }
        };
    b._sendTimer || (b._sendTimer = setTimeout(b.send, 1e4)), window.pStats = b
}, function () {
    function e(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var t = window, n = t.throttle, i = t.onDOMReady, a = t.addEvent, r = t.lsSet, o = t.lsGet, s = t.befall,
        l = t.hasClass, c = (t.clog, t.domCA), u = t.scrollGetY, d = t.getCh, f = t.nav, p = t.page, _ = t.getCw,
        m = t.ajax, h = t.extend, v = function () {
            var t, g, w, y, b, k = 1e3, M = 60 * k, C = .5, S = .25, T = .5 * k, E = .5 * k, A = .5 * k, x = 5 * M,
                P = 2.5 * k, I = 10 * k, B = 6 * k, H = 20 * k, N = 30 * k, O = 5 * k, L = 6 * M, D = 100,
                j = "_feedAssistanceStatsType", q = "_feedAssistanceStatsIdled", R = "_feedAssistanceStatsModule",
                z = "_feedAssistanceStatsStarted", F = "_feedAssistanceStatsProcessed", U = "_feedAssistanceStatsEventTs",
                W = "_feedAssistanceStatsCachedY", $ = "_feedAssistanceStatsCachedX", V = "_feedAssistanceStatsLeft",
                X = "_feedAssistanceStatsHeight", Y = "_feedAssistanceStatsWidth", G = "_feedAssistanceStatsTop",
                Q = "_feedAssistanceStatsBottom", K = "_feedAssistanceStatsParentViewableX",
                J = "BLOCK_TYPE_RECOMMENDED_SLIDER", Z = "BLOCK_TYPE_RECOMMENDED_CARD", et = "BLOCK_TYPE_DEFAULT",
                tt = "view_block", nt = "show_user_rec", it = "open_user", at = "add_friend", rt = "click",
                ot = (t = {}, e(t, J, tt), e(t, Z, nt), t), st = (g = {}, e(g, J, E), e(g, Z, A), g), lt = "feed_other",
                ct = "feedAssistance", ut = (w = {}, e(w, Sn(J, tt), function (e) {
                    return Rn(tt, "friends_recomm", e)
                }), e(w, Sn(Z, nt), function (e) {
                    return Rn(nt, e)
                }), e(w, Sn(Z, it), function (e) {
                    return Rn(rt, e, "user_rec")
                }), w), dt = (y = {}, e(y, rt, function (e, t) {
                    var n = qn(e);
                    return [n, Date.now(), t].join("|")
                }), e(y, nt, function (e) {
                    var t = qn(e);
                    return [t, jn(e), domChildIndex(e), Dn(e)].join("|")
                }), e(y, tt, function (e, t) {
                    return [e, jn(t), domChildIndex(t), Dn(t)].join("|")
                }), y), ft = "feedAssistanceStat.events", pt = "feedAssistanceStat.idled", _t = "/feed",
                mt = "assistance_stats", ht = [], vt = [], gt = Date.now(), wt = 0, yt = 0, bt = !1, kt = null, Mt = null,
                Ct = null, St = null, Tt = null, Et = [], At = [];
            xt();

            function xt() {
                a(window, "blur", Ut), a(window, "focus", Wt), i(function () {
                    setTimeout(Ht, 500)
                }), a(window, "scroll", function () {
                    var e = u(), t = d();
                    zt(e, t)
                }), f.onBeforeGo(function () {
                    return $t()
                }), p.onChange(function () {
                    return Vt()
                })
            }

            function Pt(e) {
                At.push(e)
            }

            function It(e) {
                In(At, e)
            }

            function Bt() {
                var e = [];
                each(At, function () {
                    e = e.concat(geByClass(this))
                }), each(e, function () {
                    Nt(this, "feed")
                })
            }

            function Ht() {
                Bt();
                var e = yn();
                e.length && (hn(e), bn()), Dt(), sn()
            }

            function Nt(e, t) {
                !e[j] && kn(e) && (e[j] = Rt(e), e[R] = t, ht.push(e))
            }

            function Ot(e, t) {
                e[j] = Rt(e), e[R] = t, ht.push(e)
            }

            function Lt(e, t) {
                e[K] = t
            }

            function Dt() {
                var e = u(), t = d();
                Gt(e, t)
            }

            function jt(e, t) {
                var n = t[j] || Rt(t), i = Sn(n, e), a = Bn(i), r = {type: e, data: a(t)};
                Kt(r)
            }

            function qt(e) {
                Kt(e)
            }

            function Rt(e) {
                return e[j] ? e[j] : l("feedAssistance", e) ? J : l("prettyCard_friend", e) ? Z : l("prettyCard__photo", e) ? Z : l("prettyCard__bodyLink", e) ? Z : et
            }

            function zt(e, t) {
                var n = zt, i = e || u(), a = t || d();
                Gt(i, a), bt ? (clearTimeout(n.timer), n.timer = setTimeout(Ft, 150)) : (bt = !0, on(), tn())
            }

            function Ft() {
                on(), rn(), bt = !1
            }

            function Ut() {
                on(), pn(), ln()
            }

            function Wt() {
                vt.forEach(function (e) {
                    e[z] = Date.now()
                }), vn(null), gn(null), rn(), ln(), sn()
            }

            function $t() {
                on(), Xt(), bt = !0
            }

            function Vt() {
                Bt(), Dt()
            }

            function Xt() {
                Ln(vt), Et = Et.concat(Cn(vt)), Nn(vt), vt = []
            }

            function Yt() {
                ht.forEach(function (e) {
                    e[W] = !1, e[$] = !1
                })
            }

            function Gt(e, t) {
                var n = [];
                ht.forEach(function (i) {
                    return Pn(i) ? void n.push(i) : void(Jt(i, e, t) ? (i[z] = Date.now(), vt.push(i), v.onStartViewElement(i)) : Zt(i, e, t) ? (i[q] ? delete i[q] : (Qt(i), v.onEndViewElement(i)), delete i[z]) : en(i) && (Qt(i), v.onViewedElement(i)))
                }), n.forEach(function (e) {
                    In(ht, e), v.onStopTrackElement(e)
                })
            }

            function Qt(e) {
                In(vt, e), On(e), Kt(xn(e)), Hn(e)
            }

            function Kt(e) {
                e && Et.push(e)
            }

            function Jt(e, t, n) {
                return !e[z] && nn(e, C, t, n) && an(e, C)
            }

            function Zt(e, t, n) {
                return e[z] && (!nn(e, S, t, n) || !an(e, S))
            }

            function en(e) {
                if (!e[z]) return !1;
                var t = Math.min(x, Date.now() - e[z]), n = An(e);
                return t > n
            }

            function tn() {
                wt = ge("vk_head").offsetHeight, yt = 0
            }

            function nn(e, t, n, i) {
                if (!e) return !1;
                e[W] || (e[W] = !0, e[X] = e.offsetHeight, e[G] = n + e.getBoundingClientRect().top, e[Q] = e[G] + e[X]);
                var a = i - wt - yt, r = n + wt, o = n + i - yt, s = e[X], l = e[G], c = e[Q],
                    u = c > r && o > l ? Math.min(o, c) - Math.max(r, l) : 0;
                return u >= Math.min(a * t, s * t)
            }

            function an(e, t) {
                var n = e[K], i = 0;
                n && !n[$] && ~ht.indexOf(n) && (n[$] = !0, n[Y] = n.clientWidth, n[V] = n.getBoundingClientRect().left + n.clientLeft), e[$] || (e[$] = !0, e[Y] = e.offsetWidth);
                var a = n ? n[Y] || n.clientWidth : _(), r = n ? n[V] || n.getBoundingClientRect().left + i : i, o = a + r,
                    s = e[Y], l = e.getBoundingClientRect().left, c = s + l, u = s * t, d = s * Math.max(0, 1 - t);
                return l + u >= r && o >= c - d
            }

            function rn() {
                kt = setTimeout(cn, P), Mt = setTimeout(un, I), Ct = setTimeout(dn, B), St = setTimeout(fn, H)
            }

            function on() {
                clearTimeout(kt), clearTimeout(Mt), clearTimeout(Ct), clearTimeout(St)
            }

            function sn() {
                Tt = setInterval(_n, N)
            }

            function ln() {
                clearInterval(Tt)
            }

            function cn() {
                Et.length && vn(Et)
            }

            function un() {
                hn(Et), Et = [], vn(null)
            }

            function dn() {
                vt.length && (gn(Cn(vt)), Ct = setTimeout(dn, O))
            }

            function fn() {
                clearTimeout(Ct), Ln(vt), hn(Cn(vt)), Nn(vt), vt.forEach(function (e) {
                    e[q] = !0
                }), vt = [], gn(null)
            }

            function pn() {
                Ln(vt), hn(Et.concat(Cn(vt))), Nn(vt), Et = [], vt = []
            }

            function _n() {
                Et.length >= D && un()
            }

            function mn(e) {
                var t = {};
                return each(e, function () {
                    var e = t[this.type];
                    e ? t[this.type].push(this.data) : t[this.type] = [this.data]
                }), t
            }

            function hn(e) {
                if (e && e.length) {
                    var t = {act: mt};
                    t = h(t, mn(e)), m.post(_t, t)
                }
            }

            function vn(e) {
                wn(ft, e)
            }

            function gn(e) {
                wn(pt, e)
            }

            function wn(e, t) {
                var n = o(e) || {};
                t ? n[gt] = t : delete n[gt], r(e, n)
            }

            function yn() {
                var e = yn, t = [], n = o(ft) || {}, i = o(pt) || {};
                return e.iterator || (e.iterator = function (e) {
                    return function (n) {
                        Mn(n) && (t = t.concat(e[n]))
                    }
                }), Object.keys(n).forEach(e.iterator(n)), Object.keys(i).forEach(e.iterator(i)), t
            }

            function bn() {
                var e = bn, t = o(ft) || {}, n = o(pt) || {};
                e.iterator || (e.iterator = function (e) {
                    return function (t) {
                        Mn(t) && delete e[t]
                    }
                }), Object.keys(t).forEach(e.iterator(t)), Object.keys(n).forEach(e.iterator(n)), r(ft, t), r(pt, n)
            }

            function kn(e) {
                return !~ht.indexOf(e)
            }

            function Mn(e) {
                var t = Number(e);
                return t !== gt && Date.now() - t >= L
            }

            function Cn(e) {
                var t = [];
                return e.forEach(function (e) {
                    var n = xn(e);
                    n && t.push(n)
                }), t
            }

            function Sn(e, t) {
                return e + "_" + t
            }

            function Tn(e) {
                return ot[e[j]]
            }

            function En(e, t) {
                var n = ut[Sn(e[j], t)];
                return n(e)
            }

            function An(e) {
                var t = Rt(e);
                return st[t] || T
            }

            function xn(e) {
                if (Pn(e)) return null;
                if (!en(e)) return null;
                var t = Tn(e);
                return {type: t, data: En(e, t)}
            }

            function Pn(e) {
                return e[F] || !document.body.contains(e)
            }

            function In(e, t) {
                var n = e.indexOf(t);
                n >= 0 && e.splice(n, 1)
            }

            function Bn(e) {
                return ut[e]
            }

            function Hn(e) {
                Pn(e) || en(e) && (e[F] = !0)
            }

            function Nn(e) {
                each(e, function () {
                    Hn(this)
                })
            }

            function On(e) {
                e[U] = Date.now()
            }

            function Ln(e) {
                e.forEach(On)
            }

            function Dn(e) {
                return l(e, ct) || (e = c(e, "." + ct)), e ? domData(e, "from-ref") || lt : lt
            }

            function jn(e) {
                return e[U] || e[z] || (new Date).getTime()
            }

            function qn(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "uid";
                return intval(domData(e, t))
            }

            function Rn(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                return dt[e].apply(dt, n)
            }

            return b = {
                register: Nt,
                forceRegister: Ot,
                onScroll: n(zt, 50),
                onStartViewElement: s("element"),
                onEndViewElement: s("element"),
                onStopTrackElement: s("element"),
                onViewedElement: s("element"),
                onBeforePageChange: $t,
                onPageChanged: Vt,
                getElementType: Rt,
                registerElements: Bt,
                registerTrackingCls: Pt,
                unregisterTrackingCls: It
            }, e(b, "unregisterTrackingCls", It), e(b, "setParenViewableX", Lt), e(b, "forceProcessTrack", Dt), e(b, "dispatchElementEvent", jt), e(b, "dispatchEvent", qt), e(b, "clearElemsCache", Yt), e(b, "serializeEventData", Rn), e(b, "_debug", function () {
                return {started: vt, tracking: ht, events: Et, blindTop: wt, blindBottom: yt}
            }), e(b, "BLOCK_TYPE_RECOMMENDED_SLIDER", J), e(b, "BLOCK_TYPE_RECOMMENDED_CARD", Z), e(b, "EVENTS", {
                EVENT_OPEN_USER: it,
                EVENT_VIEW_BLOCK: tt,
                EVENT_VIEW_RECOMMENDED_CARD: nt,
                EVENT_ACCEPT_FRIEND: at
            }), b
        }();
    window.FeedAssistanceStats = v
}, function () {
    var e = window, t = e.hide, n = e.ge, i = e.ce, a = e.geByClass1, r = e.val, o = e.show, s = e.remove,
        l = e.addClass, c = e.removeClass, u = window, d = u.geo, f = window, p = f.ajax, _ = function () {
            var e = null, u = !1;

            function f(e) {
                p.post("/places.php", {
                    _ajax: 1,
                    act: "map_label",
                    lat: e.latitude,
                    lng: e.longitude
                }, {
                    onDone: function (n) {
                        t("geo_waiting"), m(e, n)
                    }, onFail: g
                })
            }

            function m(e, t) {
                var s = n("medias_map"), l = n("attached_wrap");
                s || (s = i("div", {id: "medias_map", className: "pi_medias"}), l.appendChild(s));
                var c = e.latitude, u = e.longitude, d = (window.devicePixelRatio >= 1.5 ? 2 : 1, a("medias_map", s)),
                    f = t ? '<div class="medias_map_close"><i class="i_close">&nbsp;</i></div><div class="medias_map_label">' + t + "</div>" : "",
                    p = "", _ = c + "_" + u + "_0", m = '<input type="hidden" name="map" value="' + _ + '">';
                if (d) r(d, f + p + m); else {
                    var h = '<div class="meias_row medias_map" onclick="geoloc.remove();">' + f + p + m + "</div>";
                    r(s, h)
                }
                o(s)
            }

            function h() {
                e = null, s("medias_map")
            }

            function v(t) {
                t && t.coords && (e = {latitude: +t.coords.latitude || 0, longitude: +t.coords.longitude || 0}, f(e))
            }

            function g() {
                _.remove(), t("geo_waiting")
            }

            return {
                toggle: function () {
                    u ? _.remove() : _.add()
                }, add: function (t) {
                    (t || !u) && (u = !0, l("cp_geo_btn_sel", "geo_btn"), t && (t.latitude || t.longitude) ? (e = {
                        latitude: +t.latitude || 0,
                        longitude: +t.longitude || 0
                    }, m(e, t.label)) : (d.getCurrentPosition(v, g), o("geo_waiting")))
                }, remove: function () {
                    u && (u = !1, c("cp_geo_btn_sel", "geo_btn"), h())
                }, init: function (e) {
                    return e && _.add(e), d.init()
                }
            }
        }();
    window.geoloc = _
}, function (e, t, n) {
    n(6), n(87), n(15), n(33), n(51), n(64)
}, function () {
    Object.assign(Oval, {setValue: e});

    function e(e, t) {
        e && (e.innerText = t, e.classList.toggle("oval_hidden", Oval_isHidden(t)))
    }
}, function () {
    var e = r(['\n    <div class="', '">\n      ', "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n  "], ['\n    <div class="', '">\n      ', "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    </div>\n  "]),
        t = r(['\n    <div class="', '">\n      ', "\n    </div>\n  "], ['\n    <div class="', '">\n      ', "\n    </div>\n  "]),
        n = r(['\n    <div class="mailScrap__empty mailScrap__empty_', '">\n      ', "\n    </div>\n  "], ['\n    <div class="mailScrap__empty mailScrap__empty_', '">\n      ', "\n    </div>\n  "]),
        i = r(["\n    <div ", ">\n      ", "\n    </div>\n  "], ["\n    <div ", ">\n      ", "\n    </div>\n  "]);

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function r(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    function o(t) {
        var n = t.scrap, i = "peer" === n, a = y(n), r = i ? _("before") : "", o = _("after"), l = _("center"),
            c = s(n), u = v(n), d = i ? uCurConvoTyping() : "", f = i ? w() : "";
        return q.html(e, a, r, c, u, o, d, f, l)
    }

    function s(e) {
        var t = q["class"]("mailScrap__items", a({}, e, !0)), n = l(e);
        return Brick({mix: t, inner: n})
    }

    function l(e) {
        for (var t = store.mail, n = t.cur, i = t.msgs, a = t.scraps[e], r = a.length, o = [], s = !1, l = 0; r > l; l++) {
            if (l > 0 && "peer" === e && !s) {
                var u = i[a[l - 1]], d = i[a[l]];
                if (d.isUnread && !u.isUnread && d.authorId !== n.viewerId) {
                    s = !0, o.push(c(e, a[l], !0));
                    continue
                }
            }
            o.push(c(e, a[l]))
        }
        return q.list(o)
    }

    function c(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1, i = store.mail, a = i.cur, r = "";
        if ("folder" === e) if ("important" === a.folder) {
            var o = t;
            r = u(o)
        } else {
            var s = t;
            r = d(s)
        } else if ("search" === e) if ("peers" === a.tab) {
            var l = t;
            r = f(l)
        } else {
            var c = t;
            r = u(c)
        } else if ("peer" === e) {
            var _ = t;
            r = p(_, n)
        }
        return r
    }

    function u(e) {
        var t = store.mail.msgs[e].peerId;
        return uConvo(t, e)
    }

    function d(e) {
        return uConvo(e, "last")
    }

    function f(e) {
        return uConvo(e)
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        return uMsg({msgId: e, withDivider: t})
    }

    function _(e) {
        var n = q["class"]("mailScrap__loading", a({}, e, !0)), i = Spinner();
        return q.html(t, n, i)
    }

    function m(e) {
        var t = store.mail, n = t.cur, i = t.scraps, a = t.reached, r = !1;
        switch (e) {
            case"peer":
                var o = n.peerId, s = t.rolls, l = s.peer[o], c = l ? l.length : 0;
                0 === c && a.peer.after[o] && a.peer.before[o] && (r = !0);
                break;
            case"folder":
                0 === i.folder.length && a.folder[n.folder] && (r = !0);
                break;
            case"search":
                0 === i.search.length && a.search[n.tab][n.query] && (r = !0)
        }
        return r
    }

    function h(e) {
        var t = window.lang, n = store.mail, i = n.cur, a = "";
        switch (e) {
            case"peer":
                a = t.mobile_mail_history_is_empty;
                break;
            case"folder":
                var r = {
                    all: t.mobile_mail_no_messages,
                    important: t.mobile_mail_no_important,
                    unread: t.mobile_mail_no_unreaded,
                    unrespond: t.mobile_mail_sublist_empty
                };
                a = r[i.folder];
                break;
            case"search":
                "msgs" === i.tab && (a = t.mobile_mail_not_found), "peers" === i.tab && (a = t.mobile_mail_no_peers)
        }
        return a
    }

    function v(e) {
        var t = h(e);
        return q.html(n, e, t)
    }

    function g() {
        var e = (window.lang, store.mail);
        return e.cur.notification || ""
    }

    function w() {
        var e = store.mail, t = e.cur.notification || "", n = q.onClick("MailScrap.clearSystemMessage2");
        return q.html(i, n, t)
    }

    function y(e) {
        var t, n = store.mail, i = n.cur, r = n.reached, o = !0, s = !1, l = !1;
        if ("peer" === e) {
            var c = i.peerId, u = n.scraps.peer, d = u.length, f = n.rolls.peer[c] || [];
            o = r.peer.before[c] && u[0] === f[0], s = last(u) === last(f) && r.peer.after[c], 0 === d && (s = !0), l = c && !!n.peers[c].systemMessageCode
        } else if ("folder" === e) s = r.folder[i.folder]; else if ("search" === e) {
            {
                var p = i.tab;
                i.query
            }
            if ("peers" === p) {
                var _ = n.scraps.search.length;
                s = r.search[i.tab][i.query] || _ > 0
            } else s = r.search[i.tab][i.query]
        }
        return q["class"]("mailScrap", (t = {}, a(t, e, !0), a(t, "empty", m(e)), a(t, "systemMessage", l), a(t, "reachedBefore", o), a(t, "reachedAfter", s), a(t, "tab", "search" === e ? i.tab : !1), t))
    }

    window.MailScrap = o, window.MailScrap_class = y, window.MailScrap_ItemsInner = l, window.MailScrap_EmptyInner = h, window.MailScrap_SystemMessageInner = g, window.MailScrap_Item = c
}, function () {
    function e(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    window.Icon = t;

    function t(t) {
        var n, i = t.icon;
        return Brick({
            mix: q["class"](t.mix, "icon", (n = {}, e(n, i, !0), e(n, "active", t.active), e(n, "blue", t.blue), e(n, "bluer", t.bluer), e(n, "dark", t.dark), e(n, "selected", t.selected), e(n, "small", t.small), e(n, "white", t.white), n)),
            url: t.url,
            attrs: t.attrs
        })
    }
}, function () {
    var e = l(['\n      <div class="uMailWrite uMailWrite_unableToWrite">\n        ', '\n        <div class="uMailWrite__unableToWriteText">\n          ', "\n        </div>\n      </div>\n    "], ['\n      <div class="uMailWrite uMailWrite_unableToWrite">\n        ', '\n        <div class="uMailWrite__unableToWriteText">\n          ', "\n        </div>\n      </div>\n    "]),
        t = l(['\n    <form\n      class="uMailWrite ', '"\n      method="POST"\n      action="/mail?act=send&to=', "&hash=", "&from=dialog", '"\n      ', '\n    >\n      <div class="uMailWrite__toBottom" ', ">", "</div>\n      ", "\n      ", "\n      ", "\n    </form>\n  "], ['\n    <form\n      class="uMailWrite ', '"\n      method="POST"\n      action="/mail?act=send&to=', "&hash=", "&from=dialog", '"\n      ', '\n    >\n      <div class="uMailWrite__toBottom" ', ">", "</div>\n      ", "\n      ", "\n      ", "\n    </form>\n  "]),
        n = l(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "]),
        i = l(['\n    <div class="uMailWrite__main">\n      <div class="uMailWrite__button uMailWrite__button_attach">', '</div>\n      <div class="uMailWrite__button uMailWrite__button_stickers" ', ">", "", '</div>\n      <button class="', '" type="submit">', "", "", '</button>\n      <div class="uMailWrite__textareaContainer">\n        <textarea\n          class="uMailWrite__textarea"\n          name="message"\n          placeholder="', '"\n          maxlength="4096"\n          ', "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n        >", '</textarea>\n        <div class="uMailWrite__textareaGhost">', "</div>\n      </div>\n    </div>\n  "], ['\n    <div class="uMailWrite__main">\n      <div class="uMailWrite__button uMailWrite__button_attach">', '</div>\n      <div class="uMailWrite__button uMailWrite__button_stickers" ', ">", "", '</div>\n      <button class="', '" type="submit">', "", "", '</button>\n      <div class="uMailWrite__textareaContainer">\n        <textarea\n          class="uMailWrite__textarea"\n          name="message"\n          placeholder="', '"\n          maxlength="4096"\n          ', "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n        >", '</textarea>\n        <div class="uMailWrite__textareaGhost">', "</div>\n      </div>\n    </div>\n  "]),
        a = l(['\n    <div class="', ' _preventMenuOpen">\n      ', "\n      ", "\n      ", "\n    </div>\n  "], ['\n    <div class="', ' _preventMenuOpen">\n      ', "\n      ", "\n      ", "\n    </div>\n  "]),
        r = l(['\n    <div class="uMailWrite__attachedMsgs">\n      ', "\n      ", '\n      <div class="uMailWrite__attachedMsgsText">', "</div>\n    </div>\n  "], ['\n    <div class="uMailWrite__attachedMsgs">\n      ', "\n      ", '\n      <div class="uMailWrite__attachedMsgsText">', "</div>\n    </div>\n  "]),
        o = l(['\n    <input type="hidden" name="attached_messages" value="', '" />\n  '], ['\n    <input type="hidden" name="attached_messages" value="', '" />\n  ']);

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    function c() {
        var n = window.lang, i = store.mail, a = i.cur.peerId;
        if (!a) return '<form class="uMailWrite"></form>';
        var r = i.peers[a];
        if (r.unableToWrite) {
            var o = r.kickedMessage || n.mobile_msg_mail_privacy_error,
                s = Icon({mix: "uMailWrite__unableToWriteIcon", icon: "warning"});
            return q.html(e, s, o)
        }
        var l = q.onSubmit("uMailWrite._onSubmit", "event", "this"), c = q.onClick("uMailWrite.onToBottomClick"),
            _ = f(a), m = p(a), h = d(a), v = u(), g = r.canAttachMoney ? "uMailWrite_canAttachMoney" : "";
        return q.html(t, g, a, r.hashSend, i.cur.communityParam, l, c, v, _, m, h)
    }

    function u() {
        var e = store.mail, t = e.cur, i = e.peers, a = i[t.peerId] ? i[t.peerId].countUnread : null,
            r = a ? Oval({mix: "uMailWrite__toBottomValue", value: a}) : "",
            o = Icon({mix: "uMailWrite__toBottomIcon", icon: "arrowDown"});
        return q.html(n, r, o)
    }

    function d(e) {
        var t = lang, n = store.mail, a = n.cur, r = n.queue, o = q.onMouseDown("uMailWrite._onStickersClick", "event"),
            s = n.peers[e], l = a.groupId, u = Math.abs(l), d = l ? "&community=" + u : "", f = Unfold({
                icon: "attach",
                position: "bottomLeft",
                items: [{text: a.inlineUploadHTML, icon: "camera"}, {
                    text: t.mobile_attachments_add_photo_vk,
                    url: "/attachments?act=choose_photo&target=mail" + e + d,
                    icon: "photo"
                }, {
                    text: t.mobile_attachments_add_video,
                    url: "/attachments?act=choose_video&target=mail" + e + d,
                    icon: "video"
                }, {
                    text: t.mobile_attachments_add_audio,
                    url: "/attachments?act=choose_audio&target=mail" + e + d,
                    icon: "audio"
                }, {
                    text: t.mobile_attachments_add_doc,
                    url: "/attachments?act=choose_doc&target=mail" + e + d,
                    icon: "doc"
                }, s.canAttachMoney ? {
                    text: t.mobile_attachments_add_money,
                    url: "/attachments?act=attach_money&target=mail" + e + d,
                    icon: "money"
                } : null]
            }), p = q.onKeyUp("uMailWrite._onKeyUp"), _ = q.onInput("uMailWrite._onInput", "event", "this"),
            m = q.onKeyDown("uMailWrite._onKeyDown", "event"), h = q.onFocus("uMailWrite._onFocus", "event"),
            v = q.onBlur("uMailWrite._onBlur", "event"), g = Icon({mix: "uMailWrite__button_send_icon", icon: "send"}),
            w = Icon({mix: "uMailWrite__button_send_icon", icon: "send", active: !0}),
            y = Icon({mix: "uMailWrite__button_send_icon", icon: "spinner"}),
            b = Icon({mix: "uMailWrite__button_stickers_icon", icon: "sticker"}),
            k = Icon({mix: "uMailWrite__button_stickers_icon", icon: "sticker", active: !0}),
            M = s.attachmentsHTML.length, C = a.msgAttached[a.peerId], S = C && C.length,
            T = !!(r[a.peerId] || []).length,
            E = q["class"]("uMailWrite__button", {send: !0, send_active: !!(M > 150 || S), loading: T}),
            A = a.texts[a.peerId] || "", x = a.textsHTML[a.peerId] || "";
        return requestAnimationFrame(function () {
            return c._onRedraw()
        }), q.html(i, f, o, b, k, E, g, w, y, t.mobile_mail_message_placeholder, h, p, _, m, h, v, A, x)
    }

    function f() {
        var e = "";
        return Brick({mix: "uMailWrite__popupStickers _preventMenuOpen", inner: e})
    }

    function p(e) {
        var t = store.mail, n = t.cur, i = t.peers[e], r = i.attachmentsHTML || null,
            o = q["class"]("uMailWrite__attachments", s({}, e, !0)), l = n.msgAttached[e] || [], u = l.length, d = "",
            f = "";
        if (u > 0) {
            var p = l.join(";");
            d = _(u), f = m(p)
        }
        return requestAnimationFrame(function () {
            return c._onAttachmentsRedraw()
        }), q.html(a, o, f, d, r)
    }

    function _(e) {
        var t = window.lang, n = q.onClick("uMailWrite.onAttachedMsgsRemove"),
            i = Icon({mix: "uMailWrite__attachedMsgsIcon", icon: "msgMini"}),
            a = Icon({mix: "uMailWrite__attachedMsgsRemove", icon: "close9", attrs: n}),
            o = langNumeric(e, t.mobile_mail_messages);
        return q.html(r, a, i, o)
    }

    function m(e) {
        return q.html(o, e)
    }

    window.uMailWrite = c, window.uMailWrite_Attachments = p, window.uMailWrite_ToBottomInner = u
}, function () {
    var e = window, t = e.langNumeric, n = e.show, i = e.hide, a = function () {
        var e = document.getElementsByClassName("gift_create_post_counter");

        function a(a) {
            var r = e[0];
            if (r) {
                var o = a.value.length, s = a.maxLength;
                if (o > s) a.value = a.value.substr(0, s); else if (o > s / 2) {
                    var l = Math.max(s - o, 0);
                    r.innerText = t(l, lang.text_N_symbols_remain), n(r)
                } else i(r)
            }
        }

        return {counter: a}
    }();
    window.GiftsSendFormCounter = a
}, function () {
    var e = window, t = e.ge, n = e.each, i = e.geByTag, a = e.intval, r = e.gpeByClass, o = e.geByTag1, s = e.attr,
        l = e.val, c = e.geByClass, u = e.isUndefined, d = e.geByClass1, f = e.toggle, p = e.isVisible,
        _ = e.toggleClass, m = e.show, h = e.cancelEvent, v = e.ce, g = e.setStyle, w = e.parseJSON, y = e.replace,
        b = e.reflow, k = e.after, M = e.addClass, C = e.clog, S = e.uploadFile, T = e.bind, E = e.readFile,
        A = e.append, x = e.before, P = e.srand, I = e.extend, B = e.canUploadFile, H = e.gpeByTag, N = e.submitBtn,
        O = e.removeEvent, L = e.addEvent, D = e.clone, j = e.remove, q = window, R = q.ajax, z = {
            isUploading: !1,
            onRemove: befall(),
            onStart: befall(),
            onError: befall(),
            onComplete: befall(),
            _uploadData: {},
            _uploadQueue: [],
            _readerQueue: [],
            _processUploadQueue: !1,
            _processReaderQueue: !1,
            fallback: function (e, t) {
                var n = window, i = n.post;
                return e && i.add_attach(e, t), !1
            },
            getLastAttachId: function () {
                var e = t("attached_wrap");
                if (!e) return 0;
                var r, o = 0;
                return n(i("input"), function () {
                    if (r = this.name.match(/^attach(\d+)_type$/i)) {
                        var e = a(r[1]);
                        e > o && (o = e)
                    }
                }), o
            },
            refreshAttachIds: function (e) {
                var c = t("attached_wrap");
                if (c) {
                    var u, d = r("mr_x_wrap", e), f = o("input", d),
                        p = a((f && f.name.match(/^attach(\d+)(_type)?$/i) || [])[1]);
                    if (r("mr_timer", e)) {
                        var _ = s("add_post_btn", "data-value");
                        return void(_ && l("add_post_btn", _))
                    }
                    p && n(i("input", c), function () {
                        if (u = this.name.match(/^attach(\d+)(_type)?$/i)) {
                            var e = a(u[1]);
                            e == p ? this.disabled = !0 : e > p && (this.name = "attach" + (e - 1) + (u[2] || ""))
                        }
                    })
                }
            },
            getAttachesCount: function () {
                return (c("mr_x_wrap", "attached_wrap") || []).length
            },
            refreshUploadState: function (e) {
                u(e) && (e = z.getAttachesCount());
                var n = d("mr_timer", "attached_wrap"), i = t("attach_photo_btn"), a = d("pi_medias", "attached_wrap"),
                    r = d("inline_upload", i), o = s(r, "data-max-attaches") || 10;
                f(a, e > 0 || p(n)), _("cp_attach_btn_sel", i, e > 0), r && (r.disabled = e >= o), m("attached_options"), m("attached_flush")
            },
            checkUploading: function (e) {
                return z._processUploadQueue ? h(e) : !0
            },
            attachedPhotoTpl: function (e) {
                return v("div", {
                    id: "upload_item_" + e,
                    className: "medias_thumb thumb_item mr_x_wrap thumb_upload",
                    innerHTML: '<div id="upload_image_' + e + '" class="tu_img"></div><div id="item_progress_wrap_' + e + '" class="tu_progress_wrap"><div id="item_progress_' + e + '" class="tu_progress"></div></div><div id="item_cancel_wrap_' + e + '" class="tu_cancel_wrap" onclick="return mediaUpload.reset(this, event, \'' + e + '\');"><div id="item_cancel_' + e + '" class="tu_cancel"></div></div>'
                })
            },
            onUploadProgress: function (e) {
                var n = this, i = t("item_progress_" + n.id);
                g(i, {width: e.loaded / e.total * 100 + "%", visibility: "visible"})
            },
            onUploadComplete: function (e) {
                var n = this, i = e.target.responseText, a = !1;
                try {
                    a = w(i)
                } catch (r) {
                    a = {error: "ERR_CLIENT_BAD_RESPONSE: bad request response"}
                }
                a.error ? z.onUploadError.call(n, e) : (n.xhr = R.post(n.done_url, {
                    _ajax: 1,
                    _query: i
                }, {
                    onDone: function (e) {
                        var i = t("item_progress_wrap_" + n.id), a = t("upload_image_" + n.id), r = z.getLastAttachId() + 1;
                        if (a) var o = v("img", {
                            id: "upload_image_" + n.id, className: "ph_img", onload: function () {
                                if (y(o, a), n.iw && n.ih) {
                                    if (n.iw > n.ih == o.width > o.height) var e = Math.min(130, Math.floor(75 / n.ih * n.iw)); else var e = Math.min(130, Math.floor(75 / n.iw * n.ih));
                                    g(o, "width", e)
                                }
                                b(o), g(o, "opacity", 1)
                            }, src: e.src
                        });
                        k(v("input", {
                            type: "hidden",
                            name: "attach" + r,
                            value: e.photo_raw
                        }), a), k(v("input", {
                            type: "hidden",
                            name: "attach" + r + "_type",
                            value: "photo"
                        }), a), g(i, "opacity", 0), n.attached = !0, n.delete_url = e.delete_url, z._processUploadQueue || (z.isUploading = !1, z.onComplete())
                    }
                }), M("tu_progress_request", "item_progress_wrap_" + n.id), n.uploaded = !0, z.uploadQueueNext())
            },
            onUploadError: function (e) {
                C("upload error.", e.target.responseText), z.uploadQueueNext(), z.onError()
            },
            uploadFile: function (e) {
                e.xhr = S(e.upload_url, {photo: e.file}, {
                    onProgress: T(z.onUploadProgress, e),
                    onComplete: T(z.onUploadComplete, e),
                    onError: T(z.onUploadError, e)
                })
            },
            readFile: function (e) {
                E(e.file, function (n) {
                    var i = t("upload_image_" + e.id);
                    if (i) var a = v("img", {
                        id: "upload_image_" + e.id, className: "ph_img", onload: function () {
                            y(a, i), e.iw = a.width, e.ih = a.height
                        }, src: n
                    });
                    z.readerQueueNext()
                })
            },
            addFile: function (e) {
                var n = t("attached_wrap"), i = d("pi_medias", n), a = i ? c("medias_thumb", i) : [],
                    r = i ? d("medias_row", i) : null, o = a[a.length - 1], s = z.attachedPhotoTpl(e.id);
                n && (i || (i = v("div", {className: "pi_medias"}), A(i, n)), o ? k(s, o) : r ? x(s, r) : A(s, i), z._processReaderQueue || z.readerQueueNext())
            },
            uploadQueueNext: function () {
                C("next upload"), z._processUploadQueue = !0;
                var e = z.uploadQueueRemove();
                return e ? void z.uploadFile(e) : (C("empty upload"), void(z._processUploadQueue = !1))
            },
            readerQueueNext: function () {
                C("next reader"), z._processReaderQueue = !0;
                var e = z.readerQueueRemove();
                return e ? void z.readFile(e) : (C("empty reader"), void(z._processReaderQueue = !1))
            },
            queueInsert: function (e) {
                var t = P();
                return z.getUploadDataById(t) ? z.queueInsert(e) : (z._uploadData[t] = I(e, {id: t}), z._uploadQueue.push(t), z._readerQueue.push(t), z._uploadData[t])
            },
            uploadQueueRemove: function () {
                var e = z._uploadQueue.shift();
                return e ? z.getUploadDataById(e) : !1
            },
            readerQueueRemove: function () {
                var e = z._readerQueue.shift();
                return e ? z.getUploadDataById(e) : !1
            },
            getUploadDataById: function (e) {
                return z._uploadData[e] || !1
            },
            delUploadDataById: function (e) {
                delete z._uploadData[e]
            },
            start: function (e, i) {
                if (!e || !B()) return z.fallback(e, i);
                var a = e.files, r = e.form || H("form", e), o = N(r), l = t("attach_photo_btn"),
                    c = s(e, "data-upload-url"), u = s(e, "data-done-url"), d = s(e, "data-max-attaches") || 10,
                    f = z.getAttachesCount();
                return c && u ? (n(a, function () {
                    var e = {upload_url: c, done_url: u, file: this, uploaded: !1, attached: !1};
                    return f >= d ? !1 : (z.queueInsert(e), z.addFile(e), void f++)
                }), O(r, "submit", z.checkUploading), L(r, "submit", z.checkUploading), O(o, "click", z.checkUploading), L(o, "click", z.checkUploading), O(l, "click", z.checkUploading), L(l, "click", z.checkUploading), z.refreshUploadState(f), y(D(e), e), z._processUploadQueue || z.uploadQueueNext(), window.isNewMail && z.onStart(), z.isUploading = !0, !1) : z.fallback(e, i)
            },
            reset: function (e, t, n) {
                if (h(t), "/" == n[0]) {
                    R.post(n, {_ajax: 1}), z.refreshAttachIds(e);
                    var i = r("mr_x_wrap", e) || r("mr_timer", e);
                    j(i)
                } else {
                    var a = n, o = z.getUploadDataById(a);
                    if (!o) return !1;
                    o.attached ? o.delete_url && (R.post(o.delete_url, {_ajax: 1}), z.refreshAttachIds(e)) : (o.xhr && o.xhr.abort && o.xhr.abort(), o.loaded || z.uploadQueueNext()), j("upload_item_" + a), z.delUploadDataById(a)
                }
                return z.refreshUploadState(), window.isNewMail && z.onRemove(), !1
            }
        };
    window.mediaUpload = z
}, function (e, t, n) {
    var i = n(32), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = window, s = o.removeEvent, l = o.addEvent, c = o.addClass, u = o.removeClass, d = o.hasClass,
        f = o.getCookie, p = o.setCookie, _ = o.browser, m = o.setDocumentDomain, h = function () {
            m();
            var e = window.audioSubscribe, t = I(), n = !1, i = E("remixaudio_show_alert_today"),
                r = E("remixaudio_show_alert_to_three_month"), o = f("remixaudio_date"), h = !1, v = !1, g = 6e5,
                w = new a["default"](g, {
                    onEnd: function () {
                        x()
                    }
                }), y = E("remixaudio_background_play_time", 1), b = E("remixaudio_background_play_time_limit"), k = 1,
                M = b - y === 0, C = new a["default"](1e3 * b, {
                    tick: 1e3 * k, onTick: function (e) {
                        var t = b - Math.round(e / 1e3);
                        window.audio.playing ? C.start() : C.pause(), b === y + t ? P() : y + t > b ? (P(), p("remixaudio_background_play_time", b, 1)) : p("remixaudio_background_play_time", y + t, 1)
                    }, onEnd: function () {
                        P()
                    }
                }), S = 3e5, T = new a["default"](S, {
                    tick: 1e3, onTick: function () {
                    }, onEnd: function () {
                        n = !0, M ? P() : C.start()
                    }
                });

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = parseInt(f(e), 10);
                return isNaN(n, 10) ? t : n
            }

            function A() {
                var e = geByClass1("audioAttention");
                e && 2 > i && 10 > r && (c(e, "audioAttention_show"), w.start(), p("remixaudio_show_alert_today", ++i, 1), p("remixaudio_show_alert_to_three_month", ++r, 1), 1 === r && p("remixaudio_show_alert_to_three_month_date", o, 93))
            }

            function x() {
                u(geByClass1("audioAttention"), "audioAttention_show"), w.stop()
            }

            function P() {
                M = !0, window.audio.pause(), C.pause(), A()
            }

            function I() {
                var e = _.opera_mini, t = _.opera_mobile, n = _.msie_mobile, i = _.msie_edge, a = _.amigo,
                    r = window.opera | window.opr | navigator.userAgent.indexOf(" OPR/") > -1 | navigator.userAgent.indexOf(" Coast/") > -1 | navigator.userAgent.indexOf(" OPiOS/") > -1,
                    o = navigator.userAgent.indexOf("OPR/") > -1 && navigator.userAgent.indexOf("Mobile") > -1 && navigator.userAgent.indexOf("Presto/") < 0,
                    s = navigator.userAgent.indexOf("Opera Mini/") > -1 && navigator.userAgent.indexOf("Presto/") > -1;
                return r && d("_hover", document.body) ? !1 : "undefined" == typeof document.hidden ? !0 : r || o || s || e || t || n || i || a ? !0 : !1
            }

            function B() {
                n || T.isStarted() || (l(document, isTouch ? "touchstart" : "mousedown scroll", H), T.start())
            }

            function H() {
                C.pause(), n = !1, s(document, isTouch ? "touchstart" : "mousedown scroll", H), T.stop()
            }

            function N() {
                h && l(document, isTouch ? "touchstart" : "mousedown", O())
            }

            function O() {
                s(document, isTouch ? "touchstart" : "mousedown", O()), v = !0, h = !1
            }

            return {
                badBrowser: t,
                audioSubscribe: e,
                isSleep: n,
                hasTouch: v,
                backgroundPlayCountdown: C,
                touchTrack: N,
                touchUnTrack: O,
                sleepModeStart: B,
                sleepModePause: H,
                showPaymentAlert: A,
                hidePaymentAlert: x,
                isBadBrowser: I
            }
        }();
    window.AudioSubscribe = h
}, function (e, t, n) {
    var i = n(6), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    a["default"].onPostMessage(function (e) {
        "putPixel" !== e && window.scrollTop(0)
    })
}, function () {
    "function" != typeof Object.assign && (Object.assign = function (e) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (null != i) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
        }
        return t
    })
}, function () {
    var e = window, t = e.se, n = e.qs2obj, i = e.obj2qs, a = e.scrollTop, r = e.remove, o = e.each, s = e.geByClass,
        l = e.geByClass1, c = e.addClass, u = e.removeClass, d = e.after, f = e.ce, p = e.val, _ = e.append,
        m = e.evalJs, h = e.extend, v = e.scrollToHash, g = e.onBodyResize, w = e.onBodyScroll, y = e.hasClass,
        b = e.escapeAttr, k = e.before, M = window, C = M.thover, S = {
            onChange: t(), onRestore: t(), fast_load: !1, need_hard_go: !1, getHash: function (e) {
                if ("#player" == e.hash) return !1;
                var t = n(e.params);
                return delete t.z, e.path + i(t)
            }, getAlias: function (e) {
                if (!e) return !1;
                var t = (e || "").split("?"), a = t[0], r = n(t[1]);
                return r.from && delete r.offset, delete r.from, delete r.z, a + i(r)
            }, set: function (e, t, n, i) {
                window.isNewMail && toggleClass("vk__page_mail", bodyNode, "/mail" === e);
                var w = window, y = w.zlayer, b = window, k = b.cur, M = window, T = M.nav, E = window, A = E.menu,
                    x = window, P = x.audioplayer;
                n = n || {};
                var I = a(), B = null;
                if (y.opened() && (I = y._st), n.force || (B = r("m"), o(s("_cntr", B), function () {
                        r(this)
                    }), r(l("_cntrs", B))), !n.after && !S.fast_load) {
                    var H = S.getHash(T);
                    S.save(H, {html: null, st: I, page: B, state: S.stash(), cur: window.cur}, !0)
                }
                if (n.before || S.clear(), (n.before || !n.before && !n.after) && (window.lm_qsearch_counter ? window.lm_qsearch_counter++ : window.lm_qsearch_counter = 1), n.before) {
                    S.fast_load = !0, i && i.target && c("__al_target", i.target);
                    var N = B.cloneNode(!0);
                    i && i.target && u("__al_target", i.target);
                    var O = l("__al_target", N);
                    u("__al_target", O), n.beforeAppend && n.beforeAppend(N, O), d(N, "l"), k.toggleHeaderSearch && k.toggleHeaderSearch(!1), n.afterAppend && n.afterAppend(N), A && A.clear_hover(), A && A.closeSearch(), A && A.enabled(!0)
                } else {
                    if (i && i.zProcess && i.zProcess(0, !0) && delete i.zProcess, i && T.set(i), S.need_hard_go) return T.hard_go(T.cur, null, {replace: !0});
                    if (!n.force) {
                        t.title && (document.title = t.title);
                        var L = t.page;
                        if (L || (L = f("div", {id: "m"}), p(L, t.html)), A.opened()) {
                            var D = f("div", {id: "m_helper", onclick: A.close});
                            _(D, L)
                        }
                        d(L, "l")
                    }
                    S.fast_load = !1, C.clear(), t.lm && A.refresh(t.lm), t.bc && (window.bodyNode.className = t.bc), y.opened(), i && i.zProcess ? i.zProcess(0, !1) && delete i.zProcess : y.close(), n.force || (t.js && m(t.js), t.state && S.stash(t.state), t.cur && h(window.cur, t.cur), S.save(e, t));
                    var j = i ? i.nav && i.nav.hash : T.hash;
                    t.st || !j ? a(t.st || 0, 10) : n.no_scroll && !n.force ? a(I, 10) : v(), P && P.initAudio(), AudioMessagePlayer && AudioMessagePlayer.redrawWaves()
                }
                var q = window, R = q.Tabs;
                g(R.actualizeShowMoreVisibility), R.actualizeShowMoreVisibility(), S.onChange(!0)
            }, save: function (e, t, n) {
                if (e) {
                    var i = window, a = i.nav, r = n ? a.page_get(e) : {};
                    r && a.page_set(e, h(r, t), S.getAlias(e))
                }
            }, restore: function (e) {
                var t = window, n = t.nav, i = n.page_get(e);
                return i || (i = n.page_get(S.getAlias(e))), i ? (S.onRestore(!0), i) : !1
            }, stash: function (e) {
                var t = window, n = t.cur;
                return window.cur && n.stash && n.stash(e) || !1
            }, clear: function () {
                var e = window, t = e.cur, n = window, i = n.zlayer, a = window, r = a.menu, s = window, l = s.tooltip;
                w("__clear"), g("__clear"), r && r.initEvents(), i.isReady && i.initEvents(), l && l.clear(), window.cur && t.destroy && o(t.destroy, function () {
                    this()
                }), window.cur = {destroy: []}
            }, setMhead: function (e, t, n, i) {
                var a = l("mhead", e), o = l("mhb_logo", a), s = l("mh_header", e), c = !1, u = window, d = u.nav;
                if (!n) return void(t && p(s, t));
                n === !0 ? c = d.path + (d.params ? "?" + d.params : "") : n && (c = n), t || (t = p(s) || "&nbsp;");
                var _ = l("mhb_back", e), m = "", h = y("mh_nobr", _) ? " mh_nobr" : "",
                    v = i ? ' onclick="' + i + '"' : "";
                if (m = "/" == c ? '<div class="hb_wrap mhb_back' + h + '"' + v + '><h1 class="hb_btn mh_header">' + t + "</h1></div>" : '<a href="' + b(c) + '" class="hb_wrap mhb_back' + h + ' al_back" accesskey="0"' + v + '><h1 class="hb_btn mh_header mhi_back">' + t + "</h1></a>", a && o) {
                    var g = l("mhb_notify", e);
                    p(a, (window.al && window.al.menu ? '<a href="/" class="hb_wrap mhb_home" accesskey="*" onclick="return menu.toggle(event);"><div class="hb_btn mhi_home">&nbsp;</div></a>' : '<a href="/" class="hb_wrap mhb_home mhb_vkhome" accesskey="*"><div class="hb_btn mhi_home mhi_vkhome">&nbsp;</div></a>') + '<div id="header_msgs" class="hb_wrap mhb_notify' + (!g || y("mhb_no_notify", g) ? " mhb_no_notify" : "") + '">' + p(g) + "</div>" + m)
                } else if (_) {
                    var w = f("div");
                    p(w, m), k(w.firstChild, _), r(_)
                }
            }
        };
    window.page = S
}, function (module, exports, __webpack_require__) {
    var _select = __webpack_require__(108), _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function setDocumentDomain() {
        var e = (document.domain || "").match(/(m\.)?([a-zA-Z]+\.[a-zA-Z]+\.?)$/);
        window.locDomain = "https:" == location.protocol ? e[2] : e[0];
        var t = navigator.userAgent.toLowerCase();
        (/opera/i.test(t) || !/msie 6/i.test(t) || document.domain != window.locDomain) && (document.domain = window.locDomain)
    }

    function rand(e, t) {
        return Math.random() * (t - e + 1) + e
    }

    function isUndefined(e) {
        return "undefined" == typeof e
    }

    function isFunction(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }

    function isArray(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function isEmpty(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        for (var t in e) if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function escapeRE(e) {
        return e ? e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1") : ""
    }

    function htsc(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;").replace(/%/g, "&#37;")
    }

    function escapeAttr(e) {
        return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;")
    }

    function unescapeAttr(e) {
        return e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    }

    function replaceEntities(e) {
        return ce("textarea", {innerHTML: (e || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")}).value
    }

    function escapeStr(e) {
        return e.replace(/\'/g, "\\'")
    }

    function stripTags(e) {
        return e.replace(/<[^>]+>/g, "")
    }

    function srand() {
        return Math.random().toString(36).substr(2)
    }

    function utf2win(e) {
        return unescape(encodeURIComponent(e))
    }

    function isHttpHref(e) {
        var t = (e + "").split(":"), n = t[1] && t[0] ? t[0] + ":" : location.protocol;
        return "http:" == n || "https:" == n
    }

    function vkNow() {
        return +new Date
    }

    function bind() {
        var e = Array.prototype.slice.call(arguments), t = e.shift(), n = e.shift();
        return function () {
            var i = Array.prototype.slice.call(arguments);
            return t.apply(n, e.concat(i))
        }
    }

    function intval(e) {
        return e === !0 ? 1 : parseInt(e) || 0
    }

    function floatval(e) {
        return e === !0 ? 1 : parseFloat(e) || 0
    }

    function qs2obj(e) {
        if (!e) return {};
        for (var t = {}, n = e.toString().split("&"), i = 0, a = n.length; a > i; i++) {
            var r = n[i].split("=");
            r[0] && (t[decodeURIComponent(r[0])] = decodeURIComponent(r[1] || ""))
        }
        return t
    }

    function obj2qs(e) {
        if (!e) return "";
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n].toString() || ""));
        return t.length ? "?" + t.join("&") : ""
    }

    function parseJSON(obj) {
        try {
            return JSON.parse(obj)
        } catch (e) {
            return eval("(" + obj + ")")
        }
    }

    function lsCheck() {
        return void 0 !== window.localStorage && null !== window.localStorage && void 0 !== window.JSON
    }

    function lsSet(e, t) {
        if ("undefined" != typeof t) try {
            return localStorage.setItem(e, JSON.stringify(t))
        } catch (n) {
        } else try {
            return localStorage.removeItem(e)
        } catch (n) {
        }
        return !1
    }

    function lsGet(e) {
        try {
            return JSON.parse(localStorage.getItem(e))
        } catch (t) {
        }
        return !1
    }

    function ssCheck() {
        return void 0 !== window.sessionStorage && void 0 !== window.JSON
    }

    function ssSet(e, t) {
        if ("undefined" != typeof t) try {
            return sessionStorage.setItem(e, JSON.stringify(t))
        } catch (n) {
        } else try {
            return sessionStorage.removeItem(e)
        } catch (n) {
        }
        return !1
    }

    function ssGet(e) {
        try {
            return JSON.parse(sessionStorage.getItem(e))
        } catch (t) {
        }
        return !1
    }

    function getValues(e) {
        if (!isArray(e)) return e.call ? e() : e;
        for (var t = [], n = 0, i = e.length; i > n; n++) t.push(getValues(e[n]));
        return t
    }

    function len(e) {
        if (isArray(e)) return e.length;
        if (isObject(e)) {
            var t = 0;
            for (var n in e) t++;
            return t
        }
        return 0
    }

    function realSubstr(e, t) {
        return e = e || "", e.length > t && (e = e.substr(0, t - 3), e = e.replace(/&[^;]{0,6}$/, ""), e = e.replace(/<[^>]*$/, ""), e = e.replace(/(\s|<br\s*\/?>)+$/, ""), e += ".."), e
    }

    function hashCode(e) {
        var t = 0;
        if (0 === e.length) return t;
        for (var n = 0, i = e.length; i > n; n++) {
            var a = e.charCodeAt(n);
            t = (t << 5) - t + a, t |= 0
        }
        return t
    }

    function formatNum(e) {
        if (!window.langConfig) return e;
        for (var t = e.toString().split("."), n = [], i = t[0].length - 3; i > -3; i -= 3) n.unshift(t[0].slice(i > 0 ? i : 0, i + 3));
        return t[0] = n.join(window.langConfig.numDel), e = t.join(window.langConfig.numDec)
    }

    !function () {
        var e = vkNow();
        window.clog = function () {
            var t = window, n = t.vk;
            if (n.__debug) try {
                if (window.console && console.log) {
                    var i = Array.prototype.slice.call(arguments);
                    i.unshift("[" + (vkNow() - e) / 1e3 + "] ");
                    var a = window, r = a.browser;
                    r.msie || r.mobile && !r.safari_mobile ? console.log(i.join(" ")) : console.log.apply(console, i)
                }
            } catch (o) {
            }
        }
    }();

    function each(e, t) {
        if (!e) return e;
        if (isObject(e) || "undefined" == typeof e.length) {
            for (var n in e) if (e.hasOwnProperty(n) && t.call(e[n], n, e[n]) === !1) break
        } else for (var i = 0, a = e.length; a > i && t.call(e[i], i, e[i]) !== !1; i++) ;
        return e
    }

    function copy(e) {
        return isArray(e) ? e.concat([]) : isObject(e) ? extend({}, e) : e
    }

    var rf = function () {
        return !1
    }, registeredEvents = [];

    function addEvent(e, t, n) {
        if (e = ge(e), n = n || rf, e && 3 != e.nodeType && 8 != e.nodeType) {
            e.setInterval && e != window && (e = window);
            for (var t = t.split(" "), i = 0, a = t.length; a > i; i++) {
                var r = t[i];
                e.addEventListener ? e.addEventListener(r, n, !1) : e.attachEvent && e.attachEvent("on" + r, n), registeredEvents.push([e, r, n])
            }
        }
    }

    function removeEvent(e, t, n) {
        if (e = ge(e), n = n || rf, e && 3 != e.nodeType && 8 != e.nodeType) for (var t = t.split(" "), i = 0, a = t.length; a > i; i++) {
            var r = t[i];
            e.removeEventListener ? e.removeEventListener(r, n, !1) : e.detachEvent && e.detachEvent("on" + r, n)
        }
    }

    function preventEvent(e) {
        return (e = e || window.event) ? (e = e.originalEvent || e, e.preventDefault && e.preventDefault(), e.returnValue = !1, !1) : !1
    }

    function stopEvent(e) {
        return (e = e || window.event) ? (e = e.originalEvent || e, e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, !1) : !1
    }

    function cancelEvent(e) {
        return (e = e || window.event) ? (e = e.originalEvent || e, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, !1) : !1
    }

    function checkEvent(e) {
        var t = window, n = t.PointerEvent;
        return !(!(e = e || window.event) || n && e instanceof n || "click" != e.type && "mousedown" != e.type && "mouseup" != e.type || !(e.which > 1 || e.button > 1 || e.ctrlKey || e.shiftKey || e.metaKey))
    }

    function onCtrlEnter(e, t, n) {
        var i = window, a = i.browser;
        if (t = t || window.event, 10 == t.keyCode || 13 == t.keyCode && (t.ctrlKey || t.metaKey && a.mac)) {
            if (isUndefined(n)) {
                var r = submitBtn(e);
                r && r.click()
            } else n.call(e);
            cancelEvent(t)
        }
    }

    function submitBtn(e) {
        if (!e) return !1;
        var t = "form" == tag(e) ? e : e.form || gpeByTag("form", e);
        if (!t) return !1;
        for (var n in t) {
            var i = t[n];
            if ("input" == tag(i) && "submit" == i.type && /(^|\\s)(small_)?button(\\s|$)/i.test(i.className) && !i.name) return i
        }
        return !1
    }

    function createIframe(e, t) {
        e = extend(e || {}, {border: "0"}), t = extend(t || {}, {position: "absolute", width: 1, height: 1, left: 10});
        var n = ce("iframe", e, t);
        return append(n, "vk_utils"), n
    }

    function winToUtf(e) {
        return e.replace(/&#(\d\d+);/g, function (e, t) {
            return t = intval(t), t >= 32 ? String.fromCharCode(t) : e
        }).replace(/&quot;/gi, '"').replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }

    function shortCurrency() {
        var e = {};
        each(geByClass("_short_currency"), function () {
            var t = this.getAttribute("data-short") || "", n = winToUtf(t).length,
                i = getStyle(this, "fontFamily") || "tahoma,arial,sans-serif";
            if (!t) return !0;
            if (isUndefined(e[i])) {
                for (var a = "", r = n - 1; r >= 0; r--) a += "&#8399;";
                var o = ce("div", {innerHTML: "<b>" + t + "</b><b>" + a + "</b>"}, {fontFamily: i, fontSize: "24px"});
                ge("vk_utils").appendChild(o), e[i] = Math.abs(o.firstChild.offsetWidth - o.lastChild.offsetWidth) >= 3 * n, remove(o)
            }
            e[i] && val(this, t)
        })
    }

    function checkNav(e, t) {
        if (e = ge(e), !e) return !1;
        do if (checkElementNav(e, t)) return e; while (e = e.parentNode);
        return !1
    }

    function checkElementNav(e, t) {
        var n = window, i = n.al;
        if (!i || !i.ver) return !1;
        if (!e) return !1;
        if (t = t || {}, "a" == tag(e)) {
            if ((t.skip_onclick || !e.getAttribute("onclick")) && (e.getAttribute("href") || e.getAttribute("data-href")) || hasClass("al_nav", e)) {
                if (e.hostname) var a = e.hostname; else var r = e.href || attr(e, "data-href"),
                    a = (/^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(r) || [])[2];
                if ("_blank" === e.target && t.skip_blank || t.skip_clicable) return !0;
                if ("_blank" !== e.target && isHttpHref(r)) {
                    if (!a || a == location.hostname) return !0;
                    if (t.allow_post_away && a && e.getAttribute("data-post-id") && e.getAttribute("data-post-click-type")) return e.setAttribute("data-change-location-with-post-away", 1), !0
                }
            }
        } else if ("input" == tag(e)) {
            if (e.form && ("submit" == e.type || "image" == e.type) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e)) return !0
        } else if ("label" == tag(e) && t.skip_clicable && (e.htmlFor || geByTag1("input", e) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e))) return !0;
        return !1
    }

    function checkTouchHover(e) {
        if (e = ge(e), !e) return !1;
        do {
            if ("a" == tag(e) || hasClass("al_photo", e)) return e;
            if ("label" == tag(e) && hasClass("option_row", e)) return e;
            if (hasClass("_touched", e)) return e
        } while (e = e.parentNode);
        return !1
    }

    function parseCyr(e, t) {
        for (var n = e, i = ["yo", "zh", "kh", "ts", "ch", "sch", "shch", "sh", "eh", "yu", "ya", "YO", "ZH", "KH", "TS", "CH", "SCH", "SHCH", "SH", "EH", "YU", "YA", "'"], a = ["�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�"], r = 0, o = i.length; o > r; r++) n = t ? n.split(i[r]).join(a[r]) : n.split(a[r]).join(i[r]);
        for (var s = "abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCY��", l = "������������������������������������������������", r = 0, o = s.length; o > r; r++) n = t ? n.split(s.charAt(r)).join(l.charAt(r)) : n.split(l.charAt(r)).join(s.charAt(r));
        return n == e ? null : n
    }

    function parseLat(e) {
        return parseCyr(e, !0)
    }

    function parseRusKeys(e, t, n) {
        if (!t) return null;
        for (var i = e, a = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?~", r = "��������������������������������.���������������������������������,�", o = 0, s = a.length; s > o; o++) i = n ? i.split(a.charAt(o)).join(r.charAt(o)) : i.split(r.charAt(o)).join(a.charAt(o));
        return i == e ? null : i
    }

    function parseLatKeys(e, t) {
        return parseRusKeys(e, t, !0)
    }

    function scrollLeft() {
        var e = window, t = e.htmlNode, n = e.bodyNode;
        return t.scrollLeft || n.scrollLeft || window.scrollX || 0
    }

    function scrollTop(e, t) {
        var n = window, i = n.htmlNode, a = n.bodyNode;
        return "undefined" == typeof e ? i.scrollTop || a.scrollTop || window.scrollY || 0 : void(t ? setTimeout(function () {
            window.scrollTo(0, Math.max(0, e))
        }, t) : window.scrollTo(0, Math.max(0, e)))
    }

    function se() {
        var e = [], t = Array.prototype.slice.call(arguments);
        return function (n, i) {
            if (n) if (n.apply) e.push(n); else if ("__clear" === n) if (i) {
                for (var a = 0, r = e.length; r > a; a++) if (e[a] === i) {
                    e.splice(a, 1);
                    break
                }
            } else e = []; else {
                var o = Array.prototype.slice.call(arguments);
                o.shift();
                for (var s = 0, r = e.length; r > s; s++) e[s].apply(window, getValues(t).concat(o))
            }
        }
    }

    function onBodyScrollForce(e) {
        var t = window, n = t.onBodyScroll, i = t.onDOMReady;
        e ? setTimeout(function () {
            n(!0)
        }, e) : i(function () {
            n(!0)
        })
    }

    function sgFix() {
        var e = window, t = e._ua, n = e.ajax, i = e.page, a = e.clog;
        if (/galaxy|gt\-/i.test(t)) {
            window.vkSGi = 0, window.vkAjax = n, window.vkPage = i;

            function r() {
                return ++window.vkSGi > 25 ? void delete window.vkSGi : n !== window.vkAjax || i !== window.vkPage ? (n = window.vkAjax, i = window.vkPage, a("SG fixed"), void delete window.vkSGi) : void setTimeout(r, 200)
            }

            r()
        }
    }

    function hideUnvisibleItems(e) {
        var t = window, n = t.cur;
        if (n.alHiddenObjects) {
            var i = getValues(n.alHiddenObjects);
            if (i) {
                e = e || {};
                var a = e.delta || 3 * getCh(), r = scrollTop(), o = r + getCh(), s = r - a, l = o + a, c = [], u = [],
                    d = null, f = null;
                if (each(i, function (e, t) {
                        var n = gpeByClass("ali_wrap", t);
                        if (!n) return !0;
                        var i = n.offsetHeight, a = getY(n), r = a + i, o = isVisible(t);
                        s > r || a > l ? o && c.push([n, t, i]) : o ? d || (d = n, f = a) : u.push([n, t])
                    }), each(u, function (e, t) {
                        var n = t[0], i = t[1];
                        setStyle(n, "height", "auto"), show(i)
                    }), each(c, function (e, t) {
                        var n = t[0], i = t[1], a = t[2];
                        setStyle(n, "height", a), hide(i)
                    }), d && f) {
                    var p = getY(d);
                    p != f && scrollTop(r + (p - f))
                }
            }
        }
    }

    function initObjectsHideByScroll(e, t) {
        var n = window, i = n.cur, a = n.onBodyScroll, r = n.onDOMReady;
        e && (i.alHiddenObjects = e, a(function () {
            hideUnvisibleItems(t)
        }), r(function () {
            hideUnvisibleItems(t)
        }))
    }

    function checkPostsSeen() {
        var e = window, t = e.cur, n = e.pStats;
        if (t.alPostsStatsObjects) {
            var i = getValues(t.alPostsStatsObjects);
            if (i) {
                var a = scrollTop(), r = a + getCh(), o = [];
                each(i, function (e, t) {
                    if (attr(t, "data-ignore")) return !0;
                    var i = getY(t), s = i + t.offsetHeight, l = (isVisible(t), attr(t, "data-clicked")),
                        c = t.bits || 0;
                    return c >= 3 ? !0 : a > s || i > r ? !0 : (c |= i >= a && r > i || l ? 1 : 0, c |= s >= a && r > s || l ? 2 : 0, void(c && (t.bits = c, 3 == c && (o.push(n.postsGetRaws(t)), n.viewed(t)))))
                }), n.seen(o)
            }
        }
    }

    function initPostsStats(e) {
        var t = window, n = t.cur, i = t.onBodyScroll, a = t.onDOMReady;
        e && (n.alPostsStatsObjects = e, i(function () {
            checkPostsSeen()
        }), a(function () {
            checkPostsSeen()
        }))
    }

    function initAutoScroll(e, t, n) {
        var i = window, a = i.onBodyScroll;
        if (e && t) {
            n = n || {};
            var r = n.delta || !1;
            a(function (n) {
                var i = getValues(e);
                if (i) {
                    var a = getY(i), o = getCh(), s = a - n - o;
                    a > 0 && (r || 2 * o) > s && t.call(i)
                }
            })
        }
    }

    function autoScroll(e, t, n) {
        var i = window, a = i.ajax;
        n = n || {};
        var r = getValues(e), o = ge("show_more_loading"), s = n.no_cache || !1, l = function () {
            a.click(this, t, {use_cache: !s})
        };
        !r && o && l.call(o), initAutoScroll(e, l, n), n.hide_objects && initObjectsHideByScroll(n.hide_objects)
    }

    function scrollToEl(e, t, n) {
        e = ge(e) || window, t = t || 0;
        var i = (e === window ? 1 : getY(e)) - t;
        scrollTop(i, n)
    }

    function scrollToHash(e) {
        var t = window, n = t.nav;
        if (e = e || n.hash || location.hash, "#" === e[0] && (e = e.substr(1)), e) {
            var i = geBySel("a[name]");
            i === !1 && (i = geByTag("a")), each(i, function (t, n) {
                return n.name == e ? (scrollToEl(n), !1) : void 0
            })
        }
    }

    function lockButton(e) {
        var t = ge(e);
        if (/(^|\s)(small_)?button(\s|$)/i.test(t.className)) {
            var n = ce("button", {
                id: t.id,
                className: t.className,
                innerHTML: '<span class="button_locked"><b class="button_locked_label">' + htsc(val(t)) + "</b></span>",
                onclick: function (e) {
                    return cancelEvent(e)
                },
                real_btn: t
            });
            t.fake_btn = n, before(n, t), remove(t)
        }
    }

    function unlockButton(e) {
        var t = ge(e);
        t.real_btn ? (before(t.real_btn, t), remove(t), t.real_btn.fake_btn = null, t.real_btn = null) : t.fake_btn && (before(t, t.fake_btn), remove(t.fake_btn), t.fake_btn.real_btn = null, t.fake_btn = null)
    }

    function extend() {
        var e = Array.prototype.slice.call(arguments), t = e.shift();
        if (!e.length) return t;
        for (var n = 0, i = e.length; i > n; n++) for (var a in e[n]) "layerX" != a && "layerY" != a && (t[a] = e[n][a]);
        return t
    }

    function ge(e) {
        return "string" == typeof e ? document.getElementById(e) : e
    }

    function geByClass(e, t, n) {
        if (t = ge(t) || document, n = n || "*", t.getElementsByClassName) {
            var i = t.getElementsByClassName(e);
            if ("*" == n) return Array.prototype.slice.call(i);
            var a = [];
            n = n.toUpperCase();
            for (var r = 0, o = i.length; o > r; r++) i[r].tagName.toUpperCase() == n && a.push(i[r]);
            return a
        }
        for (var i = geByTag(n, t), a = [], s = new RegExp("(^|\\s)" + escapeRE(e) + "(\\s|$)"), r = 0, o = i.length; o > r; r++) s.test(i[r].className) && a.push(i[r]);
        return a
    }

    function geByClass1(e, t, n) {
        return geByClass(e, t, n)[0]
    }

    function gpeByClass(e, t) {
        if (t = ge(t), !t) return null;
        for (; t = t.parentNode;) if (hasClass(e, t)) return t;
        return null
    }

    function geByTag(e, t) {
        return (ge(t) || document).getElementsByTagName(e)
    }

    function geByTag1(e, t) {
        return geByTag(e, t)[0]
    }

    function gpeByTag(e, t) {
        if (t = ge(t), !t) return null;
        for (e = e.toUpperCase(); t = t.parentNode;) if (t.tagName && t.tagName.toUpperCase() == e) return t;
        return null
    }

    function geBySel(e, t) {
        return t = ge(t) || document, t.querySelectorAll ? t.querySelectorAll(e) : !1
    }

    function geBySel1(e, t) {
        return t = ge(t) || document, t.querySelector ? t.querySelector(e) : !1
    }

    function append(e, t) {
        return e = ge(e), t = ge(t), e && t && t.appendChild(e) || !1
    }

    function before(e, t) {
        return t = ge(t), t && t.parentNode && t.parentNode.insertBefore(ge(e), t) || !1
    }

    function after(e, t) {
        return t = ge(t), t && t.parentNode && t.parentNode.insertBefore(ge(e), t.nextSibling) || !1
    }

    function replace(e, t) {
        before(e, t) && remove(t)
    }

    function remove(e) {
        return e = ge(e), e && e.parentNode ? e.parentNode.removeChild(e) : !1
    }

    function clone(e) {
        return e = ge(e), e ? e.cloneNode(!0) : !1
    }

    function reflow(e) {
        e = ge(e);
        try {
            {
                e.offsetWidth + e.offsetHeight
            }
        } catch (t) {
        }
    }

    function tag(e) {
        return e = ge(e), (e && e.tagName || "").toLowerCase()
    }

    function outer(e) {
        return e = ge(e), e ? val(ce("div").appendChild(clone(e)).parentNode) : ""
    }

    function show(e) {
        var t = ge(e);
        t && (t.style.display = t.oldstyle || (hasClass("_ib", t) ? "inline-block" : hasClass("_i", t) || "span" == tag(t) ? "inline" : "block"))
    }

    function hide(e) {
        var t = ge(e);
        t && ("none" != t.style.display && (t.oldstyle = t.style.display), t.style.display = "none")
    }

    function isVisible(e) {
        var t = ge(e);
        return t && t.style ? "none" != t.style.display : !1
    }

    function toggle(e, t) {
        "undefined" == typeof t && (t = !isVisible(e)), t && isVisible(e) || (t || isVisible(e)) && (t ? show : hide)(e)
    }

    function ce(e, t, n) {
        var i = document.createElement(e);
        return t && extend(i, t), n && setStyle(i, n), i
    }

    function elfocus(e, t, n) {
        e = ge(e);
        try {
            if (e.focus(), ("undefined" == typeof t || t === !1) && (t = e.value.length), ("undefined" == typeof n || n === !1) && (n = t), e.createTextRange) {
                var i = e.createTextRange();
                i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", n), i.select()
            } else e.setSelectionRange && e.setSelectionRange(t, n)
        } catch (a) {
        }
    }

    function elblur(e) {
        e = ge(e), e && e.blur && e.blur()
    }

    function val(e, t) {
        if (e = ge(e), !e) return "";
        var n = e.tagName.toLowerCase(), i = "input" == n || "textarea" == n || "select" == n,
            a = i && ("radio" == e.type || "checkbox" == e.type);
        if ("undefined" == typeof t) return i ? a ? e.checked : e.value : e.innerHTML;
        if (i) a ? e.checked = t : e.value = t; else {
            e.innerHTML = t;
            var r = window, o = r.ajax;
            "a" != n && (o.prepare_nav(e), o.prepare_click(e), o.onPrepared(!0, e))
        }
    }

    function attr(e, t, n) {
        return (e = ge(e)) ? "undefined" == typeof n ? "data-" == t.substr(0, 5) && e.dataset ? e.dataset[t.substr(5).replace(/-([a-z0-9])/, function (e, t) {
            return t.toUpperCase()
        })] || !1 : e.getAttribute && e.getAttribute(t) || !1 : n === !1 ? e.removeAttribute && e.removeAttribute(t) || !1 : void(e.setAttribute && e.setAttribute(t, n)) : void 0
    }

    function cssToJs(e, t) {
        return t ? t + (e || "").replace(/(?:^|-)([a-z])/g, function (e, t) {
            return (t || "").toUpperCase()
        }) : (e || "").replace(/-([a-z])/g, function (e, t) {
            return (t || "").toUpperCase()
        })
    }

    function getCssPropertyName(e, t, n) {
        e = ge(e) || ce("div");
        for (var i = ["webkit", "Moz", "ms", "O", ""], a = ["-webkit-", "-moz-", "-ms-", "-o-", ""], r = 0, o = i.length; o > r; r++) {
            var s = i[r], l = cssToJs(t, s);
            if ("undefined" != typeof e.style[l]) return n ? a[r] + t : l
        }
        return !1
    }

    function cssValue(e, t) {
        if ("number" == typeof e) {
            var n = 1e7;
            e = Math.round(e * n) / n + (t || "")
        }
        return e
    }

    function getStyle(e, t, n) {
        if (e = ge(e), !e) return !1;
        if (isArray(t)) {
            var i = {};
            return each(t, function (t, n) {
                i[n] = getStyle(e, n)
            }), i
        }
        if (isUndefined(n) && (n = !0), /transform(-origin)?|transition(-duration)?/i.test(t) && (t = getCssPropertyName(e, t), !t)) return !1;
        var a = window, r = a.browser;
        if (!n && "opacity" == t && r.msie) {
            var o = e.style.filter;
            return o ? o.indexOf("opacity=") >= 0 ? parseFloat(o.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" : ""
        }
        if (!n && e.style && (e.style[t] || "height" == t)) return e.style[t];
        var s, l = document.defaultView || window;
        if (l.getComputedStyle) {
            t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
            var c = l.getComputedStyle(e, null);
            c && (s = c.getPropertyValue(t))
        } else if (e.currentStyle) {
            if ("opacity" == t && r.msie) {
                var o = e.currentStyle.filter;
                return o && o.indexOf("opacity=") >= 0 ? parseFloat(o.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1"
            }
            var u = t.replace(/\-(\w)/g, function (e, t) {
                return t.toUpperCase()
            });
            s = e.currentStyle[t] || e.currentStyle[u], "auto" == s && (s = 0), s = (s + "").split(" "), each(s, function (t, n) {
                if (!/^\d+(px)?$/i.test(n) && /^\d/.test(n)) {
                    var i = e.style, a = i.left, r = e.runtimeStyle.left;
                    e.runtimeStyle.left = e.currentStyle.left, i.left = n || 0, s[t] = i.pixelLeft + "px", i.left = a, e.runtimeStyle.left = r
                }
            }), s = s.join(" ")
        }
        if (n && ("width" == t || "height" == t)) {
            var d = "width" == t ? getW(e) : getH(e);
            s = (intval(s) ? Math.max(floatval(s), d) : d) + "px"
        }
        return s
    }

    extend(getStyle, {
        transform: function (e) {
            var t, n = getStyle(e, "transform");
            return n ? {
                scale: (t = n.match(/(^|\s+)scale\(([0-9.]+)\)(\s+|$)/)) && t[2] || 1,
                scale3d: (t = n.match(/(^|\s+)scale3d\(([0-9.]+,\s+([0-9.]+),\s+([0-9.]+))\)(\s+|$)/)) && t[2] || 1,
                rotate: (t = n.match(/(^|\s+)rotate\(([0-9.-]+)(deg)?\)(\s+|$)/)) && +t[2] || 0,
                translate: (t = n.match(/(^|\s+)translate\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4]] || [0, 0],
                translate3d: (t = n.match(/(^|\s+)translate3d\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4], +t[6]] || [0, 0, 0]
            } : {scale: 1, rotate: 0, translate: [0, 0]}
        }
    });

    function setStyle(e, t, n) {
        if (e = ge(e), e && e.style) {
            if (isObject(t)) return each(t, function (t, n) {
                setStyle(e, t, n)
            });
            var i = "number" == typeof n;
            i && /height|width/i.test(t) && (n = Math.abs(n)), (!/transform(-origin)?|transition(-duration)?/i.test(t) || (t = getCssPropertyName(e, t))) && (e.style[t] = i && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(t) ? n + "px" : n)
        }
    }

    extend(setStyle, {
        animate: function (e, t, n, i) {
            var a = getCssPropertyName(e, "transition");
            if (a) {
                if (!t) return e.onAnimationEnd ? e.onAnimationEnd() : setStyle.transition(e), setStyle;
                var r = isObject(n), o = (r ? n.duration : n) || 200, s = n.func || "ease";
                setStyle.transition(e, t, o, s);
                var l = window, c = l.browser;
                e.onAnimationEnd && (c.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)), e.onAnimationEnd = function () {
                    return c.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd), e.onAnimationEnd = null, setStyle.transition(e), i && i(e), !1
                }, c.opera ? e.addEventListener("oTransitionEnd", e.onAnimationEnd) : addEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)
            }
            return setStyle
        }, transform: function (e, t, n, i) {
            var a = window, r = a.has3d, o = [];
            if (isObject(t)) {
                r && (t.scale3d = t.scale, t.translate3d = t.translate);
                var s = extend(getStyle.transform(e), t);
                t = r ? s.scale3d : s.scale, i = s.rotate, n = r ? s.translate3d : s.translate
            }
            return "undefined" != typeof t && o.push(r ? "scale3d(" + cssValue(t) + ", " + cssValue(t) + ", 1)" : "scale(" + cssValue(t) + ")"), "undefined" != typeof i && o.push("rotate(" + cssValue(i, "deg") + ")"), "undefined" != typeof n && o.push(r ? "translate3d(" + cssValue(n[0], "px") + ", " + cssValue(n[1], "px") + ", 0)" : "translate(" + cssValue(n[0], "px") + ", " + cssValue(n[1], "px") + ")"), o.length ? void setStyle(e, "transform", o.join(" ")) : setStyle(e, "transform", "none")
        }, transformOrigin: function (e, t, n) {
            isArray(t) && (n = t[1], t = t[0]), setStyle(e, "transform-origin", cssValue(t, "px") + " " + cssValue(n, "px"))
        }, transition: function (e, t, n, i) {
            var a = [];
            return t ? (isArray(t) || (t = t.split(/\s*,\s*/)), n = cssValue(n, "ms"), each(t, function () {
                var t = getCssPropertyName(e, this, !0), r = [];
                t && (r.push(t), r.push(n), i && r.push(i), a.push(r.join(" ")))
            }), void setStyle(e, "transition", a.join(","))) : setStyle(e, "transition", "none")
        }
    });

    function hasClass(e, t, n) {
        if ("string" == typeof t && "string" != typeof e) {
            var i = [t, e];
            e = i[0], t = i[1]
        }
        return (t = ge(t)) ? new RegExp("(^|\\s)" + (n ? e : escapeRE(e)) + "(\\s|$)").test(t.className) : void 0
    }

    function addClass(e, t) {
        if ("string" == typeof t && "string" != typeof e) {
            var n = [t, e];
            e = n[0], t = n[1]
        }
        (t = ge(t)) && !hasClass(e, t) && (t.className = (t.className ? t.className + " " : "") + e)
    }

    function removeClass(e, t, n) {
        if ("string" == typeof t && "string" != typeof e) {
            var i = [t, e];
            e = i[0], t = i[1]
        }
        (t = ge(t)) && hasClass(e, t, n) && (t.className = (t.className || "").replace(new RegExp("(^|\\s)" + (n ? e : escapeRE(e)) + "(\\s|$)"), function (e, t, n) {
            return t && n ? " " : ""
        }))
    }

    function toggleClass(e, t, n) {
        var i = "undefined" == typeof n ? hasClass(e, t) : !n;
        i ? removeClass(e, t) : addClass(e, t)
    }

    function replaceClass(e, t, n, i) {
        removeClass(e, n, i), addClass(t, n)
    }

    function switchClass(e, t, n) {
        hasClass(e, n) ? replaceClass(e, t, n) : replaceClass(t, e, n)
    }

    function getXY(e) {
        if (e = ge(e), !e) return [0, 0];
        var t = 0, n = 0;
        if (e.offsetParent) do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
        return [t, n]
    }

    function getX(e) {
        return getXY(e)[0]
    }

    function getY(e) {
        var t = getXY(e)[1];
        return t
    }

    function getW(e) {
        return e = ge(e), e && e.offsetWidth || 0
    }

    function getH(e) {
        return e = ge(e), e && e.offsetHeight || 0
    }

    function getCw() {
        return Math.max(window.innerWidth || 0, (window.htmlNode || {}).clientWidth || 0)
    }

    function getCh() {
        return Math.max(window.innerHeight || 0, (window.htmlNode || {}).clientHeight || 0)
    }

    function evalJs(e) {
        window.execScript ? window.execScript(e) : eval.call(window, e)
    }

    function alLoadingFix(e, t) {
        t = t || "al_loading";
        var n = ge(t);
        if (n) {
            if (!e) {
                var i = ge("m").offsetHeight || 0, a = ge("mfoot").offsetHeight || 0;
                e = getCh() - i + a
            }
            n.style.height = e + "px", addClass(t, n)
        }
    }

    function getHref(e) {
        if (!e) return !1;
        var t = !1;
        return e.getAttribute && (t = e.getAttribute("data-href") || e.getAttribute("href")), t || (e.pathname ? t = e.pathname + e.search + e.hash : tag(e) || (t = e)), t || !1
    }

    function ajx2q(e) {
        var t = [], n = function (e) {
            try {
                return encodeURIComponent(e)
            } catch (t) {
                return ""
            }
        };
        for (var i in e) if (null != e[i] && !isFunction(e[i])) if (isArray(e[i])) for (var a = 0, r = 0, o = e[i].length; o > a; ++a) null == e[i][a] || isFunction(e[i][a]) || (t.push(n(i) + "[" + r + "]=" + n(e[i][a])), ++r); else t.push(n(i) + "=" + n(e[i]));
        return t.join("&")
    }

    function indexOf(e, t, n) {
        for (var i = n || 0, a = (e || []).length; a > i; i++) if (e[i] == t) return i;
        return -1
    }

    function isToday(e) {
        var t = new Date;
        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
    }

    function isYesterday(e) {
        var t = new Date(e.getTime() + 864e5);
        return isToday(t)
    }

    function isTomorrow(e) {
        var t = new Date(e.getTime() - 864e5);
        return isToday(t)
    }

    function isSameDate(e, t) {
        var n = new Date(e), i = new Date(t);
        return n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth() && n.getDate() === i.getDate()
    }

    function leadingZero(e) {
        return e >= 10 ? e : "0" + e
    }

    function langSex(e, t) {
        if (!isArray(t)) return t;
        var n = t[1];
        return window.langConfig ? (each(langConfig.sexRules, function (i, a) {
            return "*" == a[0] ? (n = t[a[1]], !1) : e == a[0] && t[a[1]] ? (n = t[a[1]], !1) : void 0
        }), n) : n
    }

    function langNumeric(e, t, n) {
        var i = window, a = i.langConfig;
        if (!t || !a) return e;
        var r;
        if (isArray(t) ? (r = t[1], e != Math.floor(e) ? r = t[a.numRules["float"]] : each(a.numRules["int"], function (n, i) {
                if ("*" == i[0]) return r = t[i[2]], !1;
                var a = i[0] ? e % i[0] : e;
                return -1 != indexOf(i[1], a) ? (r = t[i[2]], !1) : void 0
            })) : r = t, n) {
            for (var o = e.toString().split("."), s = [], l = o[0].length - 3; l > -3; l -= 3) s.unshift(o[0].slice(l > 0 ? l : 0, l + 3));
            o[0] = s.join(a.numDel), e = o.join(a.numDec)
        }
        return r = (r || "%s").replace("%s", e)
    }

    function langWordNumeric(e, t, n) {
        return isArray(t) && e < t.length ? t[e] : langNumeric(e, n)
    }

    function langDate(e, t, n, i, a, r) {
        var o = window, s = o.langConfig, l = void 0;
        if (r || (r = ""), isArray(t) || (t = ["", t, t, t, t]), "number" == typeof e || "string" == typeof e ? (e > 2147483646e3 && (e = 0), e += n, l = new Date(e)) : l = e, a) t = t[1]; else {
            var c = "";
            c = isToday(l) ? t[3] : isYesterday(l) ? t[2] : isTomorrow(l) ? t[4] : t[1], !c && t[1] && (c = t[1]), t = c
        }
        var u = "", d = {
            hours: l.getHours(),
            minutes: l.getMinutes(),
            seconds: l.getSeconds(),
            day: l.getDate(),
            month: l.getMonth() + 1,
            year: l.getFullYear()
        };
        switch (3 === s.id && (u = l.getHours() > 11 ? "pm" : "am", d.hours = l.getHours() % 12 == 0 ? 12 : l.getHours() % 12), s.id) {
            case 1:
                switch (l.getHours()) {
                    case 11:
                        t = t.replace(" � ", " �� ");
                        break;
                    case 0:
                        t = t.replace(" � ", " � ")
                }
                break;
            case 3:
                !isToday(l) || isYesterday(l) || isTomorrow(l) || (t = r + t);
                break;
            case 12:
            case 73:
                1 == l.getHours() && (t = t.replace(" &#224;s ", " &#224; "))
        }
        return 68 === s.id && (d.year = d.year + 543), t.replace("{hour}", d.hours).replace("{num_hour}", leadingZero(d.hours)).replace("{minute}", leadingZero(d.minutes)).replace("{day}", d.day).replace("{num_day}", leadingZero(d.day)).replace("{month}", i[d.month]).replace("{year}", d.year).replace("{short_year}", d.year % 100).replace("{second}", leadingZero(d.seconds)).replace("{am_pm}", u)
    }

    function setNotify(e) {
        var t = intval(e), n = ge("header_msgs"), i = geByClass1("pcont", "l");
        if (n && (window.isNewMail ? val(n, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "") + "</div>") : val(n, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "&nbsp;") + "</div>"), t > 0 ? removeClass("mhb_no_notify", n) : addClass("mhb_no_notify", n), i)) {
            var a = geByClass1("mmi_mail", i), r = geByClass1("mmi_wrap", a), o = geByClass1("mm_counter", r);
            if (!a) return;
            t > 0 ? o ? val(o, t) : append(ce("em", {className: "mm_counter", innerHTML: t}), r) : remove(o)
        }
    }

    function getNotify() {
        var e = ge("header_msgs");
        return e ? intval(val(geByTag1("em", e))) : 0
    }

    function canUploadFile() {
        return (window.XMLHttpRequest || window.XDomainRequest) && (window.FormData || window.FileReader && (window.XMLHttpRequest && XMLHttpRequest.sendAsBinary || window.ArrayBuffer && window.Uint8Array && (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder)))
    }

    function uploadFile(e, t, n) {
        var i = window.XDomainRequest || window.XMLHttpRequest, a = new i;
        a.open("POST", e, !0), a.upload.addEventListener("progress", n.onProgress || rf, !1), a.onload = n.onComplete || rf, a.onerror = n.onError || rf;
        var r = n.onStart || rf;
        if (window.FormData) {
            var o = new FormData;
            for (var s in t) o.append(s, t[s]);
            return a.send(o), r(a), a
        }
        try {
            if (i && !i.prototype.sendAsBinary && window.ArrayBuffer && window.Uint8Array) {
                var l = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder;
                l && (i.prototype.sendAsBinary = function (e) {
                    for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t, 0), i = 0; i < e.length; i++) n[i] = 255 & e.charCodeAt(i);
                    var a = new l;
                    a.append(t);
                    var r = a.getBlob();
                    this.send(r)
                })
            }
            var c = "----VkComFormBoundary-" + srand(), u = "", d = 0, f = function (e, t, n) {
                n += "--" + t + "--", e.setRequestHeader("Content-type", 'multipart/form-data; boundary="' + t + '"'), e.sendAsBinary(n), r(e)
            };
            for (var s in t) if ("function" == typeof t[s].getAsBinary) {
                d++;
                var p = new FileReader, _ = t[s], m = _.fileName || _.name || "";
                p.onload = function () {
                    u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"; filename="' + utf2win(m) + '"\r\nContent-Type: application/octet-stream\r\n', 0 + p.result + "\r\n", d--, d || f(a, c, u)
                }, p.readAsBinaryString(_)
            } else u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"\r\n\r\n' + utf2win(t[s]) + "\r\n";
            return d || f(a, c, u), a
        } catch (h) {
            return !1
        }
        return !1
    }

    function readFile(e, t) {
        if (window.FileReader && window.vk.iu_ex) {
            var n = new FileReader;
            n.onload = function () {
                t && t(n.result), n = null
            }, n.readAsDataURL(e)
        }
    }

    function formatTime(e) {
        var t, n, i, a = 0 > e;
        return e = Math.round(a ? -e : e), n = e % 60, t = 10 > n ? "0" + n : n, e = Math.floor(e / 60), i = e % 60, t = i + ":" + t, e = Math.floor(e / 60), e > 0 && (10 > i && (t = "0" + t), t = e + ":" + t), a && (t = "-" + t), t
    }

    !function () {
        var e = !1, t = [], n = function () {
            if (!e && (e = !0, window.htmlNode = geByTag1("html"), window.bodyNode = geByTag1("body"), t)) {
                for (var n = null; n = t.shift();) n.call(document);
                t = null
            }
        };

        function i() {
            document.removeEventListener("DOMContentLoaded", i, !1), n()
        }

        function a() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", a), n())
        }

        document.addEventListener ? document.addEventListener("DOMContentLoaded", i, !1) : document.attachEvent && document.attachEvent("onreadystatechange", a), window.addEventListener ? window.addEventListener("load", n, !1) : window.attachEvent ? window.attachEvent("onload", n) : window.onload = n;

        function r(n) {
            e ? n.call(document) : t.push(n)
        }

        window.onDOMReady = r
    }(), window.cdf = function (e) {
        var t = e.createDocumentFragment(), n = e.createElement("div"), i = e.createRange && e.createRange();
        return t && t.appendChild(n), i && i.selectNodeContents && i.selectNodeContents(n), t ? i && i.createContextualFragment ? function (t) {
            return t ? i.createContextualFragment(t) : e.createDocumentFragment()
        } : function (t) {
            if (!t) return e.createDocumentFragment();
            n.innerHTML = t;
            for (var i = e.createDocumentFragment(); n.firstChild;) i.appendChild(n.firstChild);
            return i
        } : function (e) {
            return ce("div", {innerHTML: e})
        }
    }(document);

    function domClosestOverflowHidden(e) {
        e = ge(e);
        for (var t, n, i, a, r = e; r && r.tagName && r !== bodyNode && (t = getStyle(r, "position"), n = getStyle(r, "overflow"), i = getStyle(r, "transform"), r === e || "visible" === n || ("static" === t ? a && "relative" !== a : "fixed" === a));) "none" !== i ? a = void 0 : "static" !== t && "fixed" !== a && (a = t), r = (r || {}).parentNode;
        return r
    }

    function copyToClipboard(e) {
        _select2["default"](e);
        var t = void 0;
        try {
            t = document.execCommand("copy")
        } catch (n) {
            t = !1
        }
        return t
    }

    function blinkItem(e, t) {
        setStyle(e, {opacity: 1}), setTimeout(function () {
            return setStyle(e, {opacity: 0})
        }, t)
    }

    function domPN(e) {
        return (e || {}).parentNode
    }

    function matchesSelector(e, t) {
        if (e = ge(e), !e || e == document) return !1;
        var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (e) {
            for (var t = (this.parentNode || this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t[n] !== this;) ;
            return n > -1
        };
        return n.call(e, t)
    }

    function domCA(e, t) {
        do e = domPN(e); while (e && !matchesSelector(e, t));
        return e
    }

    function getLang() {
        try {
            var e = Array.prototype.slice.call(arguments), t = e.shift();
            if (!t) return "...";
            var n = window.cur && window.cur.lang && window.cur.lang[t] || window.lang && window.lang[t] || window.langpack && window.langpack[t] || window[t];
            if (!n) {
                var i = t.split("_");
                return i.shift(), i.join(" ")
            }
            return isFunction(n) ? n.apply(null, e) : void 0 === e[0] && !isArray(n) || "raw" === e[0] ? n : langNumeric(e[0], n, e[1])
        } catch (a) {
            console.log("lang error:" + a.message + "(" + Array.prototype.slice.call(arguments).join(", ") + ")")
        }
    }

    function domData(e, t, n) {
        return e ? "undefined" != typeof n ? (null === n ? e.removeAttribute("data-" + t) : e.setAttribute("data-" + t, n), n) : e.getAttribute("data-" + t) : null
    }

    function throttle(e, t) {
        var n;
        return function () {
            n || (e.apply(this, arguments), n = setTimeout(function () {
                n = !1
            }, t))
        }
    }

    function scrollGetX() {
        return window.pageXOffset || scrollNode.scrollLeft || document.documentElement.scrollLeft
    }

    function scrollGetY() {
        return window.pageYOffset || scrollNode.scrollTop || document.documentElement.scrollTop
    }

    function domEL(e, t) {
        for (t = t ? "previousSibling" : "nextSibling"; e && !e.tagName;) e = e[t];
        return e
    }

    function domPS(e) {
        return domEL((e || {}).previousSibling, 1)
    }

    function domChildIndex(e) {
        for (var t = 0; null != (e = domPS(e));) t++;
        return t
    }

    onDOMReady(function () {
        window.scrollNode = browser.chrome || browser.safari ? bodyNode : htmlNode
    });

    function domChildren(e) {
        for (var t = [], n = e.childNodes, i = 0; i < n.length; i++) n[i].tagName && t.push(n[i]);
        return t
    }

    window.onBodyScroll = se(scrollTop), window.onBodyResize = se(), window.formatTime = formatTime, window.setDocumentDomain = setDocumentDomain, window.isUndefined = isUndefined, window.isFunction = isFunction, window.isArray = isArray, window.isObject = isObject, window.isEmpty = isEmpty, window.escapeRE = escapeRE, window.htsc = htsc, window.escapeAttr = escapeAttr, window.unescapeAttr = unescapeAttr, window.replaceEntities = replaceEntities, window.escapeStr = escapeStr, window.stripTags = stripTags, window.rand = rand, window.srand = srand, window.utf2win = utf2win, window.isHttpHref = isHttpHref, window.vkNow = vkNow, window.bind = bind, window.intval = intval, window.floatval = floatval, window.qs2obj = qs2obj, window.obj2qs = obj2qs, window.parseJSON = parseJSON, window.lsCheck = lsCheck, window.lsSet = lsSet, window.lsGet = lsGet, window.ssCheck = ssCheck, window.ssSet = ssSet, window.ssGet = ssGet, window.getValues = getValues, window.len = len, window.realSubstr = realSubstr, window.hashCode = hashCode, window.formatNum = formatNum, window.each = each, window.copy = copy, window.addEvent = addEvent, window.removeEvent = removeEvent, window.preventEvent = preventEvent, window.stopEvent = stopEvent, window.cancelEvent = cancelEvent, window.checkEvent = checkEvent, window.onCtrlEnter = onCtrlEnter, window.submitBtn = submitBtn, window.createIframe = createIframe, window.winToUtf = winToUtf, window.shortCurrency = shortCurrency, window.checkNav = checkNav, window.checkElementNav = checkElementNav, window.checkTouchHover = checkTouchHover, window.parseCyr = parseCyr, window.parseLat = parseLat, window.parseRusKeys = parseRusKeys, window.parseLatKeys = parseLatKeys, window.scrollLeft = scrollLeft, window.scrollTop = scrollTop, window.se = se, window.onBodyScrollForce = onBodyScrollForce, window.sgFix = sgFix, window.hideUnvisibleItems = hideUnvisibleItems, window.initObjectsHideByScroll = initObjectsHideByScroll, window.checkPostsSeen = checkPostsSeen, window.initPostsStats = initPostsStats, window.initAutoScroll = initAutoScroll, window.autoScroll = autoScroll, window.scrollToEl = scrollToEl, window.scrollToHash = scrollToHash, window.lockButton = lockButton, window.unlockButton = unlockButton, window.extend = extend, window.ge = ge, window.geByClass = geByClass, window.geByClass1 = geByClass1, window.gpeByClass = gpeByClass, window.geByTag = geByTag, window.geByTag1 = geByTag1, window.gpeByTag = gpeByTag, window.geBySel = geBySel, window.geBySel1 = geBySel1, window.append = append, window.before = before, window.after = after, window.replace = replace, window.remove = remove, window.clone = clone, window.reflow = reflow, window.tag = tag, window.outer = outer, window.show = show, window.hide = hide, window.isVisible = isVisible, window.toggle = toggle, window.ce = ce, window.elfocus = elfocus, window.elblur = elblur, window.val = val, window.attr = attr,window.cssToJs = cssToJs,window.getCssPropertyName = getCssPropertyName,window.cssValue = cssValue,window.getStyle = getStyle,window.setStyle = setStyle,window.hasClass = hasClass,window.addClass = addClass,window.removeClass = removeClass,window.toggleClass = toggleClass,window.replaceClass = replaceClass,window.switchClass = switchClass,window.getXY = getXY,window.getX = getX,window.getY = getY,window.getW = getW,window.getH = getH,window.getCw = getCw,window.getCh = getCh,window.evalJs = evalJs,window.alLoadingFix = alLoadingFix,window.getHref = getHref,window.ajx2q = ajx2q,window.indexOf = indexOf,window.langSex = langSex,window.langNumeric = langNumeric,window.langWordNumeric = langWordNumeric,window.langDate = langDate,window.setNotify = setNotify,window.getNotify = getNotify,window.canUploadFile = canUploadFile,window.uploadFile = uploadFile,window.readFile = readFile,window.registeredEvents = registeredEvents,window.domClosestOverflowHidden = domClosestOverflowHidden,window.copyToClipboard = copyToClipboard,window.blinkItem = blinkItem,window.domPN = domPN,window.domCA = domCA,window.getLang = getLang,window.domData = domData,window.throttle = throttle,window.scrollGetX = scrollGetX,window.scrollGetY = scrollGetY,window.domChildIndex = domChildIndex,window.domChildren = domChildren
}, function () {
    var e = window, t = e.ge, n = e.geByClass1, i = e.toggle, a = e.val, r = e.ce, o = e.intval, s = e.toggleClass,
        l = e.after, c = e.cdf, u = e.gpeByClass, d = e.hide, f = e.addClass, p = e.remove, _ = e.show, m = e.getY,
        h = e.getH, v = e.scrollTop, g = e.hasClass, w = e.each, y = e.geByClass, b = e.attr, k = e.getCw,
        M = e.getHref, C = e.before, S = e.onBodyScrollForce, T = e.removeClass, E = e.scrollToEl, A = e.geByTag1,
        x = (e.replace, window), P = x.ajax, I = window, B = I.ownerPhotoUpload, H = window, N = H.nav;
    var O = {
        onDone: function (e, r, o, l) {
            var c = t(e) || n("like_box", "z") || n("like_box") || n("wall_item_for_like_" + e);
            if (c && e) {
                var u;
                u = g("wall_item", c) || g("market_item", c) ? n("wi_like_wrap", c) : n("item_like", c);
                var d = n("item_repost", c), f = n("like_wrap", c);
                u && (u.innerHTML = r || "", s("is_empty", u, !r), i(u, r)), d && (d.innerHTML = o || "", i(d, o)), f && a(f, l || "")
            }
        }, onFail: function () {
            var e = Array.prototype.slice.call(arguments), t = e.shift();
            switch (t) {
                case 2:
                    N.hard_go(e[0])
            }
        }
    }, L = {
        onDone: function (e, t, i, s, l) {
            var c = window, u = c.photo;
            if (O.onDone.apply(this, arguments), this.photo_id) {
                var d = u.get(this.photo_id);
                if (d) {
                    var f = r("div", {innerHTML: d.likes});
                    a(n("item_like", f), t), d.likes = a(f), d.publish = '<span class="item_repost">' + i + "</span>", d.likes_cnt = o((b(n("v_like", f), "data-like_count") || "").replace(/\D+/g, "")), d.likes_me = l;
                    var f = r("div", {innerHTML: d.actions}), p = n("like_wrap", f);
                    a(p, s), d.actions = a(f), u.save(d)
                }
            }
        }, onFail: O.onFail
    }, D = {
        onDone: function () {
            var e = window, t = e.photo;
            if (this.photo_id) {
                var i = t.get(this.photo_id);
                i && (i.tag_info = "", t.save(i));
                var r = n("photo_view"), o = n("pv_tag_wrap", r);
                a(o, "")
            }
        }
    }, j = {
        onDone: function (e, t, i) {
            var r = window, o = r.photo, l = window, c = l.menu, u = n("photo_view"), d = n("photo_msg"), f = !!t;
            if (u && d) {
                a(d, t || ""), s("photo_deleted", u, f);
                var p = o.get(e);
                p && (p.deleted = t, o.save(p)), i && c && c.refresh({pp: i})
            }
        }
    }, q = {
        onDone: function (e, t) {
            var n = window.isNewMail && $(".messenger") && this.link.closest(".msg");
            if (a(e, t), n) {
                var i = Number(n.className.match(/msg_id_(\d+)/)[1]);
                store.mail.msgs[i].textFull = n.$(".msg__text").innerHTML
            }
        }
    }, R = {
        onDone: function (e) {
            this.link && (l(c(e), u("pic_body_wrap", this.link)), d(this.link))
        }
    }, z = {
        onStart: function () {
            f("cm_item_loading", this.link)
        }, onDone: function (e) {
            this.link && a(this.link.parentNode, e)
        }
    }, F = {
        onDone: function (e, i) {
            if (e) {
                var o = window, s = o.photo;
                p(e + "_msg");
                var c = t(e);
                if (c) {
                    if (i) {
                        var u = r("div", {id: e + "_msg", className: (c.className || "") + " post_message_item"});
                        a(u, '<div class="pi_cont">' + i + "</div>"), l(u, c), d(c), n("rtm_reply_wrap", c) && window.reply && window.reply.edithide()
                    } else _(e);
                    if (this.photo_id) {
                        var f = s.get(this.photo_id);
                        if (f) {
                            var m = n("photoview"), h = n("comments_wrap", m);
                            f.comments_html = a(h)
                        }
                    }
                }
            }
        }
    }, U = {
        onDone: function (e, n, i, o) {
            if (e) {
                p(e + "_msg");
                var s = t(e);
                if (s) if (n) {
                    var c = (/^([a-z]+)_item$/i.exec(i || "") || [])[1] || "inline",
                        u = r("div", {id: e + "_msg", className: c + "_item " + c + "_message_item"}),
                        f = o || "message_item_cont";
                    a(u, '<div class="' + f + '">' + n + "</div>"), l(u, s), d(s)
                } else n === !1 ? d(s) : _(s)
            }
        }
    }, W = {
        onDone: function (e, n, i) {
            if (e) {
                var o = t(e), c = m(o) || m(e + "_msg"), u = h(o) || h(e + "_msg"), d = c + (320 > M ? u : 0) - v();
                if (p(e + "_msg"), o) {
                    var f = g("wall_item", o) || g("post", o) ? "wall" : "post";
                    if (i) {
                        var _ = r("div", {id: e + "_msg", className: f + "_item post_message_item"});
                        a(_, '<div class="pi_cont">' + i + "</div>"), l(_, o)
                    }
                    if (n) {
                        w(y(f + "_item"), function () {
                            var e = this.id ? this.id.match(/^wall((-?\d+)_(-?\d+)(_\d+)?)$/) : !1,
                                t = b(this, "data-copy"), a = t ? t.match(/^(-?\d+)_(-?\d+)$/) : !1;
                            return e ? void((!e[4] && e[2] == n || e[4] && e[3] == n || a && a[1] == n) && s("post_item_ignored", this, i)) : !0
                        });
                        var M = k(), c = m(o) || m(e + "_msg"), u = h(o) || h(e + "_msg"),
                            C = c + (320 > M ? u : 0) - d;
                        v(C)
                    }
                }
            }
        }
    }, V = {
        onDone: function (e, n, i) {
            if (e) {
                var o = t(e);
                if (p(e + "_msg"), o) {
                    if (i) {
                        var c = r("div", {id: e + "_msg", className: "wall_item post_message_item"});
                        a(c, '<div class="pi_cont">' + i + "</div>"), l(c, o)
                    }
                    s("post_item_ignored", o)
                }
            }
        }
    }, X = {
        onStart: function () {
            var e = u("show_more_wrap", this.link), t = n("show_more", e) || this.link, i = r("div", {
                id: "show_more_loading",
                className: "show_more_loading",
                innerHTML: '<i class="i_loading">&nbsp;</i>'
            }), a = r("div", {id: "show_more_wrap", className: "show_more_wrap"});
            b(i, "data-href", M(t)), a.appendChild(i), C(a, e), p(e)
        }, onDone: function (e) {
            var n = window, i = n.cur;
            P.tAlProcess = (new Date).getTime();
            var a = t("show_more_wrap"), r = c(e);
            C(r, a), p(a), P.prepare_nav("mcont"), P.prepare_click("mcont"), S(100), P.tAlModule = i.module, P.tAlRender = (new Date).getTime()
        }
    }, Y = {
        onStart: X.onStart, onDone: function (e, i) {
            var a = window, r = a.cur;
            P.tAlProcess = (new Date).getTime();
            var o = n("photos_page", "mcont"), s = t("show_more_wrap"), l = c(i);
            e = e.replace(/<img src="([^"]+)" class="/gi, '<img data-src="$1" class="_image ');
            var u = c(e);
            o && o.appendChild(u), C(l, s), p(s), P.prepare_nav("mcont"), P.prepare_click("mcont"), S(100), P.tAlModule = r.module, P.tAlRender = (new Date).getTime()
        }
    }, G = {
        onStart: X.onStart, onDone: function (e, i) {
            var a = window, r = a.cur;
            P.tAlProcess = (new Date).getTime();
            var o = n("audios_block", n("audios", "mcont")), s = t("show_more_wrap"), l = c(i), u = c(e);
            o && o.appendChild(u), C(l, s), p(s), P.prepare_nav("mcont"), P.prepare_click("mcont"), P.tAlModule = r.module, P.tAlRender = (new Date).getTime()
        }
    }, Q = {
        onDone: function (e) {
            var t = this.link.parentNode;
            a(t, e)
        }
    }, K = {
        onStart: function () {
            f("mva_item_loading", this.link)
        }, onDone: function (e, t) {
            T("mva_item_loading", this.link), e.upload_url || t && N.hard_go(t), B && B.crop(e) || t && N.hard_go(t)
        }, onFail: function () {
            T("mva_item_loading", this.link)
        }
    }, J = {
        onStart: function () {
            var e = this.link, t = u("notify_lite", e);
            if (t) return p(t);
            for (; e = e.parentNode;) if (g("notify_item", e)) {
                p(g("notify_panel", e.parentNode) ? e.parentNode : e);
                break
            }
        }
    }, Z = {
        onStart: function () {
            var e = y("pagination", "mcont");
            w(e, function (e, t) {
                C(r("div", {className: "summary_loading", innerHTML: '<i class="i_loading"></i>'}), t.firstChild)
            })
        }, onDone: function (e, i) {
            var r = window, o = r.mail, s = t("messages" + i);
            s && (a(s, e), o.onMessagesRepainted(!0), !this.save && E()), this.save && o.saveDialog({messages: e}, i), this.clear && (a(A("textarea", "write_form"), ""), p(n("pi_medias", "write_form"))), T("cp_attach_btn_sel", n("cp_attach_btn")), window.isNewMail && MailScrap.clearSystemMessage2()
        }, onFail: function () {
            var e = Array.prototype.slice.call(arguments), t = e.shift();
            switch (t) {
                case 2:
                    this.link.form && this.link.form.submit()
            }
        }
    }, et = {
        onStart: function () {
            var e = y("pagination", "mcont");
            w(e, function (e, t) {
                C(r("div", {className: "summary_loading", innerHTML: '<i class="i_loading"></i>'}), t.firstChild)
            })
        }, onDone: function (e, n) {
            var i = window, r = i.mail, o = t("dialogs");
            o && (a(o, e), !this.no_scroll && E(), r.cacheDialogsPage()), r.save(n)
        }
    };
    window.Like = O, window.PhotoLike = L, window.PhotoTag = D, window.PhotoDelete = j, window.Poll = q, window.CopyHistory = R, window.ToggleMenu = z, window.Comment = F, window.ItemDelete = U, window.FeedIgnore = W, window.FeedIgnoreComments = V, window.Wall = X, window.Photos = Y, window.Audios = G, window.FixPost = Q, window.ProfileMove = K, window.Notify = J, window.Dialog = Z, window.Dialogs = et
}, function () {
    var e = window, t = e.each, n = e.geByClass, i = e.attr, a = e.replaceClass, r = e.ge, o = e.val, s = e.addClass,
        l = e.toggleClass, c = e.removeClass, u = e.ce, d = e.se, f = e.addEvent, p = e.removeEvent, _ = e.extend,
        m = (e.qs2obj, e.vkNow), h = e.geByClass1, v = e.setStyle, g = e.remove, w = e.intval, y = e.isArray,
        b = e.hasClass, k = e.after, M = e.cdf, C = e.stripTags, S = e.getHref, T = e.indexOf, E = e.htsc,
        A = e.replaceEntities, x = e.escapeAttr, P = e.replace, I = e.scrollTop, B = e.before, H = e.alLoadingFix,
        N = window, O = N.mobPlatforms, L = N.isTouch, D = window, j = D.ajax, q = window, R = q.mediaUpload,
        z = window, F = z.nav, U = window, W = U.Dialog, $ = U.Dialogs, V = function () {
            var e = {}, T = {}, E = null, A = null, N = !1, D = {}, q = {}, z = {}, U = null;
            F.onBeforeGo(function (e, t, n) {
                if (F.getQuery("community") && (!n || !n.ignore_cur_process)) {
                    var a = "string" == typeof e ? e : i(e, "href") || i(e, "data-href");
                    if ("/mail" === a) return F.go(e, t, {ignore_cur_process: !0}), !0
                }
            }), F.onBeforeGo(function () {
                if (F.getQuery("community")) var e = j.post("/", {_ajax: 1, act: "ping"}, {
                    onDone: function () {
                        try {
                            var t = JSON.parse(e.response), n = t && t[1] && t[1][2];
                            V.actualizeMessagesCornerCounter(n)
                        } catch (i) {
                        }
                    }
                })
            });

            function G() {
                if (E) {
                    var s = [], l = !1;
                    if (t(n("_unread"), function () {
                            var e = +i(this, "data-id");
                            e && s.push(e), l = V.getPeerByMsg(e), a("_unread", "_read", this)
                        }), l) {
                        var c = r("messages" + l);
                        c && e[l] && (e[l].messages = o(c))
                    }
                    s.length && V.sendMarkAsRead(E, s)
                }
            }

            function Q(e, t) {
                t ? (s("lvi", e), l("mlvi", e, !!O[t]), l("vkmobilelvi", e, 8 == t)) : (c("lvi", e), c("mlvi", e), c("vkmobilelvi", e))
            }

            function K(e, t) {
                var n, i = t.split("."), a = i.length, r = e;
                for (n = 0; a > n; n++) if (r = r[i[n]], !r) return null;
                return r
            }

            function J(e, t, n) {
                var i, a, r = t.split("."), o = r.length - 1, s = e;
                for (a = 0; o > a; a++) i = r[a], s = s[i] || (s[i] = {});
                s[r[o]] = n
            }

            function Z(e) {
                var n = e.updater;
                n(document.body), t(e.caches, function (t, n) {
                    var i = n.storage, a = n.getter, r = K(i, a);
                    if (r) {
                        var o = "string" == typeof r;
                        o && (r = u("div", {innerHTML: r})), e.updater(r), J(i, a, o ? r.innerHTML : r)
                    }
                })
            }

            return {
                wrapLinks: Y,
                onShowDialogFromCache: d(),
                onShowWritePageFromCache: d(),
                onShowDialogsPageFromCache: d(),
                onMessagesRepainted: d(),
                init: function (t, n) {
                    var i = window, a = i.im;
                    window.cur.destroy.push(function () {
                        AudioMessagePlayer.detachPlayer()
                    }), t && (E = t, n && (V.saveDialog(n, t), A = e[t])), N || (N = !0, f(document, L ? "touchstart" : "mousedown", G)), a.on()
                },
                unpinMessage: function (e) {
                    $$(".pinnedMsg_peer_" + e).forEach(function (e) {
                        return e.classList.add("pinnedMsg_hidden")
                    })
                },
                pinMessage: function (e, t) {
                    $$(".pinnedMsg_peer_" + e).forEach(function (e) {
                        return e.outerHTML = t
                    })
                },
                clear: function () {
                    F.clear();
                    var t = window, n = t.im;
                    e = {}, T = {}, D = {}, E = A = null, p(document, L ? "touchstart" : "mousedown", G), N = !1, n.off()
                },
                send: function (e) {
                    return R && !R.checkUploading() ? !1 : j.click(e, _({clear: !0, save: !0}, W), {lock: !0})
                },
                save: function (n) {
                    t(n, function (t, n) {
                        e[t] && n.last_msg == e[t].last_msg && delete n.messages, V.saveDialog(n, t)
                    })
                },
                saveDialog: function (n, i) {
                    e[i] || (e[i] = {});
                    var a = e[i];
                    _(a, n), a.msgs && t(a.msgs, function (e, t) {
                        D[t] = i
                    })
                },
                getPeerByMsg: function (e) {
                    return D[e] || !1
                },
                cacheDialogsPage: function () {
                    if (!F.getQuery("community") || !F.getQuery("tab")) {
                        T.page = o("m");
                        var e = F.getQuery();
                        T.link = e.act ? X("/mail") : F.cur
                    }
                },
                keyup: function (e, t, n) {
                    var i = U || "", a = e.value || "";
                    (i.length != a.length || i != a) && (V.myTyping(t, n), U = a)
                },
                myTyping: function (e, t) {
                    if (!(-2e9 >= e)) {
                        var n = m();
                        z[e] && n - z[e] < 5e3 || (z[e] = n, j.post("/mail", {
                            _ajax: 1,
                            act: "typing",
                            peer: e,
                            hash: t,
                            community: F.getQuery("community")
                        }))
                    }
                },
                typing: function (e, t) {
                    t = t || e;
                    e > 2e9 ? (q[e] || (q[e] = {}), q[e][t] = m()) : q[e] = m(), V.updateTyping(e)
                },
                updateTyping: function (e) {
                    var n = function (e, t) {
                        return e.getAttribute && e.getAttribute(t)
                    }, i = window, a = i.lang, l = r("dialog_near" + e), u = h("di_current_peer", l), d = h("di_typing", l);
                    if (l) {
                        var f = [], p = m();
                        if (e > 2e9) t(q[e] || {}, function (e, t) {
                            n(d, "data-u" + e) && t && 6e3 > p - t && f.push(e)
                        }); else {
                            var _ = q[e];
                            n(d, "data-u" + e) && _ && 6e3 > p - _ && f.push(e)
                        }
                        if (f.length) {
                            if (1 == f.length) {
                                var g = f[0], w = n(d, "data-u" + g), y = n(d, "data-s" + g);
                                o(d, '<i class="i_typing"></i>' + (a.mobile_mail_typing[y] || "").replace("{user}", w))
                            } else {
                                t(f, function (e, t) {
                                    f[e] = n(d, "data-u" + t)
                                });
                                var b = f.pop();
                                o(d, '<i class="i_typing"></i>' + (a.mobile_mail_multi_typing || "").replace("{users}", f.join(", ")).replace("{last_user}", b))
                            }
                            u.offsetWidth && v(d, "minWidth", u.offsetWidth), s("di_typing_now", l), setTimeout(function () {
                                s("di_typing_animated", l)
                            }, 10), setTimeout(function () {
                                V.updateTyping(e)
                            }, 2e3)
                        } else o(d, ""), v(d, "minWidth", 0), c("di_typing_animated", l), c("di_typing_now", l)
                    }
                },
                updateOnline: function (i, a) {
                    var s = r("messages" + i);
                    if (s && g(h("di_activity", s)), t(n("_lv" + i, "mcont"), function (e, t) {
                            Q(t, a)
                        }), e[i]) {
                        if (e[i].write_form) {
                            var l = u("div", {innerHTML: e[i].write_form});
                            t(n("_lv" + i, l), function (e, t) {
                                Q(t, a)
                            }), e[i].write_form = o(l)
                        }
                        if (e[i].messages) {
                            var l = u("div", {innerHTML: e[i].messages});
                            g(h("di_activity", l)), e[i].messages = o(l)
                        }
                    }
                },
                updateImportantMessages: function (t, n, i) {
                    Z({
                        caches: [{storage: T, getter: "page"}, {storage: F.page_get(X("/mail")), getter: "html"}],
                        updater: function (e) {
                            var t = h("dialogs_filter_button_important", e);
                            if (t) {
                                var n = w(o(t)) + i;
                                o(t, n), l("dialogs_filter_without_important", h("dialogs_filter", e), 0 === n)
                            }
                        }
                    }), Z({
                        caches: [{storage: e, getter: t + ".messages"}], updater: function (e) {
                            var t = h("_msg" + n, e);
                            t && l("msg_item_important", t, 1 === i)
                        }
                    })
                },
                updateImportantDialog: function (e, t) {
                    F.getQuery("community") && Z({
                        caches: [{storage: T, getter: "page"}, {
                            storage: F.page_get(X("/mail")),
                            getter: "html"
                        }], updater: function (n) {
                            var i = h("_peer" + e, n);
                            i && l("dialog_item_important", i, t)
                        }
                    })
                },
                sendMarkAsRead: function (n, i) {
                    y(i) || (i = [i]);
                    var a = e[n];
                    return a && a.hash ? void j.post("/mail", {
                        _ajax: 1,
                        act: "mark_read",
                        peer: n,
                        msgs: i.join(","),
                        hash: a.hash,
                        community: F.getQuery("community")
                    }, {
                        onDone: function (e) {
                            e && t(i, function (e, t) {
                                V.markAsRead(n, t)
                            })
                        }
                    }) : void 0
                },
                markAsRead: function (t, n) {
                    var i = window, a = i.im, s = r("messages" + t);
                    if (s) {
                        var l = h("_msg" + n, s);
                        a.nu && b("_read", l) || c("mi_unread", l);
                        var d = e[t];
                        if (d && d.messages) {
                            var f = u("div", {innerHTML: d.messages}), l = h("_msg" + n, f);
                            a.nu && b("_read", l) || c("mi_unread", l), d.messages = o(f)
                        }
                    }
                },
                markPeerAsRead: function (a, s, l) {
                    var d = r("messages" + a);
                    if (d) {
                        t(n("msg_item", d), function () {
                            if (!l == !b("_unread", this)) return !0;
                            var e = +i(this, "data-id");
                            s >= e && !b("_read", this) && c("mi_unread", this)
                        });
                        var f = e[a];
                        if (f && f.messages) {
                            var p = u("div", {innerHTML: f.messages});
                            t(n("msg_item", p), function () {
                                if (!l == !b("_unread", this)) return !0;
                                var e = +i(this, "data-id");
                                s >= e && !b("_read", this) && c("mi_unread", this)
                            }), f.messages = o(p)
                        }
                    }
                    var _ = r("dialogs"), m = l ? "di_unread_outbox" : "di_unread_inbox";
                    if (_) {
                        var f = h("_peer" + a, _);
                        f && b(m, f) && (c(m, f), g(h("di_unread_cnt", f)))
                    } else if (T.page) {
                        var p = u("div", {innerHTML: T.page}), f = h("_peer" + a, p);
                        f && b(m, f) && (c(m, f), g(h("di_unread_cnt", f))), T.page = o(p)
                    }
                    Z({
                        caches: [{storage: F.page_get(X("/mail")), getter: "html"}], updater: function (e) {
                            var t = h("_peer" + a, e);
                            t && b(m, t) && (c(m, t), g(h("di_unread_cnt", t)))
                        }
                    })
                },
                markAsDeleted: function (t, n) {
                    var i = r("messages" + t);
                    if (i) {
                        g(h("_msg" + n, i));
                        var a = e[t];
                        if (a && a.messages) {
                            var s = u("div", {innerHTML: a.messages});
                            g(h("_msg" + n, s)), a.messages = o(s)
                        }
                    }
                },
                addMessage: function (t, n, i, a) {
                    if (F.clear(), 2e9 > t ? delete q[t] : q[t] && delete q[t][i], V.updateTyping(t), a !== !0) {
                        if (t && n && (D[n] = t), !h("_msg" + n)) {
                            var s = e[t];
                            if (s && s.messages) {
                                s.msgs && s.msgs.push(n);
                                var l = u("div", {innerHTML: s.messages}), c = h("di_activity", l);
                                c ? (k(M(a), c), s.messages = o(l)) : s.messages = a + s.messages;
                                var d = r("messages" + t);
                                d && (o(d, s.messages), V.onMessagesRepainted(!0))
                            } else {
                                var d = r("messages" + t);
                                if (d) {
                                    var c = h("di_activity", d);
                                    c ? k(M(a), c) : o(d, a + o(d))
                                }
                            }
                        }
                    } else if (r("dialogs") && "/mail" == F.path) {
                        var f = F.getQuery();
                        f.act || f.offset || f.q || j.click(X(F.path), _({no_scroll: !0}, $))
                    }
                },
                replaceMessage: function (t, n, i, a) {
                    var s = r("messages" + t), l = e[t];
                    if (l && l.messages) {
                        var c = u("div", {innerHTML: l.messages}), d = h("_msg" + n, c);
                        d.outerHTML = a, l.messages = o(c), o(s, l.messages)
                    } else h("_msg" + n).outerHTML = a
                },
                getMsgHTML: function (t, n, a, s, l, c, u, d) {
                    var f = window, p = f.vk, _ = f.lang, m = 2 & n ? p.id : u && u.from || a;
                    if (!m) return !1;
                    if (!r("messages" + a)) return !0;
                    if (u.attach1 || u.fwd || u.geo || u.emoji) return !1;
                    if (u.source_act) return !1;
                    if (!e[a] || !e[a].hash) return !1;
                    var v = "_u" + m, g = h(v, "mcont", "a"), y = C(i(g, "data-name") || o(g) || ""), b = S(g),
                        k = h(v, "mcont", "img"), M = k && k.src || "";
                    if (!y || !b || !M) return !1;

                    function T() {
                        var e = new Date(1e3 * s), t = e.getHours(), n = e.getMinutes();
                        return t + ":" + (10 > n ? "0" : "") + n
                    }

                    a = w(a), t = w(t), l = l && -1 == l.toString().indexOf(" ... ") && 2e9 > a ? l : "";
                    var E = 1 & n ? " mi_unread" : "";
                    return !(2 & n) && 1 & n && (E += E ? " _unread" : ""), c = V.wrapLinks(c, n), ('<a name="msg{{msgId}}"></a><div  class="msg_item _msg{{msgId}}{{msgClass}}"  data-id="{{msgId}}"  onclick="return MessagesActions.onMessageClick(event);">  <div class="mi_iwrap">    <a class="al{{cl}}" href="{{href}}">      <img src="{{photo}}" class="mi_img {{cl}}" />    </a>  </div>  <div class="mi_cont">    <div class="mi_head">      <a class="mi_date" href="' + X("/mail?act=msg&id={{msgId}}").replace(/\&/g, "&amp;") + '">        {{time}}      </a>      {{edited}}\n      <a class="mi_author al{{cl}} {{cl}}" href="{{href}}" data-name="{{dataName}}">        {{name}}      </a>    </div>    <div class="mi_body">      {{mi_title}}      <div class="mi_text">{{text}}</div>    </div>  </div></div>').replace(/{{msgId}}/g, t).replace(/{{cl}}/g, v).replace(/{{href}}/g, b).replace("{{msgClass}}", E).replace("{{edited}}", d ? '<span class="mi_edited">' + _.mobile_mail_edited + "</span>" : "").replace("{{photo}}", M).replace("{{time}}", T(s)).replace("{{dataName}}", x(y)).replace("{{name}}", y.split(" ").shift()).replace("{{mi_title}}", l ? '<div class="mi_title">' + l + "</div>" : "").split("{{text}}").join(c)
                },
                updateStickers: function () {
                    var t = window, n = t.cur, i = window, a = i.post, o = e[E];
                    if (o) {
                        var s = o.write_form ? (n.sticker_panel || "").split("mail-0").join("mail" + E) : "",
                            l = r("stickers_panel");
                        l && (P(M(s), l), l = null, a.stickersInit())
                    }
                },
                showDialog: function (t, n, i) {
                    var a = window, r = a.cur, s = window, l = s.MessagesActions, d = window, f = d.post;
                    if (l.hasFwdMessages()) return l.attachFwdMessages(n), !1;
                    T.scroll_top = I();
                    var p = e[n];
                    if (p) {
                        var m = u("div", {innerHTML: o("m")}), v = h("mhb_back", m);
                        if (v && p.header) {
                            var w = u("div");
                            o(w, p.header), B(w.firstChild, v), g(v)
                        }
                        var y = p.write_form ? (r.sticker_panel || "").split("mail-0").join("mail" + n) : "";
                        o(h("pcont", h("mcont", m)), p.write_form + y + (n ? '<div id="messages' + n + '" class="messages bl_cont">' + (p.messages || "") + '<div id="al_loading"></div></div>' : "")), o("m", m.innerHTML), f.stickersInit(), j.refreshLinks(p.fv_link, p.app_link), H(), E = n, A = p;
                        var b = S(t);
                        F.go(b, null, {
                            push_only: !0,
                            no_push: i
                        }), n ? (U = null, V.updateTyping(n), j.click(b, _({save: n}, W), {scroll: !0})) : V.onShowWritePageFromCache(!0), V.onShowDialogFromCache(!0), I(0, 10)
                    } else F.al_go(p && p.cur_link || S(t) || F.cur);
                    return F.getQuery("community") && "unread" === F.getQuery("ctab") && c("al_back", h("mhb_back")), !1
                },
                backToDialogs: function (e) {
                    if (T.page) F.go(T.link, null, {
                        push_only: !0,
                        no_push: e
                    }), j.click(T.link, _({no_scroll: !0}, $)), o("m", T.page), j.refreshLinks(i("fv_link", "href") || i("fv_link", "data-href"), "vkontakte://vk.com/mail"), E = A = null, I(T.scroll_top || 0), V.onShowDialogsPageFromCache(!0); else {
                        var t = X(T.link || "/mail");
                        F.go(t, null, {push_only: !0, no_push: e}), F.al_go(t)
                    }
                },
                actualizeMessagesCornerCounter: function (e) {
                    Z({
                        caches: [{storage: T, getter: "page"}, {storage: F.page_get(X("/mail")), getter: "html"}],
                        updater: function (t) {
                            var n = h("mhi_notify", t), i = h("mh_notify_counter", n);
                            i || (i = u("em", {className: "mh_notify_counter"}), append(i, n)), e ? i.innerText = e : n.innerHTML = "&nbsp;"
                        }
                    })
                }
            }
        }();

    function X(e) {
        var t = window.nav.getQuery(), n = t.community, i = t.ctab,
            a = n && -1 === e.indexOf("community=") ? "community=" + n : "",
            r = n && i && -1 === e.indexOf("ctab=") ? "&ctab=" + i : "";
        return a ? e + (e.indexOf("?") >= 0 ? "&" : "?") + a + r : e
    }

    function Y(e, t) {
        var n = 32768 & t;
        return e = e.replace(/([a-zA-Z\-_\.0-9]+@[a-zA-Z\-_0-9]+\.[a-zA-Z\-_\.0-9]+[a-zA-Z\-_0-9]+)/g, function (e) {
            return '<a href="/write?email=' + e + '">' + e + "</a>"
        }), e = e.replace(/(https?:\/\/)?(([A-Za-z�-��-���0-9@][A-Za-z�-��-���0-9@\-\_\.]*[A-Za-z�-��-���0-9@])(\/([A-Za-z�-��-�0-9@\-\_#%&?+\/\.=;:~]*[^\.\,;\(\)\?<\&\s:])?)?)/gi, function () {
            var e = arguments[3], t = arguments[2], i = arguments[0], a = arguments[1] || "http://";
            if (-1 == e.indexOf(".") || -1 != e.indexOf("..")) return i;
            var r = e.split(".").pop();
            if (r.length > 7 || -1 == T("place,camera,info,name,academy,aero,arpa,coop,media,museum,mobi,travel,xxx,asia,biz,com,net,org,gov,mil,edu,int,tel,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,ck,cl,cm,cn,co,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,er,es,et,eu,fi,fj,fk,fm,fo,fr,ga,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,im,in,io,iq,ir,is,it,je,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,ru,rs,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,um,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,ye,yt,yu,za,zm,zw,��,���,����,������,���,cat,pro,local".split(","), r)) return i;
            if (-1 != i.indexOf("@")) return i;
            try {
                i = decodeURIComponent(i)
            } catch (o) {
            }
            return i.length > 55 && (i = i.substr(0, 53) + ".."), i = E(i), !n && e.match(/^([a-zA-Z0-9\.\_\-]+\.)?(vkontakte\.ru|vk\.com|vkadre\.ru|vshtate\.ru|userapi\.com|vk\.me)$/) ? (t = A(t).replace(/([^a-zA-Z0-9#%;_\-.\/?&=\[\]])/g, encodeURIComponent), '<a href="' + (a + t).replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '">' + i + "</a>") : '<a href="/away?to=' + encodeURIComponent(a + A(t)) + '" target="_blank">' + i + "</a>"
        })
    }

    window.mail = V, window.makeUrl = X
}, function (e, t, n) {
    var i = n(82), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = window, s = o.gpeByClass, l = o.setStyle, c = "msg_item", u = "-webkit-tap-highlight-color";
    a["default"]._onMouseDown(function (e) {
        for (var t = e; ;) if (t = s(c, t), !t || t && attr(t, "data-id")) break;
        t && (d(t), setTimeout(function () {
            return f(t)
        }, 400))
    });

    function d(e) {
        l(e, u, "transparent")
    }

    function f(e) {
        l(e, u, "initial")
    }
}, function () {
    var e = window, t = e.hasClass, n = e.ge, i = e.geByClass1, a = e.getCw, r = e.getCh, o = e.attr, s = e.setStyle,
        l = e.extend, c = e.preventEvent, u = e.isUndefined, d = e.clog, f = e.val, p = e.vkNow, _ = e.getW, m = e.getH,
        h = e.scrollTop, v = e.gpeByClass, g = e.toggleClass, w = e.cancelEvent, y = e.qs2obj, b = e.obj2qs,
        k = e.removeClass, M = e.addClass, C = e.addEvent, S = e.removeEvent, T = e.len, E = e.show, A = e.each,
        x = e.hide, P = e.escapeAttr, I = e.htsc, B = e.toggle, H = e.formatNum, N = e.remove, O = e.append,
        L = e.reflow, D = window, j = D.ajax, q = window, R = q.thover, z = window, F = z.nav, U = window, W = U.page,
        $ = window, V = $.PhotoLike, X = window, Y = X.zlayer, G = window, Q = G.photo, K = function () {
            var e = !1, D = !1, q = !1, z = !1, U = !1, $ = !1, X = !1, G = !1, J = !1, Z = !1, et = !1, tt = !1, nt = !1,
                it = !1, at = !1, rt = !1, ot = !1, st = !1, lt = !1, ct = !1, ut = !1, dt = !1, ft = !1, pt = {
                    min_scale: 1,
                    max_scale: 3,
                    min_scale_limit: .5,
                    max_scale_limit: 5,
                    anim_duration: 300,
                    inertia_duration: 300,
                    bounce_diff: 1.5,
                    crop_padding: 20,
                    crop_size: 250,
                    fps: 0
                };

            function _t() {
                var a = window, r = a.lang,
                    o = '<div id="z_photoview"><div class="zpv_siblings"><div id="zpv_left" class="zpv_thumb_item"><img class="zpv_img" alt=""></div><div id="zpv_right" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_body"><div id="zpv_center" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_close_msg_wrap"><div class="zpv_close_msg">' + r.mobile_zphoto_move_to_close + '</div></div><div class="zpv_controls"><div class="mhead zpv_header"><a class="zpv_close_btn" onclick="return photoview.closePhoto(event);"><i class="zpv_close_icon"></i></a><div class="hb_wrap"><h1 id="zpv_summary" class="hb_btn mh_header"></h1></div></div><div class="zpv_zoom_btns"><a class="zpv_zoom_btn zpv_zoomin"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a><a class="zpv_zoom_btn zpv_zoomout"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a></div><div class="zpv_bottom"><div class="zpv_photo_desc_wrap"></div><div class="zpv_bottom_body"><table class="zpv_values like_box row_table"></table></div></div></div><div class="zpv_tags"></div><div class="zpva zpv_crop"><div class="zpv_crop_box"></div><div class="zpv_crop_loading"></div></div></div>',
                    s = t("x2", window.bodyNode), l = "/images/mobile/zpv_icons" + (s ? "_2x" : "") + ".png?2";
                (new Image).src = l, Y.create(o, la), e = n("z_photoview"), D = i("zpv_body", e), q = i("zpv_siblings", e), z = i("zpv_controls", e), J = i("zpv_zoom_btns", e), $ = i("zpv_close_msg_wrap", e), U = i("zpv_bottom", e), X = i("zpv_photo_desc_wrap", e), G = i("zpv_values", U), Z = i("zpv_zoomin", J), et = i("zpv_zoomout", J), at = i("zpv_tags", e), rt = i("zpv_crop", e), tt = i("zpv_img", "zpv_center"), nt = i("zpv_img", "zpv_left"), it = i("zpv_img", "zpv_right")
            }

            function mt() {
                e = D = q = z = $ = !1, U = G = !1, J = Z = et = !1, tt = nt = it = at = rt = !1
            }

            function ht(e) {
                var t = a(), n = r(), i = t / 2, o = n / 2;
                if (e.touches) {
                    for (var s = 0, l = 0, c = 0, u = 0, d = Math.min(2, e.touches.length); d > l; l++) c += e.touches[l].pageX, u += e.touches[l].pageY, s++;
                    return d ? {pageX: c / d - i, pageY: u / d - o} : {pageX: -i, pageY: -o}
                }
                return {pageX: e.pageX - i, pageY: e.pageY - o}
            }

            function vt(e, t) {
                var n = t.pageX - e.pageX, i = t.pageY - e.pageY;
                return Math.sqrt(n * n + i * i)
            }

            function gt(e) {
                if (!e) return e;
                var t = tt.width, n = tt.height, i = t / 2, a = n / 2;
                return [e[0] + i, e[1] + a]
            }

            function wt(e) {
                if ("undefined" != typeof e.naturalWidth) return {width: e.naturalWidth, height: e.naturalHeight};
                var t = new Image;
                return t.src = e.src, {width: e.width, height: e.height}
            }

            function yt(e) {
                var t = o(e, "data-id"), n = Qi(Ui), i = n.tags || {}, a = i[t] || [];
                return bt(a)
            }

            function bt(e) {
                return e[0] ? {
                    coords: {x: e[0][0], y: e[0][1], w: e[0][2], h: e[0][3]},
                    name: e[1],
                    href: e[2],
                    al: e[3]
                } : {}
            }

            function kt(e) {
                s(q, "overflow", e ? "visible" : "hidden")
            }

            var Mt = null, Ct = null;

            function St(e, t, n, i, a, r, o, l, c) {
                if (!pt.fps || c) {
                    var u = !1, d = l ? function () {
                        u || (u = !0, l())
                    } : !1;
                    r ? (s.animate(q, "transform", {
                        duration: r,
                        func: o
                    }, d), s.animate(tt, a === !1 ? "transform" : "transform, opacity", {
                        duration: r,
                        func: o
                    }, d), s.animate(at, a === !1 ? "transform" : "transform, opacity", {
                        duration: r,
                        func: o
                    }, d), s.animate($, a === !1 ? "transform" : "transform, opacity", {
                        duration: r,
                        func: o
                    }, d), An = !0) : An && (s.animate(q), s.animate(tt), s.animate(at), s.animate($), An = !1), s.transform(q, {translate: [t, 0]}), s.transform(tt, e, [n, i]), bi(e, n, i), a !== !1 && (s(tt, "opacity", a), (fn || pn) && (s(at, "opacity", a), _n = !0), gi(i, a)), hi(e)
                } else Mt = [e, t, n, i, a, r, o, l, !0], Ct || Tt()
            }

            function Tt() {
                Mt && (St.apply(window, Mt), Mt = null), clearTimeout(Ct), Ct = pt.fps ? setTimeout(Tt, 1e3 / pt.fps) : null
            }

            function Et(e, t, n) {
                Zn(!0), St(Zt, Xt, Kt, Jt, xn, e, t, n), xn = !1
            }

            function At(e, t, n, i) {
                St(e.currentScale, e.curBodyX, e.currentX, e.currentY, !1, t, n, i)
            }

            function xt(e) {
                e = gt(e || [0, 0]), s.transformOrigin(tt, e)
            }

            var Pt = !1, It = !1, Bt = null;

            function Ht(e) {
                var t = e[1].pageX - e[0].pageX, n = e[1].pageY - e[0].pageY, i = Math.sqrt(t * t + n * n),
                    a = 180 * Math.atan2(n, t) / Math.PI;
                return {distance: i, angle: a}
            }

            function Nt(e) {
                if (!Pt) return {scale: 1, rotation: 0};
                if (e.length < 2) return {scale: Pt.scale, rotation: Pt.rotation};
                var t = Ht(e), n = t.distance / Pt.startDistance, i = t.angle - Pt.startAngle;
                -90 > i && (i += 360), i > 270 && (i -= 360);
                var a = {scale: n, rotation: i};
                return l(Pt, a), a
            }

            function Ot(e) {
                var t = Ht(e);
                if (Pt) {
                    var n = t.distance / Pt.scale, i = t.angle - Pt.rotation;
                    -180 > i && (i += 360), i > 180 && (i -= 360);
                    var a = {startDistance: n, startAngle: i};
                    l(Pt, a)
                } else Pt = {startDistance: t.distance, startAngle: t.angle, scale: 1, rotation: 0}
            }

            function Lt(e) {
                return l({originalEvent: e}, e, Nt(e.touches), ht(e))
            }

            function Dt(e) {
                var t = e.touches;
                if (t) {
                    if (t.length > 5 || t.length < 2) return void(Pt && (mi(Lt(e)), Pt = !1));
                    if (Pt) return void Ot(t);
                    pi(Lt(e)), Ot(t)
                }
            }

            function jt(e) {
                var t = e.touches;
                if (t) return t.length > 5 || t.length < 2 ? void(Pt && (mi(Lt(e)), Pt = !1)) : void(Pt && _i(Lt(e)))
            }

            function qt(e) {
                var t = e.touches;
                if (t) return (t.length > 5 || t.length < 2) && Pt && (mi(Lt(e)), Pt = !1), Pt ? void Ot(t) : void 0
            }

            function Rt(e) {
                c(e);
                var t = (e.detail ? e.detail : e.wheelDelta) > 0 ? 1.05 : .95, n = l({originalEvent: e}, e);
                It || (It = 1, ui(e), pi(l(n, {scale: It}))), It *= t, _i(l(n, {scale: It})), clearTimeout(Bt), Bt = setTimeout(function () {
                    mi(l(n, {scale: It})), fi(e), It = !1
                }, 200)
            }

            var zt, Ft, Ut, Wt, $t, Vt, Xt, Yt, Gt, Qt, Kt, Jt, Zt, en, tn, nn, an, rn, on, sn, ln, cn, un, dn, fn, pn, _n,
                mn, hn, vn, gn, wn, yn, bn, kn, Mn, Cn, Sn, Tn, En, An, xn;

            function Pn() {
                un = !1, dn = !1, fn = !0, pn = !1, yn = !1, bn = !0, kn = !1, Mn = !1, An = !1, xn = !1, lt = !1, ut = !1, dt = !1, ft = !1, In()
            }

            function In() {
                zt = 0, Ft = 0, Ut = 0, Wt = 0, $t = 1, Vt = !0, Xt = 0, Yt = 0, Gt = 0, Qt = 1, Kt = 0, Jt = 0, Zt = 1, en = !1, tn = !1, nn = !1, an = !1, rn = !1, on = !1, sn = !1, ln = !1, cn = !1, _n = !1, mn = !1, hn = !1, vn = !1, gn = !1, wn = !1, Cn = !1, Sn = !1, Tn = !1, En = !1
            }

            function Bn() {
                return {
                    lastScale: $t,
                    deltaX: zt,
                    deltaY: Ft,
                    pointX: Ut,
                    pointY: Wt,
                    curScale: Qt,
                    currentScale: Zt,
                    curX: Yt,
                    curY: Gt,
                    currentX: Kt,
                    currentY: Jt,
                    curBodyX: Xt
                }
            }

            function Hn(e, t, n) {
                n = n || Bn(), e = e || {};
                var i = l({}, n, e);
                return u(e.deltaX) || u(e.deltaY) ? u(e.pointX) || u(e.pointY) ? u(e.lastScale) ? u(e.currentScale) ? u(e.curScale) || (i.currentScale = i.lastScale * i.curScale, i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.curScale = i.currentScale / i.lastScale, i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.curScale = 1, i.currentScale = i.curScale * i.lastScale) : (i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.pointX = i.curX + i.deltaX * i.curScale, i.pointY = i.curY + i.deltaY * i.curScale), u(e.curX) || (i.curX = e.curX, i.currentX = i.curX / i.currentScale), u(e.curY) || (i.curY = e.curY, i.currentY = i.curY / i.currentScale), t ? i : (zt = i.deltaX, Ft = i.deltaY, Ut = i.pointX, Wt = i.pointY, $t = i.lastScale, Qt = i.curScale, Zt = i.currentScale, Yt = i.curX, Gt = i.curY, Kt = i.currentX, Jt = i.currentY, Xt = i.curBodyX, void 0)
            }

            function Nn() {
                var e = Y.width || a(), t = Y.height || r();
                if (ft) var n = e, i = Math.min(pt.crop_size, n - 2 * pt.crop_padding), o = i, s = i; else var o = e, s = t;
                return {width: o, height: s}
            }

            function On(e) {
                var t = Nn(), n = t.width, i = tt.width * e, a = (i - n) / 2, r = -a;
                return 0 >= a && (r = a = 0), {min: r, max: a}
            }

            function Ln(e) {
                var t = Nn(), n = t.height, i = tt.height * e, a = (i - n) / 2, r = -a;
                return 0 >= a && (r = a = 0), {min: r, max: a}
            }

            function Dn() {
                if (ft) var e = zi ? zi[0] : {max_scale: pt.max_scale}, t = 1, n = e.max_scale; else var i = wt(tt),
                    t = pt.min_scale, n = Math.max(pt.max_scale, i.width / a(), i.height / r());
                return {min: t, max: n}
            }

            function jn(e) {
                d(Gt, e);
                var t = Y.height || r(), n = Math.abs(Wi) >= 10, i = Math.abs(e) > 1, a = t / 3.5, o = Math.abs(Gt);
                return 0 > Gt * e && (n = !0), e = e || 0, o > a || !n && i ? (Rn(e), !0) : (li() && (xn = 1, Et(300), an = !1, pn && (pn = !1, Mi(!0))), !1)
            }

            function qn() {
                ct && K.close()
            }

            function Rn(e) {
                var t = Y.height || r(), n = 2 * Math.abs(Jt) > t ? .85 : 1.7;
                Hn({curY: (e > 1 ? t : -1 > e ? -t : Gt > 0 ? t : -t) / n}), xn = 0, Et(150, "ease-in", qn), s(z, "width", 0), kn = !0
            }

            function zn(e) {
                var t = Y.width || a(), n = t / 2, i = -n;
                return e = e || 0, (i > Xt || -1 > e) && rn ? (Un(), !0) : (Xt > n || e > 1) && on ? (Wn(), !0) : (li() && Et(300), !1)
            }

            function Fn() {
                yn !== !1 && (kt(!1), na(yn), s.transform(nt), s.transform(it), St(1, 0, 0, 0, 1), xt(), yn = !1)
            }

            function Un() {
                var e = Y.width || a(), t = 1.05 * e;
                Kt -= (t + Xt) / Zt, Xt = -t, yn = Ui + 1, Wi--, Et(300, "ease-out", Fn), Ni(!1, !0), pn = !1, K.onPhotoChange && K.onPhotoChange(Ui + 1, {
                    no_open: !0,
                    local: ut,
                    crop: ft
                })
            }

            function Wn() {
                var e = Y.width || a(), t = 1.05 * e;
                Kt += (t - Xt) / Zt, Xt = t, yn = Ui - 1, Wi++, Et(300, "ease-out", Fn), Ni(!1, !0), pn = !1, K.onPhotoChange && K.onPhotoChange(Ui - 1, {
                    no_open: !0,
                    local: ut,
                    crop: ft
                })
            }

            function $n() {
                var e = window, t = e.lang, n = t.mobile_photos_photoview_header || "", i = yn !== !1 ? yn : Ui;
                n = n.replace("%s", i + 1), n = n.replace(/%s|{count}/, zi.length), f("zpv_summary", n)
            }

            function Vn() {
                if (!Sn) return !1;
                var e = Gn(), t = e[0], n = e[1], i = e[2];
                if (Yn(), !t) return !1;
                var a = nn || an ? 5.1 : 4.7, r = t / a, o = n * r - a * r * r / 2, s = i * r - a * r * r / 2;
                if (r *= 530, o *= 140, s *= 140, .1 > t || !o && !s) return !1;
                if (!an) {
                    var l = {};
                    nn || (l.curX = Yt + o, l.curY = Gt + s), Hn(l);
                    var c = On(Zt);
                    l = {}, Yt < c.min ? l.curBodyX = Vt ? Yt - c.min : 0 : Yt > c.max && (l.curBodyX = Vt ? Yt - c.max : 0), Hn(l)
                }
                return nn ? 4.7 * n : an ? 4.7 * i : r
            }

            function Xn(e) {
                Sn || (Sn = []), Sn.push([p(), e]), Sn = Sn.slice(-20)
            }

            function Yn() {
                Sn = !1
            }

            function Gn() {
                if (!Sn || Sn.length < 2) return [0, 0, 0];
                for (var e = p(), t = !1, n = Sn.pop(), i = Sn.length - 1; i >= 0; i--) {
                    var a = e - Sn[i][0];
                    if (a > 150) break;
                    t = Sn[i]
                }
                if (!t || !n) return [0, 0, 0];
                var r = n[1].pageX - t[1].pageX, o = n[1].pageY - t[1].pageY, s = Math.sqrt(r * r + o * o), a = n[0] - t[0];
                return a ? [s / a, r / a, o / a] : [0, 0, 0]
            }

            function Qn(e, t, n, i) {
                var a = e[0], r = e[1], o = n[0], s = n[1], l = i / t;
                return 1 == l ? !1 : [a + (a - o) / (l - 1), r + (r - s) / (l - 1)]
            }

            function Kn(e, t) {
                var n = Qn([e.curX, e.curY], e.currentScale, [t.curX, t.curY], t.currentScale);
                if (!n) return !1;
                var i = n[0], a = n[1];
                return e.deltaX = i - e.curX, e.deltaY = a - e.curY, e.currentX = e.curX / e.currentScale + i - i / e.currentScale, e.currentY = e.curY / e.currentScale + a - a / e.currentScale, t.deltaX = i - t.curX, t.deltaY = a - t.curY, t.currentX = t.curX / t.currentScale + i - i / t.currentScale, t.currentY = t.curY / t.currentScale + a - a / t.currentScale, n
            }

            function Jn(e, t, n) {
                var o, s, l, c, u, d, f, p, h, v, g, w, y, b, k, M, C, S = Y.width || a(), T = Y.height || r(), E = !1,
                    A = 15, x = (Math.min(50, S / 7), wt(tt)), P = S / x.width, I = T / x.height, B = Math.min(1, P, I),
                    H = yt(e), N = H.coords, O = i("zpv_tl", e), L = _(O), D = m(O),
                    j = (Math.min((S - 2 * A) / Math.max(N.w * x.width * B / 100, L), (T - 2 * A) / (N.h * x.height * B / 100 + D + 5)), function () {
                        l = x.width * B * n.currentScale, c = x.height * B * n.currentScale, u = S / 2 - l / 2 + n.currentX * n.currentScale, d = T / 2 - c / 2 + n.currentY * n.currentScale, h = u + N.x * l / 100, v = d + N.y * c / 100, f = N.w * l / 100, p = N.h * c / 100, o = h + f / 2 - L / 2, s = v + p + 5, y = Math.min(h, o), g = Math.max(f, L), k = y + g, b = v, w = p + D + 5, M = b + w, C = {}
                    });
                return n = Hn(C, t, n), n = n || Bn(), j(), A > y ? (C.curX = n.curX + (A - y), E = !0) : k > S - A && (C.curX = n.curX - (k - S + A), E = !0), A > b && (C.curY = n.curY + (A - b), E = !0), n = Hn(C, t, n), n = n || Bn(), j(), M > T - A && (C.curY = n.curY - (M - T + A), E = !0), n = Hn(C, t, n), t ? n : E
            }

            function Zn(e) {
                En && (En = !1, xt(), e || Et(), yi(!0, !0))
            }

            function ei(e, t, n) {
                var i = {};
                return n = n || Bn(), i.lastScale = e, n = Hn(i, t, n), t ? n : !1
            }

            function ti(e, t, n) {
                var i = {};
                if (n = n || Bn(), !ci()) return t ? n : !1;
                i.curScale = e, n = Hn(i, t, n), n = n || Bn();
                var a = Dn();
                return i = {currentScale: n.currentScale}, n.currentScale < a.min ? i.currentScale = n.currentScale + (a.min - n.currentScale) / pt.bounce_diff : n.currentScale > a.max && (i.currentScale = n.currentScale + (a.max - n.currentScale) / pt.bounce_diff), n = Hn(i, t, n), t ? n : !1
            }

            function ni(e, t) {
                if (!ci()) return !1;
                var n = !1, i = {};
                t = t || Bn();
                var a = Dn();
                return t.currentScale < a.min ? (i.currentScale = a.min, n = !0) : t.currentScale > a.max && (i.currentScale = a.max, n = !0), t = Hn(i, e, t), e ? t : n
            }

            function ii(e) {
                if (!ci()) return !1;
                var t = Dn(), n = {pageX: Ut, pageY: Wt}, i = (Zt > 1 ? 1 : t.max) / $t, a = Bn(), r = null;
                r = ti(i, !0), r = si(n, !0, r), r = li(!0, r), e && (r = Jn(e, !0, r), r = li(!0, r));
                var o = Kn(a, r);
                o && (xt(o), At(a), En = !0), En && yi(!1, !0), ti(i), si(n), li(), e && (Jn(e), li()), En ? At(r, 300, !1, Zn) : Et(300), ei(Zt), Ci()
            }

            function ai(e) {
                if (!ci()) return !1;
                var t = {pageX: 0, pageY: 0}, n = Bn(), i = null;
                e = 1 == e ? 1 / $t : e, i = oi(t, !0, n), i = ti(e, !0, i), i = ni(!0, i), i = si(t, !0, i), i = li(!0, i);
                var a = Kn(n, i);
                a && (xt(a), At(n), En = !0), En && yi(!1, !0), oi(t), ti(e), ni(), si(t), li(), En ? At(i, 300, !1, Zn) : Et(300), ei(Zt)
            }

            function ri(e) {
                if (!ci()) return !1;
                var t = Bn(), n = null;
                n = Jn(e, !0, t), n = ni(!0, n), n = li(!0, n);
                var i = Kn(t, n);
                i && (xt(i), At(t), En = !0), Jn(e) && (hn || (hn = t)), En && yi(!1, !0), ni(), li(), En ? At(n, 300, !1, Zn) : Et(300), ei(Zt)
            }

            function oi(e, t, n) {
                var i = {};
                return n = n || Bn(), i.deltaX = (e.pageX - n.curX) / n.curScale, i.deltaY = (e.pageY - n.curY) / n.curScale, n = Hn(i, t, n), t ? n : !1
            }

            function si(e, t, n) {
                var i = {};
                n = n || Bn(), i.pointX = e.pageX, i.pointY = e.pageY;
                var a = On(n.currentScale), r = Ln(n.currentScale), o = !((en || r.max || r.min) && !nn && ci() || an),
                    s = an || ft && !en && !a.max && !a.min;
                s && (i.curX = 0), o && (i.curY = n.curY), n = Hn(i, t, n), n = n || Bn(), i = {};
                var l = !1;
                return n.curX <= a.min ? rn ? (l = !0, i.curBodyX = n.curX - a.min) : (i.curX = n.curX + (a.min - n.curX) / pt.bounce_diff, i.curBodyX = Vt ? i.curX - a.min : 0) : n.curX >= a.max && (on ? (l = !0, i.curBodyX = n.curX - a.max) : (i.curX = n.curX + (a.max - n.curX) / pt.bounce_diff, i.curBodyX = Vt ? i.curX - a.max : 0)), n.curY < r.min ? o ? i.curY = r.min : an || (i.curY = n.curY + (r.min - n.curY) / pt.bounce_diff) : n.curY > r.max && (o ? i.curY = r.max : an || (i.curY = n.curY + (r.max - n.curY) / pt.bounce_diff)), n = Hn(i, t, n), t ? n : l
            }

            function li(e, t) {
                var n = !1, i = {};
                t = t || Bn();
                var a = On(t.currentScale), r = Ln(t.currentScale), o = !en && !r.max && !r.min || nn || !ci() && !an,
                    s = an;
                return s && (i.curX = 0), o && (i.curY = t.curY), t.curX < a.min ? (i.curX = a.min, i.curBodyX = 0, n = !0) : t.curX > a.max && (i.curX = a.max, i.curBodyX = 0, n = !0), t.curY < r.min ? (i.curY = r.min, n = !0) : t.curY > r.max && (i.curY = r.max, n = !0), t = Hn(i, e, t), e ? t : n
            }

            function ci() {
                return lt ? !1 : ft ? !0 : Fi[$i.src]
            }

            function ui(e) {
                if (h() || h(0), !kn) {
                    if (e && "mousedown" == e.type && c(e), e.touches && e.touches.length || !ot) {
                        if (Fn(), !tn && !en) {
                            Cn = ht(e);
                            var t = On(Zt);
                            Yt <= t.min && (rn = Qi(Ui + 1) !== !1), Yt >= t.max && (on = Qi(Ui - 1) !== !1)
                        }
                        if (tn || lt) sn = ln = cn = !1, un = !1; else {
                            clearTimeout(dn);
                            var n = ht(e);
                            sn && p() - sn < 500 && ln && vt(n, ln) < 50 ? (cn = p(), un = !1) : (sn = p(), ln = n, un = p())
                        }
                        lt || (tn = !0)
                    }
                    en || (Vt = !0, kt(!0)), vn = ht(e), Yn(), Xn(vn), oi(vn)
                }
            }

            function di(e) {
                if (!kn && (c(e), tn)) {
                    if (sn = ln = cn = !1, un = !1, vn = ht(e), Xn(vn), Tn) {
                        if (!(Tn < p())) return void Yn();
                        Tn = !1, oi(vn), Et()
                    }
                    if (Cn && !nn && !an) {
                        var t = Math.abs(vn.pageX - Cn.pageX), n = Math.abs(vn.pageY - Cn.pageY), i = Ln(Zt);
                        if (!(n > 5 || t > 5)) return;
                        n > 5 && 5 >= t && (1 != Zt || en || lt || ft ? (i.max || i.min) && (rn = on = !1) : (an = !0, fn && (pn = !0), Mi(!1), vi(vn.pageY - Cn.pageY > 0))), Cn = !1, oi(vn)
                    }
                    var r = si(vn);
                    !r || nn || an || lt || (nn = !0, wn = vn.pageX), Si(), Et(), nn && Math.abs(Xt) > a() && fi(l({originalEvent: e}, e, {touches: []}))
                }
            }

            function fi(e) {
                if (!kn) {
                    if (Mn) return void(Mn = !1);
                    if (c(e), e.touches && !e.touches.length || !ot) {
                        var n = Vn();
                        if (nn) zn(n) && (In(), kt(!0)); else if (an) jn(n); else if (cn && p() - cn < 1e3) {
                            var i = e && _n && (t("zpv_tag", e.target) ? e.target : v("zpv_tag", e.target));
                            ii(i), sn = ln = cn = !1
                        } else li() ? Et(300) : n && (li(), Et(n, "cubic-bezier(0, 1, 1, 1)"));
                        if (un) if (p() - un > 700 || e && "touchcancel" == e.type) un = !1; else {
                            if (un = !1, e) var a = t("zpv_header", e.target) ? e.target : v("zpv_header", e.target),
                                r = t("zpv_zoom_btns", e.target) ? e.target : v("zpv_zoom_btns", e.target),
                                o = t("zpv_bottom_body", e.target) ? e.target : v("zpv_bottom_body", e.target),
                                i = _n && (t("zpv_tag", e.target) ? e.target : v("zpv_tag", e.target));
                            e && (a || r || o || i) ? i ? Hi(i, e) : r && (sn = ln = cn = !1, t("zpv_zoomin", e.target) || v("zpv_zoomin", e.target) ? Ei(e) : Ai(e)) : mn ? Ni(e) : ft || (dn = setTimeout(function () {
                                Mi(), yi(fn)
                            }, 500))
                        }
                        tn = !1, nn = rn = on = !1, Yn()
                    }
                    e.touches && (e.touches.length > 1 || 1 == e.touches.length && nn) && (vn = ht(e), oi(vn)), (e.touches && !e.touches.length || !ot) && (Cn = !1)
                }
            }

            function pi(e) {
                if (!kn && (c(e), sn = ln = cn = !1, un = !1, Yn(), !nn && !an)) {
                    Qt = 1, $t = Zt, en = !0, rn = on = !1;
                    var t = On(Zt);
                    (t.min >= -5 || t.max <= 5) && (Vt = !1, kt(!1));
                    var n = ht(e);
                    oi(n), yi(!1, !0)
                }
            }

            function _i(e) {
                kn || (c(e), sn = ln = cn = !1, un = !1, Yn(), nn || an || (gn = ht(e), ti(e.scale), si(gn), Et(), Ci()))
            }

            function mi(e) {
                kn || (c(e), sn = ln = cn = !1, un = !1, Yn(), nn || an || (ni() && ((e.touches && e.touches.length || !ot) && si(gn), li(), Et(100), Tn = p() + 100), en = !1, yi(!0, !0)))
            }

            function hi(e) {
                var t = Dn(), n = e < t.max, i = e > t.min;
                g("zpv_zb_disabled", Z, !n), g("zpv_zb_disabled", et, !i)
            }

            function vi(e) {
                e ? s($, {top: -35, bottom: "auto"}) : s($, {top: "auto", bottom: -35}), $.is_down = e
            }

            function gi(e, t) {
                var n = window, i = n.lang;
                if (e) {
                    var a = Y.height, r = 20, o = a / 5, l = a / 3.5, c = Math.abs(e),
                        u = c > r ? e + (e > 0 ? r - e : -r - e) / pt.bounce_diff : e,
                        d = 0 === t ? 0 : Math.max(0, Math.min((c - 20) / o, .75));
                    t > 0 && s.transform($, {translate: [0, u]}), s($, "opacity", d);
                    var p = c > l, _ = p ? "" : e > 0 ? " zpv_close_move_down" : " zpv_close_move_up",
                        m = p ? i.mobile_zphoto_release_to_close : i.mobile_zphoto_move_to_close;
                    f($, '<div class="zpv_close_msg' + _ + '">' + m + "</div>"), ($.is_down && 0 > e || !$.is_down && e > 0) && vi(e > 0)
                } else s.transform($, {translate: [0, 0]}), s($, "opacity", 0)
            }

            function wi() {
                var e = i("zpv_close_msg", $), t = _(e);
                s($, {width: t || 250})
            }

            function yi(e, t) {
                var n = _n;
                if (e) {
                    if (!ci()) return;
                    if (!fn && !pn || en) return
                }
                _n = e, e && bi(Zt, Kt, Jt, t || n !== e), n !== e && (e && ki(mn), s.animate(at, t ? !1 : "opacity", {
                    duration: 200,
                    func: "linear"
                }, function () {
                    s(at, "visibility", e ? "visible" : "hidden")
                }), s(at, "visibility", e || !t ? "visible" : "hidden"), s(at, "opacity", e ? 1 : 0))
            }

            function bi(e, t, n, i) {
                if (!en && _n) {
                    var o = Y.width || a(), l = Y.height || r(), c = wt(tt), u = o / c.width, d = l / c.height,
                        f = Math.min(1, u, d), p = c.width * f * e, _ = c.height * f * e, m = o / 2 - p / 2 + t * e,
                        h = l / 2 - _ / 2 + n * e;
                    i && s.animate(at), s(at, {
                        width: Math.round(p),
                        height: Math.round(_)
                    }), s.transform(at, {translate: [Math.round(m), Math.round(h)]})
                }
            }

            function ki(e) {
                if (e) {
                    var t = wt(tt), n = Y.width || a(), o = Y.height || r(), l = n / t.width, c = o / t.height,
                        u = Math.min(1, l, c), d = t.width * u * Zt, f = t.height * u * Zt, p = yt(e), h = p.coords,
                        v = i("zpv_tl", e), g = _(v), w = m(v), y = h.x * d / 100, b = h.y * f / 100, k = h.w * d / 100,
                        M = h.h * f / 100, C = y + k / 2 - g / 2, S = b + M + 5, T = n > d ? 0 - (n - d) / 2 : 0,
                        E = n > d ? d + (n - d) / 2 : d, A = o > f ? f + (o - f) / 2 : f, x = 0, P = 0, I = 2, B = 5;
                    T + I > C ? x = T + I - C : C + g > E - I && (x = E - I - C - g), S + w > A - B && (P = M > 3 * w ? A - B - S - w : -M - w - 10), s.transform(v, {translate: [Math.ceil(x), Math.ceil(P)]})
                }
            }

            function Mi(e) {
                if ("undefined" != typeof e) {
                    if (fn === e) return;
                    fn = !e
                } else pn = !1;
                s(z, "width", "auto"), s.animate(z, "opacity", {duration: 200, func: "linear"}, function () {
                    s.animate(z), s(z, "width", fn ? "auto" : 0)
                }), fn ? (s(z, "opacity", 0), fn = !1) : (s(z, "opacity", 1), fn = !0)
            }

            function Ci() {
                Y.height < 604 && !mn && !ft && (Zt > 1.25 ? (fn && (pn = !0), Mi(!1)) : pn && (pn = !1, Mi(!0)))
            }

            function Si() {
                if (an) {
                    var e = Math.abs(Gt), t = Y.height / 2;
                    xn = 1 - .5 * e / t
                }
            }

            function Ti(e) {
                bn && (tn || en || nn || e && e.touches && e.touches.length > 1 || (w(e), K.close()))
            }

            function Ei(e) {
                return bn ? (R.highlight = !1, R.end(e), en || nn ? !1 : Dn().max <= Zt ? !1 : (w(e), ai(ft ? 1.25 : 1.45), !1)) : !1
            }

            function Ai(e) {
                return bn ? (R.highlight = !1, R.end(e), en || nn ? !1 : Dn().min >= Zt ? !1 : (w(e), ai(ft ? .8 : 1), !1)) : !1
            }

            function xi(e) {
                if (!(tn || en || nn || !e || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey)) {
                    var t = On(Zt);
                    37 == e.keyCode ? (w(e), Yt >= t.max && Qi(Ui - 1) !== !1 && (kt(!0), Wn())) : 39 == e.keyCode ? (w(e), Yt <= t.min && Qi(Ui + 1) !== !1 && (kt(!0), Un())) : 27 == e.keyCode && Ti(e)
                }
            }

            function Pi() {
                ft ? ra() : yi(_n, !0)
            }

            function Ii(e, t) {
                return bn ? (R.highlight = !1, R.end(), $i.likes_me ? ($i.likes_me = !1, --$i.likes_cnt) : ($i.likes_me = !0, ++$i.likes_cnt), ta(), j.click(e, l({photo_id: t}, V))) : !1
            }

            function Bi(e, t) {
                var n = window, a = n.cur;
                if (!bn) return !1;
                var r = a.replyNames, o = a.sticker_panel, s = a.stickers, c = F.go(e, t, {
                    local: !0, fast: !0, beforeAppend: function (e) {
                        f(i("mcont", e), '<div class="pcont"><div class="media_view photo_view"><div class="pv_summary"><div class="summary_loading" style="display: none;"><i class="i_loading"></i></div></div><div class="pv_tag_wrap"></div><div class="pv_body pv_touch pv_touch_full pv_hidden_icons"><a class="thumb_item"><div class="pv_photo_wrap" id="pv_photo_tags" onclick="return photo.closeTags(event);"><img src="/images/mobile/blank.gif" class="ph_img" alt="" /></div></a><div class="pv_nav"><table class="row_table pv_nav_cont"><tr><td class="pv_nav_left"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_z"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_right"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td></tr></table></div></div><div class="pv_footer"></div></div></div>'), f("m", e.innerHTML)
                    }
                });
                l(a, {
                    replyNames: r, sticker_panel: o, stickers: s, processNav: function (e) {
                        var t;
                        if (t = /^\/photo(-?\d+_\d+)$/i.exec(e.nav.path)) {
                            var n = y(e.nav.params), i = y(F.params);
                            if (n.act) return !1;
                            if (n.offset != i.offset) return !1;
                            if (n.list != i.list && !i.z) return !1;
                            e.onPreNav && e.onPreNav();
                            var a = n.list || "", r = n.rev ? "/rev" : "";
                            return !Q.open(t[1], a + r, null, n.from, !0)
                        }
                        return !1
                    }
                }), a.destroy.push(function () {
                    Q.clear()
                });
                var u = window, d = u.lang;
                if (!c && (c = F.go(e, t, {force: !0}), !c)) {
                    var p = !0;
                    if (Y._lastNav) {
                        var _ = Y._lastNav, m = y(_.params);
                        delete m.z, p = _.path + b(m) + _.hash
                    }
                    W.setMhead("m", d.mobile_photos_photo_head_title, p), Q.showIcons()
                }
                return !0
            }

            function Hi(e, n) {
                if (!bn) return !1;
                if (!_n) return !0;
                yt(e);
                return t("zpv_tag_selected", e) ? t("zpv_tl_wrap", n.target) || v("zpv_tl_wrap", n.target) ? F.go(e, n) : (ri(e), w(n), !1) : (mn && (sn = ln = cn = !1), k("zpv_tag_selected", mn), mn = e, ki(e), M("zpv_tag_selected", mn), fn && (pn = !0), Mi(!1), ri(e), w(n), !1)
            }

            function Ni(e, t) {
                return bn || t ? mn ? (k("zpv_tag_selected", mn), mn = !1, pn && 1.25 >= Zt && (pn = !1, Mi(!0)), w(e), !1) : !0 : !1
            }

            function Oi(e) {
                if (!bn) return !1;
                if (R.highlight = !1, R.end(), t("item_disabled", e)) return !1;
                if (!ft || !zi) return !1;
                var n = zi[0], i = Nn(), a = tt.width * Zt, r = tt.height * Zt, o = (a - i.width) / 2 - Yt,
                    s = (r - i.height) / 2 - Gt, l = 1 / Zt, c = o / a, u = s / r;
                return n.onSelect && n.onSelect(c, u, l), !1
            }

            function Li(e) {
                return bn ? (R.highlight = !1, R.end(), t("item_disabled", e) ? !1 : Ti()) : !1
            }

            function Di(e) {
                "touchstart" == e.type ? bn = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? (bn = !1, c(e)) : "click" == e.type && (bn || (w(e), bn = !0))
            }

            function ji(e) {
                "touchstart" == e.type ? kn = !0 : "touchmove" == e.type ? (kn = !0, c(e)) : (kn = e.touches && e.length, Mn = !kn)
            }

            function qi() {
                if (ot = "undefined" != typeof document.ontouchmove, st = !1, ot) {
                    var t = i("zpv_header", e), n = i("zpv_bottom_body", e);
                    C(t, "touchstart touchmove touchend touchcancel", ji), C(n, "touchstart touchmove touchend touchcancel", ji), C(e, "touchstart touchmove click", Di), C(e, "touchstart", ui), C(e, "touchmove", di), C(e, "touchend touchcancel", fi), st ? (C(e, "gesturestart", pi), C(e, "gesturechange", _i), C(e, "gestureend", mi)) : (C(e, "touchstart", Dt), C(e, "touchmove", jt), C(e, "touchend touchcancel", qt), C(e, "gesturestart gesturechange gestureend", w))
                } else C(e, "mousedown", ui), C(e, "mousemove", di), C(window, "mouseup", fi), C(window, "mousewheel", Rt), C(window, "keydown", xi)
            }

            function Ri() {
                if (ot) {
                    var t = i("zpv_header", e), n = i("zpv_bottom_body", e);
                    S(t, "touchstart touchmove touchend touchcancel", ji), S(n, "touchstart touchmove touchend touchcancel", ji), S(e, "touchstart touchmove click", Di), S(e, "touchstart", ui), S(e, "touchmove", di), S(e, "touchend touchcancel", fi), st ? (S(e, "gesturestart", pi), S(e, "gesturechange", _i), S(e, "gestureend", mi)) : (S(e, "touchstart", Dt), S(e, "touchmove", jt), S(e, "touchend touchcancel", qt), S(e, "gesturestart gesturechange gestureend", w))
                } else S(e, "mousedown", ui), S(e, "mousemove", di), S(window, "mouseup", fi), S(window, "mousewheel", Rt), S(window, "keydown", xi)
            }

            var zi = !1, Fi = {}, Ui = !1, Wi = !1, $i = !1, Vi = !1, Xi = !1;

            function Yi(e, t, n, i) {
                var a = t ? t : T(e);
                if ((!e || n) && (zi = null), zi || (zi = new Array(a)), zi.length != a) {
                    var r = zi;
                    zi = new Array(a), l(zi, r)
                }
                l(zi, e);
                var o = Gi($i.id);
                -1 == o && (o = Ui), i || na(o)
            }

            function Gi(e) {
                for (var t in zi) if (zi[t].id == e) return +t;
                return -1
            }

            function Qi(e) {
                return e >= zi.length ? !1 : 0 > e ? !1 : zi[e] || {src: !0}
            }

            function Ki(e, t) {
                if (ft) {
                    var n = zi[0];
                    if (n.loaded = t, t) {
                        var i = wt(e), a = Nn();
                        i.width > i.height ? s(e, {height: a.height}) : s(e, {width: a.width}), s(e, {
                            minWidth: 0,
                            maxWidth: "none"
                        })
                    }
                    ra(!0)
                }
                E(e), tt === e && yi(t, !t)
            }

            function Ji(e) {
                if (Fi[e]) Zi(e); else {
                    var t = new Image;
                    t.src = e, t.onload = function () {
                        d("loaded", e), Fi[e] = !0, Zi(e), t = null
                    }
                }
            }

            function Zi(e) {
                A([tt, nt, it], function () {
                    var t = this, n = o(t, "data-src"), i = v("zpv_thumb_item", t);
                    n == e && (d("set", e), t.src = n, Ki(t, !0), k("zpv_ti_loading", i), o(t, "data-src", !1))
                })
            }

            function ea(e, t, n) {
                var i = v("zpv_thumb_item", e);
                t ? t !== !0 ? e.src == t ? Ki(e, !0) : Fi[t] ? (e.src = t, Ki(e, !0)) : (n ? (e.src = n, Ki(e, !1)) : x(e), o(e, "data-src", t), Ji(t), M("zpv_ti_loading", i)) : (n ? (e.src = n, Ki(e, !1)) : x(e), M("zpv_ti_loading", i)) : x(e)
            }

            function ta() {
                if (ct) {
                    $n(), hi(Zt);
                    var e = yn !== !1 ? yn : Ui, t = Qi(e);
                    if (t && t.src !== !0) {
                        var n = "";
                        A(t.tags, function (e, t) {
                            if (!e || 0 == e) return !0;
                            var i = bt(t), a = i.coords,
                                r = i.href ? ' data-href="' + i.href + '" data-name="' + P(i.name) + '"' : "",
                                o = i.al ? (i.href ? " al" + i.al : "") + " " + i.al : "";
                            n += '<div class="zpv_tag' + o + '" style="left: ' + a.x + "%; top: " + a.y + "%; width: " + a.w + "%; height: " + a.h + '%;" data-id="' + e + '"' + r + '><div class="fill"></div><div class="zpv_tl_wrap" id="zpv_tl_wrap"><div class="zpv_tl' + (i.href ? "" : " zpv_tl_plain") + '">' + I(i.name) + "</div></div></div>"
                        }), f(at, n), f(X, '<div class="zpv_photo_desc">' + (t.caption || "") + '</div><div class="zpv_bottom_bg"></div>'), B(X, !!t.caption);
                        var i = "";
                        if (ut || F.getQuery("community")) i = ""; else {
                            var a = "", r = "", o = "", s = t.tags && t.tags[0] || 0,
                                a = '<td class="row_table_column" width="33%"><a href="' + t.like_url + '" class="item_button item_like' + (t.likes_me ? " item_likes_me" : "") + '" onclick="return photoview.likePhoto(this, \'' + t.id + '\');"><i class="i_icon i_like"></i>' + (t.likes_cnt ? '<b class="v_value v_like">' + H(t.likes_cnt) + "</b>" : "") + "</a></td>",
                                r = '<td class="row_table_column" width="33%"><a href="' + t.photo_url + '#comments" class="item_button item_replies al_photo" onclick="return photoview.openPhoto(this, event, true);"><i class="i_icon i_replies"></i>' + (t.replies_cnt ? '<b class="v_value v_replies">' + t.replies_cnt + "</b>" : "") + "</a></td>",
                                o = '<td class="row_table_last_column" width="33%"><a href="' + t.photo_url + '" class="item_button item_tags al_photo" onclick="return photoview.openPhoto(this, event);"><i class="i_icon i_tags"></i>' + (s ? '<b class="v_value v_tags">' + s + "</b>" : "") + "</a></td>";
                            i = "<tr>" + a + r + o + "</tr>"
                        }
                        f(G, i), E(U)
                    } else x(U)
                }
            }

            function na(e) {
                ct && (Ui = Math.max(0, Math.min(e || 0, zi.length)), $i = Qi(Ui), Xi = Qi(Ui - 1), Vi = Qi(Ui + 1), ea(tt, $i.src, "/images/mobile/blank.gif"), ea(it, Vi.src), ea(nt, Xi.src), ta(), K.onUpdate && K.onUpdate())
            }

            function ia() {
                if (ct && dt && zi) {
                    var e = zi[0];
                    if (!e.loaded && e.progress) {
                        var t = i("zpvu_progress", "zpv_center");
                        s(t, {width: 100 * e.progress + "%", visibility: "visible"})
                    }
                    if (!e.read && e.thumb) {
                        e.read = !0;
                        var n = i("zpv_upload_box", "zpv_center"), a = i("zpv_upload_img", n);
                        s(a, {backgroundImage: "url(" + e.thumb + ")"}), k("zpv_thumb_uploading", n)
                    }
                }
            }

            function aa() {
                if (ct && dt) {
                    var t = window, n = t.lang;
                    f("zpv_summary", n.mobile_zphoto_upload_header), k("zpv_mode_[a-z]+", e, !0), M("zpv_mode_upload", e);
                    var i = '<div class="zpva zpv_upload_box zpv_thumb_uploading"><div class="zpv_upload_img"></div><div class="zpvu_progress_wrap"><div class="zpvu_progress"></div></div></div>';
                    N(tt), f("zpv_center", i);
                    var a = '<tr><td class="row_table_column" width="50%"><a class="item_button item_disabled" onclick="return false;"><i class="i_icon i_save"></i><span class="v_value">' + n.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + n.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
                    f(G, a), E(U), ia()
                }
            }

            function ra(t) {
                if (ct && ft && zi) {
                    var n = zi[0], i = !!n.saving;
                    if (g("item_disabled", "zpv_save_button", i || !n.loaded), g("item_disabled", "zpv_cancel_button", i), g("zpv_crop_saving", e, i), lt = i, t || ea(tt, n.src, "/images/mobile/blank.gif"), n.loaded && n.rect && !n.rect_inited) {
                        n.rect_inited = !0;
                        var a = Nn(), r = n.rect[0], o = n.rect[1], s = n.rect[2], l = {};
                        l.currentScale = 1 / s, Hn(l), ni(), li(), l = {};
                        var c = tt.width * Zt, u = tt.height * Zt, d = r * c, f = o * u;
                        l.curX = (c - a.width) / 2 - d, l.curY = (u - a.height) / 2 - f, Hn(l), li(), Et(0)
                    }
                }
            }

            function oa() {
                if (ct && ft) {
                    var t = window, n = t.lang;
                    f("zpv_summary", n.mobile_zphoto_owner_crop_header), k("zpv_mode_[a-z]+", e, !0), M("zpv_mode_crop", e), hi(Zt), tt.parentNode || (f("zpv_center", ""), O(tt, "zpv_center"));
                    var i = '<tr><td class="row_table_column" width="50%"><a class="item_button" id="zpv_save_button" onclick="return photoview.savePhoto(this);"><i class="i_icon i_save"></i><span class="v_value">' + n.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" id="zpv_cancel_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + n.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
                    f(G, i), E(U), ra()
                }
            }

            function sa() {
                ct || (Pn(), _t(), qi(), ct = !0, L(e), h() || h(0))
            }

            function la() {
                ct && (Ri(), mt(), ct = !1, zi = null)
            }

            return {
                likePhoto: Ii,
                openPhoto: Bi,
                closePhoto: Ti,
                savePhoto: Oi,
                cancelPhoto: Li,
                onClose: null,
                onUpdate: null,
                onPhotoChange: null,
                saveSource: Yi,
                opened: function () {
                    return ct
                },
                openCrop: function (e, t) {
                    t = t || {};
                    var n = !ct;
                    dt ? dt = !1 : sa(), ft = !0, lt = !1, zi = [e], n && (Y.open(), Y.onResize = Pi), oa()
                },
                updateCrop: function (e) {
                    return zi ? (e = l(zi[0] || {}, e), zi = [e], void ra()) : !1
                },
                openUpload: function (e, t) {
                    t = t || {}, sa(), dt = !0, lt = !0, zi = [e], Y.open(), Y.onResize = Pi, aa()
                },
                updateUpload: function (e) {
                    return zi ? (e = l(zi[0] || {}, e), zi = [e], void ia()) : !1
                },
                open: function (e, t, n) {
                    n = n || {}, sa(), ut = n.local || !1, t && Yi(t, !1, !1, !0), na(e), Wi = 0, Y.open(), Y.onResize = Pi, wi()
                },
                close: function () {
                    K.onClose && K.onClose({local: ut}) || Y.close()
                }
            }
        }();
    window.photoview = K
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(115), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = {_onAmountKeyDown: a["default"](), _onSubmit: a["default"]()};
    t["default"] = o
}, function () {
    Object.assign(Convo, {
        onTap: befall("url"),
        setOnline: t,
        setLastMsg: n,
        setTyping: a,
        setUnreadCount: i
    }), function () {
        isTouch ? (Convo._onMouseDown = function () {
        }, Convo._onClick = e) : (Convo._onMouseDown = e, Convo._onClick = function () {
        })
    }();

    function e(e, t) {
        e.target.closest("a.convo__avatar") || setTimeout(function () {
            Convo.onTap(t)
        }, 50)
    }

    function t(e, t) {
        $$(".convo_id_" + e + " .convo__online").forEach(function (e) {
            e.outerHTML = Convo__online(t)
        })
    }

    function n(e, t, n) {
        $$(".convo_last.convo_id_" + e).forEach(function (e) {
            e.$(".convo__text").innerHTML = t, e.$(".convo__date").innerText = n
        })
    }

    function i(e, t) {
        $$(".convo_last.convo_id_" + e).forEach(function (e) {
            var n = e.$(".oval");
            e.classList.toggle("convo_unread", t > 0), e.classList.toggle("convo_unreadOut", 0 > t), Oval.setValue(n, t)
        })
    }

    function a(e, t) {
        $$(".convo_last.convo_id_" + e).forEach(function (e) {
            var n = e.$(".convo__typing");
            if (t && 0 !== t.length) {
                var i = n.$(".typing");
                i ? Typing.setTyping(i, t) : (e.classList.add("convo_typing"), n.innerHTML = Typing({typing: t}))
            } else n.innerHTML = "", e.classList.remove("convo_typing")
        })
    }
}, function () {
    window.uVK = {onReady: befall(), onResize: befall(), onOrientationChange: befall()}, onDOMReady(function () {
        if (window.isNewMail) {
            uVK.onReady();
            var e = document.body.getAttribute("onresize"), t = document.body.getAttribute("onorientationchange");
            document.body.setAttribute("onresize", "uVK.onResize(); " + e), document.body.setAttribute("onorientationchange", "uVK.onOrientationChange(); " + t)
        }
    })
}, function () {
    var e = window, t = e.each, n = {
        tt: !1, handlers: [], show: function () {
            n.shown || (n.tt = Array.prototype.slice.call(arguments))
        }, hide: function () {
            n.tt && (n.tt = !1)
        }, addHandler: function (e) {
            e && n.handlers.push(e)
        }, removeHandler: function (e) {
            return e ? void t(n.handlers, function (t) {
                return e === this ? (n.handlers.splice(t, 1), !1) : void 0
            }) : void(n.handlers = [])
        }, onClose: function () {
            t(n.handlers, function () {
                this()
            })
        }, clear: function () {
            n.tt && (n.hide(), n.onClose(), n.removeHandler())
        }, closeByTap: function (e) {
            if (!n.tt || !e.target) return !1;
            var t = e.target;
            do for (var i = 0; i < n.tt.length; i++) if (t === n.tt[i]) return !1; while (t = t.parentNode);
            return n.hide(), n.onClose(), !0
        }
    };
    window.tooltip = n
}, function () {
    var e = window, t = e.page, n = e.browser, i = e.nav, a = e.menu, r = e.zlayer, o = window, s = o.onDOMReady,
        l = o.onBodyScroll, c = o.onBodyResize, u = window, d = u.geByClass1, f = u.addClass, p = u.removeClass,
        _ = (u.getW, u.getH), m = "groupCover-vk_animationYes", h = "groupCover-vk_animationStep", v = function () {
            return {
                vk: d("vk"),
                basis: d("basis"),
                header: d("basis__header"),
                headerTitle: d("mh_header", d("basis__header")),
                cover: d("groupCover"),
                coverImage: d("groupCover__image"),
                coverDimmer: d("groupCover__dimmer")
            }
        }, g = !1, w = void 0, y = void 0, b = void 0, k = void 0, M = void 0;
    s(function () {
        x() && (C(), t.onChange(C), r.onClose(function () {
            setTimeout(C, 0)
        }))
    });

    function C() {
        g || (w = v(), w.cover && (g = !0, f(w.vk, m), y = !n.chrome || Number(n.version.split(".")[0]) > 50, b = "fixed" === getStyle(w.header, "position"), k = _(w.header), M = _(w.cover), l(E), c(A), E(), window.cur.destroy.push(T), i.onBeforeGo(S)))
    }

    function S(e) {
        (e || a.opened()) && (p(w.vk, h), p(w.vk, m)), l("__clear", E), c("__clear", A), i.onBeforeGo.off(S), g = !1
    }

    function T() {
        S(!0)
    }

    function E() {
        var e = geBySel1("html").scrollTop;
        if (b) if (0 > e) setStyle(w.header, "top", -e), f(w.vk, h), setStyle(w.coverDimmer, "opacity", 0), setStyle(w.coverImage, "top", 0); else {
            var t = Math.min(1, e / (M - k));
            setStyle(w.header, "top", 0), setStyle(w.headerTitle, "display", "block"), .9 >= t ? (f(w.vk, h), y && setStyle(w.coverImage, "top", .5 * e), setStyle(w.coverDimmer, "opacity", t / .9), setStyle(w.headerTitle, "opacity", 0)) : (setStyle(w.headerTitle, "opacity", 1), p(w.vk, h))
        } else {
            var n = Math.min(1, e / M);
            1 > n ? (f(w.vk, h), setStyle(w.coverDimmer, "opacity", 0), y && setStyle(w.coverImage, "top", .5 * e), setStyle(w.headerTitle, "display", "none")) : p(w.vk, h)
        }
    }

    function A() {
        T(), C()
    }

    function x() {
        return n.chrome || n.safari && n.ios >= 9
    }
}, function (e, t, n) {
    var i = n(6), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = window, s = o.nav, l = o.ajax, c = o.geByClass1, u = o.addClass, d = o.val, f = "pageMoneyTransfer",
        p = "pageMoneyTransfer_error", _ = "pageMoneyTransfer_errorCookie", m = "pageMoneyTransfer_success",
        h = "pageMoneyTransfer__errorText", v = "pageMoneyTransfer__iframe", g = 2e3, w = void 0, y = void 0,
        b = void 0;
    a["default"].onIframeReady(function (e) {
        M(), y = {checkUrl: e.check_transfer_url, onSuccessUrl: e.on_success_url}, C(), window.cur.destroy.push(S)
    }), a["default"].onPostMessage(function (e, t) {
        "paySuccess" === e ? u(m, c(f)) : "payError" === e ? (S(), u(p, c(f)), d(c(h), t.descr)) : "session_fail" === e && (S(), u(p, c(f)), u(_, c(f)))
    });
    var k = 0;
    a["default"].onAcceptCookieClick(function () {
        var e = window.open("https://top-fwz1.mail.ru/counter2?id=1;", "", "width=300; height=300");
        setTimeout(function () {
            e.close();
            var t = c(v), n = clone(t);
            removeClass(p, c(f)), replace(n, t);
            var i = n.contentWindow.document;
            i.open("text/html", "replace"), i.write(attr(t, "data-html")), i.close(), C()
        }, 400 + k), 750 > k && (k += 150)
    });

    function M() {
        var e = c(v);
        if (!e) return void setTimeout(M, 2e3);
        var t = e.contentWindow.document;
        t.open("text/html", "replace"), t.write(attr(e, "data-html")), t.close()
    }

    function C() {
        var e = y, t = e.checkUrl, n = e.onSuccessUrl;
        w = setInterval(function () {
            b = l.post(t, {}, {
                onDone: function (e, t, i) {
                    if (1 === e || 3 === e) {
                        if (S(), i) return void s.go(i, null, {replace: !0});
                        "/" === n[0] ? s.go(n, null, {replace: !0}) : location.href = n
                    } else 2 === e && (S(), u(p, c(f)), d(c(h), t))
                }
            })
        }, g)
    }

    function S() {
        w && (clearInterval(w), w = null), b && (b.abort(), b = null)
    }
}, function () {
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.keys || (Object.keys = function () {
        var t = Object.prototype.hasOwnProperty, n = !{toString: null}.propertyIsEnumerable("toString"),
            i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            a = i.length;
        return function (r) {
            if ("function" != typeof r && ("object" !== ("undefined" == typeof r ? "undefined" : e(r)) || null === r)) throw new TypeError("Object.keys called on non-object");
            var o, s, l = [];
            for (o in r) t.call(r, o) && l.push(o);
            if (n) for (s = 0; a > s; s++) t.call(r, i[s]) && l.push(i[s]);
            return l
        }
    }())
}, function () {
    Object.assign(Messenger, {
        onMainScroll: befall("scrollElem"),
        onQueryChange: MailFilter.onChange,
        onQueryClear: MailFilter.onClear,
        onSearchMsgsClick: befall(),
        setQuery: MailFilter.setQuery,
        getMainBody: function () {
            return n("main")
        },
        setMainLoading: function (e) {
            return t("main", e)
        },
        onConvoAtTop: befall(),
        onConvoAtBottom: befall(),
        onConvoScroll: befall("scrollElem"),
        setConvoLoading: function (e) {
            return t("convo", e)
        },
        getConvoBody: function () {
            return n("convo")
        },
        scrollConvoToBottom: i,
        redrawConvoLayer: e
    }), function () {
        Messenger._onMainScroll = o, Messenger._onConvoScroll = s, Messenger._onSearchMsgsClick = Messenger.onSearchMsgsClick
    }();

    function e() {
        var e = Messenger_renderConvoLayer();
        $$(".messenger__layer_convo").forEach(function (t) {
            t.innerHTML = e
        })
    }

    function t(e, t) {
        $$(".messenger__layer_" + e).forEach(function (e) {
            e.classList.toggle("messenger__layer_loading", t)
        })
    }

    function n(e) {
        return $(".messenger__layer_" + e + " .messenger__body")
    }

    function i() {
        var e = Messenger.getConvoBody();
        e && (e.scrollTop = e.scrollHeight)
    }

    Object.assign(uMessenger, {scrollToMsg: r});
    var a = void 0;
    uVK.onReady(function () {
        return a = window.innerHeight
    });

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !0, i = Msg.getElem(e);
        if (i) {
            {
                var a = Messenger.getConvoBody();
                $(".mailScrap__loading_before")
            }
            if (t) a.scrollTop = i.offsetTop - .18 * a.offsetHeight; else {
                var r = $(".typing_id_curConvo").offsetHeight;
                a.scrollTop = i.offsetTop - .5 * (a.offsetHeight + 2) + (i.offsetHeight + r) / 2, i.offsetHeight > a.offsetHeight && (a.scrollTop = i.offsetTop)
            }
            n && (addClass("msg_highlight", i), setTimeout(function () {
                removeClass("msg_highlight", i)
            }, 1500))
        }
    }

    function o(e) {
        Messenger.onMainScroll(e)
    }

    function s(e) {
        Messenger.onConvoScroll(e), e._isScrolling = !0, l(e) && Messenger.onConvoAtTop(), c(e) && Messenger.onConvoAtBottom(), e._scrollingTimer && clearTimeout(e._scrollingTimer), e._scrollingTimer = setTimeout(function () {
            e._isScrolling = !1
        }, 100)
    }

    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return window._preventedCheckTop ? !1 : e && d(e)
    }

    function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return e && u(e)
    }

    function u(e) {
        return e.scrollHeight && e.scrollHeight - e.scrollTop - e.offsetHeight <= 1.5 * window.innerHeight
    }

    function d(e) {
        return e.scrollHeight && e.scrollTop <= 2.5 * window.innerHeight
    }

    function f(e) {
        return e.scrollHeight - e.scrollTop - e.offsetHeight
    }

    function p(e, t) {
        e.scrollTop = e.scrollHeight - e.offsetHeight - t
    }

    function _() {
        var e = Messenger.getConvoBody();
        e.prevHeight && e.prevHeight !== e.offsetHeight && p(e, e.scrollBottom), e.prevHeight = e.offsetHeight, e.scrollBottom = f(e), m && requestAnimationFrame(_)
    }

    var m = !1;
    uMessenger.startPolling = function () {
        m = !0, _()
    }, uMessenger.stopPolling = function () {
        m = !1
    };
    if (Object.assign(uMessenger, {
            redraw: w,
            redrawView: y,
            redrawMailActions: b,
            redrawPinnedMsg: k,
            expandPeerBefore: g
        }), browser.ios) {
        var h = null;
        Messenger.onConvoScroll(function (e) {
            e.isScrolling = !0, h && clearTimeout(h), h = setTimeout(function () {
                return e.isScrolling = !1
            }, 50)
        })
    }
    var v = null;

    function g() {
        if ($(".load_before_closed")) {
            var e = Messenger.getConvoBody();
            if (browser.ios) {
                var t = function () {
                    var t = e.scrollHeight - e.scrollTop - e.offsetHeight;
                    setStyle(e, "overflow", "hidden"), $$(".load_before_closed").forEach(function (e) {
                        return e.classList.remove("load_before_closed")
                    }), e.scrollTop = e.scrollHeight - t - e.offsetHeight, setStyle(e, "overflow", "auto")
                };
                e.isScrolling ? (v && clearInterval(v), v = setInterval(function () {
                    e.isScrolling || (clearInterval(v), t())
                }, 10)) : t()
            } else if (e.scrollTop <= 184) {
                var n = e.scrollHeight - e.scrollTop - e.offsetHeight;
                $$(".load_before_closed").forEach(function (e) {
                    return e.classList.remove("load_before_closed")
                }), e.scrollTop = e.scrollHeight - n - e.offsetHeight
            }
        }
    }

    function w() {
        $$(".uMessenger").forEach(function (e) {
            return e.outerHTML = uMessenger()
        })
    }

    function y() {
        $$(".uMessenger").forEach(function (e) {
            return e.className = uMessenger_class()
        });
        var e = store.mail, t = e.cur, n = e.peers;
        t.peerId && (k(), MailActs.togglePin(n[t.peerId].canPin))
    }

    function b() {
        var e = uMessenger_hasSelectedMsgs();
        $$(".messenger__layer_convo").forEach(function (t) {
            t.classList.toggle("messenger_actionsOpen", e);
            var n = t.$(".messenger__write").offsetHeight, i = t.$(".messenger__acts").offsetHeight, a = i - n,
                r = t.$(".messenger__body");
            requestAnimationFrame(function () {
                !r._fixed && a && (r.style.paddingBottom = a + "px", r._fixed = !0), 0 >= a && (r.style.paddingBottom = 0, r._fixed = !1)
            })
        })
    }

    function k() {
        $(".messenger__pinned").innerHTML = uMessenger_getPinnedMsg()
    }
}, function () {
    var e = n(['\n    <div class="', '">\n      ', '\n      <div class="typing__names">', "</div>\n      ", "\n    </div>\n  "], ['\n    <div class="', '">\n      ', '\n      <div class="typing__names">', "</div>\n      ", "\n    </div>\n  "]),
        t = n(['\n    <div class="typing__dotsWrap">\n      <div class="typing__dots">...</div>\n    </div>\n  '], ['\n    <div class="typing__dotsWrap">\n      <div class="typing__dots">...</div>\n    </div>\n  ']);

    function n(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    Object.assign(window, {Typing: i, Typing_renderNames: o, Typing_isEmpty: a});

    function i(t) {
        var n = t.gray, i = t.typing, s = q["class"]("typing", {gray: n, id: t.id, empty: a(i)}), l = o(i), c = void 0,
            u = void 0;
        return n ? (c = Loading({mix: "typing__loading"}), u = "") : (c = "", u = r()), q.html(e, s, c, l, u)
    }

    function a(e) {
        return isArray(e) ? 0 === e.length : !e
    }

    function r() {
        return q.html(t)
    }

    function o(e) {
        var t = window.lang;
        if (!isArray(e)) return e ? t.mobile_mail_typing_1_short : "";
        var n = e, i = n.length, a = "";
        if (1 === i) {
            var r = n[0];
            a = t.mobile_mail_typing_1, a = a.replace("{name}", r)
        } else if (2 === i) {
            var o = n[0], s = n[1];
            a = t.mobile_mail_typing_2, a = a.replace("{name1}", o), a = a.replace("{name2}", s)
        } else if (i > 2) {
            var l = n[0];
            a = t.mobile_mail_typing_many, a = a.replace("{name}", l), a = a.replace("{count}", i - 1)
        }
        return a
    }
}, function () {
    var e = o(['\n    <div class="mailHat mailHat_type_', " ", '">\n      <div class="mailHat__left">', '</div>\n      <div class="mailHat__center">', '</div>\n      <div class="mailHat__right">', "</div>\n    </div>\n  "], ['\n    <div class="mailHat mailHat_type_', " ", '">\n      <div class="mailHat__left">', '</div>\n      <div class="mailHat__center">', '</div>\n      <div class="mailHat__right">', "</div>\n    </div>\n  "]),
        t = o(['\n    <div class="', '">\n      ', "\n      ", "\n    </div>\n  "], ['\n    <div class="', '">\n      ', "\n      ", "\n    </div>\n  "]),
        n = o(['\n    <div class="mailHat__unreadCount mailHat__unreadCount_length_', '">\n      ', "\n    </div>\n  "], ['\n    <div class="mailHat__unreadCount mailHat__unreadCount_length_', '">\n      ', "\n    </div>\n  "]),
        i = o(['\n    <div class="mailHat__forwardTitle">\n      ', "\n    </div>\n  "], ['\n    <div class="mailHat__forwardTitle">\n      ', "\n    </div>\n  "]),
        a = o(['\n    <a class="', '" href="', '">\n      ', '\n      <div class="mailHat__convoBody">\n        <div class="mailHat__convoTitle">', "</div>\n        ", "\n      </div>\n    </a>\n  "], ['\n    <a class="', '" href="', '">\n      ', '\n      <div class="mailHat__convoBody">\n        <div class="mailHat__convoTitle">', "</div>\n        ", "\n      </div>\n    </a>\n  "]),
        r = o(['\n    <div class="mailHat__convoDetails">\n      <div class="mailHat__convoDetailsText">', "</div>\n      ", "\n    </div>\n  "], ['\n    <div class="mailHat__convoDetails">\n      <div class="mailHat__convoDetailsText">', "</div>\n      ", "\n    </div>\n  "]);

    function o(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    Object.assign(window, {
        MailHat_main: s,
        MailHat_convo: l,
        MailHat_getOnlineText: w,
        MailHat__convoDetails: g,
        MailHat__unreadCount: p
    });

    function s(e) {
        var t = u(), n = d(e.folder, e.urls, e.withUnrespond, e.importantCount), i = f(e.unreadCount), a = _(), r = m();
        return c({type: "main", left: "" + t + a, center: "" + n + r, right: i, forwarding: e.forwarding})
    }

    function l(e) {
        return c({type: "convo", left: h(), center: v(e), right: y(e.actions)})
    }

    function c(t) {
        var n = t.forwarding ? "mailHat_forwarding" : "";
        return q.html(e, t.type, n, t.left, t.center, t.right)
    }

    function u() {
        return Icon({mix: "mailHat__burger", icon: "burger", attrs: q.onClick("MailHat_main.onBurgerClick")})
    }

    function d(e, t, n, i) {
        var a = window.lang;
        return Unfold({
            mix: "mailHat__folder",
            items: [{name: "all", text: a.mobile_mail_tab_all, active: "all" === e, url: t.all}, n ? {
                name: "unrespond",
                text: a.mobile_mail_tab_unrespond,
                active: "unrespond" === e,
                url: t.unrespond
            } : "", {
                name: "unread",
                text: a.mobile_mail_tab_unread,
                active: "unread" === e,
                url: t.unread
            }, {
                name: "important",
                text: a.mobile_mail_tab_important,
                active: "important" === e,
                count: i,
                url: t.important
            }]
        })
    }

    function f(e) {
        var n = q["class"]("mailHat__unread", {hasUnread: e > 0}), i = Icon({mix: "mailHat__unreadIcon", icon: "msg"}),
            a = p(e);
        return q.html(t, n, i, a)
    }

    function p(e) {
        var t = void 0;
        return e > 999 ? (e = "999+", t = 4) : t = e > 99 ? 3 : e > 9 ? 2 : 1, q.html(n, t, e)
    }

    function _() {
        return Icon({
            mix: "mailHat__cancelForward",
            icon: "back",
            attrs: q.onMouseDown("MailHat_main.onCancelForwardTap")
        })
    }

    function m() {
        var e = window.lang;
        return q.html(i, e.mobile_mail_choose_recipient)
    }

    function h() {
        return Icon({mix: "mailHat__back", icon: "back", attrs: q.onMouseDown("MailHat_convo.onBackTap")})
    }

    function v(e) {
        var t = q["class"]("mailHat__convo", {mobile: e.mobile}),
            n = Avatar({mix: "mailHat__convoAvatar", photos: e.photos, size: 36}), i = g(e);
        return q.html(a, t, e.url, n, e.title, i)
    }

    function g(e) {
        var t = window.lang, n = e.membersCount, i = "", a = "";
        if (n > 0) a = langNumeric(n, t.mobile_mail_N_members); else {
            var o = e.onlinePlatform;
            a = w(e.isOnline, e.offlineText), "vkmobile" === o ? i = Icon({
                mix: q["class"]("mailHat__onlineIcon", {platform: "vkmobile"}),
                icon: "vkmobile",
                white: !0
            }) : "mobile" === o && (i = Icon({
                mix: q["class"]("mailHat__onlineIcon", {platform: "mobile"}),
                icon: "phoneMini"
            }))
        }
        return q.html(r, a, i)
    }

    function w(e, t) {
        var n = window.lang;
        return e ? n.mobile_mail_online : t
    }

    function y(e) {
        return Unfold({mix: "mailHat__actions", icon: "dots", position: "topRight", items: e})
    }
}, function () {
    Object.freeze || (Object.freeze = function (e) {
        if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
        return e
    });
    try {
        Object.freeze(function () {
        })
    } catch (e) {
        Object.freeze = function (e) {
            return function (t) {
                return "function" == typeof t ? t : e(t)
            }
        }(Object.freeze)
    }
}, function () {
    var e;

    function t() {
        e = {};
        for (var t = document.cookie.split(";"), n = /^[\s]*([^\s]+?)$/i, i = 0, a = t.length; a > i; i++) {
            var r = t[i].split("=");
            2 == r.length && (e[r[0].match(n)[1]] = unescape(r[1].match(n) ? r[1].match(n)[1] : ""))
        }
    }

    function n(n) {
        return t(), e[n]
    }

    function i(e, t, n, i) {
        var a = window.locDomain, r = "";
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + o.toGMTString()
        }
        document.cookie = [e, "=", escape(t), r, "; path=/", a ? "; domain=." + a : "", i && "https:" == window.locProtocol ? "; secure" : ""].join("")
    }

    function a(e) {
        i(e, null, -1)
    }

    window.getCookie = n, window.setCookie = i, window.clearCookie = a
}, function () {
    window.LoginHistory = {_onSubmit: e};

    function e(e, t, n) {
        var i = geByClass1("loginHistory__iframe");
        preventEvent(e), t.submit(), addEvent(i, "load", function () {
            return nav.go(n)
        })
    }
}, function () {
    window.PrettyCardsSlider = {}, function () {
        PrettyCardsSlider._onWheel = t, n()
    }();
    var e = "prettyCardsSlider";

    function t(e, t) {
        var n = t.deltaX, i = t.deltaY;
        Math.abs(n) > Math.abs(i) && (t.preventDefault(), e.scrollLeft += n)
    }

    function n() {
        browser.ios && (onDOMReady(a), page.onChange(a), window.MutationObserver && onDOMReady(function () {
            var e = new MutationObserver(i);
            e.observe(document.body, {subtree: !0, childList: !0})
        }))
    }

    function i(t) {
        t.forEach(function (t) {
            t.addedNodes.forEach(function (t) {
                t.nodeType === Node.ELEMENT_NODE && hasClass(e, t) && r(t)
            })
        })
    }

    function a() {
        geByClass(e).forEach(r)
    }

    function r(e) {
        e.style.overflow = "hidden", e.style.height = e.offsetHeight + "px", geByClass1("prettyCardsSlider__slider", e).style.paddingBottom = "20px"
    }
}, function () {
    var e = window, t = e.isUndefined, n = e.getX, i = e.getY, a = e.vkNow, r = e.clog, o = e.cancelEvent, s = e.getW,
        l = e.setStyle, c = e.getH, u = e.scrollTop, d = e.getCh, f = e.preventEvent, p = e.extend, _ = e.hasClass,
        m = e.gpeByClass, h = e.attr, v = e.toggleClass, g = e.geByClass1, w = e.removeClass, y = e.addClass,
        b = e.geByClass, k = e.addEvent, M = e.onBodyResize, C = e.removeEvent, S = window, T = S.browser, E = window,
        A = E.thover;

    function x(e, S) {
        var E, x, P, I, B, H = !t(document.ontouchmove), N = !0, O = !1, L = !1, D = !1, j = !1, q = 0, R = 0, z = !1,
            F = 0, U = !1, W = !1, $ = !1, V = !1, X = !1;

        function Y(e) {
            var t = e.touches, a = n(x), r = i(x), o = (t && t[0] ? t[0].pageX : e.pageX) || 0,
                s = (t && t[0] ? t[0].pageY : e.pageY) || 0;
            return {x: o - a, y: s - r}
        }

        function G(e) {
            z || (z = []), z.push([a(), e]), z = z.slice(-20)
        }

        function Q() {
            z = !1
        }

        function K() {
            if (!z || z.length < 2) return [0, 0, 0];
            for (var e = a(), t = !1, n = z.pop(), i = z.length - 1; i >= 0; i--) {
                var r = e - z[i][0];
                if (r > 150) break;
                t = z[i]
            }
            if (!t || !n) return [0, 0, 0];
            var o = n[1].x - t[1].x, s = n[1].y - t[1].y, l = Math.sqrt(o * o + s * s), r = n[0] - t[0];
            return r ? [l / r, o / r, s / r] : [0, 0, 0]
        }

        function J() {
            if (!z) return !1;
            var e = K(), t = e[0], n = e[1];
            if (Q(), !t) return !1;
            var i = 4.7, a = t / i, o = n * a - i * a * a / 2;
            return a *= 530, o *= 140, r("dx", o, "t", a), .1 > t || !o ? !1 : {dx: o, t: a}
        }

        function Z(e) {
            "touchstart" == e.type ? N = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? N = !1 : "click" == e.type && (N || (o(e), N = !0))
        }

        function et(e) {
            if (!(window.isNewMail && e.target.closest(".stickers_panel") && e.target.closest(".messenger") || V && e.touches && e.touches.length > 1)) {
                if (Q(), L) {
                    if (1 >= R) return
                } else {
                    var t = s(x) - s(P);
                    if (t >= 0) return
                }
                D = Y(e), j = D, G(j), $ = !0, l.animate(P)
            }
        }

        function tt(e) {
            if (D && (V || $)) {
                A && A.cancel(e);
                var t = Y(e);
                if (j = t, G(j), $) {
                    var n = D.x - t.x, a = D.y - t.y;
                    if (Math.abs(n) >= Math.abs(a) && (o(e), V = !0), $ = !1, V) {
                        var r = i(x), f = c(x), p = u(), _ = d();
                        p > r - 7 ? u(r - 7) : r + f + 7 > p + _ && u(r + f + 7 - _)
                    }
                }
                if (V) if (o(e), L) {
                    var m = s(x), n = D.x - t.x;
                    (0 >= q && 0 > n || q >= R - 1 && n > 0) && (n /= 3);
                    var h = -q - n / m, v = O ? 100 * h + "%" : h * m;
                    l.transform(P, {translate: [v, 0]})
                } else {
                    var g = s(x) - s(P), w = 0, n = D.x - t.x, h = F - n;
                    if (g > 0 && (g = 0), g > h) var v = g - (g - h) / 3; else if (h > w) var v = w + (h - w) / 3; else var v = F - n;
                    ot(v), l.transform(P, {translate: [v, 0]})
                }
            }
        }

        function nt(e) {
            if (D && V) {
                if (o(e), L) {
                    var t = 4.7 * K()[1], n = D.x - j.x, i = s(x), a = Math.abs(n) >= i / 2;
                    (q > 0 && (a && 0 > n || t > 1) || R - 1 > q && (a && n > 0 || -1 > t)) && (q += n > 0 ? 1 : -1);
                    var r = -q, c = O ? 100 * r + "%" : r * i;
                    D = !1, Q(), st(), l.animate(P, "transform", {
                        duration: 200,
                        func: "ease"
                    }), l.transform(P, {translate: [c, 0]})
                } else {
                    var u = J(), d = s(x) - s(P), f = 0, n = D.x - j.x, r = F - n;
                    u && (r += u.dx), d > 0 && (d = 0), F = d > r ? d : r > f ? f : r;
                    var p = {duration: 200, func: "ease"};
                    u && (p = {
                        duration: u.t,
                        func: "cubic-bezier(0, 1, 1, 1)"
                    }), ot(F), l.animate(P, "transform", p), l.transform(P, {translate: [F, 0]})
                }
                V = X = !1
            }
        }

        function it(e) {
            if (!(window.isNewMail && e.target.closest(".stickers_panel") && e.target.closest(".messenger"))) {
                if (f(e), L) {
                    if (1 >= R) return
                } else {
                    var t = s(x) - s(P);
                    if (t >= 0) return
                }
                var n = (e.detail ? e.detail : e.wheelDelta) > 0 ? 3 : -3;
                if (U === !1 && (U = 0), U += n, !L) {
                    var t = s(x) - s(P), i = 0, a = F - U;
                    if (t > 0 && (t = 0), t > a) var r = t - (t - a) / 3; else if (a > i) var r = i + (a - i) / 3; else var r = F - U;
                    ot(r), l.transform(P, {translate: [r, 0]})
                }
                clearTimeout(W), W = setTimeout(function () {
                    if (L) {
                        (q > 0 && 0 > U || R - 1 > q && U > 0) && (q += U > 0 ? 1 : -1);
                        var e = -q, t = s(x), n = O ? 100 * e + "%" : e * t;
                        st(), l.animate(P, "transform", {
                            duration: 200,
                            func: "ease"
                        }), l.transform(P, {translate: [n, 0]})
                    } else {
                        var i = s(x) - s(P), a = 0, e = F - U;
                        i > 0 && (i = 0), i > e ? F = i : e > a ? F = a : F -= U, ot(n), l.animate(P, "transform", {
                            duration: 200,
                            func: "ease"
                        }), l.transform(P, {translate: [F, 0]})
                    }
                    U = !1
                }, 200)
            }
        }

        function at(e) {
            if (!L) {
                var t = n(e) - n(x), i = t + F, a = i + s(e), o = 0, c = s(x), u = !1;
                o > i ? u = o - t + 20 : a > c && (u = c - s(e) - t - 20);
                var d = s(x) - s(P), f = 0;
                if (d > 0 && (d = 0), d > u) var u = d; else if (u > f) var u = f;
                r(t, F, i, a, o, c, u), u !== !1 && (F = u, ot(F), l.animate(P, "transform", {
                    duration: 200,
                    func: "ease"
                }), l.transform(P, {translate: [F, 0]}))
            }
        }

        function rt(e) {
            if (L) {
                var t = q;
                if (e && e.target) {
                    var n = _("sp_ppt", e.target) ? e.target : m("sp_ppt", e.target), i = +h(n, "data-i");
                    q = 0 > i ? 0 : i > R - 1 ? R - 1 : i
                }
                D = !1, Q(), V = X = !1;
                var a = s(x), r = -q, o = O ? 100 * r + "%" : r * a;
                st(), t != q && l.animate(P, "transform", {
                    duration: 200,
                    func: "ease"
                }), l.transform(P, {translate: [o, 0]})
            }
        }

        function ot(e) {
            if (!L) {
                e = e || F;
                var t = s(x) - s(P), n = 0;
                v("sw_left", x, n > e), v("sw_right", x, e > t)
            }
        }

        function st() {
            if (L) {
                var e = g("sp_ppt_sel", E);
                e && e === B[q] || (w("sp_ppt_sel", e), y("sp_ppt_sel", B[q]))
            }
        }

        function lt() {
            x = g("scroller_wrap", E), P = g("scroller_cont", x), L ? (I = g("sp_pages_pts", E), B = b("sp_ppt", I), R = (b("scroller_page", P) || []).length, q = 0, st()) : (F = 0, ot(F)), z = !1, l.transform(P, {translate: [0, 0]})
        }

        function ct() {
            lt(), H ? (k(x, "touchstart touchmove click", Z), k(x, "touchstart", et), k(x, "touchmove", tt), k(x, "touchend touchcancel", nt)) : (k(x, "mousewheel", it), k(I, "click", rt)), O || M(rt)
        }

        function ut() {
            H ? (C(x, "touchstart touchmove click", Z), C(x, "touchstart", et), C(x, "touchmove", tt), C(x, "touchend touchcancel", nt)) : (C(x, "mousewheel", it), C(I, "click", rt)), O || M("__clear", rt)
        }

        p(this, {
            init: ct, destroy: ut, onShow: function () {
                L ? st() : ot(F)
            }, canClick: function () {
                return N
            }
        }), E = e, S = S || {}, S.byPage ? (L = !0, O = !T.android) : (L = !1, O = !1, this.showElem = at)
    }

    window.Scroller = x
}, function () {
    var e = window, t = e.hide, n = e.ge, i = e.ce, a = e.append, r = e.geByClass1, o = e.val, s = e.addClass,
        l = e.show, c = e.obj2qs, u = e.unescapeAttr, d = e.elfocus, f = e.lockButton, p = e.unlockButton, _ = e.extend,
        m = e.scrollToEl, h = e.remove, v = e.gpeByTag, g = e.each, w = e.removeClass, y = window, b = y.geo,
        k = window, M = k.ajax, C = window, S = C.nav, T = function () {
            var e = null, y = !1, k = !1, C = {}, E = [], A = 0, x = null, P = "", I = "";

            function B(e, t) {
                return t ? !1 : F(e)
            }

            function H(e) {
                k = !1;
                var t = n("medias_map"), c = n("attached_wrap");
                t || (t = i("div", {id: "medias_map", className: "pi_medias"}), a(t, c));
                var u = +e[1] || 0, d = e[3] || "", f = e[4] || "", p = e[5] || "", _ = +e[6].lat || 0, m = +e[6].lng || 0,
                    h = _ + "_" + m, v = r("medias_map", t),
                    g = '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + d + (p ? ", " + p : f ? ", " + f : "") + "</div>",
                    w = '<input type="hidden" name="place_id" value="' + u + '"><input type="hidden" name="place" value="' + h + '">';
                if (v) o(v, g + w); else {
                    var g = '<div class="medias_map">' + g + w + "</div>";
                    o(t, g)
                }
                s("cp_geo_btn_sel", "geo_btn"), y = !0, l(t)
            }

            function N() {
                return F(e)
            }

            function O(n, i) {
                var a = window, r = a.lang,
                    s = "/places.php" + c({act: "add_place", latitude: e.latitude, longitude: e.longitude, hash: P});
                o("place_add_box", '<h4 class="sub_header">' + r.mobile_geo_new_place_header + '</h4><div class="form_item fi_fat"><form id="place_add_form" action="' + s + '" method="post"><dl class="fi_row"><dt class="fi_label">' + r.mobile_geo_place_name_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_name_fld" name="title" /></dd></dl><dl class="fi_row"><dt class="fi_label">' + r.mobile_geo_place_address_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_address_fld" name="address" /></dd></dl><dl class="fi_row"><dd><input class="button" type="submit" id="place_add_btn" value="' + r.mobile_geo_place_add_btn + '" onclick="return checkin.addNewPlace(this);" /><a class="near_btn" onclick="checkin.addPlaceCancel(); return false;">' + r.mobile_cancel + "</a></dd></dl></form></div>"), o("place_name_fld", u(n) || ""), o("place_address_fld", u(i) || ""), t("places_box"), l("place_add_box"), d(n ? "place_address_fld" : "place_name_fld")
            }

            function L() {
                o("place_add_box", ""), t("place_add_box"), l("places_box")
            }

            function D() {
                var t = o("place_name_fld"), i = o("place_address_fld");
                return t ? (f("place_add_btn"), M.post("/places.php", {
                    _ajax: 1,
                    act: "add_place",
                    latitude: e.latitude,
                    longitude: e.longitude,
                    title: t,
                    address: i,
                    hash: P
                }, {
                    onDone: function (e, t) {
                        if (p("place_add_btn"), e) {
                            var n = {};
                            n[e] = t, _(C, n), E.splice(E[0] ? 0 : 1, 0, e), L(), j(null, e)
                        }
                    }, onFail: function () {
                        p("place_add_btn");
                        var e = Array.prototype.slice.call(arguments), t = e.shift(), i = n("place_add_form");
                        switch (t) {
                            case 2:
                                i && i.submit()
                        }
                    }
                }), !1) : (d("place_name_fld"), !1)
            }

            function j(t, n) {
                q();
                var i = C[n];
                i && (e = {latitude: +i[6].lat || 0, longitude: +i[6].lng || 0}, n ? H(i) : R(e, i))
            }

            function q(e) {
                if (!x) return !0;
                o("m", x), x = null, m(r("create_post_extra", "mcont"));
                var t = S.path + (S.params ? "?" + S.params : "");
                return S.go(t, null, {push_only: !0, no_push: e}), !1
            }

            function R(e, t) {
                k = !0;
                var a = n("medias_map"), c = n("attached_wrap");
                a || (a = i("div", {id: "medias_map", className: "pi_medias"}), c.appendChild(a));
                var u = e.latitude, d = e.longitude, f = (window.devicePixelRatio >= 1.5 ? 2 : 1, t && t[4] || !1),
                    p = r("medias_map", a),
                    _ = f ? '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + f + "</div>" : "",
                    m = "", h = u + "_" + d + "_0", v = '<input type="hidden" name="map" value="' + h + '">';
                if (p) o(p, _ + m + v); else {
                    var g = '<div class="medias_map">' + _ + m + v + "</div>";
                    o(a, g)
                }
                y = !0, s("cp_geo_btn_sel", "geo_btn"), l(a)
            }

            function z() {
                e = null, C = {}, E = [], A = 0, M.post(I, {_ajax: 1}), h("medias_map")
            }

            function F(e) {
                var t = window, n = t.al;
                h("feed_extra_field");
                var r = Math.round(1e8 * e.latitude) / 1e8, o = Math.round(1e8 * e.longitude) / 1e8,
                    s = v("form", "geo_btn"),
                    l = i("input", {id: "feed_extra_field", type: "hidden", name: "add_place", value: r + "," + o});
                if (!s) return S.go(S.path + "?act=places&lat=" + r + "&lng=" + o);
                var c = !1;
                return g(s, function (e, t) {
                    return "submit" === t.type ? (c = t, !1) : void 0
                }), c ? (a(l, s), window.al && n.ver ? S.go(c) : s.submit()) : void 0
            }

            function U(t) {
                t && t.coords && (e = {latitude: +t.coords.latitude || 0, longitude: +t.coords.longitude || 0}, B(e))
            }

            function W() {
                T.remove(), t("geo_waiting")
            }

            return {
                toggle: function () {
                    y ? T.remove() : T.add()
                },
                addNewPlace: D,
                addPlaceShow: O,
                addPlaceCancel: L,
                selectPlace: j,
                changePlace: N,
                back: q,
                refreshCurrentPosition: function () {
                    b.getCurrentPosition(U, W)
                },
                getCurrentAddress: function () {
                    return C[0] && C[0][5] || ""
                },
                savePlaces: function (e) {
                    _(C, e)
                },
                add: function (t) {
                    return !t && y ? N() : void(t && (t.latitude || t.longitude) && t.place ? (e = {
                        latitude: +t.latitude || 0,
                        longitude: +t.longitude || 0
                    }, t.place[1] ? H(t.place) : R(e, t.place), B(e, !0)) : (b.getCurrentPosition(U, W), l("geo_waiting")))
                },
                add_place: function (t) {
                    return !t && y ? N() : void(t && (t.latitude || t.longitude) && t.place ? (e = {
                        latitude: +t.latitude || 0,
                        longitude: +t.longitude || 0
                    }, t.place[1] ? H(t.place) : R(e, t.place), B(e, !0)) : (b.getCurrentPosition(U, W), l("geo_waiting")))
                },
                remove: function () {
                    y = !1, w("cp_geo_btn_sel", "geo_btn"), z()
                },
                stash: function (t) {
                    return t ? (e = t[0], y = t[1], k = t[2], C = t[3], E = t[4], A = t[5], x = t[6], void 0) : [e, y, k, C, E, A, x]
                },
                init: function (n, i, a) {
                    return t("geo_waiting"), e = null, y = !1, k = !1, C = {}, E = [], A = 0, x = null, P = i || "", I = a || "", n && T.add(n), b.init()
                }
            }
        }();
    window.checkin = T
}, function () {
    Object.assign(Icon, {toggleActive: e});

    function e(e) {
        e.classList.toggle("icon_active")
    }
}, function (e) {
    var t, n = e.exports = {}, i = [], a = !1, r = -1;

    function o() {
        a = !1, t.length ? i = t.concat(i) : r = -1, i.length && s()
    }

    function s() {
        if (!a) {
            var e = setTimeout(o);
            a = !0;
            for (var n = i.length; n;) {
                for (t = i, i = []; ++r < n;) t && t[r].run();
                r = -1, n = i.length
            }
            t = null, a = !1, clearTimeout(e)
        }
    }

    n.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        i.push(new l(e, t)), 1 !== i.length || a || setTimeout(s, 0)
    };

    function l(e, t) {
        this.fun = e, this.array = t
    }

    l.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {};

    function c() {
    }

    n.on = c, n.addListener = c, n.once = c, n.off = c, n.removeListener = c, n.removeAllListeners = c, n.emit = c, n.binding = function () {
        throw new Error("process.binding is not supported")
    }, n.cwd = function () {
        return "/"
    }, n.chdir = function () {
        throw new Error("process.chdir is not supported")
    }, n.umask = function () {
        return 0
    }
}, function (e, t, n) {
    var i = n(59), a = r(i);
    n(131);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    window.SendMoneyForm = a["default"]
}, function () {
    window.uMailHat = e;

    function e() {
        var e = store.mail.cur.peerId;
        return e ? n(e) : t()
    }

    function t() {
        var e = store.mail.cur, t = Math.abs(e.groupId), n = t ? "&community=" + t : "", i = t ? "?community=" + t : "";
        return MailHat_main({
            folder: e.folder,
            urls: {
                all: "/mail" + i,
                unrespond: "/mail?act=unrespond" + n,
                unread: "/mail?act=unread" + n,
                important: "/mail?act=important" + n
            },
            unreadCount: e.countUnread,
            importantCount: e.countImportant,
            withUnrespond: !!t,
            forwarding: !!e.forwardFromId
        })
    }

    function n(e) {
        var t = store.mail.peers[e], n = e > 2e9, a = {title: t.title, photos: t.avatarImages, actions: i(e)};
        if (n) {
            var r = n ? e - 2e9 : null;
            a.url = "/mail?act=info&chat=" + r, a.membersCount = t.countMembers
        } else a.url = t.profileUrl, a.isOnline = t.isOnline, a.onlinePlatform = t.onlinePlatform, a.offlineText = t.offlineText;
        return MailHat_convo(a)
    }

    function i(e) {
        var t = store.mail, n = t.peers[e].actionUrls, i = [];
        return i = e > -2e9 && 0 > e ? [a("showMedias", n.showMedia), a("deleteHistory", n.flushHistory), a("blockCommunity", n.blockCommunity), a("unblockCommunity", n.unblockCommunity)] : e > 2e9 ? [a("chatAdd", n.addToChat), a("inviteLink", n.inviteLink), a("showMedias", n.showMedia), a("chatSettings", n.chatSettings), a("chatDeleteHistory", n.flushHistory), a("chatReturn", n.returnToChat), a("chatLeave", n.leaveChat)] : t.cur.groupId ? [a("showMedias", n.showMedia), a("markAsAnswered", n.communityMarkAsAnswered), n.isDialogImportant ? a("removeImportantMark", n.communityToggleImportant) : a("markAsImportant", n.communityToggleImportant), n.isBlacklisted ? a("unbanUser", n.userBan) : a("banUser", n.userBan), a("deleteHistory", n.flushHistory)] : [a("showMedias", n.showMedia), a("deleteHistory", n.flushHistory)]
    }

    function a(e, t) {
        var n = window.lang;
        if (!t) return null;
        var i = {
            showMedias: [n.mobile_mail_show_medias, "attach"],
            deleteHistory: [n.mobile_mail_delete_history, "delete"],
            blockCommunity: [n.mobile_mail_block_community, "block"],
            unblockCommunity: [n.mobile_mail_unblock_community, "allow"],
            chatAdd: [n.mobile_mail_add_to_chat, "plus"],
            chatSettings: [n.mobile_mail_chat_settings, "settings"],
            chatDeleteHistory: [n.mobile_mail_delete_chat_history, "delete"],
            chatReturn: [n.mobile_mail_chat_return, "revert", "returnToChat"],
            chatLeave: [n.mobile_mail_chat_leave, "close16", "leaveChat"],
            markAsAnswered: [n.mobile_mail_mark_as_answered, "answered"],
            removeImportantMark: [n.mobile_mail_remove_important_mark, "important"],
            markAsImportant: [n.mobile_mail_mark_as_important, "important"],
            unbanUser: [n.mobile_settings_blacklist_unban_user, "allow"],
            banUser: [n.mobile_settings_blacklist_ban_user, "block"],
            inviteLink: [n.mobile_mail_invite_link, "invite"]
        }, a = {text: i[e][0], icon: i[e][1], url: t};
        return i[e][2] && (a.name = i[e][2]), a
    }
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var r = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=",
        o = t.PlayerHTML5 = function () {
            e.isSupported = function (e) {
                var t = document.createElement("audio");
                if (t.canPlayType) {
                    e = e || 'audio/mpeg; codecs="mp3"';
                    var n = t.canPlayType(e), i = n.replace(/no/, "");
                    return !!i
                }
                return !1
            };

            function e(t) {
                a(this, e), this.opts = t || {}, this._trackOptions = {}, this._audioNodes = [], this._currentAudioEl = this._createAudioNode(), this._prefetchAudioEl = this._createAudioNode()
            }

            return e.prototype.destroy = function () {
            }, e.prototype.getPlayedTime = function () {
                for (var e = this._currentAudioEl.played, t = 0, n = 0; n < e.length; n++) t += e.end(n) - e.start(n);
                return t
            }, e.prototype._setAudioNodeUrl = function (e, t) {
                window.data && data(e, "setUrlTimesetUrlTime", t == r ? 0 : vkNow()), e.src = t
            }, e.prototype._createAudioNode = function (e) {
                var t = new Audio, n = this;
                return this.opts.onBufferUpdate && addEvent(t, "progress", function () {
                    n._currentAudioEl == t && n.opts.onBufferUpdate(n.getCurrentBuffered());
                    {
                        var e = t.buffered;
                        e.length
                    }
                    1 == e.length && 0 == e.start(0) && e.end(0) == t.duration && (t._fullyLoaded = !0)
                }), addEvent(t, "stalled", function () {
                    n._currentAudioEl == t && n._isInvalidDuration() && n._currentAudioEl.currentTime >= n.duration - 1 && n._currentAudioEl.dispatchEvent(new Event("ended"))
                }), this.opts.onProgressUpdate && addEvent(t, "timeupdate", function () {
                    n._currentAudioEl == t && n.opts.onProgressUpdate(n.getCurrentProgress())
                }), this.opts.onEnd && addEvent(t, "ended", function () {
                    n._currentAudioEl == t && n.opts.onEnd()
                }), this.opts.onSeeked && addEvent(t, "seeked", function () {
                    n._currentAudioEl == t && n.opts.onSeeked()
                }), this.opts.onSeek && addEvent(t, "seeking", function () {
                    n._currentAudioEl == t && n.opts.onSeek()
                }), addEvent(t, "error", function () {
                    n._prefetchAudioEl == t ? n._prefetchAudioEl = n._createAudioNode() : n._currentAudioEl == t && n.opts.onFail && n.opts.onFail()
                }), addEvent(t, "canplay", function () {
                    if (window.data) {
                        var e = data(t, "setUrlTime");
                        e && (cur.audioLoadTimings = cur.audioLoadTimings || [], cur.audioLoadTimings.push(vkNow() - e), data(t, "setUrlTime", 0))
                    }
                    n._prefetchAudioEl == t, n._currentAudioEl == t && (n.opts.onCanPlay && n.opts.onCanPlay(), n._seekOnReady && (n.seek(n._seekOnReady), n._seekOnReady = !1))
                }), e && (this._setAudioNodeUrl(t, e), t.preload = "auto", t.volume = this._volume || 1, t.load()), this._audioNodes.push(t), t
            }, e.prototype.onReady = function (e) {
                e(!0)
            }, e.prototype.prefetch = function (e) {
                this._prefetchAudioEl && this._setAudioNodeUrl(this._prefetchAudioEl, r), this._prefetchAudioEl = this._createAudioNode(e)
            }, e.prototype.seek = function (e) {
                var t = this._currentAudioEl;
                this.duration ? t.currentTime = this.duration * e : this._seekOnReady = e
            }, e.prototype.setVolume = function (e) {
                void 0 === e && (e = this._currentAudioEl.volume), this._currentAudioEl.volume = e, this._prefetchAudioEl && (this._prefetchAudioEl.volume = e), this._volume = e
            }, e.prototype._isInvalidDuration = function () {
                var e = this._currentAudioEl;
                return isNaN(e.duration) || 1 / 0 == e.duration || 0 == e.duration
            }, e.prototype.getCurrentProgress = function () {
                var e = this._currentAudioEl;
                return this.duration ? Math.max(0, Math.min(1, e.currentTime / this.duration)) : 0
            }, e.prototype.getCurrentBuffered = function () {
                var e = this._currentAudioEl;
                return e && e.buffered.length ? Math.min(1, e.buffered.end(0) / e.duration) : 0
            }, e.prototype.isFullyLoaded = function () {
                return this._currentAudioEl._fullyLoaded
            }, e.prototype.setUrl = function (t, i) {
                var a = this._currentAudioEl;
                if (this._seekOnReady = !1, this._trackOptions = {}, i && "object" === ("undefined" == typeof i ? "undefined" : n(i)) && (this._trackOptions = i, i = i.callback), a.src == t) return this.opts.onCanPlay && this.opts.onCanPlay(), i && i(!0);
                if (this._prefetchAudioEl && this._prefetchAudioEl.readyState > e.STATE_HAVE_NOTHING) if (this._prefetchAudioEl.src == t) {
                    this._currentAudioEl.pause(0), this._setAudioNodeUrl(this._currentAudioEl, r);
                    var o = this;
                    this._prefetchAudioEl.readyState >= e.STATE_HAVE_FUTURE_DATA && setTimeout(function () {
                        o.opts.onCanPlay && o.opts.onCanPlay()
                    }), a = this._currentAudioEl = this._prefetchAudioEl, this._prefetchAudioEl = !1
                } else this._prefetchAudioEl.src && this._setAudioNodeUrl(this._prefetchAudioEl, r);
                return a.src != t && (this._setAudioNodeUrl(a, t), a.load()), i && i(!0)
            }, e.prototype.play = function (t) {
                this._prefetchAudioEl.src == t && this._prefetchAudioEl.readyState > e.STATE_HAVE_NOTHING && (this._setAudioNodeUrl(this._currentAudioEl, r), this._currentAudioEl = this._prefetchAudioEl, this._prefetchAudioEl = this._createAudioNode(), this.opts.onCanPlay && this.opts.onCanPlay());
                var n = this._currentAudioEl;
                if (n.src) try {
                    n.play()
                } catch (i) {
                    debugLog("Audio: url set failed (html5 impl)")
                }
            }, e.prototype.pause = function () {
                var e = this._currentAudioEl;
                e.src && e.pause()
            }, e.prototype.stop = function () {
                var e = this._currentAudioEl;
                this._setAudioNodeUrl(e, r)
            }, e.prototype._setFadeVolumeInterval = function (e) {
                if (e) {
                    if (!this._fadeVolumeWorker && window.Worker && window.Blob) {
                        var t = new Blob(["           var interval;           onmessage = function(e) {             clearInterval(interval);             if (e.data == 'start') {               interval = setInterval(function() { postMessage({}); }, 20);             }           }         "]);
                        try {
                            this._fadeVolumeWorker = new Worker(window.URL.createObjectURL(t))
                        } catch (n) {
                            this._fadeVolumeWorker = !1
                        }
                    }
                    this._fadeVolumeWorker ? (this._fadeVolumeWorker.onmessage = e, this._fadeVolumeWorker.postMessage("start")) : this._fadeVolumeInterval = setInterval(e, 60)
                } else this._fadeVolumeWorker && (this._fadeVolumeWorker.terminate(), this._fadeVolumeWorker = null), this._fadeVolumeInterval && clearInterval(this._fadeVolumeInterval)
            }, e.prototype.fadeVolume = function (e, t) {
                e = Math.max(0, Math.min(1, e));
                var n = this._currentAudioEl, i = 0;
                if (i = e < n.volume ? -.04 : .001, Math.abs(e - n.volume) <= .001) return this._setFadeVolumeInterval(), t && t();
                var a = n.volume;
                this._setFadeVolumeInterval(function () {
                    i > 0 && (i *= 1.2), a += i;
                    var n = !1;
                    return (n = 0 > i ? e >= a : a >= e) ? (this.setVolume(e), this._setFadeVolumeInterval(), t && t()) : void this.setVolume(a)
                }.bind(this))
            }, i(e, [{
                key: "type", get: function () {
                    return "html5"
                }
            }, {
                key: "loaded", get: function () {
                    return !0
                }
            }, {
                key: "duration", get: function () {
                    var e = this._currentAudioEl, t = isNaN(e.duration) || 1 / 0 == e.duration ? 0 : e.duration;
                    return !t && this._trackOptions.duration && (t = parseInt(this._trackOptions.duration)), t
                }
            }]), e
        }();
    o.STATE_HAVE_NOTHING = 0, o.STATE_HAVE_FUTURE_DATA = 3, o.HAVE_ENOUGH_DATA = 4, o.AUDIO_EL_ID = "ap_audio"
}, function () {
    var e = window, t = e.hide, n = e.lockButton, i = e.gpeByClass, a = window, r = a.ajax;
    window.FeedNotifications = {
        hide: function (e, a, o, s, l, c, u) {
            var d = {_ajax: 1, act: "hide_internal_notification", reason: s, id: a, hash: o}, f = {},
                p = i("_block", e);
            return "decline" == s ? t(p) : (n(e), f.onDone = function () {
                cur.destroy.push(function () {
                    return remove(p)
                }), nav.go(e, l)
            }, f.onFail = function () {
                unlockButton(e)
            }, "add_custom_newsfeed" == c && (setCookie("remixcustom_feed_added", u), d.action = c, d.action_section = u.section, d.action_hash = u.hash)), r.post("/index.php", d, f), !1
        }
    }
}, function () {
    var e = window, t = e.onDOMReady, n = e.page, i = e.geByClass1, a = e.setStyle;
    t(r), n.onChange(r);

    function r() {
        var e = i("basisStory__media");
        if (e) {
            var t = window.innerHeight - 97;
            a(e, "height", t), setTimeout(function () {
                a(e, "max-height", 800)
            })
        }
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(115), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = {_onMouseDown: a["default"](), _onCancelClick: a["default"]()};
    window.MoneyTransferButton = o, t["default"] = o
}, function () {
    Object.assign(window, {asc: e, desc: t, unique: n, first: i, last: a, toInt: r, toArray: o, groupBy: s});

    function e(e, t) {
        return e - t
    }

    function t(e, t) {
        return t - e
    }

    function n(e, t, n) {
        return n.indexOf(e) === t
    }

    function i(e, t) {
        return 1 === arguments.length ? e[0] : t.slice(0, e)
    }

    function a(e, t) {
        return 1 === arguments.length ? e[e.length - 1] : t.slice(-e)
    }

    function r(e) {
        return parseInt(e, 10)
    }

    function o(e) {
        return "[object Object]" === Object.prototype.toString.call(e) ? Object.keys(e).map(function (t) {
            return e[t]
        }) : Array.isArray(e) ? e : [e]
    }

    function s(e, t) {
        var n = {};
        return e.forEach(function (e) {
            var i = t(e);
            (n[i] || (n[i] = [])).push(e)
        }), n
    }
}, function (e, t, n) {
    {
        var i = n(115);
        a(i)
    }

    function a(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var r = "tabs_block", o = "mhb_back", s = "TopMenu_open", l = "tab_item_top", c = "TopMenu__switcher",
        u = "TopMenu__switcher_on", d = function () {
            return geByClass1(r)
        }, f = function () {
            return geByClass1(o)
        }, p = function () {
            return geByClass1(c)
        }, _ = function () {
            return geByClass1(l)
        }, m = !0, h = 0;
    window.TopMenu = {onHeaderClick: v};

    function v(e) {
        if (m) {
            var t = d();
            if (stopEvent(e), preventEvent(e), hasClass(s, t)) removeClass(s, t); else {
                var n = f(), i = _();
                addClass(s, t), geByClass1("_hfixed") && setStyle(t, "max-height", window.innerHeight - 70), append(t, n), addEvent(window, "touchstart mousedown", w), addEvent(i, "touchstart mousedown", g), addEvent(i, "click", function (e) {
                    stopEvent(e), preventEvent(e)
                }), cur.destroy.push(y), cur.destroy.push(function () {
                    return removeEvent(i, "touchstart mousedown", g)
                })
            }
        }
    }

    function g(e) {
        stopEvent(e), preventEvent(e), h = 300, m && (toggleClass(u, p()), "touchstart" === e.type && setTimeout(function () {
            nav.go(_(), null)
        }, 130))
    }

    function w(e) {
        gpeByClass(r, e.target) || gpeByClass(o, e.target) || (stopEvent(e), preventEvent(e), removeClass(s, d()), y())
    }

    function y() {
        removeEvent(window, "touchstart mousedown", w)
    }

    !function () {
        nav.onBeforeGo(function () {
            m = !1, setTimeout(function () {
                removeClass(s, d()), h = 0, m = !0
            }, h)
        })
    }()
}, function () {
    var e = window, t = e.parseJSON, n = e.bind, i = e.clog, a = e.ajx2q, r = e.canUploadFile, o = e.attr,
        s = e.uploadFile, l = e.readFile, c = e.replace, u = e.clone, d = e.ce, f = window, p = f.ajax, _ = {
            fallback: function (e) {
                var t = window, n = t.nav, i = e.nextSibling;
                return i ? !n.go(i) : !1
            }, onUploadProgress: function (e) {
                var t = window, n = t.photoview;
                n.updateUpload({progress: e.loaded / e.total})
            }, onUploadComplete: function (e) {
                var i = window, a = i.photoview, r = this, o = e.target.responseText, s = !1;
                try {
                    s = t(o)
                } catch (l) {
                    s = {error: "ERR_CLIENT_BAD_RESPONSE: bad request response"}
                }
                if (s.error) _.onUploadError.call(r, e); else {
                    r.xhr = null, r.photo_res = o, r.photo_size = s.size;
                    var c = r.static_url + s.x_src, u = s.size[0], d = s.size[1], f = Math.min(u, d);
                    a.onClose = n(_.onClose, r), a.openCrop({src: c, max_scale: f / 200, onSelect: n(_.onCropSelected, r)})
                }
            }, onUploadError: function (e) {
                var t = window, n = t.photoview;
                i("upload error.", e.target.responseText), n.close()
            }, onClose: function () {
                this.xhr && this.xhr.abort && this.xhr.abort()
            }, onCropSelected: function (e, t, n) {
                var i = window, r = i.photoview, o = this, s = o.photo_res, l = o.photo_size, c = l[0], u = l[1],
                    d = Math.min(c, u), f = Math.round(e * c), m = Math.round(t * u), h = Math.round(n * d);
                if (o.upload_edit_url) var v = o.upload_edit_url; else var v = o.base_url + "upload.php?" + a({
                    act: "owner_photo_edit",
                    _query: s,
                    _origin: location.protocol + "//" + location.host
                });
                o.xhr = p.plainpost(v, {_crop: [f, m, h].join(",")}, function (e) {
                    _.onCropSuccess.call(o, e)
                }, function () {
                    _.onCropCancel.call(o)
                }, !0), r.updateCrop({saving: !0})
            }, onCropSuccess: function (e) {
                var t = window, n = t.photoview, i = this;
                i.xhr = p.post("/photos.php?act=done_photo", {_ajax: 1, _query: e}, {
                    onDone: function () {
                        n.close()
                    }, onFail: function () {
                        _.onCropCancel.call(i)
                    }
                })
            }, onCropCancel: function () {
                var e = window, t = e.photoview;
                t.updateCrop({saving: !1})
            }, start: function (e, t) {
                var i = window, a = i.photoview;
                if (!e || !r()) return _.fallback(e, t);
                var d = e.files, f = d[0] || !1, p = o(e, "data-upload-url"), m = o(e, "data-base-url"),
                    h = o(e, "data-static-url");
                if (!f) return !1;
                if (!p) return _.fallback(e, t);
                var v = {upload_url: p, base_url: m, static_url: h, file: f};
                return v.xhr = s(p, {photo: f}, {
                    onProgress: n(_.onUploadProgress, v),
                    onComplete: n(_.onUploadComplete, v),
                    onError: n(_.onUploadError, v)
                }), l(f, function (e) {
                    a.updateUpload({thumb: e})
                }), c(u(e), e), a.onClose = n(_.onClose, v), a.openUpload({src: null}), !1
            }, getCropFromTag: function (e, t, n) {
                if (!e) return !1;
                if (3 == e.length) var i = +e[0], a = +e[1], r = +e[2]; else {
                    var i = +e[0] * t / 1e4, a = +e[1] * n / 1e4, r = +e[2] * t / 1e4, o = +e[3] * n / 1e4;
                    if (r > o && (i += (r - o) / 2, r = o), 200 > r) {
                        var s = (200 - r) / 2;
                        i -= s, a -= s, r = 200
                    }
                    r = Math.min(Math.max(r, 200), Math.min(t, n)), i = Math.min(Math.max(i, 0), t - r), a = Math.min(Math.max(a, 0), n - r)
                }
                return [i / t, a / n, r / Math.min(t, n)]
            }, crop: function (e) {
                if (!e || !e.size && !e.url) return !1;
                var t = window, i = t.photoview, a = {upload_edit_url: e.upload_url};
                if (e.size) {
                    a.photo_size = e.size;
                    var r = Math.min(e.size[0], e.size[1]);
                    i.onClose = n(_.onClose, a), i.openCrop({
                        src: e.thumb,
                        max_scale: r / 200,
                        rect: _.getCropFromTag(e.rect, e.size[0], e.size[1]),
                        onSelect: n(_.onCropSelected, a)
                    })
                } else {
                    var o = d("img", {
                        src: e.url, onload: function () {
                            a.photo_size = [o.width, o.height];
                            var t = Math.min(o.width, o.height);
                            i.updateCrop({
                                src: e.thumb,
                                max_scale: t / 200,
                                rect: _.getCropFromTag(e.rect, o.width, o.height),
                                onSelect: n(_.onCropSelected, a)
                            })
                        }
                    });
                    i.onClose = n(_.onClose, a), i.openCrop({src: !0})
                }
                return !0
            }
        };
    window.ownerPhotoUpload = _
}, function () {
    Object.assign(Typing, {setTyping: e});

    function e(e, t) {
        var n = "string" == typeof e ? $(".typing_id_" + e) : e, i = n.$(".typing__names");
        n.classList.toggle("typing_empty", Typing_isEmpty(t)), i.innerText = Typing_renderNames(t)
    }
}, function (e, t, n) {
    var i = n(6), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    a["default"].onPostMessage(function (e) {
        ("waiterStart" === e || "3dsPage" === e) && document.activeElement && document.activeElement.blur()
    })
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    t.QuadAlgorithm = function () {
        function e() {
            n(this, e), this.clear()
        }

        return e.prototype.push = function (e) {
            this._count++, this._accum += e, this._accum_q += e * e
        }, e.prototype.get = function () {
            return 1 == this._count ? this._accum : Math.sqrt((this._accum_q - this._accum * this._accum / this._count) / this._count)
        }, e.prototype.clear = function () {
            this._count = 0, this._accum = 0, this._accum_q = 0
        }, e
    }()
}, function () {
    Object.assign(Unfold, {setActive: e, setCount: t}), function () {
        Unfold._onTriggerMouseDown = n
    }();

    function e(e, t) {
        var n = e.$(".unfold__item_active"), i = e.$(".unfold__item_name_" + t);
        if (n && i) {
            n.classList.remove("unfold__item_active"), i.classList.add("unfold__item_active");
            var a = e.$(".unfold__triggerText"), r = i.$(".unfold__itemText");
            a.innerText = r.innerHTML
        }
    }

    function t(e, t, n) {
        var i = e.$(".unfold__item_name_" + t + " .oval");
        Oval.setValue(i, n)
    }

    function n(e) {
        var t = e.closest(".unfold"), n = isTouch ? "touchend" : "mousedown", i = !isTouch && window.innerWidth < 882;
        t.classList.add("unfold_open"), document.addEventListener("keydown", r), document.addEventListener("touchmove", a), document.addEventListener(n, o, !0);

        function a() {
            t.classList.remove("unfold_open"), document.removeEventListener("keydown", r), document.removeEventListener("touchmove", a), document.removeEventListener(n, o, !0)
        }

        function r(e) {
            var t = 27;
            e.keyCode === t && a()
        }

        function o(e) {
            var t = e.target.closest(".unfold__item[href]");
            if (t) {
                var n = t.getAttribute("href");
                return a(), void nav.go(n)
            }
            (isTouch || i) && (e.preventDefault(), e.stopImmediatePropagation()), i && document.addEventListener("click", s, !0), a()
        }

        function s(e) {
            e.preventDefault(), e.stopImmediatePropagation(), document.removeEventListener("click", s, !0)
        }
    }
}, function () {
    Array.prototype.map || (Array.prototype.map = function (e) {
        var t, n, i;
        if (null == this) throw new TypeError("this is null or not defined");
        var a = Object(this), r = a.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (t = arguments[1]), n = new Array(r), i = 0; r > i;) {
            var o, s;
            i in a && (o = a[i], s = e.call(t, o, i, a), n[i] = s), i++
        }
        return n
    })
}, function () {
    window.ScrollView = e;

    function e(e) {
        return Brick({mix: q["class"](e.mix, "scrollView"), attrs: e.attrs, inner: e.inner})
    }
}, function () {
    function e(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    Object.assign(q, {"class": t});

    function t() {
        for (var e = [], t = null, i = arguments.length, a = Array(i), r = 0; i > r; r++) a[r] = arguments[r];
        return a.forEach(function (i) {
            "string" == typeof i ? (e.push(i), t = i) : i && (e = e.concat(n(t, i)))
        }), e.join(" ")
    }

    function n(t, n) {
        var i = [];
        return "string" == typeof n && (n = e({}, n, !0)), Object.keys(n).forEach(function (e) {
            var a = n[e];
            a === !0 ? i.push(t + "_" + e) : a && i.push(t + "_" + e + "_" + a)
        }), i
    }
}, function () {
    var e = window, t = e.preventEvent, n = e.onDOMReady, i = e.lsCheck, a = e.geByClass1, r = e.qs2obj, o = e.geByTag1,
        s = e.gpeByTag, l = e.addEvent, c = e.onBodyResize, u = e.removeEvent, d = e.hide, f = e.each, p = e.show,
        _ = e.vkNow, m = e.gpeByClass, h = e.attr, v = e.val, g = e.escapeRE, w = e.hasClass, y = e.lsGet,
        b = e.isEmpty, k = e.lsSet, M = e.geByClass, C = e.setStyle, S = window, T = S.ajax, E = window,
        A = (E.page, window), x = A.post, P = window, I = P.Scroller;
    window.StickersHints = function () {
        var e, S, E, A, P, B, H, N, O = 864e5, L = 300, D = 30, j = 64, q = 8, R = 4, z = !0, F = 0, U = {
            D83DDE0A: [0, ":-)"],
            D83DDE03: [1, ":-D"],
            D83DDE09: [2, ";-)"],
            D83DDE06: [3, "xD"],
            D83DDE1C: [4, ";-P"],
            D83DDE0B: [5, ":-p"],
            D83DDE0D: [6, "8-)"],
            D83DDE0E: [7, "B-)"],
            D83DDE12: [8, ":-("],
            D83DDE0F: [9, ";-]"],
            D83DDE14: [10, "3("],
            D83DDE22: [11, ":'("],
            D83DDE2D: [12, ":_("],
            D83DDE29: [13, ":(("],
            D83DDE28: [14, ":o"],
            D83DDE10: [15, ":|"],
            D83DDE0C: [16, "3-)"],
            D83DDE20: [17, ">("],
            D83DDE21: [18, ">(("],
            D83DDE07: [19, "O:)"],
            D83DDE30: [20, ";o"],
            D83DDE33: [21, "8|"],
            D83DDE32: [22, "8o"],
            D83DDE37: [23, ":X"],
            D83DDE1A: [24, ":-*"],
            D83DDE08: [25, "}:)"],
            2764: [26, "<3"],
            D83DDC4D: [27, ":like:"],
            D83DDC4E: [28, ":dislike:"],
            "261D": [29, ":up:"],
            "270C": [30, ":v:"],
            D83DDC4C: [31, ":ok:"]
        };
        n(function () {
            i() && !a("vk_stickers_hints_support_no") && (x.onStickersInit(function () {
                W()
            }), a("stickersHints") && W())
        }), T.onRedirect(function (e) {
            r(e.split("?")[1]).invalidate_stickers_hints && X()
        }), x.onReplyClick(function (e) {
            var t = window, n = t.cur;
            N = e, setTimeout($, 10), n.destroy.push(function () {
                N = ""
            })
        });

        function W() {
            var t = window, n = t.cur;
            if (A = o("textarea", s("form", a("cp_sticker_btn"))), A && !A.initialized) {
                var i = function () {
                    var t = A.value.length;
                    e = t - F > 1, F = t, $(), z && (V(), z = !1)
                };
                A.initialized = !0, B = a("stickersHints"), P = a("stickersHints__content"), l(A, "focus", $), l(A, "input", i), l(document, "click", Y), c(K), c(ut), n.destroy.push(function () {
                    B = null, P = null, A = null, u(A, "focus", $), u(A, "input", i), u(document, "click", Y), c("__clear", K), c("__clear", ut), E && E.destroy(), F = 0
                })
            }
        }

        function $() {
            if (A) {
                S && clearTimeout(S);
                var e = J(A.value);
                Z(function (t) {
                    var n = e && t[e];
                    n ? S = setTimeout(function () {
                        var t = n.userStickers || [], i = n.promotedStickers || [];
                        if (t.length > 0 || i.length > 0) {
                            var a = [];
                            f(t, function (t, n) {
                                a.push(et({stickerId: n, query: e, isPromoted: !1}))
                            }), f(i, function (t, n) {
                                a.push(et({stickerId: n, query: e, isPromoted: !0}))
                            }), P.innerHTML = a.join(""), p(B), K(), ut(), E = new I(B), E.init()
                        }
                    }, L) : (E && E.destroy(), d(B))
                })
            }
        }

        function V() {
            ot() && _() - lt() > O * (2 + Math.random()) && X(), tt(function (e) {
                e *= 1e3, ot() && e > lt() && X()
            })
        }

        function X() {
            nt(function (e) {
                H = e, ct(e), $()
            })
        }

        function Y(e) {
            var t = e.target;
            t === A || m(t, "stickersHints") || d(B)
        }

        function G(e, n, i, r) {
            window.isNewMail && t(e);
            var o = m("sticker_item", n), s = a("th_img", o);
            return h(o, "style", ""), h(n, "style", ""), h(s, "style", ""), d(B), A.value = "", x.sendSticker(n, i, !0, r)
        }

        function Q(e) {
            setTimeout(function () {
                it(v(o("input", e.parentElement)) ? 1 : 0, function () {
                    X()
                })
            }, 0)
        }

        function K() {
            h(P, "style", "")
        }

        function J(t) {
            return t.length > D ? "" : (f(U, function (e, n) {
                var i = new RegExp("(\\s|^)(" + g(n[1]) + (")" == n[1][n[1].length - 1] ? "+" : "") + ")([\\s\\.,]|$)", "g");
                t = t.replace(i, function (t, n, i, a) {
                    return (n || "") + rt(e) + (a || "")
                })
            }), 0 === t.indexOf(N) && (t = t.replace(N, "")), t = t.toLowerCase().replace(/^(\s+)|([\.!\?]+)$/g, "").replace("�", "�"), e && (t = t.replace(/\s+$/, "")), t)
        }

        function Z(e) {
            H ? e(H) : ot() ? (H = st(), e(H)) : nt(function (t) {
                H = t, ct(t), e(t)
            })
        }

        function et(e) {
            var t = e.isPromoted,
                n = t ? "" : "onclick=\"return StickersHints.onStickerThumbClick(event, this, {{stickerId}}, '{{stickerReferrer}}');\"",
                i = a("sticker_thumb", a("stickers_list")),
                r = t ? 'href="/attachments?' + ["act=stickers_store", "target=" + h(B, "data-target"), "sticker_id={{stickerId}}", "from=inline", "sticker_referrer={{stickerReferrer}}"].join("&") + '"' : 'href="' + (h(i, "href") || h(i, "data-href")).replace(/media=[\w\d]+/, "media=sticker{{stickerId}}") + '"';
            return ('<div class="sticker_item sticker{{stickerId}} {{promotedClass}}">          <a class="sticker_thumb thumb_item" ' + r + " " + n + '>            <img class="th_img" src="/images/stickers/{{stickerId}}/{{stickerSize}}.png" />          </a>        </div>').replace(/{{stickerId}}/g, e.stickerId).replace("{{promotedClass}}", t ? "sticker_item_promoted" : "").replace("{{stickerReferrer}}", "suggestion_" + e.query).replace("{{stickerSize}}", w("x2", window.bodyNode) ? 256 : 128)
        }

        function tt(e) {
            T.post("/attachments", {_ajax: 1, act: "stickers_hints_change_date"}, {onDone: e})
        }

        function nt(e) {
            T.post("/attachments", {_ajax: 1, act: "stickers_hints_keywords"}, {
                onDone: function (t) {
                    e(at(t))
                }
            })
        }

        function it(e, t) {
            T.post("/attachments", {_ajax: 1, act: "stickers_hints_enabled", value: e}, {onDone: t})
        }

        function at(e) {
            var t = {};
            return f(e, function (e, n) {
                var i = n.user_stickers, a = n.promoted_stickers;
                f(n.words, function (e, n) {
                    t[n] = {userStickers: i, promotedStickers: a}
                })
            }), t
        }

        function rt(e) {
            for (var t = Math.round(e.length / 4), n = "", i = 0; t--;) n += String.fromCharCode(parseInt(e.substr(i, 4), 16)), i += 4;
            return n
        }

        function ot() {
            return Boolean(y("stickers_keywords"))
        }

        function st() {
            return y("stickers_keywords").keywords
        }

        function lt() {
            return y("stickers_keywords").time
        }

        function ct(e) {
            !e || b(e) ? k("stickers_keywords") : k("stickers_keywords", {keywords: e, time: _()})
        }

        function ut() {
            var e = a("stickersHints__callout");
            if (e) {
                var t = e.offsetWidth - R, n = t / j, i = n % 1;
                .3 > i ? n = Math.floor(n) - .5 : i > .7 && (n = Math.ceil(n) - .5);
                var r = Math.round(t / n - q);
                f(M("sticker_item", e), function (e, t) {
                    var n = a("sticker_thumb", t), i = a("th_img", t);
                    C(t, "width", r), C(t, "height", r), C(n, "width", r), C(n, "height", r), C(i, "height", r)
                })
            }
        }

        return {actualizeVisibility: $, init: W, onStickerThumbClick: G, onCheckboxLabelClick: Q}
    }()
}, function () {
    var e = window, t = e.se, n = e.remove, i = e.gpeByTag, a = e.ce, r = e.each, o = e.append, s = e.gpeByClass,
        l = e.toggleClass, c = e.cancelEvent, u = e.hasClass, d = e.geByClass1, f = e.addClass, p = e.getY, _ = e.getH,
        m = e.scrollTop, h = e.getCh, v = e.removeClass, g = e.checkEvent, w = e.geByClass, y = e.getW,
        b = e.replaceClass, k = e.escapeRE, M = e.ge, C = e.val, S = e.after, T = e.scrollToEl, E = e.replaceEntities,
        A = e.toggle, x = e.elfocus, P = e.isUndefined, I = e.isVisible, B = e.clone, H = e.attr, N = e.before,
        O = e.srand, L = e.extend, D = window, j = D.ajax, q = window, R = q.nav, z = window, F = z.Dialog, U = {
            onStickersTabSelected: befall(),
            onStickerClick: befall(),
            onStickersInit: t(),
            onReplyClick: t(),
            add_attach: function (e, t) {
                var s = window, l = s.al;
                n("feed_extra_field");
                var c = i("form", e),
                    u = a("input", {id: "feed_extra_field", type: "hidden", name: "add_attach", value: 2});
                if (c) {
                    var d = !1;
                    if (r(c, function (e, t) {
                            return "submit" === t.type ? (d = t, !1) : void 0
                        }), d) return o(u, c), window.al && l.ver ? R.go(d, t) : c.submit()
                }
                return !0
            },
            toggleActions: function (e, t) {
                var n = s("post_item", e);
                return l("pi_actions_opened", n), c(t), !1
            },
            wallActions: function (e, t) {
                var n = window, i = n.tooltip, a = s("_audioPlaylist", e) || s("wall_item", e) || s("post", e);
                if (!a) return !0;
                if (u("wi_actions_opened", a)) v("wi_actions_opened", a), i.hide(); else {
                    var r = d("wi_actions_wrap", a), o = d("wi_actions", r), g = d("wi_actions_btn", a);
                    U.wallActionsHide(), f("wi_actions_opened", a);
                    var w = p(a) + 45 + _(o) + 7, y = m() + h();
                    l("wi_actions_top", r, w > y), i.addHandler(U.wallActionsHide), i.show(r, g)
                }
                return c(t), !1
            },
            wallActionsHide: function () {
                var e = window, t = e.tooltip;
                v("wi_actions_opened", d("wi_actions_opened")), t.hide()
            },
            wallPostOpen: function (e, t) {
                var n = s("wall_item", e), i = d("wi_date", n);
                return i ? R.go_after(i, t) : !0
            },
            toggleGif: function (e, t, n) {
                return e ? g(t) ? !0 : u("current_gif", e) ? U.hideGif(e, t) : U.showGif(e, t, n) : !0
            },
            showGif: function (e, t, n) {
                var i = window, s = i.cur;
                if (!e) return !0;
                if (g(t)) return !0;
                if (n) {
                    if (s.loadedGifs || (s.loadedGifs = {}), !s.loadedGifs[e.href] && !confirm(n)) return !1;
                    s.loadedGifs[e.href] = !0
                }
                var l = p(e), d = m();
                r(w("current_gif", "mcont"), function (e, t) {
                    U.hideGif(t)
                }), m(d - (l - p(e)));
                var h = a("img", {src: e.href, className: "gif_original"});
                f("current_gif gif_loading", e), o(h, e);
                var v = function (t) {
                    if (y(h) && _(h) || t) {
                        if (clearInterval(k), !u("current_gif", e)) return;
                        b("gif_loading", "gif_opened", e)
                    }
                }, k = setInterval(v, 100);
                return h.onload = v, c(t)
            },
            hideGif: function (e, t) {
                return e ? g(t) ? !0 : (v("current_gif", e), v("gif_opened", e), v("gif_loading", e), n(d("gif_original", e)), c(t)) : !0
            },
            replyNamesRE: function () {
                var e = window, t = e.cur;
                if (!t.replyNames) return !1;
                var n = [];
                return r(t.replyNames, function () {
                    n.push(k(this[0]))
                }), new RegExp("^(" + n.join("|") + ")")
            },
            replyTo: function (e, t, n, i, a) {
                var r = window, c = r.cur;
                if (g(e)) return !0;
                n = n || 0, v("nc_current_reply", d("nc_current_reply"));
                var u = M("nc_form"), h = M("nc_message"), w = d("nc_reply_name", u), y = s("near_btn", w),
                    b = M("nc_reply_as"), k = C(h), P = U.replyNamesRE();
                if (n) {
                    var I = M(t + "_" + n), B = p(I) + _(I), H = m();
                    S(u, I), f("nc_current_reply", d("pi_reply_wrap", I)), m(H + p(I) + _(I) - B);
                    var N = c.replyNames[i] || {}, O = N[0] || "", L = N[1] || "";
                    k = k ? P ? k.replace(P, O) : k : O, U.onReplyClick(!0, O)
                } else {
                    o(u, d("wall_replies")), T(u);
                    var L = "";
                    k = P ? k.replace(P, "") : k
                }
                return C(h, E(k)), C(w, L), A(y, n), b && (C(b, +a), l("cp_post_as_group", u, +a)), C("nc_reply_to", n), c.replyTo = n, x(h), !1
            },
            stickersInit: function () {
                if (!window.isNewMail || !d("messenger")) {
                    var e = window, t = e.cur, n = window, i = n.Scroller, a = M("stickers_panel");
                    if (a) {
                        var r = d("sp_body", a), o = d("sp_stickers_tabs", a);
                        t.scroller && t.scroller.destroy(), t.scroller = new i(r, {byPage: !0}), t.scroller.init(), t.destroy.push(function () {
                            t.scroller.destroy()
                        }), t.tabScroller && t.tabScroller.destroy(), t.tabScroller = new i(o), t.tabScroller.init(), t.destroy.push(function () {
                            t.tabScroller.destroy()
                        }), U.onStickersInit(!0)
                    }
                }
            },
            stickersToggle: function (e, t) {
                var n = window, i = n.cur;
                if (!i.stickers) return !0;
                P(t) && (t = !I("stickers_panel"));
                var a = M("write_form") || M("nc_form"), r = M("stickers_panel"), o = d("cp_sticker_btn", a);
                return r ? (A(r, t), l("cp_sticker_btn_sel", o, t), t && i.tabScroller && i.tabScroller.onShow(), !1) : !0
            },
            stickersClick: function (e, t) {
                var n = window, i = n.cur;
                return i.stickers && i.stickers[t] ? (window.isNewMail && (window.uMailWrite.drawStickers(), window.uMailWrite.openStickersPanel()), U.stickersToggle(null, !0), U.stickersSelectTab(null, t)) : R.go(e)
            },
            stickersStoreOpen: function (e) {
                var t = window, n = t.cur;
                return j.click(e, !1, {url_params: {reply_to: n.replyTo || 0}})
            },
            stickersSelectTab: function (e, t) {
                var n = window, i = n.cur;
                if (!window.isNewMail && i.tabScroller && !i.tabScroller.canClick()) return !1;
                var a = M("stickers_panel"), r = d("sp_body", a), o = d("sp_tab_selected", a);
                if (i.stickers[t]) {
                    i.scroller && i.scroller.destroy(), C(r, i.stickers[t]), i.scroller && i.scroller.init(), e || (e = d("sp_tab" + t, a)), v("sp_tab_selected", o), f("sp_tab_selected", e);
                    var s = p(a), l = s + y(a), c = m(), u = c + h();
                    (c > s || l > u) && T(a), i.tabScroller && i.tabScroller.showElem(e)
                }
                return window.isNewMail && U.onStickersTabSelected(), !1
            },
            addRecentSticker: function (e, t, i) {
                var o = window, l = o.cur, c = s("sticker_item", e);
                if (l.stickers && l.stickers[-1] && c) {
                    var u = a("div", {innerHTML: l.stickers[-1]}), f = B(c), p = d("sticker_thumb", f),
                        _ = d("stickers_list", u);
                    H(p, "onclick", "return post.sendSticker(this, " + t + ", true);"), r(w("sticker" + t, _), function () {
                        n(this)
                    }), N(f, _.firstChild);
                    var m = 0;
                    r(w("sticker_item", _), function () {
                        window.isNewMail ? m++ >= 16 && n(this) : m++ >= 8 && n(this)
                    }), l.stickers[-1] = C(u), i && U.stickersSelectTab(!1, -1)
                }
            },
            sendSticker: function (e, t, n, i) {
                if (window.isNewMail && U.onStickerClick(t)) return U.addRecentSticker(e, t, n), !1;
                var a = window, r = a.cur;
                if (r.scroller && !r.scroller.canClick()) return !1;
                U.stickersToggle(e, !1);
                var o = M("write_submit"), s = {lock: !0, url_params: {media: "sticker" + t, _af: O()}};
                if (n && !i && (s.url_params.media_from = "recent"), !i) {
                    var l = H(e, "href");
                    l && (i = l.split("sticker_referrer=")[1].split("&")[0])
                }
                if (i && (s.url_params.sticker_referrer = i), U.addRecentSticker(e, t, n), o) return j.click(o, L({save: !0}, F), s);
                var o = M("nc_submit");
                return o ? j.click(o, {}, s) : void 0
            }
        };
    window.post = U
}, function () {
    Object.assign(uConvo, {onTap: Convo.onTap, redrawOnline: e, redrawUnread: t, redrawLastMsg: n, redrawTyping: i});

    function e(e) {
        var t = store.mail.peers[e];
        if (t) {
            var n = uConvo_getOnline(t);
            Convo.setOnline(e, n)
        }
    }

    function t(e) {
        if (store.mail.peers[e]) {
            var t = uConvo_getUnreadCount(e);
            Convo.setUnreadCount(e, t)
        }
    }

    function n(e) {
        var t = uConvo_getLastMsg(e);
        Convo.setLastMsg(e, t.textShort, t.dateShort)
    }

    function i(e) {
        var t = store.mail, n = t.cur, i = t.peers, a = t.members;
        if (n) {
            var r = i[e];
            if (r) {
                var o = r.typing;
                if (1 === o.length && o[0] === e) Convo.setTyping(e, !0); else {
                    var s = o.map(function (e) {
                        return a[e].name
                    });
                    Convo.setTyping(e, s)
                }
            }
        }
    }
}, function () {
    Object.assign(window, {uCurConvoTyping: e, uCurConvoTyping_getNames: t});

    function e() {
        return Typing({id: "curConvo", gray: !0, typing: t()})
    }

    function t() {
        var e = store.mail, t = e.cur.peerId;
        if (!t) return [];
        for (var n = e.members, i = e.peers[t].typing, a = i.length, r = [], o = 0; a > o; o++) {
            var s = n[i[o]].name;
            r.push(s)
        }
        return r
    }
}, function () {
    Object.assign(q, {
        attr: e,
        onBlur: t("onblur"),
        onClick: t("onclick"),
        onFocus: t("onfocus"),
        onInput: t("oninput"),
        onKeyDown: t("onkeydown"),
        onKeyPress: t("onkeypress"),
        onKeyUp: t("onkeyup"),
        onMouseDown: t("onmousedown"),
        onMouseUp: t("onmouseup"),
        onScroll: t("onscroll"),
        onSubmit: t("onsubmit"),
        onTouchEnd: t("ontouchend"),
        onTouchMove: t("ontouchmove"),
        onTouchStart: t("ontouchstart"),
        onWheel: t("onwheel")
    });

    function e(e, t) {
        return e + '="' + t + '"'
    }

    function t(t) {
        return function () {
            for (var i = arguments.length, a = Array(i), r = 0; i > r; r++) a[r] = arguments[r];
            return e(t, n(a))
        }
    }

    function n(e) {
        var t = e[0], n = e.slice(1).map(i).join(", ");
        return t + "(" + n + ")"
    }

    function i(e) {
        return null === e ? "null" : e === !0 ? "true" : e === !1 ? "false" : "number" == typeof e || "event" === e || "this" === e ? e : "'" + e + "'"
    }
}, function (e, t, n) {
    var i = n(82), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = window, s = o.preventEvent, l = o.cancelEvent, c = o.lockButton, u = o.attr, d = o.ajax, f = 1500,
        p = void 0, _ = void 0;
    a["default"]._onCancelClick(function (e, t) {
        s(e), l(e), c(t), m({cancelUrl: u(t, "href")}), window.cur.destroy.push(h)
    });

    function m(e) {
        var t = e.cancelUrl;
        p = setInterval(function () {
            _ = d.post(t, {_ajax: 1}, {
                onDone: function (e) {
                    if (1 === e) {
                        var t = window.scrollTop();
                        nav.go(location.pathname + location.search, null, {replace: !0}), cur.destroy.push(function () {
                            window.scrollTop(t)
                        }), h()
                    }
                }
            })
        }, f)
    }

    function h() {
        p && (clearInterval(p), p = null), _ && (_.abort(), _ = null)
    }
}, function () {
    var e = t(['\n    <div class="', '">\n      <div class="loading__dot loading__dot_0"></div>\n      <div class="loading__dot loading__dot_1"></div>\n      <div class="loading__dot loading__dot_2"></div>\n    </div>\n  '], ['\n    <div class="', '">\n      <div class="loading__dot loading__dot_0"></div>\n      <div class="loading__dot loading__dot_1"></div>\n      <div class="loading__dot loading__dot_2"></div>\n    </div>\n  ']);

    function t(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    window.Loading = n;

    function n(t) {
        t || (t = {});
        var n = q["class"](t.mix, "loading");
        return q.html(e, n)
    }
}, function () {
    var e = window, t = e.lsGet, n = e.ge, i = e.addClass, a = e.removeClass, r = e.each, o = e.geByClass, s = e.hide,
        l = e.show, c = e.val, u = e.geByClass1, d = e.gpeByClass, f = e.attr, p = e.addEvent, _ = e.cancelEvent,
        m = e.hasClass, h = e.getX, v = e.geByTag1, g = e.htsc, w = e.stripTags, y = e.toggleClass, b = e.lsSet,
        k = (e.append, window), M = k.ajax, C = window, S = C.nav, T = window, E = T.isTouch, A = window, x = A.audio,
        P = function () {
            var e = "1" == t("audio_time_left"), k = "", C = "", T = "", A = null, I = 0, B = {};
            x.onPlay(O), x.onPause(L), x.onSelect(D), x.onDeselect(j), x.onProgress(function (e, t, n) {
                var o = geBySel('.audio_item[data-id="' + e + '"]');
                x.playing() ? (r(o, function (e, t) {
                    i("ai_playing", t)
                }), i("ai_playing", "lm_audio")) : (r(o, function (e, t) {
                    a("ai_playing", t)
                }), a("ai_playing", "lm_audio")), o && r(o, function (e, a) {
                    G(a, t / n), i("ai_current", a)
                })
            }), x.onPositionChanged(q), x.onVolumeChanged(function (e, t) {
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                n && r(n, function (e, n) {
                    K(n, t)
                })
            }), x.onEnded(function (e) {
                var t = geBySel('.audio_item[data-id="' + e + '"]');
                t && r(t, function (e, t) {
                    Q(t, 1)
                })
            }), x.onNotFoundError(R), x.onEmptyPlaylistError(R);

            function H(e, t) {
                e && _(e);
                var n = f(u("audio_item", d("_audioPlaylist", t)), "data-id");
                x.play(n)
            }

            function N() {
                r(o("ai_current"), function (e, t) {
                    t = J(t), j(t.id, t.dur)
                });
                var e = x.getCurrentId(), t = geBySel('.audio_item[data-id="' + e + '"]'), n = x.loaded(),
                    s = x.position(), l = x.duration();
                x.playing() ? (r(t, function (e, t) {
                    i("ai_playing", t)
                }), i("ai_playing", "lm_audio")) : (r(t, function (e, t) {
                    a("ai_playing", t)
                }), a("ai_playing", "lm_audio")), D(x.getCurrent()), r(t, function (e, t) {
                    G(t, n / l)
                }), q(x.getCurrentId(), s, l)
            }

            function O(e) {
                i("ai_playing", "lm_audio");
                var t = geBySel('.audio_item[data-id="' + e + '"]');
                t && (r(t, function (e, t) {
                    i("ai_playing", t), i("ai_current", t)
                }), P.playback(e))
            }

            function L(e) {
                a("ai_playing", "lm_audio");
                var t = geBySel('.audio_item[data-id="' + e + '"]');
                t && (r(t, function (e, t) {
                    a("ai_playing", t), i("ai_current", t)
                }), P.playback(e, !0))
            }

            function D(e) {
                if (!e) return void s("lm_player");
                l("lm_player");
                var t = n("lm_audio");
                t && (c(u("ai_artist", t), e.artist), c(u("ai_title", t), e.title), f(u("ai_play", t), "style", e.cover_style));
                var a = geBySel('.audio_item[data-id="' + e.id + '"]');
                a && r(a, function (e, t) {
                    G(t, 0), Q(t, 0), Y(t, tt(0, x.duration())), K(t, x.volume()), i("ai_current", t)
                })
            }

            function j(e, t) {
                a("ai_playing", "lm_audio");
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                n && (r(n, function (e, n) {
                    Y(n, et(t)), a("ai_playing", n), a("ai_current", n)
                }), I = 0, B[e] && delete B[e])
            }

            function q(e, t, n) {
                var i = geBySel('.audio_item[data-id="' + e + '"]');
                i && (r(i, function (e, i) {
                    var a = t / n;
                    .01 >= t && 1 >= n && (a = 0), z || Q(i, a), Y(i, P.getFormatedTime(t, n))
                }), t > 1 && (B[e] = 1))
            }

            function R(e) {
                var t = d("audios_list", "audio" + e), n = o("audio_item", t), i = [], a = !1;
                r(n, function (t, n) {
                    return (n = J(n)) ? (i.push(n), void(n.id == e && (a = !0))) : !0
                }), x.playlist(i, {q: f(t, "data-query")}), a && x.play(e)
            }

            var z = null, F = null, U = !1, W = !1;
            p(document, E ? "touchend touchcancel" : "mouseup", V), p(document, E ? "touchmove" : "mousemove", $);

            function $(e) {
                if (z) {
                    var t = d("audio_item", z), n = X(z, e);
                    e && _(e);
                    var i = geBySel('.audio_item[data-id="' + f(t, "data-id") + '"]');
                    r(i, function (e, t) {
                        U && Q(t, n), W && (K(t, n), x.volume(n))
                    }), F = n
                }
            }

            function V(e) {
                if (z) {
                    var t = d("audio_item", z), n = X(z, e) || F;
                    e && _(e);
                    var i = geBySel('.audio_item[data-id="' + f(t, "data-id") + '"]');
                    r(i, function (e, i) {
                        U && (Q(i, n), x.position(n, !0)), W && K(t, n)
                    }), z = F = null, U = W = !1
                }
            }

            function X(e, t) {
                var n = m("touch", window.bodyNode) ? 10 : 8,
                    i = t.pageX || t.touches && t.touches[0] && t.touches[0].pageX || 0, a = i - h(e) - n / 2,
                    r = e.offsetWidth - n, o = r ? Math.max(0, Math.min(a / r, 1)) : 0;
                return o
            }

            function Y(e, t) {
                if (e) {
                    var n = u("ai_dur", e);
                    c(n, t)
                }
            }

            function G(e, t) {
                if (e) {
                    var n = u("aic_progress_wrap", e), i = u("aic_load_line", n);
                    i.style.width = 100 * Math.max(0, Math.min(t, 1)) + "%"
                }
            }

            function Q(e, t) {
                if (e) {
                    {
                        var n = u("aic_progress_wrap", e), i = u("aic_progress_line", n);
                        u("aic_slider", i)
                    }
                    i.style.width = 100 * t + "%"
                }
            }

            function K(e, t) {
                if (e) {
                    {
                        var n = u("aic_volume_wrap", e), i = u("aic_progress_line", n);
                        u("aic_slider", i)
                    }
                    i.style.width = 100 * t + "%"
                }
            }

            function J(e) {
                if (e = n(e), !e || !f(e, "data-id")) return !1;
                if (m("ai_deleted", e)) return !1;
                var t = f(e, "data-id"), i = c(v("input", e)), a = f(u("ai_dur", e), "data-dur"),
                    r = c(u("ai_artist", e)), o = c(u("ai_title", e)), s = !!u("ai_add", e), l = !!u("ai_del", e),
                    d = f(u("ai_play", e), "style"), p = !!u("audio_item_disabled", e);
                return {
                    id: t,
                    src: i,
                    dur: a,
                    artist: g(w(r)),
                    title: g(w(o)),
                    can_add: s,
                    can_del: l,
                    cover_style: d,
                    is_disabled: p
                }
            }

            function Z(e, t, n) {
                if (!e) return "";
                var i = g(e.id), a = g(e.src), r = +e.dur, o = e.artist, s = e.title, l = e.can_add, c = e.can_del,
                    u = s ? '<span class="divider"> &ndash; </span>' : "", d = E ? "ontouchstart" : "onmousedown",
                    f = "", p = "", _ = e.cover_style || "", m = e.is_disabled || "";
                if (m) return '<div class="audio_item audio_item_disabled"></div>';
                if (rt(i)) {
                    if (n) return "";
                    f += " ai_deleted"
                }
                nt(i) && (f += " ai_added"), c ? (f += " ai_has_btn", p = '<div class="ai_del wia_item" onclick="audioplayer.del(\'' + i + "', event);\">" + lang.global_delete_audio + "</div>") : l && (f += " ai_has_btn", p = '<div class="ai_add wia_item" onclick="audioplayer.add(\'' + i + "', event);\">" + lang.global_add_to_audio + "</div>"), i == x.getCurrentId() && (x.playing() && (f += " ai_playing"), f += " ai_current");
                var h = "";
                return p ? h = '<div class="ai_menu_wrap"><i class="i_pointer"></i><a href="#" class="ai_menu_toggle_button" onclick="ActionMenu.toggleMenu(event, this);"></a><div class="ai_menu wi_actions" id="ai_menu_' + i + '">' + p + "</div></div>" : f += " ai_no_menu", '<div id="audio' + i + '" data-id="' + i + '" class="audio_item' + f + '" onclick="audioplayer.playPause(event, \'' + i + "'" + (t ? ", true" : "") + ');"><div class="ai_info"><div class="ai_play" style="' + _ + '"><i class="i_play"></i></div>' + h + '<div class="ai_body"><div class="ai_dur" data-dur="' + r + '" onclick="audioplayer.switchTimeFormat(this, event);">' + et(r) + '</div><div class="ai_label"><span class="ai_title">' + s + "</span>" + u + '<span class="ai_artist">' + o + '</span></div><input type="hidden" value="' + a + '"></div></div><div class="ai_controls"><table class="row_table"><tr><td class="aic_progress_wrap"><div class="aic_line" ' + d + '="audioplayer.setPosition(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_load_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td><td class="aic_volume_wrap"><div class="aic_line" ' + d + '="audioplayer.setVolume(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td></tr></table></div></div>'
            }

            function et(e) {
                var t, n, i, a = 0 > e;
                return e = Math.round(a ? -e : e), n = e % 60, t = 10 > n ? "0" + n : n, e = Math.floor(e / 60), i = e % 60, t = i + ":" + t, e = Math.floor(e / 60), e > 0 && (10 > i && (t = "0" + t), t = e + ":" + t), a && (t = "-" + t), t
            }

            function tt(t, n) {
                return et(e && n ? t - n : t)
            }

            function nt(e) {
                var t = window, n = t.cur;
                return n.addedAudios ? n.addedAudios[e] : !1
            }

            function it(e) {
                var t = window, n = t.cur;
                n.addedAudios || (n.addedAudios = {}), n.addedAudios[e] = !0
            }

            function at(e) {
                var t = window, n = t.cur;
                n.addedAudios && delete n.addedAudios[e]
            }

            function rt(e) {
                var t = window, n = t.cur;
                return n.deletedAudios ? n.deletedAudios[e] : !1
            }

            function ot(e) {
                var t = window, n = t.cur;
                n.deletedAudios || (n.deletedAudios = {}), n.deletedAudios[e] = !0
            }

            function st(e) {
                var t = window, n = t.cur;
                n.deletedAudios && delete n.deletedAudios[e]
            }

            function lt(e, t) {
                t ? it(e) : at(e);
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                r(n, function (e, n) {
                    y("ai_added", n, t), c(u("ai_add", n), t ? lang.global_delete_audio : lang.global_add_to_audio)
                });
                var i = geBySel1('body > [id="ai_menu_' + e + '"]'), a = u("ai_add", i);
                c(a, t ? lang.global_delete_audio : lang.global_add_to_audio), ActionMenu.update()
            }

            function ct(e, t) {
                t ? ot(e) : st(e);
                var n = geBySel('.audio_item[data-id="' + e + '"]');
                r(n, function (e, n) {
                    y("ai_deleted", n, t), c(u("ai_del", n), t ? lang.global_add_to_audio : lang.global_delete_audio)
                });
                var i = geBySel1('body > [id="ai_menu_' + e + '"]'), a = u("ai_del", i);
                c(a, t ? lang.global_add_to_audio : lang.global_delete_audio), ActionMenu.update()
            }

            return {
                init: function (e) {
                    k = e.add_hash || "", C = e.del_hash || "", T = e.res_hash || ""
                }, initAudio: N, getDOMFromAudio: Z, add: function (e, t) {
                    var r = n("audio" + e);
                    if (!m("ai_ajax", r)) {
                        var o = m("ai_added", r);
                        lt(e, !o), i("ai_ajax", r), M.post("/audio", {
                            _ajax: 1,
                            act: o ? "delete" : "add",
                            audio: o ? f(r, "data-deleteid") : e,
                            hash: o ? C : k
                        }, {
                            redirectToLoginPage: !0, onDone: function (t) {
                                a("ai_ajax", r), t ? f(r, "data-deleteid", t) : lt(e, o)
                            }, onFail: function () {
                                a("ai_ajax", r), lt(e, o);
                                var t = Array.prototype.slice.call(arguments), n = t.shift();
                                switch (n) {
                                    case 2:
                                        S.go("/audio?act=add&audio=" + e + "&hash=" + k)
                                }
                            }
                        }), t && _(t)
                    }
                }, del: function (e, t) {
                    var i = n("audio" + e);
                    if (i) {
                        var a = m("ai_deleted", i);
                        ct(e, !a), a ? st(e) : ot(e), M.post("/audio", {
                            _ajax: 1,
                            act: a ? "restore" : "delete",
                            audio: e,
                            hash: a ? T : C
                        }, {
                            redirectToLoginPage: !0, onDone: function (t) {
                                t || ct(e, a)
                            }, onFail: function () {
                                ct(e, a);
                                var t = Array.prototype.slice.call(arguments), n = t.shift();
                                switch (n) {
                                    case 2:
                                        S.go("/audio?act=" + (a ? "restore" : "delete") + "&audio=" + e + "&hash=" + (a ? T : C))
                                }
                            }
                        }), t && _(t)
                    }
                }, playPause: function (e, t, i) {
                    var a = window, r = a.lang;
                    if (x.support) {
                        var o = n("audio" + t);
                        if (o && m("ai_deleted", o) && !m("ai_current", o)) return !0;
                        i && t != x.getCurrentId() ? R(t, !0) : x.operate(t)
                    } else alert(r.mobile_audio_player_not_support);
                    return _(e), !1
                }, getFormatedTime: tt, switchTimeFormat: function (t, i) {
                    var a = d("audio_item", t);
                    if (!m("ai_current", a) || m("ai_select", a)) return !0;
                    e = !e, b("audio_time_left", e ? "1" : "0");
                    var r = n("audio" + x.getCurrentId());
                    return Y(r, tt(x.position(), x.duration())), i && _(i), !1
                }, setPosition: function (e, t) {
                    z || (z = e, U = !0, $(t))
                }, setVolume: function (e, t) {
                    z || (z = e, W = !0, $(t))
                }, playback: function (e, t) {
                    if (clearTimeout(A), !t && e && e != I) {
                        var n = function i() {
                            return B[e] ? void M.post("/audio", {
                                _ajax: 1,
                                act: "playback",
                                audio: e,
                                hash: k
                            }, {
                                onDone: function () {
                                    I = e
                                }
                            }) : void(A = setTimeout(i, 1e4))
                        };
                        A = setTimeout(n, 1e4)
                    }
                }, openPlayer: function (e, t) {
                    var n = S.path, i = S.params, a = "#player", r = n + (i ? "?" + i : "") + a;
                    return S.al_go(r, null, {
                        local: !0,
                        target: e,
                        nav: {push: r, path: n, params: i, hash: a},
                        no_push: t
                    })
                }, playFirst: H
            }
        }();
    window.audioplayer = P
}, function () {
    var e = window, t = e.domPN, n = e.remove, i = e.lockButton, a = e.addClass, r = e.obj2qs, o = e.domCA,
        s = e.intval, l = e.geByClass1, c = e.getLang, u = e.domData, d = e.page, f = e.nav, p = (e.onDOMReady, e.each),
        _ = e.addEvent, m = e.cdf, h = e.domChildren, v = e.append, g = function () {
            var e = "/friends", g = "accept", w = "decline", y = "hide_possible", b = "prettyCard__button",
                k = "prettyCard__button_accepted", M = "prettyCard__button_decline", C = "feed", S = "recommended_carousel",
                T = "mobile_friends_got_notification", E = "prettyCard__closeButton", A = "prettyCard__closeButton_hidden",
                x = "prettyCardsSlider__line", P = ".feedAssistance", I = ".prettyCard", B = "/feed",
                H = "mobile_friends_accept_request", N = 20, O = 500, L = 3, D = void 0, j = void 0;

            function q(n, i, a) {
                var o = t(n);
                if (!o) return !1;
                X(o);
                var s = e + r({act: y, hash: a, id: i, from: C});
                return ajax.post(s, {_ajax: 1}), !1
            }

            function R(e, t, n, i) {
                return hasClass(k, e) ? F(e, t, i) : z(e, t, n)
            }

            function z(t, n, o) {
                if (hasClass(k, t)) return !1;
                i(t);
                var s = e + r({act: g, hash: o, id: n, from: C});
                return ajax.post(s, {_ajax: 1}, {
                    onDone: function (e) {
                        var n = e || c(T);
                        unlockButton(t), a(k, t), a(M, t), t.textContent = n, $(t)
                    }, onFail: function () {
                        return unlockButton(t)
                    }
                }), !1
            }

            function F(t, n, a) {
                if (!hasClass(k, t)) return !1;
                removeClass(k, t), i(t);
                var o = e + r({act: w, hash: a, id: n, from: C});
                return ajax.post(o, {_ajax: 1}, {
                    onDone: function () {
                        var e = c(H);
                        unlockButton(t), removeClass(M, t), t.textContent = e, V(t)
                    }, onFail: function () {
                        return unlockButton(t)
                    }
                }), !1
            }

            function U(e) {
                if (D = e, D._lastScroll = D.scrollLeft, !e.ajaxIsRunning && !e.allLoaded) {
                    var t = e.scrollLeft + e.clientWidth >= e.scrollWidth / 2;
                    t && Y(e)
                }
            }

            function W(e) {
                var t = o(e, I);
                if (t) return l(E, t)
            }

            function $(e) {
                var t = W(e);
                a(A, t)
            }

            function V(e) {
                var t = W(e);
                removeClass(A, t)
            }

            function X(e) {
                var i = t(e);
                if (n(e), i && !i.firstElementChild) {
                    var a = o(i, P);
                    n(a)
                }
            }

            function Y(t) {
                if (t.currentPage = t.currentPage || 1, t.currentPage++ >= L) return void(t.allLoaded = !0);
                var n = s(u(t, "offset")) || N, i = s(u(t, "prev-post")), a = e + r({act: S, offset: n, "prev-post": i});
                t.ajaxIsRunning = !0, ajax.post(a, {_ajax: 1}, {
                    onDone: function (e, n, i) {
                        u(t, "offset", n);
                        var a = l(x, t), r = m(i), o = h(r);
                        v(r, a), p(o, function () {
                            FeedAssistanceStats.register(this, "feed")
                        }), t.ajaxIsRunning = !1, t.allLoaded = n >= e
                    }, onFail: function () {
                        setTimeout(function () {
                            return t.ajaxIsRunning = !1
                        }, O)
                    }
                })
            }

            function G() {
                var e = l("acceptFriendBtn");
                e && _(e, "click", function () {
                    s(u(e, "uid"));
                    FeedAssistanceStats.dispatchEvent({
                        type: FeedAssistanceStats.EVENTS.EVENT_ACCEPT_FRIEND,
                        data: FeedAssistanceStats.serializeEventData("click", e, "profile")
                    })
                })
            }

            function Q(e) {
                var t = e.target;
                if (u(t, "friend-link") && FeedAssistanceStats.dispatchElementEvent(FeedAssistanceStats.EVENTS.EVENT_OPEN_USER, t), hasClass(t, b) && !hasClass(t, M)) {
                    {
                        s(u(t, "uid"))
                    }
                    FeedAssistanceStats.dispatchEvent({
                        type: FeedAssistanceStats.EVENTS.EVENT_ACCEPT_FRIEND,
                        data: FeedAssistanceStats.serializeEventData("click", t, "user_rec")
                    })
                }
            }

            function K() {
                FeedAssistanceStats.onScroll()
            }

            return FeedAssistanceStats.registerTrackingCls("feedAssistance"), d.onRestore(function () {
                if (j = !0, D) {
                    var e = geByClass("prettyCard_friend", D);
                    p(e, function () {
                        FeedAssistanceStats.forceRegister(this, "feed")
                    })
                }
            }), d.onChange(function () {
                D && D._lastScroll && j && (D.scrollLeft = D._lastScroll), f.cur === B && (D = null), j = !1, "user_rec" === f.getQuery("from") && G()
            }), FeedAssistanceStats.onStartViewElement(function (e) {
                if (FeedAssistanceStats.getElementType(e) === FeedAssistanceStats.BLOCK_TYPE_RECOMMENDED_SLIDER) {
                    _(e, "scroll wheel touchmove", K), _(e, "click", Q);
                    var t = geByClass("prettyCard_friend", e);
                    p(t, function () {
                        FeedAssistanceStats.register(this, "feed"), FeedAssistanceStats.setParenViewableX(this, e)
                    }), FeedAssistanceStats.forceProcessTrack()
                }
            }), {hideRecommended: q, onPrettyCardBtnClick: R, onScrollSlider: U}
        }();
    window.FeedAssistanceRecommendedFriendsSlider = g
}, function () {
    !function () {
        browser.ios && document.addEventListener("DOMContentLoaded", t)
    }();
    var e = "_scrollViewHealed";

    function t() {
        n();
        var e = new MutationObserver(n);
        e.observe(document.body, {childList: !0, subtree: !0})
    }

    function n() {
        $$(".scrollView").forEach(i), $$(".sp_body").forEach(i)
    }

    function i(t) {
        var n = function () {
            return a(t)
        };
        if (n(), !t[e]) {
            t[e] = !0;
            var i = getComputedStyle(t), r = parseInt(i.paddingTop, 10), o = parseInt(i.paddingBottom, 10);
            t.style.paddingTop = r + 1 + "px", t.style.paddingBottom = o + 1 + "px", n();
            var s = void 0;
            t.addEventListener("scroll", function () {
                s && clearTimeout(s), s = setTimeout(n, 50)
            })
        }
    }

    function a(e) {
        0 === e.scrollTop ? e.scrollTop += 1 : e.scrollTop + e.offsetHeight === e.scrollHeight && (e.scrollTop -= 1)
    }
}, , function () {
    var e = i(['\n    <div class="', '">\n      ', '\n      <div class="unfold__popup">\n        ', "\n      </div>\n    </div>\n  "], ['\n    <div class="', '">\n      ', '\n      <div class="unfold__popup">\n        ', "\n      </div>\n    </div>\n  "]),
        t = i(['\n    <div class="unfold__trigger" ', ">\n      ", "\n    </div>\n  "], ['\n    <div class="unfold__trigger" ', ">\n      ", "\n    </div>\n  "]),
        n = i(['\n    <a class="', '" href="', '">\n      ', '\n      <div class="unfold__itemText">', "</div>\n      ", "\n    </a>\n  "], ['\n    <a class="', '" href="', '">\n      ', '\n      <div class="unfold__itemText">', "</div>\n      ", "\n    </a>\n  "]);

    function i(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    window.Unfold = a;

    function a(t) {
        var n = q["class"](t.mix, "unfold", {position: t.position, asIcon: !!t.icon}), i = r(t), a = q.list(t.items, o);
        return q.html(e, n, i, a)
    }

    function r(e) {
        var n = q.onMouseDown("Unfold._onTriggerMouseDown", "this"), i = void 0;
        if (e.icon) i = Icon({icon: e.icon}); else {
            for (var a = e.items, r = a.length, o = "", s = 0; r > s; s++) {
                var l = a[s];
                if (l && l.active) {
                    o = l.text;
                    break
                }
            }
            i = [Brick({mix: "unfold__triggerText", inner: o}), Icon({
                mix: "unfold__triggerIcon",
                icon: "reveal"
            })], i = q.list(i)
        }
        return q.html(t, n, i)
    }

    function o(e) {
        if (!e) return "";
        var t = q["class"]("unfold__item", {active: e.active, name: e.name}),
            i = e.icon ? Icon({mix: "unfold__itemIcon", icon: e.icon}) : "",
            a = e.count ? Oval({mix: "unfold__itemCount", gray: !0, value: e.count}) : "";
        return q.html(n, t, e.url, i, e.text, a)
    }
}, function (e, t, n) {
    n(82), n(57), n(98)
}, function () {
    var e = window, t = e.removeClass, n = e.addClass, i = e.geByClass1, a = {
        obj: null, highlight: !1, start: function (e) {
            e.touches && 1 == e.touches.length && (a.clear(), a.end(e), a.obj = this || null, a.obj && (a.highlight = !0, n("hover", a.obj)))
        }, cancel: function (e) {
            a.obj && (a.highlight = !1, a.end(e))
        }, end: function () {
            a.obj && (t("hover", a.obj), a.highlight && (a.clear(), n("active", a.obj)), a.obj = null, a.highlight = !1)
        }, clear: function () {
            t("active", i("active", "vk_wrap"))
        }
    };
    window.thover = a
}, function () {
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || !function (e) {
        if ("Element" in e) {
            var t = "classList", n = "prototype", i = e.Element[n], a = Object, r = String[n].trim || function () {
                return this.replace(/^\s+|\s+$/g, "")
            }, o = Array[n].indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                return -1
            }, s = function (e, t) {
                this.name = e, this.code = DOMException[e], this.message = t
            }, l = function (e, t) {
                if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return o.call(e, t)
            }, c = function (e) {
                for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, a = n.length; a > i; i++) this.push(n[i]);
                this._updateClassName = function () {
                    e.setAttribute("class", this.toString())
                }
            }, u = c[n] = [], d = function () {
                return new c(this)
            };
            if (s[n] = Error[n], u.item = function (e) {
                    return this[e] || null
                }, u.contains = function (e) {
                    return e += "", -1 !== l(this, e)
                }, u.add = function () {
                    var e, t = arguments, n = 0, i = t.length, a = !1;
                    do e = t[n] + "", -1 === l(this, e) && (this.push(e), a = !0); while (++n < i);
                    a && this._updateClassName()
                }, u.remove = function () {
                    var e, t, n = arguments, i = 0, a = n.length, r = !1;
                    do for (e = n[i] + "", t = l(this, e); -1 !== t;) this.splice(t, 1), r = !0, t = l(this, e); while (++i < a);
                    r && this._updateClassName()
                }, u.toggle = function (e, t) {
                    e += "";
                    var n = this.contains(e), i = n ? t !== !0 && "remove" : t !== !1 && "add";
                    return i && this[i](e), t === !0 || t === !1 ? t : !n
                }, u.toString = function () {
                    return this.join(" ")
                }, a.defineProperty) {
                var f = {get: d, enumerable: !0, configurable: !0};
                try {
                    a.defineProperty(i, t, f)
                } catch (p) {
                    (void 0 === p.number || -2146823252 === p.number) && (f.enumerable = !1, a.defineProperty(i, t, f))
                }
            } else a[n].__defineGetter__ && i.__defineGetter__(t, d)
        }
    }(window.self), function () {
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function (e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function (e) {
                    var n, i = arguments.length;
                    for (n = 0; i > n; n++) e = arguments[n], t.call(this, e)
                }
            };
            t("add"), t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function (e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
            }
        }
        e = null
    }())
}, function (e) {
    function t(e) {
        var t;
        if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var n = e.hasAttribute("readonly");
            n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
        } else {
            e.hasAttribute("contenteditable") && e.focus();
            var i = window.getSelection(), a = document.createRange();
            a.selectNodeContents(e), i.removeAllRanges(), i.addRange(a), t = i.toString()
        }
        return t
    }

    e.exports = t
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0}), t.audioUnmaskSource = r;
    var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=", i = {
        v: function (e) {
            return e.split("").reverse().join("")
        }, r: function (e, t) {
            e = e.split("");
            for (var i, a = n + n, r = e.length; r--;) i = a.indexOf(e[r]), ~i && (e[r] = a.substr(i - t, 1));
            return e.join("")
        }, s: function (e, t) {
            var n = e.length;
            if (n) {
                var i = s(e, t), a = 0;
                for (e = e.split(""); ++a < n;) e[a] = e.splice(i[n - 1 - a], 1, e[a])[0];
                e = e.join("")
            }
            return e
        }, x: function (e, t) {
            var n = [];
            return t = t.charCodeAt(0), each(e.split(""), function (e, i) {
                n.push(String.fromCharCode(i.charCodeAt(0) ^ t))
            }), n.join("")
        }
    };

    function a() {
        return window.wbopen && ~(window.open + "").indexOf("wbopen")
    }

    function r(e) {
        if (!a() && ~e.indexOf("audio_api_unavailable")) {
            var t = e.split("?extra=")[1].split("#"), n = "" === t[1] ? "" : o(t[1]);
            if (t = o(t[0]), "string" != typeof n || !t) return e;
            n = n ? n.split(String.fromCharCode(9)) : [];
            for (var r, s, l = n.length; l--;) {
                if (s = n[l].split(String.fromCharCode(11)), r = s.splice(0, 1, t)[0], !i[r]) return e;
                t = i[r].apply(null, s)
            }
            if (t && "http" === t.substr(0, 4)) return t
        }
        return e
    }

    function o(e) {
        if (!e || e.length % 4 == 1) return !1;
        for (var t, i, a = 0, r = 0, o = ""; i = e.charAt(r++);) i = n.indexOf(i), ~i && (t = a % 4 ? 64 * t + i : i, a++ % 4) && (o += String.fromCharCode(255 & t >> (-2 * a & 6)));
        return o
    }

    function s(e, t) {
        var n = e.length, i = [];
        if (n) {
            var a = n;
            for (t = Math.abs(t); a--;) i[a] = (t += t * (a + n) / t) % n | 0
        }
        return i
    }
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var i = window, a = i.isObject, r = i.extend, o = i.ge, s = i.geByClass1, l = i.val, c = i.addClass, u = i.addEvent,
        d = i.removeEvent, f = i.setStyle, p = i.cancelEvent, _ = i.vkNow, m = i.getW, h = function () {
            function e(t, i) {
                n(this, e), a(i) || (i = {items: i}), this.opts = r({
                    slideClassName: "",
                    onStartChange: !1,
                    onChange: !1,
                    pointsWrap: !1,
                    slideContFn: !1,
                    shownSlidesNum: 1
                }, i), this.wrap = o(t), this.parseItems(i.items), this.init()
            }

            return e.prototype.parseItems = function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    "string" == typeof i && (i = {className: i}), i = r({
                        html: "",
                        className: "",
                        pos: t.length
                    }, i), t.push(i)
                }
                this.items = t
            }, e.prototype.init = function () {
                if (c("landings_slider_wrap", this.wrap), u(this.wrap, "touchstart mousedown", this.touchStart.bind(this)), this.opts.pointsWrap) {
                    var e = "";
                    for (var t in this.items) e += '<div class="landings_slider_point"></div>';
                    c("landings_slider_points", this.opts.pointsWrap), l(this.opts.pointsWrap, e)
                }
                this.changeSlide(0)
            }, e.prototype.getTouchX = function (e) {
                return e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches[0].pageX : e.pageX
            }, e.prototype.getTouchY = function (e) {
                return e.targetTouches && e.targetTouches.length > 0 ? e.touches[0].pageY : e.pageY
            }, e.prototype.touchStart = function (e) {
                var t = this.getTouchX(e), n = this.getTouchY(e), i = this, a = !1, r = !1, o = _(), s = 0,
                    l = this.getTouchX(e), c = m(this.wrap);

                function h(e) {
                    if (!r) {
                        if (!a && Math.abs(i.getTouchY(e) - n) > 20) return void(r = !0);
                        i.lock && (a = !0, t = i.getTouchX(e), o = _(), i.changeSlide(i.newPos), p(e), i.lock = 0, clearTimeout(i.changeTimeout));
                        var u = i.getTouchX(e), d = t - u;
                        (Math.abs(d) > 20 || a) && (p(e), a || (t = i.getTouchX(e), d = 0, a = !0), s = d, l = u, d = -(100 + d / c * 100), d -= 100 * i.opts.shownSlidesNum - 100, f(i.helper, "transform", "translateX(" + d + "%)"))
                    }
                }

                function v() {
                    if (d(bodyNode, "mousemove touchmove", h), d(bodyNode, "mouseup touchend touchcancel", v), !i.lock) if (i.lock = 1, Math.abs(s) > 50) {
                        var e = 0 > s ? "prev" : "next", n = Math.abs(l - t) / (o / _());
                        n += .2 * n;
                        var a = 100 * i.opts.shownSlidesNum;
                        a = "next" == e ? 100 + a : a - 100, f(i.helper, {
                            transition: "transform " + n + "ms",
                            transform: "translateX(-" + a + "%)"
                        });
                        var r = i.items.length - 1, c = "prev" == e ? i.pos - 1 : i.pos + 1;
                        0 > c ? c = r : c > r && (c = 0), i.opts.onStartChange && i.opts.onStartChange(c, e), i.newPos = c, i.changeTimeout = setTimeout(function () {
                            i.lock = 0, i.changeSlide(c)
                        }, n)
                    } else f(i.helper, {
                        transition: "transform 200ms",
                        transform: "translateX(-" + 100 * i.opts.shownSlidesNum + "%)"
                    }), setTimeout(function () {
                        i.lock = 0
                    }, 200)
                }

                d(bodyNode, "mousemove touchmove", h), d(bodyNode, "mouseup touchend touchcancel", v), u(bodyNode, "mousemove touchmove", h), u(bodyNode, "mouseup touchend touchcancel", v)
            }, e.prototype.makeItem = function (e) {
                var t = this.pos == e.pos ? "_active_slide " : "",
                    n = this.opts.slideContFn ? this.opts.slideContFn(e) : e.html;
                return '<div class="landings_slider_item ' + t + e.className + " " + this.opts.slideClassName + '">' + n + "</div>"
            }, e.prototype.getSlidesHtml = function (e) {
                for (var t = this.opts.shownSlidesNum, n = this.items.length - 1, i = "", a = e, r = 0; t > r; r++) a--, 0 > a && (a = n), i = this.makeItem(this.items[a]) + i;
                i += this.makeItem(this.items[e]), a = e;
                for (var o = 0; t > o; o++) a++, a > n && (a = 0), i += this.makeItem(this.items[a]);
                return i
            }, e.prototype.changeSlide = function (e) {
                if (this.pos = Math.max(0, Math.min(e, this.items.length - 1)), this.replaceHtml(this.getSlidesHtml(this.pos)), this.opts.onChange && this.opts.onChange(this.pos), this.opts.pointsWrap) {
                    var t = o(this.opts.pointsWrap);
                    removeClass("selected", s("selected", t)), c("selected", t.children[this.pos])
                }
            }, e.prototype.replaceHtml = function (e) {
                l(this.wrap, '<div class="landings_slider_helper">' + e + "</div>"), this.helper = s("landings_slider_helper", this.wrap), f(this.helper, "transform", "translateX(-" + 100 * this.opts.shownSlidesNum + "%)")
            }, e.prototype.toSlide = function (e, t) {
                this.lock = 1;
                var n = this.makeItem(this.items[this.pos]), i = this.makeItem(this.items[e]);
                e > this.pos ? n += i : n = i + n, this.replaceHtml(n), t || (t = e > this.pos ? "next" : "prev");
                var a = "next" == t ? 0 : -100;
                f(this.helper, "transform", "translateX(" + a + "%)"), this.opts.onStartChange && this.opts.onStartChange(e, t);
                var r = this;
                clearTimeout(this.toSlideTimer), this.toSlideTimer = setTimeout(function () {
                    a = "next" == t ? -100 : 0, f(r.helper, {
                        transition: "transform 200ms",
                        transform: "translateX(" + a + "%)"
                    }), r.toSlideTimer = setTimeout(function () {
                        r.lock = 0, r.changeSlide(e)
                    }, 200)
                }, 10)
            }, e
        }();
    t["default"] = h
}, function (e, t, n) {
    var i = n(109);

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var r = window, o = r.cancelEvent, s = r.removeEvent, l = r.srand, c = r.ce, u = r.addEvent, d = r.ssSet,
        f = r.lsGet, p = r.vkNow, _ = r.onDOMReady, m = r.ssGet, h = r.se, v = r.lsSet, g = r.each,
        w = r.AudioSubscribe, y = window, b = y.isTouch, k = function () {
            var e, t = !1, n = !1, r = !1, y = !1, M = function J(e) {
                (t || y !== !1) && (t = !1, B && y === !1 || (r = !0, q.pause.call(T))), o(e), s(T, "play", J), s(document, b ? "touchstart" : "click", S)
            }, C = function () {
                y !== !1 && y()
            }, S = function Z() {
                n && (n = !1, t = !0, q.play.call(T), s(document, b ? "touchstart" : "click", Z))
            }, T = R(), E = l(), A = [], x = null, P = {}, I = "", B = !1, H = !1, N = !1, O = !1, L = null, D = !1, j = !1;
            delete HTMLAudioElement.prototype.play, delete HTMLAudioElement.prototype.pause, delete HTMLAudioElement.prototype.load, delete HTMLAudioElement.prototype.canPlayType;
            var q = {
                play: HTMLAudioElement.prototype.play,
                pause: HTMLAudioElement.prototype.pause,
                load: HTMLAudioElement.prototype.load,
                canPlayType: HTMLAudioElement.prototype.canPlayType
            };

            function R(e) {
                var n = window.Audio ? new Audio : c("audio");
                return n.autobuffer = !0, n.muted = !1, e && (n.volume = e.volume, s(e, "play", z), s(e, "pause", F), s(e, "progress", U), s(e, "timeupdate", W), s(e, "ended", $), s(e, "play", M), s(e, "progress canplaythrough", C), s(document, b ? "touchstart" : "click", S), e.muted = !0, e.pause(), e.src = null), O = !1, H = !1, N = !1, t = !1, r = !1, y = !1, u(n, "play", z), u(n, "pause", F), u(n, "progress", U), u(n, "timeupdate", W), u(n, "ended", $), u(n, "play", M), u(n, "progress canplaythrough", C), u(document, b ? "touchstart" : "click", S), n
            }

            function z() {
                B || (B = !0, k.onPlay(!0), d("audio_play", "1"), clearTimeout(L), L = setTimeout(G, 100))
            }

            function F() {
                return r ? void(r = !1) : void(B && (B = !1, k.onPause(!0), d("audio_play", "0"), clearTimeout(L)))
            }

            function U() {
                k.onProgress(!0)
            }

            function W() {
                r || (k.onProgress(!0), k.onPositionChanged(!0, k.position(), k.duration()), d("audio_pos", k.position()), !O && T.duration - T.currentTime < .5 && (O = !0), H && (H = !1, k.next()))
            }

            function $() {
                k.onEnded(!0), O ? (O = !1, k.next()) : H = !0
            }

            function V() {
                return A[x] || !1
            }

            function X() {
                return V().id || !1
            }

            function Y(e) {
                e && (T.src = i.audioUnmaskSource(e.src), q.load.call(T), k.onSelect(!0, e))
            }

            function G() {
                if (B) {
                    var e = f("audio_current_player");
                    E != e ? k.pause() : L = setTimeout(G, 100)
                }
            }

            function Q() {
                var e = X();
                d("audio_id", e), d("audio_pos", 0), D && (document.cookie = D + "=" + e + "; expires=" + new Date(p() + 864e5).toUTCString() + "; path=" + j)
            }

            function K(e) {
                d("audio_query", e), D && (document.cookie = D + "q=" + encodeURIComponent(e) + "; expires=" + new Date(p() + 864e5).toUTCString() + "; path=" + j)
            }

            return e = {
                init: function (e) {
                    return k.support ? (e.cookie && (D = e.cookie, j = e.cookie_path || "/"), void _(function () {
                        e.playlist && k.playlist(e.playlist, {q: e.playlist_q || ""});
                        var t = m("audio_id");
                        if (t) {
                            var i = m("audio_pos"), a = m("audio_vol"), r = m("audio_play");
                            k.select(t), "1" == r && (null !== i && k.position(i), null !== a && k.volume(a), n = !0, k.play())
                        }
                    })) : !1
                },
                support: T.canPlayType && q.canPlayType.call(T, "audio/mpeg") && "no" != q.canPlayType.call(T, "audio/mpeg") || !1,
                onPlay: h(X),
                onPause: h(X),
                onDeselect: h(X, function () {
                    return k.duration()
                }),
                onSelect: h(),
                onProgress: h(X, function () {
                    return k.loaded()
                }, function () {
                    return k.duration()
                }),
                onPositionChanged: h(X),
                onVolumeChanged: h(X, function () {
                    return T.volume
                }),
                onEnded: h(X),
                onNotFoundError: h(),
                onEmptyPlaylistError: h(),
                playing: B,
                getCurrent: V,
                getCurrentId: X,
                operate: function (e) {
                    return k.support ? void(!e || A[x] && e == A[x].id ? B ? k.pause() : k.play() : k.play(e)) : !1
                }
            }, a(e, "playing", function () {
                return w.badBrowser ? w.touchTrack() : B && !w.audioSubscribe && (w.isSleep ? w.backgroundPlayCountdown.start() : w.sleepModeStart()), B
            }), a(e, "select", function (e) {
                if (!k.support) return !1;
                if (e) return A.length ? A[P[e]] ? (X() && k.onDeselect(!0), x = P[e], Y(A[x]), Q(), !0) : void k.onNotFoundError(!0, e) : void k.onEmptyPlaylistError(!0, e)
            }), a(e, "play", function (e) {
                if (!k.support) return !1;
                if (e) {
                    if (B && k.pause(), !k.select(e)) return;
                    try {
                        T.currentTime = .01
                    } catch (t) {
                    }
                }
                B || (T.muted = !1, q.play.call(T), B = !0, k.onPlay(!0), d("audio_play", "1"), v("audio_current_player", E))
            }), a(e, "pause", function () {
                return k.support ? void(B && (q.pause.call(T), B = !1, k.onPause(!0), d("audio_play", "0"), w.sleepModePause())) : !1
            }), a(e, "position", function (e, t) {
                if (!k.support) return !1;
                if ("undefined" == typeof e) return T.currentTime;
                t && (e = k.duration() * e), e = Math.max(0, Math.min(e, k.duration()));
                var n = B;
                n && (B = !1, q.pause.call(T));
                try {
                    T.currentTime = e, k.onPositionChanged(!0, k.position(), k.duration()), d("audio_pos", e), n && (B = !0, T.muted = !1, q.play.call(T))
                } catch (i) {
                    k.onPositionChanged(!0, e, k.duration()), y = function () {
                        y = !1, k.position(e)
                    }, n && (B = !0)
                }
            }), a(e, "volume", function (e) {
                if (!k.support) return !1;
                if ("undefined" == typeof e) return T.volume;
                try {
                    T.volume = e || 0
                } catch (t) {
                }
                k.onVolumeChanged(!0), d("audio_vol", e || 0)
            }), a(e, "loaded", function () {
                return T.buffered && T.buffered.length && T.buffered.end(T.buffered.length - 1) || 0
            }), a(e, "duration", function () {
                return T.duration || A[x] && A[x].dur || 0
            }), a(e, "next", function () {
                return k.support ? (B && k.pause(), k.onDeselect(!0), ++x >= A.length && (x = 0), Y(A[x]), Q(), n = !0, (w.hasTouch && w.badBrowser || w.audioSubscribe || !w.badBrowser) && k.play(), w.hasTouch || !w.badBrowser || w.audioSubscribe || w.showPaymentAlert(), void(w.badBrowser && (w.hasTouch = !1))) : !1
            }), a(e, "prev", function () {
                return k.support ? (B && k.pause(), k.onDeselect(!0), --x <= 0 && (x = A.length - 1), Y(A[x]), Q(), n = !0, void k.play()) : !1
            }), a(e, "playlist", function (e, t) {
                return k.support ? "undefined" == typeof e ? A : (B && k.pause(), V() && k.onDeselect(!0), A = e, I = t && t.q || "", x = null, P = {}, g(e, function (e, t) {
                    P[t.id] = e
                }), K(I), void 0) : !1
            }), a(e, "playlist_q", function () {
                return I
            }), a(e, "closeAttention", function (e, t) {
                o(t), hide(gpeByClass("audioAttention", e))
            }), e
        }();
    window.audio = k
}, function () {
    Object.assign(q, {list: e});

    function e(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return Array.isArray(e) || (e = [e]), t ? e.map(t).join("") : e.join("")
    }
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    t.AverageAlgorithm = function () {
        function e() {
            n(this, e), this.clear()
        }

        return e.prototype.push = function (e) {
            this._count++, this._accum += e
        }, e.prototype.get = function () {
            return this._accum / this._count
        }, e.prototype.clear = function () {
            this._count = 0, this._accum = 0
        }, e
    }()
}, function () {
    Object.assign(uMailHat, {
        onBackClick: befall(),
        onBackToDialogClick: befall(),
        redrawCounter: r,
        redrawOnline: s,
        redraw: a,
        startStatusUpdate: n,
        cancelStatusUpdate: i
    }), function () {
        MailHat_main.onBurgerClick(menu.open), MailHat_main.onCancelForwardTap(uMailHat.onBackToDialogClick), MailHat_convo.onBackTap(uMailHat.onBackClick), uVK.onReady(t), uVK.onReady(o), page.onChange(o)
    }();
    var e = void 0;

    function t() {
        if (store.mail && store.mail.cur) {
            var e = store.mail.cur.peerId;
            e && n()
        }
    }

    function n() {
        var t = store.mail.cur.peerId, a = 3e4;
        return t ? void(e = setTimeout(function () {
            s(), n()
        }, a)) : void i()
    }

    function i() {
        e && clearTimeout(e)
    }

    function a() {
        $$(".mailHat").forEach(function (e) {
            return e.outerHTML = uMailHat()
        })
    }

    function r() {
        if (!nav.getQuery("community")) {
            var e = geBySel1(".mmi_mail .mm_counter2"), t = store.mail.cur.countUnread;
            t > 0 ? (e.innerText = t, attr(e, "style", "display: inline")) : hide(e), MailHat_main.setUnreadCount(t)
        }
    }

    function o() {
        return
    }

    function s() {
        var e = window.lang, t = store.mail, n = t.cur, i = t.peers, r = n.peerId;
        if (r) {
            var o = i[r];
            if (o.lastActionTime && !o.isOnline) {
                var s = n.timeshift, c = l(o.lastActionTime, s);
                o.offlineText = langSex(o.sex, e.mobile_mail_last_activity_tip).replace("{time}", c)
            }
            a()
        }
    }

    function l(e, t) {
        var n = window.lang, i = "";
        e += t;
        var a = parseInt(Date.now() / 1e3) - e;
        if (60 > a) i = n.mobile_profile_status_just_now; else if (3600 > a) {
            var r = intval(a / 60);
            i = langWordNumeric(r, n.mobile_profile_status_word_mins_ago, n.mobile_profile_status_mins_ago)
        } else if (14400 > a) {
            var o = intval(a / 3600);
            i = langWordNumeric(o, n.mobile_profile_status_word_hours_ago, n.mobile_profile_status_hours_ago)
        } else i = c(e);
        return i
    }

    function c(e) {
        var t = 1e3 * e, n = new Date(t), i = new Date, a = window.lang;
        return n.getFullYear() != i.getFullYear() && n.getTime() < i.getTime() - 1728e5 || Math.abs(n.getTime() - i.getTime()) > 157248e5 ? langDate(t, a.mobile_mail_date, 0, a.months_sm_of, !1) : langDate(t, a.mobile_mail_short_date_time, 0, a.months_sm_of, !1)
    }
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});

    function n() {
        var e = [], t = a.bind(e);
        return t.off = r.bind(e), t._fns = e, t
    }

    function i() {
        var e = {};
        return function (t) {
            return e[t] || (e[t] = n())
        }
    }

    function a() {
        var e = this, t = arguments, n = t[0];
        if ("function" != typeof n) {
            for (var i = e.length, a = !1, r = 0; i > r; r++) e[r].apply(null, t) === !0 && (a = !0);
            return a
        }
        Array.prototype.slice.call(t).forEach(function (t) {
            return e.push(t)
        })
    }

    function r(e) {
        var t = this;
        e ? o(t, e) : t.length = 0
    }

    function o(e, t) {
        for (; ;) {
            var n = e.indexOf(t);
            if (!(n >= 0)) break;
            e.splice(n, 1)
        }
    }

    n.kind = i, window.befall = n, t["default"] = n
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {value: !0}), t.VoiceMessagePlayer = void 0;
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), a = n(79), r = n(25), o = n(4);

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    {
        var l, c = !1,
            u = '<div class="audio-msg-player audio-msg-track"><button class="audio-msg-track--btn"></button><div class="audio-msg-track--duration"></div><div class="audio-msg-track--wave-wrapper"><div class="audio-msg-track--slider"></div></div></div>';
        t.VoiceMessagePlayer = function () {
            function e() {
                var t = this;
                s(this, e), this._reattach = !1, this._audioEl = null, this._playing = !1, this._timer = null, this._duration = 0, this._detaching = !1;
                var n = {
                    onEnd: function () {
                        t.detach()
                    }, onFail: function () {
                        n.onEnd()
                    }, onCanPlay: function () {
                    }, onProgressUpdate: function (e) {
                        t._updateProgress(e)
                    }
                };
                l = !1, a.PlayerHTML5.isSupported() ? (a.PlayerHTML5.isSupported('audio/ogg;codecs="opus"') && !a.PlayerHTML5.isSupported('audio/ogg;codecs="codec_check"') && (l = !0), this._impl = new a.PlayerHTML5(n)) : browser.flash && window.renderFlash && (this._impl = new r.PlayerFlash(n)), this.onPlayPause = function (e) {
                    return cancelEvent(e), t.toggle()
                }, this.onDurationClick = function (e) {
                    t.durationType = !t.durationType, cancelEvent(e)
                }, this._initEvents()
            }

            return e.prototype._updateProgress = function (e) {
                this._durationEl && (this._durationEl.innerHTML = this.durationType ? "-" + formatTime(Math.round(this._duration * (1 - e))) : formatTime(Math.round(this._duration * e))), this._progressSlider && this._progressSlider.setValue(e)
            }, e.prototype._initInterface = function () {
                var e = this;
                this._el = ce("div", {innerHTML: u}).firstChild, window.getLang && attr(this._el, "aria-label", getLang("mail_audio_message")), this._playBtn = geByClass1("audio-msg-track--btn", this._el), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_play")), this._durationEl = geByClass1("audio-msg-track--duration", this._el), this._durationEl.innerHTML = formatTime(this._duration), this._progressSlider = new o.Slider(geByClass1("audio-msg-track--slider", this._el), {
                    value: 0,
                    size: 0,
                    hintClass: "audio_player_hint",
                    formatHint: function (t) {
                        return formatTime(Math.round(t * e._duration))
                    },
                    onEndDragging: function (t) {
                        e._impl.seek(t)
                    }
                });
                var t = geByClass1("audio-msg-track--wave-wrapper", this._audioEl).children[0];
                geByClass1("slider_slide", this._el).appendChild(t.cloneNode(!0)), geByClass1("slider_amount", this._el).appendChild(t.cloneNode(!0)), addEvent(this._playBtn, "click", this.onPlayPause), addEvent(this._durationEl, "click", this.onDurationClick), this._audioEl.parentNode.appendChild(this._el)
            }, e.prototype._destroyInterface = function () {
                hide(this._el), this._audioEl.parentNode.removeChild(this._el), removeEvent(this._playBtn, "click", this.onPlayPause), this._progressSlider && (this._progressSlider.destroy(), this._progressSlider = null), this._playBtn = null, this._durationEl = null, this._el = null
            }, e.prototype.attachTo = function (e) {
                var t = this;
                if (this._audioEl != e) {
                    null != this._audioEl && (this._reattach = !0), this.detach(), this._audioEl = e, addClass(this._audioEl, "audio-msg-track_player-attached"), this._duration = attr(e, "data-duration"), this._initInterface();
                    var n = this._audioEl.id.split("_");
                    if (n && n.length > 1 && (this._owner_id = n[1]), this._reattach = !1, !this._impl.loaded) return new Promise(function (n) {
                        t._impl.onReady(function () {
                            t._impl.setUrl(attr(e, l ? "data-ogg" : "data-mp3"), {duration: t._duration, callback: n})
                        })
                    });
                    this._impl.setUrl(attr(e, l ? "data-ogg" : "data-mp3"), {duration: this._duration})
                }
                return !0
            }, e.prototype.detach = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
                if (this._audioEl && this._el && !this._detaching) {
                    if (e && this.isAttached()) return;
                    this._detaching = !0, this.stop(), this._destroyInterface(), removeClass(this._audioEl, "audio-msg-track_player-attached"), this._audioEl = null
                }
                this._detaching = !1
            }, e.prototype.play = function () {
                this._audioEl && (this._reattach || e.pauseGlobalMedia(), addClass(this._el, "audio-msg-track_playing"), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_pause")), this._playing = !0, this._createTimer(), this._owner_id && statlogsValueEvent("audio_message_play", this._owner_id), this._impl.play())
            }, e.prototype.pause = function () {
                this._audioEl && (!this._reattach && this._playing && e.resumeGlobalMedia(), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_play")), removeClass(this._el, "audio-msg-track_playing"), this._playing = !1, this._impl.pause(), this._killTimer())
            }, e.prototype.stop = function () {
                this.pause(), this._impl.stop()
            }, e.prototype.toggle = function () {
                this._playing ? this.pause() : this.play()
            }, e.prototype._createTimer = function () {
                var e = this;
                this._duration > 0 && (this._killTimer(), this._timer = setInterval(function () {
                    var t = e._impl.getCurrentProgress();
                    e._updateProgress(t)
                }, 100))
            }, e.prototype._killTimer = function () {
                this._timer && (clearInterval(this._timer), this._timer = null)
            }, e.prototype._initEvents = function () {
                var e = this;
                window.ap ? ap.on(this, AudioPlayer.EVENT_PLAY, function () {
                    delete ap.pausedByMsg, e.pause()
                }) : window.audio && audio.onPlay(function () {
                    delete audio.pausedByMsg, e.pause()
                }), window.Notifier && (Notifier.addRecvClbk("audio_start", "audio_msg", function () {
                    e.pause()
                }), Notifier.addRecvClbk("video_start", "audio_msg", function () {
                    e.pause()
                }))
            }, e.prototype.isAttached = function () {
                if (this._audioEl) {
                    for (var e = this._audioEl; e.parentNode;) e = e.parentNode;
                    return !!e.body
                }
                return !1
            }, e.pauseGlobalMedia = function () {
                window.Notifier && (c = !0, Notifier.lcSend("video_start")), window.ap && ap.isPlaying() ? (ap.pause(), ap.pausedByMsg = !0) : window.audio && audio.playing && audio.playing() && (audio.pause(), audio.pausedByMsg = !0)
            }, e.resumeGlobalMedia = function () {
                window.Notifier && c && (c = !1, Notifier.lcSend("video_hide")), window.ap && ap.pausedByMsg ? (ap.play(), delete ap.pausedByMsg) : window.audio && audio.playing && audio.pausedByMsg && (audio.play(), delete audio.pausedByMsg)
            }, i(e, [{
                key: "type", get: function () {
                    return this._impl.type
                }
            }, {
                key: "durationType", get: function () {
                    return window.AudioPlayer ? !!ls.get(AudioPlayer.LS_PREFIX + AudioPlayer.LS_DURATION_TYPE) : "1" == lsGet("audio_time_left")
                }, set: function (e) {
                    window.AudioPlayer ? ls.set(AudioPlayer.LS_PREFIX + AudioPlayer.LS_DURATION_TYPE, !!e) : lsSet("audio_time_left", e ? "1" : "0")
                }
            }]), e
        }()
    }
}, function () {
    var e = {uiLastId: 0, uiState: {}, mail: {}}, t = {
        newId: function () {
            return e.uiLastId++
        }, newState: function (n) {
            var i = t.newId();
            return e.uiState[i] = n, i
        }, getState: function (t) {
            return e.uiState[t] || (e.uiState[t] = {})
        }, injectStore: function (t) {
            e.uiLastId = 0, e.uiState = {}, e.mail = {};
            {
                var n = t.mail, i = n.cur, a = n.rolls, r = n.reached;
                n.msgs, n.queue
            }
            isArray(t.mail.msgs) && (t.mail.msgs = {}), isArray(a.peer) && (a.peer = {}), isArray(a.search.peers) && (a.search.peers = {}), isArray(a.search.msgs) && (a.search.msgs = {}), isArray(r.search.peers) && (r.search.peers = {}), isArray(r.search.msgs) && (r.search.msgs = {}), isArray(r.peer.before) && (r.peer.before = {}), isArray(r.peer.after) && (r.peer.after = {}), e.uiState = t.uiState, e.uiLastId = t.uiLastId, e.mail = t.mail, i.msgSelected = {}, i.msgRemoved = {}, i.msgAttached = {}, i.localOutMsgIds = [], e.mail.queue = {}
        }, injectMail: function (t) {
            var n = e.mail, i = t;
            Object.keys(i.msgs).forEach(function (e) {
                var t = i.msgs[e], a = n.msgs[e];
                a && (a.textShort && !t.textShort && (t.textShort = a.textShort), a.textFull && !t.textFull && (t.textFull = a.textFull))
            }), isObject(i.msgs) && Object.assign(n.msgs, i.msgs), isObject(i.peers) && Object.assign(n.peers, i.peers), isObject(i.members) && Object.assign(n.members, i.members)
        }
    };
    window.storeMethods = t, window.store = e
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0});

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    t.PeakAlgorithm = function () {
        function e() {
            n(this, e), this.clear()
        }

        return e.prototype.push = function (e) {
            this._max = Math.max(this._max, Math.abs(e))
        }, e.prototype.get = function () {
            return this._max
        }, e.prototype.clear = function () {
            this._max = 0
        }, e
    }()
}, function () {
    Object.assign(uCurConvoTyping, {redraw: e});

    function e() {
        if (store.mail.cur.peerId) {
            var e = uCurConvoTyping_getNames();
            Typing.setTyping("curConvo", e)
        }
    }
}, function () {
    var e = window, t = e.removeClass, n = e.replaceClass, i = e.hasClass, a = e.checkEvent, r = e.ce, o = e.scrollTop,
        s = e.ge, l = e.geByClass1, c = e.append, u = e.addClass, d = e.addEvent, f = e.getCh, p = e.remove,
        _ = e.removeEvent, m = e.getW, h = e.preventEvent, v = e.getCw, g = e.each, w = e.attr, y = e.val,
        b = e.onBodyResize, k = e.cancelEvent, M = e.scrollLeft, C = window, S = C.ajax, T = window, E = T.thover,
        A = window, x = A.nav, P = window, I = P.isTouch, B = {
            enabled: function (e) {
                return window.al && window.al.menu ? ("undefined" != typeof e && (e ? n("_lms", "_lm", window.bodyNode) : (n("_lm", "_lms", window.bodyNode), B.qsClose())), i("_lm", window.bodyNode)) : (t("_lm", window.bodyNode), t("_lms", window.bodyNode), !1)
            }, opened: function () {
                return i("lm_opened", window.bodyNode)
            }, toggle: function (e, t) {
                return a(e) ? !0 : window.al && window.al.menu ? (B.opened() ? B.close(e, t) : B.open(e, t), !1) : !0
            }, open: function (e) {
                var i = window, p = i.zlayer;
                if (a(e)) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (B.opened()) return !1;
                if (p && p.opened()) return !1;
                if (!B.enabled()) return x.go("/"), !1;
                B.clear_hover();
                var _ = r("div", {id: "m_helper", onclick: B.close}), m = B._st || 0, h = o(), v = s("l"), g = s("m"),
                    w = s("vk_wrap"), y = l("head_search", v), b = w.offsetWidth, k = g.offsetWidth, M = g.offsetHeight;
                if (!(b >= 882)) {
                    c(_, "m"), B.fixed ? (u("lm_opened", window.bodyNode), u("lm_anim_start", w), setTimeout(function () {
                        n("lm_anim_start", "lm_anim lm_anim_end", w)
                    }, 5), setTimeout(function () {
                        t("lm_anim_end", w), t("lm_anim", w)
                    }, 200), d(g, "scroll touchmove", B.blockScroll), d(window.l, "touchstart touchmove", B.blockMenuScroll), d(y, "touchstart touchmove", B.blockMenuScroll)) : u("lm_opened", window.bodyNode);
                    var C = v.offsetHeight, T = b >= 480;
                    return T ? m = h <= C - f() ? Math.min(h, C - f()) : 0 : m > h ? m = h : h - m > M - C && M > C && (m = h - M + C), B._st = Math.max(0, h - m), B._mw = k, B.fix_size(!1), B.fixed || o(m), S.post("/", {
                        _ajax: 1,
                        act: "ping"
                    }), window.lm_qsearch_counter ? window.lm_qsearch_counter-- : window.lm_qsearch_counter = -1, window.lm_qsearch_counter && B.cancelSearch(), !1
                }
            }, close: function (e) {
                if (a(e)) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (!B.opened()) return !1;
                p("m_helper"), B.clear_hover();
                var i = o(), r = B._st + i, c = s("l"), d = s("m"), f = s("vk_wrap"), m = l("head_search", c),
                    h = s("vk_wrap").offsetWidth, v = h >= 480;
                return B.fixed ? (u("lm_anim_end", f), setTimeout(function () {
                    n("lm_anim_end", "lm_anim lm_anim_start", f)
                }, 5), setTimeout(function () {
                    t("lm_anim_start", f), t("lm_anim", f), t("lm_opened", window.bodyNode)
                }, 200), _(d, "scroll touchstart", B.blockScroll), _(window.l, "touchstart touchmove", B.blockMenuScroll), _(m, "touchstart touchmove", B.blockMenuScroll)) : t("lm_opened", window.bodyNode), B._st = v ? 0 : i, B.fix_size(!0), B.fixed || o(r), window.lm_qsearch_focused && B.cancelSearch(), !1
            }, blockScroll: function (e) {
                var t = s("vk_wrap");
                B.opened() && m(t) < 882 && h(e)
            }, blockMenuScroll: function (e) {
                var t = s("vk_wrap");
                if (B.opened() && m(t) < 882) {
                    var n = e.touches, a = (n && n[0] ? n[0].pageY : e.pageY) || 0;
                    if ("touchstart" == e.type) B.lmStartY = a; else if ("touchmove" == e.type && B.lmStartY !== !1) {
                        if (i("head_search", e.currentTarget)) h(e); else if (a - B.lmStartY > 0 && f() >= 440) {
                            var r = s("lm_cont");
                            r && r.scrollTop <= 0 && h(e)
                        } else if (f() >= 440) {
                            var r = s("lm_cont");
                            r && r.scrollTop >= r.scrollHeight - r.offsetHeight && h(e)
                        }
                        B.lmStartY = !1
                    }
                }
            }, fix_size: function (e) {
                var t = s("l"), n = s("m"), i = s("mhead"), a = i && i.offsetHeight || 0, r = B._st || 0;
                t && (e ? n.style.minHeight = "0" : (r = r > a ? r : 0, n.style.minHeight = t.offsetHeight + r + "px"), !B.fixed || v() < 320 ? e ? n.style.marginTop = "0" : (t.style.minHeight = f() + "px", n.style.marginTop = -r + "px") : t.style.minHeight = "0")
            }, clear_hover: function () {
                E.clear()
            }, refreshCounters: function (e) {
                if (!e || !e.length) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (e.length != window.al.menu.length) return !1;
                var t = window, n = t.al, i = l("main_menu", "l");
                return g(e, function (e, t) {
                    if ("undefined" == typeof t) return !0;
                    var a = n.menu[e], o = l("mmi_" + a[0], i), s = l("mm_item", o), u = l("mmi_wrap", o),
                        d = l("mm_counter", u);
                    w(s, "data-href", !1), t ? (a[2] && w(s, "href", a[2]), d ? y(d, t) : c(r("em", {
                        className: "mm_counter",
                        innerHTML: t
                    }), u)) : (a[1] && w(s, "href", a[1]), p(d)), S.prepare_click(s)
                }), !0
            }, refresh: function (e) {
                e = e || {}, S.refreshLinks(e.fv_link, e.app_link), "undefined" != typeof e.pp && e.pp !== !1 && y("lm_prof_panel", e.pp), "undefined" != typeof e.tn && e.tn !== !1 && y("lm_top_notify", e.tn), "undefined" != typeof e.bn && e.bn !== !1 && y("lm_bottom_notify", e.bn), e.lm && y("l", e.lm), e.topbar || p("vk_topbar")
            }, initEvents: function () {
                b(function () {
                    var e = s("vk_wrap").offsetWidth, t = i("_hfixed", window.bodyNode), n = B._st || 0;
                    e >= 882 && n > 44 && B.close(), B.fix_size(!B.opened(), t)
                })
            }, init: function () {
                B.fixed = i("_hfixed", window.bodyNode), B.initEvents(), d(window, "orientationchange", function () {
                    var e = s("vk_wrap").offsetWidth, t = B._st || 0;
                    e >= 882 && t > 44 && B.close()
                }), B.initTouch()
            }, initTouch: function () {
                if (d(document, "keydown", function (e) {
                        var t = window, n = t.vk;
                        e && e.shiftKey && (e.ctrlKey || e.metaKey) && n.__debug && 77 == e.keyCode && (k(e), B.toggle())
                    }), I) {
                    var e = !1, t = !1, n = 10, i = Math.min(604, v()) / 3, a = 30;

                    function r(e) {
                        var t = e.touches, n = o(), i = (t && t[0] ? t[0].pageX : e.pageX) || 0,
                            a = (t && t[0] ? t[0].pageY : e.pageY) || 0;
                        return {x: i, y: a - n}
                    }

                    function s(e, t) {
                        var n = t.x - e.x, i = t.y - e.y;
                        return Math.sqrt(n * n + i * i)
                    }

                    function c(e, t) {
                        var n = t.x - e.x, i = e.y - t.y;
                        return Math.abs(180 * Math.atan2(i, n) / Math.PI)
                    }

                    d(document, "touchstart", function (n) {
                        gpeByClass("_preventMenuOpen", n.target) || (l("mhb_home", "mhead") || l("mailHat")) && (M() > 0 || (e = t = r(n)))
                    }), d(document, "touchmove touchend touchcancel", function (o) {
                        if (e) {
                            "touchmove" == o.type && (t = r(o));
                            var l = s(e, t), u = c(e, t);
                            if (("touchend" != o.type && "touchcancel" != o.type || (e = !1, "touchcancel" != o.type)) && !(n > l)) {
                                if (B.opened() && (u = 180 - u), u > a) return void(e = !1);
                                h(o), l > i && (e = !1, B.toggle())
                            }
                        }
                    })
                }
            }, qsOpened: !1, qsOpen: function () {
                B.qsOpened || (B.qs_st = o(), u("qs_opened", "vk_wrap"), u("qs_opened", window.bodyNode), m("vk_wrap") < 882 && o(0), B.qsOpened = !0)
            }, qsClose: function () {
                B.qsOpened && (t("qs_opened", "vk_wrap"), t("qs_opened", window.bodyNode), m("vk_wrap") < 882 && o(B.qs_st || 0), B.qsOpened = !1)
            }, closeSearch: function () {
                return window.al && window.al.menu ? (window.lm_qsearch && window.lm_qsearch.blur(), B.qsClose(), !1) : !0
            }, cancelSearch: function () {
                return window.al && window.al.menu ? (window.lm_qsearch && window.lm_qsearch.clear(), B.qsClose(), !1) : !0
            }, headerAction: function (e, t) {
                return m("vk_wrap") >= 882 ? x.go(e, t) : B.toggle()
            }
        };
    window.menu = B
}, function () {
    Object.assign(q, {html: e});

    function e(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
        var a = "";
        return e.forEach(function (e, t) {
            var i = n[t];
            a += e + (i || 0 === i ? i : "")
        }), a
    }
}, function (e, t) {
    Object.defineProperty(t, "__esModule", {value: !0}), t.random = i;
    var n = (t.MAX_SAFE_INTEGER = 9007199254740991, t.MAX_INTERGER = 2147483647);

    function i() {
        try {
            if (window.crypto) {
                var e = new Int32Array(1);
                return crypto.getRandomValues(e), Math.abs(e.reduce(function (e, t) {
                    return e + t
                }))
            }
        } catch (t) {
        }
        return intval(rand(0, n).toFixed(0))
    }
}, function () {
    Object.assign(MailActs, {
        onCloseClick: befall(),
        onRemoveClick: befall(),
        onImportantClick: befall(),
        onReplyClick: befall(),
        onForwardClick: befall(),
        onSpamClick: befall(),
        onPinClick: befall(),
        setCount: e,
        togglePin: n
    }), function () {
        MailActs._onButtonClick = t, MailActs._onCloseClick = MailActs.onCloseClick
    }();

    function e(e) {
        var t = langNumeric(e, lang.mobile_mail_messages_selected), n = t.replace("{count}", e);
        $$(".mailActs__counter").forEach(function (e) {
            return e.innerText = n
        })
    }

    function t(e) {
        switch (e) {
            case"remove":
                MailActs.onRemoveClick();
                break;
            case"important":
                MailActs.onImportantClick();
                break;
            case"reply":
                MailActs.onReplyClick();
                break;
            case"forward":
                MailActs.onForwardClick();
                break;
            case"spam":
                MailActs.onSpamClick();
                break;
            case"pin":
                MailActs.onPinClick()
        }
    }

    function n(e) {
        $$(".mailActs").forEach(function (t) {
            return t.classList.toggle("mailActs_canPin", e)
        })
    }
}, function (e, t, n) {
    Object.defineProperty(t, "__esModule", {value: !0}), t.initArticle = s;
    var i = n(28), a = [], r = void 0;

    function o() {
        return window.pageYOffset || (window.scrollNode ? scrollNode.scrollTop : !1) || document.documentElement.scrollTop
    }

    function s(e, t) {
        r = t || {};
        var n = window.getSize ? getSize(e)[0] : getW(e);
        r.mobile && each(geByClass("_article_object_photo__image_wrap"), function (e, t) {
            var i = parseFloat(t.getAttribute("data-ratio"));
            setStyle(t, {width: n, height: n / i})
        }), l(e), each(geByClass("_article_unmute_button"), function (e, t) {
            t.addEventListener("click", function () {
                var e = t.parentNode, n = geByTag1("video", e);
                n.muted = !n.muted, toggleClass(e, "article_object_unmuted", !n.muted)
            })
        })
    }

    function l(e) {
        each(geByClass("article_object", e), function (e, t) {
            var n = window.getSize ? getSize(t) : [getW(t), getH(t)], i = getXY(t);
            a.push({size: n, pos: i, el: t, type: parseInt(t.getAttribute("data-type"))})
        }), window.addEventListener("scroll", function () {
            c()
        }), c()
    }

    function c() {
        var e = 60, t = o(), n = window.innerHeight;
        a.forEach(function (i) {
            if (!i.done) {
                var a = i.pos[1] <= t + n - e && t <= i.pos[1] + i.size[1] - e;
                u(a, i)
            }
        })
    }

    function u(e, t) {
        switch (t.type) {
            case i.ParagraphType.ObjectPhoto:
                if (e) {
                    t.done = !0;
                    var n = geByClass1("_article_object_photo__image_wrap", t.el), a = n.getAttribute("data-url"),
                        o = new Image;
                    o.onload = function () {
                        removeClass(n, "article_object_photo__image_blur"), n.innerHTML = "", n.appendChild(o)
                    }, o.src = a
                }
                break;
            case i.ParagraphType.ObjectGIF:
                if (!r.mobile) {
                    var s = geByTag1("video", t.el);
                    e ? s.play() : s.pause()
                }
        }
    }

    window.initArticle = s
}, , function () {
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
        var t, n = (this.document || this.ownerDocument).querySelectorAll(e), i = this;
        do for (t = n.length; --t >= 0 && n.item(t) !== i;) ; while (0 > t && (i = i.parentElement));
        return i
    })
}, function () {
    Object.assign(window, {arrayRemove: e, arrayIntersects: t});

    function e(e, t) {
        for (; ;) {
            var n = e.indexOf(t);
            if (!(n >= 0)) break;
            e.splice(n, 1)
        }
    }

    function t(e, t) {
        return e.some(function (e) {
            return -1 !== t.indexOf(e)
        })
    }
}, function () {
    var e = window, t = e.geByClass1, n = e.tag, i = e.geByTag1, a = e.ce, r = e.hasClass, o = e.attr,
        s = e.removeEvent, l = e.addEvent, c = e.qs2obj, u = e.each, d = e.len, f = e.extend, p = e.copy,
        _ = e.onDOMReady, m = e.scrollTop, h = e.getY, v = e.scrollToEl, g = e.scrollToHash, w = e.obj2qs,
        y = e.escapeAttr, b = e.remove, k = e.val, M = e.toggleClass, C = e.show, S = e.hide, T = e.gpeByClass,
        E = e.geByTag, A = e.addClass, x = e.checkEvent, P = e.unescapeAttr, I = e.removeClass, B = e.ge,
        H = e.cancelEvent, N = e.isUndefined, O = window, L = O.ajax, D = window, j = D.nav, q = window, R = q.post,
        z = window, F = z.zlayer, U = function () {
            var e, O, D, q, z, W, $, V, X, Y, G, Q, K, J, Z, et = 1, tt = !1, nt = {}, it = {}, at = {}, rt = null,
                ot = null, st = !1, lt = null, ct = null, ut = !0, dt = !1, ft = 0, pt = !1;

            function _t() {
                if (e = t("photo_view", "m"), !e) return j.al_go(j.cur), !1;
                if (O = t("pv_summary", e), G = t("photo_msg", e), Q = t("pv_tag_wrap", e), z = t("pv_body", e), W = t("thumb_item", z), q = t("pv_nav", z), X = t("pv_photo_wrap", W), $ = "a" == n(W) ? W : !1, V = i("img", W), Y = t("pv_footer", e), (D = t("summary_loading", O)) || (D = a("div", {
                        innerHTML: '<i class="i_loading"></i>',
                        className: "summary_loading"
                    }, {display: "none"}), O.appendChild(D)), tt = r("pv_touch_full", z), q) {
                    var c = t("pv_nav_left", q), u = t("pv_nav_z", q), d = t("pv_nav_right", q);
                    K = t("pv_nav_link", c), Z = t("pv_nav_link", u), J = t("pv_nav_link", d), o(K, "onclick", "return photo.prev(event);"), o(J, "onclick", "return photo.next(event);"), o($, "onclick", tt ? !1 : "return photo.next(event);"), L.prepare_click([K, J, $])
                }
                return s(window, "orientationchange", kt), l(window, "orientationchange", kt), !0
            }

            function mt() {
                var t = window, n = t.photoview;
                return n ? pt ? !0 : (pt = !0, n.onPhotoChange = function (e, t) {
                    ft = e, Ct(e, t)
                }, n.onUpdate = function () {
                }, n.onClose = function (t) {
                    if (!St(t)) return !0;
                    var n = c(j.params);
                    e && n.list == ot && Mt(ft, !0)
                }, !0) : !1
            }

            function ht(e) {
                var t = window, n = t.photoview, i = [];
                return u(e, function (e, t) {
                    return t ? void i.push(nt[t.id] = t) : !0
                }), rt && n && n.saveSource(yt(rt)), i
            }

            function vt(e) {
                return nt[e] || {}
            }

            function gt(e, t, n) {
                if (null === t) return void delete it[e];
                it[e] || (it[e] = new Array(n ? n : d(t))), ht(t);
                var i = it[e];
                st && i.reverse(), f(i, t), st ? (rt = p(i), i.reverse()) : rt = i
            }

            function wt(e) {
                if ("string" != typeof e) return e;
                var t = it[e] || [];
                return st ? p(t).reverse() : t
            }

            function yt(e) {
                var t = wt(e), n = new Array(t.length), i = c(j.params);
                delete i.z;
                for (var a in t) {
                    var r = rt[a], o = "photo" + r.id + "?list=" + ot + (st ? "&rev=1" : "") + (ct ? "&from=" + ct : "");
                    n[a] = {
                        id: r.id,
                        photo_url: "/" + o,
                        like_url: "/like?act=" + (r.likes_me ? "del" : "add") + "&object=photo" + r.id + "&from=" + encodeURIComponent(o) + "&list=" + ot + "&hash=" + r.like_hash,
                        likes_me: r.likes_me,
                        src: r.original_src,
                        tags: r.tags,
                        caption: r.caption,
                        likes_cnt: r.likes_cnt,
                        replies_cnt: r.replies_cnt
                    }
                }
                return n
            }

            function bt(e, t) {
                t || (t = rt);
                for (var n in t) if (rt[n].id == e) return +n;
                return -1
            }

            function kt() {
                j.hash || _(function () {
                    if (t("photo_view")) {
                        var e = m();
                        z && h(z) < e && v(z)
                    }
                })
            }

            function Mt(t, n, a) {
                var r = window, s = r.cur, l = window, d = l.lang, p = rt[t], _ = 1 == rt.length;
                if (p) {
                    j.hash ? g(j.hash) : kt();
                    var m = {};
                    lt && (m.list = lt), st && (m.rev = 1), ct && (m.from = ct);
                    var h = w(m), v = "photo" + p.id + h, C = p.photo, S = (Et(t - 1) || {}).id, T = (Et(t + 1) || {}).id;
                    if (_ || ($.href = "/photo" + T + h, K && (K.href = "/photo" + S + h), J && (J.href = "/photo" + T + h), L.prepare_click([K, J, $])), tt) {
                        var E = "photo" + p.id + "/" + lt + (st ? "/rev" : ""), A = f({}, m, {z: E}),
                            x = "/photo" + p.id + w(A);
                        if (F._lastNav) {
                            var P = F._lastNav;
                            A = c(P.params), A.z = E, x = P.path + w(A) + P.hash
                        }
                        Z && (Z.href = x), L.prepare_click(Z), o(Z, "onclick", "return photo.fullscreen('" + y(x) + "', event);")
                    }
                    if (V && V.src != C) {
                        V.onload = null, b(V);
                        var I = "";
                        u(p.tags, function (e, t) {
                            if (!e || 0 == e) return !0;
                            var n = t[0][0], i = t[0][1], a = t[0][2], r = t[0][3];
                            I += '<div class="pv_tag" style="left: ' + n + "%; top: " + i + "%; width: " + a + "%; height: " + r + '%;" id="pv_tag' + e + '" onclick="return photo.selectTag(' + e + ', event, true);"><div class="fill"></div></div>'
                        }), k(X, '<img src="' + C + '" alt="" class="ph_img" />' + I), V = i("img", X)
                    }
                    M("photo_deleted", e, !!p.deleted), M("pv_one_photo", z, 1 == rt.length), k(O, (d.mobile_photos_photo_header || "").replace("%s", ft + 1).replace(/%s|{count}/, rt.length)), k(Q, p.tag_info || "");
                    var B = "", H = (s.sticker_panel || "").split("photo-0_0").join("photo" + p.id),
                        N = (p.comments_html || "").split("<!--stickers_panel-->").join(H);
                    if (p.caption && (B += '<div class="mv_description">' + p.caption + "</div>"), p.tags_list && (B += '<dl class="pv_tags_list si_row"><dt>' + d.mobile_photos_on_this_photo + "</dt><dd>" + p.tags_list + "</dd></dl>"), p.album_link && (B += '<dl class="si_row"><dt>' + d.mobile_photos_photo_album_label + "</dt><dd>" + p.album_link + "</dd></dl>"), p.author_link && (B += '<dl class="si_row"><dt>' + d.mobile_photos_photo_author_label + "</dt><dd>" + p.author_link + "</dd></dl>"), (p.date || p.likes || p.publish) && (B += '<div class="vi_values">' + (p.date || "") + (p.likes || "") + (p.publish || "") + "</div>"), k(Y, '<div class="like_box bl_cont"><div class="photo_msg bl_none">' + (p.deleted || "") + '</div><div class="mv_details">' + B + '</div><ul class="mv_actions">' + (p.actions || "") + '</ul></div><div class="comments_wrap bl_cont">' + N + "</div>"), R.stickersInit(), s.replyTo = 0, L.refreshLinks(p.fv_link, p.app_link), U.closeTags(), !n) {
                        var D = "/" + v;
                        j.go(D, null, {no_push: n, push_only: !0, replace: a})
                    }
                }
                ut || (At(), xt())
            }

            function Ct(e, t) {
                {
                    var n = window, i = n.photoview, a = rt[e];
                    1 == rt.length
                }
                if (t = t || {}, a) {
                    var r = c(j.params);
                    if (r.z = "photo" + a.id + "/" + lt + (st ? "/rev" : ""), t.no_open || i.open(e, yt(rt), {local: t.local}), !t.local && !t.crop) {
                        var o = j.path + w(r) + j.hash;
                        j.go(o, null, {
                            no_push: t.no_push,
                            push_only: !0,
                            replace: t.replace,
                            nav_init: !t.no_open,
                            nav_incr: !0
                        })
                    }
                }
                t.local || t.crop || At(!0)
            }

            function St(e) {
                var t = c(j.params);
                if (delete t.z, !e.local && !e.crop) {
                    if (j.tryHistoryBack()) return !1;
                    var n = j.path + w(t) + j.hash;
                    j.go(n, null, {push_only: !0})
                }
                return !0
            }

            var Tt = !1;

            function Et(e) {
                return e > 0 ? e %= rt.length : e = (100 * rt.length + e) % rt.length, rt[e]
            }

            function At(e) {
                if (!Tt) {
                    for (var t = window, n = t.photoview, i = !1, a = 1, r = 0; 5 > r; r++) {
                        var o = r + ft, s = Et(o);
                        if (!s || !s.owner_id) {
                            i = o, a = 1;
                            break
                        }
                    }
                    if (i === !1) for (var r = -1; r > -3; r--) {
                        var o = r + ft, s = Et(o);
                        if (!s || !s.owner_id) {
                            i = o, a = -1;
                            break
                        }
                    }
                    if (i !== !1) {
                        var l = Et(ft);
                        if (l) {
                            Tt = !0, C(D);
                            var c = window, u = c.cur, d = l.owner_id || (l.id || "").split("_")[0],
                                p = o == ft && l.id ? "/photo" + l.id : "/photos.php",
                                _ = {_ajax: 1, oid: d, list: ot, offset: i, direction: a, rev: st ? 1 : 0};
                            u.stickers || (_.need_stickers = 1), j.getQuery("community") && (_.community = j.getQuery("community")), L.post(p, _, {
                                onDone: function (t, i, a, r) {
                                    S(D), Tt = !1, a && (u.replyNames || (u.replyNames = {}), f(u.replyNames, a)), r && f(u, r), gt(ot, t, i || rt.length), e ? n && n.saveSource(yt(ot), !1, !0) : Mt(ft, !0)
                                }
                            })
                        }
                    }
                }
            }

            function xt() {
                for (var e = 0, t = ft + 1; et > e; e++) {
                    var n = e + t, i = Et(n), a = i && i.photo;
                    if (a && !at[a]) {
                        var r = at[a] = new Image;
                        r.src = a, r.onload = function () {
                            at[a] = !0
                        }
                    }
                }
            }

            function Pt(e, t) {
                if (rt = [], e) {
                    var n = T("thumbs_list", e) || T("wiki_body", e);
                    n && u(E("img", n), function () {
                        var e = this, t = o(e, "data-id"), n = o(e, "data-src_big");
                        if (!t || !n) return !0;
                        n = n.split("|");
                        var i = n[0], a = +n[1] || 0, r = +n[2] || 0;
                        rt.push({id: t, original_src: i, width: a, height: r})
                    })
                }
                rt.length || rt.push({id: t, original_src: !0})
            }

            function It() {
                A("pv_icons_hide", z)
            }

            return {
                save: ht, get: vt, saveSource: gt, getSource: wt, clear: function () {
                    s(window, "orientationchange", kt)
                }, open: function (e, t, n, i, a) {
                    if (x(n)) return !0;
                    if (!_t()) return !0;
                    if (st = !1, "/rev" == t.substr(-4) && (t = t.slice(0, -4), st = !0), ct = i || null, t) ot = t; else {
                        var r = vt(e);
                        ot = r.album ? "album" + r.album : ""
                    }
                    if (lt = ot, rt = wt(ot), ft = bt(e, rt), -1 === ft) {
                        var r = vt(e);
                        if (!r.id) return !1;
                        rt = [r], ft = 0
                    }
                    ut = rt.length < 2, dt = !1;
                    var o = rt[ft] && e != rt[ft].id;
                    return Mt(ft, a && !o, o), !1
                }, prev: function (e) {
                    return x(e) ? !0 : Tt && !Et(ft - 1) ? !1 : _t() ? ut ? U.close() : (--ft < 0 && (ft = rt.length - 1), Mt(ft), It(), !1) : !0
                }, next: function (e) {
                    return x(e) ? !0 : Tt && !Et(ft + 1) ? !1 : _t() ? ut ? !1 : (++ft >= rt.length && (ft = 0), Mt(ft), It(), !1) : !0
                }, close: function (e) {
                    return x(e) ? !0 : !1
                }, fullscreen: function (e, t) {
                    return r("pv_photo_tags_selected", z) ? !0 : j.go(P(e), t, {need_restore: !0})
                }, showIcons: function () {
                    var e = t("photo_view", "m");
                    if (!e) return !1;
                    var n = t("pv_body", e);
                    return n ? void setTimeout(function () {
                        I("pv_hidden_icons", n), setTimeout(function () {
                            A("pv_icons_hide", n)
                        }, 2e3)
                    }, 10) : !1
                }, selectTag: function (e, n, i) {
                    if (i && !r("pv_photo_tags_selected", z)) return !0;
                    var a = B("pv_tag" + e), o = t("pv_tag_selected", "pv_photo_tags_wrap"), s = B("pv_tag_label" + e),
                        l = t("pv_tag_label_selected", "pv_tags_list");
                    return r("pv_tag_selected", a) || (I("pv_tag_selected", o), A("pv_tag_selected", a)), r("pv_tag_label_selected", s) ? j.go(s, n) : (I("pv_tag_label_selected", l), A("pv_tag_label_selected", s), A("pv_photo_tags_selected", z), H(n), !1)
                }, closeTags: function (e) {
                    if (!r("pv_photo_tags_selected", z)) return !0;
                    var n = t("pv_tag_selected", "pv_photo_tags_wrap"), i = t("pv_tag_label_selected", "pv_tags_list");
                    return n && I("pv_tag_selected", n), i && I("pv_tag_label_selected", i), I("pv_photo_tags_selected", z), H(e), !1
                }, init: function (e, t, n, i, a, r, o) {
                    et = N(o.preload) ? 1 : o.preload, st = !!a, U.saveSource(e, t, n), _(function () {
                        U.open(i, e + (a ? "/rev" : ""), null, r, !0)
                    })
                }, zopen: function (e, t, n, i, a) {
                    if (x(t)) return !0;
                    a = a || {}, mt(), st = !1, "/rev" == i.substr(-4) && (i = i.slice(0, -4), st = !0);
                    var r = c(j.params);
                    if (delete r.z, ct = a.from || !1, i) ot = i; else {
                        var o = vt(n);
                        ot = o.album ? "album" + o.album : ""
                    }
                    if (lt = ot, rt = wt(ot), rt.length || Pt(e, n), ft = bt(n, rt), -1 === ft && (Pt(e, n), ft = bt(n, rt)), -1 === ft) {
                        var o = vt(n);
                        if (!o.id) return !0;
                        rt = [o], ft = 0
                    }
                    ut = rt.length < 2, dt = !1;
                    var s = rt[ft] && n != rt[ft].id;
                    return Ct(ft, {no_push: a.no_push && !s, replace: s, local: a.local}), H(t), !1
                }, zclose: function (e) {
                    return x(e) ? !0 : !1
                }
            }
        }();
    window.photo = U
}, function () {
    function e(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    !function () {
        uVK.onReady(_), Messenger.onQueryChange(v), Messenger.onQueryClear(g), uConvo.onTap(u), uMailHat.onBackClick(N), uMailHat.onBackToDialogClick(O), uMailWrite.onAfterSend(R), uMailWrite.onAttachedMsgsRemove(c), uMailWrite.onToBottomClick(P), uMailWrite.onMsgSend(r), Msg.onClick(tt), Msg.onRestoreClick(nt), Messenger.onMainScroll(x), Messenger.onConvoScroll(I), Messenger.onSearchMsgsClick(h), Messenger.onConvoScroll(uMessenger.expandPeerBefore), Messenger.onConvoAtTop(T), Messenger.onConvoAtBottom(E), MailActs.onCloseClick(X), MailActs.onRemoveClick(Y), MailActs.onImportantClick(Q), MailActs.onReplyClick(K), MailActs.onForwardClick(J), MailActs.onSpamClick(G), MailActs.onPinClick(V), im.onNewMsg(o), im.onEditMsg(s), im.onTyping(L), im.onOnlineChange(D), im.onMsgReadByMe(j), im.onMsgReadByOther(q), im.onMsgImportantRemove(f), im.onMsgImportantAdd(d), im.onMsgRemove(p), mediaUpload.onStart(l), nav.onPopState(z), nav.onBeforeGo(F), nav.onBeforeGo2(U), page.onChange(W), page.onChange(a), uVK.onReady(a), uVK.onReady(ot), uVK.onReady(i), uVK.onResize(i), page.onChange(i), uVK.onOrientationChange(n)
    }();
    var t = !1;

    function n() {
        browser.ios && document.activeElement.blur()
    }

    function i() {
        window.innerWidth > 881 && $$(".messenger").forEach(function (e) {
            return setStyle(e, "height", window.innerHeight)
        })
    }

    function a() {
        var e = nav.getQuery("msg") || nav.getQuery("id");
        e && uMessenger.scrollToMsg(e)
    }

    function r(t) {
        var n = store.mail.cur;
        storeMethods.injectMail({msgs: e({}, t.id, t)}), n.groupId && (t.adminId = n.userId), H(t, !0)
    }

    function o(e) {
        -1 === store.mail.cur.localOutMsgIds.indexOf(e.randomId) && H(e)
    }

    function s(e) {
        H(e)
    }

    function l() {
        uMailWrite.updateAttachmentsVisibility()
    }

    function c() {
        {
            var e = store.mail, t = e.cur;
            e.peers
        }
        t.msgAttached[t.peerId] = {}, uMailWrite.uiRedrawAttachments(t.peerId)
    }

    function u(e) {
        {
            var t = store.mail, n = (t.cur, t.rolls), i = t.msgs, a = Number(qs2obj(e.split("?")[1]).peer),
                r = last(n.peer[a] || []);
            i[r]
        }
        return m(e)
    }

    function d(e) {
        var t = store.mail, n = t.cur, i = t.msgs, a = t.scraps, r = t.rolls, o = i[e];
        if (o && (o.isImportant = !0, r.folder.important = r.folder.important.concat(e).filter(unique).sort(desc), Msg.toggleImportant(e, !0), "important" === n.folder)) {
            var s = a.folder.slice();
            a.folder = a.folder.concat(e).filter(unique).sort(desc), MailScrap.redrawFolder(s)
        }
    }

    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !0, n = store.mail, i = n.cur,
            a = n.msgs, r = n.scraps, o = n.rolls, s = a[e];
        if (s && (s.isImportant = t ? !1 : !0, arrayRemove(o.folder.important, e), Msg.toggleImportant(e, !1), "important" === i.folder)) {
            var l = r.folder.slice();
            arrayRemove(r.folder, e), MailScrap.redrawFolder(l)
        }
    }

    function p(e) {
        var t = p, n = store.mail, i = n.cur, a = n.msgs, r = n.scraps, o = n.rolls, s = a[e];
        if (s && !i.msgRemoved[e] && -1 === t.destroyPrevented.indexOf(e)) {
            var l = o.peer[s.peerId];
            arrayRemove(l, e), i.peerId === s.peerId && (arrayRemove(r.peer, e), Msg.destroy(e))
        }
        s && s.isImportant && f(e, !1)
    }

    p.destroyPrevented = [];

    function _() {
        if ("/mail" === location.pathname || 0 === location.pathname.indexOf("/write")) {
            if (!store.mail.cur) return;
            im.on(), rt(), Messenger.scrollConvoToBottom(), uMessenger.startPolling(), store.mail.cur.peerId && j(null, store.mail.cur.peerId)
        }
    }

    function m(e) {
        var t = w(e);
        return e = makeUrl(e), t && location.pathname + location.search !== e && nav.go(e, !1, {push_only: !0}), t || (MailScrap.resetPrevScraps(), store.mail = {}, store.uiLastId = 0, store.uiState = {}), t
    }

    function h() {
        var e = store.mail.cur.query;
        m("/mail?q=" + e + "&tab=messages")
    }

    function v(e) {
        var t = v;
        if (t.timer && clearTimeout(t.timer), store.mail.cur) if (e) {
            var n = makeUrl("/mail?q=" + e + ("msgs" === store.mail.cur.tab ? "&tab=messages" : ""));
            w(n), t.timer = setTimeout(function () {
                m(n)
            }, 300)
        } else m("/mail")
    }

    v.clearTimer = function () {
        self = v, self.timer && (clearTimeout(self.timer), self.timer = null)
    };

    function g() {
        Messenger.setMainLoading(!1), Messenger.setConvoLoading(!1), v.clearTimer(), m("/mail")
    }

    function w(e) {
        e = makeUrl(e);
        var n = e.split("?"), i = n[0], a = qs2obj(n[1]), r = store.mail, o = r.cur, s = r.scraps;
        if (o) {
            var l = a.act, c = a.peer, u = a.chat, d = a.email, f = a.m, p = toInt(a.msg) || toInt(a.id) || null,
                _ = "messages" === a.tab ? "msgs" : "peers", m = a.q || "";
            if (F()) return !0;
            if ("/mail" !== i || "add_to_chat" === l || "flush_history" === l || "info" === l || "msg" === l || "unpin" === l || "leave_chat" === l || "new_chat" === l || "chat_preview" === l || "return_to_chat" === l || "show_medias" === l || "toggle_community_block" === l || "community_toggle_important" === l || "ban_user" === l || "community_mark_answered" === l || "invite_link" === l || "reset_link" === l || "send" === l || "show" === l && a.id || 70 == f || 71 == f || 76 == f || 784 == f || 783 == f || 786 == f || 785 == f || 787 == f) return im.off(), uMessenger.stopPolling(), void uMailHat.cancelStatusUpdate();
            p && (t = !0), MailScrap.clearSystemMessage2();
            var h = c ? toInt(c) : u ? toInt(u) + 2e9 : d ? -toInt(d) - 2e9 : null,
                v = "unread" === l || "important" === l || "unrespond" === l ? l : "all";
            return (o.query !== m || o.tab !== _) && (o.peerId === h ? (o.query = m, o.tab = _, s.search = [], o.tab !== _ && (store.mail.reached.search.msgs = {}), uMessenger.redrawView(), Messenger.setQuery(m), MailScrap.redrawSearch(), m ? S() : (et(), 0 === s.folder.length && C())) : "peers" === o.tab && (o.query = "", Messenger.setQuery(""), uMessenger.redrawView())), o.peerId !== h ? h ? b(h, p) : k() : h && f ? (store.mail.peers[h].systemMessageCode = toInt(f), MailScrap.updateClass("peer"), MailScrap.redrawSystemMessage(), Messenger.scrollConvoToBottom()) : o.folder !== v && (y(v), Messenger.getMainBody().scrollTop = 0, C()), !0
        }
    }

    function y(e) {
        {
            var t = store.mail, n = t.cur, i = t.scraps, a = t.rolls;
            t.reached
        }
        n.folder = e, i.folder = first(20, a.folder[e]), MailScrap.folderSetItems(i.folder), uMessenger.redrawView(), uMailHat.redraw()
    }

    function b(e, n) {
        var i = store.mail, a = i.cur, r = i.msgs, o = i.peers, s = i.scraps, l = i.rolls, c = i.reached,
            u = l.peer[e] || [];
        if (!n && o[e].countUnread > 0) {
            Messenger.setConvoLoading(!0), window._preventedCheckTop = !0, t = !0, a.peerId = e, s.peer = [], ot(), uConvo.redrawUnread(e), uMessenger.redrawView(), Messenger.redrawConvoLayer(), uMailHat.startStatusUpdate(), f(), MailScrap.peerSetItems([]);
            var d = {act: "show", peer_id: e, msg: "unread"};
            return void ajaxRequest("/mail", d, function (n, i, a) {
                if (store.mail.cur) {
                    var o = n.rolls.peer[e];
                    if (storeMethods.injectMail(n), c.peer.after[e] = i, c.peer.before[e] = a, u = l.peer[e] || [], (arrayIntersects(o, u) || i && 0 === u.length) && (l.peer[e] = u.concat(o).filter(unique).sort(asc)), store.mail.cur.peerId === e) {
                        uMailWrite.preventShowToBottom(), s.peer = o.slice(), geByClass1("mailScrap__items_peer").innerHTML = "", MailScrap.updateClass("peer"), MailScrap.peerSetItems(o), rt(), AudioMessagePlayer.redrawWaves(), M(e);
                        var d = o.find(function (e) {
                            return r[e].isUnread
                        });
                        uMessenger.scrollToMsg(d, !0, !1), requestAnimationFrame(function () {
                            window._preventedCheckTop = !1, t = !1, Messenger.setConvoLoading(!1)
                        })
                    }
                }
            })
        }
        a.peerId = e, s.peer = [], ot(), n ? (s.peer = [n], l.peer[e] = [], c.peer.before[e] = !1, c.peer.after[e] = !1, Messenger.setConvoLoading(!0)) : (s.peer = last(20, u), f()), store.mail.reached.peer.after[e] = !0, MailScrap.updateClass("peer");

        function f() {
            a.forwardFromId && (a.query = "", a.tab = "peers", s.search = [], Messenger.setQuery(a.query), K(), a.forwardFromId = null)
        }

        uMessenger.redrawView(), Messenger.redrawConvoLayer(), uMailHat.startStatusUpdate(), MailScrap.peerSetItems(s.peer), n || M(e);
        o[e];
        n && (MailScrap.updateClass("peer"), uMessenger.scrollToMsg(n)), n ? T(n) : T(), requestAnimationFrame(function () {
            n || Messenger.scrollConvoToBottom(), AudioMessagePlayer.redrawWaves(), requestAnimationFrame(function () {
                n || Messenger.scrollConvoToBottom()
            })
        })
    }

    function k() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0, t = store.mail, n = t.cur,
            i = t.scraps;
        uMailHat.cancelStatusUpdate(), n.peerId = null, i.peer = [], ot(), e && (n.msgSelected = {}), uMessenger.redrawView(), uMailHat.redraw(), requestAnimationFrame(function () {
            MailActs.setCount(0), uMessenger.redrawMailActions(), uCurConvoTyping.redraw(), C(), requestAnimationFrame(function () {
                MailScrap.peerSetItems(i.peer)
            })
        })
    }

    function M(e, t) {
        t || (t = function () {
        });
        var n = store.mail.peers[e];
        !n || n.countUnread > 0 ? ajaxRequest("/mail", {act: "read_dialog", peer_id: e}, function () {
            j(null, e)
        }) : setTimeout(function () {
            j(null, e)
        }, 500)
    }

    function C() {
        var e = C, t = e.locked || (e.locked = {}), n = store.mail, i = n.cur, a = n.scraps, r = n.rolls, o = n.reached,
            s = i.folder, l = a.folder, c = r.folder[s], u = "folder_" + s, d = o.folder[s] && last(l) === last(c);
        if (Messenger.setMainLoading(0 === l.length && !d), !t[u] && !d) {
            var f = "important" === s, p = f ? desc : it, _ = [];
            if (0 === l.length) _ = first(20, c); else {
                var m = c.indexOf(last(l));
                _ = m >= 0 ? c.slice(m + 1, m + 21) : []
            }
            if (_.length) {
                var h = l.concat(_).filter(unique).sort(p);
                a.folder = h, MailScrap.folderAddItems(_), rt()
            } else {
                t[u] = !0;
                var v = "all" === s ? null : s, g = l.length;
                ajaxRequest("/mail", {act: v, offset: g}, function (e, n) {
                    if (store.mail.cur) {
                        storeMethods.injectMail(e), Object.keys(e.peers).forEach(function (e) {
                            store.mail.reached.peer.after[e] = !0
                        }), ("all" === s || "unread" === s) && Object.keys(e.msgs).forEach(function (t) {
                            t = toInt(t);
                            var n = e.msgs[t].peerId;
                            r.peer[n] = (r.peer[n] || []).concat(t).filter(unique).sort(asc)
                        });
                        var d = Object.keys(f ? e.msgs : e.peers).map(toInt).sort(p).filter(function (e) {
                            return -1 === l.indexOf(e)
                        }), _ = c.concat(d).filter(unique).sort(p);
                        if (r.folder[s] = _, n && (o.folder[s] = n), t[u] = !1, i.folder === s) {
                            {
                                a.folder.slice()
                            }
                            a.folder = _, MailScrap.updateClass("folder"), MailScrap.folderAddItems(d), rt(), Messenger.setMainLoading(!1)
                        }
                    }
                })
            }
        }
    }

    function S() {
        var e = S, t = e.locked || (e.locked = {}), n = store.mail, i = n.cur, a = n.scraps, r = n.rolls, o = n.reached,
            s = i.tab, l = i.query, c = "search_msgs_" + s + "_" + l, u = a.search, d = r.search[s][l] || [],
            f = o.search[s][l] && last(u) === last(d);
        if (Messenger.setMainLoading(0 === u.length && !f), !t[c] && !f) {
            var p = [];
            if ("peers" === s && (d.length || (d = Z()), d.length)) if (0 === u.length) p = first(20, d); else {
                var _ = d.indexOf(u);
                p = _ >= 0 ? d.slice(_ + 1, _ + 41) : []
            }
            if (p.length && (a.search = u.concat(p).filter(unique), MailScrap.redrawSearch(), MailScrap.updateClass("search"), rt(), Messenger.setMainLoading(!1)), !p.length || "peers" === s) {
                var m = "msgs" === s ? {act: "search", q: l, offset: a.search.length, messages: 1} : {
                    act: "search",
                    q: l
                };
                e.timer && clearTimeout(e.timer), e.timer = setTimeout(function () {
                    t[c] = !0, ajaxRequest("/mail", m, function (e, n) {
                        if (store.mail.cur) {
                            t[c] = !1, storeMethods.injectMail(e);
                            var u = Object.keys("peers" === s ? e.peers : e.msgs).map(toInt),
                                f = "peers" === s ? it : desc, p = d.concat(u).filter(unique).sort(f);
                            r.search[s][l] = p, n && (o.search[s][l] = n), i.tab === s && i.query === l && (Messenger.setMainLoading(!1), a.search = a.search.concat(u).filter(unique).sort(f), MailScrap.redrawSearch(), MailScrap.updateClass("search"), rt())
                        }
                    })
                }, 300)
            }
        }
    }

    function T(e) {
        if (!$(".load_before_closed")) {
            var n = T, i = n.locked || (n.locked = {}), a = store.mail, r = a.cur, o = a.scraps, s = a.rolls,
                l = a.reached, c = r.peerId, u = o.peer, d = s.peer[c] || [], f = "peer_before_" + c,
                p = l.peer.before[c] && u[0] === d[0];
            if (Messenger.setConvoLoading(u.length <= 1 && !p), !i[f] && !p) {
                var _ = Messenger.getConvoBody(), m = !arrayIntersects(u, d), h = first(u), v = h ? d.indexOf(h) : -1,
                    g = 0 === u.length ? last(10, d) : v >= 0 ? d.slice(v - 20, v) : [];
                if (g.length && !e) {
                    if (_.scrollTop > 6e3 && !m) return;
                    if (window._preventedCheckTop) return;
                    var w = o.peer.slice(), y = u.concat(g).filter(unique).sort(asc);
                    o.peer = y, MailScrap.peerAddItemsBefore(g.filter(function (e) {
                        return -1 === w.indexOf(e)
                    })), rt(), AudioMessagePlayer.redrawWaves(), MailScrap.updateClass("peer"), Messenger.setConvoLoading(!1)
                } else {
                    if (!c) return;
                    var b = {act: "show", peer_id: c, msg: u[0], direction: e ? "around" : "before"}, k = u[0];
                    i[f] = !0, ajaxRequest("/mail", b, function (n, a, r) {
                        if (store.mail.cur) {
                            e && setTimeout(function () {
                                t = !1
                            }, 10), i[f] = !1, storeMethods.injectMail(n);
                            var p = Object.keys(n.msgs).map(toInt).filter(function (e) {
                                return -1 === u.indexOf(e)
                            }), h = u.concat(p).filter(unique).sort(asc);
                            if (r && (l.peer.before[c] = !0), a && (l.peer.after[c] = !0), d = s.peer[c] || [], (arrayIntersects(h, d) || a && 0 === d.length) && (s.peer[c] = (s.peer[c] || []).concat(h).filter(unique).sort(asc)), store.mail.cur.peerId === c) {
                                if (uMailWrite.preventShowToBottom(), _.scrollTop > 6e3 && !m) return;
                                var v = o.peer.slice();
                                o.peer = h, MailScrap.updateClass("peer"), k ? (MailScrap.peerAddItemsBefore(p.filter(function (e) {
                                    return -1 === v.indexOf(e) && k > e
                                }), !0), MailScrap.peerAddItemsAfter(p.filter(function (e) {
                                    return -1 === v.indexOf(e) && e > k
                                }), !0)) : MailScrap.peerAddItemsBefore(p, !0), e && (uMessenger.scrollToMsg(e), Messenger.setConvoLoading(!1)), rt(), AudioMessagePlayer.redrawWaves(), Messenger.setConvoLoading(!1), uMessenger.expandPeerBefore(), setTimeout(uMessenger.expandPeerBefore, 100), e && K()
                            }
                        }
                    })
                }
            }
        }
    }

    function E() {
        var e = E, n = e.locked || (e.locked = {}), i = store.mail, a = i.cur, r = i.scraps, o = i.rolls, s = i.reached;
        if (!t && a) {
            var l = a.peerId, c = r.peer, u = o.peer[l] || [], d = "peer_after_" + l;
            if (!(n[d] || s.peer.after[l] && last(c) === last(u))) {
                var f = Messenger.getConvoBody(), p = !arrayIntersects(c, u), _ = function () {
                    return f.scrollHeight - f.scrollTop - f.offsetHeight
                }, m = last(c), h = m ? u.indexOf(m) : -1, v = h >= 0 ? u.slice(h + 1, h + 21) : [];
                if (!v.length || nav.getQuery("msg") || nav.getQuery("id")) {
                    if (!l) return;
                    var g = {act: "show", peer_id: l, msg: last(c), direction: "after"};
                    n[d] = !0, ajaxRequest("/mail", g, function (e, t) {
                        if (store.mail.cur) {
                            n[d] = !1, storeMethods.injectMail(e);
                            var i = Object.keys(e.msgs).map(toInt).filter(function (e) {
                                return -1 === c.indexOf(e)
                            }).sort(asc), a = c.concat(i).filter(unique).sort(asc);
                            if (t && (s.peer.after[l] = t), u = o.peer[l] || [], (arrayIntersects(a, u) || t && 0 === u.length) && (o.peer[l] = (o.peer[l] || []).concat(a).filter(unique).sort(asc)), store.mail.cur.peerId === l) {
                                if (_() > 6e3 && !p) return;
                                t && MailScrap.updateClass("peer"), r.peer = a, MailScrap.updateClass("peer"), MailScrap.peerAddItemsAfter(i), rt(), AudioMessagePlayer.redrawWaves()
                            }
                        }
                    })
                } else {
                    if (_() > 6e3 && !p) return;
                    var w = c.concat(v).filter(unique).sort(asc);
                    r.peer = w, MailScrap.peerAddItemsAfter(v), MailScrap.updateClass("peer"), rt(), AudioMessagePlayer.redrawWaves()
                }
            }
        }
    }

    var A = !1;

    function x(e) {
        var t = store.mail, n = t.cur, i = t.scraps, a = t.rolls, r = e.scrollTop, o = e.scrollHeight,
            s = e.offsetHeight;
        if (!n.query && 20 >= r && i.folder.length) {
            if (A) {
                A = !1;
                {
                    i.folder.slice()
                }
                i.folder = first(20, a.folder[n.folder]), MailScrap.folderCutItems(20)
            }
        } else r > 20 && (A = !0, o - r - s < window.innerHeight && (n.query ? S() : C()))
    }

    function P() {
        var e = store.mail, t = e.cur, n = e.scraps, i = e.rolls, a = e.reached, r = n.peer, o = i.peer[t.peerId] || [];
        if (o.length && last(r) === last(o) && a.peer.after[t.peerId]) Messenger.scrollConvoToBottom(), uMailWrite.hideToBottom(), MailScrap.updateClass("peer"); else {
            var s = t.peerId, l = {act: "show", peer_id: s};
            ajaxRequest("/mail", l, function (e) {
                if (store.mail.cur) {
                    var t = e.rolls.peer[s];
                    i.peer[s] = t.slice(), storeMethods.injectMail(e), a.peer.after[s] = !0, store.mail.cur.peerId === s && (uMailWrite.preventShowToBottom(), n.peer = t.slice(), geByClass1("mailScrap__items_peer").innerHTML = "", MailScrap.peerAddItemsBefore(t), MailScrap.updateClass("peer"), Messenger.scrollConvoToBottom(), rt(), AudioMessagePlayer.redrawWaves())
                }
            })
        }
    }

    function I(e) {
        var t = I, n = 50;
        t.timer || (t.timer = setTimeout(function () {
            t.timer = null, B(e)
        }, n))
    }

    function B(e) {
        var t = store.mail, n = t.cur, i = t.scraps, a = t.msgs, r = t.peers;
        if (n) {
            var o = i.peer, s = o.find(function (e) {
                return a[e] && a[e].isUnread && a[e].authorId !== n.viewerId
            }), l = e.scrollTop, c = e.scrollHeight - l - e.offsetHeight, u = 0;
            if (s) {
                var d = Msg.getElem(s), f = e.scrollHeight - d.offsetTop;
                u = c - f, 100 >= u && M(n.peerId)
            }
            e._prevScroll || (e._prevScroll = 0), 300 > c && $(".mailScrap_reachedAfter") ? uMailWrite.hideToBottom() : l > e._prevScroll - 5 || n.peerId && r[n.peerId].countUnread ? uMailWrite.showToBottom() : uMailWrite.hideToBottom(), e._prevScroll = l
        }
    }

    function H(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1, i = t.peerId, a = t.msgId,
            r = t.authorId, o = t.text, s = t.date, l = t.hasAttachments, c = t.flags, u = t.adminId, d = t.isService,
            f = store.mail, p = f.cur, _ = f.peers, m = (f.msgs, f.members), h = f.rolls, v = f.scraps, g = f.reached;
        a || (a = t.id);
        var w = p.groupId ? p.groupId === r : p.userId === r, y = !w, b = _[i] && 0 === _[i].countUnread && y;
        if (u && r > 0 && (r = -r), !n && (d || !o || l || !_[i] || !m[r] || u && !m[u] || /\[id\d+\|.+\]/.test(o))) return void ajaxRequest("/mail", {
            act: "message",
            message_id: a
        }, function (e, t) {
            if (store.mail.cur) {
                storeMethods.injectMail(e), t.unpin ? (_[i].pinnedMsg = "", p.peerId === i && uMessenger.redrawPinnedMsg()) : t.pinned && (_[i].pinnedMsg = t.pinned, p.peerId === i && uMessenger.redrawPinnedMsg());
                var n = last(h.peer[i] || []);
                if (h.peer[i] = (h.peer[i] || []).concat(a).filter(unique).sort(asc), h.folder.all = h.folder.all.concat(i).filter(unique).sort(it), y && (h.folder.unread = h.folder.unread.concat(i).filter(unique).sort(it)), p.groupId && (y ? h.folder.unrespond = h.folder.unrespond.concat(i).filter(unique).sort(it) : arrayRemove(h.folder.unrespond, i)), i === p.peerId && uCurConvoTyping.redraw(), b && (p.countUnread += 1, uMailHat.redrawCounter()), "all" === p.folder) {
                    var o = v.folder.slice();
                    v.folder = v.folder.concat(i).filter(unique).sort(it), MailScrap.redrawFolder(o)
                } else if ("unread" === p.folder && y) {
                    var s = v.folder.slice();
                    v.folder = v.folder.concat(i).filter(unique).sort(it), MailScrap.redrawFolder(s)
                } else if ("unrespond" === p.folder) {
                    var l = v.folder.slice();
                    y ? v.folder = v.folder.concat(i).filter(unique).sort(it) : arrayRemove(v.folder, i), MailScrap.redrawFolder(l)
                }
                if (g.peer.after[i] || (g.peer.after[i] = !0, g.peer.before[i] = !1), p.peerId === i && (arrayIntersects(v.peer, h.peer[i]) || 0 === v.peer.length) && last(v.peer) === n) {
                    v.peer = v.peer.concat(a).filter(unique).sort(asc);
                    var c = Messenger.getConvoBody(), u = c.scrollTop + c.offsetHeight >= c.scrollHeight - 2;
                    MailScrap.peerAddItemsAfter([a]);
                    var d = c.scrollHeight - c.scrollTop - c.offsetHeight < 400;
                    u && Messenger.scrollConvoToBottom(), c.scrollTop + c.offsetHeight === c.scrollHeight && Messenger.scrollConvoToBottom(), d ? M(i) : uMailWrite.showToBottom(), r === p.viewerId && MailScrap.removeDivider()
                }
                uConvo.redrawLastMsg(i), uConvo.redrawTyping(i), uConvo.redrawUnread(i), AudioMessagePlayer.redrawWaves()
            }
        });
        var k = t.textShort || (w ? '<span class="convo__msgAuthor">' + lang.mobile_mail_you + ":</span> " + o : r !== i ? '<span class="convo__msgAuthor">' + m[r].firstName + ":</span> " + o : o),
            C = Messenger.getConvoBody(),
            S = p.viewerId === i || p.peerId === i && y && C.scrollHeight - C.scrollTop - C.offsetHeight < 400 && !!$(".mailScrap_reachedAfter"),
            T = {
                id: a,
                peerId: i,
                authorId: r,
                date: s,
                dateShort: t.dateShort || s,
                textShort: k,
                textFull: t.textFull || mail.wrapLinks(o, c),
                isUnread: !S,
                edited: t.edited
            };
        u && (T.adminName = t.adminName || (u === p.userId ? lang.mobile_mail_you : m[u].name), T.adminUrl = t.adminUrl || m[u].url), storeMethods.injectMail({msgs: e({}, a, T)}), S && (ajaxRequest("/mail", {
            act: "read_message",
            msg_id: a
        }, function () {
        }), j(null, i));
        var E = last(h.peer[i] || []);
        h.peer[i] = (h.peer[i] || []).concat(a).filter(unique).sort(asc), h.folder.all = h.folder.all.concat(i).filter(unique).sort(it), g.peer.after[i] || (g.peer.after[i] = !0, g.peer.before[i] = !1);
        var A = _[i];
        if (y && (h.folder.unread = h.folder.unread.concat(i).filter(unique).sort(it), A.countUnread || (A.countUnread = 0), A.countUnread += 1, uMailWrite.redrawToBottom()), A.typing.length && (arrayRemove(A.typing, r), i === p.peerId ? uCurConvoTyping.redraw() : (uConvo.redrawLastMsg(i), uConvo.redrawTyping(i))), b && (p.countUnread += 1, uMailHat.redrawCounter()), p.groupId && (y ? h.folder.unrespond = h.folder.unrespond.concat(i).filter(unique).sort(it) : arrayRemove(h.folder.unrespond, i)), "all" === p.folder) {
            var x = v.folder.slice();
            v.folder = v.folder.concat(i).filter(unique).sort(it), MailScrap.redrawFolder(x)
        } else if ("unread" === p.folder && r !== p.viewerId) {
            var P = v.folder.slice();
            v.folder = v.folder.concat(i).filter(unique).sort(it), MailScrap.redrawFolder(P)
        } else if ("unrespond" === p.folder) {
            var I = v.folder.slice();
            y ? v.folder = v.folder.concat(i).filter(unique).sort(it) : arrayRemove(v.folder, i), MailScrap.redrawFolder(I)
        }
        if (p.peerId === i && (arrayIntersects(v.peer, h.peer[i]) || 0 === v.peer.length) && last(v.peer) === E) {
            {
                v.peer.slice()
            }
            v.peer = v.peer.concat(a).filter(unique).sort(asc);
            var B = Messenger.getConvoBody(), H = B.scrollTop + B.offsetHeight >= B.scrollHeight - 2;
            T.edited ? MailScrap.peerReplaceItems([a]) : MailScrap.peerAddItemsAfter([a]), n && MailScrap.peerGoToBottom();
            var N = B.scrollHeight - B.scrollTop - B.offsetHeight < 400;
            H && Messenger.scrollConvoToBottom(), y && (N || uMailWrite.showToBottom()), r === p.viewerId && MailScrap.removeDivider()
        }
        uConvo.redrawLastMsg(i), uConvo.redrawUnread(i), AudioMessagePlayer.redrawWaves()
    }

    function N() {
        if (store.mail.cur) {
            var e = store.mail.cur.query;
            e ? w("/mail?q=" + e) : m("/mail")
        }
    }

    function O() {
        var e = store.mail.cur, t = e.msgSelected, n = e.forwardFromId;
        e.forwardFromId = null, Object.keys(t).forEach(function (e) {
            delete t[e]
        }), Msg.unselectAll(), uMessenger.redrawMailActions(), b(n)
    }

    function L(e, t) {
        var n = L, i = n.timers || (n.timers = {}), a = store.mail, r = a.cur, o = a.peers, s = o[e];
        if (s) {
            var l = s.typing || (s.typing = []);
            -1 === l.indexOf(t) && (l.unshift(t), s.typing = l, e === r.peerId && uCurConvoTyping.redraw(), uConvo.redrawTyping(e));
            var c = e + "_" + t;
            i[c] && clearTimeout(i[c]), i[c] = setTimeout(function () {
                arrayRemove(s.typing, t), e === r.peerId && uCurConvoTyping.redraw(), uConvo.redrawTyping(e)
            }, 7e3)
        }
    }

    L.clearTimers = function () {
        var e = L;
        e.timers && (Object.keys(e.timers).forEach(function (t) {
            clearTimeout(e.timers[t])
        }), e.timers = {})
    };

    function D(e) {
        var t = e.userId, n = e.isOnline, i = e.onlinePlatform, a = e.lastActionTime, r = store.mail, o = r.cur,
            s = r.peers, l = s[t];
        l && (l.isOnline = n, "onlinePlatform" in e && (l.onlinePlatform = i), a && (l.lastActionTime = a), uConvo.redrawOnline(t), o.peerId === t && uMailHat.redrawOnline())
    }

    function j(e, t) {
        var n = store.mail, i = n.cur, a = n.peers, r = n.msgs, o = n.scraps, s = n.rolls;
        if (i) {
            var l = i.peerId === t ? o.peer : [], c = s.peer[t] || [], u = a[t];
            if (c.concat(l).forEach(function (e) {
                    var t = r[e];
                    t.isUnread && t.authorId !== i.viewerId && (delete t.isUnread, Msg.markAsRead(e))
                }), u ? u.countUnread && (i.countUnread -= 1, u.countUnread = 0) : i.countUnread -= 1, arrayRemove(s.folder.unread, t), "unread" === i.folder) {
                var d = o.folder.slice();
                arrayRemove(o.folder, t), MailScrap.redrawFolder(d)
            }
            uMailHat.redrawCounter(), uMailWrite.redrawToBottom(), uConvo.redrawUnread(t)
        }
    }

    function q(e, t) {
        var n = store.mail, i = n.cur, a = n.msgs, r = n.rolls, o = n.scraps, s = r.peer[t] || [], l = a[e];
        if (l) for (var c = s.indexOf(e); c > 0;) {
            var u = a[s[c]];
            u.authorId === i.viewerId && u.isUnread && (delete u.isUnread, Msg.markAsRead(u.id)), c--
        } else last(s) && e <= last(s) && s.forEach(function (e) {
            var t = a[e];
            t.authorId === i.viewerId && t.isUnread && (delete t.isUnread, Msg.markAsRead(t.id))
        });
        i.peerId === t && o.peer.forEach(function (e) {
            var t = a[e];
            t.authorId === i.viewerId && t.isUnread && (delete t.isUnread, Msg.markAsRead(t.id))
        }), uConvo.redrawUnread(t)
    }

    function R() {
        var e = store.mail, t = e.cur, n = e.peers, i = n[t.peerId];
        i.attachmentsHTML = Brick({
            mix: "cp_attached_wrap",
            attrs: 'id="attached_wrap"'
        }), t.msgAttached[t.peerId] = {}, uMailWrite.uiClearAttachments()
    }

    function z() {
        if (F()) return !0;
        browser.ios && document.activeElement.blur();
        var e = qs2obj(location.search.slice(1)).act;
        if (!$(".uMessenger") && "/mail" === location.pathname && "show_medias" !== e) return nav.go(location, null, {
            no_push: !0,
            need_restore: !1
        }), !0;
        var t = new RegExp(/z=photo/).test(location.search);
        return !$(".uMessenger") || t || ge("z_photoview") ? void 0 : w(location.pathname + location.search)
    }

    function F() {
        var e = F;
        return mediaUpload.isUploading ? (e.noAlert || alert(lang.mobile_mail_wait_until_uploaded), e.noAlert = !0, setTimeout(function () {
            e.noAlert = !1
        }, 10), !0) : void 0
    }

    function U(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = store.mail.cur;
        return "/mail" === n && a && a.groupId || i.replace ? void 0 : !t.m && geByClass1("uMessenger") ? m(n) : void 0
    }

    function W() {
        if (window.isNewMail) {
            var e = store.mail.cur;
            if (!e) return v.clearTimer(), void L.clearTimers();
            "/mail" !== location.pathname && 0 !== location.pathname.indexOf("/write") || (im.on(), uMessenger.startPolling(), e && e.peerId && uMailWrite.uiRedrawAttachments(e.peerId)), nav.getQuery("msg") || nav.getQuery("id") || Messenger.scrollConvoToBottom()
        }
    }

    function V() {
        var e = store.mail, t = e.cur, n = (e.msgs, e.peers), i = e.hash, a = t.msgSelected,
            r = toInt(Object.keys(a)[0]), o = n[t.peerId];
        t.msgSelected = {}, o.pinnedMsgId = r, Msg.unselectAll(), uMessenger.redrawMailActions(), ajaxRequest("/mail?act=pin", {
            hash: i.pin,
            chat: nav.getQuery("chat"),
            msg: r,
            _ajax: 1
        })
    }

    function X() {
        var e = store.mail.cur, t = e.msgSelected;
        Object.keys(t).forEach(function (e) {
            delete t[e]
        }), Msg.unselectAll(), MailActs.setCount(0), uMessenger.redrawMailActions()
    }

    function Y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1, t = store.mail, n = t.cur,
            i = t.hash, a = (t.msg, n.peerId), r = n.msgRemoved, o = n.msgSelected, s = Object.keys(o);
        s.forEach(function (t) {
            r[t] = e ? "spam" : !0, n.countImportant--, delete o[t], p.destroyPrevented.push(t), e ? Msg.spam(t) : Msg.remove(t)
        }), ajaxRequest("/mail", {act: e ? "spam" : "delete", peer: a, ids: s.join(","), hash: i.remove}, function () {
        }), uMessenger.redrawMailActions()
    }

    function G() {
        Y(!0)
    }

    function Q() {
        var e = store.mail, t = e.cur, n = e.hash, i = e.msgs, a = t.msgSelected, r = Object.keys(a),
            o = r.some(function (e) {
                return !i[e].isImportant
            }) ? 1 : 0;
        r.forEach(function (e) {
            delete a[e], i[e].isImportant != !!o && (o ? t.countImportant++ : t.countImportant--), i[e].isImportant = !!o, Msg.toggleImportant([e], !!o)
        }), ajaxRequest("/mail", {act: "mark_important", ids: r, hash: n.important, val: o}, function () {
        }), Msg.unselectAll(), uMessenger.redrawMailActions()
    }

    function K() {
        var e = store.mail.cur, t = e.peerId, n = Object.keys(e.msgSelected).map(toInt);
        e.msgAttached[t] = n, n.forEach(function (t) {
            delete e.msgSelected[t]
        }), Msg.unselectAll(), MailActs.setCount(0), uMailWrite.uiRedrawAttachments(t), uMessenger.redrawMailActions()
    }

    function J() {
        var e = store.mail.cur;
        e.forwardFromId = e.peerId, e.query = "", e.tab = "peers", y("all"), Messenger.setQuery(""), k(!1), Messenger.getMainBody().scrollTop = 0
    }

    function Z() {
        var e = store.mail, t = e.cur, n = e.peers, i = (e.rolls, Object.keys(n).map(toInt)),
            a = QuickSearch.getQueryREs(t.query), r = [];
        return a.forEach(function (e) {
            i.forEach(function (t) {
                n[t].title.match(e) && r.push(t)
            })
        }), r.filter(unique).sort(it)
    }

    function et() {
        var e = store.mail, t = e.cur, n = e.scraps;
        t.query = "", t.tab = "peers", n.search = [], uMessenger.redrawView(), MailScrap.redrawSearch(), Messenger.setQuery("")
    }

    function tt(e) {
        if (store.mail.cur) {
            var t = store.mail, n = t.cur, i = t.peers, a = n.msgRemoved, r = n.msgSelected, o = i[n.peerId];
            if (uMailWrite.hideStickersPanel(), !a[e]) {
                r[e] ? delete r[e] : r[e] = !0;
                var s = Object.keys(r).length;
                if (MailActs.setCount(s), o.canPin) {
                    var l = toInt(Object.keys(r)[0]);
                    MailActs.togglePin(1 === s && l !== o.pinnedMsgId)
                } else MailActs.togglePin(!1);
                uMessenger.redrawMailActions()
            }
        }
    }

    function nt(e) {
        var t = store.mail, n = t.cur, i = t.hash, a = t.msgs, r = a[e],
            o = "spam" === n.msgRemoved[e] ? "nospam" : "restore";
        delete n.msgRemoved[e], Msg.restore(e), ajaxRequest("/mail", {act: o, id: e, hash: i.restore}, function () {
        }), r.isImportant && (n.countImportant++, d(e))
    }

    function it(e, t) {
        var n = store.mail.rolls, i = n.peer[e] || [0], a = n.peer[t] || [0];
        return last(a) - last(i)
    }

    function at() {
        var e = store.mail, t = e.cur, n = e.scraps;
        return t ? {
            folder: t.folder,
            peerId: t.peerId,
            scraps: {folder: n.folder.slice(), peer: n.peer.slice(), search: n.search.slice()},
            scrolls: {main: 0, peer: 0},
            query: t.query,
            tab: t.tab
        } : null
    }

    function rt() {
        history.replaceState(at(), null)
    }

    function ot() {
        if (store.mail.cur) {
            var e = !!store.mail.cur.peerId;
            $$(".vk__page_mail").forEach(function (t) {
                return t.classList.toggle("messenger_noPullToRefresh", e)
            })
        }
    }
}, function () {
    var e = window, t = e.parseRusKeys, n = e.parseLatKeys, i = e.parseLat, a = e.parseCyr, r = e.escapeRE, o = e.val,
        s = e.onBodyScrollForce, l = e.extend, c = e.len, u = e.removeClass, d = e.geByClass1, f = e.addClass,
        p = e.show, _ = e.hide, m = e.alLoadingFix, h = e.cancelEvent, v = e.elfocus, g = e.elblur, w = e.ge,
        y = e.addEvent, b = e.attr, k = e.initAutoScroll, M = window, C = M.ajax;

    function S(e) {
        S.getQueryREs = lt;
        var M, T, E, A, x, P, I, B, H, N, O, L = [], D = {}, j = {}, q = {}, R = {}, z = !1, F = null, U = null,
            W = null, $ = 0, V = [], X = null, Y = null, G = null, Q = !1, K = !1, J = 10, Z = 30, et = !0, tt = !1,
            nt = !1, it = !1, at = 0, rt = 0, ot = !1,
            st = e && "au_search_field" === e.field && b(w(e.field), "data-newsearch");

        function lt(e) {
            e = e.replace(/https?:\/\/(m\.)?vk\.com\/([^#]+#\/)?/, "");
            for (var o, s, l, c = K, u = [e, s = t(e, c) || e, l = n(e, c) || e, i(s), a(l)], d = {}, f = [], p = 0, _ = u.length; _ > p; p++) u[p] && !d[u[p]] && (d[u[p]] = !0, o = r(u[p]), o = o.replace(/[�]/gi, "[�]").replace(/(e|yo)/gi, "(?:e|yo)"), f.push(new RegExp("(^|\\s|\\(|>)(" + o + ")", "gi")));
            return f
        }

        function ct(e, t, n) {
            if (clearTimeout(U), !n) return U = setTimeout(function () {
                ct(e, t, !0)
            }, 10), !1;
            var i = o(e) || "";
            if (F == i) return !1;
            var a, r = "_" + i, l = j[r], c = lt(i);
            if (!st && !l && i.length > 2 && j["_" + i.slice(0, -2)]) {
                var u = "_" + i.slice(0, -2);
                j[u] && R[u] && !j[u].length && (!it || it && !q[u]) && (R[r] = !0, l = j[r] = [], it && (q[r] = ""))
            }
            if (!l) {
                l = [];
                var d = 0;
                if (!i && L.length) for (var f = $, p = $ + Math.min(J, L.length); p > f; f++) l.push([L[f]]), d++; else {
                    for (var _ = {}, m = 0, f = 0, p = L.length; p > f; f++) {
                        var h = L[f];
                        if (D[h]) {
                            if (_[h] = !0, (a = dt(c, D[h][0])) && (l.push([h, a]), ++m >= Z)) break;
                            d++
                        }
                    }
                    if (Z > m) for (var h in D) if (!_[h] && (a = dt(c, D[h][0]))) {
                        if (l.push([h, a]), ++m >= Z) break;
                        d++
                    }
                }
                R[r] = R[r] || !i && L.length || l.length > 2 * J, R[r] = R[r] || it && l.length > J
            }
            return R[r] || !et && !it || I || ut(e, i), j[r] = l, F = i, ft(l, q[r]), H && H(i), nt && !F && (at = J), s(), !1
        }

        function ut(e, t, n) {
            var i = st ? 800 : 200;
            return clearTimeout(W), n ? (C.post(M, {_ajax: 1, q: t}, {
                onDone: function (n, i, a) {
                    B && B.apply(null, arguments);
                    for (var r, o = "_" + t, d = j[o] || [], f = {}, p = lt(t), _ = 0, m = d.length; m > _; _++) f[d[_][0]] = !0;
                    for (var _ = 0, m = i.length; m > _; _++) {
                        var h = i[_];
                        f[h] || ((r = dt(p, n[h][0])) || Q || !t) && d.push([h, r])
                    }
                    R[o] = !0, j[o] = d, it && (q[o] = a || ""), D = l(n, D), et = !tt || c(D) < tt, F == t ? (ft(d, q[o]), s()) : delete j[o], u("input_loading", e)
                }, onFail: function () {
                    delete j["_" + t], u("input_loading", e)
                }
            }), void(d("al_loading", E) || f("input_loading", e))) : (W = setTimeout(function () {
                ut(e, t, !0)
            }, i), !1)
        }

        function dt(e, t) {
            if (!t) return !1;
            var n = [t], i = /([�])/gi;
            -1 !== t.search(i) && n.push(t.replace(i, ""));
            for (var a = 0; a < n.length; a++) for (var r = 0, o = e.length; o > r; r++) if (-1 !== n[a].search(e[r])) return e[r];
            return !1
        }

        function ft(e, t) {
            var n = "";
            if (Y && E) {
                for (var i = 0, a = e.length; a > i; i++) {
                    var r = e[i][0], s = e[i][1];
                    if (D[r]) {
                        var l = D[r].slice(1);
                        if (s) for (var c in V) {
                            var d = V[c];
                            l[d] && (l[d] = l[d].replace(s, '$1<em class="found">$2</em>'))
                        }
                        n += Y.apply({
                            id: r, q: F, highlight: function (e) {
                                return ("" + e).replace(s, '$1<em class="found">$2</em>')
                            }, template: function (e, t) {
                                var n = ("" + e).replace(/%(\d+)%|#(\d+)#/g, function (e, n, i) {
                                    return +i ? ("" + t[i - 1]).replace(s, '$1<em class="found">$2</em>') : +n ? t[n - 1] || "" : ""
                                });
                                return n
                            }
                        }, l)
                    }
                }
                n || R["_" + F] || !et && !it || I || (u("input_loading", A), n = F ? '<div class="al_loading qs_loading">&nbsp;</div>' : '<div id="al_loading"></div>'), !n && G && (n = G(F)), o(E, X ? X(n, F, nt, t) : n + (t || "")), P && (F ? p(P) : _(P)), !F && m(), N && N()
            }
        }

        l(this, {
            go: function (e) {
                return A ? (ct(A, e, !0), A.blur(), h(e), !1) : !0
            }, redraw: function () {
                var e = "_" + F;
                ft(j[e], q[e]), s()
            }, clear: function (e, t) {
                return o(A, ""), t ? v(A) : g(A), ct(A, e, !0), h(e), !1
            }, blur: function () {
                g(A)
            }, init: function (e) {
                e = e || {}, E = w(e.container) || null, A = w(e.field) || null, x = w(e.btn) || null, P = w(e.clear_btn) || null, F = null, z && M == e.action && e.init_once || (j = {}, q = {}, R = {}, M = e.action || "", T = e.al_action || M, L = e.top_items || [], D = e._cache || {}, V = e.hl_fields || [], X = e.tpl || null, Y = e.item_tpl || null, G = e.null_tpl || null, Q = e.soft_filter || !1, K = e.need_invalid_keys || !1, J = e.top_len || 10, tt = e.load_limit || !1, B = e.onLoaded || !1, H = e.onFiltered || !1, N = e.onRendered || !1, O = e.onFocusChanged || !1, nt = e.al_need || !1, $ = !nt && e.init_offset || 0, it = e.global_search || !1, I = e.no_search_query || !1);
                var t = null;
                M && E && A && Y && (et = M !== !0 && (!tt || c(D) < tt), y(A, "focus", function (e) {
                    var n = function i(n) {
                        !n && ct(A, e, !0), t = setTimeout(i, 100)
                    };
                    clearTimeout(t), O && O.call({q: F}, !0), n(!0)
                }), y(A, "keydown keypress change blur", function (e) {
                    "blur" == e.type && (clearTimeout(t), O && O.call({q: F}, !1)), ct(A, e, "keydown" != e.type && "keypress" != e.type)
                }), e._new || x && !b(x, "onclick") && b(x, "onclick", "return qsearch.go(event);"), !nt || z && e.init_once || (at = J, rt = c(D), k(function () {
                    var e = d("_si_container", E) || E, t = e.childNodes;
                    return t[at] || t[t.length - 1]
                }, function () {
                    var e = d("_si_container", E) || E;
                    if (!ot && !F) if (at + J > rt && et) ot = !0, f(e, "_si_container_loading"), C.post(T, {
                        _ajax: 1,
                        offset: rt
                    }, {
                        onDone: function (t, n) {
                            B && B.apply(null, arguments);
                            var i = c(t);
                            if (ot = !1, u(e, "_si_container_loading"), tt || (L = L.slice(0, rt).concat(n)), rt += i, D = l(t, D), et = M !== !0 && (!tt && i || c(D) < tt), !F) {
                                at += J;
                                for (var a = [], r = 0, o = Math.min(at, L.length); o > r; r++) a.push([L[r]]);
                                ft(a, q._), s()
                            }
                        }, onFail: function () {
                            ot = !1, u(e, "_si_container_loading")
                        }
                    }); else if (at < L.length) {
                        at += J;
                        for (var t = [], n = 0, i = Math.min(at, L.length); i > n; n++) t.push([L[n]]);
                        ft(t, q._), s()
                    }
                })), !e.skip_init_filter && ct(A, null, !0), z = !0)
            }
        }), e && this.init(e)
    }

    var T = new S;
    window.QuickSearch = S, window.qsearch = T
}, function (e, t, n) {
    var i = n(59), a = r(i);

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var o = window, s = o.geByClass1, l = o.gpeByClass, c = o.preventEvent, u = "sendMoneyForm",
        d = "sendMoneyForm_error_min", f = "sendMoneyForm_error_max", p = "sendMoneyForm__input";
    a["default"]._onAmountKeyDown(function (e, t) {
        setTimeout(function () {
            var e = parseInt(t.value, 10) || "", n = Number(e), i = l(u, t), a = i.getAttribute("data-max-amount");
            t.value = e, n > a ? attr(i, "class", u + " " + f) : attr(i, "class", u)
        })
    }), a["default"]._onSubmit(function (e, t) {
        var n = s(p, t), i = Number(n.value), a = n.value, r = t.getAttribute("data-min-amount"),
            o = t.getAttribute("data-max-amount"), l = void 0;
        r > i || !a || a !== i.toString() ? (attr(t, "class", u + " " + d), l = !0) : i > o && (l = !0), l && (c(e), stopEvent(e))
    })
}, function () {
    Object.assign(Msg, {
        onClick: befall("msgId"), onRestoreClick: befall("msgId"), destroy: function (e) {
            return $(".msg_id_" + e).outerHTML = ""
        }, getElem: function (e) {
            return $(".msg_id_" + e)
        }, remove: n, spam: i, restore: r, unselectAll: o, toggleImportant: l, markAsRead: s
    }), function () {
        Msg._onClick = c, Msg._onTouchStart = u, Msg._onRestoreClick = t
    }();
    var e = !1;

    function t(e, t) {
        e.stopPropagation(), t = parseInt(t, 10), Msg.onRestoreClick(t)
    }

    function n(e) {
        a(e, !1)
    }

    function i(e) {
        a(e, !0)
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1, n = Msg_renderRestoreInner(e);
        $$(".msg_id_" + e).forEach(function (e) {
            e.$(".msg__restore").innerHTML = n, e.classList.remove("msg_selected"), e.classList.add("msg_removed"), e.classList.toggle("msg_spam", t)
        })
    }

    function r(e) {
        $$(".msg_id_" + e).forEach(function (e) {
            e.classList.remove("msg_removed"), e.classList.remove("msg_spam")
        })
    }

    function o() {
        $$(".msg_selected").forEach(function (e) {
            return e.classList.remove("msg_selected")
        })
    }

    function s(e) {
        $$(".msg_id_" + e).forEach(function (e) {
            return e.classList.remove("msg_unread")
        })
    }

    function l(e, t) {
        [].concat(e).forEach(function (e) {
            var n = $(".msg_id_" + e);
            n && n.classList.toggle("msg_important", t)
        })
    }

    function c(t, n, i) {
        for (var a = t.target; a !== n;) {
            if ("A" === a.tagName || a.getAttribute("onclick") || a.classList.contains("im_msg_audiomsg")) return;
            a = a.parentElement
        }
        e ? e = !1 : d() || n.classList.contains("msg_removed") || n.classList.contains("msg_spam") || (n.classList.toggle("msg_selected"), Msg.onClick(i))
    }

    function u() {
        d() && (e = !0)
    }

    function d() {
        return window.getSelection().toString().length > 0
    }
}, function () {
    Object.assign(MailHat_main, {
        onBurgerClick: befall(),
        onCancelForwardTap: befall(),
        setFolder: e,
        setUnreadCount: t,
        setImportantCount: n,
        setForwarding: i
    }), Object.assign(MailHat_convo, {onBackTap: befall(), setOnline: a, setMobile: r});

    function e(e) {
        $$(".mailHat__folder").forEach(function (t) {
            Unfold.setActive(t, e)
        })
    }

    function t(e) {
        $$(".mailHat_type_main").forEach(function (t) {
            var n = t.$(".mailHat__unread"), i = t.$(".mailHat__unreadCount");
            n.classList.toggle("mailHat__unread_hasUnread", e > 0), i.outerHTML = MailHat__unreadCount(e)
        })
    }

    function n(e) {
        $$(".mailHat__folder").forEach(function (t) {
            Unfold.setCount(t, "important", e)
        })
    }

    function i(e) {
        $$(".mailHat_type_main").forEach(function (t) {
            return t.classList.toggle("mailHat_forwarding", e)
        })
    }

    function a(e, t) {
        var n = MailHat_getOnlineText(e, t);
        $$(".mailHat__convoDetailsText").forEach(function (e) {
            return e.innerText = n
        })
    }

    function r(e) {
        $$(".mailHat__convo").forEach(function (t) {
            return t.classList.toggle("mailHat__convo_mobile", e)
        })
    }
}, function (e, t, n) {
    (function () {
        var e = window, t = e.se, n = e.ce, i = e.attr, a = e.append, r = e.ge, o = e.each, s = e.addEvent,
            l = e.removeEvent, c = e.remove, u = e.unlockButton, d = e.setDocumentDomain, f = e.lockButton,
            p = e.checkNav, _ = e.cancelEvent, m = e.checkEvent, h = e.getHref, v = e.extend, g = e.stopEvent,
            w = e.tag, y = e.gpeByTag, b = e.obj2qs, k = e.scrollToHash, M = e.addClass, C = e.hasClass, S = e.qs2obj,
            T = e.copy, E = window, A = E.ajax, x = function () {
                var e = !(!window.history || !history.pushState), E = null, P = t(function () {
                    return E
                }), I = [], B = 7, H = !1, N = 30;

                function O() {
                    document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
                }

                function L(e, t, n) {
                    for (var i = I.length - 1; i >= 0; --i) if (I[i].h == e || I[i].a == e) return void(I[i] = {
                        h: e,
                        d: t,
                        a: n
                    });
                    I.push({h: e, d: t, a: n}), I.length > B && I.shift()
                }

                function D(e) {
                    for (var t = I.length - 1; t >= 0; --t) if (I[t].h == e || I[t].a == e) return I = I.slice(0, t + 1), I[t].d;
                    return !1
                }

                function j(e) {
                    var t;
                    if (t = /^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(e)) {
                        if (t[1] != location.protocol) return !1;
                        if (t[2] && t[2] != location.hostname) return !1;
                        if (t[3] && t[3] != location.port) return !1;
                        e = t[4]
                    }
                    return e
                }

                function q(e) {
                    var t = n("iframe");
                    i(t, "id", "upload_iframe"), i(t, "name", "upload_iframe"), i(t, "width", "0"), i(t, "height", "0"), i(t, "border", "0"), i(t, "style", "width:0;height:0;border:none;position:absolute;left:-1000px;"), a(t, e.parentNode), window.frames.upload_iframe.name = "upload_iframe", t = r("upload_iframe");
                    var p = !1;
                    return o(e, function (e, t) {
                        return "submit" === t.type ? (p = t, !1) : void 0
                    }), s(t, "load", function _() {
                        l(t, "load", _), setTimeout(function () {
                            c(t), u(p)
                        }, 2e3)
                    }), d(), i(e, "target", "upload_iframe"), i(e, "method", "post"), i(e, "enctype", "multipart/form-data"), i(e, "encoding", "multipart/form-data"), a(n("input", {
                        type: "hidden",
                        id: "__extra",
                        name: "__extra",
                        value: 1
                    }), e), e.submit(), f(p), setTimeout(function () {
                        c("__extra")
                    }, 0), !1
                }

                function R(e, t) {
                    var n = window, i = n.al;
                    if (!window.al || !i.ver) return !0;
                    var a = p(t.target, {skip_onclick: !0, skip_clicable: !0});
                    return a ? !0 : e === !1 ? !1 : (x.go(e, t) || _(t), !1)
                }

                function z(e, t, i) {
                    if (!i) return !0;
                    if (m(t)) return !0;
                    c("app_go_frame");
                    var a = h(e), r = n("iframe", {
                        id: "app_go_frame", src: i, onload: function () {
                            c("app_go_frame"), a && x.hard_go(a)
                        }
                    }, {display: "none"});
                    return window.bodyNode.appendChild(r), !1
                }

                function F(e, t, n) {
                    return m(t) ? !0 : n && n.push_only ? !0 : (n && n.replace ? location.replace(e) : e && (location.href = h(e)), !0)
                }

                function U(e, t, n) {
                    var i = window, a = i.al;
                    _(t);
                    var r = h(e);
                    if (window.al && a.ver) {
                        if (n && n.push_only) return !0;
                        if (A.nav(r, n)) return O(), !0
                    }
                    F(r, t, n)
                }

                function W(t, n, a) {
                    var r, s;
                    if (t && t.href && t.getAttribute && t.getAttribute("data-change-location-with-post-away")) {
                        s = t.href, r = et(t);
                        var l = {};
                        return r.post_id && (l.post = r.post_id, r.ad_data && (l.post_ad_data = r.ad_data), s = "/away.php?to=" + encodeURIComponent(s) + "&" + b(l).substr(1)), F(s, n, a), !1
                    }
                    if (x.onBeforeGo(t, n, a)) return !1;
                    if (a = v({no_push: !1, push_only: !1, replace: !1}, a), m(n)) return !g(n);
                    if (!t) return !0;
                    e && (a.no_push || a.need_restore) && (H = !1);
                    var c = t, u = "", d = "", f = "";
                    !t.href && t.getAttribute && (c = t.getAttribute("data-href"));

                    function p(e) {
                        return "a" === w(e) ? e : y("a", e)
                    }

                    var h = n && p(n.target) || t && t.tagName && p(t);
                    if (("input" == w(t) || "button" == w(t)) && ("submit" == t.type || "image" == t.type) && t.form) {
                        if (t.disabled) return !0;
                        var T = t.form, E = {}, A = T.action || "", P = !1;
                        if (o(T, function (e, n) {
                                return !n.name || n.disabled ? !0 : ("radio" !== n.type || n.checked) && ("checkbox" !== n.type || n.checked) ? "button" === n.type ? !0 : "submit" === n.type && n !== t ? !0 : "image" === n.type && n !== t ? !0 : "file" === n.type ? (P = !0, !1) : void(E[n.name] = n.value) : !0
                            }), "image" == t.type && (E[t.name] = t.value, E[t.name + ".x"] = 1, E[t.name + ".y"] = 1), P || "multipart/form-data" == i(T, "enctype")) return q(T);
                        if (!(c = j(A))) return !0;
                        T.method && "get" != T.method ? a.params = E : c = c.split("?", 1).shift() + b(E)
                    }
                    if ("string" != typeof c) {
                        if (!c) return !0;
                        u = c.pathname, "/" !== u.substr(0, 1) && (u = "/" + u), d = c.search.substr(1), f = c.hash, c = u + c.search + f
                    } else {
                        var I = c.split("#"), B = I.shift();
                        f = I.length ? "#" + I.join("#") : "", B = B.split("?"), u = B.shift(), d = B.join("?"), !f && !d || u || (u = x.path, B || (d = x.params), c = u + (d ? "?" + d : "") + f)
                    }
                    var N = S(d);
                    r = et(h, !!N._post_click_type);

                    function O(e, t, n) {
                        var i = n && N[t];
                        return !e || i ? !1 : (N[t] = e, !0)
                    }

                    if (O(r.post_id, "_post", !0), O(r.post_click_type, "_post_click_type", !0), N._post_click_type && O(r.ad_data, "_post_ad_data", !0) && O(r.ad_block_unique_id, "_post_ad_block_unique_id"), window.isNewMail && x.onBeforeGo4(u, N)) return !1;
                    if (0 !== location.pathname.indexOf("/app") && 0 === u.indexOf("/app") && N && N.act && "app_r" === N.act) return n ? !0 : (F(t, n, a), !1);
                    if (d = b(N).substr(1), n && c.split("#").shift() == x.cur.split("#").shift() && f && !a.force && (k(f), a.push_only = !0), a.no_push && x.cur == c && !a.force) return !1;
                    if (a.push_only) return Y(v(a, {nav: {push: c, path: u, params: d, hash: f}})), !1;
                    if (M("active", a.link || t), C("al_back", t)) {
                        var L = N.act;
                        a.need_restore = window.isNewMail && "/mail" === location.pathname && !L || "show" === L && !geByClass1("messenger") ? !1 : !0
                    }
                    var D = $(v(a, t.tagName ? {target: t} : {}, {nav: {push: c, path: u, params: d, hash: f}}));
                    return D || _(n), D
                }

                function $(e) {
                    var t = window, n = t.cur, i = window, a = i.menu, r = S(e.nav.params), o = S(x.params);
                    if ((o.z || r.z) && o.z != r.z) {
                        if (x.path == e.nav.path) {
                            var s = T(r), l = T(o);
                            if (delete s.z, delete l.z, s = b(s), l = b(l), s == l) return V(r.z, !1, e), Y(e), a.close(null, !0), !1
                        }
                        e.zProcess = function (t, n) {
                            V(r.z, t, v({}, e, {no_push: !0}), n)
                        }
                    }
                    return e.onPreNav = function () {
                        e.zProcess && (e.zProcess(), delete e.zProcess)
                    }, !e.ignore_cur_process && n.processNav && n.processNav(e) ? (Y(e), a.close(null, !0), !1) : (U(e.nav.push, null, e), !1)
                }

                function V(e, t, n, i) {
                    var a, r = window, o = r.photo, s = window, l = s.zlayer;
                    if (e && (a = /^photo(-?\d+_\d+)(?:\/([a-z0-9_-]+(\/rev)?)?)?$/i.exec(e))) {
                        if (i === !0) return !1;
                        var c = a[1] || "", u = a[2] || "";
                        return o.zopen(!1, null, c, u, {no_push: (n || {}).no_push}), l && t !== !1 && "undefined" != typeof t && (l._st = t), !0
                    }
                    return i === !1 ? !1 : (l && l.close(), !0)
                }

                function X(t, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (e) t = "/" == t.substr(0, 1) ? t : "/" + t, window.isNewMail ? n.replace ? history.replaceState(i, null, t) : history.pushState(i, null, t) : n.replace ? history.replaceState(null, null, t) : history.pushState(null, null, t); else {
                        var a = "/" == t.substr(0, 1) ? t : "/" + t, o = "#" + a,
                            s = location.pathname + location.search + o;
                        r("base").href = a, n.replace ? location.replace(s) : (E = o, location.href = s)
                    }
                }

                function Y(t) {
                    if (!t.no_push && x.cur != t.nav.push) try {
                        window.isNewMail ? X(t.nav.push, t, t.historyState) : X(t.nav.push, t), e && !t.no_push && (t.nav_init || t.nav_incr) ? (t.nav_init && (H = 0), t.nav_incr && H !== !1 && H++, H > N && (H = !1)) : H = !1
                    } catch (n) {
                        return F(t.nav.push, null, t)
                    }
                    x.cur = t.nav.push, x.path = t.nav.path, x.params = t.nav.params, x.hash = t.nav.hash, 0 !== x.path.indexOf("/") && (x.path = "/" + x.path)
                }

                function G() {
                    var e = location.hash || "";
                    E !== e && (E = e, P(!0)), setTimeout(G, 100)
                }

                function Q() {
                    var e = H;
                    return e && history.go(-e), H = !1, e ? !0 : !1
                }

                if (e) s(window, "popstate", function (e) {
                    return window.isNewMail && x.onPopState() ? (preventEvent(e), void g(e)) : void W(location, null, {
                        no_push: !0,
                        need_restore: !0
                    })
                }); else {
                    var K = location.hash || "";
                    "#/" == K.substr(0, 2) && F(K.substr(1), null, {replace: !0});
                    var J = function (e) {
                        e = (e || "").substr(1), e && "/" == e.substr(0, 1) || (e = location), W(e, null, {
                            no_push: !0,
                            need_restore: !0
                        })
                    };
                    "onhashchange" in window ? s(window, "hashchange", function () {
                        J(location.hash || "")
                    }) : (G(), P(function (e) {
                        J(e)
                    }))
                }

                function Z() {
                    var e = S(x.params);
                    e.z && V(e.z)
                }

                function et(e, t) {
                    var n = !(!e || !e.getAttribute), i = {};
                    if (!n) return i;
                    var a = n && e.getAttribute("data-post-id");
                    a && (i.post_id = a);
                    var r = n && e.getAttribute("data-post-click-type");
                    r && (i.post_click_type = r);
                    var o = !!r || t;
                    if (o) {
                        var s = gpeByClass("_ads_promoted_post_data_w", e), l = s && s.getAttribute("data-ad"),
                            c = s && s.getAttribute("data-ad-block-uid");
                        l && (i.ad_data = l), c && (i.ad_block_unique_id = c)
                    }
                    return i
                }

                var tt = (location.pathname || "").replace(/^\/+/, "/"), nt = location.search || "",
                    it = location.hash || "";
                return {
                    onBeforeGo: befall(),
                    onBeforeGo2: befall("path", "queryObject", "fullUrl", "opts"),
                    onBeforeGo3: befall(),
                    onBeforeGo4: befall("path", "queryObject"),
                    onPopState: befall(),
                    go: W,
                    al_go: U,
                    app_go: z,
                    hard_go: F,
                    go_after: R,
                    page_set: L,
                    page_get: D,
                    set: Y,
                    checkUrl: j,
                    tryHistoryBack: Q,
                    zInit: Z,
                    getPostParams: et,
                    cur: tt + nt + it,
                    path: tt,
                    params: nt.substr(1),
                    hash: it,
                    clear: function () {
                        return I = []
                    },
                    getQuery: function (e) {
                        var t = S(x.params);
                        return e ? t[e] || null : t
                    }
                }
            }();
        window.nav = x
    }).call(t, n(76))
}, function () {
    Object.assign(MailScrap, {
        updateClass: v,
        clearSystemMessage2: k,
        onSystemMessageClick: b,
        resetPrevScraps: p,
        redrawFolder: y,
        redrawSearch: w,
        redrawSystemMessage: g,
        folderSetItems: u,
        folderAddItems: f,
        folderCutItems: d,
        peerAddItemsBefore: o,
        peerAddItemsAfter: s,
        peerReplaceItems: l,
        peerSetItems: a,
        peerGoToBottom: n,
        removeDivider: t
    }), uVK.onReady(function () {
        if (store.mail && store.mail.scraps) {
            var t = store.mail.scraps;
            e.folder = t.folder.slice(), e.search = t.search.slice(), e.peer = t.peer.slice()
        }
    });
    var e = {folder: [], search: [], peer: []};

    function t() {
        remove($(".msg__newMsgsDivider"))
    }

    function n() {
        var e = Messenger.getConvoBody();
        e.scrollTop = e.scrollHeight
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        e = e.filter(unique);
        var n = store.mail, i = n.cur, a = n.msgs, r = !1, o = void 0;
        return e.map(function (e, n) {
            var s = a[e];
            return n > 0 && !r && !t && !$(".msg__newMsgsDivider") && !o.isUnread && s.isUnread && s.authorId !== i.viewerId ? (o = s, r = !0, MailScrap_Item("peer", e, !0)) : (o = s, MailScrap_Item("peer", e))
        }).join("")
    }

    function a(e) {
        e = e.filter(unique), $$(".mailScrap__items_peer").forEach(function (t) {
            return t.innerHTML = i(e)
        })
    }

    var r = !1;
    document.addEventListener("touchstart", function () {
        return r = !0
    }), document.addEventListener("touchend", function () {
        return r = !1
    });

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        v("peer"), e = e.filter(unique).filter(function (e) {
            return !$(".msg_id_" + e)
        });
        {
            var n = Messenger.getConvoBody();
            n.scrollHeight - n.scrollTop - n.offsetHeight
        }
        window._preventedCheckTop = !0, setTimeout(function () {
            return window._preventedCheckTop = !1
        });
        var a = i(e, t), r = '\n    <div class="load_before load_before_closed">\n      ' + a + "\n    </div>\n  ";
        $$(".mailScrap__items_peer").forEach(function (e) {
            return e.insertAdjacentHTML("afterbegin", r)
        }), uMessenger.expandPeerBefore()
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        e = e.filter(unique).filter(function (e) {
            return !$(".msg_id_" + e)
        }), $$(".mailScrap__items_peer").forEach(function (n) {
            n.insertAdjacentHTML("beforeend", i(e, t))
        }), v("peer")
    }

    function l(e) {
        e.forEach(function (t) {
            return $(".msg_id_" + t).outerHTML = i(e, !0)
        })
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
        return e = e.filter(unique), e.map(function (e) {
            return $(".mailScrap__items_folder .convo_id_" + e) && !t ? "" : MailScrap_Item("folder", e)
        }).join("")
    }

    function u(e) {
        $$(".mailScrap__items_folder").forEach(function (t) {
            return t.innerHTML = c(e, !0)
        }), $$(".mailScrap_folder").forEach(function (e) {
            return e.className = MailScrap_class("folder")
        }), $$(".mailScrap__empty_folder").forEach(function (e) {
            return e.innerHTML = MailScrap_EmptyInner("folder")
        })
    }

    function d(e) {
        $$(".mailScrap_folder .mailScrap__items").forEach(function (t) {
            var n = [].slice.call(t.children);
            n.slice(e).forEach(function (e) {
                return t.removeChild(e)
            })
        })
    }

    function f(e) {
        $$(".mailScrap__items_folder").forEach(function (t) {
            return t.insertAdjacentHTML("beforeend", c(e))
        })
    }

    function p() {
        e = {folder: [], search: [], peer: []}
    }

    function _(e, t, n) {
        m($(".mailScrap__items_" + e), function (t) {
            return MailScrap_Item(e, t)
        }, t, n)
    }

    function m(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, a = [];
        return i || (e.innerHTML = "", i = []), 0 === n.length ? void(e.innerHTML = "") : (n.forEach(function (n, a) {
            var r = i.indexOf(n);
            -1 === r ? (i.splice(a, 0, n), domInsert(e, t(n), a)) : r !== a && (i.splice(r, 1), i.splice(a, 0, n), before(e.children[r], e.children[a]))
        }), i.forEach(function (t, i) {
            -1 === n.indexOf(t) && a.push(e.children[i])
        }), void a.forEach(remove))
    }

    function h() {
        var e = store.mail, t = e.cur, n = e.peers;
        n[t.peerId].systemMessageCode = null, v("peer"), g()
    }

    function v(e) {
        return void $$(".mailScrap_" + e).forEach(function (t) {
            return t.className = MailScrap_class(e)
        })
    }

    function g() {
        $$(".mailScrap__systemMessage").forEach(function (e) {
            e.innerHTML = MailScrap_SystemMessageInner()
        })
    }

    function w() {
        $$(".mailScrap__items_search").forEach(function (e) {
            return e.innerHTML = MailScrap_ItemsInner("search")
        }), $$(".mailScrap_search").forEach(function (e) {
            return e.className = MailScrap_class("search")
        }), $$(".mailScrap__empty_search").forEach(function (e) {
            return e.innerHTML = MailScrap_EmptyInner("search")
        })
    }

    function y(e) {
        {
            var t = store.mail, n = t.cur, i = t.scraps;
            n.folder
        }
        _("folder", i.folder, e), $$(".mailScrap_folder").forEach(function (e) {
            return e.className = MailScrap_class("folder")
        }), $$(".mailScrap__empty_folder").forEach(function (e) {
            return e.innerHTML = MailScrap_EmptyInner("folder")
        })
    }

    function b() {
        h()
    }

    function k() {
        remove(geByClass1("service_msg_box"))
    }
}, function () {
    var e, t = window, n = t.qs2obj, i = t.preventEvent, a = t.im, r = t.nav, o = t.toggle, s = t.attr, l = t.ge,
        c = t.val, u = t.geByClass1, d = t.removeClass, f = t.show, p = t.hide, _ = t.qsearch, m = t.browser,
        h = t.toggleClass, v = t.intval, g = t.mail;

    function w() {
        return n(r.params)
    }

    function y(e) {
        return "dialogs" === e.tab || !e.q
    }

    function b(e) {
        var t = r.getQuery("community");
        return t ? (e ? "?" : "&") + "community=" + t : ""
    }

    a.clearSearchInput = function (e) {
        if (i(e), y(w())) {
            var t = l("ma_search_field");
            c(t, ""), a.onFilterKeyDown(t)
        } else r.go("/mail" + b(!0))
    }, a.onFilterKeyDown = function (t) {
        setTimeout(function () {
            var n = window, i = n.lang, a = encodeURIComponent(t.value), _ = w();
            if (o(u("mail_search_clear_button"), a), s(u("tab_dialogs_search"), "href", a ? "/mail?tab=dialogs&q=" + a + b() : "/mail" + b(!0)), s(u("tab_messages_search"), "href", "/mail?q=" + a + b()), y(_)) {
                var m, g = l("mail_tabs"), k = l("ma_search_items"), M = l("dialogs"), C = _.offset;
                if (d("mail_show_filtered", u("mail")), e && clearTimeout(e), h("dialogs_filter_without_important", l("dialogs_filter"), a || 0 === v(c(u("dialogs_filter_button_important")))), a) f(g), f(k), p(M), e = setTimeout(function () {
                    m = "/mail?tab=dialogs&q=" + a + (C ? "&offset=" + C : "") + b(), "/mail" !== r.path || w().act || r.go(m, null, {push_only: !0})
                }, 200); else {
                    if (p(g), p(k), f(M), !r.getQuery("community")) {
                        var S = u("mhb_back"), T = u("mh_header");
                        c(T, i.mobile_mail_head_title), d("mhi_back", T), S.outerHTML = S.outerHTML.replace("<a", "<div").replace("</a>", "</div>")
                    }
                    m = "/mail" + (C ? "?offset=" + C : "") + b(C ? !1 : !0), r.go(m, null, {push_only: !0})
                }
            }
        }, 40)
    };

    function k() {
        var e = window, t = e.lang;
        _.init({
            init_once: !0,
            action: "/mail?act=write&fast=1",
            container: l("ma_search_items"),
            field: l("ma_search_field"),
            btn: l("ma_search_btn"),
            top_items: [],
            _cache: {},
            item_tpl: function (e, t, n, i, a) {
                return this.id > 2e9 || -1 === this.id ? '<a href="' + (e || "") + '" class="simple_item' + (-1 == this.id ? " simple_item_create" : "") + '">' + (t || "") + '<div class="si_body"><span class="si_owner">' + this.highlight(n || "") + "</span>" + (i || "") + (a ? '<div class="si_slabel">' + a + "</div>" : "") + "</div></a>" : '<a href="' + (e || "") + '" class="inline_item"><div class="ii_body">' + (t || "") + '<span class="ii_owner">' + this.highlight(n || "") + "</span>" + (i || "") + "</div></a>"
            },
            null_tpl: function () {
                return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + t.mobile_mail_no_peers + "</div></div>"
            },
            need_invalid_keys: m.desktop,
            onLoaded: function (e) {
                for (var t in e) g.saveDialog(e[t][e[t].length - 1], t)
            }
        })
    }

    g.onShowWritePageFromCache(k), g.onShowDialogsPageFromCache(k)
}, function () {
    window.q = {}
}, function () {
    var e = window, t = e.cancelEvent, n = e.gpeByClass, i = e.geByClass1, a = e.getY, r = e.getX, o = e.getW,
        s = e.addClass, l = e.append, c = e.tooltip, u = e.addEvent, d = e.removeClass, f = e.removeEvent, p = e.before,
        _ = e.remove, m = e.clone, h = e.setStyle, v = e.each, g = e.getStyle, w = function () {
            var e = "ai_menu_opened", w = void 0, y = void 0, b = !1;

            function k(e) {
                w = n("ai_menu_wrap", e), y = i("ai_menu", w)
            }

            function M(e) {
                return e.getBoundingClientRect().top
            }

            function C(e) {
                for (var t = !1; e;) {
                    var n = g(e, "overflow-y");
                    if (("scroll" === n || "auto" === n) && e.offsetHeight < e.scrollHeight) {
                        t = !0;
                        break
                    }
                    e = e.parentElement
                }
                return {cursor: e, isOverflowYContainer: t}
            }

            function S() {
                if (w && y) {
                    var e = i("i_pointer", w);
                    window.isNewMail && C(e).isOverflowYContainer ? h(y, "top", M(e)) : h(y, "top", a(e)), h(y, "left", r(e) - o(y))
                }
            }

            function T() {
                if (y) {
                    var e = geByClass("wia_item", y);
                    e && v(e, function (e, t) {
                        var n = m(t);
                        p(n, t), _(t), s("unhover", n), setTimeout(function () {
                            d("unhover", n)
                        }, 100)
                    })
                }
            }

            function E(e) {
                e && "A" === e.target.tagName && requestAnimationFrame(function () {
                    S()
                })
            }

            function A(t) {
                if (k(t), s(e, w), l(y, document.body), b = x, c.addHandler(b), c.show(w, y), u(window, "resize", S), u(y, "click", E), window.isNewMail) {
                    var n = i("i_pointer", w), a = C(n);
                    a.isOverflowYContainer && u(a.cursor, "scroll", S)
                }
                S()
            }

            function x() {
                d(e, w), l(y, w), c.removeHandler(b), c.hide(), f(window, "resize", S), f(y, "click", S)
            }

            return {
                toggleMenu: function (n, i) {
                    t(n), hasClass(e, w) ? x() : A(i)
                }, update: function () {
                    T(), S()
                }
            }
        }();
    window.ActionMenu = w
}, function () {
    Object.assign(window, {domInsert: e});

    function e(e, n, i) {
        var a = "string" == typeof n ? t(n) : n;
        i >= 0 && e.children[i] ? e.insertBefore(a, e.children[i]) : e.appendChild(a)
    }

    function t(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.children[0]
    }
}, function () {
    function e(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    window.Avatar = t;

    function t(t) {
        var a, r = t.photos, o = r.length, s = "";
        if (o > 1) for (var l = 0; o > l; l++) s += n(r[l], l);
        return Brick({
            mix: q["class"](t.mix, "avatar", (a = {}, e(a, o, !0), e(a, "size", t.size), a)),
            url: t.url,
            attrs: 1 === o ? i(r[0]) : "",
            inner: s
        })
    }

    function n(t, n) {
        return Brick({mix: q["class"]("avatar__image", e({}, n, !0)), attrs: i(t)})
    }

    function i(e) {
        return q.attr("style", "background-image : url('" + e + "')")
    }
}, function () {
    window.$ = document.querySelector.bind(document), window.$$ = document.querySelectorAll.bind(document), HTMLElement.prototype.$ = HTMLElement.prototype.querySelector, HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll
}, function () {
    var e = t(['\n    <div class="', '" ', " ", ">\n      ", "\n      ", '\n      <a class="convo__body" href="', '">\n        <div class="convo__row convo__row_title">\n          <div class="convo__title">', "</div>\n          ", '\n          <div class="convo__date">', '</div>\n        </div>\n        <div class="convo__row convo__row_text">\n          <div class="convo__typing">', '</div>\n          <div class="convo__text">', "</div>\n          ", '\n          <div class="convo__unreadOut"></div>\n        </div>\n      </a>\n    </div>\n  '], ['\n    <div class="', '" ', " ", ">\n      ", "\n      ", '\n      <a class="convo__body" href="', '">\n        <div class="convo__row convo__row_title">\n          <div class="convo__title">', "</div>\n          ", '\n          <div class="convo__date">', '</div>\n        </div>\n        <div class="convo__row convo__row_text">\n          <div class="convo__typing">', '</div>\n          <div class="convo__text">', "</div>\n          ", '\n          <div class="convo__unreadOut"></div>\n        </div>\n      </a>\n    </div>\n  ']);

    function t(e, t) {
        return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
    }

    Object.assign(window, {Convo: n, Convo__online: i});

    function n(t) {
        var n = t.more, a = "", r = "", o = 0, s = !1, l = "";
        n && (a = n.text, r = n.date, o = n.unreadCount, s = n.muted, l = n.typingNames && n.typingNames.length ? Typing({typing: n.typingNames}) : "");
        var c = q["class"]("clickable", "convo", {
                id: t.id,
                "short": !n,
                last: t.isLast,
                typing: !!(n && n.typingNames && n.typingNames.length > 0),
                important: t.important,
                unread: t.isLast && o > 0,
                unreadOut: t.isLast && 0 > o
            }), u = Avatar({mix: "convo__avatar", photos: t.photos, url: t.profileUrl}),
            d = t.isLast ? Oval({mix: "convo__unread", value: o, gray: s}) : "", f = i(t.online),
            p = Icon({mix: "convo__star", icon: "star", blue: !0}), _ = t.url,
            m = q.onMouseDown("Convo._onMouseDown", "event", _), h = q.onClick("Convo._onClick", "event", _);
        return q.html(e, c, m, h, f, u, t.url, t.title, p, r, l, a, d)
    }

    function i(e) {
        return "mobile" === e ? Icon({
            mix: q["class"]("convo__online", {mobile: !0}),
            icon: "phone"
        }) : Brick("desktop" === e ? {mix: q["class"]("convo__online", {desktop: !0})} : {mix: "convo__online"})
    }
}, function () {
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
        setTimeout(e)
    })
}, function () {
    Function.prototype.bind || (Function.prototype.bind = function (e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), n = this, i = function () {
        }, a = function () {
            return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (i.prototype = this.prototype), a.prototype = new i, a
    })
}]);
/*531*/
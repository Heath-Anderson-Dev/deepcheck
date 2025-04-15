/* Basic */

! function(i) {
    "use strict";
    var e = function() {
        this.$body = i("body"), this.$wrapper = i("#wrapper"), this.$btnFullScreen = i("#btn-fullscreen"), this.$leftMenuButton = i(".button-menu-mobile"), this.$menuItem = i(".has_sub > a")
    };
    e.prototype.initNicescroll = function() {
        i(".side-menuScroll").niceScroll({
            height: "auto",
            position: "right",
            scrollspeed: 40,
            cursorcolor: "#ddd",
            cursorwidth: "8px"
        })
    }, e.prototype.initLeftMenuCollapse = function() {
        var t = this;
        this.$leftMenuButton.on("click", function(e) {
            e.preventDefault(), t.$body.toggleClass("fixed-left-void"), t.$wrapper.toggleClass("side-menu-mob")
        })
    }, e.prototype.initComponents = function() {
        i('[data-toggle="tooltip"]').tooltip(), i('[data-toggle="popover"]').popover()
    }, e.prototype.initFullScreen = function() {
        this.$btnFullScreen.on("click", function(e) {
            e.preventDefault(), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        })
    }, e.prototype.initMenu = function() {
        var n = this;

        function o() {
            var e = i(document).height();
            e > i(".body-content").height() && i(".body-content").height(e)
        }
        n.$menuItem.on("click", function() {
            var e = i(this).parent(),
                t = e.find("> ul");
            return n.$body.hasClass("sidebar-collapsed") || (t.is(":visible") ? t.slideUp(300, function() {
                e.removeClass("nav-active"), i(".body-content").css({
                    height: ""
                }), o()
            }) : (i(".has_sub").each(function() {
                var e = i(this);
                e.hasClass("nav-active") && e.find("> ul").slideUp(300, function() {
                    e.removeClass("nav-active")
                })
            }), e.addClass("nav-active"), t.slideDown(300, function() {
                o()
            }))), !1
        })
    }, e.prototype.init = function() {
        this.initNicescroll(), this.initLeftMenuCollapse(), this.initComponents(), this.initFullScreen(), this.initMenu(), this.activateMenuItem()
    }, i.MainApp = new e, i.MainApp.Constructor = e
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.MainApp.init()
}();


/* Dropify */


$(document).ready(function() {
    $(".dropify").dropify(), $(".dropify-fr").dropify({
        messages: {
            default: "Glissez-déposez un fichier ici ou cliquez",
            replace: "Glissez-déposez un fichier ou cliquez pour remplacer",
            remove: "Supprimer",
            error: "Désolé, le fichier trop volumineux"
        }
    });
    var e = $("#input-file-events").dropify();
    e.on("dropify.beforeClear", function(e, r) {
        return confirm('Do you really want to delete "' + r.file.name + '" ?')
    }), e.on("dropify.afterClear", function(e, r) {
        alert("File deleted")
    }), e.on("dropify.errors", function(e, r) {
        console.log("Has Errors")
    });
    var r = $("#input-file-to-destroy").dropify();
    r = r.data("dropify"), $("#toggleDropify").on("click", function(e) {
        e.preventDefault(), r.isDropified() ? r.destroy() : r.init()
    })
});

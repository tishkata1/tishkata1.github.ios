var App = function() {
    function a(a, b, c) {
        c = c || !1, a.addClass("animated"), a.addClass(b), c && (a.css("display", "block"),
            a.css("opacity", "1")), a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            a.removeClass("animated"), a.removeClass(b);
        });
    }
    function b(a) {
        var b = $(window), c = b.scrollLeft(), d = b.scrollTop(), e = a.offset(), f = {
            x1: c,
            y1: d,
            x2: c + b.width(),
            y2: d + b.height()
        }, g = {
            x1: e.left,
            y1: e.top,
            x2: e.left + a.width(),
            y2: e.top + a.height()
        };
        return {
            left: e.left - c,
            top: e.top - d,
            insideViewport: f.x1 < g.x2 && f.x2 > g.x1 && f.y1 < g.y2 && f.y2 > g.y1
        };
    }
    var c, d = function() {
        c = $("#main-line"), e(),  j();
    }, e = function() {
        setTimeout(function() {
            a($(".top .name"), "slideInUp", !0);
        }, 1e3), setTimeout(function() {
            a($(".top .description"), "zoomIn", !0);
        }, 2e3), setTimeout(function() {
            $(".top").addClass("added-image");
        }, 3e3), setTimeout(function() {
            a($("#main-line"), "slideInUp", !0);
        }, 3e3), setTimeout(function() {
            a($("#navigation-about"), "zoomIn");
        }, 3100), setTimeout(function() {
            a($("#navigation-work"), "zoomIn");
        }, 3200), setTimeout(function() {
            a($("#navigation-contacts"), "zoomIn");
        }, 3300);
    }, g = function() {
        var a = (b(c), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
        $(window).scrollTop() > a - c.height() ? c.addClass("fixed") : c.removeClass("fixed");
    };
     $(window).on("scroll", function() {
        g(), h(), f(), i();
    });
    
    return {
        init: d
    };
}();

$(document).ready(function() {
    App.init();
});

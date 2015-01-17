//	Responsive Accordion v1.1, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	============================================================================================
$(document).ready(function () {

    $(".accordion").each(function () {
        $(".minus", this).hide(), $(".accordion-panel", this).hide(), $(".accordion-head", this).click(function () {
            var i = $(this).parent().parent(),
                s = $(this),
                a = s.find(".plus"),
                e = s.find(".minus"),
                n = s.siblings(".accordion-panel");
            i.find(".plus").show(), i.find(".minus").hide(), i.find(".accordion-head").not(this).removeClass("active"), i.find(".accordion-panel").not(this).removeClass("active").slideUp(), s.hasClass("active") ? (s.removeClass("active"), a.show(), e.hide(), n.removeClass("active").slideUp()) : (s.addClass("active"), a.hide(), e.show(), n.addClass("active").slideDown())
        })
    })
});



(function ($) {
    var methods = {
        init: function (o) {
            var templates = [];
            var tds = this.find("tbody td");
            for (var i = 0; i < tds.length; i++) {
                source = $(tds[i]).html();
                templates[i] = Handlebars.compile(source);
            }
            this.find("tbody").remove();

            var settings = $.extend({
                "aoColumnDefs": [{
                        "aTargets": ["_all"],
                        "mData": null,
                        "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                            $(nTd).html(templates[iCol](oData));
                        },
                        "mRender": function (data, type, full) {
                            return "";
                        }         
                    }
                ]
            }, o);

            this.dataTable(settings);
        }
    };

    $.fn.hbsDataTable = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            return false;
        }
    };
})(jQuery);

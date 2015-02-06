/**
 * Created by Administrator on 2015/2/4.
 */
define(["dojo/_base/declare", "dojo/string", "dojo/dom-construct", "dojo/ready", "require", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin", "dojo/text!./dropDown.html"],
    function (declare, string, domConstruct, ready, require, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {
        return declare([ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: template,
            baseClass: "dropDown",
            cssPath: require.toUrl("./dropDown.css"),
            constructor: function () {
                domConstruct.create("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: this.cssPath
                }, document.head || document.getElementsByTagName("head")[0]);
            },
            postCreate: function () {
                this.inherited(arguments);
                var node1 = domConstruct.create("li", {role: "presentation", innerHTML: '<a role="menuitem" tabindex="-1" href="#">Action</a>'});
                this.dropdownMenu.appendChild(node1);
                var node2 = domConstruct.create("li", {role: "presentation", innerHTML: '<a role="menuitem" tabindex="-1" href="#">Another action</a>'});
                this.dropdownMenu.appendChild(node2);
                var node3 = domConstruct.create("li", {role: "presentation", innerHTML: '<a role="menuitem" tabindex="-1" href="#">Something else here</a>'});
                this.dropdownMenu.appendChild(node3);
                ready(function () {
                    /*var template = '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">${name}</a></li>';
                    var liItem=string.substitute(template,{name:"11111111111"});
                    $("#dropdownMenu").append(liItem);*/
                    var template = '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">${0}</a></li>';
                    var liItem=string.substitute(template,["11111111111"]);
                    $("#dropdownMenu").append(liItem);
                });
            }
        });
    });
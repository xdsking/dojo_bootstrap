/**
 * Created by Administrator on 2015/2/3.
 */
define(["dojo/_base/declare","dojo/dom-construct","require", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin", "dojo/text!./navigation.html"],
    function (declare,domConstruct,require, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,template) {
    return declare([ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        baseClass:"navigation",
        cssPath:require.toUrl("./navigation.css"),
        constructor:function(){
            domConstruct.create("link", {
                rel : "stylesheet",
                type : "text/css",
                href : this.cssPath
            }, document.head||document.getElementsByTagName("head")[0]);
        },
        postCreate:function(){
            this.inherited(arguments);
        }
    });
});
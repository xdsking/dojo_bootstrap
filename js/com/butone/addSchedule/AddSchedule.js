/**
 * Created by xuds on 2015/2/4.
 */
define(["dojo/_base/declare", "dojo/dom-construct", "dojo/on", "require", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin", "dojo/text!./addSchedule.html"],
    function (declare, domConstruct, on, require, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {
        return declare([ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            templateString: template,
            baseClass: "addSchedule",
            cssPath: require.toUrl("./addSchedule.css"),
            postCreate: function () {
                this.inherited(arguments);
                domConstruct.create("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: this.cssPath
                }, document.head || document.getElementsByTagName("head")[0]);
                on(this.submit, "click", function () {
                    //序列化表
                    var formList=$("#dataForm").serializeArray();
                    var formObject={};
                    $.each(formList, function () {
                        if (formObject[this.name] !== undefined) {
                            if (!formObject[this.name].push) {
                                formObject[this.name] = [formObject[this.name]];
                            }
                            formObject[this.name].push(this.value || '');
                        } else {
                            formObject[this.name] = this.value || '';
                        }
                    });
                    debugger;
                });
            }
        });
    });
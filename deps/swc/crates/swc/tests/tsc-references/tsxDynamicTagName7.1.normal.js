//// [tsxDynamicTagName7.tsx]
//// [react.d.ts]
//// [app.tsx]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
import * as React from 'react';
export var Text = /*#__PURE__*/ function(_React_Component) {
    "use strict";
    _inherits(Text, _React_Component);
    var _super = _create_super(Text);
    function Text() {
        _class_call_check(this, Text);
        var _this;
        _this = _super.apply(this, arguments);
        _this._tagName = 'div';
        return _this;
    }
    var _proto = Text.prototype;
    _proto.render = function render() {
        return /*#__PURE__*/ React.createElement(this, null) // this should be an error
        ;
    };
    return Text;
}(React.Component);

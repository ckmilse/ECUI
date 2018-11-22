/*
@example
<!-- 以下***表示具体的展现类型 -->
<div ui="type:***"></div>
或
<!-- 以下***表示具体的展现类型 -->
<div ui="type:***">
    <svg>
        <defs>
            <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"/>
                <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"/>
            </linearGradient>
        </defs>
    </svg>
</div>
*/
//{if 0}//
(function () {
    var core = ecui,
        dom = core.dom,
        ui = core.ui;
//{/if}//
    /**
     * SVG基类，请不要直接使用。
     * @control
     */
    ui.SVG = core.inherits(
        ui.Control,
        function (el, options) {
            ui.Control.call(this, el, options);
            this._eSVG = dom.first(el);
            if (this._eSVG) {
                this._eDefs = dom.first(this._eSVG);
            } else {
                el.innerHTML = '<svg></svg>';
                this._eSVG = el.lastChild;
            }
            this._aDrawer = [];
        },
        {
            $dispose: function () {
                this._eSVG = null;
                ui.Control.prototype.$dispose.call(this);
            },

            drawEllipse: function (x, y, rx, ry, className) {
                this._aDrawer.push('<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" class="' + className + '"/>');
            },

            drawLine: function (x1, y1, x2, y2, className) {
                this._aDrawer.push('<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="' + className + '"/>');
            },

            drawRect: function (x, y, width, height, className) {
                this._aDrawer.push('<rect x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" class="' + className + '"/>');
            },

            drawText: function (x, y, text, className) {
                this._aDrawer.push('<text x="' + x + '" y="' + y + '" class="' + className + '">' + text + '</text>');
            },

            render: function () {
                if (this._eDefs) {
                    this._eSVG.removeChild(this._eDefs);
                }
                this._eSVG.innerHTML = this._aDrawer.join('');
                if (this._eDefs) {
                    this._eSVG.insertBefore(this._eDefs, this._eSVG.firstChild);
                }
                this._aDrawer = [];
            }
        }
    );
//{if 0}//
}());
//{/if}//

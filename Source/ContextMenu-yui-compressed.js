(function(a){this.ContextMenu=new Class({Implements:[Options,Events],options:{actions:{},menu:"contextmenu",stopEvent:true,targets:"body",trigger:"contextmenu",offsets:{x:0,y:0},onShow:$empty,onHide:$empty,onClick:$empty,fadeSpeed:200},initialize:function(b){this.setOptions(b);this.menu=a(this.options.menu);this.targets=$$(this.options.targets);this.fx=new Fx.Tween(this.menu,{property:"opacity",duration:this.options.fadeSpeed});this.hide().startListener();this.menu.setStyles({position:"absolute",top:"-900000px",display:"block"});},startListener:function(){this.targets.each(function(b){b.addEvent(this.options.trigger,function(c){if(!this.options.disabled){if(this.options.stopEvent){c.stop();}this.options.element=a(b);this.menu.setStyles({top:(c.page.y+this.options.offsets.y),left:(c.page.x+this.options.offsets.x),position:"absolute","z-index":"2000"});this.show();}}.bind(this));},this);this.menu.getElements("a").each(function(b){b.addEvent("click",function(c){if(!b.hasClass("disabled")){this.execute(b.get("href").split("#")[1],a(this.options.element));this.fireEvent("click",[b,c]);}}.bind(this));},this);a(document.body).addEvent("click",function(){this.hide();}.bind(this));},show:function(){this.fx.start(1);this.fireEvent("show");this.shown=true;return this;},hide:function(){if(this.shown){this.fx.start(0);this.fireEvent("hide");this.shown=false;}return this;},disableItem:function(b){this.menu.getElements("a[href$="+b+"]").addClass("disabled");return this;},enableItem:function(b){this.menu.getElements("a[href$="+b+"]").removeClass("disabled");return this;},disable:function(){this.options.disabled=true;return this;},enable:function(){this.options.disabled=false;return this;},execute:function(c,b){if(this.options.actions[c]){this.options.actions[c](b,this);}return this;}});})(document.id);
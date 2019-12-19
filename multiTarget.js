(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC9900").ss(1,1,1).p("AgdA5IAAgwIAAguQANgRAIgCIAmAAIAAAT");
	this.shape.setTransform(3.3,-9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#CCFF00","#000000"],[0,1],3.6,1.3,0,3.6,1.3,16.5).s().p("AAAB0Qg0AAglgiQglgiAAgwQAAgvAlghQAlgiA0gBIADAAIAAAxIAAgxQAzACAkAhQAlAhAAAvQAAAwglAiQglAig1AAIAAAAgAADhzIAAAAg");
	this.shape_1.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellow, new cjs.Rectangle(-12.7,-15.8,25.4,30.7), null);


(lib.Snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993333").ss(1,1,1).p("AAlAAQAAAPgLALQgLALgPAAQgOAAgLgLQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOg");
	this.shape.setTransform(3.7,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,0,3.6,0).s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALgBAOQABAPgLALQgLALgPgBQgOABgLgLg");
	this.shape_1.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Snow, new cjs.Rectangle(-1,-1,9.3,9.3), null);


(lib.Blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC9900").ss(1,1,1).p("AgdA5IAAgwIAAguQANgRAIgCIAmAAIAAAT");
	this.shape.setTransform(3.3,-9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#0000FF","#000000"],[0,1],3.6,1.3,0,3.6,1.3,16.5).s().p("AAABzQg0ABglgiQglgiAAgwQAAgvAlgiQAlghA0AAIADAAIAAAwIAAgwQAzABAkAgQAlAiAAAvQAAAwglAiQglAhg1AAIAAAAg");
	this.shape_1.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Blue, new cjs.Rectangle(-12.7,-15.8,25.4,30.7), null);


// stage content:
(lib.MultiTarget = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.blue.addEventListener("pressmove", dragMe.bind(this));
		this.yellow.addEventListener("pressmove", dragMe.bind(this));
		function dragMe(evt){
			this.addChild(evt.currentTarget);
			var p = this.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		
		var snowA = [];
		
		var tl = this;
		
		var snowNum = 100;
		
		var snow;
		
		createSnowF();
		
		var animateSnowI = setInterval(animateSnowF,100);
		
		function createSnowF(){
		
		for(var i=0;i<snowNum;i++){
		
		snow = new lib.Snow;
		
		snow.x = stage.canvas.width*Math.random();
		
		snow.y = -stage.canvas.height*Math.random();
		
		snow.rot = 2*Math.round(Math.random())-1;
		
		snow.sp = 5*Math.round(Math.random())+5;
		
		tl.addChild(snow);
		
		snowA.push(snow);
		
		}
		
		}
		
		function animateSnowF(){
		
		for(var i=0;i<snowNum;i++){
		
		snowA.rotation+=5*snowA.rot;
		
		snowA.y+=snowA.sp;
		
		if(snowA.y>stage.canvas.height+snowA.nominalBounds.height){
		
		snowA.y=-snowA.nominalBounds.height;
		
		}
		
		}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.Snow = new lib.Snow();
	this.Snow.name = "Snow";
	this.Snow.parent = this;
	this.Snow.setTransform(581.5,137.2,1,1,0,0,0,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.Snow).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.1,-0.7,0.1,-0.7).s().p("AAAAIIAAgPIAAgHIAAABIABABIAAAFIgBAPIAAAGIAAgGg");
	this.shape.setTransform(75.1,398.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-1.8,-2.3,1.8,-2.3).s().p("AgMAGQgDgIgCgJIAOgGQAJAHAMABQgCAIgDAHQgFAMgIgBQgGABgGgMg");
	this.shape_1.setTransform(99.9,398.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.9,-0.1,4.3,-0.1).s().p("AgaAJQgMgFAAgEQAAgHAMgEIAEgBQACAGAFAGQAKALANAAQAGAAAFgCIACAAQAKAAAIgEIgIAEQgMAEgRAAQgQAAgMgEg");
	this.shape_2.setTransform(120,397.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.1,-0.1,3.9,-0.1).s().p("AgdAFIgJAAQAIgDAHgFIADAJIgJgBgAAWgFIACAAQAPACAAADQAAACgPACIgFAAIADgJg");
	this.shape_3.setTransform(146.7,393.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,0,0.2,0).s().p("AAAgEIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAADgBACIAAgJg");
	this.shape_4.setTransform(146.6,389.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.4,0,2.4,0).s().p("AgRAkIgDgIIgCgKIABgBQAQgMAEgQQABgDAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgOgIgMQAEgDAEAAIADABIACAEQAFAJAHACQAGAPAAATIgBAQIgCAKIgEAKQgHAPgJAAQgKAAgHgPg");
	this.shape_5.setTransform(146.7,391.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.4,-0.4,2.4,-0.4).s().p("AgEAjQgHgCgFgJIgCgFQgFgKAAgMQAAgQAGgLIAKAAQAMAAAKgFIACADQAHAMAAARQAAAQgHALQgHAMgKAAIgEgBg");
	this.shape_6.setTransform(148.9,384.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.8,0,3.9,0).s().p("AgJAbQgJgDgJgFQgKgIgBgLQABgKAKgIQAMgIAPAAQAQAAALAIQAMAIAAAKQAAALgMAIIgEACQgKAGgNAAIgJAAg");
	this.shape_7.setTransform(148.1,378.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6,-1.1,6,-1.1).s().p("AgqAaIgFgFQgNgOAAgRIABgIIACgHQADgJAGgGQAFALALAJQAWAQAcAAQATAAAPgGIAJAAQAAAVgSAPQgSAPgZAAQgYAAgSgPg");
	this.shape_8.setTransform(137.7,395.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-7.1,0,7,0).s().p("AgyAnQgMgJgFgLQgCgFAAgFQAHgCAGgDQAKgFAAgHQAAgJgKgFIgHgDQAFgHAIgHQAVgPAdAAQAdAAAUAPQAJAHAEAHQAIAMAAANIAAAAIgBAKQgDARgRAMIAAABQgIAGgIADQgPAGgSAAQgdAAgVgQg");
	this.shape_9.setTransform(139.5,389.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.8,-0.4,4.2,-0.4).s().p("AgRAbQgJgLgBgOQAHACAJAAQALAAAJgEQAFgDACgEIgBAHQAAASANAOQgJAJgMAAQgNAAgLgOgAAKgbQAGgFADgHIAFgBQABAFACAFQgGAHgDAIQAAgHgIgFg");
	this.shape_10.setTransform(130.1,394);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3,-0.3,2.9,-0.3).s().p("AgPANIgFgCQgHgFgBgFIgBgCIALABQAUAAAPgMIAFgDQAIAFAAAHIgCAHQgCADgFAEQgJAFgMAAQgIAAgHgDg");
	this.shape_11.setTransform(128.9,392.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.2,-0.7,1.9,-0.7).s().p("AgSAYQAHgDAFgHQAJgLAAgQIAAgHIALgDQAFAHAAAKQAAAMgKAJQgEADgEACQgHAEgKAAIgCAAg");
	this.shape_12.setTransform(123.8,395.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.1,0,2,0).s().p("AgHAGQAAgNgMgLIAEAAQAKAAAHADIAHADQAKAFAAAHQAAAIgKAGQgGADgGABIgGABQACgGAAgHg");
	this.shape_13.setTransform(132.9,388.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.2,0,5.3,0).s().p("AgKAnQgOgCgMgJQgPgMAAgQQAAgFACgGQAEgJAJgHQAPgMAVAAQAWAAAPAMIADADQAMAKAAAOQAAAGgCAHQgDAGgGAFIgEAEQgPAMgWAAIgKgBg");
	this.shape_14.setTransform(126.9,388.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.3,-1,3.4,-1).s().p("AgXASQgFgGgCgGIgDgMIAKAAQAJAAAHgCQAHgEAAgEIAAgCQAIADALAAIAOgBIAAAHQAAAPgKAMQgFAHgHADQgFACgGAAQgNAAgKgMgAgXgaIgHAAIABgDIAGAAIADAAIAEADIgHAAg");
	this.shape_15.setTransform(120.8,395.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.3,0,2.3,0).s().p("AgJAKIgHgCIgCgCQgEgCAAgEQAAgEAGgCIAFgCIAFgBIAGAAIAHAAIACACQAHAEAHACIAAABQAAAEgHAEQgHACgJAAIgJAAg");
	this.shape_16.setTransform(118.4,393.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.9,0,2.8,0).s().p("AAAAhIgFAAIgFgCQgGgDgDgFQgJgJAAgOIAAgCQABgMAIgJQAIgKALAAQAMAAAIAKQAFAFACAHQACAFAAAGQAAAOgJAJQgGAJgLABIgDAAg");
	this.shape_17.setTransform(118.4,389);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,0,5.1,0).s().p("AgPAbQgIgCgGgEIgDgCIgDgCQAKgCAHgIQAJgJAAgOQAAgGgCgGIAIgBQgDAFAAAGQAAARAPAKQALAJAPACIABACIgIAEIgKADIgOABQgKAAgJgDg");
	this.shape_18.setTransform(122.3,390.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.8,0,3.1,0).s().p("AgYAfQAIgDAHgEQAJgHADgIIADADQAJAHAKADIgEAGQgKAMgOAAQgMAAgJgJgAgJgcIgKgHQAHgEAJAAIACAAQgEAFgCAHIgCgBg");
	this.shape_19.setTransform(107.5,393.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.3,0,5.4,0).s().p("AgSAoQgLgDgIgHIgEgDQgMgLABgQQgBgEACgFQACgHAEgFQADgEAFgEQAQgNAVAAQAVAAAPALIAAADQAAAOAJAJQADAFAGACIgBAGIgFACQgGACAAAFQAAAEAEACIgIAHQgQANgWAAQgJAAgJgDg");
	this.shape_20.setTransform(111.9,391.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.1,0,5.4,0).s().p("AgJAlQgMgCgJgGIgFgCQgPgMAAgPIAAgEQADgMAMgJQAOgKARgBIAFgBQAPABAMAEIAKAHIADABQgCAFAAAFQAAAPAMALQgDAIgKAHQgGAEgJADQgKAEgMAAIgKgBg");
	this.shape_21.setTransform(102.7,393.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.9,-1.3,6,-1.3).s().p("AgIASQgIgDgIgFQgNgJgBgLQAJAKAMAAQANAAAJgLIAEgGIALgCIAAAEQAAAPAPALIAFACIgOAGQgHABgJAAQgKAAgIgCg");
	this.shape_22.setTransform(95.6,395);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.3,0,6.3,0).s().p("AgVAQQgMgBgLgDQgSgFAAgHQAAgBADgDQAEgEALgEQATgEAZAAQAaAAASAEQATAGAAAGQAAAHgTAFQgSAGgaAAIgVgCg");
	this.shape_23.setTransform(103.9,386.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.1,0,4.9,0).s().p("AgbATIgFgDQgIgHAAgJQAAgKANgIQAIgFAKgBQAGgCAGAAQACAHAFAGIAAAAQABANAOAHQAHAGAJACIgGAEQgNAIgSAAQgSAAgNgIg");
	this.shape_24.setTransform(90.6,395.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3,-2.4,3.3,-2.4).s().p("AgTADIgBgBQgEgEgCgIIgBgCQATAJAYAAIAMAAIgEAFQgJALgNAAQgMAAgJgKg");
	this.shape_25.setTransform(93.6,393.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.9,0,6.9,0).s().p("AgrAdIgFgCQgPgJgEgKIgBgIQAAgOAQgKIAEgDQAUgLAcABQANgBANADQgDADAAACQAAAHASAFQALADAMABQAFAHAAAHIAAAEQgRABgOAKQgMAJgDAMIgLACIgMAAQgZAAgSgJg");
	this.shape_26.setTransform(95.3,389.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,5.5).s().p("AglAgIgCgCQgNgNABgRQgBgRANgMIACgCQAQgNAVAAQAWAAAPANQAPANAAASQAAATgPANQgPANgWAAQgVAAgQgNg");
	this.shape_27.setTransform(102.7,374.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#00FF00","#000000"],[0,0.459],0.6,0,0,0.6,0,6.2).s().p("AgkAZQAOgOAAgSQAAgLgGgKQAPgFATgBQARAAAOAFQgNAMAAARQAAARANANQgOAEgRAAQgYABgSgKg");
	this.shape_28.setTransform(95,374.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,5.5).s().p("AgkAgIgDgCQgNgNABgRQgBgQANgNIADgCQAPgNAVAAQAWAAAPANQAGAFADAGQAGAJAAALQAAASgOAOIgBAAQgPANgWAAQgVAAgPgNg");
	this.shape_29.setTransform(87.5,373.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.7,0,5.8,0).s().p("AgoAdQgJgHgFgIQgCgHAAgHQgBgJAHgIQADgHAHgFQARgMAXABQAYgBARAMQAQANABAQQgBARgQAMQgRANgYgBQgXABgRgNg");
	this.shape_30.setTransform(144.8,343.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.6,-0.1,9.6,-0.1).s().p("AgFgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQADADAGAEQgLgDAAgCg");
	this.shape_31.setTransform(124.4,344.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-8,0,8.8,0).s().p("Ag3AXIgLgEQgGgFgEgDIAAgBQgEgFABgFQAAgEADgGQAHgHAOgGQAZgJAiAAQAjAAAZAJQAKAEAHAGQgHAHABAKQAAAGACAHQgFADgIADQgZALgjgBQgiABgZgLg");
	this.shape_32.setTransform(131.6,342.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.7,0,4.1,0).s().p("AgZAQQgLgGAAgKQAAgJALgGQAMgHAPAAQAQAAALAHQAFADADADQgEAGAAAEQAAAFAEAFIgIAFQgLAHgQAAQgPAAgMgHg");
	this.shape_33.setTransform(120.2,342.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.4,0,6.1,0).s().p("AgZAZIgLgEQgOgIgCgJIgBgEIABgDQACgKAMgHIACgBIAGgCIANAAQAUAAARgGQANACALAGIAKAHQgKABgIAFQgNAIAAAKQAAAJAIAHQgMADgPABQgQgBgNgEg");
	this.shape_34.setTransform(84.2,394.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.9,-0.1,4.5,-0.1).s().p("AgYAXIgBgBIgBgBQgHgFgDgHQgCgFAAgEQAAgOANgJIAEgCIAKAAQAMAAALgDIAHgDIAHAEQgMAGgCAKIgBAEIABAEQACAJAOAHIALAFIgFAEQgKAHgMACIgIAAQgQABgMgJg");
	this.shape_35.setTransform(77.7,395);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-7.6,0,7.7,0).s().p("AgMAsIgKgCIgMgDQgKgDgJgFQgWgNAAgSQAAgRAWgNIAJgEIAKgEQAQgFASAAQAgAAAWANQATALADAOQgQAJAAAPIABAIIgHAEQgIAEgIADQgRAGgVAAIgMAAg");
	this.shape_36.setTransform(82.4,387.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.4,-0.5,4.8,-0.5).s().p("AgQASIgFgDQgHgEgCgFQgDgGAAgEIABgHQAAgDADgDQACgDAEgCQABAJAKAIQAMAGAQABIAHAHQAFAEAGADQgLAHgRAAQgLAAgLgFg");
	this.shape_37.setTransform(65.6,394.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.7,0,4.8,0).s().p("AgWAfQgGgCgFgEIgHgHIACAAQASAAAMgJQAMgIAAgLQAAgMgMgJIgEgCIAGgBQAEAJAKAIQAOAKATACIgEADQgMAIAAAOQAAAFACAFQgMAFgPAAQgMAAgKgEg");
	this.shape_38.setTransform(71.3,392.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.8,0,7.4,0).s().p("AACArQgRgDgOgJQgLgIgFgKQgCgGAAgHQgBgRATgMQARgNAZAAIAOABIgJAEQgVAOAAARQAAASAVANQAIAFAKADIAMACIgEACIgIADQgLADgMAAIgLAAg");
	this.shape_39.setTransform(75.2,388.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,0,4.3,0).s().p("AgBAdQgRgBgMgHQgKgIgBgJIgBgEQAAgLAMgJQANgIARAAQAPAAALAGIAFACQAMAJAAALQAAAMgMAJQgNAIgSAAIgBAAg");
	this.shape_40.setTransform(67.4,391.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-1.4,0,2.6,0).s().p("AgHAGQgGgCAAgEQAAgDAGgDQAFgCAIAAIAGAAIgBAHQAAAEADAGIgIAAQgIAAgFgDg");
	this.shape_41.setTransform(61.1,394.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.7,0,6,0).s().p("AgnAZQgKgHgEgHQgDgFAAgGQAAgOARgKIAFgCQAQgIAUAAQAYAAARAKIABABQgDADgBADIgGAAQgIAAgGACQgGADAAAEQAAAEAGACQAGACAIAAIAIAAQADAFAGAEIAGADQgEAHgKAGQgRAJgYABQgXgBgSgJg");
	this.shape_42.setTransform(58.2,395.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.3,-0.1,3.3,-0.1).s().p("AACAEIgCgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAAAAAAAIABgEQABAFADADIgBAAg");
	this.shape_43.setTransform(46.4,394.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.5,0,3.8,0).s().p("AgPAOQgEgCgCgEQgDgEAAgEQAAgHAIgFIABgCQAJgGAMAAQALAAAIAEIgEACQgRAKAAANQAAAHACAFQgMAAgJgHg");
	this.shape_44.setTransform(52.2,394.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.2,0,2.2,0).s().p("AgOASQgEgDgCgGQgBgEAAgFQAAgKAHgIIACgCQAGgFAGAAQAJAAAGAHQAFAGACAJQgIAEAAAIQABAEACAEIgCABQgGAIgJAAQgIAAgGgIg");
	this.shape_45.setTransform(48.3,393.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.5,-0.8,2.7,-0.8).s().p("AgRAPIgEgGQgDgHAAgJQgBgKAEgHQACAJAEAIQAIANAKAAQAKAAAIgMIACAGIACACQgBAHgFAGQgIAKgKAAQgKAAgIgKg");
	this.shape_46.setTransform(47.3,348.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.9,-0.5,7,-0.5).s().p("AgvAbQgVgNAAgSQAAgUAVgOIAFgCQAHAGAKAAIADAAQADAHAGAGQARASAYAAQAXAAARgRIABACIgDACQgHAIAAAKQAAAFACAEIgCAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQgFAGgGADQgVAOgdABQgcgBgUgOg");
	this.shape_47.setTransform(40.1,393);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-1.6,0,3.9,0).s().p("AAMAfQgKAAgHgGIgCgDQgIgJAAgNQAAgMAIgJQAHgJAMAAIAEAAQgJAOAAASQAAAQAHANIgCAAg");
	this.shape_48.setTransform(36.4,386.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.8,0,5.9,0).s().p("AgoAqQgHgGgDgHQgIgNABgQQAAgSAJgOIAIgJIAFgEQAQgOATAAIAAAAQAYABARARQASARAAAYQAAAYgSASIgBABQgRARgXAAQgXAAgRgSg");
	this.shape_49.setTransform(42.9,386.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.5,0.3,2.5,0.3).s().p("AgRAgQgHgMAAgRQAAgQAHgMQAHgLAKAAQAKAAAIALQAHAMAAAQQAAAMgEAJQgTAAgPANIgEgFg");
	this.shape_50.setTransform(40.7,378.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.8,0,2.9,0).s().p("AgUAgQgGgLgCgRIAAgEIACgMQACgLAEgIQAJgOALAAQAMAAAIAOQAJANAAASQAAATgJANQgIAOgMAAQgLAAgJgOg");
	this.shape_51.setTransform(70.8,347.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.9,0,3,0).s().p("AgUAZQgIgLAAgOIAAAAQANgBAKgEQAKgFAAgHQAAgHgKgFIgGgCQAGgEAFABQAMAAAJAKQAHAIABALIgBAMIAAAEQgCAIgFAGQgJALgMAAQgLAAgJgLg");
	this.shape_52.setTransform(65.1,346.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-1.8,-0.5,1.8,-0.5).s().p("AgMAGQgGgFABgFIAAgCQAEAEAHAAQAHAAAHgHIABAAIAKACIAAADQgBAFgFAFQgGAEgHAAQgGAAgGgEg");
	this.shape_53.setTransform(58.8,347.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.7,0,3.8,0).s().p("AAAARIgLgBIgKgCIgEgCQgLgFAAgHQAAgGALgFIAFgCQAKgDAKAAQALAAAKADIAGACQAKAFABAGQgBAHgKAFQgKAEgOABIgDAAg");
	this.shape_54.setTransform(61.9,344.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-1.9,0,2.3,0).s().p("AgIATIgEgEQgGgGAAgJQAAgIAGgGQAHgHAHAAQAJAAAGAHIACACIgGACQgLAFAAAGQAAAHALAFIAFACIgBAAQgGAHgJAAQgFAAgFgDg");
	this.shape_55.setTransform(57.9,344.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.9,0,3.2,0).s().p("AgaAoIgCgDIgDgGIABgBQAHgOAAgUQAAgRgFgNIAAgCQALgPAOABQAOgBAKAPQALAQAAAUQAAAVgLAQQgKAPgOgBQgNABgKgMg");
	this.shape_56.setTransform(52.5,344.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.6,0,2.6,0).s().p("AgSAjQgDgIgCgJQgCgJAAgJIAAgJQACgPAFgKQAIgOAKAAQALAAAHAOIADAFQAFANAAAQQAAAVgIAOIAAABQgHANgLAAQgKAAgIgOg");
	this.shape_57.setTransform(47.5,344.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,0,5.4,0).s().p("AgVAaQgNgLAAgPQAAgOANgMQANgLASAAQANAAALAHIgBAKQAAAJACAJQgEAGAAAKQAAAJAEAIQgLAHgOgBQgSAAgNgLg");
	this.shape_58.setTransform(41.6,346.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AoiELIAAn4IE1AAIAADWIHRAAIAAjzIE/AAIAAILIiLAAIAAAKg");
	this.shape_59.setTransform(97.3,365.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.yellow = new lib.yellow();
	this.yellow.name = "yellow";
	this.yellow.parent = this;
	this.yellow.setTransform(103.9,342.4,1,1,0,0,0,0,-0.3);

	this.blue = new lib.Blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(78.5,349.8,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blue},{t:this.yellow}]}).wait(1));

	// Layer_4
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.4,8.9,-3.4).s().p("AgxAQIAcgIIAAAAIADABIABguIAeASIgGAWIAAAAIAAABIAWgFIABAAIADgBIAFgCIARAKIAAAAIhtAgg");
	this.shape_60.setTransform(214.3,255.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1ArIAAgBIAJgoIAAAAIAAgBIAAgBIABAAIAJgmIAAgCIABgDIABABIAAABIA2AhIAAAAIACABIAfASIgBAAIg2ARIAAAAIgSAFIAAAAIgOAEIAAAAIgWAHg");
	this.shape_61.setTransform(227,259.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AA9BJIgCgBIgfgTIgBAAIAAgBIg2ggIgBgBIgBgBIgBAAIAAAAIgOgJIAAAAIgBAAIgDgCIgQgJIAjgSIAVgMIAAAAIACgBIABgBIABAAIAAAAIAFgDIBAgkIgDCTg");
	this.shape_62.setTransform(226.6,252.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("AgsACIAAgBIAJgmIACgFIBSAwIgCAGIAFgBIADAAIhtAhg");
	this.shape_63.setTransform(166.9,262.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-2,6.6,-2).s().p("AA9A0IgBAAIADgBIAAADgAgcgBIgPgJIgTgMIAUgLIALgGIAZgNIgIAgIA1gPIADgCIgCAHIAAAAIgGAQIAAAAIAAABIAIAAIAAAAIgBABIgRAbIAEABIACAAIAAAAIAVAEIABABIAAAAIAEAAIABAAIADABIgGAag");
	this.shape_64.setTransform(166.4,258);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.5,-2.9,10.9,-2.9).s().p("AgbALIACgJIAAgCIALgqIAxAeIgGAQIgLAGIAIAEIgFAMIgDACIg1APg");
	this.shape_65.setTransform(168.5,251.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.1,-4.3,9.3,-4.3).s().p("AgwAXIAGgZIAPACIABAAIACABIADAAIAVAEIACAAIAQADIAAAAIgNgeIAAAAIgDgGIAOAAIAjAUIgBAIIggAIIg5ASIgHACIgEABg");
	this.shape_66.setTransform(176.8,260.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,5.8,-3.3,-4.6).s().p("AAxArIgQgDIgCAAIgWgFIgDAAIgCAAIgBAAIgPgDIgDgBIgBAAIgEgBIAAAAIgBAAIgVgEIAAAAIgCAAIgEgBIARgbIABgBIAAgBIAAAAIAEgHIAAAAIAFgIIABgBIABgBIAMgVIADABIABAAIABAAIAOADIAFAJIAAABIADAHIAAAAIAMAZIAAABIABABIACAGIABAAIANAfg");
	this.shape_67.setTransform(173.7,257);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,-2.4,3.4,-2.4).s().p("AgSAWIAAgBIgNgZIAAAAIgDgHIAAgBIgFgJIAGABIAAAAIABAAIADABIACAAIATADIABAAIABABIAEAAIAUAEIAIALIAAABIALAPIACAEIgJAAIgiACIgOABg");
	this.shape_68.setTransform(178.9,255.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.1,8.9,-3.1).s().p("AgvAPIABgIIACgHIAAAAIAEgPIADAAIgCgEIAEgVIAKABIABABIABAAIBOAuIgBAAIhsAig");
	this.shape_69.setTransform(186.6,258.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2.3,6.5,-2.3).s().p("AASAYIAigCIAGAAIgEAPIAAAAIgCAIgAAwADIAAgBIgIgLIABABIACAAIAEAAIgBACIAFABIABAAIABAAIALADIgFAUgAg/gZIALgGIgDALgAAugkIgBAAIgCgHIAQgBIAAABIgNAHg");
	this.shape_70.setTransform(176.6,255.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-4.5,8.9,-4.5).s().p("AgxAHIAFgUIAAgCIADgMIATADIAAAAIACABIAEAAIAUAFIACAAIAQACIABABIgBgBIgEgKIAlAWIAAAAIgcAHIhRAZg");
	this.shape_71.setTransform(206.7,256.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,-2.8,5.8,-2.8).s().p("AA0AsIhOguIADAAIABAAIAUADIAAAAIACAAIADAAIAWAFIABAAIAQADIABAAIAAAAIgMgZIAFAAIAAABIABAAIADAAIABAAIAPAEIAAASIgBAngAg3gmIANgHIgBAEIgBADIAAAAIgBABIAIAAIAAAAIgBABIgJAQg");
	this.shape_72.setTransform(186.8,255.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.3,-4.3,10.1,-4.3).s().p("AgigGIACgFIAAgBIABgHIALACIABAAIARADIABAAIgBAAIgHgPIAEAAIAVAFIABAAIAQADIABAAIAAAAIgBgBIAKAGIAAACIgEATIhSAZg");
	this.shape_73.setTransform(197.8,256.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-9.3,-4.2,0.5,-4.2).s().p("AgKgBIARgBIAEAEIgPABIgDAAg");
	this.shape_74.setTransform(200.6,250.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.1,0.1,3.8,0.1).s().p("AAAA1IgDgJIAJACIABAAIAAAAIAEABIABAAIABAAIgDAMgAgMAXIgBAAIAAAAIAEgBIgCAEgAAFgnIAAAAIgEgGIgBAAIgBgEIAPgJIgIAVg");
	this.shape_75.setTransform(201.2,248.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.3,0.9,12.1,0.9).s().p("AgDgBIABgDIAGAEIgCACIgBADg");
	this.shape_76.setTransform(194.2,243.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgQgDIgBAAIgWgEIgEAAIgCgBIAAAAIgSgEIgBAAIgEgBIgBAAIAAAAIgVgDIAAgBIgCAAIgFgBIABgBIAngBIgOgTIAAgBIgHgJIAEgFIAAAAIAFgJIABgBIAOgVIAAgBIABgBIACgFIAAAAIABgBIAEgIIABgBIAIASIAFAMIAAABIAEAHIAAAAIAMAZIAAABIAAABIADAGIAAAAIABAAIABACIAIASIADAKIABABIAAABg");
	this.shape_77.setTransform(196.3,249.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.7,-0.1,6.1,-0.1).s().p("AgbAlIADgGIAAAAIAGgSIAHgRIACgHIABgDIAEgLIACgEIAAgBIADgNIABgBIAFAAIAGAJIANAVIABABIAAAAIAAABIgIAWIgIgRIgBABIgEAHIgBABIAAAAIgDAEIgBABIAAABIgMAWIgBABIgGAJIAAAAIgDAFg");
	this.shape_78.setTransform(195.5,244.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAIgWIAAAAIAIgWIAAgBIABgBIAAgBIATAcIACAEIAAAAIAEAHIAAAAIABACIALAPIALARIAAAAIAOATIgoACIgSABg");
	this.shape_79.setTransform(201.4,245.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.1,6.7,-4.3,-3.7).s().p("AAoAzIgRgDIgBAAIgLgCIgLgDIgCAAIgCAAIgBAAIgFgBIgOgDIgBAAIgEAAIgBAAIAAgBIgEAAIgDgGIAAAAIgDgFIAUgCIgBABIAFABIACAAIAAABIAUADIAAAAIABAAIAEABIABAAIATAEIAAAAIACABIAHAOIABAAgAgSgeIgBAAIAEgEIAAgBIABgBIACgFIAAAAIABAAIAFgIIABgBIAGAOIgFARIAAAAIgDAGg");
	this.shape_80.setTransform(193.5,249.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.4,0.4,11,0.4).s().p("AABAEIAAgBIgCgDIgBgDIAGADIgCAFg");
	this.shape_81.setTransform(187.9,245);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAIgWIAAAAIACgFIADgIIADgJIAAgBIAAgBIAAgBIAGAJIAJANIAHAKIABAAIACAHIABAAIALAQIAFAIIAHAKIAAAAIAOATIgnACIgTABg");
	this.shape_82.setTransform(191.3,247.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAxAzIgRgDIgBAAIgWgFIgDAAIgCAAIgBAAIgSgEIgCAAIgDAAIAAAAIgBgBIgKgBIgLgDIAAAAIgCAAIgEgBIAAgBIAMABIAAAAIgFgMIAKgQIABgBIAAAAIAAgBIADgGIABAAIAAgBIAggBIgNgTIAAAAIgDgFIAEgFIAAgCIABAAIACgEIAAgBIABAAIAEgIIABgBIAIASIAFALIAAABIAEAHIAAABIAMAZIAAAAIAAABIADAGIAAAAIADAFIALAaIABAAg");
	this.shape_83.setTransform(186.2,251.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAgBIAAAAIABgCIACgFIAKAAIgBABIAAAAIgEAGIAAABgAgLgCIAGgRIAIgZIABgBIAEAAIANATIAEAHIADAEIABABIAAABIAAAAIgIAWIgIgRIgBABIgFAHIAAAAIAAABIgDAFIgBAAIAAABIgDAGg");
	this.shape_84.setTransform(185.2,246.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,1.8,6.5,1.8).s().p("AAAAkIAQgFIgHASgAgTAqIAAAAIAKgDIgDAIgAAoAYIAAgBIAEACIAAABIgBADgAhAAPIAagNIgCAGIAAABIAAAAIgEASgAA/gvIACgBIAAACIgCAHg");
	this.shape_85.setTransform(189.5,240.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,1.5,5.5,1.5).s().p("AgLAWIgBAAIgHgJIAHgRIAIgXIABgBIADAAIALAQIAEAGIAEAGIgBAEIgGASIgHgOIgBABIgEAIIgBAAIAAABIgCAEIgBABIAAABIgEAFg");
	this.shape_86.setTransform(192.4,243.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.4,-2.7,9,-2.7).s().p("AgvAWIADgSIABAAIAAgBIABgFIAIggIABgGIAAAAIA5AiIAAAAIAAAAIAYAOIgBACIAAABIAEgBIACAAIgCAEIgOAEIAAABIgLgRIgFAAIgBABIgIAXIgOAFIgGgJIAAABIAAAAIAAABIgEAKIgLADIgCgDIgMgTIgFAAIgBABIgJAZg");
	this.shape_87.setTransform(189.9,240.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.8,6.5,-1.8).s().p("AA3AzIACAAIAAABgAAcAjIAAAAIAAgBIg5giIAAAAIAAAAIgigUIAggRIAZgNIABgBIgBADIAAAAIAAABIgJApIgBABIBEgWIgBAEIgDARIAAABIAQgGIAAAJIgDAMIAAABIgBAAIgIAng");
	this.shape_88.setTransform(189.5,236.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.6,-2.9,10.8,-2.9).s().p("AgjArIAJgpIAAAAIAAgBIABgCIAJgmIAAgDIABAAIAwAdIgQAIIATALIgCANIgBADIhFAWg");
	this.shape_89.setTransform(191.4,231.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#3F8732","#000000"],[0.067,1],-1.9,-2.9,12.5,-2.9).s().p("AgSArIADgRIABgEIABgDIADgNIABAAIANAJIAAABIAAAAIAAAAIgBAEIgDASIAAAAIgCAAIgQAGgAAAgnIAAgDIABAAIASAKIgXAOg");
	this.shape_90.setTransform(196.2,231.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3,-0.2,6.8,-0.2).s().p("AgXAuIABgBIAAAAIAFgPIAAAAIACgHIAFgMIADgLIAHgPIAJgdIAAgBIAFAAIAHAKIgFANIAAABIAAAAIAIAAIAAAAIgBABIgRAbIACABIgMAVIgBABIAAABIgFAIIgBAAIgEAGIAAABg");
	this.shape_91.setTransform(172.1,251.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAxAzIgMgCIgEgBIgCAAIgBAAIgVgEIgDAAIgCgBIgBAAIgSgEIgBAAIgEAAIAAAAIgBgBIgFgBIgQgCIAAgBIgCAAIgCAAIgCgBIARgcIABgBIAAAAIAAgBIAEgFIAAAAIAGgKIABgBIANgVIAAgBIABgBIADgEIAAgBIAAAAIAEgIIABgBIAIASIAGAMIAAAAIADAHIAAABIAMAZIAAABIABAAIACAGIABAAIAAABIAIASIAFAMg");
	this.shape_92.setTransform(177.6,249.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAAAIAAgBIAFgNIABgCIAAgBIAUg3IAFgSIABgBIAEAAIAJANIALARIABAAIAAABIAAABIgIAWIgIgRIgBABIgFAHIAAABIAAAAIgDAEIgBABIAAABIgMAVIgBABIgGAKIAAAAIgEAHIAAAAg");
	this.shape_93.setTransform(176.6,245.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAIgWIAAAAIAIgXIAAgBIAAgBIAWAgIABAAIACAHIABAAIAJANIAMAQIACAFIAAAAIAOATIggACIgJAAIgRABg");
	this.shape_94.setTransform(182.8,246);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.8,2.7,4.1,2.7).s().p("AAHAgIAAAAIgEgHIgBAAIgUgfIAAABIgBABIgIAVIAAgBIgBAAIgLgQIA4gSIAAAAIADACIAAgTIATgKIABAAIgHAgIgaANIAUAKIgEAUIgGAQg");
	this.shape_95.setTransform(182.3,241.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.8,-0.9,6.1,-0.9).s().p("AghAJIgZgOIADgBIAJgDIAAAAIADABIAAgDIBHgVIgBADIAAAAIAggJIgUA3IAAABIgBACIgHgKIgEAAIgBABIgKAcg");
	this.shape_96.setTransform(170.4,246.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.6,0.2,5.3,0.2).s().p("AgnAWIAzgQIADgBIAZAPIgKAsgAAgg7IAGgEIgFAXIAAABIgCAJg");
	this.shape_97.setTransform(162.9,245.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.2,-2.9,10.2,-2.9).s().p("AgpArIABgCIAGgfIADgJIAAAAIAFgWIAEgRIABgEIAAgBIA4AiIAAABIABAAIAGAEIgBAEIgEAUIhHAWIgDABIgEAAg");
	this.shape_98.setTransform(169.5,241);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.8,-1.3,8.1,-1.3).s().p("AgMAFIgBAAIAAAAIgfgSIAvgPIABAAIANgEIgFAUIAAAAIAhgKIgKAqIAAABIgDAMg");
	this.shape_99.setTransform(163.8,228.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.2,-2.9,11.2,-2.9).s().p("AgeArIACgMIAHgdIAAAAIAAgBIAKgoIAAgDIABAAIAnAXIgfARIAhAUIAAAAIABAAIgBABIgBAGIgBAAIgTAGIgYAIIgRAEg");
	this.shape_100.setTransform(183.3,234.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-3,9.7,-3).s().p("AgtAqIADgQIADgNIADgMIAAAAIAKgqIACgBIAbARIgIAnIgBABIA0gPIABAAIgoAWIAGADIg7ASg");
	this.shape_101.setTransform(171,230.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.6,-1.9,7.3,-1.9).s().p("AAkAiIgBAAIAAgBIg4ghIAAAAIAAAAIgLgGIgEgDIgTgMIAcgPIgDAQIgBABIA7gSIAcARIAAAAIAAAAIAAABIgBAEIgJAnIAAAAIgCAJIgCAFg");
	this.shape_102.setTransform(169.5,236.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABgDIAFgUIACgKIACgJIAAAAIAJgnIABgEIABgBIA0AhIgDALIAAAAIARgDIAWAMIgBAAIg4ASIgIgNIgEAAIgBABIgGASIghAKg");
	this.shape_103.setTransform(178.6,239);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-1.8,6.6,-1.8).s().p("AA9A2IgXgOIAZgHIAAAEIAAATgAgcAAIAAAAIAAAAIgcgQIgHgEIApgVIACgCIAmgMIAHAEIACABIAPAJIAAAAIAAAAIAAABIgBADIgJAoIAAAAIgBABIgHAcg");
	this.shape_104.setTransform(178,234.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.3,-3.6,5.6,-3.6).s().p("AAhAaIAEgBIgDABgAgkgQIASgFIAAAAIAQgFIgGAaIAAAAIgBAAg");
	this.shape_105.setTransform(172.2,227.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,0.4,7.4,0.4).s().p("AgUAWIAAAAIAAgBIgPgIIgBgBIgOgJIgEgCIALgFIARgJIAegSIABAAIATgKIAOgEIgCAGIgPAJIAiAUIAAABIAAAAIAAABIgBADIgJAkIAAABIgaAOg");
	this.shape_106.setTransform(184.3,228.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.8,-3.5,9.6,-3.5).s().p("AguAlIAJgoIAAAAIAAgBIAGgZIAXgIIAlAXIAAAAIABAAIASALIgMAFIAFADIAGAEIgnAMIgDABIg0AQg");
	this.shape_107.setTransform(175.1,228.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.8,8.9,-3.8).s().p("Ag2AiIAFgUIArgNIAAAAIADACIAAgkIAZAPIABAAIAAABIABAAIAfASIgBAAIgQAFIgYAIIgOAEIgBAAIgSAGIgBAAIgiAKg");
	this.shape_108.setTransform(170.5,223.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#3F8732","#000000"],[0.067,1],-9,0,3.9,0).s().p("AABA0IAAAAIAAAAIglgWIAQgGIABAAIACACIAChEIAjgVIADADIAMAHIgBAHIAAAAIgBABIgJApIAAAAIANgDIAAAbIgFAWIgBABIAFgCIAAANIgRAKg");
	this.shape_109.setTransform(178,221.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,0,4,0).s().p("AAiBIIgegTIgCAAIAAgBIgBAAIgogZIABgkIAMgEIABAAIADABIAAgaIAEgCIACgBIABgBIAdgQIAagPIAAAeIgBAmIgBAqIgBAlg");
	this.shape_110.setTransform(166.3,216.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.2,-2,8.2,-2).s().p("AAHgEIAIAEIABAAIAAAAIABABIAfATIAAAAIgpANgAgpgdIAAgCIADAAIAUALIgdARg");
	this.shape_111.setTransform(169.5,212.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.7,0,3.2,0).s().p("AAaBIIgdgTIgCAAIAAgBIgBAAIgZgPIABgqIAogNIAAAAIADACIABgvIASgKIgCBNIgBBGg");
	this.shape_112.setTransform(173.3,216.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,-2.9,7.2,-2.9).s().p("AgjghIAoAZIAAAAIAAABIACAAIAfASIgBAAIgKADIgsAOIgBAAIgMAEIgDAAIgEABg");
	this.shape_113.setTransform(168.7,206.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.2,-0.5,4.7,-0.5).s().p("AAqBDIgfgTIgCgBIAAAAIAAAAIgIgFIAAgeIgZAOIgVgMIANgEIAAAAIAtgNIgDALIAAAAIAWgGIAAAAIAHgCIAHgBIgBAXIgBAugAAbhDIABAAIgBACg");
	this.shape_114.setTransform(170.2,208.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,-2.9,4,-2.9).s().p("AAjArIgfgTIgCgBIAAAAIAAAAIgogYIAAgTIAPgEIAAAAIANgEIABAAIAQgGIABAAIAfgJIAAALIgDANIAAAAIgBABIAEgBIAAABIAAACIgCA8g");
	this.shape_115.setTransform(169,203.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.2,8.9,-3.2).s().p("Ag2AoIADgLIAKgDIABgBIACACIABg8IABgCIAAgBIAMgEIAuAcIABAAIAAABIABAAIAfASIgBABIgpAMIgNAEIgBAAIgLAEIgNAEIgGACIgBAAIgWAGg");
	this.shape_116.setTransform(176.7,204.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,1.3,6.5,1.3).s().p("AgdAfIgBAAIAAAAIgigVIAQgIIgCAJIgBABIA1gPIAAAAIA3gRIg5AeIAiAVIAAAAIAAAAIAAABIgBADIgFAVIgHAEIgCABgAA+g6IADgCIAAAEIAAABIgDANIAAABIgBAAg");
	this.shape_117.setTransform(192.8,224.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.5,-3.4,3.4,-3.4).s().p("AAdAnIgegTIgCgBIAAgBIgdgRIABgdIAYgHIABAAIAFgCIgBAIIgBABIAkgLIAAAHIgBAhIAAARIgBAWg");
	this.shape_118.setTransform(195.8,218.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.7,8.9,-3.7).s().p("Ag1AjIACgKIABgGIAogNIAAAAIADACIABgqIAcARIAAABIACAAIAfASIAAAAIgBABIg2AQIgBAAIg1AQg");
	this.shape_119.setTransform(193.2,221.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-3.3,6.5,-3.3).s().p("AA7AnIgfgSIgBgBIAAAAIAAAAIgXgOIAwgNIAAAAIADACIAAgXIAJgDIgBAeIgBAqgAg6gfIgEgDIAUgGIAAAAIgDARg");
	this.shape_120.setTransform(186.2,218.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-4,8.9,-4).s().p("Ag1AgIAEgWIAFgRIAAgBIAAAAIACgMIAigKIABAAIAHgCIAWANIAAAAIAAAAIACABIAfASIAAAAIgpAMIgNAEIgBABIAAAAIgxAOIgFACg");
	this.shape_121.setTransform(186.6,222.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.9,-2.9,11.5,-2.9).s().p("AgcArIAJgpIAAAAIAAgBIAKgoIAAAAIABgDIABAAIAZAQIgWAMIABABIARALIAAAAIAPAIIAAAAIABAAIgBAEIAAABIgFARIAAAAIgUAFIghAKg");
	this.shape_122.setTransform(179.5,211.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-3.8,9.9,-3.8).s().p("AgWgQIAGgCIABAAIAegKIAKAGIgCAGIAAABIAAAAIgGAYIgCAIIgGACIgBAAIgXAHIgJADg");
	this.shape_123.setTransform(194.1,212.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAJgpIABgBIAAAAIACgGIADgQIAFgRIAAgBIABgEIABABIA2AhIAAAAIAAABIACAAIAfASIAAAAIgwAPIgHACIgBAAIghAKIgGADIgOADg");
	this.shape_124.setTransform(185.9,216.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.2,6.5,-1.2).s().p("AA8A8IgfgTIgCgBIAAAAIAAAAIg2giIgBAAIgBAAIAAgBIgPgIIAAAAIgSgLIgBAAIAXgNIAkgUIABAAIAKgGIACgBIAHgEIAAADIgBAAIATgFIgHAYIAAACIAAAAIAAABIgJAnIAAABIAVgHIABAAIAYgGIgBAtIAAAWg");
	this.shape_125.setTransform(185.4,211.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.9,-3.6,5,-3.6).s().p("AAsAkIgfgTIgBAAIAAgBIgBAAIgugbIAGgCIABAAIANgEIAAAAIARgGIAAAAIAugNIAAASIgHAfIgBAAIAHgCIAAAagAgvggIADgBIgDAMg");
	this.shape_126.setTransform(177.7,202);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.7,0,5.2,0).s().p("AgpATIAAgBIgBAAIAAAAIgGgEIAqgMIABAAIACABIAAgZIAPgEIAAAAIAYgIIAMAIIAAAAIgGAaIgBAEIgHAEIgCABIgLAGIAAAAIgjAUg");
	this.shape_127.setTransform(182.8,205.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#3F8732","#000000"],[0.067,1],-1.1,-5.6,13.3,-5.6).s().p("AgKAQIABgGIAGgaIAOAJIAAABIABAAIgBADIAAAAIgEAPIgSAFg");
	this.shape_128.setTransform(188,204.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAJgoIAAgBIABAAIAAgCIAGgXIAEgQIAAAAIABgDIABABIABAAIA1AhIAAAAIAAAAIACABIAfASIgBAAIgNADIgLAEIgeAKIgBAAIgGACIgYAHIgBAAIgWAGg");
	this.shape_129.setTransform(192.6,208);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.1,1.3,2.8,1.3).s().p("AgbA3IAMgEIgCAKgAACgtIASgKIAIgFIAAAUIgBAAIAAAEIgLAGIAAAAIgPAIg");
	this.shape_130.setTransform(198.4,204.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,-2.4,4,-2.4).s().p("AAjAwIgRgKIADgBIABgBIABAAIAPgEIAAARgAglAEIAAgEIAGAAIgFgIIAAgfIAegJIANAIIAAABIABAAIgBADIAAABIgIAmIgBAAIAAACIgBAAIAAABIgDAQg");
	this.shape_131.setTransform(216.3,250.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.3,-2.9,10.1,-2.9).s().p("AgpAqIAAAAIAFgXIAEgQIAAgBIAAAAIAAgCIABAAIAJgmIAAgCIABgCIABABIABAAIA2AhIAAAAIABABIAHADIgjASIAQAJIAAAAIgNAFIAAAAIgDABIgOAEIAAAAIgCAAIgHADIgEABIgBAAIgWAGg");
	this.shape_132.setTransform(219.3,251.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.8,6.5,0.8).s().p("AAcA+IgBgBIAAAAIg2ghIgBAAIgBgBIgBAAIAAgBIgOgIIAAgBIgBAAIgTgMIAtgXIALgGIAAAAIACgBIABAAIABgBIAAAAIATgLIAEgDIAugYIgCBrIgBAHIgCACIAAAAIgBAAIgBABIgCABIAAAAIgVALg");
	this.shape_133.setTransform(220.1,244.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-3.2,9.9,-3.2).s().p("AgUgVIgLAHIACgLIAagIIAkAWIgsAYIASALIABAAIAAABIgdAJg");
	this.shape_134.setTransform(214.8,243.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.2,0,2.7,0).s().p("AAWBIIglgWIgIgUIgBAAIgCgGIAzgCIAAAEIgBAwgAgFggIAAAAIgEgHIgBAAIgGgJIAggSIALgHIgBA4IAAAeg");
	this.shape_135.setTransform(210,248.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.6,6.7,-3.8,-3.7).s().p("AAsAzIgQgDIgCAAIgVgEIgEAAIgBgBIAAAAIgTgEIgBAAIgBAAIgEgBIAAAAIgBAAIgKgCIgIgSIACgEIAPAAIgDgFIAngCIgMgSIAAgBIgMgQIAFgHIAAgBIADgFIAAAAIAAgBIAGgIIAAgBIAIASIAFAMIAAABIAEAHIAAAAIALAZIAAABIABABIADAGIAAAAIAJAUIAEALIABABg");
	this.shape_136.setTransform(204.5,249.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.7,-0.9,5.2,-0.9).s().p("AAIgIIAAABIgBAAIAAABIgHAVIAAgBIgBgBIgOgUIAggJIAEgBIAaAQIgEALIgQAJgAgqAJIgBAAIgDgCIAOgFIgEALg");
	this.shape_137.setTransform(198.3,242);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-0.3,9.8,-0.3).s().p("AABADIAAgBIgDgEIAAgBIAFADIgBADg");
	this.shape_138.setTransform(205.8,243.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAIgWIAAAAIABgEIAHgTIAAgBIAAgBIAQAXIAGAJIABAAIACAHIABAAIAgAtIAFAIIgGABIgzACg");
	this.shape_139.setTransform(209.1,246.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.4,1.4,5.4,1.4).s().p("AgUAOIAIgVIAFgMIADgJIAAAAIAEAAIAQAYIAAABIAEADIAAABIABABIAAABIgIAWIgJgSIAAABIgFAIIAAABIAAAAIgDAFIAAABIgFAHg");
	this.shape_140.setTransform(203.9,243.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABgCIAIgnIABAAIAAgBIADgMIACgHIAAgCIAEgSIABgEIAAAAIAwAcIgFARIAAAAIASgFIgCAKIAAAAIAJgCIAJgCIAMAHIgBAAIgzAPIgDABIggAKIgGgJIgFAAIgBABIgEANIgCAAIgEABg");
	this.shape_141.setTransform(200.1,237.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,0.1,6.6,0.1).s().p("AAHAQIAAABIgBAAIgGATIgFgDIgRgYIgEAAIgBAAIgDAJIgagQIAzgOIABAAIACABIABgNIAGgDIANgDIABAAIAVgHIgMAHIAVAMIgHAgIgBAAIAQgFIgCALIghASg");
	this.shape_142.setTransform(206.1,239.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAIghIABgIIABgBIAAAAIADgNIAEgQIACgKIAAgBIABgEIA5AiIAAABIAAAAIAgASIgBAAIg2ARIAAAAIgMAEIgaAIIgQAEg");
	this.shape_143.setTransform(215.7,237);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-1.7,6.6,-1.7).s().p("AA9A4IgMgHIAOgFIAAANgAgcACIAAAAIAAgBIgPgIIgBAAIgTgMIAQgIIACgBIAIgEIAYgOIAKgFIABAAIAIgFIANAIIABAAIAOAKIAAAAIABAAIgBAAIAAAEIgJAoIAAAAIgBAAIgFAYg");
	this.shape_144.setTransform(199.5,233);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#3F8732","#000000"],[0.067,1],-1.8,-2.9,12.6,-2.9).s().p("AgQArIAEgSIAFgXIAAAAIAAgBIAJgnIAAgEIABAAIAHAEIgBAGIgBABIADgBIAGgCIABABIAAAAIgKAnIAAABIAAAAIgHAfIgSAFg");
	this.shape_145.setTransform(202.7,233.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-3,9.7,-3).s().p("AgtAqIACgKIAHgfIAAAAIAAgBIAKgnIAAgBIAAAAIAEgCIAZAQIgEAYIgBABIAegJIADABIAAAAIAAAAIAQAJIgEAQIgOAEIgWAHIAAAAIgMAEIggAJIgJADg");
	this.shape_146.setTransform(207.2,234.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.7,0.2,10.2,0.2).s().p("AAWAdIAAAAIAAABgAAHAVIAAAAIAAgBIgOgJIAAAAIgOgIIgFgDIA1gdIgDANIgBAEIghARIASAMIAAAAIAHAEIAAAEg");
	this.shape_147.setTransform(202.3,227);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2,7.4,-2).s().p("AAkAgIAAAAIAAAAIgCgBIASgGIADACIAAAAIAAAAIgBAEIAAAAIgCALgAgRAAIAfgJIgBAHIAAABIgBAAIgEAQgAgjgLIgBAAIgTgLIAjgTIAAADIAAAAIgBABIgHAfg");
	this.shape_148.setTransform(206.7,229.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,1,6.5,1).s().p("AgJApIALgEIABAAIA3gRIABAAIACACIAChTIACgBIgCBgIAAAKIgUALIgBAAIgBABIAAAAIgCABIgBAAIgLAGgAhAAIIANgHIAOgDIgDANIAAAAIgBABIgCAIg");
	this.shape_149.setTransform(215.3,236);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-4.1,11.1,-4.1).s().p("AggAgIAGgZIADgQIABAAIAAgBIABgHIAIgDIABAAIAegJIAHgCIAIAEIgvAaIABABIARAKIABAAIAHAFIAEACIgRAGIgfAJg");
	this.shape_150.setTransform(210.3,230.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AA7BIIgggTIAAAAIAAgBIg4giIgBAAIAAAAIgHgFIgHgEIgBAAIgSgKIgBgBIAwgaIAMgGIAAAAIAigUIAjgTIgBBAIgCBTg");
	this.shape_151.setTransform(215.3,230.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.1,1.4,2.8,1.4).s().p("AgcA3IAJgDIAIgCIABAAIADABIAChaIAigUIgCBdIgiATIgBAAIgMAHg");
	this.shape_152.setTransform(215.7,221.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.3,0,4.6,0).s().p("AAoBIIgggTIAAAAIAAgBIg1ggIAegJIABAAIACACIABg2IA5ggIgBA4IgCBbg");
	this.shape_153.setTransform(210.5,219.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,0.3,6.6,0.3).s().p("AgcAWIgBAAIAAgBIgigUIA6gfIgFAUIgBABIA1gQIAAAAIAVgHIAAABIgEAVIg3AdIAFADIgJAFIAAAAIgKAFg");
	this.shape_154.setTransform(199.2,225.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1ArIAEgUIABAAIAAAAIADABIABgWIAAgBIAAAAIADgMIAAgBIAHgaIAAgBIABgEIABABIA2AhIAAABIABAAIAgASIAAAAIgfAJIgEACIgUAGIgBAAIg1AQg");
	this.shape_155.setTransform(203.5,219.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3,8.9,-3).s().p("Ag2AqIACgGIAAgEIAHgfIABgBIAAAAIABgGIAEgMIAEgVIAAgBIAFgCIA1AhIAAAAIAAAAIAgASIgBAAIgIADIgQAFIgeAJIgBAAIgIADIgfAJIgFACIgHACIgCABg");
	this.shape_156.setTransform(209.1,226);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.7,0,5.2,0).s().p("AAvBIIgggTIgBAAIAAgBIg2ghIgBgBIgBAAIAAAAIgJgGIAAgGIARgFIAAAAIA3gQIAAAAIACABIABgrIAcgQIgCBcIgBA3g");
	this.shape_157.setTransform(204.3,213.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.6,0,4.3,0).s().p("AAlBIIgfgTIgBAAIAAgBIgBAAIgugcIABgyIAPgIIAAAAIALgGIACgBIA4ggIgCBnIgBAsg");
	this.shape_158.setTransform(202.7,204.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.2,8.9,-3.2).s().p("Ag1AoIADgQIAGgYIAAAAIAAgBIACgGIABgKIANgDIABAAIADABIAAgUIAuAcIAAAAIAAAAIACABIAfARIAAAAIg3ASIAAAAIgRAEIglAMg");
	this.shape_159.setTransform(200.9,211.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#3F8732","#000000"],[0.067,1],-11.1,-4.9,1.8,-4.9).s().p("AANAYIgcgSIAAAAIAVAEIACAAIAIACIgBANgAALgRIgBAAIgDgGIAAgBIAJACIAAAAIAAALIAAAHg");
	this.shape_160.setTransform(52.8,268);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-4.3,8.9,-4.3).s().p("AgwACIACgHIACgGIAAgCIADgKIASgGIATAEIABAAIAAAAIADABIABAAIAUAEIAAAAIACAAIADAAIAdASIAAAAIgqAMIhDAUg");
	this.shape_161.setTransform(48.6,270.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.9,-3.1,11.5,-3.1).s().p("AgWAUIADAAIATAEIgDAHIADABIACAAIACAAIgRAGIgPADgAAGgDIAAAAIgDgHIAAgBIgLgaIAAAAIgBgCIAAgBIAIABIgDAHIAEABIAAAAIABABIAUADIAIAFIgEAHIgBABIgGAJIAAAAIgEAFIAAACIgBABIgCADg");
	this.shape_162.setTransform(45.8,264.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAxAzIgIgBIgIgCIgCAAIgWgEIAAAAIgDAAIgCgBIgBAAIgSgEIgBAAIgEAAIAAAAIgBgBIgUgDIgBgBIgCAAIgEgBIAEgHIALgRIACgEIABgBIAAgBIAEgFIAAAAIAGgKIABgBIAEgGIACgDIAEgHIADgFIAAgBIABgBIADgEIAAgBIAAAAIACgEIADgFIAOAeIAAAAIABADIACAEIAAABIABACIAEAIIAHAPIAAABIADAGIABAAIAFAMIAIATg");
	this.shape_163.setTransform(50.3,264.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-2.5,7.1,-2.5).s().p("AAzAZIgBgCIAAAAIgCgFIAKACIgFAJgAAFALIACAAIAAAAIABAAIADABIABAAIAEABIgCADgAg5gaIADgCIgBADg");
	this.shape_164.setTransform(47.3,260.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.1,-2.3,12.3,-2.3).s().p("AgRAjIABAAIgCACgAgOAZIACgLIABgGIAAgBIALgrIASALIgHANIgCABIAAABIgFAJIAAAAIgEAFIAAABIgBABIgQAag");
	this.shape_165.setTransform(43.1,256.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.5,6.8,-2.9,-3.6).s().p("AAjAyIgWgFIgDAAIgCAAIgBAAIgHgCIgIgCIgCAAIgBgDIAAgBIgOgeIgBABIgFAIIAAABIAAAAIgDAFIgBAAIAAABIgIAMIgBAAIAAAAIABgCIAQgaIABgBIAAgBIAEgGIAAAAIAFgIIABgBIABgBIAIgNIAFgKIABAAIACgFIAAAAIAAgBIAFgIIABgBIADAHIgEAGIgBABIgFAKIAAAAIgEAGIAAABIgBABIgRAbIAFABIABAAIABABIAUADIAAABIABAAIADAAIABAAIAUAEIAAAAIACABIAEAAIADABIABAAIAFAMIgCAEIgBAAIAAABIgDAEIAAABIgBABIgDAFg");
	this.shape_166.setTransform(45.8,256.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.2,6.9,-3.2,-3.5).s().p("AAKAuIgDAAIgCgBIgBAAIgSgDIgBAAIgEgBIAAAAIgBAAIgIgCIgHgPIgCgFIAFgJIABABIACAAIAQADIAAAAIgJgTIADgFIABAAIAAgBIAMgUIABgCIABgBIADgEIAAAAIAAgBIAEgIIABgBIAIASIAGAMIAAAAIADAIIAAAAIAMAZIAAABIABAAIABADIABAEIABAAIABADIAAABIgGAJIAAAAIgEAHIAAABIgBABIgDAEg");
	this.shape_167.setTransform(56.5,261.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,3.9,-3.3,-6.5).s().p("AAxAXIgQgDIgCAAIgBgBIgKgCIgCgCIAAgBIgOgdIgDAFIgEgMIARAEIABAAIAQACIABAAIAAABIAAACIACADIABADIABAAIAEAKIAJAUgAgPALIgBAAIgEgBIAAAAIgBAAIgBAAIgUgDIAAgBIgCAAIgEgBIAEgGIAIABIABAAIACAAIADAAIAWAFIAAAAIgEAHg");
	this.shape_168.setTransform(50.2,260.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.8,-1.8,10.6,-1.8).s().p("AADAdIAAgBIgBgBIgMgeIgBAAIgDgGIAAgBIgFgLIADgLIAkAXIgPApg");
	this.shape_169.setTransform(53.1,256.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAxAzIgQgDIgCAAIgSgDIAAAAIgEgBIgDAAIgCgBIgBAAIgSgEIgBAAIgEAAIAAAAIgBgBIgVgDIAAgBIgCAAIgEgBIARgcIABgBIAAgBIAEgFIAAAAIAGgKIABgBIADgGIAIgNIACgDIABgBIADgEIAAgBIAAAAIAEgIIABgBIAGANIAAABIAIAQIAAAAIADAGIAAABIAAABIAHAOIAFALIAAABIADAGIABAAIANAfg");
	this.shape_170.setTransform(48.4,253.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-0.1,7,-0.1).s().p("AAyASIAAgBIgBgBIAKAGIAAABIgCAKgAgYARIAAAAIgigUIAdgPIAtgOIgIAiIgBAAIAOgDIgIAMIgDgHIgBABIgFAIIAAABIAAAAIgDAFIgBAAIgEAKgAAmgGIAHgCIgGADg");
	this.shape_171.setTransform(45.5,250.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4,0.4,5.8,0.4).s().p("AgWAdIAAAAIgBgDIAOgqIAIgWIABgBIAEAAIAUAeIAAAAIABABIAAABIgJAWIgIgRIgBABIgEAHIgBABIAAAAIgCAEIgBABIgBACIgMAUIAAABIgBAAIgDAFg");
	this.shape_172.setTransform(56.1,257);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-3.8,8,-3.8).s().p("Ag6AOIAqgNIAAAAIADACIAAgMIAIABIABAAIgJgTIABgGIAeATIgBACIAEABIACAAIACAAIAAAAIAVAMIhtAhgAAxgGIABAAIAOADIgQADg");
	this.shape_173.setTransform(55.8,270.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.3,8.9,-3.3).s().p("AgtACIABAAIACABIADAAIAXAEIABAAIAPADIABAAIgNgeIgBAAIgCgGIAAgBIgGgMIBIArIgBACIADgBIACACIhtAhg");
	this.shape_174.setTransform(67.3,269.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAxAzIgQgDIgCAAIgWgEIgDAAIgCgBIgBAAIgEgBIgOgDIgBAAIgEAAIAAAAIgBgBIgTgDIgBAAIgBgBIgCAAIgEgBIABgCIANgWIADgEIABgBIAAgBIAEgFIAAAAIAGgKIAAAAIABgBIAEgHIACgDIAHgLIAAgBIABgBIADgEIAAgBIAAAAIAEgIIABgBIAMAaIACAEIAAAAIADAHIAAABIAHANIAFAMIAAABIADAGIABAAIANAfg");
	this.shape_175.setTransform(62.4,265.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.7,-2.8,8.7,-2.8).s().p("Ag0AoIALAAIgBAAIgJADgAgHATIAAgBIgXgiIgBAAIgDgGIgBAAIAAgBIgEgGIADgNIA4AiIAAABIAhASIgBAAIg0AQg");
	this.shape_176.setTransform(65.1,259.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.7,0,3.2,0).s().p("AAbBIIgVgNIATAEIABAAIAAAAIAEABIgBAHIAAADgAgfAlIAAgLIAAAAIAEAAIABAAIATAEIABAAIACABIADAAIANADIgMAWgAAZAHIgBAAIgBgDIAIgDIAAADIgEAHIgBAAgAAfhIIABgBIAAACg");
	this.shape_177.setTransform(57.7,263.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAIgWIAAAAIAIgXIAAgBIAAgBIAOATIABACIABACIACADIAEAGIAAAAIABAAIACAHIABAAIAXAiIAAAAIAHAJIAHAKIgSABIgNgaIAAABIgFAIIgBAAIAAABIgDAEIAAABIAAABIgHALIAAAAIgLABg");
	this.shape_178.setTransform(61.7,258.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,-0.3,5.8,-0.3).s().p("AAhAsIAAAAIgUgeIgEAAIgBABIgIAWIgkgWIAAAAIgKgHIgDgGIAAAAIgIgOIAHgEIAdgJIgBAEIAAABIBPgYIAAAXIgBABIABAAIgBATIgbANIAbARIAAALIgOgTIAAABIAAABIgIAWg");
	this.shape_179.setTransform(55.1,251.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.8,6.5,-0.8).s().p("AA8BBIgggUIAAAAIg4giIgBgBIgDgCIgBAAIgCgCIgcgQIAcgOIBJgpIAVANIABAAIgLAtIAAAAIgJAoIgBABIAZgHIAAAGIgBAhg");
	this.shape_180.setTransform(64.3,253.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.2,0,4.7,0).s().p("AApBIIgCgCIAFgBIAAAFgAgiAZIgHgOIAAAAIgDgHIAAgBIgCgDIASgBIgHgKIA0gQIABAAIACABIABggIAZgPIABAAIAAAYIgYANIAXAOIgBAvIAAANIgHAfg");
	this.shape_181.setTransform(68.6,263.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.4,-2.9,9,-2.9).s().p("Ag1ArIAKgqIAAAAIAKgsIA4AjIAAAAIAfARIAAACIg5ARIgBAAIgZAIIgYAIg");
	this.shape_182.setTransform(73.7,253);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.1,-2.9,9.3,-2.9).s().p("AgtAZIADgRIACgGIAAgCIALgqIBQAvIgCAIIhjAeg");
	this.shape_183.setTransform(38.9,269.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.5,6.9,-2.9,-3.5).s().p("AAOAuIgEAAIgCgBIAAAAIgTgEIgBAAIgDgBIgBAAIAAAAIgVgDIgBgBIgBAAIgFgBIARgcIABgBIAAgBIAEgGIABAAIACgDIADgFIAAgBIABgBIAEgHIAAAAIACgDIAHgLIABgBIAAgBIACgFIAAAAIABAAIAFgJIAAgBIAOAeIAAABIACAEIABABIABACIAAAAIAMAZIAAABIADAHIAAAAIAFAKIgLASg");
	this.shape_184.setTransform(42.4,261.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.2,-1.8,6.7,-1.8).s().p("AgbAAIgBAAIgTgLIgPgJIARgJIgDALIBCgUIgCAEIgBAAIgDAHIAAABIgBABIgQAbIAEABIABAAIAAAAIAVAEIABAAIAAAAIADABIABAAIAUAEIABAAIACAAIgGAWIAPgEIgDAKIAAACIgCAHgAA9gwIABAAIAAACg");
	this.shape_185.setTransform(38.6,265.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-2.9,9.8,-2.9).s().p("AgjABIAAgBIAKgrIBHArIgEARIhXAbg");
	this.shape_186.setTransform(30,270.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-0.9,7,-0.9).s().p("AgYAJIAAAAIgigUIBJgoIgCAIIAAACIgKApIAlgLIATALIAAABIgKAqIAAADIgCAGg");
	this.shape_187.setTransform(29.9,265.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.9,-2.9,10.5,-2.9).s().p("AgkAgIAHgfIAAAAIAFgTIAGgZIA4AiIAAABIACABIgBAFIgDAHIgBACIABAAIgBADIAAAAIgDAHIgBABIgBABIgDAFIhCATg");
	this.shape_188.setTransform(37.7,259);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.4,-2.9,12,-2.9).s().p("AgNACIAAgCIACgHIAJgjIAaAQIgCALIAAAAIgHAdIgQAJIAOAJIgkAMg");
	this.shape_189.setTransform(32.6,260.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.3,-0.6,7.6,-0.6).s().p("AAmAuIAAAAIg4giIAAgBIgigTIBFgmIgDALIAAAAIAigKIgdAQIAiAUIAAABIgKArIAAABIgCAGIgDACIACABIAAACg");
	this.shape_190.setTransform(37.7,253.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.3,1.3,7.6,1.3).s().p("AgSAfIAAAAIgigVIBYgvIARgKIAAADIhFAmIAhATIAAABIgGAYIgCAKg");
	this.shape_191.setTransform(34.1,253.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#3F8732","#000000"],[0.067,1],-7,-1.9,5.9,-1.9).s().p("AAVAiIAAgBIg4ghIAAAAIgWgNIAAAAIAEgCIABAAIANgEIACgJIAAAAIACgFIAAgBIACgGIATgLIgHAiIgBAAIABAAIABAAIBOgYIAAAQIgfAQIAeASIAAAWIgFAVg");
	this.shape_192.setTransform(73.9,248.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-3.3,9.7,-3.3).s().p("AgvAoIABgBIAGgZIADgPIAAgBIABgCIAHgeIAPgFIAsAbIAAAAIAAAAIARAKIABABIgCAEIAAAAIgCAJIgNAFIgBAAIgEABIhIAWg");
	this.shape_193.setTransform(65.5,245.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-2.9,9.8,-2.9).s().p("AgtArIAAAAIACgKIABgCIAHgdIAAgBIADgNIAHgcIAAgCIAAAAIA4AhIAAAAIAAABIACABIgGAYIgBABIABAAIABgBIASgFIAAAEIgaAHIgxAQIgPAEIgBAAg");
	this.shape_194.setTransform(67,237.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AgvArIABAAIAGgaIABgGIAAgBIACgJIAAAAIAGgWIABgHIAEgOIAAgBIA4AiIAAAAIAAABIARAJIABAAIgBAGIAAAAIgCAJIAAAAIgCAAIgwAQIgVAFIgTAGIgBAAg");
	this.shape_195.setTransform(74.4,235.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,1,6.5,1).s().p("AAbA/IAAgBIgBAAIg3ghIgBgBIgNgIIgBgBIgUgMIAZgLIAjgUIAAAAIBFgnIAAAPIg5AfIATAMIABAAIAMAHIgVALIANAIIAFADIgFAYIAAAAIgCAJIgCAAIABABIgBAGg");
	this.shape_196.setTransform(67.4,230.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-2.9,11.1,-2.9).s().p("AgfArIAIglIABgEIAAAAIAAgCIAKgnIAAAAIABgDIABABIABAAIAqAaIg3AdIATAMIABAAIAEADIAFADIgEABIgjALg");
	this.shape_197.setTransform(79.5,228.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-0.6,7.1,-0.6).s().p("AAyA5IgRgKIAAgBIAAAAIg4giIAAAAIgCgBIgMgIIgBAAIgTgLIA5geIAfgSIALAGIAAABIABAAIgBAEIAAAAIgKAnIgGAEIAFACIgIAkIgBABIAkgKIgHAdIAAABg");
	this.shape_198.setTransform(74,229.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-2.9,9.9,-2.9).s().p("AgsArIABgEIAIgiIABgDIAAgBIAIgjIACgIIA4AiIABAAIAAAAIAMAIIgBABIAAABIgDAQIgGACIhPAYg");
	this.shape_199.setTransform(57.3,245.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#3F8732","#000000"],[0.067,1],-6,0.2,6.9,0.2).s().p("AAxBBIgRgKIAAAAIgBAAIgrgbIAxgQIAVAOIABAAIgHAbIgCAMIgBABgAg0AEIgHgEIArgXIgDAOIAAABIgHAcgAA1g9IAHgEIgCAHg");
	this.shape_200.setTransform(65.3,238.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.2,6.5,-0.2).s().p("AAbAzIAAgBIgBAAIg3giIgBAAIgGgEIgXgNIgFgDIAngVIASgKIACgBIBGgVIAAABIgHAdIgrAXIAHAEIgDABIAcARIgCAKIAAAAIAAAAIABAAIgHAeg");
	this.shape_201.setTransform(57.9,239.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.3,-2.9,10.1,-2.9).s().p("AgpArIACgLIABgDIAGgcIAAAAIAFgSIAGgaIA4AjIAAAAIAIAEIgEAQIAAABIgCAGIgtAPIgiAKg");
	this.shape_202.setTransform(43.3,245.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.7,-2.9,10.7,-2.9).s().p("AgkArIAIgjIABgGIAAgBIAFgQIAGgbIA2AgIgIAhIgeAJIgFACIgHgNIAAABIgFAIIgBABIAAAAIgDAFIAAAAIgCADIgOAEg");
	this.shape_203.setTransform(50,246.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.3,0,7.6,0).s().p("AAmA0IAAAAIg3giIgBgBIgigTIBIgoIAZgOIgHAcIAAAAIgHAdIgMAHIAiAVIAAAAIgGAcg");
	this.shape_204.setTransform(43,239.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AguArIACgLIAHgfIAAAAIAHgbIAEgRIA4AiIAAABIARAJIAAAAIgnAWIAFACIg7ASg");
	this.shape_205.setTransform(50.6,236.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.2,0.9,6.7,0.9).s().p("AgbAcIAAgBIgigUIANgHIgDALIAAABIA7gRIAXAMIgJAFIAOAJIgIAjIAAABIgBADgAArgeIAFgXIAMgGIgEAUIgBABIABAAIAGgCIgBABIgSAKg");
	this.shape_206.setTransform(51,239.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-0.8,7,-0.8).s().p("AAxA2IgRgKIAAAAIg4giIAAgBIgOgIIgBgBIgTgKIAkgUIAqgYIgGAbIAAAAIgJApIgBAAIAkgKIAEACIAPAJIAAAAIgEAQIgFAXIAAABg");
	this.shape_207.setTransform(50.3,231.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.9,-2.9,10.5,-2.9).s().p("AgmArIAAAAIAFgUIAFgVIAAgBIACgJIAHggIABgCIAvAdIgYAMIATALIABABIAOAIIAAABIAAAAIhGAVIgHACg");
	this.shape_208.setTransform(60.5,231.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.9,-2.9,10.5,-2.9).s().p("AglArIAJgpIAAgBIAGgZIAFgSIA3AhIABAAIAAABIgHAeIgiALIgkAKg");
	this.shape_209.setTransform(54.6,228.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-0.1,7,-0.1).s().p("AgYARIAAAAIgigUIAkgTIAogXIgHAhIAAABIAAAAIABgBIAvgOIgCALIghARIAjAUIAAABIgBAEIgjATg");
	this.shape_210.setTransform(61.1,225.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AgtArIAGgeIADgLIAAgBIAAAAIAGgbIAEgMIAAgCIABgDIABABIABABIA1AhIAAAAIAAAAIACAAIAPAJIgPAIIAAAAIgrAYIgGACIgdAJg");
	this.shape_211.setTransform(77.6,218.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-4,9.7,-4).s().p("AguAhIABAAIADgPIACgKIAFgCIAAAAIAlgLIACgJIAAAAIABgFIABgBIACgMIARAKIgHAdIAAABIAdgIIgBABIgJAFIADABIhUAaIgBAAg");
	this.shape_212.setTransform(71.1,221.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.9,6.5,-0.9).s().p("AAbArIgBAAIg3giIgBgBIgUgLIgOgIIAYgNIAegQIgEAVIgBAAIABAAIABAAIBOgYIgBAOIgsAXIAKAGIgjATIAhAVIAAABIgBACg");
	this.shape_213.setTransform(55.8,222.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AguAsIAAgBIAHgiIADgIIAAAAIAKgrIAAgBIA3AiIABAAIAAABIARAJIAAAAIgBAGIAAAAIgBAJIgmALIgBAAIgFACIguAOIgBABg");
	this.shape_214.setTransform(66.9,219.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AgvArIABAAIAFgVIAEgVIAAAAIAKgpIAAgCIABgBIA4AiIAAAAIAAABIARAJIABAAIgBAGIAAAAIgDAJIgLADIhOAYIgBAAg");
	this.shape_215.setTransform(59,216.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.6,-0.1,7.3,-0.1).s().p("AA0A+IgRgKIAAgBIAAAAIg4giIAAAAIgOgJIgBAAIgTgLIAzgcIA2geIgKApIAAABIgEARIgIADIAGAFIgDAPIgBAAIABAAIABAAIADgBIgMAHIAUALIABAAIAMAIIgDAPIAAABg");
	this.shape_216.setTransform(58.4,210.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.8,-2.9,10.6,-2.9).s().p("AglArIAAAAIAEgPIACgJIAEgRIAAgBIAJgoIABgDIABAAIA2AgIgEAPIhCAlIgEABIgBAAg");
	this.shape_217.setTransform(65.3,208.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.9,-1.7,8,-1.7).s().p("AgOABIAAAAIgegRIgFgDIAHgDIAUgLIgDAQIAAABIAwgPIAOAIIAAAAIADACIAFADIgKAFIAOAJIgIAiIAAAAIAAABIgBADg");
	this.shape_218.setTransform(65,203.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.9,6.5,-0.9).s().p("AAsA2IgRgKIAAgBIgBAAIg3giIAAAAIgBgBIgNgIIgBAAIgUgKIAMgHIBDglIgFAWIgBABIA2gQIAAAAIABgBIAAACIAAAJIgVAMIABAAIAGAEIgfAQIAiAUIABAAIgHAbIgCALIgBABg");
	this.shape_219.setTransform(67.2,214.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.5,0.7,4.4,0.7).s().p("AgPAvIAGgbIAAAAIgigUIAegQIAMAIIABAAIANAIIAAAAIABAAIgBADIgNAHIAKAHIgHAcIAAAAIAAABIgDALgAABgpIAGgDIAHgDIAegJIAAABIgEACIgBABIAAAAIgnAVg");
	this.shape_220.setTransform(73.6,213.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.4,-2.9,9,-2.9).s().p("Ag0ArIAEgWIAEgQIABgDIAAAAIAAgBIAIgiIACgGIAAAAIAAgDIACABIA2AhIAAAAIAAAAIACABIAdARIgHADIgCABIgfAJIgNAEIgBABIAAAAIg1AQg");
	this.shape_221.setTransform(73.6,206.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.5,0,1.9,0).s().p("AgCAQQgHAAgFgCIgEgDIAEgDQAEgDAAgFQAAgGgIgDIAAgBQAHgFAJAAIACAAQAGABAGAEIAAABIABAEQABAEAFABQAAAGgGAFIgBAAQgGAEgGABIgCAAg");
	this.shape_222.setTransform(154.1,291.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,-0.7,3,-0.7).s().p("AgGASQgGgCgFgFIgBAAQgFgFgCgGIgBgBIAAgFIABgHIACgEIAAAAIAGAGIACACIADABIABAFQACADADACQAGAGAHABIADAAIAEAAQAHgBAFgGIABAAIAAAEIgFAFIgGAFIgBAAIgBABIgHABIgFABIgIgBg");
	this.shape_223.setTransform(154.6,287.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.4,0,2.6,0).s().p("AgCAPIgLgDIgDgCIAAAAQgFgDgBgDIgBgEIAAAAIABgDQACgEAEgDIACAAIAAgBQAFgCAHgBQABAIADAGIADADQAFAFAHAAQAEAAADgBIgFADQgHAFgLAAIgDAAg");
	this.shape_224.setTransform(157.7,290.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.1,-1.2,2.6,-1.2).s().p("AACAJIgCAAQgHgBgGgGQgEgCgBgDIgCgFIAHAEIACABQAFACAGABIABAAIADAAQAJgBAIgCIgBADIAAACIgBAAQgGAGgHABIgEAAg");
	this.shape_225.setTransform(155.4,287.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2,0,2,0).s().p("AgLAYIgDgEQgEgGgBgIIAAgGIAAAAIAAgDIABgEIAAgCQACgGACgEQAHgJAHAAIADAAQAGACAGAGIAAABQAFAIAAALQAAAIgDAIIgCAEIgHAHQgEACgEAAQgGAAgFgFg");
	this.shape_226.setTransform(159.4,288.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2,-1.1,2,-1.1).s().p("AgNAJQgFgHgBgHIgBgGIAAAAIABgEQAHADAKAAQAFAAAFgBIAIgDIAAAAIAFACIAAADQgBALgFAJIgIAHQgDABgEAAQgIAAgFgIg");
	this.shape_227.setTransform(150.6,294);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.4,0,2.6,0).s().p("AgQAKIAAAAQgFgDgBgDIgBgEIAAAAIABgDQACgEAEgDQAGgDAIgBQABAIADAGQAGAIAJAAQAEAAADgBIgFADQgHAFgLAAQgJAAgIgFg");
	this.shape_228.setTransform(148.9,294.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.5,0.2,1.9,0.2).s().p("AgRAOIgBgBQAIgFAAgGQAAgGgIgEIAAAAQAHgFAJABIACAAQAGAAAGAEIAAABIABAFQABACAFACQAAAHgGAEIgBAAIAAABg");
	this.shape_229.setTransform(145.3,295.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.8,-1.5,1.9,-1.5).s().p("AgHAFIgEgBIAJgCQAHgCABgEIAEADIACABIgBAAQgGAFgJAAIgDAAg");
	this.shape_230.setTransform(147.3,292.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3,-1.7,2.7,-1.7).s().p("AgIAHQgHgCgFgEIgBAAIgDgDIAMABIAMgBIAEABIADAAQAKAAAGgGIABAAIABAAIgBAEIgEAEQgHAFgJACIgEAAIgIgBg");
	this.shape_231.setTransform(146.1,293.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3,0,3,0).s().p("AgLALIgJgDQgJgDAAgFQAAgEAHgDIADAAIADAAIAHgDIABgBIAIAAQANAAAIADIAFADIABABQAEACgBACIAAABQAAAFgJACIgJADIgMABIgLgBg");
	this.shape_232.setTransform(144.9,291.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,0,2.6,0).s().p("AgQAMIgBAAIgBgBIgFgDIAAgBQABgDgEgDIAAgBIAAAAQABgFAFgDIACgCIAEgBQAGgEAIAAIAIABIACAAQAFACAEACIAAABQAIADAAAGQAAAFgEADIgEADIAAAAIgIADQgFABgGABQgJgBgHgDg");
	this.shape_233.setTransform(150.3,291.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.3,-2.2,3.1,-2.2).s().p("AgGAHIACgCIgBACIAAABIgBgBgAACgHIAFACIgFABIgCADIACgGg");
	this.shape_234.setTransform(148.1,290.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-1.4,2.5,-1.4).s().p("AAJAQQgJgEgMAAIgJABQAFgDADgGQAGgIACgMIAGgBQACAHAGAGQAGAFAHADIgCAFQgFADAAAEIgCACIgEgCg");
	this.shape_235.setTransform(146.1,289.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-1.5,4.1,-1.5).s().p("AgLAVQgHgDgGgGQgGgGgCgGIAFgCQAFgCAEgEIADgDIADgEQAGACAHAAIAKgBIADgBIAIgDIAEgDIABABIgCAFIgBAHIABAEIABADQACAFAFAFIAAAAIgDADQgFAFgHADIgDAAIgHgBQgIAAgGADIgFgBg");
	this.shape_236.setTransform(149.5,287.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.4,-0.9,2,-0.9).s().p("AgKAPIAAgBQAAgLgDgIQgCgFgDgEIgBgCIABAAIAIABIACAAQAIAAAGgCIAMgDQACAFAAAGIAAADQgBAGgDAFIgDAEIgDADQgEAEgFACIgEACIgHABIAAgGg");
	this.shape_237.setTransform(146.6,285.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.9,0,3.2,0).s().p("AgWAlQADgGABgGIAAgDQAAgGgCgFIAJgFQAJgEADgGQADgEAAgFIAAgDQAAgMgNgJIgBgBIABAAIABAAIAGABQAMABAJAKQABABgDgMIAGAXIAAABQgGAGgDAGIgBACQgCAEAAAHQAAAKAFAIIgEAEIgIADIgDABIgJABQgIAAgGgCg");
	this.shape_238.setTransform(150.5,282.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,0.2,2.6,0.2).s().p("AgRAOIgBgBIgEgDIAAgCQAAgCgEgDIAAgBIAAgCQABgDAFgDIACgCIAEgBQAGgDAIAAIAKABQAFAAAEADIAAAAQAIAEAAAGQAAAGgIAFIAAAAIgBABg");
	this.shape_239.setTransform(141.5,295.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-1.9,4.1,-1.9).s().p("AgLARQgHgCgGgHQgGgFgCgGIAFgCQAFgDAEgDIADgDIADgEQAGACAHAAQAGAAAGgCIAGACQgIADAAAFQAAAFAJADIAKACIADAEIAAAAIgDACQgFAGgHADIgKgBQgIAAgGADIgFgCg");
	this.shape_240.setTransform(140.7,292.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-1.4,2.5,-1.4).s().p("AAJAQQgJgEgLAAIgKABQAEgDAEgGQAGgIACgMIAFgBQADAHAGAGQAGAFAHADIgCAFQgFADAAAEIgBACIgFgCg");
	this.shape_241.setTransform(137.3,294.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3,0.4,3,0.4).s().p("AgbAJQgCgDAAgDQgBgDAJgEIACAAQAFAAAFgDIAJAAQANgBAJAEIAEACIABABQAEACAAACIAAACIgDAEg");
	this.shape_242.setTransform(136.1,296.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,0,2.7,0).s().p("AgBAoQgIAAgGgIIAAAAIgDgDQgIgMAAgRQAAgNAFgKIADgFIACgDIABAAQADgEAEgCQAEgCAEgBQAKAAAIAKIABACQAIAMAAAQIAAABIAAAGQgCAMgGAKQgEAFgEADQgFADgGAAIgBAAg");
	this.shape_243.setTransform(134,291.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.4,-0.9,2,-0.9).s().p("AgKAPIAAgBQAAgQgIgMIgBgCIABAAIAIABQAJAAAHgCIAMgDQACAFAAAGQAAAIgEAGIgDAEIgDADQgEAEgFACIgEACIgHABIAAgGg");
	this.shape_244.setTransform(137.8,290.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.4,0,2.7,0).s().p("AgQAKIAAAAQgFgDgBgDIgBgEIAAAAIABgDQACgEAEgDQAHgDAHgBQABAIADAGQAHAIAIAAIAHgBIAAAAIgFADQgHAFgLAAQgJAAgIgFg");
	this.shape_245.setTransform(130,294.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.5,0,1.9,0).s().p("AgCAPQgJABgHgFQAIgFAAgGQAAgFgIgFIAAAAQAHgFAJABIACAAQAGAAAGAEIAAABIABAFQABACAFADQAAAGgGAEIgBAAQgGAEgGAAIgCAAg");
	this.shape_246.setTransform(126.4,295.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.1,-1.2,2.6,-1.2).s().p("AAAAIQgHAAgGgFIAAAAQgGgFgBgGIABAAIAGAEQAGACAHABIACAAIACAAQAJABAIgDIgBAFIgBABIAAAAQgHAGgKgBIgCAAg");
	this.shape_247.setTransform(127.7,291.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,-0.7,3,-0.7).s().p("AgGARQgGgCgFgEIgBAAQgEgDgCgFQgCgEAAgFQAAgGADgGIAGAGIAFAEQABAGAFAFIABAAQAFAFAHAAIADAAQAJABAHgGIAAAAIABgBIAAABIAAADIgFAFQgGAGgJABIgFAAIgIgBg");
	this.shape_248.setTransform(127,291.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-1.4,0,2.6,0).s().p("AgHAVQgEgHgBgIIgBgGIAAAAIABgDIAAgBIABgGQABgFADgFIAEgDQAEgFAGAAIABAAQgFALAAANQAAAQAIAMIADAEIgHABQgIAAgGgIg");
	this.shape_249.setTransform(131,292.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.2,0,4.2,0).s().p("AgBAlIgCAAQgIgBgHgDIgFgDIgBAAIgFgEIgGgGIgBgBQgGgJABgKQAAgPAMgKIACgDIACAAQADgDAEgBIAGgCQAEgBAFAAIADgBQAKAAAIAEIALAGIABABIACACIAAACQgBAMALAIIAAABIAAAHIAAACIgCADIgDAEIgCAAQgGAAgFAFIgDADQgDAFgCAFQgHADgJAAIgBAAg");
	this.shape_250.setTransform(128.2,287.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-9.5,0.4,1.3,0.4).s().p("AgIAPQAEgHAAgIQAAgNgHgJIAIAEIABABQAOAJAAAMQAAALgJAIQgEgHgHgBg");
	this.shape_251.setTransform(122,284.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.8,0,2.3,0).s().p("AgGAXQgBgMgFgIIAAgBQAJgHAAgKQAAgNgPgKIABAAQARAAALAMQAFAEADAGIgCABIgCACQgMALAAAOQgBAKAGAJQgIAGgKACQADgHABgJg");
	this.shape_252.setTransform(123.7,286.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,0,2.7,0).s().p("AAAApIgBAAIgGgCQgFgDgDgDIAAgBIgDgDQgGgJgBgLIgBgJQAAgNAGgKIACgFIACgCIAAgBIABgBIAFgEIACgBQAEgDAEABQAKgBAIAKIABACQADAEACAFQADAJAAAKIAAABIAAAGQgCANgGAJQgDAFgFADIgBABIgGADIgEAAg");
	this.shape_253.setTransform(142.8,287);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4,0,4.1,0).s().p("AgMAlQAEgHAAgIQAAgGgCgFIAGgDQACALAEAIIADADIAAABQAEAEAEACQgGACgGAAQgHAAgGgCgAAAglIAAgBIAAAAIABAAIAGABIADAAIgFADIgFgDg");
	this.shape_254.setTransform(140.7,287.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.4,0,5.4,0).s().p("AAAAgIgIgBIAAAAQgIgKgKABQgFgBgEADIgCgCIgFgCIAAAAQgJgHgCgJIAAgBIAAgDIAAgCQABgDABgCQADgIALgHIAGgDIAEgCQALgDALgBIAFAAIAAAAQAWAAAQAJIABAAIABABQAOAKAAALIAAADQAAAEgDAFQgFAGgIAEIgKAGIgLADQgHABgIAAIgCAAg");
	this.shape_255.setTransform(145.5,280.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.9,0,5.9,0).s().p("AgDAfIAAAAQgIgKgKAAQgFABgEACIgDgCIgFgCQgLgJABgLIAAgCQACgMANgIIALgFQAKgDALgBIAGAAQAWAAAPAJIABAAIABABIAGAEIgBABIAAABIgCACIgDAFQgGAJABAOIABAJIgHAEIgLACQgIACgJAAIgIgBg");
	this.shape_256.setTransform(136.3,285.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIACgEIACgNIAGgYIAAgBIADgNIAIgeIBDApIgCALIAPgFIAIAFIAAABIAAAAIgaAIIgDAAIgNAEIgCABIgEABIgNAEIgQAFIgDABIgMAEIgMADIgEABg");
	this.shape_257.setTransform(130.5,258.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.1,-2.9,11.3,-2.9).s().p("AgcAgIAIgeIAAgBIAKgrIARAKIgJAFIAiAVIgIAhIgdAJIgLADIgOAFg");
	this.shape_258.setTransform(136.9,255.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-2.3,6.6,-2.3).s().p("AA8AxIAAAAIgIgFIALgDIAAAKgAgcgEIgjgVIALgFIgBADIgBAFIAAAAIBdgcIATAMIgKAsIAAAAIgIAfg");
	this.shape_259.setTransform(130,254.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.1,-0.5,6.8,-0.5).s().p("AgaANIgTgMIAQgEIAAAAIADABIAAgPIADgBIAOgEIgIAiIAAAAIA/gSIg2Adg");
	this.shape_260.setTransform(138.4,249.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("AgvAOIADgNIAAAAIADgKIAIgiIA7AlIgCAFIAHgBIABAAIAWAMIABAAIgBAAIgOAFIgEABIAAAAIhHAVIgTAGg");
	this.shape_261.setTransform(143.5,259);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-1.5,6.6,-1.5).s().p("AA8A5IAAAAIgXgNIAagIIAAALIAAAMgAgcADIgjgUIAKgEIA2gfIAVgGIAGAEIgEAQIAAAAIAUgGIAHADIgLAsIAAAAIgHAeIgBgEIABAFIAAAAIgBAGg");
	this.shape_262.setTransform(142.9,254.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("AgsACIAAgBIACgFIAEgXIAFgPIBYA0IAAABIAAAAIhtAgg");
	this.shape_263.setTransform(156.2,259.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.4,-2.9,11,-2.9).s().p("AgfAmIABgGIAAAAIAAgBIAHgeIAAAAIALgsIAgAVIgUALIAiAUIgEAPIgeAKIgaAIIgBAAIgGABg");
	this.shape_264.setTransform(149.3,254.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.7,-1.5,6.2,-1.5).s().p("AgfADIgHgDIBMgWIgBADIgCAHIAAAAIAagIIAAAMIg8AfgAg8gOIAIgCIgCAGg");
	this.shape_265.setTransform(151.2,249.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1,6.5,-1).s().p("AA8A+IAAgBIhYg1IgjgUIAUgLIA8ghIALgGIgIAhIAAABIgKApIA2gPIAAACIgUAKIATAMIAAAQIAAAZg");
	this.shape_266.setTransform(155.7,254.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,0,2.6,0).s().p("AgSALIgFgDIAAgCQAAgDgDgCIAAgBIABgBQAAgEAEgDIADgCIAEgCQAHgCAHAAIAKABQAFABAEACIABAAQAHAFAAAFQAAAGgHAFIgBAAQgIAFgLgBQgKABgIgFg");
	this.shape_267.setTransform(122.6,295.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-1.6,2.5,-1.6).s().p("AAJAOQgJgDgMAAIgJAAQAEgDAEgFQAGgIACgKIAJADIAFAGQAGAGAHACIgCAFQgEADgBAEIgCACIgEgCg");
	this.shape_268.setTransform(118.5,293.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.8,-1.5,3.9,-1.5).s().p("AgMAVQgHgDgHgGIgEgGIAEAAQAKAAAIgFIAFgCIAGgHIADgFQAKgCAJgGIABABQgDAFAAAHQAAAFACAEQACAEAEAEIABAAIgEADQgFAFgHADIgKgBQgHAAgHADIgEgBg");
	this.shape_269.setTransform(122,291.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.5,0,1.9,0).s().p("AgCAPQgJABgHgFQAIgEAAgHQAAgFgIgEIAAgBQAHgEAJgBIACAAQAGABAGAEIAAABIABAEQABAEAFACQAAAFgGAFIgBAAQgGAEgGAAIgCAAg");
	this.shape_270.setTransform(115.6,291.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.8,-1.1,2.6,-1.1).s().p("AgCAdQgKgBgHgLIgEgGIAIgDIAAAAQAHAEAIAAIACAAQAHAAAGgEIABAAQAGgFAAgFIAAAAIADACQgCAJgFAIQgEAGgEADQgFADgFAAIgCAAgAgPgNQgEgDgFgBQAHgDAFgFIADgDQAFAEAGACIAIABIAGAAIAGgCQgEADgCAEIgBADQgGgEgHgBIgCAAQgIAAgHAFIAAAAg");
	this.shape_271.setTransform(115.3,292.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.4,0,2.6,0).s().p("AgCAPIgLgDIgDgCIAAAAQgFgDgBgDIgBgEIAAAAIABgDQACgEAEgDIACAAIAAgBQAFgCAHgBQABAIADAGIADADQAFAFAHAAQAEAAADgBIgFADQgHAFgLAAIgDAAg");
	this.shape_272.setTransform(119.2,290.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.7,-0.5,2.7,-0.5).s().p("AABAAIAEgEIAAABIABAFQgGAAgFADIAGgFg");
	this.shape_273.setTransform(118.3,289.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,-0.7,3,-0.7).s().p("AgGASQgGgDgFgEIgBAAQgFgFgCgFIgBgDIAAgEIABgHIACgEIAAAAIAGAFIACACIADADIABAEQACADADADQAGAEAHACIADAAIAEAAQAHgCAFgEIABgBIAAAEIgFAFIgGAEIgBABIgBAAIgHACIgFABIgIgBg");
	this.shape_274.setTransform(116.1,288.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.1,-1.2,2.6,-1.2).s().p("AACAJIgCAAQgHgCgGgEQgEgDgBgDIgCgEIAHADIACABQAFACAGAAIABAAIADAAQAJAAAIgCIgBACIAAADIgBABQgGAEgHACIgEAAg");
	this.shape_275.setTransform(116.9,288.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2,0,2,0).s().p("AgLAXIgCgDQgFgGgBgIIgBgGIAAAAIABgEIAAgDIABgCQABgGAEgEQAFgJAIAAIADABQAHABAFAGIAAABQAFAIABALQgBAIgDAIIgCAEIgIAIQgDABgEAAQgGAAgFgGg");
	this.shape_276.setTransform(120.9,288.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3,0,3,0).s().p("AgUAJQgKgEABgFQgBgDAJgEIACAAQAFAAAFgDIAJgBQANAAAJAEIAEABIABABQAEADAAACIAAABQgCAEgHAEQgJADgNAAQgMAAgIgDg");
	this.shape_277.setTransform(106.4,292.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,0,2.6,0).s().p("AgSALIgEgDIAAgCQAAgCgEgDIAAgBIAAAAQABgFAFgDIACgCIAEgCQAGgDAIAAIAIABIACAAQAFACAEACIAAABQAIAEAAAFQAAAHgIAEIAAAAIgIADQgFABgGAAQgKABgIgFg");
	this.shape_278.setTransform(111.8,291.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-1.4,2.5,-1.4).s().p("AAJAQQgJgEgLAAIgKABQAEgDAEgGQAGgIACgMIAFgBQADAHAGAGQAGAFAHADIgCAFQgFADAAAEIgBACIgFgCg");
	this.shape_279.setTransform(107.6,290);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-1.5,4.1,-1.5).s().p("AgLAVQgHgDgGgGQgGgGgCgGIAFgCQAFgCAEgEIADgDIADgEQAGACAHAAQAHAAAGgCIAIgDIAEgDIABABIgCAFIgBAHIABAEIABADQACAFAFAFIAAAAIgDADQgFAFgHADIgDAAIgHgBQgIAAgGADIgFgBg");
	this.shape_280.setTransform(111,288.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.4,-0.9,2,-0.9).s().p("AgKAPIAAgBQAAgQgIgMIgBgCIABAAIAIABQAJAAAHgCIAMgDQACAFAAAGQAAAIgEAGIgDAEIgDADQgEAEgFACIgEACIgHABIAAgGg");
	this.shape_281.setTransform(108.1,286.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-2.7,0,2.7,0).s().p("AgBApQgIgCgGgGIAAgBIgDgEQgIgLAAgRQAAgNAGgLIACgEIACgCIABgBQADgEAEgCQAEgCAEAAQAKAAAIAKIABABQAIAMAAAQIAAABIAAAGQgCANgGAIQgEAGgEADQgFAEgGAAIgBAAg");
	this.shape_282.setTransform(104.3,287.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.4,0,5.4,0).s().p("AgIAgIAAAAQgIgKgKAAQgFAAgEACIgDgBIgEgEQgLgIAAgLIAAgCIAAAAQACgMANgIIALgFQAKgDAMAAIAFgBQAXAAAPAJIABABIABABQAMAHACALIAAACQAAAHgEAFQgDAGgJAFIgJAEIgMAEQgIABgJAAIgIAAg");
	this.shape_283.setTransform(107,281.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.1,0,3,0).s().p("AgYAlQAEgHAAgIQAAgGgCgFIAJgFQAJgFAEgEQACgGAAgGIAAgEQgCgLgLgHIgBgBIABAAIABAAIAGAAQAMADAJAIIAHAIIABADIgEADQgGAFgDAHIgBACQgCAFAAAGQAAAKAFAJIgEACIgIAEQgFACgHAAQgIAAgGgCg");
	this.shape_284.setTransform(112.2,283.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.2,0,4.2,0).s().p("AgDAlIgBAAQgGgBgFgBIgCgBIgHgEIgCgCIgDgCIgFgGIgBAAIgBgBQgFgJgBgKQAAgFACgFIABgDQAEgHAGgFIAEgDIAEgDIAEgCIAFgBIAIgBIAEgBIACAAQAJAAAIAEIADABIAIAGIABAAIAEAEQAIAJAAAMQgBAJgEAIIgCgBQgJAAgGAJQgDAEgBAGQgIACgJAAIgDAAg");
	this.shape_285.setTransform(117.3,284.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.2,-0.9,6.7,-0.9).s().p("AgaAJIgMgHIgXgMIAYgOIA2geIgHAiIgBAAIAVgGIAgATIgPA9g");
	this.shape_286.setTransform(77.1,260.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("AgxAUIAGgZIAJgmIBZA1IhtAig");
	this.shape_287.setTransform(93.9,264.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.2,-2.9,10.2,-2.9).s().p("AgmAhIADgPIAPg9IA+AmIgGAZIhNAYg");
	this.shape_288.setTransform(85.4,264.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AguAqIAHggIADgLIAKgqIBKAsIgEAPIhUAaIgEABIgDABg");
	this.shape_289.setTransform(77.1,265.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#3F8732","#000000"],[0.067,1],-6,-1.4,6.9,-1.4).s().p("AgYAEIgggTIBEgVIgCAJIgBABIAwgPIgtAZIAjAUIgJAmg");
	this.shape_290.setTransform(85.8,259.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-2.9,9.8,-2.9).s().p("AgtArIAIghIACgIIAAgBIAAgBIABgCIAEgUIAFgUIA4AhIAAABIAPAIIgDAQIhEAWIgUAFg");
	this.shape_291.setTransform(82.7,254.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.5,6.5,-1.5).s().p("AA8A5IhZg2IgigUIAtgYIA0gQIgEAPIAAAAIgJApIgBABIAsgNIAAARIgBAMIAAAEIAAAZIgBAOg");
	this.shape_292.setTransform(93.4,259.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.1,-2.9,9.3,-2.9).s().p("AgyArIACgJIAEgQIAEgRIAAAAIAHggIADgMIAUAMIgFAXIgBABIAdgKIANAJIAAAAIAZAOIgBAHIg0AQIgwAPg");
	this.shape_293.setTransform(91.8,252.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAECLIAAABIgBAAIABgBgAgTBiIAAgFIADgbIAEglQgKg5AAhAQAAgVABgPIAOgDIACADQAFAPAAAGQAAAJgIANQAAAMAPBRQAAAOgJAeIgBAOIgGAdIAAAJIgKgGgAhIBcQgHgOgBgFIABgHQABgTAIgOQAJgRAAgQQgIgtAAgWIABguIAEgBIAMgEQADATAAAaQgBALgFAGQgEAHgBAJQABARAPAIQAPAIAAAKIgUAeQgOAWgEALIgCAFQAAACAMANIAGAKIgFACQgEACgDADQgEgGgFgFgABYBXIgBAAIgGgSIAAgCQACAJAJAHIAAAAIACAFIgGgBgAAZBCQAFgVABgMQAFgVAKgRQAKgPAAgCQAAgCgNgOQgMgNAAgNQAAgQAJgiQAEgTAFgGIAJAAIAAAKQAAANgHARQgHASAAAJIAMASQAMASAAAMQAAALgMAhQgMAgAAAKIAAAEQgBAGgCAGQgMABgKADIAGgQgAh0BHIgIgFIgDgBIAAgEIAUhBQgKgbAAgFQAIgsAAgVIgBgZIASgCQACALAAANIgHBVQAAApgTAoIAAAEIABAGIgBgBgABbgZQAAgsAPgQQgSgLAAgOIAAgJIAkgLQAAAMgQABQABAOAJAJQAKAHAAAGQAAAGgLAUQgLAUAAAHQAAACAQAVQAAAEgKAFQgKAFgBAOQAAAFACAJIgGADQgLAHgDAIQAIhDAAgNgAhDiCIACAAIgCAMIAAgMg");
	this.shape_294.setTransform(132,274.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#804000").s().p("AAGCMIAAgIIAAgCIAFADIACACQgEACgDAEIAAgBgAgFBqIgBgBIgBgJIAGgeIABgNQAJgeAAgOQgOhRAAgMQAHgOAAgIQAAgHgFgOIgCgEIAEgBIABgBIAHgCIAsgDQgFAGgEASQgJAiAAARQAAANANANQANAOAAACQAAACgKAOQgLASgFAVQAAALgGAVIgFARIgLAFQgNAIgBAMIgCgCgAgjBfIgFABQgEAAgEABIgHgKQgMgNAAgCIACgGQAEgKAOgWIAUgfQAAgJgPgIQgPgIAAgRQAAgKAFgGQAFgHAAgKQAAgagDgTIAMgEIAEgBIAPgFQgBAPAAAVQAABAAKA5IgDAkIgEAcIAAAFQgIgEgKAAgAhiBRIgBAAIgBAAIgJgEIgDgEIgBgHIgBgDQAUgoAAgpIAGhVQAAgNgCgLIAZgCIAAAMIgCAFIABAAIgBAuQAAAVAIAtQAAARgJARQgIAOgBASIAAAIQAAAFAIAOQgMgMgRAAgABgBZIgBgFIAEACIACACIgCABIgDAAgABYBYIgBAAQgPgJgXAAIgGAAQADgGAAgHIAAgDQAAgKAMghQAMggAAgLQAAgMgMgSIgMgSQAAgKAHgRQAHgRAAgNIAAgLIAJgBIgHAeIATgGIAJgCIAAAJQAAAOASALQgPAQAAArQAAAOgIBCQgBADAAADIgBADIAAACIABACIgBACIAGASgAiOA9QgFhaAQhaIABAAIACABIAAgGIAUgBIACAZQgBAUgHAtQAAAFAKAbIgVBBIAAADQgIgDgJgBgABoAYQAAgOAKgGQAKgEAAgEQgQgVAAgCQAAgHALgUQALgUAAgGQAAgGgJgIQgKgIAAgOQAQgBAAgMIARgFQgJBSABBUIgFAAQgLABgKADIgFACQgCgJABgFg");
	this.shape_295.setTransform(131.8,274.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("AguAKIACgKIACgIIAJgiIBGAqIgBADIAEgBIAPAIIAAABIAAAAIhtAgg");
	this.shape_296.setTransform(113.2,261.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.5,8.9,-3.5).s().p("AgsAJIAAgDIAAgMIAFgTIAegJIA3AiIgCAIIhAATIgZAIIABgag");
	this.shape_297.setTransform(104.3,260.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.2,-2.9,9.2,-2.9).s().p("AgyArIAJgqIAAAAIAEgOIABgHIAGgXIA4AjIAAAAIAaAPIgCAGIgYAHIgdAJIgEABIgsAOg");
	this.shape_298.setTransform(100.6,255.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.1,-1,3.8,-1).s().p("AgfAWIAYgHIgEASIgBAAIArgNIABABIgIAjgAAEg3IADACIABAAIgFASg");
	this.shape_299.setTransform(106.5,254.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAFgRIABgHIAEgSIAAAAIAGgaIAFgSIA1AhIgGAYIgBABIAhgKIAJAFIAAAAIhCAUIgrAOg");
	this.shape_300.setTransform(110.7,253.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#3F8732","#000000"],[0.067,1],-8,-2.7,4.9,-2.7).s().p("AAsAtIAAgBIgPgIIASgFIgBAJIAAAGgAgsgIIgCgBIBBgUIAAAAIADABIAAgKIAEgBIATgGIgTBPg");
	this.shape_301.setTransform(114.3,257.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.8,-3,9.6,-3).s().p("AguAnIAThPIABAAIAEgBIBGAqIgDANIhcAcg");
	this.shape_302.setTransform(121.5,257.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3,8.9,-3).s().p("Ag1AqIAFgZIAEgRIAAAAIAHggIADgJIACAAIACAAIACABIAyAeIAAABIAhASIAAAAIgiAKIgBABIgEABIgDABIgBAAIgSAGIgIACIgIADIggAJg");
	this.shape_303.setTransform(117.6,251.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.6,-5.6,11.8,-5.6).s().p("AgZAQIAHggIATAFIAAAAIADAAIADAAIATAEIgCAIIgyAQg");
	this.shape_304.setTransform(111.4,247.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.3,-3,4.6,-3).s().p("AApAqIghgTIAAgBIgygdIAOACIAAAAIgNgfIgBAAIgCgGIAWgBIgMAUIAFABIABAAIAAABIASADIgDAOIgBAAIAegJIABAAIABAAIACABIAEAAIAVAEIgCA0g");
	this.shape_305.setTransform(119,247.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-2.6,6.6,-2.6).s().p("AA8AuIgJgGIAIgCIAEgBIAAAKgAgcgHIgBgBIgDgCIgHgEIgEgDIgUgLIAigSIASADIABAAIAAAAIAEABIABAAIgHAgIgBABIAxgPIgHAfIAAABIgEAQg");
	this.shape_306.setTransform(110.2,250.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.7,-0.3,4.2,-0.3).s().p("AgSAjIgFgKIAAAAIgDgGIAegBIAAABIAAABIAIAAIAAAAIgBABIgOAYgAAIgRIAIAEIgCAFgAgDgiIAVgHIAAAAIAJgDIgGARIgPAHg");
	this.shape_307.setTransform(106.9,240.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAxAzIgOgCIgCgBIgCAAIgCAAIgUgEIgDAAIgCgBIgBAAIgSgEIgBAAIgEAAIAAAAIgBgBIgSgDIgDAAIAAgBIgCAAIgEgBIACgEIAPgYIABgBIAAAAIAAgBIABgBIASgBIgJgNIABgBIAMgUIABgCIABgBIADgEIAAgBIAAAAIAEgIIABgBIAIASIAGAMIAAAAIADAHIAAABIAMAZIAAABIABAAIACAGIABAAIANAfg");
	this.shape_308.setTransform(111.2,242.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAgBIAAgBIAJAAIgBABIAAABgAgOAYIAAAAIgEgHIACgEIAFgOIAGgRIAIgaIABgBIAEAAIANATIADAFIAEAGIAAABIABABIAAAAIgIAWIgIgRIgBABIgFAHIAAAAIAAABIgDAFIgBAAIgBACIgLAUIgBACg");
	this.shape_309.setTransform(110.2,237.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIAaADIgfgPIAIgWIAAAAIAEgMIAEgLIABgBIAAgBIAFAJIAQAXIAAAAIAAAAIAEAHIAAAAIACACIAKAOIABACIAHAKIADAGIAAAAIAFAGIAJANIgSABIgJAAIgfACg");
	this.shape_310.setTransform(106,237.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#3F8732","#000000"],[0.067,1],-8,2.5,4.9,2.5).s().p("AANARIAMgEIABABIACABIgGAPgAgIgOIAAgCIAYgNIgCAGIAAABIAAABIAAAAIgFAWIgCABIABABIgBAEIAAABgAgXAAIAAAAIgEgFIAKgFIgFALg");
	this.shape_311.setTransform(115.4,236.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-2.4,8.6,-2.4).s().p("AgaAkIgBAAIgEgGIAAAAIAAgBIgQgXIAAgBIAFgRIAFgWIAAAAIABgEIABABIABABIA1AgIABAAIAAABIABAAIAbAQIgCAEIgNAEIgNgTIgFAAIAAABIgKAaIgIADIAAAAIgWAHg");
	this.shape_312.setTransform(109,233.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgDgHIAAgBIgGgMIAIgWIAAAAIAFgNIAAgBIADgJIAAgBIAAgBIAGAIIAQAYIAAAAIABAAIACAHIABAAIABABIAJANIAIAMIAGAIIAAAAIANATIglACIgUABg");
	this.shape_313.setTransform(116.3,238.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2,6.5,-2).s().p("AA5AuIAAABIAAAAIgBADIgbgQIgBgBIAAgBIgBAAIg1ggIgBAAIgBAAIgBAAIAAgBIgOgJIgBAAIgTgMIAEgCIAogLIgBADIAVgHIAAAAIANgDIABAAIARgGIABAAIARgFIgHAdIAAABIgBAAIAAABIgJAoIAAAAIAWgHIAAAAIAFgBIAEgBIgBAsIAAABg");
	this.shape_314.setTransform(108.2,229.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.4,-3.4,11,-3.4).s().p("AggAnIAJgoIAAgBIAAAAIAAgBIAHgdIASgGIAgATIgEADIgiASIASALIABAAIAMAIIgHACIAAAAIgUAGIgFACIgFABIgBAAIgWAHg");
	this.shape_315.setTransform(114.9,227.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.8,-3.9,10.6,-3.9).s().p("AgkAhIAJgoIAAgBIADgNIADABIABAAIACABIADAAIAVAEIACAAIAQADIABAAIgJgVIAPAKIgCAEIAFABIABAAIABABIACAAIgiARIAUAMIAEACIhBAUg");
	this.shape_316.setTransform(103.4,247.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.5,6.5,-1.5).s().p("AAcAlIAAAAIg5giIAAAAIgOgIIgUgMIApgWIAXgNIADAAIgDAOIAAAAIgIApIgBAAIBBgTIAHAFIAAATIgHAbIAAAAIgDASg");
	this.shape_317.setTransform(100.5,250.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["#3F8732","#000000"],[0.067,1],-4,-2.9,10.4,-2.9).s().p("AgnArIAGgXIAEgTIAAAAIAKgsIA5AiIAAABIACABIgoAWIATALIgdAIIgdAKg");
	this.shape_318.setTransform(94.2,247.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,0.1,7,0.1).s().p("AAhA2IAAgBIg4giIgBAAIgFgDIgdgQIA1gdIAkgUIACABIAAgDIABAAIALgEIgQAsIAAABIgFAOIAAAAIgBABIAIAAIAAAAIgBABIgRAcIAFABIABAAIABAAIAVAEIAAABIABAAIADAAIABAAIANADIgYAMg");
	this.shape_319.setTransform(94.6,240.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAxAzIgQgDIgCAAIgWgEIgDAAIgCgBIgBAAIgDgBIgDAAIgMgDIgBAAIgEAAIAAAAIgBgBIgVgDIAAgBIgCAAIgEgBIARgcIABgBIAAAAIAAgBIAEgFIAAAAIAGgKIABgBIAMgUIABgCIABgBIADgEIAAgBIAAAAIAEgIIABgBIAIASIAfAOIgZgCIAAAAIADAHIAAABIAMAZIAAABIABAAIACAGIABAAIAEAKIAJAVg");
	this.shape_320.setTransform(100.9,241);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.1,-1.5,6.8,-1.5).s().p("AAeAlIAAAAIgNgIIAdgIIAPAJIAAAAIgGAWgAgaADIAAAAIgigUIAcgPIAigUIAGAEIAAAAIgJAtIAAAAIgFASg");
	this.shape_321.setTransform(91.4,247.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.1,-2.9,11.3,-2.9).s().p("AgdArIAJgqIAAAAIAIgfIADgNIAiAWIgcAPIAhAUIABAAIgDAMIg6ASg");
	this.shape_322.setTransform(85.7,246.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-0.9,7,-0.9).s().p("AAgAsIAAgBIg4ghIAAgBIgEgCIgegSIAfgQIAtgZIgHAgIAAAAIgKApIAAABIA6gSIgHAhIAAAAIgEAQg");
	this.shape_323.setTransform(82.5,248.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AgvArIABAAIAHgiIACgHIAAgBIAKgpIAAgCIABAAIA4AhIAAAAIAAABIARAJIABABIgBAEIAAABIgDAJIgLAEIhOAXIgBAAg");
	this.shape_324.setTransform(76.4,242.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-1,7.1,-1).s().p("AAzA1IgRgKIAAgBIgBAAIg3ghIAxgPIAIAGIgIAkIgBABIAggKIgBAEIgFAWIgBABgAAegPIAAAAIABgGIAAgBIAHgdIAEgBIADABIABABIAAAAIABAAIgBAEIAAABIgIAhIgKAGgAg5gMIACAAIgBABg");
	this.shape_325.setTransform(76,237.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.7,-0.2,6.2,-0.2).s().p("AgfAQIgBAAIgdgRIABgEIAWgHIABAAIAbgIIAAAFIgBABIA1gQIAAAAIAUgHIgBAKIg1AcIAdARIgjAUg");
	this.shape_326.setTransform(87.9,240.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.3,-2.9,10.1,-2.9).s().p("AgqArIAJglIAAgEIABgBIAAgBIABgFIAIghIAAgBIABgEIABABIABABIA1AhIABAAIAAAAIAKAGIgGAVIgbAIIgBAAIgVAHIgfAKg");
	this.shape_327.setTransform(83,236.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.7,0.1,7.2,0.1).s().p("AAiA2IAAAAIgBAAIg1ghIgBgBIgBgBIgBAAIAAAAIgBgBIgIgFIgFgDIgBAAIgTgKIA4gfIABAAIACgCIABAAIArgYIADgCIgHAdIgTALIATALIAAAAIAPAIIAAAAIAAAAIAAAEIAAAAIgKAoIAAABIAAABIgDAOg");
	this.shape_328.setTransform(83,230.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAgBIAAAAIAGgPIAAgBIAPgqIAKgfIABgBIAEAAIAMASIAFAIIADAEIAAAAIABABIAAABIgIAWIgIgRIgBABIgFAHIAAAAIAAABIgDAFIgBAAIgBACIgLAUIgBABIgGAKIAAAAIgEAGIAAABg");
	this.shape_329.setTransform(99.9,236.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.3,-2.9,9.1,-2.9).s().p("Ag0ArIABgFIAFgWIADgOIABgBIAAgBIAJgnIAAAAIABgEIACABIAAABIA2AhIAAAAIAAAAIACABIAPAIIgDAPIgBAAIAMgEIAEgBIggAKIgUAHIgBAAIg0AQg");
	this.shape_330.setTransform(92,234.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-3.1,9.9,-3.1).s().p("AgrApIADgPIAGgaIAAAAIAAgBIAJglIAIgCIAxAdIABAAIAAABIABAAIALAHIgFARIAAABIgGgJIAAABIAAABIgEALIgKADIgDgFIgMgRIgFAAIAAABIgKAeIgLAEIgBAAIgKADIgMADg");
	this.shape_331.setTransform(100.2,232.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.3,7.4,-2.3).s().p("AAmAeIgBgBIAAAAIgBAAIgygdIAHgCIAAAAIABgBIAMgDIAAAAIASgGIAAAAIgEACIATALIAAAAIAPAJIAAAAIAAAAIAAAEIAAAAIgGAWgAgjgOIAAAAIgSgLIAigKIgHAbg");
	this.shape_332.setTransform(99.9,228.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-2.2,6.6,-2.2).s().p("AA9AzIAAAAIACgBIAAACgAAeAgIgCgBIAAAAIAAAAIg2ggIAAgBIgCgBIAAAAIAAAAIgPgJIAAAAIgTgLIATgLIgBAEIAAABIAWgHIAAAAIANgDIABAAIAQgGIABAAIATgGIASAMIABAAIAIAFIgCAMIgBABIAIgCIgJAkIAAABIAAAAIgGAbg");
	this.shape_333.setTransform(91.6,230.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.4,-2.9,9,-2.9).s().p("Ag0ArIABgFIAGgcIACgIIAAAAIAAAAIAAgCIAKgnIAAAAIABgDIABAAIABABIA2AhIAAAAIABABIAdAQIgBABIAAACIgiAJIgTAHIAAAAIgRAFIAAAAIgNAEIgBAAIgWAHg");
	this.shape_334.setTransform(92.5,223.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1,6.5,-1).s().p("AAdAsIgBgBIAAAAIg2ghIgBgBIgBAAIgBAAIAAgBIgGgEIgIgEIgBAAIgTgLIAqgXIAOgIIAAAAIAEgCIAAAAIARgJIALgHIgGAcIgBABIAAACIAAAAIAAABIgJAmIAAAAIgBABIAWgGIABAAIANgEIAJAGIAAAAIAGADIAFADIgBAXIgFAYIAAABg");
	this.shape_335.setTransform(92.1,218.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AAPAtIgqgZIAAgBIgCgBIgBAAIAAgBIgLgGIgDgDIAAAAIgRgJIgCgBIAJgEIAGgFIAsgYIAAAAIAOgHIACgCIgDARIgBABIAWgGIAAAAIAOgFIAAAAIASgFIAAAAIADgBIgCA+IgrAYIgBAAIgDACg");
	this.shape_336.setTransform(81.3,222.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-0.4,6.6,-0.4).s().p("AAeAxIgCgBIAAAAIAAAAIg2ggIAAgBIgCgBIAAAAIAAAAIgPgJIAAAAIgNgHIgFgEIgBAAIAVgMIAmgUIABAAIABgBIADgDIACgBIAHgDIAFgDIAPgIIgDALIAAABIAAAAIAAABIgJApIgBAAIAWgGIABAAIANgFIAAAAIADgBIAGAEIAAAAIAAAAIgBADIAAABIgJAnIAAABIgBABIAAAAIgFAXIgCACg");
	this.shape_337.setTransform(77.8,212.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.9,-2.9,10.5,-2.9).s().p("AglArIAEgRIAFgYIAAAAIAAgBIAAgBIAKgmIAAgBIABgEIABABIABABIA2AgIAAABIgpAWIASALIABAAIACACIgBAAIgDAAIAAAAIgRAGIAAAAIgNAEIgBAAIgWAHg");
	this.shape_338.setTransform(86,215.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-2.9,11.1,-2.9).s().p("AggArIAJgoIAAgBIABgBIAAgBIACgKIAHgcIAAgBIABgEIACACIAAAAIArAaIAAAAIg3AeIATALIABAAIAIAGIgDABIgBAAIgMAEIAAAAIgWAGg");
	this.shape_339.setTransform(83,207.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.3,6.5,0.3).s().p("AAbA4Ig2ghIAAAAIgBgBIgBAAIAAgBIgGgDIgJgGIAAAAIgTgLIA3geIABAAIAEgCIAAAAIAqgYIABAAIgFAWIgBAAIAAACIAAAAIAAABIgJAmIAAABIgBABIAWgHIABAAIAHgCIAJAFIAAAAIABABIgBAeIgRAJIgBAAIgDACIAAAAIgPAIg");
	this.shape_340.setTransform(87.1,209.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.9,-2.9,9.5,-2.9).s().p("AgwArIAAgBIAJgoIAAAAIAAgBIAAgBIABAAIAFgVIAEgRIAAgBIABgEIABABIABABIAYAOIAAABIABAAIAEADIgPAZIAFABIABAAIABABIATAEIABAAIAAAAIAEABIABAAIAOACIAAADIAAABIgBABIAJgDIAEAAIADABIgtANIAAAAIgQAGIgBAAIgGACIgHACIgBAAIgWAHg");
	this.shape_341.setTransform(94.5,205.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.8,-2.9,10.6,-2.9).s().p("AgkAqIACgKIAHgdIAAgBIAAgBIAAgBIAKgmIAAgBIABgEIABACIABAAIAAAAIAfAUIABAAIAUALIgIAiIgFABIgJACIAAAAIgRAGIAAAAIgNAEIgBAAIgGACIgQAEg");
	this.shape_342.setTransform(115,216.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1AoIADgNIAFgZIAAAAIABgBIAAgBIADgJIAHgeIAAAAIABgEIABABIABABIAfATIgDAKIAAACIAPgFIAKAHIAAAAIACABIAfASIgBAAIgUAGIgSAFIgQAGIgBAAIgRAFIgBAAIgMAEIgBAAIgWAHg");
	this.shape_343.setTransform(111.6,221.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.8,-2.9,9.6,-2.9).s().p("AgvArIADgMIAGgbIAAgCIABgBIAAgBIAFgXIAEgPIAAgBIABgEIACABIAAABIAiAVIgBABIACAAIATAKIAAABIACAAIARAKIgDAOIgnALIgBAAIgQAGIgBAAIgMADIgBABIAAAAIgHACIgHADIgIACg");
	this.shape_344.setTransform(101.7,224.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2.2,6.5,-2.2).s().p("AAdAfIgCgBIAAAAIgTgLIAUgGIABAAIAMgEIABAAIANgEIgDAKIAAABIgBABIAAAAIgFAZgAgbgCIAAAAIgCgBIgBAAIAAgBIgJgFIgFgEIAAAAIgJgFIAAAAIASgGIAAAAIA2gQIABgBIgEASIAAABIgBABIAAAAIgJAng");
	this.shape_345.setTransform(101.9,220.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1AqIAAAAIAJgnIAAgBIAAAAIAAgCIABAAIAGgcIADgKIAAgBIAAgDIACABIAAAAIA1AgIgFAXIAAABIAAABIAWgHIAAAAIAKgDIAHAFIgBAAIg2AQIAAAAIgSAGIAAAAIgOAEIAAAAIgWAGg");
	this.shape_346.setTransform(98.4,215);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.8,-3.7,11.6,-3.7).s().p("AgbAiIAJgnIAAAAIABgBIAAgBIAEgSIABABIABABIABgJIAIgCIgDABIASAMIAAAAIAPAJIAAAAIAAAAIgBAEIAAAAIgHAdIgMAEIgBAAIgMAEIAAAAIgUAGIgCAAg");
	this.shape_347.setTransform(105.3,218.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.6,0.4,2.3,0.4).s().p("AgEgEIAEADIABAAIADABIgIAFg");
	this.shape_348.setTransform(111.7,211.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.5,6.5,-1.5).s().p("AA8A5IgfgTIgBgBIAAAAIgLgGIAGgCIABAAIANgEIAAAAIASgGIAAAAIAJgCIgBAqgAgaAFIgBgBIgBgBIgBAAIAAgBIgOgIIgBAAIgTgLIAEgCIACAAIABAAIA3gRIABAAIAAAAIABABIABgSIAJgEIAKAGIAAAAIABAAIgBAEIAAABIgKAnIAAABIAAABIAAABIgHAcg");
	this.shape_349.setTransform(111.1,217.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAAgBIAGgYIADgQIAAAAIABgBIAAgBIAAAAIAJgmIAAgCIABgDIACABIABABIA2AhIAAAAIABABIAfASIgBAAIg2ARIgBAAIgCAAIgIADIgHACIgBAAIgCABIgKADIgBAAIgWAHg");
	this.shape_350.setTransform(105.5,212.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.8,-2.8,6.1,-2.8).s().p("AA5AtIgCgBIgHgEIADgBIABAAIAGgCIAAAIgAgfgIIgBAAIgBgBIgBAAIAAgBIgOgIIAAgBIgBAAIgIgFIAFgCIABAAIARgFIABAAIAsgOIASAEIAHAEIAAAAIAAAAIgBADIAAACIgJAmIAAAAIAAABIgBABIAAAAIgDAQg");
	this.shape_351.setTransform(98.4,211.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.7,-3.2,5.2,-3.2).s().p("AAwApIgBgBIgfgTIgCgBIAAAAIg2gfIAAgBIgCgBIAAAAIAAgBIgHgEIABAAIAQADIABABIAAgBIgIgSIAJgDIABAAIAQgFIALADIABAAIAAAAIADABIABAAIATADIABAAIACABIADAAIAOADIAAABIgJAmIAAAAIAAABIARgEIAAAIIAAAKIgBASg");
	this.shape_352.setTransform(106.3,209.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.5,-5.6,10.9,-5.6).s().p("AghAQIAAgBIAAgDIAFABIAAAAIADABIgJADgAADgIIAAAAIgCgHIAXgBIgFAJIAEABIACAAIAAABIAKABIgQAEIAAAAIgKADg");
	this.shape_353.setTransform(101.4,205.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#3F8732","#000000"],[0.067,1],-0.4,-6,14,-6).s().p("AgBAFIABgJIACAAIgCAKg");
	this.shape_354.setTransform(105,199.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-3.5,9.7,-3.5).s().p("AguAkIAAAAIAJgmIAAgBIAIACIABAAIAQABIABABIAAgBIgNgdIgBAAIgDgHIAWAAIAkAVIAAABIABAAIARALIgEANIgTAGIgTAFIAAAAIgRAGIAAAAIgNAEIAAAAIgFACIgSAEg");
	this.shape_355.setTransform(114.3,206.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-3,9.8,-3).s().p("AgjABIAAgBIAIggIACgJIACgBIBFAqIAAABIgCAJIgZANIgLAEIg1AQg");
	this.shape_356.setTransform(161.3,251.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.9,-3.1,9.5,-3.1).s().p("AgwApIAEgQIABgGIARgFIAAAAIADABIABg4IAyAeIAAABIAVAMIgBAHIgBAEIhLAXIgVAFg");
	this.shape_357.setTransform(150.3,246.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIACgHIACgHIABgHIAFgUIAAgBIAKgnIAAgEIABAAIA3AhIAAABIABAAIAcAQIAAADIgBAAIAFgBIAAABIAAAAIgJADIgGABIg0AQIgCABIgOADIgaAIg");
	this.shape_358.setTransform(160.2,244.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.4,-2.3,4.5,-2.3).s().p("AAHAeIAAgBIgygdIABgbIAwgPIgGAbIAAAAIAlgLIAGAEIAAABIAAAAIAAAEIgKAnIAAABIgFAUg");
	this.shape_359.setTransform(152.4,242.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.5,18.3,8.9,18.3).s().p("AAsDcIgBAAQgGgBgGgCIgCgBIgHgEIgCgBIgCgCIgGgGIgBAAIgBgCQgFgJAAgJQAAgHACgFIABgDQADgGAGgFIABgBIgHgYIgtiiIgFgRIAEgBQA9DHADgCIAGgCIAIgBIAEAAIACAAQAKAAAHAEQAHACAEAEIABABIABAAIAEAEQAHAJAAANQAAAIgEAIIgDgBQgIAAgHAJQgCAFgCAFQgHACgKABIgDAAgAgxhRIABAEIAAABIgBgFgAhWjQIgDgLIADALg");
	this.shape_360.setTransform(151.1,265.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AguArIAKgpIAAgBIAEgPIABgHIABgBIADACIAAgTIABgDIA4AhIAAABIABAAIAQAJIAAABIgDAOIgwAPIgqAMg");
	this.shape_361.setTransform(148.6,236.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.7,-2.4,4.2,-2.4).s().p("AgVANIAmgMIgCAHIgXANgAAVgUIAAAAIABABIgBADg");
	this.shape_362.setTransform(143.7,233.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-2.9,11.1,-2.9).s().p("AggArIAGgbIADgOIAAgBIALgrIAuAcIg5AdIAbARIglALg");
	this.shape_363.setTransform(155.7,236.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-2.9,11.1,-2.9).s().p("AgfArIAJgpIAAgBIAKgoIAAgDIAAAAIAtAbIgDANIgcAOIATAMIADADIg4ARg");
	this.shape_364.setTransform(163.7,233.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.3,6.5,-1.3).s().p("AA8A7IgBgBIADgBIAAADgAAcAnIgBAAIAAAAIg4giIAAAAIAAgBIgGgDIgcgQIA5gfIAXgNIAAAAIgKAqIAAAAIA5gRIAAAhIgBAbIgHAeg");
	this.shape_365.setTransform(159.7,239.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.1,-1.7,4.8,-1.7).s().p("AALAjIgBAAIAAAAIg4giIAAgBIAAAAIAAgKIAKgDIAAAAIA3gRIAAAAIADABIgSAKIAhATIABABIgLAsgAAXglIAZgHIAAABIgaAOg");
	this.shape_366.setTransform(150.6,231.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.6,-3,6.8,-3).s().p("AgfgdIAfAUIABAAIAAAAIABABIAfASIAAAAIg3ARIAAAAIgKADg");
	this.shape_367.setTransform(149.2,227.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-0.4,7.1,-0.4).s().p("AgWAPIgBgBIgigUIASgJIABAAIAAgBIAZgNIAFgDIAFgCIAAAAIAagIIgCAJIAAABIAFgCIAfATIAAABIABAAIgBAAIAAAEIgKAnIgYAOg");
	this.shape_368.setTransform(156.7,230.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.4,8.9,-3.4).s().p("Ag2AmIADgJIAcgJIABAAIACACIABg8IApAZIABAAIAAABIABAAIAfASIAAAAIgrANIgMAEIgBAAIgwAOIgFACg");
	this.shape_369.setTransform(164.3,223.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAIgjIACgGIAAgBIAGgZIAFgSIAkAWIAAAAIAUALIAAABIAgATIgBAAIgQAEIgIADIgVAGIg/ATg");
	this.shape_370.setTransform(142.1,246.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.8,6.5,-0.8).s().p("AA8BAIghgUIAAAAIgTgLIgEgLIADALIgkgXIAAgBIgKgGIgKgEIgOgJIASgKIA5ggIAYgMIgEAQIAAABIgJApIgBAAIAqgMIAAAaIgCA5g");
	this.shape_371.setTransform(141.6,241.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.2,-3.9,11.2,-3.9).s().p("AgfAhIACgJIAKAGIgNAEgAgWgHIAAAAIADgPIAWgGIAAAAIARgFIAMAIIg5Aeg");
	this.shape_372.setTransform(139.6,238.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.8,-2.9,10.6,-2.9).s().p("AgkArIAFgaIAEgPIAAgBIAEgSIAHgZIA2AhIgGAZIAAABIgCAGIgOAFIgDAAIgQAGIgiAKg");
	this.shape_373.setTransform(134.4,245.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABgFIACgHIAHgeIAAAAIAIgiIAAgCIADgIIACACIgBAIIgBAAIALgCIAjAVIgGAZIgBABIAjgKIAOAJIgBAAIgPAFIhdAcg");
	this.shape_374.setTransform(130,248.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.7,-0.1,5.2,-0.1).s().p("AgmAUIADgBIABgBIAigKIAAAAIACACIABg0IACAAIAQADIABAAIgHgOIAQgJIgIAiIAAABIgHAdIgBADIgKAGIAiAVIgHAfg");
	this.shape_375.setTransform(123.1,251.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-5.3,9.9,-5.3).s().p("AgsATIADgOIAEAAIABABIAAAAIAEAAIABAAIASAEIgfAKgAAUgMIgBAAIgCgFIAUgCIAIAFIAAAAIgCAIIgTAFg");
	this.shape_376.setTransform(122,245.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAxAzIgQgDIgCAAIgWgEIgDAAIgCgBIgBAAIgBAAIgRgEIgBAAIgEAAIAAAAIgBgBIgEAAIgRgDIAAgBIgCAAIgEgBIAMgUIAkgBIgNgSIAAgBIgFgHIALgTIABgCIABgBIADgEIAAgBIAAAAIAEgIIABgBIAIASIAGAMIAAAAIADAHIAAABIAMAZIAAABIABAAIACAGIABAAIAEALIADAGIAGAOg");
	this.shape_377.setTransform(120.4,242.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.1,0.7,5.7,0.7).s().p("AgWAYIAFgPIABgDIAOgoIABgBIAEAAIAUAdIAAABIABABIAAAAIgIAXIgJgSIgBABIgFAIIAAAAIAAABIgCAEIgBAAIAAADIgMATg");
	this.shape_378.setTransform(120,236.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-0.9,8.2,-0.9).s().p("AgMAJIAAAAIgigUIASgKIAmgVIAAAAIgEARIAAABIAWgHIAAAAIAJgDIgDAOIAAABIgDANIgSAJIAOAJIgCAJIgBABIANgEIAKAGIAAAAIgEATg");
	this.shape_379.setTransform(133.9,239.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#3F8732","#000000"],[0.067,1],-3,-2.9,11.4,-2.9).s().p("AgdArIABgIIACgHIAagBIgNgTIAAgBIgGgHIADgNIAHgeIAXAPIgRAKIAhATIABABIgHAZIgBAAIgqAOIgLACg");
	this.shape_380.setTransform(129.6,240.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.6,-2.2,5.3,-2.2).s().p("AAvAyIgOgIIARgGIAAAQgAgeADIAqgMIABAAIgEASIAAAAIgEAQgAgpgDIgBgBIgHgEIAMAAIgCAHgAgkgtIAJgGIgDAOg");
	this.shape_381.setTransform(130.7,244.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,2,6.6,2).s().p("AAjAfIgBAAIgEgHIAAAAIgKgPIAXgHIATAMIABABIgHAdIgJAFgAgqAdIgCAAIACgBIAAAAIACAAIgBACgAg+ASIACgBIAAACgAAAAQIAAgBIAAACgAAwgqIAMgGIgCAJIAAABIgBABIAAAAIgEASIgFADg");
	this.shape_382.setTransform(122.3,234.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAIgWIAAAAIAAgCIAIgVIAAgBIAAgBIAMARIAKAPIABAAIACAHIABAAIANARIAFAIIAGAJIAAAAIANATIgaABIgMABIgTABg");
	this.shape_383.setTransform(125.5,238.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.6,-2.8,8.8,-2.8).s().p("AgvApIgBAAIgEgHIgBAAIAAAAIAAgCIABgDIABgCIAFgXIAAgBIABAAIAAgCIABgFIAIghIAAgBIABgDIABABIABAAIA1AhIABAAIAAAAIABABIAgASIgBAAIgBAAIgYAHIgLgRIAAABIAAABIgIAVIgBABIAAgBIgTgdIgFAAIgBABIgOApIgCAAIgBAAIgBABIgLADg");
	this.shape_384.setTransform(121.5,233.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.6,6.5,-0.6).s().p("AA8BCIgfgSIgBgBIAAAAIgBAAIg1ghIgBgBIgCAAIAAAAIAAgBIgCgBIgMgIIgBAAIgTgKIAjgTIAGgEIACgBIANgHIAAAAIADgCIABAAIAXgNIAZgOIgGAaIAAABIgBAAIAAABIgJAoIAAAAIAVgGIABAAIANgDIAAAeIgBAaIAAAUg");
	this.shape_385.setTransform(120.8,228.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-0.7,7,-0.7).s().p("AgYALIgBAAIgTgLIABgBIABAAIADABIAAgTIAFgDIgEAWIgBAAIAWgGIAAAAIAfgJIAAAAIAfgKIgBAFIAAABIgBABIAAAAIgFAXIAAAAIgmAVg");
	this.shape_386.setTransform(131.1,235.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-2.9,9.9,-2.9).s().p("AgrArIAEgXIAFgSIAAAAIAAgBIAAgBIACgIIAIgfIAAAAIAAgEIACABIAAABIA2AhIAAAAIAAAAIACABIALAGIgEAPIgBAEIgfAKIAAAAIgfAJIAAAAIgWAHg");
	this.shape_387.setTransform(131.6,230.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1ArIADgRIAFgYIAAAAIABgBIAAgBIACgHIAEgRIADgPIAAAAIABgEIACABIAAABIA2AhIABAAIAAAAIABABIAfASIgBAAIgmALIgQAGIAAAAIgXAGIgJADIAAAAIgWAHg");
	this.shape_388.setTransform(140,233);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-0.2,7,-0.2).s().p("AAiA0IgCgBIAAAAIAAAAIg2ghIAAgBIgCgBIAAAAIAAAAIgPgJIAAAAIgTgKIAogXIAPgIIABAAIACgCIABAAIAhgTIAFgCIgEATIAAABIgBAAIAAABIgJAoIAAAAIAWgFIAAAAIAMgEIgsAXIATALIAAAAIAPAJIAAABIAAAAIgBAEIAAAAIgDAPg");
	this.shape_389.setTransform(131.6,224.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#3F8732","#000000"],[0.067,1],-3,-3.1,11.4,-3.1).s().p("AgdApIAJgoIAAgBIABAAIAAgBIAGgZIADgNIAGgCIABAAIAhAVIgnAVIASALIABAAIAOAJIAAABIABAAIgBADIAAABIgBAAIgSAFIgMAEIAAAAIgWAHg");
	this.shape_390.setTransform(126.7,224.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,-0.7,4,-0.7).s().p("AgnAVIAUgGIABgBIADACIAAgoIAGgCIgBACIAVgHIABAAIAMgEIABAAIAJgDIABAAIAAAAIADgBIgDABIgDABIAHAFIAAATIgCAKIAAABIACAAIgBARIgYAOIgBAAIgDACIAAAAIgMAHIgCABIgCABg");
	this.shape_391.setTransform(119,221.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#3F8732","#000000"],[0.067,1],-7,-2.7,5.9,-2.7).s().p("AA4AuIAAAAIAAAAgAAAAMIAAAAIghgTIAAAAIAAAAIgCgBIAAAAIAAAAIgLgHIgEgCIgBAAIgEgDIABgIIAEgCIAAAAIAOgEIAAAAIASgGIAAAAIASgFIAQAJIAAAAIAOAJIAAABIABAAIgBADIAAAAIgKAnIAAACIAAAAIAAAAIgBAGg");
	this.shape_392.setTransform(116.9,212.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.7,6.5,-1.7).s().p("AgXAEIARgEIABAAIAigKIgCAIIAAACIAVgHIABAAIANgEIABAAIABAAIAAAIIgiASIAAAAIgDACIgBAAIgQAIgAg4gPIgHgEIACgBIADgCIAFgBIAAAAIADgBIgCALg");
	this.shape_393.setTransform(128.7,219.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1AqIAHgiIACgGIAAAAIAAAAIAAgCIAKgnIAAAAIABgDIABAAIABABIA1AhIAAAAIACABIAfASIgBAAIg0AQIgCABIgBAAIgEABIgDABIgBAAIgJADIgBAAIgMAEIgBAAIgWAHg");
	this.shape_394.setTransform(123.4,214.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-4.3,9.8,-4.3).s().p("AgtAcIACgKIAFgRIACgKIAzgQIABAAIACACIAAgGIANAHIAAABIACAAIANAJIgDAQIgjAKIgBAAIgQAFIgBAAIgGADIgHACIgBAAIgTAGIgCAAg");
	this.shape_395.setTransform(127.3,218.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.5,-2.5,6.4,-2.5).s().p("AA6AvIgfgTIgBgBIAAAAIg2ggIgBAAIgBgBIgBAAIAAgBIgOgJIgBAAIgPgJIASgGIAAADIAAAAIgBABIAWgGIABAAIANgEIAAAAIARgGIAAAAIAOgEIgCAIIAAABIAAABIAAAAIgJAnIgBABIAWgFIABAAIANgEIAAAAIAPgFIgBA2IAAAFg");
	this.shape_396.setTransform(123.1,210.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.5,8.9,-3.5).s().p("Ag2AlIAAgBIABgCIAEgPIAEgVIAAgBIABAAIAAgCIAAAAIAGgYIAGgCIABAAIAMgEIABAAIAEgCIAlAXIAAAAIABABIAfASIgBAAIgpAMIgNAFIgBAAIgRAFIgBAAIgMAEIgBAAIgWAHg");
	this.shape_397.setTransform(124.1,204.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#3F8732","#000000"],[0.067,1],-10,-2.4,2.9,-2.4).s().p("AgGAdIgBAAIAAgBIgNgHIACg1IACgBIAAAAIAMgEIAJAGIABAAIAOAJIAAABIABAAIgBADIAAABIgJAmIAAACIgBAAIAAABIgDAOg");
	this.shape_398.setTransform(131.3,212.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-4,9.8,-4).s().p("AgsAfIAJgmIAAgBIAAAAIAAgCIACgIIAogMIABgBIACACIABAAIAAgDIAUANIAAAAIACABIAAABIACAAIALAHIgjASIAJAFIgMAEIgBAAIgCABIgOAEIgBAAIgNAEIAAAAIgWAHg");
	this.shape_399.setTransform(128.8,207.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2.6,8,-2.6).s().p("AgrgoIABABIA2AhIABAAIAAABIABAAIAgASIgBAAIgcAJIgaAIIgBAAIgFACIgEABIgZAIg");
	this.shape_400.setTransform(157.4,224);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.2,0,4.7,0).s().p("AAqBIIgfgTIgBAAIAAgBIgBAAIg2ghIgCgBIAAgBIARgFIABAAIADABIABgtIAAAAIADgCIABAAIALgGIACgBIAXgOIAggSIAAAlIAAAMIgBAlIgBA9g");
	this.shape_401.setTransform(157.7,218.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.8,-4.8,3.1,-4.8).s().p("AAZAYIgNgIIABgkIgfASIgKgGIAIgCIAAAAIAxgPIgBAZIAAAag");
	this.shape_402.setTransform(161.2,212.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.7,-2.5,7.7,-2.5).s().p("AAeAGIANAIIAAAAIgNAFgAgqgIIAIgDIABAAIAXgHIAKAGIgZANIgCABIgLAGIAAAAIgEACIAAABg");
	this.shape_403.setTransform(159.4,213.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AA7BIIgfgTIgBAAIAAgBIgBAAIg1ggIgBgBIgBgBIgBAAIAAAAIgOgJIgBAAIgTgLIAtgYIALgGIAAAAIAEgCIAAAAIArgZIATgKIAHgEIgBA2IgBA6IgBAMIAAAEIAAATg");
	this.shape_404.setTransform(139.6,226.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-3.4,9.7,-3.4).s().p("AgtAmIAJgoIAAAAIAAgBIAAgBIAEgTIACgIIAJgDIABAAIAMgDIAmAXIAAAAIAAABIACAAIAPAJIgsAYIAAAAIgDACIAAAAIgMAGIgMAEIAAAAIgWAGg");
	this.shape_405.setTransform(138.8,221.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.1,0,3.8,0).s().p("AAjBKIgCgCIgfgTIgCAAIAAgBIAAAAIgggTIABg1IgGAEIAAgPIAFgDIABAAIABAAIALgGIABgBIAUgMIAkgUIgBApIAAAQIAAABIgBBRIgBAHIAAABg");
	this.shape_406.setTransform(149.2,221.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.5,8,-1.5).s().p("AAdAOIARAKIAAAAIgRAGgAgtgTIACgFIAAgBIABgEIABABIAkAWIgVALIgCAAIgLAHIAAAAIgBAAIgFADg");
	this.shape_407.setTransform(150.1,216.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIADgIIADgRIADgPIAAAAIABgBIAAgBIAKgmIAAgCIABgDIABABIABABIA2AhIAAAAIABAAIAfASIgBABIgrANIgLAEIgBAAIgJACIgGADIgCAAIgBAAIgMAEIgBAAIgWAHg");
	this.shape_408.setTransform(136.8,215.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#3F8732","#000000"],[0.067,1],-9,-2.7,3.9,-2.7).s().p("AADAaIgCAAIAAgBIAAAAIgmgXIAqgMIABgBIADACIAAgQIAQgFIABAAIAMgEIAAAKIgBAiIAAAPIgTAKg");
	this.shape_409.setTransform(141.7,217.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.7,-3.6,4.7,-3.6).s().p("AgLgLIAYAPIgBAAIgYAIg");
	this.shape_410.setTransform(143.9,211.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.7,6.5,-0.7).s().p("AA7BBIgfgTIgBAAIAAAAIg2ghIgBgBIgBgBIgBAAIAAAAIgOgJIgBAAIgKgFIgJgFIAjgTIAVgMIAAAAIAEgCIAAAAIAPgJIABgBIA1gPIgCBKIAAAXIgBAUIAAAQg");
	this.shape_411.setTransform(136.4,209.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-3.3,8.6,-3.3).s().p("AgzASIAZgHIABgBIACACIABgxIApAZIABAAIAAAAIABABIAfARIgBABIg2ARIgBAAIgRAFIgBAAIgMAEIgBAAIgQAFg");
	this.shape_412.setTransform(147.8,210.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.8,0,5.1,0).s().p("AAuBIIgZgPIABhKIACgBIABAAIACABIABgrIAXgNIAAAoIgBALIgIAiIAAABIAAABIAIgDIgBANIgBAygAgyAEIABgBIABAAIARgEIABAAIgQAIIgBAAIgDACg");
	this.shape_413.setTransform(140.6,204.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.9,-1.8,3,-1.8).s().p("AAZA2IgegTIgCgBIAAAAIAAAAIgVgMIAZgIIABAAIACABIABg9IAagJIgFAVIAAABIAAABIAHgCIAAATIgCBCIAAAEg");
	this.shape_414.setTransform(162.2,204.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-4,8.9,-4).s().p("Ag2AgIAJgnIAAgBIABAAIAAgCIACgJIANgEIABAAIAdgJIAVANIABAAIAAAAIABABIAfASIgBAAIgFACIgxAPIgBAAIgIACIgWAHIgBAAIgIADIgOAEg");
	this.shape_415.setTransform(159.2,210);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.lf(["#3F8732","#000000"],[0.067,1],-8,-1.7,4.9,-1.7).s().p("AAsA3IgSgKIABgpIgjAUIgkgWIgBgBIAAAAIAAAAIgBAAIARgFIABAAIA2gQIABgBIACACIABggIAFgCIAGgBIABAAIADgCIgBAJIAAACIgBAAIAAABIgJAoIAAAAIANgEIAAATIgBAug");
	this.shape_416.setTransform(150.4,213.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.8,-2.1,4.1,-2.1).s().p("AAkAzIgfgTIgCAAIAAgBIgBAAIgogYIABgMIANgEIABAAIANgEIABAAIAQgFIABAAIATgGIgCAKIAAABIgBABIAAAAIgJAnIAAAAIAAABIAVgGIABAAIACgBIgBAggAgkgyIACgCIgBAGIAAACIgBAAIAAABIgBAEg");
	this.shape_417.setTransform(149.5,206.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIAJgnIAAgBIABAAIAAgCIADgJIAGgdIAAgCIABgCIACABIABAAIAOAJIgBAEIAAABIgBABIAIgDIAiAVIAAAAIABABIAfASIgBAAIgZAIIgdAJIgBAAIgNADIgEACIgBAAIgGACIgGACIgBAAIgWAGg");
	this.shape_418.setTransform(156.4,204.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.7,6.5,-1.7).s().p("AA8A3IgfgTIgBgBIAAAAIgigUIAOgEIAAAAIANgEIAAAAIASgGIAAAAIAZgGIgBA9gAgaACIgBAAIgCgBIAAAAIAAgBIgOgIIgBAAIgTgLIA4geIAAAAIADgDIABAAIAGgDIgHAeIAAABIAAABIAAABIgIAhg");
	this.shape_419.setTransform(155.9,200.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.lf(["#3F8732","#000000"],[0.067,1],-4,-2.9,10.4,-2.9).s().p("AgnAqIAAAAIAIgjIABgEIAAgBIABAAIAAgCIABgFIAIgiIAAgBIABgCIACABIAAAAIA2AhIAAAAIADACIgHAbIgTAHIgBAAIgQAFIgBAAIgNAEIAAAAIgOAEIgIACg");
	this.shape_420.setTransform(148.8,201.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.lf(["#3F8732","#000000"],[0.067,1],-7,-1.5,5.9,-1.5).s().p("AAVAmIAAgBIg2ggIgBgBIgBgBIgBAAIAAAAIgOgIIgBAAIgGgEIAEgBIABAAIANgEIAAAAIASgGIAAAAIAxgPIgBADIAAABIAAABIAWgHIAAAAIAFgBIAEACIAAAMIgBACIgHAEIAAAAIgEACIAAAAIg3AeIASALIABAAIAOAJIAAABIABAAIgBADIAAABg");
	this.shape_421.setTransform(150.5,197);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.2,-2.9,9.2,-2.9).s().p("AgzArIAAgBIAGgaIADgOIAAAAIABgBIAAgBIAAAAIACgIIAHgeIAAgBIABgEIABABIABABIAgAUIAAAAIAWANIAAAAIACAAIAZAQIgBAEIgxAPIgBAAIgQAGIgBAAIgNAEIgBAAIgDABIgNAEIgFACg");
	this.shape_422.setTransform(148.2,192.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.1,6.5,-1.1).s().p("AAdAqIgBAAIAAgBIgWgMIgBAAIgfgUIgBgBIgBgBIgBAAIAAAAIgOgIIAAAAIgBAAIgKgGIgJgGIALgGIAQgIIAdgQIAAAAIACgBIAAgBIABAAIAAAAIABAAIAVgMIgGAaIgBABIAAABIAAABIAAAAIgJAnIAAAAIAAABIAVgGIABAAIANgEIAAAAIASgFIAAAAIAJgCIAAAaIgBADIAAAAIAAACIgBAAIAAABIgHAfg");
	this.shape_423.setTransform(147.9,187.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.6,-3.3,10.8,-3.3).s().p("AgiAmIAAAAIAJgnIAAAAIAAgBIAAgBIABgBIAGgaIABgEIANgEIgDANIAAAAIAAABIATgGIAIAFIAAAAIACABIgVAMIABAAIASALIABAAIAAABIAOAHIAAABIABAAIgBADIAAABIgCAHIgGACIgJACIAAAAIgSAGIAAAAIgMAEIgBAAIgWAGg");
	this.shape_424.setTransform(151.6,184.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.5,-3.1,4.4,-3.1).s().p("AgPAJIAAAAIgIgFIACgBIABAAIAMgDIABAAIAQgFIABAAIAOgEIgDABIAAAAIgiASg");
	this.shape_425.setTransform(155.2,181);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAAgBIADgOIAHgaIAAAAIAAgBIAAgBIAAAAIADgKIAAAAIACgIIAEgUIAAgBIABgEIACABIAAABIAgAUIABAAIAWANIAAAAIAAAAIADABIAQAJIAAAAIANAIIgBABIgYAHIgNAEIgRAFIAAAAIgSAGIgBAAIgNAEIAAAAIgWAHg");
	this.shape_426.setTransform(148.1,178.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.3,8.9,-3.3).s().p("Ag2AnIAAAAIADgNIAYgHIABgBIAAAAIABABIABABIACg7IAWAPIABAAIAWAMIAAAAIAAAAIACABIARALIAAAAIANAHIgBABIgIACIgPAEIgSAGIgNAEIgBAAIgRAFIgBAAIgMAEIgBAAIgCABIgUAGg");
	this.shape_427.setTransform(156.3,178);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["#3F8732","#000000"],[0.067,1],-2,-2.9,12.4,-2.9).s().p("AgSAqIAAAAIAJgnIAAgBIAAgBIAAgBIABAAIADgPIAJAGIABAAIAAAAIAOAJIAAAAIABAAIgBADIAAABIgHAeIgFABIgFACIAAAAIgCABIgTAFgAAAgmIAAgBIABgEIABACIAAAAIAKAGIgPAIg");
	this.shape_428.setTransform(143,187.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIAJgnIAAgBIABAAIAAgCIAJgnIAAgBIACgCIABABIABAAIA2AhIAAAAIABABIAfASIgBAAIgCABIg0APIAAABIgBAAIgRAFIgBAAIgBAAIgLAEIgBAAIgUAGIgCAAg");
	this.shape_429.setTransform(137.6,201.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.6,6.5,-1.6).s().p("AA7A4IgegTIgCgBIAAAAIg2ghIgBAAIgBgBIgBAAIAAgBIgKgGIAHgCIABAAIAMgEIABAAIARgFIABAAIA2gRIABAAIACABIABAAIAAgWIADgBIAAAAIAFgBIgBAXIgGAaIAAABIAAABIAFgCIAAAVIgBArgAg5gOIgHgEIAPgIIgDAPg");
	this.shape_430.setTransform(137.2,197.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.8,-0.6,3.1,-0.6).s().p("AgDAwIATgGIABAAIALgDIAAAFIAAAAIgVALgAgGAvIAAgBIgVgMIAChRIANgHIAFADIgDAJIAAABIAAABIANgFIALAHIAAABIABAAIgBADIAAABIgKAmIAAACIAAAAIAAABIgIAnIAAABg");
	this.shape_431.setTransform(132.7,201.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIADgKIADgOIADgPIAAgBIABAAIAAgCIAAAAIAJgmIAAgCIABgCIACABIABAAIA2AhIAAAAIABABIAfASIgBAAIg2ARIgBAAIgRAFIgBAAIgMAEIgBAAIgHACIgPAEg");
	this.shape_432.setTransform(137.1,192.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,-2.9,7.2,-2.9).s().p("AgjghIAUAMIAAAAIAUANIAAABIABAAIADABIAPAJIAAAAIAOAIIgBABIgWAGIggAKIAAAAIgSAFIgBAAIgBABg");
	this.shape_433.setTransform(126.7,182.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.7,-0.9,7.2,-0.9).s().p("AgUALIAAAAIgCgCIAAAAIAAAAIgOgJIgBAAIAAAAIgHgDIAGgCIABAAIAPgFIgDANIAAABIgBABIAWgGIABAAIALgEIABAAIASgGIAAAAIASgFIgBAEIgWAMIAAAAIgBAAIAAAAIgBAAIgCABIAAAAIgcAQg");
	this.shape_434.setTransform(145.3,182.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.8,-1.5,5.1,-1.5).s().p("AAwA6IgCgBIgfgTIgBgBIAAAAIg2ghIgBAAIgCgBIAAAAIAAgBIgGgCIAxgPIAAgBIAAAAIABABIACABIABgkIARgFIABAAIAGgDIAHAFIAAAAIABAAIAOAJIAAAAIABAAIgBADIAAABIgEAMIgLAGIAJAGIgDAPIgBABIAAAAIAAAAIAAABIgJAnIAAABIgBABIATgGIAAAWg");
	this.shape_435.setTransform(138,188.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.4,8.9,-3.4).s().p("Ag2AlIAAAAIAJgnIAAAAIABgBIAAgBIABgFIABgDIAWgGIABgBIABAAIAAABIABABIABgUIAQALIABAAIAWAMIAAABIAAAAIADABIAQAKIAAAAIANAHIgBABIgxAOIgFACIAAAAIgSAGIgBAAIgBAAIgIACIgDACIgBAAIgWAGg");
	this.shape_436.setTransform(132.5,185.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["#3F8732","#000000"],[0.067,1],-9,-0.8,3.9,-0.8).s().p("AAjBBIgBgBIgBAAIgNgIIAAAAIgQgKIgDgCIAAAAIAAAAIgVgNIAAAAIgSgKIABgnIAJgDIABAAIA2gRIABAAIAAAAIABABIABAAIABgZIAAAAIAIgDIgCBMIAAATIgBAkg");
	this.shape_437.setTransform(134.6,180);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-2.9,11.1,-2.9).s().p("AgbAYIAEgVIAAAAIABgBIAAgBIAAgBIADgKIAAAAIAGgcIAAgBIABgDIACABIAAABIAgATIABAAIAGAEIgCAHIAAAAIgCAKIgBABIAAABIAAABIAAAAIgGAaIgPAEIgBAAIgFACIgHADIAAAAIgSAFg");
	this.shape_438.setTransform(141.2,178.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIAJgnIAAgBIABAAIAAgCIAAAAIADgKIAAgBIAEgSIAAAAIACgJIAAgCIABgCIAAAAIACABIAAAAIAgAUIABAAIAWAMIAAABIAAAAIABABIAAAAIACABIAAAAIAQAIIAAABIANAIIgBAAIg2ARIgBAAIgIADIgJACIgBAAIgNAEIAAAAIgWAGg");
	this.shape_439.setTransform(131.9,175.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-2.7,6.6,-2.7).s().p("AA+AuIgBgBIAAAAIgOgIIAAgBIgQgJIAAAAIgCgBIAAAAIgBgBIAAAAIAAAAIgVgNIgBAAIgggTIAAAAIgCgBIAAAAIAAgBIgGgDIAPgFIAAAAIAMgEIABAAIAQgFIACAAIAtgOIgCANIAAABIgDAKIAAABIAAABIgBABIAAAAIgJAnIAAAAIAAABIAVgGIAAAZgAgpgRIgCAAIAAgBIAAAAIgTgLIAAAAIAAAAIAVgMIAHgEIgGAdg");
	this.shape_440.setTransform(131.4,171.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.8,-3.9,3.6,-3.9).s().p("AAAABIgBgBIADABIgBAAg");
	this.shape_441.setTransform(125.3,163.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABAAIAAgBIABgEIAGgdIACgGIAAgBIAAAAIAAgCIABAAIAAgBIACgJIAAgBIAEgSIAAAAIADgJIAAgCIAAgCIAAAAIACABIAAAAIACAAIAdASIABABIAAAAIABABIAAAAIAUANIABAAIAAAAIABAAIAAABIABAAIACABIAAAAIABAAIAIAFIgDAIIAAABIAAABIAAAAIANgFIAKAHIgBAAIgJACIgtAPIgBAAIgRAFIgBAAIgNAEIAAAAIgPAEIgGACg");
	this.shape_442.setTransform(132.6,166.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABAAIAAgBIAJgnIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIACgIIAAgBIAEgSIAAAAIADgJIAAgBIABgDIAAgBIABACIAAAAIACABIAQAKIABAAIALAHIACABIAAABIABAAIAAAAIABABIATALIABAAIAAABIABAAIAAAAIABAAIAAABIACAAIAAAAIANAIIACABIABABIANAHIgBABIAAAAIg1AQIgBAAIgBAAIgRAGIgBAAIgMADIgBABIAAAAIgMAEIgJACg");
	this.shape_443.setTransform(130.3,156.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,-0.4,5.8,-0.4).s().p("AA2BFIgBgBIgBAAIgKgGIAJgDIABAAIAEgBIgBALgAAYAyIgBAAIAAAAIgBgBIgBAAIAAgBIgBAAIAAAAIgBAAIgUgNIAAAAIgBAAIgBgBIgBgBIgcgRIgCgBIAAAAIgCgBIgBAAIAAgBIgNgIIgBgBIAAAAIgGgDIAMgDIABAAIARgFIACAAIABgBIA0gQIAAAAIABAAIABAAIAAABIABAAIABgIIACABIABAAIABABIANAIIAAABIABAAIAAAAIgBADIAAABIgCAJIAAABIgFARIAAAAIgCAKIAAABIAAAAIAAACIgBAAIAAABIgHAegAAgg9IABAAIARgFIACAAIABgBIAFgBIAAAEIgaAOg");
	this.shape_444.setTransform(132.9,160.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.7,-6,10.7,-6).s().p("AgkALIAAAAIABgEIAFABIAAAAIAEABIABAAIgMADgAAYgLIAEAAIAKACIgLADg");
	this.shape_445.setTransform(153.5,169.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.6,-1.5,6.3,-1.5).s().p("AA7A6IgBgBIgBAAIgNgIIAAAAIgQgKIgDgBIAAAAIAAgBIgWgMIAAAAIgggUIgBgBIgBgBIgBAAIAAAAIgOgIIAAAAIgBAAIgOgJIAvgOIABgBIABAAIABABIABABIAAgUIACgBIABgBIAAAAIABAAIAAAAIAPgJIgLAUIADABIABAAIASAEIgBADIAAABIgBABIAMgEIAgAGIgBAaIgBA7g");
	this.shape_446.setTransform(147.9,174);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.2,8.9,-3.2).s().p("Ag2AoIAAgBIAJgnIAAAAIABAAIAAgCIAAAAIADgLIAAAAIADgOIAJgCIABgBIAAAAIABABIABABIABgLIAAgBIAZAQIABAAIAWANIAAAAIAAAAIABABIAAAAIACABIAAAAIAPAJIABAAIAAAAIANAIIgBAAIgvAOIgHADIgBAAIgRAFIgBAAIgFACIgHACIgBAAIgWAHg");
	this.shape_447.setTransform(141,170.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.5,-3.8,4.4,-3.8).s().p("AAoAkIgBgBIAAAAIgOgIIAAgBIgBAAIgOgJIgBAAIgCgCIAAAAIgBAAIAAAAIAAgBIgUgMIgBAAIgagPIAJgCIABAAIARgGIABAAIAtgOIgJAiIAAABIAAAAIATgFIgBAVIAAAUg");
	this.shape_448.setTransform(142.7,167.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AsIAAgBIAAgBIADgJIAGgfIAAAAIABAAIAAgCIABAAIAAAAIACgKIAAgBIAEgSIAAAAIADgJIAAgCIABgCIAAAAIABAAIABABIABAAIAcASIABAAIABABIABABIAAAAIAVANIABAAIAAAAIAAAAIAAABIABAAIABABIABAAIAAAAIAOAIIABAAIABAAIANAJIgBAAIgJACIgtAPIgBAAIgRAFIgBAAIgJADIAAAAIgDABIgBAAIgJACIgNAFg");
	this.shape_449.setTransform(141.3,162.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgggGIgggGIgBAAIgDAAIgBgBIgFAAIgRgEIgBAAIgFgBIANgUIAEgIIABgBIAAAAIAAgBIALgPIAAAAIAWgmIAJASIAQAiIgDAGIgFAHIAFABIABAAIAFABIAEABIACAFIAHANIACAGIAEAJIAAAAg");
	this.shape_450.setTransform(152.5,166.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.4,0.9,5.5,0.9).s().p("AgEAxIAAAAIghgUIgBgBIgBgBIgBAAIAAAAIgNgJIAFgBIABAAIARgGIABAAIAIgCIAOAJIAAAAIABAAIANAJIAAAAIAAAAIgBADIAAACIgFAUgAAdgtIADgBIABAAIAMgEIABAAIADgBIgDAIIAIAAIAAAAIgBABIgFAIIgPAJIgBAAIAAAAIgBAAIAAABIgCABg");
	this.shape_451.setTransform(143.9,171.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.8,-3,11.6,-3).s().p("AgbAqIAAgBIAJgiIAIgCIABAAIABAAIABABIABAAIABgwIABABIABAAIAOAKIgFACIAAAAIABABIASALIAAAAIABAAIACACIgRAvIgDABIgBAAIgLADIgBAAIgDACIgTAFg");
	this.shape_452.setTransform(147.8,163.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,-1.5,5.7,-1.5).s().p("AA1A6IgBgBIAAAAIgNgIIgBgBIgBAAIgOgJIAAAAIgBAAIgBgBIgBAAIAAgBIgBAAIAAAAIgBAAIgTgMIgBAAIgBgBIgBgBIgBAAIgcgSIgCAAIAAgBIgCgBIAAAAIAAgBIgOgHIgBgBIAAAAIgDgBIABgTIAZgOIANgHIABAAIACgBIAdgJIgCAJIAAABIgDAJIAAABIAAABIAAABIgBAAIAAABIgJAnIAAABIAAAAIAAAAIAWgGIAAAAIANgDIABAAIARgGIACAAIgBASIgBAyg");
	this.shape_453.setTransform(141.6,158);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,4.1,5.5,4.1).s().p("AgBgCIABAAIACADIgBACg");
	this.shape_454.setTransform(161.2,159.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAPgqIAQgvIAAgCIABAAIAEAAIARAaIAEAGIAAABIgIAVIgIgRIgXAlIAAAAIgKAQIAAABg");
	this.shape_455.setTransform(158.4,160.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.1,0.7,5.7,0.7).s().p("AgQAGIAIgVIAAgBIAIgXIAAgBIAAgBIARAZIgPApIAIAAIAAABIgBABIgFAHIgEAIg");
	this.shape_456.setTransform(155.3,162.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIADgIIARgvIAKgfIABgFIABAAIAEAAIABABIAEAGIAQAZIAAABIgIAVIgIgRIgXAlIAAAAIgKAQIAAABg");
	this.shape_457.setTransform(151.5,162.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.5,0.9,10.4,0.9).s().p("AgEASIgBAAIAAAAIgSgLIgBgBIAAAAIAGgDIAagOIgJAegAAQgPIAFgDIAEAAIAAAAIgBABIgFAIg");
	this.shape_458.setTransform(150.8,159.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.8,7.3,-2.6,-3.1).s().p("AgDAUIAAABIgBABIgIAWIgRgZIAFgHIABgBIAAgBIAKgPIAAgBIAXgmIAJASIAEAKIAAABIAHANIgRAvg");
	this.shape_459.setTransform(155.7,156.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3,8.9,-3).s().p("Ag2ArIABAAIAAgBIAIgoIAAgBIABAAIAAgBIAAAAIAAgBIADgJIAAgBIACgJIADgCIAAAAIABAAIAAAAIABABIABABIABgWIAAAAIACABIAWAOIAAAAIAAABIAAABIgBAAIAAABIgJAnIAAABIAAAAIAAAAIAUgHIABAAIANgDIABAAIARgGIACAAIABAAIAFABIAAABIANAIIgBAAIg2ARIgBAAIgRAGIgBAAIgNADIAAAAIgVAHg");
	this.shape_460.setTransform(147.2,154.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.lf(["#3F8732","#000000"],[0.067,1],-7,0.3,5.9,0.3).s().p("AgfAXIgCAAIAAgBIAAgTIA1gQIABAAIABAAIABABIABAAIAAgSIAHgCIgBABIAAAAIAAABIAEgBIgCAGIgNAkIAFAAIgGADIgBgBIgEAAIgBAAIgBAFIgbAPg");
	this.shape_461.setTransform(150.6,156.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgYAuIgEAAIANglIADgIIAGgPIAJgfIABAAIAEAAIAEAGIARAaIAAACIgIAUIgIgRIgXAlIAAAAIgKARg");
	this.shape_462.setTransform(155.4,153.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,0,5.8,0).s().p("AA2BJIgCgBIgfgTIgBAAIAAgBIglgWIAOgEIAAAAIA2gRIABAAIACABIABAAIAChSIABgBIgBA/IgCBRIAAADgAg5gJIAOgIIgDAQIgBAAIAAABIAAAAIAAABIgBACg");
	this.shape_463.setTransform(124.4,197.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIAHgbIAJAAIgHgLIAAgBIAAgBIABAAIAAgCIAAAAIAEgPIAFgXIAAgCIACgCIABABIABAAIA2AhIAAAAIABABIAfASIgBAAIg2ARIgBAAIgNADIgEACIgBAAIgMAEIgBAAIgOAEIgIADg");
	this.shape_464.setTransform(124.1,197.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,0.3,4,0.3).s().p("AADA4IgBAAIAAgBIgkgVIAYgBIABAAIgBAAIAMgBIgWggIgCgEIAsgCIgHAaIAAAAIAAACIAIgDIAIgCIgGAYIAAABIAAABIgBAAIAAABIgEAXgAADgwIAegRIACAAIAAABIABAAIgCACIAAACIgFAXIgOAIg");
	this.shape_465.setTransform(117.1,199.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgRAsIgJgOIgEgKIAAAAIgEgHIAAgBIgFgLIAIgXIAAAAIAIgXIABAAIAAgBIAVAeIAAABIAAAAIADAHIABAAIAIALIANATIAJANIAHALIgJAAIgsABg");
	this.shape_466.setTransform(116.3,194.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,-0.6,5.8,-0.6).s().p("AA2BDIgCAAIgfgTIgBgBIAAAAIg2ghIgBAAIgBgBIgBAAIAAgBIgBAAIgNgIIAAgBIgBAAIgEgCIAIgCIAdgJIABAAIABAAIABABIABAAIABgdIABgBIABgBIAAAAIABAAIAAAAIAwgbIgBAEIAAACIgBABIAAAAIgJAnIAAABIAAABIAWgGIAAAAIAEgCIAFgBIAAAOIgCBSg");
	this.shape_467.setTransform(124.4,191.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgQgDIgBAAIgIgCIgOgCIgDAAIgDgBIAAAAIgSgEIgBAAIgEgBIgBAAIAAAAIgMgCIgJgBIAAgBIgCAAIgFgBIAGgJIALgTIABgBIAAgBIAAAAIAFgFIAAAAIAFgKIABgBIAOgWIAAAAIAAgBIADgFIAAAAIABgBIAEgIIAAgBIAJASIAGANIAAAAIADAHIAAAAIAMAZIAAABIAAABIADAGIABAAIANAfIAAABg");
	this.shape_468.setTransform(108.2,201.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAAAIAAgBIAGgPIAAgBIADgKIASgyIAEgNIABgBIAEAAIAFAIIAFAGIAHALIADAFIABAAIAAABIAAABIgIAWIgIgRIgBABIgFAHIAAABIAAAAIgDAEIgBABIAAABIgMAWIgBAAIgGAKIAAAAIgEAHIAAAAg");
	this.shape_469.setTransform(107.2,197.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgDgHIAAgBIgGgMIAIgWIAAAAIAIgXIABgBIAAgBIAVAgIAAAAIAEAHIAAAAIAJAMIAFAJIAXAgIgNABIAAAAIgYABIgVABg");
	this.shape_470.setTransform(113.3,198.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.7,6.7,-5.1,-3.7).s().p("AAfAzIAAAAIABAAgAAHgDIgFgHIAAAAIgUgfIAAAAIgBABIgIAXIAAgBIgBgBIgDgEIAHgLIAAgBIAEgGIAAAAIABAAIAFgJIAIASIAGALIAAABIACAHIAAAAIAFAKg");
	this.shape_471.setTransform(112.9,197.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.5,7.1,-2.9,-3.3).s().p("AAIAvIgKgCIgEgGIgBAAIgDgHIgBAAIgPgXIABgBIAAAAIAAgBIAJgPIABgBIAOgVIAAgBIADgFIAAgBIAAAAIAGgJIAIASIAFAMIAAAAIAEAHIAAABIADAGIgSAxg");
	this.shape_472.setTransform(104.3,194.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,1.1,5.5,1.1).s().p("AgSAVIgDgEIANghIAFgOIAAgBIAEAAIANATIAHALIAAAAIABABIAAAAIgIAXIgJgSIgFAJIAAAAIAAABIgDAFIgBABIgHALg");
	this.shape_473.setTransform(110.9,192);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-0.2,6.2,-0.2).s().p("AgXAuIgEgGIADgJIAAAAIABgCIAUg4IAFgRIABgBIAEAAIAUAeIABAAIAAABIAAABIgIAVIAAABIgIgRIgGAIIAAABIAAAAIgEAFIAAABIgMAVIgBABIgKARIAAAAg");
	this.shape_474.setTransform(103.8,190.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.4,1.2,5.4,1.2).s().p("AgLAfIAAAAIgDgIIAAAAIgGgMIAAgBIAJgVIAAgBIAIgWIAAgBIAAgBIASAcIACAEIABAAIADAEIgNAhIgCgCIgFgJIgEAAIAAABIgFAOg");
	this.shape_475.setTransform(107.9,190.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.4,0.9,4.5,0.9).s().p("AAYAkIAAABIgBABIgIAXIAAgBIgBAAIgTgfIgEAAIgBABIgGARIgcgRIAzgPIABAAIABAAIABABIABAAIABg9IARgJIAQgJIAAATIgBBBIgBAPIAAAcg");
	this.shape_476.setTransform(105.1,183.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-2.2,8.5,-2.2).s().p("AgiAGIAAABIAAABIgIAXIgBgBIAAgBIgHgKIACgKIAAAAIAAgBIAAgBIADgKIAAgBIAHgbIAAgCIABgDIABABIABABIAhAUIAAAAIAVAMIAAABIAAAAIADABIAQAJIAAAAIANAIIgBABIgdAIIgRAFIgIADIAAAAIgJADg");
	this.shape_477.setTransform(117.4,188.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.3,2.6,4.6,2.6).s().p("AgEAKIgFAAIAAABIgFAPIgDgEIAAAAIgDgEIABgbIAigUIAFAEIAAAAIABAAIgBADIAAACIgHAaIAAABIgDALIAAABIAAABIAAAAIgCAKg");
	this.shape_478.setTransform(111.5,187.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,-2.9,7.2,-2.9).s().p("AgkAhIABhBIATALIAAAAIAVANIAAAAIAAAAIABABIAAAAIACABIAQAIIAAABIANAIIgBAAIgsAOIgKADIAAAAIgSAFg");
	this.shape_479.setTransform(113.2,181.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.5,0,5.4,0).s().p("AAyBJIgBgBIgBAAIgNgIIAAAAIgQgKIgDgBIAAAAIAAgBIgVgMIAAAAIghgUIgBgBIgBgBIgBAAIAAAAIgFgEIgHgEIAugMIABgBIAAAAIABABIABABIABgoIAcgPIAdgRIgBAiIgBBDIAAAQIgBAeg");
	this.shape_480.setTransform(117.7,183.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.7,6.5,-0.7).s().p("AA9BCIAAgBIgBAAIgOgIIAAAAIgPgKIgDgBIgBAAIAAgBIgVgNIAAAAIgTgMIAAghIgdAQIgBgBIgBAAIAAAAIgTgLIAAAAIAQgIIAGgDIAJgCIABAAIA2gRIABAAIAAAAIABABIABAAIAAgVIAOgHIgBADIAAACIgDAJIAAAAIgDASIAAABIgDAKIAAABIAAABIgBAAIAAABIgJAnIAAAAIgBABIAXgHIAAAAIAMgDIABAAIAJgDIgBAoIgBAUg");
	this.shape_481.setTransform(124.5,177.4);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgPgDIgCAAIgSgEIgEgBIgDAAIgDAAIAAAAIgEgBIgPgDIgBAAIgDgBIAAAAIgBAAIgVgEIgBAAIgBAAIgEgBIAPgaIABgCIACgBIAAAAIAAgBIAKgPIABgBIAMgWIABgBIAAAAIAEgEIAAgBIAAgBIAEgHIAAgCIAJASIAGANIAAAAIADAHIAAABIAMAZIAAABIABAAIACAGIAAAAIAGANIAIASIABABg");
	this.shape_482.setTransform(98.2,202.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgbAuIgBAAIAAgBIAAAAIAJgZIAHgUIADgGIACgHIAKgfIABgBIAEAAIAUAeIABAAIAAABIAAABIgIAWIgIgRIgBABIgFAHIAAAAIAAABIgDAFIgBAAIAAABIgMAVIgBABIgKAQIAAABg");
	this.shape_483.setTransform(97.1,198.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.3,0.1,4.5,0.1).s().p("AgHAvIAAgBIgMgaIAAAAIgDgHIAAgBIgGgMIAIgWIAAAAIAAgBIACgEIAEgLIACgHIAAgBIAAgBIABACIAFAGIABABIAOAXIABAAIADAHIABAAIAEAGIAIALIABABIgFAPIAAABIgBAAIAIAAIAAABIgBABIgMATIgWABg");
	this.shape_484.setTransform(102.2,199.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-0.2,7.1,-0.2).s().p("AAQAUIALACIgCAKgAgWAAIABAAIAAAAgAgagVIAPgJIACgBIgDAJIgBgCIAAABIAAABIgDAHIgCAFgAgIgQIACAAIAAAAIgBABg");
	this.shape_485.setTransform(102.3,197);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.8,1,5.1,1).s().p("AgQAtIAHAAIAAABIgBABIgBABgAgpAeIgBAAIgBgBIgBAAIAAgBIgFgDIgBAAIANgEIAAAAIANgEIAPADIABAAIgJAYIAAABgAAggqIALgDIAAAAIAIgCIAAACIgPAJg");
	this.shape_486.setTransform(96,198.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6,0.1,3.8,0.1).s().p("AgPAvIAAgBIgMgaIAAAAIgDgHIAAgBIgGgMIAAAAIAIgWIAAAAIAIgXIABgBIAAgBIAUAgIABAAIAEAHIAAAAIAMARIAHAKIAEAGIAIALIgCAGIgBAEIgBAAIgBgBIgUgeIgEAAIgBABIgKAfIgLABg");
	this.shape_487.setTransform(96.7,192.3);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.9,-2.9,11.5,-2.9).s().p("AgYAeIAagCIgRgaIgCgDIACgJIAAAAIAHgbIACgBIAAAAIADgBIAbARIgUA4IgDABIgHACIAAAAIgKADg");
	this.shape_488.setTransform(101,190.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-4.2,9.8,-4.2).s().p("AgtAeIAAgBIAHgdIABAAIAVAEIAAAAIABAAIADABIABAAIAWAEIADAAIAHACIgNAEIgBAAIgLAEIgFABIgBAAIgNAEIAAAAIgWAHgAAogNIAAAAIgCgEIAIAFIgCAHgAgfgeIAFAAIAAABIgBABIgHALg");
	this.shape_489.setTransform(91.5,199.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.6,6.8,-2.8,-3.6).s().p("AAkAyIgPgDIgHgCIgDAAIgVgEIgBAAIgEgBIAAAAIgBAAIgVgEIAAAAIgCAAIgEgBIAKgRIAHgLIABgBIAAgBIAAAAIAKgPIABgBIANgWIAAgBIADgFIAAAAIAAgBIAGgJIAIASIAGAMIAAABIADAHIAAAAIAMAZIAAABIABABIABACIABAEIABAAIADAIIgHAUg");
	this.shape_490.setTransform(91.4,195.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgZAuIgDAAIAAgBIACgFIACgFIACgGIANgkIAMglIABgBIAEAAIADAFIARAZIABAAIAAACIAAAAIgIAVIAAABIgIgRIgGAIIAAAAIAAABIgEAFIAAABIgMAVIgBABIgKAQIAAABg");
	this.shape_491.setTransform(90.9,191.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],2.7,7.5,-1.7,-2.9).s().p("AgZArIgBgBIgCAAIgEgBIABgBIALgBIgBAEgAgWAaIAHgNIABgBIAAAAIAAgBIAKgOIgOAkgAAQglIADgFIAJASIAFAMIAAABg");
	this.shape_492.setTransform(90.5,191);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.5,6.5,0.5).s().p("AgaAZIgBAAIgBgCIgBAAIAAAAIgPgJIAAAAIgGgDIgFgDIgIgGIAtgXIAEgDIAPADIABABIgBgBIgCgJIAEgDIAfgRIAAABIACAAIgCANIgKARIAEABIABAAIgGAcIAAABIgBAAIAWgGIAAAAIANgEIABAAIAFgBIABAAIgBAZIgrAYIAAAAIgDACg");
	this.shape_493.setTransform(84.7,201);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.2,0.1,3.6,0.1).s().p("AgQAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAAAAIAIgVIAAgBIAEgMIAEgLIAAgBIAAgBIALAQIAKAQIABAAIADAHIABAAIAFAHIABABIADAFIAKAOIAJANIAFAIIgCAGIgMAAIgWABIgRABg");
	this.shape_494.setTransform(84.8,190.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.3,7.3,-4.1,-3.1).s().p("AATAKIAAAAIgEgGIgBAAIgLgQIADAAIAEACIACADIAAAAIAMAZgAgXgPIABgBIACAAIAAAAIAJABIgEAMg");
	this.shape_495.setTransform(83.4,188.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.8,-0.7,6.1,-0.7).s().p("AAeAyIgBgDIAMAAIgDAHgAg8gNIAMgGIADAAIAAAAIgBABIAAAAIgEASgAA7gkIgCgDIAAgOIAEgBIgBAUg");
	this.shape_496.setTransform(92.3,192.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.6,-3.1,4.2,-3.1).s().p("AgLANIgMgYIAAAAIgCgEIASAEIADAAIAVAEIABAAIAIACIgHATIgMABIgHAAIgKABg");
	this.shape_497.setTransform(87,188.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.lf(["#3F8732","#000000"],[0.067,1],-2,-2.7,12.4,-2.7).s().p("AgNAWIADgSIAAAAIABgBIAAAAIALgBIgGATIAAABIAHAAIAAAAIgBABIgGANgAALgjIADADIgBAEg");
	this.shape_498.setTransform(88.7,190);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.4,-1.9,9,-1.9).s().p("AgFALIAAgaIAHAEIAAAAIAEADIgIAYg");
	this.shape_499.setTransform(83,179);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.lf(["#3F8732","#000000"],[0.067,1],-12.5,0.4,0.4,0.4).s().p("AAAAqIAAAAIgCgGIAEAAIgBAKgAABgtIACAAIAAAEg");
	this.shape_500.setTransform(89.2,181);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAgBIAKgdIAJgYIAHgUIACgGIADgKIABgBIAEAAIABABIAGAJIAKAPIADAFIABACIAAABIgIAUIAAABIgIgRIgGAIIAAAAIAAABIgEAFIAAABIgMAWIgBABIgKAPIAAABg");
	this.shape_501.setTransform(84.6,179);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.lf(["#3F8732","#000000"],[0.067,1],-7,-2.8,7.4,-2.8).s().p("AglgjIAXAPIABAAIAUAMIAAABIABAAIAAAAIABAAIACACIAPAIIAAABIAOAIIgBAAIg0APIgCABIgBAAIgCACIgPAEIgBAAIgBAAIgEABg");
	this.shape_502.setTransform(102,183.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AACAdIgBAAIgDgGIgBAAIgVgfIAAABIAAAAIgIAWIgBgBIAAAAIAAgBIgGgMIAAgBIAIgVIAAgBIAGgPIAAgCIABAAIAAgBIABgFIABAAIAAgBIAEAHIARAZIAAAAIAEAGIAAAAIADAFIAEAEIABADIAGAIIAFAIIASAaIgbABg");
	this.shape_503.setTransform(97.2,188.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAAAAIAIgVIAAgBIACgHIAGgQIABgBIAAgBIAJAOIACADIAKAPIAAAAIAEAHIAAAAIAPAWIAWAfIAAAAIgBAAIgNABIgKAAIgOABIgOAAIgGABg");
	this.shape_504.setTransform(90.7,179.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-1,6.3,-1).s().p("AgcAnIAAgCIAHgSIAHgUIAJABIABAAIgBAAIgFgLIABgFIADgHIAFgOIANAAIAGAAIAEAFIADAEIAAABIAEAGIAAABIgIAUIAAABIgIgRIgDAGIgDgEIgFAAIAAABIgNAkIgJAPIAAABg");
	this.shape_505.setTransform(91.1,188.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,-3.8,7.2,-3.8).s().p("AglAUIAAgLIAQAAIgFANIgJACgAgBAIIADgBIANAAIgBADIgNADgAARAAIAAABIAAABIgCAEIgUgdIALAGIAAABIAAAAIABAAIAAAAIACABIAQAKIAAAAIANAHIgBABIgPAEg");
	this.shape_506.setTransform(93.1,183.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.6,1.5,4.3,1.5).s().p("AAnA4IgDgFIAAAAIgEgHIgBAAIgQgZIAPgEIABgBIAAAAIABABIABABIAChEIAIgFIAAAgIgCBGIAAANgAgpAoIgBgDIAIgDIgDAIgAgCAfIAAgBIgDgFIAMgDIgGAPg");
	this.shape_507.setTransform(93.9,182.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,-2.9,4,-2.9).s().p("AAlAsIgBgBIgBAAIgOgIIAAgBIgPgJIgCgBIgBAAIAAgBIgBAAIAAAAIgKgHIgQgWIAAAAIgEgGIAAAAIgLgPIAAgEIAPgFIAAAAIALgDIgDALIAAAAIAAABIAVgGIAAAAIANgEIABAAIASgGIAAAAIACAAIAAATIgCBEg");
	this.shape_508.setTransform(93.5,179.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,0.1,4,0.1).s().p("AgSAoIAAAAIgIgEIAAgHIATgGIgHAUgAAXAkIgCgEIAGgBIgDAHgAADAHIACgxIAKACIAAAAIAIABIgGAXIAAAAIgCALIAAAAIAAABIgBABIAAAAIgFATg");
	this.shape_509.setTransform(85.1,173.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.9,-3.2,10.5,-3.2).s().p("AgXAjIgKgPIAEgUIAAAAIABAAIAAgCIAAAAIADgLIAAAAIAFgWIAEABIAVADIALAIIABAAIARAKIgBAEIAAABIAAABIgBABIAAAAIgGAbIgLAEIgBAAIgOAEIgBABIgJgNIAAABIgBAAIgFARIgGABg");
	this.shape_510.setTransform(89.5,173.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.lf(["#3F8732","#000000"],[0.067,1],-1.8,-4.9,12.6,-4.9).s().p("AgRAXIAAAAIADgQIAVADIAAABIABAAIADABIABAAIAHABIgBABIgBAAIgNADIgBAAIgUAHgAgIgQIAAgBIABAAIAAgCIAAAAIABgEIAEAAIAAABIgBABIgFAJg");
	this.shape_511.setTransform(83.1,168.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.4,-2.3,5.5,-2.3).s().p("AgDAQIgBAAIgLgHIAIACIABAAIAAAAIgOgeIAAAAIgBgCIAHgDIAAAAIAHgCIAGAAIAIAGIAAAAIABAAIAOAJIAAAAIAAAAIgBADIAAABIgGAbIAAAAIgCAHg");
	this.shape_512.setTransform(91.6,169.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.5,-3.4,-3.9).s().p("AAxAyIgJgCIgWgEIgMgCIAAAAIgJgCIgGgBIAAAAIgGgBIgBAAIgEgBIgBAAIAAAAIgVgEIAAAAIgCAAIgFgBIAMgTIAGgJIAAgBIAAgBIAAAAIAKgPIABgBIARADIABAAIgBAAIgIgSIAMgUIADAAIAHAPIAFAMIAAABIAEAHIAAAAIAMAZIAAABIAAABIACADIABADIAAAAIAOAfIABAAg");
	this.shape_513.setTransform(86,165.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.3,-3.3,10.1,-3.3).s().p("AgcAgIAQgBIgHACIgBAAIgHACgAgHgYIAAAAIgEgHIgBAAIgCgDIABAAIAPADIALAGIAAAAIANAIIgCAHIgCAHIgBABIAIAAIAAAAIgBABIgBABIgNAHg");
	this.shape_514.setTransform(92.1,163.6);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAFgPIAXgBIgPgVIADgIIABgBIAAgBIAGAKIAIAMIACACIADAFIACADIABAAIACAHIABAAIAWAfIAEAHIALAPIgBAAIgkACIgEAAIgRABg");
	this.shape_515.setTransform(91.1,162);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.4,-2.2,6.4,-2.2).s().p("AgXAaIgEAAIABgBIAGgSIALACIABAAIgBABIgKAQIAAAAgAgFgSIAAAAIgCgGIATgBIgMAUgAAPgZIANgBIgGAQg");
	this.shape_516.setTransform(84.8,163.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.1,9.1,-4.3,-1.3).s().p("AgOgFIgBAAIgBgEIAKgRIAIASIAFALIAAABIAEAGIAAABIAHAPIgHgJIAAABIAAAAIgDAJg");
	this.shape_517.setTransform(87.6,155.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.5,1.6,5.3,1.6).s().p("AADAKIgJARIgCgEIgBAAIgJgNIAMgjIABgBIAFAAIAUAeIAAABIgIAXg");
	this.shape_518.setTransform(86.6,151.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.4,-2.2,6.4,-2.2).s().p("AgbAaIABgBIACgGIAFgOIABgCIAFABIABAAIAGABIgCAEIgBABIgKAQIAAAAgAAQgZIAMAAIgGAPg");
	this.shape_519.setTransform(97.1,160.6);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,-4,5.7,-4).s().p("AgCAAIAAAAIgLgGIAGABIAAAAIAEABIABAAIAHABIAJACIgBABIgDAHg");
	this.shape_520.setTransform(93.7,161.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.9,4.5,-3.5,-5.9).s().p("AAwAdIgkgHIgGAAIgBAAIgOgDIgIgCIgBAAIgDgBIgBAAIgGgBIgQgDIgBAAIgCgFIABgCIA0gCIgWggIATAEIAAAAIAWAEIAGAMIAAACIABAAIAQAkIABABg");
	this.shape_521.setTransform(95.2,158.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.4,-2.6,12,-2.6).s().p("AgHAmIAEAAIgCACgAACggIAGAAIAAAAIgBABIgCAEgAgDgoIACABIAAABIACACIgBACg");
	this.shape_522.setTransform(90.9,155.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgXAkIgHgQIAAAAIgEgHIAAgBIgFgMIAIgVIAAgBIAGgRIACgGIAAgBIAAgBIAMARIAEAGIAFAHIABACIABAAIACAHIABAAIAPAVIAWAgIgzACIgEABg");
	this.shape_523.setTransform(91.8,154.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.3,6.7,-4.1,-3.7).s().p("AApAzIgUgDIgVgFIAAAAIgUgDIgOgXIgBAAIgEgGIgBAAIgBgDIACgDIABgBIAAAAIAAgBIAKgPIABAAIAXgmIAHASIAGAMIAAAAIADAHIAAABIAMAZIAAABIABAAIAQAlIABABg");
	this.shape_524.setTransform(95.6,151.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.5,0,5.4,0).s().p("AAyBJIgBgBIgBAAIgNgIIAAAAIgQgKIgCgBIAAAAIgBAAIAAAAIAAgBIgVgMIAAAAIgTgMIAAgTIgQAJIgBAAIAAAAIgMgIIALgDIABAAIARgGIACAAIA1gPIABgBIABAAIABABIABABIABgyIASgKIAAAKIAAAAIgEASIAAABIgDAKIAAABIAAABIgBABIAAAAIgJAnIAAAAIAAABIAPgEIAAAdIgBAog");
	this.shape_525.setTransform(112.1,175.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.2,-0.8,4.7,-0.8).s().p("AAsBBIgCgBIAAAAIgNgIIAAgBIgQgJIgBAAIgBgBIAAAAIgBgBIAAAAIAAAAIgVgNIgBAAIgggUIgBAAIgBgBIAqAIIABAAIgBAAIgQgkIA6gDIgLgPIABAAIABgBIAAAAIABABIABABIAAgZIANgEIAAAAIABAAIACACIgBBCIgWAMIAAAAIABAAIASALIABAAIAAABIACAAIAAAFIAAABIgBABIABAAIgBAJIAAAVg");
	this.shape_526.setTransform(122.6,167);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIAJgoIAAAAIABgBIAAgBIAAAAIADgKIAAgBIAEgSIAAAAIACgJIAAgCIABgCIABAAIABAAIABABIAfAUIABAAIAWAMIAAABIAAAAIABAAIAAAAIABABIABAAIAQAJIAAAAIANAIIgBABIg2AQIgBAAIgJADIgIADIgBAAIgMAEIgBAAIgGACIgQAEg");
	this.shape_527.setTransform(121.3,172.4);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.3,-0.1,4.6,-0.1).s().p("AAqBIIgBgBIAAAAIgOgIIAAgBIgPgJIgCgBIgBAAIAAAAIgBAAIAAgBIgUgNIgBAAIgXgOIAAgfIgIAFIAAgTIA0gQIABgBIAAAAIABABIABAAIABgSIAegRIgEASIAAABIgDAKIAAABIAAACIgBAAIAAABIgJAnIAAAAIAAAAIAUgEIAAAOIgCA+g");
	this.shape_528.setTransform(101.9,177.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAAgBIADgLIAGgdIAAAAIABgBIAAgBIAAAAIABgDIACgHIAAAAIAGgcIAAgBIABgEIACABIAAABIAgAUIABAAIAWAMIAAABIAAAAIABAAIAAAAIACABIAAAAIAQAJIAAAAIANAIIgBABIg1AQIgBAAIAAAAIgSAGIgBAAIgNAEIAAAAIgWAGg");
	this.shape_529.setTransform(97.3,172.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1AqIAAAAIAIgnIAAgBIABAAIAAgCIAAAAIADgKIAAgBIAEgSIAAAAIACgJIAAgBIABgDIACABIAAAAIAgAUIABAAIAWAMIAAABIAAAAIABAAIAAAAIACACIAAAAIAQAIIAAABIANAIIgBAAIg2AQIgBAAIgRAGIgBAAIgLADIgCABIAAAAIgCABIgUAFg");
	this.shape_530.setTransform(109.9,173.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.6,-3.5,11.8,-3.5).s().p("AgZAkIAAAAIAJgkIAJABIABABIAAgBIgHgOIABgDIAAgBIAFgSIAWgBIAIAFIgCAEIgcAQIAAAAIAAABIARAKIABAAIAAAAIABAAIgBACIAFABIABAAIAJAGIAAAAIAAAAIgBADIAAACIgDAJIgMAEIgBAAIgMAEIAAAAIgDABIgTAFg");
	this.shape_531.setTransform(103.8,167.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.8,-2.3,6.1,-2.3).s().p("AA5AyIgBgBIgBAAIgNgIIAAAAIgQgKIAAAAIgCgBIAAAAIgBAAIAAAAIAAgBIgWgNIAAAAIgggSIgBgBIgBgBIgBAAIAAAAIgOgJIAAAAIgBAAIgJgGIAkgBIALABIAAABIAEAAIABAAIAWAFIAAAAIAhAGIgJAjIAAABIAAABIATgGIgBAIIAAASgAAqgqIAPgBIgEATIAAAAIgBADgAgkgqIANgHIgIANg");
	this.shape_532.setTransform(97.2,168.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.7,6.5,-3.7,-3.9).s().p("AAtAyIgKgCIgggGIgBAAIgVgFIgBAAIgEAAIgBgBIgKgCIABAAIgLgPIAIgNIACgCIABgCIAAAAIAAgBIAKgOIAAgBIADgFIAjAHIABABIgBgBIgPglIABAAIAHAPIAGAMIAAABIAPAgIABACIAJAVIAHAQIABAAg");
	this.shape_533.setTransform(98.6,163.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2.7,6.5,-2.7).s().p("AA9AuIgBgBIAAAAIgNgIIAAgBIgQgJIAAAAIgCgBIAAAAIgBAAIAAAAIAAgBIgWgNIgBAAIgggTIAAAAIgCgBIAAAAIAAAAIgJgGIAWAEIABABIADAAIABAAIAWAEIABAAIApAHIACAAIgBAAIgMgaIAPADIABABIADAAIABAAIACABIAAARIgCAwgAgrgRIAAgBIgBAAIgSgKIgBgBIAAAAIAegQIAAAAIAIAAIAAABIgCABIgPAag");
	this.shape_534.setTransform(109.4,169.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-2.5,6.6,-2.5).s().p("AgHAGIAEgBIAFAAIgCAGgAABgKIABAAIAGABIgCAFg");
	this.shape_535.setTransform(106.1,163.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgpgIIgBAAIgWgEIgBAAIgDAAIgBgBIgWgEIgBAAIgEgBIABgCIAPgaIACgBIAAgBIAAAAIAKgPIAAgBIAEgGIAWAEIABABIAAgBIgKgYIAFgLIAJASIAVAtIABABIAEAKIAMAbIABAAg");
	this.shape_536.setTransform(109.9,164.8);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-1.9,6.3,-1.9).s().p("AgcAdIAAgBIACgEIACgGIAKAAIgGgKIABgFIAOADIgFAGIAAABIgKAPIAAABgAANgZIgHAMIgGgOIAdgBIgHAVg");
	this.shape_537.setTransform(108.8,162.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-7.1,-2.2,2.7,-2.2).s().p("AgZAYIgBAAIAAgBIgFgNIAUAEIABAAIgBAAIgRgkIAZgBIAEAAIAQAXIAIAMIAIAKIgMAAIgfACIgMAAg");
	this.shape_538.setTransform(101,155.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,-1.4,3.4,-1.4).s().p("AgSAfIgQghIAAAAIgFgMIAFgQIAggBIABABIAAAAIAEAGIAAAAIAaAmIAFAGIAGAKIgQAAIgEABIgWABIgQAAg");
	this.shape_539.setTransform(103.3,161.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.2,6.7,-4.6,-3.7).s().p("AAkAzIgWgEIgOgDIgEgBIgBAAIgagmIAAAAIgFgGIAAAAIgBAAIAMgBIgHgKIAAAAIAXgnIAJASIAUAuIAAABIAGANIALAYIAAABg");
	this.shape_540.setTransform(106.8,158.1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4,0.6,5.8,0.6).s().p("AgXAZIAJgYIAEgBIgDgCIAIgXIAEgLIABgBIADAAIATAdIACADIAAABIgIAVIgIgRIgXAlIAAABg");
	this.shape_541.setTransform(105.1,153);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.6,6.7,-3.8,-3.7).s().p("AAtAzIgqgIIgBAAIgUgDIgCgBIgBAAIgDAAIgBgBIgPgDIgEgKIA5gCIgegtIARgcIAHASIAVAtIABABIAQAlIABAAg");
	this.shape_542.setTransform(117.7,163.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAuIgVguIAIgVIAAgBIAIgXIAAgBIAAgBIAWAgIABAAIACAHIABAAIAYAjIACADIALAPIg5ADg");
	this.shape_543.setTransform(122.4,160.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,1.1,5.5,1.1).s().p("AgQAYIgBAAIgEgHIAJgYIAJgXIAAgBIADAAIABAAIAVAfIAAAAIgIAXIgJgSIgQAcg");
	this.shape_544.setTransform(117,158.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,-1.2,3.4,-1.2).s().p("AgSAhIgVgtIAHgVIAbgBIAEAGIABAAIACAHIABAAIAGAIIAfAtIg5ADg");
	this.shape_545.setTransform(115,162.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAuIgVguIAIgVIAAgBIAAgCIAIgVIABgBIAAgBIARAaIAEAGIAAAAIAEAHIAAAAIAQAWIADAFIASAaIgDAAIgbABIgcACg");
	this.shape_546.setTransform(110.7,154.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.5,-2.1,6.9,-2.1).s().p("AAUASIAAAAIAHgDIAGAEIgKADgAgggWIACACIAAABg");
	this.shape_547.setTransform(110.6,154.4);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.6,-1.3,6.3,-1.3).s().p("AA8A8IgCgBIAAAAIgEgCIgYgkIgBAAIgDgHIgBAAIgWgfIAAABIAAABIgHAWIgVgfIgCAAIAdgJIAAAAIABAAIABAAIABABIABAAIABgOIABAAIARgGIACAAIAAAAIAZgIIAEADIAAAAIABABIAGADIgBAuIAAACIAAABIgBAAIAAACIAAAAIAAABIgJAmIAAABIgBABIABAAIAJgDIAAAZgAgtgDIAAAAIgBAAIgKgHIgGgDIAJgDIACAAIABgBIAUgGIgIAXg");
	this.shape_548.setTransform(119.7,157.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.lf(["#3F8732","#000000"],[0.067,1],-6,-2.4,8.4,-2.4).s().p("AgYAmIgQgXIAAAAIgEgHIAAAAIgFgGIADgHIAAAAIADgSIAAgBIADgJIAAgBIABgDIAAAAIACABIAAAAIACABIAQAKIABAAIALAHIABABIABABIAAAAIABAAIAAAAIABABIATAMIABAAIAAAAIABAAIAAABIABAAIAAAAIABABIAAAAIABAAIgDANIAAABIAAAAIAAAAIASgFIABAAIAMAIIgBAAIAAAAIgeAJIgCAAIgBABIgTAGIgBABIgCAAIgJADIgIACg");
	this.shape_549.setTransform(115.1,152.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.1,-3.7,4.3,-3.7).s().p("AgIgHIABAAIAAAAIACACIABAAIABABIAMAHIAAAAIgBAAIAAAAIgQAFg");
	this.shape_550.setTransform(117.8,138.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.lf(["#3F8732","#000000"],[0.067,1],-11.6,-6.6,1.3,-6.6).s().p("AAJAHIgBgBIgBAAIgLgHIgBgBIgBAAIgCgCIgBAAIAAAAIgBgBIAAgBIAVAEIgBAJg");
	this.shape_551.setTransform(117.9,138.4);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.2,6.5,-0.2).s().p("AA9BHIgBgBIgBAAIgNgIIAAAAIADgBIABAAIAAgBIAMgDIAAAOgAAeA0IAAAAIgBgBIgBAAIAAAAIgBgBIAAAAIAAAAIgBAAIgUgMIgBgBIAAAAIgBAAIAAAAIgBgBIgBgBIgLgHIAAAAIgRgKIgBgBIgBAAIgBgBIgBAAIAAgBIgOgIIAAgBIgBAAIgSgKIAAAAIgBAAIA4gfIAAAAIACgBIABAAIAAAAIABgBIAAAAIAKgFIAmgWIAAAAIABAAIAFgCIAAAAIADgBIAMgDIAAACIg0AcIABAAIAAABIASALIABAAIAAAAIAOAJIAAAAIABAAIAAABIgBACIAAACIgDAJIAAAAIgEARIAAABIgCAIIAAABIAAABIgBABIAAABIAAABIAAAAIgGAag");
	this.shape_552.setTransform(114.1,146.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,1.9,6.5,1.9).s().p("AACAdIAAABIgBABIgGAVIgDgCIgTgcIgEAAIgBABIgEAKIgIgEIAAgBIgBAAIgSgLIAAgBIgBAAIA4gdIAAAAIACgBIABAAIAAAAIABgBIAAAAIACgBIBDgmIAAAKIgLAGIAAAAIgBAAIAAAAIgBABIgCABIAAAAIg3AfIABAAIAAAAIARAKIABAAIAAAAIAOAJIAAAAIABAAIAAABIgBACIAAACIgDAJIAAABIgEASIAAAAIgCAHg");
	this.shape_553.setTransform(108.2,147.1);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.2,-5.3,3.7,-5.3).s().p("AAhAUIgBgBIAAAAIgNgIIgBAAIgBgBIgCgBIAAAAIgBgBIgNgHIAAgBIgBAAIAAAAIAAAAIAAAAIgBAAIgUgMIAAAAIgBAAIAAgBIgBAAIgBgBIgBAAIgJgGIBFANIAAAPIgBANgAAigJIABAAIAAABg");
	this.shape_554.setTransform(113.4,138.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.5,8.9,-3.5).s().p("Ag2AmIAAgBIAAgBIAIgiIABgFIAAAAIABgBIAAgBIAAgBIAAAAIADgKIAAgBIACgGIAGABIAVAEIgIgSIAJACIAJAFIABAAIABACIAAAAIAAAAIABAAIABABIAUALIABAAIAAABIAAAAIABAAIAAAAIAAABIANAHIABABIABAAIABABIABABIABAAIANAHIgBAAIAAABIgBAAIgSAGIgBAAIAAAAIgUAGIgIADIAAAAIgGABIAAAAIAAAAIgBAAIgHADIgKADIgBAAIgEACIgBAAIgHABIAAABIgBAAIgWAHg");
	this.shape_555.setTransform(111.1,140.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAQgtIABgBIADgJIAMgkIAEAAIAJAOIAFAGIAHAMIAAABIgIAVIgIgRIghA2g");
	this.shape_556.setTransform(103.8,128.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,0.1,5.5,0.1).s().p("AABAuIgTgtIAIgWIAAgBIAIgYIAAgBIACADIATAfIgRAvIAIAAIgIAOg");
	this.shape_557.setTransform(107.9,129.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-0.2,11.1,-0.2).s().p("AgHgNIAPAJIAAABIABAAIAJAFIgFAPgAgPgCIAAAAIADgJIAAgCIABgCIAAgBIABABIABABIAAAAIgIAWg");
	this.shape_558.setTransform(108.5,126.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.1,-5.2,9.3,-5.2).s().p("AAAAAIABAAIgBABg");
	this.shape_559.setTransform(115.3,134.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIhEgMIgKgCIgTgEIAKgQIAIgNIAhg2IAJASIASAmIgDAHIAGAAIABABIAAABIgRAcIAgAGIAAABIABABIAAAAg");
	this.shape_560.setTransform(112,132.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.3,0.1,5.5,0.1).s().p("AADAwIgBgBIACAAIAAABgAgSAAIAIgVIAAgBIAIgYIAAgBIAVAgIgTA3g");
	this.shape_561.setTransform(115,129.4);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIARgwIAGgPIABgDIAHgWIABgDIAEAAIAAAAIAVAgIAAABIgIAVIgIgRIghA2g");
	this.shape_562.setTransform(111,128.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgWAuIgGAAIADgHIAUg4IAJgcIAEAAIAMARIAJAPIAAABIgIAVIgIgRIghA2g");
	this.shape_563.setTransform(117.5,129.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.2,1.5,3.7,1.5).s().p("AgeAjIAZgBIgJAYgAgkgQIAAgBIAAAAIACgBIABAAIABAAIAAgBIABAAIACgBIADgBIABAAIAjgLIABAAIABgBIABAAIABABIABABIAAgOIAWgMIAAAOIgCABIgBAAIAAABIgBAAIAAAAIgCABIAAAAIg3AfIABAAIAAAAIASAKIABAAIAAABIAHAFIgHAXg");
	this.shape_564.setTransform(104.2,149.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAvIAAgBIgMgaIAAAAIgEgHIAAgBIgFgMIAIgVIAAgBIAIgXIAAgBIAAgBIAWAgIABAAIACAHIABAAIACACIABACIAfAuIADADIgiACIgYABg");
	this.shape_565.setTransform(100,148.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.lf(["#3F8732","#000000"],[0.067,1],-3,0.7,9.9,0.7).s().p("AAGAbIAAgBIgCgBIgKgRIAAABIAAABIgCAGIgBAAIgBAAIAAAAIgSgLIgBgBIAAAAIADgBIAzgcIABAAIACgBIABgBIAAAAIABAAIAAAAIgUA3g");
	this.shape_566.setTransform(90.1,149);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgbAuIgBgCIABgCIAUg4IADgGIAHgYIABgBIAEAAIAJAPIAMAQIAAACIgIAVIgIgRIgXAlIgBAAIgJAQIAAABg");
	this.shape_567.setTransform(93.9,147.7);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABAAIAAgBIAGgbIADgMIAAgBIAAAAIAAgCIAAAAIAAgBIADgJIAAgBIABgHIADgLIAAAAIACgJIAAgCIABgCIAAAAIABAAIABABIAAAAIACAAIAQAKIABABIABAAIALAHIABABIAAAAIAAAAIAAABIABAAIAAAAIAKAHIgIAhIAAABIAAABIAAAAIAWgHIABAAIAAgBIAHgBIABAAIAEgCIABAAIAKgDIAGAEIgBAAIAAAAIAAAAIgTAFIAAABIgBAAIgbAIIgBAAIgCABIgEABIAAABIgBAAIgQAEIgBABIgBAAIgFABIAAAAIgHADIgBAAIAAAAIgVAGg");
	this.shape_568.setTransform(105.3,141.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.7,-4.5,4.2,-4.5).s().p("AAmAcIgBgBIAAAAIgNgIIgBAAIgBgBIgFgDIAQgFIACAAIABgBIAEgBIAAAHIgBAOgAgQgEIgBAAIgBgBIgBgBIgBAAIgLgHIgBgBIgHgEIAhgKIgCAKIAAABIgBAAIAAACIAAAAIAAABIgDAMg");
	this.shape_569.setTransform(101.7,143.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.1,-2.4,8.3,-2.4).s().p("AAAAfIgBgDIgBAAIgEgGIgBAAIgVggIAAABIAAABIgJAWIgLgQIABgDIAAAAIAEgSIAAgBIAAAAIAQgGIAIAEIAAABIALAHIABAAIABABIACABIAAAAIAEADIgGAaIAAABIgBAAIABAAIAVgHIAAAAIABAAIAHgCIAAAAIAEgBIABAAIABgBIAFADIABABIABAAIANAIIgBABIgBAAIgkALIgBAAIgDACIgHACg");
	this.shape_570.setTransform(100.5,144.8);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAcAwIhGgOIgHgBIAGgKIAJgOIACgEIABgBIAhg2IAJASIAUAsIABACIgKAQIATADIAIASg");
	this.shape_571.setTransform(104.8,133.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.9,-1.7,10.5,-1.7).s().p("AggAeIADgPIAAgBIABAAIAAgCIAAAAIAAgBIADgKIAAAAIAAgCIAEgPIAAgBIACgJIAAgBIABgDIAAAAIACABIAAAAIACABIAbARIABABIABABIgCABIAAAAIABAAIASAKIAAAAIABABIAAAAIgGAQIgVgeIgEAAIgBABIgMAjIgMgSIAAABIAAAAIgIAXg");
	this.shape_572.setTransform(85.8,150.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,-2.9,5.8,-2.9).s().p("AA2AtIgBgBIgBAAIgGgEIAHgDIACAAIAAAIgAAAALIgBAAIAAAAIgBgBIAAAAIgBgBIgBAAIgLgHIgBAAIAAgBIgRgJIgBAAIgBAAIgBgBIAAAAIgBAAIAAgBIgFgDIgCgFIA7ALIgCAGIAAABIgCAJIAAAAIgBABIAAABIAAABIAAAAIgBAGgAg2goIADgBIADgBIABAAIAGgCIgJANg");
	this.shape_573.setTransform(105.5,138.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.1,-5.2,8.3,-5.2).s().p("AgIgCIARgBIgCADIgGACIgBAAIgCABIgCABIgBAAg");
	this.shape_574.setTransform(100.6,134);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.3,-3.3,9.1,-3.3).s().p("Ag0AoIAAgBIAAgBIAJgmIAAAAIABgBIAAgBIAAgBIAAgBIABgEIACgGIAAAAIAEgSIAAgBIABgEIAAgCIAUAEIADABIAAAAIALAIIAAAAIABABIABAAIABAAIAAABIAVAMIABAAIAAABIAAAAIABAAIAAAAIABABIAAAAIABAAIAAABIAOAIIACABIAAAAIAJAEIAAAEIAAABIgiAJIgQAGIgBAAIAAAAIgCAAIgQAFIgBAAIgHACIgFADIgBAAIgWAGg");
	this.shape_575.setTransform(95.8,139.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-2.3,6.6,-2.3).s().p("AAvApIAAAAIgCgBIgNgIIAAgBIgBAAIgBAAIgBgBIAAAAIgBAAIAAAAIAAgBIgBAAIgUgLIAAgBIgBAAIgBAAIgBgCIgBAAIgLgHIAAAAIgCgCIAvAJIAAAAIAOADIAAgCIAJACIgCgDIAFADIAAABIAAAAIAAAAIgBACIAAACIgCAJIAAAAIgDALIgBAEgAgrgNIAAAAIgBAAIgSgLIAAAAIgBAAIAogWIgIARIADAAIAFAAIgBAAIgNAUgAAugLIAAgBIACAAIgCABg");
	this.shape_576.setTransform(95.5,135.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AApAxIhZgQIASgdIAAAAIAgg2IAJASIAWAtIAAABIADAIIAAAAIAEAJIgGAKIAHABIAEABIADAGIACACg");
	this.shape_577.setTransform(96.5,132.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.2,-1.5,8.2,-1.5).s().p("AANADIABABIABAAIAAABIABAAIAAABIABAAIAAAAIAIAEIgDAJgAgYgSIAJAFIgCAGg");
	this.shape_578.setTransform(100.4,126.9);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.8,0.1,5,0.1).s().p("AgCAvIgVgvIAIgWIABgGIACgGIAFgNIAEAHIAbAoIgPAtIAHAAIgBACIgRABg");
	this.shape_579.setTransform(100,128.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgXAuIgFAAIAXg/IAHgXIABgEIABgBIAEAAIACAEIATAcIgIAWIgIgRIghA2g");
	this.shape_580.setTransform(95.4,128.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.lf(["#3F8732","#000000"],[0.067,1],-6,2.1,6.9,2.1).s().p("AgBAJIAAABIgIAYIgVggIAAAAIAagNIABAAIACgCIAAAAIABgBIAAAAIASgKIAcgQIABABIANAIIAAAAIABAAIAAABIgBACIAAACIgDAJIAAAAIgEARIAAABIgCAJIAAABIgBABIAAABIAAABIAAABIgEAOIgMgRIgEAAIgKAcgAgwAZIgBgBIgJgFIgBgBIgBAAIAYgNIgIAWg");
	this.shape_581.setTransform(114.9,123.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.5,1.5,5.4,1.5).s().p("AgSAuIgBAAIgBgBIgQgJIgBgCIAAABIgBAAIAAAAIgCgBIAAAAIAAgBIgNgIIABgZIAhgRIABAAIACgBIAAAAIABAAIAAgBIABAAIA5ggIgHAcIAAACIAAAAIAAAAIASgGIgBAZIgSAJIgBAAIgBABIAAAAIgCABIgBAAIgaAPIgEAAIAAACIgYANIAAAAIABABIAJAFIABABIAFADIgBADg");
	this.shape_582.setTransform(111.4,121.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,3.3,6.5,3.3).s().p("AA7AiIABhHIAFgCIgBAiIAAAXIgBAXgAg1AlIAAgBIgKgFIAAAAIgBAAIAZgOIgIAYg");
	this.shape_583.setTransform(99.6,122.2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.5,6.5,0.5).s().p("AAdA7IAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIgBgBIgRgeIgEAHIgEgHIgEANIgIgFIgIgPIgEAAIgCADIgDgDIgEAAIAAABIgJgFIgBgBIgBAAIAAAAIgIgFIgBgBIgJgFIgBgBIAAAAIA3gdIABAAIABgBIABgBIABAAIAAAAIAbgPIAggSIgIAgIAAABIAAABIAAAAIASgGIAAAEIgCBGIgJgNIgFAAIgMAkg");
	this.shape_584.setTransform(99.2,121.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAAAAIAAgBIAIggIABgHIAAgBIABAAIAAgCIABAAIAAgBIACgJIAAgBIAEgSIAAAAIADgJIAAgCIABgCIAAAAIAAAAIABABIABAAIASALIAAAAIABAAIAKAHIABABIABAAIAAAAIABABIAAAAIABAAIAUAMIAAAAIABACIABAAIAAAAIANAHIABAAIABAAIABACIABAAIABABIANAIIAAAAIgBAAIgBAAIgSAFIgBABIAAAAIgcAIIAAAAIgFACIgBABIgBAAIgRAFIgBAAIgEABIgBAAIgHADIAAAAIgBAAIgEABIgSAFg");
	this.shape_585.setTransform(109.4,114.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-2.9,11.1,-2.9).s().p("AggArIAAAAIAAgBIAJgnIAAgBIABAAIAAgCIAAAAIAAgBIADgJIAAgBIAEgSIAAAAIACgJIAAgCIABgCIAAAAIABAAIABABIABAAIARAKIAAABIABAAIALAHIAAAAIABABIABAAIAAABIABAAIAAAAIAKAGIgoAVIABAAIAAABIAJAFIAAABIAIAFIABAAIAAABIABAAIAMAIIgDAAIAAABIgCAAIgEABIgNAEIgBAAIgEABIAAAAIgHADIAAAAIgBAAIgWAGg");
	this.shape_586.setTransform(103.3,107.2);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.lf(["#3F8732","#000000"],[0.067,1],-1.4,-3,13,-3).s().p("AgLAjIAIgiIAAAAIAAgBIAAAAIABgBIAAgBIAAgBIAHAEIABAAIAAABIABAAIAAAAIgBACIAAACIgDAJIAAABIgDARIAAABIgBAFIgKADgAAGgnIAFgCIABABIgHAEg");
	this.shape_587.setTransform(116.4,110.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AA9BJIgBgBIgBAAIgNgIIAAgBIgCAAIgBgCIgBAAIgBgBIgMgHIgBAAIAAAAIgBgBIgBAAIgUgMIgBgBIAAAAIgBAAIAAAAIgBgBIgBgBIgKgGIgBgBIAAAAIgSgLIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIgMgIIgBAAIAAgBIgBAAIgIgFIAAAAIgKgFIAAAAIgBAAIApgXIAPgIIAAAAIACgBIABAAIABgBIAAAAIAcgQIAEgBIADAAIABAAIAXAFIgGgRIAOgIIACAAIgBASIAAArIAAAGIgSAJIABAAIAAAAIAKAGIAAAAIAGAEIgBAhIAAAYIAAACg");
	this.shape_588.setTransform(108.9,108.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-3.3,8,-3.3).s().p("AAAgUIAMAIIABAAIABABIAAAAIABAAIANAHIAAABIABAAIABACIACAAIAAABIAJAEIgBABIAAAAIgBAAIgBABIgBABIgBAAIgLAGIgGACIgFABIgPAFgAgpgUIAEABIgEACg");
	this.shape_589.setTransform(115.5,104.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AguArIAAAAIAAgBIAJgnIAAgBIABAAIAAgCIAAAAIAAAAIAAgBIADgJIAAgBIAEgSIAAAAIACgJIAAgBIABgDIAAAAIACABIAAAAIACABIAbARIABABIABABIABAAIABAAIAUAMIABAAIAAABIABAAIAAAAIABAAIAAABIABABIABAAIAAAAIANAHIgGAQIgEABIgHADIgUAGIgCAAIgCAAIgQAGIgBAAIgNAEIAAAAIgWAGg");
	this.shape_590.setTransform(150,151.6);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.1,-0.6,4.8,-0.6).s().p("AAOAxIAAAAIgBAAIgBgBIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIgUgMIAAAAIgBAAIgBgBIgBgBIgcgRIgCgBIgBAAIgBgBIAHgDIACAAIAAgBIA0gPIABAAIABAAIAAAAIABABIACABIABgxIAMgDIgIAjIAAABIgBABIABAAIAWgHIAAAAIAAAYIgBAiIgEgGIgEAAIAAAAIgLAfg");
	this.shape_591.setTransform(152,146);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.1,-3.2,4.8,-3.2).s().p("AAsApIgBgBIAAAAIgOgIIAAgBIgEgCIAVgGIgBASgAgrgLIgBgBIAAAAIAAgSIAJgDIABAAIAAgBIAIgCIAAAAIAEgBIACAAIAKgDIAAAAIgBADIAAABIgDAJIAAABIgEASIAAAAIgCAJIAAAAg");
	this.shape_592.setTransform(148.5,151.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.3,8.9,-3.3).s().p("Ag2AoIAAgBIAAgBIAJgmIAAgBIABAAIAAgCIAAAAIAAgBIABgCIACgIIAAgBIABgCIADgPIAAgBIABgGIAVAEIAAAAIACABIAIAFIgCAJIAAABIgBAAIABAAIAHgCIABAAIAEgCIARALIABAAIAAAAIAAAAIABABIAAAAIABAAIABABIAAAAIAMAHIADACIABAAIAAABIANAHIgBAAIgBAAIg1AQIAAABIgBAAIgHACIgKADIgBAAIgFACIAAAAIgHACIAAAAIgBAAIgKADIgMAEg");
	this.shape_593.setTransform(148.2,144.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.2,-5.2,10.2,-5.2).s().p("AgpAVIABAAIAAgBIABgJIABgFIAZAFIADABIgBAAIgHACIgBAAIAAAAIgJADIgDACIgCAAIgHACgAAFgTIAlgBIAAAAIgCAIIAAACIAAABIgBABIAAABIAAABIAAAAIgBAEIgNADIgJADg");
	this.shape_594.setTransform(151.6,140.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAxAzIgcgFIAAAAIgIgCIgYgEIgFgBIgBAAIgEgBIAAAAIgVgEIgBAAIgBAAIgDgBIgBAAIAEgIIANgUIABgBIAAAAIAhg2IAIASIAVAuIALAYIAGANIABAAg");
	this.shape_595.setTransform(148.9,137.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAHgVIACgGIADgJIAFgLIAHgTIAAgBIAHgXIAAgBIABAAIAAAAIAEAAIARAaIAEAGIAAABIgIAVIgIgRIghA2g");
	this.shape_596.setTransform(147.8,132.9);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgnAAIAIgVIAAgBIADgIIAFgPIAAgBIAAgBIAJANIAPAXIANASIAKAPIAQAXIgWABIgkACg");
	this.shape_597.setTransform(154,133.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.4,-0.6,5.5,-0.6).s().p("AATASIALAHIAAAAIABAAIAAABIgBACIAAABIgBAEgAgJgYIACgBIACAAIABAAIAUgHIAAABIgHAdIgDACgAgegRIABAAIAEgCIABAAIABAAIgDAIg");
	this.shape_598.setTransform(153.4,132.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.9,-3.3,10.5,-3.3).s().p("AgcAAIAAgBIAHgCIAgAFIAAAAIgBAAIAAAAIgBABIgCABIAAAAIgqAXgAAQgYIgBgCIABAAIAAAAIABABIAAAAIABAAIASALIgCAFIgJAEg");
	this.shape_599.setTransform(157.9,129.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,-1.9,5.8,-1.9).s().p("AA2A2IAAgBIgBAAIgNgIIgBgBIgCgBIgNgIIAAAAIgCgBIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIgTgMIAAgBIAAAAIgBAAIgBgBIgCgBIgLgHIgBAAIgQgKIgCgBIAAAAIgBAAIgBAAIAAgBIgIgFIgGgDIgBgBIAAAAIgEgDIAcgIIABAAIABgBIAAAAIABABIABABIAAgOIAHgCIACAAIABgBIA0gQIAAAAIABAAIgCAHIAAABIgDASIAAAAIgCAIIgBACIAAABIgBAAIAAACIAAAAIAAABIgJAmIAAABIgBABIABAAIAWgHIAAAAIABAAIALgEIAAALIAAATIgBAIg");
	this.shape_600.setTransform(130.5,152.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3,8.9,-3).s().p("Ag2ArIABAAIAAgBIAJgoIAAgBIAAAAIAAgBIAAAAIAAgBIABgBIACgJIAAAAIAEgSIAAAAIACgIIABAAIAAABIABAAIAAgBIABgFIAAABIACAAIAQAKIABABIAMAHIABAAIAAABIAAABIABAAIAAAAIAUAMIABAAIAAAAIABAAIABABIAAAAIABAAIABABIAAAAIANAHIADABIAAABIANAIIgBAAIAAAAIgDACIgeAJIgPAEIgGABIAAABIgBAAIgRAGIgBAAIgMADIgBAAIAAAAIgVAHg");
	this.shape_601.setTransform(138.1,151);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.2,-0.5,4.7,-0.5).s().p("AArBEIgBgBIgBAAIgNgIIAAAAIgCgBIgOgJIAAAAIgBAAIgBgBIAAAAIgBAAIAAAAIAAgBIgBAAIgTgMIgBAAIAAAAIgBgBIgBgBIgBAAIgMgHIAAgBIgRgKIgBAAIgBgBIAAgFIAAgPIAPgEIACAAIABgBIA0gQIAAAAIABAAIABAAIABABIABAAIABgqIAAAAIAIAFIABAAIAAABIAJAFIgBAGIgCAEIACAAIAAAXIgBACIAAABIgCAIIAAACIAAABIgBAAIAAACIAAAAIAAABIgJAmIAAABIgBABIABAAIAMgEIgBASIAAAWg");
	this.shape_602.setTransform(139.5,145.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.4,-3.6,7,-3.6).s().p("AgigQIAKgDIABAAIAAgBIAHgCIAAAAIAFgBIABAAIAAgBIANAIIABAAIAAABIAAAAIABAAIAAAAIABABIABAAIAAAAIAMAIIADABIABABIAAAAIANAHIgBABIgBAAIg0AQIAAAAIgCAAIgPAFg");
	this.shape_603.setTransform(138.4,142.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2.4,6.5,-2.4).s().p("AA+AxIgBAAIgBAAIgNgJIAAAAIgBAAIgCgCIgNgHIAAAAIgBgBIgBAAIAAAAIgBgBIAAAAIAAAAIgBAAIgRgLIAJgDIAAAAIABAAIAHgCIABAAIAEAAIABAAIAbAGIABAAIAAAAIgGgOIAJgDIgBAwgAgIAHIgBgCIAEABIABAAIAEABIAAAFgAgigJIgJgEIAAgBIgBAAIgIgFIAAgBIgCgBIgIgEIAAAAIgBAAIAVgMIADgCIAHABIABABIgBgBIgBgDIAHgFIAHgDIgIAVIAIAAIAAAAIgBABIgMAVg");
	this.shape_604.setTransform(147.7,140.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAAAAIAAgBIAEgNIAFgaIAAgBIABAAIAAgCIAAAAIAAgBIABgBIACgIIAAgBIAEgSIAAAAIACgJIAAgBIACgDIAAAAIABABIABAAIABABIARAKIAAAAIALAHIABABIABABIAAAAIAAAAIABAAIABAAIAPAKIgEAWIAAABIgBAAIABAAIAVgHIAAAAIABAAIAHgCIAAAAIANAIIgBAAIgBAAIgcAJIgZAHIAAAAIgBAAIgRAGIgBAAIgMADIAAABIgBAAIgEABIgSAFg");
	this.shape_605.setTransform(122.3,149.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABAAIAAgBIAEgWIAFgRIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIACgIIAAgBIAEgSIAAAAIADgJIAAgBIABgDIAAAAIABABIAAAAIACABIAQAKIABAAIAMAHIABABIAAABIAAAAIABAAIAAAAIAAAAIAUAMIABAAIAAABIABAAIAAAAIABAAIABABIABABIAAAAIAMAGIACACIABAAIABABIANAIIgBAAIAAAAIg1AQIgBAAIgBAAIgHADIgKADIgBAAIgFABIAAAAIgHACIgBABIAAAAIgVAGg");
	this.shape_606.setTransform(129,146.2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgCgBIgqgHIgUgEIAAAAIghgGIARgcIABgBIAAgBIAhg1IAJASIAVAuIARAlIAAAAg");
	this.shape_607.setTransform(118.6,133.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-1.6,6.6,-1.6).s().p("AA+A5IgBgBIAAAAIgNgHIAEgCIABAAIAKgDIAAAOgAAHAYIAAAAIgBAAIAAgBIgBAAIgBgBIgBAAIgLgHIAAgBIgRgKIgBAAIgBgBIgBgBIgBAAIAAAAIgOgIIAAAAIgBAAIgSgLIAAgBIgBAAIA0gcIAEgCIAAAAIADgBIAAgBIABAAIAAAAIABAAIABgBIAEgCIABAAIAEgBIABAAIAGgCIAAAAIABgBIAAAAIAAABIgMAHIAAAAIABAAIASALIAAAAIABABIANAIIAAABIABAAIAAAAIgBADIAAABIgDAJIAAABIgDARIAAAAIgDAIIAAACIAAABIgBAAIAAACIAAAAIAAABIgEARg");
	this.shape_608.setTransform(121.8,144.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-5.2,8.9,-5.2).s().p("Ag2AVIABgBIAAAAIAAgDIAUgGIAAAAIABAAIASgGIABAAIAAgBIABAAIABAAIABABIABABIAAgMIAQgFIAAAAIABAAIAAAAIABAAIAAABIABABIABgLIAqAHIACACIgBAAIAAAAIAAAAIgGADIgBAAIgFABIgHACIAAAAIgBAAIgHACIgLADIgEABIgFABIAAABIgBAAIgFABIgBABIgBAAIgRAGIgBAAIgFABIAAAAIgHACIgBAAIAAAAIgVAHg");
	this.shape_609.setTransform(117.9,140.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.8,-5.4,9.6,-5.4).s().p("AgvATIAEgBIgDABgAgRAKIgEABIgDABgAgRAKIAFgCIgEACgAgEAGIAAAAIgBAAgAgBgSIAYAFIAAAAIAZAEIgiAKIgBAAIgFABIgBABIgCAAIgGACg");
	this.shape_610.setTransform(123.8,138.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5,0.1,4.8,0.1).s().p("AgZAAIAIgVIAAgBIAJgYIAAgBIAPAZIAGAIIAGAJIAHAJIgJAaIAIAAIAAABIgCABIgJAPIgSABg");
	this.shape_611.setTransform(122.3,130.4);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.lf(["#3F8732","#000000"],[0.067,1],-11.8,-1.7,1.1,-1.7).s().p("AAHA4IgBAAIAAAAIAAgBIgBAAIgCgBIADAAIABABIgBgBIgPglIASgBIgIANIAHACIAAAYIAAACgAAHgsIgGgJIAJgDIAAAQg");
	this.shape_612.setTransform(122.8,133.4);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgogHIgYgFIgBAAIgYgEIgHgCIAHgNIAJgPIACgBIAAgBIAgg2IAJASIAWAvIABADIAPAiIABABg");
	this.shape_613.setTransform(127.9,133.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAJgaIANgkIAJgcIABgBIAEAAIACADIACACIAKAQIAHAKIAAABIgIAWIgIgRIghA2g");
	this.shape_614.setTransform(126.8,128.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.1,-4.8,9.3,-4.8).s().p("AgyAZIABgBIAAgBIAFgXIAMABIAAAAIAmAHIgBAAIgBABIgCAAIgQAFIgBAAIgEACIgBAAIgHACIAAAAIgBAAIgVAHgAARgXIAPgBIALAGIACACIABAAIAAABIAFADIgDAIIgIADIgMACg");
	this.shape_615.setTransform(141.1,135.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.8,6.5,-0.8).s().p("AA9BBIgBgBIgBAAIgNgIIAAgBIgBAAIgCgCIgNgHIAAAAIgBgBIgBAAIAAAAIAAgBIgBAAIAAAAIgBAAIgUgMIgBgBIAAAAIgBAAIAAAAIgBgBIgBgBIgKgHIgBAAIgQgKIgCgBIAAAAIgCgBIgBAAIAAgBIgNgIIgBgBIAAAAIgSgKIgBAAIAAAAIAMgHIABAAIAAAAIABABIAAgCIAIgDIACAAIAAAAIAGgCIAAAAIAigKIAoAHIACABIgBgBIgPgiIAFgDIAfgBIgDAEIAEABIAAAEIAAABIgBAIIgBABIAAABIAAABIAAABIgBABIAAAAIgJAoIAAABIAAAAIAAAAIAMgDIgBApIAAAQIgBAKIAAABg");
	this.shape_616.setTransform(128.6,140.8);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.8,0.1,4,0.1).s().p("AghAAIAIgVIAAgBIAIgXIAAgBIAAgBIAJANIAnA7IABACIACACIgGALIgEAGIgdABIgHABg");
	this.shape_617.setTransform(132.4,129.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.1,-2.1,5.8,-2.1).s().p("AA2A0IgBgBIAAAAIgNgIIgBgBIgBAAIgCgCIgMgHIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIgNgIIARgFIACAAIAAAAIAdgJIACABIAAABIgBApgAgQgYIABAAIgBADgAg3gcIAHgBIgGAEgAgLgzIACAAIgBACg");
	this.shape_618.setTransform(136.7,137.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.1,-4.1,4.8,-4.1).s().p("AAdAXIgBgBIgCgBIgCgBIACAAIAHABIgEACgAAjALIALgDIAAAGIgIAFgAgsgUIAAgBIgBAAIAEgCIgCADg");
	this.shape_619.setTransform(140.4,134.3);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.8,-2.9,9.6,-2.9).s().p("AgvArIAAAAIAAgBIAJgoIAAAAIABgBIAAgBIAAAAIAAgBIABgBIACgIIAAgBIABgEIAPADIgGAYIAAABIAAAAIAAAAIAWgGIAAAAIABgBIAGgCIAAAAIAFgBIABAAIARgFIACAAIAAAAIABgBIABAAIAFABIAGACIACAAIACABIABABIAAAAIgUALIAAAAIABABIAHAEIgdAJIAAAAIgCAAIgQAFIAAABIgBAAIgFABIAAAAIgHACIgBABIAAAAIgKADIgMADgAgcgoIABgCIABAAIABAAIAAABIABAAIgCAEg");
	this.shape_620.setTransform(138.5,136.4);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-2,9.9,-2).s().p("AgagYIACgFIAAgCIABgCIAAgBIABABIABABIABAAIARAKIAAABIABAAIAKAHIABAAIABABIAAAAIABABIAAAAIABAAIAPAJIgNAiIAIAAIAAABIgBABIgEABIgBAAIgCABg");
	this.shape_621.setTransform(134.1,128.7);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAxAzIgHgBIgHgCIgHgBIgGgBIAAAAIgmgHIAAAAIgMgCIgPgDIgBAAIgEgBIAGgLIAGgLIADgDIACgDIAAgBIAAgBIAig2IAIASIAVAvIAMAZIAEAIIABAEIAAABg");
	this.shape_622.setTransform(139.5,131.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAMgjIATg3IABgBIAEAAIAQAXIADAGIACACIAAABIgIAWIgIgRIghA2g");
	this.shape_623.setTransform(138.5,127.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.5,2.5,3.4,2.5).s().p("AgeAaIgDgFIAAgQIAEgBIACAAIAAAAIAGgCIAAAAIALgCIgNAkgAASgIIAHgDIABAAIAAgBIABAAIAAAAIABACIABAAIABgYIADgBIABAAIgBAJIAAAGIgIAVg");
	this.shape_624.setTransform(127.2,127.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.6,0.2,5.3,0.2).s().p("AgFArIAAgBIgBAAIAAAAIgBAAIgBgBIAAgBIgLgGIgBgBIAAAAIgRgKIgBgBIgBAAIgCgBIAAAAIAAgBIgLgGIAAgJIAFgCIABAAIARgEIACAAIABgBIAFgBIABAAIAagJIABAAIAAAAIATgGIAAAAIABAAIAAAAIAAAAIABABIABAAIABgbIABAAIABAAIARgGIACAAIABAAIABgBIgBA2IAAARIgCgCIgPgWIgFAAIgBAAIgTA4g");
	this.shape_625.setTransform(135.9,123.1);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.8,-2.3,8.6,-2.3).s().p("AghANIAAABIgJAYIgJgPIAEgOIAAgBIAAgBIAAgBIABgBIAAgBIACgIIAAgBIAEgSIAAAAIADgJIAAgCIABgCIAAgBIAAABIABABIAAAAIASALIABAAIABABIAKAGIACABIABABIAAAAIABAAIAAAAIABABIASALIABAAIAAABIABAAIAAAAIABAAIAAABIAEABIgKAcIgMADIAAAAIgEACIgBAAIgCAAIgEABIgJAEgAAhAEIACACIAAAAIACABIABABIABABIANAHIAAAAIgBABIAAAAIgIADg");
	this.shape_626.setTransform(124.7,124.3);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIABAAIAAgBIAGgcIADgLIAAgBIAAgBIAAgBIABAAIAAgBIABgEIABgFIAAgBIAEgSIAAAAIADgJIAAgCIAAgCIAAgBIABABIABABIAAAAIASALIABAAIABABIALAGIABABIAAABIAAAAIABAAIAAAAIAUAMIABAAIABABIABAAIABABIgFATIAAABIAAABIAAAAIAWgHIABAAIAAAAIAEgBIAIAEIAAAAIgBABIAAAAIgTAFIAAABIgBAAIgbAIIgBAAIgFACIgBAAIgBAAIgRAGIgBAAIgFABIAAAAIgDABIgEABIgBABIAAAAIgEABIgRAFg");
	this.shape_627.setTransform(120.5,115);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ApIAJgmIAAgBIAAAAIAAgCIABAAIAAAAIADgKIAAgBIADgRIAAgBIADgJIAAgCIABgCIAAAAIABAAIABABIAAAAIASALIABAAIABABIAKAGIABABIABABIAAAAIAAAAIAAAAIABABIAUAMIABAAIABABIAAAAIABAAIAAAAIAAACIAAABIgBAAIABAAIAEgBIAIAFIACAAIAAAAIACACIABAAIAAABIANAIIAAAAIgBAAIAAAAIgTAGIAAAAIgBAAIgbAJIgBAAIgFABIAAABIgCAAIgRAFIgBAAIgEACIAAAAIgEABIgDABIgBAAIAAAAIgUAGg");
	this.shape_628.setTransform(133.1,120.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.7,-3.1,5.2,-3.1).s().p("AAwAqIgBgBIAAAAIgNgIIgBgBIgBAAIgCgBIAAAAIgBgBIgJgGIASgFIAAAAIABAAIAHgDIABAAIADgBIgBAbgAARAWIgBAAIgBAAIgBgBIgBAAIgTgMIAAAAIAAAAIgBgBIAAAAIgBgBIgBgBIgLgGIgBAAIgBAAIgSgLIAAAAIgBgBIgBAAIAAAAIAAgBIgHgEIAJgDIAAAAIABAAIAHgCIAAAAIAFgBIABAAIARgGIACAAIABgBIAFgBIABAAIAagJIABAAIAAAAIAFgBIgDAMIAAABIgCAJIAAACIgBAAIAAACIAAAAIAAABIgJAkg");
	this.shape_629.setTransform(133.9,117.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.7,6.5,-1.7).s().p("AA9A4IgBgBIAAAAIgNgIIgBAAIgBgBIgCgBIAAAAIgCgCIgCgDIATgGIABAAIAAAAIAEgBIgBAYgAAdAlIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIgUgMIAAAAIgBAAIAAgBIgBAAIgBgBIgBAAIgJgHIgBAAIgBgBIgSgKIAAgBIgBAAIgBgBIAAAAIAAAAIgNgHIgBgBIAAAAIgBAAIAAAAIgIgFIgBgBIgJgFIADgBIABAAIAEgBIABAAIARgGIACAAIABAAIAFgCIABAAIAbgIIAAAAIAAgBIATgFIAAAAIABgBIAAAAIABAAIABABIABABIAAgKIAHgCIAIgDIABAAIgCAIIAAABIgBABIABAAIAMgEIAHAEIAAABIABAAIAAAAIgBACIAAACIgDAJIAAABIgEARIAAABIgCAKIAAABIgBAAIAAACIAAAAIAAAAIgJAmIgEAAIgBAAg");
	this.shape_630.setTransform(123.9,120.4);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AsIAAgBIAAgBIAFgUIAEgUIAAAAIABgBIAAgBIAAAAIAAAAIADgKIAAgBIAEgRIAAgBIACgJIAAgCIABgCIAAgBIABABIABAAIABABIASAKIAAABIABABIALAGIABAAIAAABIAAAAIAAABIABAAIAPAJIAAABIAGADIABAAIABABIAAAAIABAAIALAHIACAAIAAAAIACABIACABIAAAAIANAIIgBAAIAAABIgBAAIgSAGIgBAAIAAAAIgbAJIgBAAIgGABIAAABIAAAAIgBAAIgIACIgJADIgBAAIgFACIAAAAIgHACIAAAAIgBAAIgWAHg");
	this.shape_631.setTransform(128,112);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.5,0.1,6.4,0.1).s().p("AgaAWIAGgBIgFACgAADgWIAYAFIgDAOIAAAAIgWALg");
	this.shape_632.setTransform(120.1,104.1);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.6,6.5,-0.6).s().p("AA9BEIgBgCIgBAAIgIgEIADgBIABAAIAEgCIABAAIACAAIAAAJgAAcAvIAAAAIgBgBIgBAAIgVgMIAAAAIgBAAIAAAAIgBgBIgBgBIgKgGIgBgBIAAAAIgSgLIgBAAIgBgBIAAgBIgBAAIAAAAIgBgBIgIgEIgEgDIgBgBIAAAAIgBAAIgCgCIgGgCIAAAAIgKgGIAAgBIgBAAIASgJIAPgJIAHgDIAEgDIAMgGIAAAAIACgBIABAAIABgBIAAAAIABgBIAGgDIAVgMIAAABIAAAAIAAAAIAWgHIAAAAIABAAIAHgCIAAAAIAFgBIABAAIAFgCIg3AeIABAAIAAAAIAKAFIAAABIAIAFIABAAIAAAAIABABIAMAHIABABIAAAAIABAAIAAABIgBACIAAACIgDAJIAAABIgEAQIAAABIgCAKIAAABIgBAAIAAABIAAABIAAAAIgFAUg");
	this.shape_633.setTransform(120,109.4);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.6,-6.1,11.8,-6.1).s().p("AgZAMIAAgBIAAAAIAAgBIADgNIAMADIgEgLIApAIIgMADIgGABIAAAAIgFACIgBAAIgFACIgBAAIgBAAIgVAHg");
	this.shape_634.setTransform(125.1,102.6);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-4.2,8.9,-4.2).s().p("Ag2AfIABgBIAAgBIACgIIABAAIAAAAIAGgCIABAAIAbgIIAAAAIABgBIARgFIABAAIAAgBIABAAIAAAAIABABIACABIABgkIANAJIABAAIABABIABAAIABAAIAMAHIABABIAAAAIACACIABAAIABABIANAIIAAAAIgBAAIAAAAIgOADIgFACIAAAAIgBAAIgbAJIgBAAIgFABIgBABIgBAAIgRAFIgBAAIgFACIAAAAIgHACIgBAAIAAAAIgJADIgMAEg");
	this.shape_635.setTransform(133.1,112.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.7,6.5,-1.7).s().p("AA9A4IgBgBIAAAAIgNgIIgBAAIgBgBIgCgCIAAAAIgCgBIgMgGIAAgBIgBAAIgBgBIgBAAIgFgDIAAgBIgPgJIgBAAIAAAAIgBAAIgBgBIgBAAIgJgHIgBAAIgBgBIgSgKIAAgBIgBAAIgBgBIAAAAIAAAAIgBgBIgMgGIgBgBIgBAAIAAAAIgIgGIgBAAIgJgGIgBAAIAAAAIA2geIALgDIAOADIgCgHIAUAFIgBAFIAAABIgBAAIABAAIAPgEIAMACIAEABIgBBCIgBAlg");
	this.shape_636.setTransform(127.5,107.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.lf(["#3F8732","#000000"],[0.067,1],-3,-6,11.4,-6).s().p("AgdAMIABAAIAAgBIABgFIANACIgOAEgAAHgIIgBgDIAYAEIgBADIgDABIgBABIgCAAIgNACg");
	this.shape_637.setTransform(133.7,101.8);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.4,-2.7,10,-2.7).s().p("AgEgdIACABIABABIAHAFIgCAJIAAABIgCAJIAAABIgBABIAAABIAAAAIAAAAIgGAeg");
	this.shape_638.setTransform(139.5,106.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.2,-1.7,2.7,-1.7).s().p("AAXA4IgBgBIgBAAIgNgIIAAgBIgBAAIgCgCIAAAAIgCgBIgLgHIgBAAIAAAAIgBgBIgBAAIgOgJIABhBIAHABIAGABIgFgNIANgEIACAAIABgBIACgBIgCARIAAABIgBAAIABAAIAUgHIAAAAIABAAIAFgBIAAAQIgBA8IAAAKIgBAJIAAAIg");
	this.shape_639.setTransform(136.4,106.9);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.1,-2.3,6.8,-2.3).s().p("AgEAIIgBAAIgCgCIAAgPIACgBIAAAAIAFgBIAAAAIACgBIAGADIAAABIAAAAIAAAAIgBACIAAACIgCAIIAAABIgCAIg");
	this.shape_640.setTransform(139.8,103.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.1,6.7,-3.3,-3.7).s().p("AAfAwIgggGIgPgDIAAAAIgbgFIgBAAIgEgBIARgcIABgBIAAAAIAhg2IAIASIAWAuIADAIIAJATIAEAKIAAAAg");
	this.shape_641.setTransform(155.9,125);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIACgHIATgzIAKggIABgBIAEAAIAQAXIAFAIIAAABIgIAWIgIgRIghA2g");
	this.shape_642.setTransform(154.9,120.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgnAAIAIgVIAAgBIAEgLIAEgMIAAgBIAAgBIAHAKIAHAJIAxBJIg5ADg");
	this.shape_643.setTransform(161.1,121.7);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-2.5,9.8,-2.5).s().p("AgPAnIgRgZIgFAAIABgHIAAAAIABgBIAAgBIAAgBIAAgBIABgCIACgHIAAgBIAEgRIAAgBIACgJIAAgBIABgCIAAgBIACABIAAABIACAAIAQAKIABAAIAHAFIgDAGIAIAAIAAABIgBABIgQAbIAFABIABAAIAZAFIABAAIAPADIgIACIgVAHIAAAAIgCAAIgCABIgIgNIAAABIAAACIgFAOIgBAAIgBAAIgFACg");
	this.shape_644.setTransform(152,127);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.9,-0.3,6,-0.3).s().p("AgNAcIgBAAIgQgLIgCAAIAAgBIgCgBIAAAAIAAAAIgOgJIgBAAIAAAAIgEgCIABgFIAggJIAAAAIgBABIABAAIAUgGIABAAIABAAIAAgBIAGgCIABAAIADgBIgRAzgAAsgdIAKgCIgEAKg");
	this.shape_645.setTransform(152.9,121.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.7,0.1,4.1,0.1).s().p("AghAAIAIgVIAAgBIAIgXIABgBIAAgBIAyBKIgHATIgYABIgOABg");
	this.shape_646.setTransform(144,128.1);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.7,-0.4,3.2,-0.4).s().p("AAOA8IgBgBIgBAAIgCgCIgKgFIAXgCIgEANgAgTgrIAAABIgBABIgIAXIgCgDIgCgDIAAgRIAJgEIgBAAIABAAIAWgGIAAAAIABgBIAFgCIABAAIAEgBIABAAIARgGIACAAIABAAIABgBIAAAFIgCBXIAAABg");
	this.shape_647.setTransform(144.3,127.7);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.1,-3.3,10.3,-3.3).s().p("AgoAnIAAAAIAAgBIABgCIAIgkIAAgBIABAAIAAgCIAAAAIAAgCIADgJIAAgBIADgMIANgFIABAAIAAAAIABAAIAAAAIABABIABABIAAgIIAHAEIABAAIAKAHIABAAIABABIABAAIAAABIABAAIAAAAIAUANIABAAIABABIABAAIAAAAIADACIgGAaIgPAEIAAAAIgCABIgCABIgCAAIAAABIgCAAIgQAFIgBAAIgBAAIgEABIAAAAIgHADIgBAAIAAAAIgSAFIgEABg");
	this.shape_648.setTransform(139.6,115.7);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AsIABgBIAAAAIAAgBIADgQIAFgYIAAAAIABgBIAAgBIAAAAIAAAAIABgCIACgHIAAgCIACgHIACgJIAAgBIAAgBIACgJIAAgCIABgCIAAgBIABABIABAAIAAABIATALIABABIALAGIABAAIAAACIAAAAIAAAAIABAAIAQAJIAAABIAEACIACAAIABABIAAAAIABABIABAAIAKAHIACAAIAAAAIACABIACABIAAAAIANAIIgBAAIAAABIAAAAIgTAGIAAAAIgBAAIgCABIgHgKIAAAAIAAABIgFAMIgJADIgOgYIgFAAIAAABIgMAhIgEABIAAAAIgGABIgBAAIgBABIAAAAIgVAHg");
	this.shape_649.setTransform(156.2,116.2);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-4.2,9.8,-4.2).s().p("AguAeIABAAIAAgBIAJgmIAAgBIAAAAIAAgCIABgBIAAgBIAVgGIABAAIAAgBIAHgCIABAAIAEgBIABAAIAQgGIABAAIANAIIABAAIAAABIABAAIAAAAIABAAIAAABIABABIAMAHIgDAPIAAABIghAJIgBABIgBAAIgCAAIgQAGIgBAAIgEABIgBAAIgGACIgBABIAAAAIgWAGg");
	this.shape_650.setTransform(146.5,120);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.2,-5.3,2.7,-5.3).s().p("AAXAUIABgBIAAAAIAAABgAgGABIgCgBIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIgMgIIABAAIAAgBIAFgBIABAAIAbgJIAAAAIABAAIgBABIAAABIAAABIAAABIgBABIAAAAIgFAWg");
	this.shape_651.setTransform(150.7,117.9);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.7,-2.9,9.7,-2.9).s().p("AguArIABAAIAAgBIACgKIAGgbIABgCIAAgBIAAAAIAAgCIABAAIAAgBIACgJIAAgCIAEgQIAAAAIAAgBIADgJIAAgCIABgCIAAAAIAAAAIABABIABAAIASALIABABIAKAGIABABIABABIAAAAIABAAIAAAAIAQAJIAAAAIAFADIABAAIABABIAAAAIABABIABABIALAFIACABIgCAHIAAACIgCAHIAAABIgBAAIgbAIIgBAAIgFACIgBAAIgBAAIgBAAIgQAGIgBAAIgEABIgBAAIgHACIAAABIgBAAIgVAGg");
	this.shape_652.setTransform(147.5,114.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.7,-2.9,5.2,-2.9).s().p("AAQAZIgBAAIAAAAIgBgBIgBAAIgTgNIgBAAIAAAAIgBgBIAAAAIgBgBIgBAAIgLgHIgBAAIgHgDIAAgJIAUgGIAAAAIABgBIAHgBIAAAAIAEgCIABAAIARgGIABAAIAIAFIAAABIAAAAIAAAAIgBACIAAACIgCAJIgBABIAAAAIgDAPIAAACIgDAJIAAABIAAABIAAACIgBAAIAAABIAAACg");
	this.shape_653.setTransform(141.8,112);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.7,-2.9,10.7,-2.9).s().p("AgiAhIAHgeIAAgBIABAAIAAgCIAAAAIAAAAIADgKIAAgBIACgJIACgIIAAgBIACgJIAAgCIABgCIAAAAIABAAIABABIAAAAIARALIABAAIABABIAKAGIABABIABABIABAAIAAAAIABAAIAAABIAQAJIgrAXIAAAAIABAAIAIAGIABAAIAIAFIAAAAIABABIABAAIAFAEIgBAAIgQAFIgBAAIgFACIAAAAIgHACIgBAAIAAAAIgUAGg");
	this.shape_654.setTransform(142.3,106.6);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.6,6.5,0.6).s().p("AApBCIgLgGIgBAAIgBgBIAAAAIgBgBIgBAAIgFgDIAAgBIgQgJIAAAAIgBAAIAAAAIgBgBIgBgBIgKgGIgBgBIgSgLIgBAAIgBgBIAAAAIgBAAIAAgBIgHgEIgGgEIgBAAIAAAAIgBAAIgIgGIAAAAIgKgFIAAgBIgBAAIAsgXIAMgHIAAAAIACgBIABAAIABgBIAAAAIAZgNIADgCIApgXIgBBAIgyAaIABAAIAAAAIAKAGIAAAAIAIAFIABAAIAAAAIABABIANAIIAAAAIABAAIAAABIgBACIAAACIgDAJIAAABIAAABIgCAJg");
	this.shape_655.setTransform(147.9,107.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AA9BJIgBgBIgBAAIgNgIIAAAAIgCgBIgBgBIgBAAIgBgCIgLgGIgBAAIgBgBIAAAAIgBgBIgBAAIgFgDIAAAAIgQgJIAAAAIgBgBIAAAAIgBgBIgBAAIgKgHIgBAAIgSgLIgBgBIgBAAIAAgBIgBAAIAAAAIgNgIIgBgBIAAAAIgBAAIgIgFIAAgBIgKgEIAAgBIgBAAIAygbIAGgDIAAAAIACgBIABgBIABAAIAAAAIBFgnIgDCTg");
	this.shape_656.setTransform(155.8,110);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1,6.5,-1).s().p("AAdArIgCgBIAAAAIAAAAIg2ggIgCgCIAAAAIAAgBIgCgBIgJgFIgEgCIAAAAIgNgIIgFgDIgBAAIAvgaIANgHIAAAAIAIgEIACgBIABgBIAQgJIgCAKIgEAFIACABIgFATIAAACIAAAAIAAABIgJAnIAAAAIAVgGIABAAIANgEIABAAIARgFIAFADIgCA1IgEADg");
	this.shape_657.setTransform(73.2,201.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-2.9,9.9,-2.9).s().p("AgsArIAJgoIAAgBIABAAIAAgCIAFgSIACABIABAAIABAAIAVAEIABAAIAAAAIADAAIAAAAIAXAFIADAAIALADIAIAEIgtAXIAIAGIgQAFIgBAAIgMAEIgBAAIgWAGgAgagiIACgFIAAAAIABgDIABABIABAAIACABIgJAQg");
	this.shape_658.setTransform(78.2,199);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAxAzIgQgDIgCAAIgLgCIgLgDIgDAAIgWgEIgBAAIgDAAIAAAAIgBgBIgVgEIgBAAIgBAAIgCgBIgCAAIADgGIAJgPIAFgHIABgBIAAAAIAAgBIAKgPIAAgBIANgWIABgBIAEgEIAAgBIAAAAIAFgJIAIASIAFAMIAAAAIAEAHIAAABIAMAZIAAABIABAAIACAGIAAAAIAKAWIAEAJIABAAg");
	this.shape_659.setTransform(79.9,193.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-1.6,6.5,-1.6).s().p("AAgAnIALACIACAAIgFACgAAwANIgBAAIgCgGIATgBIgBAZIgGADgAgaADIgBAAIgBgBIgBAAIAAgBIgOgIIgBAAIgEgDIgPgIIAPgIIAegQIACAAIAEABIgOAlIAAABIAIAAIAAABIgBABIgFAGg");
	this.shape_660.setTransform(78.7,194.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-5.4,8.1,-5.4).s().p("AgFAAIALAAIgKABg");
	this.shape_661.setTransform(77.3,186.8);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgJgCIgHgBIgBAAIgXgFIgCAAIgRgDIgFgBIgDAAIgKgQIAAABIAAABIgFALIgJgCIAAAAIgCAAIgCgBIgBgCIAQgaIABgBIAAgBIAAAAIAKgPIABgBIANgVIAAgBIAEgGIAAAAIABAAIAEgJIAIASIAGALIAAABIADAHIAAAAIANAaIAAAAIAAABIACAGIABAAIABAEIAHAPIAGAMIAAAAg");
	this.shape_662.setTransform(85.7,183.3);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-2.9,9.8,-2.9).s().p("AgsArIADgRIAGgYIAAgBIAAAAIAIggIACgHIAAgBIABgEIACACIA1AgIABAAIAAABIABAAIANAIIgvAZIABAAIAEADIgxAPg");
	this.shape_663.setTransform(66.9,197.8);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.5,6.5,-0.5).s().p("AAdAwIgCAAIAAgBIAAAAIg2ggIgCgCIAAAAIAAAAIgPgJIAAAAIgSgKIgBgBIA7ggIABAAIABgBIACgCIAHgDIABgBIAQgJIgNAVIAFABIABAAIABAAIAUAEIABAAIAAAAIABAAIADABIABAAIAUAEIAAAVIgPAHIAPAJIgBAfIgJAFIgBAAIgMAHg");
	this.shape_664.setTransform(67.4,192.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.6,-2.9,11.8,-2.9).s().p("AgZAqIAAAAIAJgoIAAAAIABAAIAAgCIAAAAIADgKIAAgBIAGgbIAAgCIABgCIACAAIAAABIAdASIgUA5IgJADIgBAAIgVAHg");
	this.shape_665.setTransform(69.3,181.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAgBIAOglIAEgLIAIgZIAFgQIABgBIAEAAIAEAGIAHAJIABACIABACIAIAMIAAACIgIAUIAAABIgIgRIgGAIIAAAAIAAABIgEAFIAAABIgMAVIgBABIgKAQIAAABg");
	this.shape_666.setTransform(78.9,189.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.3,1,6.5,1).s().p("AgEAfIACABIgBABgAgMAUIAGgSIALghIABgBIAEAAIADAEIgKAcIAAABIAIAAIAAABIgBABIgPAag");
	this.shape_667.setTransform(81.4,183.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1.4,6.8,-3,-3.6).s().p("AAmAyIgCAAIgYgGIgDAAIgCAAIgTgEIgBAAIgEAAIAAAAIgBgBIgBAAIgUgEIAAAAIgCAAIgEgBIAMgUIAFgIIABgBIAAAAIAAgBIAKgPIAAAAIAIgOIABgBIAOgXIAIASIAGALIAAABIADAHIAAABIAMAZIAAABIABAAIABACIABAEIABAAIAHASIgEAMg");
	this.shape_668.setTransform(73.1,185.2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIAAgBIAEgLIAUg4IAHgWIABgBIAEAAIAMARIAFAIIAAABIAEAGIAAABIgIAVIgIgRIgOAXIgBABIgIANIAAAAIgKAQIAAABg");
	this.shape_669.setTransform(72.4,181.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.4,0.1,4.4,0.1).s().p("AgIAvIAAgBIgNgaIAAAAIgDgHIAAgBIgGgMIAIgVIAAgBIAEgJIAEgOIABgBIAAgBIAIAMIAJAPIAEAFIAAAAIAEAHIAAAAIASAaIgGARIgDgFIgEAAIgBABIgGAQIgIAAIgKABg");
	this.shape_670.setTransform(77.6,181.9);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.6,-2,2.3,-2).s().p("AgNAIIAAAAIgEgGIgBAAIgDgFIAAgSIAPgEIABAAIAbgJIAAAHIAAAbIgFAAIAAABIgNAig");
	this.shape_671.setTransform(80.2,180.2);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.3,-2.8,9.1,-2.8).s().p("AgyAjIAHgfIAAgBIABAAIAAgCIAAAAIADgKIAAgBIAGgbIAAgCIABgCIACABIAAAAIAgAUIABAAIAVANIAAAAIABAAIAAABIABAAIABABIABAAIAPAIIAAABIAIAEIgDAGIgSAGIgdAJIgBAAIgNAEIgDABIgBAAIgHACIgIgMIAAABIAAABIgFAOIgIACg");
	this.shape_672.setTransform(79.5,174.7);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.3,6.5,0.3).s().p("AA1AkIAHgBIABAAIADgBIgBASgAAhAsIgBgBIAIgCIgDAJgAgaAXIgBgBIgBgBIgBAAIAAgBIgOgIIAAgBIgBAAIgSgLIgBAAIA4gdIAAAAIACgBIABgBIAAAAIABgBIAAAAIAhgTIABABIAOAIIAAABIAAAAIgBADIAAACIgGAbIAAAAIgDAKIAAAAIAAACIgBAAIAAABIgHAfIgLgRIgFAAIAAABIgIAWg");
	this.shape_673.setTransform(71.7,174.7);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.9,6.5,-0.9).s().p("AAuA4IAAgBIgPgJIgBAAIgBgBIgBAAIAAgBIAAAAIAAAAIgWgNIAAAAIgggUIgBAAIgBgBIgBAAIAAgBIgOgIIgBgBIAAAAIgSgKIgBAAIA3geIAAgBIABAAIACgBIAAgBIABAAIAAAAIABAAIAcgQIALACIgHATIgBABIAFAAIgCAEIAAAAIAAACIgBAAIAAABIAAAEIgMATIAFAAIACAAIAAABIgEAPIAAAAIAAABIAWgHIABAAIAMgDIABAAIABAAIAAAAIAGAAIgBAyIAAgBIgFAAIgBABIgDAKg");
	this.shape_674.setTransform(79.2,169.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.lf(["#3F8732","#000000"],[0.067,1],-1.7,-6.5,12.7,-6.5).s().p("AgQAIIAAAAIAAgBIADgOIABAAIABAAIAAAAIAEABIABAAIAVAFIADAAIgNACIgBAAIgOAFIgGACg");
	this.shape_675.setTransform(79.8,163.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,1.5,9.6,1.5).s().p("AgfANIgBgBIAAAAIAbgNIgJAZgAAMgLIAKgGIABAAIACgBIAAAAIABAAIAAgBIABAAIAGgEIAAADIAAABIgDAJIAAABIAAABIAAABIgBAAIAAABIgDAOg");
	this.shape_676.setTransform(79.9,152.5);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,1.2,6.5,1.2).s().p("AADAzIgBgBIgbgRIgCgBIAAAAIgCgBIAAAAIAAgBIgOgIIgBgBIAAAAIgSgLIgBgBIAAAAIA3gdIABAAIACgBIAAAAIABAAIAAgBIABAAIAogXIAKgGIgBAFIAAAAIAAABIAAABIgBABIAAAAIgJAoIAAABIAAABIAAAAIAWgHIAAAAIAGgCIAAAYIgCAGIgBAAIAAAAIgBAAIAAABIgCABIgBAAIg1Aeg");
	this.shape_677.setTransform(86.9,144.2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.9,1.2,5,1.2).s().p("AgHA1IgBgBIAAAAIgBgBIAAAAIgCgBIgBAAIgKgGIgBgBIgBgBIgSgKIAAgBIgBAAIAAgBIgBAAIAAAAIgGgDIAGgCIAMADIgBgGIAAAAIAAgBIAGgBIABAAIAagJIABAAIAAAAIATgGIAAAAIAAAAIABAAIAAAAIABABIABAAIABg0IAagOIgCBjIgZAOIgBAAIgBABIAAAAIgCABIAAAAIgMAHg");
	this.shape_678.setTransform(145.1,99.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-4.8,8.9,-4.8).s().p("Ag2AZIABgBIAAgBIADgQIABgDIAnAIIgGABIgCABIgBAAIgFACIAAAAIgCAAIgFACIgBAAIAAAAIgVAHgAAAAJIgKgfIAmgCIAIAFIACABIAAAAIACACIACAAIAAABIANAIIgBAAIAAAAIAAAAIgTAGIAAAAIgBAAIgbAIIgBAAIgFABIgBABg");
	this.shape_679.setTransform(141.7,100.5);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.1,6.7,-3.2,-3.7).s().p("AAbAxIgmgHIgYgFIgBgEIgDgHIA6gDIgcg0IAOgWIAGASIAQAvIALAgIACAGg");
	this.shape_680.setTransform(137.9,96.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.5,6.7,-3.6,-3.7).s().p("AAfAyIgLgCIgNgCIgMgCIgUgFIgKgfIA4gDIADAJIADAHIACAIIADAJIAFAOgAgEgqIAGgJIAGASIALAhg");
	this.shape_681.setTransform(131.5,98);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.8,-2.5,9.6,-2.5).s().p("AgFAAIAIgDIADAAIAAgBIgDAFIgFADg");
	this.shape_682.setTransform(136,91.3);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.1,0.1,3.7,0.1).s().p("AgYAnIACAAIgEgGIgKghIALgWIADgGIAJgTIABACIAGAMIADAGIACAEIAJAQIAdA0Ig5ADg");
	this.shape_683.setTransform(136.1,94.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.9,0,6,0).s().p("AA4BJIgBgBIAAAAIgNgIIAAAAIgCgBIgCgBIAAAAIgCgCIgIgEIAUgBIgwhWIABAAIABAAIAAgBIABAAIAAAAIABABIACABIAAgMIACgBIA1geIgDBdIgBA2gAg8gGIAHgEIgEAIgAgVgYIAEgBIAAAAIABgBIAIgCIgHAPg");
	this.shape_684.setTransform(141.7,92.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.5,1.4,5.3,1.4).s().p("AgUANIAEgIIACgFIAOgcIAEAAIALAUIAGAKIgLAYIgGgSIgPAVg");
	this.shape_685.setTransform(138,90.9);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.1,0.1,3.7,0.1).s().p("AglAAIAMgWIAHgQIAEgIIABgBIAAACIADAFIAwBVIgUABIgnACg");
	this.shape_686.setTransform(142.8,93.4);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.7,6.7,-2.4,-3.7).s().p("AAjAxIgpgIIgpgIIAVgdIAAAAIAog3IAGASIAAABIAQAsIAAACIAKAfIACAHg");
	this.shape_687.setTransform(124.3,97.4);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.9,1.6,5.9,1.6).s().p("AgOAPIALgXIACgDIAIgVIABACIAHAMIgYAzg");
	this.shape_688.setTransform(122.7,92.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.1,0.1,3.7,0.1).s().p("AgVAuIgPgtIAAgBIALgWIALgZIAOAaIAKATIAYApIADAGIgBAAIg4ADg");
	this.shape_689.setTransform(130,94);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.9,1.6,4.9,1.6).s().p("AAAAJIgGAJIgKgSIAMgbIAEAAIABACIAOAZIADAEIgMAXg");
	this.shape_690.setTransform(131.7,91.9);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.3,-0.2,6.5,-0.2).s().p("AggAuIAJgTIAYgzIAKgVIAEAAIAPAZIADAGIgLAXIgHgRIgnA2g");
	this.shape_691.setTransform(124.1,93.1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.3,3.7,3.6,3.7).s().p("AAcAXIABAAIAAAAIAEgBIgCAFgAgRgCIgMAXIgDgGIAAgNIAAAAIA0gcIgBABIAAACIgCAJIAAABIgBAAIAAACIAAAAIAAABIgCAIIgBgBIgEAAIgMAZg");
	this.shape_692.setTransform(130.4,89.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.4,-6.5,12,-6.5).s().p("AgYAIIABgBIAAgBIACgBIABAAIARgFIACAAIABAAIAEgBIAAAAIASgGIADABIgEABIgKADIgBAAIgEACIgBAAIgFABIgBAAIAAAAIgWAHg");
	this.shape_693.setTransform(130.4,84.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-2.6,8.5,-2.6).s().p("AgkAoIgOgaIACgIIAAgBIAAAAIAAgCIABAAIAAgBIACgIIAAgCIABgBIADgPIAAgBIAAgBIADgJIAAgCIABgCIAAAAIAAAAIABABIABAAIASALIABABIALAGIABABIABABIAAAAIABAAIAAAAIAPAJIAAABIAFADIABAAIABABIAAAAIABAAIABABIALAFIABABIABAAIABACIACAAIAAABIAGADIgEAIIgJADIAAAAIgBAAIgEABIgLgUIgEAAIgNAdIgBABIgCAAIgJADIgHgNIgBgBIgJATIgEABIAAAAgAAtAKIAGAEIAAAAIgBAAIAAAAIgCABg");
	this.shape_694.setTransform(136.9,87.8);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,2.4,6.5,2.4).s().p("AA/gwIACgBIgCBiIgCABgAgsAhIAAAAIgBAAIgIgGIAAAAIgKgFIAAgBIgBAAIAcgPIADgBIACABIAAAAIABAAIAAABIgBACIAAACIgDAJIAAABIAAABIgDAOg");
	this.shape_695.setTransform(136.2,83.2);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AA9BJIgBgBIgBAAIgGgEIgBgBIAAABIgGgEIAAAAIgCgBIgBgBIgBAAIgBgCIgLgGIgBAAIgBgBIAAAAIgBgBIgBAAIgFgDIAAAAIgQgJIAAAAIgBgBIAAAAIgBgBIgBAAIgKgHIgBAAIgSgLIgBgBIgBAAIAAgBIgBAAIAAAAIgCgBIgGgEIgFgDIgBgBIAAAAIgBAAIgIgFIAAgBIgKgEIAAgBIgBAAIAYgNIAggRIAAAAIACgBIABgBIABAAIAAAAIAEgCIAggTIAhgSIgBAlIgCBiIAAAMg");
	this.shape_696.setTransform(136.1,82);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.lf(["#3F8732","#000000"],[0.067,1],-4,-2.9,10.4,-2.9).s().p("AgnArIABAAIAAgBIAJgnIAAgBIAAAAIAAgCIABAAIAAgBIACgJIAAgCIAEgQIAAAAIAAgBIADgJIAAgCIABgCIAAAAIAAAAIABABIABAAIARALIABAAIALAHIABAAIABABIAAAAIABABIAAAAIAQAJIAAAAIACABIgYANIAAAAIABAAIAJAFIABABIAIAFIAAAAIABAAIABABIAEADIAFADIgSAFIgBAAIgFACIgBABIgCAAIgQAFIgBAAIgCAAIgCABIgBAAIgFACIgCABIAAAAIgBAAIgVAGg");
	this.shape_697.setTransform(128.6,81.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.lf(["#3F8732","#000000"],[0.067,1],-11.2,1.8,1.7,1.8).s().p("AgOgkIABgBIAdgBIgHgMIAIgEIgBBbIggASg");
	this.shape_698.setTransform(137.7,72.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.7,6.5,0.7).s().p("AAVA4IAAAAIgQgJIAAAAIgBgBIAAAAIgBgBIgBAAIgKgHIgBAAIgSgLIgBgBIgBAAIAAgBIgBAAIAAAAIgNgIIgBgBIAAAAIgBAAIgIgFIAAgBIgKgFIAAgBIgBAAIAKgEIAQgJIAegQIAAAAIACgBIABgBIABAAIAAAAIABgBIABAAIAzAKIgLghIAJgFIASAAIAAAAIgCBcIgEACIgBAAIgBAAIAAABIgCABIgBAAIgfARg");
	this.shape_699.setTransform(129.7,74.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.7,-4.3,10.7,-4.3).s().p("AgkAdIABAAIAAgBIADgMIADgQIArAJIgEgPIAbAGIgBAAIAAAAIgCAAIAAAAIgCABIgBAAIgdARIgCABIgBAAIgEABIgBAAIgHACIgBABIAAAAIgLADIgKADgAACgcIAFAAIgEAFg");
	this.shape_700.setTransform(125.7,71.9);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.7,6.7,-2.4,-3.7).s().p("AgDAqIgBAAIgbgGIgRgDIALgOIAEgFIAHgKIABAAIAng3IAGASIAQAvIACAEIAKAig");
	this.shape_701.setTransform(129.8,67.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4.5,0.1,5.3,0.1).s().p("AgVAAIAMgWIADgHIAHgSIAGAKIAPAcIgCAEIgUAqIAHAAIAAABIgHAJIgFABg");
	this.shape_702.setTransform(126.4,64.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.3,-0.2,6.5,-0.2).s().p("AggAuIAVgrIAEgJIASgnIAFAAIARAfIgMAXIgFgRIgoA2g");
	this.shape_703.setTransform(129.7,63.4);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.1,0.1,3.7,0.1).s().p("AglAAIAMgWIAFgLIAGgOIAtBRIAHALIgeACIgCAAIgRAAIgKABg");
	this.shape_704.setTransform(135.6,64.3);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.7,6.7,-2.4,-3.7).s().p("AAlAxIgYgFIgtgIIgFgBIgLgCIAJgLIAngCIgQgdIAegqIAGASIAGASIgJATIAIAAIAAAAIgWAdIAqAIIADALg");
	this.shape_705.setTransform(119.1,97.4);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.1,-0.9,3.8,-0.9).s().p("AAUA3IgBAAIgBgBIgCgBIAAAAIgBgBIgNgHIAAgBIgBAAIgBgBIAAAAIgNgIIAAgSIAFABIAsAIIAAAfIgHAEgAgjAEIATgBIgIAMIAKACIgPAIgAgJg3IAJgFIgDAOg");
	this.shape_706.setTransform(116.8,99.2);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.6,0.1,3.2,0.1).s().p("AgfgCIAAgUIAMgZIADAGIAQAdIAFAKIAEAHIAGALIARAdIgnACIgTABg");
	this.shape_707.setTransform(115.9,94.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.7,-2,10.7,-2).s().p("AgdAaIADgOIAAAAIAAgBIAAgBIABgBIAAgBIACgIIAAgCIAEgRIAAgBIADgJIAAgCIABgBIAAgBIAAABIABAAIABABIAPAJIgbA4gAAZgIIAFADIgBADg");
	this.shape_708.setTransform(119.4,91.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.9,0.4,5.9,0.4).s().p("AgaAdIAag4IAFgMIAFAAIAOAZIADAHIgLAWIgGgRIgeApg");
	this.shape_709.setTransform(119.5,92.5);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.9,0.9,5,0.9).s().p("AgDA0IgNgZIgFAAIgFALIgQgJIAAgBIgBAAIgBgBIAAAAIAAAAIgEgCIARgGIABAAIAAAAIATgGIABAAIAAgBIABAAIAAAAIABABIABABIABgvIAhgSIAEgBIACAAIABgBIADgBIAAACIgCAJIAAABIgBAAIAAACIAAAAIAAABIgJAnIAAABIgBAAIABAAIAVgGIABAAIAAAAIACgBIgBAtIAAANIgOgZIgFAAIgKAVIgHgMIgBgCIgJAVg");
	this.shape_710.setTransform(122.3,85.8);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.7,6.7,-2.4,-3.7).s().p("AAaAvIgBAAIgEAAIgDgBIhCgNIAWgdIABgBIAng1IARAPIAFAxIAGAUIAGARg");
	this.shape_711.setTransform(109.6,98.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0.2,6.5,0.2).s().p("AAGAqIAAAAIgBAAIAAgBIgBAAIgBgBIAAAAIgKgHIgBAAIAAgBIgSgKIgBAAIgBgBIgBAAIAAAAIAAgBIgNgIIgBAAIAAgBIgBAAIgIgFIAAgBIgKgFIAAAAIgBAAIA4geIAAAAIACgBIABAAIAAgBIABAAIAagPIgLAZIAIAAIgBABIgVAcIBCANIAAACIgdAQIgBAAIgBABIAAAAIgCABIAAAAIgPAIg");
	this.shape_712.setTransform(105,100.8);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.3,-0.2,6.5,-0.2).s().p("AggAuIAMgZIAehBIABgBIAFAAIADAHIAOAZIAAATIgRgOIgoA2g");
	this.shape_713.setTransform(109.4,94);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.6,-2.8,8.8,-2.8).s().p("AgvAjIgFAAIgBABIAIggIAAAAIAAgBIAAgBIAAgBIAAgBIADgIIAAgCIAEgRIAAgBIACgJIAAgBIABgCIAAgBIABABIABAAIAAABIASAKIABAAIABABIALAHIABAAIABABIAAAAIAAAAIAAAAIAQAJIAAABIAEADIACAAIABABIAAAAIABABIABAAIAKAFIACACIAAAAIACABIACABIAAAAIANAIIgBAAIAAABIgBAAIgSAFIAAAAIgBAAIgRAGIgKADIgBAAIgFACIAAAAIgCAAIgFACIgMADIgBAAIgFACIAAAAIgHACIgBABIAAAAIgLADg");
	this.shape_714.setTransform(115.8,85.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.1,6.5,-0.1).s().p("AA9BIIgBgBIgBAAIgNgIIAAgBIgCAAIgBgCIgBAAIgBgBIgLgGIgBgBIgBAAIAAAAIgBgBIgBAAIgFgDIAAgBIgQgJIAAAAIgBAAIAAAAIgBgBIgBgBIgKgGIgBgBIAAAAIgSgLIgBAAIgBgBIAAAAIgBAAIAAgBIgNgIIgBAAIAAgBIgBAAIgIgFIAAAAIgKgFIAAAAIgBAAIA4gfIAAAAIACgBIABAAIABgBIAAAAIA/gjIAGAEIgBARIgDAQIAAACIgDAJIAAABIAAAAIAAACIgBAAIAAABIgJAmIAAABIAAABIAAAAIAPgFIAAAJIgBAvg");
	this.shape_715.setTransform(115.3,80);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.3,-2.9,11.1,-2.9).s().p("AggAsIAAgBIAAgBIAJgoIAAAAIABgBIAAgBIAAAAIAAAAIADgJIAAgCIADgQIABgBIAAgBIACgJIAAgCIABgCIAAgBIABABIABAAIAAABIgDAMIAAABIAAABIAAAAIALgEIAFgCIAFADIAAAAIgIAFIAAAAIAAABIAJAFIABABIAIAEIAAAAIABABIABAAIANAIIAAABIAAAAIAAAAIgBADIAAABIgCAJIgBABIAAAAIgDAQIgEABIAAABIgCAAIgEABIgNAEIgBAAIgEACIAAAAIgHACIgBAAIAAAAIgHACIgPAFg");
	this.shape_716.setTransform(123.4,77.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.7,6.7,-2.4,-3.7).s().p("AAEArIgmgIIgOgCIAXgdIAng3IAGASIAQAvIACAFIgLAOIARADIAEAQg");
	this.shape_717.setTransform(122.3,67.7);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.lf(["#3F8732","#000000"],[0.067,1],-3.6,-1.4,9.3,-1.4).s().p("AATARIgFgDIAFgBIAAAAIABAAIAHgCIABAAIAEgCIABAAIADgBIgRAJgAAAAFIAAAAIAAgBIgBAAIAAAAIgDgBIgFgEIgGgDIgBAAIAAAAIgIgFIgBgBIgJgFIAAAAIgBAAIABgBIAmAHIgDAPg");
	this.shape_718.setTransform(122.3,72.9);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.3,-0.2,6.5,-0.2).s().p("AggAuIATgnIABgBIAXgzIAFAAIAPAcIACADIgLAXIgGgRIgoA2g");
	this.shape_719.setTransform(122.1,63.4);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,3.8,6.5,3.8).s().p("Ag/AjIgBAAIACgBIgBACgAABAAIBAgjIgBAnIgFAKIgRgeIgFAAIgSAmIgDAFgAgSAKIAGgDIgDAHg");
	this.shape_720.setTransform(127,60.5);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-0.2,6.5,-0.2).s().p("AA7BHIgfgTIgBgBIAAAAIgBAAIg1ghIgBAAIgBgBIgBAAIAAgBIgOgJIgBAAIgMgHIgHgEIAygbIAGgDIAAAAIAEgCIAAAAIANgHIApgYIADgBIAMgDIAAAHIgBAqIgBAWIgBA0IAAAUg");
	this.shape_721.setTransform(192.2,202);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.6,-0.8,3.3,-0.8).s().p("AgTABIANgDIAAAAIAXgHIAEgCIgpAXg");
	this.shape_722.setTransform(195.1,196.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.4,-4.3,3.5,-4.3).s().p("AgBALIgBgBIAAAAIgBAAIgdgQIADgBIAFgCIAAAAIAXgHIgFAVIAAAAIgBABIAVgGIABAAIANgEIAAAAIAFgBIgBAKIgNAHIgBAAIgDACIgBAAIgFADg");
	this.shape_723.setTransform(189.8,197.1);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.5,-3.8,9.9,-3.8).s().p("AgrAjIAHghIACgHIAAgBIAAAAIAAgCIADgIIAEgBIABgBIADABIAAgJIADgBIABAAIANgEIAAAAIAGgCIADgBIAdARIABAAIAAAAIABABIALAHIgxAaIAGAEIgXAHIgBAAIgPAFIgHACg");
	this.shape_724.setTransform(186.2,199.9);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2ArIAAgBIAGgWIADgSIAAAAIABAAIAAgCIAAAAIABgFIAIghIAAgCIABgCIACAAIABABIA2AhIAAAAIABABIAfARIgBABIgNADIgMAEIgGACIgXAIIgBAAIgMADIgFACIgBAAIgMAEIgBAAIgWAHg");
	this.shape_725.setTransform(194.6,193.4);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,0,6.5,0).s().p("AA9BJIgCgBIgfgTIgBAAIAAgBIg2ggIgBgBIgBgBIgBAAIAAAAIgOgJIgBAAIgTgLIA4geIAAAAIACgBIABgBIABAAIAAAAIBFgnIgDCTg");
	this.shape_726.setTransform(194.1,187.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,0.9,5.7,0.9).s().p("AAVA+IgBAAIAAgBIg2ggIgBgBIgCgBIAAAAIAAAAIgOgJIgBAAIgFgDIAhgJIABgBIABABIABABIAAgbIAGgDIAAAAIADgCIABAAIAogXIAdgQIgBAoIgCABIAAAAIg3AdIASAMIABAAIAOAJIAAAAIAAAAIgBADIAAACIgIAhg");
	this.shape_727.setTransform(187.8,186.3);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.1,-2.9,10.3,-2.9).s().p("AgoArIAAgBIABgFIAIgjIAAAAIABAAIAAgCIAAAAIAJgmIAAgCIABgCIACAAIAAABIA2AhIAAAAIACABIADACIgBAFIAAAAIAAACIgBAAIAAAAIgEASIgWAIIgBAAIgEABIgIACIgEACIgBAAIgNAEIAAAAIgDABIgLADIgIADg");
	this.shape_728.setTransform(186.1,193.4);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1AqIAAAAIACgNIADgMIAEgOIAAgBIAAgBIAAgBIABAAIAJgmIAAgBIAAgEIACACIAAAAIA2AgIAAABIACAAIAQAJIgBAGIAAAAIAAABIAIgCIAIAEIgBABIgFACIgEABIgtANIAAAAIgSAGIAAAAIgOAEIAAAAIgGACIgMADIgBAAIgDABg");
	this.shape_729.setTransform(178.1,196.9);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2.2,6.5,-2.2).s().p("AA8AyIgIgFIALgDIgBAJgAAdAfIgCAAIAAgBIg2ggIAAAAIgCgBIAAAAIAAAAIgPgJIAAAAIgTgMIAjgTIgDAOIAAAAIgBABIAWgGIABAAIALgEIABAAIASgGIAAAAIAXgGIAFACIAAAAIAPAJIAAABIAAAAIgBACIAAACIgJAmIAAAAIAAACIgBAAIAAAAIgIAjg");
	this.shape_730.setTransform(177.6,193);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.3,-2.9,9.1,-2.9).s().p("AgzArIAAgBIABgFIAIgiIAAgBIAAgBIAAgBIAIgdIAAgCIACgHIAAgBIABgEIABACIAAAAIA2AgIAAABIACAAIAbAQIgBAEIgbAIIgYAHIAAAAIgRAGIAAAAIgOAEIAAAAIgOAEIgIACg");
	this.shape_731.setTransform(159.8,197.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-2.9,9.8,-2.9).s().p("AgtAqIAAAAIAGgVIABgEIACgOIAAgBIABgBIAAgBIAEgPIAFgXIAAgBIABgEIACACIABAAIA2AgIAAABIABAAIANAIIgBAAIAAABIAAABIAAABIgDAOIgCABIggAJIgBAAIgQAGIgBAAIgMAEIgBAAIgPAFIgHABg");
	this.shape_732.setTransform(169,196.9);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIABgDIABgFIAHgfIAAgBIABAAIAAgCIAAAAIABgCIAHgdIABgHIAAgCIABgCIACABIABAAIAfAUIABAAIADACIgBAGIAAABIgBABIALgDIAKAGIAAAAIABABIAMAGIgCAFIAAAAIAAABIAJgCIAMAIIgBAAIgFACIgxAPIgBAAIgRAFIgBAAIgIADIgEABIgBAAIgWAGg");
	this.shape_733.setTransform(158.7,189.6);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.8,-2.2,5.1,-2.2).s().p("AAPAfIgCAAIAAgBIg2gfIAAgBIgCgBIAAAAIAAAAIgCgBIgEgCIAIgDIABAAIARgFIABAAIAxgPIANAIIABAAIAJAGIgBAeIgEAQIAAABIAAABIAAAAIgDAPgAAkgrIALgEIgLAHg");
	this.shape_734.setTransform(160.9,193.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-1.6,6.6,-1.6).s().p("AA+A6IgBgBIgMgIIADgBIABAAIAJgDIAAAAIABgBIAAAEIAAAKgAAdAmIgBgBIAAAAIgKgGIALgDIABAAIANgFIAAAAIADgBIgEAWgAAHAYIgBAAIgggUIgBAAIgBgBIAAAAIAAgBIgPgHIAAgBIgBAAIgSgMIgBAAIAVgLIAjgTIAAAAIADgBIARgGIAHgCIAHAFIAAAAIABAAIgBADIAAABIgJAnIgBAAIAAACIAAABIAAAAIgIAgg");
	this.shape_735.setTransform(158.1,185);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.6,-2.9,11.8,-2.9).s().p("AgYArIAAgBIABgGIAIgiIAAAAIAAgBIAAgBIABAAIAJgmIAAgCIABgDIABABIAAABIAdARIgBACIAAACIgJAlIAAABIAAABIgBAAIAAABIgCAMIgDABIgBAAIgMAEIAAAAIgLADIgLAEg");
	this.shape_736.setTransform(161.5,184);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIACgGIAFgWIACgLIAAgBIABAAIAAgCIAAAAIAJgmIAAgBIABgCIAAgBIACABIABAAIAfAUIABAAIAWAMIAAABIABAAIAfATIgBAAIg2AQIgBAAIgRAGIgBAAIgLADIgBABIgBAAIgIADIgCAAIgDABIgJACg");
	this.shape_737.setTransform(167.6,185.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.6,-2.4,4.3,-2.4).s().p("AAnAxIgBgBIgBAAIgNgIIAAAAIgRgKIgCgBIAAAAIAAgBIgVgMIAAAAIgYgPIABgZIAhAGIABABIgBgBIgEgJIAVAEIABAAIAEABIAAAAIAOACIgGALIAEABIABAAIAHACIAFABIAAARIgBANIAAAMIAAAKIAAADgAgSgtIAKgEIABABIAEAAIgJAPg");
	this.shape_738.setTransform(158.1,173.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.7,-0.3,7.2,-0.3).s().p("AgUAQIAAAAIgBgBIgBAAIAAgBIgHgEIAIgDIAIgCIABAAIAAAAIgMAGIABAAIASAMIABAAIAAAAIANAJIAAAAIAAAAIAAACgAgKgGIASgGIABAAIANgEIABAAIAHgCIgoAWgAgJgfIADgCIgEAPg");
	this.shape_739.setTransform(163.2,178.2);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.6,0.4,6.3,0.4).s().p("AAaA5IgBAAIAAgBIg2ggIgBAAIgBgCIgBAAIAAAAIgFgDIgJgGIgBAAIgNgIIAFgCIABAAIABABIABAAIABgJIALgGIABAAIARgGIABAAIA2gRIABAAIABABIABAAIABgVIALgHIACAAIABAAIAKgDIgEATIgBABIAAABIAAAAIAAABIgGAaIgjARIATAMIAAAAIAPAJIAAAAIAAAAIgBAEIAAABIgJAmg");
	this.shape_740.setTransform(169.7,190.3);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag2AqIAAAAIAEgOIAFgZIAAgBIABAAIAAgCIAAAAIAFgTIAEgTIAAgBIABgDIACABIABAAIAQAKIgGAcIAAAAIgBABIAWgHIAAAAIAMgDIABAAIACgBIAIAEIAAABIABAAIAfATIgBAAIggAKIgWAGIgBAAIgRAGIgBAAIgMAEIgBAAIgWAGg");
	this.shape_741.setTransform(179.8,185.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.6,-3.4,11.8,-3.4).s().p("AgZAlIAAAAIAJgmIAAgBIABAAIAAgCIAAgBIAHgbIAJgDIABAAIAIgCIAIADIgaAPIABAAIARALIABAAIAAABIAPAHIAAABIAAAAIgBADIAAACIgFATIgKADIgBAAIgBAAIgKAEIgBAAIgWAGg");
	this.shape_742.setTransform(173.8,181.3);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.3,-1.3,6.6,-1.3).s().p("AA+A8IgBgBIgggTIgBgBIAAAAIgVgNIgBAAIgggUIgBAAIgBgBIAAAAIAAgBIgPgHIAAgBIgBAAIgSgLIgBAAIAMgHIABABIACABIAAgDIAogWIABgBIAAAAIAIgDIABAAIAigKIAHADIgIAiIAAAAIgBABIAWgGIAAAAIACgBIgGAbIAAABIAAAAIgBABIAAAAIgJAoIAAAAIAAABIAVgGIAAADIAAAVg");
	this.shape_743.setTransform(167,180.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.4,-2,6.5,-2).s().p("AA+A1IgCgBIgfgTIgBAAIAAgBIgIgFIAQgEIAAAAIAcgJIgBALIAAAcgAgaAAIgBAAIgBgBIgBAAIAAgBIgOgIIAAgBIgBAAIgSgLIgBAAIAbgPIAagNIAGgDIAGAFIAAABIABAAIgBACIAAACIgIAnIgBAAIAAACIAAAAIAAAAIgDALg");
	this.shape_744.setTransform(179.3,181.6);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-2.9,8.9,-2.9).s().p("Ag1AqIAAAAIAGgcIADgMIAAAAIAAAAIAAgCIABAAIAJgmIAAgCIABgCIABAAIAAABIAhAUIAAAAIAVANIAAAAIACABIAfASIgBAAIgbAIIgbAJIAAAAIgQAEIgCABIgBAAIgNAEIAAAAIgWAHg");
	this.shape_745.setTransform(183,181.1);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.7,-3.5,4.2,-3.5).s().p("AAmAmIgBgBIgfgTIgBgBIgBAAIAAAAIgUgNIgBAAIgXgNIAHgBIA6AKIABABIAAgBIgRgkIAggBIgBAkIgBAng");
	this.shape_746.setTransform(177.7,171.8);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.3,8.9,-3.3).s().p("Ag1AnIAAgBIAIghIABgFIANgDIABgBIACABIABABIABglIAEAAIAWAOIABAAIAVANIAAABIABAAIABAAIAfASIgBABIgZAHIgHACIgWAHIAAAAIgKADIgIACIgBAAIgLAEIgCABIAAAAIgWAGg");
	this.shape_747.setTransform(175.9,174.8);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.2,6.7,-4.2,-3.7).s().p("AAoAzIg6gLIACAAIgYgjIABgBIAAgBIALgPIAAgBIAXglIAIARIAVAtIAAACIARAlIAAAAg");
	this.shape_748.setTransform(176.2,166.7);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.6,-4.5,8.8,-4.5).s().p("Ag1AQIAEgQIADgMIAAAAIABgBIAAAAIADAAIABABIAEAAIABAAIBAAMIABAAIgBAAIgJgVIgCgGIAEADIAAAAIAAAAIACABIARALIAAAAIAOAIIgBABIgOADIgHABIghALIgBAAIgJADIAAAAIgBABIgHABIgBAAIgNAFIgBAAIgTAFg");
	this.shape_749.setTransform(167.5,174.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,4.5,-3.4,-5.9).s().p("AAxAdIhBgMIgBAAIgDgBIgBAAIgEgBIgCAAIgKgCIgGgBIgBAAIgEgBIAGgLIAyAJIABABIAAgBIgQgkIAegBIAJATIABACIACAFIAFAJIAJAWIABAAg");
	this.shape_750.setTransform(165.4,171.8);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],0.9,4.7,-3.5,-5.7).s().p("AAvAfIgzgJIgOgDIAAAAIgEAAIAAgBIgXgEIgCgFIAJgOIABAAIBAALIABAAIAAAAIgRgkIAIgBIAMAZIAAABIARAkIAAABg");
	this.shape_751.setTransform(161.6,169.6);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAxAzIhAgMIgBAAIgFAAIAAgBIgKgCIgHgBIgFgBIgBAAIgFgBIAFgHIAIgNIAEgIIABgBIAAAAIAAgBIAKgPIABAAIAXgmIAIASIAVAtIAAABIARAlIAAAAg");
	this.shape_752.setTransform(159.4,165.1);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.5,-3,2.4,-3).s().p("AAVArIgCgBIgOgIIAAgBIgQgKIgBgBIAAAAIAAAAIgFgDIgCgFIgCgFIAsgCIgBAkgAALgdIACAAIAAAAIgBABgAAEgoIAAAAIAGgCIgDAHg");
	this.shape_753.setTransform(170.9,170.1);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.7,0.1,3.1,0.1).s().p("AgWAuIgJgTIAcgBIgggvIAAgBIAIgXIABgBIAAgBIAVAgIABAAIAAABIAAAAIAIANIADAEIAEAGIABABIAYAjIgCAAIgHABIgEAAIgsACg");
	this.shape_754.setTransform(170.9,166.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.lf(["#3F8732","#000000"],[0.067,1],-12.3,-3.9,0.6,-3.9).s().p("AADASIAAAAIAAAAIAAAAgAgDgRIAHAAIAAARg");
	this.shape_755.setTransform(170.1,162.9);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-3.2,8.5,-3.2).s().p("AgEAZIgJgNIAAgBIAJACIABAAIgBAAIgIgTIAAgSIAJAAIARALIgNAkIgFACg");
	this.shape_756.setTransform(171.8,163.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-5.3,2.7,4.5,2.7).s().p("AAGAJIAAAAIgEgGIAAAAIgNgSIADAAIAUAeIgBABg");
	this.shape_757.setTransform(166.2,162.4);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.8,0.1,3,0.1).s().p("AgXAuIgLgYIAxgCIgkg2IAAAAIgEgGIgBAAIgCgEIABgCIAAgBIAIANIANATIABAAIAEAHIAAAAIAEAHIAgAuIgcABIgdACg");
	this.shape_758.setTransform(167,164.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-0.1,6.7,-4.5,-3.7).s().p("AAlAzIgJgBIAAAAIgBAAIgVghIAAABIAAACIgHAWIgVgfIgDAAIgIgMIAAABIgBAAIgDgDIADgHIAPAAIgIgLIATgdIAIASIAUAtIABABIAIASIAIATIABAAg");
	this.shape_759.setTransform(167.6,159.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAuIgVguIAIgVIAAgBIABgDIACgEIAFgQIABgBIAAgBIALASIAEAGIAEAEIACAEIAAAAIAEAHIAAAAIAlA1IgyACIgIABg");
	this.shape_760.setTransform(164.5,161.7);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgWAWIgFAAIgBAAIAAACIgGgNIAAgBIgFgJIAIgVIAAgCIAIgWIABgCIAAgBIAPAXIAGAKIAAAAIAEAGIAAAAIAUAdIAJAOIAIALIgPAAIgHABIgMgSIAAABIgBABIgFAQIgFABg");
	this.shape_761.setTransform(161.6,154);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.lf(["#3F8732","#000000"],[0.067,1],-2.8,-1.6,11.6,-1.6).s().p("AgNAbIgDAAIAGgBIgBAEgAgHgdIACABIAAABIACAAIAUANIgFAOg");
	this.shape_762.setTransform(162.6,156.1);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.5,-3.2,8.9,-3.2).s().p("Ag1AnIAAAAIAAgBIAEgCIgBADIgEABgAgYgEIABgjIAVANIACAAIAAABIABABIAAAAIAUAMIABAAIAAABIABAAIAAAAIABAAIACABIAAAAIABABIANAIIABABIABAAIANAHIgBABIglALIgPgWIAAABIgBABIgHAWg");
	this.shape_763.setTransform(159.1,149.6);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-4,0.1,5.8,0.1).s().p("AgYAkIAIAAIgEAGgAgTALIAFgOIAOgmIAAAAIAEAAIAVAfIAAABIgIAWIgJgRIgRAdg");
	this.shape_764.setTransform(165.8,155);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.6,-0.2,6.2,-0.2).s().p("AgXAuIgEgFIADgIIANgkIAEgLIASgBIgMgSIADgMIABAAIAEAAIAVAgIAAAAIgIAWIgIgRIgXAlIAAABIgKAQg");
	this.shape_765.setTransform(174.4,162.5);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAuIgVguIAIgVIAAgBIAIgXIAAgBIAAgBIAOAUIARAbIALAQIAIALIANASIgTABIgVABIgJAAIgJABg");
	this.shape_766.setTransform(171.5,156.3);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.9,-1.3,3,-1.3).s().p("AgcAaIAVgBIgEAMgAgUgVIAJgDIABAAIAQgFIACAAIAVgHIAAALIglAVg");
	this.shape_767.setTransform(174.4,158.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.9,1.7,6,1.7).s().p("AgSAuIAKgEIAAAAIAXgGIgZANgAg7AUIAHgCIgBAFgAAzgxIAJAAIAAAgIgGADIAAAAIgBAAIAAAAIgBABIgBABg");
	this.shape_768.setTransform(176.7,172.9);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.8,0,5.1,0).s().p("AAvBJIgBgBIgfgTIgCAAIAAgBIgUgMIgBAAIghgUIAAgBIgCgBIAAAAIAAAAIgHgFIAZgHIABgBIABABIABABIABgnIACgBIAAgBIABAAIAAAAIABAAIAFgDIAUgLIArgZIgCBiIgBAxg");
	this.shape_769.setTransform(183.9,174.9);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAuIgVguIAIgVIAAgBIAIgXIABgBIAAgBIAsBBIAJANIAJAOIgCAAIgQABIgIAAIggACg");
	this.shape_770.setTransform(180.5,163.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.lf(["#3F8732","#000000"],[0.067,1],-10.1,-3.6,4.3,-3.6).s().p("AgHgGIAAAAIACACIABAAIAAABIANAHIgBAAIgHACg");
	this.shape_771.setTransform(183.5,165.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,0,5.7,0).s().p("AA1BJIgBgBIAAAAIgOgIIAAAAIgBgBIgCgBIAAAAIgshBIAAABIgBABIgIAVIgVgeIgFAAIAAAAIgEAKIgIgKIAngVIABgBIAAAAIACgBIABgBIABAAIAAAAIABAAIAcgRIABAAIAAAAIAngWIgDCTg");
	this.shape_772.setTransform(179.2,159);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.lf(["#3F8732","#000000"],[0.067,1],96.7,-20.1,-104,-3.7).s().p("ApOOdIABgwIAMAHIgKApgArJOFIACgBIAAAAIgCAEgAjqNyIgCAKIgCAFIg9AFgAiDNvIBGgVIgGAYIgCABIgZACIgSACIgUABgAAKNrIACAAIAagIIAAAAIADABIAAgKIAegJIgDALIAAAAIgDAMIgJABIgJAAIgsAEgAlCNSIAEgBIgEATgACrNbIAAgMIAegJIgEAXIgaACgAEqNFIAQAJIgCAFIgOACgApMM6IA6gRIAAACIAAABIgCAIIg4AegAplNCIAYgIIgYAPgArHM8IAAgCIgBAAIgCgBIAAgLIADABIABAAIADACIAAABIgCANgAJbMpIAEABIABAAIADAAIADAAIAKADIgBAIIAAAAIgBAFIgTACgAErMsIALgEIgLAGgAoNL8IAFACIAAABIgFAUgArIL7IBJgWIAAABIhKAogAuTK+IgBAEIgEATIAAAAIgGAcIgSAKgArILjIAFgCIgFAZgAOuLxIADAGIgEACgAD8LqIANgDIgCAJIgLAGgAoLLKIALgEIACgJIAAgBIABgEIAAgBIAGgWIAcASIABAAIgDANIguAZgAhNLQIATgFIAAACIgQAJgApnLEIAGgbIAAAAIgVgNIAZgHIABgFIAVgFIgBAAIAAACIgKAqIAAABIgCAHIgUALgAsVKlIAKgFIAHADIAAABIgCAJgArTKVIADgBIAaAPIAAADgAN+KWIAFAIIgFACgAD1KcIABAAIgBAAgAFUJ0IALAHIAAAAIABAAIgBAAIAAAEIgFARIgGAFgAIKKHIATgFIgTAKgAl7J9IAggKIADAAIABAAIAAAAIglAUgAoWJ7IACAAIAAAAIAKgGIgCAGIAAABIgBABIAAAEgAjFJsIANgEIgBADIAAABIgKAFgAJ/JvIAAAAIAAACgAtYJEIANAJIABAAIgEARIgZAOIgGADgAkmJsIAAAAIgCgEIgCgEIAKgDIgFAMgAivI7IAEgBIATgGIABAAIAHgCIACABIAAABIAAAAIgBADIAAAAIgIAiIgZAOgAr2JSIgBAAIgOgJIgEgCIAigLIgCAKIAAABIgFAVIgMAGgApzJJIAVgLIACABIAAAAIAAABIgEAOIgGADgAgxIeIASgGIABAAIgHAeIgMAHgAorIwIAHgEIAAACIAAAAIgBAFgAsuHtIAVANIABABIgFASIgsAXgAqMIjIABgDIAAgBIgigVIAggRIgCAOIgBAAIABAAIAAAAIBVgaIARAKIAAAAIAEADIghASIAAgPIhFAmgADoIeIAEgCIgEADgAHvIMIAwgPIAAAAIACAAIgTAKIgBAAIgeASgAm7HDIABAAIAGAEIAGADIAAABIABAAIgBAEIAAAAIgJAnIAAACIgBAAIAAABIgBAHIgEACgAHwHaIAGgCIgDALIAAAAIAAABIgEASgArnHrIAsgYIABgNIALgEIADgJIAAAAIABgFIAAgBIADgPIABABIAAAAIAAABIgKAsIAAAAIgCAIIgqAYgAhbHfIATgGIABAAIAGgCIgDAMIgYAOgAozHlIAHgCIgHAFgAlQHQIAEACIAAAAIABAAIgBAEIAAABIgFAPgAr7GEIAEADIABAAIgBABIAAABIgKArIAAAAIgEAUIgfARgAhbHAIAEACIgEARgAAdHEIAHgDIgCAIIgFADgAKfHBIgDACIABgiIAJAFIAAAAIABAAIgBAEIAAABIgHAagAG7FpIgSAKIABgYIAGgCIALgEIABAAIAOgEIAFADIAAABIABAAIgBAEIAAAAIgKAoIAAABIAAAAIgJAqIgBAAIAigKIABABIgkAUgApKGhIAOgHIAAABIgDAMgACGGWIABAAIABABIAAAAIAAAAIgBADIAAABIgBAGgAmBFuIANAIIAAABIABAAIgBADIAAACIgDAKIgLAGgAE/FyIAGgCIAAAAIADABIAAgEIAEgBIAAACIgHAaIAAAAIgCABIgFACgArEF3IAIgEIgCAJgApIFrIAGgBIgGADgAocFeIACgBIgCABgAoNEhIAGAEIAAAAIAPAJIAAAAIABAAIgBADIAAABIgHAdIgQAIgArMEiIAeASIABABIgBAAIgBADIg2AegAmaEWIAFAEIAAAAIABAAIgBADIAAABIgFARIgBAAgAp8ElIAKgFIAFADIACABIAAABIAAAAIAAADIAAAAIgCAGgAqoDWIgHAiIAAAAIgBABIgFAYIgUALgAGXEZIAAgBIABAAIAAABgACIDxIgXAOIAAgXIANgDIAFADIABAAIAOAJIAAABIABAAIgBADIAAABIgIAhIgCACgAKxEOIABABIABADIgCABgAH4D7IAEgBIgCAIIAAACIgBAAIAAABIgBAIgAKZDfIARAhIgSAKgAnWDbIAWAAIgBABIAEABIACAAIABABIAEAAIgCAGIgfAQgApHDLIAEACIABAAIAOAJIAAABIABAAIgBAEIAAAAIgBAEIgQAJIgBABIgCABgAgTCpIgBABIAAgNIADgBIABgBIABAAIARgGIAAAAIAGgBIAGADIAAABIAAAAIgBADIAAACIgJAmIAAAAIAAACIgBAAIAAABIgDAPIgOAIIAHAEIgNAHgAFRC/IAGADIAAAAIAAAAIgBADIAAABIgGAYgADxDKIACABIAAAAIABAAIgBADIAAABIgCAHgAibDKIgBAAIgEgHIAAAAIAAgBIAIgCIABAAIAJgEIAJgCIADACIABAAIAAABIANAIIgfARgAk2DNIAEgBIgBACIAAAAIgDABgABzC3IAFgBIgCAIIAAABIAAABIgBABIAAAAIgDANgApHClIADAAIADAAIAYAFIgeAQgAnOCtIALgBIAEAAIgLAFgAlLClIgHgIIABgUIABAAIABAAIAPgFIgHAbIAAAAIgCAJgADdCFIAHgBIgHAdgAomCNIgBAAIgCgDIALgDIAHgBIgIAZgAp4B0IABAAIAKgCIgEAKIgBABIAIAAIAAAAIgBABIgEAIIgPAIIgCABIgHAEgAhcCDIABgBIABAAIASgGIAAAAIAhgKIgBADIgwAbIgBAAIAAABIgBAAIAAABIgCABgAjhB5IAAAAIASgGIAAAAIAKgCIAGADIgjAUgAGcByIABAAIALgEIgMAGgAIXBiIAbgIIABAAIACABIABABIABgyIABgGIAWArIgFAEIgpAWIgBAAIgDACIAAAAIgGADgABAADIANAJIAAAAIAAAAIgBADIAAABIgGAcIAAAAIgDALIAAABIAAABIgBABIAAAAIgEAVgAiTAfIAGgCIABAAIANgEIABAAIACgBIgQAIIAAAAIATAMIAAAAIABAAIABABIgdAPgAkBAmIACgBIAAAAIACgBIAMAIIAAAAIAAAAIgQAJgAEsAAIAFABIACABIAAAAIgBABIAAAAIgDANIgDACgAkhgUIADgBIAAAAIAMgEIABAAIANgEIAAAAIgeARgAgxgaIAHgCIAGAEIAAABIAAAAIAAAAIgOAHgAH5gzIAQgBIAJATIgFADIgUAKgAgxggIABABIgBAEgAijg2IAVAEIgBADIAAABIgCAJIAAgKIgSAKgAgwh7IAEABIAAAAIABABIANAIIAAABIABAAIAAAAIgBACIAAACIgDAJIAAAAIgDASIAAABIgDAJIAAACIgBAAIAAACIAAAAIAAABIgCAGIgHADgAoWhXIAPgFIABAAIANgDIABAAIgdAPIgBAAIAAABIgBAAIAAABIgCABIgBAAIAAABgAitiEIgEgGIADAAIgSgbIALgDIAKAGIABAAIAAABIAHAEIgJAZgAg9jTIAIAFIAAAAIABAAIAAABIgBADIAAABIgDAJIAAAAIgEASIAAABIgCAIgAHEi3IAEAIIgBAAIgCABIAAAAIgBABgABBjDIAQgFIgCABIgBAAIgNAHgAGHj7IAFADIAAAAIAAAAIAAABIgBACIAAABIgDAJIAAABIgBAHgAk8j8IABAAIAGgCIgCABIgBAAIAAAAIgBAAIAAABIgCABIAAAAIAAAAgAmDksIAGgCIACAAIAQgGIADAAIAAAAIABAAIAAAAIAAABIgFASIAAAAIgBAEIgJgPIgEAAIgBABIgIAYgAjxkjIgXAMIAAgHIACgBIABAAIAbgIIABAAIAAgBIATgFIAAAAIAAAAIABAAIAAAAIABABIABAAIAAgIIABAAIAAAAIAGgBIAAAAIAIgDIAAADIAAAAIgBABIABAAIAVgHIAAAAIABAAIAHgCIAAAAIAFgBIABAAIARgGIACAAIABgBIAFgBIgmAVIAAgKIhDAmgAB3lGIADABIABAAIABAAIgCAHIAAAAIgDAPgAB4lQIACACIgDAEgAhzlNIAHgCIABAAIAAAAIACAAIgBAAIgBAAIAAABIgBAAIAAAAIgDABIAAAAIgEADgAmNlyIgCAFIAAABIgEASIAAAAIgBAFIgKAGgABmlaIAAgBIAAABgACBl8IAIgCIgCAFIgHAEgACaoAIADADIAAAAIABAAIAOAJIAAAAIAAAAIAAABIAAACIAAABIgDAJIAAABIgEARIAAABIgCAIIAAACIAAABIgBABIAAABIAAABIAAAAIgBAHIAAAAIgBAAIAAABIgIAWgAkFnUIABgWIAMAIIAAABIAAAAIAAAAIgBACIAAACIgCAJIAAAAIgCAMgAgPnhIAAABIAAAAIAAgGIALAHIAAAAIAAAAIAAABIgBACIAAACIgBAFgABaonIACAAIACgBIAAAAIAPgFIgCALIAAABIAAAAIABAAIAAABIgBABIAAABIAAAAIAAABIgJAoIAAABIgJAEgAkDolIgFADIAAgEIAEgBIABAAIAAAAIAHgCIABAAIAEgBIABAAIARgGIACAAIABAAIAFgCIAAAAIAcgIIAAAAIABgBIASgGIABAAIABAAIAAAAIABAAIABABIABAAIAAgCIAAgGIAKgDIgBAFIAAABIgBABIAAABIAAAAIAAABIgDALIg6AgIgBAAIAAABIAAAAIgBAAIgCABIAAAAIgiASgAiZofIAEAAIAAAAIABgBIAEgBIAJAFIABAAIAIAGIAAAAIABAAIAAAAIgcAQgAkQp2IAEgBIACAAIAAgBIADAAIABAAIAAABIABAAIAAAAIgBACIAAADIgDAJIAAAAIgEASIAAABIgCAJIAAABIgBAAIAAACIgBAAIAAABIgBAHIgfASgAippaIABghIACACIAAAAIABAAIABAAIAEADIAAABIAAACIgBAAIAAACIAAAAIAAABIgIAhgAioqVIARgFIgBADIgQAJgACzrBIACAEIgDACgAiys4IAIgRIAEgCIADAAIAAAAIAFgCIABAAIAKgDIAEACIAAAAIAAAAIAAABIgBACIAAACIgDAJIAAABIgEARIAAABIgCAJIAAABIAAABIAAABIgBABIAAAAIgIAFgAgytBIABguIAFgCIABAAIACgBIAAACIgBABIABAAIAWgHIAAAAIABAAIAGgCIABAAIAEgCIABAAIAJgDIgbAPIABAAIAAABIAKAFIAAAAIAIAGIABAAIAAAAIAGADIg0AegAhpuSIAHgDIABAAIAAAAIAHgCIABAAIAEgBIABAAIANgEIgiASg");
	this.shape_773.setTransform(132.2,173.2);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.lf(["#3F8732","#000000"],[0.067,1],-5.9,-2.5,8.5,-2.5).s().p("AgyANIABgHIAAAAIABgBIAAgBIAAAAIAAgBIADgJIAAAAIADgMIABgGIAAgBIACgJIAAgBIABgDIAAgBIACABIABABIABAAIAdASIABAAIAAACIABAAIABAAIAUAMIABAAIAAABIAAAAIABAAIAAAAIACABIAAAAIAPAIIABABIAAAAIANAIIgBABIghAKIgVAGIgBAAIgRAGIgBAAIgJACg");
	this.shape_774.setTransform(175.6,152.2);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,0,5.7,0).s().p("AA1BKIgBgCIgBAAIgNgIIAAAAIgBgBIgPgJIAAAAIgCgBIAAAAIgBAAIAAAAIAAgBIgBAAIgUgMIAAAAIgBgBIgBgBIgBAAIgdgSIgBAAIgBgBIgBgBIgBAAIAAAAIgEgDIgKgGIAAAAIgBAAIgDgCIAFgCIAUgFIABAAIAAAAIABAAIABABIABgbIALgGIAAAAIACgBIABgBIAAAAIABAAIAAAAIBFgnIgDCSIAAABg");
	this.shape_775.setTransform(175.6,146.4);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.6,0.4,5.3,0.4).s().p("AglAYIgCAAIAAgBIgCgBIAAAAIgEgGIgBAAIgGgKIAlgKIABAAIABAAIABABIABAAIAAgSIABgBIABAAIAQgFIACAAIAagJIAEgBIADACIAAAAIABAAIAKAHIgBAXIgCALIAAAAIgDAKIAAABIAAAAIAAABIgBABIAAAAIgBAHIgOgUIAAABIAAABIgIAXIgVgfIgEAAIAAAAIgOAlg");
	this.shape_776.setTransform(166,150.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.lf(["#3F8732","#000000"],[0.067,1],-7.2,-2.9,7.2,-2.9).s().p("AgkghIARALIABAAIABABIACAAIAAAAIAUANIAAAAIAAAAIABAAIAAABIABAAIABABIABAAIAPAIIAAABIABAAIANAIIgBABIgUAFIgJADIgZAIIgBAAIgRAFIgBAAIgBABg");
	this.shape_777.setTransform(168.7,145.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.6,-2.7,4.3,-2.7).s().p("AAnAuIgBgBIgBAAIgNgIIAAAAIgBgBIgOgIIgBgBIAAAAIgCgBIAAAAIgBAAIAAAAIAAgBIgBAAIgUgMIAAAAIgBgBIgBgBIgBAAIgWgMIABgYIAAAAIAHgCIABAAIAEgCIABAAIARgFIACAAIABgBIAkgLIADABIAKABIAAAFIgCBDIAAATg");
	this.shape_778.setTransform(160.8,145.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.lf(["#3F8732","#000000"],[0.067,1],-4.6,-2.9,9.8,-2.9).s().p("AgtAsIAAgBIAAgBIAIgjIABgFIAAAAIABgBIAAgBIAAAAIAAAAIABgCIACgIIAAAAIAWgBIgRgYIABgDIAAgBIABgDIAAgBIACABIAAABIACAAIAQALIABAAIgCAFIAHAAIAAABIgBABIgQAbIAEABIABAAIAaAFIAAAAIAcAFIADABIglALIAAAAIgCAAIgQAGIgBAAIgFACIAAAAIgHABIgBABIAAAAIgWAHg");
	this.shape_779.setTransform(159.1,139.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.lf(["#3F8732","#000000"],[0.067,1],-8.9,0,4,0).s().p("AAkBJIgBgBIgBAAIgMgIIgBAAIgBgBIgOgJIgBAAIgBgBIgBAAIAAAAIgBAAIAAgBIgBAAIgUgMIAAAAIgBgBIgBgBIgBAAIgRgLIAAgFIAVAEIABABIAAgBIgOgfIAAgFIA3gCIgZgmIApgXIgDB3IAAAcg");
	this.shape_780.setTransform(169,139.1);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],1,6.7,-3.4,-3.7).s().p("AAwAzIgVgEIgJgBIgIgCIgagFIAAAAIgbgFIgBAAIgFgBIARgcIABgBIAAgBIAhg2IAJASIAVAvIADAFIAOAgIAAABg");
	this.shape_781.setTransform(162.3,136.7);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-6.4,0.1,3.4,0.1).s().p("AgSAwIgVgwIAIgVIAAgBIAIgXIABgBIAAgBIAJANIAbAqIAaAlIg3ADg");
	this.shape_782.setTransform(167.4,133.3);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-3.5,-0.2,6.3,-0.2).s().p("AgcAuIACgGIAWg+IABAAIAEgPIABgEIABgDIABgBIAEAAIACADIATAcIAAABIgIAWIgIgRIghA2g");
	this.shape_783.setTransform(161.3,132.4);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.lf(["#3F8732","#000000"],[0.067,1],-9.7,1.1,3.2,1.1).s().p("AgaA0IAAgBIgBAAIAAAAIgBAAIgBgBIgCgFIA6gCIgyhJIA3gfIgCBpIgeASIgCgDIgFAAIAAAAIgBADg");
	this.shape_784.setTransform(162.4,121.9);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.lf(["#3F8732","#000000"],[0.067,1],-6.9,1.1,6,1.1).s().p("AA3A6IACAAIAAAFgAgOApIgRgKIgBAAIgBgBIgBgBIgBAAIAAAAIgLgHIgNgTIADgCIArgWIAAAAIACgBIABgBIAAAAIABAAIAAAAIARADIgWA+gAAWgpIAggRIAGgEIgBAmIgJgNIAAABIAAABIgIAXgAAEgfIAJgFIgFAPg");
	this.shape_785.setTransform(160,132.3);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#993333").ss(1,1,1).p("ABwsLIACgUIAIAFA7Yo6QAAABgBACA7bo7QADgCACgCQgBACgBADIgDgBQgCABgDAAQgFABgFAAQgEAAgFAAQACgFACgFgAzbLgIAAAAIABAAAyEMeQABABABABAy3L/QAAAAAAABAyMMZQACABADACAzaLgQAKACAHAIQAAABABABAb0LsIAAABIgCgB");
	this.shape_786.setTransform(374.1,321.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.lf(["#0099CC","#B4DCF5"],[0.024,1],-128.9,60,-69.5,-47.8).s().p("AyFKuIgCgCIgDgDIgFgDIgSgKIgLgHIgBgBIgHgDIgEgEIALAGIARAIIARAIIhAgqIAAAAIgBgBQgHgIgKgCIAAAAIgBAAIAAAAQgngXgegaIgQgMQgHgFgCgEQgJgOgUgJQgdgNgUgTIgKgKQgfgbgwgaQgGgDgCgFQgQgngkgpQgqgwgTg0IAAAAQgVg6gMg9QgCgKgGgJQghgsAHg5QAEgogNgfQgIgTgDgUIgJgxQgKgqgNgmQgehaAGhkQABgUAAgVQABgigDgjQgHhRAXhEIABgDIJkDkISNG0IbZKOIAAA0g");
	this.shape_787.setTransform(374.4,333.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.lf(["#0099CC","#B4DCF5"],[0.024,1],-223.7,2.6,25.4,2.6).s().p("AD6KIQAKACAHAIIABABgAkLqSIAIAAIgBADg");
	this.shape_788.setTransform(224.8,330.6);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-66.1,-2.6,54,-2.6).s().p("ATOK9IgegIIgDgBQiSgphcAAImGAAImFAAIl7AAIhGAAIkYAAIlKAAQiaAAiwAHIhfAEIgFhqQgNlXANhxQAGg0AMgDQApgKANgIIAWgPIAGgEQBCgvA+g0QAMgJANgIQAlgUAnghQALgJAOgHQA5gZAxgeQAfgTAbgUIAPgIQAngTAkgXQAFgDAHgCIAEgCQALgCAIgHIA4gwIAjgiQAQgQAwgmIAUgPQAmgbAlgPIAYgMQAngUAlgSIAYgLIAXgLIAZgNQA2gaAdgUQAHgEAKgCQAsgGAtgPQBFgYBRgBQC4gCC5AEIA8ACQA8ADA8gDIABAAIAJAAIAKgBIAHADQgXBFAHBQQADAjgBAjQAAAUgBAUQgGBlAeBZQANAmAKAqIAJAxQADAUAIATQANAggEAoQgHA5AhArQAGAJACAKQAMA9AVA6IAAABQATAzAqAwQAkApAQAnQACAGAGADQAwAZAfAbIAKAKQAUAUAdAMQAUAJAJAOQACAFAHAEIAQAMQAeAaAnAXIAAAAIABAAIAAAAIASAMIAAAAIBAApIgRgIIgRgIIgLgFIgCgBQgLgFALAGIAGADIAHAEIABAAIALAHIASALIAFADIADACIACACIACABIAJAIQARANANAQQAOAQgXAAQgVAAgzgNg");
	this.shape_789.setTransform(131.6,335.8);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.lf(["#B4DCF5","#FFFFFF"],[0,1],-62.7,3.1,62.7,3.1).s().p("ApyAkQBDgsBFgoQBLgsAjgZIALgJQAggaAygcIBZgyQApgWAngeQAngeAIgBQAJgBAMgGQAMgFAagIQAGgCAGgEQAUgSAngKIBHgUIA3gQICrgtQCTgnBCAbQBCAbgJARQgJAQAJAAQkZHTDCGVg");
	this.shape_790.setTransform(322.7,283.9);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.lf(["#0099CC","#B4DCF5"],[0.024,1],-29.8,43.5,30.8,-45.3).s().p("AOSMEI7YqPQjDmUEanUIAJgQQOOGULuI0IgDAFIAAI6g");
	this.shape_791.setTransform(460.6,319.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,257,585.7,350.3);
// library properties:
lib.properties = {
	id: '18F3390001000343BA22C13EA6FC9409',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['18F3390001000343BA22C13EA6FC9409'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

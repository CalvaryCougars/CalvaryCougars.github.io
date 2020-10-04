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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009933").ss(1,1,1).p("AGQAAQAAGlh1EpQh2EpilAAQilAAh1kpQh1kpAAmlQAAmkB1kpQB1kpClAAQClAAB2EpQB1EpAAGkg");
	this.shape.setTransform(40,101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AkaLOQh1kqAAmkQAAmjB1kqQB2kpCkAAQCmAAB0EpQB2EqAAGjQAAGkh2EqQh0EpimAAQikAAh2kpg");
	this.shape_1.setTransform(40,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,82,205), null);


// stage content:
(lib.Tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(120,208.5,1,1,0,0,0,40,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:115,y:215.5},0).wait(1).to({x:110.1,y:222.5},0).wait(1).to({x:105.2,y:229.5},0).wait(1).to({x:100.4,y:236.6},0).wait(1).to({x:95.6,y:243.8},0).wait(1).to({x:90.9,y:251},0).wait(1).to({x:86.4,y:258.2},0).wait(1).to({x:81.9,y:265.5},0).wait(1).to({x:77.6,y:272.9},0).wait(1).to({x:73.4,y:280.4},0).wait(1).to({x:69.4,y:288},0).wait(1).to({x:65.6,y:295.7},0).wait(1).to({x:62.1,y:303.6},0).wait(1).to({x:59.1,y:311.5},0).wait(1).to({x:56.5,y:319.8},0).wait(1).to({x:54.8,y:328.2},0).wait(1).to({x:54.6,y:336.7},0).wait(1).to({x:56.7,y:345},0).wait(1).to({x:62.3,y:351.3},0).wait(1).to({x:70.2,y:354.6},0).wait(1).to({x:78.7,y:355.5},0).wait(1).to({x:87.2,y:355.1},0).wait(1).to({x:95.7,y:353.8},0).wait(1).to({x:104.1,y:352},0).wait(1).to({x:112.4,y:349.8},0).wait(1).to({x:120.6,y:347.3},0).wait(1).to({x:128.7,y:344.5},0).wait(1).to({x:136.7,y:341.5},0).wait(1).to({x:144.7,y:338.4},0).wait(1).to({x:152.7,y:335.1},0).wait(1).to({x:160.5,y:331.7},0).wait(1).to({x:168.4,y:328.2},0).wait(1).to({x:176.2,y:324.7},0).wait(1).to({x:183.9,y:321},0).wait(1).to({x:191.6,y:317.3},0).wait(1).to({x:199.3,y:313.5},0).wait(1).to({x:207,y:309.6},0).wait(1).to({x:214.6,y:305.7},0).wait(1).to({x:222.2,y:301.8},0).wait(1).to({x:229.8,y:297.8},0).wait(1).to({x:237.4,y:293.7},0).wait(1).to({x:244.9,y:289.7},0).wait(1).to({x:252.4,y:285.5},0).wait(1).to({x:260,y:281.4},0).wait(1).to({x:267.4,y:277.2},0).wait(1).to({x:274.9,y:273},0).wait(1).to({x:282.4,y:268.8},0).wait(1).to({x:289.8,y:264.5},0).wait(1).to({x:297.2,y:260.2},0).wait(1).to({x:304.6,y:255.9},0).wait(1).to({x:312.1,y:251.6},0).wait(1).to({x:319.4,y:247.2},0).wait(1).to({x:326.8,y:242.9},0).wait(1).to({x:334.2,y:238.5},0).wait(1).to({x:341.5,y:234.1},0).wait(1).to({x:348.9,y:229.7},0).wait(1).to({x:356.2,y:225.2},0).wait(1).to({x:363.5,y:220.8},0).wait(1).to({x:370.8,y:216.3},0).wait(1).to({x:378.1,y:211.8},0).wait(1).to({x:385.5,y:207.3},0).wait(1).to({x:392.7,y:202.8},0).wait(1).to({x:400,y:198.2},0).wait(1).to({x:407.3,y:193.7},0).wait(1).to({x:414.6,y:189.1},0).wait(1).to({x:421.8,y:184.6},0).wait(1).to({x:429.1,y:180},0).wait(1).to({x:436.3,y:175.4},0).wait(1).to({x:443.5,y:170.8},0).wait(1).to({x:450.8,y:166.2},0).wait(1).to({x:458,y:161.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(354.5,306.5,81,204);
// library properties:
lib.properties = {
	id: '9B0A5372B67B3D4CA840C39F7C209863',
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
an.compositions['9B0A5372B67B3D4CA840C39F7C209863'] = {
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
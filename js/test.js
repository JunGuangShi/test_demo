let vh = window.innerHeight;

window.addEventListener("scroll", function () {
    console.log(pageYOffset / window.innerHeight);
});

document.getElementById("interactive-contents").style.removeProperty("display");

let instance_film_sec1 = new Film("test-sec-1", sec1_layers, {
    width: 1920,
    height: 1080,
    loadFirstFrame: true
});
let instance_film_sec2 = new Film("test-sec-2", sec2_layers, {
    width: 1920,
    height: 1080,
    loadFirstFrame: true
});
let instance_film_sec3 = new Film("test-sec-3", sec3_layers, {
    width: 1920,
    height: 1080,
    loadFirstFrame: true
});
let instance_film_sec4 = new Film("test-sec-4", sec4_layers, {
    width: 1920,
    height: 1080,
    loadFirstFrame: true
});

let instance_sm_sec1_stage1 = new Scrollimation({
    from: vh * 0.1,
    to: vh * 2.5,
    step: function (state) {
        let frameN = state.calc(0, 36);
        instance_film_sec1.requireFrame(frameN);
    }
});

let instance_sm_sec1_txt1_h1 = new Scrollimation({
    target: '#sec1-txt1 h1',
    from: vh * 0.1,
    to: vh,
    init: function (state) {
        state.target[0].style.opacity = 0;
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        state.target[0].style.opacity = opacity;
    }
});

let instance_sm_sec1_txt1_p = new Scrollimation({
    target: '#sec1-txt1 p',
    from: vh * 0.2,
    to: vh * 1.3,
    init: function (state) {
        state.target[0].style.opacity = "0";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        state.target[0].style.opacity = opacity;
    }
});

let instance_sm_sec1_txt1_exit = new Scrollimation({
    target: '#sec1-txt1',
    from: vh*1.8,
    to: vh * 2.3,
    step: function (state) {
        let top = state.calc(35, 15);
        state.target[0].style.top = top + "%";
    }
});

let instance_sm_sec2_stage1 = new Scrollimation({
    from: vh * 2.6,
    to: vh * 7.8,
    step: function (state) {
        let frameN = state.calc(0, 108);
        instance_film_sec2.requireFrame(frameN);
    }
});

let instance_sm_sec2_txt1_h2_1 = new Scrollimation({
    target: '#sec2-txt1 h2:nth-of-type(1)',
    from: vh * 2.5,
    to: vh * 3.1,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec2_txt1_p_1 = new Scrollimation({
    target: '#sec2-txt1 p:nth-of-type(1)',
    from: vh * 2.8,
    to: vh * 3.4,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec2_txt1_h2_2 = new Scrollimation({
    target: '#sec2-txt1 h2:nth-of-type(2)',
    from: vh * 2.9,
    to: vh * 3.5,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec2_txt1_p_2 = new Scrollimation({
    target: '#sec2-txt1 p:nth-of-type(2)',
    from: vh * 3.2,
    to: vh * 3.8,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec2_txt1_exit = new Scrollimation({
    target: '#sec2-txt1',
    from: vh * 4.2,
    to: vh * 4.6,
    step: function (state) {
        let opacity = state.calc(1, 0);
        state.target[0].style.opacity = opacity;
    }
});

let instance_sm_sec2_txt2_h2 = new Scrollimation({
    target: '#sec2-txt2 h2',
    from: vh * 4.8,
    to: vh * 5.9,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec2_txt2_p = new Scrollimation({
    target: '#sec2-txt2 p',
    from: vh * 5.1,
    to: vh * 6.2,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec2_txt2_exit = new Scrollimation({
    target: '#sec2-txt2',
    from: vh * 6.9,
    to: vh * 7.3,
    step: function (state) {
        let opacity = state.calc(1, 0);
        state.target[0].style.opacity = opacity;
    }
});

let instance_sm_sec3_stage1 = new Scrollimation({
    from: vh * 8.3,
    to: vh * 12,
    step: function (state) {
        let frameN = state.calc(0, 62);
        instance_film_sec3.requireFrame(frameN);
    }
});

let instance_sm_sec3_txt1_h2 = new Scrollimation({
    target: '#sec3-txt1 h2',
    from: vh * 8.6,
    to: vh * 9.7,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec3_txt1_p = new Scrollimation({
    target: '#sec3-txt1 p',
    from: vh * 8.9,
    to: vh * 10,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec3_txt1_exit = new Scrollimation({
    target: '#sec3-txt1',
    from: vh * 10.7,
    to: vh * 11.1,
    step: function (state) {
        let opacity = state.calc(1, 0);
        state.target[0].style.opacity = opacity;
    }
});

let instance_sm_sec4_stage1 = new Scrollimation({
    from: vh * 8.3,
    to: vh * 10,
    step: function (state) {
        let frameN = state.calc(0, 1);
        instance_film_sec4.requireFrame(frameN);
    }
});

let instance_sm_sec4_txt1_h2 = new Scrollimation({
    target: '#sec4-txt1 h2',
    from: vh * 11.1,
    to: vh * 12.2,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});

let instance_sm_sec4_txt1_p = new Scrollimation({
    target: '#sec4-txt1 p',
    from: vh * 11.4,
    to: vh * 12.5,
    init: function (state) {
        state.target[0].style.opacity = "0";
        state.target[0].style.top = "30px";
    },
    step: function (state) {
        let opacity = state.calc(0, 1);
        let top = state.calc(30, 0);
        state.target[0].style.opacity = opacity;
        state.target[0].style.top = top + "px";
    }
});
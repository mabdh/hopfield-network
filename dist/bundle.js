(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _util = require("./util.js");

var Util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// var dim = 26;
var dim = 15;
var num_pattern = 1;
var canvas_width = 450;
var input_2d = [];
var weight = [];
input_2d.push([1.0, -1.0, 1.0]);
input_2d.push([-1.0, 1.0, -1.0]);
input_2d.push([1.0, 1.0, 1.0]);

var input_1d = [1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, 1.0];
var input_1d2 = [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0];

var input_1d = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0];
var input_1d2 = [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0];
var batman_pat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var pattern_a = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var pattern_c = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var pattern_z = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var pattern_batman = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var input_draw_1_state_2d = [];
var input_draw_2_state_2d = [];
var input_draw_3_state_2d = [];
var input_draw_res_state_2d = [];
var input_tensor = [];
// input_tensor.push(batman_pat)
// input_tensor.push(input_1d2)


// init input_draw_1_state_2d
function reinit_input_draw_state_2d() {
    for (var it = 0; it < dim; ++it) {
        var row = [];
        for (var itr = 0; itr < dim; ++itr) {
            row.push(-1.0);
        }
        input_draw_1_state_2d.push(row);
        input_draw_2_state_2d.push(row);
        input_draw_3_state_2d.push(row);
        input_draw_res_state_2d.push(row);
    }
}

function calc_weight(_i, _j, _input_tensor, _num_unit) {
    var sum_pattern = 0.0;
    for (var l = 0; l < _input_tensor.length; ++l) {
        sum_pattern += _input_tensor[l][_i] * _input_tensor[l][_j];
    }
    return sum_pattern / _num_unit;
}

function calc_energy_second_term(_i, _k, _input_tensor, _num_unit) {
    var sum_pattern = 0.0;
    console.log(_input_tensor);
    for (var j = 0; j < _num_unit; ++j) {
        for (var l = 0; l < _input_tensor.length; ++l) {
            if (_k == l) {
                break;
            }
            console.log(_k, l);
            sum_pattern += _input_tensor[l][_i] * _input_tensor[l][j] * _input_tensor[_k][j];

            console.log(_input_tensor[l][i]);
            console.log(_input_tensor[l][j]);
            console.log(_input_tensor[_k][j]);
        }
    }
    // console.log(sum_pattern)
    return sum_pattern / _num_unit;
}

function calc_energy(_i, _k, _input_tensor, _weight, _num_unit) {
    var sum_energy = 0.0;
    for (var j = 0; j < _num_unit; ++j) {
        sum_energy += _weight[_i][j] * _input_tensor[_k][j];
    }
    return sum_energy;
}

function is_pattern_fixed(_k, _input_tensor, _weight, _num_unit) {
    for (var i = 0; i < _num_unit; ++i) {
        // let second_term = calc_energy_second_term(i, _k, _input_tensor, _num_unit)
        var energy = calc_energy(i, _k, _input_tensor, _weight, _num_unit);
        // debugger;
        if (Math.sign(energy) != Math.sign(_input_tensor[_k][i])) {
            return false;
        }
    }
    return true;
}

function update_node_tensor(_k, _j, _weight, _input_tensor, _num_unit) {
    var sum_all = 0.0;
    for (var i = 0; i < _num_unit; ++i) {
        // console.log (_input_tensor[_k][i], _weight[_j][i])
        sum_all += _input_tensor[_k][i] * _weight[_j][i];
    }
    // let result = _input_tensor[_k][_i] + sum_all
    _input_tensor[_k][_j] = Math.sign(sum_all);
    return _input_tensor;
}

function recalc_all_weights(_weight, _input_tensor, _num_unit) {
    var _temp_weight = _weight;
    for (var j = 0; j < _num_unit; ++j) {
        for (var i = 0 + j; i < _num_unit; ++i) {
            if (i != j) {
                _temp_weight[j][i] = calc_weight(i, j, _input_tensor, _num_unit);
            }
        }
    }
    // copy to lower triangle
    for (var j = 0; j < _num_unit; ++j) {
        for (var i = 0 + j; i < _num_unit; ++i) {
            if (i != j) {
                _temp_weight[i][j] = _temp_weight[j][i];
            }
        }
    }
    // console.log(_temp_weight)
    return _temp_weight;
}

function train(_dim, _input_tensor) {
    // var _pattern_track = [];
    // for (var y = 0; y < _input_tensor.length; y+=1){
    //     _pattern_track.push(y);
    // }
    console.log(input_draw_1_state_2d);
    var _num_unit = Math.pow(_dim, 2);
    var _weight = [];
    for (var nu = 0; nu < _num_unit; ++nu) {
        var row = new Float32Array(_num_unit);
        row.fill(0.0);
        _weight.push(row);
    }
    return recalc_all_weights(_weight, _input_tensor, _num_unit);
}

function process(_input_1d, _weight, _num_iteration) {
    var _num_unit = _weight.length;
    var _temp = [_input_1d];
    var a = 0;
    for (var it = 0; it < _num_iteration; ++it) {
        // debugger;
        // console.log(it)
        (function (it) {
            setTimeout(function () {
                var _input_draw_state_2d = Util.to_2d(_temp[0]);
                draw_square_to_canvas(_input_draw_state_2d, canvas_res, canvas_width);
                for (var pos = 0; pos < _num_unit; ++pos) {
                    (function (pos) {
                        setTimeout(function () {
                            var node_update_num = Util.get_random_int(_num_unit);
                            _temp = update_node_tensor(0, node_update_num, _weight, _temp, _num_unit);
                        }, 100 * pos);
                    })(pos);
                }
                var current_progress = Math.ceil(101 * it / _num_iteration);
                // console.log(Math.round(it / _num_iteration) * 100)
                $("#progress-predict").css("width", current_progress + "%").attr("aria-valuenow", current_progress).text(current_progress + "% Complete");
            }, 100 * it);
        })(it);
    }
    // while(a < 5){
    // let isfixed = is_pattern_fixed(0,_input_tensor,_weight,_num_unit)
    // console.log(isfixed)
    // let node_update_num = Util.get_random_int(_num_unit.length)
    // console.log(_input_tensor[0])
    // _input_tensor = update_node_tensor(0,node_update_num,_weight,_input_tensor)
    // a++;
    // }

    // debugger;
    return _temp[0];
}

// function train(_dim, _input_tensor){
//     var _pattern_track = [];
//     for (var y = 0; y < _input_tensor.length; y+=1){
//         _pattern_track.push(y);
//     }

//     let _num_unit = Math.pow(_dim,2);
//     var _weight = []
//     for(var nu = 0; nu < _num_unit; ++nu){
//         var row = new Float32Array(_num_unit);
//         row.fill(0.0)
//         _weight.push(row)
//     }
//     var done = false
//     // let a = 0;
//     while(true){
//         _weight = recalc_all_weights(_weight, _input_tensor, _num_unit)
//         var p = 0;
//         while(p < _pattern_track.length){
//             // console.log(p)
//             // let is_fixed = is_pattern_fixed(p,_input_tensor,weight,_num_unit)
//             // console.log(is_fixed)
//             // // if(!is_pattern_fixed(p,_input_tensor,weight,_num_unit)){
//             // //     break;
//             // // }
//             if(!is_pattern_fixed(p,_input_tensor,_weight,_num_unit)){
//                 break;
//             }

//             if(_pattern_track.length > 1){
//                 _pattern_track.slice(0, p).concat(_pattern_track.slice(p + 1, _pattern_track.length))
//             }
//             else{
//                 _pattern_track = []
//             }

//             if(_pattern_track.length == 0){
//                 done = true
//                 break;
//             }
//             console.log(_pattern_track.length)
//             p++;
//         }
//         if(done == true){
//             console.log("DONE")
//             break;
//         }
//         let pat_update_num = Util.get_random_int(_pattern_track.length)
//         let node_update_num = Util.get_random_int(_num_unit.length)
//         _input_tensor = update_node_tensor(pat_update_num,node_update_num,_weight,_input_tensor,_num_unit)
//         console.log(_input_tensor)
//         // a++;
//     }
//     return _weight

// }
// function process(_input_matrix, _weight, _canvas_res, _canvas_width, _num_iteration){
//     let _dim = _weight.length;
//     let _num_unit = Math.pow(_dim, 2)
//     var _input_tensor = [_input_matrix]
//     var a = 0;
//     for(var it = 0; it < _num_iteration; ++it){

//     }
//     // while(a < 5){
//         let isfixed = is_pattern_fixed(0,_input_tensor,_weight,_num_unit)
//         console.log(isfixed)
//         let node_update_num = Util.get_random_int(_num_unit.length)
//         console.log(_input_tensor[0])
//         _input_tensor = update_node_tensor(0,node_update_num,_weight,_input_tensor)
//         a++;
//     // }

//     return _input_tensor[0]
// }


function draw_square_to_canvas(_input_2d, canvas, _canvas_width) {
    var ctx = canvas.getContext("2d");
    var _dim = _input_2d.length;
    if (_input_2d.length % _dim != 0) {
        throw "not square";
        alert("not square");
    }

    var threshold = 0.5;

    ctx.canvas.width = _canvas_width;
    ctx.canvas.height = _canvas_width;

    var y_start = 0;
    var y_end = _canvas_width;
    var step_size = parseInt(_canvas_width / _dim);

    for (var x = 0; x < _canvas_width; x += step_size) {
        // line = ((x, y_start), (x, y_end))
        // draw.line(line, fill=128)

        ctx.moveTo(x, y_start);
        ctx.lineTo(x, y_end);
        ctx.stroke();
    }

    var x_start = 0;
    var x_end = _canvas_width;

    for (var y = 0; y < _canvas_width; y += step_size) {
        ctx.moveTo(x_start, y);
        ctx.lineTo(x_end, y);
        ctx.stroke();
    }
    for (var x = 0; x < _dim; ++x) {
        for (var y = 0; y < _dim; ++y) {
            // console.log(_input_2d[i][j])
            if (_input_2d[x][y] >= threshold) {
                // console.log(i,j)
                ctx.fillRect(x * step_size, y * step_size, step_size, step_size);
            }
        }
        // console.log(str_row)
    }
}

function toggle_state(_input_matrix, xid, yid) {
    _input_matrix[xid][yid] *= -1.0;
    return _input_matrix;
}

function refresh_progress() {
    $("#progress-predict").css("width", "0%").attr("aria-valuenow", 0).text("0% Complete");
}

document.getElementById('button-train').addEventListener('click', function () {
    var input_draw_1_state_1d = Util.to_1d(input_draw_1_state_2d);
    var input_draw_2_state_1d = Util.to_1d(input_draw_2_state_2d);
    var input_draw_3_state_1d = Util.to_1d(input_draw_3_state_2d);
    input_tensor = [];
    input_tensor.push(input_draw_1_state_1d);
    input_tensor.push(input_draw_2_state_1d);
    input_tensor.push(input_draw_3_state_1d);
    console.log("HERE");
    console.log(input_tensor);
    weight = train(dim, input_tensor);
    console.log(weight);
    $('#weight-update').toast('show');
});

document.getElementById('button-process').addEventListener('click', function () {
    var input_draw_res_state_1d = Util.to_1d(input_draw_res_state_2d);
    console.log("PROCESS");
    console.log(weight);
    console.log(input_draw_res_state_1d);
    input_draw_res_state_1d = process(input_draw_res_state_1d, weight, 100);
    console.log(input_draw_res_state_1d);
    input_draw_res_state_2d = Util.to_2d(input_draw_res_state_1d);
    draw_square_to_canvas(input_draw_res_state_2d, canvas_res, canvas_width);
});

// Canvas 1
document.getElementById('dropdown-preset-a-1').addEventListener('click', function () {
    input_draw_1_state_2d = Util.to_2d(pattern_a);
    draw_square_to_canvas(input_draw_1_state_2d, canvas_1, canvas_width);
});
document.getElementById('dropdown-preset-c-1').addEventListener('click', function () {
    input_draw_1_state_2d = Util.to_2d(pattern_c);
    draw_square_to_canvas(input_draw_1_state_2d, canvas_1, canvas_width);
});
document.getElementById('dropdown-preset-z-1').addEventListener('click', function () {
    input_draw_1_state_2d = Util.to_2d(pattern_z);
    draw_square_to_canvas(input_draw_1_state_2d, canvas_1, canvas_width);
});
document.getElementById('dropdown-preset-batman-1').addEventListener('click', function () {
    input_draw_1_state_2d = Util.to_2d(pattern_batman);
    draw_square_to_canvas(input_draw_1_state_2d, canvas_1, canvas_width);
});
document.getElementById('dropdown-preset-random-1').addEventListener('click', function () {
    var _num_unit = Math.pow(dim, 2);
    input_draw_1_state_2d = Util.to_2d(Util.generate_random_bipolar_vector(_num_unit));
    draw_square_to_canvas(input_draw_1_state_2d, canvas_1, canvas_width);
});

// Canvas 2
document.getElementById('dropdown-preset-a-2').addEventListener('click', function () {
    input_draw_2_state_2d = Util.to_2d(pattern_a);
    draw_square_to_canvas(input_draw_2_state_2d, canvas_2, canvas_width);
});
document.getElementById('dropdown-preset-c-2').addEventListener('click', function () {
    input_draw_2_state_2d = Util.to_2d(pattern_c);
    draw_square_to_canvas(input_draw_2_state_2d, canvas_2, canvas_width);
});
document.getElementById('dropdown-preset-z-2').addEventListener('click', function () {
    input_draw_2_state_2d = Util.to_2d(pattern_z);
    draw_square_to_canvas(input_draw_2_state_2d, canvas_2, canvas_width);
});
document.getElementById('dropdown-preset-batman-2').addEventListener('click', function () {
    input_draw_2_state_2d = Util.to_2d(pattern_batman);
    draw_square_to_canvas(input_draw_2_state_2d, canvas_2, canvas_width);
});
document.getElementById('dropdown-preset-random-2').addEventListener('click', function () {
    var _num_unit = Math.pow(dim, 2);
    input_draw_2_state_2d = Util.to_2d(Util.generate_random_bipolar_vector(_num_unit));
    draw_square_to_canvas(input_draw_2_state_2d, canvas_2, canvas_width);
});

// Canvas 3
document.getElementById('dropdown-preset-a-3').addEventListener('click', function () {
    input_draw_3_state_2d = Util.to_2d(pattern_a);
    draw_square_to_canvas(input_draw_3_state_2d, canvas_3, canvas_width);
});
document.getElementById('dropdown-preset-c-3').addEventListener('click', function () {
    input_draw_3_state_2d = Util.to_2d(pattern_c);
    draw_square_to_canvas(input_draw_3_state_2d, canvas_3, canvas_width);
});
document.getElementById('dropdown-preset-z-3').addEventListener('click', function () {
    input_draw_3_state_2d = Util.to_2d(pattern_z);
    draw_square_to_canvas(input_draw_3_state_2d, canvas_3, canvas_width);
});
document.getElementById('dropdown-preset-batman-3').addEventListener('click', function () {
    input_draw_3_state_2d = Util.to_2d(pattern_batman);
    draw_square_to_canvas(input_draw_3_state_2d, canvas_3, canvas_width);
});
document.getElementById('dropdown-preset-random-3').addEventListener('click', function () {
    var _num_unit = Math.pow(dim, 2);
    input_draw_3_state_2d = Util.to_2d(Util.generate_random_bipolar_vector(_num_unit));
    draw_square_to_canvas(input_draw_3_state_2d, canvas_3, canvas_width);
});

// Canvas Res
document.getElementById('dropdown-preset-a-noise').addEventListener('click', function () {
    refresh_progress();
    input_draw_res_state_2d = Util.to_2d(Util.add_noise_to_vector(pattern_a, 0.5));
    draw_square_to_canvas(input_draw_res_state_2d, canvas_res, canvas_width);
});
document.getElementById('dropdown-preset-c-noise').addEventListener('click', function () {
    refresh_progress();
    input_draw_res_state_2d = Util.to_2d(Util.add_noise_to_vector(pattern_c, 0.5));
    draw_square_to_canvas(input_draw_res_state_2d, canvas_res, canvas_width);
});
document.getElementById('dropdown-preset-z-noise').addEventListener('click', function () {
    refresh_progress();
    input_draw_res_state_2d = Util.to_2d(Util.add_noise_to_vector(pattern_z, 0.5));
    draw_square_to_canvas(input_draw_res_state_2d, canvas_res, canvas_width);
});
document.getElementById('dropdown-preset-batman-noise').addEventListener('click', function () {
    refresh_progress();
    input_draw_res_state_2d = Util.to_2d(Util.add_noise_to_vector(pattern_batman, 0.5));
    draw_square_to_canvas(input_draw_res_state_2d, canvas_res, canvas_width);
});

// document.getElementById('button-print').addEventListener('click',function(){
//     console.log(input_draw_1_state_2d.toString())
// });

var canvas_1 = document.getElementById('canvas-1');
var canvas_2 = document.getElementById('canvas-2');
var canvas_3 = document.getElementById('canvas-3');
var canvas_res = document.getElementById('canvas-res');

canvas_1.addEventListener('click', function (event) {
    var rect = canvas_1.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var xy = Util.pixel_to_index(x, y, dim, canvas_width);
    console.log("x: " + xy[0] + " y: " + xy[1]);
    input_draw_1_state_2d = toggle_state(input_draw_1_state_2d, xy[0], xy[1]);
    console.log(input_draw_1_state_2d);
    draw_square_to_canvas(input_draw_1_state_2d, canvas_1, canvas_width);
}, false);

canvas_2.addEventListener('click', function (event) {
    var rect = canvas_2.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var xy = Util.pixel_to_index(x, y, dim, canvas_width);
    console.log("x: " + xy[0] + " y: " + xy[1]);
    input_draw_2_state_2d = toggle_state(input_draw_2_state_2d, xy[0], xy[1]);
    console.log(input_draw_2_state_2d);
    draw_square_to_canvas(input_draw_2_state_2d, canvas_2, canvas_width);
}, false);

canvas_3.addEventListener('click', function (event) {
    var rect = canvas_3.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var xy = Util.pixel_to_index(x, y, dim, canvas_width);
    console.log("x: " + xy[0] + " y: " + xy[1]);
    input_draw_3_state_2d = toggle_state(input_draw_3_state_2d, xy[0], xy[1]);
    console.log(input_draw_3_state_2d);
    draw_square_to_canvas(input_draw_3_state_2d, canvas_3, canvas_width);
}, false);

canvas_res.addEventListener('click', function (event) {
    refresh_progress();
    var rect = canvas_res.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var xy = Util.pixel_to_index(x, y, dim, canvas_width);
    console.log("x: " + xy[0] + " y: " + xy[1]);
    input_draw_res_state_2d = toggle_state(input_draw_res_state_2d, xy[0], xy[1]);
    console.log(input_draw_res_state_2d);
    draw_square_to_canvas(input_draw_res_state_2d, canvas_res, canvas_width);
}, false);

reinit_input_draw_state_2d();
draw_square_to_canvas(input_draw_1_state_2d, canvas_1, canvas_width);
draw_square_to_canvas(input_draw_2_state_2d, canvas_2, canvas_width);
draw_square_to_canvas(input_draw_3_state_2d, canvas_3, canvas_width);
draw_square_to_canvas(input_draw_res_state_2d, canvas_res, canvas_width);

// // var the2d = to_2d(input_1d)
// var input_draw_1_state_1d = Util.to_1d(input_draw_1_state)

// // console.log(the1d)
// // draw_square_to_canvas(the2d, canvas)
// input_tensor.push(input_draw_1_state_1d)
// train(dim,input_tensor,pattern_track)
// var bat2d = to_2d(batman_pat_broken)
// draw_square_to_canvas(bat2d, canvas_weight)
// process()
// let inp = [[1,1,1]]
// let w=[
//     [0,0,0],
//     [1,1,1],
//     [0,0,0]
// ]
// update_node_tensor(0,0,w,inp,3);

},{"./util.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_random_int = get_random_int;
exports.to_1d = to_1d;
exports.get_random_int_min_max = get_random_int_min_max;
exports.to_2d = to_2d;
exports.pixel_to_index = pixel_to_index;
exports.generate_random_bipolar_vector = generate_random_bipolar_vector;
exports.add_noise_to_vector = add_noise_to_vector;
// UTILS ---
function get_random_int(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function to_1d(_input_2d) {
    var _dim = _input_2d.length;
    var out_1d = [];
    for (var x = 0; x < _dim; x += 1) {
        for (var y = 0; y < _dim; y += 1) {
            out_1d.push(_input_2d[x][y]);
        }
    }
    return out_1d;
}

function get_random_int_min_max(min, max) {
    return Math.random() * (max - min) + min;
}

function to_2d(_input_1d) {
    var _dim = Math.round(Math.sqrt(_input_1d.length));
    // console.log(_dim)
    if (_input_1d.length % _dim != 0) {
        throw "not square";
        alert("not square");
    }
    var out_2d = [];
    for (var y = 0; y < _dim; ++y) {
        var row = [];
        for (var x = 0; x < _dim; ++x) {
            row.push(_input_1d[y * _dim + x]);
        }
        out_2d.push(row);
    }
    return out_2d;
}

function pixel_to_index(x, y, dim, width) {
    console.log(x, y);
    var idim = width / dim;
    return [Math.floor(x / idim), Math.floor(y / idim)];
}

function generate_random_bipolar_vector(_num_unit) {
    var _bipolar_1d = [];
    for (var i = 0; i < _num_unit; ++i) {
        var rand_num = get_random_int_min_max(-10, 10);
        _bipolar_1d.push(Math.sign(rand_num));
    }
    return _bipolar_1d;
}

function add_noise_to_vector(_input_vector, percentage) {
    var max_value = Math.round(percentage * _input_vector.length);
    for (var i = 0; i < max_value; ++i) {
        var rand_int = get_random_int(_input_vector.length - 1);
        _input_vector[rand_int] *= -1.0;
    }
    return _input_vector;
}

},{}]},{},[1]);

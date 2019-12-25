// UTILS ---
export function get_random_int(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function to_1d(_input_2d){
    let _dim = _input_2d.length;
    var out_1d = []
    for (var x = 0; x < _dim; x+=1){
        for (var y = 0; y < _dim; y+=1){
            out_1d.push(_input_2d[x][y]);
        }
    }
    return out_1d;
}

export function get_random_int_min_max(min, max) {
    return Math.random() * (max - min) + min;
  }

export function to_2d(_input_1d){
    let _dim = Math.round(Math.sqrt(_input_1d.length))
    // console.log(_dim)
    if(_input_1d.length % _dim != 0){
        throw "not square";
        alert("not square");
    }
    var out_2d = []
    for (var y = 0; y < _dim; ++y){
        var row = [];
        for (var x = 0; x < _dim; ++x){
            row.push(_input_1d[y*_dim+x]);
        }
        out_2d.push(row);
    }
    return out_2d;
}

export function pixel_to_index(x,y,dim,width){
    console.log(x,y)
    let idim = width / dim;
    return [Math.floor(x/idim), Math.floor(y/idim)]
}

export function generate_random_bipolar_vector(_num_unit){
    let _bipolar_1d = []
    for(var i = 0; i < _num_unit; ++i){
        let rand_num = get_random_int_min_max(-10,10);
        _bipolar_1d.push(Math.sign(rand_num));
    }
    return _bipolar_1d
}

export function add_noise_to_vector(_input_vector, percentage){
    let max_value = Math.round(percentage * _input_vector.length);
    for(var i = 0; i < max_value; ++i){
        let rand_int = get_random_int(_input_vector.length - 1);
        _input_vector[rand_int] *= -1.0
    }
    return _input_vector
}
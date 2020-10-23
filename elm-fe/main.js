(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}




var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $author$project$Main$LinkClicked = function (a) {
	return {$: 'LinkClicked', a: a};
};
var $author$project$Main$UrlChanged = function (a) {
	return {$: 'UrlChanged', a: a};
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$CurrentlyInUS = {$: 'CurrentlyInUS'};
var $author$project$Main$Eligibility = {$: 'Eligibility'};
var $author$project$Main$Model = function (key) {
	return function (url) {
		return function (page) {
			return function (title) {
				return function (device) {
					return function (currentYear) {
						return function (state) {
							return function (focusedSection) {
								return function (focusedEntry) {
									return function (visitedElements) {
										return function (language) {
											return function (languageDict) {
												return function (debug) {
													return {currentYear: currentYear, debug: debug, device: device, focusedEntry: focusedEntry, focusedSection: focusedSection, key: key, language: language, languageDict: languageDict, page: page, state: state, title: title, url: url, visitedElements: visitedElements};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $mdgriffith$elm_ui$Element$BigDesktop = {$: 'BigDesktop'};
var $mdgriffith$elm_ui$Element$Desktop = {$: 'Desktop'};
var $mdgriffith$elm_ui$Element$Landscape = {$: 'Landscape'};
var $mdgriffith$elm_ui$Element$Phone = {$: 'Phone'};
var $mdgriffith$elm_ui$Element$Portrait = {$: 'Portrait'};
var $mdgriffith$elm_ui$Element$Tablet = {$: 'Tablet'};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $mdgriffith$elm_ui$Element$classifyDevice = function (window) {
	return {
		_class: function () {
			var shortSide = A2($elm$core$Basics$min, window.width, window.height);
			var longSide = A2($elm$core$Basics$max, window.width, window.height);
			return (shortSide < 600) ? $mdgriffith$elm_ui$Element$Phone : ((longSide <= 1200) ? $mdgriffith$elm_ui$Element$Tablet : (((longSide > 1200) && (longSide <= 1920)) ? $mdgriffith$elm_ui$Element$Desktop : $mdgriffith$elm_ui$Element$BigDesktop));
		}(),
		orientation: (_Utils_cmp(window.width, window.height) < 0) ? $mdgriffith$elm_ui$Element$Portrait : $mdgriffith$elm_ui$Element$Landscape
	};
};
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $author$project$Main$defaultGranularAddressWithDates = {cityOrTown: '', country: '', departmentProvinceOrState: '', fromDay: '', fromMonth: '', streetName: '', streetNumber: '', toDay: '', toMonth: ''};
var $author$project$Main$defaultAddressData = {lastAddressBeforeUS: $author$project$Main$defaultGranularAddressWithDates};
var $author$project$Main$defaultEligibilityData = {currentlyInUS: $elm$core$Maybe$Nothing, lessThanOneYear: $elm$core$Maybe$Nothing};
var $author$project$DataTypes$defaultMailingAddress = {apartmentNumber: '', areaCode: '', city: '', inCareOf: '', phoneNumber: '', state: '', streetName: '', streetNumber: '', zipCode: ''};
var $author$project$Main$defaultTravelEvent = {day: '', month: '', place: '', status: '', year: ''};
var $author$project$Main$defaultPersonalData = {aliases: _List_Nil, alienRegistrationNumber: '', cityOfBirth: '', countryOfBirth: '', currentAliasInput: '', currentEntryDay: '', currentEntryMonth: '', currentEntryPlace: '', currentEntryStatus: '', currentEntryYear: '', currentLanguagesInput: '', dayOfBirth: '', entryExpirationDay: '', entryExpirationMonth: '', entryExpirationYear: '', firstName: '', fluentInEnglish: $elm$core$Maybe$Nothing, gender: $elm$core$Maybe$Nothing, hasOtherTravelDoc: $elm$core$Maybe$Nothing, hasPassport: $elm$core$Maybe$Nothing, homeAddress: $author$project$DataTypes$defaultMailingAddress, homeMailingSame: $elm$core$Maybe$Nothing, i94Number: '', immigrationCourtHistory: $elm$core$Maybe$Nothing, lastLeftHomeCountryDay: '', lastLeftHomeCountryMonth: '', lastLeftHomeCountryYear: '', lastName: '', mailingAddress: $author$project$DataTypes$defaultMailingAddress, maritalStatus: $elm$core$Maybe$Nothing, middleName: '', monthOfBirth: '', mostRecentEntry: $author$project$Main$defaultTravelEvent, nationalityAtBirth: '', nativeLanguage: '', otherEntries: _List_Nil, otherLanguages: _List_Nil, presentNationality: '', raceEthnicOrTribalGroup: '', religion: '', socialSecurityNumber: '', travelDocCountry: '', travelDocExpirationDay: '', travelDocExpirationMonth: '', travelDocExpirationYear: '', travelDocNumber: '', uscisAccountNumber: '', yearOfBirth: ''};
var $author$project$Main$defaultSpouseData = {aliases: _List_Nil, alienRegistrationNumber: '', cityOfBirth: '', countryOfBirth: '', currentAliasInput: '', currentLocation: '', currentStatus: '', dayOfBirth: '', firstName: '', gender: $elm$core$Maybe$Nothing, i94Number: '', inImmigrationCourt: $elm$core$Maybe$Nothing, inUS: $elm$core$Maybe$Nothing, includedInApplication: $elm$core$Maybe$Nothing, lastEntryDay: '', lastEntryMonth: '', lastEntryPlace: '', lastEntryYear: '', lastName: '', marriageDay: '', marriageMonth: '', marriageYear: '', middleName: '', monthOfBirth: '', nationality: '', placeOfMarriage: '', previousEntryDay: '', previousEntryMonth: '', previousEntryYear: '', raceEthnicityOrTribalGroup: '', socialSecurityNumber: '', statusExpirationDay: '', statusExpirationMonth: '', statusExpirationYear: '', statusOnLastAdmission: '', travelDocNumber: '', yearOfBirth: ''};
var $author$project$Main$defaultFormState = {addresses: $author$project$Main$defaultAddressData, children: _List_Nil, eligibility: $author$project$Main$defaultEligibilityData, numberOfChildren: $elm$core$Maybe$Nothing, personal: $author$project$Main$defaultPersonalData, spouse: $author$project$Main$defaultSpouseData};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $author$project$I18n$languages = function (languageDict) {
	var _v0 = A2($elm$core$Dict$get, 'yes', languageDict);
	if (_v0.$ === 'Just') {
		var k = _v0.a;
		return $elm$core$Dict$keys(k);
	} else {
		return _List_Nil;
	}
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Main$SetDate = function (a) {
	return {$: 'SetDate', a: a};
};
var $justinmimbs$date$Date$RD = function (a) {
	return {$: 'RD', a: a};
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$neq = _Utils_notEqual;
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m.$) {
			case 'Jan':
				return 0;
			case 'Feb':
				return 31;
			case 'Mar':
				return 59 + leapDays;
			case 'Apr':
				return 90 + leapDays;
			case 'May':
				return 120 + leapDays;
			case 'Jun':
				return 151 + leapDays;
			case 'Jul':
				return 181 + leapDays;
			case 'Aug':
				return 212 + leapDays;
			case 'Sep':
				return 243 + leapDays;
			case 'Oct':
				return 273 + leapDays;
			case 'Nov':
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return $justinmimbs$date$Date$RD(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
				$elm$core$Basics$clamp,
				1,
				A2($justinmimbs$date$Date$daysInMonth, y, m),
				d));
	});
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_v0) {
			case 1:
				return $elm$time$Time$Jan;
			case 2:
				return $elm$time$Time$Feb;
			case 3:
				return $elm$time$Time$Mar;
			case 4:
				return $elm$time$Time$Apr;
			case 5:
				return $elm$time$Time$May;
			case 6:
				return $elm$time$Time$Jun;
			case 7:
				return $elm$time$Time$Jul;
			case 8:
				return $elm$time$Time$Aug;
			case 9:
				return $elm$time$Time$Sep;
			case 10:
				return $elm$time$Time$Oct;
			case 11:
				return $elm$time$Time$Nov;
			default:
				return $elm$time$Time$Dec;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var $justinmimbs$date$Date$fromPosix = F2(
	function (zone, posix) {
		return A3(
			$justinmimbs$date$Date$fromCalendarDate,
			A2($elm$time$Time$toYear, zone, posix),
			A2($elm$time$Time$toMonth, zone, posix),
			A2($elm$time$Time$toDay, zone, posix));
	});
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$here = _Time_here(_Utils_Tuple0);
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $justinmimbs$date$Date$today = A3($elm$core$Task$map2, $justinmimbs$date$Date$fromPosix, $elm$time$Time$here, $elm$time$Time$now);
var $author$project$Main$now = A2($elm$core$Task$perform, $author$project$Main$SetDate, $justinmimbs$date$Date$today);
var $author$project$Main$pageToTitle = function (page) {
	var title = function () {
		switch (page.$) {
			case 'Home':
				return 'DIY Asylum | US Asylum Application';
			case 'I589':
				return 'DIY Asylum | I-589 Form Completion App';
			case 'Error':
				return 'DIY Aslyum | 404 Error';
			case 'AboutUs':
				return 'DIY Asylum | About Us';
			default:
				return 'DIY Asylum | Contact Us';
		}
	}();
	return title;
};
var $author$project$Main$AboutUs = {$: 'AboutUs'};
var $author$project$Main$Contact = {$: 'Contact'};
var $author$project$Main$Error = {$: 'Error'};
var $author$project$Main$Home = {$: 'Home'};
var $author$project$Main$I589 = {$: 'I589'};
var $author$project$Main$pathMatch = function (path) {
	var page = function () {
		switch (path) {
			case '/':
				return $author$project$Main$Home;
			case '/src/Main.elm':
				return $author$project$Main$Home;
			case '/i589':
				return $author$project$Main$I589;
			case '/contact':
				return $author$project$Main$Contact;
			case '/about':
				return $author$project$Main$AboutUs;
			default:
				return $author$project$Main$Error;
		}
	}();
	return page;
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$init = F3(
	function (flags, url, key) {
		var page = $author$project$Main$pathMatch(url.path);
		var languageDict = function () {
			var _v0 = A2(
				$elm$json$Json$Decode$decodeValue,
				$elm$json$Json$Decode$dict(
					$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
				flags.languageDict);
			if (_v0.$ === 'Ok') {
				var x = _v0.a;
				return x;
			} else {
				return $elm$core$Dict$empty;
			}
		}();
		var lang = A2(
			$elm$core$List$member,
			flags.language,
			$author$project$I18n$languages(languageDict)) ? flags.language : 'en';
		return _Utils_Tuple2(
			$author$project$Main$Model(key)(url)(page)(
				$author$project$Main$pageToTitle(page))(
				$mdgriffith$elm_ui$Element$classifyDevice(flags))($elm$core$Maybe$Nothing)($author$project$Main$defaultFormState)($author$project$Main$Eligibility)($author$project$Main$CurrentlyInUS)(
				_List_fromArray(
					[$author$project$Main$CurrentlyInUS]))(lang)(languageDict)(true),
			$author$project$Main$now);
	});
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Main$DeviceClassified = function (a) {
	return {$: 'DeviceClassified', a: a};
};
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$Main$subscriptions = function (model) {
	return $elm$browser$Browser$Events$onResize(
		F2(
			function (width, height) {
				return $author$project$Main$DeviceClassified(
					$mdgriffith$elm_ui$Element$classifyDevice(
						{height: height, width: width}));
			}));
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $author$project$Main$defaultChildData = {alienRegistrationNumber: '', cityOfBirth: '', countryOfBirth: '', currentLocation: '', currentStatus: '', dayOfBirth: '', firstName: '', gender: $elm$core$Maybe$Nothing, i94Number: '', inImmigrationCourt: $elm$core$Maybe$Nothing, inUS: $elm$core$Maybe$Nothing, includedInApplication: $elm$core$Maybe$Nothing, lastEntryDay: '', lastEntryMonth: '', lastEntryPlace: '', lastEntryYear: '', lastName: '', maritalStatus: $elm$core$Maybe$Nothing, middleName: '', monthOfBirth: '', nationality: '', raceEthnicityOrTribalGroup: '', socialSecurityNumber: '', statusExpirationDay: '', statusExpirationMonth: '', statusExpirationYear: '', statusOnLastAdmission: '', travelDocNumber: '', yearOfBirth: ''};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Ports$description = _Platform_outgoingPort('description', $elm$json$Json$Encode$string);
var $author$project$Main$FinishDownload = function (a) {
	return {$: 'FinishDownload', a: a};
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$DataTypes$encodeAddressWithDates = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'streetName',
				$elm$json$Json$Encode$string(o.streetName)),
				_Utils_Tuple2(
				'streetNumber',
				$elm$json$Json$Encode$string(o.streetNumber)),
				_Utils_Tuple2(
				'cityOrTown',
				$elm$json$Json$Encode$string(o.cityOrTown)),
				_Utils_Tuple2(
				'departmentProvinceOrState',
				$elm$json$Json$Encode$string(o.departmentProvinceOrState)),
				_Utils_Tuple2(
				'country',
				$elm$json$Json$Encode$string(o.country)),
				_Utils_Tuple2(
				'fromDate',
				$elm$json$Json$Encode$string(o.fromDate)),
				_Utils_Tuple2(
				'toDate',
				$elm$json$Json$Encode$string(o.toDate))
			]));
};
var $author$project$DataTypes$encodeGender = function (o) {
	var encoding = function () {
		if (o.$ === 'MALE') {
			return $elm$json$Json$Encode$string('MALE');
		} else {
			return $elm$json$Json$Encode$string('FEMALE');
		}
	}();
	return encoding;
};
var $author$project$DataTypes$encodeImmigrationCourtHistory = function (o) {
	var encoding = function () {
		switch (o.$) {
			case 'NEVER':
				return $elm$json$Json$Encode$string('NEVER');
			case 'CURRENTLY':
				return $elm$json$Json$Encode$string('CURRENTLY');
			default:
				return $elm$json$Json$Encode$string('NOT_NOW_BUT_IN_THE_PAST');
		}
	}();
	return encoding;
};
var $author$project$DataTypes$encodeMailingAddress = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'inCareOf',
				$elm$json$Json$Encode$string(o.inCareOf)),
				_Utils_Tuple2(
				'streetName',
				$elm$json$Json$Encode$string(o.streetName)),
				_Utils_Tuple2(
				'streetNumber',
				$elm$json$Json$Encode$string(o.streetNumber)),
				_Utils_Tuple2(
				'apartmentNumber',
				$elm$json$Json$Encode$string(o.apartmentNumber)),
				_Utils_Tuple2(
				'city',
				$elm$json$Json$Encode$string(o.city)),
				_Utils_Tuple2(
				'state',
				$elm$json$Json$Encode$string(o.state)),
				_Utils_Tuple2(
				'zipCode',
				$elm$json$Json$Encode$string(o.zipCode)),
				_Utils_Tuple2(
				'areaCode',
				$elm$json$Json$Encode$string(o.areaCode)),
				_Utils_Tuple2(
				'phoneNumber',
				$elm$json$Json$Encode$string(o.phoneNumber))
			]));
};
var $author$project$DataTypes$encodeMaritalStatus = function (o) {
	var encoding = function () {
		switch (o.$) {
			case 'SINGLE':
				return $elm$json$Json$Encode$string('SINGLE');
			case 'MARRIED':
				return $elm$json$Json$Encode$string('MARRIED');
			case 'DIVORCED':
				return $elm$json$Json$Encode$string('DIVORCED');
			default:
				return $elm$json$Json$Encode$string('WIDOWED');
		}
	}();
	return encoding;
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $author$project$DataTypes$encodeApplicantInfo = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'lastName',
				$elm$json$Json$Encode$string(o.lastName)),
				_Utils_Tuple2(
				'firstName',
				$elm$json$Json$Encode$string(o.firstName)),
				_Utils_Tuple2(
				'middleName',
				$elm$json$Json$Encode$string(o.middleName)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, o.aliases)),
				_Utils_Tuple2(
				'usResidence',
				$author$project$DataTypes$encodeMailingAddress(o.usResidence)),
				_Utils_Tuple2(
				'usMailingAddress',
				$author$project$DataTypes$encodeMailingAddress(o.usMailingAddress)),
				_Utils_Tuple2(
				'gender',
				$author$project$DataTypes$encodeGender(o.gender)),
				_Utils_Tuple2(
				'maritalStatus',
				$author$project$DataTypes$encodeMaritalStatus(o.maritalStatus)),
				_Utils_Tuple2(
				'dateOfBirth',
				$elm$json$Json$Encode$string(o.dateOfBirth)),
				_Utils_Tuple2(
				'cityOfBirth',
				$elm$json$Json$Encode$string(o.cityOfBirth)),
				_Utils_Tuple2(
				'countryOfBirth',
				$elm$json$Json$Encode$string(o.countryOfBirth)),
				_Utils_Tuple2(
				'presentNationality',
				$elm$json$Json$Encode$string(o.presentNationality)),
				_Utils_Tuple2(
				'nationalityAtBirth',
				$elm$json$Json$Encode$string(o.nationalityAtBirth)),
				_Utils_Tuple2(
				'raceEthnicOrTribalGroup',
				$elm$json$Json$Encode$string(o.raceEthnicOrTribalGroup)),
				_Utils_Tuple2(
				'religion',
				$elm$json$Json$Encode$string(o.religion)),
				_Utils_Tuple2(
				'nativeLanguage',
				$elm$json$Json$Encode$string(o.nativeLanguage)),
				_Utils_Tuple2(
				'fluentInEnglish',
				$elm$json$Json$Encode$bool(o.fluentInEnglish)),
				_Utils_Tuple2(
				'otherLanguages',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, o.otherLanguages)),
				_Utils_Tuple2(
				'alsoApplyingConventionAgainstTorture',
				$elm$json$Json$Encode$bool(o.alsoApplyingConventionAgainstTorture)),
				_Utils_Tuple2(
				'alienRegistrationNumber',
				$elm$json$Json$Encode$string(o.alienRegistrationNumber)),
				_Utils_Tuple2(
				'socialSecurityNumber',
				$elm$json$Json$Encode$string(o.socialSecurityNumber)),
				_Utils_Tuple2(
				'uscisAccountNumber',
				$elm$json$Json$Encode$string(o.uscisAccountNumber)),
				_Utils_Tuple2(
				'immigrationCourtHistory',
				$author$project$DataTypes$encodeImmigrationCourtHistory(o.immigrationCourtHistory)),
				_Utils_Tuple2(
				'countryWhoLastIssuedPassport',
				$elm$json$Json$Encode$string(o.countryWhoLastIssuedPassport)),
				_Utils_Tuple2(
				'passportNumber',
				$elm$json$Json$Encode$string(o.passportNumber)),
				_Utils_Tuple2(
				'travelDocumentNumber',
				$elm$json$Json$Encode$string(o.travelDocumentNumber)),
				_Utils_Tuple2(
				'travelDocumentExpirationDate',
				$elm$json$Json$Encode$string(o.travelDocumentExpirationDate))
			]));
};
var $author$project$DataTypes$encodeChildInfo = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'lastName',
				$elm$json$Json$Encode$string(o.lastName)),
				_Utils_Tuple2(
				'firstName',
				$elm$json$Json$Encode$string(o.firstName)),
				_Utils_Tuple2(
				'middleName',
				$elm$json$Json$Encode$string(o.middleName)),
				_Utils_Tuple2(
				'dateOfBirth',
				$elm$json$Json$Encode$string(o.dateOfBirth)),
				_Utils_Tuple2(
				'alienRegistrationNumber',
				$elm$json$Json$Encode$string(o.alienRegistrationNumber)),
				_Utils_Tuple2(
				'socialSecurityNumber',
				$elm$json$Json$Encode$string(o.socialSecurityNumber)),
				_Utils_Tuple2(
				'passportNumber',
				$elm$json$Json$Encode$string(o.passportNumber)),
				_Utils_Tuple2(
				'maritalStatus',
				$author$project$DataTypes$encodeMaritalStatus(o.maritalStatus)),
				_Utils_Tuple2(
				'cityOfBirth',
				$elm$json$Json$Encode$string(o.cityOfBirth)),
				_Utils_Tuple2(
				'countryOfBirth',
				$elm$json$Json$Encode$string(o.countryOfBirth)),
				_Utils_Tuple2(
				'nationality',
				$elm$json$Json$Encode$string(o.nationality)),
				_Utils_Tuple2(
				'raceEthnicOrTribalGroup',
				$elm$json$Json$Encode$string(o.raceEthnicOrTribalGroup)),
				_Utils_Tuple2(
				'gender',
				$author$project$DataTypes$encodeGender(o.gender)),
				_Utils_Tuple2(
				'inUS',
				$elm$json$Json$Encode$bool(o.inUS)),
				_Utils_Tuple2(
				'location',
				$elm$json$Json$Encode$string(o.location)),
				_Utils_Tuple2(
				'placeOfLastEntry',
				$elm$json$Json$Encode$string(o.placeOfLastEntry)),
				_Utils_Tuple2(
				'dateOfLastEntry',
				$elm$json$Json$Encode$string(o.dateOfLastEntry)),
				_Utils_Tuple2(
				'i94Number',
				$elm$json$Json$Encode$string(o.i94Number)),
				_Utils_Tuple2(
				'immigrationStatusWhenLastAdmitted',
				$elm$json$Json$Encode$string(o.immigrationStatusWhenLastAdmitted)),
				_Utils_Tuple2(
				'currentImmigrationStatus',
				$elm$json$Json$Encode$string(o.currentImmigrationStatus)),
				_Utils_Tuple2(
				'statusExpirationDate',
				$elm$json$Json$Encode$string(o.statusExpirationDate)),
				_Utils_Tuple2(
				'isInImmigrationCourt',
				$elm$json$Json$Encode$bool(o.isInImmigrationCourt)),
				_Utils_Tuple2(
				'includeInApplication',
				$elm$json$Json$Encode$bool(o.includeInApplication))
			]));
};
var $author$project$DataTypes$encodeEmploymentInfo = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'employerName',
				$elm$json$Json$Encode$string(o.employerName)),
				_Utils_Tuple2(
				'employerAddress',
				$elm$json$Json$Encode$string(o.employerAddress)),
				_Utils_Tuple2(
				'applicantOccupation',
				$elm$json$Json$Encode$string(o.applicantOccupation)),
				_Utils_Tuple2(
				'fromDate',
				$elm$json$Json$Encode$string(o.fromDate)),
				_Utils_Tuple2(
				'toDate',
				$elm$json$Json$Encode$string(o.toDate))
			]));
};
var $author$project$DataTypes$encodeYesNoAnswer = function (o) {
	var encoding = function () {
		if (o.$ === 'YES') {
			return $elm$json$Json$Encode$string('YES');
		} else {
			return $elm$json$Json$Encode$string('NO');
		}
	}();
	return encoding;
};
var $author$project$DataTypes$encodeQuestionWithExplanation = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'yesNoAnswer',
				$author$project$DataTypes$encodeYesNoAnswer(o.yesNoAnswer)),
				_Utils_Tuple2(
				'explanation',
				$elm$json$Json$Encode$string(o.explanation))
			]));
};
var $author$project$DataTypes$encodeOrganizationInfo = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'associatedWithOrganizations',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.associatedWithOrganizations)),
				_Utils_Tuple2(
				'continueToParticipate',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.continueToParticipate))
			]));
};
var $author$project$DataTypes$encodeOtherCountryApplications = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'travelThroughOtherCountry',
				$author$project$DataTypes$encodeYesNoAnswer(o.travelThroughOtherCountry)),
				_Utils_Tuple2(
				'applyOtherCountry',
				$author$project$DataTypes$encodeYesNoAnswer(o.applyOtherCountry)),
				_Utils_Tuple2(
				'explanation',
				$elm$json$Json$Encode$string(o.explanation))
			]));
};
var $author$project$DataTypes$encodeRelative = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(o.name)),
				_Utils_Tuple2(
				'relationship',
				$elm$json$Json$Encode$string(o.relationship))
			]));
};
var $author$project$DataTypes$encodeRelativeHelpPrepare = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'didRelativeHelp',
				$author$project$DataTypes$encodeYesNoAnswer(o.didRelativeHelp)),
				_Utils_Tuple2(
				'firstRelative',
				$author$project$DataTypes$encodeRelative(o.firstRelative)),
				_Utils_Tuple2(
				'secondRelative',
				$author$project$DataTypes$encodeRelative(o.secondRelative))
			]));
};
var $author$project$DataTypes$encodeRelativeInfo = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'fullName',
				$elm$json$Json$Encode$string(o.fullName)),
				_Utils_Tuple2(
				'cityOrTownOfBirth',
				$elm$json$Json$Encode$string(o.cityOrTownOfBirth)),
				_Utils_Tuple2(
				'countryOfBirth',
				$elm$json$Json$Encode$string(o.countryOfBirth)),
				_Utils_Tuple2(
				'currentLocation',
				$elm$json$Json$Encode$string(o.currentLocation)),
				_Utils_Tuple2(
				'isDeceased',
				$elm$json$Json$Encode$bool(o.isDeceased))
			]));
};
var $author$project$DataTypes$encodeSchoolInfo = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'schoolName',
				$elm$json$Json$Encode$string(o.schoolName)),
				_Utils_Tuple2(
				'typeOfSchool',
				$elm$json$Json$Encode$string(o.typeOfSchool)),
				_Utils_Tuple2(
				'address',
				$elm$json$Json$Encode$string(o.address)),
				_Utils_Tuple2(
				'fromDate',
				$elm$json$Json$Encode$string(o.fromDate)),
				_Utils_Tuple2(
				'toDate',
				$elm$json$Json$Encode$string(o.toDate))
			]));
};
var $author$project$DataTypes$encodeSpouseInfo = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'lastName',
				$elm$json$Json$Encode$string(o.lastName)),
				_Utils_Tuple2(
				'firstName',
				$elm$json$Json$Encode$string(o.firstName)),
				_Utils_Tuple2(
				'middleName',
				$elm$json$Json$Encode$string(o.middleName)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, o.aliases)),
				_Utils_Tuple2(
				'dateOfBirth',
				$elm$json$Json$Encode$string(o.dateOfBirth)),
				_Utils_Tuple2(
				'alienRegistrationNumber',
				$elm$json$Json$Encode$string(o.alienRegistrationNumber)),
				_Utils_Tuple2(
				'socialSecurityNumber',
				$elm$json$Json$Encode$string(o.socialSecurityNumber)),
				_Utils_Tuple2(
				'passportNumber',
				$elm$json$Json$Encode$string(o.passportNumber)),
				_Utils_Tuple2(
				'dateOfMarriage',
				$elm$json$Json$Encode$string(o.dateOfMarriage)),
				_Utils_Tuple2(
				'placeOfMarriage',
				$elm$json$Json$Encode$string(o.placeOfMarriage)),
				_Utils_Tuple2(
				'cityOfBirth',
				$elm$json$Json$Encode$string(o.cityOfBirth)),
				_Utils_Tuple2(
				'countryOfBirth',
				$elm$json$Json$Encode$string(o.countryOfBirth)),
				_Utils_Tuple2(
				'nationality',
				$elm$json$Json$Encode$string(o.nationality)),
				_Utils_Tuple2(
				'raceEthnicOrTribalGroup',
				$elm$json$Json$Encode$string(o.raceEthnicOrTribalGroup)),
				_Utils_Tuple2(
				'gender',
				$author$project$DataTypes$encodeGender(o.gender)),
				_Utils_Tuple2(
				'inUS',
				$elm$json$Json$Encode$bool(o.inUS)),
				_Utils_Tuple2(
				'locationInUS',
				$elm$json$Json$Encode$string(o.locationInUS)),
				_Utils_Tuple2(
				'placeOfLastEntry',
				$elm$json$Json$Encode$string(o.placeOfLastEntry)),
				_Utils_Tuple2(
				'dateOfLastEntry',
				$elm$json$Json$Encode$string(o.dateOfLastEntry)),
				_Utils_Tuple2(
				'i94Number',
				$elm$json$Json$Encode$string(o.i94Number)),
				_Utils_Tuple2(
				'immigrationStatusWhenLastAdmitted',
				$elm$json$Json$Encode$string(o.immigrationStatusWhenLastAdmitted)),
				_Utils_Tuple2(
				'currentImmigrationStatus',
				$elm$json$Json$Encode$string(o.currentImmigrationStatus)),
				_Utils_Tuple2(
				'statusExpirationDate',
				$elm$json$Json$Encode$string(o.statusExpirationDate)),
				_Utils_Tuple2(
				'isInImmigrationCourt',
				$elm$json$Json$Encode$bool(o.isInImmigrationCourt)),
				_Utils_Tuple2(
				'previousArrivalDate',
				$elm$json$Json$Encode$string(o.previousArrivalDate)),
				_Utils_Tuple2(
				'includeInApplication',
				$elm$json$Json$Encode$bool(o.includeInApplication))
			]));
};
var $author$project$DataTypes$encodeUSTravelEvent = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'date',
				$elm$json$Json$Encode$string(o.date)),
				_Utils_Tuple2(
				'place',
				$elm$json$Json$Encode$string(o.place)),
				_Utils_Tuple2(
				'status',
				$elm$json$Json$Encode$string(o.status))
			]));
};
var $author$project$DataTypes$encodeUSTravelHistory = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'travelEvents',
				A2($elm$json$Json$Encode$list, $author$project$DataTypes$encodeUSTravelEvent, o.travelEvents)),
				_Utils_Tuple2(
				'lastLeftHomeCountry',
				$elm$json$Json$Encode$string(o.lastLeftHomeCountry)),
				_Utils_Tuple2(
				'i94Number',
				$elm$json$Json$Encode$string(o.i94Number)),
				_Utils_Tuple2(
				'dateStatusExpires',
				$elm$json$Json$Encode$string(o.dateStatusExpires))
			]));
};
var $author$project$DataTypes$encodeWhyApplying = function (o) {
	var encoding = function () {
		switch (o.$) {
			case 'RACE':
				return $elm$json$Json$Encode$string('RACE');
			case 'RELIGION':
				return $elm$json$Json$Encode$string('RELIGION');
			case 'NATIONALITY':
				return $elm$json$Json$Encode$string('NATIONALITY');
			case 'POLITICAL_OPINION':
				return $elm$json$Json$Encode$string('POLITICAL_OPINION');
			case 'MEMBERSHIP_IN_SOCIAL_GROUP':
				return $elm$json$Json$Encode$string('MEMBERSHIP_IN_SOCIAL_GROUP');
			default:
				return $elm$json$Json$Encode$string('TORTURE_CONVENTION');
		}
	}();
	return encoding;
};
var $author$project$DataTypes$encode = function (o) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'applicantInfo',
				$author$project$DataTypes$encodeApplicantInfo(o.applicantInfo)),
				_Utils_Tuple2(
				'usTravelHistory',
				$author$project$DataTypes$encodeUSTravelHistory(o.usTravelHistory)),
				_Utils_Tuple2(
				'isMarried',
				$elm$json$Json$Encode$bool(o.isMarried)),
				_Utils_Tuple2(
				'spouseInfo',
				$author$project$DataTypes$encodeSpouseInfo(o.spouseInfo)),
				_Utils_Tuple2(
				'childInfo',
				A2($elm$json$Json$Encode$list, $author$project$DataTypes$encodeChildInfo, o.childInfo)),
				_Utils_Tuple2(
				'lastAddressBeforeUS',
				$author$project$DataTypes$encodeAddressWithDates(o.lastAddressBeforeUS)),
				_Utils_Tuple2(
				'lastAddressPersecuted',
				$author$project$DataTypes$encodeAddressWithDates(o.lastAddressPersecuted)),
				_Utils_Tuple2(
				'residencesInLastFiveYears',
				A2($elm$json$Json$Encode$list, $author$project$DataTypes$encodeAddressWithDates, o.residencesInLastFiveYears)),
				_Utils_Tuple2(
				'educationInfo',
				A2($elm$json$Json$Encode$list, $author$project$DataTypes$encodeSchoolInfo, o.educationInfo)),
				_Utils_Tuple2(
				'employmentInfo',
				A2($elm$json$Json$Encode$list, $author$project$DataTypes$encodeEmploymentInfo, o.employmentInfo)),
				_Utils_Tuple2(
				'motherInfo',
				$author$project$DataTypes$encodeRelativeInfo(o.motherInfo)),
				_Utils_Tuple2(
				'fatherInfo',
				$author$project$DataTypes$encodeRelativeInfo(o.fatherInfo)),
				_Utils_Tuple2(
				'siblingInfo',
				A2($elm$json$Json$Encode$list, $author$project$DataTypes$encodeRelativeInfo, o.siblingInfo)),
				_Utils_Tuple2(
				'whyApplying',
				A2($elm$json$Json$Encode$list, $author$project$DataTypes$encodeWhyApplying, o.whyApplying)),
				_Utils_Tuple2(
				'experiencedHarm',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.experiencedHarm)),
				_Utils_Tuple2(
				'fearsHarm',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.fearsHarm)),
				_Utils_Tuple2(
				'arrestedInOtherCountry',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.arrestedInOtherCountry)),
				_Utils_Tuple2(
				'organizationInfo',
				$author$project$DataTypes$encodeOrganizationInfo(o.organizationInfo)),
				_Utils_Tuple2(
				'afraidOfTorture',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.afraidOfTorture)),
				_Utils_Tuple2(
				'relativeAppliedForAsylum',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.relativeAppliedForAsylum)),
				_Utils_Tuple2(
				'otherCountryApplications',
				$author$project$DataTypes$encodeOtherCountryApplications(o.otherCountryApplications)),
				_Utils_Tuple2(
				'causedHarm',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.causedHarm)),
				_Utils_Tuple2(
				'returnCountry',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.returnCountry)),
				_Utils_Tuple2(
				'applyAfterOneYear',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.applyAfterOneYear)),
				_Utils_Tuple2(
				'crimeInUS',
				$author$project$DataTypes$encodeQuestionWithExplanation(o.crimeInUS)),
				_Utils_Tuple2(
				'relativeHelpPrepare',
				$author$project$DataTypes$encodeRelativeHelpPrepare(o.relativeHelpPrepare))
			]));
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $author$project$Main$parseBytes = function (response) {
	switch (response.$) {
		case 'BadUrl_':
			var url = response.a;
			return $elm$core$Result$Err(
				$elm$http$Http$BadUrl(url));
		case 'Timeout_':
			return $elm$core$Result$Err($elm$http$Http$Timeout);
		case 'NetworkError_':
			return $elm$core$Result$Err($elm$http$Http$NetworkError);
		case 'BadStatus_':
			var metadata = response.a;
			var body = response.b;
			return $elm$core$Result$Err(
				$elm$http$Http$BadStatus(metadata.statusCode));
		default:
			var metadata = response.a;
			var body = response.b;
			return $elm$core$Result$Ok(body);
	}
};
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{body: r.body, expect: r.expect, headers: _List_Nil, method: 'POST', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$Main$downloadFilledForm = function (data) {
	return $elm$http$Http$post(
		{
			body: $elm$http$Http$jsonBody(
				$author$project$DataTypes$encode(data)),
			expect: A2($elm$http$Http$expectBytesResponse, $author$project$Main$FinishDownload, $author$project$Main$parseBytes),
			url: 'http://localhost:12345/fill-i589'
		});
};
var $author$project$Main$Aliases = {$: 'Aliases'};
var $author$project$Main$AlienRegistration = {$: 'AlienRegistration'};
var $author$project$Main$BirthInfo = {$: 'BirthInfo'};
var $author$project$Main$ChildAlienRegistration = function (a) {
	return {$: 'ChildAlienRegistration', a: a};
};
var $author$project$Main$ChildBirth = function (a) {
	return {$: 'ChildBirth', a: a};
};
var $author$project$Main$ChildCurrentStatus = function (a) {
	return {$: 'ChildCurrentStatus', a: a};
};
var $author$project$Main$ChildGender = function (a) {
	return {$: 'ChildGender', a: a};
};
var $author$project$Main$ChildI94 = function (a) {
	return {$: 'ChildI94', a: a};
};
var $author$project$Main$ChildImmigrationCourt = function (a) {
	return {$: 'ChildImmigrationCourt', a: a};
};
var $author$project$Main$ChildInUS = function (a) {
	return {$: 'ChildInUS', a: a};
};
var $author$project$Main$ChildIncluded = function (a) {
	return {$: 'ChildIncluded', a: a};
};
var $author$project$Main$ChildLastEntry = function (a) {
	return {$: 'ChildLastEntry', a: a};
};
var $author$project$Main$ChildLocation = function (a) {
	return {$: 'ChildLocation', a: a};
};
var $author$project$Main$ChildMaritalStatus = function (a) {
	return {$: 'ChildMaritalStatus', a: a};
};
var $author$project$Main$ChildName = function (a) {
	return {$: 'ChildName', a: a};
};
var $author$project$Main$ChildNationality = function (a) {
	return {$: 'ChildNationality', a: a};
};
var $author$project$Main$ChildRaceEthnicity = function (a) {
	return {$: 'ChildRaceEthnicity', a: a};
};
var $author$project$Main$ChildSSN = function (a) {
	return {$: 'ChildSSN', a: a};
};
var $author$project$Main$ChildTravelDoc = function (a) {
	return {$: 'ChildTravelDoc', a: a};
};
var $author$project$Main$EnterGender = {$: 'EnterGender'};
var $author$project$Main$EnterMailingAddress = {$: 'EnterMailingAddress'};
var $author$project$Main$EnterMaritalStatus = {$: 'EnterMaritalStatus'};
var $author$project$Main$FluentInEnglish = {$: 'FluentInEnglish'};
var $author$project$Main$HasOtherTravelDoc = {$: 'HasOtherTravelDoc'};
var $author$project$Main$HasPassport = {$: 'HasPassport'};
var $author$project$Main$HomeAddress = {$: 'HomeAddress'};
var $author$project$Main$HomeMailingSame = {$: 'HomeMailingSame'};
var $author$project$Main$I94 = {$: 'I94'};
var $author$project$Main$ImmigrationCourtHistoryEntry = {$: 'ImmigrationCourtHistoryEntry'};
var $author$project$Main$InUSLessThanOneYear = {$: 'InUSLessThanOneYear'};
var $author$project$Main$LeftHomeCountry = {$: 'LeftHomeCountry'};
var $author$project$DataTypes$MARRIED = {$: 'MARRIED'};
var $author$project$Main$MarriageInfo = {$: 'MarriageInfo'};
var $author$project$Main$MostRecentEntry = {$: 'MostRecentEntry'};
var $author$project$Main$MostRecentEntryExpiration = {$: 'MostRecentEntryExpiration'};
var $author$project$Main$Name = {$: 'Name'};
var $author$project$Main$NationalityAtBirth = {$: 'NationalityAtBirth'};
var $author$project$Main$NativeLanguage = {$: 'NativeLanguage'};
var $author$project$Main$NumberOfChildren = {$: 'NumberOfChildren'};
var $author$project$Main$OtherEntries = {$: 'OtherEntries'};
var $author$project$Main$OtherLanguages = {$: 'OtherLanguages'};
var $author$project$Main$PresentNationality = {$: 'PresentNationality'};
var $author$project$Main$RaceEthnicity = {$: 'RaceEthnicity'};
var $author$project$Main$Religion = {$: 'Religion'};
var $author$project$Main$SSN = {$: 'SSN'};
var $author$project$Main$SpouseAliases = {$: 'SpouseAliases'};
var $author$project$Main$SpouseAlienRegistration = {$: 'SpouseAlienRegistration'};
var $author$project$Main$SpouseBirth = {$: 'SpouseBirth'};
var $author$project$Main$SpouseCurrentStatus = {$: 'SpouseCurrentStatus'};
var $author$project$Main$SpouseGender = {$: 'SpouseGender'};
var $author$project$Main$SpouseI94 = {$: 'SpouseI94'};
var $author$project$Main$SpouseImmigrationCourt = {$: 'SpouseImmigrationCourt'};
var $author$project$Main$SpouseInUS = {$: 'SpouseInUS'};
var $author$project$Main$SpouseIncluded = {$: 'SpouseIncluded'};
var $author$project$Main$SpouseLastEntry = {$: 'SpouseLastEntry'};
var $author$project$Main$SpouseLocation = {$: 'SpouseLocation'};
var $author$project$Main$SpouseName = {$: 'SpouseName'};
var $author$project$Main$SpouseNationality = {$: 'SpouseNationality'};
var $author$project$Main$SpousePreviousArrival = {$: 'SpousePreviousArrival'};
var $author$project$Main$SpouseRaceEthnicity = {$: 'SpouseRaceEthnicity'};
var $author$project$Main$SpouseSSN = {$: 'SpouseSSN'};
var $author$project$Main$SpouseTravelDoc = {$: 'SpouseTravelDoc'};
var $author$project$Main$TravelDocCountry = {$: 'TravelDocCountry'};
var $author$project$Main$TravelDocExpiration = {$: 'TravelDocExpiration'};
var $author$project$Main$TravelDocNumber = {$: 'TravelDocNumber'};
var $author$project$Main$USCISAccount = {$: 'USCISAccount'};
var $author$project$Main$getBack = F2(
	function (entry, model) {
		switch (entry.$) {
			case 'CurrentlyInUS':
				return $author$project$Main$CurrentlyInUS;
			case 'InUSLessThanOneYear':
				return $author$project$Main$CurrentlyInUS;
			case 'NotEligible':
				var _v1 = model.state.eligibility.currentlyInUS;
				if ((_v1.$ === 'Just') && _v1.a) {
					return $author$project$Main$InUSLessThanOneYear;
				} else {
					return $author$project$Main$CurrentlyInUS;
				}
			case 'Name':
				return $author$project$Main$InUSLessThanOneYear;
			case 'Aliases':
				return $author$project$Main$Name;
			case 'HomeAddress':
				return $author$project$Main$Aliases;
			case 'HomeMailingSame':
				return $author$project$Main$HomeAddress;
			case 'EnterMailingAddress':
				return $author$project$Main$HomeMailingSame;
			case 'EnterGender':
				var _v2 = model.state.personal.homeMailingSame;
				if ((_v2.$ === 'Just') && _v2.a) {
					return $author$project$Main$HomeMailingSame;
				} else {
					return $author$project$Main$EnterMailingAddress;
				}
			case 'EnterMaritalStatus':
				return $author$project$Main$EnterGender;
			case 'BirthInfo':
				return $author$project$Main$EnterMaritalStatus;
			case 'PresentNationality':
				return $author$project$Main$BirthInfo;
			case 'NationalityAtBirth':
				return $author$project$Main$PresentNationality;
			case 'RaceEthnicity':
				return $author$project$Main$NationalityAtBirth;
			case 'Religion':
				return $author$project$Main$RaceEthnicity;
			case 'NativeLanguage':
				return $author$project$Main$Religion;
			case 'FluentInEnglish':
				return $author$project$Main$NativeLanguage;
			case 'OtherLanguages':
				return $author$project$Main$FluentInEnglish;
			case 'ImmigrationCourtHistoryEntry':
				return $author$project$Main$OtherLanguages;
			case 'I94':
				return $author$project$Main$ImmigrationCourtHistoryEntry;
			case 'AlienRegistration':
				return $author$project$Main$I94;
			case 'SSN':
				return $author$project$Main$AlienRegistration;
			case 'USCISAccount':
				return $author$project$Main$SSN;
			case 'LeftHomeCountry':
				return $author$project$Main$USCISAccount;
			case 'MostRecentEntry':
				return $author$project$Main$LeftHomeCountry;
			case 'MostRecentEntryExpiration':
				return $author$project$Main$MostRecentEntry;
			case 'OtherEntries':
				return $author$project$Main$MostRecentEntryExpiration;
			case 'HasPassport':
				return $author$project$Main$OtherEntries;
			case 'HasOtherTravelDoc':
				return $author$project$Main$HasPassport;
			case 'TravelDocCountry':
				return _Utils_eq(
					model.state.personal.hasPassport,
					$elm$core$Maybe$Just(true)) ? $author$project$Main$HasPassport : $author$project$Main$HasOtherTravelDoc;
			case 'TravelDocNumber':
				return $author$project$Main$TravelDocCountry;
			case 'TravelDocExpiration':
				return $author$project$Main$TravelDocNumber;
			case 'SpouseName':
				return (_Utils_eq(
					model.state.personal.hasPassport,
					$elm$core$Maybe$Just(false)) && _Utils_eq(
					model.state.personal.hasOtherTravelDoc,
					$elm$core$Maybe$Just(false))) ? $author$project$Main$HasOtherTravelDoc : $author$project$Main$TravelDocExpiration;
			case 'SpouseAliases':
				return $author$project$Main$SpouseName;
			case 'SpouseBirth':
				return $author$project$Main$SpouseAliases;
			case 'SpouseNationality':
				return $author$project$Main$SpouseBirth;
			case 'SpouseGender':
				return $author$project$Main$SpouseNationality;
			case 'SpouseRaceEthnicity':
				return $author$project$Main$SpouseGender;
			case 'SpouseAlienRegistration':
				return $author$project$Main$SpouseRaceEthnicity;
			case 'SpouseTravelDoc':
				return $author$project$Main$SpouseAlienRegistration;
			case 'SpouseSSN':
				return $author$project$Main$SpouseTravelDoc;
			case 'MarriageInfo':
				return $author$project$Main$SpouseSSN;
			case 'SpouseInUS':
				return $author$project$Main$MarriageInfo;
			case 'SpouseLocation':
				return $author$project$Main$SpouseInUS;
			case 'SpouseLastEntry':
				return $author$project$Main$SpouseInUS;
			case 'SpouseI94':
				return $author$project$Main$SpouseLastEntry;
			case 'SpouseCurrentStatus':
				return $author$project$Main$SpouseI94;
			case 'SpousePreviousArrival':
				return $author$project$Main$SpouseCurrentStatus;
			case 'SpouseImmigrationCourt':
				return $author$project$Main$SpousePreviousArrival;
			case 'SpouseIncluded':
				return $author$project$Main$SpouseImmigrationCourt;
			case 'NumberOfChildren':
				return _Utils_eq(
					model.state.personal.maritalStatus,
					$elm$core$Maybe$Just($author$project$DataTypes$MARRIED)) ? (_Utils_eq(
					model.state.spouse.inUS,
					$elm$core$Maybe$Just(false)) ? $author$project$Main$SpouseLocation : $author$project$Main$SpouseIncluded) : $author$project$Main$TravelDocExpiration;
			case 'ChildName':
				var n = entry.a;
				return (n <= 1) ? $author$project$Main$NumberOfChildren : $author$project$Main$ChildBirth(n - 1);
			case 'ChildBirth':
				var n = entry.a;
				return $author$project$Main$ChildName(n);
			case 'ChildNationality':
				var n = entry.a;
				return $author$project$Main$ChildBirth(n);
			case 'ChildGender':
				var n = entry.a;
				return $author$project$Main$ChildNationality(n);
			case 'ChildRaceEthnicity':
				var n = entry.a;
				return $author$project$Main$ChildGender(n);
			case 'ChildMaritalStatus':
				var n = entry.a;
				return $author$project$Main$ChildRaceEthnicity(n);
			case 'ChildAlienRegistration':
				var n = entry.a;
				return $author$project$Main$ChildMaritalStatus(n);
			case 'ChildTravelDoc':
				var n = entry.a;
				return $author$project$Main$ChildAlienRegistration(n);
			case 'ChildSSN':
				var n = entry.a;
				return $author$project$Main$ChildTravelDoc(n);
			case 'ChildInUS':
				var n = entry.a;
				return $author$project$Main$ChildSSN(n);
			case 'ChildLocation':
				var n = entry.a;
				return $author$project$Main$ChildInUS(n);
			case 'ChildLastEntry':
				var n = entry.a;
				return $author$project$Main$ChildLocation(n);
			case 'ChildI94':
				var n = entry.a;
				return $author$project$Main$ChildLastEntry(n);
			case 'ChildCurrentStatus':
				var n = entry.a;
				return $author$project$Main$ChildI94(n);
			case 'ChildImmigrationCourt':
				var n = entry.a;
				return $author$project$Main$ChildCurrentStatus(n);
			case 'ChildIncluded':
				var n = entry.a;
				return $author$project$Main$ChildImmigrationCourt(n);
			default:
				var _v3 = model.state.numberOfChildren;
				if (_v3.$ === 'Just') {
					var n = _v3.a;
					return (n > 0) ? $author$project$Main$ChildIncluded(n) : $author$project$Main$NumberOfChildren;
				} else {
					return $author$project$Main$NumberOfChildren;
				}
		}
	});
var $author$project$Main$LastAddressBeforeUS = {$: 'LastAddressBeforeUS'};
var $author$project$Main$NotEligible = {$: 'NotEligible'};
var $elm$core$Basics$not = _Basics_not;
var $author$project$Main$getNext = F2(
	function (entry, model) {
		switch (entry.$) {
			case 'CurrentlyInUS':
				if (!model.debug) {
					var _v1 = model.state.eligibility.currentlyInUS;
					if (_v1.$ === 'Just') {
						if (!_v1.a) {
							return $author$project$Main$NotEligible;
						} else {
							return $author$project$Main$InUSLessThanOneYear;
						}
					} else {
						return $author$project$Main$CurrentlyInUS;
					}
				} else {
					return $author$project$Main$InUSLessThanOneYear;
				}
			case 'InUSLessThanOneYear':
				if (!model.debug) {
					var _v2 = model.state.eligibility.lessThanOneYear;
					if (_v2.$ === 'Just') {
						if (_v2.a) {
							return $author$project$Main$Name;
						} else {
							return $author$project$Main$NotEligible;
						}
					} else {
						return $author$project$Main$InUSLessThanOneYear;
					}
				} else {
					return $author$project$Main$Name;
				}
			case 'NotEligible':
				return $author$project$Main$NotEligible;
			case 'Name':
				return $author$project$Main$Aliases;
			case 'Aliases':
				return $author$project$Main$HomeAddress;
			case 'HomeAddress':
				return $author$project$Main$HomeMailingSame;
			case 'HomeMailingSame':
				var _v3 = model.state.personal.homeMailingSame;
				if ((_v3.$ === 'Just') && _v3.a) {
					return $author$project$Main$EnterGender;
				} else {
					return $author$project$Main$EnterMailingAddress;
				}
			case 'EnterMailingAddress':
				return $author$project$Main$EnterGender;
			case 'EnterGender':
				return $author$project$Main$EnterMaritalStatus;
			case 'EnterMaritalStatus':
				return $author$project$Main$BirthInfo;
			case 'BirthInfo':
				return $author$project$Main$PresentNationality;
			case 'PresentNationality':
				return $author$project$Main$NationalityAtBirth;
			case 'NationalityAtBirth':
				return $author$project$Main$RaceEthnicity;
			case 'RaceEthnicity':
				return $author$project$Main$Religion;
			case 'Religion':
				return $author$project$Main$NativeLanguage;
			case 'NativeLanguage':
				return $author$project$Main$FluentInEnglish;
			case 'FluentInEnglish':
				return $author$project$Main$OtherLanguages;
			case 'OtherLanguages':
				return $author$project$Main$ImmigrationCourtHistoryEntry;
			case 'ImmigrationCourtHistoryEntry':
				return $author$project$Main$I94;
			case 'I94':
				return $author$project$Main$AlienRegistration;
			case 'AlienRegistration':
				return $author$project$Main$SSN;
			case 'SSN':
				return $author$project$Main$USCISAccount;
			case 'USCISAccount':
				return $author$project$Main$LeftHomeCountry;
			case 'LeftHomeCountry':
				return $author$project$Main$MostRecentEntry;
			case 'MostRecentEntry':
				return $author$project$Main$MostRecentEntryExpiration;
			case 'MostRecentEntryExpiration':
				return $author$project$Main$OtherEntries;
			case 'OtherEntries':
				return $author$project$Main$HasPassport;
			case 'HasPassport':
				return _Utils_eq(
					model.state.personal.hasPassport,
					$elm$core$Maybe$Just(true)) ? $author$project$Main$TravelDocCountry : $author$project$Main$HasOtherTravelDoc;
			case 'HasOtherTravelDoc':
				return _Utils_eq(
					model.state.personal.hasOtherTravelDoc,
					$elm$core$Maybe$Just(true)) ? $author$project$Main$TravelDocCountry : (_Utils_eq(
					model.state.personal.maritalStatus,
					$elm$core$Maybe$Just($author$project$DataTypes$MARRIED)) ? $author$project$Main$SpouseName : $author$project$Main$NumberOfChildren);
			case 'TravelDocCountry':
				return $author$project$Main$TravelDocNumber;
			case 'TravelDocNumber':
				return $author$project$Main$TravelDocExpiration;
			case 'TravelDocExpiration':
				return _Utils_eq(
					model.state.personal.maritalStatus,
					$elm$core$Maybe$Just($author$project$DataTypes$MARRIED)) ? $author$project$Main$SpouseName : $author$project$Main$NumberOfChildren;
			case 'SpouseName':
				return $author$project$Main$SpouseAliases;
			case 'SpouseAliases':
				return $author$project$Main$SpouseBirth;
			case 'SpouseBirth':
				return $author$project$Main$SpouseNationality;
			case 'SpouseNationality':
				return $author$project$Main$SpouseGender;
			case 'SpouseGender':
				return $author$project$Main$SpouseRaceEthnicity;
			case 'SpouseRaceEthnicity':
				return $author$project$Main$SpouseAlienRegistration;
			case 'SpouseAlienRegistration':
				return $author$project$Main$SpouseTravelDoc;
			case 'SpouseTravelDoc':
				return $author$project$Main$SpouseSSN;
			case 'SpouseSSN':
				return $author$project$Main$MarriageInfo;
			case 'MarriageInfo':
				return $author$project$Main$SpouseInUS;
			case 'SpouseInUS':
				return _Utils_eq(
					model.state.spouse.inUS,
					$elm$core$Maybe$Just(false)) ? $author$project$Main$SpouseLocation : $author$project$Main$SpouseLastEntry;
			case 'SpouseLocation':
				return $author$project$Main$NumberOfChildren;
			case 'SpouseLastEntry':
				return $author$project$Main$SpouseI94;
			case 'SpouseI94':
				return $author$project$Main$SpouseCurrentStatus;
			case 'SpouseCurrentStatus':
				return $author$project$Main$SpousePreviousArrival;
			case 'SpousePreviousArrival':
				return $author$project$Main$SpouseImmigrationCourt;
			case 'SpouseImmigrationCourt':
				return $author$project$Main$SpouseIncluded;
			case 'SpouseIncluded':
				return $author$project$Main$NumberOfChildren;
			case 'NumberOfChildren':
				var _v4 = model.state.numberOfChildren;
				if (_v4.$ === 'Just') {
					var n = _v4.a;
					return (n > 0) ? $author$project$Main$ChildName(1) : $author$project$Main$LastAddressBeforeUS;
				} else {
					return $author$project$Main$LastAddressBeforeUS;
				}
			case 'ChildName':
				var n = entry.a;
				return $author$project$Main$ChildBirth(n);
			case 'ChildBirth':
				var n = entry.a;
				return $author$project$Main$ChildNationality(n);
			case 'ChildNationality':
				var n = entry.a;
				return $author$project$Main$ChildGender(n);
			case 'ChildGender':
				var n = entry.a;
				return $author$project$Main$ChildRaceEthnicity(n);
			case 'ChildRaceEthnicity':
				var n = entry.a;
				return $author$project$Main$ChildMaritalStatus(n);
			case 'ChildMaritalStatus':
				var n = entry.a;
				return $author$project$Main$ChildAlienRegistration(n);
			case 'ChildAlienRegistration':
				var n = entry.a;
				return $author$project$Main$ChildTravelDoc(n);
			case 'ChildTravelDoc':
				var n = entry.a;
				return $author$project$Main$ChildSSN(n);
			case 'ChildSSN':
				var n = entry.a;
				return $author$project$Main$ChildInUS(n);
			case 'ChildInUS':
				var n = entry.a;
				return $author$project$Main$ChildLocation(n);
			case 'ChildLocation':
				var n = entry.a;
				return $author$project$Main$ChildLastEntry(n);
			case 'ChildLastEntry':
				var n = entry.a;
				return $author$project$Main$ChildI94(n);
			case 'ChildI94':
				var n = entry.a;
				return $author$project$Main$ChildCurrentStatus(n);
			case 'ChildCurrentStatus':
				var n = entry.a;
				return $author$project$Main$ChildImmigrationCourt(n);
			case 'ChildImmigrationCourt':
				var n = entry.a;
				return $author$project$Main$ChildIncluded(n);
			case 'ChildIncluded':
				var n = entry.a;
				var _v5 = model.state.numberOfChildren;
				if (_v5.$ === 'Just') {
					var numChildren = _v5.a;
					return (_Utils_cmp(numChildren, n) > 0) ? $author$project$Main$ChildName(n + 1) : $author$project$Main$LastAddressBeforeUS;
				} else {
					return $author$project$Main$LastAddressBeforeUS;
				}
			default:
				return $author$project$Main$LastAddressBeforeUS;
		}
	});
var $author$project$Main$AddressInfo = {$: 'AddressInfo'};
var $author$project$Main$ChildInfo = function (a) {
	return {$: 'ChildInfo', a: a};
};
var $author$project$Main$ImmigrationInfo = {$: 'ImmigrationInfo'};
var $author$project$Main$PersonalInfo = {$: 'PersonalInfo'};
var $author$project$Main$SpouseInfo = {$: 'SpouseInfo'};
var $author$project$Main$getSectionFromElement = function (element) {
	switch (element.$) {
		case 'CurrentlyInUS':
			return $author$project$Main$Eligibility;
		case 'InUSLessThanOneYear':
			return $author$project$Main$Eligibility;
		case 'NotEligible':
			return $author$project$Main$Eligibility;
		case 'Name':
			return $author$project$Main$PersonalInfo;
		case 'Aliases':
			return $author$project$Main$PersonalInfo;
		case 'HomeAddress':
			return $author$project$Main$PersonalInfo;
		case 'HomeMailingSame':
			return $author$project$Main$PersonalInfo;
		case 'EnterMailingAddress':
			return $author$project$Main$PersonalInfo;
		case 'EnterGender':
			return $author$project$Main$PersonalInfo;
		case 'EnterMaritalStatus':
			return $author$project$Main$PersonalInfo;
		case 'BirthInfo':
			return $author$project$Main$PersonalInfo;
		case 'PresentNationality':
			return $author$project$Main$PersonalInfo;
		case 'NationalityAtBirth':
			return $author$project$Main$PersonalInfo;
		case 'RaceEthnicity':
			return $author$project$Main$PersonalInfo;
		case 'Religion':
			return $author$project$Main$PersonalInfo;
		case 'NativeLanguage':
			return $author$project$Main$PersonalInfo;
		case 'FluentInEnglish':
			return $author$project$Main$PersonalInfo;
		case 'OtherLanguages':
			return $author$project$Main$PersonalInfo;
		case 'ImmigrationCourtHistoryEntry':
			return $author$project$Main$ImmigrationInfo;
		case 'I94':
			return $author$project$Main$ImmigrationInfo;
		case 'AlienRegistration':
			return $author$project$Main$ImmigrationInfo;
		case 'SSN':
			return $author$project$Main$ImmigrationInfo;
		case 'USCISAccount':
			return $author$project$Main$ImmigrationInfo;
		case 'LeftHomeCountry':
			return $author$project$Main$ImmigrationInfo;
		case 'MostRecentEntry':
			return $author$project$Main$ImmigrationInfo;
		case 'MostRecentEntryExpiration':
			return $author$project$Main$ImmigrationInfo;
		case 'OtherEntries':
			return $author$project$Main$ImmigrationInfo;
		case 'HasPassport':
			return $author$project$Main$ImmigrationInfo;
		case 'HasOtherTravelDoc':
			return $author$project$Main$ImmigrationInfo;
		case 'TravelDocCountry':
			return $author$project$Main$ImmigrationInfo;
		case 'TravelDocNumber':
			return $author$project$Main$ImmigrationInfo;
		case 'TravelDocExpiration':
			return $author$project$Main$ImmigrationInfo;
		case 'SpouseName':
			return $author$project$Main$SpouseInfo;
		case 'SpouseAliases':
			return $author$project$Main$SpouseInfo;
		case 'SpouseBirth':
			return $author$project$Main$SpouseInfo;
		case 'SpouseNationality':
			return $author$project$Main$SpouseInfo;
		case 'SpouseGender':
			return $author$project$Main$SpouseInfo;
		case 'SpouseRaceEthnicity':
			return $author$project$Main$SpouseInfo;
		case 'SpouseAlienRegistration':
			return $author$project$Main$SpouseInfo;
		case 'SpouseTravelDoc':
			return $author$project$Main$SpouseInfo;
		case 'SpouseSSN':
			return $author$project$Main$SpouseInfo;
		case 'MarriageInfo':
			return $author$project$Main$SpouseInfo;
		case 'SpouseInUS':
			return $author$project$Main$SpouseInfo;
		case 'SpouseLocation':
			return $author$project$Main$SpouseInfo;
		case 'SpouseLastEntry':
			return $author$project$Main$SpouseInfo;
		case 'SpouseI94':
			return $author$project$Main$SpouseInfo;
		case 'SpouseCurrentStatus':
			return $author$project$Main$SpouseInfo;
		case 'SpousePreviousArrival':
			return $author$project$Main$SpouseInfo;
		case 'SpouseImmigrationCourt':
			return $author$project$Main$SpouseInfo;
		case 'SpouseIncluded':
			return $author$project$Main$SpouseInfo;
		case 'NumberOfChildren':
			return $author$project$Main$ChildInfo($elm$core$Maybe$Nothing);
		case 'ChildName':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildBirth':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildNationality':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildGender':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildRaceEthnicity':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildMaritalStatus':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildAlienRegistration':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildTravelDoc':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildSSN':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildInUS':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildLocation':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildLastEntry':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildI94':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildCurrentStatus':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildImmigrationCourt':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		case 'ChildIncluded':
			var n = element.a;
			return $author$project$Main$ChildInfo(
				$elm$core$Maybe$Just(n));
		default:
			return $author$project$Main$AddressInfo;
	}
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$pageToDescription = function (page) {
	var description = function () {
		switch (page.$) {
			case 'Home':
				return 'DIY Asylum helps US asylum seekers complete their I-589 asylum application quickly and easily.';
			case 'I589':
				return 'Complete your I-589 form using DIY Asylum\'s online app.';
			case 'Error':
				return 'We couldn\'t find the content you are looking for. Please check out the DIY Aslyum homepage for more information.';
			case 'AboutUs':
				return 'Learn about the team at DIY Asylum.';
			default:
				return 'DIY Asylum helps you to complete you I-589 asylum application. Please contact us to learn more.';
		}
	}();
	return description;
};
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm$file$File$Download$bytes = F3(
	function (name, mime, content) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$never,
			A3(
				_File_download,
				name,
				mime,
				_File_makeBytesSafeForInternetExplorer(content)));
	});
var $author$project$Main$savePdf = function (bytes) {
	return A3($elm$file$File$Download$bytes, 'completed-i589.pdf', 'application/pdf', bytes);
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_community$list_extra$List$Extra$updateAt = F3(
	function (index, fn, list) {
		if (index < 0) {
			return list;
		} else {
			var tail = A2($elm$core$List$drop, index, list);
			var head = A2($elm$core$List$take, index, list);
			if (tail.b) {
				var x = tail.a;
				var xs = tail.b;
				return _Utils_ap(
					head,
					A2(
						$elm$core$List$cons,
						fn(x),
						xs));
			} else {
				return list;
			}
		}
	});
var $elm_community$list_extra$List$Extra$setAt = F2(
	function (index, value) {
		return A2(
			$elm_community$list_extra$List$Extra$updateAt,
			index,
			$elm$core$Basics$always(value));
	});
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $author$project$DataTypes$RACE = {$: 'RACE'};
var $author$project$DataTypes$RELIGION = {$: 'RELIGION'};
var $author$project$DataTypes$addressWithDatesMock = {cityOrTown: 'Boston', country: 'USA', departmentProvinceOrState: 'MA', fromDate: '03/12/1988', streetName: 'Mulberry St', streetNumber: '123', toDate: '03/15/1988'};
var $author$project$DataTypes$MALE = {$: 'MALE'};
var $author$project$DataTypes$NOT_NOW_BUT_IN_THE_PAST = {$: 'NOT_NOW_BUT_IN_THE_PAST'};
var $author$project$DataTypes$mailingAddressMock = {apartmentNumber: '1', areaCode: '202', city: 'Washington', inCareOf: 'Albert Einstein', phoneNumber: '123-4567', state: 'DC', streetName: 'Mulberry St', streetNumber: '456', zipCode: '20000'};
var $author$project$DataTypes$applicantInfoMock = {
	aliases: _List_fromArray(
		['ABC']),
	alienRegistrationNumber: '12345',
	alsoApplyingConventionAgainstTorture: true,
	cityOfBirth: 'Kansas City',
	countryOfBirth: 'China',
	countryWhoLastIssuedPassport: 'USA',
	dateOfBirth: '01/01/2020',
	firstName: 'M',
	fluentInEnglish: true,
	gender: $author$project$DataTypes$MALE,
	immigrationCourtHistory: $author$project$DataTypes$NOT_NOW_BUT_IN_THE_PAST,
	lastName: 'K',
	maritalStatus: $author$project$DataTypes$MARRIED,
	middleName: 'C',
	nationalityAtBirth: 'US',
	nativeLanguage: 'Chinese',
	otherLanguages: _List_fromArray(
		['English']),
	passportNumber: '1234',
	presentNationality: 'Chinese',
	raceEthnicOrTribalGroup: 'White',
	religion: 'Christian',
	socialSecurityNumber: '98245',
	travelDocumentExpirationDate: '03/04/05',
	travelDocumentNumber: '32122453521',
	usMailingAddress: $author$project$DataTypes$mailingAddressMock,
	usResidence: $author$project$DataTypes$mailingAddressMock,
	uscisAccountNumber: '432525'
};
var $author$project$DataTypes$FEMALE = {$: 'FEMALE'};
var $author$project$DataTypes$childInfoMock = {alienRegistrationNumber: '2145', cityOfBirth: 'Dallas', countryOfBirth: 'USA', currentImmigrationStatus: 'VISITOR', dateOfBirth: '03/04/05', dateOfLastEntry: '12/03/56', firstName: 'M', gender: $author$project$DataTypes$FEMALE, i94Number: '131352', immigrationStatusWhenLastAdmitted: 'STUDENT', inUS: true, includeInApplication: true, isInImmigrationCourt: true, lastName: 'J', location: 'Walla Walla, WA', maritalStatus: $author$project$DataTypes$MARRIED, middleName: 'F', nationality: 'US', passportNumber: '3141', placeOfLastEntry: 'Seattle', raceEthnicOrTribalGroup: 'White', socialSecurityNumber: '2145252521', statusExpirationDate: '05/09/20'};
var $author$project$DataTypes$employmentInfoMock = {applicantOccupation: 'Welder', employerAddress: '123 A St', employerName: 'Wilson High School', fromDate: '10/12/13', toDate: '10/12/14'};
var $author$project$DataTypes$YES = {$: 'YES'};
var $author$project$DataTypes$questionWithExplanationMock = {explanation: 'Mock explanation.', yesNoAnswer: $author$project$DataTypes$YES};
var $author$project$DataTypes$organizationInfoMock = {associatedWithOrganizations: $author$project$DataTypes$questionWithExplanationMock, continueToParticipate: $author$project$DataTypes$questionWithExplanationMock};
var $author$project$DataTypes$otherCountryApplicationsMock = {applyOtherCountry: $author$project$DataTypes$YES, explanation: 'Mock explanation', travelThroughOtherCountry: $author$project$DataTypes$YES};
var $author$project$DataTypes$relativeMock = {name: 'Albert Einstein', relationship: 'Brother'};
var $author$project$DataTypes$relativeHelpPrepareMock = {didRelativeHelp: $author$project$DataTypes$YES, firstRelative: $author$project$DataTypes$relativeMock, secondRelative: $author$project$DataTypes$relativeMock};
var $author$project$DataTypes$relativeInfoMock = {cityOrTownOfBirth: 'Privoz', countryOfBirth: 'Austria', currentLocation: 'Arlington, VA', fullName: 'Thomas Jefferson', isDeceased: false};
var $author$project$DataTypes$schoolInfoMock = {address: '123 A St', fromDate: '10/12/13', schoolName: 'Wilson High School', toDate: '10/12/14', typeOfSchool: 'Secondary'};
var $author$project$DataTypes$spouseInfoMock = {
	aliases: _List_fromArray(
		['bbbb']),
	alienRegistrationNumber: '2145',
	cityOfBirth: 'Dallas',
	countryOfBirth: 'USA',
	currentImmigrationStatus: 'VISITOR',
	dateOfBirth: '02/03/04',
	dateOfLastEntry: '02/06/09',
	dateOfMarriage: '03/04/05',
	firstName: 'M',
	gender: $author$project$DataTypes$FEMALE,
	i94Number: '131352',
	immigrationStatusWhenLastAdmitted: 'STUDENT',
	inUS: true,
	includeInApplication: true,
	isInImmigrationCourt: true,
	lastName: 'J',
	locationInUS: 'Walla Walla, WA',
	middleName: 'F',
	nationality: 'US',
	passportNumber: '3141',
	placeOfLastEntry: 'Seattle',
	placeOfMarriage: 'Yosemite, CA',
	previousArrivalDate: '04/02/09',
	raceEthnicOrTribalGroup: 'White',
	socialSecurityNumber: '2145252521',
	statusExpirationDate: '05/09/20'
};
var $author$project$DataTypes$usTravelEventMock = {date: '02/02/02', place: 'Lexington', status: 'VISITOR'};
var $author$project$DataTypes$usTravelHistoryMock = {
	dateStatusExpires: '06/07/08',
	i94Number: '092491',
	lastLeftHomeCountry: '09/10/20',
	travelEvents: _List_fromArray(
		[$author$project$DataTypes$usTravelEventMock])
};
var $author$project$DataTypes$userDataMock = {
	afraidOfTorture: $author$project$DataTypes$questionWithExplanationMock,
	applicantInfo: $author$project$DataTypes$applicantInfoMock,
	applyAfterOneYear: $author$project$DataTypes$questionWithExplanationMock,
	arrestedInOtherCountry: $author$project$DataTypes$questionWithExplanationMock,
	causedHarm: $author$project$DataTypes$questionWithExplanationMock,
	childInfo: _List_fromArray(
		[$author$project$DataTypes$childInfoMock]),
	crimeInUS: $author$project$DataTypes$questionWithExplanationMock,
	educationInfo: _List_fromArray(
		[$author$project$DataTypes$schoolInfoMock]),
	employmentInfo: _List_fromArray(
		[$author$project$DataTypes$employmentInfoMock]),
	experiencedHarm: $author$project$DataTypes$questionWithExplanationMock,
	fatherInfo: $author$project$DataTypes$relativeInfoMock,
	fearsHarm: $author$project$DataTypes$questionWithExplanationMock,
	isMarried: true,
	lastAddressBeforeUS: $author$project$DataTypes$addressWithDatesMock,
	lastAddressPersecuted: $author$project$DataTypes$addressWithDatesMock,
	motherInfo: $author$project$DataTypes$relativeInfoMock,
	organizationInfo: $author$project$DataTypes$organizationInfoMock,
	otherCountryApplications: $author$project$DataTypes$otherCountryApplicationsMock,
	relativeAppliedForAsylum: $author$project$DataTypes$questionWithExplanationMock,
	relativeHelpPrepare: $author$project$DataTypes$relativeHelpPrepareMock,
	residencesInLastFiveYears: _List_fromArray(
		[$author$project$DataTypes$addressWithDatesMock]),
	returnCountry: $author$project$DataTypes$questionWithExplanationMock,
	siblingInfo: _List_fromArray(
		[$author$project$DataTypes$relativeInfoMock]),
	spouseInfo: $author$project$DataTypes$spouseInfoMock,
	usTravelHistory: $author$project$DataTypes$usTravelHistoryMock,
	whyApplying: _List_fromArray(
		[$author$project$DataTypes$RACE, $author$project$DataTypes$RELIGION])
};
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0.a;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'LinkClicked':
				var urlRequest = msg.a;
				if (urlRequest.$ === 'Internal') {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$browser$Browser$Navigation$pushUrl,
							model.key,
							$elm$url$Url$toString(url)));
				} else {
					var href = urlRequest.a;
					return _Utils_Tuple2(
						model,
						$elm$browser$Browser$Navigation$load(href));
				}
			case 'UrlChanged':
				var url = msg.a;
				var page = $author$project$Main$pathMatch(url.path);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							page: page,
							title: $author$project$Main$pageToTitle(page),
							url: url
						}),
					$author$project$Ports$description(
						$author$project$Main$pageToDescription(page)));
			case 'DeviceClassified':
				var device = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{device: device}),
					$elm$core$Platform$Cmd$none);
			case 'StartDownload':
				return _Utils_Tuple2(
					model,
					$author$project$Main$downloadFilledForm($author$project$DataTypes$userDataMock));
			case 'FinishDownload':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var bytes = result.a;
					return _Utils_Tuple2(
						model,
						$author$project$Main$savePdf(bytes));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'SetLanguage':
				var l = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{language: l}),
					$elm$core$Platform$Cmd$none);
			case 'SetDate':
				var d = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							currentYear: $elm$core$Maybe$Just(
								$justinmimbs$date$Date$year(d))
						}),
					$elm$core$Platform$Cmd$none);
			case 'Next':
				var next = A2($author$project$Main$getNext, model.focusedEntry, model);
				var nextTitle = $author$project$Main$getSectionFromElement(next);
				var visitedElements = (!A2($elm$core$List$member, next, model.visitedElements)) ? A2($elm$core$List$cons, next, model.visitedElements) : model.visitedElements;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{focusedEntry: next, focusedSection: nextTitle, visitedElements: visitedElements}),
					$elm$core$Platform$Cmd$none);
			case 'Back':
				var next = A2($author$project$Main$getBack, model.focusedEntry, model);
				var nextTitle = $author$project$Main$getSectionFromElement(next);
				var visitedElements = (!A2($elm$core$List$member, next, model.visitedElements)) ? A2($elm$core$List$cons, next, model.visitedElements) : model.visitedElements;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{focusedEntry: next, focusedSection: nextTitle, visitedElements: visitedElements}),
					$elm$core$Platform$Cmd$none);
			case 'SetFormEntryElement':
				var element = msg.a;
				var visitedElements = (!A2($elm$core$List$member, element, model.visitedElements)) ? A2($elm$core$List$cons, element, model.visitedElements) : model.visitedElements;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							focusedEntry: element,
							focusedSection: $author$project$Main$getSectionFromElement(element),
							visitedElements: visitedElements
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetEligibility':
				var e = msg.a;
				var s = model.state;
				var newS = _Utils_update(
					s,
					{eligibility: e});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{state: newS}),
					$elm$core$Platform$Cmd$none);
			case 'SetPersonalData':
				var d = msg.a;
				var s = model.state;
				var newS = _Utils_update(
					s,
					{personal: d});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{state: newS}),
					$elm$core$Platform$Cmd$none);
			case 'SetSpouseData':
				var d = msg.a;
				var s = model.state;
				var newS = _Utils_update(
					s,
					{spouse: d});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{state: newS}),
					$elm$core$Platform$Cmd$none);
			case 'SetNumChildren':
				var n = msg.a;
				var s = model.state;
				var oldNumChildren = model.state.numberOfChildren;
				var newNumChildren = $elm$core$String$toInt(n);
				var newChildList = function () {
					if (newNumChildren.$ === 'Just') {
						var newNum = newNumChildren.a;
						if (oldNumChildren.$ === 'Just') {
							var oldNum = oldNumChildren.a;
							return (_Utils_cmp(newNum, oldNum) > 0) ? A2(
								$elm$core$List$append,
								model.state.children,
								A2($elm$core$List$repeat, newNum - oldNum, $author$project$Main$defaultChildData)) : ((_Utils_cmp(oldNum, newNum) > 0) ? A2($elm$core$List$take, newNum, model.state.children) : model.state.children);
						} else {
							return A2($elm$core$List$repeat, newNum, $author$project$Main$defaultChildData);
						}
					} else {
						return _List_Nil;
					}
				}();
				var newS = _Utils_update(
					s,
					{children: newChildList, numberOfChildren: newNumChildren});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{state: newS}),
					$elm$core$Platform$Cmd$none);
			default:
				var n = msg.a;
				var newChild = msg.b;
				var s = model.state;
				var index = n - 1;
				var c = model.state.children;
				var updated = A3($elm_community$list_extra$List$Extra$setAt, index, newChild, c);
				var newS = _Utils_update(
					s,
					{children: updated});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{state: newS}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_v0, styles) {
		var newStyles = _v0.b;
		var classname = _v0.c;
		return $elm$core$List$isEmpty(newStyles) ? styles : A3($elm$core$Dict$insert, classname, newStyles, styles);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = function (_v0) {
	var val = _v0.a;
	return val;
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_v6, _v7) {
		var key = _v6.a;
		var html = _v6.b;
		var pairs = _v7.a;
		var styles = _v7.b;
		switch (html.$) {
			case 'Unstyled':
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v9 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v9.a;
				var finalStyles = _v9.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v10 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v10.a;
				var finalStyles = _v10.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v11 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v11.a;
				var finalStyles = _v11.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v12 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v12.a;
				var finalStyles = _v12.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _v0) {
		var nodes = _v0.a;
		var styles = _v0.b;
		switch (html.$) {
			case 'Unstyled':
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					styles);
			case 'Node':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v2 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v2.a;
				var finalStyles = _v2.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'NodeNS':
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v3 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v3.a;
				var finalStyles = _v3.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 'KeyedNode':
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v4 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v4.a;
				var finalStyles = _v4.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v5 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v5.a;
				var finalStyles = _v5.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			if (!properties.b) {
				return candidate;
			} else {
				var _v1 = properties.a;
				var styles = _v1.b;
				var classname = _v1.c;
				var rest = properties.b;
				if ($elm$core$String$isEmpty(classname)) {
					var $temp$candidate = candidate,
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				} else {
					var $temp$candidate = $elm$core$Maybe$Just(
						_Utils_Tuple2(classname, styles)),
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties = function (properties) {
	var _v0 = A2($rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp, $elm$core$Maybe$Nothing, properties);
	if (_v0.$ === 'Nothing') {
		return $elm$core$Dict$empty;
	} else {
		var _v1 = _v0.a;
		var classname = _v1.a;
		var styles = _v1.b;
		return A2($elm$core$Dict$singleton, classname, styles);
	}
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _v0) {
		var keyframesByName = _v0.a;
		var declarations = _v0.b;
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var _v2 = declaration.a;
				var properties = _v2.c;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'MediaRule':
				var styleBlocks = declaration.b;
				return A2(
					$elm$core$List$all,
					function (_v3) {
						var properties = _v3.c;
						return $elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'SupportsRule':
				var otherDeclarations = declaration.b;
				return $elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'DocumentRule':
				return _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'PageRule':
				var properties = declaration.b;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'FontFace':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'Keyframes':
				var record = declaration.a;
				return $elm$core$String$isEmpty(record.declaration) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3($elm$core$Dict$insert, record.name, record.declaration, keyframesByName),
					declarations);
			case 'Viewport':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 'CounterStyle':
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					$elm$core$List$all,
					function (_v4) {
						var properties = _v4.b;
						return $elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
		}
	});
var $rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 'Keyframes', a: a};
};
var $rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			$elm$core$List$append,
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var decl = _v0.b;
					return $rtfeldman$elm_css$Css$Structure$Keyframes(
						{declaration: decl, name: name});
				},
				$elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var declarations = _v0.declarations;
	var _v1 = A3(
		$elm$core$List$foldr,
		$rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _v1.a;
	var compactedDeclarations = _v1.b;
	var finalDeclarations = A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {charset: charset, declarations: finalDeclarations, imports: imports, namespaces: namespaces};
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.feature + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$append(': '),
			expression.value)) + ')'));
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType.$) {
		case 'Print':
			return 'print';
		case 'Screen':
			return 'screen';
		default:
			return 'speech';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				$elm$core$String$join,
				' and ',
				A2(
					$elm$core$List$cons,
					$rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 'AllQuery':
			var expressions = mediaQuery.a;
			return A2(
				$elm$core$String$join,
				' and ',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions));
		case 'OnlyQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 'NotQuery':
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + ($rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var $rtfeldman$elm_css$Css$Structure$Output$importToString = function (_v0) {
	var name = _v0.a;
	var mediaQueries = _v0.b;
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
			mediaQueries));
};
var $rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_v0) {
	var prefix = _v0.a;
	var str = _v0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var $rtfeldman$elm_css$Css$Structure$Output$spaceIndent = '    ';
var $rtfeldman$elm_css$Css$Structure$Output$indent = function (str) {
	return _Utils_ap($rtfeldman$elm_css$Css$Structure$Output$spaceIndent, str);
};
var $rtfeldman$elm_css$Css$Structure$Output$noIndent = '';
var $rtfeldman$elm_css$Css$Structure$Output$emitProperty = function (str) {
	return str + ';';
};
var $rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $rtfeldman$elm_css$Css$Structure$Output$indent, $rtfeldman$elm_css$Css$Structure$Output$emitProperty),
			properties));
};
var $elm$core$String$append = _String_append;
var $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_v0) {
	var str = _v0.a;
	return '::' + str;
};
var $rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator.$) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 'ClassSelector':
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 'IdSelector':
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 'PseudoClassSelector':
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 'TypeSelectorSequence':
			var str = simpleSelectorSequence.a.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
		case 'UniversalSelectorSequence':
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return $elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A2(
				$elm$core$String$join,
				'',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors));
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$cons,
					str,
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_v0) {
	var combinator = _v0.a;
	var sequence = _v0.b;
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator),
				$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence)
			]));
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_v0) {
	var simpleSelectorSequence = _v0.a;
	var chain = _v0.b;
	var pseudoElement = _v0.c;
	var segments = A2(
		$elm$core$List$cons,
		$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			[
				A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement))
			]));
	return A2(
		$elm$core$String$append,
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$filter,
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
				segments)),
		pseudoElementsString);
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		var selectorStr = A2(
			$elm$core$String$join,
			', ',
			A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Structure$Output$selectorToString,
				A2($elm$core$List$cons, firstSelector, otherSelectors)));
		return A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					selectorStr,
					' {\n',
					indentLevel,
					$rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties),
					'\n',
					indentLevel,
					'}'
				]));
	});
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = decl.a;
			return A2($rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, $rtfeldman$elm_css$Css$Structure$Output$noIndent, styleBlock);
		case 'MediaRule':
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A2(
				$elm$core$String$join,
				',\n',
				A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, mediaQueries));
			var blocks = A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						$rtfeldman$elm_css$Css$Structure$Output$indent,
						$rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock($rtfeldman$elm_css$Css$Structure$Output$spaceIndent)),
					styleBlocks));
			return '@media ' + (query + (' {\n' + (blocks + '\n}')));
		case 'SupportsRule':
			return 'TODO';
		case 'DocumentRule':
			return 'TODO';
		case 'PageRule':
			return 'TODO';
		case 'FontFace':
			return 'TODO';
		case 'Keyframes':
			var name = decl.a.name;
			var declaration = decl.a.declaration;
			return '@keyframes ' + (name + (' {\n' + (declaration + '\n}')));
		case 'Viewport':
			return 'TODO';
		case 'CounterStyle':
			return 'TODO';
		default:
			return 'TODO';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var declarations = _v0.declarations;
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$importToString, imports)),
					A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$namespaceToString, namespaces)),
					A2(
					$elm$core$String$join,
					'\n\n',
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, declarations))
				])));
};
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 'CounterStyle', a: a};
};
var $rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 'FontFace', a: a};
};
var $rtfeldman$elm_css$Css$Structure$PageRule = F2(
	function (a, b) {
		return {$: 'PageRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 'Selector', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var $rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 'SupportsRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 'Viewport', a: a};
};
var $rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 'MediaRule', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		return A3(
			$rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var $rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 'StyleBlockDeclaration':
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2($rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 'MediaRule':
						var _v1 = declarations.a;
						var mediaQueries = _v1.a;
						var styleBlocks = _v1.b;
						return _List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									$rtfeldman$elm_css$Css$Structure$mapLast,
									$rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					$rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2($elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var $rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _v0) {
		var sequence = _v0.a;
		var selectors = _v0.b;
		return A3(
			$rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			$elm$core$Maybe$Just(pseudo));
	});
var $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 'CustomSelector', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 'TypeSelectorSequence', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 'UniversalSelectorSequence', a: a};
};
var $rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 'TypeSelectorSequence':
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 'UniversalSelectorSequence':
				var list = sequence.a;
				return $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _v1 = list.a;
				var combinator = _v1.a;
				var sequence = _v1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (declarations.a.$ === 'StyleBlockDeclaration') {
				var _v1 = declarations.a.a;
				var firstSelector = _v1.a;
				var otherSelectors = _v1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2($elm$core$List$cons, firstSelector, otherSelectors),
					$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 'DocumentRule', a: a, b: b, c: c, d: d, e: e};
	});
var $rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_v0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 'StyleBlockDeclaration':
							var styleBlock = declarations.a.a;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 'MediaRule':
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _v1 = declarations.a;
									var mediaQueries = _v1.a;
									var _v2 = _v1.b;
									var styleBlock = _v2.a;
									return _List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _v3 = declarations.a;
									var mediaQueries = _v3.a;
									var _v4 = _v3.b;
									var first = _v4.a;
									var rest = _v4.b;
									var _v5 = A2(
										$rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_v5.b && (_v5.a.$ === 'MediaRule')) && (!_v5.b.b)) {
										var _v6 = _v5.a;
										var newMediaQueries = _v6.a;
										var newStyleBlocks = _v6.b;
										return _List_fromArray(
											[
												A2(
												$rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2($elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _v5;
										return newDeclarations;
									}
								}
							} else {
								break _v0$12;
							}
						case 'SupportsRule':
							var _v7 = declarations.a;
							var str = _v7.a;
							var nestedDeclarations = _v7.b;
							return _List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 'DocumentRule':
							var _v8 = declarations.a;
							var str1 = _v8.a;
							var str2 = _v8.b;
							var str3 = _v8.c;
							var str4 = _v8.d;
							var styleBlock = _v8.e;
							return A2(
								$elm$core$List$map,
								A4($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 'PageRule':
							var _v9 = declarations.a;
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			$elm$core$List$cons,
			first,
			A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var $elm$core$String$cons = _String_cons;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {charsProcessed: charsProcessed, hash: hash, seed: seed, shift: shift};
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1 = 3432918353;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$finalize = function (data) {
	var acc = (!(!data.hash)) ? (data.seed ^ A2(
		$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
		$rtfeldman$elm_css$ElmCssVendor$Murmur3$c2,
		A2(
			$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
			15,
			A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1, data.hash)))) : data.seed;
	var h0 = acc ^ data.charsProcessed;
	var h1 = A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
			5,
			A2(
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy,
					$rtfeldman$elm_css$ElmCssVendor$Murmur3$c2,
					A2(
						$rtfeldman$elm_css$ElmCssVendor$Murmur3$rotlBy,
						15,
						A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$multiplyBy, $rtfeldman$elm_css$ElmCssVendor$Murmur3$c1, k1))))) + 3864292196;
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.hash | ((255 & $elm$core$Char$toCode(c)) << data.shift);
		var _v0 = data.shift;
		if (_v0 === 24) {
			return {
				charsProcessed: data.charsProcessed + 1,
				hash: 0,
				seed: A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$mix, data.seed, res),
				shift: 0
			};
		} else {
			return {charsProcessed: data.charsProcessed + 1, hash: res, seed: data.seed, shift: data.shift + 8};
		}
	});
var $rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString = F2(
	function (seed, str) {
		return $rtfeldman$elm_css$ElmCssVendor$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$hashFold,
				A4($rtfeldman$elm_css$ElmCssVendor$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $rtfeldman$elm_css$Hash$murmurSeed = 15739;
var $elm$core$String$fromList = _String_fromList;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			_Utils_chr('-'),
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		$elm$core$String$cons,
		_Utils_chr('_'),
		$rtfeldman$elm_hex$Hex$toString(
			A2($rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString, $rtfeldman$elm_css$Hash$murmurSeed, str)));
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 'Nothing') {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 'FontFeatureValues', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				$elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var styleBlock = declaration.a;
			return A2(
				$rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (declaration.$ === 'StyleBlockDeclaration') {
			var structureStyleBlock = declaration.a;
			return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 'StyleBlockDeclaration':
				var structureStyleBlock = declaration.a;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 'MediaRule':
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 'SupportsRule':
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 'DocumentRule':
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_v0) {
	var declarations = _v0.a;
	return declarations;
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$elm$core$List$tail(decls));
		};
		var nextResult = A2(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _v14 = _Utils_Tuple2(
				$elm$core$List$head(nextResult),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((_v14.a.$ === 'Just') && (_v14.b.$ === 'Just')) {
				var nextResultParent = _v14.a.a;
				var originalParent = _v14.b.a;
				return _Utils_ap(
					A2(
						$elm$core$List$take,
						$elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return $elm$core$List$concat(
				A2(
					$rtfeldman$elm_css$Css$Structure$mapLast,
					$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						$elm$core$List$map,
						$elm$core$List$singleton,
						A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				insertStylesToNestedDecl,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 'AppendProperty':
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 'ExtendSelector':
					var _v4 = styles.a;
					var selector = _v4.a;
					var nestedStyles = _v4.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 'NestSnippet':
					var _v5 = styles.a;
					var selectorCombinator = _v5.a;
					var snippets = _v5.b;
					var rest = styles.b;
					var chain = F2(
						function (_v9, _v10) {
							var originalSequence = _v9.a;
							var originalTuples = _v9.b;
							var originalPseudoElement = _v9.c;
							var newSequence = _v10.a;
							var newTuples = _v10.b;
							var newPseudoElement = _v10.c;
							return A3(
								$rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								$rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 'StyleBlockDeclaration':
								var _v7 = declaration.a;
								var firstSelector = _v7.a;
								var otherSelectors = _v7.b;
								var nestedStyles = _v7.c;
								var newSelectors = A2(
									$elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											$elm$core$List$map,
											chain(originalSelector),
											A2($elm$core$List$cons, firstSelector, otherSelectors));
									},
									$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 'MediaRule':
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 'SupportsRule':
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 'DocumentRule':
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									$elm$core$List$map,
									A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 'PageRule':
								var str = declaration.a;
								var properties = declaration.b;
								return _List_fromArray(
									[
										A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
									]);
							case 'FontFace':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 'Viewport':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 'CounterStyle':
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return $elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								$elm$core$List$map,
								expandDeclaration,
								A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 'WithPseudoElement':
					var _v11 = styles.a;
					var pseudoElement = _v11.a;
					var nestedStyles = _v11.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 'WithKeyframes':
					var str = styles.a.a;
					var rest = styles.b;
					var name = $rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						$elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$Keyframes(
								{declaration: str, name: name})
							]));
				case 'WithMedia':
					var _v12 = styles.a;
					var mediaQueries = _v12.a;
					var nestedStyles = _v12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _v13 = $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_v13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _v13.a;
							var otherSelectors = _v13.b;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									$elm$core$List$singleton(
										$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_v2) {
	var firstSelector = _v2.a;
	var otherSelectors = _v2.b;
	var styles = _v2.c;
	return A2(
		$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			$rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2($elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 'StyleBlockDeclaration':
			var styleBlock = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 'MediaRule':
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 'SupportsRule':
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 'DocumentRule':
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				$elm$core$List$map,
				A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 'PageRule':
			var str = snippetDeclaration.a;
			var properties = snippetDeclaration.b;
			return _List_fromArray(
				[
					A2($rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
				]);
		case 'FontFace':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 'Viewport':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 'CounterStyle':
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_v0) {
	var charset = _v0.charset;
	var imports = _v0.imports;
	var namespaces = _v0.namespaces;
	var snippets = _v0.snippets;
	var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {charset: charset, declarations: declarations, imports: imports, namespaces: namespaces};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp = function (sheet) {
	return $rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		$rtfeldman$elm_css$Css$Structure$compactStylesheet(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (styles) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp, styles));
};
var $rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 'ClassSelector', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Snippet = function (a) {
	return {$: 'Snippet', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 'StyleBlock', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 'StyleBlockDeclaration', a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
		return $rtfeldman$elm_css$Css$Preprocess$Snippet(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
					A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
				]));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair = function (_v0) {
	var classname = _v0.a;
	var styles = _v0.b;
	return A2(
		$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
		styles,
		$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$ClassSelector(classname)
				])));
};
var $rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {charset: $elm$core$Maybe$Nothing, imports: _List_Nil, namespaces: _List_Nil, snippets: snippets};
};
var $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return $rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
		$elm$core$List$singleton(
			$rtfeldman$elm_css$Css$Preprocess$stylesheet(
				A2(
					$elm$core$List$map,
					$rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair,
					$elm$core$Dict$toList(dict)))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = function (styles) {
	return A3(
		$elm$virtual_dom$VirtualDom$node,
		'style',
		_List_Nil,
		$elm$core$List$singleton(
			$elm$virtual_dom$VirtualDom$text(
				$rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))));
};
var $rtfeldman$elm_css$VirtualDom$Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _v1 = pairs.a;
				var str = _v1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _v1 = pairs.a;
				var firstKey = _v1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2($rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var styleNodeKey = A2($rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(allStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			$elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F4(
	function (ns, elemType, properties, keyedChildren) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A4(
			$elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F4(
	function (ns, elemType, properties, children) {
		var unstyledProperties = A2($elm$core$List$map, $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = $rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 'Unstyled':
			var plainNode = vdom.a;
			return plainNode;
		case 'Node':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyle, elemType, properties, children);
		case 'NodeNS':
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, ns, elemType, properties, children);
		case 'KeyedNode':
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, ns, elemType, properties, children);
	}
};
var $rtfeldman$elm_css$Html$Styled$toUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var $rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 'ApplyStyles', a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 'AppendProperty', a: a};
};
var $rtfeldman$elm_css$Css$Internal$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$Internal$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			switch (style.$) {
				case 'AppendProperty':
					var str = style.a;
					var key = A2(
						$elm$core$Maybe$withDefault,
						'',
						$elm$core$List$head(
							A2($elm$core$String$split, ':', str)));
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, key);
				case 'ExtendSelector':
					var selector = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-selector'));
				case 'NestSnippet':
					var combinator = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-combinator'));
				case 'WithPseudoElement':
					var pseudoElement = style.a;
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-pseudo-element setter'));
				case 'WithMedia':
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-media-query'));
				case 'WithKeyframes':
					return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-keyframes'));
				default:
					if (!style.a.b) {
						return A2($rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-empty-Style'));
					} else {
						if (!style.a.b.b) {
							var _v1 = style.a;
							var only = _v1.a;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = only;
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						} else {
							var _v2 = style.a;
							var first = _v2.a;
							var rest = _v2.b;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = $rtfeldman$elm_css$Css$Preprocess$ApplyStyles(rest);
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var $rtfeldman$elm_css$Css$Internal$IncompatibleUnits = {$: 'IncompatibleUnits'};
var $rtfeldman$elm_css$Css$Structure$Compatible = {$: 'Compatible'};
var $elm$core$String$fromFloat = _String_fromNumber;
var $rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			absoluteLength: $rtfeldman$elm_css$Css$Structure$Compatible,
			calc: $rtfeldman$elm_css$Css$Structure$Compatible,
			flexBasis: $rtfeldman$elm_css$Css$Structure$Compatible,
			fontSize: $rtfeldman$elm_css$Css$Structure$Compatible,
			length: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrAutoOrCoverOrContain: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNone: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNoneOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumber: $rtfeldman$elm_css$Css$Structure$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible,
			numericValue: numericValue,
			textIndent: $rtfeldman$elm_css$Css$Structure$Compatible,
			unitLabel: unitLabel,
			units: units,
			value: _Utils_ap(
				$elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var $rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty = A3($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$Internal$IncompatibleUnits, '', 0);
var $rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2($elm$core$String$startsWith, '#', str) ? str : A2(
		$elm$core$String$cons,
		_Utils_chr('#'),
		str);
};
var $rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		alpha: 1,
		blue: 0,
		color: $rtfeldman$elm_css$Css$Structure$Compatible,
		green: 0,
		red: 0,
		value: $rtfeldman$elm_css$Css$withPrecedingHash(str)
	};
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$core$String$toLower = _String_toLower;
var $rtfeldman$elm_css$Css$validHex = F5(
	function (str, _v0, _v1, _v2, _v3) {
		var r1 = _v0.a;
		var r2 = _v0.b;
		var g1 = _v1.a;
		var g2 = _v1.b;
		var b1 = _v2.a;
		var b2 = _v2.b;
		var a1 = _v3.a;
		var a2 = _v3.b;
		var toResult = A2(
			$elm$core$Basics$composeR,
			$elm$core$String$fromList,
			A2($elm$core$Basics$composeR, $elm$core$String$toLower, $rtfeldman$elm_hex$Hex$fromString));
		var results = _Utils_Tuple2(
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[r1, r2])),
				toResult(
					_List_fromArray(
						[g1, g2]))),
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[b1, b2])),
				toResult(
					_List_fromArray(
						[a1, a2]))));
		if ((((results.a.a.$ === 'Ok') && (results.a.b.$ === 'Ok')) && (results.b.a.$ === 'Ok')) && (results.b.b.$ === 'Ok')) {
			var _v5 = results.a;
			var red = _v5.a.a;
			var green = _v5.b.a;
			var _v6 = results.b;
			var blue = _v6.a.a;
			var alpha = _v6.b.a;
			return {
				alpha: alpha / 255,
				blue: blue,
				color: $rtfeldman$elm_css$Css$Structure$Compatible,
				green: green,
				red: red,
				value: $rtfeldman$elm_css$Css$withPrecedingHash(str)
			};
		} else {
			return $rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var $rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2($elm$core$String$startsWith, '#', str) ? A2($elm$core$String$dropLeft, 1, str) : str;
	var _v0 = $elm$core$String$toList(withoutHash);
	_v0$4:
	while (true) {
		if ((_v0.b && _v0.b.b) && _v0.b.b.b) {
			if (!_v0.b.b.b.b) {
				var r = _v0.a;
				var _v1 = _v0.b;
				var g = _v1.a;
				var _v2 = _v1.b;
				var b = _v2.a;
				return A5(
					$rtfeldman$elm_css$Css$validHex,
					str,
					_Utils_Tuple2(r, r),
					_Utils_Tuple2(g, g),
					_Utils_Tuple2(b, b),
					_Utils_Tuple2(
						_Utils_chr('f'),
						_Utils_chr('f')));
			} else {
				if (!_v0.b.b.b.b.b) {
					var r = _v0.a;
					var _v3 = _v0.b;
					var g = _v3.a;
					var _v4 = _v3.b;
					var b = _v4.a;
					var _v5 = _v4.b;
					var a = _v5.a;
					return A5(
						$rtfeldman$elm_css$Css$validHex,
						str,
						_Utils_Tuple2(r, r),
						_Utils_Tuple2(g, g),
						_Utils_Tuple2(b, b),
						_Utils_Tuple2(a, a));
				} else {
					if (_v0.b.b.b.b.b.b) {
						if (!_v0.b.b.b.b.b.b.b) {
							var r1 = _v0.a;
							var _v6 = _v0.b;
							var r2 = _v6.a;
							var _v7 = _v6.b;
							var g1 = _v7.a;
							var _v8 = _v7.b;
							var g2 = _v8.a;
							var _v9 = _v8.b;
							var b1 = _v9.a;
							var _v10 = _v9.b;
							var b2 = _v10.a;
							return A5(
								$rtfeldman$elm_css$Css$validHex,
								str,
								_Utils_Tuple2(r1, r2),
								_Utils_Tuple2(g1, g2),
								_Utils_Tuple2(b1, b2),
								_Utils_Tuple2(
									_Utils_chr('f'),
									_Utils_chr('f')));
						} else {
							if (_v0.b.b.b.b.b.b.b.b && (!_v0.b.b.b.b.b.b.b.b.b)) {
								var r1 = _v0.a;
								var _v11 = _v0.b;
								var r2 = _v11.a;
								var _v12 = _v11.b;
								var g1 = _v12.a;
								var _v13 = _v12.b;
								var g2 = _v13.a;
								var _v14 = _v13.b;
								var b1 = _v14.a;
								var _v15 = _v14.b;
								var b2 = _v15.a;
								var _v16 = _v15.b;
								var a1 = _v16.a;
								var _v17 = _v16.b;
								var a2 = _v17.a;
								return A5(
									$rtfeldman$elm_css$Css$validHex,
									str,
									_Utils_Tuple2(r1, r2),
									_Utils_Tuple2(g1, g2),
									_Utils_Tuple2(b1, b2),
									_Utils_Tuple2(a1, a2));
							} else {
								break _v0$4;
							}
						}
					} else {
						break _v0$4;
					}
				}
			}
		} else {
			break _v0$4;
		}
	}
	return $rtfeldman$elm_css$Css$erroneousHex(str);
};
var $author$project$Main$background = $rtfeldman$elm_css$Css$hex('C0E0DE');
var $rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'background-color', c.value);
};
var $rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2($rtfeldman$elm_css$Css$property, key, arg.value);
	});
var $rtfeldman$elm_css$Css$center = $rtfeldman$elm_css$Css$prop1('center');
var $rtfeldman$elm_css$Css$color = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'color', c.value);
};
var $rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 'Attribute', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$murmurSeed = 15739;
var $rtfeldman$elm_css$VirtualDom$Styled$getClassname = function (styles) {
	return $elm$core$List$isEmpty(styles) ? 'unstyled' : A2(
		$elm$core$String$cons,
		_Utils_chr('_'),
		$rtfeldman$elm_hex$Hex$toString(
			A2(
				$rtfeldman$elm_css$ElmCssVendor$Murmur3$hashString,
				$rtfeldman$elm_css$VirtualDom$Styled$murmurSeed,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
					$elm$core$List$singleton(
						$rtfeldman$elm_css$Css$Preprocess$stylesheet(
							$elm$core$List$singleton(
								A2(
									$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
									styles,
									$rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_List_Nil)))))))));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var classname = $rtfeldman$elm_css$VirtualDom$Styled$getClassname(styles);
	var classProperty = A2(
		$elm$virtual_dom$VirtualDom$property,
		'className',
		$elm$json$Json$Encode$string(classname));
	return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, styles, classname);
};
var $rtfeldman$elm_css$Html$Styled$Attributes$css = $rtfeldman$elm_css$Html$Styled$Internal$css;
var $author$project$Main$dark = $rtfeldman$elm_css$Css$hex('162521');
var $rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 'Node', a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$Node;
var $rtfeldman$elm_css$Html$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$node;
var $rtfeldman$elm_css$Html$Styled$div = $rtfeldman$elm_css$Html$Styled$node('div');
var $rtfeldman$elm_css$Css$EmUnits = {$: 'EmUnits'};
var $rtfeldman$elm_css$Css$em = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$EmUnits, 'em');
var $rtfeldman$elm_css$Css$batch = $rtfeldman$elm_css$Css$Preprocess$ApplyStyles;
var $author$project$Main$gridStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
			A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '1fr 2fr 1fr')
		]));
var $rtfeldman$elm_css$Css$minHeight = $rtfeldman$elm_css$Css$prop1('min-height');
var $rtfeldman$elm_css$Css$padding = $rtfeldman$elm_css$Css$prop1('padding');
var $rtfeldman$elm_css$Css$PxUnits = {$: 'PxUnits'};
var $rtfeldman$elm_css$Css$px = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$PxUnits, 'px');
var $rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return $elm$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			$elm$core$String$join,
			', ',
			A2(
				$elm$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var $rtfeldman$elm_css$Css$fontFamilies = A2(
	$elm$core$Basics$composeL,
	$rtfeldman$elm_css$Css$prop1('font-family'),
	$rtfeldman$elm_css$Css$stringsToValue);
var $rtfeldman$elm_css$Css$fontSize = $rtfeldman$elm_css$Css$prop1('font-size');
var $author$project$Main$standardStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			$rtfeldman$elm_css$Css$fontSize(
			$rtfeldman$elm_css$Css$px(15)),
			$rtfeldman$elm_css$Css$fontFamilies(
			_List_fromArray(
				['Lato', 'sans-serif'])),
			$rtfeldman$elm_css$Css$color($author$project$Main$dark)
		]));
var $rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$text = function (str) {
	return $rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
		$elm$virtual_dom$VirtualDom$text(str));
};
var $rtfeldman$elm_css$Html$Styled$text = $rtfeldman$elm_css$VirtualDom$Styled$text;
var $author$project$Main$footer = A2(
	$rtfeldman$elm_css$Html$Styled$div,
	_List_fromArray(
		[
			$rtfeldman$elm_css$Html$Styled$Attributes$css(
			_List_fromArray(
				[
					$author$project$Main$gridStyles,
					$author$project$Main$standardStyles,
					$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
					$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$dark),
					$rtfeldman$elm_css$Css$color($author$project$Main$background),
					$rtfeldman$elm_css$Css$minHeight(
					$rtfeldman$elm_css$Css$em(2.5)),
					$rtfeldman$elm_css$Css$padding(
					$rtfeldman$elm_css$Css$px(10))
				]))
		]),
	_List_fromArray(
		[
			A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							A2($rtfeldman$elm_css$Css$property, 'grid-column', '2')
						]))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text('© 2020 DIY Asylum LLC')
				]))
		]));
var $author$project$DataTypes$CURRENTLY = {$: 'CURRENTLY'};
var $author$project$DataTypes$DIVORCED = {$: 'DIVORCED'};
var $author$project$DataTypes$NEVER = {$: 'NEVER'};
var $author$project$DataTypes$SINGLE = {$: 'SINGLE'};
var $author$project$Main$SetChildData = F2(
	function (a, b) {
		return {$: 'SetChildData', a: a, b: b};
	});
var $author$project$Main$SetEligibility = function (a) {
	return {$: 'SetEligibility', a: a};
};
var $author$project$Main$SetNumChildren = function (a) {
	return {$: 'SetNumChildren', a: a};
};
var $author$project$Main$SetPersonalData = function (a) {
	return {$: 'SetPersonalData', a: a};
};
var $author$project$Main$SetSpouseData = function (a) {
	return {$: 'SetSpouseData', a: a};
};
var $author$project$DataTypes$WIDOWED = {$: 'WIDOWED'};
var $rtfeldman$elm_css$Css$Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {$: 'ExtendSelector', a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$PseudoClassSelector = function (a) {
	return {$: 'PseudoClassSelector', a: a};
};
var $rtfeldman$elm_css$Css$pseudoClass = function (_class) {
	return $rtfeldman$elm_css$Css$Preprocess$ExtendSelector(
		$rtfeldman$elm_css$Css$Structure$PseudoClassSelector(_class));
};
var $rtfeldman$elm_css$Css$active = $rtfeldman$elm_css$Css$pseudoClass('active');
var $rtfeldman$elm_css$Css$borderBottomColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-bottom-color', c.value);
};
var $rtfeldman$elm_css$Css$borderLeftColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-left-color', c.value);
};
var $rtfeldman$elm_css$Css$borderRadius = $rtfeldman$elm_css$Css$prop1('border-radius');
var $rtfeldman$elm_css$Css$borderRightColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-right-color', c.value);
};
var $rtfeldman$elm_css$Css$borderStyle = $rtfeldman$elm_css$Css$prop1('border-style');
var $rtfeldman$elm_css$Css$borderTopColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-top-color', c.value);
};
var $rtfeldman$elm_css$Css$margin = $rtfeldman$elm_css$Css$prop1('margin');
var $author$project$Main$defaultMargin = $rtfeldman$elm_css$Css$margin(
	$rtfeldman$elm_css$Css$px(10));
var $rtfeldman$elm_css$Css$focus = $rtfeldman$elm_css$Css$pseudoClass('focus');
var $author$project$Main$gray = $rtfeldman$elm_css$Css$hex('717878');
var $rtfeldman$elm_css$Css$outline = $rtfeldman$elm_css$Css$prop1('outline');
var $rtfeldman$elm_css$Css$solid = {borderStyle: $rtfeldman$elm_css$Css$Structure$Compatible, textDecorationStyle: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'solid'};
var $rtfeldman$elm_css$Css$UnitlessInteger = {$: 'UnitlessInteger'};
var $rtfeldman$elm_css$Css$zero = {length: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAutoOrCoverOrContain: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNone: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNoneOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNumber: $rtfeldman$elm_css$Css$Structure$Compatible, number: $rtfeldman$elm_css$Css$Structure$Compatible, numericValue: 0, outline: $rtfeldman$elm_css$Css$Structure$Compatible, unitLabel: '', units: $rtfeldman$elm_css$Css$UnitlessInteger, value: '0'};
var $author$project$Main$activeButtonStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$background),
			$rtfeldman$elm_css$Css$color($author$project$Main$dark),
			$author$project$Main$defaultMargin,
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$px(5)),
			$rtfeldman$elm_css$Css$borderTopColor($author$project$Main$gray),
			$rtfeldman$elm_css$Css$borderLeftColor($author$project$Main$gray),
			$rtfeldman$elm_css$Css$borderBottomColor($author$project$Main$dark),
			$rtfeldman$elm_css$Css$borderRightColor($author$project$Main$dark),
			$rtfeldman$elm_css$Css$borderStyle($rtfeldman$elm_css$Css$solid),
			A2($rtfeldman$elm_css$Css$property, 'appearance', 'none'),
			A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'none'),
			$rtfeldman$elm_css$Css$padding(
			$rtfeldman$elm_css$Css$px(8)),
			$rtfeldman$elm_css$Css$outline($rtfeldman$elm_css$Css$zero),
			$rtfeldman$elm_css$Css$active(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$focus(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$borderTopColor($author$project$Main$dark),
							$rtfeldman$elm_css$Css$borderLeftColor($author$project$Main$dark),
							$rtfeldman$elm_css$Css$borderBottomColor($author$project$Main$gray),
							$rtfeldman$elm_css$Css$borderRightColor($author$project$Main$gray)
						]))
				]))
		]));
var $rtfeldman$elm_css$Css$alignSelf = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $author$project$Main$Back = {$: 'Back'};
var $rtfeldman$elm_css$Html$Styled$button = $rtfeldman$elm_css$Html$Styled$node('button');
var $author$project$I18n$i18nHelper = F3(
	function (languageDict, key, language) {
		var errorValue = 'No translation available.';
		var entry = A2($elm$core$Dict$get, key, languageDict);
		var value = function () {
			if (entry.$ === 'Just') {
				var d = entry.a;
				var _v1 = A2($elm$core$Dict$get, language, d);
				if (_v1.$ === 'Just') {
					var s = _v1.a;
					return s;
				} else {
					var _v2 = A2($elm$core$Dict$get, 'en', d);
					if (_v2.$ === 'Just') {
						var s = _v2.a;
						return s;
					} else {
						return errorValue;
					}
				}
			} else {
				return errorValue;
			}
		}();
		return value;
	});
var $author$project$Main$i18n = F2(
	function (model, key) {
		return A3($author$project$I18n$i18nHelper, model.languageDict, key, model.language);
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $rtfeldman$elm_css$VirtualDom$Styled$on = F2(
	function (eventName, handler) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$on, eventName, handler),
			_List_Nil,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Events$on = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $rtfeldman$elm_css$Html$Styled$Events$onClick = function (msg) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Main$backButton = function (model) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$button,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[$author$project$Main$activeButtonStyles])),
				$rtfeldman$elm_css$Html$Styled$Events$onClick($author$project$Main$Back)
			]),
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$text(
				A2($author$project$Main$i18n, model, 'back'))
			]));
};
var $author$project$Main$accent = $rtfeldman$elm_css$Css$hex('4F7CAC');
var $rtfeldman$elm_css$Css$row = {flexDirection: $rtfeldman$elm_css$Css$Structure$Compatible, flexDirectionOrWrap: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'row'};
var $rtfeldman$elm_css$Css$column = _Utils_update(
	$rtfeldman$elm_css$Css$row,
	{value: 'column'});
var $rtfeldman$elm_css$Css$displayFlex = A2($rtfeldman$elm_css$Css$property, 'display', 'flex');
var $rtfeldman$elm_css$Css$flexDirection = $rtfeldman$elm_css$Css$prop1('flex-direction');
var $rtfeldman$elm_css$Css$justifyContent = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'justifyContent',
		'justify-content',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $author$project$Main$centerWrap = function (list) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						A2($rtfeldman$elm_css$Css$property, 'grid-column', '2'),
						$rtfeldman$elm_css$Css$displayFlex,
						$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
						$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
						$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center)
					]))
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$displayFlex,
								$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
								$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$accent),
								$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center),
								$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
								$rtfeldman$elm_css$Css$padding(
								$rtfeldman$elm_css$Css$px(10))
							]))
					]),
				list)
			]));
};
var $rtfeldman$elm_css$Css$border = $rtfeldman$elm_css$Css$prop1('border');
var $rtfeldman$elm_css$Css$checked = $rtfeldman$elm_css$Css$pseudoClass('checked');
var $rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			$rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2($elm$virtual_dom$VirtualDom$property, key, value),
			_List_Nil,
			'');
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$checked = $rtfeldman$elm_css$Html$Styled$Attributes$boolProperty('checked');
var $rtfeldman$elm_css$Css$height = $rtfeldman$elm_css$Css$prop1('height');
var $rtfeldman$elm_css$Html$Styled$input = $rtfeldman$elm_css$Html$Styled$node('input');
var $rtfeldman$elm_css$Html$Styled$label = $rtfeldman$elm_css$Html$Styled$node('label');
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $rtfeldman$elm_css$Html$Styled$Events$targetChecked = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	$elm$json$Json$Decode$bool);
var $rtfeldman$elm_css$Html$Styled$Events$onCheck = function (tagger) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, tagger, $rtfeldman$elm_css$Html$Styled$Events$targetChecked));
};
var $rtfeldman$elm_css$Css$position = $rtfeldman$elm_css$Css$prop1('position');
var $rtfeldman$elm_css$Css$relative = {position: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'relative'};
var $rtfeldman$elm_css$Css$top = $rtfeldman$elm_css$Css$prop1('top');
var $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $rtfeldman$elm_css$Html$Styled$Attributes$type_ = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('type');
var $rtfeldman$elm_css$Css$width = $rtfeldman$elm_css$Css$prop1('width');
var $author$project$Main$checkBox = F5(
	function (model, isChecked, labelTextId, dataMessage, newData) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$label,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$padding(
							$rtfeldman$elm_css$Css$em(1)),
							$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative)
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$input,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$type_('checkbox'),
							$rtfeldman$elm_css$Html$Styled$Attributes$checked(isChecked),
							$rtfeldman$elm_css$Html$Styled$Events$onCheck(
							function (r) {
								return dataMessage(newData);
							}),
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$position($rtfeldman$elm_css$Css$relative),
									$rtfeldman$elm_css$Css$width(
									$rtfeldman$elm_css$Css$em(1)),
									$rtfeldman$elm_css$Css$height(
									$rtfeldman$elm_css$Css$em(1)),
									$rtfeldman$elm_css$Css$border(
									$rtfeldman$elm_css$Css$px(1)),
									$rtfeldman$elm_css$Css$borderRadius(
									$rtfeldman$elm_css$Css$px(2)),
									$rtfeldman$elm_css$Css$top(
									$rtfeldman$elm_css$Css$em(0.3)),
									$rtfeldman$elm_css$Css$borderStyle($rtfeldman$elm_css$Css$solid),
									$rtfeldman$elm_css$Css$outline($rtfeldman$elm_css$Css$zero),
									A2($rtfeldman$elm_css$Css$property, 'appearance', 'none'),
									A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'none'),
									$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$background),
									$rtfeldman$elm_css$Css$checked(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$dark)
										]))
								]))
						]),
					_List_Nil),
					$rtfeldman$elm_css$Html$Styled$text(
					A2($author$project$Main$i18n, model, labelTextId))
				]));
	});
var $author$project$Main$dayList = _List_fromArray(
	['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']);
var $rtfeldman$elm_css$Css$borderBox = {backgroundClip: $rtfeldman$elm_css$Css$Structure$Compatible, boxSizing: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'border-box'};
var $rtfeldman$elm_css$Css$boxSizing = $rtfeldman$elm_css$Css$prop1('box-sizing');
var $author$project$Main$dropdownStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A2($rtfeldman$elm_css$Css$property, 'appearance', 'none'),
			A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'none'),
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$px(5)),
			$rtfeldman$elm_css$Css$borderStyle($rtfeldman$elm_css$Css$solid),
			$rtfeldman$elm_css$Css$outline($rtfeldman$elm_css$Css$zero),
			$rtfeldman$elm_css$Css$padding(
			$rtfeldman$elm_css$Css$px(8)),
			$rtfeldman$elm_css$Css$boxSizing($rtfeldman$elm_css$Css$borderBox)
		]));
var $author$project$Main$monthList = _List_fromArray(
	['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']);
var $rtfeldman$elm_css$Html$Styled$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $rtfeldman$elm_css$Html$Styled$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $rtfeldman$elm_css$Html$Styled$Events$onInput = function (tagger) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$rtfeldman$elm_css$Html$Styled$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $rtfeldman$elm_css$Html$Styled$Events$targetValue)));
};
var $rtfeldman$elm_css$Html$Styled$option = $rtfeldman$elm_css$Html$Styled$node('option');
var $rtfeldman$elm_css$Html$Styled$select = $rtfeldman$elm_css$Html$Styled$node('select');
var $rtfeldman$elm_css$Html$Styled$Attributes$selected = $rtfeldman$elm_css$Html$Styled$Attributes$boolProperty('selected');
var $author$project$Main$yearList = function (currentYear) {
	var year = A2($elm$core$Maybe$withDefault, 2020, currentYear);
	return A2(
		$elm$core$List$cons,
		'',
		A2(
			$elm$core$List$map,
			function (r) {
				return $elm$core$String$fromInt(year - r);
			},
			A2($elm$core$List$range, 0, 120)));
};
var $author$project$Main$dateSelector = F7(
	function (model, dayValue, dayInput, monthValue, monthInput, yearValue, yearInput) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$displayFlex,
							$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
							$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center)
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$displayFlex,
									$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
									$author$project$Main$defaultMargin
								]))
						]),
					_List_fromArray(
						[
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[$author$project$Main$defaultMargin]))
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text(
									A2($author$project$Main$i18n, model, 'month'))
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$select,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Events$onInput(monthInput),
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[$author$project$Main$dropdownStyles]))
								]),
							A2(
								$elm$core$List$map,
								function (r) {
									return A2(
										$rtfeldman$elm_css$Html$Styled$option,
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$Attributes$selected(
												_Utils_eq(r, monthValue))
											]),
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$text(r)
											]));
								},
								$author$project$Main$monthList))
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$displayFlex,
									$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
									$author$project$Main$defaultMargin
								]))
						]),
					_List_fromArray(
						[
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[$author$project$Main$defaultMargin]))
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text(
									A2($author$project$Main$i18n, model, 'day'))
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$select,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Events$onInput(dayInput),
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[$author$project$Main$dropdownStyles]))
								]),
							A2(
								$elm$core$List$map,
								function (r) {
									return A2(
										$rtfeldman$elm_css$Html$Styled$option,
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$Attributes$selected(
												_Utils_eq(r, dayValue))
											]),
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$text(r)
											]));
								},
								$author$project$Main$dayList))
						])),
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$displayFlex,
									$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
									$author$project$Main$defaultMargin
								]))
						]),
					_List_fromArray(
						[
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[$author$project$Main$defaultMargin]))
								]),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$text(
									A2($author$project$Main$i18n, model, 'year'))
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$select,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Events$onInput(yearInput),
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[$author$project$Main$dropdownStyles]))
								]),
							A2(
								$elm$core$List$map,
								function (r) {
									return A2(
										$rtfeldman$elm_css$Html$Styled$option,
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$Attributes$selected(
												_Utils_eq(r, yearValue))
											]),
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$text(r)
											]));
								},
								$author$project$Main$yearList(model.currentYear)))
						]))
				]));
	});
var $rtfeldman$elm_css$Css$flexEnd = $rtfeldman$elm_css$Css$prop1('flex-end');
var $rtfeldman$elm_css$Css$flexStart = $rtfeldman$elm_css$Css$prop1('flex-start');
var $rtfeldman$elm_css$Css$flexWrap = $rtfeldman$elm_css$Css$prop1('flex-wrap');
var $rtfeldman$elm_css$Html$Styled$form = $rtfeldman$elm_css$Html$Styled$node('form');
var $author$project$Main$Next = {$: 'Next'};
var $author$project$Main$disabledButtonStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$dark),
			$rtfeldman$elm_css$Css$color($author$project$Main$background),
			$author$project$Main$defaultMargin,
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$px(5)),
			$rtfeldman$elm_css$Css$borderTopColor($author$project$Main$dark),
			$rtfeldman$elm_css$Css$borderLeftColor($author$project$Main$dark),
			$rtfeldman$elm_css$Css$borderBottomColor($author$project$Main$dark),
			$rtfeldman$elm_css$Css$borderRightColor($author$project$Main$dark),
			$rtfeldman$elm_css$Css$borderStyle($rtfeldman$elm_css$Css$solid),
			A2($rtfeldman$elm_css$Css$property, 'appearance', 'none'),
			A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'none'),
			$rtfeldman$elm_css$Css$padding(
			$rtfeldman$elm_css$Css$px(4)),
			$rtfeldman$elm_css$Css$outline($rtfeldman$elm_css$Css$zero)
		]));
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Main$validate = function (model) {
	var s = model.state.spouse;
	var elig = model.state.eligibility;
	var d = model.state.personal;
	var c = model.state.children;
	if (!model.debug) {
		var _v0 = model.focusedEntry;
		switch (_v0.$) {
			case 'CurrentlyInUS':
				var _v1 = elig.currentlyInUS;
				if (_v1.$ === 'Nothing') {
					return false;
				} else {
					return true;
				}
			case 'InUSLessThanOneYear':
				var _v2 = elig.lessThanOneYear;
				if (_v2.$ === 'Nothing') {
					return false;
				} else {
					return true;
				}
			case 'NotEligible':
				return false;
			case 'Name':
				return (d.firstName !== '') && (d.lastName !== '');
			case 'Aliases':
				return true;
			case 'HomeAddress':
				var address = d.homeAddress;
				var validAreaCode = address.areaCode !== '';
				var validCity = address.city !== '';
				var validPhone = address.phoneNumber !== '';
				var validState = address.state !== '';
				var validStreetName = address.streetName !== '';
				var validStreetNumber = address.streetNumber !== '';
				var validZip = address.zipCode !== '';
				return validStreetNumber && (validStreetName && (validCity && (validState && (validZip && (validAreaCode && validPhone)))));
			case 'EnterMailingAddress':
				var address = d.mailingAddress;
				var validAreaCode = address.areaCode !== '';
				var validCity = address.city !== '';
				var validPhone = address.phoneNumber !== '';
				var validState = address.state !== '';
				var validStreetName = address.streetName !== '';
				var validStreetNumber = address.streetNumber !== '';
				var validZip = address.zipCode !== '';
				return validStreetNumber && (validStreetName && (validCity && (validState && (validZip && (validAreaCode && validPhone)))));
			case 'HomeMailingSame':
				return !_Utils_eq(d.homeMailingSame, $elm$core$Maybe$Nothing);
			case 'EnterGender':
				return !_Utils_eq(d.gender, $elm$core$Maybe$Nothing);
			case 'EnterMaritalStatus':
				return !_Utils_eq(d.maritalStatus, $elm$core$Maybe$Nothing);
			case 'BirthInfo':
				return (d.yearOfBirth !== '') && ((d.monthOfBirth !== '') && ((d.dayOfBirth !== '') && ((d.countryOfBirth !== '') && (d.cityOfBirth !== ''))));
			case 'PresentNationality':
				return d.presentNationality !== '';
			case 'NationalityAtBirth':
				return d.nationalityAtBirth !== '';
			case 'RaceEthnicity':
				return d.raceEthnicOrTribalGroup !== '';
			case 'Religion':
				return true;
			case 'NativeLanguage':
				return d.nativeLanguage !== '';
			case 'FluentInEnglish':
				return !_Utils_eq(d.fluentInEnglish, $elm$core$Maybe$Nothing);
			case 'OtherLanguages':
				return true;
			case 'ImmigrationCourtHistoryEntry':
				return !_Utils_eq(d.immigrationCourtHistory, $elm$core$Maybe$Nothing);
			case 'I94':
				return true;
			case 'AlienRegistration':
				return true;
			case 'SSN':
				return true;
			case 'USCISAccount':
				return true;
			case 'LeftHomeCountry':
				return (d.lastLeftHomeCountryDay !== '') && ((d.lastLeftHomeCountryMonth !== '') && (d.lastLeftHomeCountryYear !== ''));
			case 'MostRecentEntry':
				var e = d.mostRecentEntry;
				return (e.day !== '') && ((e.month !== '') && ((e.year !== '') && ((e.place !== '') && (e.status !== ''))));
			case 'MostRecentEntryExpiration':
				return (d.entryExpirationDay !== '') && ((d.entryExpirationMonth !== '') && (d.entryExpirationYear !== ''));
			case 'OtherEntries':
				return true;
			case 'HasPassport':
				return !_Utils_eq(d.hasPassport, $elm$core$Maybe$Nothing);
			case 'HasOtherTravelDoc':
				return !_Utils_eq(d.hasOtherTravelDoc, $elm$core$Maybe$Nothing);
			case 'TravelDocCountry':
				return d.travelDocCountry !== '';
			case 'TravelDocNumber':
				return d.travelDocNumber !== '';
			case 'TravelDocExpiration':
				return (d.travelDocExpirationDay !== '') && ((d.travelDocExpirationMonth !== '') && (d.travelDocExpirationYear !== ''));
			case 'SpouseName':
				return (s.firstName !== '') && (s.lastName !== '');
			case 'SpouseAliases':
				return true;
			case 'SpouseBirth':
				return (s.cityOfBirth !== '') && ((s.countryOfBirth !== '') && ((s.dayOfBirth !== '') && ((s.monthOfBirth !== '') && (s.yearOfBirth !== ''))));
			case 'SpouseNationality':
				return s.nationality !== '';
			case 'SpouseGender':
				return !_Utils_eq(s.gender, $elm$core$Maybe$Nothing);
			case 'SpouseRaceEthnicity':
				return s.raceEthnicityOrTribalGroup !== '';
			case 'SpouseAlienRegistration':
				return true;
			case 'SpouseTravelDoc':
				return true;
			case 'SpouseSSN':
				return true;
			case 'MarriageInfo':
				return (s.placeOfMarriage !== '') && ((s.marriageDay !== '') && ((s.marriageMonth !== '') && (s.marriageYear !== '')));
			case 'SpouseInUS':
				return !_Utils_eq(s.inUS, $elm$core$Maybe$Nothing);
			case 'SpouseLocation':
				return s.currentLocation !== '';
			case 'SpouseLastEntry':
				return (s.lastEntryDay !== '') && ((s.lastEntryMonth !== '') && ((s.lastEntryYear !== '') && ((s.lastEntryPlace !== '') && (s.statusOnLastAdmission !== ''))));
			case 'SpouseI94':
				return true;
			case 'SpouseCurrentStatus':
				return s.currentStatus !== '';
			case 'SpousePreviousArrival':
				return true;
			case 'SpouseImmigrationCourt':
				return !_Utils_eq(s.inImmigrationCourt, $elm$core$Maybe$Nothing);
			case 'SpouseIncluded':
				return !_Utils_eq(s.includedInApplication, $elm$core$Maybe$Nothing);
			case 'NumberOfChildren':
				return true;
			case 'ChildName':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return (child.firstName !== '') && (child.lastName !== '');
				} else {
					return true;
				}
			case 'ChildBirth':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return (child.cityOfBirth !== '') && ((child.countryOfBirth !== '') && ((child.dayOfBirth !== '') && ((child.monthOfBirth !== '') && (child.yearOfBirth !== ''))));
				} else {
					return true;
				}
			case 'ChildNationality':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return child.nationality !== '';
				} else {
					return true;
				}
			case 'ChildGender':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return !_Utils_eq(child.gender, $elm$core$Maybe$Nothing);
				} else {
					return true;
				}
			case 'ChildRaceEthnicity':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return child.raceEthnicityOrTribalGroup !== '';
				} else {
					return true;
				}
			case 'ChildMaritalStatus':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return !_Utils_eq(child.maritalStatus, $elm$core$Maybe$Nothing);
				} else {
					return true;
				}
			case 'ChildAlienRegistration':
				var n = _v0.a;
				return true;
			case 'ChildTravelDoc':
				var n = _v0.a;
				return true;
			case 'ChildSSN':
				var n = _v0.a;
				return true;
			case 'ChildInUS':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return !_Utils_eq(child.inUS, $elm$core$Maybe$Nothing);
				} else {
					return true;
				}
			case 'ChildLocation':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return child.currentLocation !== '';
				} else {
					return true;
				}
			case 'ChildLastEntry':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return (child.lastEntryDay !== '') && ((child.lastEntryMonth !== '') && ((child.lastEntryYear !== '') && ((child.lastEntryPlace !== '') && (child.statusOnLastAdmission !== ''))));
				} else {
					return true;
				}
			case 'ChildI94':
				var n = _v0.a;
				return true;
			case 'ChildCurrentStatus':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return child.currentStatus !== '';
				} else {
					return true;
				}
			case 'ChildImmigrationCourt':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return !_Utils_eq(child.inImmigrationCourt, $elm$core$Maybe$Nothing);
				} else {
					return true;
				}
			case 'ChildIncluded':
				var n = _v0.a;
				var maybeChild = A2($elm_community$list_extra$List$Extra$getAt, n - 1, c);
				if (maybeChild.$ === 'Just') {
					var child = maybeChild.a;
					return !_Utils_eq(child.includedInApplication, $elm$core$Maybe$Nothing);
				} else {
					return true;
				}
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $author$project$Main$nextButton = function (model) {
	return $author$project$Main$validate(model) ? A2(
		$rtfeldman$elm_css$Html$Styled$button,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[$author$project$Main$activeButtonStyles])),
				$rtfeldman$elm_css$Html$Styled$Events$onClick($author$project$Main$Next)
			]),
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$text(
				A2($author$project$Main$i18n, model, 'next'))
			])) : A2(
		$rtfeldman$elm_css$Html$Styled$button,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[$author$project$Main$disabledButtonStyles]))
			]),
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$text(
				A2($author$project$Main$i18n, model, 'next'))
			]));
};
var $author$project$Main$nextBackWrap = F2(
	function (model, content) {
		return $author$project$Main$centerWrap(
			$elm$core$List$concat(
				_List_fromArray(
					[
						_List_fromArray(
						[
							$author$project$Main$backButton(model)
						]),
						content,
						_List_fromArray(
						[
							$author$project$Main$nextButton(model)
						])
					])));
	});
var $rtfeldman$elm_css$Css$maxWidth = $rtfeldman$elm_css$Css$prop1('max-width');
var $rtfeldman$elm_css$Html$Styled$p = $rtfeldman$elm_css$Html$Styled$node('p');
var $rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		$rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn($rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var $author$project$Main$prompt = F3(
	function (model, additionalStyles, textId) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$p,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center),
							$rtfeldman$elm_css$Css$maxWidth(
							$rtfeldman$elm_css$Css$px(500)),
							$author$project$Main$defaultMargin,
							$rtfeldman$elm_css$Css$batch(additionalStyles)
						]))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(
					A2($author$project$Main$i18n, model, textId))
				]));
	});
var $author$project$Main$setMaybe = F2(
	function (isAlreadyChecked, x) {
		return isAlreadyChecked ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(x);
	});
var $author$project$Main$genderSelector = F4(
	function (model, currentGender, promptId, updateFunction) {
		var maleChecked = function () {
			if ((currentGender.$ === 'Just') && (currentGender.a.$ === 'MALE')) {
				var _v3 = currentGender.a;
				return true;
			} else {
				return false;
			}
		}();
		var femaleChecked = function () {
			if ((currentGender.$ === 'Just') && (currentGender.a.$ === 'FEMALE')) {
				var _v1 = currentGender.a;
				return true;
			} else {
				return false;
			}
		}();
		return A2(
			$author$project$Main$nextBackWrap,
			model,
			_List_fromArray(
				[
					A3($author$project$Main$prompt, model, _List_Nil, promptId),
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$displayFlex,
									$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
									$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center),
									$author$project$Main$defaultMargin
								]))
						]),
					_List_fromArray(
						[
							A5(
							$author$project$Main$checkBox,
							model,
							maleChecked,
							'male',
							updateFunction,
							A2($author$project$Main$setMaybe, maleChecked, $author$project$DataTypes$MALE)),
							A5(
							$author$project$Main$checkBox,
							model,
							femaleChecked,
							'female',
							updateFunction,
							A2($author$project$Main$setMaybe, femaleChecked, $author$project$DataTypes$FEMALE))
						]))
				]));
	});
var $rtfeldman$elm_css$Css$marginLeft = $rtfeldman$elm_css$Css$prop1('margin-left');
var $rtfeldman$elm_css$Css$borderColor = function (c) {
	return A2($rtfeldman$elm_css$Css$property, 'border-color', c.value);
};
var $rtfeldman$elm_css$Css$borderWidth = $rtfeldman$elm_css$Css$prop1('border-width');
var $author$project$Main$highlight = $rtfeldman$elm_css$Css$hex('f06e11');
var $rtfeldman$elm_css$Css$transparent = {color: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'transparent'};
var $author$project$Main$inputStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			$author$project$Main$defaultMargin,
			A2($rtfeldman$elm_css$Css$property, 'appearance', 'none'),
			A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'none'),
			$rtfeldman$elm_css$Css$borderRadius(
			$rtfeldman$elm_css$Css$px(3)),
			$rtfeldman$elm_css$Css$outline($rtfeldman$elm_css$Css$zero),
			$rtfeldman$elm_css$Css$borderWidth(
			$rtfeldman$elm_css$Css$px(2)),
			$rtfeldman$elm_css$Css$borderStyle($rtfeldman$elm_css$Css$solid),
			$rtfeldman$elm_css$Css$borderColor($rtfeldman$elm_css$Css$transparent),
			$rtfeldman$elm_css$Css$focus(
			_List_fromArray(
				[
					$rtfeldman$elm_css$Css$borderColor($author$project$Main$highlight)
				])),
			$rtfeldman$elm_css$Css$padding(
			$rtfeldman$elm_css$Css$px(7))
		]));
var $rtfeldman$elm_css$Html$Styled$Attributes$placeholder = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('placeholder');
var $rtfeldman$elm_css$Html$Styled$Attributes$value = $rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('value');
var $author$project$Main$textInput = F4(
	function (value, placeholder, additionalStyles, updateFunction) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$input,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$author$project$Main$inputStyles,
							$rtfeldman$elm_css$Css$batch(additionalStyles)
						])),
					$rtfeldman$elm_css$Html$Styled$Attributes$type_('input'),
					$rtfeldman$elm_css$Html$Styled$Attributes$value(value),
					$rtfeldman$elm_css$Html$Styled$Attributes$placeholder(placeholder),
					$rtfeldman$elm_css$Html$Styled$Events$onInput(updateFunction)
				]),
			_List_Nil);
	});
var $author$project$Main$labeledTextInput = F4(
	function (model, labelId, value, updateFunction) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$displayFlex,
							$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column)
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$marginLeft(
									$rtfeldman$elm_css$Css$px(10))
								]))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(
							A2($author$project$Main$i18n, model, labelId))
						])),
					A4($author$project$Main$textInput, value, '', _List_Nil, updateFunction)
				]));
	});
var $rtfeldman$elm_css$Css$left = $rtfeldman$elm_css$Css$prop1('left');
var $rtfeldman$elm_css$Css$minWidth = $rtfeldman$elm_css$Css$prop1('min-width');
var $rtfeldman$elm_css$Html$Styled$Events$alwaysPreventDefault = function (msg) {
	return _Utils_Tuple2(msg, true);
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $rtfeldman$elm_css$Html$Styled$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $rtfeldman$elm_css$Html$Styled$Events$onSubmit = function (msg) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$Events$preventDefaultOn,
		'submit',
		A2(
			$elm$json$Json$Decode$map,
			$rtfeldman$elm_css$Html$Styled$Events$alwaysPreventDefault,
			$elm$json$Json$Decode$succeed(msg)));
};
var $rtfeldman$elm_css$Html$Styled$h4 = $rtfeldman$elm_css$Html$Styled$node('h4');
var $author$project$Main$multiEntryElement = F2(
	function (index, entry) {
		return A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							A2($rtfeldman$elm_css$Css$property, 'grid-column', '1'),
							A2(
							$rtfeldman$elm_css$Css$property,
							'grid-row',
							$elm$core$String$fromInt(index + 2)),
							$author$project$Main$defaultMargin,
							$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center)
						]))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(entry)
				]));
	});
var $elm_community$list_extra$List$Extra$removeAt = F2(
	function (index, l) {
		if (index < 0) {
			return l;
		} else {
			var _v0 = A2($elm$core$List$drop, index, l);
			if (!_v0.b) {
				return l;
			} else {
				var rest = _v0.b;
				return _Utils_ap(
					A2($elm$core$List$take, index, l),
					rest);
			}
		}
	});
var $author$project$Main$multiEntryRemoveButton = F5(
	function (model, currentList, removeFunction, index, _v0) {
		var newList = A2($elm_community$list_extra$List$Extra$removeAt, index, currentList);
		return A2(
			$rtfeldman$elm_css$Html$Styled$form,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							A2($rtfeldman$elm_css$Css$property, 'grid-column', '2'),
							A2(
							$rtfeldman$elm_css$Css$property,
							'grid-row',
							$elm$core$String$fromInt(index + 2))
						])),
					$rtfeldman$elm_css$Html$Styled$Events$onSubmit(
					removeFunction(newList))
				]),
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$button,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$type_('submit'),
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[$author$project$Main$activeButtonStyles, $author$project$Main$defaultMargin]))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(
							A2($author$project$Main$i18n, model, 'remove'))
						]))
				]));
	});
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $author$project$Main$removeList = F5(
	function (model, currentList, listNameId, printFunction, removeFunction) {
		var numEntries = $elm$core$List$length(currentList);
		var gridRows = A2($elm$core$String$repeat, numEntries + 1, '1fr ');
		if (!numEntries) {
			return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
		} else {
			return A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
								A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '1fr 1fr'),
								A2($rtfeldman$elm_css$Css$property, 'grid-template-rows', gridRows),
								$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
								$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center)
							]))
					]),
				A2(
					$elm$core$List$cons,
					A2(
						$rtfeldman$elm_css$Html$Styled$h4,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										A2($rtfeldman$elm_css$Css$property, 'grid-column', '1/3'),
										A2($rtfeldman$elm_css$Css$property, 'grid-row', '1'),
										$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center)
									]))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(
								A2($author$project$Main$i18n, model, listNameId))
							])),
					A2(
						$elm$core$List$append,
						A2(
							$elm$core$List$indexedMap,
							$author$project$Main$multiEntryElement,
							A2($elm$core$List$map, printFunction, currentList)),
						A2(
							$elm$core$List$indexedMap,
							A3($author$project$Main$multiEntryRemoveButton, model, currentList, removeFunction),
							currentList))));
		}
	});
var $author$project$Main$multiTextEntry = F8(
	function (model, currentInput, currentList, promptTextId, listNameId, updateFunction, addFunction, removeFunction) {
		var newList = (currentInput !== '') ? A2($elm$core$List$cons, currentInput, currentList) : currentList;
		return A2(
			$author$project$Main$nextBackWrap,
			model,
			_List_fromArray(
				[
					A3($author$project$Main$prompt, model, _List_Nil, promptTextId),
					A2(
					$rtfeldman$elm_css$Html$Styled$form,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Events$onSubmit(
							addFunction(newList))
						]),
					_List_fromArray(
						[
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center)
										]))
								]),
							_List_fromArray(
								[
									A4($author$project$Main$textInput, currentInput, '', _List_Nil, updateFunction),
									A2(
									$rtfeldman$elm_css$Html$Styled$button,
									_List_fromArray(
										[
											$rtfeldman$elm_css$Html$Styled$Attributes$type_('submit'),
											$rtfeldman$elm_css$Html$Styled$Attributes$css(
											_List_fromArray(
												[$author$project$Main$activeButtonStyles]))
										]),
									_List_fromArray(
										[
											$rtfeldman$elm_css$Html$Styled$text(
											A2($author$project$Main$i18n, model, 'add'))
										]))
								]))
						])),
					A5(
					$author$project$Main$removeList,
					model,
					currentList,
					listNameId,
					function (r) {
						return r;
					},
					removeFunction)
				]));
	});
var $author$project$Main$numChildrenList = A2(
	$elm$core$List$cons,
	'',
	A2(
		$elm$core$List$map,
		$elm$core$String$fromInt,
		A2($elm$core$List$range, 0, 20)));
var $rtfeldman$elm_css$Css$PcUnits = {$: 'PcUnits'};
var $rtfeldman$elm_css$Css$pc = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$PcUnits, 'pc');
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $author$project$Main$printEntry = function (e) {
	return $elm$core$String$concat(
		_List_fromArray(
			[e.place, ', ', e.month, '/', e.day, '/', e.year, ', ', e.status]));
};
var $author$project$Main$singleTextEntry = F4(
	function (model, promptTextId, value, updateFunction) {
		return A2(
			$author$project$Main$nextBackWrap,
			model,
			_List_fromArray(
				[
					A3($author$project$Main$prompt, model, _List_Nil, promptTextId),
					A4($author$project$Main$textInput, value, '', _List_Nil, updateFunction)
				]));
	});
var $rtfeldman$elm_css$Css$wrap = {flexDirectionOrWrap: $rtfeldman$elm_css$Css$Structure$Compatible, flexWrap: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'wrap'};
var $author$project$Main$yesNoCheckBox = F4(
	function (model, promptId, value, updateFunction) {
		var yesChecked = A2($elm$core$Maybe$withDefault, false, value);
		var noChecked = function () {
			if (value.$ === 'Just') {
				var b = value.a;
				return !b;
			} else {
				return false;
			}
		}();
		return A2(
			$author$project$Main$nextBackWrap,
			model,
			_List_fromArray(
				[
					A3($author$project$Main$prompt, model, _List_Nil, promptId),
					A2(
					$rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$displayFlex,
									$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
									$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center),
									$author$project$Main$defaultMargin
								]))
						]),
					_List_fromArray(
						[
							A5(
							$author$project$Main$checkBox,
							model,
							yesChecked,
							'yes',
							updateFunction,
							A2($author$project$Main$setMaybe, yesChecked, true)),
							A5(
							$author$project$Main$checkBox,
							model,
							noChecked,
							'no',
							updateFunction,
							A2($author$project$Main$setMaybe, noChecked, false))
						]))
				]));
	});
var $author$project$Main$render = F2(
	function (element, model) {
		var s = model.state.spouse;
		var elig = model.state.eligibility;
		var d = model.state.personal;
		var c = model.state.children;
		switch (element.$) {
			case 'CurrentlyInUS':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'currently-in-us',
					elig.currentlyInUS,
					function (r) {
						return $author$project$Main$SetEligibility(
							_Utils_update(
								elig,
								{currentlyInUS: r}));
					});
			case 'InUSLessThanOneYear':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'less-than-one-year',
					elig.lessThanOneYear,
					function (r) {
						return $author$project$Main$SetEligibility(
							_Utils_update(
								elig,
								{lessThanOneYear: r}));
					});
			case 'NotEligible':
				return $author$project$Main$centerWrap(
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'not-eligible-explanation'),
							$author$project$Main$backButton(model)
						]));
			case 'Name':
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'name-entry'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'first-name',
									d.firstName,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{firstName: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'middle-name',
									d.middleName,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{middleName: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'last-name',
									d.lastName,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{lastName: r}));
									})
								]))
						]));
			case 'Aliases':
				return A8(
					$author$project$Main$multiTextEntry,
					model,
					d.currentAliasInput,
					d.aliases,
					'aliases-entry',
					'aliases',
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{currentAliasInput: r}));
					},
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{aliases: r, currentAliasInput: ''}));
					},
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{aliases: r}));
					});
			case 'HomeAddress':
				var h = d.homeAddress;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'home-address-entry'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
											A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '1fr 4fr 1fr'),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center),
											$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$textInput,
									h.streetNumber,
									A2($author$project$Main$i18n, model, 'street-number'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '1/2')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{streetNumber: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.streetName,
									A2($author$project$Main$i18n, model, 'street-name'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '2/3')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{streetName: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.apartmentNumber,
									A2($author$project$Main$i18n, model, 'apt-number'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '3/4')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{apartmentNumber: r})
												}));
									})
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart),
											A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
											A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '2fr 2fr 1fr'),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$textInput,
									h.city,
									A2($author$project$Main$i18n, model, 'city'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '1/2')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{city: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.state,
									A2($author$project$Main$i18n, model, 'state'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '2/3')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{state: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.zipCode,
									A2($author$project$Main$i18n, model, 'zip-code'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '3/4')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{zipCode: r})
												}));
									})
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart),
											A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
											A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '1fr 2fr'),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$left),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$left)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$textInput,
									h.areaCode,
									A2($author$project$Main$i18n, model, 'area-code'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '1/2')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{areaCode: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.phoneNumber,
									A2($author$project$Main$i18n, model, 'phone-number'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '2/3')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													homeAddress: _Utils_update(
														h,
														{phoneNumber: r})
												}));
									})
								]))
						]));
			case 'HomeMailingSame':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'home-mailing-same-text',
					d.homeMailingSame,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{homeMailingSame: r}));
					});
			case 'EnterMailingAddress':
				var h = d.mailingAddress;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'mailing-address-entry'),
							A4(
							$author$project$Main$textInput,
							h.inCareOf,
							A2($author$project$Main$i18n, model, 'in-care-of'),
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart),
									$rtfeldman$elm_css$Css$minWidth(
									$rtfeldman$elm_css$Css$pc(20))
								]),
							function (r) {
								return $author$project$Main$SetPersonalData(
									_Utils_update(
										d,
										{
											mailingAddress: _Utils_update(
												h,
												{inCareOf: r})
										}));
							}),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
											A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '1fr 4fr 1fr'),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center),
											$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$textInput,
									h.streetNumber,
									A2($author$project$Main$i18n, model, 'street-number'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '1/2')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{streetNumber: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.streetName,
									A2($author$project$Main$i18n, model, 'street-name'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '2/3')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{streetName: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.apartmentNumber,
									A2($author$project$Main$i18n, model, 'apt-number'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '3/4')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{apartmentNumber: r})
												}));
									})
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart),
											A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
											A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '2fr 2fr 1fr'),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$textInput,
									h.city,
									A2($author$project$Main$i18n, model, 'city'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '1/2')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{city: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.state,
									A2($author$project$Main$i18n, model, 'state'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '2/3')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{state: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.zipCode,
									A2($author$project$Main$i18n, model, 'zip-code'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '3/4')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{zipCode: r})
												}));
									})
								])),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$alignSelf($rtfeldman$elm_css$Css$flexStart),
											A2($rtfeldman$elm_css$Css$property, 'display', 'grid'),
											A2($rtfeldman$elm_css$Css$property, 'grid-template-columns', '1fr 2fr'),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$left),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$left)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$textInput,
									h.areaCode,
									A2($author$project$Main$i18n, model, 'area-code'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '1/2')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{areaCode: r})
												}));
									}),
									A4(
									$author$project$Main$textInput,
									h.phoneNumber,
									A2($author$project$Main$i18n, model, 'phone-number'),
									_List_fromArray(
										[
											A2($rtfeldman$elm_css$Css$property, 'grid-column', '2/3')
										]),
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mailingAddress: _Utils_update(
														h,
														{phoneNumber: r})
												}));
									})
								]))
						]));
			case 'EnterGender':
				return A4(
					$author$project$Main$genderSelector,
					model,
					d.gender,
					'enter-gender',
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{gender: r}));
					});
			case 'EnterMaritalStatus':
				var status = d.maritalStatus;
				var widowedChecked = function () {
					if ((status.$ === 'Just') && (status.a.$ === 'WIDOWED')) {
						var _v8 = status.a;
						return true;
					} else {
						return false;
					}
				}();
				var singleChecked = function () {
					if ((status.$ === 'Just') && (status.a.$ === 'SINGLE')) {
						var _v6 = status.a;
						return true;
					} else {
						return false;
					}
				}();
				var marriedChecked = function () {
					if ((status.$ === 'Just') && (status.a.$ === 'MARRIED')) {
						var _v4 = status.a;
						return true;
					} else {
						return false;
					}
				}();
				var divorcedChecked = function () {
					if ((status.$ === 'Just') && (status.a.$ === 'DIVORCED')) {
						var _v2 = status.a;
						return true;
					} else {
						return false;
					}
				}();
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'enter-marital-status'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$center),
											$author$project$Main$defaultMargin
										]))
								]),
							_List_fromArray(
								[
									A5(
									$author$project$Main$checkBox,
									model,
									singleChecked,
									'single',
									$author$project$Main$SetPersonalData,
									_Utils_update(
										d,
										{
											maritalStatus: A2($author$project$Main$setMaybe, singleChecked, $author$project$DataTypes$SINGLE)
										})),
									A5(
									$author$project$Main$checkBox,
									model,
									marriedChecked,
									'married',
									$author$project$Main$SetPersonalData,
									_Utils_update(
										d,
										{
											maritalStatus: A2($author$project$Main$setMaybe, marriedChecked, $author$project$DataTypes$MARRIED)
										})),
									A5(
									$author$project$Main$checkBox,
									model,
									divorcedChecked,
									'divorced',
									$author$project$Main$SetPersonalData,
									_Utils_update(
										d,
										{
											maritalStatus: A2($author$project$Main$setMaybe, divorcedChecked, $author$project$DataTypes$DIVORCED)
										})),
									A5(
									$author$project$Main$checkBox,
									model,
									widowedChecked,
									'widowed',
									$author$project$Main$SetPersonalData,
									_Utils_update(
										d,
										{
											maritalStatus: A2($author$project$Main$setMaybe, widowedChecked, $author$project$DataTypes$WIDOWED)
										}))
								]))
						]));
			case 'BirthInfo':
				var yearUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{yearOfBirth: r}));
				};
				var year = d.yearOfBirth;
				var monthUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{monthOfBirth: r}));
				};
				var month = d.monthOfBirth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{dayOfBirth: r}));
				};
				var day = d.dayOfBirth;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'birth-prompt'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'city',
									d.cityOfBirth,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{cityOfBirth: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'country',
									d.countryOfBirth,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{countryOfBirth: r}));
									})
								]))
						]));
			case 'PresentNationality':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'present-nationality-entry',
					d.presentNationality,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{presentNationality: r}));
					});
			case 'NationalityAtBirth':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'nationality-at-birth-entry',
					d.nationalityAtBirth,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{nationalityAtBirth: r}));
					});
			case 'RaceEthnicity':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'race-ethnicity-entry',
					d.raceEthnicOrTribalGroup,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{raceEthnicOrTribalGroup: r}));
					});
			case 'Religion':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'religion-entry',
					d.religion,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{religion: r}));
					});
			case 'NativeLanguage':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'native-language-entry',
					d.nativeLanguage,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{nativeLanguage: r}));
					});
			case 'FluentInEnglish':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'fluent-in-english-entry',
					d.fluentInEnglish,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{fluentInEnglish: r}));
					});
			case 'OtherLanguages':
				var updateFunction = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{currentLanguagesInput: r}));
				};
				var removeFunction = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{otherLanguages: r}));
				};
				var addFunction = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{currentLanguagesInput: '', otherLanguages: r}));
				};
				return A8($author$project$Main$multiTextEntry, model, d.currentLanguagesInput, d.otherLanguages, 'other-languages-entry', 'other-languages', updateFunction, addFunction, removeFunction);
			case 'ImmigrationCourtHistoryEntry':
				var history = d.immigrationCourtHistory;
				var neverChecked = _Utils_eq(
					history,
					$elm$core$Maybe$Just($author$project$DataTypes$NEVER));
				var pastChecked = _Utils_eq(
					history,
					$elm$core$Maybe$Just($author$project$DataTypes$NOT_NOW_BUT_IN_THE_PAST));
				var currentlyChecked = _Utils_eq(
					history,
					$elm$core$Maybe$Just($author$project$DataTypes$CURRENTLY));
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'immigration-court-history-entry'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
											$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$flexStart),
											$author$project$Main$defaultMargin
										]))
								]),
							_List_fromArray(
								[
									A5(
									$author$project$Main$checkBox,
									model,
									neverChecked,
									'court-history-never',
									$author$project$Main$SetPersonalData,
									_Utils_update(
										d,
										{
											immigrationCourtHistory: A2($author$project$Main$setMaybe, neverChecked, $author$project$DataTypes$NEVER)
										})),
									A5(
									$author$project$Main$checkBox,
									model,
									currentlyChecked,
									'court-history-currently',
									$author$project$Main$SetPersonalData,
									_Utils_update(
										d,
										{
											immigrationCourtHistory: A2($author$project$Main$setMaybe, currentlyChecked, $author$project$DataTypes$CURRENTLY)
										})),
									A5(
									$author$project$Main$checkBox,
									model,
									pastChecked,
									'court-history-past',
									$author$project$Main$SetPersonalData,
									_Utils_update(
										d,
										{
											immigrationCourtHistory: A2($author$project$Main$setMaybe, pastChecked, $author$project$DataTypes$NOT_NOW_BUT_IN_THE_PAST)
										}))
								]))
						]));
			case 'I94':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'i94-entry',
					d.i94Number,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{i94Number: r}));
					});
			case 'AlienRegistration':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'alien-registration-entry',
					d.alienRegistrationNumber,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{alienRegistrationNumber: r}));
					});
			case 'SSN':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'ssn-entry',
					d.socialSecurityNumber,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{socialSecurityNumber: r}));
					});
			case 'USCISAccount':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'uscis-entry',
					d.uscisAccountNumber,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{uscisAccountNumber: r}));
					});
			case 'LeftHomeCountry':
				var yearUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{lastLeftHomeCountryYear: r}));
				};
				var year = d.lastLeftHomeCountryYear;
				var monthUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{lastLeftHomeCountryMonth: r}));
				};
				var month = d.lastLeftHomeCountryMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{lastLeftHomeCountryDay: r}));
				};
				var day = d.lastLeftHomeCountryDay;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'left-home-country-entry'),
							A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate)
						]));
			case 'MostRecentEntry':
				var e = d.mostRecentEntry;
				var month = e.month;
				var monthUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{
								mostRecentEntry: _Utils_update(
									e,
									{month: r})
							}));
				};
				var year = e.year;
				var yearUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{
								mostRecentEntry: _Utils_update(
									e,
									{year: r})
							}));
				};
				var dayUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{
								mostRecentEntry: _Utils_update(
									e,
									{day: r})
							}));
				};
				var day = e.day;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'most-recent-entry-prompt'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'place',
									e.place,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mostRecentEntry: _Utils_update(
														e,
														{place: r})
												}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'immigration-status',
									e.status,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{
													mostRecentEntry: _Utils_update(
														e,
														{status: r})
												}));
									})
								]))
						]));
			case 'MostRecentEntryExpiration':
				var yearUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{entryExpirationYear: r}));
				};
				var year = d.entryExpirationYear;
				var monthUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{entryExpirationMonth: r}));
				};
				var month = d.entryExpirationMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{entryExpirationDay: r}));
				};
				var day = d.entryExpirationDay;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'status-expiration-prompt'),
							A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate)
						]));
			case 'OtherEntries':
				var yearUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{currentEntryYear: r}));
				};
				var year = d.currentEntryYear;
				var statusUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{currentEntryStatus: r}));
				};
				var status = d.currentEntryStatus;
				var placeUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{currentEntryPlace: r}));
				};
				var place = d.currentEntryPlace;
				var monthUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{currentEntryMonth: r}));
				};
				var month = d.currentEntryMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{currentEntryDay: r}));
				};
				var day = d.currentEntryDay;
				var updatedEntries = ((day !== '') && ((month !== '') && ((year !== '') && ((place !== '') && (status !== ''))))) ? A2(
					$elm$core$List$append,
					d.otherEntries,
					_List_fromArray(
						[
							{day: day, month: month, place: place, status: status, year: year}
						])) : d.otherEntries;
				var submitFunction = $author$project$Main$SetPersonalData(
					_Utils_update(
						d,
						{currentEntryDay: '', currentEntryMonth: '', currentEntryPlace: '', currentEntryStatus: '', currentEntryYear: '', otherEntries: updatedEntries}));
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'other-entries-prompt'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center)
										]))
								]),
							_List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Html$Styled$form,
									_List_fromArray(
										[
											$rtfeldman$elm_css$Html$Styled$Events$onSubmit(submitFunction)
										]),
									_List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Html$Styled$div,
											_List_fromArray(
												[
													$rtfeldman$elm_css$Html$Styled$Attributes$css(
													_List_fromArray(
														[
															$rtfeldman$elm_css$Css$displayFlex,
															$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
															$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
															$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
														]))
												]),
											_List_fromArray(
												[
													A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate),
													A4($author$project$Main$labeledTextInput, model, 'place', place, placeUpdate),
													A4($author$project$Main$labeledTextInput, model, 'immigration-status', status, statusUpdate),
													A2(
													$rtfeldman$elm_css$Html$Styled$button,
													_List_fromArray(
														[
															$rtfeldman$elm_css$Html$Styled$Attributes$type_('submit'),
															$rtfeldman$elm_css$Html$Styled$Attributes$css(
															_List_fromArray(
																[$author$project$Main$activeButtonStyles]))
														]),
													_List_fromArray(
														[
															$rtfeldman$elm_css$Html$Styled$text(
															A2($author$project$Main$i18n, model, 'add'))
														]))
												]))
										])),
									A5(
									$author$project$Main$removeList,
									model,
									d.otherEntries,
									'us-entries',
									$author$project$Main$printEntry,
									function (r) {
										return $author$project$Main$SetPersonalData(
											_Utils_update(
												d,
												{otherEntries: r}));
									})
								]))
						]));
			case 'HasPassport':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'has-passport-entry',
					d.hasPassport,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{hasPassport: r}));
					});
			case 'HasOtherTravelDoc':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'has-other-travel-doc-entry',
					d.hasOtherTravelDoc,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{hasOtherTravelDoc: r}));
					});
			case 'TravelDocCountry':
				var promptId = _Utils_eq(
					d.hasPassport,
					$elm$core$Maybe$Just(true)) ? 'passport-country-entry' : 'travel-doc-country-entry';
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					promptId,
					d.travelDocCountry,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{travelDocCountry: r}));
					});
			case 'TravelDocNumber':
				var promptId = _Utils_eq(
					d.hasPassport,
					$elm$core$Maybe$Just(true)) ? 'passport-number-entry' : 'travel-doc-number-entry';
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					promptId,
					d.travelDocNumber,
					function (r) {
						return $author$project$Main$SetPersonalData(
							_Utils_update(
								d,
								{travelDocNumber: r}));
					});
			case 'TravelDocExpiration':
				var yearUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{travelDocExpirationYear: r}));
				};
				var year = d.travelDocExpirationYear;
				var promptId = _Utils_eq(
					d.hasPassport,
					$elm$core$Maybe$Just(true)) ? 'passport-expiration-entry' : 'travel-doc-expiration-entry';
				var monthUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{travelDocExpirationMonth: r}));
				};
				var month = d.travelDocExpirationMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetPersonalData(
						_Utils_update(
							d,
							{travelDocExpirationDay: r}));
				};
				var day = d.travelDocExpirationDay;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, promptId),
							A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate)
						]));
			case 'SpouseName':
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'spouse-name-entry'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'first-name',
									s.firstName,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{firstName: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'middle-name',
									s.middleName,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{middleName: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'last-name',
									s.lastName,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{lastName: r}));
									})
								]))
						]));
			case 'SpouseAliases':
				return A8(
					$author$project$Main$multiTextEntry,
					model,
					s.currentAliasInput,
					s.aliases,
					'spouse-aliases-entry',
					'aliases',
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{currentAliasInput: r}));
					},
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{aliases: r, currentAliasInput: ''}));
					},
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{aliases: r}));
					});
			case 'SpouseBirth':
				var yearUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{yearOfBirth: r}));
				};
				var year = s.yearOfBirth;
				var monthUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{monthOfBirth: r}));
				};
				var month = s.monthOfBirth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{dayOfBirth: r}));
				};
				var day = s.dayOfBirth;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'spouse-birth'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'city',
									s.cityOfBirth,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{cityOfBirth: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'country',
									s.countryOfBirth,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{countryOfBirth: r}));
									})
								]))
						]));
			case 'SpouseNationality':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'spouse-nationality',
					s.nationality,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{nationality: r}));
					});
			case 'SpouseGender':
				return A4(
					$author$project$Main$genderSelector,
					model,
					s.gender,
					'spouse-enter-gender',
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{gender: r}));
					});
			case 'SpouseRaceEthnicity':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'spouse-race-ethnicity',
					s.raceEthnicityOrTribalGroup,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{raceEthnicityOrTribalGroup: r}));
					});
			case 'SpouseAlienRegistration':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'spouse-alien-registration',
					s.alienRegistrationNumber,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{alienRegistrationNumber: r}));
					});
			case 'SpouseTravelDoc':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'spouse-travel-number',
					s.travelDocNumber,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{travelDocNumber: r}));
					});
			case 'SpouseSSN':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'spouse-ssn',
					s.socialSecurityNumber,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{socialSecurityNumber: r}));
					});
			case 'MarriageInfo':
				var yearUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{marriageYear: r}));
				};
				var year = s.marriageYear;
				var monthUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{marriageMonth: r}));
				};
				var month = s.marriageMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{marriageDay: r}));
				};
				var day = s.marriageDay;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'marriage-info-entry'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'place',
									s.placeOfMarriage,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{placeOfMarriage: r}));
									}),
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate)
								]))
						]));
			case 'SpouseInUS':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'spouse-in-us-prompt',
					s.inUS,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{inUS: r}));
					});
			case 'SpouseLocation':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'spouse-location-entry',
					s.currentLocation,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{currentLocation: r}));
					});
			case 'SpouseLastEntry':
				var yearUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{lastEntryYear: r}));
				};
				var year = s.lastEntryYear;
				var monthUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{lastEntryMonth: r}));
				};
				var month = s.lastEntryMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{lastEntryDay: r}));
				};
				var day = s.lastEntryDay;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'spouse-last-entry'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'place',
									s.lastEntryPlace,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{lastEntryPlace: r}));
									}),
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'immigration-status',
									s.statusOnLastAdmission,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{statusOnLastAdmission: r}));
									})
								]))
						]));
			case 'SpouseI94':
				return A4(
					$author$project$Main$singleTextEntry,
					model,
					'spouse-i94-entry',
					s.i94Number,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{i94Number: r}));
					});
			case 'SpouseCurrentStatus':
				var yearUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{statusExpirationYear: r}));
				};
				var year = s.statusExpirationYear;
				var monthUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{statusExpirationMonth: r}));
				};
				var month = s.statusExpirationMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{statusExpirationDay: r}));
				};
				var day = s.statusExpirationDay;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'spouse-current-status'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'immigration-status',
									s.currentStatus,
									function (r) {
										return $author$project$Main$SetSpouseData(
											_Utils_update(
												s,
												{currentStatus: r}));
									}),
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate)
								]))
						]));
			case 'SpousePreviousArrival':
				var yearUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{previousEntryYear: r}));
				};
				var year = s.previousEntryYear;
				var monthUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{previousEntryMonth: r}));
				};
				var month = s.previousEntryMonth;
				var dayUpdate = function (r) {
					return $author$project$Main$SetSpouseData(
						_Utils_update(
							s,
							{previousEntryDay: r}));
				};
				var day = s.previousEntryDay;
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'previous-entry-prompt'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate)
								]))
						]));
			case 'SpouseImmigrationCourt':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'spouse-in-court',
					s.inImmigrationCourt,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{inImmigrationCourt: r}));
					});
			case 'SpouseIncluded':
				return A4(
					$author$project$Main$yesNoCheckBox,
					model,
					'spouse-include',
					s.includedInApplication,
					function (r) {
						return $author$project$Main$SetSpouseData(
							_Utils_update(
								s,
								{includedInApplication: r}));
					});
			case 'NumberOfChildren':
				var numChildren = A2(
					$elm$core$Maybe$withDefault,
					'',
					A2($elm$core$Maybe$map, $elm$core$String$fromInt, model.state.numberOfChildren));
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'number-of-children-prompt'),
							A2(
							$rtfeldman$elm_css$Html$Styled$select,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Events$onInput($author$project$Main$SetNumChildren),
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[$author$project$Main$dropdownStyles]))
								]),
							A2(
								$elm$core$List$map,
								function (r) {
									return A2(
										$rtfeldman$elm_css$Html$Styled$option,
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$Attributes$selected(
												_Utils_eq(r, numChildren))
											]),
										_List_fromArray(
											[
												$rtfeldman$elm_css$Html$Styled$text(r)
											]));
								},
								$author$project$Main$numChildrenList))
						]));
			case 'ChildName':
				var n = element.a;
				var index = n - 1;
				var child = A2(
					$elm$core$Maybe$withDefault,
					$author$project$Main$defaultChildData,
					A2($elm_community$list_extra$List$Extra$getAt, index, c));
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'child-name-entry'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'first-name',
									child.firstName,
									function (r) {
										return A2(
											$author$project$Main$SetChildData,
											n,
											_Utils_update(
												child,
												{firstName: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'middle-name',
									child.middleName,
									function (r) {
										return A2(
											$author$project$Main$SetChildData,
											n,
											_Utils_update(
												child,
												{middleName: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'last-name',
									child.lastName,
									function (r) {
										return A2(
											$author$project$Main$SetChildData,
											n,
											_Utils_update(
												child,
												{lastName: r}));
									})
								]))
						]));
			case 'ChildBirth':
				var n = element.a;
				var index = n - 1;
				var child = A2(
					$elm$core$Maybe$withDefault,
					$author$project$Main$defaultChildData,
					A2($elm_community$list_extra$List$Extra$getAt, index, c));
				var day = child.dayOfBirth;
				var dayUpdate = function (r) {
					return A2(
						$author$project$Main$SetChildData,
						n,
						_Utils_update(
							child,
							{dayOfBirth: r}));
				};
				var month = child.monthOfBirth;
				var monthUpdate = function (r) {
					return A2(
						$author$project$Main$SetChildData,
						n,
						_Utils_update(
							child,
							{monthOfBirth: r}));
				};
				var year = child.yearOfBirth;
				var yearUpdate = function (r) {
					return A2(
						$author$project$Main$SetChildData,
						n,
						_Utils_update(
							child,
							{yearOfBirth: r}));
				};
				return A2(
					$author$project$Main$nextBackWrap,
					model,
					_List_fromArray(
						[
							A3($author$project$Main$prompt, model, _List_Nil, 'child-birth'),
							A2(
							$rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									$rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											$rtfeldman$elm_css$Css$displayFlex,
											$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$row),
											$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$flexEnd),
											$rtfeldman$elm_css$Css$flexWrap($rtfeldman$elm_css$Css$wrap)
										]))
								]),
							_List_fromArray(
								[
									A7($author$project$Main$dateSelector, model, day, dayUpdate, month, monthUpdate, year, yearUpdate),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'city',
									child.cityOfBirth,
									function (r) {
										return A2(
											$author$project$Main$SetChildData,
											n,
											_Utils_update(
												child,
												{cityOfBirth: r}));
									}),
									A4(
									$author$project$Main$labeledTextInput,
									model,
									'country',
									child.countryOfBirth,
									function (r) {
										return A2(
											$author$project$Main$SetChildData,
											n,
											_Utils_update(
												child,
												{countryOfBirth: r}));
									})
								]))
						]));
			case 'ChildNationality':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildGender':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildRaceEthnicity':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildMaritalStatus':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildAlienRegistration':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildTravelDoc':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildSSN':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildInUS':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildLocation':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildLastEntry':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildI94':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildCurrentStatus':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildImmigrationCourt':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			case 'ChildIncluded':
				var n = element.a;
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
			default:
				return A2($rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil);
		}
	});
var $author$project$Main$formEntryView = function (model) {
	return A2($author$project$Main$render, model.focusedEntry, model);
};
var $rtfeldman$elm_css$Html$Styled$h2 = $rtfeldman$elm_css$Html$Styled$node('h2');
var $author$project$Main$helpView = function (model) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						A2($rtfeldman$elm_css$Css$property, 'grid-column', '3'),
						$rtfeldman$elm_css$Css$displayFlex,
						$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
						$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$top),
						$rtfeldman$elm_css$Css$margin(
						$rtfeldman$elm_css$Css$em(3))
					]))
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$h2,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center)
							]))
					]),
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$text(
						A2($author$project$Main$i18n, model, 'help'))
					])),
				$rtfeldman$elm_css$Html$Styled$text(
				A2($author$project$Main$i18n, model, 'help-description'))
			]));
};
var $elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
var $rtfeldman$elm_css$VirtualDom$Styled$lazyHelp = F2(
	function (fn, arg) {
		return $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled(
			fn(arg));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$lazy = F2(
	function (fn, arg) {
		return $rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
			A3($elm$virtual_dom$VirtualDom$lazy2, $rtfeldman$elm_css$VirtualDom$Styled$lazyHelp, fn, arg));
	});
var $rtfeldman$elm_css$Html$Styled$Lazy$lazy = $rtfeldman$elm_css$VirtualDom$Styled$lazy;
var $author$project$Main$SetFormEntryElement = function (a) {
	return {$: 'SetFormEntryElement', a: a};
};
var $author$project$Main$formElementToDescription = F2(
	function (element, model) {
		switch (element.$) {
			case 'CurrentlyInUS':
				return A2($author$project$Main$i18n, model, 'us-residency');
			case 'InUSLessThanOneYear':
				return A2($author$project$Main$i18n, model, 'length-of-stay');
			case 'NotEligible':
				return A2($author$project$Main$i18n, model, 'not-eligible');
			case 'Name':
				return A2($author$project$Main$i18n, model, 'name');
			case 'Aliases':
				return A2($author$project$Main$i18n, model, 'aliases');
			case 'HomeAddress':
				return A2($author$project$Main$i18n, model, 'home-address');
			case 'HomeMailingSame':
				return A2($author$project$Main$i18n, model, 'home-mailing-same');
			case 'EnterMailingAddress':
				return A2($author$project$Main$i18n, model, 'mailing-address');
			case 'EnterGender':
				return A2($author$project$Main$i18n, model, 'gender');
			case 'EnterMaritalStatus':
				return A2($author$project$Main$i18n, model, 'marital-status');
			case 'BirthInfo':
				return A2($author$project$Main$i18n, model, 'birth-info');
			case 'PresentNationality':
				return A2($author$project$Main$i18n, model, 'present-nationality');
			case 'NationalityAtBirth':
				return A2($author$project$Main$i18n, model, 'nationality-at-birth');
			case 'RaceEthnicity':
				return A2($author$project$Main$i18n, model, 'race-ethnicity');
			case 'Religion':
				return A2($author$project$Main$i18n, model, 'religion');
			case 'NativeLanguage':
				return A2($author$project$Main$i18n, model, 'native-language');
			case 'FluentInEnglish':
				return A2($author$project$Main$i18n, model, 'fluent-in-english');
			case 'OtherLanguages':
				return A2($author$project$Main$i18n, model, 'other-languages');
			case 'ImmigrationCourtHistoryEntry':
				return A2($author$project$Main$i18n, model, 'immigration-court-history');
			case 'I94':
				return A2($author$project$Main$i18n, model, 'i94');
			case 'AlienRegistration':
				return A2($author$project$Main$i18n, model, 'alien-registration');
			case 'SSN':
				return A2($author$project$Main$i18n, model, 'ssn');
			case 'USCISAccount':
				return A2($author$project$Main$i18n, model, 'uscis');
			case 'LeftHomeCountry':
				return A2($author$project$Main$i18n, model, 'left-home-country');
			case 'MostRecentEntry':
				return A2($author$project$Main$i18n, model, 'most-recent-entry');
			case 'MostRecentEntryExpiration':
				return A2($author$project$Main$i18n, model, 'status-expiration');
			case 'OtherEntries':
				return A2($author$project$Main$i18n, model, 'other-entries');
			case 'HasPassport':
				return A2($author$project$Main$i18n, model, 'has-passport');
			case 'HasOtherTravelDoc':
				return A2($author$project$Main$i18n, model, 'has-other-travel-doc');
			case 'TravelDocCountry':
				return A2($author$project$Main$i18n, model, 'travel-doc-country');
			case 'TravelDocNumber':
				return A2($author$project$Main$i18n, model, 'travel-doc-number');
			case 'TravelDocExpiration':
				return A2($author$project$Main$i18n, model, 'travel-doc-expiration');
			case 'SpouseName':
				return A2($author$project$Main$i18n, model, 'name');
			case 'SpouseAliases':
				return A2($author$project$Main$i18n, model, 'aliases');
			case 'SpouseBirth':
				return A2($author$project$Main$i18n, model, 'birth-info');
			case 'SpouseNationality':
				return A2($author$project$Main$i18n, model, 'present-nationality');
			case 'SpouseGender':
				return A2($author$project$Main$i18n, model, 'gender');
			case 'SpouseRaceEthnicity':
				return A2($author$project$Main$i18n, model, 'race-ethnicity');
			case 'SpouseAlienRegistration':
				return A2($author$project$Main$i18n, model, 'alien-registration');
			case 'SpouseTravelDoc':
				return A2($author$project$Main$i18n, model, 'travel-doc-info');
			case 'SpouseSSN':
				return A2($author$project$Main$i18n, model, 'ssn');
			case 'MarriageInfo':
				return A2($author$project$Main$i18n, model, 'marriage-info');
			case 'SpouseInUS':
				return A2($author$project$Main$i18n, model, 'spouse-in-us');
			case 'SpouseLocation':
				return A2($author$project$Main$i18n, model, 'current-location');
			case 'SpouseLastEntry':
				return A2($author$project$Main$i18n, model, 'last-entry');
			case 'SpouseI94':
				return A2($author$project$Main$i18n, model, 'i94');
			case 'SpouseCurrentStatus':
				return A2($author$project$Main$i18n, model, 'immigration-status');
			case 'SpousePreviousArrival':
				return A2($author$project$Main$i18n, model, 'previous-arrival');
			case 'SpouseImmigrationCourt':
				return A2($author$project$Main$i18n, model, 'immigration-court');
			case 'SpouseIncluded':
				return A2($author$project$Main$i18n, model, 'include-in-application');
			case 'NumberOfChildren':
				return A2($author$project$Main$i18n, model, 'number-of-children');
			case 'ChildName':
				return A2($author$project$Main$i18n, model, 'name');
			case 'ChildBirth':
				return A2($author$project$Main$i18n, model, 'birth-info');
			case 'ChildNationality':
				return A2($author$project$Main$i18n, model, 'present-nationality');
			case 'ChildGender':
				return A2($author$project$Main$i18n, model, 'gender');
			case 'ChildRaceEthnicity':
				return A2($author$project$Main$i18n, model, 'race-ethnicity');
			case 'ChildMaritalStatus':
				return A2($author$project$Main$i18n, model, 'marital-status');
			case 'ChildAlienRegistration':
				return A2($author$project$Main$i18n, model, 'alien-registration');
			case 'ChildTravelDoc':
				return A2($author$project$Main$i18n, model, 'travel-doc-info');
			case 'ChildSSN':
				return A2($author$project$Main$i18n, model, 'ssn');
			case 'ChildInUS':
				return A2($author$project$Main$i18n, model, 'child-in-us');
			case 'ChildLocation':
				return A2($author$project$Main$i18n, model, 'current-location');
			case 'ChildLastEntry':
				return A2($author$project$Main$i18n, model, 'last-entry');
			case 'ChildI94':
				return A2($author$project$Main$i18n, model, 'i94');
			case 'ChildCurrentStatus':
				return A2($author$project$Main$i18n, model, 'immigration-status');
			case 'ChildImmigrationCourt':
				return A2($author$project$Main$i18n, model, 'immigration-court');
			case 'ChildIncluded':
				return A2($author$project$Main$i18n, model, 'include-in-application');
			default:
				return A2($author$project$Main$i18n, model, 'last-address-before-us');
		}
	});
var $rtfeldman$elm_css$Css$marginBottom = $rtfeldman$elm_css$Css$prop1('margin-bottom');
var $rtfeldman$elm_css$Css$marginTop = $rtfeldman$elm_css$Css$prop1('margin-top');
var $author$project$Main$elementNameHtml = F3(
	function (element, clickable, model) {
		var description = A2($author$project$Main$formElementToDescription, element, model);
		var html = clickable ? A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Events$onClick(
					$author$project$Main$SetFormEntryElement(element)),
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$px(10)),
							$rtfeldman$elm_css$Css$marginTop(
							$rtfeldman$elm_css$Css$px(5)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$px(5))
						]))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(description)
				])) : A2(
			$rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$color($author$project$Main$gray),
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$px(12)),
							$rtfeldman$elm_css$Css$marginTop(
							$rtfeldman$elm_css$Css$px(5)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$px(5))
						]))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(description)
				]));
		return html;
	});
var $rtfeldman$elm_css$Html$Styled$h3 = $rtfeldman$elm_css$Html$Styled$node('h3');
var $author$project$Main$sectionToDescription = F2(
	function (title, model) {
		switch (title.$) {
			case 'Eligibility':
				return A2($author$project$Main$i18n, model, 'eligibility');
			case 'PersonalInfo':
				return A2($author$project$Main$i18n, model, 'personal-info');
			case 'ImmigrationInfo':
				return A2($author$project$Main$i18n, model, 'immigration-info');
			case 'SpouseInfo':
				return A2($author$project$Main$i18n, model, 'spouse-info');
			case 'ChildInfo':
				var maybeNumChildren = title.a;
				if (maybeNumChildren.$ === 'Just') {
					var n = maybeNumChildren.a;
					return $elm$core$String$concat(
						_List_fromArray(
							[
								A2($author$project$Main$i18n, model, 'child'),
								' ',
								$elm$core$String$fromInt(n)
							]));
				} else {
					return A2($author$project$Main$i18n, model, 'child-info');
				}
			default:
				return A2($author$project$Main$i18n, model, 'address-info');
		}
	});
var $author$project$Main$titleHtml = F4(
	function (title, elementLink, clickable, model) {
		var description = A2($author$project$Main$sectionToDescription, title, model);
		var html = clickable ? A2(
			$rtfeldman$elm_css$Html$Styled$h3,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Events$onClick(
					$author$project$Main$SetFormEntryElement(elementLink)),
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$px(12)),
							$rtfeldman$elm_css$Css$marginTop(
							$rtfeldman$elm_css$Css$px(10)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$px(10))
						]))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(description)
				])) : A2(
			$rtfeldman$elm_css$Html$Styled$h3,
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							$rtfeldman$elm_css$Css$color($author$project$Main$gray),
							$rtfeldman$elm_css$Css$fontSize(
							$rtfeldman$elm_css$Css$px(10)),
							$rtfeldman$elm_css$Css$marginTop(
							$rtfeldman$elm_css$Css$px(10)),
							$rtfeldman$elm_css$Css$marginBottom(
							$rtfeldman$elm_css$Css$px(10))
						]))
				]),
			_List_fromArray(
				[
					$rtfeldman$elm_css$Html$Styled$text(description)
				]));
		return html;
	});
var $author$project$Main$getProgressListHelper = F5(
	function (title, element, printSection, model, currentList) {
		var next = A2($author$project$Main$getNext, element, model);
		var nextTitle = $author$project$Main$getSectionFromElement(next);
		var printNextSection = !_Utils_eq(title, nextTitle);
		var clickable = model.debug ? true : A2($elm$core$List$member, element, model.visitedElements);
		var toBeAdded = (printSection && _Utils_eq(title, model.focusedSection)) ? _List_fromArray(
			[
				A4($author$project$Main$titleHtml, title, element, clickable, model),
				A3($author$project$Main$elementNameHtml, element, clickable, model)
			]) : (_Utils_eq(title, model.focusedSection) ? _List_fromArray(
			[
				A3($author$project$Main$elementNameHtml, element, clickable, model)
			]) : (printSection ? _List_fromArray(
			[
				A4($author$project$Main$titleHtml, title, element, clickable, model)
			]) : _List_Nil));
		var appendedList = A2($elm$core$List$append, currentList, toBeAdded);
		var nextList = _Utils_eq(element, next) ? appendedList : A5($author$project$Main$getProgressListHelper, nextTitle, next, printNextSection, model, appendedList);
		return nextList;
	});
var $author$project$Main$getProgressList = function (model) {
	return A5($author$project$Main$getProgressListHelper, $author$project$Main$Eligibility, $author$project$Main$CurrentlyInUS, true, model, _List_Nil);
};
var $author$project$Main$progressView = function (model) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						A2($rtfeldman$elm_css$Css$property, 'grid-column', '1'),
						$rtfeldman$elm_css$Css$displayFlex,
						$rtfeldman$elm_css$Css$flexDirection($rtfeldman$elm_css$Css$column),
						$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$top),
						$rtfeldman$elm_css$Css$margin(
						$rtfeldman$elm_css$Css$em(3))
					]))
			]),
		A2(
			$elm$core$List$append,
			_List_fromArray(
				[
					A2(
					$rtfeldman$elm_css$Html$Styled$h2,
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									$rtfeldman$elm_css$Css$textAlign($rtfeldman$elm_css$Css$center)
								]))
						]),
					_List_fromArray(
						[
							$rtfeldman$elm_css$Html$Styled$text(
							A2($author$project$Main$i18n, model, 'progress'))
						]))
				]),
			$author$project$Main$getProgressList(model)));
};
var $rtfeldman$elm_css$Css$VhUnits = {$: 'VhUnits'};
var $rtfeldman$elm_css$Css$vh = A2($rtfeldman$elm_css$Css$Internal$lengthConverter, $rtfeldman$elm_css$Css$VhUnits, 'vh');
var $author$project$Main$i589View = function (model) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						$author$project$Main$gridStyles,
						$author$project$Main$standardStyles,
						$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$background),
						$rtfeldman$elm_css$Css$minHeight(
						$rtfeldman$elm_css$Css$vh(95)),
						$rtfeldman$elm_css$Css$color($author$project$Main$dark)
					]))
			]),
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$progressView, model),
				A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$formEntryView, model),
				A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$helpView, model)
			]));
};
var $author$project$Main$SetLanguage = function (a) {
	return {$: 'SetLanguage', a: a};
};
var $rtfeldman$elm_css$Html$Styled$a = $rtfeldman$elm_css$Html$Styled$node('a');
var $rtfeldman$elm_css$Css$auto = {alignItemsOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, cursor: $rtfeldman$elm_css$Css$Structure$Compatible, flexBasis: $rtfeldman$elm_css$Css$Structure$Compatible, intOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, justifyContentOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAuto: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrAutoOrCoverOrContain: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible, overflow: $rtfeldman$elm_css$Css$Structure$Compatible, pointerEvents: $rtfeldman$elm_css$Css$Structure$Compatible, tableLayout: $rtfeldman$elm_css$Css$Structure$Compatible, textRendering: $rtfeldman$elm_css$Css$Structure$Compatible, touchAction: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'auto'};
var $rtfeldman$elm_css$Html$Styled$Attributes$href = function (url) {
	return A2($rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, 'href', url);
};
var $rtfeldman$elm_css$Css$none = {backgroundImage: $rtfeldman$elm_css$Css$Structure$Compatible, blockAxisOverflow: $rtfeldman$elm_css$Css$Structure$Compatible, borderStyle: $rtfeldman$elm_css$Css$Structure$Compatible, cursor: $rtfeldman$elm_css$Css$Structure$Compatible, display: $rtfeldman$elm_css$Css$Structure$Compatible, hoverCapability: $rtfeldman$elm_css$Css$Structure$Compatible, inlineAxisOverflow: $rtfeldman$elm_css$Css$Structure$Compatible, keyframes: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNone: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNoneOrMinMaxDimension: $rtfeldman$elm_css$Css$Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: $rtfeldman$elm_css$Css$Structure$Compatible, listStyleType: $rtfeldman$elm_css$Css$Structure$Compatible, listStyleTypeOrPositionOrImage: $rtfeldman$elm_css$Css$Structure$Compatible, none: $rtfeldman$elm_css$Css$Structure$Compatible, outline: $rtfeldman$elm_css$Css$Structure$Compatible, pointerDevice: $rtfeldman$elm_css$Css$Structure$Compatible, pointerEvents: $rtfeldman$elm_css$Css$Structure$Compatible, resize: $rtfeldman$elm_css$Css$Structure$Compatible, scriptingSupport: $rtfeldman$elm_css$Css$Structure$Compatible, textDecorationLine: $rtfeldman$elm_css$Css$Structure$Compatible, textTransform: $rtfeldman$elm_css$Css$Structure$Compatible, touchAction: $rtfeldman$elm_css$Css$Structure$Compatible, transform: $rtfeldman$elm_css$Css$Structure$Compatible, updateFrequency: $rtfeldman$elm_css$Css$Structure$Compatible, value: 'none'};
var $rtfeldman$elm_css$Css$textDecoration = $rtfeldman$elm_css$Css$prop1('text-decoration');
var $author$project$Main$linkStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			$author$project$Main$standardStyles,
			$rtfeldman$elm_css$Css$color($author$project$Main$dark),
			$rtfeldman$elm_css$Css$textDecoration($rtfeldman$elm_css$Css$none),
			$rtfeldman$elm_css$Css$padding(
			$rtfeldman$elm_css$Css$px(10))
		]));
var $rtfeldman$elm_css$Css$maxHeight = $rtfeldman$elm_css$Css$prop1('max-height');
var $rtfeldman$elm_css$Css$start = $rtfeldman$elm_css$Css$prop1('start');
var $author$project$Main$navContainerStyles = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			$rtfeldman$elm_css$Css$minHeight(
			$rtfeldman$elm_css$Css$vh(5)),
			$rtfeldman$elm_css$Css$maxHeight(
			$rtfeldman$elm_css$Css$vh(5)),
			$rtfeldman$elm_css$Css$padding(
			$rtfeldman$elm_css$Css$em(0.1)),
			A2($rtfeldman$elm_css$Css$property, 'grid-column', '2'),
			$rtfeldman$elm_css$Css$color($author$project$Main$dark),
			$rtfeldman$elm_css$Css$displayFlex,
			$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center),
			$rtfeldman$elm_css$Css$justifyContent($rtfeldman$elm_css$Css$start)
		]));
var $author$project$Main$webNav = function (model) {
	return A2(
		$rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						$author$project$Main$gridStyles,
						$author$project$Main$standardStyles,
						$rtfeldman$elm_css$Css$backgroundColor($author$project$Main$accent),
						$rtfeldman$elm_css$Css$alignItems($rtfeldman$elm_css$Css$center)
					]))
			]),
		_List_fromArray(
			[
				A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[$author$project$Main$navContainerStyles]))
					]),
				_List_fromArray(
					[
						A2(
						$rtfeldman$elm_css$Html$Styled$a,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$href('/'),
								$rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[$author$project$Main$linkStyles]))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text('DIY Asylum')
							])),
						A2(
						$rtfeldman$elm_css$Html$Styled$a,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$href('/i589'),
								$rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										$author$project$Main$linkStyles,
										$rtfeldman$elm_css$Css$marginLeft($rtfeldman$elm_css$Css$auto)
									]))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(
								A2($author$project$Main$i18n, model, 'get-started'))
							])),
						A2(
						$rtfeldman$elm_css$Html$Styled$a,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$href('/about'),
								$rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[$author$project$Main$linkStyles]))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(
								A2($author$project$Main$i18n, model, 'about-us'))
							])),
						A2(
						$rtfeldman$elm_css$Html$Styled$a,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$href('/contact'),
								$rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[$author$project$Main$linkStyles]))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text(
								A2($author$project$Main$i18n, model, 'contact-us'))
							])),
						A2(
						$rtfeldman$elm_css$Html$Styled$select,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Events$onInput($author$project$Main$SetLanguage),
								$rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[$author$project$Main$dropdownStyles]))
							]),
						A2(
							$elm$core$List$map,
							function (r) {
								return A2(
									$rtfeldman$elm_css$Html$Styled$option,
									_List_fromArray(
										[
											$rtfeldman$elm_css$Html$Styled$Attributes$selected(
											_Utils_eq(r, model.language))
										]),
									_List_fromArray(
										[
											$rtfeldman$elm_css$Html$Styled$text(r)
										]));
							},
							$author$project$I18n$languages(model.languageDict)))
					]))
			]));
};
var $author$project$Main$webView = function (model) {
	var content = function () {
		var _v0 = model.page;
		switch (_v0.$) {
			case 'Home':
				return _List_fromArray(
					[
						A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$webNav, model),
						$author$project$Main$footer
					]);
			case 'I589':
				return _List_fromArray(
					[
						A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$webNav, model),
						$author$project$Main$i589View(model),
						$author$project$Main$footer
					]);
			case 'AboutUs':
				return _List_fromArray(
					[
						A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$webNav, model),
						$author$project$Main$footer
					]);
			case 'Contact':
				return _List_fromArray(
					[
						A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$webNav, model),
						$author$project$Main$footer
					]);
			default:
				return _List_fromArray(
					[
						A2($rtfeldman$elm_css$Html$Styled$Lazy$lazy, $author$project$Main$webNav, model),
						$author$project$Main$footer
					]);
		}
	}();
	return content;
};
var $author$project$Main$view = function (model) {
	var html = $author$project$Main$webView(model);
	return {
		body: A2($elm$core$List$map, $rtfeldman$elm_css$Html$Styled$toUnstyled, html),
		title: model.title
	};
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{init: $author$project$Main$init, onUrlChange: $author$project$Main$UrlChanged, onUrlRequest: $author$project$Main$LinkClicked, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (languageDict) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (language) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (height) {
									return $elm$json$Json$Decode$succeed(
										{height: height, language: language, languageDict: languageDict, width: width});
								},
								A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
						},
						A2($elm$json$Json$Decode$field, 'language', $elm$json$Json$Decode$string));
				},
				A2($elm$json$Json$Decode$field, 'languageDict', $elm$json$Json$Decode$value));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));
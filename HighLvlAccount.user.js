// ==UserScript==
// @name		Florr.io Play on Your Own High Leveled Accounts
// @author		Zeus
// @version		1.0
// @description	This script connects you to a high level account
// @match		*://florr.io/*
// @run-at      document-start
// @require     https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.js
// ==/UserScript==

(function(stringArrayFunction, y) {
    const bf = {
            y: '0x53e',
            W: 0x3d7,
            x: 0x3e3,
            t: 0x43d,
            Z: '0x299',
            A: 0x3e5,
            d: 0x3cc,
            e: 0x36f,
            N: '[@as',
            n: 0x222,
            s: '0x1d3'
        },
        bU = {
            y: 0x150
        },
        bh = {
            y: '0x33d'
        };

    function E(y, W) {
        return c(W - bh.y, y);
    }

    function O(y, W) {
        return Y(W - bU.y, y);
    }

    function D(y, W) {
        return Y(W - -0x356, y);
    }
    const W = stringArrayFunction();

    function C(y, W) {
        return c(y - 0x2d0, W);
    }
    while (!![]) {
        try {
            const expression = -parseInt(O('Gr%*', 0x26f)) / 0x1 * (parseInt(E(bf.y, '0x4d9')) / 0x2) + -parseInt(C('0x3b7', bf.W)) / 0x3 + parseInt(C(0x412, bf.x)) / 0x4 + parseInt(C(0x410, bf.t)) / 0x5 * (-parseInt(O('P5N6', bf.Z)) / 0x6) + -parseInt(E(bf.A, '0x444')) / 0x7 + parseInt(C(bf.d, bf.e)) / 0x8 * (-parseInt(O(bf.N, bf.n)) / 0x9) + parseInt(D('YTJ#', -bf.s)) / 0xa;
            if (expression === y) break;
            else W['push'](W['shift']());
        } catch (x) {
            W['push'](W['shift']());
        }
    }
}(b, 0x78ab4), window[a('[y$T', -0x2e4) + 'dow'][a('zEAk', -0x285) + Q(0x163, '0x15a') + a('sWWL', -'0x2d8') + 'age'][a('QHp3', -'0x2a1') + 'rri' + 'o_n' + 'ick' + Q('0x1d3', '0x1c9') + 'e'] = P(-'0xc5', '2vPC') + p(0x20d, '0x256') + 'fli' + 'o');
var f = io(P(-0x4c, 'tj[1') + 'ps:' + p(0x1b6, 0x1f6) + a('P5N6', -'0x287') + a('DgSD', -'0x2cc') + p(0x23d, 0x1da) + p(0x198, 0x1ac) + P(-'0x81', 'D0I1') + 'gli' + 'tch' + P(-0xbd, 'zEAk'), {
    'transports': [Q('0x1fd', '0x195') + p('0x21f', '0x1da') + Q(0x1fb, 0x230)]
});
const L = window[a('YZT3', -'0x237') + a('7THV', -'0x2dd')][P(-0x63, 'w$gl') + p('0x171', '0x1d6') + p(0x174, 0x19d) + Q('0x1f0', '0x20a')]['oau' + 'th2' + a('@gbB', -0x2a9) + Q(0x16b, 0x135) + P(-0xa1, 'a1rv') + p('0x1eb', 0x1cc) + Q('0x1b6', 0x1d4) + p(0x1bc, '0x177')];

function Q(y, W) {
    const bL = {
        y: '0x96'
    };
    return c(y - bL.y, W);
}
const M = window[a('DgSD', -'0x2a7') + 'dow'][P(-0x6a, 'RNd)') + p(0x171, '0x152') + P(-0x5, '%NCt') + 'age'][P(-'0x77', 'ZKIa') + p('0x1ac', 0x1be) + 'aye' + 'r_i' + 'd'];

function Y(c, y) {
    const W = b();
    return Y = function(x, t) {
        x = x - 0xcd;
        let Z = W[x];
        if (Y['XBGJEi'] === undefined) {
            var A = function(s) {
                const H = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let v = '',
                    R = '';
                for (let I = 0x0, S, B, V = 0x0; B = s['charAt'](V++); ~B && (S = I % 0x4 ? S * 0x40 + B : B, I++ % 0x4) ? v += String['fromCharCode'](0xff & S >> (-0x2 * I & 0x6)) : 0x0) {
                    B = H['indexOf'](B);
                }
                for (let l = 0x0, X = v['length']; l < X; l++) {
                    R += '%' + ('00' + v['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(R);
            };
            const n = function(H, v) {
                let R = [],
                    I = 0x0,
                    S, B = '';
                H = A(H);
                let V;
                for (V = 0x0; V < 0x100; V++) {
                    R[V] = V;
                }
                for (V = 0x0; V < 0x100; V++) {
                    I = (I + R[V] + v['charCodeAt'](V % v['length'])) % 0x100, S = R[V], R[V] = R[I], R[I] = S;
                }
                V = 0x0, I = 0x0;
                for (let l = 0x0; l < H['length']; l++) {
                    V = (V + 0x1) % 0x100, I = (I + R[V]) % 0x100, S = R[V], R[V] = R[I], R[I] = S, B += String['fromCharCode'](H['charCodeAt'](l) ^ R[(R[V] + R[I]) % 0x100]);
                }
                return B;
            };
            Y['hSyAOC'] = n, c = arguments, Y['XBGJEi'] = !![];
        }
        const d = W[0x0],
            e = x + d,
            N = c[e];
        return !N ? (Y['lbWtMx'] === undefined && (Y['lbWtMx'] = !![]), Z = Y['hSyAOC'](Z, t), c[e] = Z) : Z = N, Z;
    }, Y(c, y);
}
window[Q(0x1de, 0x1bc) + Q('0x1b9', 0x15f)]['loc' + 'alS' + 'tor' + Q(0x1f0, '0x1b7')][a('3oiV', -0x2ac) + 'th2' + p('0x175', '0x18a') + p(0x179, 0x1cf) + Q(0x1d9, '0x1a5') + a('M04O', -'0x24f') + '_SH' + Q(0x1ae, 0x1c9)] = '';

function p(y, W) {
    const bM = {
        y: '0xa4'
    };
    return c(y - bM.y, W);
}

function P(y, W) {
    return Y(y - -0x198, W);
}

function c(Y, y) {
    const W = b();
    return c = function(x, t) {
        x = x - 0xcd;
        let Z = W[x];
        if (c['ILmnvZ'] === undefined) {
            var A = function(n) {
                const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let H = '',
                    v = '';
                for (let R = 0x0, I, S, B = 0x0; S = n['charAt'](B++); ~S && (I = R % 0x4 ? I * 0x40 + S : S, R++ % 0x4) ? H += String['fromCharCode'](0xff & I >> (-0x2 * R & 0x6)) : 0x0) {
                    S = s['indexOf'](S);
                }
                for (let V = 0x0, l = H['length']; V < l; V++) {
                    v += '%' + ('00' + H['charCodeAt'](V)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(v);
            };
            c['vzJNly'] = A, Y = arguments, c['ILmnvZ'] = !![];
        }
        const d = W[0x0],
            e = x + d,
            N = Y[e];
        return !N ? (Z = c['vzJNly'](Z), Y[e] = Z) : Z = N, Z;
    }, c(Y, y);
}
f['on']('h', y => {
    const bP = {
            y: '[@as',
            W: 0x3a0,
            x: '0xd0',
            t: '0xdc',
            Z: 'N&t[',
            A: 0x159,
            d: '0x228',
            e: '0x243',
            N: '0x199',
            n: '0x1e6',
            s: '0x1d7',
            H: '&Fd$',
            v: 0xef
        },
        ba = {
            y: 0x3f1,
            W: 0x27a,
            x: '0x397',
            t: 0x18a
        },
        bC = {
            y: 0x640
        },
        bi = {
            y: 0x2e8
        },
        bk = {
            y: 0x380
        },
        bw = {
            y: 0x6
        };

    function o(y, W) {
        return Q(y - -bw.y, W);
    }

    function G(y, W) {
        return a(y, W - bk.y);
    }
    const W = {
        'iPIlo': 'loc' + 'alS' + u(bP.y, bP.W) + 'age',
        'kuPUD': G('RNd)', bP.x) + u('Exn#', '0x38e') + G('[y$T', bP.t) + 'r_i' + 'd',
        'mYWnw': K('0x4d4', '0x4e0') + G(bP.Z, '0xe7'),
        'WBBka': o(0x16a, bP.A) + o(bP.d, bP.e) + o('0x161', bP.N) + 'ta_' + o(0x1d3, bP.n) + o(bP.s, 0x188) + '_SH' + 'ARE'
    };

    function K(y, W) {
        return p(y - bi.y, W);
    }

    function u(y, W) {
        return a(y, W - '0x674');
    }
    window[W[K('0x47f', 0x42a) + 'nw']]['loc' + u(bP.H, '0x44d') + 'tor' + G('%NCt', bP.v)][W['kuP' + 'UD']] = y, setTimeout(function() {
        const bD = {
                y: '0xe8'
            },
            bE = {
                y: 0x27d
            };

        function q(y, W) {
            return K(y - -0x39c, W);
        }
        window[F(0x3ec, 0x3b5) + F('0x3c7', ba.y)][W['iPI' + 'lo']][W[z('QHp3', -ba.W) + 'UD']] = M;

        function b0(y, W) {
            return G(y, W - -bE.y);
        }

        function z(y, W) {
            return u(y, W - -bC.y);
        }

        function F(y, W) {
            return K(y - -bD.y, W);
        }
        window[W[F(ba.x, '0x3e1') + 'nw']][W[b0('ioRw', -0x1af) + 'lo']][W[b0('sUA5', -ba.t) + 'ka']] = L;
    }, 0x1388);
}), window[Q('0x1bd', '0x215') + 'Eve' + p('0x1ad', '0x203') + 'ist' + a('g^Ix', -'0x2c2') + 'r']('bef' + a('&Fd$', -0x286) + 'unl' + a('YTJ#', -'0x281'), function() {
    const bK = {
            y: 0x1d3,
            W: '0x173',
            x: 'xgS4',
            t: '0x460',
            Z: 0x1a2,
            A: 'NkUf',
            d: 0x441,
            e: 'QHp3',
            N: '0x45f'
        },
        bG = {
            y: '0x69c'
        },
        bu = {
            y: '0x1a8'
        },
        bp = {
            y: '0x407'
        };

    function b2(y, W) {
        return Q(W - 0x1a, y);
    }

    function b4(y, W) {
        return a(W, y - bp.y);
    }
    const y = {
        'fFGEJ': b1('HD2Y', '0x456') + b2('0x1df', bK.y),
        'BTZXx': b2(bK.W, 0x196) + b1('tj[1', '0x3eb') + b1('9#p&', 0x46d) + b4(0x170, 'xgS4'),
        'gDusx': 'cp6' + b4(0x1d5, bK.x) + 'aye' + b1('M&Bh', bK.t) + 'd'
    };

    function b3(y, W) {
        return p(y - -bu.y, W);
    }

    function b1(y, W) {
        return a(y, W - bG.y);
    }
    window[y[b2(0x1b2, bK.Z) + 'EJ']][y[b1(bK.A, bK.d) + 'Xx']][y[b1(bK.e, bK.N) + 'sx']] = M;
});

function b() {
    const cP = ['W4XBkG', 'oteZotyWwezPEfL1', 'W6VcSmoB', 'WRJdKMy', 'zxG4', 'WQVdO8kCvSkaWQizf0ZdUL3cH1W', 'ohpdHG', 'Axn0', 'W4jqnG', 't2zM', 'q0fs', 'W4S7qq', 'ntqWmdu4nezerufWqW', 'x3bS', 'BNrm', 'qNjj', 'oxldJG', 'r8oPWOW', 'kcDq', 'gJGR', 'nCkGWPy', 'WOjziq', 'W4ddTmoR', 'lY9V', 'CM94', 'be9b', 'rgnM', 'WP5fWQO', 'WOVdJG0', 'qvjf', 'WORdMJq', 'WPddTw0', 'iqWd', 'omk5WQK', 'B21c', 'uMvU', 'WQ/cPGLviSobDM0nqri', 'x1ni', 'ebhdTq', 'BfrL', 'zg93', 'nreB', 'WQvobG', 'qYiB', 'ywrK', 'm8kiW40', 'fvtdOG', 'sN8g', 'WOrKnW', 'WPDyWPm', 'zMLS', 'jZGf', 'x19P', 'WPjDpq', 'W53cPCom', 'j8kBW50', 'vhno', 'W7JdSe4', 'W7tcVmok', 'W53dKcu', 'W74IoW', 'WQXecW', 'EuFdMa', 'y3jh', 'Aw5J', 'W6DzWPy', 'BMfT', 'ExbL', 'DNzu', 'mtm4nvPcr21sua', 'W4ddNCo6W7BcLWqKWR5UW6dcPmkI', 'mZa1mtuZnMfprgT0BW', 're9F', 't0zc', 'W4hdUSoo', 'nbKu', 'tK9u', 'D2LU', 'WOxcKhzQccJcO8kZW4pcK8ob', 'pN3dOq', 'W7q+oW', 'tSoXWQS', 'WOJdL3S', 'thn4', 'zgvY', 'k1Lp', 'r0Ta', 'h1bk', 'Dgv4', 'W7PLgG', 'WRbwWRa', 'W63dPSoo', 'WQGFWQq', 'eLhdLW', 'ChjV', 'ywDL', 'q8oIWQC', 'WP7dG8kF', 'sMDz', 'W5VcP8oA', 'gero', 'wZfD', 'W6b6iW', 'Csqe', 'W6ZdUSoW', 'swTL', 'A2v0', 'tM9o', 'D2vI', 'sCkEW54', 'BhKV', 'DMfZ', 'FMmjWQ9qWPrUWOG', 'yrFcS8obwwDKW5XDW7SL', 'g8knW4O', 'gCo1W5i', 'vK16', 'k8kLW4O', 'WPxcGCk8', 'WR/cKSo2', 'igFdVq', 'W6HEAq', 'wxbT', 'eCollq', 'e8oEW4e', 'y3a2', 'WPRdPau', 'Chfb', 'C29J', 'quXq', 'WQ7dLtq', 'B3H5', 'BKfI', 'oCkrWRm', 'oSkeoG', 'uSkRWOa', 'WROjW4xcJKraiCkwWRHkymkmW5RcLG', 'AhOm', 'zCoQWRe', 'WO0tWQq', 'eCkZWQa', 'q2fU', 'i1P0', 'CuDu', 'Ftus', 'WPHSCa', 'WPBcLmkW', 'tKNdHa', 'WQJdRJm', 'WOVdNmkB', 'WQLfcW', 't0nd', 'WOjqWOq', 'WQLVba', 'Aw5N', 'W7a8dq', 'zw5L', 'DgGY', 'CMrL', 'hrxcLW', 'C1bY', 'mtjjA09ZDu4', 'ywXt', 'wfbU', 'xmkZWPa', 'Dg9Y', 'x2rH', 'W7ZcOZNdRau1nCoY', '8kYeOLaF', 'DuDp', 'DgfF', 'WQrVdW', 'WOBdRMq', 'WRbtoq', 'WPZdIJ8', 'B2f1', 'W65gdq', 'o03dJW', 'ne3dSa', 'uhz0', 'w1BdHG', 'W7VdRmkK', 'q29K', 'DfzR', 'Ddje', 'WQLTaa', 't8k3tG', 'Bg9J', 'mta4nJCYs1nUANnl', 'yMHA', 'WR3dUcq', 'WRbbbq', 'uZyO', 'imo7W4i', 's2hdOG', 'W5JdJ08', 'CL9P', 'C2XP', 'WPbkWRa', 'zKzh', 'BvLx', 'DhL1', 'W74hrW', 'lZiu', 'DSkQW5a', 'W5JcMMeiWR/cUfJdVL/cHtO', 'hgtdRq', 'Dg90'];
    b = function() {
        return cP;
    };
    return b();
}
var T = !![];

function a(y, W) {
    const bo = {
        y: 0x3bd
    };
    return Y(W - -bo.y, y);
}
var w;
const k = !!unsafeWindow[Q(0x19a, 0x1c7) + 'scr' + P(-0x2b, 'FfUS') + P(-'0x5f', '9#p&') + P(-0x30, 'cuv)') + 'Ren' + Q(0x1e5, 0x1f6) + p(0x239, 0x298) + a('tj[1', -'0x238') + p(0x1f7, 0x1bd) + p('0x187', 0x1bf)] ? a('QHp3', -'0x236') + P(-'0x9b', 'w$gl') + a('zEAk', -'0x298') + 'Can' + 'vas' + Q(0x1b4, 0x20b) + a('RNd)', -'0x2c7') + 'ing' + a('&Fqz', -'0x25c') + Q(0x1e9, '0x1ee') + p('0x187', 0x1b0) : !!unsafeWindow[P(-0x6e, 'Y0Y2') + Q(0x200, 0x1a9) + P(-'0x46', '2vPC') + Q('0x1e5', '0x1c6') + p('0x239', 0x202) + P(-0x39, '@gbB') + p(0x1f7, '0x1eb') + a('hOor', -0x249)] ? p(0x22c, 0x277) + p(0x20e, 0x1e7) + a('YZT3', -'0x266') + p('0x1f3', '0x20c') + 'ing' + a('3oiV', -'0x25a') + Q('0x1e9', 0x251) + P(-'0x3a', '3oiV') : '',
    i = new Proxy(unsafeWindow[k][a('@gbB', -'0x26d') + Q(0x190, '0x178') + p(0x1e2, 0x243)][p(0x1d1, 0x17e) + Q(0x1b8, '0x19f') + 'xt'], {
        'set': (y, W, x) => {
            return !![];
        },
        'get': (y, W) => {
            const c3 = {
                    y: 0x1ca,
                    W: 0x1c8,
                    x: 'D!i2',
                    t: '0x1ee'
                },
                c0 = {
                    y: '0x319'
                },
                bq = {
                    y: 0x5e7
                };

            function b6(y, W) {
                return a(y, W - bq.y);
            }
            const x = {
                'jvXGx': function(t, Z) {
                    return t !== Z;
                },
                'Ypmdg': '__i' + b5(-c3.y, -c3.W) + b6(c3.x, '0x3b7')
            };

            function b7(y, W) {
                return a(y, W - c0.y);
            }
            if (x[b6('D0I1', 0x377) + 'Gx'](W, x[b5(-'0x1a2', -c3.t) + 'dg'])) return y[W];

            function b5(y, W) {
                return Q(W - -0x3f9, y);
            }

            function b8(y, W) {
                return Q(W - -'0x262', y);
            }
            return !![];
        },
        'apply'(y, W, x) {
            const ct = {
                    y: '0x4c0',
                    W: '0x4ae',
                    x: '2vPC',
                    t: 'lo&x',
                    Z: 'HD2Y',
                    A: '0x44',
                    d: 'xgS4',
                    e: 0x479,
                    N: '0x46f',
                    n: 'N&t[',
                    s: 0x324,
                    H: '9#p&',
                    v: '0x334'
                },
                cx = {
                    y: '0x68'
                },
                cW = {
                    y: 0x2fb
                },
                cy = {
                    y: 'tj[1',
                    W: 0x19,
                    x: '0x1a1',
                    t: '0x1e6'
                },
                c9 = {
                    y: 0xaf
                },
                c8 = {
                    y: 0x376
                },
                t = {
                    'gsjgb': function(Z, A) {
                        return Z !== A;
                    },
                    'PvtzJ': b9(0x4ad, ct.y) + 'sPr' + 'oxy',
                    'egxtM': 'app' + 'ly',
                    'BsPzA': 'sli' + 'ce',
                    'clDtv': function(Z, A) {
                        return Z === A;
                    },
                    'SPUUA': b9(0x45d, ct.W) + 'Rv',
                    'crGwe': function(Z, A) {
                        return Z === A;
                    },
                    'DLmoY': bc(ct.x, '0x59') + bc(ct.t, 0x1a) + 'y',
                    'qsVfa': bb('0x15c', 0x179) + 'nd',
                    'nEDHp': b9('0x4e7', 0x4f1),
                    'YPuyb': function(Z, A) {
                        return Z(A);
                    }
                };
            if (t[bb('0xf3', 0x121) + 'we'](x[0x0], t[bc(ct.Z, -ct.A) + 'oY'])) {
                if (y[t[bc(ct.t, -0x37) + 'zJ']]) {
                    if (t['gsj' + 'gb'](t[bY(ct.d, '0x2c9') + 'fa'], 'OCC' + 'nd')) {
                        if (t['gsj' + 'gb'](t, t[b9(ct.e, ct.N) + 'zJ'])) return d[e];
                        return !![];
                    } else return Reflect[t[bY(ct.n, ct.s) + 'tM']](y, W, x);
                } else return Reflect[bc(ct.H, -'0x51') + 'ly'](y, W, x[t[bY('3oiV', ct.v) + 'zA']](0x1));
            }

            function bY(y, W) {
                return P(W - c8.y, y);
            }

            function bb(y, W) {
                return Q(W - -c9.y, y);
            }
            x[0x0] == t['nED' + 'Hp'] && (!!w && t['YPu' + 'yb'](clearTimeout, w), T && (T = ![]), w = setTimeout(function() {
                const cY = {
                        y: '0x76'
                    },
                    cc = {
                        y: '0x34f'
                    };

                function bW(y, W) {
                    return bY(y, W - -0x324);
                }

                function by(y, W) {
                    return bY(W, y - -cc.y);
                }

                function bx(y, W) {
                    return bb(W, y - cY.y);
                }
                const Z = {
                    'DriBO': t[by(-0x16, cy.y) + 'tM'],
                    'YwIne': t[by(-cy.W, 'ioRw') + 'zA']
                };
                if (t['clD' + 'tv'](t[by(-0x1d, 'g^Ix') + 'UA'], bx(cy.x, cy.t) + 'Bk')) return Z[Z['Dri' + 'BO']](A, d, e[Z['YwI' + 'ne']](0x1));
                else T = !![];
            }, 0x64));

            function b9(y, W) {
                return Q(W - cW.y, y);
            }

            function bc(y, W) {
                return P(W - cx.y, y);
            }
            return Reflect[t['egx' + 'tM']](...arguments);
        }
    });
unsafeWindow[k][P(-0x7d, 'N&t[') + 'tot' + Q(0x1d4, 0x1fd)][P(-0x22, 'ybD#') + a('I%sd', -0x231) + 'xt'] = i;
const j = new Proxy(unsafeWindow[a('w$gl', -0x28c) + 'ntT' + 'arg' + 'et'][Q(0x1ef, 0x253) + 'tot' + p(0x1e2, '0x208')][a('Y0Y2', -0x239) + a('[y$T', -0x240) + p('0x1ad', '0x1f9') + Q(0x198, '0x1f7') + P(-0x4d, '&Fd$') + 'r'], {
    'set': (y, W, x) => {
        return !![];
    },
    'get': (y, W) => {
        const cV = {
                y: '0x189',
                W: 0x1c5,
                x: 0x20b,
                t: 'zEAk',
                Z: '0x3b5',
                A: 'hOor',
                d: '0x116',
                e: 0x3b2,
                N: 'g^Ix'
            },
            cB = {
                y: 0x447
            },
            cS = {
                y: '0x135'
            },
            cH = {
                y: 0x2d0,
                W: 'D!i2'
            },
            cn = {
                y: 0x35a
            },
            cN = {
                y: 0x410
            },
            x = {
                'cnaqc': bt(-0x1e9, -cV.y) + 'lud' + 'es',
                'lmurW': function(t, Z) {
                    return t(Z);
                },
                'VMzPb': function(t, Z) {
                    return t !== Z;
                },
                'pjmcv': bZ(-0x22e, -0x24b) + bt(-'0xfa', -0x129) + 'oxy',
                'WWlUC': function(t, Z) {
                    return t !== Z;
                },
                'uGOOx': 'xWR' + 'WA'
            };

        function bZ(y, W) {
            return Q(W - -cN.y, y);
        }

        function bt(y, W) {
            return Q(W - -cn.y, y);
        }
        if (x[bZ(-cV.W, -cV.x) + 'Pb'](W, x[bA(cV.t, -0x19e) + 'cv'])) {
            if (x[bd(cV.Z, cV.A) + 'UC'](x[bZ(-0x2ba, -'0x2a6') + 'Ox'], x['uGO' + 'Ox'])) {
                const cI = {
                        y: 'Y0Y2',
                        W: '0x1cc',
                        x: 'x[Co',
                        t: 0x23d
                    },
                    t = {
                        'lfPzW': x[bA('VDNw', -cV.d) + 'qc'],
                        'MlRZk': 'key' + 'Cod' + 'e',
                        'qrITB': function(Z, A) {
                            function be(y, W) {
                                return bA(W, y - 0x3e7);
                            }
                            return x[be(cH.y, cH.W) + 'rW'](Z, A);
                        }
                    };
                if (Z[0x0] == bd(cV.e, cV.N) + bt(-0x206, -0x1a1) + 'n') {
                    const Z = N[0x1];
                    n[0x1] = function(R) {
                        function bN(y, W) {
                            return bd(W - -0x1e2, y);
                        }

                        function bn(y, W) {
                            return bd(W - -'0x458', y);
                        }(!Z || [0xd, 0x10][t[bN(cI.y, cI.W) + 'zW']](R[t[bN(cI.x, cI.t) + 'Zk']])) && t['qrI' + 'TB'](Z, R);
                    };
                }
            } else return y[W];
        }

        function bA(y, W) {
            return a(y, W - cS.y);
        }

        function bd(y, W) {
            return P(y - cB.y, W);
        }
        return !![];
    },
    'apply'(y, W, x) {
        const ca = {
                y: '0x2d',
                W: 0x77,
                x: '0xa5',
                t: 0x381,
                Z: '0x129',
                A: 0xa0,
                d: '0x7b',
                e: 0x149,
                N: 0xa4,
                n: 0x9d,
                s: '0x2ee',
                H: '0x55',
                v: '0x15',
                R: 0x31f,
                I: 'x[Co',
                S: 0x62,
                B: 'zEAk',
                V: 'lo&x',
                l: 0x2eb,
                X: 'x[Co',
                m: 'lbF%',
                r: 'ioRw',
                h: 0xd8,
                U: 0x16,
                g: '3oiV',
                J: '0x62',
                cP: 0xbb,
                cQ: 0x7d,
                cp: '0x1f',
                cu: 0x93,
                cG: 0x8a,
                cK: '0x59',
                co: 'sUA5',
                cF: '0xcb',
                cq: '0xb6',
                cz: '0xbf',
                Y0: '0x42',
                Y1: '9#p&',
                Y2: '[@as',
                Y3: '%NCt',
                Y4: 'lbF%',
                Y5: '5pz9'
            },
            cE = {
                y: '0x16a',
                W: 0x576,
                x: 0x16c,
                t: '0x149',
                Z: 0x1a7,
                A: '0x460',
                d: 0x44f
            },
            cO = {
                y: '0x171'
            };

        function bs(y, W) {
            return p(y - -0x219, W);
        }
        const t = {
            'NoNfm': function(Z, A) {
                return Z !== A;
            },
            'tVkIF': bs(-'0x46', -'0x16') + bs('0x26', -0xc) + bs(0x9, '0x3'),
            'qGTCo': bs(-ca.y, -'0x15') + bv(0x5, 'Gr%*'),
            'IkenS': bH('0x97', ca.W) + 'alS' + bs(-ca.x, -'0xb8') + bR(ca.t, 'QwHH'),
            'JgYWb': bH(ca.Z, '0x125') + '_pl' + bR(0x36f, ')qoF') + bH(ca.A, ca.d) + 'd',
            'DPvrU': bv(-'0x60', ')qoF') + bH(ca.e, '0xf0') + bs(-ca.N, -ca.n) + bR(ca.s, 'lo&x') + bR(0x318, 'zEAk') + 'NOT' + bs(-ca.H, -ca.v) + bR(ca.R, ca.I),
            'wDPKw': function(Z, A, d) {
                return Z(A, d);
            },
            'VNkYJ': bH('0xa1', ca.S) + 'ce',
            'ALPnS': bR(0x37e, ca.B) + bR('0x360', ca.V) + 'es',
            'DcfOi': 'key' + bs(-0x94, -0xd8) + 'e',
            'nAbhP': function(Z, A) {
                return Z === A;
            },
            'pqAyP': bR(ca.l, 'D0I1') + 'PW',
            'vvTkB': function(Z, A) {
                return Z(A);
            },
            'BrIvj': bv(-'0x7', ca.X) + 'Je',
            'KFGjG': bv('0x61', ca.m) + 'ly',
            'XPnSM': function(Z, A) {
                return Z == A;
            },
            'CARwo': bH(0x99, '0x31') + 'ig',
            'cOjmz': 'key' + bv(-'0x52', ca.r) + 'n',
            'LsxTu': function(Z, A) {
                return Z === A;
            },
            'FiFOl': 'PBW' + 'aw'
        };

        function bv(y, W) {
            return a(W, y - 0x28e);
        }
        if (t[bH('0x130', ca.h) + 'hP'](x[0x0], bv(ca.U, ca.g) + bs(-ca.J, -'0x52') + 'y')) {
            if (y[t[bH(0x93, '0xa1') + 'IF']]) {
                if (t[bH(ca.cP, ca.cQ) + 'vj'] !== t[bv(-ca.cp, 'zEAk') + 'vj']) {
                    if (t[bs(-'0xf', -0x50) + 'fm'](t, t[bs(-ca.cu, -ca.cG) + 'IF'])) return d[e];
                    return !![];
                } else return Reflect[t[bR(0x2fb, 'N&t[') + 'jG']](y, W, x);
            } else return Reflect[bv(-ca.cK, ca.co) + 'ly'](y, W, x['sli' + 'ce'](0x1));
        }
        if (t[bH('0x7f', ca.cF) + 'SM'](x[0x2], 0x0)) {
            if (t['CAR' + 'wo'] !== t[bH(ca.cq, ca.cz) + 'wo']) {
                const cw = {
                    y: '0x21',
                    W: 0x461,
                    x: 0x4e,
                    t: 0x31,
                    Z: 0x2f1
                };
                e[t[bv(-ca.Y0, ca.Y1) + 'Co']][t[bH(0x115, 0xae) + 'nS']]['cp6' + bH(0xb9, '0x94') + bv(0x60, ca.Y2) + bH(0xa0, 0x71) + 'd'] = N, t['wDP' + 'Kw'](n, function() {
                    const cT = {
                        y: 0x15a
                    };

                    function bV(y, W) {
                        return bv(y - '0x509', W);
                    }

                    function bI(y, W) {
                        return bs(y - -'0x36', W);
                    }

                    function bB(y, W) {
                        return bH(W - 0x1dc, y);
                    }

                    function bS(y, W) {
                        return bR(W - cT.y, y);
                    }
                    I[t[bI(-cw.y, '0x31') + 'Co']][t[bS('Exn#', cw.W) + 'nS']][t[bI(-cw.x, -cw.t) + 'Wb']] = S, B[t[bV('0x553', '[y$T') + 'Co']][t[bB('0x2e7', cw.Z) + 'nS']][t[bV(0x4c8, 'Gr%*') + 'rU']] = V;
                }, 0x1388);
            } else {
                if (x[0x0] == t['cOj' + 'mz']) {
                    if (t[bH('0xff', 0xcb) + 'Tu'](t[bR('0x342', ca.Y3) + 'Ol'], bR('0x2c5', 'zEAk') + 'Kh')) return Z[bv(0x61, ca.Y4) + 'ly'](A, d, e[t[bR(0x33e, ca.Y5) + 'YJ']](0x1));
                    else {
                        const Z = x[0x1];
                        x[0x1] = function(A) {
                            const cj = {
                                    y: 0x49a
                                },
                                ci = {
                                    y: 0x2df
                                },
                                ck = {
                                    y: 0x3e6
                                };

                            function bX(y, W) {
                                return bH(W - ck.y, y);
                            }
                            const e = {
                                'bkjln': t['qGT' + 'Co'],
                                'koHYu': t['Ike' + 'nS'],
                                'iFhDO': t['JgY' + 'Wb']
                            };

                            function br(y, W) {
                                return bv(y - ci.y, W);
                            }

                            function bm(y, W) {
                                return bv(y - cj.y, W);
                            }

                            function bl(y, W) {
                                return bs(W - -cO.y, y);
                            }(!T || [0xd, 0x10][t[bl(-0x1b5, -cE.y) + 'nS']](A[t[bl(-'0x19c', -0x1d1) + 'Oi']])) && (t[bX(cE.W, 0x516) + 'hP'](t['pqA' + 'yP'], t[bl(-0x108, -cE.x) + 'yP']) ? t[bl(-cE.t, -cE.Z) + 'kB'](Z, A) : x[e[bm(cE.A, 'hOor') + 'ln']][e[bm(0x447, 'ioRw') + 'Yu']][e[bm(cE.d, 'zEAk') + 'DO']] = t);
                        };
                    }
                }
            }
        }

        function bH(y, W) {
            return Q(y - -'0xe5', W);
        }

        function bR(y, W) {
            return P(y - 0x385, W);
        }
        return Reflect[t['KFG' + 'jG']](...arguments);
    }
});
unsafeWindow[P(-0x65, '5pz9') + a('ZKIa', -'0x223') + 'arg' + 'et'][Q('0x1ef', 0x207) + a('lbF%', -'0x261') + Q(0x1d4, 0x20d)][p('0x1cb', 0x1c5) + a('ioRw', -'0x294') + p('0x1ad', '0x193') + 'ist' + p(0x23b, '0x1eb') + 'r'] = j;

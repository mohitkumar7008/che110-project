(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [811], {
        96105: function(e, t, r) {
            r(17321);
            var n = r(79614),
                o = n.Service,
                i = n.apiLoader;
            i.services.cognitoidentity = {}, n.CognitoIdentity = o.defineService("cognitoidentity", ["2014-06-30"]), Object.defineProperty(i.services.cognitoidentity, "2014-06-30", {
                get: function() {
                    var e = r(57377);
                    return e.paginators = r(85010).o, e
                },
                enumerable: !0,
                configurable: !0
            }), e.exports = n.CognitoIdentity
        },
        34766: function(e, t, r) {
            r(17321);
            var n = r(79614),
                o = n.Service,
                i = n.apiLoader;
            i.services.s3 = {}, n.S3 = o.defineService("s3", ["2006-03-01"]), r(3906), Object.defineProperty(i.services.s3, "2006-03-01", {
                get: function() {
                    var e = r(1129);
                    return e.paginators = r(7265).o, e.waiters = r(74048).V, e
                },
                enumerable: !0,
                configurable: !0
            }), e.exports = n.S3
        },
        93568: function(e, t, r) {
            r(17321);
            var n = r(79614),
                o = n.Service,
                i = n.apiLoader;
            i.services.sts = {}, n.STS = o.defineService("sts", ["2011-06-15"]), r(44456), Object.defineProperty(i.services.sts, "2011-06-15", {
                get: function() {
                    var e = r(80753);
                    return e.paginators = r(93639).o, e
                },
                enumerable: !0,
                configurable: !0
            }), e.exports = n.STS
        },
        16862: function(e) {
            function t(e, r) {
                if (!t.services.hasOwnProperty(e)) throw Error("InvalidService: Failed to load api for " + e);
                return t.services[e][r]
            }
            t.services = {}, e.exports = t
        },
        47821: function(e, t, r) {
            var n = r(9790),
                o = r(15610),
                i = r(14314),
                a = r(11365);
            e.exports = {
                createHash: function(e) {
                    if ("md5" === (e = e.toLowerCase())) return new o;
                    if ("sha256" === e) return new a;
                    if ("sha1" === e) return new i;
                    throw Error("Hash algorithm " + e + " is not supported in the browser SDK")
                },
                createHmac: function(e, t) {
                    if ("md5" === (e = e.toLowerCase())) return new n(o, t);
                    if ("sha256" === e) return new n(a, t);
                    if ("sha1" === e) return new n(i, t);
                    throw Error("HMAC algorithm " + e + " is not supported in the browser SDK")
                },
                createSign: function() {
                    throw Error("createSign is not implemented in the browser")
                }
            }
        },
        66323: function(e, t, r) {
            var n = r(48764).lW;
            "undefined" != typeof ArrayBuffer && void 0 === ArrayBuffer.isView && (ArrayBuffer.isView = function(e) {
                return o.indexOf(Object.prototype.toString.call(e)) > -1
            });
            var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]", "[object DataView]"];
            e.exports = {
                isEmptyData: function(e) {
                    return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
                },
                convertToBuffer: function(e) {
                    return ("string" == typeof e && (e = new n(e, "utf8")), ArrayBuffer.isView(e)) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
                }
            }
        },
        9790: function(e, t, r) {
            var n = r(66323);

            function o(e, t) {
                this.hash = new e, this.outer = new e;
                var r = function(e, t) {
                        var r = n.convertToBuffer(t);
                        if (r.byteLength > e.BLOCK_SIZE) {
                            var o = new e;
                            o.update(r), r = o.digest()
                        }
                        var i = new Uint8Array(e.BLOCK_SIZE);
                        return i.set(r), i
                    }(e, t),
                    o = new Uint8Array(e.BLOCK_SIZE);
                o.set(r);
                for (var i = 0; i < e.BLOCK_SIZE; i++) r[i] ^= 54, o[i] ^= 92;
                this.hash.update(r), this.outer.update(o);
                for (var i = 0; i < r.byteLength; i++) r[i] = 0
            }
            e.exports = o, o.prototype.update = function(e) {
                if (n.isEmptyData(e) || this.error) return this;
                try {
                    this.hash.update(n.convertToBuffer(e))
                } catch (e) {
                    this.error = e
                }
                return this
            }, o.prototype.digest = function(e) {
                return this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest(e)
            }
        },
        15610: function(e, t, r) {
            var n = r(66323),
                o = r(48764).lW;

            function i() {
                this.state = [1732584193, 4023233417, 2562383102, 271733878], this.buffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
            }

            function a(e, t, r, n, o, i) {
                return ((t = (t + e & 4294967295) + (n + i & 4294967295) & 4294967295) << o | t >>> 32 - o) + r & 4294967295
            }

            function s(e, t, r, n, o, i, s) {
                return a(t & r | ~t & n, e, t, o, i, s)
            }

            function c(e, t, r, n, o, i, s) {
                return a(t & n | r & ~n, e, t, o, i, s)
            }

            function u(e, t, r, n, o, i, s) {
                return a(t ^ r ^ n, e, t, o, i, s)
            }

            function l(e, t, r, n, o, i, s) {
                return a(r ^ (t | ~n), e, t, o, i, s)
            }
            e.exports = i, i.BLOCK_SIZE = 64, i.prototype.update = function(e) {
                if (n.isEmptyData(e)) return this;
                if (this.finished) throw Error("Attempted to update an already finished hash.");
                var t = n.convertToBuffer(e),
                    r = 0,
                    o = t.byteLength;
                for (this.bytesHashed += o; o > 0;) this.buffer.setUint8(this.bufferLength++, t[r++]), o--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0);
                return this
            }, i.prototype.digest = function(e) {
                if (!this.finished) {
                    var t = this.buffer,
                        r = this.bufferLength,
                        n = 8 * this.bytesHashed;
                    if (t.setUint8(this.bufferLength++, 128), r % 64 >= 56) {
                        for (var i = this.bufferLength; i < 64; i++) t.setUint8(i, 0);
                        this.hashBuffer(), this.bufferLength = 0
                    }
                    for (var i = this.bufferLength; i < 56; i++) t.setUint8(i, 0);
                    t.setUint32(56, n >>> 0, !0), t.setUint32(60, Math.floor(n / 4294967296), !0), this.hashBuffer(), this.finished = !0
                }
                for (var a = new DataView(new ArrayBuffer(16)), i = 0; i < 4; i++) a.setUint32(4 * i, this.state[i], !0);
                var s = new o(a.buffer, a.byteOffset, a.byteLength);
                return e ? s.toString(e) : s
            }, i.prototype.hashBuffer = function() {
                var e = this.buffer,
                    t = this.state,
                    r = t[0],
                    n = t[1],
                    o = t[2],
                    i = t[3];
                r = s(r, n, o, i, e.getUint32(0, !0), 7, 3614090360), i = s(i, r, n, o, e.getUint32(4, !0), 12, 3905402710), o = s(o, i, r, n, e.getUint32(8, !0), 17, 606105819), n = s(n, o, i, r, e.getUint32(12, !0), 22, 3250441966), r = s(r, n, o, i, e.getUint32(16, !0), 7, 4118548399), i = s(i, r, n, o, e.getUint32(20, !0), 12, 1200080426), o = s(o, i, r, n, e.getUint32(24, !0), 17, 2821735955), n = s(n, o, i, r, e.getUint32(28, !0), 22, 4249261313), r = s(r, n, o, i, e.getUint32(32, !0), 7, 1770035416), i = s(i, r, n, o, e.getUint32(36, !0), 12, 2336552879), o = s(o, i, r, n, e.getUint32(40, !0), 17, 4294925233), n = s(n, o, i, r, e.getUint32(44, !0), 22, 2304563134), r = s(r, n, o, i, e.getUint32(48, !0), 7, 1804603682), i = s(i, r, n, o, e.getUint32(52, !0), 12, 4254626195), o = s(o, i, r, n, e.getUint32(56, !0), 17, 2792965006), n = s(n, o, i, r, e.getUint32(60, !0), 22, 1236535329), r = c(r, n, o, i, e.getUint32(4, !0), 5, 4129170786), i = c(i, r, n, o, e.getUint32(24, !0), 9, 3225465664), o = c(o, i, r, n, e.getUint32(44, !0), 14, 643717713), n = c(n, o, i, r, e.getUint32(0, !0), 20, 3921069994), r = c(r, n, o, i, e.getUint32(20, !0), 5, 3593408605), i = c(i, r, n, o, e.getUint32(40, !0), 9, 38016083), o = c(o, i, r, n, e.getUint32(60, !0), 14, 3634488961), n = c(n, o, i, r, e.getUint32(16, !0), 20, 3889429448), r = c(r, n, o, i, e.getUint32(36, !0), 5, 568446438), i = c(i, r, n, o, e.getUint32(56, !0), 9, 3275163606), o = c(o, i, r, n, e.getUint32(12, !0), 14, 4107603335), n = c(n, o, i, r, e.getUint32(32, !0), 20, 1163531501), r = c(r, n, o, i, e.getUint32(52, !0), 5, 2850285829), i = c(i, r, n, o, e.getUint32(8, !0), 9, 4243563512), o = c(o, i, r, n, e.getUint32(28, !0), 14, 1735328473), n = c(n, o, i, r, e.getUint32(48, !0), 20, 2368359562), r = u(r, n, o, i, e.getUint32(20, !0), 4, 4294588738), i = u(i, r, n, o, e.getUint32(32, !0), 11, 2272392833), o = u(o, i, r, n, e.getUint32(44, !0), 16, 1839030562), n = u(n, o, i, r, e.getUint32(56, !0), 23, 4259657740), r = u(r, n, o, i, e.getUint32(4, !0), 4, 2763975236), i = u(i, r, n, o, e.getUint32(16, !0), 11, 1272893353), o = u(o, i, r, n, e.getUint32(28, !0), 16, 4139469664), n = u(n, o, i, r, e.getUint32(40, !0), 23, 3200236656), r = u(r, n, o, i, e.getUint32(52, !0), 4, 681279174), i = u(i, r, n, o, e.getUint32(0, !0), 11, 3936430074), o = u(o, i, r, n, e.getUint32(12, !0), 16, 3572445317), n = u(n, o, i, r, e.getUint32(24, !0), 23, 76029189), r = u(r, n, o, i, e.getUint32(36, !0), 4, 3654602809), i = u(i, r, n, o, e.getUint32(48, !0), 11, 3873151461), o = u(o, i, r, n, e.getUint32(60, !0), 16, 530742520), n = u(n, o, i, r, e.getUint32(8, !0), 23, 3299628645), r = l(r, n, o, i, e.getUint32(0, !0), 6, 4096336452), i = l(i, r, n, o, e.getUint32(28, !0), 10, 1126891415), o = l(o, i, r, n, e.getUint32(56, !0), 15, 2878612391), n = l(n, o, i, r, e.getUint32(20, !0), 21, 4237533241), r = l(r, n, o, i, e.getUint32(48, !0), 6, 1700485571), i = l(i, r, n, o, e.getUint32(12, !0), 10, 2399980690), o = l(o, i, r, n, e.getUint32(40, !0), 15, 4293915773), n = l(n, o, i, r, e.getUint32(4, !0), 21, 2240044497), r = l(r, n, o, i, e.getUint32(32, !0), 6, 1873313359), i = l(i, r, n, o, e.getUint32(60, !0), 10, 4264355552), o = l(o, i, r, n, e.getUint32(24, !0), 15, 2734768916), n = l(n, o, i, r, e.getUint32(52, !0), 21, 1309151649), r = l(r, n, o, i, e.getUint32(16, !0), 6, 4149444226), i = l(i, r, n, o, e.getUint32(44, !0), 10, 3174756917), o = l(o, i, r, n, e.getUint32(8, !0), 15, 718787259), n = l(n, o, i, r, e.getUint32(36, !0), 21, 3951481745), t[0] = r + t[0] & 4294967295, t[1] = n + t[1] & 4294967295, t[2] = o + t[2] & 4294967295, t[3] = i + t[3] & 4294967295
            }
        },
        14314: function(e, t, r) {
            var n = r(48764).lW,
                o = r(66323);

            function i() {
                this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = new Uint32Array(80), this.offset = 0, this.shift = 24, this.totalLength = 0
            }
            new Uint32Array([1518500249, 1859775393, -1894007588, -899497514]), e.exports = i, i.BLOCK_SIZE = 64, i.prototype.update = function(e) {
                if (this.finished) throw Error("Attempted to update an already finished hash.");
                if (o.isEmptyData(e)) return this;
                var t = (e = o.convertToBuffer(e)).length;
                this.totalLength += 8 * t;
                for (var r = 0; r < t; r++) this.write(e[r]);
                return this
            }, i.prototype.write = function(e) {
                this.block[this.offset] |= (255 & e) << this.shift, this.shift ? this.shift -= 8 : (this.offset++, this.shift = 24), 16 === this.offset && this.processBlock()
            }, i.prototype.digest = function(e) {
                this.write(128), (this.offset > 14 || 14 === this.offset && this.shift < 24) && this.processBlock(), this.offset = 14, this.shift = 24, this.write(0), this.write(0), this.write(this.totalLength > 0xffffffffff ? this.totalLength / 1099511627776 : 0), this.write(this.totalLength > 4294967295 ? this.totalLength / 4294967296 : 0);
                for (var t = 24; t >= 0; t -= 8) this.write(this.totalLength >> t);
                var r = new n(20),
                    o = new DataView(r.buffer);
                return o.setUint32(0, this.h0, !1), o.setUint32(4, this.h1, !1), o.setUint32(8, this.h2, !1), o.setUint32(12, this.h3, !1), o.setUint32(16, this.h4, !1), e ? r.toString(e) : r
            }, i.prototype.processBlock = function() {
                for (var e, t, r = 16; r < 80; r++) {
                    var n = this.block[r - 3] ^ this.block[r - 8] ^ this.block[r - 14] ^ this.block[r - 16];
                    this.block[r] = n << 1 | n >>> 31
                }
                var o = this.h0,
                    i = this.h1,
                    a = this.h2,
                    s = this.h3,
                    c = this.h4;
                for (r = 0; r < 80; r++) {
                    r < 20 ? (e = s ^ i & (a ^ s), t = 1518500249) : r < 40 ? (e = i ^ a ^ s, t = 1859775393) : r < 60 ? (e = i & a | s & (i | a), t = 2400959708) : (e = i ^ a ^ s, t = 3395469782);
                    var u = (o << 5 | o >>> 27) + e + c + t + (0 | this.block[r]);
                    c = s, s = a, a = i << 30 | i >>> 2, i = o, o = u
                }
                for (r = 0, this.h0 = this.h0 + o | 0, this.h1 = this.h1 + i | 0, this.h2 = this.h2 + a | 0, this.h3 = this.h3 + s | 0, this.h4 = this.h4 + c | 0, this.offset = 0; r < 16; r++) this.block[r] = 0
            }
        },
        11365: function(e, t, r) {
            var n = r(48764).lW,
                o = r(66323),
                i = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a() {
                this.state = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
            }
            e.exports = a, a.BLOCK_SIZE = 64, a.prototype.update = function(e) {
                if (this.finished) throw Error("Attempted to update an already finished hash.");
                if (o.isEmptyData(e)) return this;
                e = o.convertToBuffer(e);
                var t = 0,
                    r = e.byteLength;
                if (this.bytesHashed += r, 8 * this.bytesHashed > 9007199254740991) throw Error("Cannot hash more than 2^53 - 1 bits");
                for (; r > 0;) this.buffer[this.bufferLength++] = e[t++], r--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0);
                return this
            }, a.prototype.digest = function(e) {
                if (!this.finished) {
                    var t = 8 * this.bytesHashed,
                        r = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                        o = this.bufferLength;
                    if (r.setUint8(this.bufferLength++, 128), o % 64 >= 56) {
                        for (var i = this.bufferLength; i < 64; i++) r.setUint8(i, 0);
                        this.hashBuffer(), this.bufferLength = 0
                    }
                    for (var i = this.bufferLength; i < 56; i++) r.setUint8(i, 0);
                    r.setUint32(56, Math.floor(t / 4294967296), !0), r.setUint32(60, t), this.hashBuffer(), this.finished = !0
                }
                for (var a = new n(32), i = 0; i < 8; i++) a[4 * i] = this.state[i] >>> 24 & 255, a[4 * i + 1] = this.state[i] >>> 16 & 255, a[4 * i + 2] = this.state[i] >>> 8 & 255, a[4 * i + 3] = this.state[i] >>> 0 & 255;
                return e ? a.toString(e) : a
            }, a.prototype.hashBuffer = function() {
                for (var e = this.buffer, t = this.state, r = t[0], n = t[1], o = t[2], a = t[3], s = t[4], c = t[5], u = t[6], l = t[7], p = 0; p < 64; p++) {
                    if (p < 16) this.temp[p] = (255 & e[4 * p]) << 24 | (255 & e[4 * p + 1]) << 16 | (255 & e[4 * p + 2]) << 8 | 255 & e[4 * p + 3];
                    else {
                        var d = this.temp[p - 2],
                            m = (d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10,
                            h = ((d = this.temp[p - 15]) >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3;
                        this.temp[p] = (m + this.temp[p - 7] | 0) + (h + this.temp[p - 16] | 0)
                    }
                    var f = (((s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7)) + (s & c ^ ~s & u) | 0) + (l + (i[p] + this.temp[p] | 0) | 0) | 0,
                        y = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & n ^ r & o ^ n & o) | 0;
                    l = u, u = c, c = s, s = a + f | 0, a = o, o = n, n = r, r = f + y | 0
                }
                t[0] += r, t[1] += n, t[2] += o, t[3] += a, t[4] += s, t[5] += c, t[6] += u, t[7] += l
            }
        },
        17321: function(e, t, r) {
            var n = r(62662);
            n.crypto.lib = r(47821), n.Buffer = r(48764).lW, n.url = r(11987), n.querystring = r(17673), n.realClock = r(31414), n.environment = "js", n.createEventStream = r(2403).createEventStream, n.isBrowser = function() {
                return !0
            }, n.isNode = function() {
                return !1
            };
            var o = r(79614);
            if (e.exports = o, r(84465), r(83227), r(46662), r(91), r(97719), r(67372), r(16986), o.XML.Parser = r(35106), r(2631), void 0 === i) var i = {
                browser: !0
            }
        },
        22709: function(e, t, r) {
            var n, o = r(79614);
            r(84465), r(83227), o.Config = o.util.inherit({
                constructor: function(e) {
                    void 0 === e && (e = {}), e = this.extractCredentials(e), o.util.each.call(this, this.keys, function(t, r) {
                        this.set(t, e[t], r)
                    })
                },
                getCredentials: function(e) {
                    var t, r = this;

                    function n(t) {
                        e(t, t ? null : r.credentials)
                    }

                    function i(e, t) {
                        return new o.util.error(t || Error(), {
                            code: "CredentialsError",
                            message: e,
                            name: "CredentialsError"
                        })
                    }
                    r.credentials ? "function" == typeof r.credentials.get ? r.credentials.get(function(e) {
                        e && (e = i("Could not load credentials from " + r.credentials.constructor.name, e)), n(e)
                    }) : (t = null, r.credentials.accessKeyId && r.credentials.secretAccessKey || (t = i("Missing credentials")), n(t)) : r.credentialProvider ? r.credentialProvider.resolve(function(e, t) {
                        e && (e = i("Could not load credentials from any providers", e)), r.credentials = t, n(e)
                    }) : n(i("No credentials to load"))
                },
                getToken: function(e) {
                    var t, r = this;

                    function n(t) {
                        e(t, t ? null : r.token)
                    }

                    function i(e, t) {
                        return new o.util.error(t || Error(), {
                            code: "TokenError",
                            message: e,
                            name: "TokenError"
                        })
                    }
                    r.token ? "function" == typeof r.token.get ? r.token.get(function(e) {
                        e && (e = i("Could not load token from " + r.token.constructor.name, e)), n(e)
                    }) : (t = null, r.token.token || (t = i("Missing token")), n(t)) : r.tokenProvider ? r.tokenProvider.resolve(function(e, t) {
                        e && (e = i("Could not load token from any providers", e)), r.token = t, n(e)
                    }) : n(i("No token to load"))
                },
                update: function(e, t) {
                    t = t || !1, e = this.extractCredentials(e), o.util.each.call(this, e, function(e, r) {
                        (t || Object.prototype.hasOwnProperty.call(this.keys, e) || o.Service.hasService(e)) && this.set(e, r)
                    })
                },
                loadFromPath: function(e) {
                    this.clear();
                    var t = JSON.parse(o.util.readFileSync(e)),
                        r = new o.FileSystemCredentials(e),
                        n = new o.CredentialProviderChain;
                    return n.providers.unshift(r), n.resolve(function(e, r) {
                        if (e) throw e;
                        t.credentials = r
                    }), this.constructor(t), this
                },
                clear: function() {
                    o.util.each.call(this, this.keys, function(e) {
                        delete this[e]
                    }), this.set("credentials", void 0), this.set("credentialProvider", void 0)
                },
                set: function(e, t, r) {
                    void 0 === t ? (void 0 === r && (r = this.keys[e]), "function" == typeof r ? this[e] = r.call(this) : this[e] = r) : "httpOptions" === e && this[e] ? this[e] = o.util.merge(this[e], t) : this[e] = t
                },
                keys: {
                    credentials: null,
                    credentialProvider: null,
                    region: null,
                    logger: null,
                    apiVersions: {},
                    apiVersion: null,
                    endpoint: void 0,
                    httpOptions: {
                        timeout: 12e4
                    },
                    maxRetries: void 0,
                    maxRedirects: 10,
                    paramValidation: !0,
                    sslEnabled: !0,
                    s3ForcePathStyle: !1,
                    s3BucketEndpoint: !1,
                    s3DisableBodySigning: !0,
                    s3UsEast1RegionalEndpoint: "legacy",
                    s3UseArnRegion: void 0,
                    computeChecksums: !0,
                    convertResponseTypes: !0,
                    correctClockSkew: !1,
                    customUserAgent: null,
                    dynamoDbCrc32: !0,
                    systemClockOffset: 0,
                    signatureVersion: null,
                    signatureCache: !0,
                    retryDelayOptions: {},
                    useAccelerateEndpoint: !1,
                    clientSideMonitoring: !1,
                    endpointDiscoveryEnabled: void 0,
                    endpointCacheSize: 1e3,
                    hostPrefixEnabled: !0,
                    stsRegionalEndpoints: "legacy",
                    useFipsEndpoint: !1,
                    useDualstackEndpoint: !1,
                    token: null
                },
                extractCredentials: function(e) {
                    return e.accessKeyId && e.secretAccessKey && ((e = o.util.copy(e)).credentials = new o.Credentials(e)), e
                },
                setPromisesDependency: function(e) {
                    n = e, null === e && "function" == typeof Promise && (n = Promise);
                    var t = [o.Request, o.Credentials, o.CredentialProviderChain];
                    o.S3 && (t.push(o.S3), o.S3.ManagedUpload && t.push(o.S3.ManagedUpload)), o.util.addPromises(t, n)
                },
                getPromisesDependency: function() {
                    return n
                }
            }), o.config = new o.Config
        },
        65456: function(e, t, r) {
            var n = r(83454),
                o = r(79614);

            function i(e, t) {
                if ("string" == typeof e) {
                    if (["legacy", "regional"].indexOf(e.toLowerCase()) >= 0) return e.toLowerCase();
                    throw o.util.error(Error(), t)
                }
            }
            e.exports = function(e, t) {
                if ((e = e || {})[t.clientConfig] && (r = i(e[t.clientConfig], {
                        code: "InvalidConfiguration",
                        message: 'invalid "' + t.clientConfig + '" configuration. Expect "legacy"  or "regional". Got "' + e[t.clientConfig] + '".'
                    })) || !o.util.isNode()) return r;
                if (Object.prototype.hasOwnProperty.call(n.env, t.env)) {
                    var r;
                    if (r = i(n.env[t.env], {
                            code: "InvalidEnvironmentalVariable",
                            message: "invalid " + t.env + ' environmental variable. Expect "legacy"  or "regional". Got "' + n.env[t.env] + '".'
                        })) return r
                }
                var a = {};
                try {
                    a = o.util.getProfilesFromSharedConfig(o.util.iniLoader)[n.env.AWS_PROFILE || o.util.defaultProfile]
                } catch (e) {}
                return a && Object.prototype.hasOwnProperty.call(a, t.sharedConfig) && (r = i(a[t.sharedConfig], {
                    code: "InvalidConfiguration",
                    message: "invalid " + t.sharedConfig + ' profile config. Expect "legacy"  or "regional". Got "' + a[t.sharedConfig] + '".'
                })), r
            }
        },
        79614: function(e, t, r) {
            var n = {
                util: r(62662)
            };
            ({}).toString(), e.exports = n, n.util.update(n, {
                VERSION: "2.1338.0",
                Signers: {},
                Protocol: {
                    Json: r(76933),
                    Query: r(70293),
                    Rest: r(96225),
                    RestJson: r(53699),
                    RestXml: r(11674)
                },
                XML: {
                    Builder: r(52369),
                    Parser: null
                },
                JSON: {
                    Builder: r(43658),
                    Parser: r(62622)
                },
                Model: {
                    Api: r(85863),
                    Operation: r(66797),
                    Shape: r(68136),
                    Paginator: r(47937),
                    ResourceWaiter: r(90306)
                },
                apiLoader: r(16862),
                EndpointCache: r(85101).$
            }), r(96380), r(20173), r(22709), r(26344), r(72274), r(73682), r(93975), r(82413), r(92604), r(25479), r(3580), n.events = new n.SequentialExecutor, n.util.memoizedProperty(n, "endpointCache", function() {
                return new n.EndpointCache(n.config.endpointCacheSize)
            }, !0)
        },
        84465: function(e, t, r) {
            var n = r(79614);
            n.Credentials = n.util.inherit({
                constructor: function() {
                    if (n.util.hideProperties(this, ["secretAccessKey"]), this.expired = !1, this.expireTime = null, this.refreshCallbacks = [], 1 == arguments.length && "object" == typeof arguments[0]) {
                        var e = arguments[0].credentials || arguments[0];
                        this.accessKeyId = e.accessKeyId, this.secretAccessKey = e.secretAccessKey, this.sessionToken = e.sessionToken
                    } else this.accessKeyId = arguments[0], this.secretAccessKey = arguments[1], this.sessionToken = arguments[2]
                },
                expiryWindow: 15,
                needsRefresh: function() {
                    var e = n.util.date.getDate().getTime(),
                        t = new Date(e + 1e3 * this.expiryWindow);
                    return !!this.expireTime && t > this.expireTime || this.expired || !this.accessKeyId || !this.secretAccessKey
                },
                get: function(e) {
                    var t = this;
                    this.needsRefresh() ? this.refresh(function(r) {
                        r || (t.expired = !1), e && e(r)
                    }) : e && e()
                },
                refresh: function(e) {
                    this.expired = !1, e()
                },
                coalesceRefresh: function(e, t) {
                    var r = this;
                    1 === r.refreshCallbacks.push(e) && r.load(function(e) {
                        n.util.arrayEach(r.refreshCallbacks, function(r) {
                            t ? r(e) : n.util.defer(function() {
                                r(e)
                            })
                        }), r.refreshCallbacks.length = 0
                    })
                },
                load: function(e) {
                    e()
                }
            }), n.Credentials.addPromisesToClass = function(e) {
                this.prototype.getPromise = n.util.promisifyMethod("get", e), this.prototype.refreshPromise = n.util.promisifyMethod("refresh", e)
            }, n.Credentials.deletePromisesFromClass = function() {
                delete this.prototype.getPromise, delete this.prototype.refreshPromise
            }, n.util.addPromises(n.Credentials)
        },
        91: function(e, t, r) {
            var n = r(79614),
                o = r(93568);
            n.ChainableTemporaryCredentials = n.util.inherit(n.Credentials, {
                constructor: function(e) {
                    n.Credentials.call(this), e = e || {}, this.errorCode = "ChainableTemporaryCredentialsProviderFailure", this.expired = !0, this.tokenCodeFn = null;
                    var t = n.util.copy(e.params) || {};
                    if (t.RoleArn && (t.RoleSessionName = t.RoleSessionName || "temporary-credentials"), t.SerialNumber) {
                        if (e.tokenCodeFn && "function" == typeof e.tokenCodeFn) this.tokenCodeFn = e.tokenCodeFn;
                        else throw new n.util.error(Error("tokenCodeFn must be a function when params.SerialNumber is given"), {
                            code: this.errorCode
                        })
                    }
                    var r = n.util.merge({
                        params: t,
                        credentials: e.masterCredentials || n.config.credentials
                    }, e.stsConfig || {});
                    this.service = new o(r)
                },
                refresh: function(e) {
                    this.coalesceRefresh(e || n.util.fn.callback)
                },
                load: function(e) {
                    var t = this,
                        r = t.service.config.params.RoleArn ? "assumeRole" : "getSessionToken";
                    this.getTokenCode(function(n, o) {
                        var i = {};
                        if (n) {
                            e(n);
                            return
                        }
                        o && (i.TokenCode = o), t.service[r](i, function(r, n) {
                            r || t.service.credentialsFrom(n, t), e(r)
                        })
                    })
                },
                getTokenCode: function(e) {
                    var t = this;
                    this.tokenCodeFn ? this.tokenCodeFn(this.service.config.params.SerialNumber, function(r, o) {
                        if (r) {
                            var i = r;
                            r instanceof Error && (i = r.message), e(n.util.error(Error("Error fetching MFA token: " + i), {
                                code: t.errorCode
                            }));
                            return
                        }
                        e(null, o)
                    }) : e(null)
                }
            })
        },
        67372: function(e, t, r) {
            var n = r(79614),
                o = r(96105),
                i = r(93568);
            n.CognitoIdentityCredentials = n.util.inherit(n.Credentials, {
                localStorageKey: {
                    id: "aws.cognito.identity-id.",
                    providers: "aws.cognito.identity-providers."
                },
                constructor: function(e, t) {
                    n.Credentials.call(this), this.expired = !0, this.params = e, this.data = null, this._identityId = null, this._clientConfig = n.util.copy(t || {}), this.loadCachedId();
                    var r = this;
                    Object.defineProperty(this, "identityId", {
                        get: function() {
                            return r.loadCachedId(), r._identityId || r.params.IdentityId
                        },
                        set: function(e) {
                            r._identityId = e
                        }
                    })
                },
                refresh: function(e) {
                    this.coalesceRefresh(e || n.util.fn.callback)
                },
                load: function(e) {
                    var t = this;
                    t.createClients(), t.data = null, t._identityId = null, t.getId(function(r) {
                        r ? (t.clearIdOnNotAuthorized(r), e(r)) : t.params.RoleArn ? t.getCredentialsFromSTS(e) : t.getCredentialsForIdentity(e)
                    })
                },
                clearCachedId: function() {
                    this._identityId = null, delete this.params.IdentityId;
                    var e = this.params.IdentityPoolId,
                        t = this.params.LoginId || "";
                    delete this.storage[this.localStorageKey.id + e + t], delete this.storage[this.localStorageKey.providers + e + t]
                },
                clearIdOnNotAuthorized: function(e) {
                    "NotAuthorizedException" == e.code && this.clearCachedId()
                },
                getId: function(e) {
                    var t = this;
                    if ("string" == typeof t.params.IdentityId) return e(null, t.params.IdentityId);
                    t.cognito.getId(function(r, n) {
                        !r && n.IdentityId ? (t.params.IdentityId = n.IdentityId, e(null, n.IdentityId)) : e(r)
                    })
                },
                loadCredentials: function(e, t) {
                    e && t && (t.expired = !1, t.accessKeyId = e.Credentials.AccessKeyId, t.secretAccessKey = e.Credentials.SecretKey, t.sessionToken = e.Credentials.SessionToken, t.expireTime = e.Credentials.Expiration)
                },
                getCredentialsForIdentity: function(e) {
                    var t = this;
                    t.cognito.getCredentialsForIdentity(function(r, n) {
                        r ? t.clearIdOnNotAuthorized(r) : (t.cacheId(n), t.data = n, t.loadCredentials(t.data, t)), e(r)
                    })
                },
                getCredentialsFromSTS: function(e) {
                    var t = this;
                    t.cognito.getOpenIdToken(function(r, n) {
                        r ? (t.clearIdOnNotAuthorized(r), e(r)) : (t.cacheId(n), t.params.WebIdentityToken = n.Token, t.webIdentityCredentials.refresh(function(r) {
                            r || (t.data = t.webIdentityCredentials.data, t.sts.credentialsFrom(t.data, t)), e(r)
                        }))
                    })
                },
                loadCachedId: function() {
                    var e = this;
                    if (n.util.isBrowser() && !e.params.IdentityId) {
                        var t = e.getStorage("id");
                        if (t && e.params.Logins) {
                            var r = Object.keys(e.params.Logins);
                            0 !== (e.getStorage("providers") || "").split(",").filter(function(e) {
                                return -1 !== r.indexOf(e)
                            }).length && (e.params.IdentityId = t)
                        } else t && (e.params.IdentityId = t)
                    }
                },
                createClients: function() {
                    var e = this._clientConfig;
                    if (this.webIdentityCredentials = this.webIdentityCredentials || new n.WebIdentityCredentials(this.params, e), !this.cognito) {
                        var t = n.util.merge({}, e);
                        t.params = this.params, this.cognito = new o(t)
                    }
                    this.sts = this.sts || new i(e)
                },
                cacheId: function(e) {
                    this._identityId = e.IdentityId, this.params.IdentityId = this._identityId, n.util.isBrowser() && (this.setStorage("id", e.IdentityId), this.params.Logins && this.setStorage("providers", Object.keys(this.params.Logins).join(",")))
                },
                getStorage: function(e) {
                    return this.storage[this.localStorageKey[e] + this.params.IdentityPoolId + (this.params.LoginId || "")]
                },
                setStorage: function(e, t) {
                    try {
                        this.storage[this.localStorageKey[e] + this.params.IdentityPoolId + (this.params.LoginId || "")] = t
                    } catch (e) {}
                },
                storage: function() {
                    try {
                        var e = n.util.isBrowser() && null !== window.localStorage && "object" == typeof window.localStorage ? window.localStorage : {};
                        return e["aws.test-storage"] = "foobar", delete e["aws.test-storage"], e
                    } catch (e) {
                        return {}
                    }
                }()
            })
        },
        83227: function(e, t, r) {
            var n = r(79614);
            n.CredentialProviderChain = n.util.inherit(n.Credentials, {
                constructor: function(e) {
                    e ? this.providers = e : this.providers = n.CredentialProviderChain.defaultProviders.slice(0), this.resolveCallbacks = []
                },
                resolve: function(e) {
                    var t = this;
                    if (0 === t.providers.length) return e(Error("No providers")), t;
                    if (1 === t.resolveCallbacks.push(e)) {
                        var r = 0,
                            o = t.providers.slice(0);
                        ! function e(i, a) {
                            if (!i && a || r === o.length) {
                                n.util.arrayEach(t.resolveCallbacks, function(e) {
                                    e(i, a)
                                }), t.resolveCallbacks.length = 0;
                                return
                            }
                            var s = o[r++];
                            (a = "function" == typeof s ? s.call() : s).get ? a.get(function(t) {
                                e(t, t ? null : a)
                            }) : e(null, a)
                        }()
                    }
                    return t
                }
            }), n.CredentialProviderChain.defaultProviders = [], n.CredentialProviderChain.addPromisesToClass = function(e) {
                this.prototype.resolvePromise = n.util.promisifyMethod("resolve", e)
            }, n.CredentialProviderChain.deletePromisesFromClass = function() {
                delete this.prototype.resolvePromise
            }, n.util.addPromises(n.CredentialProviderChain)
        },
        16986: function(e, t, r) {
            var n = r(79614),
                o = r(93568);
            n.SAMLCredentials = n.util.inherit(n.Credentials, {
                constructor: function(e) {
                    n.Credentials.call(this), this.expired = !0, this.params = e
                },
                refresh: function(e) {
                    this.coalesceRefresh(e || n.util.fn.callback)
                },
                load: function(e) {
                    var t = this;
                    t.createClients(), t.service.assumeRoleWithSAML(function(r, n) {
                        r || t.service.credentialsFrom(n, t), e(r)
                    })
                },
                createClients: function() {
                    this.service = this.service || new o({
                        params: this.params
                    })
                }
            })
        },
        46662: function(e, t, r) {
            var n = r(79614),
                o = r(93568);
            n.TemporaryCredentials = n.util.inherit(n.Credentials, {
                constructor: function(e, t) {
                    n.Credentials.call(this), this.loadMasterCredentials(t), this.expired = !0, this.params = e || {}, this.params.RoleArn && (this.params.RoleSessionName = this.params.RoleSessionName || "temporary-credentials")
                },
                refresh: function(e) {
                    this.coalesceRefresh(e || n.util.fn.callback)
                },
                load: function(e) {
                    var t = this;
                    t.createClients(), t.masterCredentials.get(function() {
                        t.service.config.credentials = t.masterCredentials, (t.params.RoleArn ? t.service.assumeRole : t.service.getSessionToken).call(t.service, function(r, n) {
                            r || t.service.credentialsFrom(n, t), e(r)
                        })
                    })
                },
                loadMasterCredentials: function(e) {
                    for (this.masterCredentials = e || n.config.credentials; this.masterCredentials.masterCredentials;) this.masterCredentials = this.masterCredentials.masterCredentials;
                    "function" != typeof this.masterCredentials.get && (this.masterCredentials = new n.Credentials(this.masterCredentials))
                },
                createClients: function() {
                    this.service = this.service || new o({
                        params: this.params
                    })
                }
            })
        },
        97719: function(e, t, r) {
            var n = r(79614),
                o = r(93568);
            n.WebIdentityCredentials = n.util.inherit(n.Credentials, {
                constructor: function(e, t) {
                    n.Credentials.call(this), this.expired = !0, this.params = e, this.params.RoleSessionName = this.params.RoleSessionName || "web-identity", this.data = null, this._clientConfig = n.util.copy(t || {})
                },
                refresh: function(e) {
                    this.coalesceRefresh(e || n.util.fn.callback)
                },
                load: function(e) {
                    var t = this;
                    t.createClients(), t.service.assumeRoleWithWebIdentity(function(r, n) {
                        t.data = null, r || (t.data = n, t.service.credentialsFrom(n, t)), e(r)
                    })
                },
                createClients: function() {
                    if (!this.service) {
                        var e = n.util.merge({}, this._clientConfig);
                        e.params = this.params, this.service = new o(e)
                    }
                }
            })
        },
        33320: function(e, t, r) {
            var n = r(83454),
                o = r(79614),
                i = r(62662),
                a = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"];

            function s(e) {
                var t = e.service,
                    r = t.api || {};
                r.operations;
                var n = {};
                return t.config.region && (n.region = t.config.region), r.serviceId && (n.serviceId = r.serviceId), t.config.credentials.accessKeyId && (n.accessKeyId = t.config.credentials.accessKeyId), n
            }

            function c(e, t) {
                var r = {};
                return ! function e(t, r, n) {
                    n && null != r && "structure" === n.type && n.required && n.required.length > 0 && i.arrayEach(n.required, function(o) {
                        var i = n.members[o];
                        !0 === i.endpointDiscoveryId ? t[i.isLocationName ? i.name : o] = String(r[o]) : e(t, r[o], i)
                    })
                }(r, e.params, t), r
            }

            function u(e) {
                var t = e.service,
                    r = t.api,
                    n = r.operations ? r.operations[e.operation] : void 0,
                    a = c(e, n ? n.input : void 0),
                    u = s(e);
                Object.keys(a).length > 0 && (u = i.update(u, a), n && (u.operation = n.name));
                var l = o.endpointCache.get(u);
                if (!l || 1 !== l.length || "" !== l[0].Address) {
                    if (l && l.length > 0) e.httpRequest.updateEndpoint(l[0].Address);
                    else {
                        var p = t.makeRequest(r.endpointOperation, {
                            Operation: n.name,
                            Identifiers: a
                        });
                        d(p), p.removeListener("validate", o.EventListeners.Core.VALIDATE_PARAMETERS), p.removeListener("retry", o.EventListeners.Core.RETRY_CHECK), o.endpointCache.put(u, [{
                            Address: "",
                            CachePeriodInMinutes: 1
                        }]), p.send(function(e, t) {
                            t && t.Endpoints ? o.endpointCache.put(u, t.Endpoints) : e && o.endpointCache.put(u, [{
                                Address: "",
                                CachePeriodInMinutes: 1
                            }])
                        })
                    }
                }
            }
            var l = {};

            function p(e, t) {
                var r = e.service,
                    n = r.api,
                    a = n.operations ? n.operations[e.operation] : void 0,
                    u = c(e, a ? a.input : void 0),
                    p = s(e);
                Object.keys(u).length > 0 && (p = i.update(p, u), a && (p.operation = a.name));
                var m = o.EndpointCache.getKeyString(p),
                    h = o.endpointCache.get(m);
                if (h && 1 === h.length && "" === h[0].Address) {
                    l[m] || (l[m] = []), l[m].push({
                        request: e,
                        callback: t
                    });
                    return
                }
                if (h && h.length > 0) e.httpRequest.updateEndpoint(h[0].Address), t();
                else {
                    var f = r.makeRequest(n.endpointOperation, {
                        Operation: a.name,
                        Identifiers: u
                    });
                    f.removeListener("validate", o.EventListeners.Core.VALIDATE_PARAMETERS), d(f), o.endpointCache.put(m, [{
                        Address: "",
                        CachePeriodInMinutes: 60
                    }]), f.send(function(r, n) {
                        if (r) {
                            if (e.response.error = i.error(r, {
                                    retryable: !1
                                }), o.endpointCache.remove(p), l[m]) {
                                var a = l[m];
                                i.arrayEach(a, function(e) {
                                    e.request.response.error = i.error(r, {
                                        retryable: !1
                                    }), e.callback()
                                }), delete l[m]
                            }
                        } else if (n && (o.endpointCache.put(m, n.Endpoints), e.httpRequest.updateEndpoint(n.Endpoints[0].Address), l[m])) {
                            var a = l[m];
                            i.arrayEach(a, function(e) {
                                e.request.httpRequest.updateEndpoint(n.Endpoints[0].Address), e.callback()
                            }), delete l[m]
                        }
                        t()
                    })
                }
            }

            function d(e) {
                var t = e.service.api.apiVersion;
                t && !e.httpRequest.headers["x-amz-api-version"] && (e.httpRequest.headers["x-amz-api-version"] = t)
            }

            function m(e) {
                var t = e.error,
                    r = e.httpResponse;
                if (t && ("InvalidEndpointException" === t.code || 421 === r.statusCode)) {
                    var n = e.request,
                        a = n.service.api.operations || {},
                        u = a[n.operation] ? a[n.operation].input : void 0,
                        l = c(n, u),
                        p = s(n);
                    Object.keys(l).length > 0 && (p = i.update(p, l), a[n.operation] && (p.operation = a[n.operation].name)), o.endpointCache.remove(p)
                }
            }

            function h(e) {
                return ["false", "0"].indexOf(e) >= 0
            }
            e.exports = {
                discoverEndpoint: function(e, t) {
                    var r = e.service || {};
                    if (function(e) {
                            if (e._originalConfig && e._originalConfig.endpoint && !0 === e._originalConfig.endpointDiscoveryEnabled) throw i.error(Error(), {
                                code: "ConfigurationException",
                                message: "Custom endpoint is supplied; endpointDiscoveryEnabled must not be true."
                            });
                            var t = o.config[e.serviceIdentifier] || {};
                            return Boolean(o.config.endpoint || t.endpoint || e._originalConfig && e._originalConfig.endpoint)
                        }(r) || e.isPresigned()) return t();
                    var s = (r.api.operations || {})[e.operation],
                        c = s ? s.endpointDiscoveryRequired : "NULL",
                        l = function(e) {
                            var t = e.service || {};
                            if (void 0 !== t.config.endpointDiscoveryEnabled) return t.config.endpointDiscoveryEnabled;
                            if (!i.isBrowser()) {
                                for (var r = 0; r < a.length; r++) {
                                    var s = a[r];
                                    if (Object.prototype.hasOwnProperty.call(n.env, s)) {
                                        if ("" === n.env[s] || void 0 === n.env[s]) throw i.error(Error(), {
                                            code: "ConfigurationException",
                                            message: "environmental variable " + s + " cannot be set to nothing"
                                        });
                                        return !h(n.env[s])
                                    }
                                }
                                var c = {};
                                try {
                                    c = o.util.iniLoader ? o.util.iniLoader.loadFrom({
                                        isConfig: !0,
                                        filename: n.env[o.util.sharedConfigFileEnv]
                                    }) : {}
                                } catch (e) {}
                                var u = c[n.env.AWS_PROFILE || o.util.defaultProfile] || {};
                                if (Object.prototype.hasOwnProperty.call(u, "endpoint_discovery_enabled")) {
                                    if (void 0 === u.endpoint_discovery_enabled) throw i.error(Error(), {
                                        code: "ConfigurationException",
                                        message: "config file entry 'endpoint_discovery_enabled' cannot be set to nothing"
                                    });
                                    return !h(u.endpoint_discovery_enabled)
                                }
                            }
                        }(e),
                        d = r.api.hasRequiredEndpointDiscovery;
                    switch ((l || d) && e.httpRequest.appendToUserAgent("endpoint-discovery"), c) {
                        case "OPTIONAL":
                            (l || d) && (u(e), e.addNamedListener("INVALIDATE_CACHED_ENDPOINTS", "extractError", m)), t();
                            break;
                        case "REQUIRED":
                            if (!1 === l) {
                                e.response.error = i.error(Error(), {
                                    code: "ConfigurationException",
                                    message: "Endpoint Discovery is disabled but " + r.api.className + "." + e.operation + "() requires it. Please check your configurations."
                                }), t();
                                break
                            }
                            e.addNamedListener("INVALIDATE_CACHED_ENDPOINTS", "extractError", m), p(e, t);
                            break;
                        default:
                            t()
                    }
                },
                requiredDiscoverEndpoint: p,
                optionalDiscoverEndpoint: u,
                marshallCustomIdentifiers: c,
                getCacheKey: s,
                invalidateCachedEndpoint: m
            }
        },
        2403: function(e, t, r) {
            var n = r(97550).eventMessageChunker,
                o = r(83851).parseEvent;
            e.exports = {
                createEventStream: function(e, t, r) {
                    for (var i = n(e), a = [], s = 0; s < i.length; s++) a.push(o(t, i[s], r));
                    return a
                }
            }
        },
        97550: function(e) {
            e.exports = {
                eventMessageChunker: function(e) {
                    for (var t = [], r = 0; r < e.length;) {
                        var n = e.readInt32BE(r),
                            o = e.slice(r, n + r);
                        r += n, t.push(o)
                    }
                    return t
                }
            }
        },
        31231: function(e, t, r) {
            var n = r(79614).util,
                o = n.buffer.toBuffer;

            function i(e) {
                if (8 !== e.length) throw Error("Int64 buffers must be exactly 8 bytes");
                n.Buffer.isBuffer(e) || (e = o(e)), this.bytes = e
            }

            function a(e) {
                for (var t = 0; t < 8; t++) e[t] ^= 255;
                for (var t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
            }
            i.fromNumber = function(e) {
                if (e > 0x7fffffffffffffff || e < -0x8000000000000000) throw Error(e + " is too large (or, if negative, too small) to represent as an Int64");
                for (var t = new Uint8Array(8), r = 7, n = Math.abs(Math.round(e)); r > -1 && n > 0; r--, n /= 256) t[r] = n;
                return e < 0 && a(t), new i(t)
            }, i.prototype.valueOf = function() {
                var e = this.bytes.slice(0),
                    t = 128 & e[0];
                return t && a(e), parseInt(e.toString("hex"), 16) * (t ? -1 : 1)
            }, i.prototype.toString = function() {
                return String(this.valueOf())
            }, e.exports = {
                Int64: i
            }
        },
        83851: function(e, t, r) {
            var n = r(89524).parseMessage;
            e.exports = {
                parseEvent: function(e, t, r) {
                    var o, i, a, s = n(t),
                        c = s.headers[":message-type"];
                    if (c) {
                        if ("error" === c.value) throw o = s.headers[":error-code"], (a = Error((i = s.headers[":error-message"]).value || i)).code = a.name = o.value || o, a;
                        if ("event" !== c.value) return
                    }
                    var u = s.headers[":event-type"],
                        l = r.members[u.value];
                    if (l) {
                        var p = {},
                            d = l.eventPayloadMemberName;
                        if (d) {
                            var m = l.members[d];
                            "binary" === m.type ? p[d] = s.body : p[d] = e.parse(s.body.toString(), m)
                        }
                        for (var h = l.eventHeaderMemberNames, f = 0; f < h.length; f++) {
                            var y = h[f];
                            s.headers[y] && (p[y] = l.members[y].toType(s.headers[y].value))
                        }
                        var g = {};
                        return g[u.value] = p, g
                    }
                }
            }
        },
        89524: function(e, t, r) {
            var n = r(31231).Int64,
                o = r(4441).splitMessage,
                i = "boolean";
            e.exports = {
                parseMessage: function(e) {
                    var t = o(e);
                    return {
                        headers: function(e) {
                            for (var t = {}, r = 0; r < e.length;) {
                                var o = e.readUInt8(r++),
                                    a = e.slice(r, r + o).toString();
                                switch (r += o, e.readUInt8(r++)) {
                                    case 0:
                                        t[a] = {
                                            type: i,
                                            value: !0
                                        };
                                        break;
                                    case 1:
                                        t[a] = {
                                            type: i,
                                            value: !1
                                        };
                                        break;
                                    case 2:
                                        t[a] = {
                                            type: "byte",
                                            value: e.readInt8(r++)
                                        };
                                        break;
                                    case 3:
                                        t[a] = {
                                            type: "short",
                                            value: e.readInt16BE(r)
                                        }, r += 2;
                                        break;
                                    case 4:
                                        t[a] = {
                                            type: "integer",
                                            value: e.readInt32BE(r)
                                        }, r += 4;
                                        break;
                                    case 5:
                                        t[a] = {
                                            type: "long",
                                            value: new n(e.slice(r, r + 8))
                                        }, r += 8;
                                        break;
                                    case 6:
                                        var s = e.readUInt16BE(r);
                                        r += 2, t[a] = {
                                            type: "binary",
                                            value: e.slice(r, r + s)
                                        }, r += s;
                                        break;
                                    case 7:
                                        var c = e.readUInt16BE(r);
                                        r += 2, t[a] = {
                                            type: "string",
                                            value: e.slice(r, r + c).toString()
                                        }, r += c;
                                        break;
                                    case 8:
                                        t[a] = {
                                            type: "timestamp",
                                            value: new Date(new n(e.slice(r, r + 8)).valueOf())
                                        }, r += 8;
                                        break;
                                    case 9:
                                        var u = e.slice(r, r + 16).toString("hex");
                                        r += 16, t[a] = {
                                            type: "uuid",
                                            value: u.substr(0, 8) + "-" + u.substr(8, 4) + "-" + u.substr(12, 4) + "-" + u.substr(16, 4) + "-" + u.substr(20)
                                        };
                                        break;
                                    default:
                                        throw Error("Unrecognized header type tag")
                                }
                            }
                            return t
                        }(t.headers),
                        body: t.body
                    }
                }
            }
        },
        4441: function(e, t, r) {
            var n = r(79614).util,
                o = n.buffer.toBuffer;
            e.exports = {
                splitMessage: function(e) {
                    if (n.Buffer.isBuffer(e) || (e = o(e)), e.length < 16) throw Error("Provided message too short to accommodate event stream message overhead");
                    if (e.length !== e.readUInt32BE(0)) throw Error("Reported message length does not match received message length");
                    var t = e.readUInt32BE(8);
                    if (t !== n.crypto.crc32(e.slice(0, 8))) throw Error("The prelude checksum specified in the message (" + t + ") does not match the calculated CRC32 checksum.");
                    var r = e.readUInt32BE(e.length - 4);
                    if (r !== n.crypto.crc32(e.slice(0, e.length - 4))) throw Error("The message checksum did not match the expected value of " + r);
                    var i = 12 + e.readUInt32BE(4);
                    return {
                        headers: e.slice(12, i),
                        body: e.slice(i, e.length - 4)
                    }
                }
            }
        },
        72274: function(e, t, r) {
            var n = r(83454),
                o = r(79614),
                i = r(96380),
                a = r(33320).discoverEndpoint;

            function s(e) {
                if (!e.service.api.operations) return "";
                var t = e.service.api.operations[e.operation];
                return t ? t.authtype : ""
            }

            function c(e) {
                var t = e.service;
                return t.config.signatureVersion ? t.config.signatureVersion : t.api.signatureVersion ? t.api.signatureVersion : s(e)
            }
            o.EventListeners = {
                Core: {}
            }, o.EventListeners = {
                Core: new i().addNamedListeners(function(e, t) {
                    t("VALIDATE_CREDENTIALS", "validate", function(e, t) {
                        if (!e.service.api.signatureVersion && !e.service.config.signatureVersion) return t();
                        if ("bearer" === c(e)) {
                            e.service.config.getToken(function(r) {
                                r && (e.response.error = o.util.error(r, {
                                    code: "TokenError"
                                })), t()
                            });
                            return
                        }
                        e.service.config.getCredentials(function(r) {
                            r && (e.response.error = o.util.error(r, {
                                code: "CredentialsError",
                                message: "Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1"
                            })), t()
                        })
                    }), e("VALIDATE_REGION", "validate", function(e) {
                        if (!e.service.isGlobalEndpoint) {
                            var t = RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
                            e.service.config.region ? t.test(e.service.config.region) || (e.response.error = o.util.error(Error(), {
                                code: "ConfigError",
                                message: "Invalid region in config"
                            })) : e.response.error = o.util.error(Error(), {
                                code: "ConfigError",
                                message: "Missing region in config"
                            })
                        }
                    }), e("BUILD_IDEMPOTENCY_TOKENS", "validate", function(e) {
                        if (e.service.api.operations) {
                            var t = e.service.api.operations[e.operation];
                            if (t) {
                                var r = t.idempotentMembers;
                                if (r.length) {
                                    for (var n = o.util.copy(e.params), i = 0, a = r.length; i < a; i++) n[r[i]] || (n[r[i]] = o.util.uuid.v4());
                                    e.params = n
                                }
                            }
                        }
                    }), e("VALIDATE_PARAMETERS", "validate", function(e) {
                        if (e.service.api.operations) {
                            var t = e.service.api.operations[e.operation].input,
                                r = e.service.config.paramValidation;
                            new o.ParamValidator(r).validate(t, e.params)
                        }
                    }), e("COMPUTE_CHECKSUM", "afterBuild", function(e) {
                        if (e.service.api.operations) {
                            var t = e.service.api.operations[e.operation];
                            if (t) {
                                var r = e.httpRequest.body,
                                    n = r && (o.util.Buffer.isBuffer(r) || "string" == typeof r),
                                    i = e.httpRequest.headers;
                                if (t.httpChecksumRequired && e.service.config.computeChecksums && n && !i["Content-MD5"]) {
                                    var a = o.util.crypto.md5(r, "base64");
                                    i["Content-MD5"] = a
                                }
                            }
                        }
                    }), t("COMPUTE_SHA256", "afterBuild", function(e, t) {
                        if (e.haltHandlersOnError(), e.service.api.operations) {
                            var r = e.service.api.operations[e.operation],
                                n = r ? r.authtype : "";
                            if (!e.service.api.signatureVersion && !n && !e.service.config.signatureVersion) return t();
                            if (e.service.getSignerClass(e) === o.Signers.V4) {
                                var i = e.httpRequest.body || "";
                                if (n.indexOf("unsigned-body") >= 0) return e.httpRequest.headers["X-Amz-Content-Sha256"] = "UNSIGNED-PAYLOAD", t();
                                o.util.computeSha256(i, function(r, n) {
                                    r ? t(r) : (e.httpRequest.headers["X-Amz-Content-Sha256"] = n, t())
                                })
                            } else t()
                        }
                    }), e("SET_CONTENT_LENGTH", "afterBuild", function(e) {
                        var t = s(e),
                            r = o.util.getRequestPayloadShape(e);
                        if (void 0 === e.httpRequest.headers["Content-Length"]) try {
                            var n = o.util.string.byteLength(e.httpRequest.body);
                            e.httpRequest.headers["Content-Length"] = n
                        } catch (n) {
                            if (r && r.isStreaming) {
                                if (r.requiresLength);
                                else if (t.indexOf("unsigned-body") >= 0) {
                                    e.httpRequest.headers["Transfer-Encoding"] = "chunked";
                                    return
                                }
                            }
                            throw n
                        }
                    }), e("SET_HTTP_HOST", "afterBuild", function(e) {
                        e.httpRequest.headers.Host = e.httpRequest.endpoint.host
                    }), e("SET_TRACE_ID", "afterBuild", function(e) {
                        var t = "X-Amzn-Trace-Id";
                        if (o.util.isNode() && !Object.hasOwnProperty.call(e.httpRequest.headers, t)) {
                            var r = n.env.AWS_LAMBDA_FUNCTION_NAME,
                                i = n.env._X_AMZN_TRACE_ID;
                            "string" == typeof r && r.length > 0 && "string" == typeof i && i.length > 0 && (e.httpRequest.headers[t] = i)
                        }
                    }), e("RESTART", "restart", function() {
                        var e = this.response.error;
                        e && e.retryable && (this.httpRequest = new o.HttpRequest(this.service.endpoint, this.service.region), this.response.retryCount < this.service.config.maxRetries ? this.response.retryCount++ : this.response.error = null)
                    }), t("DISCOVER_ENDPOINT", "sign", a, !0), t("SIGN", "sign", function(e, t) {
                        var r = e.service,
                            n = c(e);
                        if (!n || 0 === n.length) return t();
                        "bearer" === n ? r.config.getToken(function(n, o) {
                            if (n) return e.response.error = n, t();
                            try {
                                new(r.getSignerClass(e))(e.httpRequest).addAuthorization(o)
                            } catch (t) {
                                e.response.error = t
                            }
                            t()
                        }) : r.config.getCredentials(function(n, o) {
                            if (n) return e.response.error = n, t();
                            try {
                                var i = r.getSkewCorrectedDate(),
                                    a = r.getSignerClass(e),
                                    s = (e.service.api.operations || {})[e.operation],
                                    c = new a(e.httpRequest, r.getSigningName(e), {
                                        signatureCache: r.config.signatureCache,
                                        operation: s,
                                        signatureVersion: r.api.signatureVersion
                                    });
                                c.setServiceClientId(r._clientId), delete e.httpRequest.headers.Authorization, delete e.httpRequest.headers.Date, delete e.httpRequest.headers["X-Amz-Date"], c.addAuthorization(o, i), e.signedAt = i
                            } catch (t) {
                                e.response.error = t
                            }
                            t()
                        })
                    }), e("VALIDATE_RESPONSE", "validateResponse", function(e) {
                        this.service.successfulResponse(e, this) ? (e.data = {}, e.error = null) : (e.data = null, e.error = o.util.error(Error(), {
                            code: "UnknownError",
                            message: "An unknown error occurred."
                        }))
                    }), e("ERROR", "error", function(e, t) {
                        if (t.request.service.api.awsQueryCompatible) {
                            var r = t.httpResponse.headers,
                                n = r ? r["x-amzn-query-error"] : void 0;
                            n && n.includes(";") && (t.error.code = n.split(";")[0])
                        }
                    }, !0), t("SEND", "send", function(e, t) {
                        function r(r) {
                            e.httpResponse.stream = r;
                            var n = e.request.httpRequest.stream,
                                i = e.request.service,
                                a = i.api,
                                s = e.request.operation,
                                c = a.operations[s] || {};
                            r.on("headers", function(n, a, s) {
                                if (e.request.emit("httpHeaders", [n, a, e, s]), !e.httpResponse.streaming) {
                                    if (2 === o.HttpClient.streamsApiVersion) {
                                        if (c.hasEventOutput && i.successfulResponse(e)) {
                                            e.request.emit("httpDone"), t();
                                            return
                                        }
                                        r.on("readable", function() {
                                            var t = r.read();
                                            null !== t && e.request.emit("httpData", [t, e])
                                        })
                                    } else r.on("data", function(t) {
                                        e.request.emit("httpData", [t, e])
                                    })
                                }
                            }), r.on("end", function() {
                                n && n.didCallback || 2 === o.HttpClient.streamsApiVersion && c.hasEventOutput && i.successfulResponse(e) || (e.request.emit("httpDone"), t())
                            })
                        }

                        function n(r) {
                            if ("RequestAbortedError" !== r.code) {
                                var n = "TimeoutError" === r.code ? r.code : "NetworkingError";
                                r = o.util.error(r, {
                                    code: n,
                                    region: e.request.httpRequest.region,
                                    hostname: e.request.httpRequest.endpoint.hostname,
                                    retryable: !0
                                })
                            }
                            e.error = r, e.request.emit("httpError", [e.error, e], function() {
                                t()
                            })
                        }

                        function i() {
                            var t, i = o.HttpClient.getInstance(),
                                a = e.request.service.config.httpOptions || {};
                            try {
                                (t = i.handleRequest(e.request.httpRequest, a, r, n)).on("sendProgress", function(t) {
                                    e.request.emit("httpUploadProgress", [t, e])
                                }), t.on("receiveProgress", function(t) {
                                    e.request.emit("httpDownloadProgress", [t, e])
                                })
                            } catch (e) {
                                n(e)
                            }
                        }
                        e.httpResponse._abortCallback = t, e.error = null, e.data = null, (e.request.service.getSkewCorrectedDate() - this.signedAt) / 1e3 >= 600 ? this.emit("sign", [this], function(e) {
                            e ? t(e) : i()
                        }) : i()
                    }), e("HTTP_HEADERS", "httpHeaders", function(e, t, r, n) {
                        r.httpResponse.statusCode = e, r.httpResponse.statusMessage = n, r.httpResponse.headers = t, r.httpResponse.body = o.util.buffer.toBuffer(""), r.httpResponse.buffers = [], r.httpResponse.numBytes = 0;
                        var i = t.date || t.Date,
                            a = r.request.service;
                        if (i) {
                            var s = Date.parse(i);
                            a.config.correctClockSkew && a.isClockSkewed(s) && a.applyClockOffset(s)
                        }
                    }), e("HTTP_DATA", "httpData", function(e, t) {
                        if (e) {
                            if (o.util.isNode()) {
                                t.httpResponse.numBytes += e.length;
                                var r = t.httpResponse.headers["content-length"],
                                    n = {
                                        loaded: t.httpResponse.numBytes,
                                        total: r
                                    };
                                t.request.emit("httpDownloadProgress", [n, t])
                            }
                            t.httpResponse.buffers.push(o.util.buffer.toBuffer(e))
                        }
                    }), e("HTTP_DONE", "httpDone", function(e) {
                        if (e.httpResponse.buffers && e.httpResponse.buffers.length > 0) {
                            var t = o.util.buffer.concat(e.httpResponse.buffers);
                            e.httpResponse.body = t
                        }
                        delete e.httpResponse.numBytes, delete e.httpResponse.buffers
                    }), e("FINALIZE_ERROR", "retry", function(e) {
                        e.httpResponse.statusCode && (e.error.statusCode = e.httpResponse.statusCode, void 0 === e.error.retryable && (e.error.retryable = this.service.retryableError(e.error, this)))
                    }), e("INVALIDATE_CREDENTIALS", "retry", function(e) {
                        if (e.error) switch (e.error.code) {
                            case "RequestExpired":
                            case "ExpiredTokenException":
                            case "ExpiredToken":
                                e.error.retryable = !0, e.request.service.config.credentials.expired = !0
                        }
                    }), e("EXPIRED_SIGNATURE", "retry", function(e) {
                        var t = e.error;
                        t && "string" == typeof t.code && "string" == typeof t.message && t.code.match(/Signature/) && t.message.match(/expired/) && (e.error.retryable = !0)
                    }), e("CLOCK_SKEWED", "retry", function(e) {
                        e.error && this.service.clockSkewError(e.error) && this.service.config.correctClockSkew && (e.error.retryable = !0)
                    }), e("REDIRECT", "retry", function(e) {
                        e.error && e.error.statusCode >= 300 && e.error.statusCode < 400 && e.httpResponse.headers.location && (this.httpRequest.endpoint = new o.Endpoint(e.httpResponse.headers.location), this.httpRequest.headers.Host = this.httpRequest.endpoint.host, e.error.redirect = !0, e.error.retryable = !0)
                    }), e("RETRY_CHECK", "retry", function(e) {
                        e.error && (e.error.redirect && e.redirectCount < e.maxRedirects ? e.error.retryDelay = 0 : e.retryCount < e.maxRetries && (e.error.retryDelay = this.service.retryDelays(e.retryCount, e.error) || 0))
                    }), t("RESET_RETRY_STATE", "afterRetry", function(e, t) {
                        var r, n = !1;
                        e.error && (r = e.error.retryDelay || 0, e.error.retryable && e.retryCount < e.maxRetries ? (e.retryCount++, n = !0) : e.error.redirect && e.redirectCount < e.maxRedirects && (e.redirectCount++, n = !0)), n && r >= 0 ? (e.error = null, setTimeout(t, r)) : t()
                    })
                }),
                CorePost: new i().addNamedListeners(function(e) {
                    e("EXTRACT_REQUEST_ID", "extractData", o.util.extractRequestId), e("EXTRACT_REQUEST_ID", "extractError", o.util.extractRequestId), e("ENOTFOUND_ERROR", "httpError", function(e) {
                        if ("NetworkingError" === e.code && ("ENOTFOUND" === e.errno || "number" == typeof e.errno && "function" == typeof o.util.getSystemErrorName && ["EAI_NONAME", "EAI_NODATA"].indexOf(o.util.getSystemErrorName(e.errno) >= 0))) {
                            var t = "Inaccessible host: `" + e.hostname + "' at port `" + e.port + "'. This service may not be available in the `" + e.region + "' region.";
                            this.response.error = o.util.error(Error(t), {
                                code: "UnknownEndpoint",
                                region: e.region,
                                hostname: e.hostname,
                                retryable: !0,
                                originalError: e
                            })
                        }
                    })
                }),
                Logger: new i().addNamedListeners(function(e) {
                    e("LOG_REQUEST", "complete", function(e) {
                        var t = e.request,
                            n = t.service.config.logger;
                        if (n) {
                            var i, a, s, c, u, l, p = (i = (e.request.service.getSkewCorrectedDate().getTime() - t.startTime.getTime()) / 1e3, a = !!n.isTTY, s = e.httpResponse.statusCode, c = t.params, t.service.api.operations && t.service.api.operations[t.operation] && t.service.api.operations[t.operation].input && (c = function e(t, r) {
                                if (!r) return r;
                                if (t.isSensitive) return "***SensitiveInformation***";
                                switch (t.type) {
                                    case "structure":
                                        var n = {};
                                        return o.util.each(r, function(r, o) {
                                            Object.prototype.hasOwnProperty.call(t.members, r) ? n[r] = e(t.members[r], o) : n[r] = o
                                        }), n;
                                    case "list":
                                        var i = [];
                                        return o.util.arrayEach(r, function(r, n) {
                                            i.push(e(t.member, r))
                                        }), i;
                                    case "map":
                                        var a = {};
                                        return o.util.each(r, function(r, n) {
                                            a[r] = e(t.value, n)
                                        }), a;
                                    default:
                                        return r
                                }
                            }(t.service.api.operations[t.operation].input, t.params)), u = r(89539).inspect(c, !0, null), l = "", a && (l += "\x1b[33m"), l += "[AWS " + t.service.serviceIdentifier + " " + s + (" " + i.toString() + "s ") + e.retryCount + " retries]", a && (l += "\x1b[0;1m"), l += " " + o.util.string.lowerFirst(t.operation) + "(" + u + ")", a && (l += "\x1b[0m"), l);
                            "function" == typeof n.log ? n.log(p) : "function" == typeof n.write && n.write(p + "\n")
                        }
                    })
                }),
                Json: new i().addNamedListeners(function(e) {
                    var t = r(76933);
                    e("BUILD", "build", t.buildRequest), e("EXTRACT_DATA", "extractData", t.extractData), e("EXTRACT_ERROR", "extractError", t.extractError)
                }),
                Rest: new i().addNamedListeners(function(e) {
                    var t = r(96225);
                    e("BUILD", "build", t.buildRequest), e("EXTRACT_DATA", "extractData", t.extractData), e("EXTRACT_ERROR", "extractError", t.extractError)
                }),
                RestJson: new i().addNamedListeners(function(e) {
                    var t = r(53699);
                    e("BUILD", "build", t.buildRequest), e("EXTRACT_DATA", "extractData", t.extractData), e("EXTRACT_ERROR", "extractError", t.extractError), e("UNSET_CONTENT_LENGTH", "afterBuild", t.unsetContentLength)
                }),
                RestXml: new i().addNamedListeners(function(e) {
                    var t = r(11674);
                    e("BUILD", "build", t.buildRequest), e("EXTRACT_DATA", "extractData", t.extractData), e("EXTRACT_ERROR", "extractError", t.extractError)
                }),
                Query: new i().addNamedListeners(function(e) {
                    var t = r(70293);
                    e("BUILD", "build", t.buildRequest), e("EXTRACT_DATA", "extractData", t.extractData), e("EXTRACT_ERROR", "extractError", t.extractError)
                })
            }
        },
        26344: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit;
            n.Endpoint = o({
                constructor: function(e, t) {
                    if (n.util.hideProperties(this, ["slashes", "auth", "hash", "search", "query"]), null == e) throw Error("Invalid endpoint: " + e);
                    if ("string" != typeof e) return n.util.copy(e);
                    e.match(/^http/) || (e = ((t && void 0 !== t.sslEnabled ? t.sslEnabled : n.config.sslEnabled) ? "https" : "http") + "://" + e), n.util.update(this, n.util.urlParse(e)), this.port ? this.port = parseInt(this.port, 10) : this.port = "https:" === this.protocol ? 443 : 80
                }
            }), n.HttpRequest = o({
                constructor: function(e, t) {
                    e = new n.Endpoint(e), this.method = "POST", this.path = e.path || "/", this.headers = {}, this.body = "", this.endpoint = e, this.region = t, this._userAgent = "", this.setUserAgent()
                },
                setUserAgent: function() {
                    this._userAgent = this.headers[this.getUserAgentHeaderName()] = n.util.userAgent()
                },
                getUserAgentHeaderName: function() {
                    return (n.util.isBrowser() ? "X-Amz-" : "") + "User-Agent"
                },
                appendToUserAgent: function(e) {
                    "string" == typeof e && e && (this._userAgent += " " + e), this.headers[this.getUserAgentHeaderName()] = this._userAgent
                },
                getUserAgent: function() {
                    return this._userAgent
                },
                pathname: function() {
                    return this.path.split("?", 1)[0]
                },
                search: function() {
                    var e = this.path.split("?", 2)[1];
                    return e ? (e = n.util.queryStringParse(e), n.util.queryParamsToString(e)) : ""
                },
                updateEndpoint: function(e) {
                    var t = new n.Endpoint(e);
                    this.endpoint = t, this.path = t.path || "/", this.headers.Host && (this.headers.Host = t.host)
                }
            }), n.HttpResponse = o({
                constructor: function() {
                    this.statusCode = void 0, this.headers = {}, this.body = void 0, this.streaming = !1, this.stream = null
                },
                createUnbufferedStream: function() {
                    return this.streaming = !0, this.stream
                }
            }), n.HttpClient = o({}), n.HttpClient.getInstance = function() {
                return void 0 === this.singleton && (this.singleton = new this), this.singleton
            }
        },
        2631: function(e, t, r) {
            var n = r(79614),
                o = r(17187).EventEmitter;
            r(26344), n.XHRClient = n.util.inherit({
                handleRequest: function(e, t, r, i) {
                    var a = this,
                        s = e.endpoint,
                        c = new o,
                        u = s.protocol + "//" + s.hostname;
                    80 !== s.port && 443 !== s.port && (u += ":" + s.port), u += e.path;
                    var l = new XMLHttpRequest,
                        p = !1;
                    e.stream = l, l.addEventListener("readystatechange", function() {
                        try {
                            if (0 === l.status) return
                        } catch (e) {
                            return
                        }
                        this.readyState >= this.HEADERS_RECEIVED && !p && (c.statusCode = l.status, c.headers = a.parseHeaders(l.getAllResponseHeaders()), c.emit("headers", c.statusCode, c.headers, l.statusText), p = !0), this.readyState === this.DONE && a.finishRequest(l, c)
                    }, !1), l.upload.addEventListener("progress", function(e) {
                        c.emit("sendProgress", e)
                    }), l.addEventListener("progress", function(e) {
                        c.emit("receiveProgress", e)
                    }, !1), l.addEventListener("timeout", function() {
                        i(n.util.error(Error("Timeout"), {
                            code: "TimeoutError"
                        }))
                    }, !1), l.addEventListener("error", function() {
                        i(n.util.error(Error("Network Failure"), {
                            code: "NetworkingError"
                        }))
                    }, !1), l.addEventListener("abort", function() {
                        i(n.util.error(Error("Request aborted"), {
                            code: "RequestAbortedError"
                        }))
                    }, !1), r(c), l.open(e.method, u, !1 !== t.xhrAsync), n.util.each(e.headers, function(e, t) {
                        "Content-Length" !== e && "User-Agent" !== e && "Host" !== e && l.setRequestHeader(e, t)
                    }), t.timeout && !1 !== t.xhrAsync && (l.timeout = t.timeout), t.xhrWithCredentials && (l.withCredentials = !0);
                    try {
                        l.responseType = "arraybuffer"
                    } catch (e) {}
                    try {
                        e.body ? l.send(e.body) : l.send()
                    } catch (t) {
                        if (e.body && "object" == typeof e.body.buffer) l.send(e.body.buffer);
                        else throw t
                    }
                    return c
                },
                parseHeaders: function(e) {
                    var t = {};
                    return n.util.arrayEach(e.split(/\r?\n/), function(e) {
                        var r = e.split(":", 1)[0],
                            n = e.substring(r.length + 2);
                        r.length > 0 && (t[r.toLowerCase()] = n)
                    }), t
                },
                finishRequest: function(e, t) {
                    var r;
                    if ("arraybuffer" === e.responseType && e.response) {
                        var o = e.response;
                        r = new n.util.Buffer(o.byteLength);
                        for (var i = new Uint8Array(o), a = 0; a < r.length; ++a) r[a] = i[a]
                    }
                    try {
                        r || "string" != typeof e.responseText || (r = new n.util.Buffer(e.responseText))
                    } catch (e) {}
                    r && t.emit("data", r), t.emit("end")
                }
            }), n.HttpClient.prototype = n.XHRClient.prototype, n.HttpClient.streamsApiVersion = 1
        },
        43658: function(e, t, r) {
            var n = r(62662);

            function o() {}
            o.prototype.build = function(e, t) {
                return JSON.stringify(function e(t, r) {
                    var o, i;
                    if (r && null != t) switch (r.type) {
                        case "structure":
                            return function(t, r) {
                                if (r.isDocument) return t;
                                var o = {};
                                return n.each(t, function(t, n) {
                                    var i = r.members[t];
                                    if (i) {
                                        if ("body" !== i.location) return;
                                        var a = i.isLocationName ? i.name : t,
                                            s = e(n, i);
                                        void 0 !== s && (o[a] = s)
                                    }
                                }), o
                            }(t, r);
                        case "map":
                            return o = {}, n.each(t, function(t, n) {
                                var i = e(n, r.value);
                                void 0 !== i && (o[t] = i)
                            }), o;
                        case "list":
                            return i = [], n.arrayEach(t, function(t) {
                                var n = e(t, r.member);
                                void 0 !== n && i.push(n)
                            }), i;
                        default:
                            return r.toWireFormat(t)
                    }
                }(e, t))
            }, e.exports = o
        },
        62622: function(e, t, r) {
            var n = r(62662);

            function o() {}
            o.prototype.parse = function(e, t) {
                return function e(t, r) {
                    if (r && void 0 !== t) switch (r.type) {
                        case "structure":
                            return function(t, r) {
                                if (null != t) {
                                    if (r.isDocument) return t;
                                    var o = {},
                                        i = r.members;
                                    return n.each(i, function(r, n) {
                                        var i = n.isLocationName ? n.name : r;
                                        if (Object.prototype.hasOwnProperty.call(t, i)) {
                                            var a = e(t[i], n);
                                            void 0 !== a && (o[r] = a)
                                        }
                                    }), o
                                }
                            }(t, r);
                        case "map":
                            return function(t, r) {
                                if (null != t) {
                                    var o = {};
                                    return n.each(t, function(t, n) {
                                        var i = e(n, r.value);
                                        void 0 === i ? o[t] = null : o[t] = i
                                    }), o
                                }
                            }(t, r);
                        case "list":
                            return function(t, r) {
                                if (null != t) {
                                    var o = [];
                                    return n.arrayEach(t, function(t) {
                                        var n = e(t, r.member);
                                        void 0 === n ? o.push(null) : o.push(n)
                                    }), o
                                }
                            }(t, r);
                        default:
                            return r.toType(t)
                    }
                }(JSON.parse(e), t)
            }, e.exports = o
        },
        3580: function(e, t, r) {
            var n = r(83454);
            e.exports = {
                suppress: !1
            }, setTimeout(function() {
                e.exports.suppress || void 0 !== n && ("object" != typeof n.env || void 0 === n.env.AWS_EXECUTION_ENV || 0 !== n.env.AWS_EXECUTION_ENV.indexOf("AWS_Lambda_")) && ("object" != typeof n.env || void 0 === n.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE) && "function" == typeof n.emitWarning && n.emitWarning("We are formalizing our plans to enter AWS SDK for JavaScript (v2) into maintenance mode in 2023.\n\nPlease migrate your code to use AWS SDK for JavaScript (v3).\nFor more information, check the migration guide at https://a.co/7PzMCcy", {
                    type: "NOTE"
                })
            }, 0)
        },
        85863: function(e, t, r) {
            var n = r(84351),
                o = r(66797),
                i = r(68136),
                a = r(47937),
                s = r(90306),
                c = r(17752),
                u = r(62662),
                l = u.property,
                p = u.memoizedProperty;
            e.exports = function(e, t) {
                var r = this;
                e = e || {}, (t = t || {}).api = this, e.metadata = e.metadata || {};
                var d = t.serviceIdentifier;
                delete t.serviceIdentifier, l(this, "isApi", !0, !1), l(this, "apiVersion", e.metadata.apiVersion), l(this, "endpointPrefix", e.metadata.endpointPrefix), l(this, "signingName", e.metadata.signingName), l(this, "globalEndpoint", e.metadata.globalEndpoint), l(this, "signatureVersion", e.metadata.signatureVersion), l(this, "jsonVersion", e.metadata.jsonVersion), l(this, "targetPrefix", e.metadata.targetPrefix), l(this, "protocol", e.metadata.protocol), l(this, "timestampFormat", e.metadata.timestampFormat), l(this, "xmlNamespaceUri", e.metadata.xmlNamespace), l(this, "abbreviation", e.metadata.serviceAbbreviation), l(this, "fullName", e.metadata.serviceFullName), l(this, "serviceId", e.metadata.serviceId), d && c[d] && l(this, "xmlNoDefaultLists", c[d].xmlNoDefaultLists, !1), p(this, "className", function() {
                    var t = e.metadata.serviceAbbreviation || e.metadata.serviceFullName;
                    return t ? ("ElasticLoadBalancing" === (t = t.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, "")) && (t = "ELB"), t) : null
                }), l(this, "operations", new n(e.operations, t, function(e, r) {
                    return new o(e, r, t)
                }, u.string.lowerFirst, function(e, t) {
                    !0 === t.endpointoperation && l(r, "endpointOperation", u.string.lowerFirst(e)), t.endpointdiscovery && !r.hasRequiredEndpointDiscovery && l(r, "hasRequiredEndpointDiscovery", !0 === t.endpointdiscovery.required)
                })), l(this, "shapes", new n(e.shapes, t, function(e, r) {
                    return i.create(r, t)
                })), l(this, "paginators", new n(e.paginators, t, function(e, r) {
                    return new a(e, r, t)
                })), l(this, "waiters", new n(e.waiters, t, function(e, r) {
                    return new s(e, r, t)
                }, u.string.lowerFirst)), t.documentation && (l(this, "documentation", e.documentation), l(this, "documentationUrl", e.documentationUrl)), l(this, "awsQueryCompatible", e.metadata.awsQueryCompatible)
            }
        },
        84351: function(e, t, r) {
            var n = r(62662).memoizedProperty;

            function o(e, t, r, o) {
                n(this, o(e), function() {
                    return r(e, t)
                })
            }
            e.exports = function(e, t, r, n, i) {
                for (var a in n = n || String, e) Object.prototype.hasOwnProperty.call(e, a) && (o.call(this, a, e[a], r, n), i && i(a, e[a]))
            }
        },
        66797: function(e, t, r) {
            var n = r(68136),
                o = r(62662),
                i = o.property,
                a = o.memoizedProperty;
            e.exports = function(e, t, r) {
                var o = this;
                r = r || {}, i(this, "name", t.name || e), i(this, "api", r.api, !1), t.http = t.http || {}, i(this, "endpoint", t.endpoint), i(this, "httpMethod", t.http.method || "POST"), i(this, "httpPath", t.http.requestUri || "/"), i(this, "authtype", t.authtype || ""), i(this, "endpointDiscoveryRequired", t.endpointdiscovery ? t.endpointdiscovery.required ? "REQUIRED" : "OPTIONAL" : "NULL"), i(this, "httpChecksumRequired", t.httpChecksumRequired || t.httpChecksum && t.httpChecksum.requestChecksumRequired, !1), a(this, "input", function() {
                    return t.input ? n.create(t.input, r) : new n.create({
                        type: "structure"
                    }, r)
                }), a(this, "output", function() {
                    return t.output ? n.create(t.output, r) : new n.create({
                        type: "structure"
                    }, r)
                }), a(this, "errors", function() {
                    var e = [];
                    if (!t.errors) return null;
                    for (var o = 0; o < t.errors.length; o++) e.push(n.create(t.errors[o], r));
                    return e
                }), a(this, "paginator", function() {
                    return r.api.paginators[e]
                }), r.documentation && (i(this, "documentation", t.documentation), i(this, "documentationUrl", t.documentationUrl)), a(this, "idempotentMembers", function() {
                    var e = [],
                        t = o.input,
                        r = t.members;
                    if (!t.members) return e;
                    for (var n in r) r.hasOwnProperty(n) && !0 === r[n].isIdempotent && e.push(n);
                    return e
                }), a(this, "hasEventOutput", function() {
                    return function(e) {
                        var t = e.members,
                            r = e.payload;
                        if (!e.members) return !1;
                        if (r) return t[r].isEventStream;
                        for (var n in t)
                            if (!t.hasOwnProperty(n) && !0 === t[n].isEventStream) return !0;
                        return !1
                    }(o.output)
                })
            }
        },
        47937: function(e, t, r) {
            var n = r(62662).property;
            e.exports = function(e, t) {
                n(this, "inputToken", t.input_token), n(this, "limitKey", t.limit_key), n(this, "moreResults", t.more_results), n(this, "outputToken", t.output_token), n(this, "resultKey", t.result_key)
            }
        },
        90306: function(e, t, r) {
            var n = r(62662),
                o = n.property;
            e.exports = function(e, t, r) {
                r = r || {}, o(this, "name", e), o(this, "api", r.api, !1), t.operation && o(this, "operation", n.string.lowerFirst(t.operation));
                var i = this;
                ["type", "description", "delay", "maxAttempts", "acceptors"].forEach(function(e) {
                    var r = t[e];
                    r && o(i, e, r)
                })
            }
        },
        68136: function(e, t, r) {
            var n = r(84351),
                o = r(62662);

            function i(e, t, r) {
                null != r && o.property.apply(this, arguments)
            }

            function a(e, t) {
                e.constructor.prototype[t] || o.memoizedProperty.apply(this, arguments)
            }

            function s(e, t, r) {
                t = t || {}, i(this, "shape", e.shape), i(this, "api", t.api, !1), i(this, "type", e.type), i(this, "enum", e.enum), i(this, "min", e.min), i(this, "max", e.max), i(this, "pattern", e.pattern), i(this, "location", e.location || this.location || "body"), i(this, "name", this.name || e.xmlName || e.queryName || e.locationName || r), i(this, "isStreaming", e.streaming || this.isStreaming || !1), i(this, "requiresLength", e.requiresLength, !1), i(this, "isComposite", e.isComposite || !1), i(this, "isShape", !0, !1), i(this, "isQueryName", Boolean(e.queryName), !1), i(this, "isLocationName", Boolean(e.locationName), !1), i(this, "isIdempotent", !0 === e.idempotencyToken), i(this, "isJsonValue", !0 === e.jsonvalue), i(this, "isSensitive", !0 === e.sensitive || e.prototype && !0 === e.prototype.sensitive), i(this, "isEventStream", Boolean(e.eventstream), !1), i(this, "isEvent", Boolean(e.event), !1), i(this, "isEventPayload", Boolean(e.eventpayload), !1), i(this, "isEventHeader", Boolean(e.eventheader), !1), i(this, "isTimestampFormatSet", Boolean(e.timestampFormat) || e.prototype && !0 === e.prototype.isTimestampFormatSet, !1), i(this, "endpointDiscoveryId", Boolean(e.endpointdiscoveryid), !1), i(this, "hostLabel", Boolean(e.hostLabel), !1), t.documentation && (i(this, "documentation", e.documentation), i(this, "documentationUrl", e.documentationUrl)), e.xmlAttribute && i(this, "isXmlAttribute", e.xmlAttribute || !1), i(this, "defaultValue", null), this.toWireFormat = function(e) {
                    return null == e ? "" : e
                }, this.toType = function(e) {
                    return e
                }
            }

            function c(e) {
                s.apply(this, arguments), i(this, "isComposite", !0), e.flattened && i(this, "flattened", e.flattened || !1)
            }

            function u(e, t) {
                var r = this,
                    o = null,
                    u = !this.isShape;
                c.apply(this, arguments), u && (i(this, "defaultValue", function() {
                    return {}
                }), i(this, "members", {}), i(this, "memberNames", []), i(this, "required", []), i(this, "isRequired", function() {
                    return !1
                }), i(this, "isDocument", Boolean(e.document))), e.members && (i(this, "members", new n(e.members, t, function(e, r) {
                    return s.create(r, t, e)
                })), a(this, "memberNames", function() {
                    return e.xmlOrder || Object.keys(e.members)
                }), e.event && (a(this, "eventPayloadMemberName", function() {
                    for (var e = r.members, t = r.memberNames, n = 0, o = t.length; n < o; n++)
                        if (e[t[n]].isEventPayload) return t[n]
                }), a(this, "eventHeaderMemberNames", function() {
                    for (var e = r.members, t = r.memberNames, n = [], o = 0, i = t.length; o < i; o++) e[t[o]].isEventHeader && n.push(t[o]);
                    return n
                }))), e.required && (i(this, "required", e.required), i(this, "isRequired", function(t) {
                    if (!o) {
                        o = {};
                        for (var r = 0; r < e.required.length; r++) o[e.required[r]] = !0
                    }
                    return o[t]
                }, !1, !0)), i(this, "resultWrapper", e.resultWrapper || null), e.payload && i(this, "payload", e.payload), "string" == typeof e.xmlNamespace ? i(this, "xmlNamespaceUri", e.xmlNamespace) : "object" == typeof e.xmlNamespace && (i(this, "xmlNamespacePrefix", e.xmlNamespace.prefix), i(this, "xmlNamespaceUri", e.xmlNamespace.uri))
            }

            function l(e, t) {
                var r = this,
                    n = !this.isShape;
                if (c.apply(this, arguments), n && i(this, "defaultValue", function() {
                        return []
                    }), e.member && a(this, "member", function() {
                        return s.create(e.member, t)
                    }), this.flattened) {
                    var o = this.name;
                    a(this, "name", function() {
                        return r.member.name || o
                    })
                }
            }

            function p(e, t) {
                var r = !this.isShape;
                c.apply(this, arguments), r && (i(this, "defaultValue", function() {
                    return {}
                }), i(this, "key", s.create({
                    type: "string"
                }, t)), i(this, "value", s.create({
                    type: "string"
                }, t))), e.key && a(this, "key", function() {
                    return s.create(e.key, t)
                }), e.value && a(this, "value", function() {
                    return s.create(e.value, t)
                })
            }

            function d() {
                s.apply(this, arguments);
                var e = ["rest-xml", "query", "ec2"];
                this.toType = function(t) {
                    return (t = this.api && e.indexOf(this.api.protocol) > -1 ? t || "" : t, this.isJsonValue) ? JSON.parse(t) : t && "function" == typeof t.toString ? t.toString() : t
                }, this.toWireFormat = function(e) {
                    return this.isJsonValue ? JSON.stringify(e) : e
                }
            }

            function m() {
                s.apply(this, arguments), this.toType = function(e) {
                    var t = o.base64.decode(e);
                    if (this.isSensitive && o.isNode() && "function" == typeof o.Buffer.alloc) {
                        var r = o.Buffer.alloc(t.length, t);
                        t.fill(0), t = r
                    }
                    return t
                }, this.toWireFormat = o.base64.encode
            }

            function h() {
                m.apply(this, arguments)
            }

            function f() {
                s.apply(this, arguments), this.toType = function(e) {
                    return "boolean" == typeof e ? e : null == e ? null : "true" === e
                }
            }
            s.normalizedTypes = {
                character: "string",
                double: "float",
                long: "integer",
                short: "integer",
                biginteger: "integer",
                bigdecimal: "float",
                blob: "binary"
            }, s.types = {
                structure: u,
                list: l,
                map: p,
                boolean: f,
                timestamp: function(e) {
                    var t = this;
                    if (s.apply(this, arguments), e.timestampFormat) i(this, "timestampFormat", e.timestampFormat);
                    else if (t.isTimestampFormatSet && this.timestampFormat) i(this, "timestampFormat", this.timestampFormat);
                    else if ("header" === this.location) i(this, "timestampFormat", "rfc822");
                    else if ("querystring" === this.location) i(this, "timestampFormat", "iso8601");
                    else if (this.api) switch (this.api.protocol) {
                        case "json":
                        case "rest-json":
                            i(this, "timestampFormat", "unixTimestamp");
                            break;
                        case "rest-xml":
                        case "query":
                        case "ec2":
                            i(this, "timestampFormat", "iso8601")
                    }
                    this.toType = function(e) {
                        return null == e ? null : "function" == typeof e.toUTCString ? e : "string" == typeof e || "number" == typeof e ? o.date.parseTimestamp(e) : null
                    }, this.toWireFormat = function(e) {
                        return o.date.format(e, t.timestampFormat)
                    }
                },
                float: function() {
                    s.apply(this, arguments), this.toType = function(e) {
                        return null == e ? null : parseFloat(e)
                    }, this.toWireFormat = this.toType
                },
                integer: function() {
                    s.apply(this, arguments), this.toType = function(e) {
                        return null == e ? null : parseInt(e, 10)
                    }, this.toWireFormat = this.toType
                },
                string: d,
                base64: h,
                binary: m
            }, s.resolve = function(e, t) {
                if (!e.shape) return null;
                var r = t.api.shapes[e.shape];
                if (!r) throw Error("Cannot find shape reference: " + e.shape);
                return r
            }, s.create = function(e, t, r) {
                if (e.isShape) return e;
                var n = s.resolve(e, t);
                if (n) {
                    var o = Object.keys(e);
                    t.documentation || (o = o.filter(function(e) {
                        return !e.match(/documentation/)
                    }));
                    var i = function() {
                        n.constructor.call(this, e, t, r)
                    };
                    return i.prototype = n, new i
                }
                e.type || (e.members ? e.type = "structure" : e.member ? e.type = "list" : e.key ? e.type = "map" : e.type = "string");
                var a = e.type;
                if (s.normalizedTypes[e.type] && (e.type = s.normalizedTypes[e.type]), s.types[e.type]) return new s.types[e.type](e, t, r);
                throw Error("Unrecognized shape type: " + a)
            }, s.shapes = {
                StructureShape: u,
                ListShape: l,
                MapShape: p,
                StringShape: d,
                BooleanShape: f,
                Base64Shape: h
            }, e.exports = s
        },
        25479: function(e, t, r) {
            var n = r(79614);
            n.ParamValidator = n.util.inherit({
                constructor: function(e) {
                    (!0 === e || void 0 === e) && (e = {
                        min: !0
                    }), this.validation = e
                },
                validate: function(e, t, r) {
                    if (this.errors = [], this.validateMember(e, t || {}, r || "params"), this.errors.length > 1) {
                        var o = this.errors.join("\n* ");
                        throw o = "There were " + this.errors.length + " validation errors:\n* " + o, n.util.error(Error(o), {
                            code: "MultipleValidationErrors",
                            errors: this.errors
                        })
                    }
                    if (1 !== this.errors.length) return !0;
                    throw this.errors[0]
                },
                fail: function(e, t) {
                    this.errors.push(n.util.error(Error(t), {
                        code: e
                    }))
                },
                validateStructure: function(e, t, r) {
                    if (e.isDocument) return !0;
                    this.validateType(t, r, ["object"], "structure");
                    for (var n, o = 0; e.required && o < e.required.length; o++) null == t[n = e.required[o]] && this.fail("MissingRequiredParameter", "Missing required key '" + n + "' in " + r);
                    for (n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                            var i = t[n],
                                a = e.members[n];
                            if (void 0 !== a) {
                                var s = [r, n].join(".");
                                this.validateMember(a, i, s)
                            } else null != i && this.fail("UnexpectedParameter", "Unexpected key '" + n + "' found in " + r)
                        }
                    return !0
                },
                validateMember: function(e, t, r) {
                    switch (e.type) {
                        case "structure":
                            return this.validateStructure(e, t, r);
                        case "list":
                            return this.validateList(e, t, r);
                        case "map":
                            return this.validateMap(e, t, r);
                        default:
                            return this.validateScalar(e, t, r)
                    }
                },
                validateList: function(e, t, r) {
                    if (this.validateType(t, r, [Array])) {
                        this.validateRange(e, t.length, r, "list member count");
                        for (var n = 0; n < t.length; n++) this.validateMember(e.member, t[n], r + "[" + n + "]")
                    }
                },
                validateMap: function(e, t, r) {
                    if (this.validateType(t, r, ["object"], "map")) {
                        var n = 0;
                        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (this.validateMember(e.key, o, r + "[key='" + o + "']"), this.validateMember(e.value, t[o], r + "['" + o + "']"), n++);
                        this.validateRange(e, n, r, "map member count")
                    }
                },
                validateScalar: function(e, t, r) {
                    switch (e.type) {
                        case null:
                        case void 0:
                        case "string":
                            return this.validateString(e, t, r);
                        case "base64":
                        case "binary":
                            return this.validatePayload(t, r);
                        case "integer":
                        case "float":
                            return this.validateNumber(e, t, r);
                        case "boolean":
                            return this.validateType(t, r, ["boolean"]);
                        case "timestamp":
                            return this.validateType(t, r, [Date, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, "number"], "Date object, ISO-8601 string, or a UNIX timestamp");
                        default:
                            return this.fail("UnkownType", "Unhandled type " + e.type + " for " + r)
                    }
                },
                validateString: function(e, t, r) {
                    var n = ["string"];
                    e.isJsonValue && (n = n.concat(["number", "object", "boolean"])), null !== t && this.validateType(t, r, n) && (this.validateEnum(e, t, r), this.validateRange(e, t.length, r, "string length"), this.validatePattern(e, t, r), this.validateUri(e, t, r))
                },
                validateUri: function(e, t, r) {
                    "uri" === e.location && 0 === t.length && this.fail("UriParameterError", 'Expected uri parameter to have length >= 1, but found "' + t + '" for ' + r)
                },
                validatePattern: function(e, t, r) {
                    this.validation.pattern && void 0 !== e.pattern && !RegExp(e.pattern).test(t) && this.fail("PatternMatchError", 'Provided value "' + t + '" does not match regex pattern /' + e.pattern + "/ for " + r)
                },
                validateRange: function(e, t, r, n) {
                    this.validation.min && void 0 !== e.min && t < e.min && this.fail("MinRangeError", "Expected " + n + " >= " + e.min + ", but found " + t + " for " + r), this.validation.max && void 0 !== e.max && t > e.max && this.fail("MaxRangeError", "Expected " + n + " <= " + e.max + ", but found " + t + " for " + r)
                },
                validateEnum: function(e, t, r) {
                    this.validation.enum && void 0 !== e.enum && -1 === e.enum.indexOf(t) && this.fail("EnumError", "Found string value of " + t + ", but expected " + e.enum.join("|") + " for " + r)
                },
                validateType: function(e, t, r, o) {
                    if (null == e) return !1;
                    for (var i = !1, a = 0; a < r.length; a++) {
                        if ("string" == typeof r[a]) {
                            if (typeof e === r[a]) return !0
                        } else if (r[a] instanceof RegExp) {
                            if ((e || "").toString().match(r[a])) return !0
                        } else {
                            if (e instanceof r[a] || n.util.isType(e, r[a])) return !0;
                            o || i || (r = r.slice()), r[a] = n.util.typeName(r[a])
                        }
                        i = !0
                    }
                    var s = o;
                    s || (s = r.join(", ").replace(/,([^,]+)$/, ", or$1"));
                    var c = s.match(/^[aeiou]/i) ? "n" : "";
                    return this.fail("InvalidParameterType", "Expected " + t + " to be a" + c + " " + s), !1
                },
                validateNumber: function(e, t, r) {
                    if (null != t) {
                        if ("string" == typeof t) {
                            var n = parseFloat(t);
                            n.toString() === t && (t = n)
                        }
                        this.validateType(t, r, ["number"]) && this.validateRange(e, t, r, "numeric value")
                    }
                },
                validatePayload: function(e, t) {
                    if (null != e && "string" != typeof e && (!e || "number" != typeof e.byteLength)) {
                        if (n.util.isNode()) {
                            var r = n.util.stream.Stream;
                            if (n.util.Buffer.isBuffer(e) || e instanceof r) return
                        } else if (Blob, e instanceof Blob) return;
                        var o = ["Buffer", "Stream", "File", "Blob", "ArrayBuffer", "DataView"];
                        if (e) {
                            for (var i = 0; i < o.length; i++)
                                if (n.util.isType(e, o[i]) || n.util.typeName(e.constructor) === o[i]) return
                        }
                        this.fail("InvalidParameterType", "Expected " + t + " to be a string, Buffer, Stream, Blob, or typed array object")
                    }
                }
            })
        },
        80987: function(e, t, r) {
            var n = r(62662),
                o = r(79614);
            e.exports = {
                populateHostPrefix: function(e) {
                    if (!e.service.config.hostPrefixEnabled) return e;
                    var t = e.service.api.operations[e.operation];
                    if (i = (r = e.service.api).operations[e.operation], a = r.endpointOperation && r.endpointOperation === n.string.lowerFirst(i.name), "NULL" !== i.endpointDiscoveryRequired || !0 === a) return e;
                    if (t.endpoint && t.endpoint.hostPrefix) {
                        var r, i, a, s, c, u, l, p, d, m = (s = t.endpoint.hostPrefix, c = e.params, u = t.input, n.each(u.members, function(e, t) {
                            if (!0 === t.hostLabel) {
                                if ("string" != typeof c[e] || "" === c[e]) throw n.error(Error(), {
                                    message: "Parameter " + e + " should be a non-empty string.",
                                    code: "InvalidParameter"
                                });
                                var r = RegExp("\\{" + e + "\\}", "g");
                                s = s.replace(r, c[e])
                            }
                        }), s);
                        (l = e.httpRequest.endpoint).host && (l.host = m + l.host), l.hostname && (l.hostname = m + l.hostname), p = e.httpRequest.endpoint.hostname.split("."), d = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/, n.arrayEach(p, function(e) {
                            if (!e.length || e.length < 1 || e.length > 63) throw n.error(Error(), {
                                code: "ValidationError",
                                message: "Hostname label length should be between 1 to 63 characters, inclusive."
                            });
                            if (!d.test(e)) throw o.util.error(Error(), {
                                code: "ValidationError",
                                message: e + " is not hostname compatible."
                            })
                        })
                    }
                    return e
                }
            }
        },
        76933: function(e, t, r) {
            var n = r(62662),
                o = r(43658),
                i = r(62622),
                a = r(80987).populateHostPrefix;
            e.exports = {
                buildRequest: function(e) {
                    var t = e.httpRequest,
                        r = e.service.api,
                        n = r.targetPrefix + "." + r.operations[e.operation].name,
                        i = r.jsonVersion || "1.0",
                        s = r.operations[e.operation].input,
                        c = new o;
                    1 === i && (i = "1.0"), t.body = c.build(e.params || {}, s), t.headers["Content-Type"] = "application/x-amz-json-" + i, t.headers["X-Amz-Target"] = n, a(e)
                },
                extractError: function(e) {
                    var t = {},
                        r = e.httpResponse;
                    if (t.code = r.headers["x-amzn-errortype"] || "UnknownError", "string" == typeof t.code && (t.code = t.code.split(":")[0]), r.body.length > 0) try {
                        var o = JSON.parse(r.body.toString()),
                            i = o.__type || o.code || o.Code;
                        i && (t.code = i.split("#").pop()), "RequestEntityTooLarge" === t.code ? t.message = "Request body must be less than 1 MB" : t.message = o.message || o.Message || null
                    } catch (e) {
                        t.statusCode = r.statusCode, t.message = r.statusMessage
                    } else t.statusCode = r.statusCode, t.message = r.statusCode.toString();
                    e.error = n.error(Error(), t)
                },
                extractData: function(e) {
                    var t = e.httpResponse.body.toString() || "{}";
                    if (!1 === e.request.service.config.convertResponseTypes) e.data = JSON.parse(t);
                    else {
                        var r = e.request.service.api.operations[e.request.operation].output || {},
                            n = new i;
                        e.data = n.parse(t, r)
                    }
                }
            }
        },
        70293: function(e, t, r) {
            var n = r(79614),
                o = r(62662),
                i = r(30864),
                a = r(68136),
                s = r(80987).populateHostPrefix;
            e.exports = {
                buildRequest: function(e) {
                    var t = e.service.api.operations[e.operation],
                        r = e.httpRequest;
                    r.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8", r.params = {
                        Version: e.service.api.apiVersion,
                        Action: t.name
                    }, new i().serialize(e.params, t.input, function(e, t) {
                        r.params[e] = t
                    }), r.body = o.queryParamsToString(r.params), s(e)
                },
                extractError: function(e) {
                    var t, r = e.httpResponse.body.toString();
                    if (r.match("<UnknownOperationException")) t = {
                        Code: "UnknownOperation",
                        Message: "Unknown operation " + e.request.operation
                    };
                    else try {
                        t = new n.XML.Parser().parse(r)
                    } catch (r) {
                        t = {
                            Code: e.httpResponse.statusCode,
                            Message: e.httpResponse.statusMessage
                        }
                    }
                    t.requestId && !e.requestId && (e.requestId = t.requestId), t.Errors && (t = t.Errors), t.Error && (t = t.Error), t.Code ? e.error = o.error(Error(), {
                        code: t.Code,
                        message: t.Message
                    }) : e.error = o.error(Error(), {
                        code: e.httpResponse.statusCode,
                        message: null
                    })
                },
                extractData: function(e) {
                    var t = e.request,
                        r = t.service.api.operations[t.operation].output || {},
                        i = r;
                    if (i.resultWrapper) {
                        var s = a.create({
                            type: "structure"
                        });
                        s.members[i.resultWrapper] = r, s.memberNames = [i.resultWrapper], o.property(r, "name", r.resultWrapper), r = s
                    }
                    var c = new n.XML.Parser;
                    if (r && r.members && !r.members._XAMZRequestId) {
                        var u = a.create({
                            type: "string"
                        }, {
                            api: {
                                protocol: "query"
                            }
                        }, "requestId");
                        r.members._XAMZRequestId = u
                    }
                    var l = c.parse(e.httpResponse.body.toString(), r);
                    e.requestId = l._XAMZRequestId || l.requestId, l._XAMZRequestId && delete l._XAMZRequestId, i.resultWrapper && l[i.resultWrapper] && (o.update(l, l[i.resultWrapper]), delete l[i.resultWrapper]), e.data = l
                }
            }
        },
        96225: function(e, t, r) {
            var n = r(62662),
                o = r(80987).populateHostPrefix;

            function i(e, t, r, o) {
                var i = [e, t].join("/");
                i = i.replace(/\/+/g, "/");
                var a = {},
                    s = !1;
                if (n.each(r.members, function(e, t) {
                        var r = o[e];
                        if (null != r) {
                            if ("uri" === t.location) {
                                var c = RegExp("\\{" + t.name + "(\\+)?\\}");
                                i = i.replace(c, function(e, t) {
                                    return (t ? n.uriEscapePath : n.uriEscape)(String(r))
                                })
                            } else "querystring" === t.location && (s = !0, "list" === t.type ? a[t.name] = r.map(function(e) {
                                return n.uriEscape(t.member.toWireFormat(e).toString())
                            }) : "map" === t.type ? n.each(r, function(e, t) {
                                Array.isArray(t) ? a[e] = t.map(function(e) {
                                    return n.uriEscape(String(e))
                                }) : a[e] = n.uriEscape(String(t))
                            }) : a[t.name] = n.uriEscape(t.toWireFormat(r).toString()))
                        }
                    }), s) {
                    i += i.indexOf("?") >= 0 ? "&" : "?";
                    var c = [];
                    n.arrayEach(Object.keys(a).sort(), function(e) {
                        Array.isArray(a[e]) || (a[e] = [a[e]]);
                        for (var t = 0; t < a[e].length; t++) c.push(n.uriEscape(String(e)) + "=" + a[e][t])
                    }), i += c.join("&")
                }
                return i
            }
            e.exports = {
                buildRequest: function(e) {
                    var t, r, a, s, c, u;
                    e.httpRequest.method = e.service.api.operations[e.operation].httpMethod, a = (r = (t = e).service.api.operations[t.operation]).input, s = i(t.httpRequest.endpoint.path, r.httpPath, a, t.params), t.httpRequest.path = s, u = (c = e).service.api.operations[c.operation], n.each(u.input.members, function(e, t) {
                        var r = c.params[e];
                        null != r && ("headers" === t.location && "map" === t.type ? n.each(r, function(e, r) {
                            c.httpRequest.headers[t.name + e] = r
                        }) : "header" === t.location && (r = t.toWireFormat(r).toString(), t.isJsonValue && (r = n.base64.encode(r)), c.httpRequest.headers[t.name] = r))
                    }), o(e)
                },
                extractError: function() {},
                extractData: function(e) {
                    var t = e.request,
                        r = {},
                        o = e.httpResponse,
                        i = t.service.api.operations[t.operation].output,
                        a = {};
                    n.each(o.headers, function(e, t) {
                        a[e.toLowerCase()] = t
                    }), n.each(i.members, function(e, t) {
                        var i = (t.name || e).toLowerCase();
                        if ("headers" === t.location && "map" === t.type) {
                            r[e] = {};
                            var s = RegExp("^" + (t.isLocationName ? t.name : "") + "(.+)", "i");
                            n.each(o.headers, function(t, n) {
                                var o = t.match(s);
                                null !== o && (r[e][o[1]] = n)
                            })
                        } else if ("header" === t.location) {
                            if (void 0 !== a[i]) {
                                var c = t.isJsonValue ? n.base64.decode(a[i]) : a[i];
                                r[e] = t.toType(c)
                            }
                        } else "statusCode" === t.location && (r[e] = parseInt(o.statusCode, 10))
                    }), e.data = r
                },
                generateURI: i
            }
        },
        53699: function(e, t, r) {
            var n = r(62662),
                o = r(96225),
                i = r(76933),
                a = r(43658),
                s = r(62622),
                c = ["GET", "HEAD", "DELETE"];

            function u(e, t) {
                e.httpRequest.headers["Content-Type"] || (e.httpRequest.headers["Content-Type"] = t ? "binary/octet-stream" : "application/json")
            }
            e.exports = {
                buildRequest: function(e) {
                    o.buildRequest(e), 0 > c.indexOf(e.httpRequest.method) && function(e) {
                        var t = new a,
                            r = e.service.api.operations[e.operation].input;
                        if (r.payload) {
                            var n = {},
                                o = r.members[r.payload];
                            n = e.params[r.payload], "structure" === o.type ? (e.httpRequest.body = t.build(n || {}, o), u(e)) : void 0 !== n && (e.httpRequest.body = n, ("binary" === o.type || o.isStreaming) && u(e, !0))
                        } else e.httpRequest.body = t.build(e.params, r), u(e)
                    }(e)
                },
                extractError: function(e) {
                    i.extractError(e)
                },
                extractData: function(e) {
                    o.extractData(e);
                    var t, r = e.request,
                        a = r.service.api.operations[r.operation],
                        c = r.service.api.operations[r.operation].output || {};
                    if (a.hasEventOutput, c.payload) {
                        var u = c.members[c.payload],
                            l = e.httpResponse.body;
                        if (u.isEventStream) t = new s, e.data[payload] = n.createEventStream(2 === AWS.HttpClient.streamsApiVersion ? e.httpResponse.stream : l, t, u);
                        else if ("structure" === u.type || "list" === u.type) {
                            var t = new s;
                            e.data[c.payload] = t.parse(l, u)
                        } else "binary" === u.type || u.isStreaming ? e.data[c.payload] = l : e.data[c.payload] = u.toType(l)
                    } else {
                        var p = e.data;
                        i.extractData(e), e.data = n.merge(p, e.data)
                    }
                },
                unsetContentLength: function(e) {
                    void 0 === n.getRequestPayloadShape(e) && c.indexOf(e.httpRequest.method) >= 0 && delete e.httpRequest.headers["Content-Length"]
                }
            }
        },
        11674: function(e, t, r) {
            var n = r(79614),
                o = r(62662),
                i = r(96225);
            e.exports = {
                buildRequest: function(e) {
                    i.buildRequest(e), 0 > ["GET", "HEAD"].indexOf(e.httpRequest.method) && function(e) {
                        var t = e.service.api.operations[e.operation].input,
                            r = new n.XML.Builder,
                            i = e.params,
                            a = t.payload;
                        if (a) {
                            var s = t.members[a];
                            if (void 0 === (i = i[a])) return;
                            if ("structure" === s.type) {
                                var c = s.name;
                                e.httpRequest.body = r.toXML(i, s, c, !0)
                            } else e.httpRequest.body = i
                        } else e.httpRequest.body = r.toXML(i, t, t.name || t.shape || o.string.upperFirst(e.operation) + "Request")
                    }(e)
                },
                extractError: function(e) {
                    var t;
                    i.extractError(e);
                    try {
                        t = new n.XML.Parser().parse(e.httpResponse.body.toString())
                    } catch (r) {
                        t = {
                            Code: e.httpResponse.statusCode,
                            Message: e.httpResponse.statusMessage
                        }
                    }
                    t.Errors && (t = t.Errors), t.Error && (t = t.Error), t.Code ? e.error = o.error(Error(), {
                        code: t.Code,
                        message: t.Message
                    }) : e.error = o.error(Error(), {
                        code: e.httpResponse.statusCode,
                        message: null
                    })
                },
                extractData: function(e) {
                    i.extractData(e);
                    var t, r = e.request,
                        a = e.httpResponse.body,
                        s = r.service.api.operations[r.operation],
                        c = s.output;
                    s.hasEventOutput;
                    var u = c.payload;
                    if (u) {
                        var l = c.members[u];
                        l.isEventStream ? (t = new n.XML.Parser, e.data[u] = o.createEventStream(2 === n.HttpClient.streamsApiVersion ? e.httpResponse.stream : e.httpResponse.body, t, l)) : "structure" === l.type ? (t = new n.XML.Parser, e.data[u] = t.parse(a.toString(), l)) : "binary" === l.type || l.isStreaming ? e.data[u] = a : e.data[u] = l.toType(a)
                    } else if (a.length > 0) {
                        var p = (t = new n.XML.Parser).parse(a.toString(), c);
                        o.update(e.data, p)
                    }
                }
            }
        },
        30864: function(e, t, r) {
            var n = r(62662);

            function o() {}

            function i(e) {
                return e.isQueryName || "ec2" !== e.api.protocol ? e.name : e.name[0].toUpperCase() + e.name.substr(1)
            }
            o.prototype.serialize = function(e, t, r) {
                ! function e(t, r, o, a) {
                    n.each(o.members, function(o, s) {
                        var c = r[o];
                        if (null != c) {
                            var u = i(s);
                            ! function t(r, o, a, s) {
                                if (null != o) {
                                    if ("structure" === a.type) e(r, o, a, s);
                                    else if ("list" === a.type) ! function(e, r, o, a) {
                                        var s = o.member || {};
                                        if (0 === r.length) {
                                            a.call(this, e, null);
                                            return
                                        }
                                        n.arrayEach(r, function(r, n) {
                                            var c = "." + (n + 1);
                                            if ("ec2" === o.api.protocol) c += "";
                                            else if (o.flattened) {
                                                if (s.name) {
                                                    var u = e.split(".");
                                                    u.pop(), u.push(i(s)), e = u.join(".")
                                                }
                                            } else c = "." + (s.name ? s.name : "member") + c;
                                            t(e + c, r, s, a)
                                        })
                                    }(r, o, a, s);
                                    else if ("map" === a.type) {
                                        var c;
                                        c = 1, n.each(o, function(e, n) {
                                            var o = (a.flattened ? "." : ".entry.") + c++ + ".",
                                                i = o + (a.key.name || "key"),
                                                u = o + (a.value.name || "value");
                                            t(r + i, e, a.key, s), t(r + u, n, a.value, s)
                                        })
                                    } else s(r, a.toWireFormat(o).toString())
                                }
                            }(u = t ? t + "." + u : u, c, s, a)
                        }
                    })
                }("", e, t, r)
            }, e.exports = o
        },
        31414: function(e) {
            e.exports = {
                now: function() {
                    return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : Date.now()
                }
            }
        },
        44040: function(e) {
            e.exports = {
                isFipsRegion: function(e) {
                    return "string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips"))
                },
                isGlobalRegion: function(e) {
                    return "string" == typeof e && ["aws-global", "aws-us-gov-global"].includes(e)
                },
                getRealRegion: function(e) {
                    return ["fips-aws-global", "aws-fips", "aws-global"].includes(e) ? "us-east-1" : ["fips-aws-us-gov-global", "aws-us-gov-global"].includes(e) ? "us-gov-west-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "")
                }
            }
        },
        41404: function(e, t, r) {
            var n = r(62662),
                o = r(80738);
            e.exports = {
                configureEndpoint: function(e) {
                    for (var t, r, i, a = (r = function(e) {
                            if (!e) return null;
                            var t = e.split("-");
                            return t.length < 3 ? null : t.slice(0, t.length - 2).join("-") + "-*"
                        }(t = e.config.region), [
                            [t, i = e.api.endpointPrefix],
                            [r, i],
                            [t, "*"],
                            [r, "*"],
                            ["*", i],
                            ["*", "*"]
                        ].map(function(e) {
                            return e[0] && e[1] ? e.join("/") : null
                        })), s = e.config.useFipsEndpoint, c = e.config.useDualstackEndpoint, u = 0; u < a.length; u++) {
                        var l = a[u];
                        if (l) {
                            var p = s ? c ? o.dualstackFipsRules : o.fipsRules : c ? o.dualstackRules : o.rules;
                            if (Object.prototype.hasOwnProperty.call(p, l)) {
                                var d = p[l];
                                "string" == typeof d && (d = o.patterns[d]), e.isGlobalEndpoint = !!d.globalEndpoint, d.signingRegion && (e.signingRegion = d.signingRegion), d.signatureVersion || (d.signatureVersion = "v4");
                                var m = "bearer" === (e.api && e.api.signatureVersion);
                                ! function(e, t) {
                                    n.each(t, function(t, r) {
                                        "globalEndpoint" !== t && (void 0 === e.config[t] || null === e.config[t]) && (e.config[t] = r)
                                    })
                                }(e, Object.assign({}, d, {
                                    signatureVersion: m ? "bearer" : d.signatureVersion
                                }));
                                return
                            }
                        }
                    }
                },
                getEndpointSuffix: function(e) {
                    for (var t = {
                            "^(us|eu|ap|sa|ca|me)\\-\\w+\\-\\d+$": "amazonaws.com",
                            "^cn\\-\\w+\\-\\d+$": "amazonaws.com.cn",
                            "^us\\-gov\\-\\w+\\-\\d+$": "amazonaws.com",
                            "^us\\-iso\\-\\w+\\-\\d+$": "c2s.ic.gov",
                            "^us\\-isob\\-\\w+\\-\\d+$": "sc2s.sgov.gov"
                        }, r = Object.keys(t), n = 0; n < r.length; n++) {
                        var o = RegExp(r[n]),
                            i = t[r[n]];
                        if (o.test(e)) return i
                    }
                    return "amazonaws.com"
                }
            }
        },
        73682: function(e, t, r) {
            var n = r(83454),
                o = r(79614),
                i = r(91793),
                a = o.util.inherit,
                s = o.util.domain,
                c = r(44509),
                u = {
                    success: 1,
                    error: 1,
                    complete: 1
                },
                l = new i;
            l.setupStates = function() {
                var e = function(e, t) {
                    var r = this;
                    r._haltHandlersOnError = !1, r.emit(r._asm.currentState, function(e) {
                        if (e) {
                            if (Object.prototype.hasOwnProperty.call(u, r._asm.currentState)) {
                                if (s && r.domain instanceof s.Domain) e.domainEmitter = r, e.domain = r.domain, e.domainThrown = !1, r.domain.emit("error", e);
                                else throw e
                            } else r.response.error = e, t(e)
                        } else t(r.response.error)
                    })
                };
                this.addState("validate", "build", "error", e), this.addState("build", "afterBuild", "restart", e), this.addState("afterBuild", "sign", "restart", e), this.addState("sign", "send", "retry", e), this.addState("retry", "afterRetry", "afterRetry", e), this.addState("afterRetry", "sign", "error", e), this.addState("send", "validateResponse", "retry", e), this.addState("validateResponse", "extractData", "extractError", e), this.addState("extractError", "extractData", "retry", e), this.addState("extractData", "success", "retry", e), this.addState("restart", "build", "error", e), this.addState("success", "complete", "complete", e), this.addState("error", "complete", "complete", e), this.addState("complete", null, null, e)
            }, l.setupStates(), o.Request = a({
                constructor: function(e, t, r) {
                    var n = e.endpoint,
                        a = e.config.region,
                        c = e.config.customUserAgent;
                    e.signingRegion ? a = e.signingRegion : e.isGlobalEndpoint && (a = "us-east-1"), this.domain = s && s.active, this.service = e, this.operation = t, this.params = r || {}, this.httpRequest = new o.HttpRequest(n, a), this.httpRequest.appendToUserAgent(c), this.startTime = e.getSkewCorrectedDate(), this.response = new o.Response(this), this._asm = new i(l.states, "validate"), this._haltHandlersOnError = !1, o.SequentialExecutor.call(this), this.emit = this.emitEvent
                },
                send: function(e) {
                    return e && (this.httpRequest.appendToUserAgent("callback"), this.on("complete", function(t) {
                        e.call(t, t.error, t.data)
                    })), this.runTo(), this.response
                },
                build: function(e) {
                    return this.runTo("send", e)
                },
                runTo: function(e, t) {
                    return this._asm.runTo(e, t, this), this
                },
                abort: function() {
                    return this.removeAllListeners("validateResponse"), this.removeAllListeners("extractError"), this.on("validateResponse", function(e) {
                        e.error = o.util.error(Error("Request aborted by user"), {
                            code: "RequestAbortedError",
                            retryable: !1
                        })
                    }), this.httpRequest.stream && !this.httpRequest.stream.didCallback && (this.httpRequest.stream.abort(), this.httpRequest._abortCallback ? this.httpRequest._abortCallback() : this.removeAllListeners("send")), this
                },
                eachPage: function(e) {
                    e = o.util.fn.makeAsync(e, 3), this.on("complete", function t(r) {
                        e.call(r, r.error, r.data, function(n) {
                            !1 !== n && (r.hasNextPage() ? r.nextPage().on("complete", t).send() : e.call(r, null, null, o.util.fn.noop))
                        })
                    }).send()
                },
                eachItem: function(e) {
                    var t = this;
                    this.eachPage(function(r, n) {
                        if (r) return e(r, null);
                        if (null === n) return e(null, null);
                        var i = t.service.paginationConfig(t.operation).resultKey;
                        Array.isArray(i) && (i = i[0]);
                        var a = c.search(n, i),
                            s = !0;
                        return o.util.arrayEach(a, function(t) {
                            if (!1 === (s = e(null, t))) return o.util.abort
                        }), s
                    })
                },
                isPageable: function() {
                    return !!this.service.paginationConfig(this.operation)
                },
                createReadStream: function() {
                    var e = o.util.stream,
                        t = this,
                        r = null;
                    return 2 === o.HttpClient.streamsApiVersion ? (r = new e.PassThrough, n.nextTick(function() {
                        t.send()
                    })) : ((r = new e.Stream).readable = !0, r.sent = !1, r.on("newListener", function(e) {
                        r.sent || "data" !== e || (r.sent = !0, n.nextTick(function() {
                            t.send()
                        }))
                    })), this.on("error", function(e) {
                        r.emit("error", e)
                    }), this.on("httpHeaders", function(n, i, a) {
                        if (n < 300) {
                            t.removeListener("httpData", o.EventListeners.Core.HTTP_DATA), t.removeListener("httpError", o.EventListeners.Core.HTTP_ERROR), t.on("httpError", function(e) {
                                a.error = e, a.error.retryable = !1
                            });
                            var s, c = !1;
                            if ("HEAD" !== t.httpRequest.method && (s = parseInt(i["content-length"], 10)), void 0 !== s && !isNaN(s) && s >= 0) {
                                c = !0;
                                var u = 0
                            }
                            var l = function() {
                                    c && u !== s ? r.emit("error", o.util.error(Error("Stream content length mismatch. Received " + u + " of " + s + " bytes."), {
                                        code: "StreamContentLengthMismatch"
                                    })) : 2 === o.HttpClient.streamsApiVersion ? r.end() : r.emit("end")
                                },
                                p = a.httpResponse.createUnbufferedStream();
                            if (2 === o.HttpClient.streamsApiVersion) {
                                if (c) {
                                    var d = new e.PassThrough;
                                    d._write = function(t) {
                                        return t && t.length && (u += t.length), e.PassThrough.prototype._write.apply(this, arguments)
                                    }, d.on("end", l), r.on("error", function(e) {
                                        c = !1, p.unpipe(d), d.emit("end"), d.end()
                                    }), p.pipe(d).pipe(r, {
                                        end: !1
                                    })
                                } else p.pipe(r)
                            } else c && p.on("data", function(e) {
                                e && e.length && (u += e.length)
                            }), p.on("data", function(e) {
                                r.emit("data", e)
                            }), p.on("end", l);
                            p.on("error", function(e) {
                                c = !1, r.emit("error", e)
                            })
                        }
                    }), r
                },
                emitEvent: function(e, t, r) {
                    "function" == typeof t && (r = t, t = null), r || (r = function() {}), t || (t = this.eventParameters(e, this.response)), o.SequentialExecutor.prototype.emit.call(this, e, t, function(e) {
                        e && (this.response.error = e), r.call(this, e)
                    })
                },
                eventParameters: function(e) {
                    switch (e) {
                        case "restart":
                        case "validate":
                        case "sign":
                        case "build":
                        case "afterValidate":
                        case "afterBuild":
                            return [this];
                        case "error":
                            return [this.response.error, this.response];
                        default:
                            return [this.response]
                    }
                },
                presign: function(e, t) {
                    return t || "function" != typeof e || (t = e, e = null), new o.Signers.Presign().sign(this.toGet(), e, t)
                },
                isPresigned: function() {
                    return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, "presigned-expires")
                },
                toUnauthenticated: function() {
                    return this._unAuthenticated = !0, this.removeListener("validate", o.EventListeners.Core.VALIDATE_CREDENTIALS), this.removeListener("sign", o.EventListeners.Core.SIGN), this
                },
                toGet: function() {
                    return ("query" === this.service.api.protocol || "ec2" === this.service.api.protocol) && (this.removeListener("build", this.buildAsGet), this.addListener("build", this.buildAsGet)), this
                },
                buildAsGet: function(e) {
                    e.httpRequest.method = "GET", e.httpRequest.path = e.service.endpoint.path + "?" + e.httpRequest.body, e.httpRequest.body = "", delete e.httpRequest.headers["Content-Length"], delete e.httpRequest.headers["Content-Type"]
                },
                haltHandlersOnError: function() {
                    this._haltHandlersOnError = !0
                }
            }), o.Request.addPromisesToClass = function(e) {
                this.prototype.promise = function() {
                    var t = this;
                    return this.httpRequest.appendToUserAgent("promise"), new e(function(e, r) {
                        t.on("complete", function(t) {
                            t.error ? r(t.error) : e(Object.defineProperty(t.data || {}, "$response", {
                                value: t
                            }))
                        }), t.runTo()
                    })
                }
            }, o.Request.deletePromisesFromClass = function() {
                delete this.prototype.promise
            }, o.util.addPromises(o.Request), o.util.mixin(o.Request, o.SequentialExecutor)
        },
        82413: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit,
                i = r(44509);

            function a(e) {
                var t = e.request._waiter,
                    r = t.config.acceptors,
                    n = !1,
                    o = "retry";
                r.forEach(function(r) {
                    if (!n) {
                        var i = t.matchers[r.matcher];
                        i && i(e, r.expected, r.argument) && (n = !0, o = r.state)
                    }
                }), !n && e.error && (o = "failure"), "success" === o ? t.setSuccess(e) : t.setError(e, "retry" === o)
            }
            n.ResourceWaiter = o({
                constructor: function(e, t) {
                    this.service = e, this.state = t, this.loadWaiterConfig(this.state)
                },
                service: null,
                state: null,
                config: null,
                matchers: {
                    path: function(e, t, r) {
                        try {
                            var n = i.search(e.data, r)
                        } catch (e) {
                            return !1
                        }
                        return i.strictDeepEqual(n, t)
                    },
                    pathAll: function(e, t, r) {
                        try {
                            var n = i.search(e.data, r)
                        } catch (e) {
                            return !1
                        }
                        Array.isArray(n) || (n = [n]);
                        var o = n.length;
                        if (!o) return !1;
                        for (var a = 0; a < o; a++)
                            if (!i.strictDeepEqual(n[a], t)) return !1;
                        return !0
                    },
                    pathAny: function(e, t, r) {
                        try {
                            var n = i.search(e.data, r)
                        } catch (e) {
                            return !1
                        }
                        Array.isArray(n) || (n = [n]);
                        for (var o = n.length, a = 0; a < o; a++)
                            if (i.strictDeepEqual(n[a], t)) return !0;
                        return !1
                    },
                    status: function(e, t) {
                        var r = e.httpResponse.statusCode;
                        return "number" == typeof r && r === t
                    },
                    error: function(e, t) {
                        return "string" == typeof t && e.error ? t === e.error.code : !!e.error === t
                    }
                },
                listeners: new n.SequentialExecutor().addNamedListeners(function(e) {
                    e("RETRY_CHECK", "retry", function(e) {
                        var t = e.request._waiter;
                        e.error && "ResourceNotReady" === e.error.code && (e.error.retryDelay = 1e3 * (t.config.delay || 0))
                    }), e("CHECK_OUTPUT", "extractData", a), e("CHECK_ERROR", "extractError", a)
                }),
                wait: function(e, t) {
                    "function" == typeof e && (t = e, e = void 0), e && e.$waiter && ("number" == typeof(e = n.util.copy(e)).$waiter.delay && (this.config.delay = e.$waiter.delay), "number" == typeof e.$waiter.maxAttempts && (this.config.maxAttempts = e.$waiter.maxAttempts), delete e.$waiter);
                    var r = this.service.makeRequest(this.config.operation, e);
                    return r._waiter = this, r.response.maxRetries = this.config.maxAttempts, r.addListeners(this.listeners), t && r.send(t), r
                },
                setSuccess: function(e) {
                    e.error = null, e.data = e.data || {}, e.request.removeAllListeners("extractData")
                },
                setError: function(e, t) {
                    e.data = null, e.error = n.util.error(e.error || Error(), {
                        code: "ResourceNotReady",
                        message: "Resource is not in the state " + this.state,
                        retryable: t
                    })
                },
                loadWaiterConfig: function(e) {
                    if (!this.service.api.waiters[e]) throw new n.util.error(Error(), {
                        code: "StateNotFoundError",
                        message: "State " + e + " not found."
                    });
                    this.config = n.util.copy(this.service.api.waiters[e])
                }
            })
        },
        93975: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit,
                i = r(44509);
            n.Response = o({
                constructor: function(e) {
                    this.request = e, this.data = null, this.error = null, this.retryCount = 0, this.redirectCount = 0, this.httpResponse = new n.HttpResponse, e && (this.maxRetries = e.service.numRetries(), this.maxRedirects = e.service.config.maxRedirects)
                },
                nextPage: function(e) {
                    var t, r = this.request.service,
                        o = this.request.operation;
                    try {
                        t = r.paginationConfig(o, !0)
                    } catch (e) {
                        this.error = e
                    }
                    if (!this.hasNextPage()) {
                        if (e) e(this.error, null);
                        else if (this.error) throw this.error;
                        return null
                    }
                    var i = n.util.copy(this.request.params);
                    if (!this.nextPageTokens) return e ? e(null, null) : null;
                    var a = t.inputToken;
                    "string" == typeof a && (a = [a]);
                    for (var s = 0; s < a.length; s++) i[a[s]] = this.nextPageTokens[s];
                    return r.makeRequest(this.request.operation, i, e)
                },
                hasNextPage: function() {
                    return this.cacheNextPageTokens(), !!this.nextPageTokens || void 0 === this.nextPageTokens && void 0
                },
                cacheNextPageTokens: function() {
                    if (Object.prototype.hasOwnProperty.call(this, "nextPageTokens")) return this.nextPageTokens;
                    this.nextPageTokens = void 0;
                    var e = this.request.service.paginationConfig(this.request.operation);
                    if (!e || (this.nextPageTokens = null, e.moreResults && !i.search(this.data, e.moreResults))) return this.nextPageTokens;
                    var t = e.outputToken;
                    return "string" == typeof t && (t = [t]), n.util.arrayEach.call(this, t, function(e) {
                        var t = i.search(this.data, e);
                        t && (this.nextPageTokens = this.nextPageTokens || [], this.nextPageTokens.push(t))
                    }), this.nextPageTokens
                }
            })
        },
        92149: function(e, t, r) {
            var n = r(79614),
                o = n.util.string.byteLength,
                i = n.util.Buffer;
            n.S3.ManagedUpload = n.util.inherit({
                constructor: function(e) {
                    var t = this;
                    n.SequentialExecutor.call(t), t.body = null, t.sliceFn = null, t.callback = null, t.parts = {}, t.completeInfo = [], t.fillQueue = function() {
                        t.callback(Error("Unsupported body payload " + typeof t.body))
                    }, t.configure(e)
                },
                configure: function(e) {
                    if (e = e || {}, this.partSize = this.minPartSize, e.queueSize && (this.queueSize = e.queueSize), e.partSize && (this.partSize = e.partSize), e.leavePartsOnError && (this.leavePartsOnError = !0), e.tags) {
                        if (!Array.isArray(e.tags)) throw Error("Tags must be specified as an array; " + typeof e.tags + " provided.");
                        this.tags = e.tags
                    }
                    if (this.partSize < this.minPartSize) throw Error("partSize must be greater than " + this.minPartSize);
                    this.service = e.service, this.bindServiceObject(e.params), this.validateBody(), this.adjustTotalBytes()
                },
                leavePartsOnError: !1,
                queueSize: 4,
                partSize: null,
                minPartSize: 5242880,
                maxTotalParts: 1e4,
                send: function(e) {
                    var t = this;
                    t.failed = !1, t.callback = e || function(e) {
                        if (e) throw e
                    };
                    var r = !0;
                    if (t.sliceFn) t.fillQueue = t.fillBuffer;
                    else if (n.util.isNode()) {
                        var o = n.util.stream.Stream;
                        t.body instanceof o && (r = !1, t.fillQueue = t.fillStream, t.partBuffers = [], t.body.on("error", function(e) {
                            t.cleanup(e)
                        }).on("readable", function() {
                            t.fillQueue()
                        }).on("end", function() {
                            t.isDoneChunking = !0, t.numParts = t.totalPartNumbers, t.fillQueue.call(t), t.isDoneChunking && t.totalPartNumbers >= 1 && t.doneParts === t.numParts && t.finishMultiPart()
                        }))
                    }
                    r && t.fillQueue.call(t)
                },
                abort: function() {
                    !0 === this.isDoneChunking && 1 === this.totalPartNumbers && this.singlePart ? this.singlePart.abort() : this.cleanup(n.util.error(Error("Request aborted by user"), {
                        code: "RequestAbortedError",
                        retryable: !1
                    }))
                },
                validateBody: function() {
                    var e = this;
                    if (e.body = e.service.config.params.Body, "string" == typeof e.body) e.body = n.util.buffer.toBuffer(e.body);
                    else if (!e.body) throw Error("params.Body is required");
                    e.sliceFn = n.util.arraySliceFn(e.body)
                },
                bindServiceObject: function(e) {
                    e = e || {};
                    var t = this;
                    if (t.service) {
                        var r = t.service,
                            o = n.util.copy(r.config);
                        o.signatureVersion = r.getSignatureVersion(), t.service = new r.constructor.__super__(o), t.service.config.params = n.util.merge(t.service.config.params || {}, e), Object.defineProperty(t.service, "_originalConfig", {
                            get: function() {
                                return r._originalConfig
                            },
                            enumerable: !1,
                            configurable: !0
                        })
                    } else t.service = new n.S3({
                        params: e
                    })
                },
                adjustTotalBytes: function() {
                    var e = this;
                    try {
                        e.totalBytes = o(e.body)
                    } catch (e) {}
                    if (e.totalBytes) {
                        var t = Math.ceil(e.totalBytes / e.maxTotalParts);
                        t > e.partSize && (e.partSize = t)
                    } else e.totalBytes = void 0
                },
                isDoneChunking: !1,
                partPos: 0,
                totalChunkedBytes: 0,
                totalUploadedBytes: 0,
                totalBytes: void 0,
                numParts: 0,
                totalPartNumbers: 0,
                activeParts: 0,
                doneParts: 0,
                parts: null,
                completeInfo: null,
                failed: !1,
                multipartReq: null,
                partBuffers: null,
                partBufferLength: 0,
                fillBuffer: function() {
                    var e = this,
                        t = o(e.body);
                    if (0 === t) {
                        e.isDoneChunking = !0, e.numParts = 1, e.nextChunk(e.body);
                        return
                    }
                    for (; e.activeParts < e.queueSize && e.partPos < t;) {
                        var r = Math.min(e.partPos + e.partSize, t),
                            n = e.sliceFn.call(e.body, e.partPos, r);
                        e.partPos += e.partSize, (o(n) < e.partSize || e.partPos === t) && (e.isDoneChunking = !0, e.numParts = e.totalPartNumbers + 1), e.nextChunk(n)
                    }
                },
                fillStream: function() {
                    var e = this;
                    if (!(e.activeParts >= e.queueSize)) {
                        var t = e.body.read(e.partSize - e.partBufferLength) || e.body.read();
                        if (t && (e.partBuffers.push(t), e.partBufferLength += t.length, e.totalChunkedBytes += t.length), e.partBufferLength >= e.partSize) {
                            var r = 1 === e.partBuffers.length ? e.partBuffers[0] : i.concat(e.partBuffers);
                            if (e.partBuffers = [], e.partBufferLength = 0, r.length > e.partSize) {
                                var n = r.slice(e.partSize);
                                e.partBuffers.push(n), e.partBufferLength += n.length, r = r.slice(0, e.partSize)
                            }
                            e.nextChunk(r)
                        }
                        e.isDoneChunking && !e.isDoneSending && (r = 1 === e.partBuffers.length ? e.partBuffers[0] : i.concat(e.partBuffers), e.partBuffers = [], e.partBufferLength = 0, e.totalBytes = e.totalChunkedBytes, e.isDoneSending = !0, (0 === e.numParts || r.length > 0) && (e.numParts++, e.nextChunk(r))), e.body.read(0)
                    }
                },
                nextChunk: function(e) {
                    var t = this;
                    if (t.failed) return null;
                    var r = ++t.totalPartNumbers;
                    if (t.isDoneChunking && 1 === r) {
                        var o = {
                            Body: e
                        };
                        this.tags && (o.Tagging = this.getTaggingHeader());
                        var i = t.service.putObject(o);
                        return i._managedUpload = t, i.on("httpUploadProgress", t.progress).send(t.finishSinglePart), t.singlePart = i, null
                    }
                    if (t.service.config.params.ContentMD5) {
                        var a = n.util.error(Error("The Content-MD5 you specified is invalid for multi-part uploads."), {
                            code: "InvalidDigest",
                            retryable: !1
                        });
                        return t.cleanup(a), null
                    }
                    if (t.completeInfo[r] && null !== t.completeInfo[r].ETag) return null;
                    t.activeParts++, t.service.config.params.UploadId ? t.uploadPart(e, r) : t.multipartReq ? t.queueChunks(e, r) : (t.multipartReq = t.service.createMultipartUpload(), t.multipartReq.on("success", function(e) {
                        t.service.config.params.UploadId = e.data.UploadId, t.multipartReq = null
                    }), t.queueChunks(e, r), t.multipartReq.on("error", function(e) {
                        t.cleanup(e)
                    }), t.multipartReq.send())
                },
                getTaggingHeader: function() {
                    for (var e = [], t = 0; t < this.tags.length; t++) e.push(n.util.uriEscape(this.tags[t].Key) + "=" + n.util.uriEscape(this.tags[t].Value));
                    return e.join("&")
                },
                uploadPart: function(e, t) {
                    var r = this,
                        o = {
                            Body: e,
                            ContentLength: n.util.string.byteLength(e),
                            PartNumber: t
                        },
                        i = {
                            ETag: null,
                            PartNumber: t
                        };
                    r.completeInfo[t] = i;
                    var a = r.service.uploadPart(o);
                    r.parts[t] = a, a._lastUploadedBytes = 0, a._managedUpload = r, a.on("httpUploadProgress", r.progress), a.send(function(e, a) {
                        if (delete r.parts[o.PartNumber], r.activeParts--, !e && (!a || !a.ETag)) {
                            var s = "No access to ETag property on response.";
                            n.util.isBrowser() && (s += " Check CORS configuration to expose ETag header."), e = n.util.error(Error(s), {
                                code: "ETagMissing",
                                retryable: !1
                            })
                        }
                        return e ? r.cleanup(e) : r.completeInfo[t] && null !== r.completeInfo[t].ETag ? null : void(i.ETag = a.ETag, r.doneParts++, r.isDoneChunking && r.doneParts === r.totalPartNumbers ? r.finishMultiPart() : r.fillQueue.call(r))
                    })
                },
                queueChunks: function(e, t) {
                    var r = this;
                    r.multipartReq.on("success", function() {
                        r.uploadPart(e, t)
                    })
                },
                cleanup: function(e) {
                    var t = this;
                    t.failed || ("function" == typeof t.body.removeAllListeners && "function" == typeof t.body.resume && (t.body.removeAllListeners("readable"), t.body.removeAllListeners("end"), t.body.resume()), t.multipartReq && (t.multipartReq.removeAllListeners("success"), t.multipartReq.removeAllListeners("error"), t.multipartReq.removeAllListeners("complete"), delete t.multipartReq), t.service.config.params.UploadId && !t.leavePartsOnError ? t.service.abortMultipartUpload().send() : t.leavePartsOnError && (t.isDoneChunking = !1), n.util.each(t.parts, function(e, t) {
                        t.removeAllListeners("complete"), t.abort()
                    }), t.activeParts = 0, t.partPos = 0, t.numParts = 0, t.totalPartNumbers = 0, t.parts = {}, t.failed = !0, t.callback(e))
                },
                finishMultiPart: function() {
                    var e = this,
                        t = {
                            MultipartUpload: {
                                Parts: e.completeInfo.slice(1)
                            }
                        };
                    e.service.completeMultipartUpload(t, function(t, r) {
                        if (t) return e.cleanup(t);
                        if (r && "string" == typeof r.Location && (r.Location = r.Location.replace(/%2F/g, "/")), Array.isArray(e.tags)) {
                            for (var n = 0; n < e.tags.length; n++) e.tags[n].Value = String(e.tags[n].Value);
                            e.service.putObjectTagging({
                                Tagging: {
                                    TagSet: e.tags
                                }
                            }, function(t, n) {
                                t ? e.callback(t) : e.callback(t, r)
                            })
                        } else e.callback(t, r)
                    })
                },
                finishSinglePart: function(e, t) {
                    var r = this.request._managedUpload,
                        n = this.request.httpRequest,
                        o = n.endpoint;
                    if (e) return r.callback(e);
                    t.Location = [o.protocol, "//", o.host, n.path].join(""), t.key = this.request.params.Key, t.Key = this.request.params.Key, t.Bucket = this.request.params.Bucket, r.callback(e, t)
                },
                progress: function(e) {
                    var t = this._managedUpload;
                    "putObject" === this.operation ? (e.part = 1, e.key = this.params.Key) : (t.totalUploadedBytes += e.loaded - this._lastUploadedBytes, this._lastUploadedBytes = e.loaded, e = {
                        loaded: t.totalUploadedBytes,
                        total: t.totalBytes,
                        part: this.params.PartNumber,
                        key: this.params.Key
                    }), t.emit("httpUploadProgress", [e])
                }
            }), n.util.mixin(n.S3.ManagedUpload, n.SequentialExecutor), n.S3.ManagedUpload.addPromisesToClass = function(e) {
                this.prototype.promise = n.util.promisifyMethod("send", e)
            }, n.S3.ManagedUpload.deletePromisesFromClass = function() {
                delete this.prototype.promise
            }, n.util.addPromises(n.S3.ManagedUpload), e.exports = n.S3.ManagedUpload
        },
        96380: function(e, t, r) {
            var n = r(79614);
            n.SequentialExecutor = n.util.inherit({
                constructor: function() {
                    this._events = {}
                },
                listeners: function(e) {
                    return this._events[e] ? this._events[e].slice(0) : []
                },
                on: function(e, t, r) {
                    return this._events[e] ? r ? this._events[e].unshift(t) : this._events[e].push(t) : this._events[e] = [t], this
                },
                onAsync: function(e, t, r) {
                    return t._isAsync = !0, this.on(e, t, r)
                },
                removeListener: function(e, t) {
                    var r = this._events[e];
                    if (r) {
                        for (var n = r.length, o = -1, i = 0; i < n; ++i) r[i] === t && (o = i);
                        o > -1 && r.splice(o, 1)
                    }
                    return this
                },
                removeAllListeners: function(e) {
                    return e ? delete this._events[e] : this._events = {}, this
                },
                emit: function(e, t, r) {
                    r || (r = function() {});
                    var n = this.listeners(e),
                        o = n.length;
                    return this.callListeners(n, t, r), o > 0
                },
                callListeners: function(e, t, r, o) {
                    var i = this,
                        a = o || null;

                    function s(o) {
                        if (o && (a = n.util.error(a || Error(), o), i._haltHandlersOnError)) return r.call(i, a);
                        i.callListeners(e, t, r, a)
                    }
                    for (; e.length > 0;) {
                        var c = e.shift();
                        if (c._isAsync) {
                            c.apply(i, t.concat([s]));
                            return
                        }
                        try {
                            c.apply(i, t)
                        } catch (e) {
                            a = n.util.error(a || Error(), e)
                        }
                        if (a && i._haltHandlersOnError) {
                            r.call(i, a);
                            return
                        }
                    }
                    r.call(i, a)
                },
                addListeners: function(e) {
                    var t = this;
                    return e._events && (e = e._events), n.util.each(e, function(e, r) {
                        "function" == typeof r && (r = [r]), n.util.arrayEach(r, function(r) {
                            t.on(e, r)
                        })
                    }), t
                },
                addNamedListener: function(e, t, r, n) {
                    return this[e] = r, this.addListener(t, r, n), this
                },
                addNamedAsyncListener: function(e, t, r, n) {
                    return r._isAsync = !0, this.addNamedListener(e, t, r, n)
                },
                addNamedListeners: function(e) {
                    var t = this;
                    return e(function() {
                        t.addNamedListener.apply(t, arguments)
                    }, function() {
                        t.addNamedAsyncListener.apply(t, arguments)
                    }), this
                }
            }), n.SequentialExecutor.prototype.addListener = n.SequentialExecutor.prototype.on, e.exports = n.SequentialExecutor
        },
        20173: function(e, t, r) {
            var n = r(83454),
                o = r(79614),
                i = r(85863),
                a = r(41404),
                s = o.util.inherit,
                c = 0,
                u = r(44040);
            o.Service = s({
                constructor: function(e) {
                    if (!this.loadServiceClass) throw o.util.error(Error(), "Service must be constructed with `new' operator");
                    if (e) {
                        if (e.region) {
                            var t = e.region;
                            u.isFipsRegion(t) && (e.region = u.getRealRegion(t), e.useFipsEndpoint = !0), u.isGlobalRegion(t) && (e.region = u.getRealRegion(t))
                        }
                        "boolean" == typeof e.useDualstack && "boolean" != typeof e.useDualstackEndpoint && (e.useDualstackEndpoint = e.useDualstack)
                    }
                    var r = this.loadServiceClass(e || {});
                    if (r) {
                        var n = o.util.copy(e),
                            i = new r(e);
                        return Object.defineProperty(i, "_originalConfig", {
                            get: function() {
                                return n
                            },
                            enumerable: !1,
                            configurable: !0
                        }), i._clientId = ++c, i
                    }
                    this.initialize(e)
                },
                initialize: function(e) {
                    var t = o.config[this.serviceIdentifier];
                    if (this.config = new o.Config(o.config), t && this.config.update(t, !0), e && this.config.update(e, !0), this.validateService(), this.config.endpoint || a.configureEndpoint(this), this.config.endpoint = this.endpointFromTemplate(this.config.endpoint), this.setEndpoint(this.config.endpoint), o.SequentialExecutor.call(this), o.Service.addDefaultMonitoringListeners(this), (this.config.clientSideMonitoring || o.Service._clientSideMonitoring) && this.publisher) {
                        var r = this.publisher;
                        this.addNamedListener("PUBLISH_API_CALL", "apiCall", function(e) {
                            n.nextTick(function() {
                                r.eventHandler(e)
                            })
                        }), this.addNamedListener("PUBLISH_API_ATTEMPT", "apiCallAttempt", function(e) {
                            n.nextTick(function() {
                                r.eventHandler(e)
                            })
                        })
                    }
                },
                validateService: function() {},
                loadServiceClass: function(e) {
                    var t = e;
                    if (!o.util.isEmpty(this.api)) return null;
                    if (t.apiConfig) return o.Service.defineServiceApi(this.constructor, t.apiConfig);
                    if (!this.constructor.services) return null;
                    (t = new o.Config(o.config)).update(e, !0);
                    var r = t.apiVersions[this.constructor.serviceIdentifier];
                    return r = r || t.apiVersion, this.getLatestServiceClass(r)
                },
                getLatestServiceClass: function(e) {
                    return e = this.getLatestServiceVersion(e), null === this.constructor.services[e] && o.Service.defineServiceApi(this.constructor, e), this.constructor.services[e]
                },
                getLatestServiceVersion: function(e) {
                    if (!this.constructor.services || 0 === this.constructor.services.length) throw Error("No services defined on " + this.constructor.serviceIdentifier);
                    if (e ? o.util.isType(e, Date) && (e = o.util.date.iso8601(e).split("T")[0]) : e = "latest", Object.hasOwnProperty(this.constructor.services, e)) return e;
                    for (var t = Object.keys(this.constructor.services).sort(), r = null, n = t.length - 1; n >= 0; n--)
                        if ("*" !== t[n][t[n].length - 1] && (r = t[n]), t[n].substr(0, 10) <= e) return r;
                    throw Error("Could not find " + this.constructor.serviceIdentifier + " API to satisfy version constraint `" + e + "'")
                },
                api: {},
                defaultRetryCount: 3,
                customizeRequests: function(e) {
                    if (e) {
                        if ("function" == typeof e) this.customRequestHandler = e;
                        else throw Error("Invalid callback type '" + typeof e + "' provided in customizeRequests")
                    } else this.customRequestHandler = null
                },
                makeRequest: function(e, t, r) {
                    if ("function" == typeof t && (r = t, t = null), t = t || {}, this.config.params) {
                        var n = this.api.operations[e];
                        n && (t = o.util.copy(t), o.util.each(this.config.params, function(e, r) {
                            n.input.members[e] && (void 0 === t[e] || null === t[e]) && (t[e] = r)
                        }))
                    }
                    var i = new o.Request(this, e, t);
                    return this.addAllRequestListeners(i), this.attachMonitoringEmitter(i), r && i.send(r), i
                },
                makeUnauthenticatedRequest: function(e, t, r) {
                    "function" == typeof t && (r = t, t = {});
                    var n = this.makeRequest(e, t).toUnauthenticated();
                    return r ? n.send(r) : n
                },
                waitFor: function(e, t, r) {
                    return new o.ResourceWaiter(this, e).wait(t, r)
                },
                addAllRequestListeners: function(e) {
                    for (var t = [o.events, o.EventListeners.Core, this.serviceInterface(), o.EventListeners.CorePost], r = 0; r < t.length; r++) t[r] && e.addListeners(t[r]);
                    this.config.paramValidation || e.removeListener("validate", o.EventListeners.Core.VALIDATE_PARAMETERS), this.config.logger && e.addListeners(o.EventListeners.Logger), this.setupRequestListeners(e), "function" == typeof this.constructor.prototype.customRequestHandler && this.constructor.prototype.customRequestHandler(e), Object.prototype.hasOwnProperty.call(this, "customRequestHandler") && "function" == typeof this.customRequestHandler && this.customRequestHandler(e)
                },
                apiCallEvent: function(e) {
                    var t = e.service.api.operations[e.operation],
                        r = {
                            Type: "ApiCall",
                            Api: t ? t.name : e.operation,
                            Version: 1,
                            Service: e.service.api.serviceId || e.service.api.endpointPrefix,
                            Region: e.httpRequest.region,
                            MaxRetriesExceeded: 0,
                            UserAgent: e.httpRequest.getUserAgent()
                        },
                        n = e.response;
                    if (n.httpResponse.statusCode && (r.FinalHttpStatusCode = n.httpResponse.statusCode), n.error) {
                        var o = n.error;
                        n.httpResponse.statusCode > 299 ? (o.code && (r.FinalAwsException = o.code), o.message && (r.FinalAwsExceptionMessage = o.message)) : ((o.code || o.name) && (r.FinalSdkException = o.code || o.name), o.message && (r.FinalSdkExceptionMessage = o.message))
                    }
                    return r
                },
                apiAttemptEvent: function(e) {
                    var t = e.service.api.operations[e.operation],
                        r = {
                            Type: "ApiCallAttempt",
                            Api: t ? t.name : e.operation,
                            Version: 1,
                            Service: e.service.api.serviceId || e.service.api.endpointPrefix,
                            Fqdn: e.httpRequest.endpoint.hostname,
                            UserAgent: e.httpRequest.getUserAgent()
                        },
                        n = e.response;
                    return n.httpResponse.statusCode && (r.HttpStatusCode = n.httpResponse.statusCode), !e._unAuthenticated && e.service.config.credentials && e.service.config.credentials.accessKeyId && (r.AccessKey = e.service.config.credentials.accessKeyId), n.httpResponse.headers && (e.httpRequest.headers["x-amz-security-token"] && (r.SessionToken = e.httpRequest.headers["x-amz-security-token"]), n.httpResponse.headers["x-amzn-requestid"] && (r.XAmznRequestId = n.httpResponse.headers["x-amzn-requestid"]), n.httpResponse.headers["x-amz-request-id"] && (r.XAmzRequestId = n.httpResponse.headers["x-amz-request-id"]), n.httpResponse.headers["x-amz-id-2"] && (r.XAmzId2 = n.httpResponse.headers["x-amz-id-2"])), r
                },
                attemptFailEvent: function(e) {
                    var t = this.apiAttemptEvent(e),
                        r = e.response,
                        n = r.error;
                    return r.httpResponse.statusCode > 299 ? (n.code && (t.AwsException = n.code), n.message && (t.AwsExceptionMessage = n.message)) : ((n.code || n.name) && (t.SdkException = n.code || n.name), n.message && (t.SdkExceptionMessage = n.message)), t
                },
                attachMonitoringEmitter: function(e) {
                    var t, r, n, i, a, s, c = 0,
                        u = this;
                    e.on("validate", function() {
                        i = o.util.realClock.now(), s = Date.now()
                    }, !0), e.on("sign", function() {
                        r = o.util.realClock.now(), t = Date.now(), a = e.httpRequest.region, c++
                    }, !0), e.on("validateResponse", function() {
                        n = Math.round(o.util.realClock.now() - r)
                    }), e.addNamedListener("API_CALL_ATTEMPT", "success", function() {
                        var r = u.apiAttemptEvent(e);
                        r.Timestamp = t, r.AttemptLatency = n >= 0 ? n : 0, r.Region = a, u.emit("apiCallAttempt", [r])
                    }), e.addNamedListener("API_CALL_ATTEMPT_RETRY", "retry", function() {
                        var i = u.attemptFailEvent(e);
                        i.Timestamp = t, n = n || Math.round(o.util.realClock.now() - r), i.AttemptLatency = n >= 0 ? n : 0, i.Region = a, u.emit("apiCallAttempt", [i])
                    }), e.addNamedListener("API_CALL", "complete", function() {
                        var t = u.apiCallEvent(e);
                        if (t.AttemptCount = c, !(t.AttemptCount <= 0)) {
                            t.Timestamp = s;
                            var r = Math.round(o.util.realClock.now() - i);
                            t.Latency = r >= 0 ? r : 0;
                            var n = e.response;
                            n.error && n.error.retryable && "number" == typeof n.retryCount && "number" == typeof n.maxRetries && n.retryCount >= n.maxRetries && (t.MaxRetriesExceeded = 1), u.emit("apiCall", [t])
                        }
                    })
                },
                setupRequestListeners: function(e) {},
                getSigningName: function() {
                    return this.api.signingName || this.api.endpointPrefix
                },
                getSignerClass: function(e) {
                    var t, r = null,
                        n = "";
                    return e && (n = (r = (e.service.api.operations || {})[e.operation] || null) ? r.authtype : ""), t = this.config.signatureVersion ? this.config.signatureVersion : "v4" === n || "v4-unsigned-body" === n ? "v4" : "bearer" === n ? "bearer" : this.api.signatureVersion, o.Signers.RequestSigner.getVersion(t)
                },
                serviceInterface: function() {
                    switch (this.api.protocol) {
                        case "ec2":
                        case "query":
                            return o.EventListeners.Query;
                        case "json":
                            return o.EventListeners.Json;
                        case "rest-json":
                            return o.EventListeners.RestJson;
                        case "rest-xml":
                            return o.EventListeners.RestXml
                    }
                    if (this.api.protocol) throw Error("Invalid service `protocol' " + this.api.protocol + " in API config")
                },
                successfulResponse: function(e) {
                    return e.httpResponse.statusCode < 300
                },
                numRetries: function() {
                    return void 0 !== this.config.maxRetries ? this.config.maxRetries : this.defaultRetryCount
                },
                retryDelays: function(e, t) {
                    return o.util.calculateRetryDelay(e, this.config.retryDelayOptions, t)
                },
                retryableError: function(e) {
                    return !!(this.timeoutError(e) || this.networkingError(e) || this.expiredCredentialsError(e) || this.throttledError(e)) || e.statusCode >= 500
                },
                networkingError: function(e) {
                    return "NetworkingError" === e.code
                },
                timeoutError: function(e) {
                    return "TimeoutError" === e.code
                },
                expiredCredentialsError: function(e) {
                    return "ExpiredTokenException" === e.code
                },
                clockSkewError: function(e) {
                    switch (e.code) {
                        case "RequestTimeTooSkewed":
                        case "RequestExpired":
                        case "InvalidSignatureException":
                        case "SignatureDoesNotMatch":
                        case "AuthFailure":
                        case "RequestInTheFuture":
                            return !0;
                        default:
                            return !1
                    }
                },
                getSkewCorrectedDate: function() {
                    return new Date(Date.now() + this.config.systemClockOffset)
                },
                applyClockOffset: function(e) {
                    e && (this.config.systemClockOffset = e - Date.now())
                },
                isClockSkewed: function(e) {
                    if (e) return Math.abs(this.getSkewCorrectedDate().getTime() - e) >= 3e5
                },
                throttledError: function(e) {
                    if (429 === e.statusCode) return !0;
                    switch (e.code) {
                        case "ProvisionedThroughputExceededException":
                        case "Throttling":
                        case "ThrottlingException":
                        case "RequestLimitExceeded":
                        case "RequestThrottled":
                        case "RequestThrottledException":
                        case "TooManyRequestsException":
                        case "TransactionInProgressException":
                        case "EC2ThrottledException":
                            return !0;
                        default:
                            return !1
                    }
                },
                endpointFromTemplate: function(e) {
                    if ("string" != typeof e) return e;
                    var t = e;
                    return (t = (t = t.replace(/\{service\}/g, this.api.endpointPrefix)).replace(/\{region\}/g, this.config.region)).replace(/\{scheme\}/g, this.config.sslEnabled ? "https" : "http")
                },
                setEndpoint: function(e) {
                    this.endpoint = new o.Endpoint(e, this.config)
                },
                paginationConfig: function(e, t) {
                    var r = this.api.operations[e].paginator;
                    if (!r) {
                        if (t) {
                            var n = Error();
                            throw o.util.error(n, "No pagination configuration for " + e)
                        }
                        return null
                    }
                    return r
                }
            }), o.util.update(o.Service, {
                defineMethods: function(e) {
                    o.util.each(e.prototype.api.operations, function(t) {
                        e.prototype[t] || ("none" === e.prototype.api.operations[t].authtype ? e.prototype[t] = function(e, r) {
                            return this.makeUnauthenticatedRequest(t, e, r)
                        } : e.prototype[t] = function(e, r) {
                            return this.makeRequest(t, e, r)
                        })
                    })
                },
                defineService: function(e, t, r) {
                    o.Service._serviceMap[e] = !0, Array.isArray(t) || (r = t, t = []);
                    var n = s(o.Service, r || {});
                    if ("string" == typeof e) {
                        o.Service.addVersions(n, t);
                        var i = n.serviceIdentifier || e;
                        n.serviceIdentifier = i
                    } else n.prototype.api = e, o.Service.defineMethods(n);
                    if (o.SequentialExecutor.call(this.prototype), !this.prototype.publisher && o.util.clientSideMonitoring) {
                        var a = o.util.clientSideMonitoring.Publisher,
                            c = (0, o.util.clientSideMonitoring.configProvider)();
                        this.prototype.publisher = new a(c), c.enabled && (o.Service._clientSideMonitoring = !0)
                    }
                    return o.SequentialExecutor.call(n.prototype), o.Service.addDefaultMonitoringListeners(n.prototype), n
                },
                addVersions: function(e, t) {
                    Array.isArray(t) || (t = [t]), e.services = e.services || {};
                    for (var r = 0; r < t.length; r++) void 0 === e.services[t[r]] && (e.services[t[r]] = null);
                    e.apiVersions = Object.keys(e.services).sort()
                },
                defineServiceApi: function(e, t, r) {
                    var n = s(e, {
                        serviceIdentifier: e.serviceIdentifier
                    });

                    function a(t) {
                        t.isApi ? n.prototype.api = t : n.prototype.api = new i(t, {
                            serviceIdentifier: e.serviceIdentifier
                        })
                    }
                    if ("string" == typeof t) {
                        if (r) a(r);
                        else try {
                            a(o.apiLoader(e.serviceIdentifier, t))
                        } catch (r) {
                            throw o.util.error(r, {
                                message: "Could not find API configuration " + e.serviceIdentifier + "-" + t
                            })
                        }
                        Object.prototype.hasOwnProperty.call(e.services, t) || (e.apiVersions = e.apiVersions.concat(t).sort()), e.services[t] = n
                    } else a(t);
                    return o.Service.defineMethods(n), n
                },
                hasService: function(e) {
                    return Object.prototype.hasOwnProperty.call(o.Service._serviceMap, e)
                },
                addDefaultMonitoringListeners: function(e) {
                    e.addNamedListener("MONITOR_EVENTS_BUBBLE", "apiCallAttempt", function(t) {
                        var r = Object.getPrototypeOf(e);
                        r._events && r.emit("apiCallAttempt", [t])
                    }), e.addNamedListener("CALL_EVENTS_BUBBLE", "apiCall", function(t) {
                        var r = Object.getPrototypeOf(e);
                        r._events && r.emit("apiCall", [t])
                    })
                },
                _serviceMap: {}
            }), o.util.mixin(o.Service, o.SequentialExecutor), e.exports = o.Service
        },
        3906: function(e, t, r) {
            var n = r(79614),
                o = r(16914),
                i = r(65456),
                a = r(85133),
                s = r(41404);
            r(92149);
            var c = {
                    completeMultipartUpload: !0,
                    copyObject: !0,
                    uploadPartCopy: !0
                },
                u = ["AuthorizationHeaderMalformed", "BadRequest", "PermanentRedirect", 301],
                l = "s3-object-lambda";
            n.util.update(n.S3.prototype, {
                getSignatureVersion: function(e) {
                    var t = this.api.signatureVersion,
                        r = this._originalConfig ? this._originalConfig.signatureVersion : null,
                        n = this.config.signatureVersion,
                        o = !!e && e.isPresigned();
                    return r ? r = "v2" === r ? "s3" : r : (!0 !== o ? t = "v4" : n && (t = n), t)
                },
                getSigningName: function(e) {
                    if (e && "writeGetObjectResponse" === e.operation) return l;
                    var t = n.Service.prototype.getSigningName;
                    return e && e._parsedArn && e._parsedArn.service ? e._parsedArn.service : t.call(this)
                },
                getSignerClass: function(e) {
                    var t = this.getSignatureVersion(e);
                    return n.Signers.RequestSigner.getVersion(t)
                },
                validateService: function() {
                    var e, t = [];
                    if (this.config.region || (this.config.region = "us-east-1"), !this.config.endpoint && this.config.s3BucketEndpoint && t.push("An endpoint must be provided when configuring `s3BucketEndpoint` to true."), 1 === t.length ? e = t[0] : t.length > 1 && (e = "Multiple configuration errors:\n" + t.join("\n")), e) throw n.util.error(Error(), {
                        name: "InvalidEndpoint",
                        message: e
                    })
                },
                shouldDisableBodySigning: function(e) {
                    var t = this.getSignerClass();
                    return !0 === this.config.s3DisableBodySigning && t === n.Signers.V4 && "https:" === e.httpRequest.endpoint.protocol
                },
                setupRequestListeners: function(e) {
                    if (e.addListener("validate", this.validateScheme), e.addListener("validate", this.validateBucketName, !0), e.addListener("validate", this.optInUsEast1RegionalEndpoint, !0), e.removeListener("validate", n.EventListeners.Core.VALIDATE_REGION), e.addListener("build", this.addContentType), e.addListener("build", this.computeContentMd5), e.addListener("build", this.computeSseCustomerKeyMd5), e.addListener("build", this.populateURI), e.addListener("afterBuild", this.addExpect100Continue), e.addListener("extractError", this.extractError), e.addListener("extractData", n.util.hoistPayloadMember), e.addListener("extractData", this.extractData), e.addListener("extractData", this.extractErrorFrom200Response), e.addListener("beforePresign", this.prepareSignedUrl), this.shouldDisableBodySigning(e) && (e.removeListener("afterBuild", n.EventListeners.Core.COMPUTE_SHA256), e.addListener("afterBuild", this.disableBodySigning)), "createBucket" !== e.operation && a.isArnInParam(e, "Bucket")) {
                        e._parsedArn = n.util.ARN.parse(e.params.Bucket), e.removeListener("validate", this.validateBucketName), e.removeListener("build", this.populateURI), "s3" === e._parsedArn.service ? (e.addListener("validate", a.validateS3AccessPointArn), e.addListener("validate", this.validateArnResourceType), e.addListener("validate", this.validateArnRegion)) : "s3-outposts" === e._parsedArn.service && (e.addListener("validate", a.validateOutpostsAccessPointArn), e.addListener("validate", a.validateOutpostsArn), e.addListener("validate", a.validateArnRegion)), e.addListener("validate", a.validateArnAccount), e.addListener("validate", a.validateArnService), e.addListener("build", this.populateUriFromAccessPointArn), e.addListener("build", a.validatePopulateUriFromArn);
                        return
                    }
                    e.addListener("validate", this.validateBucketEndpoint), e.addListener("validate", this.correctBucketRegionFromCache), e.onAsync("extractError", this.requestBucketRegion), n.util.isBrowser() && e.onAsync("retry", this.reqRegionForNetworkingError)
                },
                validateScheme: function(e) {
                    var t = e.params,
                        r = e.httpRequest.endpoint.protocol;
                    if ((t.SSECustomerKey || t.CopySourceSSECustomerKey) && "https:" !== r) throw n.util.error(Error(), {
                        code: "ConfigError",
                        message: "Cannot send SSE keys over HTTP. Set 'sslEnabled'to 'true' in your configuration"
                    })
                },
                validateBucketEndpoint: function(e) {
                    if (!e.params.Bucket && e.service.config.s3BucketEndpoint) throw n.util.error(Error(), {
                        code: "ConfigError",
                        message: "Cannot send requests to root API with `s3BucketEndpoint` set."
                    })
                },
                validateArnRegion: function(e) {
                    a.validateArnRegion(e, {
                        allowFipsEndpoint: !0
                    })
                },
                validateArnResourceType: function(e) {
                    var t = e._parsedArn.resource;
                    if (0 !== t.indexOf("accesspoint:") && 0 !== t.indexOf("accesspoint/")) throw n.util.error(Error(), {
                        code: "InvalidARN",
                        message: "ARN resource should begin with 'accesspoint/'"
                    })
                },
                validateBucketName: function(e) {
                    var t = e.service.getSignatureVersion(e),
                        r = e.params && e.params.Bucket,
                        o = e.params && e.params.Key,
                        i = r && r.indexOf("/");
                    if (r && i >= 0) {
                        if ("string" == typeof o && i > 0) {
                            e.params = n.util.copy(e.params);
                            var a = r.substr(i + 1) || "";
                            e.params.Key = a + "/" + o, e.params.Bucket = r.substr(0, i)
                        } else if ("v4" === t) throw n.util.error(Error(), {
                            code: "InvalidBucket",
                            message: "Bucket names cannot contain forward slashes. Bucket: " + r
                        })
                    }
                },
                isValidAccelerateOperation: function(e) {
                    return -1 === ["createBucket", "deleteBucket", "listBuckets"].indexOf(e)
                },
                optInUsEast1RegionalEndpoint: function(e) {
                    var t = e.service,
                        r = t.config;
                    if (r.s3UsEast1RegionalEndpoint = i(t._originalConfig, {
                            env: "AWS_S3_US_EAST_1_REGIONAL_ENDPOINT",
                            sharedConfig: "s3_us_east_1_regional_endpoint",
                            clientConfig: "s3UsEast1RegionalEndpoint"
                        }), !(t._originalConfig || {}).endpoint && "us-east-1" === e.httpRequest.region && "regional" === r.s3UsEast1RegionalEndpoint && e.httpRequest.endpoint.hostname.indexOf("s3.amazonaws.com") >= 0) {
                        var n = r.endpoint.indexOf(".amazonaws.com");
                        regionalEndpoint = r.endpoint.substring(0, n) + ".us-east-1" + r.endpoint.substring(n), e.httpRequest.updateEndpoint(regionalEndpoint)
                    }
                },
                populateURI: function(e) {
                    var t = e.httpRequest,
                        r = e.params.Bucket,
                        n = e.service,
                        o = t.endpoint;
                    if (r && !n.pathStyleBucketName(r)) {
                        n.config.useAccelerateEndpoint && n.isValidAccelerateOperation(e.operation) ? n.config.useDualstackEndpoint ? o.hostname = r + ".s3-accelerate.dualstack.amazonaws.com" : o.hostname = r + ".s3-accelerate.amazonaws.com" : n.config.s3BucketEndpoint || (o.hostname = r + "." + o.hostname);
                        var i = o.port;
                        80 !== i && 443 !== i ? o.host = o.hostname + ":" + o.port : o.host = o.hostname, t.virtualHostedBucket = r, n.removeVirtualHostedBucketFromPath(e)
                    }
                },
                removeVirtualHostedBucketFromPath: function(e) {
                    var t = e.httpRequest,
                        r = t.virtualHostedBucket;
                    if (r && t.path) {
                        if (e.params && e.params.Key) {
                            var o = "/" + n.util.uriEscapePath(e.params.Key);
                            if (0 === t.path.indexOf(o) && (t.path.length === o.length || "?" === t.path[o.length])) return
                        }
                        t.path = t.path.replace(RegExp("/" + r), ""), "/" !== t.path[0] && (t.path = "/" + t.path)
                    }
                },
                populateUriFromAccessPointArn: function(e) {
                    var t = e._parsedArn,
                        r = "s3-outposts" === t.service,
                        o = "s3-object-lambda" === t.service,
                        i = r ? "." + t.outpostId : "",
                        a = r ? "s3-outposts" : "s3-accesspoint",
                        c = !r && e.service.config.useFipsEndpoint ? "-fips" : "",
                        u = !r && e.service.config.useDualstackEndpoint ? ".dualstack" : "",
                        l = e.httpRequest.endpoint,
                        p = s.getEndpointSuffix(t.region),
                        d = e.service.config.s3UseArnRegion;
                    if (l.hostname = [t.accessPoint + "-" + t.accountId + i, a + c + u, d ? t.region : e.service.config.region, p].join("."), o) {
                        var a = "s3-object-lambda",
                            m = t.resource.split("/")[1],
                            c = e.service.config.useFipsEndpoint ? "-fips" : "";
                        l.hostname = [m + "-" + t.accountId, a + c, d ? t.region : e.service.config.region, p].join(".")
                    }
                    l.host = l.hostname;
                    var h = n.util.uriEscape(e.params.Bucket),
                        f = e.httpRequest.path;
                    e.httpRequest.path = f.replace(RegExp("/" + h), ""), "/" !== e.httpRequest.path[0] && (e.httpRequest.path = "/" + e.httpRequest.path), e.httpRequest.region = t.region
                },
                addExpect100Continue: function(e) {
                    var t = e.httpRequest.headers["Content-Length"];
                    n.util.isNode() && (t >= 1048576 || e.params.Body instanceof n.util.stream.Stream) && (e.httpRequest.headers.Expect = "100-continue")
                },
                addContentType: function(e) {
                    var t = e.httpRequest;
                    if ("GET" === t.method || "HEAD" === t.method) {
                        delete t.headers["Content-Type"];
                        return
                    }
                    t.headers["Content-Type"] || (t.headers["Content-Type"] = "application/octet-stream");
                    var r = t.headers["Content-Type"];
                    n.util.isBrowser() && ("string" != typeof t.body || r.match(/;\s*charset=/) ? t.headers["Content-Type"] = r.replace(/(;\s*charset=)(.+)$/, function(e, t, r) {
                        return t + r.toUpperCase()
                    }) : t.headers["Content-Type"] += "; charset=UTF-8")
                },
                willComputeChecksums: function(e) {
                    var t = e.service.api.operations[e.operation].input.members,
                        r = e.httpRequest.body,
                        o = e.service.config.computeChecksums && t.ContentMD5 && !e.params.ContentMD5 && r && (n.util.Buffer.isBuffer(e.httpRequest.body) || "string" == typeof e.httpRequest.body);
                    return !!(o && e.service.shouldDisableBodySigning(e) && !e.isPresigned() || o && "s3" === this.getSignatureVersion(e) && e.isPresigned())
                },
                computeContentMd5: function(e) {
                    if (e.service.willComputeChecksums(e)) {
                        var t = n.util.crypto.md5(e.httpRequest.body, "base64");
                        e.httpRequest.headers["Content-MD5"] = t
                    }
                },
                computeSseCustomerKeyMd5: function(e) {
                    n.util.each({
                        SSECustomerKey: "x-amz-server-side-encryption-customer-key-MD5",
                        CopySourceSSECustomerKey: "x-amz-copy-source-server-side-encryption-customer-key-MD5"
                    }, function(t, r) {
                        if (e.params[t]) {
                            var o = n.util.crypto.md5(e.params[t], "base64");
                            e.httpRequest.headers[r] = o
                        }
                    })
                },
                pathStyleBucketName: function(e) {
                    return !!this.config.s3ForcePathStyle || !this.config.s3BucketEndpoint && (!a.dnsCompatibleBucketName(e) || !!(this.config.sslEnabled && e.match(/\./)))
                },
                extractErrorFrom200Response: function(e) {
                    if (c[e.request.operation]) {
                        var t = e.httpResponse;
                        if (t.body && t.body.toString().match("<Error>")) throw e.data = null, (this.service ? this.service : this).extractError(e), e.error;
                        if (!t.body || !t.body.toString().match(/<[\w_]/)) throw e.data = null, n.util.error(Error(), {
                            code: "InternalError",
                            message: "S3 aborted request"
                        })
                    }
                },
                retryableError: function(e, t) {
                    return !!c[t.operation] && 200 === e.statusCode || (!t._requestRegionForBucket || !t.service.bucketRegionCache[t._requestRegionForBucket]) && (!!e && "RequestTimeout" === e.code || (e && -1 != u.indexOf(e.code) && e.region && e.region != t.httpRequest.region ? (t.httpRequest.region = e.region, 301 === e.statusCode && t.service.updateReqBucketRegion(t), !0) : n.Service.prototype.retryableError.call(this, e, t)))
                },
                updateReqBucketRegion: function(e, t) {
                    var r = e.httpRequest;
                    if ("string" == typeof t && t.length && (r.region = t), r.endpoint.host.match(/s3(?!-accelerate).*\.amazonaws\.com$/)) {
                        var o = e.service,
                            i = o.config,
                            a = i.s3BucketEndpoint;
                        a && delete i.s3BucketEndpoint;
                        var s = n.util.copy(i);
                        delete s.endpoint, s.region = r.region, r.endpoint = new n.S3(s).endpoint, o.populateURI(e), i.s3BucketEndpoint = a, r.headers.Host = r.endpoint.host, "validate" === e._asm.currentState && (e.removeListener("build", o.populateURI), e.addListener("build", o.removeVirtualHostedBucketFromPath))
                    }
                },
                extractData: function(e) {
                    var t = e.request;
                    if ("getBucketLocation" === t.operation) {
                        var r = e.httpResponse.body.toString().match(/>(.+)<\/Location/);
                        delete e.data._, r ? e.data.LocationConstraint = r[1] : e.data.LocationConstraint = ""
                    }
                    var n = t.params.Bucket || null;
                    if ("deleteBucket" !== t.operation || "string" != typeof n || e.error) {
                        var o = (e.httpResponse.headers || {})["x-amz-bucket-region"] || null;
                        if (!o && "createBucket" === t.operation && !e.error) {
                            var i = t.params.CreateBucketConfiguration;
                            o = i ? "EU" === i.LocationConstraint ? "eu-west-1" : i.LocationConstraint : "us-east-1"
                        }
                        o && n && o !== t.service.bucketRegionCache[n] && (t.service.bucketRegionCache[n] = o)
                    } else t.service.clearBucketRegionCache(n);
                    t.service.extractRequestIds(e)
                },
                extractError: function(e) {
                    var t, r = {
                            304: "NotModified",
                            403: "Forbidden",
                            400: "BadRequest",
                            404: "NotFound"
                        },
                        o = e.request,
                        i = e.httpResponse.statusCode,
                        a = e.httpResponse.body || "",
                        s = (e.httpResponse.headers || {})["x-amz-bucket-region"] || null,
                        c = o.params.Bucket || null,
                        u = o.service.bucketRegionCache;
                    if (s && c && s !== u[c] && (u[c] = s), r[i] && 0 === a.length) c && !s && (t = u[c] || null) !== o.httpRequest.region && (s = t), e.error = n.util.error(Error(), {
                        code: r[i],
                        message: null,
                        region: s
                    });
                    else {
                        var l = new n.XML.Parser().parse(a.toString());
                        l.Region && !s ? (s = l.Region, c && s !== u[c] && (u[c] = s)) : !c || s || l.Region || (t = u[c] || null) === o.httpRequest.region || (s = t), e.error = n.util.error(Error(), {
                            code: l.Code || i,
                            message: l.Message || null,
                            region: s
                        })
                    }
                    o.service.extractRequestIds(e)
                },
                requestBucketRegion: function(e, t) {
                    var r = e.error,
                        o = e.request,
                        i = o.params.Bucket || null;
                    if (!r || !i || r.region || "listObjects" === o.operation || n.util.isNode() && "headBucket" === o.operation || 400 === r.statusCode && "headObject" !== o.operation || -1 === u.indexOf(r.code)) return t();
                    var a = n.util.isNode() ? "headBucket" : "listObjects",
                        s = {
                            Bucket: i
                        };
                    "listObjects" === a && (s.MaxKeys = 0);
                    var c = o.service[a](s);
                    c._requestRegionForBucket = i, c.send(function() {
                        var e = o.service.bucketRegionCache[i] || null;
                        r.region = e, t()
                    })
                },
                reqRegionForNetworkingError: function(e, t) {
                    if (!n.util.isBrowser()) return t();
                    var r = e.error,
                        o = e.request,
                        i = o.params.Bucket;
                    if (!r || "NetworkingError" !== r.code || !i || "us-east-1" === o.httpRequest.region) return t();
                    var s = o.service,
                        c = s.bucketRegionCache,
                        u = c[i] || null;
                    if (u && u !== o.httpRequest.region) s.updateReqBucketRegion(o, u), t();
                    else if (a.dnsCompatibleBucketName(i)) {
                        if (o.httpRequest.virtualHostedBucket) {
                            var l = s.listObjects({
                                Bucket: i,
                                MaxKeys: 0
                            });
                            s.updateReqBucketRegion(l, "us-east-1"), l._requestRegionForBucket = i, l.send(function() {
                                var e = s.bucketRegionCache[i] || null;
                                e && e !== o.httpRequest.region && s.updateReqBucketRegion(o, e), t()
                            })
                        } else t()
                    } else s.updateReqBucketRegion(o, "us-east-1"), "us-east-1" !== c[i] && (c[i] = "us-east-1"), t()
                },
                bucketRegionCache: {},
                clearBucketRegionCache: function(e) {
                    var t = this.bucketRegionCache;
                    e ? "string" == typeof e && (e = [e]) : e = Object.keys(t);
                    for (var r = 0; r < e.length; r++) delete t[e[r]];
                    return t
                },
                correctBucketRegionFromCache: function(e) {
                    var t = e.params.Bucket || null;
                    if (t) {
                        var r = e.service,
                            n = e.httpRequest.region,
                            o = r.bucketRegionCache[t];
                        o && o !== n && r.updateReqBucketRegion(e, o)
                    }
                },
                extractRequestIds: function(e) {
                    var t = e.httpResponse.headers ? e.httpResponse.headers["x-amz-id-2"] : null,
                        r = e.httpResponse.headers ? e.httpResponse.headers["x-amz-cf-id"] : null;
                    e.extendedRequestId = t, e.cfId = r, e.error && (e.error.requestId = e.requestId || null, e.error.extendedRequestId = t, e.error.cfId = r)
                },
                getSignedUrl: function(e, t, r) {
                    var o = (t = n.util.copy(t || {})).Expires || 900;
                    if ("number" != typeof o) throw n.util.error(Error(), {
                        code: "InvalidParameterException",
                        message: "The expiration must be a number, received " + typeof o
                    });
                    delete t.Expires;
                    var i = this.makeRequest(e, t);
                    if (!r) return i.presign(o, r);
                    n.util.defer(function() {
                        i.presign(o, r)
                    })
                },
                createPresignedPost: function(e, t) {
                    "function" == typeof e && void 0 === t && (t = e, e = null), e = n.util.copy(e || {});
                    var r = this.config.params || {},
                        o = e.Bucket || r.Bucket,
                        i = this,
                        a = this.config,
                        s = n.util.copy(this.endpoint);

                    function c() {
                        return {
                            url: n.util.urlFormat(s),
                            fields: i.preparePostFields(a.credentials, a.region, o, e.Fields, e.Conditions, e.Expires)
                        }
                    }
                    if (a.s3BucketEndpoint || (s.pathname = "/" + o), !t) return c();
                    a.getCredentials(function(e) {
                        if (e) t(e);
                        else try {
                            t(null, c())
                        } catch (e) {
                            t(e)
                        }
                    })
                },
                preparePostFields: function(e, t, r, i, a, s) {
                    var c = this.getSkewCorrectedDate();
                    if (!e || !t || !r) throw Error("Unable to create a POST object policy without a bucket, region, and credentials");
                    i = n.util.copy(i || {}), a = (a || []).slice(0), s = s || 3600;
                    var u = n.util.date.iso8601(c).replace(/[:\-]|\.\d{3}/g, ""),
                        l = u.substr(0, 8),
                        p = o.createScope(l, t, "s3"),
                        d = e.accessKeyId + "/" + p;
                    for (var m in i.bucket = r, i["X-Amz-Algorithm"] = "AWS4-HMAC-SHA256", i["X-Amz-Credential"] = d, i["X-Amz-Date"] = u, e.sessionToken && (i["X-Amz-Security-Token"] = e.sessionToken), i)
                        if (i.hasOwnProperty(m)) {
                            var h = {};
                            h[m] = i[m], a.push(h)
                        }
                    return i.Policy = this.preparePostPolicy(new Date(c.valueOf() + 1e3 * s), a), i["X-Amz-Signature"] = n.util.crypto.hmac(o.getSigningKey(e, l, t, "s3", !0), i.Policy, "hex"), i
                },
                preparePostPolicy: function(e, t) {
                    return n.util.base64.encode(JSON.stringify({
                        expiration: n.util.date.iso8601(e),
                        conditions: t
                    }))
                },
                prepareSignedUrl: function(e) {
                    e.addListener("validate", e.service.noPresignedContentLength), e.removeListener("build", e.service.addContentType), e.params.Body ? e.addListener("afterBuild", n.EventListeners.Core.COMPUTE_SHA256) : e.removeListener("build", e.service.computeContentMd5)
                },
                disableBodySigning: function(e) {
                    var t = e.httpRequest.headers;
                    Object.prototype.hasOwnProperty.call(t, "presigned-expires") || (t["X-Amz-Content-Sha256"] = "UNSIGNED-PAYLOAD")
                },
                noPresignedContentLength: function(e) {
                    if (void 0 !== e.params.ContentLength) throw n.util.error(Error(), {
                        code: "UnexpectedParameter",
                        message: "ContentLength is not supported in pre-signed URLs."
                    })
                },
                createBucket: function(e, t) {
                    "function" != typeof e && e || (t = t || e, e = {});
                    var r = this.endpoint.hostname,
                        o = n.util.copy(e);
                    return r === this.api.globalEndpoint || e.CreateBucketConfiguration || (o.CreateBucketConfiguration = {
                        LocationConstraint: this.config.region
                    }), this.makeRequest("createBucket", o, t)
                },
                writeGetObjectResponse: function(e, t) {
                    var r = this.makeRequest("writeGetObjectResponse", n.util.copy(e), t),
                        o = this.endpoint.hostname;
                    return o = -1 !== o.indexOf(this.config.region) ? o.replace("s3.", l + ".") : o.replace("s3.", l + "." + this.config.region + "."), r.httpRequest.endpoint = new n.Endpoint(o, this.config), r
                },
                upload: function(e, t, r) {
                    "function" == typeof t && void 0 === r && (r = t, t = null), t = t || {}, t = n.util.merge(t || {}, {
                        service: this,
                        params: e
                    });
                    var o = new n.S3.ManagedUpload(t);
                    return "function" == typeof r && o.send(r), o
                }
            }), n.S3.addPromisesToClass = function(e) {
                this.prototype.getSignedUrlPromise = n.util.promisifyMethod("getSignedUrl", e)
            }, n.S3.deletePromisesFromClass = function() {
                delete this.prototype.getSignedUrlPromise
            }, n.util.addPromises(n.S3)
        },
        85133: function(e, t, r) {
            var n = r(83454),
                o = r(79614),
                i = r(41404),
                a = {
                    isArnInParam: function(e, t) {
                        var r = ((e.service.api.operations[e.operation] || {}).input || {}).members || {};
                        return !!e.params[t] && !!r[t] && o.util.ARN.validate(e.params[t])
                    },
                    validateArnService: function(e) {
                        var t = e._parsedArn;
                        if ("s3" !== t.service && "s3-outposts" !== t.service && "s3-object-lambda" !== t.service) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: "expect 's3' or 's3-outposts' or 's3-object-lambda' in ARN service component"
                        })
                    },
                    validateArnAccount: function(e) {
                        var t = e._parsedArn;
                        if (!/[0-9]{12}/.exec(t.accountId)) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: 'ARN accountID does not match regex "[0-9]{12}"'
                        })
                    },
                    validateS3AccessPointArn: function(e) {
                        var t = e._parsedArn,
                            r = t.resource[11];
                        if (2 !== t.resource.split(r).length) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: "Access Point ARN should have one resource accesspoint/{accesspointName}"
                        });
                        var n = t.resource.split(r)[1],
                            i = n + "-" + t.accountId;
                        if (!a.dnsCompatibleBucketName(i) || i.match(/\./)) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: "Access point resource in ARN is not DNS compatible. Got " + n
                        });
                        e._parsedArn.accessPoint = n
                    },
                    validateOutpostsArn: function(e) {
                        var t = e._parsedArn;
                        if (0 !== t.resource.indexOf("outpost:") && 0 !== t.resource.indexOf("outpost/")) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: "ARN resource should begin with 'outpost/'"
                        });
                        var r = t.resource[7],
                            n = t.resource.split(r)[1];
                        if (!RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(n)) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: "Outpost resource in ARN is not DNS compatible. Got " + n
                        });
                        e._parsedArn.outpostId = n
                    },
                    validateOutpostsAccessPointArn: function(e) {
                        var t = e._parsedArn,
                            r = t.resource[7];
                        if (4 !== t.resource.split(r).length) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: "Outposts ARN should have two resources outpost/{outpostId}/accesspoint/{accesspointName}"
                        });
                        var n = t.resource.split(r)[3],
                            i = n + "-" + t.accountId;
                        if (!a.dnsCompatibleBucketName(i) || i.match(/\./)) throw o.util.error(Error(), {
                            code: "InvalidARN",
                            message: "Access point resource in ARN is not DNS compatible. Got " + n
                        });
                        e._parsedArn.accessPoint = n
                    },
                    validateArnRegion: function(e, t) {
                        void 0 === t && (t = {});
                        var r = a.loadUseArnRegionConfig(e),
                            n = e._parsedArn.region,
                            s = e.service.config.region,
                            c = e.service.config.useFipsEndpoint,
                            u = t.allowFipsEndpoint || !1;
                        if (!n) {
                            var l = "ARN region is empty";
                            throw "s3" === e._parsedArn.service && (l += "\nYou may want to use multi-regional ARN. The feature is not supported in current SDK. You should consider switching to V3(https://github.com/aws/aws-sdk-js-v3)."), o.util.error(Error(), {
                                code: "InvalidARN",
                                message: l
                            })
                        }
                        if (c && !u) throw o.util.error(Error(), {
                            code: "InvalidConfiguration",
                            message: "ARN endpoint is not compatible with FIPS region"
                        });
                        if (n.indexOf("fips") >= 0) throw o.util.error(Error(), {
                            code: "InvalidConfiguration",
                            message: "FIPS region not allowed in ARN"
                        });
                        if (r || n === s) {
                            if (r && i.getEndpointSuffix(n) !== i.getEndpointSuffix(s)) throw o.util.error(Error(), {
                                code: "InvalidConfiguration",
                                message: "Configured region and access point region not in same partition"
                            })
                        } else throw o.util.error(Error(), {
                            code: "InvalidConfiguration",
                            message: "Configured region conflicts with access point region"
                        });
                        if (e.service.config.useAccelerateEndpoint) throw o.util.error(Error(), {
                            code: "InvalidConfiguration",
                            message: "useAccelerateEndpoint config is not supported with access point ARN"
                        });
                        if ("s3-outposts" === e._parsedArn.service && e.service.config.useDualstackEndpoint) throw o.util.error(Error(), {
                            code: "InvalidConfiguration",
                            message: "Dualstack is not supported with outposts access point ARN"
                        })
                    },
                    loadUseArnRegionConfig: function(e) {
                        var t = "AWS_S3_USE_ARN_REGION",
                            r = "s3_use_arn_region",
                            i = !0,
                            a = e.service._originalConfig || {};
                        if (void 0 !== e.service.config.s3UseArnRegion) return e.service.config.s3UseArnRegion;
                        if (void 0 !== a.s3UseArnRegion) i = !0 === a.s3UseArnRegion;
                        else if (o.util.isNode()) {
                            if (n.env[t]) {
                                var s = n.env[t].trim().toLowerCase();
                                if (0 > ["false", "true"].indexOf(s)) throw o.util.error(Error(), {
                                    code: "InvalidConfiguration",
                                    message: t + " only accepts true or false. Got " + n.env[t],
                                    retryable: !1
                                });
                                i = "true" === s
                            } else {
                                var c = {};
                                try {
                                    c = o.util.getProfilesFromSharedConfig(o.util.iniLoader)[n.env.AWS_PROFILE || o.util.defaultProfile]
                                } catch (e) {}
                                if (c[r]) {
                                    if (0 > ["false", "true"].indexOf(c[r].trim().toLowerCase())) throw o.util.error(Error(), {
                                        code: "InvalidConfiguration",
                                        message: r + " only accepts true or false. Got " + c[r],
                                        retryable: !1
                                    });
                                    i = "true" === c[r].trim().toLowerCase()
                                }
                            }
                        }
                        return e.service.config.s3UseArnRegion = i, i
                    },
                    validatePopulateUriFromArn: function(e) {
                        if (e.service._originalConfig && e.service._originalConfig.endpoint) throw o.util.error(Error(), {
                            code: "InvalidConfiguration",
                            message: "Custom endpoint is not compatible with access point ARN"
                        });
                        if (e.service.config.s3ForcePathStyle) throw o.util.error(Error(), {
                            code: "InvalidConfiguration",
                            message: "Cannot construct path-style endpoint with access point"
                        })
                    },
                    dnsCompatibleBucketName: function(e) {
                        var t = RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/),
                            r = RegExp(/(\d+\.){3}\d+/),
                            n = RegExp(/\.\./);
                        return !(!e.match(t) || e.match(r) || e.match(n))
                    }
                };
            e.exports = a
        },
        44456: function(e, t, r) {
            var n = r(79614),
                o = r(65456);
            n.util.update(n.STS.prototype, {
                credentialsFrom: function(e, t) {
                    return e ? (t || (t = new n.TemporaryCredentials), t.expired = !1, t.accessKeyId = e.Credentials.AccessKeyId, t.secretAccessKey = e.Credentials.SecretAccessKey, t.sessionToken = e.Credentials.SessionToken, t.expireTime = e.Credentials.Expiration, t) : null
                },
                assumeRoleWithWebIdentity: function(e, t) {
                    return this.makeUnauthenticatedRequest("assumeRoleWithWebIdentity", e, t)
                },
                assumeRoleWithSAML: function(e, t) {
                    return this.makeUnauthenticatedRequest("assumeRoleWithSAML", e, t)
                },
                setupRequestListeners: function(e) {
                    e.addListener("validate", this.optInRegionalEndpoint, !0)
                },
                optInRegionalEndpoint: function(e) {
                    var t = e.service,
                        r = t.config;
                    if (r.stsRegionalEndpoints = o(t._originalConfig, {
                            env: "AWS_STS_REGIONAL_ENDPOINTS",
                            sharedConfig: "sts_regional_endpoints",
                            clientConfig: "stsRegionalEndpoints"
                        }), "regional" === r.stsRegionalEndpoints && t.isGlobalEndpoint) {
                        if (!r.region) throw n.util.error(Error(), {
                            code: "ConfigError",
                            message: "Missing region in config"
                        });
                        var i = r.endpoint.indexOf(".amazonaws.com"),
                            a = r.endpoint.substring(0, i) + "." + r.region + r.endpoint.substring(i);
                        e.httpRequest.updateEndpoint(a), e.httpRequest.region = r.region
                    }
                }
            })
        },
        64114: function(e, t, r) {
            var n = r(79614);
            n.Signers.Bearer = n.util.inherit(n.Signers.RequestSigner, {
                constructor: function(e) {
                    n.Signers.RequestSigner.call(this, e)
                },
                addAuthorization: function(e) {
                    this.request.headers.Authorization = "Bearer " + e.token
                }
            })
        },
        79688: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit,
                i = "presigned-expires";

            function a(e) {
                var t = e.httpRequest.headers[i],
                    r = e.service.getSignerClass(e);
                if (delete e.httpRequest.headers["User-Agent"], delete e.httpRequest.headers["X-Amz-User-Agent"], r === n.Signers.V4) {
                    if (t > 604800) throw n.util.error(Error(), {
                        code: "InvalidExpiryTime",
                        message: "Presigning does not support expiry time greater than a week with SigV4 signing.",
                        retryable: !1
                    });
                    e.httpRequest.headers[i] = t
                } else if (r === n.Signers.S3) {
                    var o = e.service ? e.service.getSkewCorrectedDate() : n.util.date.getDate();
                    e.httpRequest.headers[i] = parseInt(n.util.date.unixTimestamp(o) + t, 10).toString()
                } else throw n.util.error(Error(), {
                    message: "Presigning only supports S3 or SigV4 signing.",
                    code: "UnsupportedSigner",
                    retryable: !1
                })
            }

            function s(e) {
                var t = e.httpRequest.endpoint,
                    r = n.util.urlParse(e.httpRequest.path),
                    o = {};
                r.search && (o = n.util.queryStringParse(r.search.substr(1)));
                var a = e.httpRequest.headers.Authorization.split(" ");
                if ("AWS" === a[0]) a = a[1].split(":"), o.Signature = a.pop(), o.AWSAccessKeyId = a.join(":"), n.util.each(e.httpRequest.headers, function(e, t) {
                    e === i && (e = "Expires"), 0 === e.indexOf("x-amz-meta-") && (delete o[e], e = e.toLowerCase()), o[e] = t
                }), delete e.httpRequest.headers[i], delete o.Authorization, delete o.Host;
                else if ("AWS4-HMAC-SHA256" === a[0]) {
                    a.shift();
                    var s = a.join(" ").match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
                    o["X-Amz-Signature"] = s, delete o.Expires
                }
                t.pathname = r.pathname, t.search = n.util.queryParamsToString(o)
            }
            n.Signers.Presign = o({
                sign: function(e, t, r) {
                    if (e.httpRequest.headers[i] = t || 3600, e.on("build", a), e.on("sign", s), e.removeListener("afterBuild", n.EventListeners.Core.SET_CONTENT_LENGTH), e.removeListener("afterBuild", n.EventListeners.Core.COMPUTE_SHA256), e.emit("beforePresign", [e]), r) e.build(function() {
                        this.response.error ? r(this.response.error) : r(null, n.util.urlFormat(e.httpRequest.endpoint))
                    });
                    else {
                        if (e.build(), e.response.error) throw e.response.error;
                        return n.util.urlFormat(e.httpRequest.endpoint)
                    }
                }
            }), e.exports = n.Signers.Presign
        },
        92604: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit;
            n.Signers.RequestSigner = o({
                constructor: function(e) {
                    this.request = e
                },
                setServiceClientId: function(e) {
                    this.serviceClientId = e
                },
                getServiceClientId: function() {
                    return this.serviceClientId
                }
            }), n.Signers.RequestSigner.getVersion = function(e) {
                switch (e) {
                    case "v2":
                        return n.Signers.V2;
                    case "v3":
                        return n.Signers.V3;
                    case "s3v4":
                    case "v4":
                        return n.Signers.V4;
                    case "s3":
                        return n.Signers.S3;
                    case "v3https":
                        return n.Signers.V3Https;
                    case "bearer":
                        return n.Signers.Bearer
                }
                throw Error("Unknown signing version " + e)
            }, r(97194), r(56342), r(50416), r(77203), r(51190), r(79688), r(64114)
        },
        51190: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit;
            n.Signers.S3 = o(n.Signers.RequestSigner, {
                subResources: {
                    acl: 1,
                    accelerate: 1,
                    analytics: 1,
                    cors: 1,
                    lifecycle: 1,
                    delete: 1,
                    inventory: 1,
                    location: 1,
                    logging: 1,
                    metrics: 1,
                    notification: 1,
                    partNumber: 1,
                    policy: 1,
                    requestPayment: 1,
                    replication: 1,
                    restore: 1,
                    tagging: 1,
                    torrent: 1,
                    uploadId: 1,
                    uploads: 1,
                    versionId: 1,
                    versioning: 1,
                    versions: 1,
                    website: 1
                },
                responseHeaders: {
                    "response-content-type": 1,
                    "response-content-language": 1,
                    "response-expires": 1,
                    "response-cache-control": 1,
                    "response-content-disposition": 1,
                    "response-content-encoding": 1
                },
                addAuthorization: function(e, t) {
                    this.request.headers["presigned-expires"] || (this.request.headers["X-Amz-Date"] = n.util.date.rfc822(t)), e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken);
                    var r = this.sign(e.secretAccessKey, this.stringToSign()),
                        o = "AWS " + e.accessKeyId + ":" + r;
                    this.request.headers.Authorization = o
                },
                stringToSign: function() {
                    var e = this.request,
                        t = [];
                    t.push(e.method), t.push(e.headers["Content-MD5"] || ""), t.push(e.headers["Content-Type"] || ""), t.push(e.headers["presigned-expires"] || "");
                    var r = this.canonicalizedAmzHeaders();
                    return r && t.push(r), t.push(this.canonicalizedResource()), t.join("\n")
                },
                canonicalizedAmzHeaders: function() {
                    var e = [];
                    n.util.each(this.request.headers, function(t) {
                        t.match(/^x-amz-/i) && e.push(t)
                    }), e.sort(function(e, t) {
                        return e.toLowerCase() < t.toLowerCase() ? -1 : 1
                    });
                    var t = [];
                    return n.util.arrayEach.call(this, e, function(e) {
                        t.push(e.toLowerCase() + ":" + String(this.request.headers[e]))
                    }), t.join("\n")
                },
                canonicalizedResource: function() {
                    var e = this.request,
                        t = e.path.split("?"),
                        r = t[0],
                        o = t[1],
                        i = "";
                    if (e.virtualHostedBucket && (i += "/" + e.virtualHostedBucket), i += r, o) {
                        var a = [];
                        n.util.arrayEach.call(this, o.split("&"), function(e) {
                            var t = e.split("=")[0],
                                r = e.split("=")[1];
                            if (this.subResources[t] || this.responseHeaders[t]) {
                                var n = {
                                    name: t
                                };
                                void 0 !== r && (this.subResources[t] ? n.value = r : n.value = decodeURIComponent(r)), a.push(n)
                            }
                        }), a.sort(function(e, t) {
                            return e.name < t.name ? -1 : 1
                        }), a.length && (o = [], n.util.arrayEach(a, function(e) {
                            void 0 === e.value ? o.push(e.name) : o.push(e.name + "=" + e.value)
                        }), i += "?" + o.join("&"))
                    }
                    return i
                },
                sign: function(e, t) {
                    return n.util.crypto.hmac(e, t, "base64", "sha1")
                }
            }), e.exports = n.Signers.S3
        },
        97194: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit;
            n.Signers.V2 = o(n.Signers.RequestSigner, {
                addAuthorization: function(e, t) {
                    t || (t = n.util.date.getDate());
                    var r = this.request;
                    r.params.Timestamp = n.util.date.iso8601(t), r.params.SignatureVersion = "2", r.params.SignatureMethod = "HmacSHA256", r.params.AWSAccessKeyId = e.accessKeyId, e.sessionToken && (r.params.SecurityToken = e.sessionToken), delete r.params.Signature, r.params.Signature = this.signature(e), r.body = n.util.queryParamsToString(r.params), r.headers["Content-Length"] = r.body.length
                },
                signature: function(e) {
                    return n.util.crypto.hmac(e.secretAccessKey, this.stringToSign(), "base64")
                },
                stringToSign: function() {
                    var e = [];
                    return e.push(this.request.method), e.push(this.request.endpoint.host.toLowerCase()), e.push(this.request.pathname()), e.push(n.util.queryParamsToString(this.request.params)), e.join("\n")
                }
            }), e.exports = n.Signers.V2
        },
        56342: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit;
            n.Signers.V3 = o(n.Signers.RequestSigner, {
                addAuthorization: function(e, t) {
                    var r = n.util.date.rfc822(t);
                    this.request.headers["X-Amz-Date"] = r, e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken), this.request.headers["X-Amzn-Authorization"] = this.authorization(e, r)
                },
                authorization: function(e) {
                    return "AWS3 AWSAccessKeyId=" + e.accessKeyId + ",Algorithm=HmacSHA256,SignedHeaders=" + this.signedHeaders() + ",Signature=" + this.signature(e)
                },
                signedHeaders: function() {
                    var e = [];
                    return n.util.arrayEach(this.headersToSign(), function(t) {
                        e.push(t.toLowerCase())
                    }), e.sort().join(";")
                },
                canonicalHeaders: function() {
                    var e = this.request.headers,
                        t = [];
                    return n.util.arrayEach(this.headersToSign(), function(r) {
                        t.push(r.toLowerCase().trim() + ":" + String(e[r]).trim())
                    }), t.sort().join("\n") + "\n"
                },
                headersToSign: function() {
                    var e = [];
                    return n.util.each(this.request.headers, function(t) {
                        ("Host" === t || "Content-Encoding" === t || t.match(/^X-Amz/i)) && e.push(t)
                    }), e
                },
                signature: function(e) {
                    return n.util.crypto.hmac(e.secretAccessKey, this.stringToSign(), "base64")
                },
                stringToSign: function() {
                    var e = [];
                    return e.push(this.request.method), e.push("/"), e.push(""), e.push(this.canonicalHeaders()), e.push(this.request.body), n.util.crypto.sha256(e.join("\n"))
                }
            }), e.exports = n.Signers.V3
        },
        50416: function(e, t, r) {
            var n = r(79614),
                o = n.util.inherit;
            r(56342), n.Signers.V3Https = o(n.Signers.V3, {
                authorization: function(e) {
                    return "AWS3-HTTPS AWSAccessKeyId=" + e.accessKeyId + ",Algorithm=HmacSHA256,Signature=" + this.signature(e)
                },
                stringToSign: function() {
                    return this.request.headers["X-Amz-Date"]
                }
            }), e.exports = n.Signers.V3Https
        },
        77203: function(e, t, r) {
            var n = r(79614),
                o = r(16914),
                i = n.util.inherit,
                a = "presigned-expires";
            n.Signers.V4 = i(n.Signers.RequestSigner, {
                constructor: function(e, t, r) {
                    n.Signers.RequestSigner.call(this, e), this.serviceName = t, r = r || {}, this.signatureCache = "boolean" != typeof r.signatureCache || r.signatureCache, this.operation = r.operation, this.signatureVersion = r.signatureVersion
                },
                algorithm: "AWS4-HMAC-SHA256",
                addAuthorization: function(e, t) {
                    var r = n.util.date.iso8601(t).replace(/[:\-]|\.\d{3}/g, "");
                    this.isPresigned() ? this.updateForPresigned(e, r) : this.addHeaders(e, r), this.request.headers.Authorization = this.authorization(e, r)
                },
                addHeaders: function(e, t) {
                    this.request.headers["X-Amz-Date"] = t, e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken)
                },
                updateForPresigned: function(e, t) {
                    var r = this.credentialString(t),
                        o = {
                            "X-Amz-Date": t,
                            "X-Amz-Algorithm": this.algorithm,
                            "X-Amz-Credential": e.accessKeyId + "/" + r,
                            "X-Amz-Expires": this.request.headers[a],
                            "X-Amz-SignedHeaders": this.signedHeaders()
                        };
                    e.sessionToken && (o["X-Amz-Security-Token"] = e.sessionToken), this.request.headers["Content-Type"] && (o["Content-Type"] = this.request.headers["Content-Type"]), this.request.headers["Content-MD5"] && (o["Content-MD5"] = this.request.headers["Content-MD5"]), this.request.headers["Cache-Control"] && (o["Cache-Control"] = this.request.headers["Cache-Control"]), n.util.each.call(this, this.request.headers, function(e, t) {
                        if (e !== a && this.isSignableHeader(e)) {
                            var r = e.toLowerCase();
                            0 === r.indexOf("x-amz-meta-") ? o[r] = t : 0 === r.indexOf("x-amz-") && (o[e] = t)
                        }
                    });
                    var i = this.request.path.indexOf("?") >= 0 ? "&" : "?";
                    this.request.path += i + n.util.queryParamsToString(o)
                },
                authorization: function(e, t) {
                    var r = [],
                        n = this.credentialString(t);
                    return r.push(this.algorithm + " Credential=" + e.accessKeyId + "/" + n), r.push("SignedHeaders=" + this.signedHeaders()), r.push("Signature=" + this.signature(e, t)), r.join(", ")
                },
                signature: function(e, t) {
                    var r = o.getSigningKey(e, t.substr(0, 8), this.request.region, this.serviceName, this.signatureCache);
                    return n.util.crypto.hmac(r, this.stringToSign(t), "hex")
                },
                stringToSign: function(e) {
                    var t = [];
                    return t.push("AWS4-HMAC-SHA256"), t.push(e), t.push(this.credentialString(e)), t.push(this.hexEncodedHash(this.canonicalString())), t.join("\n")
                },
                canonicalString: function() {
                    var e = [],
                        t = this.request.pathname();
                    return "s3" !== this.serviceName && "s3v4" !== this.signatureVersion && (t = n.util.uriEscapePath(t)), e.push(this.request.method), e.push(t), e.push(this.request.search()), e.push(this.canonicalHeaders() + "\n"), e.push(this.signedHeaders()), e.push(this.hexEncodedBodyHash()), e.join("\n")
                },
                canonicalHeaders: function() {
                    var e = [];
                    n.util.each.call(this, this.request.headers, function(t, r) {
                        e.push([t, r])
                    }), e.sort(function(e, t) {
                        return e[0].toLowerCase() < t[0].toLowerCase() ? -1 : 1
                    });
                    var t = [];
                    return n.util.arrayEach.call(this, e, function(e) {
                        var r = e[0].toLowerCase();
                        if (this.isSignableHeader(r)) {
                            var o = e[1];
                            if (null == o || "function" != typeof o.toString) throw n.util.error(Error("Header " + r + " contains invalid value"), {
                                code: "InvalidHeader"
                            });
                            t.push(r + ":" + this.canonicalHeaderValues(o.toString()))
                        }
                    }), t.join("\n")
                },
                canonicalHeaderValues: function(e) {
                    return e.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "")
                },
                signedHeaders: function() {
                    var e = [];
                    return n.util.each.call(this, this.request.headers, function(t) {
                        t = t.toLowerCase(), this.isSignableHeader(t) && e.push(t)
                    }), e.sort().join(";")
                },
                credentialString: function(e) {
                    return o.createScope(e.substr(0, 8), this.request.region, this.serviceName)
                },
                hexEncodedHash: function(e) {
                    return n.util.crypto.sha256(e, "hex")
                },
                hexEncodedBodyHash: function() {
                    var e = this.request;
                    return this.isPresigned() && ["s3", "s3-object-lambda"].indexOf(this.serviceName) > -1 && !e.body ? "UNSIGNED-PAYLOAD" : e.headers["X-Amz-Content-Sha256"] ? e.headers["X-Amz-Content-Sha256"] : this.hexEncodedHash(this.request.body || "")
                },
                unsignableHeaders: ["authorization", "content-type", "content-length", "user-agent", a, "expect", "x-amzn-trace-id"],
                isSignableHeader: function(e) {
                    return 0 === e.toLowerCase().indexOf("x-amz-") || 0 > this.unsignableHeaders.indexOf(e)
                },
                isPresigned: function() {
                    return !!this.request.headers[a]
                }
            }), e.exports = n.Signers.V4
        },
        16914: function(e, t, r) {
            var n = r(79614),
                o = {},
                i = [],
                a = "aws4_request";
            e.exports = {
                createScope: function(e, t, r) {
                    return [e.substr(0, 8), t, r, a].join("/")
                },
                getSigningKey: function(e, t, r, s, c) {
                    var u = [n.util.crypto.hmac(e.secretAccessKey, e.accessKeyId, "base64"), t, r, s].join("_");
                    if ((c = !1 !== c) && u in o) return o[u];
                    var l = n.util.crypto.hmac("AWS4" + e.secretAccessKey, t, "buffer"),
                        p = n.util.crypto.hmac(l, r, "buffer"),
                        d = n.util.crypto.hmac(p, s, "buffer"),
                        m = n.util.crypto.hmac(d, a, "buffer");
                    return c && (o[u] = m, i.push(u), i.length > 50 && delete o[i.shift()]), m
                },
                emptyCache: function() {
                    o = {}, i = []
                }
            }
        },
        91793: function(e) {
            function t(e, t) {
                this.currentState = t || null, this.states = e || {}
            }
            t.prototype.runTo = function(e, t, r, n) {
                "function" == typeof e && (n = r, r = t, t = e, e = null);
                var o = this,
                    i = o.states[o.currentState];
                i.fn.call(r || o, n, function(n) {
                    if (n) {
                        if (!i.fail) return t ? t.call(r, n) : null;
                        o.currentState = i.fail
                    } else {
                        if (!i.accept) return t ? t.call(r) : null;
                        o.currentState = i.accept
                    }
                    if (o.currentState === e) return t ? t.call(r, n) : null;
                    o.runTo(e, t, r, n)
                })
            }, t.prototype.addState = function(e, t, r, n) {
                return "function" == typeof t ? (n = t, t = null, r = null) : "function" == typeof r && (n = r, r = null), this.currentState || (this.currentState = e), this.states[e] = {
                    accept: t,
                    fail: r,
                    fn: n
                }, this
            }, e.exports = t
        },
        62662: function(e, t, r) {
            var n, o = r(83454),
                i = {
                    environment: "nodejs",
                    engine: function() {
                        if (i.isBrowser() && "undefined" != typeof navigator) return navigator.userAgent;
                        var e = o.platform + "/" + o.version;
                        return o.env.AWS_EXECUTION_ENV && (e += " exec-env/" + o.env.AWS_EXECUTION_ENV), e
                    },
                    userAgent: function() {
                        var e = i.environment,
                            t = "aws-sdk-" + e + "/" + r(79614).VERSION;
                        return "nodejs" === e && (t += " " + i.engine()), t
                    },
                    uriEscape: function(e) {
                        var t = encodeURIComponent(e);
                        return (t = t.replace(/[^A-Za-z0-9_.~\-%]+/g, escape)).replace(/[*]/g, function(e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        })
                    },
                    uriEscapePath: function(e) {
                        var t = [];
                        return i.arrayEach(e.split("/"), function(e) {
                            t.push(i.uriEscape(e))
                        }), t.join("/")
                    },
                    urlParse: function(e) {
                        return i.url.parse(e)
                    },
                    urlFormat: function(e) {
                        return i.url.format(e)
                    },
                    queryStringParse: function(e) {
                        return i.querystring.parse(e)
                    },
                    queryParamsToString: function(e) {
                        var t = [],
                            r = i.uriEscape,
                            n = Object.keys(e).sort();
                        return i.arrayEach(n, function(n) {
                            var o = e[n],
                                a = r(n),
                                s = a + "=";
                            if (Array.isArray(o)) {
                                var c = [];
                                i.arrayEach(o, function(e) {
                                    c.push(r(e))
                                }), s = a + "=" + c.sort().join("&" + a + "=")
                            } else null != o && (s = a + "=" + r(o));
                            t.push(s)
                        }), t.join("&")
                    },
                    readFileSync: function(e) {
                        return i.isBrowser() ? null : r(28022).readFileSync(e, "utf-8")
                    },
                    base64: {
                        encode: function(e) {
                            if ("number" == typeof e) throw i.error(Error("Cannot base64 encode number " + e));
                            return null == e ? e : i.buffer.toBuffer(e).toString("base64")
                        },
                        decode: function(e) {
                            if ("number" == typeof e) throw i.error(Error("Cannot base64 decode number " + e));
                            return null == e ? e : i.buffer.toBuffer(e, "base64")
                        }
                    },
                    buffer: {
                        toBuffer: function(e, t) {
                            return "function" == typeof i.Buffer.from && i.Buffer.from !== Uint8Array.from ? i.Buffer.from(e, t) : new i.Buffer(e, t)
                        },
                        alloc: function(e, t, r) {
                            if ("number" != typeof e) throw Error("size passed to alloc must be a number.");
                            if ("function" == typeof i.Buffer.alloc) return i.Buffer.alloc(e, t, r);
                            var n = new i.Buffer(e);
                            return void 0 !== t && "function" == typeof n.fill && n.fill(t, void 0, void 0, r), n
                        },
                        toStream: function(e) {
                            i.Buffer.isBuffer(e) || (e = i.buffer.toBuffer(e));
                            var t = new i.stream.Readable,
                                r = 0;
                            return t._read = function(n) {
                                if (r >= e.length) return t.push(null);
                                var o = r + n;
                                o > e.length && (o = e.length), t.push(e.slice(r, o)), r = o
                            }, t
                        },
                        concat: function(e) {
                            var t, r = 0,
                                n = 0,
                                o = null;
                            for (t = 0; t < e.length; t++) r += e[t].length;
                            for (t = 0, o = i.buffer.alloc(r); t < e.length; t++) e[t].copy(o, n), n += e[t].length;
                            return o
                        }
                    },
                    string: {
                        byteLength: function(e) {
                            if (null == e) return 0;
                            if ("string" == typeof e && (e = i.buffer.toBuffer(e)), "number" == typeof e.byteLength) return e.byteLength;
                            if ("number" == typeof e.length) return e.length;
                            if ("number" == typeof e.size) return e.size;
                            if ("string" == typeof e.path) return r(28022).lstatSync(e.path).size;
                            throw i.error(Error("Cannot determine length of " + e), {
                                object: e
                            })
                        },
                        upperFirst: function(e) {
                            return e[0].toUpperCase() + e.substr(1)
                        },
                        lowerFirst: function(e) {
                            return e[0].toLowerCase() + e.substr(1)
                        }
                    },
                    ini: {
                        parse: function(e) {
                            var t, r = {};
                            return i.arrayEach(e.split(/\r?\n/), function(e) {
                                if ("[" === (e = e.split(/(^|\s)[;#]/)[0].trim())[0] && "]" === e[e.length - 1]) {
                                    if ("__proto__" === (t = e.substring(1, e.length - 1)) || "__proto__" === t.split(/\s/)[1]) throw i.error(Error("Cannot load profile name '" + t + "' from shared ini file."))
                                } else if (t) {
                                    var n = e.indexOf("="),
                                        o = e.length - 1;
                                    if (-1 !== n && 0 !== n && n !== o) {
                                        var a = e.substring(0, n).trim(),
                                            s = e.substring(n + 1).trim();
                                        r[t] = r[t] || {}, r[t][a] = s
                                    }
                                }
                            }), r
                        }
                    },
                    fn: {
                        noop: function() {},
                        callback: function(e) {
                            if (e) throw e
                        },
                        makeAsync: function(e, t) {
                            return t && t <= e.length ? e : function() {
                                var t = Array.prototype.slice.call(arguments, 0);
                                t.pop()(e.apply(null, t))
                            }
                        }
                    },
                    date: {
                        getDate: function() {
                            return (n || (n = r(79614)), n.config.systemClockOffset) ? new Date(new Date().getTime() + n.config.systemClockOffset) : new Date
                        },
                        iso8601: function(e) {
                            return void 0 === e && (e = i.date.getDate()), e.toISOString().replace(/\.\d{3}Z$/, "Z")
                        },
                        rfc822: function(e) {
                            return void 0 === e && (e = i.date.getDate()), e.toUTCString()
                        },
                        unixTimestamp: function(e) {
                            return void 0 === e && (e = i.date.getDate()), e.getTime() / 1e3
                        },
                        from: function(e) {
                            return new Date("number" == typeof e ? 1e3 * e : e)
                        },
                        format: function(e, t) {
                            return t || (t = "iso8601"), i.date[t](i.date.from(e))
                        },
                        parseTimestamp: function(e) {
                            if ("number" == typeof e || e.match(/^\d+$/)) return new Date(1e3 * e);
                            if (e.match(/^\d{4}/) || e.match(/^\w{3},/)) return new Date(e);
                            throw i.error(Error("unhandled timestamp format: " + e), {
                                code: "TimestampParserError"
                            })
                        }
                    },
                    crypto: {
                        crc32Table: [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
                        crc32: function(e) {
                            var t = i.crypto.crc32Table,
                                r = -1;
                            "string" == typeof e && (e = i.buffer.toBuffer(e));
                            for (var n = 0; n < e.length; n++) r = r >>> 8 ^ t[(r ^ e.readUInt8(n)) & 255];
                            return (-1 ^ r) >>> 0
                        },
                        hmac: function(e, t, r, n) {
                            return r || (r = "binary"), "buffer" === r && (r = void 0), n || (n = "sha256"), "string" == typeof t && (t = i.buffer.toBuffer(t)), i.crypto.lib.createHmac(n, e).update(t).digest(r)
                        },
                        md5: function(e, t, r) {
                            return i.crypto.hash("md5", e, t, r)
                        },
                        sha256: function(e, t, r) {
                            return i.crypto.hash("sha256", e, t, r)
                        },
                        hash: function(e, t, r, n) {
                            var o = i.crypto.createHash(e);
                            r || (r = "binary"), "buffer" === r && (r = void 0), "string" == typeof t && (t = i.buffer.toBuffer(t));
                            var a = i.arraySliceFn(t),
                                s = i.Buffer.isBuffer(t);
                            if (i.isBrowser() && "undefined" != typeof ArrayBuffer && t && t.buffer instanceof ArrayBuffer && (s = !0), n && "object" == typeof t && "function" == typeof t.on && !s) t.on("data", function(e) {
                                o.update(e)
                            }), t.on("error", function(e) {
                                n(e)
                            }), t.on("end", function() {
                                n(null, o.digest(r))
                            });
                            else if (n && a && !s && "undefined" != typeof FileReader) {
                                var c = 0,
                                    u = new FileReader;
                                u.onerror = function() {
                                    n(Error("Failed to read data."))
                                }, u.onload = function() {
                                    var e = new i.Buffer(new Uint8Array(u.result));
                                    o.update(e), c += e.length, u._continueReading()
                                }, u._continueReading = function() {
                                    if (c >= t.size) {
                                        n(null, o.digest(r));
                                        return
                                    }
                                    var e = c + 524288;
                                    e > t.size && (e = t.size), u.readAsArrayBuffer(a.call(t, c, e))
                                }, u._continueReading()
                            } else {
                                i.isBrowser() && "object" == typeof t && !s && (t = new i.Buffer(new Uint8Array(t)));
                                var l = o.update(t).digest(r);
                                return n && n(null, l), l
                            }
                        },
                        toHex: function(e) {
                            for (var t = [], r = 0; r < e.length; r++) t.push(("0" + e.charCodeAt(r).toString(16)).substr(-2, 2));
                            return t.join("")
                        },
                        createHash: function(e) {
                            return i.crypto.lib.createHash(e)
                        }
                    },
                    abort: {},
                    each: function(e, t) {
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r) && t.call(this, r, e[r]) === i.abort) break
                    },
                    arrayEach: function(e, t) {
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r) && t.call(this, e[r], parseInt(r, 10)) === i.abort) break
                    },
                    update: function(e, t) {
                        return i.each(t, function(t, r) {
                            e[t] = r
                        }), e
                    },
                    merge: function(e, t) {
                        return i.update(i.copy(e), t)
                    },
                    copy: function(e) {
                        if (null == e) return e;
                        var t = {};
                        for (var r in e) t[r] = e[r];
                        return t
                    },
                    isEmpty: function(e) {
                        for (var t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                        return !0
                    },
                    arraySliceFn: function(e) {
                        var t = e.slice || e.webkitSlice || e.mozSlice;
                        return "function" == typeof t ? t : null
                    },
                    isType: function(e, t) {
                        return "function" == typeof t && (t = i.typeName(t)), Object.prototype.toString.call(e) === "[object " + t + "]"
                    },
                    typeName: function(e) {
                        if (Object.prototype.hasOwnProperty.call(e, "name")) return e.name;
                        var t = e.toString(),
                            r = t.match(/^\s*function (.+)\(/);
                        return r ? r[1] : t
                    },
                    error: function(e, t) {
                        var r = null;
                        return "string" == typeof e.message && "" !== e.message && ("string" == typeof t || t && t.message) && ((r = i.copy(e)).message = e.message), e.message = e.message || null, "string" == typeof t ? e.message = t : "object" == typeof t && null !== t && (i.update(e, t), t.message && (e.message = t.message), (t.code || t.name) && (e.code = t.code || t.name), t.stack && (e.stack = t.stack)), "function" == typeof Object.defineProperty && (Object.defineProperty(e, "name", {
                            writable: !0,
                            enumerable: !1
                        }), Object.defineProperty(e, "message", {
                            enumerable: !0
                        })), e.name = String(t && t.name || e.name || e.code || "Error"), e.time = new Date, r && (e.originalError = r), e
                    },
                    inherit: function(e, t) {
                        var r = null;
                        if (void 0 === t) t = e, e = Object, r = {};
                        else {
                            var n = function() {};
                            n.prototype = e.prototype, r = new n
                        }
                        return t.constructor === Object && (t.constructor = function() {
                            if (e !== Object) return e.apply(this, arguments)
                        }), t.constructor.prototype = r, i.update(t.constructor.prototype, t), t.constructor.__super__ = e, t.constructor
                    },
                    mixin: function() {
                        for (var e = arguments[0], t = 1; t < arguments.length; t++)
                            for (var r in arguments[t].prototype) {
                                var n = arguments[t].prototype[r];
                                "constructor" !== r && (e.prototype[r] = n)
                            }
                        return e
                    },
                    hideProperties: function(e, t) {
                        "function" == typeof Object.defineProperty && i.arrayEach(t, function(t) {
                            Object.defineProperty(e, t, {
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            })
                        })
                    },
                    property: function(e, t, r, n, o) {
                        var i = {
                            configurable: !0,
                            enumerable: void 0 === n || n
                        };
                        "function" != typeof r || o ? (i.value = r, i.writable = !0) : i.get = r, Object.defineProperty(e, t, i)
                    },
                    memoizedProperty: function(e, t, r, n) {
                        var o = null;
                        i.property(e, t, function() {
                            return null === o && (o = r()), o
                        }, n)
                    },
                    hoistPayloadMember: function(e) {
                        var t = e.request,
                            r = t.operation,
                            n = t.service.api.operations[r],
                            o = n.output;
                        if (o.payload && !n.hasEventOutput) {
                            var a = o.members[o.payload],
                                s = e.data[o.payload];
                            "structure" === a.type && i.each(s, function(t, r) {
                                i.property(e.data, t, r, !1)
                            })
                        }
                    },
                    computeSha256: function(e, t) {
                        if (i.isNode()) {
                            var n = i.stream.Stream,
                                o = r(28022);
                            if ("function" == typeof n && e instanceof n) {
                                if ("string" != typeof e.path) return t(Error("Non-file stream objects are not supported with SigV4"));
                                var a = {};
                                "number" == typeof e.start && (a.start = e.start), "number" == typeof e.end && (a.end = e.end), e = o.createReadStream(e.path, a)
                            }
                        }
                        i.crypto.sha256(e, "hex", function(e, r) {
                            e ? t(e) : t(null, r)
                        })
                    },
                    isClockSkewed: function(e) {
                        if (e) return i.property(n.config, "isClockSkewed", Math.abs(new Date().getTime() - e) >= 3e5, !1), n.config.isClockSkewed
                    },
                    applyClockOffset: function(e) {
                        e && (n.config.systemClockOffset = e - new Date().getTime())
                    },
                    extractRequestId: function(e) {
                        var t = e.httpResponse.headers["x-amz-request-id"] || e.httpResponse.headers["x-amzn-requestid"];
                        !t && e.data && e.data.ResponseMetadata && (t = e.data.ResponseMetadata.RequestId), t && (e.requestId = t), e.error && (e.error.requestId = t)
                    },
                    addPromises: function(e, t) {
                        var r = !1;
                        void 0 === t && n && n.config && (t = n.config.getPromisesDependency()), void 0 === t && "undefined" != typeof Promise && (t = Promise), "function" != typeof t && (r = !0), Array.isArray(e) || (e = [e]);
                        for (var o = 0; o < e.length; o++) {
                            var i = e[o];
                            r ? i.deletePromisesFromClass && i.deletePromisesFromClass() : i.addPromisesToClass && i.addPromisesToClass(t)
                        }
                    },
                    promisifyMethod: function(e, t) {
                        return function() {
                            var r = this,
                                n = Array.prototype.slice.call(arguments);
                            return new t(function(t, o) {
                                n.push(function(e, r) {
                                    e ? o(e) : t(r)
                                }), r[e].apply(r, n)
                            })
                        }
                    },
                    isDualstackAvailable: function(e) {
                        if (!e) return !1;
                        var t = r(17752);
                        return "string" != typeof e && (e = e.serviceIdentifier), !!("string" == typeof e && t.hasOwnProperty(e)) && !!t[e].dualstackAvailable
                    },
                    calculateRetryDelay: function(e, t, r) {
                        t || (t = {});
                        var n = t.customBackoff || null;
                        return "function" == typeof n ? n(e, r) : Math.random() * (Math.pow(2, e) * ("number" == typeof t.base ? t.base : 100))
                    },
                    handleRequestWithRetries: function(e, t, r) {
                        t || (t = {});
                        var o = n.HttpClient.getInstance(),
                            a = t.httpOptions || {},
                            s = 0,
                            c = function(e) {
                                var n = t.maxRetries || 0;
                                if (e && "TimeoutError" === e.code && (e.retryable = !0), e && e.retryable && s < n) {
                                    var o = i.calculateRetryDelay(s, t.retryDelayOptions, e);
                                    if (o >= 0) {
                                        s++, setTimeout(u, o + (e.retryAfter || 0));
                                        return
                                    }
                                }
                                r(e)
                            },
                            u = function() {
                                var t = "";
                                o.handleRequest(e, a, function(e) {
                                    e.on("data", function(e) {
                                        t += e.toString()
                                    }), e.on("end", function() {
                                        var n = e.statusCode;
                                        if (n < 300) r(null, t);
                                        else {
                                            var o = 1e3 * parseInt(e.headers["retry-after"], 10) || 0,
                                                a = i.error(Error(), {
                                                    statusCode: n,
                                                    retryable: n >= 500 || 429 === n
                                                });
                                            o && a.retryable && (a.retryAfter = o), c(a)
                                        }
                                    })
                                }, c)
                            };
                        n.util.defer(u)
                    },
                    uuid: {
                        v4: function() {
                            return r(72489).v4()
                        }
                    },
                    convertPayloadToString: function(e) {
                        var t = e.request,
                            r = t.operation,
                            n = t.service.api.operations[r].output || {};
                        n.payload && e.data[n.payload] && (e.data[n.payload] = e.data[n.payload].toString())
                    },
                    defer: function(e) {
                        "object" == typeof o && "function" == typeof o.nextTick ? o.nextTick(e) : "function" == typeof setImmediate ? setImmediate(e) : setTimeout(e, 0)
                    },
                    getRequestPayloadShape: function(e) {
                        var t = e.service.api.operations;
                        if (t) {
                            var r = (t || {})[e.operation];
                            if (r && r.input && r.input.payload) return r.input.members[r.input.payload]
                        }
                    },
                    getProfilesFromSharedConfig: function(e, t) {
                        var r = {},
                            n = {};
                        if (o.env[i.configOptInEnv]) var n = e.loadFrom({
                            isConfig: !0,
                            filename: o.env[i.sharedConfigFileEnv]
                        });
                        var a = {};
                        try {
                            var a = e.loadFrom({
                                filename: t || o.env[i.configOptInEnv] && o.env[i.sharedCredentialsFileEnv]
                            })
                        } catch (e) {
                            if (!o.env[i.configOptInEnv]) throw e
                        }
                        for (var s = 0, c = Object.keys(n); s < c.length; s++) r[c[s]] = u(r[c[s]] || {}, n[c[s]]);
                        for (var s = 0, c = Object.keys(a); s < c.length; s++) r[c[s]] = u(r[c[s]] || {}, a[c[s]]);
                        return r;

                        function u(e, t) {
                            for (var r = 0, n = Object.keys(t); r < n.length; r++) e[n[r]] = t[n[r]];
                            return e
                        }
                    },
                    ARN: {
                        validate: function(e) {
                            return e && 0 === e.indexOf("arn:") && e.split(":").length >= 6
                        },
                        parse: function(e) {
                            var t = e.split(":");
                            return {
                                partition: t[1],
                                service: t[2],
                                region: t[3],
                                accountId: t[4],
                                resource: t.slice(5).join(":")
                            }
                        },
                        build: function(e) {
                            if (void 0 === e.service || void 0 === e.region || void 0 === e.accountId || void 0 === e.resource) throw i.error(Error("Input ARN object is invalid"));
                            return "arn:" + (e.partition || "aws") + ":" + e.service + ":" + e.region + ":" + e.accountId + ":" + e.resource
                        }
                    },
                    defaultProfile: "default",
                    configOptInEnv: "AWS_SDK_LOAD_CONFIG",
                    sharedCredentialsFileEnv: "AWS_SHARED_CREDENTIALS_FILE",
                    sharedConfigFileEnv: "AWS_CONFIG_FILE",
                    imdsDisabledEnv: "AWS_EC2_METADATA_DISABLED"
                };
            e.exports = i
        },
        35106: function(e, t, r) {
            var n = r(62662),
                o = r(68136);

            function i() {}

            function a(e, t) {
                for (var r = e.getElementsByTagName(t), n = 0, o = r.length; n < o; n++)
                    if (r[n].parentNode === e) return r[n]
            }

            function s(e, t) {
                switch (t || (t = {}), t.type) {
                    case "structure":
                        return c(e, t);
                    case "map":
                        return function(e, t) {
                            for (var r = {}, n = t.key.name || "key", o = t.value.name || "value", i = t.flattened ? t.name : "entry", c = e.firstElementChild; c;) {
                                if (c.nodeName === i) {
                                    var u = a(c, n).textContent,
                                        l = a(c, o);
                                    r[u] = s(l, t.value)
                                }
                                c = c.nextElementSibling
                            }
                            return r
                        }(e, t);
                    case "list":
                        return function(e, t) {
                            for (var r = [], n = t.flattened ? t.name : t.member.name || "member", o = e.firstElementChild; o;) o.nodeName === n && r.push(s(o, t.member)), o = o.nextElementSibling;
                            return r
                        }(e, t);
                    case void 0:
                    case null:
                        return function(e) {
                            if (null == e) return "";
                            if (!e.firstElementChild) return null === e.parentNode.parentNode ? {} : 0 === e.childNodes.length ? "" : e.textContent;
                            for (var t = {
                                    type: "structure",
                                    members: {}
                                }, r = e.firstElementChild; r;) {
                                var n = r.nodeName;
                                Object.prototype.hasOwnProperty.call(t.members, n) ? t.members[n].type = "list" : t.members[n] = {
                                    name: n
                                }, r = r.nextElementSibling
                            }
                            return c(e, t)
                        }(e);
                    default:
                        return function(e, t) {
                            if (e.getAttribute) {
                                var r = e.getAttribute("encoding");
                                "base64" === r && (t = new o.create({
                                    type: r
                                }))
                            }
                            var n = e.textContent;
                            return ("" === n && (n = null), "function" == typeof t.toType) ? t.toType(n) : n
                        }(e, t)
                }
            }

            function c(e, t) {
                var r = {};
                return null === e || n.each(t.members, function(n, o) {
                    if (o.isXmlAttribute) {
                        if (Object.prototype.hasOwnProperty.call(e.attributes, o.name)) {
                            var i = e.attributes[o.name].value;
                            r[n] = s({
                                textContent: i
                            }, o)
                        }
                    } else {
                        var c = o.flattened ? e : a(e, o.name);
                        c ? r[n] = s(c, o) : o.flattened || "list" !== o.type || t.api.xmlNoDefaultLists || (r[n] = o.defaultValue)
                    }
                }), r
            }
            i.prototype.parse = function(e, t) {
                if ("" === e.replace(/^\s+/, "")) return {};
                try {
                    if (window.DOMParser) {
                        try {
                            var r, o;
                            r = new DOMParser().parseFromString(e, "text/xml")
                        } catch (e) {
                            throw n.error(Error("Parse error in document"), {
                                originalError: e,
                                code: "XMLParserError",
                                retryable: !0
                            })
                        }
                        if (null === r.documentElement) throw n.error(Error("Cannot parse empty document."), {
                            code: "XMLParserError",
                            retryable: !0
                        });
                        var i = r.getElementsByTagName("parsererror")[0];
                        if (i && (i.parentNode === r || "body" === i.parentNode.nodeName || i.parentNode.parentNode === r || "body" === i.parentNode.parentNode.nodeName)) {
                            var c = i.getElementsByTagName("div")[0] || i;
                            throw n.error(Error(c.textContent || "Parser error in document"), {
                                code: "XMLParserError",
                                retryable: !0
                            })
                        }
                    } else if (window.ActiveXObject) {
                        if ((r = new window.ActiveXObject("Microsoft.XMLDOM")).async = !1, !r.loadXML(e)) throw n.error(Error("Parse error in document"), {
                            code: "XMLParserError",
                            retryable: !0
                        })
                    } else throw Error("Cannot load XML parser")
                } catch (e) {
                    o = e
                }
                if (r && r.documentElement && !o) {
                    var u = s(r.documentElement, t),
                        l = a(r.documentElement, "ResponseMetadata");
                    return l && (u.ResponseMetadata = s(l, {})), u
                }
                if (!o) return {};
                throw n.error(o || Error(), {
                    code: "XMLParserError",
                    retryable: !0
                })
            }, e.exports = i
        },
        52369: function(e, t, r) {
            var n = r(62662),
                o = r(8700).XmlNode,
                i = r(25009).XmlText;

            function a() {}

            function s(e, t, r) {
                var n, o = "xmlns";
                t.xmlNamespaceUri ? (n = t.xmlNamespaceUri, t.xmlNamespacePrefix && (o += ":" + t.xmlNamespacePrefix)) : r && t.api.xmlNamespaceUri && (n = t.api.xmlNamespaceUri), n && e.addAttribute(o, n)
            }
            a.prototype.toXML = function(e, t, r, a) {
                var c = new o(r);
                return s(c, t, !0),
                    function e(t, r, a) {
                        var c, u;
                        switch (a.type) {
                            case "structure":
                                return void n.arrayEach(a.memberNames, function(n) {
                                    var i = a.members[n];
                                    if ("body" === i.location) {
                                        var c = r[n],
                                            u = i.name;
                                        if (null != c) {
                                            if (i.isXmlAttribute) t.addAttribute(u, c);
                                            else if (i.flattened) e(t, c, i);
                                            else {
                                                var l = new o(u);
                                                t.addChildNode(l), s(l, i), e(l, c, i)
                                            }
                                        }
                                    }
                                });
                            case "map":
                                return c = a.key.name || "key", u = a.value.name || "value", void n.each(r, function(r, n) {
                                    var i = new o(a.flattened ? a.name : "entry");
                                    t.addChildNode(i);
                                    var s = new o(c),
                                        l = new o(u);
                                    i.addChildNode(s), i.addChildNode(l), e(s, r, a.key), e(l, n, a.value)
                                });
                            case "list":
                                return void(a.flattened ? n.arrayEach(r, function(r) {
                                    var n = a.member.name || a.name,
                                        i = new o(n);
                                    t.addChildNode(i), e(i, r, a.member)
                                }) : n.arrayEach(r, function(r) {
                                    var n = a.member.name || "member",
                                        i = new o(n);
                                    t.addChildNode(i), e(i, r, a.member)
                                }));
                            default:
                                return function(e, t, r) {
                                    e.addChildNode(new i(r.toWireFormat(t)))
                                }(t, r, a)
                        }
                    }(c, e, t), c.children.length > 0 || a ? c.toString() : ""
            }, e.exports = a
        },
        95373: function(e) {
            e.exports = {
                escapeAttribute: function(e) {
                    return e.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }
            }
        },
        55077: function(e) {
            e.exports = {
                escapeElement: function(e) {
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;")
                }
            }
        },
        8700: function(e, t, r) {
            var n = r(95373).escapeAttribute;

            function o(e, t) {
                void 0 === t && (t = []), this.name = e, this.children = t, this.attributes = {}
            }
            o.prototype.addAttribute = function(e, t) {
                return this.attributes[e] = t, this
            }, o.prototype.addChildNode = function(e) {
                return this.children.push(e), this
            }, o.prototype.removeAttribute = function(e) {
                return delete this.attributes[e], this
            }, o.prototype.toString = function() {
                for (var e = Boolean(this.children.length), t = "<" + this.name, r = this.attributes, o = 0, i = Object.keys(r); o < i.length; o++) {
                    var a = i[o],
                        s = r[a];
                    null != s && (t += " " + a + '="' + n("" + s) + '"')
                }
                return t + (e ? ">" + this.children.map(function(e) {
                    return e.toString()
                }).join("") + "</" + this.name + ">" : "/>")
            }, e.exports = {
                XmlNode: o
            }
        },
        25009: function(e, t, r) {
            var n = r(55077).escapeElement;

            function o(e) {
                this.value = e
            }
            o.prototype.toString = function() {
                return n("" + this.value)
            }, e.exports = {
                XmlText: o
            }
        },
        69547: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
            t.default = function(e, t) {
                var n = t || 0;
                return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
            }
        },
        72489: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "v4", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), o(r(29641)), o(r(4442));
            var n = o(r(71492));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            o(r(64032))
        },
        31488: function(e, t) {
            "use strict";

            function r(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function n(e, t, n, o, i, a) {
                var s;
                return r((s = r(r(t, e), r(o, a))) << i | s >>> 32 - i, n)
            }

            function o(e, t, r, o, i, a, s) {
                return n(t & r | ~t & o, e, t, i, a, s)
            }

            function i(e, t, r, o, i, a, s) {
                return n(t & o | r & ~o, e, t, i, a, s)
            }

            function a(e, t, r, o, i, a, s) {
                return n(t ^ r ^ o, e, t, i, a, s)
            }

            function s(e, t, r, o, i, a, s) {
                return n(r ^ (t | ~o), e, t, i, a, s)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = function(e) {
                if ("string" == typeof e) {
                    var t = unescape(encodeURIComponent(e));
                    e = Array(t.length);
                    for (var n = 0; n < t.length; n++) e[n] = t.charCodeAt(n)
                }
                return function(e) {
                    var t, r, n = [],
                        o = 32 * e.length,
                        i = "0123456789abcdef";
                    for (t = 0; t < o; t += 8) n.push(parseInt(i.charAt((r = e[t >> 5] >>> t % 32 & 255) >>> 4 & 15) + i.charAt(15 & r), 16));
                    return n
                }(function(e, t) {
                    e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
                    var n, c, u, l, p, d = 1732584193,
                        m = -271733879,
                        h = -1732584194,
                        f = 271733878;
                    for (n = 0; n < e.length; n += 16) c = d, u = m, l = h, p = f, d = o(d, m, h, f, e[n], 7, -680876936), f = o(f, d, m, h, e[n + 1], 12, -389564586), h = o(h, f, d, m, e[n + 2], 17, 606105819), m = o(m, h, f, d, e[n + 3], 22, -1044525330), d = o(d, m, h, f, e[n + 4], 7, -176418897), f = o(f, d, m, h, e[n + 5], 12, 1200080426), h = o(h, f, d, m, e[n + 6], 17, -1473231341), m = o(m, h, f, d, e[n + 7], 22, -45705983), d = o(d, m, h, f, e[n + 8], 7, 1770035416), f = o(f, d, m, h, e[n + 9], 12, -1958414417), h = o(h, f, d, m, e[n + 10], 17, -42063), m = o(m, h, f, d, e[n + 11], 22, -1990404162), d = o(d, m, h, f, e[n + 12], 7, 1804603682), f = o(f, d, m, h, e[n + 13], 12, -40341101), h = o(h, f, d, m, e[n + 14], 17, -1502002290), m = o(m, h, f, d, e[n + 15], 22, 1236535329), d = i(d, m, h, f, e[n + 1], 5, -165796510), f = i(f, d, m, h, e[n + 6], 9, -1069501632), h = i(h, f, d, m, e[n + 11], 14, 643717713), m = i(m, h, f, d, e[n], 20, -373897302), d = i(d, m, h, f, e[n + 5], 5, -701558691), f = i(f, d, m, h, e[n + 10], 9, 38016083), h = i(h, f, d, m, e[n + 15], 14, -660478335), m = i(m, h, f, d, e[n + 4], 20, -405537848), d = i(d, m, h, f, e[n + 9], 5, 568446438), f = i(f, d, m, h, e[n + 14], 9, -1019803690), h = i(h, f, d, m, e[n + 3], 14, -187363961), m = i(m, h, f, d, e[n + 8], 20, 1163531501), d = i(d, m, h, f, e[n + 13], 5, -1444681467), f = i(f, d, m, h, e[n + 2], 9, -51403784), h = i(h, f, d, m, e[n + 7], 14, 1735328473), m = i(m, h, f, d, e[n + 12], 20, -1926607734), d = a(d, m, h, f, e[n + 5], 4, -378558), f = a(f, d, m, h, e[n + 8], 11, -2022574463), h = a(h, f, d, m, e[n + 11], 16, 1839030562), m = a(m, h, f, d, e[n + 14], 23, -35309556), d = a(d, m, h, f, e[n + 1], 4, -1530992060), f = a(f, d, m, h, e[n + 4], 11, 1272893353), h = a(h, f, d, m, e[n + 7], 16, -155497632), m = a(m, h, f, d, e[n + 10], 23, -1094730640), d = a(d, m, h, f, e[n + 13], 4, 681279174), f = a(f, d, m, h, e[n], 11, -358537222), h = a(h, f, d, m, e[n + 3], 16, -722521979), m = a(m, h, f, d, e[n + 6], 23, 76029189), d = a(d, m, h, f, e[n + 9], 4, -640364487), f = a(f, d, m, h, e[n + 12], 11, -421815835), h = a(h, f, d, m, e[n + 15], 16, 530742520), m = a(m, h, f, d, e[n + 2], 23, -995338651), d = s(d, m, h, f, e[n], 6, -198630844), f = s(f, d, m, h, e[n + 7], 10, 1126891415), h = s(h, f, d, m, e[n + 14], 15, -1416354905), m = s(m, h, f, d, e[n + 5], 21, -57434055), d = s(d, m, h, f, e[n + 12], 6, 1700485571), f = s(f, d, m, h, e[n + 3], 10, -1894986606), h = s(h, f, d, m, e[n + 10], 15, -1051523), m = s(m, h, f, d, e[n + 1], 21, -2054922799), d = s(d, m, h, f, e[n + 8], 6, 1873313359), f = s(f, d, m, h, e[n + 15], 10, -30611744), h = s(h, f, d, m, e[n + 6], 15, -1560198380), m = s(m, h, f, d, e[n + 13], 21, 1309151649), d = s(d, m, h, f, e[n + 4], 6, -145523070), f = s(f, d, m, h, e[n + 11], 10, -1120210379), h = s(h, f, d, m, e[n + 2], 15, 718787259), m = s(m, h, f, d, e[n + 9], 21, -343485551), d = r(d, c), m = r(m, u), h = r(h, l), f = r(f, p);
                    return [d, m, h, f]
                }(function(e) {
                    var t, r = [];
                    for (t = 0, r[(e.length >> 2) - 1] = void 0; t < r.length; t += 1) r[t] = 0;
                    var n = 8 * e.length;
                    for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e[t / 8]) << t % 32;
                    return r
                }(e), 8 * e.length))
            }
        },
        25532: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                if (!r) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(n)
            };
            var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
                n = new Uint8Array(16)
        },
        97234: function(e, t) {
            "use strict";

            function r(e, t) {
                return e << t | e >>> 32 - t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = function(e) {
                var t = [1518500249, 1859775393, 2400959708, 3395469782],
                    n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                if ("string" == typeof e) {
                    var o = unescape(encodeURIComponent(e));
                    e = Array(o.length);
                    for (var i = 0; i < o.length; i++) e[i] = o.charCodeAt(i)
                }
                e.push(128);
                for (var a = Math.ceil((e.length / 4 + 2) / 16), s = Array(a), i = 0; i < a; i++) {
                    s[i] = Array(16);
                    for (var c = 0; c < 16; c++) s[i][c] = e[64 * i + 4 * c] << 24 | e[64 * i + 4 * c + 1] << 16 | e[64 * i + 4 * c + 2] << 8 | e[64 * i + 4 * c + 3]
                }
                s[a - 1][14] = (e.length - 1) * 8 / 4294967296, s[a - 1][14] = Math.floor(s[a - 1][14]), s[a - 1][15] = (e.length - 1) * 8 & 4294967295;
                for (var i = 0; i < a; i++) {
                    for (var u = Array(80), l = 0; l < 16; l++) u[l] = s[i][l];
                    for (var l = 16; l < 80; l++) u[l] = r(u[l - 3] ^ u[l - 8] ^ u[l - 14] ^ u[l - 16], 1);
                    for (var p = n[0], d = n[1], m = n[2], h = n[3], f = n[4], l = 0; l < 80; l++) {
                        var y = Math.floor(l / 20),
                            g = r(p, 5) + function(e, t, r, n) {
                                switch (e) {
                                    case 0:
                                        return t & r ^ ~t & n;
                                    case 1:
                                    case 3:
                                        return t ^ r ^ n;
                                    case 2:
                                        return t & r ^ t & n ^ r & n
                                }
                            }(y, d, m, h) + f + t[y] + u[l] >>> 0;
                        f = h, h = m, m = r(d, 30) >>> 0, d = p, p = g
                    }
                    n[0] = n[0] + p >>> 0, n[1] = n[1] + d >>> 0, n[2] = n[2] + m >>> 0, n[3] = n[3] + h >>> 0, n[4] = n[4] + f >>> 0
                }
                return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
            }
        },
        29641: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, o, i = s(r(25532)),
                a = s(r(69547));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = 0,
                u = 0;
            t.default = function(e, t, r) {
                var s = t && r || 0,
                    l = t || [],
                    p = (e = e || {}).node || n,
                    d = void 0 !== e.clockseq ? e.clockseq : o;
                if (null == p || null == d) {
                    var m = e.random || (e.rng || i.default)();
                    null == p && (p = n = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == d && (d = o = (m[6] << 8 | m[7]) & 16383)
                }
                var h = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
                    f = void 0 !== e.nsecs ? e.nsecs : u + 1,
                    y = h - c + (f - u) / 1e4;
                if (y < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (y < 0 || h > c) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                c = h, u = f, o = d;
                var g = ((268435455 & (h += 122192928e5)) * 1e4 + f) % 4294967296;
                l[s++] = g >>> 24 & 255, l[s++] = g >>> 16 & 255, l[s++] = g >>> 8 & 255, l[s++] = 255 & g;
                var v = h / 4294967296 * 1e4 & 268435455;
                l[s++] = v >>> 8 & 255, l[s++] = 255 & v, l[s++] = v >>> 24 & 15 | 16, l[s++] = v >>> 16 & 255, l[s++] = d >>> 8 | 128, l[s++] = 255 & d;
                for (var b = 0; b < 6; ++b) l[s + b] = p[b];
                return t || (0, a.default)(l)
            }
        },
        4442: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(r(92352)),
                o = i(r(31488));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let a = (0, n.default)("v3", 48, o.default);
            t.default = a
        },
        92352: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r) {
                var n = function(e, n, i, a) {
                    var s, c = i && a || 0;
                    if ("string" == typeof e && (e = function(e) {
                            for (var t = Array((e = unescape(encodeURIComponent(e))).length), r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                            return t
                        }(e)), "string" == typeof n && (s = [], n.replace(/[a-fA-F0-9]{2}/g, function(e) {
                            s.push(parseInt(e, 16))
                        }), n = s), !Array.isArray(e)) throw TypeError("value must be an array of bytes");
                    if (!Array.isArray(n) || 16 !== n.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
                    var u = r(n.concat(e));
                    if (u[6] = 15 & u[6] | t, u[8] = 63 & u[8] | 128, i)
                        for (var l = 0; l < 16; ++l) i[c + l] = u[l];
                    return i || (0, o.default)(u)
                };
                try {
                    n.name = e
                } catch (e) {}
                return n.DNS = i, n.URL = a, n
            }, t.URL = t.DNS = void 0;
            var n, o = (n = r(69547)) && n.__esModule ? n : {
                default: n
            };
            let i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
            t.DNS = i;
            let a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
            t.URL = a
        },
        71492: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(r(25532)),
                o = i(r(69547));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e, t, r) {
                var i = t && r || 0;
                "string" == typeof e && (t = "binary" === e ? Array(16) : null, e = null);
                var a = (e = e || {}).random || (e.rng || n.default)();
                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                    for (var s = 0; s < 16; ++s) t[i + s] = a[s];
                return t || (0, o.default)(a)
            }
        },
        64032: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(r(92352)),
                o = i(r(97234));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let a = (0, n.default)("v5", 80, o.default);
            t.default = a
        },
        85101: function(e, t, r) {
            "use strict";
            var n = r(29697),
                o = function() {
                    function e(e) {
                        void 0 === e && (e = 1e3), this.maxSize = e, this.cache = new n.LRUCache(e)
                    }
                    return Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            return this.cache.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.put = function(t, r) {
                        var n = "string" != typeof t ? e.getKeyString(t) : t,
                            o = this.populateValue(r);
                        this.cache.put(n, o)
                    }, e.prototype.get = function(t) {
                        var r = "string" != typeof t ? e.getKeyString(t) : t,
                            n = Date.now(),
                            o = this.cache.get(r);
                        if (o) {
                            for (var i = o.length - 1; i >= 0; i--) o[i].Expire < n && o.splice(i, 1);
                            if (0 === o.length) {
                                this.cache.remove(r);
                                return
                            }
                        }
                        return o
                    }, e.getKeyString = function(e) {
                        for (var t = [], r = Object.keys(e).sort(), n = 0; n < r.length; n++) {
                            var o = r[n];
                            void 0 !== e[o] && t.push(e[o])
                        }
                        return t.join(" ")
                    }, e.prototype.populateValue = function(e) {
                        var t = Date.now();
                        return e.map(function(e) {
                            return {
                                Address: e.Address || "",
                                Expire: t + 6e4 * (e.CachePeriodInMinutes || 1)
                            }
                        })
                    }, e.prototype.empty = function() {
                        this.cache.empty()
                    }, e.prototype.remove = function(t) {
                        var r = "string" != typeof t ? e.getKeyString(t) : t;
                        this.cache.remove(r)
                    }, e
                }();
            t.$ = o
        },
        29697: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                    this.key = e, this.value = t
                },
                n = function() {
                    function e(e) {
                        if (this.nodeMap = {}, this.size = 0, "number" != typeof e || e < 1) throw Error("Cache size can only be positive number");
                        this.sizeLimit = e
                    }
                    return Object.defineProperty(e.prototype, "length", {
                        get: function() {
                            return this.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.prependToList = function(e) {
                        this.headerNode ? (this.headerNode.prev = e, e.next = this.headerNode) : this.tailNode = e, this.headerNode = e, this.size++
                    }, e.prototype.removeFromTail = function() {
                        if (this.tailNode) {
                            var e = this.tailNode,
                                t = e.prev;
                            return t && (t.next = void 0), e.prev = void 0, this.tailNode = t, this.size--, e
                        }
                    }, e.prototype.detachFromList = function(e) {
                        this.headerNode === e && (this.headerNode = e.next), this.tailNode === e && (this.tailNode = e.prev), e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.next = void 0, e.prev = void 0, this.size--
                    }, e.prototype.get = function(e) {
                        if (this.nodeMap[e]) {
                            var t = this.nodeMap[e];
                            return this.detachFromList(t), this.prependToList(t), t.value
                        }
                    }, e.prototype.remove = function(e) {
                        if (this.nodeMap[e]) {
                            var t = this.nodeMap[e];
                            this.detachFromList(t), delete this.nodeMap[e]
                        }
                    }, e.prototype.put = function(e, t) {
                        if (this.nodeMap[e]) this.remove(e);
                        else if (this.size === this.sizeLimit) {
                            var n = this.removeFromTail().key;
                            delete this.nodeMap[n]
                        }
                        var o = new r(e, t);
                        this.nodeMap[e] = o, this.prependToList(o)
                    }, e.prototype.empty = function() {
                        for (var e = Object.keys(this.nodeMap), t = 0; t < e.length; t++) {
                            var r = e[t],
                                n = this.nodeMap[r];
                            this.detachFromList(n), delete this.nodeMap[r]
                        }
                    }, e
                }();
            t.LRUCache = n
        },
        79742: function(e, t) {
            "use strict";
            t.byteLength = function(e) {
                var t = c(e),
                    r = t[0],
                    n = t[1];
                return (r + n) * 3 / 4 - n
            }, t.toByteArray = function(e) {
                var t, r, i = c(e),
                    a = i[0],
                    s = i[1],
                    u = new o((a + s) * 3 / 4 - s),
                    l = 0,
                    p = s > 0 ? a - 4 : a;
                for (r = 0; r < p; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
                return 2 === s && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, u[l++] = 255 & t), 1 === s && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t), u
            }, t.fromByteArray = function(e) {
                for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) i.push(function(e, t, n) {
                    for (var o, i = [], a = t; a < n; a += 3) i.push(r[(o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2])) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                    return i.join("")
                }(e, a, a + 16383 > s ? s : a + 16383));
                return 1 === o ? i.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === o && i.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), i.join("")
            };
            for (var r = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) r[a] = i[a], n[i.charCodeAt(a)] = a;

            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("="); - 1 === r && (r = t);
                var n = r === t ? 0 : 4 - r % 4;
                return [r, n]
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        48764: function(e, t, r) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var n = r(79742),
                o = r(80645),
                i = r(87300);

            function a() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (a() < t) throw RangeError("Invalid typed array length");
                return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e
            }

            function c(e, t, r) {
                if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c)) return new c(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw Error("If encoding is specified then the first argument must be a string");
                    return p(this, e)
                }
                return u(this, e, t, r)
            }

            function u(e, t, r, n) {
                if ("number" == typeof t) throw TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw RangeError("'length' is out of bounds");
                    return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n), c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = d(e, t), e
                }(e, t, r, n) : "string" == typeof t ? function(e, t, r) {
                    if (("string" != typeof r || "" === r) && (r = "utf8"), !c.isEncoding(r)) throw TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | h(t, r),
                        o = (e = s(e, n)).write(t, r);
                    return o !== n && (e = e.slice(0, o)), e
                }(e, t, r) : function(e, t) {
                    if (c.isBuffer(t)) {
                        var r, n = 0 | m(t.length);
                        return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : d(e, t);
                        if ("Buffer" === t.type && i(t.data)) return d(e, t.data)
                    }
                    throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function l(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be a number');
                if (e < 0) throw RangeError('"size" argument must not be negative')
            }

            function p(e, t) {
                if (l(t), e = s(e, t < 0 ? 0 : 0 | m(t)), !c.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function d(e, t) {
                var r = t.length < 0 ? 0 : 0 | m(t.length);
                e = s(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function m(e) {
                if (e >= a()) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function h(e, t) {
                if (c.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return R(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return P(e).length;
                    default:
                        if (n) return R(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function f(e, t, r) {
                var o, i, a = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return function(e, t, r) {
                            var n, o = e.length;
                            (!t || t < 0) && (t = 0), (!r || r < 0 || r > o) && (r = o);
                            for (var i = "", a = t; a < r; ++a) i += (n = e[a]) < 16 ? "0" + n.toString(16) : n.toString(16);
                            return i
                        }(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return b(this, t, r);
                    case "ascii":
                        return function(e, t, r) {
                            var n = "";
                            r = Math.min(e.length, r);
                            for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                            return n
                        }(this, t, r);
                    case "latin1":
                    case "binary":
                        return function(e, t, r) {
                            var n = "";
                            r = Math.min(e.length, r);
                            for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                            return n
                        }(this, t, r);
                    case "base64":
                        return o = t, i = r, 0 === o && i === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(o, i));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(e, t, r) {
                            for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                            return o
                        }(this, t, r);
                    default:
                        if (a) throw TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), a = !0
                }
            }

            function y(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function g(e, t, r, n, o) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), isNaN(r = +r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (o) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, r, n, o);
                if ("number" == typeof t) return (t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf) ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, n, o);
                throw TypeError("val must be string, number or Buffer")
            }

            function v(e, t, r, n, o) {
                var i, a = 1,
                    s = e.length,
                    c = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, c /= 2, r /= 2
                }

                function u(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (o) {
                    var l = -1;
                    for (i = r; i < s; i++)
                        if (u(e, i) === u(t, -1 === l ? 0 : i - l)) {
                            if (-1 === l && (l = i), i - l + 1 === c) return l * a
                        } else -1 !== l && (i -= i - l), l = -1
                } else
                    for (r + c > s && (r = s - c), i = r; i >= 0; i--) {
                        for (var p = !0, d = 0; d < c; d++)
                            if (u(e, i + d) !== u(t, d)) {
                                p = !1;
                                break
                            }
                        if (p) return i
                    }
                return -1
            }

            function b(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], o = t; o < r;) {
                    var i, a, s, c, u = e[o],
                        l = null,
                        p = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (o + p <= r) switch (p) {
                        case 1:
                            u < 128 && (l = u);
                            break;
                        case 2:
                            (192 & (i = e[o + 1])) == 128 && (c = (31 & u) << 6 | 63 & i) > 127 && (l = c);
                            break;
                        case 3:
                            i = e[o + 1], a = e[o + 2], (192 & i) == 128 && (192 & a) == 128 && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (l = c);
                            break;
                        case 4:
                            i = e[o + 1], a = e[o + 2], s = e[o + 3], (192 & i) == 128 && (192 & a) == 128 && (192 & s) == 128 && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (l = c)
                    }
                    null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += p
                }
                return function(e) {
                    var t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                    return r
                }(n)
            }

            function k(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r) throw RangeError("Trying to access beyond buffer length")
            }

            function S(e, t, r, n, o, i) {
                if (!c.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i) throw RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw RangeError("Index out of range")
            }

            function x(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) e[r + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> (n ? o : 1 - o) * 8
            }

            function C(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) e[r + o] = t >>> (n ? o : 3 - o) * 8 & 255
            }

            function E(e, t, r, n, o, i) {
                if (r + n > e.length || r < 0) throw RangeError("Index out of range")
            }

            function N(e, t, r, n, i) {
                return i || E(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), o.write(e, t, r, n, 23, 4), r + 4
            }

            function A(e, t, r, n, i) {
                return i || E(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), o.write(e, t, r, n, 52, 8), r + 8
            }
            t.lW = c, t.h2 = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== r.g.TYPED_ARRAY_SUPPORT ? r.g.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), a(), c.poolSize = 8192, c._augment = function(e) {
                return e.__proto__ = c.prototype, e
            }, c.from = function(e, t, r) {
                return u(null, e, t, r)
            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0
            })), c.alloc = function(e, t, r) {
                return (l(e), e <= 0) ? s(null, e) : void 0 !== t ? "string" == typeof r ? s(null, e).fill(t, r) : s(null, e).fill(t) : s(null, e)
            }, c.allocUnsafe = function(e) {
                return p(null, e)
            }, c.allocUnsafeSlow = function(e) {
                return p(null, e)
            }, c.isBuffer = function(e) {
                return !!(null != e && e._isBuffer)
            }, c.compare = function(e, t) {
                if (!c.isBuffer(e) || !c.isBuffer(t)) throw TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                    if (e[o] !== t[o]) {
                        r = e[o], n = t[o];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, c.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(e, t) {
                if (!i(e)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                var r, n = c.allocUnsafe(t),
                    o = 0;
                for (r = 0; r < e.length; ++r) {
                    var a = e[r];
                    if (!c.isBuffer(a)) throw TypeError('"list" argument must be an Array of Buffers');
                    a.copy(n, o), o += a.length
                }
                return n
            }, c.byteLength = h, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : f.apply(this, arguments)
            }, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                var e = "",
                    r = t.h2;
                return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
            }, c.prototype.compare = function(e, t, r, n, o) {
                if (!c.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw RangeError("out of range index");
                if (n >= o && t >= r) return 0;
                if (n >= o) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
                for (var i = o - n, a = r - t, s = Math.min(i, a), u = this.slice(n, o), l = e.slice(t, r), p = 0; p < s; ++p)
                    if (u[p] !== l[p]) {
                        i = u[p], a = l[p];
                        break
                    }
                return i < a ? -1 : a < i ? 1 : 0
            }, c.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, c.prototype.indexOf = function(e, t, r) {
                return g(this, e, t, r, !0)
            }, c.prototype.lastIndexOf = function(e, t, r) {
                return g(this, e, t, r, !1)
            }, c.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else if (isFinite(t)) t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                var o, i, a, s, c, u, l, p, d, m, h, f, y = this.length - t;
                if ((void 0 === r || r > y) && (r = y), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var g = !1;;) switch (n) {
                    case "hex":
                        return function(e, t, r, n) {
                            r = Number(r) || 0;
                            var o = e.length - r;
                            n ? (n = Number(n)) > o && (n = o) : n = o;
                            var i = t.length;
                            if (i % 2 != 0) throw TypeError("Invalid hex string");
                            n > i / 2 && (n = i / 2);
                            for (var a = 0; a < n; ++a) {
                                var s = parseInt(t.substr(2 * a, 2), 16);
                                if (isNaN(s)) break;
                                e[r + a] = s
                            }
                            return a
                        }(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return c = t, u = r, q(R(e, this.length - c), this, c, u);
                    case "ascii":
                        return l = t, p = r, q(B(e), this, l, p);
                    case "latin1":
                    case "binary":
                        return o = this, i = e, a = t, s = r, q(B(i), o, a, s);
                    case "base64":
                        return d = t, m = r, q(P(e), this, d, m);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return h = t, f = r, q(function(e, t) {
                            for (var r, n, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = (r = e.charCodeAt(i)) >> 8, o.push(r % 256), o.push(n);
                            return o
                        }(e, this.length - h), this, h, f);
                    default:
                        if (g) throw TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), g = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, c.prototype.slice = function(e, t) {
                var r, n = this.length;
                if (e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), c.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = c.prototype;
                else {
                    var o = t - e;
                    r = new c(o, void 0);
                    for (var i = 0; i < o; ++i) r[i] = this[i + e]
                }
                return r
            }, c.prototype.readUIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || k(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n
            }, c.prototype.readUIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || k(e, t, this.length);
                for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                return n
            }, c.prototype.readUInt8 = function(e, t) {
                return t || k(e, 1, this.length), this[e]
            }, c.prototype.readUInt16LE = function(e, t) {
                return t || k(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUInt16BE = function(e, t) {
                return t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUInt32LE = function(e, t) {
                return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUInt32BE = function(e, t) {
                return t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || k(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, c.prototype.readIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || k(e, t, this.length);
                for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, c.prototype.readInt8 = function(e, t) {
                return (t || k(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                t || k(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt16BE = function(e, t) {
                t || k(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt32LE = function(e, t) {
                return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readFloatLE = function(e, t) {
                return t || k(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return t || k(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return t || k(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return t || k(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, c.prototype.writeUIntLE = function(e, t, r, n) {
                if (e = +e, t |= 0, r |= 0, !n) {
                    var o = Math.pow(2, 8 * r) - 1;
                    S(this, e, t, r, o, 0)
                }
                var i = 1,
                    a = 0;
                for (this[t] = 255 & e; ++a < r && (i *= 256);) this[t + a] = e / i & 255;
                return t + r
            }, c.prototype.writeUIntBE = function(e, t, r, n) {
                if (e = +e, t |= 0, r |= 0, !n) {
                    var o = Math.pow(2, 8 * r) - 1;
                    S(this, e, t, r, o, 0)
                }
                var i = r - 1,
                    a = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
                return t + r
            }, c.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, c.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
            }, c.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
            }, c.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : C(this, e, t, !0), t + 4
            }, c.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4
            }, c.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    S(this, e, t, r, o - 1, -o)
                }
                var i = 0,
                    a = 1,
                    s = 0;
                for (this[t] = 255 & e; ++i < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + r
            }, c.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    S(this, e, t, r, o - 1, -o)
                }
                var i = r - 1,
                    a = 1,
                    s = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + r
            }, c.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
            }, c.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
            }, c.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : C(this, e, t, !0), t + 4
            }, c.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4
            }, c.prototype.writeFloatLE = function(e, t, r) {
                return N(this, e, t, !0, r)
            }, c.prototype.writeFloatBE = function(e, t, r) {
                return N(this, e, t, !1, r)
            }, c.prototype.writeDoubleLE = function(e, t, r) {
                return A(this, e, t, !0, r)
            }, c.prototype.writeDoubleBE = function(e, t, r) {
                return A(this, e, t, !1, r)
            }, c.prototype.copy = function(e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("sourceStart out of bounds");
                if (n < 0) throw RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var o, i = n - r;
                if (this === e && r < t && t < n)
                    for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
                else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o) e[o + t] = this[o + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
                return i
            }, c.prototype.fill = function(e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var o, i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !c.isEncoding(n)) throw TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                if (r <= t) return this;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (o = t; o < r; ++o) this[o] = e;
                else {
                    var a = c.isBuffer(e) ? e : R(new c(e, n).toString()),
                        s = a.length;
                    for (o = 0; o < r - t; ++o) this[o + t] = a[o % s]
                }
                return this
            };
            var w = /[^+\/0-9A-Za-z-_]/g;

            function R(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, o = null, i = [], a = 0; a < n; ++a) {
                    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319 || a + 1 === n) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = (o - 55296 << 10 | r - 56320) + 65536
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((t -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else throw Error("Invalid code point")
                }
                return i
            }

            function B(e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t
            }

            function P(e) {
                return n.toByteArray(function(e) {
                    var t;
                    if ((e = ((t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(w, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function q(e, t, r, n) {
                for (var o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o) t[o + r] = e[o];
                return o
            }
        },
        87300: function(e) {
            var t = {}.toString;
            e.exports = Array.isArray || function(e) {
                return "[object Array]" == t.call(e)
            }
        },
        21924: function(e, t, r) {
            "use strict";
            var n = r(40210),
                o = r(55559),
                i = o(n("String.prototype.indexOf"));
            e.exports = function(e, t) {
                var r = n(e, !!t);
                return "function" == typeof r && i(e, ".prototype.") > -1 ? o(r) : r
            }
        },
        55559: function(e, t, r) {
            "use strict";
            var n = r(58612),
                o = r(40210),
                i = o("%Function.prototype.apply%"),
                a = o("%Function.prototype.call%"),
                s = o("%Reflect.apply%", !0) || n.call(a, i),
                c = o("%Object.getOwnPropertyDescriptor%", !0),
                u = o("%Object.defineProperty%", !0),
                l = o("%Math.max%");
            if (u) try {
                u({}, "a", {
                    value: 1
                })
            } catch (e) {
                u = null
            }
            e.exports = function(e) {
                var t = s(n, a, arguments);
                return c && u && c(t, "length").configurable && u(t, "length", {
                    value: 1 + l(0, e.length - (arguments.length - 1))
                }), t
            };
            var p = function() {
                return s(n, i, arguments)
            };
            u ? u(e.exports, "apply", {
                value: p
            }) : e.exports.apply = p
        },
        17187: function(e) {
            function t() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function r(e) {
                return "function" == typeof e
            }

            function n(e) {
                return "object" == typeof e && null !== e
            }
            e.exports = t, t.EventEmitter = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, t.prototype.emit = function(e) {
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error) throw t;
                    var t, o, i, a, s, c, u, l = Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw l.context = t, l
                }
                if (void 0 === (o = this._events[e])) return !1;
                if (r(o)) switch (arguments.length) {
                    case 1:
                        o.call(this);
                        break;
                    case 2:
                        o.call(this, arguments[1]);
                        break;
                    case 3:
                        o.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        a = Array.prototype.slice.call(arguments, 1), o.apply(this, a)
                } else if (n(o))
                    for (s = 0, a = Array.prototype.slice.call(arguments, 1), i = (c = o.slice()).length; s < i; s++) c[s].apply(this, a);
                return !0
            }, t.prototype.addListener = function(e, o) {
                var i, a;
                if (!r(o)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(o.listener) ? o.listener : o), this._events[e] ? n(this._events[e]) ? this._events[e].push(o) : this._events[e] = [this._events[e], o] : this._events[e] = o, n(this._events[e]) && !this._events[e].warned && (i = void 0 === this._maxListeners ? t.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
            }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(e, t) {
                if (!r(t)) throw TypeError("listener must be a function");
                var n = !1;

                function o() {
                    this.removeListener(e, o), n || (n = !0, t.apply(this, arguments))
                }
                return o.listener = t, this.on(e, o), this
            }, t.prototype.removeListener = function(e, t) {
                var o, i, a, s;
                if (!r(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (a = (o = this._events[e]).length, i = -1, o === t || r(o.listener) && o.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (n(o)) {
                    for (s = a; s-- > 0;)
                        if (o[s] === t || o[s].listener && o[s].listener === t) {
                            i = s;
                            break
                        }
                    if (i < 0) return this;
                    1 === o.length ? (o.length = 0, delete this._events[e]) : o.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, t.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 == arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 == arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (r(n = this._events[e])) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, t.prototype.listeners = function(e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, t.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, t.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        },
        94029: function(e, t, r) {
            "use strict";
            var n = r(95320),
                o = Object.prototype.toString,
                i = Object.prototype.hasOwnProperty,
                a = function(e, t, r) {
                    for (var n = 0, o = e.length; n < o; n++) i.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e))
                },
                s = function(e, t, r) {
                    for (var n = 0, o = e.length; n < o; n++) null == r ? t(e.charAt(n), n, e) : t.call(r, e.charAt(n), n, e)
                },
                c = function(e, t, r) {
                    for (var n in e) i.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e))
                };
            e.exports = function(e, t, r) {
                var i;
                if (!n(t)) throw TypeError("iterator must be a function");
                arguments.length >= 3 && (i = r), "[object Array]" === o.call(e) ? a(e, t, i) : "string" == typeof e ? s(e, t, i) : c(e, t, i)
            }
        },
        17648: function(e) {
            "use strict";
            var t = Array.prototype.slice,
                r = Object.prototype.toString;
            e.exports = function(e) {
                var n, o = this;
                if ("function" != typeof o || "[object Function]" !== r.call(o)) throw TypeError("Function.prototype.bind called on incompatible " + o);
                for (var i = t.call(arguments, 1), a = Math.max(0, o.length - i.length), s = [], c = 0; c < a; c++) s.push("$" + c);
                if (n = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                        if (!(this instanceof n)) return o.apply(e, i.concat(t.call(arguments)));
                        var r = o.apply(this, i.concat(t.call(arguments)));
                        return Object(r) === r ? r : this
                    }), o.prototype) {
                    var u = function() {};
                    u.prototype = o.prototype, n.prototype = new u, u.prototype = null
                }
                return n
            }
        },
        58612: function(e, t, r) {
            "use strict";
            var n = r(17648);
            e.exports = Function.prototype.bind || n
        },
        40210: function(e, t, r) {
            "use strict";
            var n, o = SyntaxError,
                i = Function,
                a = TypeError,
                s = function(e) {
                    try {
                        return i('"use strict"; return (' + e + ").constructor;")()
                    } catch (e) {}
                },
                c = Object.getOwnPropertyDescriptor;
            if (c) try {
                c({}, "")
            } catch (e) {
                c = null
            }
            var u = function() {
                    throw new a
                },
                l = c ? function() {
                    try {
                        return arguments.callee, u
                    } catch (e) {
                        try {
                            return c(arguments, "callee").get
                        } catch (e) {
                            return u
                        }
                    }
                }() : u,
                p = r(41405)(),
                d = Object.getPrototypeOf || function(e) {
                    return e.__proto__
                },
                m = {},
                h = "undefined" == typeof Uint8Array ? n : d(Uint8Array),
                f = {
                    "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
                    "%ArrayIteratorPrototype%": p ? d([][Symbol.iterator]()) : n,
                    "%AsyncFromSyncIteratorPrototype%": n,
                    "%AsyncFunction%": m,
                    "%AsyncGenerator%": m,
                    "%AsyncGeneratorFunction%": m,
                    "%AsyncIteratorPrototype%": m,
                    "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
                    "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
                    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
                    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" == typeof DataView ? n : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
                    "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
                    "%Function%": i,
                    "%GeneratorFunction%": m,
                    "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
                    "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
                    "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": p ? d(d([][Symbol.iterator]())) : n,
                    "%JSON%": "object" == typeof JSON ? JSON : n,
                    "%Map%": "undefined" == typeof Map ? n : Map,
                    "%MapIteratorPrototype%": "undefined" != typeof Map && p ? d(new Map()[Symbol.iterator]()) : n,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" == typeof Promise ? n : Promise,
                    "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" == typeof Set ? n : Set,
                    "%SetIteratorPrototype%": "undefined" != typeof Set && p ? d(new Set()[Symbol.iterator]()) : n,
                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": p ? d("" [Symbol.iterator]()) : n,
                    "%Symbol%": p ? Symbol : n,
                    "%SyntaxError%": o,
                    "%ThrowTypeError%": l,
                    "%TypedArray%": h,
                    "%TypeError%": a,
                    "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
                    "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
                    "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
                    "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
                };
            try {
                null.error
            } catch (e) {
                var y = d(d(e));
                f["%Error.prototype%"] = y
            }
            var g = function e(t) {
                    var r;
                    if ("%AsyncFunction%" === t) r = s("async function () {}");
                    else if ("%GeneratorFunction%" === t) r = s("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === t) r = s("async function* () {}");
                    else if ("%AsyncGenerator%" === t) {
                        var n = e("%AsyncGeneratorFunction%");
                        n && (r = n.prototype)
                    } else if ("%AsyncIteratorPrototype%" === t) {
                        var o = e("%AsyncGenerator%");
                        o && (r = d(o.prototype))
                    }
                    return f[t] = r, r
                },
                v = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                b = r(58612),
                k = r(17642),
                S = b.call(Function.call, Array.prototype.concat),
                x = b.call(Function.apply, Array.prototype.splice),
                C = b.call(Function.call, String.prototype.replace),
                E = b.call(Function.call, String.prototype.slice),
                N = b.call(Function.call, RegExp.prototype.exec),
                A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                w = /\\(\\)?/g,
                R = function(e) {
                    var t = E(e, 0, 1),
                        r = E(e, -1);
                    if ("%" === t && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === r && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
                    var n = [];
                    return C(e, A, function(e, t, r, o) {
                        n[n.length] = r ? C(o, w, "$1") : t || e
                    }), n
                },
                B = function(e, t) {
                    var r, n = e;
                    if (k(v, n) && (n = "%" + (r = v[n])[0] + "%"), k(f, n)) {
                        var i = f[n];
                        if (i === m && (i = g(n)), void 0 === i && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                        return {
                            alias: r,
                            name: n,
                            value: i
                        }
                    }
                    throw new o("intrinsic " + e + " does not exist!")
                };
            e.exports = function(e, t) {
                if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
                if (null === N(/^%?[^%]*%?$/, e)) throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var r = R(e),
                    n = r.length > 0 ? r[0] : "",
                    i = B("%" + n + "%", t),
                    s = i.name,
                    u = i.value,
                    l = !1,
                    p = i.alias;
                p && (n = p[0], x(r, S([0, 1], p)));
                for (var d = 1, m = !0; d < r.length; d += 1) {
                    var h = r[d],
                        y = E(h, 0, 1),
                        g = E(h, -1);
                    if (('"' === y || "'" === y || "`" === y || '"' === g || "'" === g || "`" === g) && y !== g) throw new o("property names with quotes must have matching quotes");
                    if ("constructor" !== h && m || (l = !0), n += "." + h, k(f, s = "%" + n + "%")) u = f[s];
                    else if (null != u) {
                        if (!(h in u)) {
                            if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                            return
                        }
                        if (c && d + 1 >= r.length) {
                            var v = c(u, h);
                            u = (m = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : u[h]
                        } else m = k(u, h), u = u[h];
                        m && !l && (f[s] = u)
                    }
                }
                return u
            }
        },
        27296: function(e, t, r) {
            "use strict";
            var n = r(40210)("%Object.getOwnPropertyDescriptor%", !0);
            if (n) try {
                n([], "length")
            } catch (e) {
                n = null
            }
            e.exports = n
        },
        41405: function(e, t, r) {
            "use strict";
            var n = "undefined" != typeof Symbol && Symbol,
                o = r(55419);
            e.exports = function() {
                return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
            }
        },
        55419: function(e) {
            "use strict";
            e.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var e = {},
                    t = Symbol("test"),
                    r = Object(t);
                if ("string" == typeof t || "[object Symbol]" !== Object.prototype.toString.call(t) || "[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                for (t in e[t] = 42, e) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(e).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                var n = Object.getOwnPropertySymbols(e);
                if (1 !== n.length || n[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (42 !== o.value || !0 !== o.enumerable) return !1
                }
                return !0
            }
        },
        96410: function(e, t, r) {
            "use strict";
            var n = r(55419);
            e.exports = function() {
                return n() && !!Symbol.toStringTag
            }
        },
        17642: function(e, t, r) {
            "use strict";
            var n = r(58612);
            e.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
        },
        80645: function(e, t) {
            t.read = function(e, t, r, n, o) {
                var i, a, s = 8 * o - n - 1,
                    c = (1 << s) - 1,
                    u = c >> 1,
                    l = -7,
                    p = r ? o - 1 : 0,
                    d = r ? -1 : 1,
                    m = e[t + p];
                for (p += d, i = m & (1 << -l) - 1, m >>= -l, l += s; l > 0; i = 256 * i + e[t + p], p += d, l -= 8);
                for (a = i & (1 << -l) - 1, i >>= -l, l += n; l > 0; a = 256 * a + e[t + p], p += d, l -= 8);
                if (0 === i) i = 1 - u;
                else {
                    if (i === c) return a ? NaN : (m ? -1 : 1) * (1 / 0);
                    a += Math.pow(2, n), i -= u
                }
                return (m ? -1 : 1) * a * Math.pow(2, i - n)
            }, t.write = function(e, t, r, n, o, i) {
                var a, s, c, u = 8 * i - o - 1,
                    l = (1 << u) - 1,
                    p = l >> 1,
                    d = 23 === o ? 5960464477539062e-23 : 0,
                    m = n ? 0 : i - 1,
                    h = n ? 1 : -1,
                    f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + p >= 1 ? t += d / c : t += d * Math.pow(2, 1 - p), t * c >= 2 && (a++, c /= 2), a + p >= l ? (s = 0, a = l) : a + p >= 1 ? (s = (t * c - 1) * Math.pow(2, o), a += p) : (s = t * Math.pow(2, p - 1) * Math.pow(2, o), a = 0)); o >= 8; e[r + m] = 255 & s, m += h, s /= 256, o -= 8);
                for (a = a << o | s, u += o; u > 0; e[r + m] = 255 & a, m += h, a /= 256, u -= 8);
                e[r + m - h] |= 128 * f
            }
        },
        35717: function(e) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        },
        82584: function(e, t, r) {
            "use strict";
            var n = r(96410)(),
                o = r(21924)("Object.prototype.toString"),
                i = function(e) {
                    return (!n || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === o(e)
                },
                a = function(e) {
                    return !!i(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== o(e) && "[object Function]" === o(e.callee)
                },
                s = function() {
                    return i(arguments)
                }();
            i.isLegacyArguments = a, e.exports = s ? i : a
        },
        95320: function(e) {
            "use strict";
            var t, r, n = Function.prototype.toString,
                o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
            if ("function" == typeof o && "function" == typeof Object.defineProperty) try {
                t = Object.defineProperty({}, "length", {
                    get: function() {
                        throw r
                    }
                }), r = {}, o(function() {
                    throw 42
                }, null, t)
            } catch (e) {
                e !== r && (o = null)
            } else o = null;
            var i = /^\s*class\b/,
                a = function(e) {
                    try {
                        var t = n.call(e);
                        return i.test(t)
                    } catch (e) {
                        return !1
                    }
                },
                s = function(e) {
                    try {
                        if (a(e)) return !1;
                        return n.call(e), !0
                    } catch (e) {
                        return !1
                    }
                },
                c = Object.prototype.toString,
                u = "function" == typeof Symbol && !!Symbol.toStringTag,
                l = !(0 in [, ]),
                p = function() {
                    return !1
                };
            if ("object" == typeof document) {
                var d = document.all;
                c.call(d) === c.call(document.all) && (p = function(e) {
                    if ((l || !e) && (void 0 === e || "object" == typeof e)) try {
                        var t = c.call(e);
                        return ("[object HTMLAllCollection]" === t || "[object HTML document.all class]" === t || "[object HTMLCollection]" === t || "[object Object]" === t) && null == e("")
                    } catch (e) {}
                    return !1
                })
            }
            e.exports = o ? function(e) {
                if (p(e)) return !0;
                if (!e || "function" != typeof e && "object" != typeof e) return !1;
                try {
                    o(e, null, t)
                } catch (e) {
                    if (e !== r) return !1
                }
                return !a(e) && s(e)
            } : function(e) {
                if (p(e)) return !0;
                if (!e || "function" != typeof e && "object" != typeof e) return !1;
                if (u) return s(e);
                if (a(e)) return !1;
                var t = c.call(e);
                return !!("[object Function]" === t || "[object GeneratorFunction]" === t || /^\[object HTML/.test(t)) && s(e)
            }
        },
        48662: function(e, t, r) {
            "use strict";
            var n, o = Object.prototype.toString,
                i = Function.prototype.toString,
                a = /^\s*(?:function)?\*/,
                s = r(96410)(),
                c = Object.getPrototypeOf,
                u = function() {
                    if (!s) return !1;
                    try {
                        return Function("return function*() {}")()
                    } catch (e) {}
                };
            e.exports = function(e) {
                if ("function" != typeof e) return !1;
                if (a.test(i.call(e))) return !0;
                if (!s) return "[object GeneratorFunction]" === o.call(e);
                if (!c) return !1;
                if (void 0 === n) {
                    var t = u();
                    n = !!t && c(t)
                }
                return c(e) === n
            }
        },
        85692: function(e, t, r) {
            "use strict";
            var n = r(94029),
                o = r(63083),
                i = r(21924),
                a = i("Object.prototype.toString"),
                s = r(96410)(),
                c = r(27296),
                u = "undefined" == typeof globalThis ? r.g : globalThis,
                l = o(),
                p = i("Array.prototype.indexOf", !0) || function(e, t) {
                    for (var r = 0; r < e.length; r += 1)
                        if (e[r] === t) return r;
                    return -1
                },
                d = i("String.prototype.slice"),
                m = {},
                h = Object.getPrototypeOf;
            s && c && h && n(l, function(e) {
                var t = new u[e];
                if (Symbol.toStringTag in t) {
                    var r = h(t),
                        n = c(r, Symbol.toStringTag);
                    n || (n = c(h(r), Symbol.toStringTag)), m[e] = n.get
                }
            });
            var f = function(e) {
                var t = !1;
                return n(m, function(r, n) {
                    if (!t) try {
                        t = r.call(e) === n
                    } catch (e) {}
                }), t
            };
            e.exports = function(e) {
                return !!e && "object" == typeof e && (s && Symbol.toStringTag in e ? !!c && f(e) : p(l, d(a(e), 8, -1)) > -1)
            }
        },
        44509: function(e, t) {
            ! function(e) {
                "use strict";

                function t(e) {
                    return null !== e && "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return null !== e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function n(e, o) {
                    if (e === o) return !0;
                    if (Object.prototype.toString.call(e) !== Object.prototype.toString.call(o)) return !1;
                    if (!0 === t(e)) {
                        if (e.length !== o.length) return !1;
                        for (var i = 0; i < e.length; i++)
                            if (!1 === n(e[i], o[i])) return !1;
                        return !0
                    }
                    if (!0 === r(e)) {
                        var a = {};
                        for (var s in e)
                            if (hasOwnProperty.call(e, s)) {
                                if (!1 === n(e[s], o[s])) return !1;
                                a[s] = !0
                            }
                        for (var c in o)
                            if (hasOwnProperty.call(o, c) && !0 !== a[c]) return !1;
                        return !0
                    }
                    return !1
                }

                function o(e) {
                    if ("" === e || !1 === e || null === e || t(e) && 0 === e.length) return !0;
                    if (!r(e)) return !1;
                    for (var n in e)
                        if (e.hasOwnProperty(n)) return !1;
                    return !0
                }
                i = "function" == typeof String.prototype.trimLeft ? function(e) {
                    return e.trimLeft()
                } : function(e) {
                    return e.match(/^\s*(.*)/)[1]
                };
                var i, a = {
                        0: "number",
                        1: "any",
                        2: "string",
                        3: "array",
                        4: "object",
                        5: "boolean",
                        6: "expression",
                        7: "null",
                        8: "Array<number>",
                        9: "Array<string>"
                    },
                    s = "UnquotedIdentifier",
                    c = "QuotedIdentifier",
                    u = "Rbracket",
                    l = "Rparen",
                    p = "Comma",
                    d = "Colon",
                    m = "Rbrace",
                    h = "Number",
                    f = "Current",
                    y = "Expref",
                    g = "Pipe",
                    v = "Flatten",
                    b = "Star",
                    k = "Filter",
                    S = "Lbrace",
                    x = "Lbracket",
                    C = "Lparen",
                    E = "Literal",
                    N = {
                        ".": "Dot",
                        "*": b,
                        ",": p,
                        ":": d,
                        "{": S,
                        "}": m,
                        "]": u,
                        "(": C,
                        ")": l,
                        "@": f
                    },
                    A = {
                        "<": !0,
                        ">": !0,
                        "=": !0,
                        "!": !0
                    },
                    w = {
                        " ": !0,
                        "	": !0,
                        "\n": !0
                    };

                function R(e) {
                    return e >= "0" && e <= "9" || "-" === e
                }

                function B() {}
                B.prototype = {
                    tokenize: function(e) {
                        var t, r, n, o, i = [];
                        for (this._current = 0; this._current < e.length;)
                            if ((t = e[this._current]) >= "a" && t <= "z" || t >= "A" && t <= "Z" || "_" === t) r = this._current, n = this._consumeUnquotedIdentifier(e), i.push({
                                type: s,
                                value: n,
                                start: r
                            });
                            else if (void 0 !== N[e[this._current]]) i.push({
                            type: N[e[this._current]],
                            value: e[this._current],
                            start: this._current
                        }), this._current++;
                        else if (R(e[this._current])) o = this._consumeNumber(e), i.push(o);
                        else if ("[" === e[this._current]) o = this._consumeLBracket(e), i.push(o);
                        else if ('"' === e[this._current]) r = this._current, n = this._consumeQuotedIdentifier(e), i.push({
                            type: c,
                            value: n,
                            start: r
                        });
                        else if ("'" === e[this._current]) r = this._current, n = this._consumeRawStringLiteral(e), i.push({
                            type: E,
                            value: n,
                            start: r
                        });
                        else if ("`" === e[this._current]) {
                            r = this._current;
                            var a = this._consumeLiteral(e);
                            i.push({
                                type: E,
                                value: a,
                                start: r
                            })
                        } else if (void 0 !== A[e[this._current]]) i.push(this._consumeOperator(e));
                        else if (void 0 !== w[e[this._current]]) this._current++;
                        else if ("&" === e[this._current]) r = this._current, this._current++, "&" === e[this._current] ? (this._current++, i.push({
                            type: "And",
                            value: "&&",
                            start: r
                        })) : i.push({
                            type: y,
                            value: "&",
                            start: r
                        });
                        else if ("|" === e[this._current]) r = this._current, this._current++, "|" === e[this._current] ? (this._current++, i.push({
                            type: "Or",
                            value: "||",
                            start: r
                        })) : i.push({
                            type: g,
                            value: "|",
                            start: r
                        });
                        else {
                            var u = Error("Unknown character:" + e[this._current]);
                            throw u.name = "LexerError", u
                        }
                        return i
                    },
                    _consumeUnquotedIdentifier: function(e) {
                        var t, r = this._current;
                        for (this._current++; this._current < e.length && ((t = e[this._current]) >= "a" && t <= "z" || t >= "A" && t <= "Z" || t >= "0" && t <= "9" || "_" === t);) this._current++;
                        return e.slice(r, this._current)
                    },
                    _consumeQuotedIdentifier: function(e) {
                        var t = this._current;
                        this._current++;
                        for (var r = e.length;
                            '"' !== e[this._current] && this._current < r;) {
                            var n = this._current;
                            "\\" === e[n] && ("\\" === e[n + 1] || '"' === e[n + 1]) ? n += 2 : n++, this._current = n
                        }
                        return this._current++, JSON.parse(e.slice(t, this._current))
                    },
                    _consumeRawStringLiteral: function(e) {
                        var t = this._current;
                        this._current++;
                        for (var r = e.length;
                            "'" !== e[this._current] && this._current < r;) {
                            var n = this._current;
                            "\\" === e[n] && ("\\" === e[n + 1] || "'" === e[n + 1]) ? n += 2 : n++, this._current = n
                        }
                        return this._current++, e.slice(t + 1, this._current - 1).replace("\\'", "'")
                    },
                    _consumeNumber: function(e) {
                        var t = this._current;
                        this._current++;
                        for (var r = e.length; R(e[this._current]) && this._current < r;) this._current++;
                        return {
                            type: h,
                            value: parseInt(e.slice(t, this._current)),
                            start: t
                        }
                    },
                    _consumeLBracket: function(e) {
                        var t = this._current;
                        return (this._current++, "?" === e[this._current]) ? (this._current++, {
                            type: k,
                            value: "[?",
                            start: t
                        }) : "]" === e[this._current] ? (this._current++, {
                            type: v,
                            value: "[]",
                            start: t
                        }) : {
                            type: x,
                            value: "[",
                            start: t
                        }
                    },
                    _consumeOperator: function(e) {
                        var t = this._current,
                            r = e[t];
                        return (this._current++, "!" === r) ? "=" === e[this._current] ? (this._current++, {
                            type: "NE",
                            value: "!=",
                            start: t
                        }) : {
                            type: "Not",
                            value: "!",
                            start: t
                        } : "<" === r ? "=" === e[this._current] ? (this._current++, {
                            type: "LTE",
                            value: "<=",
                            start: t
                        }) : {
                            type: "LT",
                            value: "<",
                            start: t
                        } : ">" === r ? "=" === e[this._current] ? (this._current++, {
                            type: "GTE",
                            value: ">=",
                            start: t
                        }) : {
                            type: "GT",
                            value: ">",
                            start: t
                        } : "=" === r && "=" === e[this._current] ? (this._current++, {
                            type: "EQ",
                            value: "==",
                            start: t
                        }) : void 0
                    },
                    _consumeLiteral: function(e) {
                        this._current++;
                        for (var t, r = this._current, n = e.length;
                            "`" !== e[this._current] && this._current < n;) {
                            var o = this._current;
                            "\\" === e[o] && ("\\" === e[o + 1] || "`" === e[o + 1]) ? o += 2 : o++, this._current = o
                        }
                        var a = i(e.slice(r, this._current));
                        return a = a.replace("\\`", "`"), t = this._looksLikeJSON(a) ? JSON.parse(a) : JSON.parse('"' + a + '"'), this._current++, t
                    },
                    _looksLikeJSON: function(e) {
                        if ("" === e) return !1;
                        if ('[{"'.indexOf(e[0]) >= 0 || ["true", "false", "null"].indexOf(e) >= 0) return !0;
                        if (!("-0123456789".indexOf(e[0]) >= 0)) return !1;
                        try {
                            return JSON.parse(e), !0
                        } catch (e) {
                            return !1
                        }
                    }
                };
                var P = {};

                function q() {}

                function I(e) {
                    this.runtime = e
                }

                function T(e) {
                    this._interpreter = e, this.functionTable = {
                        abs: {
                            _func: this._functionAbs,
                            _signature: [{
                                types: [0]
                            }]
                        },
                        avg: {
                            _func: this._functionAvg,
                            _signature: [{
                                types: [8]
                            }]
                        },
                        ceil: {
                            _func: this._functionCeil,
                            _signature: [{
                                types: [0]
                            }]
                        },
                        contains: {
                            _func: this._functionContains,
                            _signature: [{
                                types: [2, 3]
                            }, {
                                types: [1]
                            }]
                        },
                        ends_with: {
                            _func: this._functionEndsWith,
                            _signature: [{
                                types: [2]
                            }, {
                                types: [2]
                            }]
                        },
                        floor: {
                            _func: this._functionFloor,
                            _signature: [{
                                types: [0]
                            }]
                        },
                        length: {
                            _func: this._functionLength,
                            _signature: [{
                                types: [2, 3, 4]
                            }]
                        },
                        map: {
                            _func: this._functionMap,
                            _signature: [{
                                types: [6]
                            }, {
                                types: [3]
                            }]
                        },
                        max: {
                            _func: this._functionMax,
                            _signature: [{
                                types: [8, 9]
                            }]
                        },
                        merge: {
                            _func: this._functionMerge,
                            _signature: [{
                                types: [4],
                                variadic: !0
                            }]
                        },
                        max_by: {
                            _func: this._functionMaxBy,
                            _signature: [{
                                types: [3]
                            }, {
                                types: [6]
                            }]
                        },
                        sum: {
                            _func: this._functionSum,
                            _signature: [{
                                types: [8]
                            }]
                        },
                        starts_with: {
                            _func: this._functionStartsWith,
                            _signature: [{
                                types: [2]
                            }, {
                                types: [2]
                            }]
                        },
                        min: {
                            _func: this._functionMin,
                            _signature: [{
                                types: [8, 9]
                            }]
                        },
                        min_by: {
                            _func: this._functionMinBy,
                            _signature: [{
                                types: [3]
                            }, {
                                types: [6]
                            }]
                        },
                        type: {
                            _func: this._functionType,
                            _signature: [{
                                types: [1]
                            }]
                        },
                        keys: {
                            _func: this._functionKeys,
                            _signature: [{
                                types: [4]
                            }]
                        },
                        values: {
                            _func: this._functionValues,
                            _signature: [{
                                types: [4]
                            }]
                        },
                        sort: {
                            _func: this._functionSort,
                            _signature: [{
                                types: [9, 8]
                            }]
                        },
                        sort_by: {
                            _func: this._functionSortBy,
                            _signature: [{
                                types: [3]
                            }, {
                                types: [6]
                            }]
                        },
                        join: {
                            _func: this._functionJoin,
                            _signature: [{
                                types: [2]
                            }, {
                                types: [9]
                            }]
                        },
                        reverse: {
                            _func: this._functionReverse,
                            _signature: [{
                                types: [2, 3]
                            }]
                        },
                        to_array: {
                            _func: this._functionToArray,
                            _signature: [{
                                types: [1]
                            }]
                        },
                        to_string: {
                            _func: this._functionToString,
                            _signature: [{
                                types: [1]
                            }]
                        },
                        to_number: {
                            _func: this._functionToNumber,
                            _signature: [{
                                types: [1]
                            }]
                        },
                        not_null: {
                            _func: this._functionNotNull,
                            _signature: [{
                                types: [1],
                                variadic: !0
                            }]
                        }
                    }
                }
                P.EOF = 0, P[s] = 0, P[c] = 0, P[u] = 0, P[l] = 0, P[p] = 0, P[m] = 0, P[h] = 0, P[f] = 0, P[y] = 0, P[g] = 1, P.Or = 2, P.And = 3, P.EQ = 5, P.GT = 5, P.LT = 5, P.GTE = 5, P.LTE = 5, P.NE = 5, P[v] = 9, P[b] = 20, P[k] = 21, P.Dot = 40, P.Not = 45, P[S] = 50, P[x] = 55, P[C] = 60, q.prototype = {
                    parse: function(e) {
                        this._loadTokens(e), this.index = 0;
                        var t = this.expression(0);
                        if ("EOF" !== this._lookahead(0)) {
                            var r = this._lookaheadToken(0),
                                n = Error("Unexpected token type: " + r.type + ", value: " + r.value);
                            throw n.name = "ParserError", n
                        }
                        return t
                    },
                    _loadTokens: function(e) {
                        var t = new B().tokenize(e);
                        t.push({
                            type: "EOF",
                            value: "",
                            start: e.length
                        }), this.tokens = t
                    },
                    expression: function(e) {
                        var t = this._lookaheadToken(0);
                        this._advance();
                        for (var r = this.nud(t), n = this._lookahead(0); e < P[n];) this._advance(), r = this.led(n, r), n = this._lookahead(0);
                        return r
                    },
                    _lookahead: function(e) {
                        return this.tokens[this.index + e].type
                    },
                    _lookaheadToken: function(e) {
                        return this.tokens[this.index + e]
                    },
                    _advance: function() {
                        this.index++
                    },
                    nud: function(e) {
                        switch (e.type) {
                            case E:
                                return {
                                    type: "Literal",
                                    value: e.value
                                };
                            case s:
                                return {
                                    type: "Field",
                                    name: e.value
                                };
                            case c:
                                var t, r, n = {
                                    type: "Field",
                                    name: e.value
                                };
                                if (this._lookahead(0) === C) throw Error("Quoted identifier not allowed for function names.");
                                return n;
                            case "Not":
                                return {
                                    type: "NotExpression",
                                    children: [t = this.expression(P.Not)]
                                };
                            case b:
                                return t = null, {
                                    type: "ValueProjection",
                                    children: [{
                                        type: "Identity"
                                    }, t = this._lookahead(0) === u ? {
                                        type: "Identity"
                                    } : this._parseProjectionRHS(P.Star)]
                                };
                            case k:
                                return this.led(e.type, {
                                    type: "Identity"
                                });
                            case S:
                                return this._parseMultiselectHash();
                            case v:
                                return {
                                    type: "Projection",
                                    children: [{
                                        type: v,
                                        children: [{
                                            type: "Identity"
                                        }]
                                    }, t = this._parseProjectionRHS(P.Flatten)]
                                };
                            case x:
                                if (this._lookahead(0) === h || this._lookahead(0) === d) return t = this._parseIndexExpression(), this._projectIfSlice({
                                    type: "Identity"
                                }, t);
                                if (this._lookahead(0) === b && this._lookahead(1) === u) return this._advance(), this._advance(), {
                                    type: "Projection",
                                    children: [{
                                        type: "Identity"
                                    }, t = this._parseProjectionRHS(P.Star)]
                                };
                                return this._parseMultiselectList();
                            case f:
                                return {
                                    type: f
                                };
                            case y:
                                return {
                                    type: "ExpressionReference",
                                    children: [r = this.expression(P.Expref)]
                                };
                            case C:
                                for (var o = []; this._lookahead(0) !== l;) this._lookahead(0) === f ? (r = {
                                    type: f
                                }, this._advance()) : r = this.expression(0), o.push(r);
                                return this._match(l), o[0];
                            default:
                                this._errorToken(e)
                        }
                    },
                    led: function(e, t) {
                        var r;
                        switch (e) {
                            case "Dot":
                                var n = P.Dot;
                                if (this._lookahead(0) !== b) return {
                                    type: "Subexpression",
                                    children: [t, r = this._parseDotRHS(n)]
                                };
                                return this._advance(), {
                                    type: "ValueProjection",
                                    children: [t, r = this._parseProjectionRHS(n)]
                                };
                            case g:
                                return {
                                    type: g,
                                    children: [t, r = this.expression(P.Pipe)]
                                };
                            case "Or":
                                return {
                                    type: "OrExpression",
                                    children: [t, r = this.expression(P.Or)]
                                };
                            case "And":
                                return {
                                    type: "AndExpression",
                                    children: [t, r = this.expression(P.And)]
                                };
                            case C:
                                for (var o, i = t.name, a = []; this._lookahead(0) !== l;) this._lookahead(0) === f ? (o = {
                                    type: f
                                }, this._advance()) : o = this.expression(0), this._lookahead(0) === p && this._match(p), a.push(o);
                                return this._match(l), {
                                    type: "Function",
                                    name: i,
                                    children: a
                                };
                            case k:
                                var s = this.expression(0);
                                return this._match(u), {
                                    type: "FilterProjection",
                                    children: [t, r = this._lookahead(0) === v ? {
                                        type: "Identity"
                                    } : this._parseProjectionRHS(P.Filter), s]
                                };
                            case v:
                                return {
                                    type: "Projection",
                                    children: [{
                                        type: v,
                                        children: [t]
                                    }, this._parseProjectionRHS(P.Flatten)]
                                };
                            case "EQ":
                            case "NE":
                            case "GT":
                            case "GTE":
                            case "LT":
                            case "LTE":
                                return this._parseComparator(t, e);
                            case x:
                                var c = this._lookaheadToken(0);
                                if (c.type === h || c.type === d) return r = this._parseIndexExpression(), this._projectIfSlice(t, r);
                                return this._match(b), this._match(u), {
                                    type: "Projection",
                                    children: [t, r = this._parseProjectionRHS(P.Star)]
                                };
                            default:
                                this._errorToken(this._lookaheadToken(0))
                        }
                    },
                    _match: function(e) {
                        if (this._lookahead(0) === e) this._advance();
                        else {
                            var t = Error("Expected " + e + ", got: " + this._lookaheadToken(0).type);
                            throw t.name = "ParserError", t
                        }
                    },
                    _errorToken: function(e) {
                        var t = Error("Invalid token (" + e.type + '): "' + e.value + '"');
                        throw t.name = "ParserError", t
                    },
                    _parseIndexExpression: function() {
                        if (this._lookahead(0) === d || this._lookahead(1) === d) return this._parseSliceExpression();
                        var e = {
                            type: "Index",
                            value: this._lookaheadToken(0).value
                        };
                        return this._advance(), this._match(u), e
                    },
                    _projectIfSlice: function(e, t) {
                        var r = {
                            type: "IndexExpression",
                            children: [e, t]
                        };
                        return "Slice" === t.type ? {
                            type: "Projection",
                            children: [r, this._parseProjectionRHS(P.Star)]
                        } : r
                    },
                    _parseSliceExpression: function() {
                        for (var e = [null, null, null], t = 0, r = this._lookahead(0); r !== u && t < 3;) {
                            if (r === d) t++, this._advance();
                            else if (r === h) e[t] = this._lookaheadToken(0).value, this._advance();
                            else {
                                var n = this._lookahead(0),
                                    o = Error("Syntax error, unexpected token: " + n.value + "(" + n.type + ")");
                                throw o.name = "Parsererror", o
                            }
                            r = this._lookahead(0)
                        }
                        return this._match(u), {
                            type: "Slice",
                            children: e
                        }
                    },
                    _parseComparator: function(e, t) {
                        var r = this.expression(P[t]);
                        return {
                            type: "Comparator",
                            name: t,
                            children: [e, r]
                        }
                    },
                    _parseDotRHS: function(e) {
                        var t = this._lookahead(0);
                        return [s, c, b].indexOf(t) >= 0 ? this.expression(e) : t === x ? (this._match(x), this._parseMultiselectList()) : t === S ? (this._match(S), this._parseMultiselectHash()) : void 0
                    },
                    _parseProjectionRHS: function(e) {
                        var t;
                        if (P[this._lookahead(0)] < 10) t = {
                            type: "Identity"
                        };
                        else if (this._lookahead(0) === x) t = this.expression(e);
                        else if (this._lookahead(0) === k) t = this.expression(e);
                        else if ("Dot" === this._lookahead(0)) this._match("Dot"), t = this._parseDotRHS(e);
                        else {
                            var r = this._lookaheadToken(0),
                                n = Error("Sytanx error, unexpected token: " + r.value + "(" + r.type + ")");
                            throw n.name = "ParserError", n
                        }
                        return t
                    },
                    _parseMultiselectList: function() {
                        for (var e = []; this._lookahead(0) !== u;) {
                            var t = this.expression(0);
                            if (e.push(t), this._lookahead(0) === p && (this._match(p), this._lookahead(0) === u)) throw Error("Unexpected token Rbracket")
                        }
                        return this._match(u), {
                            type: "MultiSelectList",
                            children: e
                        }
                    },
                    _parseMultiselectHash: function() {
                        for (var e, t, r, n = [], o = [s, c];;) {
                            if (e = this._lookaheadToken(0), 0 > o.indexOf(e.type)) throw Error("Expecting an identifier token, got: " + e.type);
                            if (t = e.value, this._advance(), this._match(d), r = {
                                    type: "KeyValuePair",
                                    name: t,
                                    value: this.expression(0)
                                }, n.push(r), this._lookahead(0) === p) this._match(p);
                            else if (this._lookahead(0) === m) {
                                this._match(m);
                                break
                            }
                        }
                        return {
                            type: "MultiSelectHash",
                            children: n
                        }
                    }
                }, I.prototype = {
                    search: function(e, t) {
                        return this.visit(e, t)
                    },
                    visit: function(e, i) {
                        switch (e.type) {
                            case "Field":
                                if (null !== i && r(i) && void 0 !== (p = i[e.name])) return p;
                                return null;
                            case "Subexpression":
                                for (h = 1, c = this.visit(e.children[0], i); h < e.children.length; h++)
                                    if (null === (c = this.visit(e.children[1], c))) return null;
                                return c;
                            case "IndexExpression":
                                return d = this.visit(e.children[0], i), this.visit(e.children[1], d);
                            case "Index":
                                if (!t(i)) return null;
                                var a, s, c, u, l, p, d, m, h, b, k = e.value;
                                return k < 0 && (k = i.length + k), void 0 === (c = i[k]) && (c = null), c;
                            case "Slice":
                                if (!t(i)) return null;
                                var S = e.children.slice(0),
                                    x = this.computeSliceParams(i.length, S),
                                    C = x[0],
                                    E = x[1],
                                    N = x[2];
                                if (c = [], N > 0)
                                    for (h = C; h < E; h += N) c.push(i[h]);
                                else
                                    for (h = C; h > E; h += N) c.push(i[h]);
                                return c;
                            case "Projection":
                                var A = this.visit(e.children[0], i);
                                if (!t(A)) return null;
                                for (h = 0, m = []; h < A.length; h++) null !== (s = this.visit(e.children[1], A[h])) && m.push(s);
                                return m;
                            case "ValueProjection":
                                if (!r(A = this.visit(e.children[0], i))) return null;
                                m = [];
                                var w = function(e) {
                                    for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[t[n]]);
                                    return r
                                }(A);
                                for (h = 0; h < w.length; h++) null !== (s = this.visit(e.children[1], w[h])) && m.push(s);
                                return m;
                            case "FilterProjection":
                                if (!t(A = this.visit(e.children[0], i))) return null;
                                var R = [],
                                    B = [];
                                for (h = 0; h < A.length; h++) o(a = this.visit(e.children[2], A[h])) || R.push(A[h]);
                                for (var P = 0; P < R.length; P++) null !== (s = this.visit(e.children[1], R[P])) && B.push(s);
                                return B;
                            case "Comparator":
                                switch (u = this.visit(e.children[0], i), l = this.visit(e.children[1], i), e.name) {
                                    case "EQ":
                                        c = n(u, l);
                                        break;
                                    case "NE":
                                        c = !n(u, l);
                                        break;
                                    case "GT":
                                        c = u > l;
                                        break;
                                    case "GTE":
                                        c = u >= l;
                                        break;
                                    case "LT":
                                        c = u < l;
                                        break;
                                    case "LTE":
                                        c = u <= l;
                                        break;
                                    default:
                                        throw Error("Unknown comparator: " + e.name)
                                }
                                return c;
                            case v:
                                var q = this.visit(e.children[0], i);
                                if (!t(q)) return null;
                                var I = [];
                                for (h = 0; h < q.length; h++) t(s = q[h]) ? I.push.apply(I, s) : I.push(s);
                                return I;
                            case "Identity":
                                return i;
                            case "MultiSelectList":
                                if (null === i) return null;
                                for (h = 0, m = []; h < e.children.length; h++) m.push(this.visit(e.children[h], i));
                                return m;
                            case "MultiSelectHash":
                                if (null === i) return null;
                                for (h = 0, m = {}; h < e.children.length; h++) m[(b = e.children[h]).name] = this.visit(b.value, i);
                                return m;
                            case "OrExpression":
                                return o(a = this.visit(e.children[0], i)) && (a = this.visit(e.children[1], i)), a;
                            case "AndExpression":
                                if (!0 === o(u = this.visit(e.children[0], i))) return u;
                                return this.visit(e.children[1], i);
                            case "NotExpression":
                                return o(u = this.visit(e.children[0], i));
                            case "Literal":
                                return e.value;
                            case g:
                                return d = this.visit(e.children[0], i), this.visit(e.children[1], d);
                            case f:
                                return i;
                            case "Function":
                                var T = [];
                                for (h = 0; h < e.children.length; h++) T.push(this.visit(e.children[h], i));
                                return this.runtime.callFunction(e.name, T);
                            case "ExpressionReference":
                                var _ = e.children[0];
                                return _.jmespathType = y, _;
                            default:
                                throw Error("Unknown node type: " + e.type)
                        }
                    },
                    computeSliceParams: function(e, t) {
                        var r = t[0],
                            n = t[1],
                            o = t[2],
                            i = [null, null, null];
                        if (null === o) o = 1;
                        else if (0 === o) {
                            var a = Error("Invalid slice, step cannot be 0");
                            throw a.name = "RuntimeError", a
                        }
                        var s = o < 0;
                        return r = null === r ? s ? e - 1 : 0 : this.capSliceRange(e, r, o), n = null === n ? s ? -1 : e : this.capSliceRange(e, n, o), i[0] = r, i[1] = n, i[2] = o, i
                    },
                    capSliceRange: function(e, t, r) {
                        return t < 0 ? (t += e) < 0 && (t = r < 0 ? -1 : 0) : t >= e && (t = r < 0 ? e - 1 : e), t
                    }
                }, T.prototype = {
                    callFunction: function(e, t) {
                        var r = this.functionTable[e];
                        if (void 0 === r) throw Error("Unknown function: " + e + "()");
                        return this._validateArgs(e, t, r._signature), r._func.call(this, t)
                    },
                    _validateArgs: function(e, t, r) {
                        if (r[r.length - 1].variadic) {
                            if (t.length < r.length) throw n = 1 === r.length ? " argument" : " arguments", Error("ArgumentError: " + e + "() takes at least" + r.length + n + " but received " + t.length)
                        } else if (t.length !== r.length) throw n = 1 === r.length ? " argument" : " arguments", Error("ArgumentError: " + e + "() takes " + r.length + n + " but received " + t.length);
                        for (var n, o, i, s, c = 0; c < r.length; c++) {
                            s = !1, o = r[c].types, i = this._getTypeName(t[c]);
                            for (var u = 0; u < o.length; u++)
                                if (this._typeMatches(i, o[u], t[c])) {
                                    s = !0;
                                    break
                                }
                            if (!s) throw Error("TypeError: " + e + "() expected argument " + (c + 1) + " to be type " + o.map(function(e) {
                                return a[e]
                            }).join(",") + " but received type " + a[i] + " instead.")
                        }
                    },
                    _typeMatches: function(e, t, r) {
                        if (1 === t) return !0;
                        if (9 !== t && 8 !== t && 3 !== t) return e === t;
                        if (3 === t) return 3 === e;
                        if (3 === e) {
                            var n;
                            8 === t ? n = 0 : 9 === t && (n = 2);
                            for (var o = 0; o < r.length; o++)
                                if (!this._typeMatches(this._getTypeName(r[o]), n, r[o])) return !1;
                            return !0
                        }
                    },
                    _getTypeName: function(e) {
                        switch (Object.prototype.toString.call(e)) {
                            case "[object String]":
                                return 2;
                            case "[object Number]":
                                return 0;
                            case "[object Array]":
                                return 3;
                            case "[object Boolean]":
                                return 5;
                            case "[object Null]":
                                return 7;
                            case "[object Object]":
                                if (e.jmespathType === y) return 6;
                                return 4
                        }
                    },
                    _functionStartsWith: function(e) {
                        return 0 === e[0].lastIndexOf(e[1])
                    },
                    _functionEndsWith: function(e) {
                        var t = e[0],
                            r = e[1];
                        return -1 !== t.indexOf(r, t.length - r.length)
                    },
                    _functionReverse: function(e) {
                        if (2 === this._getTypeName(e[0])) {
                            for (var t = e[0], r = "", n = t.length - 1; n >= 0; n--) r += t[n];
                            return r
                        }
                        var o = e[0].slice(0);
                        return o.reverse(), o
                    },
                    _functionAbs: function(e) {
                        return Math.abs(e[0])
                    },
                    _functionCeil: function(e) {
                        return Math.ceil(e[0])
                    },
                    _functionAvg: function(e) {
                        for (var t = 0, r = e[0], n = 0; n < r.length; n++) t += r[n];
                        return t / r.length
                    },
                    _functionContains: function(e) {
                        return e[0].indexOf(e[1]) >= 0
                    },
                    _functionFloor: function(e) {
                        return Math.floor(e[0])
                    },
                    _functionLength: function(e) {
                        return r(e[0]) ? Object.keys(e[0]).length : e[0].length
                    },
                    _functionMap: function(e) {
                        for (var t = [], r = this._interpreter, n = e[0], o = e[1], i = 0; i < o.length; i++) t.push(r.visit(n, o[i]));
                        return t
                    },
                    _functionMerge: function(e) {
                        for (var t = {}, r = 0; r < e.length; r++) {
                            var n = e[r];
                            for (var o in n) t[o] = n[o]
                        }
                        return t
                    },
                    _functionMax: function(e) {
                        if (!(e[0].length > 0)) return null;
                        if (0 === this._getTypeName(e[0][0])) return Math.max.apply(Math, e[0]);
                        for (var t = e[0], r = t[0], n = 1; n < t.length; n++) 0 > r.localeCompare(t[n]) && (r = t[n]);
                        return r
                    },
                    _functionMin: function(e) {
                        if (!(e[0].length > 0)) return null;
                        if (0 === this._getTypeName(e[0][0])) return Math.min.apply(Math, e[0]);
                        for (var t = e[0], r = t[0], n = 1; n < t.length; n++) 0 > t[n].localeCompare(r) && (r = t[n]);
                        return r
                    },
                    _functionSum: function(e) {
                        for (var t = 0, r = e[0], n = 0; n < r.length; n++) t += r[n];
                        return t
                    },
                    _functionType: function(e) {
                        switch (this._getTypeName(e[0])) {
                            case 0:
                                return "number";
                            case 2:
                                return "string";
                            case 3:
                                return "array";
                            case 4:
                                return "object";
                            case 5:
                                return "boolean";
                            case 6:
                                return "expref";
                            case 7:
                                return "null"
                        }
                    },
                    _functionKeys: function(e) {
                        return Object.keys(e[0])
                    },
                    _functionValues: function(e) {
                        for (var t = e[0], r = Object.keys(t), n = [], o = 0; o < r.length; o++) n.push(t[r[o]]);
                        return n
                    },
                    _functionJoin: function(e) {
                        var t = e[0];
                        return e[1].join(t)
                    },
                    _functionToArray: function(e) {
                        return 3 === this._getTypeName(e[0]) ? e[0] : [e[0]]
                    },
                    _functionToString: function(e) {
                        return 2 === this._getTypeName(e[0]) ? e[0] : JSON.stringify(e[0])
                    },
                    _functionToNumber: function(e) {
                        var t, r = this._getTypeName(e[0]);
                        return 0 === r ? e[0] : 2 !== r || isNaN(t = +e[0]) ? null : t
                    },
                    _functionNotNull: function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (7 !== this._getTypeName(e[t])) return e[t];
                        return null
                    },
                    _functionSort: function(e) {
                        var t = e[0].slice(0);
                        return t.sort(), t
                    },
                    _functionSortBy: function(e) {
                        var t = e[0].slice(0);
                        if (0 === t.length) return t;
                        var r = this._interpreter,
                            n = e[1],
                            o = this._getTypeName(r.visit(n, t[0]));
                        if (0 > [0, 2].indexOf(o)) throw Error("TypeError");
                        for (var i = this, a = [], s = 0; s < t.length; s++) a.push([s, t[s]]);
                        a.sort(function(e, t) {
                            var a = r.visit(n, e[1]),
                                s = r.visit(n, t[1]);
                            if (i._getTypeName(a) !== o) throw Error("TypeError: expected " + o + ", received " + i._getTypeName(a));
                            if (i._getTypeName(s) !== o) throw Error("TypeError: expected " + o + ", received " + i._getTypeName(s));
                            return a > s ? 1 : a < s ? -1 : e[0] - t[0]
                        });
                        for (var c = 0; c < a.length; c++) t[c] = a[c][1];
                        return t
                    },
                    _functionMaxBy: function(e) {
                        for (var t, r, n = e[1], o = e[0], i = this.createKeyFunction(n, [0, 2]), a = -1 / 0, s = 0; s < o.length; s++)(r = i(o[s])) > a && (a = r, t = o[s]);
                        return t
                    },
                    _functionMinBy: function(e) {
                        for (var t, r, n = e[1], o = e[0], i = this.createKeyFunction(n, [0, 2]), a = 1 / 0, s = 0; s < o.length; s++)(r = i(o[s])) < a && (a = r, t = o[s]);
                        return t
                    },
                    createKeyFunction: function(e, t) {
                        var r = this,
                            n = this._interpreter;
                        return function(o) {
                            var i = n.visit(e, o);
                            if (0 > t.indexOf(r._getTypeName(i))) throw Error("TypeError: expected one of " + t + ", received " + r._getTypeName(i));
                            return i
                        }
                    }
                }, e.tokenize = function(e) {
                    return new B().tokenize(e)
                }, e.compile = function(e) {
                    return new q().parse(e)
                }, e.search = function(e, t) {
                    var r = new q,
                        n = new T,
                        o = new I(n);
                    n._interpreter = o;
                    var i = r.parse(t);
                    return o.search(i, e)
                }, e.strictDeepEqual = n
            }(t)
        },
        83454: function(e, t, r) {
            "use strict";
            var n, o;
            e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof(null == (o = r.g.process) ? void 0 : o.env) ? r.g.process : r(77663)
        },
        11987: function(e, t, r) {
            ! function() {
                var t = {
                        452: function(e) {
                            "use strict";
                            e.exports = r(97334)
                        }
                    },
                    n = {};

                function o(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var i = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](i, i.exports, o), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return i.exports
                }
                o.ab = "//";
                var i = {};
                ! function() {
                    var e, t = i,
                        r = (e = o(452)) && "object" == typeof e && "default" in e ? e.default : e,
                        n = /https?|ftp|gopher|file/;

                    function a(e) {
                        "string" == typeof e && (e = v(e));
                        var t, o, i, a, s, c, u, l, p, d = (o = (t = e).auth, i = t.hostname, a = t.protocol || "", s = t.pathname || "", c = t.hash || "", u = t.query || "", l = !1, o = o ? encodeURIComponent(o).replace(/%3A/i, ":") + "@" : "", t.host ? l = o + t.host : i && (l = o + (~i.indexOf(":") ? "[" + i + "]" : i), t.port && (l += ":" + t.port)), u && "object" == typeof u && (u = r.encode(u)), p = t.search || u && "?" + u || "", a && ":" !== a.substr(-1) && (a += ":"), t.slashes || (!a || n.test(a)) && !1 !== l ? (l = "//" + (l || ""), s && "/" !== s[0] && (s = "/" + s)) : l || (l = ""), c && "#" !== c[0] && (c = "#" + c), p && "?" !== p[0] && (p = "?" + p), {
                            protocol: a,
                            host: l,
                            pathname: s = s.replace(/[?#]/g, encodeURIComponent),
                            search: p = p.replace("#", "%23"),
                            hash: c
                        });
                        return "" + d.protocol + d.host + d.pathname + d.search + d.hash
                    }
                    var s = "http://",
                        c = s + "w.w",
                        u = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                        l = /https?|ftp|gopher|file/;

                    function p(e, t) {
                        var r = "string" == typeof e ? v(e) : e;
                        e = "object" == typeof e ? a(e) : e;
                        var n = v(t),
                            o = "";
                        r.protocol && !r.slashes && (o = r.protocol, e = e.replace(r.protocol, ""), o += "/" === t[0] || "/" === e[0] ? "/" : ""), o && n.protocol && (o = "", n.slashes || (o = n.protocol, t = t.replace(n.protocol, "")));
                        var i = e.match(u);
                        i && !n.protocol && (e = e.substr((o = i[1] + (i[2] || "")).length), /^\/\/[^/]/.test(t) && (o = o.slice(0, -1)));
                        var p = new URL(e, c + "/"),
                            d = new URL(t, p).toString().replace(c, ""),
                            m = n.protocol || r.protocol;
                        return m += r.slashes || n.slashes ? "//" : "", !o && m ? d = d.replace(s, m) : o && (d = d.replace(s, "")), l.test(d) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== d.slice(-1) || (d = d.slice(0, -1)), o && (d = o + ("/" === d[0] ? d.substr(1) : d)), d
                    }

                    function d() {}
                    d.prototype.parse = v, d.prototype.format = a, d.prototype.resolve = p, d.prototype.resolveObject = p;
                    var m = /^https?|ftp|gopher|file/,
                        h = /^(.*?)([#?].*)/,
                        f = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                        y = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                        g = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

                    function v(e, t, n) {
                        if (void 0 === t && (t = !1), void 0 === n && (n = !1), e && "object" == typeof e && e instanceof d) return e;
                        var o = (e = e.trim()).match(h);
                        e = o ? o[1].replace(/\\/g, "/") + o[2] : e.replace(/\\/g, "/"), g.test(e) && "/" !== e.slice(-1) && (e += "/");
                        var i = !/(^javascript)/.test(e) && e.match(f),
                            s = y.test(e),
                            u = "";
                        i && (m.test(i[1]) || (u = i[1].toLowerCase(), e = "" + i[2] + i[3]), i[2] || (s = !1, m.test(i[1]) ? (u = i[1], e = "" + i[3]) : e = "//" + i[3]), 3 !== i[2].length && 1 !== i[2].length || (u = i[1], e = "/" + i[3]));
                        var l, p = (o ? o[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                            v = p && p[1],
                            b = new d,
                            k = "",
                            S = "";
                        try {
                            l = new URL(e)
                        } catch (t) {
                            k = t, u || n || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (S = "/", e = e.substr(1));
                            try {
                                l = new URL(e, c)
                            } catch (e) {
                                return b.protocol = u, b.href = u, b
                            }
                        }
                        b.slashes = s && !S, b.host = "w.w" === l.host ? "" : l.host, b.hostname = "w.w" === l.hostname ? "" : l.hostname.replace(/(\[|\])/g, ""), b.protocol = k ? u || null : l.protocol, b.search = l.search.replace(/\\/g, "%5C"), b.hash = l.hash.replace(/\\/g, "%5C");
                        var x = e.split("#");
                        !b.search && ~x[0].indexOf("?") && (b.search = "?"), b.hash || "" !== x[1] || (b.hash = "#"), b.query = t ? r.decode(l.search.substr(1)) : b.search.substr(1), b.pathname = S + (i ? l.pathname.replace(/['^|`]/g, function(e) {
                            return "%" + e.charCodeAt().toString(16).toUpperCase()
                        }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                            try {
                                return decodeURIComponent(t).split("").map(function(e) {
                                    var t = e.charCodeAt();
                                    return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase()
                                }).join("")
                            } catch (e) {
                                return t
                            }
                        }) : l.pathname), "about:" === b.protocol && "blank" === b.pathname && (b.protocol = "", b.pathname = ""), k && "/" !== e[0] && (b.pathname = b.pathname.substr(1)), u && !m.test(u) && "/" !== e.slice(-1) && "/" === b.pathname && (b.pathname = ""), b.path = b.pathname + b.search, b.auth = [l.username, l.password].map(decodeURIComponent).filter(Boolean).join(":"), b.port = l.port, v && !b.host.endsWith(v) && (b.host += v, b.port = v.slice(1)), b.href = S ? "" + b.pathname + b.search + b.hash : a(b);
                        var C = /^(file)/.test(b.href) ? ["host", "hostname"] : [];
                        return Object.keys(b).forEach(function(e) {
                            ~C.indexOf(e) || (b[e] = b[e] || null)
                        }), b
                    }
                    t.parse = v, t.format = a, t.resolve = p, t.resolveObject = function(e, t) {
                        return v(p(e, t))
                    }, t.Url = d
                }(), e.exports = i
            }()
        },
        77663: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, r, n, o = e.exports = {};

                            function i() {
                                throw Error("setTimeout has not been defined")
                            }

                            function a() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function s(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (r) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (r) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : i
                                } catch (e) {
                                    t = i
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : a
                                } catch (e) {
                                    r = a
                                }
                            }();
                            var c = [],
                                u = !1,
                                l = -1;

                            function p() {
                                u && n && (u = !1, n.length ? c = n.concat(c) : l = -1, c.length && d())
                            }

                            function d() {
                                if (!u) {
                                    var e = s(p);
                                    u = !0;
                                    for (var t = c.length; t;) {
                                        for (n = c, c = []; ++l < t;) n && n[l].run();
                                        l = -1, t = c.length
                                    }
                                    n = null, u = !1,
                                        function(e) {
                                            if (r === clearTimeout) return clearTimeout(e);
                                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                            try {
                                                r(e)
                                            } catch (t) {
                                                try {
                                                    return r.call(null, e)
                                                } catch (t) {
                                                    return r.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function m(e, t) {
                                this.fun = e, this.array = t
                            }

                            function h() {}
                            o.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                c.push(new m(e, t)), 1 !== c.length || u || s(d)
                            }, m.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(e) {
                                return []
                            }, o.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, o.cwd = function() {
                                return "/"
                            }, o.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, o.umask = function() {
                                return 0
                            }
                        }
                    },
                    r = {};

                function n(e) {
                    var o = r[e];
                    if (void 0 !== o) return o.exports;
                    var i = r[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](i, i.exports, n), a = !1
                    } finally {
                        a && delete r[e]
                    }
                    return i.exports
                }
                n.ab = "//";
                var o = n(229);
                e.exports = o
            }()
        },
        97334: function(e) {
            ! function() {
                "use strict";
                var t, r = {
                        815: function(e) {
                            e.exports = function(e, r, n, o) {
                                r = r || "&", n = n || "=";
                                var i = {};
                                if ("string" != typeof e || 0 === e.length) return i;
                                var a = /\+/g;
                                e = e.split(r);
                                var s = 1e3;
                                o && "number" == typeof o.maxKeys && (s = o.maxKeys);
                                var c = e.length;
                                s > 0 && c > s && (c = s);
                                for (var u = 0; u < c; ++u) {
                                    var l, p, d, m, h = e[u].replace(a, "%20"),
                                        f = h.indexOf(n);
                                    (f >= 0 ? (l = h.substr(0, f), p = h.substr(f + 1)) : (l = h, p = ""), d = decodeURIComponent(l), m = decodeURIComponent(p), Object.prototype.hasOwnProperty.call(i, d)) ? t(i[d]) ? i[d].push(m) : i[d] = [i[d], m]: i[d] = m
                                }
                                return i
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }
                        },
                        577: function(e) {
                            var t = function(e) {
                                switch (typeof e) {
                                    case "string":
                                        return e;
                                    case "boolean":
                                        return e ? "true" : "false";
                                    case "number":
                                        return isFinite(e) ? e : "";
                                    default:
                                        return ""
                                }
                            };
                            e.exports = function(e, i, a, s) {
                                return (i = i || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e) ? n(o(e), function(o) {
                                    var s = encodeURIComponent(t(o)) + a;
                                    return r(e[o]) ? n(e[o], function(e) {
                                        return s + encodeURIComponent(t(e))
                                    }).join(i) : s + encodeURIComponent(t(e[o]))
                                }).join(i) : s ? encodeURIComponent(t(s)) + a + encodeURIComponent(t(e)) : ""
                            };
                            var r = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            };

                            function n(e, t) {
                                if (e.map) return e.map(t);
                                for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                                return r
                            }
                            var o = Object.keys || function(e) {
                                var t = [];
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                                return t
                            }
                        }
                    },
                    n = {};

                function o(e) {
                    var t = n[e];
                    if (void 0 !== t) return t.exports;
                    var i = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        r[e](i, i.exports, o), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return i.exports
                }
                o.ab = "//";
                var i = {};
                (t = i).decode = t.parse = o(815), t.encode = t.stringify = o(577), e.exports = i
            }()
        },
        62587: function(e) {
            "use strict";
            e.exports = function(e, t, r, n) {
                t = t || "&", r = r || "=";
                var o = {};
                if ("string" != typeof e || 0 === e.length) return o;
                var i = /\+/g;
                e = e.split(t);
                var a = 1e3;
                n && "number" == typeof n.maxKeys && (a = n.maxKeys);
                var s = e.length;
                a > 0 && s > a && (s = a);
                for (var c = 0; c < s; ++c) {
                    var u, l, p, d, m = e[c].replace(i, "%20"),
                        h = m.indexOf(r);
                    (h >= 0 ? (u = m.substr(0, h), l = m.substr(h + 1)) : (u = m, l = ""), p = decodeURIComponent(u), d = decodeURIComponent(l), Object.prototype.hasOwnProperty.call(o, p)) ? Array.isArray(o[p]) ? o[p].push(d) : o[p] = [o[p], d]: o[p] = d
                }
                return o
            }
        },
        12361: function(e) {
            "use strict";
            var t = function(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            e.exports = function(e, r, n, o) {
                return (r = r || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e) ? Object.keys(e).map(function(o) {
                    var i = encodeURIComponent(t(o)) + n;
                    return Array.isArray(e[o]) ? e[o].map(function(e) {
                        return i + encodeURIComponent(t(e))
                    }).join(r) : i + encodeURIComponent(t(e[o]))
                }).join(r) : o ? encodeURIComponent(t(o)) + n + encodeURIComponent(t(e)) : ""
            }
        },
        17673: function(e, t, r) {
            "use strict";
            t.decode = t.parse = r(62587), t.encode = t.stringify = r(12361)
        },
        20384: function(e) {
            e.exports = function(e) {
                return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
            }
        },
        55955: function(e, t, r) {
            "use strict";
            var n = r(82584),
                o = r(48662),
                i = r(86430),
                a = r(85692);

            function s(e) {
                return e.call.bind(e)
            }
            var c = "undefined" != typeof BigInt,
                u = "undefined" != typeof Symbol,
                l = s(Object.prototype.toString),
                p = s(Number.prototype.valueOf),
                d = s(String.prototype.valueOf),
                m = s(Boolean.prototype.valueOf);
            if (c) var h = s(BigInt.prototype.valueOf);
            if (u) var f = s(Symbol.prototype.valueOf);

            function y(e, t) {
                if ("object" != typeof e) return !1;
                try {
                    return t(e), !0
                } catch (e) {
                    return !1
                }
            }

            function g(e) {
                return "[object Map]" === l(e)
            }

            function v(e) {
                return "[object Set]" === l(e)
            }

            function b(e) {
                return "[object WeakMap]" === l(e)
            }

            function k(e) {
                return "[object WeakSet]" === l(e)
            }

            function S(e) {
                return "[object ArrayBuffer]" === l(e)
            }

            function x(e) {
                return "undefined" != typeof ArrayBuffer && (S.working ? S(e) : e instanceof ArrayBuffer)
            }

            function C(e) {
                return "[object DataView]" === l(e)
            }

            function E(e) {
                return "undefined" != typeof DataView && (C.working ? C(e) : e instanceof DataView)
            }
            t.isArgumentsObject = n, t.isGeneratorFunction = o, t.isTypedArray = a, t.isPromise = function(e) {
                return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
            }, t.isArrayBufferView = function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || E(e)
            }, t.isUint8Array = function(e) {
                return "Uint8Array" === i(e)
            }, t.isUint8ClampedArray = function(e) {
                return "Uint8ClampedArray" === i(e)
            }, t.isUint16Array = function(e) {
                return "Uint16Array" === i(e)
            }, t.isUint32Array = function(e) {
                return "Uint32Array" === i(e)
            }, t.isInt8Array = function(e) {
                return "Int8Array" === i(e)
            }, t.isInt16Array = function(e) {
                return "Int16Array" === i(e)
            }, t.isInt32Array = function(e) {
                return "Int32Array" === i(e)
            }, t.isFloat32Array = function(e) {
                return "Float32Array" === i(e)
            }, t.isFloat64Array = function(e) {
                return "Float64Array" === i(e)
            }, t.isBigInt64Array = function(e) {
                return "BigInt64Array" === i(e)
            }, t.isBigUint64Array = function(e) {
                return "BigUint64Array" === i(e)
            }, g.working = "undefined" != typeof Map && g(new Map), t.isMap = function(e) {
                return "undefined" != typeof Map && (g.working ? g(e) : e instanceof Map)
            }, v.working = "undefined" != typeof Set && v(new Set), t.isSet = function(e) {
                return "undefined" != typeof Set && (v.working ? v(e) : e instanceof Set)
            }, b.working = "undefined" != typeof WeakMap && b(new WeakMap), t.isWeakMap = function(e) {
                return "undefined" != typeof WeakMap && (b.working ? b(e) : e instanceof WeakMap)
            }, k.working = "undefined" != typeof WeakSet && k(new WeakSet), t.isWeakSet = function(e) {
                return k(e)
            }, S.working = "undefined" != typeof ArrayBuffer && S(new ArrayBuffer), t.isArrayBuffer = x, C.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && C(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = E;
            var N = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

            function A(e) {
                return "[object SharedArrayBuffer]" === l(e)
            }

            function w(e) {
                return void 0 !== N && (void 0 === A.working && (A.working = A(new N)), A.working ? A(e) : e instanceof N)
            }

            function R(e) {
                return y(e, p)
            }

            function B(e) {
                return y(e, d)
            }

            function P(e) {
                return y(e, m)
            }

            function q(e) {
                return c && y(e, h)
            }

            function I(e) {
                return u && y(e, f)
            }
            t.isSharedArrayBuffer = w, t.isAsyncFunction = function(e) {
                return "[object AsyncFunction]" === l(e)
            }, t.isMapIterator = function(e) {
                return "[object Map Iterator]" === l(e)
            }, t.isSetIterator = function(e) {
                return "[object Set Iterator]" === l(e)
            }, t.isGeneratorObject = function(e) {
                return "[object Generator]" === l(e)
            }, t.isWebAssemblyCompiledModule = function(e) {
                return "[object WebAssembly.Module]" === l(e)
            }, t.isNumberObject = R, t.isStringObject = B, t.isBooleanObject = P, t.isBigIntObject = q, t.isSymbolObject = I, t.isBoxedPrimitive = function(e) {
                return R(e) || B(e) || P(e) || q(e) || I(e)
            }, t.isAnyArrayBuffer = function(e) {
                return "undefined" != typeof Uint8Array && (x(e) || w(e))
            }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
                Object.defineProperty(t, e, {
                    enumerable: !1,
                    value: function() {
                        throw Error(e + " is not supported in userland")
                    }
                })
            })
        },
        89539: function(e, t, r) {
            var n = r(83454),
                o = Object.getOwnPropertyDescriptors || function(e) {
                    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                    return r
                },
                i = /%[sdj%]/g;
            t.format = function(e) {
                if (!b(e)) {
                    for (var t = [], r = 0; r < arguments.length; r++) t.push(u(arguments[r]));
                    return t.join(" ")
                }
                for (var r = 1, n = arguments, o = n.length, a = String(e).replace(i, function(e) {
                        if ("%%" === e) return "%";
                        if (r >= o) return e;
                        switch (e) {
                            case "%s":
                                return String(n[r++]);
                            case "%d":
                                return Number(n[r++]);
                            case "%j":
                                try {
                                    return JSON.stringify(n[r++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), s = n[r]; r < o; s = n[++r]) g(s) || !x(s) ? a += " " + s : a += " " + u(s);
                return a
            }, t.deprecate = function(e, r) {
                if (void 0 !== n && !0 === n.noDeprecation) return e;
                if (void 0 === n) return function() {
                    return t.deprecate(e, r).apply(this, arguments)
                };
                var o = !1;
                return function() {
                    if (!o) {
                        if (n.throwDeprecation) throw Error(r);
                        n.traceDeprecation ? console.trace(r) : console.error(r), o = !0
                    }
                    return e.apply(this, arguments)
                }
            };
            var a = {},
                s = /^$/;
            if (n.env.NODE_DEBUG) {
                var c = n.env.NODE_DEBUG;
                s = RegExp("^" + (c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i")
            }

            function u(e, r) {
                var n = {
                    seen: [],
                    stylize: p
                };
                return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), y(r) ? n.showHidden = r : r && t._extend(n, r), k(n.showHidden) && (n.showHidden = !1), k(n.depth) && (n.depth = 2), k(n.colors) && (n.colors = !1), k(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = l), d(n, e, n.depth)
            }

            function l(e, t) {
                var r = u.styles[t];
                return r ? "\x1b[" + u.colors[r][0] + "m" + e + "\x1b[" + u.colors[r][1] + "m" : e
            }

            function p(e, t) {
                return e
            }

            function d(e, r, n) {
                if (e.customInspect && r && N(r.inspect) && r.inspect !== t.inspect && !(r.constructor && r.constructor.prototype === r)) {
                    var o, i, a, s, c, u = r.inspect(n, e);
                    return b(u) || (u = d(e, u, n)), u
                }
                var l = function(e, t) {
                    if (k(t)) return e.stylize("undefined", "undefined");
                    if (b(t)) {
                        var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(r, "string")
                    }
                    return v(t) ? e.stylize("" + t, "number") : y(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0
                }(e, r);
                if (l) return l;
                var p = Object.keys(r),
                    x = (s = {}, p.forEach(function(e, t) {
                        s[e] = !0
                    }), s);
                if (e.showHidden && (p = Object.getOwnPropertyNames(r)), E(r) && (p.indexOf("message") >= 0 || p.indexOf("description") >= 0)) return m(r);
                if (0 === p.length) {
                    if (N(r)) {
                        var A = r.name ? ": " + r.name : "";
                        return e.stylize("[Function" + A + "]", "special")
                    }
                    if (S(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                    if (C(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                    if (E(r)) return m(r)
                }
                var w = "",
                    R = !1,
                    P = ["{", "}"];
                return (f(r) && (R = !0, P = ["[", "]"]), N(r) && (w = " [Function" + (r.name ? ": " + r.name : "") + "]"), S(r) && (w = " " + RegExp.prototype.toString.call(r)), C(r) && (w = " " + Date.prototype.toUTCString.call(r)), E(r) && (w = " " + m(r)), 0 !== p.length || R && 0 != r.length) ? n < 0 ? S(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), c = R ? function(e, t, r, n, o) {
                    for (var i = [], a = 0, s = t.length; a < s; ++a) B(t, String(a)) ? i.push(h(e, t, r, n, String(a), !0)) : i.push("");
                    return o.forEach(function(o) {
                        o.match(/^\d+$/) || i.push(h(e, t, r, n, o, !0))
                    }), i
                }(e, r, n, x, p) : p.map(function(t) {
                    return h(e, r, n, x, t, R)
                }), e.seen.pop(), o = w, i = P, a = 0, c.reduce(function(e, t) {
                    return a++, t.indexOf("\n") >= 0 && a++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? i[0] + ("" === o ? "" : o + "\n ") + " " + c.join(",\n  ") + " " + i[1] : i[0] + o + " " + c.join(", ") + " " + i[1]) : P[0] + w + P[1]
            }

            function m(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function h(e, t, r, n, o, i) {
                var a, s, c;
                if ((c = Object.getOwnPropertyDescriptor(t, o) || {
                        value: t[o]
                    }).get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), B(n, o) || (a = "[" + o + "]"), !s && (0 > e.seen.indexOf(c.value) ? (s = g(r) ? d(e, c.value, null) : d(e, c.value, r - 1)).indexOf("\n") > -1 && (s = i ? s.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").slice(2) : "\n" + s.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n")) : s = e.stylize("[Circular]", "special")), k(a)) {
                    if (i && o.match(/^\d+$/)) return s;
                    (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.slice(1, -1), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
                }
                return a + ": " + s
            }

            function f(e) {
                return Array.isArray(e)
            }

            function y(e) {
                return "boolean" == typeof e
            }

            function g(e) {
                return null === e
            }

            function v(e) {
                return "number" == typeof e
            }

            function b(e) {
                return "string" == typeof e
            }

            function k(e) {
                return void 0 === e
            }

            function S(e) {
                return x(e) && "[object RegExp]" === A(e)
            }

            function x(e) {
                return "object" == typeof e && null !== e
            }

            function C(e) {
                return x(e) && "[object Date]" === A(e)
            }

            function E(e) {
                return x(e) && ("[object Error]" === A(e) || e instanceof Error)
            }

            function N(e) {
                return "function" == typeof e
            }

            function A(e) {
                return Object.prototype.toString.call(e)
            }

            function w(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            t.debuglog = function(e) {
                if (!a[e = e.toUpperCase()]) {
                    if (s.test(e)) {
                        var r = n.pid;
                        a[e] = function() {
                            var n = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, r, n)
                        }
                    } else a[e] = function() {}
                }
                return a[e]
            }, t.inspect = u, u.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, u.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.types = r(55955), t.isArray = f, t.isBoolean = y, t.isNull = g, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isNumber = v, t.isString = b, t.isSymbol = function(e) {
                return "symbol" == typeof e
            }, t.isUndefined = k, t.isRegExp = S, t.types.isRegExp = S, t.isObject = x, t.isDate = C, t.types.isDate = C, t.isError = E, t.types.isNativeError = E, t.isFunction = N, t.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = r(20384);
            var R = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function B(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.log = function() {
                var e, r;
                console.log("%s - %s", (r = [w((e = new Date).getHours()), w(e.getMinutes()), w(e.getSeconds())].join(":"), [e.getDate(), R[e.getMonth()], r].join(" ")), t.format.apply(t, arguments))
            }, t.inherits = r(35717), t._extend = function(e, t) {
                if (!t || !x(t)) return e;
                for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                return e
            };
            var P = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

            function q(e, t) {
                if (!e) {
                    var r = Error("Promise was rejected with a falsy value");
                    r.reason = e, e = r
                }
                return t(e)
            }
            t.promisify = function(e) {
                if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
                if (P && e[P]) {
                    var t = e[P];
                    if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
                    return Object.defineProperty(t, P, {
                        value: t,
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    }), t
                }

                function t() {
                    for (var t, r, n = new Promise(function(e, n) {
                            t = e, r = n
                        }), o = [], i = 0; i < arguments.length; i++) o.push(arguments[i]);
                    o.push(function(e, n) {
                        e ? r(e) : t(n)
                    });
                    try {
                        e.apply(this, o)
                    } catch (e) {
                        r(e)
                    }
                    return n
                }
                return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), P && Object.defineProperty(t, P, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), Object.defineProperties(t, o(e))
            }, t.promisify.custom = P, t.callbackify = function(e) {
                if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');

                function t() {
                    for (var t = [], r = 0; r < arguments.length; r++) t.push(arguments[r]);
                    var o = t.pop();
                    if ("function" != typeof o) throw TypeError("The last argument must be of type Function");
                    var i = this,
                        a = function() {
                            return o.apply(i, arguments)
                        };
                    e.apply(this, t).then(function(e) {
                        n.nextTick(a.bind(null, null, e))
                    }, function(e) {
                        n.nextTick(q.bind(null, e, a))
                    })
                }
                return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, o(e)), t
            }
        },
        86430: function(e, t, r) {
            "use strict";
            var n = r(94029),
                o = r(63083),
                i = r(21924),
                a = r(27296),
                s = i("Object.prototype.toString"),
                c = r(96410)(),
                u = "undefined" == typeof globalThis ? r.g : globalThis,
                l = o(),
                p = i("String.prototype.slice"),
                d = {},
                m = Object.getPrototypeOf;
            c && a && m && n(l, function(e) {
                if ("function" == typeof u[e]) {
                    var t = new u[e];
                    if (Symbol.toStringTag in t) {
                        var r = m(t),
                            n = a(r, Symbol.toStringTag);
                        n || (n = a(m(r), Symbol.toStringTag)), d[e] = n.get
                    }
                }
            });
            var h = function(e) {
                    var t = !1;
                    return n(d, function(r, n) {
                        if (!t) try {
                            var o = r.call(e);
                            o === n && (t = o)
                        } catch (e) {}
                    }), t
                },
                f = r(85692);
            e.exports = function(e) {
                return !!f(e) && (c && Symbol.toStringTag in e ? h(e) : p(s(e), 8, -1))
            }
        },
        63083: function(e, t, r) {
            "use strict";
            var n = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
                o = "undefined" == typeof globalThis ? r.g : globalThis;
            e.exports = function() {
                for (var e = [], t = 0; t < n.length; t++) "function" == typeof o[n[t]] && (e[e.length] = n[t]);
                return e
            }
        },
        36979: function(e, t, r) {
            "use strict";
            r.d(t, {
                W: function() {
                    return u
                }
            });
            var n = r(35059),
                o = r(33179),
                i = r(91639),
                a = r(19184),
                s = r(25432),
                c = r(85893),
                u = (0, n.G)(function(e, t) {
                    let {
                        className: r,
                        centerContent: n,
                        ...u
                    } = (0, o.Lr)(e), l = (0, i.mq)("Container", e);
                    return (0, c.jsx)(a.m.div, {
                        ref: t,
                        className: (0, s.cx)("chakra-container", r),
                        ...u,
                        __css: { ...l,
                            ...n && {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        }
                    })
                });
            u.displayName = "Container"
        },
        93194: function(e, t, r) {
            "use strict";
            r.d(t, {
                p: function() {
                    return s
                }
            });
            var n = r(78986),
                o = r(9163),
                i = r(61204),
                a = r(67294);

            function s(e) {
                let {
                    theme: t
                } = (0, i.uP)(), r = (0, n.OX)();
                return (0, a.useMemo)(() => (0, o.Cj)(t.direction, { ...r,
                    ...e
                }), [e, t.direction, r])
            }
        },
        57377: function(e) {
            "use strict";
            e.exports = JSON.parse('{"version":"2.0","metadata":{"apiVersion":"2014-06-30","endpointPrefix":"cognito-identity","jsonVersion":"1.1","protocol":"json","serviceFullName":"Amazon Cognito Identity","serviceId":"Cognito Identity","signatureVersion":"v4","targetPrefix":"AWSCognitoIdentityService","uid":"cognito-identity-2014-06-30"},"operations":{"CreateIdentityPool":{"input":{"type":"structure","required":["IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"AllowClassicFlow":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S5"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S9"},"CognitoIdentityProviders":{"shape":"Sb"},"SamlProviderARNs":{"shape":"Sg"},"IdentityPoolTags":{"shape":"Sh"}}},"output":{"shape":"Sk"}},"DeleteIdentities":{"input":{"type":"structure","required":["IdentityIdsToDelete"],"members":{"IdentityIdsToDelete":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"UnprocessedIdentityIds":{"type":"list","member":{"type":"structure","members":{"IdentityId":{},"ErrorCode":{}}}}}}},"DeleteIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}}},"DescribeIdentity":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{}}},"output":{"shape":"Sv"}},"DescribeIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"output":{"shape":"Sk"}},"GetCredentialsForIdentity":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{},"Logins":{"shape":"S10"},"CustomRoleArn":{}}},"output":{"type":"structure","members":{"IdentityId":{},"Credentials":{"type":"structure","members":{"AccessKeyId":{},"SecretKey":{},"SessionToken":{},"Expiration":{"type":"timestamp"}}}}},"authtype":"none"},"GetId":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"AccountId":{},"IdentityPoolId":{},"Logins":{"shape":"S10"}}},"output":{"type":"structure","members":{"IdentityId":{}}},"authtype":"none"},"GetIdentityPoolRoles":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"Roles":{"shape":"S1c"},"RoleMappings":{"shape":"S1e"}}}},"GetOpenIdToken":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{},"Logins":{"shape":"S10"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}},"authtype":"none"},"GetOpenIdTokenForDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId","Logins"],"members":{"IdentityPoolId":{},"IdentityId":{},"Logins":{"shape":"S10"},"PrincipalTags":{"shape":"S1s"},"TokenDuration":{"type":"long"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}}},"GetPrincipalTagAttributeMap":{"input":{"type":"structure","required":["IdentityPoolId","IdentityProviderName"],"members":{"IdentityPoolId":{},"IdentityProviderName":{}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"IdentityProviderName":{},"UseDefaults":{"type":"boolean"},"PrincipalTags":{"shape":"S1s"}}}},"ListIdentities":{"input":{"type":"structure","required":["IdentityPoolId","MaxResults"],"members":{"IdentityPoolId":{},"MaxResults":{"type":"integer"},"NextToken":{},"HideDisabled":{"type":"boolean"}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"Identities":{"type":"list","member":{"shape":"Sv"}},"NextToken":{}}}},"ListIdentityPools":{"input":{"type":"structure","required":["MaxResults"],"members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityPools":{"type":"list","member":{"type":"structure","members":{"IdentityPoolId":{},"IdentityPoolName":{}}}},"NextToken":{}}}},"ListTagsForResource":{"input":{"type":"structure","required":["ResourceArn"],"members":{"ResourceArn":{}}},"output":{"type":"structure","members":{"Tags":{"shape":"Sh"}}}},"LookupDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{},"IdentityId":{},"DeveloperUserIdentifier":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityId":{},"DeveloperUserIdentifierList":{"type":"list","member":{}},"NextToken":{}}}},"MergeDeveloperIdentities":{"input":{"type":"structure","required":["SourceUserIdentifier","DestinationUserIdentifier","DeveloperProviderName","IdentityPoolId"],"members":{"SourceUserIdentifier":{},"DestinationUserIdentifier":{},"DeveloperProviderName":{},"IdentityPoolId":{}}},"output":{"type":"structure","members":{"IdentityId":{}}}},"SetIdentityPoolRoles":{"input":{"type":"structure","required":["IdentityPoolId","Roles"],"members":{"IdentityPoolId":{},"Roles":{"shape":"S1c"},"RoleMappings":{"shape":"S1e"}}}},"SetPrincipalTagAttributeMap":{"input":{"type":"structure","required":["IdentityPoolId","IdentityProviderName"],"members":{"IdentityPoolId":{},"IdentityProviderName":{},"UseDefaults":{"type":"boolean"},"PrincipalTags":{"shape":"S1s"}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"IdentityProviderName":{},"UseDefaults":{"type":"boolean"},"PrincipalTags":{"shape":"S1s"}}}},"TagResource":{"input":{"type":"structure","required":["ResourceArn","Tags"],"members":{"ResourceArn":{},"Tags":{"shape":"Sh"}}},"output":{"type":"structure","members":{}}},"UnlinkDeveloperIdentity":{"input":{"type":"structure","required":["IdentityId","IdentityPoolId","DeveloperProviderName","DeveloperUserIdentifier"],"members":{"IdentityId":{},"IdentityPoolId":{},"DeveloperProviderName":{},"DeveloperUserIdentifier":{}}}},"UnlinkIdentity":{"input":{"type":"structure","required":["IdentityId","Logins","LoginsToRemove"],"members":{"IdentityId":{},"Logins":{"shape":"S10"},"LoginsToRemove":{"shape":"Sw"}}},"authtype":"none"},"UntagResource":{"input":{"type":"structure","required":["ResourceArn","TagKeys"],"members":{"ResourceArn":{},"TagKeys":{"type":"list","member":{}}}},"output":{"type":"structure","members":{}}},"UpdateIdentityPool":{"input":{"shape":"Sk"},"output":{"shape":"Sk"}}},"shapes":{"S5":{"type":"map","key":{},"value":{}},"S9":{"type":"list","member":{}},"Sb":{"type":"list","member":{"type":"structure","members":{"ProviderName":{},"ClientId":{},"ServerSideTokenCheck":{"type":"boolean"}}}},"Sg":{"type":"list","member":{}},"Sh":{"type":"map","key":{},"value":{}},"Sk":{"type":"structure","required":["IdentityPoolId","IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolId":{},"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"AllowClassicFlow":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S5"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S9"},"CognitoIdentityProviders":{"shape":"Sb"},"SamlProviderARNs":{"shape":"Sg"},"IdentityPoolTags":{"shape":"Sh"}}},"Sv":{"type":"structure","members":{"IdentityId":{},"Logins":{"shape":"Sw"},"CreationDate":{"type":"timestamp"},"LastModifiedDate":{"type":"timestamp"}}},"Sw":{"type":"list","member":{}},"S10":{"type":"map","key":{},"value":{}},"S1c":{"type":"map","key":{},"value":{}},"S1e":{"type":"map","key":{},"value":{"type":"structure","required":["Type"],"members":{"Type":{},"AmbiguousRoleResolution":{},"RulesConfiguration":{"type":"structure","required":["Rules"],"members":{"Rules":{"type":"list","member":{"type":"structure","required":["Claim","MatchType","Value","RoleARN"],"members":{"Claim":{},"MatchType":{},"Value":{},"RoleARN":{}}}}}}}}},"S1s":{"type":"map","key":{},"value":{}}}}')
        },
        85010: function(e) {
            "use strict";
            e.exports = JSON.parse('{"o":{"ListIdentityPools":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"IdentityPools"}}}')
        },
        17752: function(e) {
            "use strict";
            e.exports = JSON.parse('{"acm":{"name":"ACM","cors":true},"apigateway":{"name":"APIGateway","cors":true},"applicationautoscaling":{"prefix":"application-autoscaling","name":"ApplicationAutoScaling","cors":true},"appstream":{"name":"AppStream"},"autoscaling":{"name":"AutoScaling","cors":true},"batch":{"name":"Batch"},"budgets":{"name":"Budgets"},"clouddirectory":{"name":"CloudDirectory","versions":["2016-05-10*"]},"cloudformation":{"name":"CloudFormation","cors":true},"cloudfront":{"name":"CloudFront","versions":["2013-05-12*","2013-11-11*","2014-05-31*","2014-10-21*","2014-11-06*","2015-04-17*","2015-07-27*","2015-09-17*","2016-01-13*","2016-01-28*","2016-08-01*","2016-08-20*","2016-09-07*","2016-09-29*","2016-11-25*","2017-03-25*","2017-10-30*","2018-06-18*","2018-11-05*","2019-03-26*"],"cors":true},"cloudhsm":{"name":"CloudHSM","cors":true},"cloudsearch":{"name":"CloudSearch"},"cloudsearchdomain":{"name":"CloudSearchDomain"},"cloudtrail":{"name":"CloudTrail","cors":true},"cloudwatch":{"prefix":"monitoring","name":"CloudWatch","cors":true},"cloudwatchevents":{"prefix":"events","name":"CloudWatchEvents","versions":["2014-02-03*"],"cors":true},"cloudwatchlogs":{"prefix":"logs","name":"CloudWatchLogs","cors":true},"codebuild":{"name":"CodeBuild","cors":true},"codecommit":{"name":"CodeCommit","cors":true},"codedeploy":{"name":"CodeDeploy","cors":true},"codepipeline":{"name":"CodePipeline","cors":true},"cognitoidentity":{"prefix":"cognito-identity","name":"CognitoIdentity","cors":true},"cognitoidentityserviceprovider":{"prefix":"cognito-idp","name":"CognitoIdentityServiceProvider","cors":true},"cognitosync":{"prefix":"cognito-sync","name":"CognitoSync","cors":true},"configservice":{"prefix":"config","name":"ConfigService","cors":true},"cur":{"name":"CUR","cors":true},"datapipeline":{"name":"DataPipeline"},"devicefarm":{"name":"DeviceFarm","cors":true},"directconnect":{"name":"DirectConnect","cors":true},"directoryservice":{"prefix":"ds","name":"DirectoryService"},"discovery":{"name":"Discovery"},"dms":{"name":"DMS"},"dynamodb":{"name":"DynamoDB","cors":true},"dynamodbstreams":{"prefix":"streams.dynamodb","name":"DynamoDBStreams","cors":true},"ec2":{"name":"EC2","versions":["2013-06-15*","2013-10-15*","2014-02-01*","2014-05-01*","2014-06-15*","2014-09-01*","2014-10-01*","2015-03-01*","2015-04-15*","2015-10-01*","2016-04-01*","2016-09-15*"],"cors":true},"ecr":{"name":"ECR","cors":true},"ecs":{"name":"ECS","cors":true},"efs":{"prefix":"elasticfilesystem","name":"EFS","cors":true},"elasticache":{"name":"ElastiCache","versions":["2012-11-15*","2014-03-24*","2014-07-15*","2014-09-30*"],"cors":true},"elasticbeanstalk":{"name":"ElasticBeanstalk","cors":true},"elb":{"prefix":"elasticloadbalancing","name":"ELB","cors":true},"elbv2":{"prefix":"elasticloadbalancingv2","name":"ELBv2","cors":true},"emr":{"prefix":"elasticmapreduce","name":"EMR","cors":true},"es":{"name":"ES"},"elastictranscoder":{"name":"ElasticTranscoder","cors":true},"firehose":{"name":"Firehose","cors":true},"gamelift":{"name":"GameLift","cors":true},"glacier":{"name":"Glacier"},"health":{"name":"Health"},"iam":{"name":"IAM","cors":true},"importexport":{"name":"ImportExport"},"inspector":{"name":"Inspector","versions":["2015-08-18*"],"cors":true},"iot":{"name":"Iot","cors":true},"iotdata":{"prefix":"iot-data","name":"IotData","cors":true},"kinesis":{"name":"Kinesis","cors":true},"kinesisanalytics":{"name":"KinesisAnalytics"},"kms":{"name":"KMS","cors":true},"lambda":{"name":"Lambda","cors":true},"lexruntime":{"prefix":"runtime.lex","name":"LexRuntime","cors":true},"lightsail":{"name":"Lightsail"},"machinelearning":{"name":"MachineLearning","cors":true},"marketplacecommerceanalytics":{"name":"MarketplaceCommerceAnalytics","cors":true},"marketplacemetering":{"prefix":"meteringmarketplace","name":"MarketplaceMetering"},"mturk":{"prefix":"mturk-requester","name":"MTurk","cors":true},"mobileanalytics":{"name":"MobileAnalytics","cors":true},"opsworks":{"name":"OpsWorks","cors":true},"opsworkscm":{"name":"OpsWorksCM"},"organizations":{"name":"Organizations"},"pinpoint":{"name":"Pinpoint"},"polly":{"name":"Polly","cors":true},"rds":{"name":"RDS","versions":["2014-09-01*"],"cors":true},"redshift":{"name":"Redshift","cors":true},"rekognition":{"name":"Rekognition","cors":true},"resourcegroupstaggingapi":{"name":"ResourceGroupsTaggingAPI"},"route53":{"name":"Route53","cors":true},"route53domains":{"name":"Route53Domains","cors":true},"s3":{"name":"S3","dualstackAvailable":true,"cors":true},"s3control":{"name":"S3Control","dualstackAvailable":true,"xmlNoDefaultLists":true},"servicecatalog":{"name":"ServiceCatalog","cors":true},"ses":{"prefix":"email","name":"SES","cors":true},"shield":{"name":"Shield"},"simpledb":{"prefix":"sdb","name":"SimpleDB"},"sms":{"name":"SMS"},"snowball":{"name":"Snowball"},"sns":{"name":"SNS","cors":true},"sqs":{"name":"SQS","cors":true},"ssm":{"name":"SSM","cors":true},"storagegateway":{"name":"StorageGateway","cors":true},"stepfunctions":{"prefix":"states","name":"StepFunctions"},"sts":{"name":"STS","cors":true},"support":{"name":"Support"},"swf":{"name":"SWF"},"xray":{"name":"XRay","cors":true},"waf":{"name":"WAF","cors":true},"wafregional":{"prefix":"waf-regional","name":"WAFRegional"},"workdocs":{"name":"WorkDocs","cors":true},"workspaces":{"name":"WorkSpaces"},"codestar":{"name":"CodeStar"},"lexmodelbuildingservice":{"prefix":"lex-models","name":"LexModelBuildingService","cors":true},"marketplaceentitlementservice":{"prefix":"entitlement.marketplace","name":"MarketplaceEntitlementService"},"athena":{"name":"Athena","cors":true},"greengrass":{"name":"Greengrass"},"dax":{"name":"DAX"},"migrationhub":{"prefix":"AWSMigrationHub","name":"MigrationHub"},"cloudhsmv2":{"name":"CloudHSMV2","cors":true},"glue":{"name":"Glue"},"mobile":{"name":"Mobile"},"pricing":{"name":"Pricing","cors":true},"costexplorer":{"prefix":"ce","name":"CostExplorer","cors":true},"mediaconvert":{"name":"MediaConvert"},"medialive":{"name":"MediaLive"},"mediapackage":{"name":"MediaPackage"},"mediastore":{"name":"MediaStore"},"mediastoredata":{"prefix":"mediastore-data","name":"MediaStoreData","cors":true},"appsync":{"name":"AppSync"},"guardduty":{"name":"GuardDuty"},"mq":{"name":"MQ"},"comprehend":{"name":"Comprehend","cors":true},"iotjobsdataplane":{"prefix":"iot-jobs-data","name":"IoTJobsDataPlane"},"kinesisvideoarchivedmedia":{"prefix":"kinesis-video-archived-media","name":"KinesisVideoArchivedMedia","cors":true},"kinesisvideomedia":{"prefix":"kinesis-video-media","name":"KinesisVideoMedia","cors":true},"kinesisvideo":{"name":"KinesisVideo","cors":true},"sagemakerruntime":{"prefix":"runtime.sagemaker","name":"SageMakerRuntime"},"sagemaker":{"name":"SageMaker"},"translate":{"name":"Translate","cors":true},"resourcegroups":{"prefix":"resource-groups","name":"ResourceGroups","cors":true},"alexaforbusiness":{"name":"AlexaForBusiness"},"cloud9":{"name":"Cloud9"},"serverlessapplicationrepository":{"prefix":"serverlessrepo","name":"ServerlessApplicationRepository"},"servicediscovery":{"name":"ServiceDiscovery"},"workmail":{"name":"WorkMail"},"autoscalingplans":{"prefix":"autoscaling-plans","name":"AutoScalingPlans"},"transcribeservice":{"prefix":"transcribe","name":"TranscribeService"},"connect":{"name":"Connect","cors":true},"acmpca":{"prefix":"acm-pca","name":"ACMPCA"},"fms":{"name":"FMS"},"secretsmanager":{"name":"SecretsManager","cors":true},"iotanalytics":{"name":"IoTAnalytics","cors":true},"iot1clickdevicesservice":{"prefix":"iot1click-devices","name":"IoT1ClickDevicesService"},"iot1clickprojects":{"prefix":"iot1click-projects","name":"IoT1ClickProjects"},"pi":{"name":"PI"},"neptune":{"name":"Neptune"},"mediatailor":{"name":"MediaTailor"},"eks":{"name":"EKS"},"macie":{"name":"Macie"},"dlm":{"name":"DLM"},"signer":{"name":"Signer"},"chime":{"name":"Chime"},"pinpointemail":{"prefix":"pinpoint-email","name":"PinpointEmail"},"ram":{"name":"RAM"},"route53resolver":{"name":"Route53Resolver"},"pinpointsmsvoice":{"prefix":"sms-voice","name":"PinpointSMSVoice"},"quicksight":{"name":"QuickSight"},"rdsdataservice":{"prefix":"rds-data","name":"RDSDataService"},"amplify":{"name":"Amplify"},"datasync":{"name":"DataSync"},"robomaker":{"name":"RoboMaker"},"transfer":{"name":"Transfer"},"globalaccelerator":{"name":"GlobalAccelerator"},"comprehendmedical":{"name":"ComprehendMedical","cors":true},"kinesisanalyticsv2":{"name":"KinesisAnalyticsV2"},"mediaconnect":{"name":"MediaConnect"},"fsx":{"name":"FSx"},"securityhub":{"name":"SecurityHub"},"appmesh":{"name":"AppMesh","versions":["2018-10-01*"]},"licensemanager":{"prefix":"license-manager","name":"LicenseManager"},"kafka":{"name":"Kafka"},"apigatewaymanagementapi":{"name":"ApiGatewayManagementApi"},"apigatewayv2":{"name":"ApiGatewayV2"},"docdb":{"name":"DocDB"},"backup":{"name":"Backup"},"worklink":{"name":"WorkLink"},"textract":{"name":"Textract"},"managedblockchain":{"name":"ManagedBlockchain"},"mediapackagevod":{"prefix":"mediapackage-vod","name":"MediaPackageVod"},"groundstation":{"name":"GroundStation"},"iotthingsgraph":{"name":"IoTThingsGraph"},"iotevents":{"name":"IoTEvents"},"ioteventsdata":{"prefix":"iotevents-data","name":"IoTEventsData"},"personalize":{"name":"Personalize","cors":true},"personalizeevents":{"prefix":"personalize-events","name":"PersonalizeEvents","cors":true},"personalizeruntime":{"prefix":"personalize-runtime","name":"PersonalizeRuntime","cors":true},"applicationinsights":{"prefix":"application-insights","name":"ApplicationInsights"},"servicequotas":{"prefix":"service-quotas","name":"ServiceQuotas"},"ec2instanceconnect":{"prefix":"ec2-instance-connect","name":"EC2InstanceConnect"},"eventbridge":{"name":"EventBridge"},"lakeformation":{"name":"LakeFormation"},"forecastservice":{"prefix":"forecast","name":"ForecastService","cors":true},"forecastqueryservice":{"prefix":"forecastquery","name":"ForecastQueryService","cors":true},"qldb":{"name":"QLDB"},"qldbsession":{"prefix":"qldb-session","name":"QLDBSession"},"workmailmessageflow":{"name":"WorkMailMessageFlow"},"codestarnotifications":{"prefix":"codestar-notifications","name":"CodeStarNotifications"},"savingsplans":{"name":"SavingsPlans"},"sso":{"name":"SSO"},"ssooidc":{"prefix":"sso-oidc","name":"SSOOIDC"},"marketplacecatalog":{"prefix":"marketplace-catalog","name":"MarketplaceCatalog","cors":true},"dataexchange":{"name":"DataExchange"},"sesv2":{"name":"SESV2"},"migrationhubconfig":{"prefix":"migrationhub-config","name":"MigrationHubConfig"},"connectparticipant":{"name":"ConnectParticipant"},"appconfig":{"name":"AppConfig"},"iotsecuretunneling":{"name":"IoTSecureTunneling"},"wafv2":{"name":"WAFV2"},"elasticinference":{"prefix":"elastic-inference","name":"ElasticInference"},"imagebuilder":{"name":"Imagebuilder"},"schemas":{"name":"Schemas"},"accessanalyzer":{"name":"AccessAnalyzer"},"codegurureviewer":{"prefix":"codeguru-reviewer","name":"CodeGuruReviewer"},"codeguruprofiler":{"name":"CodeGuruProfiler"},"computeoptimizer":{"prefix":"compute-optimizer","name":"ComputeOptimizer"},"frauddetector":{"name":"FraudDetector"},"kendra":{"name":"Kendra"},"networkmanager":{"name":"NetworkManager"},"outposts":{"name":"Outposts"},"augmentedairuntime":{"prefix":"sagemaker-a2i-runtime","name":"AugmentedAIRuntime"},"ebs":{"name":"EBS"},"kinesisvideosignalingchannels":{"prefix":"kinesis-video-signaling","name":"KinesisVideoSignalingChannels","cors":true},"detective":{"name":"Detective"},"codestarconnections":{"prefix":"codestar-connections","name":"CodeStarconnections"},"synthetics":{"name":"Synthetics"},"iotsitewise":{"name":"IoTSiteWise"},"macie2":{"name":"Macie2"},"codeartifact":{"name":"CodeArtifact"},"honeycode":{"name":"Honeycode"},"ivs":{"name":"IVS"},"braket":{"name":"Braket"},"identitystore":{"name":"IdentityStore"},"appflow":{"name":"Appflow"},"redshiftdata":{"prefix":"redshift-data","name":"RedshiftData"},"ssoadmin":{"prefix":"sso-admin","name":"SSOAdmin"},"timestreamquery":{"prefix":"timestream-query","name":"TimestreamQuery"},"timestreamwrite":{"prefix":"timestream-write","name":"TimestreamWrite"},"s3outposts":{"name":"S3Outposts"},"databrew":{"name":"DataBrew"},"servicecatalogappregistry":{"prefix":"servicecatalog-appregistry","name":"ServiceCatalogAppRegistry"},"networkfirewall":{"prefix":"network-firewall","name":"NetworkFirewall"},"mwaa":{"name":"MWAA"},"amplifybackend":{"name":"AmplifyBackend"},"appintegrations":{"name":"AppIntegrations"},"connectcontactlens":{"prefix":"connect-contact-lens","name":"ConnectContactLens"},"devopsguru":{"prefix":"devops-guru","name":"DevOpsGuru"},"ecrpublic":{"prefix":"ecr-public","name":"ECRPUBLIC"},"lookoutvision":{"name":"LookoutVision"},"sagemakerfeaturestoreruntime":{"prefix":"sagemaker-featurestore-runtime","name":"SageMakerFeatureStoreRuntime"},"customerprofiles":{"prefix":"customer-profiles","name":"CustomerProfiles"},"auditmanager":{"name":"AuditManager"},"emrcontainers":{"prefix":"emr-containers","name":"EMRcontainers"},"healthlake":{"name":"HealthLake"},"sagemakeredge":{"prefix":"sagemaker-edge","name":"SagemakerEdge"},"amp":{"name":"Amp"},"greengrassv2":{"name":"GreengrassV2"},"iotdeviceadvisor":{"name":"IotDeviceAdvisor"},"iotfleethub":{"name":"IoTFleetHub"},"iotwireless":{"name":"IoTWireless"},"location":{"name":"Location","cors":true},"wellarchitected":{"name":"WellArchitected"},"lexmodelsv2":{"prefix":"models.lex.v2","name":"LexModelsV2"},"lexruntimev2":{"prefix":"runtime.lex.v2","name":"LexRuntimeV2","cors":true},"fis":{"name":"Fis"},"lookoutmetrics":{"name":"LookoutMetrics"},"mgn":{"name":"Mgn"},"lookoutequipment":{"name":"LookoutEquipment"},"nimble":{"name":"Nimble"},"finspace":{"name":"Finspace"},"finspacedata":{"prefix":"finspace-data","name":"Finspacedata"},"ssmcontacts":{"prefix":"ssm-contacts","name":"SSMContacts"},"ssmincidents":{"prefix":"ssm-incidents","name":"SSMIncidents"},"applicationcostprofiler":{"name":"ApplicationCostProfiler"},"apprunner":{"name":"AppRunner"},"proton":{"name":"Proton"},"route53recoverycluster":{"prefix":"route53-recovery-cluster","name":"Route53RecoveryCluster"},"route53recoverycontrolconfig":{"prefix":"route53-recovery-control-config","name":"Route53RecoveryControlConfig"},"route53recoveryreadiness":{"prefix":"route53-recovery-readiness","name":"Route53RecoveryReadiness"},"chimesdkidentity":{"prefix":"chime-sdk-identity","name":"ChimeSDKIdentity"},"chimesdkmessaging":{"prefix":"chime-sdk-messaging","name":"ChimeSDKMessaging"},"snowdevicemanagement":{"prefix":"snow-device-management","name":"SnowDeviceManagement"},"memorydb":{"name":"MemoryDB"},"opensearch":{"name":"OpenSearch"},"kafkaconnect":{"name":"KafkaConnect"},"voiceid":{"prefix":"voice-id","name":"VoiceID"},"wisdom":{"name":"Wisdom"},"account":{"name":"Account"},"cloudcontrol":{"name":"CloudControl"},"grafana":{"name":"Grafana"},"panorama":{"name":"Panorama"},"chimesdkmeetings":{"prefix":"chime-sdk-meetings","name":"ChimeSDKMeetings"},"resiliencehub":{"name":"Resiliencehub"},"migrationhubstrategy":{"name":"MigrationHubStrategy"},"appconfigdata":{"name":"AppConfigData"},"drs":{"name":"Drs"},"migrationhubrefactorspaces":{"prefix":"migration-hub-refactor-spaces","name":"MigrationHubRefactorSpaces"},"evidently":{"name":"Evidently"},"inspector2":{"name":"Inspector2"},"rbin":{"name":"Rbin"},"rum":{"name":"RUM"},"backupgateway":{"prefix":"backup-gateway","name":"BackupGateway"},"iottwinmaker":{"name":"IoTTwinMaker"},"workspacesweb":{"prefix":"workspaces-web","name":"WorkSpacesWeb"},"amplifyuibuilder":{"name":"AmplifyUIBuilder"},"keyspaces":{"name":"Keyspaces"},"billingconductor":{"name":"Billingconductor"},"gamesparks":{"name":"GameSparks"},"pinpointsmsvoicev2":{"prefix":"pinpoint-sms-voice-v2","name":"PinpointSMSVoiceV2"},"ivschat":{"name":"Ivschat"},"chimesdkmediapipelines":{"prefix":"chime-sdk-media-pipelines","name":"ChimeSDKMediaPipelines"},"emrserverless":{"prefix":"emr-serverless","name":"EMRServerless"},"m2":{"name":"M2"},"connectcampaigns":{"name":"ConnectCampaigns"},"redshiftserverless":{"prefix":"redshift-serverless","name":"RedshiftServerless"},"rolesanywhere":{"name":"RolesAnywhere"},"licensemanagerusersubscriptions":{"prefix":"license-manager-user-subscriptions","name":"LicenseManagerUserSubscriptions"},"backupstorage":{"name":"BackupStorage"},"privatenetworks":{"name":"PrivateNetworks"},"supportapp":{"prefix":"support-app","name":"SupportApp"},"controltower":{"name":"ControlTower"},"iotfleetwise":{"name":"IoTFleetWise"},"migrationhuborchestrator":{"name":"MigrationHubOrchestrator"},"connectcases":{"name":"ConnectCases"},"resourceexplorer2":{"prefix":"resource-explorer-2","name":"ResourceExplorer2"},"scheduler":{"name":"Scheduler"},"chimesdkvoice":{"prefix":"chime-sdk-voice","name":"ChimeSDKVoice"},"iotroborunner":{"prefix":"iot-roborunner","name":"IoTRoboRunner"},"ssmsap":{"prefix":"ssm-sap","name":"SsmSap"},"oam":{"name":"OAM"},"arczonalshift":{"prefix":"arc-zonal-shift","name":"ARCZonalShift"},"omics":{"name":"Omics"},"opensearchserverless":{"name":"OpenSearchServerless"},"securitylake":{"name":"SecurityLake"},"simspaceweaver":{"name":"SimSpaceWeaver"},"docdbelastic":{"prefix":"docdb-elastic","name":"DocDBElastic"},"sagemakergeospatial":{"prefix":"sagemaker-geospatial","name":"SageMakerGeospatial"},"codecatalyst":{"name":"CodeCatalyst"},"pipes":{"name":"Pipes"},"sagemakermetrics":{"prefix":"sagemaker-metrics","name":"SageMakerMetrics"},"kinesisvideowebrtcstorage":{"prefix":"kinesis-video-webrtc-storage","name":"KinesisVideoWebRTCStorage"},"licensemanagerlinuxsubscriptions":{"prefix":"license-manager-linux-subscriptions","name":"LicenseManagerLinuxSubscriptions"},"kendraranking":{"prefix":"kendra-ranking","name":"KendraRanking"},"cleanrooms":{"name":"CleanRooms"},"cloudtraildata":{"prefix":"cloudtrail-data","name":"CloudTrailData"},"tnb":{"name":"Tnb"},"internetmonitor":{"name":"InternetMonitor"}}')
        },
        1129: function(e) {
            "use strict";
            e.exports = JSON.parse('{"version":"2.0","metadata":{"apiVersion":"2006-03-01","checksumFormat":"md5","endpointPrefix":"s3","globalEndpoint":"s3.amazonaws.com","protocol":"rest-xml","serviceAbbreviation":"Amazon S3","serviceFullName":"Amazon Simple Storage Service","serviceId":"S3","signatureVersion":"s3","uid":"s3-2006-03-01"},"operations":{"AbortMultipartUpload":{"http":{"method":"DELETE","requestUri":"/{Bucket}/{Key+}","responseCode":204},"input":{"type":"structure","required":["Bucket","Key","UploadId"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"UploadId":{"location":"querystring","locationName":"uploadId"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}}},"CompleteMultipartUpload":{"http":{"requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key","UploadId"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"MultipartUpload":{"locationName":"CompleteMultipartUpload","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"Parts":{"locationName":"Part","type":"list","member":{"type":"structure","members":{"ETag":{},"ChecksumCRC32":{},"ChecksumCRC32C":{},"ChecksumSHA1":{},"ChecksumSHA256":{},"PartNumber":{"type":"integer"}}},"flattened":true}}},"UploadId":{"location":"querystring","locationName":"uploadId"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-checksum-sha256"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"}},"payload":"MultipartUpload"},"output":{"type":"structure","members":{"Location":{},"Bucket":{},"Key":{},"Expiration":{"location":"header","locationName":"x-amz-expiration"},"ETag":{},"ChecksumCRC32":{},"ChecksumCRC32C":{},"ChecksumSHA1":{},"ChecksumSHA256":{},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}}},"CopyObject":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","CopySource","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-checksum-algorithm"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentType":{"location":"header","locationName":"Content-Type"},"CopySource":{"location":"header","locationName":"x-amz-copy-source"},"CopySourceIfMatch":{"location":"header","locationName":"x-amz-copy-source-if-match"},"CopySourceIfModifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-modified-since","type":"timestamp"},"CopySourceIfNoneMatch":{"location":"header","locationName":"x-amz-copy-source-if-none-match"},"CopySourceIfUnmodifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-unmodified-since","type":"timestamp"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"},"Metadata":{"shape":"S1b","location":"headers","locationName":"x-amz-meta-"},"MetadataDirective":{"location":"header","locationName":"x-amz-metadata-directive"},"TaggingDirective":{"location":"header","locationName":"x-amz-tagging-directive"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"SSEKMSEncryptionContext":{"shape":"S1i","location":"header","locationName":"x-amz-server-side-encryption-context"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"CopySourceSSECustomerAlgorithm":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-algorithm"},"CopySourceSSECustomerKey":{"shape":"S1k","location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key"},"CopySourceSSECustomerKeyMD5":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key-MD5"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"Tagging":{"location":"header","locationName":"x-amz-tagging"},"ObjectLockMode":{"location":"header","locationName":"x-amz-object-lock-mode"},"ObjectLockRetainUntilDate":{"shape":"S1o","location":"header","locationName":"x-amz-object-lock-retain-until-date"},"ObjectLockLegalHoldStatus":{"location":"header","locationName":"x-amz-object-lock-legal-hold"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ExpectedSourceBucketOwner":{"location":"header","locationName":"x-amz-source-expected-bucket-owner"}}},"output":{"type":"structure","members":{"CopyObjectResult":{"type":"structure","members":{"ETag":{},"LastModified":{"type":"timestamp"},"ChecksumCRC32":{},"ChecksumCRC32C":{},"ChecksumSHA1":{},"ChecksumSHA256":{}}},"Expiration":{"location":"header","locationName":"x-amz-expiration"},"CopySourceVersionId":{"location":"header","locationName":"x-amz-copy-source-version-id"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"SSEKMSEncryptionContext":{"shape":"S1i","location":"header","locationName":"x-amz-server-side-encryption-context"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}},"payload":"CopyObjectResult"},"alias":"PutObjectCopy"},"CreateBucket":{"http":{"method":"PUT","requestUri":"/{Bucket}"},"input":{"type":"structure","required":["Bucket"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"CreateBucketConfiguration":{"locationName":"CreateBucketConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"LocationConstraint":{}}},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","locationName":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"ObjectLockEnabledForBucket":{"location":"header","locationName":"x-amz-bucket-object-lock-enabled","type":"boolean"},"ObjectOwnership":{"location":"header","locationName":"x-amz-object-ownership"}},"payload":"CreateBucketConfiguration"},"output":{"type":"structure","members":{"Location":{"location":"header","locationName":"Location"}}},"alias":"PutBucket","staticContextParams":{"DisableAccessPoints":{"value":true}}},"CreateMultipartUpload":{"http":{"requestUri":"/{Bucket}/{Key+}?uploads"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentType":{"location":"header","locationName":"Content-Type"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"},"Metadata":{"shape":"S1b","location":"headers","locationName":"x-amz-meta-"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"SSEKMSEncryptionContext":{"shape":"S1i","location":"header","locationName":"x-amz-server-side-encryption-context"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"Tagging":{"location":"header","locationName":"x-amz-tagging"},"ObjectLockMode":{"location":"header","locationName":"x-amz-object-lock-mode"},"ObjectLockRetainUntilDate":{"shape":"S1o","location":"header","locationName":"x-amz-object-lock-retain-until-date"},"ObjectLockLegalHoldStatus":{"location":"header","locationName":"x-amz-object-lock-legal-hold"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-checksum-algorithm"}}},"output":{"type":"structure","members":{"AbortDate":{"location":"header","locationName":"x-amz-abort-date","type":"timestamp"},"AbortRuleId":{"location":"header","locationName":"x-amz-abort-rule-id"},"Bucket":{"locationName":"Bucket"},"Key":{},"UploadId":{},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"SSEKMSEncryptionContext":{"shape":"S1i","location":"header","locationName":"x-amz-server-side-encryption-context"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-checksum-algorithm"}}},"alias":"InitiateMultipartUpload"},"DeleteBucket":{"http":{"method":"DELETE","requestUri":"/{Bucket}","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketAnalyticsConfiguration":{"http":{"method":"DELETE","requestUri":"/{Bucket}?analytics","responseCode":204},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketCors":{"http":{"method":"DELETE","requestUri":"/{Bucket}?cors","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketEncryption":{"http":{"method":"DELETE","requestUri":"/{Bucket}?encryption","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketIntelligentTieringConfiguration":{"http":{"method":"DELETE","requestUri":"/{Bucket}?intelligent-tiering","responseCode":204},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"}}}},"DeleteBucketInventoryConfiguration":{"http":{"method":"DELETE","requestUri":"/{Bucket}?inventory","responseCode":204},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketLifecycle":{"http":{"method":"DELETE","requestUri":"/{Bucket}?lifecycle","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketMetricsConfiguration":{"http":{"method":"DELETE","requestUri":"/{Bucket}?metrics","responseCode":204},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketOwnershipControls":{"http":{"method":"DELETE","requestUri":"/{Bucket}?ownershipControls","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketPolicy":{"http":{"method":"DELETE","requestUri":"/{Bucket}?policy","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketReplication":{"http":{"method":"DELETE","requestUri":"/{Bucket}?replication","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketTagging":{"http":{"method":"DELETE","requestUri":"/{Bucket}?tagging","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteBucketWebsite":{"http":{"method":"DELETE","requestUri":"/{Bucket}?website","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"DeleteObject":{"http":{"method":"DELETE","requestUri":"/{Bucket}/{Key+}","responseCode":204},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"MFA":{"location":"header","locationName":"x-amz-mfa"},"VersionId":{"location":"querystring","locationName":"versionId"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"BypassGovernanceRetention":{"location":"header","locationName":"x-amz-bypass-governance-retention","type":"boolean"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"DeleteMarker":{"location":"header","locationName":"x-amz-delete-marker","type":"boolean"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}}},"DeleteObjectTagging":{"http":{"method":"DELETE","requestUri":"/{Bucket}/{Key+}?tagging","responseCode":204},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"VersionId":{"location":"header","locationName":"x-amz-version-id"}}}},"DeleteObjects":{"http":{"requestUri":"/{Bucket}?delete"},"input":{"type":"structure","required":["Bucket","Delete"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Delete":{"locationName":"Delete","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","required":["Objects"],"members":{"Objects":{"locationName":"Object","type":"list","member":{"type":"structure","required":["Key"],"members":{"Key":{},"VersionId":{}}},"flattened":true},"Quiet":{"type":"boolean"}}},"MFA":{"location":"header","locationName":"x-amz-mfa"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"BypassGovernanceRetention":{"location":"header","locationName":"x-amz-bypass-governance-retention","type":"boolean"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"}},"payload":"Delete"},"output":{"type":"structure","members":{"Deleted":{"type":"list","member":{"type":"structure","members":{"Key":{},"VersionId":{},"DeleteMarker":{"type":"boolean"},"DeleteMarkerVersionId":{}}},"flattened":true},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"},"Errors":{"locationName":"Error","type":"list","member":{"type":"structure","members":{"Key":{},"VersionId":{},"Code":{},"Message":{}}},"flattened":true}}},"alias":"DeleteMultipleObjects","httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"DeletePublicAccessBlock":{"http":{"method":"DELETE","requestUri":"/{Bucket}?publicAccessBlock","responseCode":204},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"GetBucketAccelerateConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?accelerate"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Status":{}}}},"GetBucketAcl":{"http":{"method":"GET","requestUri":"/{Bucket}?acl"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Owner":{"shape":"S3d"},"Grants":{"shape":"S3g","locationName":"AccessControlList"}}}},"GetBucketAnalyticsConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?analytics"},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"AnalyticsConfiguration":{"shape":"S3p"}},"payload":"AnalyticsConfiguration"}},"GetBucketCors":{"http":{"method":"GET","requestUri":"/{Bucket}?cors"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"CORSRules":{"shape":"S44","locationName":"CORSRule"}}}},"GetBucketEncryption":{"http":{"method":"GET","requestUri":"/{Bucket}?encryption"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"ServerSideEncryptionConfiguration":{"shape":"S4h"}},"payload":"ServerSideEncryptionConfiguration"}},"GetBucketIntelligentTieringConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?intelligent-tiering"},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"}}},"output":{"type":"structure","members":{"IntelligentTieringConfiguration":{"shape":"S4n"}},"payload":"IntelligentTieringConfiguration"}},"GetBucketInventoryConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?inventory"},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"InventoryConfiguration":{"shape":"S4x"}},"payload":"InventoryConfiguration"}},"GetBucketLifecycle":{"http":{"method":"GET","requestUri":"/{Bucket}?lifecycle"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Rules":{"shape":"S5d","locationName":"Rule"}}},"deprecated":true},"GetBucketLifecycleConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?lifecycle"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Rules":{"shape":"S5t","locationName":"Rule"}}}},"GetBucketLocation":{"http":{"method":"GET","requestUri":"/{Bucket}?location"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"LocationConstraint":{}}}},"GetBucketLogging":{"http":{"method":"GET","requestUri":"/{Bucket}?logging"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"LoggingEnabled":{"shape":"S65"}}}},"GetBucketMetricsConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?metrics"},"input":{"type":"structure","required":["Bucket","Id"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"MetricsConfiguration":{"shape":"S6d"}},"payload":"MetricsConfiguration"}},"GetBucketNotification":{"http":{"method":"GET","requestUri":"/{Bucket}?notification"},"input":{"shape":"S6h"},"output":{"shape":"S6i"},"deprecated":true},"GetBucketNotificationConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?notification"},"input":{"shape":"S6h"},"output":{"shape":"S6t"}},"GetBucketOwnershipControls":{"http":{"method":"GET","requestUri":"/{Bucket}?ownershipControls"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"OwnershipControls":{"shape":"S7a"}},"payload":"OwnershipControls"}},"GetBucketPolicy":{"http":{"method":"GET","requestUri":"/{Bucket}?policy"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Policy":{}},"payload":"Policy"}},"GetBucketPolicyStatus":{"http":{"method":"GET","requestUri":"/{Bucket}?policyStatus"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"PolicyStatus":{"type":"structure","members":{"IsPublic":{"locationName":"IsPublic","type":"boolean"}}}},"payload":"PolicyStatus"}},"GetBucketReplication":{"http":{"method":"GET","requestUri":"/{Bucket}?replication"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"ReplicationConfiguration":{"shape":"S7m"}},"payload":"ReplicationConfiguration"}},"GetBucketRequestPayment":{"http":{"method":"GET","requestUri":"/{Bucket}?requestPayment"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Payer":{}}}},"GetBucketTagging":{"http":{"method":"GET","requestUri":"/{Bucket}?tagging"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","required":["TagSet"],"members":{"TagSet":{"shape":"S3v"}}}},"GetBucketVersioning":{"http":{"method":"GET","requestUri":"/{Bucket}?versioning"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Status":{},"MFADelete":{"locationName":"MfaDelete"}}}},"GetBucketWebsite":{"http":{"method":"GET","requestUri":"/{Bucket}?website"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"RedirectAllRequestsTo":{"shape":"S8p"},"IndexDocument":{"shape":"S8s"},"ErrorDocument":{"shape":"S8u"},"RoutingRules":{"shape":"S8v"}}}},"GetObject":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"IfMatch":{"location":"header","locationName":"If-Match"},"IfModifiedSince":{"location":"header","locationName":"If-Modified-Since","type":"timestamp"},"IfNoneMatch":{"location":"header","locationName":"If-None-Match"},"IfUnmodifiedSince":{"location":"header","locationName":"If-Unmodified-Since","type":"timestamp"},"Key":{"location":"uri","locationName":"Key"},"Range":{"location":"header","locationName":"Range"},"ResponseCacheControl":{"location":"querystring","locationName":"response-cache-control"},"ResponseContentDisposition":{"location":"querystring","locationName":"response-content-disposition"},"ResponseContentEncoding":{"location":"querystring","locationName":"response-content-encoding"},"ResponseContentLanguage":{"location":"querystring","locationName":"response-content-language"},"ResponseContentType":{"location":"querystring","locationName":"response-content-type"},"ResponseExpires":{"location":"querystring","locationName":"response-expires","type":"timestamp","timestampFormat":"rfc822"},"VersionId":{"location":"querystring","locationName":"versionId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"PartNumber":{"location":"querystring","locationName":"partNumber","type":"integer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ChecksumMode":{"location":"header","locationName":"x-amz-checksum-mode"}}},"output":{"type":"structure","members":{"Body":{"streaming":true,"type":"blob"},"DeleteMarker":{"location":"header","locationName":"x-amz-delete-marker","type":"boolean"},"AcceptRanges":{"location":"header","locationName":"accept-ranges"},"Expiration":{"location":"header","locationName":"x-amz-expiration"},"Restore":{"location":"header","locationName":"x-amz-restore"},"LastModified":{"location":"header","locationName":"Last-Modified","type":"timestamp"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"long"},"ETag":{"location":"header","locationName":"ETag"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-checksum-sha256"},"MissingMeta":{"location":"header","locationName":"x-amz-missing-meta","type":"integer"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentRange":{"location":"header","locationName":"Content-Range"},"ContentType":{"location":"header","locationName":"Content-Type"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"Metadata":{"shape":"S1b","location":"headers","locationName":"x-amz-meta-"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"},"ReplicationStatus":{"location":"header","locationName":"x-amz-replication-status"},"PartsCount":{"location":"header","locationName":"x-amz-mp-parts-count","type":"integer"},"TagCount":{"location":"header","locationName":"x-amz-tagging-count","type":"integer"},"ObjectLockMode":{"location":"header","locationName":"x-amz-object-lock-mode"},"ObjectLockRetainUntilDate":{"shape":"S1o","location":"header","locationName":"x-amz-object-lock-retain-until-date"},"ObjectLockLegalHoldStatus":{"location":"header","locationName":"x-amz-object-lock-legal-hold"}},"payload":"Body"},"httpChecksum":{"requestValidationModeMember":"ChecksumMode","responseAlgorithms":["CRC32","CRC32C","SHA256","SHA1"]}},"GetObjectAcl":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?acl"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Owner":{"shape":"S3d"},"Grants":{"shape":"S3g","locationName":"AccessControlList"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}}},"GetObjectAttributes":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?attributes"},"input":{"type":"structure","required":["Bucket","Key","ObjectAttributes"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"MaxParts":{"location":"header","locationName":"x-amz-max-parts","type":"integer"},"PartNumberMarker":{"location":"header","locationName":"x-amz-part-number-marker","type":"integer"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ObjectAttributes":{"location":"header","locationName":"x-amz-object-attributes","type":"list","member":{}}}},"output":{"type":"structure","members":{"DeleteMarker":{"location":"header","locationName":"x-amz-delete-marker","type":"boolean"},"LastModified":{"location":"header","locationName":"Last-Modified","type":"timestamp"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"},"ETag":{},"Checksum":{"type":"structure","members":{"ChecksumCRC32":{},"ChecksumCRC32C":{},"ChecksumSHA1":{},"ChecksumSHA256":{}}},"ObjectParts":{"type":"structure","members":{"TotalPartsCount":{"locationName":"PartsCount","type":"integer"},"PartNumberMarker":{"type":"integer"},"NextPartNumberMarker":{"type":"integer"},"MaxParts":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Parts":{"locationName":"Part","type":"list","member":{"type":"structure","members":{"PartNumber":{"type":"integer"},"Size":{"type":"integer"},"ChecksumCRC32":{},"ChecksumCRC32C":{},"ChecksumSHA1":{},"ChecksumSHA256":{}}},"flattened":true}}},"StorageClass":{},"ObjectSize":{"type":"long"}}}},"GetObjectLegalHold":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?legal-hold"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"LegalHold":{"shape":"Sa9"}},"payload":"LegalHold"}},"GetObjectLockConfiguration":{"http":{"method":"GET","requestUri":"/{Bucket}?object-lock"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"ObjectLockConfiguration":{"shape":"Sac"}},"payload":"ObjectLockConfiguration"}},"GetObjectRetention":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?retention"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Retention":{"shape":"Sak"}},"payload":"Retention"}},"GetObjectTagging":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?tagging"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"}}},"output":{"type":"structure","required":["TagSet"],"members":{"VersionId":{"location":"header","locationName":"x-amz-version-id"},"TagSet":{"shape":"S3v"}}}},"GetObjectTorrent":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}?torrent"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Body":{"streaming":true,"type":"blob"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}},"payload":"Body"}},"GetPublicAccessBlock":{"http":{"method":"GET","requestUri":"/{Bucket}?publicAccessBlock"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"PublicAccessBlockConfiguration":{"shape":"Sar"}},"payload":"PublicAccessBlockConfiguration"}},"HeadBucket":{"http":{"method":"HEAD","requestUri":"/{Bucket}"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}}},"HeadObject":{"http":{"method":"HEAD","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"IfMatch":{"location":"header","locationName":"If-Match"},"IfModifiedSince":{"location":"header","locationName":"If-Modified-Since","type":"timestamp"},"IfNoneMatch":{"location":"header","locationName":"If-None-Match"},"IfUnmodifiedSince":{"location":"header","locationName":"If-Unmodified-Since","type":"timestamp"},"Key":{"location":"uri","locationName":"Key"},"Range":{"location":"header","locationName":"Range"},"VersionId":{"location":"querystring","locationName":"versionId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"PartNumber":{"location":"querystring","locationName":"partNumber","type":"integer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ChecksumMode":{"location":"header","locationName":"x-amz-checksum-mode"}}},"output":{"type":"structure","members":{"DeleteMarker":{"location":"header","locationName":"x-amz-delete-marker","type":"boolean"},"AcceptRanges":{"location":"header","locationName":"accept-ranges"},"Expiration":{"location":"header","locationName":"x-amz-expiration"},"Restore":{"location":"header","locationName":"x-amz-restore"},"ArchiveStatus":{"location":"header","locationName":"x-amz-archive-status"},"LastModified":{"location":"header","locationName":"Last-Modified","type":"timestamp"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"long"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-checksum-sha256"},"ETag":{"location":"header","locationName":"ETag"},"MissingMeta":{"location":"header","locationName":"x-amz-missing-meta","type":"integer"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentType":{"location":"header","locationName":"Content-Type"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"Metadata":{"shape":"S1b","location":"headers","locationName":"x-amz-meta-"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"},"ReplicationStatus":{"location":"header","locationName":"x-amz-replication-status"},"PartsCount":{"location":"header","locationName":"x-amz-mp-parts-count","type":"integer"},"ObjectLockMode":{"location":"header","locationName":"x-amz-object-lock-mode"},"ObjectLockRetainUntilDate":{"shape":"S1o","location":"header","locationName":"x-amz-object-lock-retain-until-date"},"ObjectLockLegalHoldStatus":{"location":"header","locationName":"x-amz-object-lock-legal-hold"}}}},"ListBucketAnalyticsConfigurations":{"http":{"method":"GET","requestUri":"/{Bucket}?analytics"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContinuationToken":{"location":"querystring","locationName":"continuation-token"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"ContinuationToken":{},"NextContinuationToken":{},"AnalyticsConfigurationList":{"locationName":"AnalyticsConfiguration","type":"list","member":{"shape":"S3p"},"flattened":true}}}},"ListBucketIntelligentTieringConfigurations":{"http":{"method":"GET","requestUri":"/{Bucket}?intelligent-tiering"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContinuationToken":{"location":"querystring","locationName":"continuation-token"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"ContinuationToken":{},"NextContinuationToken":{},"IntelligentTieringConfigurationList":{"locationName":"IntelligentTieringConfiguration","type":"list","member":{"shape":"S4n"},"flattened":true}}}},"ListBucketInventoryConfigurations":{"http":{"method":"GET","requestUri":"/{Bucket}?inventory"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContinuationToken":{"location":"querystring","locationName":"continuation-token"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"ContinuationToken":{},"InventoryConfigurationList":{"locationName":"InventoryConfiguration","type":"list","member":{"shape":"S4x"},"flattened":true},"IsTruncated":{"type":"boolean"},"NextContinuationToken":{}}}},"ListBucketMetricsConfigurations":{"http":{"method":"GET","requestUri":"/{Bucket}?metrics"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContinuationToken":{"location":"querystring","locationName":"continuation-token"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"ContinuationToken":{},"NextContinuationToken":{},"MetricsConfigurationList":{"locationName":"MetricsConfiguration","type":"list","member":{"shape":"S6d"},"flattened":true}}}},"ListBuckets":{"http":{"method":"GET"},"output":{"type":"structure","members":{"Buckets":{"type":"list","member":{"locationName":"Bucket","type":"structure","members":{"Name":{},"CreationDate":{"type":"timestamp"}}}},"Owner":{"shape":"S3d"}}},"alias":"GetService"},"ListMultipartUploads":{"http":{"method":"GET","requestUri":"/{Bucket}?uploads"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Delimiter":{"location":"querystring","locationName":"delimiter"},"EncodingType":{"location":"querystring","locationName":"encoding-type"},"KeyMarker":{"location":"querystring","locationName":"key-marker"},"MaxUploads":{"location":"querystring","locationName":"max-uploads","type":"integer"},"Prefix":{"location":"querystring","locationName":"prefix"},"UploadIdMarker":{"location":"querystring","locationName":"upload-id-marker"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Bucket":{},"KeyMarker":{},"UploadIdMarker":{},"NextKeyMarker":{},"Prefix":{},"Delimiter":{},"NextUploadIdMarker":{},"MaxUploads":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Uploads":{"locationName":"Upload","type":"list","member":{"type":"structure","members":{"UploadId":{},"Key":{},"Initiated":{"type":"timestamp"},"StorageClass":{},"Owner":{"shape":"S3d"},"Initiator":{"shape":"Sbr"},"ChecksumAlgorithm":{}}},"flattened":true},"CommonPrefixes":{"shape":"Sbs"},"EncodingType":{}}}},"ListObjectVersions":{"http":{"method":"GET","requestUri":"/{Bucket}?versions"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Delimiter":{"location":"querystring","locationName":"delimiter"},"EncodingType":{"location":"querystring","locationName":"encoding-type"},"KeyMarker":{"location":"querystring","locationName":"key-marker"},"MaxKeys":{"location":"querystring","locationName":"max-keys","type":"integer"},"Prefix":{"location":"querystring","locationName":"prefix"},"VersionIdMarker":{"location":"querystring","locationName":"version-id-marker"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"KeyMarker":{},"VersionIdMarker":{},"NextKeyMarker":{},"NextVersionIdMarker":{},"Versions":{"locationName":"Version","type":"list","member":{"type":"structure","members":{"ETag":{},"ChecksumAlgorithm":{"shape":"Sc1"},"Size":{"type":"integer"},"StorageClass":{},"Key":{},"VersionId":{},"IsLatest":{"type":"boolean"},"LastModified":{"type":"timestamp"},"Owner":{"shape":"S3d"}}},"flattened":true},"DeleteMarkers":{"locationName":"DeleteMarker","type":"list","member":{"type":"structure","members":{"Owner":{"shape":"S3d"},"Key":{},"VersionId":{},"IsLatest":{"type":"boolean"},"LastModified":{"type":"timestamp"}}},"flattened":true},"Name":{},"Prefix":{},"Delimiter":{},"MaxKeys":{"type":"integer"},"CommonPrefixes":{"shape":"Sbs"},"EncodingType":{}}},"alias":"GetBucketObjectVersions"},"ListObjects":{"http":{"method":"GET","requestUri":"/{Bucket}"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Delimiter":{"location":"querystring","locationName":"delimiter"},"EncodingType":{"location":"querystring","locationName":"encoding-type"},"Marker":{"location":"querystring","locationName":"marker"},"MaxKeys":{"location":"querystring","locationName":"max-keys","type":"integer"},"Prefix":{"location":"querystring","locationName":"prefix"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"Marker":{},"NextMarker":{},"Contents":{"shape":"Sca"},"Name":{},"Prefix":{},"Delimiter":{},"MaxKeys":{"type":"integer"},"CommonPrefixes":{"shape":"Sbs"},"EncodingType":{}}},"alias":"GetBucket"},"ListObjectsV2":{"http":{"method":"GET","requestUri":"/{Bucket}?list-type=2"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Delimiter":{"location":"querystring","locationName":"delimiter"},"EncodingType":{"location":"querystring","locationName":"encoding-type"},"MaxKeys":{"location":"querystring","locationName":"max-keys","type":"integer"},"Prefix":{"location":"querystring","locationName":"prefix"},"ContinuationToken":{"location":"querystring","locationName":"continuation-token"},"FetchOwner":{"location":"querystring","locationName":"fetch-owner","type":"boolean"},"StartAfter":{"location":"querystring","locationName":"start-after"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"Contents":{"shape":"Sca"},"Name":{},"Prefix":{},"Delimiter":{},"MaxKeys":{"type":"integer"},"CommonPrefixes":{"shape":"Sbs"},"EncodingType":{},"KeyCount":{"type":"integer"},"ContinuationToken":{},"NextContinuationToken":{},"StartAfter":{}}}},"ListParts":{"http":{"method":"GET","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key","UploadId"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"MaxParts":{"location":"querystring","locationName":"max-parts","type":"integer"},"PartNumberMarker":{"location":"querystring","locationName":"part-number-marker","type":"integer"},"UploadId":{"location":"querystring","locationName":"uploadId"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"}}},"output":{"type":"structure","members":{"AbortDate":{"location":"header","locationName":"x-amz-abort-date","type":"timestamp"},"AbortRuleId":{"location":"header","locationName":"x-amz-abort-rule-id"},"Bucket":{},"Key":{},"UploadId":{},"PartNumberMarker":{"type":"integer"},"NextPartNumberMarker":{"type":"integer"},"MaxParts":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Parts":{"locationName":"Part","type":"list","member":{"type":"structure","members":{"PartNumber":{"type":"integer"},"LastModified":{"type":"timestamp"},"ETag":{},"Size":{"type":"integer"},"ChecksumCRC32":{},"ChecksumCRC32C":{},"ChecksumSHA1":{},"ChecksumSHA256":{}}},"flattened":true},"Initiator":{"shape":"Sbr"},"Owner":{"shape":"S3d"},"StorageClass":{},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"},"ChecksumAlgorithm":{}}}},"PutBucketAccelerateConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?accelerate"},"input":{"type":"structure","required":["Bucket","AccelerateConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"AccelerateConfiguration":{"locationName":"AccelerateConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"Status":{}}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"}},"payload":"AccelerateConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":false}},"PutBucketAcl":{"http":{"method":"PUT","requestUri":"/{Bucket}?acl"},"input":{"type":"structure","required":["Bucket"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"AccessControlPolicy":{"shape":"Scp","locationName":"AccessControlPolicy","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","locationName":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"AccessControlPolicy"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketAnalyticsConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?analytics"},"input":{"type":"structure","required":["Bucket","Id","AnalyticsConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"AnalyticsConfiguration":{"shape":"S3p","locationName":"AnalyticsConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"AnalyticsConfiguration"}},"PutBucketCors":{"http":{"method":"PUT","requestUri":"/{Bucket}?cors"},"input":{"type":"structure","required":["Bucket","CORSConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"CORSConfiguration":{"locationName":"CORSConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","required":["CORSRules"],"members":{"CORSRules":{"shape":"S44","locationName":"CORSRule"}}},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"CORSConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketEncryption":{"http":{"method":"PUT","requestUri":"/{Bucket}?encryption"},"input":{"type":"structure","required":["Bucket","ServerSideEncryptionConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ServerSideEncryptionConfiguration":{"shape":"S4h","locationName":"ServerSideEncryptionConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"ServerSideEncryptionConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketIntelligentTieringConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?intelligent-tiering"},"input":{"type":"structure","required":["Bucket","Id","IntelligentTieringConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"IntelligentTieringConfiguration":{"shape":"S4n","locationName":"IntelligentTieringConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}}},"payload":"IntelligentTieringConfiguration"}},"PutBucketInventoryConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?inventory"},"input":{"type":"structure","required":["Bucket","Id","InventoryConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"InventoryConfiguration":{"shape":"S4x","locationName":"InventoryConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"InventoryConfiguration"}},"PutBucketLifecycle":{"http":{"method":"PUT","requestUri":"/{Bucket}?lifecycle"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"LifecycleConfiguration":{"locationName":"LifecycleConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","required":["Rules"],"members":{"Rules":{"shape":"S5d","locationName":"Rule"}}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"LifecycleConfiguration"},"deprecated":true,"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketLifecycleConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?lifecycle"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"LifecycleConfiguration":{"locationName":"LifecycleConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","required":["Rules"],"members":{"Rules":{"shape":"S5t","locationName":"Rule"}}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"LifecycleConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketLogging":{"http":{"method":"PUT","requestUri":"/{Bucket}?logging"},"input":{"type":"structure","required":["Bucket","BucketLoggingStatus"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"BucketLoggingStatus":{"locationName":"BucketLoggingStatus","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"LoggingEnabled":{"shape":"S65"}}},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"BucketLoggingStatus"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketMetricsConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?metrics"},"input":{"type":"structure","required":["Bucket","Id","MetricsConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Id":{"location":"querystring","locationName":"id"},"MetricsConfiguration":{"shape":"S6d","locationName":"MetricsConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"MetricsConfiguration"}},"PutBucketNotification":{"http":{"method":"PUT","requestUri":"/{Bucket}?notification"},"input":{"type":"structure","required":["Bucket","NotificationConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"NotificationConfiguration":{"shape":"S6i","locationName":"NotificationConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"NotificationConfiguration"},"deprecated":true,"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketNotificationConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?notification"},"input":{"type":"structure","required":["Bucket","NotificationConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"NotificationConfiguration":{"shape":"S6t","locationName":"NotificationConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"SkipDestinationValidation":{"location":"header","locationName":"x-amz-skip-destination-validation","type":"boolean"}},"payload":"NotificationConfiguration"}},"PutBucketOwnershipControls":{"http":{"method":"PUT","requestUri":"/{Bucket}?ownershipControls"},"input":{"type":"structure","required":["Bucket","OwnershipControls"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"OwnershipControls":{"shape":"S7a","locationName":"OwnershipControls","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}}},"payload":"OwnershipControls"},"httpChecksum":{"requestChecksumRequired":true}},"PutBucketPolicy":{"http":{"method":"PUT","requestUri":"/{Bucket}?policy"},"input":{"type":"structure","required":["Bucket","Policy"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ConfirmRemoveSelfBucketAccess":{"location":"header","locationName":"x-amz-confirm-remove-self-bucket-access","type":"boolean"},"Policy":{},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"Policy"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketReplication":{"http":{"method":"PUT","requestUri":"/{Bucket}?replication"},"input":{"type":"structure","required":["Bucket","ReplicationConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ReplicationConfiguration":{"shape":"S7m","locationName":"ReplicationConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"Token":{"location":"header","locationName":"x-amz-bucket-object-lock-token"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"ReplicationConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketRequestPayment":{"http":{"method":"PUT","requestUri":"/{Bucket}?requestPayment"},"input":{"type":"structure","required":["Bucket","RequestPaymentConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"RequestPaymentConfiguration":{"locationName":"RequestPaymentConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","required":["Payer"],"members":{"Payer":{}}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"RequestPaymentConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketTagging":{"http":{"method":"PUT","requestUri":"/{Bucket}?tagging"},"input":{"type":"structure","required":["Bucket","Tagging"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"Tagging":{"shape":"Sdf","locationName":"Tagging","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"Tagging"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketVersioning":{"http":{"method":"PUT","requestUri":"/{Bucket}?versioning"},"input":{"type":"structure","required":["Bucket","VersioningConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"MFA":{"location":"header","locationName":"x-amz-mfa"},"VersioningConfiguration":{"locationName":"VersioningConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"MFADelete":{"locationName":"MfaDelete"},"Status":{}}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"VersioningConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutBucketWebsite":{"http":{"method":"PUT","requestUri":"/{Bucket}?website"},"input":{"type":"structure","required":["Bucket","WebsiteConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"WebsiteConfiguration":{"locationName":"WebsiteConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"ErrorDocument":{"shape":"S8u"},"IndexDocument":{"shape":"S8s"},"RedirectAllRequestsTo":{"shape":"S8p"},"RoutingRules":{"shape":"S8v"}}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"WebsiteConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutObject":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"Body":{"streaming":true,"type":"blob"},"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"CacheControl":{"location":"header","locationName":"Cache-Control"},"ContentDisposition":{"location":"header","locationName":"Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"Content-Language"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"long"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ContentType":{"location":"header","locationName":"Content-Type"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-checksum-sha256"},"Expires":{"location":"header","locationName":"Expires","type":"timestamp"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"},"Metadata":{"shape":"S1b","location":"headers","locationName":"x-amz-meta-"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","locationName":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","locationName":"x-amz-website-redirect-location"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"SSEKMSEncryptionContext":{"shape":"S1i","location":"header","locationName":"x-amz-server-side-encryption-context"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"Tagging":{"location":"header","locationName":"x-amz-tagging"},"ObjectLockMode":{"location":"header","locationName":"x-amz-object-lock-mode"},"ObjectLockRetainUntilDate":{"shape":"S1o","location":"header","locationName":"x-amz-object-lock-retain-until-date"},"ObjectLockLegalHoldStatus":{"location":"header","locationName":"x-amz-object-lock-legal-hold"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"Body"},"output":{"type":"structure","members":{"Expiration":{"location":"header","locationName":"x-amz-expiration"},"ETag":{"location":"header","locationName":"ETag"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-checksum-sha256"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"VersionId":{"location":"header","locationName":"x-amz-version-id"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"SSEKMSEncryptionContext":{"shape":"S1i","location":"header","locationName":"x-amz-server-side-encryption-context"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":false}},"PutObjectAcl":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}?acl"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"ACL":{"location":"header","locationName":"x-amz-acl"},"AccessControlPolicy":{"shape":"Scp","locationName":"AccessControlPolicy","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"GrantFullControl":{"location":"header","locationName":"x-amz-grant-full-control"},"GrantRead":{"location":"header","locationName":"x-amz-grant-read"},"GrantReadACP":{"location":"header","locationName":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","locationName":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","locationName":"x-amz-grant-write-acp"},"Key":{"location":"uri","locationName":"Key"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"VersionId":{"location":"querystring","locationName":"versionId"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"AccessControlPolicy"},"output":{"type":"structure","members":{"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutObjectLegalHold":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}?legal-hold"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"LegalHold":{"shape":"Sa9","locationName":"LegalHold","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"VersionId":{"location":"querystring","locationName":"versionId"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"LegalHold"},"output":{"type":"structure","members":{"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutObjectLockConfiguration":{"http":{"method":"PUT","requestUri":"/{Bucket}?object-lock"},"input":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ObjectLockConfiguration":{"shape":"Sac","locationName":"ObjectLockConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"Token":{"location":"header","locationName":"x-amz-bucket-object-lock-token"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"ObjectLockConfiguration"},"output":{"type":"structure","members":{"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutObjectRetention":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}?retention"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"Retention":{"shape":"Sak","locationName":"Retention","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"VersionId":{"location":"querystring","locationName":"versionId"},"BypassGovernanceRetention":{"location":"header","locationName":"x-amz-bypass-governance-retention","type":"boolean"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"Retention"},"output":{"type":"structure","members":{"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutObjectTagging":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}?tagging"},"input":{"type":"structure","required":["Bucket","Key","Tagging"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"Tagging":{"shape":"Sdf","locationName":"Tagging","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"}},"payload":"Tagging"},"output":{"type":"structure","members":{"VersionId":{"location":"header","locationName":"x-amz-version-id"}}},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"PutPublicAccessBlock":{"http":{"method":"PUT","requestUri":"/{Bucket}?publicAccessBlock"},"input":{"type":"structure","required":["Bucket","PublicAccessBlockConfiguration"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"PublicAccessBlockConfiguration":{"shape":"Sar","locationName":"PublicAccessBlockConfiguration","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"PublicAccessBlockConfiguration"},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":true}},"RestoreObject":{"http":{"requestUri":"/{Bucket}/{Key+}?restore"},"input":{"type":"structure","required":["Bucket","Key"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"VersionId":{"location":"querystring","locationName":"versionId"},"RestoreRequest":{"locationName":"RestoreRequest","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","members":{"Days":{"type":"integer"},"GlacierJobParameters":{"type":"structure","required":["Tier"],"members":{"Tier":{}}},"Type":{},"Tier":{},"Description":{},"SelectParameters":{"type":"structure","required":["InputSerialization","ExpressionType","Expression","OutputSerialization"],"members":{"InputSerialization":{"shape":"Se5"},"ExpressionType":{},"Expression":{},"OutputSerialization":{"shape":"Sek"}}},"OutputLocation":{"type":"structure","members":{"S3":{"type":"structure","required":["BucketName","Prefix"],"members":{"BucketName":{},"Prefix":{},"Encryption":{"type":"structure","required":["EncryptionType"],"members":{"EncryptionType":{},"KMSKeyId":{"shape":"Sr"},"KMSContext":{}}},"CannedACL":{},"AccessControlList":{"shape":"S3g"},"Tagging":{"shape":"Sdf"},"UserMetadata":{"type":"list","member":{"locationName":"MetadataEntry","type":"structure","members":{"Name":{},"Value":{}}}},"StorageClass":{}}}}}}},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"RestoreRequest"},"output":{"type":"structure","members":{"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"},"RestoreOutputPath":{"location":"header","locationName":"x-amz-restore-output-path"}}},"alias":"PostObjectRestore","httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":false}},"SelectObjectContent":{"http":{"requestUri":"/{Bucket}/{Key+}?select&select-type=2"},"input":{"locationName":"SelectObjectContentRequest","xmlNamespace":{"uri":"http://s3.amazonaws.com/doc/2006-03-01/"},"type":"structure","required":["Bucket","Key","Expression","ExpressionType","InputSerialization","OutputSerialization"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"Key":{"location":"uri","locationName":"Key"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"Expression":{},"ExpressionType":{},"RequestProgress":{"type":"structure","members":{"Enabled":{"type":"boolean"}}},"InputSerialization":{"shape":"Se5"},"OutputSerialization":{"shape":"Sek"},"ScanRange":{"type":"structure","members":{"Start":{"type":"long"},"End":{"type":"long"}}},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"output":{"type":"structure","members":{"Payload":{"type":"structure","members":{"Records":{"type":"structure","members":{"Payload":{"eventpayload":true,"type":"blob"}},"event":true},"Stats":{"type":"structure","members":{"Details":{"eventpayload":true,"type":"structure","members":{"BytesScanned":{"type":"long"},"BytesProcessed":{"type":"long"},"BytesReturned":{"type":"long"}}}},"event":true},"Progress":{"type":"structure","members":{"Details":{"eventpayload":true,"type":"structure","members":{"BytesScanned":{"type":"long"},"BytesProcessed":{"type":"long"},"BytesReturned":{"type":"long"}}}},"event":true},"Cont":{"type":"structure","members":{},"event":true},"End":{"type":"structure","members":{},"event":true}},"eventstream":true}},"payload":"Payload"}},"UploadPart":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","Key","PartNumber","UploadId"],"members":{"Body":{"streaming":true,"type":"blob"},"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"long"},"ContentMD5":{"location":"header","locationName":"Content-MD5"},"ChecksumAlgorithm":{"location":"header","locationName":"x-amz-sdk-checksum-algorithm"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-checksum-sha256"},"Key":{"location":"uri","locationName":"Key"},"PartNumber":{"location":"querystring","locationName":"partNumber","type":"integer"},"UploadId":{"location":"querystring","locationName":"uploadId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}},"payload":"Body"},"output":{"type":"structure","members":{"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"ETag":{"location":"header","locationName":"ETag"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-checksum-sha256"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}}},"httpChecksum":{"requestAlgorithmMember":"ChecksumAlgorithm","requestChecksumRequired":false}},"UploadPartCopy":{"http":{"method":"PUT","requestUri":"/{Bucket}/{Key+}"},"input":{"type":"structure","required":["Bucket","CopySource","Key","PartNumber","UploadId"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"CopySource":{"location":"header","locationName":"x-amz-copy-source"},"CopySourceIfMatch":{"location":"header","locationName":"x-amz-copy-source-if-match"},"CopySourceIfModifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-modified-since","type":"timestamp"},"CopySourceIfNoneMatch":{"location":"header","locationName":"x-amz-copy-source-if-none-match"},"CopySourceIfUnmodifiedSince":{"location":"header","locationName":"x-amz-copy-source-if-unmodified-since","type":"timestamp"},"CopySourceRange":{"location":"header","locationName":"x-amz-copy-source-range"},"Key":{"location":"uri","locationName":"Key"},"PartNumber":{"location":"querystring","locationName":"partNumber","type":"integer"},"UploadId":{"location":"querystring","locationName":"uploadId"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKey":{"shape":"Sk","location":"header","locationName":"x-amz-server-side-encryption-customer-key"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"CopySourceSSECustomerAlgorithm":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-algorithm"},"CopySourceSSECustomerKey":{"shape":"S1k","location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key"},"CopySourceSSECustomerKeyMD5":{"location":"header","locationName":"x-amz-copy-source-server-side-encryption-customer-key-MD5"},"RequestPayer":{"location":"header","locationName":"x-amz-request-payer"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"},"ExpectedSourceBucketOwner":{"location":"header","locationName":"x-amz-source-expected-bucket-owner"}}},"output":{"type":"structure","members":{"CopySourceVersionId":{"location":"header","locationName":"x-amz-copy-source-version-id"},"CopyPartResult":{"type":"structure","members":{"ETag":{},"LastModified":{"type":"timestamp"},"ChecksumCRC32":{},"ChecksumCRC32C":{},"ChecksumSHA1":{},"ChecksumSHA256":{}}},"ServerSideEncryption":{"location":"header","locationName":"x-amz-server-side-encryption"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-server-side-encryption-customer-algorithm"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-server-side-encryption-customer-key-MD5"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-server-side-encryption-aws-kms-key-id"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"},"RequestCharged":{"location":"header","locationName":"x-amz-request-charged"}},"payload":"CopyPartResult"}},"WriteGetObjectResponse":{"http":{"requestUri":"/WriteGetObjectResponse"},"input":{"type":"structure","required":["RequestRoute","RequestToken"],"members":{"RequestRoute":{"hostLabel":true,"location":"header","locationName":"x-amz-request-route"},"RequestToken":{"location":"header","locationName":"x-amz-request-token"},"Body":{"streaming":true,"type":"blob"},"StatusCode":{"location":"header","locationName":"x-amz-fwd-status","type":"integer"},"ErrorCode":{"location":"header","locationName":"x-amz-fwd-error-code"},"ErrorMessage":{"location":"header","locationName":"x-amz-fwd-error-message"},"AcceptRanges":{"location":"header","locationName":"x-amz-fwd-header-accept-ranges"},"CacheControl":{"location":"header","locationName":"x-amz-fwd-header-Cache-Control"},"ContentDisposition":{"location":"header","locationName":"x-amz-fwd-header-Content-Disposition"},"ContentEncoding":{"location":"header","locationName":"x-amz-fwd-header-Content-Encoding"},"ContentLanguage":{"location":"header","locationName":"x-amz-fwd-header-Content-Language"},"ContentLength":{"location":"header","locationName":"Content-Length","type":"long"},"ContentRange":{"location":"header","locationName":"x-amz-fwd-header-Content-Range"},"ContentType":{"location":"header","locationName":"x-amz-fwd-header-Content-Type"},"ChecksumCRC32":{"location":"header","locationName":"x-amz-fwd-header-x-amz-checksum-crc32"},"ChecksumCRC32C":{"location":"header","locationName":"x-amz-fwd-header-x-amz-checksum-crc32c"},"ChecksumSHA1":{"location":"header","locationName":"x-amz-fwd-header-x-amz-checksum-sha1"},"ChecksumSHA256":{"location":"header","locationName":"x-amz-fwd-header-x-amz-checksum-sha256"},"DeleteMarker":{"location":"header","locationName":"x-amz-fwd-header-x-amz-delete-marker","type":"boolean"},"ETag":{"location":"header","locationName":"x-amz-fwd-header-ETag"},"Expires":{"location":"header","locationName":"x-amz-fwd-header-Expires","type":"timestamp"},"Expiration":{"location":"header","locationName":"x-amz-fwd-header-x-amz-expiration"},"LastModified":{"location":"header","locationName":"x-amz-fwd-header-Last-Modified","type":"timestamp"},"MissingMeta":{"location":"header","locationName":"x-amz-fwd-header-x-amz-missing-meta","type":"integer"},"Metadata":{"shape":"S1b","location":"headers","locationName":"x-amz-meta-"},"ObjectLockMode":{"location":"header","locationName":"x-amz-fwd-header-x-amz-object-lock-mode"},"ObjectLockLegalHoldStatus":{"location":"header","locationName":"x-amz-fwd-header-x-amz-object-lock-legal-hold"},"ObjectLockRetainUntilDate":{"shape":"S1o","location":"header","locationName":"x-amz-fwd-header-x-amz-object-lock-retain-until-date"},"PartsCount":{"location":"header","locationName":"x-amz-fwd-header-x-amz-mp-parts-count","type":"integer"},"ReplicationStatus":{"location":"header","locationName":"x-amz-fwd-header-x-amz-replication-status"},"RequestCharged":{"location":"header","locationName":"x-amz-fwd-header-x-amz-request-charged"},"Restore":{"location":"header","locationName":"x-amz-fwd-header-x-amz-restore"},"ServerSideEncryption":{"location":"header","locationName":"x-amz-fwd-header-x-amz-server-side-encryption"},"SSECustomerAlgorithm":{"location":"header","locationName":"x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm"},"SSEKMSKeyId":{"shape":"Sr","location":"header","locationName":"x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id"},"SSECustomerKeyMD5":{"location":"header","locationName":"x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5"},"StorageClass":{"location":"header","locationName":"x-amz-fwd-header-x-amz-storage-class"},"TagCount":{"location":"header","locationName":"x-amz-fwd-header-x-amz-tagging-count","type":"integer"},"VersionId":{"location":"header","locationName":"x-amz-fwd-header-x-amz-version-id"},"BucketKeyEnabled":{"location":"header","locationName":"x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled","type":"boolean"}},"payload":"Body"},"authtype":"v4-unsigned-body","endpoint":{"hostPrefix":"{RequestRoute}."},"staticContextParams":{"UseObjectLambdaEndpoint":{"value":true}}}},"shapes":{"Sk":{"type":"blob","sensitive":true},"Sr":{"type":"string","sensitive":true},"S1b":{"type":"map","key":{},"value":{}},"S1i":{"type":"string","sensitive":true},"S1k":{"type":"blob","sensitive":true},"S1o":{"type":"timestamp","timestampFormat":"iso8601"},"S3d":{"type":"structure","members":{"DisplayName":{},"ID":{}}},"S3g":{"type":"list","member":{"locationName":"Grant","type":"structure","members":{"Grantee":{"shape":"S3i"},"Permission":{}}}},"S3i":{"type":"structure","required":["Type"],"members":{"DisplayName":{},"EmailAddress":{},"ID":{},"Type":{"locationName":"xsi:type","xmlAttribute":true},"URI":{}},"xmlNamespace":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"S3p":{"type":"structure","required":["Id","StorageClassAnalysis"],"members":{"Id":{},"Filter":{"type":"structure","members":{"Prefix":{},"Tag":{"shape":"S3s"},"And":{"type":"structure","members":{"Prefix":{},"Tags":{"shape":"S3v","flattened":true,"locationName":"Tag"}}}}},"StorageClassAnalysis":{"type":"structure","members":{"DataExport":{"type":"structure","required":["OutputSchemaVersion","Destination"],"members":{"OutputSchemaVersion":{},"Destination":{"type":"structure","required":["S3BucketDestination"],"members":{"S3BucketDestination":{"type":"structure","required":["Format","Bucket"],"members":{"Format":{},"BucketAccountId":{},"Bucket":{},"Prefix":{}}}}}}}}}}},"S3s":{"type":"structure","required":["Key","Value"],"members":{"Key":{},"Value":{}}},"S3v":{"type":"list","member":{"shape":"S3s","locationName":"Tag"}},"S44":{"type":"list","member":{"type":"structure","required":["AllowedMethods","AllowedOrigins"],"members":{"ID":{},"AllowedHeaders":{"locationName":"AllowedHeader","type":"list","member":{},"flattened":true},"AllowedMethods":{"locationName":"AllowedMethod","type":"list","member":{},"flattened":true},"AllowedOrigins":{"locationName":"AllowedOrigin","type":"list","member":{},"flattened":true},"ExposeHeaders":{"locationName":"ExposeHeader","type":"list","member":{},"flattened":true},"MaxAgeSeconds":{"type":"integer"}}},"flattened":true},"S4h":{"type":"structure","required":["Rules"],"members":{"Rules":{"locationName":"Rule","type":"list","member":{"type":"structure","members":{"ApplyServerSideEncryptionByDefault":{"type":"structure","required":["SSEAlgorithm"],"members":{"SSEAlgorithm":{},"KMSMasterKeyID":{"shape":"Sr"}}},"BucketKeyEnabled":{"type":"boolean"}}},"flattened":true}}},"S4n":{"type":"structure","required":["Id","Status","Tierings"],"members":{"Id":{},"Filter":{"type":"structure","members":{"Prefix":{},"Tag":{"shape":"S3s"},"And":{"type":"structure","members":{"Prefix":{},"Tags":{"shape":"S3v","flattened":true,"locationName":"Tag"}}}}},"Status":{},"Tierings":{"locationName":"Tiering","type":"list","member":{"type":"structure","required":["Days","AccessTier"],"members":{"Days":{"type":"integer"},"AccessTier":{}}},"flattened":true}}},"S4x":{"type":"structure","required":["Destination","IsEnabled","Id","IncludedObjectVersions","Schedule"],"members":{"Destination":{"type":"structure","required":["S3BucketDestination"],"members":{"S3BucketDestination":{"type":"structure","required":["Bucket","Format"],"members":{"AccountId":{},"Bucket":{},"Format":{},"Prefix":{},"Encryption":{"type":"structure","members":{"SSES3":{"locationName":"SSE-S3","type":"structure","members":{}},"SSEKMS":{"locationName":"SSE-KMS","type":"structure","required":["KeyId"],"members":{"KeyId":{"shape":"Sr"}}}}}}}}},"IsEnabled":{"type":"boolean"},"Filter":{"type":"structure","required":["Prefix"],"members":{"Prefix":{}}},"Id":{},"IncludedObjectVersions":{},"OptionalFields":{"type":"list","member":{"locationName":"Field"}},"Schedule":{"type":"structure","required":["Frequency"],"members":{"Frequency":{}}}}},"S5d":{"type":"list","member":{"type":"structure","required":["Prefix","Status"],"members":{"Expiration":{"shape":"S5f"},"ID":{},"Prefix":{},"Status":{},"Transition":{"shape":"S5k"},"NoncurrentVersionTransition":{"shape":"S5m"},"NoncurrentVersionExpiration":{"shape":"S5o"},"AbortIncompleteMultipartUpload":{"shape":"S5p"}}},"flattened":true},"S5f":{"type":"structure","members":{"Date":{"shape":"S5g"},"Days":{"type":"integer"},"ExpiredObjectDeleteMarker":{"type":"boolean"}}},"S5g":{"type":"timestamp","timestampFormat":"iso8601"},"S5k":{"type":"structure","members":{"Date":{"shape":"S5g"},"Days":{"type":"integer"},"StorageClass":{}}},"S5m":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"},"StorageClass":{},"NewerNoncurrentVersions":{"type":"integer"}}},"S5o":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"},"NewerNoncurrentVersions":{"type":"integer"}}},"S5p":{"type":"structure","members":{"DaysAfterInitiation":{"type":"integer"}}},"S5t":{"type":"list","member":{"type":"structure","required":["Status"],"members":{"Expiration":{"shape":"S5f"},"ID":{},"Prefix":{"deprecated":true},"Filter":{"type":"structure","members":{"Prefix":{},"Tag":{"shape":"S3s"},"ObjectSizeGreaterThan":{"type":"long"},"ObjectSizeLessThan":{"type":"long"},"And":{"type":"structure","members":{"Prefix":{},"Tags":{"shape":"S3v","flattened":true,"locationName":"Tag"},"ObjectSizeGreaterThan":{"type":"long"},"ObjectSizeLessThan":{"type":"long"}}}}},"Status":{},"Transitions":{"locationName":"Transition","type":"list","member":{"shape":"S5k"},"flattened":true},"NoncurrentVersionTransitions":{"locationName":"NoncurrentVersionTransition","type":"list","member":{"shape":"S5m"},"flattened":true},"NoncurrentVersionExpiration":{"shape":"S5o"},"AbortIncompleteMultipartUpload":{"shape":"S5p"}}},"flattened":true},"S65":{"type":"structure","required":["TargetBucket","TargetPrefix"],"members":{"TargetBucket":{},"TargetGrants":{"type":"list","member":{"locationName":"Grant","type":"structure","members":{"Grantee":{"shape":"S3i"},"Permission":{}}}},"TargetPrefix":{}}},"S6d":{"type":"structure","required":["Id"],"members":{"Id":{},"Filter":{"type":"structure","members":{"Prefix":{},"Tag":{"shape":"S3s"},"AccessPointArn":{},"And":{"type":"structure","members":{"Prefix":{},"Tags":{"shape":"S3v","flattened":true,"locationName":"Tag"},"AccessPointArn":{}}}}}}},"S6h":{"type":"structure","required":["Bucket"],"members":{"Bucket":{"contextParam":{"name":"Bucket"},"location":"uri","locationName":"Bucket"},"ExpectedBucketOwner":{"location":"header","locationName":"x-amz-expected-bucket-owner"}}},"S6i":{"type":"structure","members":{"TopicConfiguration":{"type":"structure","members":{"Id":{},"Events":{"shape":"S6l","locationName":"Event"},"Event":{"deprecated":true},"Topic":{}}},"QueueConfiguration":{"type":"structure","members":{"Id":{},"Event":{"deprecated":true},"Events":{"shape":"S6l","locationName":"Event"},"Queue":{}}},"CloudFunctionConfiguration":{"type":"structure","members":{"Id":{},"Event":{"deprecated":true},"Events":{"shape":"S6l","locationName":"Event"},"CloudFunction":{},"InvocationRole":{}}}}},"S6l":{"type":"list","member":{},"flattened":true},"S6t":{"type":"structure","members":{"TopicConfigurations":{"locationName":"TopicConfiguration","type":"list","member":{"type":"structure","required":["TopicArn","Events"],"members":{"Id":{},"TopicArn":{"locationName":"Topic"},"Events":{"shape":"S6l","locationName":"Event"},"Filter":{"shape":"S6w"}}},"flattened":true},"QueueConfigurations":{"locationName":"QueueConfiguration","type":"list","member":{"type":"structure","required":["QueueArn","Events"],"members":{"Id":{},"QueueArn":{"locationName":"Queue"},"Events":{"shape":"S6l","locationName":"Event"},"Filter":{"shape":"S6w"}}},"flattened":true},"LambdaFunctionConfigurations":{"locationName":"CloudFunctionConfiguration","type":"list","member":{"type":"structure","required":["LambdaFunctionArn","Events"],"members":{"Id":{},"LambdaFunctionArn":{"locationName":"CloudFunction"},"Events":{"shape":"S6l","locationName":"Event"},"Filter":{"shape":"S6w"}}},"flattened":true},"EventBridgeConfiguration":{"type":"structure","members":{}}}},"S6w":{"type":"structure","members":{"Key":{"locationName":"S3Key","type":"structure","members":{"FilterRules":{"locationName":"FilterRule","type":"list","member":{"type":"structure","members":{"Name":{},"Value":{}}},"flattened":true}}}}},"S7a":{"type":"structure","required":["Rules"],"members":{"Rules":{"locationName":"Rule","type":"list","member":{"type":"structure","required":["ObjectOwnership"],"members":{"ObjectOwnership":{}}},"flattened":true}}},"S7m":{"type":"structure","required":["Role","Rules"],"members":{"Role":{},"Rules":{"locationName":"Rule","type":"list","member":{"type":"structure","required":["Status","Destination"],"members":{"ID":{},"Priority":{"type":"integer"},"Prefix":{"deprecated":true},"Filter":{"type":"structure","members":{"Prefix":{},"Tag":{"shape":"S3s"},"And":{"type":"structure","members":{"Prefix":{},"Tags":{"shape":"S3v","flattened":true,"locationName":"Tag"}}}}},"Status":{},"SourceSelectionCriteria":{"type":"structure","members":{"SseKmsEncryptedObjects":{"type":"structure","required":["Status"],"members":{"Status":{}}},"ReplicaModifications":{"type":"structure","required":["Status"],"members":{"Status":{}}}}},"ExistingObjectReplication":{"type":"structure","required":["Status"],"members":{"Status":{}}},"Destination":{"type":"structure","required":["Bucket"],"members":{"Bucket":{},"Account":{},"StorageClass":{},"AccessControlTranslation":{"type":"structure","required":["Owner"],"members":{"Owner":{}}},"EncryptionConfiguration":{"type":"structure","members":{"ReplicaKmsKeyID":{}}},"ReplicationTime":{"type":"structure","required":["Status","Time"],"members":{"Status":{},"Time":{"shape":"S88"}}},"Metrics":{"type":"structure","required":["Status"],"members":{"Status":{},"EventThreshold":{"shape":"S88"}}}}},"DeleteMarkerReplication":{"type":"structure","members":{"Status":{}}}}},"flattened":true}}},"S88":{"type":"structure","members":{"Minutes":{"type":"integer"}}},"S8p":{"type":"structure","required":["HostName"],"members":{"HostName":{},"Protocol":{}}},"S8s":{"type":"structure","required":["Suffix"],"members":{"Suffix":{}}},"S8u":{"type":"structure","required":["Key"],"members":{"Key":{}}},"S8v":{"type":"list","member":{"locationName":"RoutingRule","type":"structure","required":["Redirect"],"members":{"Condition":{"type":"structure","members":{"HttpErrorCodeReturnedEquals":{},"KeyPrefixEquals":{}}},"Redirect":{"type":"structure","members":{"HostName":{},"HttpRedirectCode":{},"Protocol":{},"ReplaceKeyPrefixWith":{},"ReplaceKeyWith":{}}}}}},"Sa9":{"type":"structure","members":{"Status":{}}},"Sac":{"type":"structure","members":{"ObjectLockEnabled":{},"Rule":{"type":"structure","members":{"DefaultRetention":{"type":"structure","members":{"Mode":{},"Days":{"type":"integer"},"Years":{"type":"integer"}}}}}}},"Sak":{"type":"structure","members":{"Mode":{},"RetainUntilDate":{"shape":"S5g"}}},"Sar":{"type":"structure","members":{"BlockPublicAcls":{"locationName":"BlockPublicAcls","type":"boolean"},"IgnorePublicAcls":{"locationName":"IgnorePublicAcls","type":"boolean"},"BlockPublicPolicy":{"locationName":"BlockPublicPolicy","type":"boolean"},"RestrictPublicBuckets":{"locationName":"RestrictPublicBuckets","type":"boolean"}}},"Sbr":{"type":"structure","members":{"ID":{},"DisplayName":{}}},"Sbs":{"type":"list","member":{"type":"structure","members":{"Prefix":{}}},"flattened":true},"Sc1":{"type":"list","member":{},"flattened":true},"Sca":{"type":"list","member":{"type":"structure","members":{"Key":{},"LastModified":{"type":"timestamp"},"ETag":{},"ChecksumAlgorithm":{"shape":"Sc1"},"Size":{"type":"integer"},"StorageClass":{},"Owner":{"shape":"S3d"}}},"flattened":true},"Scp":{"type":"structure","members":{"Grants":{"shape":"S3g","locationName":"AccessControlList"},"Owner":{"shape":"S3d"}}},"Sdf":{"type":"structure","required":["TagSet"],"members":{"TagSet":{"shape":"S3v"}}},"Se5":{"type":"structure","members":{"CSV":{"type":"structure","members":{"FileHeaderInfo":{},"Comments":{},"QuoteEscapeCharacter":{},"RecordDelimiter":{},"FieldDelimiter":{},"QuoteCharacter":{},"AllowQuotedRecordDelimiter":{"type":"boolean"}}},"CompressionType":{},"JSON":{"type":"structure","members":{"Type":{}}},"Parquet":{"type":"structure","members":{}}}},"Sek":{"type":"structure","members":{"CSV":{"type":"structure","members":{"QuoteFields":{},"QuoteEscapeCharacter":{},"RecordDelimiter":{},"FieldDelimiter":{},"QuoteCharacter":{}}},"JSON":{"type":"structure","members":{"RecordDelimiter":{}}}}}},"clientContextParams":{"Accelerate":{"documentation":"Enables this client to use S3 Transfer Acceleration endpoints.","type":"boolean"},"DisableMultiRegionAccessPoints":{"documentation":"Disables this client\'s usage of Multi-Region Access Points.","type":"boolean"},"ForcePathStyle":{"documentation":"Forces this client to use path-style addressing for buckets.","type":"boolean"},"UseArnRegion":{"documentation":"Enables this client to use an ARN\'s region when constructing an endpoint instead of the client\'s configured region.","type":"boolean"}}}')
        },
        7265: function(e) {
            "use strict";
            e.exports = JSON.parse('{"o":{"ListBuckets":{"result_key":"Buckets"},"ListMultipartUploads":{"input_token":["KeyMarker","UploadIdMarker"],"limit_key":"MaxUploads","more_results":"IsTruncated","output_token":["NextKeyMarker","NextUploadIdMarker"],"result_key":["Uploads","CommonPrefixes"]},"ListObjectVersions":{"input_token":["KeyMarker","VersionIdMarker"],"limit_key":"MaxKeys","more_results":"IsTruncated","output_token":["NextKeyMarker","NextVersionIdMarker"],"result_key":["Versions","DeleteMarkers","CommonPrefixes"]},"ListObjects":{"input_token":"Marker","limit_key":"MaxKeys","more_results":"IsTruncated","output_token":"NextMarker || Contents[-1].Key","result_key":["Contents","CommonPrefixes"]},"ListObjectsV2":{"input_token":"ContinuationToken","limit_key":"MaxKeys","output_token":"NextContinuationToken","result_key":["Contents","CommonPrefixes"]},"ListParts":{"input_token":"PartNumberMarker","limit_key":"MaxParts","more_results":"IsTruncated","output_token":"NextPartNumberMarker","result_key":"Parts"}}}')
        },
        74048: function(e) {
            "use strict";
            e.exports = JSON.parse('{"V":{"BucketExists":{"delay":5,"operation":"HeadBucket","maxAttempts":20,"acceptors":[{"expected":200,"matcher":"status","state":"success"},{"expected":301,"matcher":"status","state":"success"},{"expected":403,"matcher":"status","state":"success"},{"expected":404,"matcher":"status","state":"retry"}]},"BucketNotExists":{"delay":5,"operation":"HeadBucket","maxAttempts":20,"acceptors":[{"expected":404,"matcher":"status","state":"success"}]},"ObjectExists":{"delay":5,"operation":"HeadObject","maxAttempts":20,"acceptors":[{"expected":200,"matcher":"status","state":"success"},{"expected":404,"matcher":"status","state":"retry"}]},"ObjectNotExists":{"delay":5,"operation":"HeadObject","maxAttempts":20,"acceptors":[{"expected":404,"matcher":"status","state":"success"}]}}}')
        },
        80753: function(e) {
            "use strict";
            e.exports = JSON.parse('{"version":"2.0","metadata":{"apiVersion":"2011-06-15","endpointPrefix":"sts","globalEndpoint":"sts.amazonaws.com","protocol":"query","serviceAbbreviation":"AWS STS","serviceFullName":"AWS Security Token Service","serviceId":"STS","signatureVersion":"v4","uid":"sts-2011-06-15","xmlNamespace":"https://sts.amazonaws.com/doc/2011-06-15/"},"operations":{"AssumeRole":{"input":{"type":"structure","required":["RoleArn","RoleSessionName"],"members":{"RoleArn":{},"RoleSessionName":{},"PolicyArns":{"shape":"S4"},"Policy":{},"DurationSeconds":{"type":"integer"},"Tags":{"shape":"S8"},"TransitiveTagKeys":{"type":"list","member":{}},"ExternalId":{},"SerialNumber":{},"TokenCode":{},"SourceIdentity":{}}},"output":{"resultWrapper":"AssumeRoleResult","type":"structure","members":{"Credentials":{"shape":"Si"},"AssumedRoleUser":{"shape":"Sn"},"PackedPolicySize":{"type":"integer"},"SourceIdentity":{}}}},"AssumeRoleWithSAML":{"input":{"type":"structure","required":["RoleArn","PrincipalArn","SAMLAssertion"],"members":{"RoleArn":{},"PrincipalArn":{},"SAMLAssertion":{},"PolicyArns":{"shape":"S4"},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithSAMLResult","type":"structure","members":{"Credentials":{"shape":"Si"},"AssumedRoleUser":{"shape":"Sn"},"PackedPolicySize":{"type":"integer"},"Subject":{},"SubjectType":{},"Issuer":{},"Audience":{},"NameQualifier":{},"SourceIdentity":{}}}},"AssumeRoleWithWebIdentity":{"input":{"type":"structure","required":["RoleArn","RoleSessionName","WebIdentityToken"],"members":{"RoleArn":{},"RoleSessionName":{},"WebIdentityToken":{},"ProviderId":{},"PolicyArns":{"shape":"S4"},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithWebIdentityResult","type":"structure","members":{"Credentials":{"shape":"Si"},"SubjectFromWebIdentityToken":{},"AssumedRoleUser":{"shape":"Sn"},"PackedPolicySize":{"type":"integer"},"Provider":{},"Audience":{},"SourceIdentity":{}}}},"DecodeAuthorizationMessage":{"input":{"type":"structure","required":["EncodedMessage"],"members":{"EncodedMessage":{}}},"output":{"resultWrapper":"DecodeAuthorizationMessageResult","type":"structure","members":{"DecodedMessage":{}}}},"GetAccessKeyInfo":{"input":{"type":"structure","required":["AccessKeyId"],"members":{"AccessKeyId":{}}},"output":{"resultWrapper":"GetAccessKeyInfoResult","type":"structure","members":{"Account":{}}}},"GetCallerIdentity":{"input":{"type":"structure","members":{}},"output":{"resultWrapper":"GetCallerIdentityResult","type":"structure","members":{"UserId":{},"Account":{},"Arn":{}}}},"GetFederationToken":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Policy":{},"PolicyArns":{"shape":"S4"},"DurationSeconds":{"type":"integer"},"Tags":{"shape":"S8"}}},"output":{"resultWrapper":"GetFederationTokenResult","type":"structure","members":{"Credentials":{"shape":"Si"},"FederatedUser":{"type":"structure","required":["FederatedUserId","Arn"],"members":{"FederatedUserId":{},"Arn":{}}},"PackedPolicySize":{"type":"integer"}}}},"GetSessionToken":{"input":{"type":"structure","members":{"DurationSeconds":{"type":"integer"},"SerialNumber":{},"TokenCode":{}}},"output":{"resultWrapper":"GetSessionTokenResult","type":"structure","members":{"Credentials":{"shape":"Si"}}}}},"shapes":{"S4":{"type":"list","member":{"type":"structure","members":{"arn":{}}}},"S8":{"type":"list","member":{"type":"structure","required":["Key","Value"],"members":{"Key":{},"Value":{}}}},"Si":{"type":"structure","required":["AccessKeyId","SecretAccessKey","SessionToken","Expiration"],"members":{"AccessKeyId":{},"SecretAccessKey":{},"SessionToken":{},"Expiration":{"type":"timestamp"}}},"Sn":{"type":"structure","required":["AssumedRoleId","Arn"],"members":{"AssumedRoleId":{},"Arn":{}}}}}')
        },
        93639: function(e) {
            "use strict";
            e.exports = {
                o: {}
            }
        },
        80738: function(e) {
            "use strict";
            e.exports = JSON.parse('{"rules":{"*/*":{"endpoint":"{service}.{region}.amazonaws.com"},"cn-*/*":{"endpoint":"{service}.{region}.amazonaws.com.cn"},"us-iso-*/*":"usIso","us-isob-*/*":"usIsob","*/budgets":"globalSSL","*/cloudfront":"globalSSL","*/sts":"globalSSL","*/importexport":{"endpoint":"{service}.amazonaws.com","signatureVersion":"v2","globalEndpoint":true},"*/route53":"globalSSL","cn-*/route53":{"endpoint":"{service}.amazonaws.com.cn","globalEndpoint":true,"signingRegion":"cn-northwest-1"},"us-gov-*/route53":"globalGovCloud","us-iso-*/route53":{"endpoint":"{service}.c2s.ic.gov","globalEndpoint":true,"signingRegion":"us-iso-east-1"},"us-isob-*/route53":{"endpoint":"{service}.sc2s.sgov.gov","globalEndpoint":true,"signingRegion":"us-isob-east-1"},"*/waf":"globalSSL","*/iam":"globalSSL","cn-*/iam":{"endpoint":"{service}.cn-north-1.amazonaws.com.cn","globalEndpoint":true,"signingRegion":"cn-north-1"},"us-gov-*/iam":"globalGovCloud","us-gov-*/sts":{"endpoint":"{service}.{region}.amazonaws.com"},"us-gov-west-1/s3":"s3signature","us-west-1/s3":"s3signature","us-west-2/s3":"s3signature","eu-west-1/s3":"s3signature","ap-southeast-1/s3":"s3signature","ap-southeast-2/s3":"s3signature","ap-northeast-1/s3":"s3signature","sa-east-1/s3":"s3signature","us-east-1/s3":{"endpoint":"{service}.amazonaws.com","signatureVersion":"s3"},"us-east-1/sdb":{"endpoint":"{service}.amazonaws.com","signatureVersion":"v2"},"*/sdb":{"endpoint":"{service}.{region}.amazonaws.com","signatureVersion":"v2"},"*/resource-explorer-2":"dualstackByDefault","*/kendra-ranking":"dualstackByDefault","*/internetmonitor":"dualstackByDefault","*/codecatalyst":"globalDualstackByDefault"},"fipsRules":{"*/*":"fipsStandard","us-gov-*/*":"fipsStandard","us-iso-*/*":{"endpoint":"{service}-fips.{region}.c2s.ic.gov"},"us-iso-*/dms":"usIso","us-isob-*/*":{"endpoint":"{service}-fips.{region}.sc2s.sgov.gov"},"us-isob-*/dms":"usIsob","cn-*/*":{"endpoint":"{service}-fips.{region}.amazonaws.com.cn"},"*/api.ecr":"fips.api.ecr","*/api.sagemaker":"fips.api.sagemaker","*/batch":"fipsDotPrefix","*/eks":"fipsDotPrefix","*/models.lex":"fips.models.lex","*/runtime.lex":"fips.runtime.lex","*/runtime.sagemaker":{"endpoint":"runtime-fips.sagemaker.{region}.amazonaws.com"},"*/iam":"fipsWithoutRegion","*/route53":"fipsWithoutRegion","*/transcribe":"fipsDotPrefix","*/waf":"fipsWithoutRegion","us-gov-*/transcribe":"fipsDotPrefix","us-gov-*/api.ecr":"fips.api.ecr","us-gov-*/api.sagemaker":"fips.api.sagemaker","us-gov-*/models.lex":"fips.models.lex","us-gov-*/runtime.lex":"fips.runtime.lex","us-gov-*/acm-pca":"fipsWithServiceOnly","us-gov-*/batch":"fipsWithServiceOnly","us-gov-*/cloudformation":"fipsWithServiceOnly","us-gov-*/config":"fipsWithServiceOnly","us-gov-*/eks":"fipsWithServiceOnly","us-gov-*/elasticmapreduce":"fipsWithServiceOnly","us-gov-*/identitystore":"fipsWithServiceOnly","us-gov-*/dynamodb":"fipsWithServiceOnly","us-gov-*/elasticloadbalancing":"fipsWithServiceOnly","us-gov-*/guardduty":"fipsWithServiceOnly","us-gov-*/monitoring":"fipsWithServiceOnly","us-gov-*/resource-groups":"fipsWithServiceOnly","us-gov-*/runtime.sagemaker":"fipsWithServiceOnly","us-gov-*/servicecatalog-appregistry":"fipsWithServiceOnly","us-gov-*/servicequotas":"fipsWithServiceOnly","us-gov-*/ssm":"fipsWithServiceOnly","us-gov-*/sts":"fipsWithServiceOnly","us-gov-*/support":"fipsWithServiceOnly","us-gov-west-1/states":"fipsWithServiceOnly","us-iso-east-1/elasticfilesystem":{"endpoint":"elasticfilesystem-fips.{region}.c2s.ic.gov"},"us-gov-west-1/organizations":"fipsWithServiceOnly","us-gov-west-1/route53":{"endpoint":"route53.us-gov.amazonaws.com"},"*/resource-explorer-2":"fipsDualstackByDefault","*/kendra-ranking":"dualstackByDefault","*/internetmonitor":"dualstackByDefault","*/codecatalyst":"fipsGlobalDualstackByDefault"},"dualstackRules":{"*/*":{"endpoint":"{service}.{region}.api.aws"},"cn-*/*":{"endpoint":"{service}.{region}.api.amazonwebservices.com.cn"},"*/s3":"dualstackLegacy","cn-*/s3":"dualstackLegacyCn","*/s3-control":"dualstackLegacy","cn-*/s3-control":"dualstackLegacyCn","ap-south-1/ec2":"dualstackLegacyEc2","eu-west-1/ec2":"dualstackLegacyEc2","sa-east-1/ec2":"dualstackLegacyEc2","us-east-1/ec2":"dualstackLegacyEc2","us-east-2/ec2":"dualstackLegacyEc2","us-west-2/ec2":"dualstackLegacyEc2"},"dualstackFipsRules":{"*/*":{"endpoint":"{service}-fips.{region}.api.aws"},"cn-*/*":{"endpoint":"{service}-fips.{region}.api.amazonwebservices.com.cn"},"*/s3":"dualstackFipsLegacy","cn-*/s3":"dualstackFipsLegacyCn","*/s3-control":"dualstackFipsLegacy","cn-*/s3-control":"dualstackFipsLegacyCn"},"patterns":{"globalSSL":{"endpoint":"https://{service}.amazonaws.com","globalEndpoint":true,"signingRegion":"us-east-1"},"globalGovCloud":{"endpoint":"{service}.us-gov.amazonaws.com","globalEndpoint":true,"signingRegion":"us-gov-west-1"},"s3signature":{"endpoint":"{service}.{region}.amazonaws.com","signatureVersion":"s3"},"usIso":{"endpoint":"{service}.{region}.c2s.ic.gov"},"usIsob":{"endpoint":"{service}.{region}.sc2s.sgov.gov"},"fipsStandard":{"endpoint":"{service}-fips.{region}.amazonaws.com"},"fipsDotPrefix":{"endpoint":"fips.{service}.{region}.amazonaws.com"},"fipsWithoutRegion":{"endpoint":"{service}-fips.amazonaws.com"},"fips.api.ecr":{"endpoint":"ecr-fips.{region}.amazonaws.com"},"fips.api.sagemaker":{"endpoint":"api-fips.sagemaker.{region}.amazonaws.com"},"fips.models.lex":{"endpoint":"models-fips.lex.{region}.amazonaws.com"},"fips.runtime.lex":{"endpoint":"runtime-fips.lex.{region}.amazonaws.com"},"fipsWithServiceOnly":{"endpoint":"{service}.{region}.amazonaws.com"},"dualstackLegacy":{"endpoint":"{service}.dualstack.{region}.amazonaws.com"},"dualstackLegacyCn":{"endpoint":"{service}.dualstack.{region}.amazonaws.com.cn"},"dualstackFipsLegacy":{"endpoint":"{service}-fips.dualstack.{region}.amazonaws.com"},"dualstackFipsLegacyCn":{"endpoint":"{service}-fips.dualstack.{region}.amazonaws.com.cn"},"dualstackLegacyEc2":{"endpoint":"api.ec2.{region}.aws"},"dualstackByDefault":{"endpoint":"{service}.{region}.api.aws"},"fipsDualstackByDefault":{"endpoint":"{service}-fips.{region}.api.aws"},"globalDualstackByDefault":{"endpoint":"{service}.global.api.aws"},"fipsGlobalDualstackByDefault":{"endpoint":"{service}-fips.global.api.aws"}}}')
        }
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [901], {
        84726: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/form/[id]/preview", function() {
                return s(18539)
            }])
        },
        18539: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return y
                }
            });
            var n = s(85893),
                r = s(34766),
                i = s.n(r),
                o = s(83454);
            let a = new(i())({
                    region: o.env.AWS_REGION,
                    accessKeyId: o.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: o.env.AWS_SECRET_ACCESS_KEY
                }),
                u = async e => {
                    let {
                        Body: t
                    } = await a.getObject({
                        Bucket: o.env.AWS_S3_BUCKET_NAME,
                        Key: e
                    }).promise();
                    return JSON.parse(t.toString())
                };
            var c = s(93194),
                l = s(20052),
                d = s(36979),
                m = s(23100),
                h = s(25698),
                b = s(64759),
                f = s(70318),
                w = s(82175),
                p = s(67294);
            let _ = () => {
                let {
                    setSubmitting: e,
                    handleReset: t
                } = (0, w.useFormikContext)(), s = (0, c.p)();
                return (0, p.useEffect)(() => {
                    let n = n => {
                        switch (n.data.type) {
                            case "submit-in-progress":
                                e(!0);
                                break;
                            case "submit-success":
                                let r = n.data.message || "Form submitted successfully";
                                s({
                                    title: r,
                                    status: "success",
                                    duration: 3e3,
                                    isClosable: !0,
                                    position: "top"
                                }), t(), e(!1);
                                break;
                            case "submitting-failed":
                                let i = n.data.message || "Form submission failed";
                                s({
                                    title: i,
                                    status: "error",
                                    duration: 3e3,
                                    isClosable: !0,
                                    position: "top"
                                }), e(!1)
                        }
                    };
                    return window.addEventListener("message", n), () => window.removeEventListener("message", n)
                }, [t, e, s]), null
            };

            function S(e) {
                let {
                    schema: t
                } = e, [s, r] = p.useState(null), [i, o] = p.useState(null), a = (0, p.useCallback)((e, t) => {
                    window.parent.postMessage({
                        type: "submit-form",
                        ref: window.name,
                        body: e
                    }, "*")
                }, []);
                return (0, p.useEffect)(() => {
                    let e = () => window.parent.postMessage({
                            type: "resize",
                            ref: window.name,
                            height: document.body.scrollHeight
                        }, "*"),
                        t = new ResizeObserver(e);
                    return t.observe(document.body), e(), () => t.unobserve(document.body)
                }, []), (0, n.jsx)(l.x, {
                    children: (0, n.jsx)(d.W, {
                        py: 4,
                        children: (0, n.jsx)(b.FieldsProvider, {
                            fields: f.Z,
                            children: (0, n.jsx)(w.Formik, {
                                validationSchema: i,
                                initialValues: {},
                                onSubmit: a,
                                children: e => {
                                    let {
                                        handleSubmit: i,
                                        isSubmitting: a
                                    } = e;
                                    return (0, n.jsxs)(w.Form, {
                                        children: [(0, n.jsx)(b.DynamicFormSchemaController, {
                                            schema: t,
                                            onFormSchemaChange: r,
                                            onValidationSchemaChange: o
                                        }), (0, n.jsx)(b.FormGenerator, {
                                            schema: s
                                        }), (0, n.jsx)(_, {}), (0, n.jsx)(m.xu, {
                                            my: "4",
                                            children: (0, n.jsx)(h.z, {
                                                onClick: i,
                                                isLoading: a,
                                                disabled: a,
                                                mt: "sm",
                                                w: "full",
                                                type: "submit",
                                                children: "Submit"
                                            })
                                        })]
                                    })
                                }
                            })
                        })
                    })
                })
            }
            S.getInitialProps = async e => {
                try {
                    let {
                        id: t
                    } = e.query, s = await u("form-schemas/".concat(t, ".json"));
                    return {
                        schema: s
                    }
                } catch (e) {
                    return console.error(e), {
                        schema: {}
                    }
                }
            };
            var y = S
        },
        28022: function() {}
    },
    function(e) {
        e.O(0, [662, 630, 434, 835, 362, 175, 962, 811, 774, 888, 179], function() {
            return e(e.s = 84726)
        }), _N_E = e.O()
    }
]);
"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[776],{776:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(791),c=n(880),r=n(523),o=n(152),a="Comments_comments__9cxIN",m="NewCommentForm_form__C3cQf",d="NewCommentForm_control__iR6jS",i="NewCommentForm_actions__NC323",l=n(995),u=n(853),x=n(556),h=n(184),j=function(e){var t=(0,s.useRef)(),n=(0,l.Z)(u.Ir),c=n.sendRequest,r=n.status,o=n.error,a=e.onAddedComment;(0,s.useEffect)((function(){"completed"!==r||o||a()}),[r,o,a]);var j=function(n){n.preventDefault();var s=t.current.value;c({commentData:{text:s},quoteId:e.quoteId})};return(0,h.jsxs)("form",{className:m,onSubmit:j,children:["pending"===r&&(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}),(0,h.jsxs)("div",{className:d,onSubmit:j,children:[(0,h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,h.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,h.jsx)("div",{className:i,children:(0,h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},f="CommentItem_item__+vwzS",_=function(e){return(0,h.jsx)("li",{className:f,children:(0,h.jsx)("p",{children:e.text})})},p="CommentsList_comments__UVWAR",N=function(e){return(0,h.jsx)("ul",{className:p,children:e.comments.map((function(e){return(0,h.jsx)(_,{text:e.text},e.id)}))})},C=function(){var e=(0,s.useState)(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1],m=(0,c.UO)().quoteId,d=(0,l.Z)(u.h_),i=d.sendRequest,f=d.status,_=d.data;(0,s.useEffect)((function(){i(m)}),[i,m]);var p,C=(0,s.useCallback)((function(){i(m)}),[i,m]);return"pending"===f&&(p=(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})})),"completed"===f&&_&&_.length>0&&(p=(0,h.jsx)(N,{comments:_})),"completed"!==f||_&&0!==_.length||(p=(0,h.jsx)("p",{className:"centered",children:" No comments have been added."})),(0,h.jsxs)("section",{className:a,children:[(0,h.jsx)("h2",{children:"User Comments"}),!n&&(0,h.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),n&&(0,h.jsx)(j,{quoteId:m,onAddedComment:C}),p]})},v="HighlightedQuote_quote__dE8qA",b=function(e){return(0,h.jsxs)("figure",{className:v,children:[(0,h.jsx)("p",{children:e.text}),(0,h.jsx)("figcaption",{children:e.author})]})},g=function(){var e=(0,c.$B)(),t=(0,c.UO)().quoteId,n=(0,l.Z)(u.jR,!0),o=n.sendRequest,a=n.status,m=n.data,d=n.error;return(0,s.useEffect)((function(){o(t)}),[o,t]),"pending"===a?(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}):d?(0,h.jsx)("p",{className:"centered",children:d}):m.text?(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)(b,{text:m.text,author:m.author}),(0,h.jsx)(c.AW,{path:e.path,exact:!0,children:(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(r.rU,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),(0,h.jsx)(c.AW,{path:"".concat(e.path,"/comments"),children:(0,h.jsx)(C,{})})]}):(0,h.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=776.fdfb4947.chunk.js.map
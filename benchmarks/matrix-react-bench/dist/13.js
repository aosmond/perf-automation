(globalThis.webpackJsonp=globalThis.webpackJsonp||[]).push([[13],{1559:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(0),s=t.n(n),i=t(28),r=t(18),l=t(51),o=t(4),c=t(1),d=t(6),u=t(93),b=t(10),p=t(14);class h extends s.a.Component{constructor(e){var a,t,n;super(e),n=async()=>{this.setState({disabling:!0}),await d.b.setValue("enableEventIndexing",null,p.a.DEVICE,!1),await u.a.deleteEventIndex(),this.props.onFinished(!0),o.a.fire(b.a.ViewUserSettings)},(t="onDisable")in(a=this)?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,this.state={disabling:!1}}render(){return s.a.createElement(i.a,{onFinished:this.props.onFinished,title:Object(c.a)("Are you sure?")},Object(c.a)("If disabled, messages from encrypted rooms won't appear in search results."),this.state.disabling?s.a.createElement(r.a,null):s.a.createElement("div",null),s.a.createElement(l.a,{primaryButton:Object(c.a)("Disable"),onPrimaryButtonClick:this.onDisable,primaryButtonClass:"danger",cancelButtonClass:"warning",onCancel:this.props.onFinished,disabled:this.state.disabling}))}}}}]);
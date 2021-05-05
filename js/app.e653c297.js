(function(t){function e(e){for(var i,c,r=e[0],a=e[1],u=e[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==s[a]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},s={app:0},o=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3486:function(t,e,n){},"43a4":function(t,e,n){"use strict";n("6cf9")},4621:function(t,e,n){"use strict";n("bc2d")},"488b":function(t,e,n){"use strict";n("d6ce")},"4b1e":function(t,e,n){"use strict";n("3486")},"4cf1":function(t,e,n){},5482:function(t,e,n){"use strict";n("b99c")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Sudoku")]),n("Grid",{ref:"Grid"}),n("div",{staticClass:"input-methods"},[n("button",{class:t.inputMethod==t.constants.INPUT_METHODS.CORNER?"selected":"",on:{click:function(e){return t.setInputMethodAction(t.constants.INPUT_METHODS.CORNER)}}},[t._v(" Corner ")]),n("br"),n("button",{class:t.inputMethod==t.constants.INPUT_METHODS.CENTER?"selected":"",on:{click:function(e){return t.setInputMethodAction(t.constants.INPUT_METHODS.CENTER)}}},[t._v(" Center ")]),n("br"),n("button",{class:t.inputMethod==t.constants.INPUT_METHODS.VALUE?"selected":"",on:{click:function(e){return t.setInputMethodAction(t.constants.INPUT_METHODS.VALUE)}}},[t._v(" Value ")])]),n("Controls"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.backgroundShown,expression:"backgroundShown"}],staticClass:"background",on:{click:function(e){return t.hideBackgroundAction()}}}),n("div",{attrs:{id:"footer"}},[t._v(" Source and Issues: "),n("a",{attrs:{href:"https://github.com/alexanderstoev/sudoku",target:"_blank"}},[t._v("GitHub Repo")]),t._v(" v"+t._s(t.appVersion)+" ")])],1)},c=[],r=n("5530"),a=(n("159b"),"corner"),u="center",l="value",d={CORNER:a,CENTER:u,VALUE:l},h=l,f="sudoku-store",g="sudoku-version",p={VERSION:"0.2.0"};p["INPUT_METHODS"]=d,p["DEFAULT_INPUT_METHOD"]=h,p["LOCAL_STORAGE_KEY"]=f,p["LOCAL_STORAGE_VERSION_KEY"]=g;var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.ROW_SIZE*t.COL_SIZE,(function(e){return n("Cell",{key:e,attrs:{value:t.current.charAt(e-1),index:e,initialValue:t.initial.charAt(e-1)}})})),1)},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.classValue,on:{mousedown:function(e){return t.handleClick(t.index,e)},mouseenter:function(e){return t.handleDrag(t.index,e)}}},[t._v(" "+t._s("."==t.value?"":t.value)+" "),n("CornerClues",{directives:[{name:"show",rawName:"v-show",value:"."==t.value,expression:"value == '.'"}],ref:"CornerClues"}),n("CenterClues",{directives:[{name:"show",rawName:"v-show",value:"."==t.value,expression:"value == '.'"}],ref:"CenterClues"})],1)},S=[],I=(n("a9e3"),n("caad"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cornerlclues"},t._l(t.clues,(function(e){return n("span",{key:e},[t._v(t._s(e))])})),0)}),O=[],C={name:"CornerClues",computed:{clues:function(){var t=this.$store.getters["clues/getCluesOfType"](this.$parent.index,"corner");return t}}},_=C,x=(n("43a4"),n("2877")),A=Object(x["a"])(_,I,O,!1,null,"81b315da",null),w=A.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"centerclues"},[n("div",{staticClass:"holder"},[t._v(" "+t._s(t.val)+" ")])])},k=[],M=(n("a15b"),{components:{},name:"CenterClues",computed:{val:function(){return this.clues.join("")},clues:function(){var t=this.$store.getters["clues/getCluesOfType"](this.$parent.index,"center");return t}}}),R=M,j=(n("4b1e"),Object(x["a"])(R,E,k,!1,null,"d1b2b124",null)),y=j.exports,B={name:"Cell",components:{CornerClues:w,CenterClues:y},props:{index:Number,value:String,initialValue:String},methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])("root",["setMousedownAction","setAddingSelectionAction","setSelectedIndexesAction","updateSelectedIndexesAction"])),{},{handleClick:function(t,e){return this.setMousedownAction(!0),-1!==this.selectedIndexes.indexOf(t)?(this.setAddingSelectionAction(!1),void this.updateSelectedIndexesAction(t)):e.ctrlKey?(this.setAddingSelectionAction(!0),void this.updateSelectedIndexesAction(t)):(this.setAddingSelectionAction(!0),void this.setSelectedIndexesAction(t))},handleDrag:function(t){this.mousedown&&this.updateSelectedIndexesAction(t)}}),computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["c"])("highlight",["selectedDigitIndexes","selectedRowIndexes","selectedColumnIndexes","selectedBoxIndexes"])),Object(s["c"])("settings",["hlRCB","hlDigits"])),Object(s["c"])("root",["mousedown","selectedIndexes","activeIndex"])),{},{classValue:function(){var t="cell ";return this.selectedIndexes&&this.activeIndex==this.index&&(t+="active "),this.selectedIndexes&&this.selectedIndexes.includes(this.index)&&(t+="selected "),this.hlDigits&&this.selectedDigitIndexes&&this.selectedDigitIndexes.includes(this.index)&&(t+="sameDigit "),this.hlRCB&&this.selectedRowIndexes.includes(this.index)&&(t+="sameRow "),this.hlRCB&&this.selectedColumnIndexes.includes(this.index)&&(t+="sameColumn "),this.hlRCB&&this.selectedBoxIndexes.includes(this.index)&&(t+="sameBox "),"."==this.initialValue&&(t+="customDigit "),t}})},D=B,N=(n("7210"),Object(x["a"])(D,b,S,!1,null,"e785447a",null)),T=N.exports,G={components:{Cell:T},name:"Grid",props:{msg:String},computed:Object(r["a"])(Object(r["a"])({},Object(s["c"])("root",["ROW_SIZE","COL_SIZE"])),Object(s["c"])("sudokuStrings",["current","initial"]))},H=G,L=(n("488b"),Object(x["a"])(H,m,v,!1,null,"43a602bc",null)),$=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls"},[n("button",{staticClass:"icon",on:{click:function(e){return t.checkSudoku()}}},[n("span",{staticClass:"material-icons"},[t._v(" done ")])]),n("br"),n("button",{staticClass:"icon",on:{click:function(e){return t.resetGame()}}},[n("span",{staticClass:"material-icons"},[t._v(" sync ")])]),n("br"),n("button",{staticClass:"icon",on:{click:function(e){return t.newGame()}}},[n("span",{staticClass:"material-icons"},[t._v(" fiber_new ")])]),n("br"),n("button",{staticClass:"icon",class:t.inputShown?"selected":"",on:{click:function(e){return t.toggleInput()}}},[n("span",{staticClass:"material-icons"},[t._v(" keyboard ")])]),n("br"),n("button",{staticClass:"icon",class:t.settingsShown?"selected":"",on:{click:function(e){return t.toggleSettings()}}},[n("span",{staticClass:"material-icons"},[t._v(" settings ")])]),n("br"),n("button",{staticClass:"icon",class:t.helpShown?"selected":"",on:{click:function(e){return t.toggleHelp()}}},[n("span",{staticClass:"material-icons"},[t._v(" help_outline ")])]),n("br"),n("button",{staticClass:"icon",on:{click:function(e){return t.undo()}}},[n("span",{staticClass:"material-icons"},[t._v(" undo ")])]),n("br"),n("button",{staticClass:"icon",on:{click:function(e){return t.redo()}}},[n("span",{staticClass:"material-icons"},[t._v(" redo ")])]),n("br"),n("Settings",{directives:[{name:"show",rawName:"v-show",value:t.settingsShown,expression:"settingsShown"}],on:{close:function(e){t.settingsShown=!1}}}),n("Help",{directives:[{name:"show",rawName:"v-show",value:t.helpShown,expression:"helpShown"}],on:{close:function(e){t.helpShown=!1},inputString:function(e){return t.toggleInput()}}}),n("InputString",{directives:[{name:"show",rawName:"v-show",value:t.inputShown,expression:"inputShown"}],on:{close:function(e){t.inputShown=!1}}})],1)},U=[];function Z(t,e,n){return e>t.length-1?t:t.substring(0,e)+n+t.substring(e+1)}n("5319"),n("ac1f");var V={getRow:function(t,e){return Math.ceil(t/e)},getColumn:function(t,e){return t%e||e},getBox:function(t,e,n){var i=e/n,s=this.getBoxRow(t,e,n),o=this.getBoxCol(t,e,n);return(s-1)*i+o},getBoxRow:function(t,e,n){return Math.ceil(this.getRow(t,e)/n)},getBoxCol:function(t,e,n){return Math.ceil(this.getColumn(t,e)/n)},getRowIndexes:function(t,e){for(var n=this.getRow(t,e),i=[],s=0;s<e;s++)i.push((n-1)*e+s+1);return i},getColIndexes:function(t,e,n){for(var i=this.getColumn(t,e),s=[],o=0;o<n;o++)s.push(i+o*e);return s},getBoxIndexes:function(t,e,n){for(var i=[],s=this.getBoxRow(t,e,n),o=this.getBoxCol(t,e,n),c=(s-1)*n*e+(o-1)*n+1,r=0;r<n;r++)for(var a=0;a<n;a++)i.push(c+r+a*e);return i},getSameDigitIndexes:function(t,e){if("."===e[t-1])return[];for(var n=[],i=1;i<=e.length;i++)e[i-1]===e[t-1]&&n.push(i);return n},validateSudokuString:function(t){for(var e,n,i,s,o=[],c=[],r=[],a=0;a<t.length;a++)e=(a+9)%9,n=Math.floor(a/9),i=Math.floor(a/3)%3+3*Math.floor(a/27),o[n]=o[n]||[],c[e]=c[e]||[],r[i]=r[i]||[],s=t.charAt(a),o[n][e]=s,c[e][n]=s,r[i].push(s);var u=!0;function l(t){"123456789"!=t.sort().join("")&&(u=!1)}return o.forEach(l),c.forEach(l),r.forEach(l),u}},W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings"},[n("p",[t._v("Settings are automatically saved.")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.hlRCB,expression:"hlRCB"}],attrs:{type:"checkbox",id:"highlightRCB"},domProps:{checked:Array.isArray(t.hlRCB)?t._i(t.hlRCB,null)>-1:t.hlRCB},on:{change:function(e){var n=t.hlRCB,i=e.target,s=!!i.checked;if(Array.isArray(n)){var o=null,c=t._i(n,o);i.checked?c<0&&(t.hlRCB=n.concat([o])):c>-1&&(t.hlRCB=n.slice(0,c).concat(n.slice(c+1)))}else t.hlRCB=s}}}),n("label",{attrs:{for:"highlightRCB"}},[t._v("Auto highlight row, column and box")])]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.hlDigits,expression:"hlDigits"}],attrs:{type:"checkbox",id:"highlightDigits"},domProps:{checked:Array.isArray(t.hlDigits)?t._i(t.hlDigits,null)>-1:t.hlDigits},on:{change:function(e){var n=t.hlDigits,i=e.target,s=!!i.checked;if(Array.isArray(n)){var o=null,c=t._i(n,o);i.checked?c<0&&(t.hlDigits=n.concat([o])):c>-1&&(t.hlDigits=n.slice(0,c).concat(n.slice(c+1)))}else t.hlDigits=s}}}),n("label",{attrs:{for:"highlightDigits"}},[t._v("Auto highlight same digits")])]),n("p",[n("button",{staticClass:"primary",on:{click:function(e){return t.close()}}},[t._v("Close")])])])},J=[],K={name:"Settings",data:function(){return{highlightRCB:!1,highlightDigits:!1}},computed:{hlRCB:{get:function(){return this.$store.state.settings.hlRCB},set:function(t){this.setHlRCBAction(t)}},hlDigits:{get:function(){return this.$store.state.settings.hlDigits},set:function(t){this.setHlDigitsAction(t)}}},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["b"])("settings",["setHlRCBAction","setHlDigitsAction"])),Object(s["b"])("root",["hideBackgroundAction"])),{},{close:function(){this.hideBackgroundAction(),this.$emit("close")}})},Y=K,X=(n("4621"),Object(x["a"])(Y,W,J,!1,null,"53ab67c6",null)),F=X.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"help"},[n("h2",[t._v("Conrols:")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),n("p",[t._v(" To import a custom game click on the "),n("button",{staticClass:"icon small",on:{click:function(e){return t.$emit("inputString")}}},[n("span",{staticClass:"material-icons"},[t._v(" keyboard ")])]),t._v(' The string should be 81 characters log and containing only digits and "." indicating an empty cell. ')]),n("p",[n("button",{staticClass:"primary",on:{click:function(e){return t.close()}}},[t._v("Close")])])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Hold "),n("b",[t._v("CTRL")]),t._v(" or "),n("b",[t._v("drag with mouse")]),t._v(" to select multiple cells")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Hold "),n("b",[t._v("CTRL")]),t._v(" and click on selected cell to deselect")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Press "),n("b",[t._v("Space")]),t._v(" to toggle input methods")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Press "),n("b",[t._v("Backspce")]),t._v(" or "),n("b",[t._v("Delete")]),t._v(" keys to clear based on the selected input method ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Use "),n("b",[t._v("arrow keys")]),t._v(" to navigate the grid. Multiple selection is reset to the first cell. ")])}],Q={name:"Help",methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])("root",["hideBackgroundAction"])),{},{close:function(){this.hideBackgroundAction(),this.$emit("close")}})},tt=Q,et=(n("f460"),Object(x["a"])(tt,q,z,!1,null,"fa5e2b3c",null)),nt=et.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputString"},[n("p",[t._v("Start a new gamme by entering the sudoku string here.")]),n("p",[n("label",{attrs:{for:"inputString"}},[t._v("Auto highlight row, column and box")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputString,expression:"inputString"}],attrs:{type:"text",id:"inputString"},domProps:{value:t.inputString},on:{input:function(e){e.target.composing||(t.inputString=e.target.value)}}})]),t.showError?n("p",{staticClass:"error"},[t._v(" String must be 81 characters long, containing only 1-9 and '.'! ")]):t._e(),n("p",[n("button",{staticClass:"primary",on:{click:function(e){return t.importString()}}},[t._v("Import")]),n("button",{on:{click:function(e){return t.close()}}},[t._v("Close")])])])},st=[],ot=(n("4d63"),n("25f0"),{name:"InputString",data:function(){return{inputString:"",showError:!1}},computed:{},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["b"])("sudokuStrings",["importGridAction"])),Object(s["b"])("root",["hideBackgroundAction"])),Object(s["b"])("clues",["clearAllClues"])),{},{importString:function(){var t=new RegExp("[1-9.]{81}");t.test(this.inputString)?(this.importGridAction(this.inputString),this.clearAllClues(),this.close()):this.showError=!0},close:function(){this.showError=!1,this.hideBackgroundAction(),this.$emit("close")}})}),ct=ot,rt=(n("5482"),Object(x["a"])(ct,it,st,!1,null,"afa2f8ac",null)),at=rt.exports,ut={name:"Controls",data:function(){return{settingsShown:!1,helpShown:!1,inputShown:!1}},components:{Settings:F,Help:nt,InputString:at},computed:Object(r["a"])({},Object(s["c"])("sudokuStrings",["current"])),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["b"])("sudokuStrings",["resetGridAction","newGridAction"])),Object(s["b"])("root",["showBackgroundAction"])),Object(s["b"])("clues",["clearAllClues"])),Object(s["b"])(["undo","redo"])),{},{checkSudoku:function(){V.validateSudokuString(this.current)?alert("all good"):alert("there`s a booboo")},toggleSettings:function(){this.settingsShown=!this.settingsShown,this.helpShown=!1,this.inputShown=!1,this.showBackgroundAction()},toggleHelp:function(){this.helpShown=!this.helpShown,this.settingsShown=!1,this.inputShown=!1,this.showBackgroundAction()},toggleInput:function(){this.inputShown=!this.inputShown,this.helpShown=!1,this.settingsShown=!1,this.showBackgroundAction()},resetGame:function(){confirm("Are you sure you want to reset the board?")&&(this.resetGridAction(),this.clearAllClues())},newGame:function(){confirm("Are you sure you want to start a new game?")&&(this.newGridAction(),this.clearAllClues())}})},lt=ut,dt=(n("96a3"),Object(x["a"])(lt,P,U,!1,null,null,null)),ht=dt.exports,ft={name:"App",components:{Grid:$,Controls:ht},created:function(){this.constants=p},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["b"])("controls",["setInputMethodAction","toggleInputMethodAction"])),Object(s["b"])("sudokuStrings",["setGuessAction","clearGuessAction"])),Object(s["b"])("clues",["clearCluesAction","toggleClueAction"])),Object(s["b"])("root",["moveLeft","moveRight","moveUp","moveDown"])),Object(s["b"])("root",["hideBackgroundAction","setMousedownAction"])),{},{handleKeyPress:function(t){switch(t.keyCode){case 37:this.moveLeft(),t.preventDefault();break;case 39:this.moveRight(),t.preventDefault();break;case 38:this.moveUp(),t.preventDefault();break;case 40:this.moveDown(),t.preventDefault();break;case 32:this.toggleInputMethodAction(),t.preventDefault();break;case 8:case 46:this.handleClearCell(),t.preventDefault();break}if(this.inputMethod!=p.INPUT_METHODS.VALUE||isNaN(parseInt(t.key)))if(isNaN(parseInt(t.key)));else{var e=this.$store.state.root.selectedIndexes,n=t.key,i=this.inputMethod;this.toggleClueAction({selectedCellsIndexes:e,type:i,clue:n})}else{var s=this.$store.state.root.selectedIndexes,o=t.key;this.setGuessAction({indexes:s,digit:o})}},handleClearCell:function(){var t=this,e=this.$store.state.root.selectedIndexes,n=!1;e.forEach((function(e){"."!=t.guesses.charAt(e-1)&&(n=!0)})),n?this.clearGuessAction(e):this.clearCluesAction(e)},handleMouseUp:function(){this.setMousedownAction(!1)}}),computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["c"])("controls",["inputMethod"])),Object(s["c"])("root",["backgroundShown"])),Object(s["c"])("sudokuStrings",["guesses"])),{},{appVersion:function(){return p["VERSION"]}}),mounted:function(){var t=this;document.addEventListener("keydown",(function(e){t.$store.state.root.backgroundShown||t.handleKeyPress(e)})),document.addEventListener("mouseup",(function(){t.$store.state.root.backgroundShown||t.handleMouseUp()}))}},gt=ft,pt=(n("5c0b"),Object(x["a"])(gt,o,c,!1,null,null,null)),mt=pt.exports,vt=n("53ca"),bt=n("2909"),St=(n("a434"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),{setBackroundMutation:function(t,e){t.backgroundShown=e},setMousedownMutation:function(t,e){t.mousedown=e},setAddingSelectionMutation:function(t,e){t.addingSelection=e},setSelectedIndexesMutation:function(t,e){t.selectedIndexes=e},setActiveIndexMutation:function(t,e){t.activeIndex=e}}),It={showBackgroundAction:function(t){t.commit("setBackroundMutation",!0)},hideBackgroundAction:function(t){t.commit("setBackroundMutation",!1)},setMousedownAction:function(t,e){t.commit("setMousedownMutation",e)},setAddingSelectionAction:function(t,e){t.commit("setAddingSelectionMutation",e)},setSelectedIndexesAction:function(t,e){"number"===typeof e&&(t.dispatch("setActiveIndexAction",e),e=[e]),t.commit("setSelectedIndexesMutation",e)},setActiveIndexAction:function(t,e){t.commit("setActiveIndexMutation",e)},updateSelectedIndexesAction:function(t,e){t.state.mousedown||t.dispatch("setActiveIndexAction",e);var n=Object(bt["a"])(t.state.selectedIndexes)||[];if(t.state.addingSelection)n.push(e);else{var i=n.indexOf(e);-1!==i&&n.splice(i,1)}n=Object(bt["a"])(new Set(n)),t.dispatch("setSelectedIndexesAction",n)},moveLeft:function(t){var e=t.state.activeIndex;e%t.state.ROW_SIZE==1&&(e+=t.state.ROW_SIZE),e--,t.dispatch("setSelectedIndexesAction",e)},moveRight:function(t){var e=t.state.activeIndex;e%t.state.ROW_SIZE==0&&(e-=t.state.ROW_SIZE),e++,t.dispatch("setSelectedIndexesAction",e)},moveUp:function(t){var e=t.state.activeIndex;e-=t.state.ROW_SIZE;var n=V.getRow(e,t.state.ROW_SIZE);n<1&&(e+=t.state.ROW_SIZE*t.state.COL_SIZE),t.dispatch("setSelectedIndexesAction",e)},moveDown:function(t){var e=t.state.activeIndex;e+=t.state.ROW_SIZE;var n=Math.ceil(e/t.state.COL_SIZE);n>t.state.COL_SIZE&&(e%=t.state.ROW_SIZE),t.dispatch("setSelectedIndexesAction",e)}},Ot={ROW_SIZE:function(t){return t.ROW_SIZE},COL_SIZE:function(t){return t.COL_SIZE},BOX_SIZE:function(t){return t.BOX_SIZE},backgroundShown:function(t){return t.backgroundShown},mousedown:function(t){return t.mousedown},selectedIndexes:function(t){return t.selectedIndexes},activeIndex:function(t){return t.activeIndex}},Ct={namespaced:!0,state:{ROW_SIZE:9,COL_SIZE:9,BOX_SIZE:3,backgroundShown:!1,mousedown:!1,addingSelection:!0,selectedIndexes:[],activeIndex:0},mutations:St,actions:It,getters:Ot},_t=Ct,xt={setHlRCBMutation:function(t,e){t.hlRCB=e},setHlDigitsMutation:function(t,e){t.hlDigits=e}},At={setHlRCBAction:function(t,e){t.commit("setHlRCBMutation",e)},setHlDigitsAction:function(t,e){t.commit("setHlDigitsMutation",e)}},wt={hlRCB:function(t){return t.hlRCB},hlDigits:function(t){return t.hlDigits}},Et={namespaced:!0,state:{hlRCB:!0,hlDigits:!0},mutations:xt,actions:At,getters:wt},kt=Et,Mt=(n("b64b"),n("07ac"),{setInputMethodMutation:function(t,e){t.inputMethod=e}}),Rt={setInputMethodAction:function(t,e){t.commit("setInputMethodMutation",e)},toggleInputMethodAction:function(t){var e="",n="";Object.keys(p.INPUT_METHODS).forEach((function(i){var s=p.INPUT_METHODS[i];e==t.state.inputMethod&&(n=s),e=s})),""==n&&(n=Object.values(p.INPUT_METHODS)[0]),t.commit("setInputMethodMutation",n)}},jt={inputMethod:function(t){return t.inputMethod}},yt={namespaced:!0,state:{inputMethod:p.DEFAULT_INPUT_METHOD},mutations:Mt,actions:Rt,getters:jt},Bt=yt,Dt=(n("cb29"),{setInitialMutation:function(t,e){t.initial=e},setCurrentMutation:function(t,e){t.current=e},setGeussesMutation:function(t,e){t.guesses=e}}),Nt={setInitialAction:function(t,e){t.commit("setInitialMutation",e),t.commit("setCurrentMutation",e)},setCurrentAction:function(t,e){t.commit("setCurrentMutation",e)},setGeussesAction:function(t,e){t.commit("setGeussesMutation",e)},setGuessAction:function(t,e){var n=e.indexes,i=e.digit,s=void 0===i?".":i,o=t.state.current,c=t.state.guesses;n.forEach((function(e){"."==t.state.initial.charAt(e-1)&&(o=Z(o,e-1,s),c=Z(c,e-1,s))})),t.dispatch("setCurrentAction",o),t.dispatch("setGeussesAction",c)},clearGuessAction:function(t,e){t.dispatch("setGuessAction",{indexes:e})},resetGridAction:function(t){t.dispatch("setCurrentAction",t.state.initial)},newGridAction:function(t){t.dispatch("setInitialAction",new Array(81).fill(".").join(""))},importGridAction:function(t,e){t.dispatch("setInitialAction",e)}},Tt={current:function(t){return t.current},initial:function(t){return t.initial},guesses:function(t){return t.guesses}},Gt={namespaced:!0,state:{current:new Array(81).fill(".").join(""),initial:new Array(81).fill(".").join(""),guesses:new Array(81).fill(".").join("")},mutations:Dt,actions:Nt,getters:Tt},Ht=Gt,Lt=(n("a630"),{toggleClueMutation:function(t,e){var n=e.index,i=e.type,s=e.clue;n--;var o=Object(bt["a"])(t[i][n]),c=o.indexOf(s);c>-1?o.splice(c,1):o.push(s),o.sort(),t[i].splice(n,1,o)},clearCluesMutation:function(t,e){var n=e.index,i=e.type;n--;var s=[];t[i].splice(n,1,s)}}),$t={toggleClueAction:function(t,e){var n=e.selectedCellsIndexes,i=e.type,s=e.clue;n.forEach((function(e){t.commit("toggleClueMutation",{index:e,type:i,clue:s})}))},clearCluesAction:function(t,e){var n=!1;e.forEach((function(e){var i=Object(bt["a"])(t.state[p.INPUT_METHODS.CORNER][e-1]);i.length>0&&(n=!0)}));var i=n?p.INPUT_METHODS.CORNER:p.INPUT_METHODS.CENTER;e.forEach((function(e){t.commit("clearCluesMutation",{index:e,type:i})}))},clearAllClues:function(t){t.dispatch("clearCluesAction",Array.from({length:81},(function(t,e){return e+1}))),t.dispatch("clearCluesAction",Array.from({length:81},(function(t,e){return e+1})))}},Pt={getCluesOfType:function(t){return function(e,n){return e--,Object(bt["a"])(t[n][e])}}},Ut={namespaced:!0,state:{corner:new Array(81).fill(new Array),center:new Array(81).fill(new Array)},mutations:Lt,actions:$t,getters:Pt},Zt=Ut,Vt={namespaced:!0,state:function(){return{selectedDigitIndexes:[],selectedRowIndexes:[],selectedColumnIndexes:[],selectedBoxIndexes:[]}},mutations:{setSelectedDigitIndexesMutation:function(t,e){t.selectedDigitIndexes=e.sort()},setSelectedRowIndexesMutation:function(t,e){t.selectedRowIndexes=e},setSelectedColumnIndexesMutation:function(t,e){t.selectedColumnIndexes=e},setSelectedBoxIndexesMutation:function(t,e){t.selectedBoxIndexes=e}},actions:{updateIndexes:function(t,e){var n=t.rootState.root.ROW_SIZE,i=t.rootState.root.COL_SIZE,s=t.rootState.root.BOX_SIZE,o=t.rootState.sudokuStrings.current;t.commit("setSelectedRowIndexesMutation",V.getRowIndexes(e,n)),t.commit("setSelectedColumnIndexesMutation",V.getColIndexes(e,n,i)),t.commit("setSelectedBoxIndexesMutation",V.getBoxIndexes(e,n,s)),t.commit("setSelectedDigitIndexesMutation",V.getSameDigitIndexes(e,o))}},getters:{selectedRowIndexes:function(t){return t.selectedRowIndexes},selectedColumnIndexes:function(t){return t.selectedColumnIndexes},selectedBoxIndexes:function(t){return t.selectedBoxIndexes},selectedDigitIndexes:function(t){return t.selectedDigitIndexes}}},Wt=Vt;i["a"].use(s["a"]);var Jt=new s["a"].Store({modules:{root:_t,settings:kt,controls:Bt,sudokuStrings:Ht,clues:Zt,highlight:Wt},mutations:{initialiseStoreMutation:function(t,e){this.replaceState(Object.assign(t,e))}},actions:{initialiseStoreAction:function(t){var e=JSON.parse(localStorage.getItem(p.LOCAL_STORAGE_KEY)),n=localStorage.getItem(p.LOCAL_STORAGE_VERSION_KEY);if(n!=p.VERSION&&(e=null,localStorage.setItem(p.LOCAL_STORAGE_VERSION_KEY,p.VERSION)),e&&e.sudokuStrings.initial)t.commit("initialiseStoreMutation",e);else{var i=".1..8..7.8...3...9...9.1.....3...6..94.....53..8...9.....5.6...7...1...2.5..2..1.";t.dispatch("sudokuStrings/setInitialAction",i)}},undo:function(t){if(0!==Ft.length){var e=Ft.pop();qt.push(e);var n=JSON.parse(JSON.stringify(Xt));t.commit("initialiseStoreMutation",n),Kt=!0,Ft.forEach((function(e){if(-1!==Qt.indexOf(e.type))return!1;switch(Object(vt["a"])(e.payload)){case"object":t.dispatch(e.type,JSON.parse(JSON.stringify(e.payload)));break;default:t.dispatch(e.type,e.payload)}})),Kt=!1}},redo:function(t){if(0!==qt.length){var e=qt.pop();Yt=!0,t.dispatch(e.type,e.payload),Yt=!1}}}}),Kt=!1,Yt=!1,Xt=null,Ft=[],qt=[],zt=["sudokuStrings/setInitialAction","sudokuStrings/setGuessAction","sudokuStrings/clearGuessAction","clues/toggleClueAction","clues/clearCluesAction"],Qt=["root/showBackgroundAction"];Jt.subscribeAction((function(t,e){-1===zt.indexOf(t.type)||Kt||(null===Xt&&(Xt=JSON.parse(JSON.stringify(e))),Ft.push(t),Yt||(qt=[]))})),Jt.subscribe((function(t,e){switch(localStorage.setItem(p.LOCAL_STORAGE_KEY,JSON.stringify(e)),t.type){case"root/setActiveIndexMutation":Jt.dispatch("highlight/updateIndexes",t.payload);break}})),i["a"].config.productionTip=!1,i["a"].use(s["a"]),new i["a"]({render:function(t){return t(mt)},store:Jt,beforeCreate:function(){this.$store.dispatch("initialiseStoreAction")}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6cf9":function(t,e,n){},7210:function(t,e,n){"use strict";n("adc7")},"863b":function(t,e,n){},"96a3":function(t,e,n){"use strict";n("4cf1")},"9c0c":function(t,e,n){},adc7:function(t,e,n){},b99c:function(t,e,n){},bc2d:function(t,e,n){},d6ce:function(t,e,n){},f460:function(t,e,n){"use strict";n("863b")}});
//# sourceMappingURL=app.e653c297.js.map
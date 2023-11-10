"use strict";(self.webpackChunkMyClient=self.webpackChunkMyClient||[]).push([[624],{2624:(Je,O,c)=>{c.r(O),c.d(O,{WordModule:()=>ke});var d=c(6814),g=c(5692),e=c(5879),x=c(6676);function f(){return x().format("YYYYMMDD")}function C(t){for(let r=t.length-1;r>0;r--){const i=Math.floor(Math.random()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t}var A=c(8297),p=c(553),Z=c(9862);let M=(()=>{var t;class r{constructor(o){this._http=o}getTodayWord(){return this._http.get(`${p.N.API_PATH}/words`)}getDateGame(o){return this._http.get(`${p.N.API_PATH}/games/${o}`)}getNewGame(){return this._http.get(`${p.N.API_PATH}/games`)}getNewGameFromWord(o){return this._http.get(`${p.N.API_PATH}/games/word/${o}`)}save(o){return this._http.post(`${p.N.API_PATH}/games`,o)}}return(t=r).\u0275fac=function(o){return new(o||t)(e.LFG(Z.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})(),Q=(()=>{var t;class r{constructor(){this.http=(0,e.f3M)(Z.eN)}answerMiniGame(o,n,s,l){return this.http.post(`${p.N.API_PATH}/answers/answer`,{userId:o,miniGame:n,word:s,gameId:l})}getTodayAnswer(o,n){return this.http.get(`${p.N.API_PATH}/answers/answer/${o}/${n}`)}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();var P=c(2548),F=c(4432);let S=(()=>{var t;class r{constructor(o,n,s,l,m){this.authService=o,this.gameService=n,this.answerService=s,this.loadingService=l,this.responseService=m,this._loading=!1,this._available=!0}get date(){return localStorage.getItem("date")}get todayWord(){return(!this._word||!this.isToday())&&this.reload(),this._word}get todayAnswers(){return this._answer}get user(){return this.authService.user}reload(){!this._loading&&this._available&&this.user&&(this._loading=!0,this.loadingService.loadingShow(),localStorage.setItem("date",f()),this.gameService.getTodayWord().subscribe(o=>{this._word=o.word,this._gameId=o.id,this._loading=!1,this.loadingService.loadingHide(),this.reloadAnswer()},o=>{this._available=!1,this.responseService.showResponse(o),this.loadingService.loadingHide(),this._loading=!1}))}reloadAnswer(){this.loadingService.loadingShow(),this.answerService.getTodayAnswer(this.user.id,this._gameId).subscribe(o=>{this._answer=o,this.loadingService.loadingHide()},o=>{this._answer=null,this.loadingService.loadingHide()})}answer(o,n){this.loadingService.loadingShow(),this.isToday()?this.answerService.answerMiniGame(this.user.id,o,n,this._gameId).subscribe(s=>{this._answer=s,this.loadingService.loadingHide(),this.responseService.showResult(n===this._word)},s=>{this.loadingService.loadingHide(),this.reload(),this.responseService.showResponse(s)}):this.reload()}isToday(){return this.date===f()}}return(t=r).\u0275fac=function(o){return new(o||t)(e.LFG(A.e),e.LFG(M),e.LFG(Q),e.LFG(P.b),e.LFG(F.e))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();var _=c(2296),y=c(617),q=c(2651),Y=c(1274);function D(t,r){if(1&t&&(e.TgZ(0,"h4",0),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,i.word))}}let H=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["layout-header"]],inputs:{game:"game",word:"word"},decls:4,vars:4,consts:[[1,"text-center"],["class","text-center",4,"ngIf"]],template:function(o,n){1&o&&(e.TgZ(0,"h1",0),e._uU(1),e.ALo(2,"uppercase"),e.qZA(),e.YNc(3,D,3,3,"h4",1)),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,2,n.game?n.game:n.word),"\n"),e.xp6(2),e.Q6J("ngIf",n.game))},dependencies:[d.O5,d.gd,d.rS]}),r})();var U=c(4104);const L=function(){return{exact:!0}};function W(t,r){if(1&t&&(e.TgZ(0,"a",4,5)(2,"mat-icon"),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&t){const i=r.$implicit,o=e.MAs(1);e.Q6J("active",o.isActive)("routerLinkActiveOptions",e.DdM(5,L))("routerLink",i.route),e.xp6(3),e.Oqu(i.icon),e.xp6(2),e.Oqu(i.title)}}function E(t,r){if(1&t&&(e.TgZ(0,"a",6,5)(2,"mat-icon"),e._uU(3,"supervisor_account"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()),2&t){const i=e.MAs(1);e.Q6J("active",i.isActive)("routerLinkActiveOptions",e.DdM(4,L))("routerLink","/word/admin"),e.xp6(5),e.Oqu("Admin")}}let $=(()=>{var t;class r{get isAdmi(){return this._authService.user?.roles?.some(o=>"ADMIN"===o)}constructor(o){this._authService=o,this.menuItems=[{route:"/word/phonetic",title:"Phonetic",icon:"headphones"},{route:"/word/definition",title:"Definition",icon:"description"},{route:"/word/synonym",title:"Synonym",icon:"invert_colors"}]}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(A.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["layout-tab-menu"]],decls:5,vars:3,consts:[["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","","routerLinkActive","","mat-tab-link","",3,"active","routerLinkActiveOptions","routerLink",4,"ngFor","ngForOf"],["routerLinkActive","","mat-tab-link","",3,"active","routerLinkActiveOptions","routerLink",4,"ngIf"],["tabPanel",""],["mat-tab-link","","routerLinkActive","","mat-tab-link","",3,"active","routerLinkActiveOptions","routerLink"],["rla","routerLinkActive"],["routerLinkActive","","mat-tab-link","",3,"active","routerLinkActiveOptions","routerLink"]],template:function(o,n){if(1&o&&(e.TgZ(0,"nav",0),e.YNc(1,W,6,6,"a",1),e.YNc(2,E,6,5,"a",2),e.qZA(),e._UZ(3,"mat-tab-nav-panel",null,3)),2&o){const s=e.MAs(4);e.Q6J("tabPanel",s),e.xp6(1),e.Q6J("ngForOf",n.menuItems),e.xp6(1),e.Q6J("ngIf",n.isAdmi)}},dependencies:[d.sg,d.O5,y.Hw,U.BU,U.sW,U.Nj,g.rH,g.Od],encapsulation:2}),r})();var a=c(6223),X=c(2177),z=c(5986),h=c(9157),N=c(4516);function R(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Mail already used "),e.qZA())}function j(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid mail address "),e.qZA())}function K(t,r){if(1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Min "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," characters long "),e.qZA()),2&t){const i=e.oxw();e.xp6(3),e.Oqu(i.myForm.controls.password.errors.minlength.requiredLength)}}let B=(()=>{var t;class r{constructor(o,n,s,l){this._authService=o,this._loadingService=n,this._responseService=s,this._fb=l,this.myForm=this._fb.group({mail:[this.user.mail,[a.kI.email],[X.Z.differentAndExists(this.user.mail,this._authService)]],password:["",[a.kI.minLength(6)]],notifications:[this.user.notifications]}),this.errorManagement=m=>{this._loadingService.loadingHide(),this._responseService.showResponse(m)}}get user(){return{...this._authService.user}}hasError(o,n){return this.myForm.controls[o].hasError(n)}modifiedUser(){return""!==this.myForm.controls.password.value||this.user.mail!==this.myForm.controls.mail.value||this.user.notifications!==this.myForm.controls.notifications.value}onSubmit(){this.myForm.markAllAsTouched(),this.myForm.valid&&this.modifiedUser()&&this._authService.update({id:this.user.id,mail:this.myForm.controls.mail.value,password:this.myForm.controls.password.value,notifications:this.myForm.controls.notifications.value,version:this.user.version}).subscribe(o=>{this._loadingService.loadingHide(),this._authService.user=o,this.myForm.controls.password.setValue(""),this._responseService.showMessage("User updated","","success")},this.errorManagement)}deleteUser(o){o.stopPropagation(),this._responseService.showWarning("\xbfDo you really want to delete de user?").then(n=>{n.isConfirmed&&(this._loadingService.loadingShow(),this._authService.delete(this.user).subscribe(()=>{this._loadingService.loadingHide(),this._responseService.infoAndRedirect("Deleted","User deleted","info","/auth/signIn")},this.errorManagement))})}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(A.e),e.Y36(P.b),e.Y36(F.e),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["layout-user"]],decls:22,vars:5,consts:[[3,"formGroup"],[1,"w-100"],["type","email","matInput","","formControlName","mail"],[4,"ngIf"],["type","password","matInput","","formControlName","password"],[1,"row","ai-center"],["formControlName","notifications"],[1,"row","row-full"],["mat-button","","color","primary",3,"disabled","click"],["mat-button","","color","primary",3,"click"],[1,"centered"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),e._uU(3,"Email"),e.qZA(),e._UZ(4,"input",2),e.YNc(5,R,2,0,"mat-error",3),e.YNc(6,j,2,0,"mat-error",3),e.qZA(),e.TgZ(7,"mat-form-field",1)(8,"mat-label"),e._uU(9,"Password"),e.qZA(),e._UZ(10,"input",4),e.YNc(11,K,5,1,"mat-error",3),e.qZA(),e.TgZ(12,"div",5),e._UZ(13,"mat-checkbox",6),e.TgZ(14,"mat-label"),e._uU(15,"NOTIFICATIONS"),e.qZA()(),e.TgZ(16,"div",7)(17,"button",8),e.NdJ("click",function(){return n.onSubmit()}),e._uU(18," UPDATE "),e.qZA(),e.TgZ(19,"button",9),e.NdJ("click",function(l){return n.deleteUser(l)}),e._uU(20," DELETE "),e.qZA()()(),e._UZ(21,"div",10)),2&o&&(e.Q6J("formGroup",n.myForm),e.xp6(5),e.Q6J("ngIf",n.myForm.controls.mail.hasError("mailAlreadyExists")),e.xp6(1),e.Q6J("ngIf",n.hasError("mail","email")),e.xp6(5),e.Q6J("ngIf",n.hasError("password","minlength")),e.xp6(6),e.Q6J("disabled",!n.modifiedUser()))},dependencies:[d.O5,_.lW,z.oG,h.KE,h.hX,h.TO,N.Nt,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],encapsulation:2}),r})(),V=(()=>{var t;class r{constructor(){}ngOnInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["layout-footer"]],decls:2,vars:0,consts:[[1,"footer","text-center"]],template:function(o,n){1&o&&(e.TgZ(0,"span",0),e._uU(1,"\xa9 Mario Montalvillo Herrezuelo"),e.qZA())},encapsulation:2}),r})(),ee=(()=>{var t;class r{constructor(o,n,s){this._dayService=o,this._router=n,this._authService=s}get todayWord(){return this._dayService.todayWord}get game(){const o=this._router.url.substring(1).split("/");return o.length>1?o[1]:null}logout(){this._authService.logout(),this._router.navigate(["/"])}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(S),e.Y36(g.F0),e.Y36(A.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-layout"]],decls:25,vars:2,consts:[["fullscreen",""],["mode","push",1,"w-25","m-w-25"],["sidenav",""],[1,"row"],["mat-icon-button","",3,"click"],[1,"text-center","spacer"],[1,"spacer"],[3,"game","word"]],template:function(o,n){if(1&o){const s=e.EpF();e.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"div",3)(4,"button",4),e.NdJ("click",function(){e.CHM(s);const m=e.MAs(2);return e.KtG(m.close())}),e.TgZ(5,"mat-icon"),e._uU(6,"person"),e.qZA()(),e.TgZ(7,"h1",5),e._uU(8,"USER"),e.qZA(),e.TgZ(9,"button",4),e.NdJ("click",function(){e.CHM(s);const m=e.MAs(2);return e.KtG(m.close())}),e.TgZ(10,"mat-icon"),e._uU(11,"close"),e.qZA()()(),e._UZ(12,"layout-user"),e.qZA(),e.TgZ(13,"mat-toolbar")(14,"button",4),e.NdJ("click",function(){e.CHM(s);const m=e.MAs(2);return e.KtG(m.toggle())}),e.TgZ(15,"mat-icon"),e._uU(16,"person"),e.qZA()(),e._UZ(17,"layout-tab-menu",6),e.TgZ(18,"button",4),e.NdJ("click",function(){return n.logout()}),e.TgZ(19,"mat-icon"),e._uU(20,"logout"),e.qZA()()(),e.TgZ(21,"div"),e._UZ(22,"layout-header",7)(23,"router-outlet")(24,"layout-footer"),e.qZA()()}2&o&&(e.xp6(22),e.Q6J("game",n.game)("word",n.todayWord))},dependencies:[_.RK,y.Hw,q.JX,q.TM,Y.Ye,g.lC,H,$,B,V],encapsulation:2}),r})(),te=(()=>{var t;class r{constructor(){this.http=(0,e.f3M)(Z.eN)}getTodayPhonetics(){return this.http.get(`${p.N.API_PATH}/mini/phonetics/${f()}`)}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();var u=c(5195),v=c(9038),b=c(6385),k=c(6687);function oe(t,r){if(1&t&&(e.TgZ(0,"div",4)(1,"mat-icon"),e._uU(2),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Oqu(i.icon)}}let J=(()=>{var t;class r{constructor(o){this.dayService=o}get icon(){return null!=this.gameAnswer?this.gameAnswer.word==this.dayService.todayWord?"check":"clear":null}ngOnInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["card-footer"]],inputs:{disabled:"disabled",gameAnswer:"gameAnswer"},decls:6,vars:2,consts:[[1,"row"],["mat-card-avatar","","class","centered","style","height: auto; margin:0;",4,"ngIf"],[1,"spacer"],["mat-button","",3,"disabled"],["mat-card-avatar","",1,"centered",2,"height","auto","margin","0"]],template:function(o,n){1&o&&(e._UZ(0,"mat-divider"),e.TgZ(1,"mat-card-actions",0),e.YNc(2,oe,3,1,"div",1),e._UZ(3,"span",2),e.TgZ(4,"button",3),e._uU(5," CHECK "),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("ngIf",n.icon),e.xp6(2),e.Q6J("disabled",n.disabled))},dependencies:[d.O5,_.lW,u.hq,u.kc,b.d,y.Hw],encapsulation:2}),r})(),ne=(()=>{var t;class r{constructor(){}ngOnInit(){this._audioElement=new Audio(this.audio)}play(o){o.preventDefault(),o.stopPropagation(),this._audioElement.play()}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["phonetic-audio"]],inputs:{audio:"audio"},decls:3,vars:0,consts:[["mat-icon-button","","matSuffix","",3,"click","keydown.enter"]],template:function(o,n){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(l){return n.play(l)})("keydown.enter",function(l){return n.play(l)}),e.TgZ(1,"mat-icon"),e._uU(2,"volume_up"),e.qZA()())},dependencies:[_.RK,h.R9,y.Hw],styles:["audio[_ngcontent-%COMP%]::-webkit-media-controls-timeline, video[_ngcontent-%COMP%]::-webkit-media-controls-timeline, audio[_ngcontent-%COMP%]::-webkit-media-controls-current-time-display, audio[_ngcontent-%COMP%]::-webkit-media-controls-time-remaining-display{display:none}"]}),r})();function ie(t,r){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.hij(" ",i.phoneticOption.word," ")}}let re=(()=>{var t;class r{ngOnInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["phonetic-option"]],inputs:{phoneticOption:"phoneticOption",answeredGame:"answeredGame"},decls:4,vars:2,consts:[[1,"row","centered"],[4,"ngIf"],[1,"spacer"],[3,"audio"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e.YNc(1,ie,2,1,"span",1),e._UZ(2,"span",2)(3,"phonetic-audio",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngIf",n.answeredGame),e.xp6(2),e.Q6J("audio",n.phoneticOption.phonetic.audio))},dependencies:[d.O5,ne],encapsulation:2}),r})();const ae=function(t){return{correct:t}};function se(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",6)(1,"mat-list-option",7),e.NdJ("selectedChange",function(){const s=e.CHM(i).index,l=e.oxw();return e.KtG(l.select(s))}),e._UZ(2,"phonetic-option",8),e.qZA(),e._UZ(3,"mat-divider"),e.qZA()}if(2&t){const i=r.$implicit,o=r.index,n=e.oxw();e.Q6J("ngClass",e.VKq(6,ae,!!n.todayAnswer&&i.word===n.todayWord)),e.xp6(1),e.Q6J("value",o+1)("selected",n.answeredOption(o))("disabled",!!n.todayAnswer),e.xp6(1),e.Q6J("phoneticOption",n.phoneticOptions[o])("answeredGame",!!n.todayAnswer)}}let ce=(()=>{var t;class r{constructor(o,n,s){this._dayService=o,this._phoneticService=n,this._fb=s,this.cardHeaderInformation={icon:"headphones",title:"Audios",description:"Pick the word's audio"},this.myForm=this._fb.group({selected:[0,[a.kI.required]]}),this.phoneticOptions=[]}get selected(){return this.myForm.controls.selected.value}get todayAnswer(){return this._dayService.todayAnswers?.gameAnswers.find(o=>"PHONETIC"===o.miniGame)}get todayWord(){return this._dayService.todayWord}ngOnInit(){this._phoneticService.getTodayPhonetics().subscribe(o=>{this.phoneticOptions=C(o)}),this._dayService.reloadAnswer()}answeredOption(o){return this.phoneticOptions[o].word==this.todayAnswer?.word}onSubmit(){this._dayService.answer("PHONETIC",this.phoneticOptions[this.selected-1].word)}disableCheck(){return!this.selected||!!this.todayAnswer}select(o){this.selectedIndex=o}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(S),e.Y36(te),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:7,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"card"],[3,"information"],["formControlName","selected",3,"multiple"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"gameAnswer","disabled"],[3,"ngClass"],["checkboxPosition","before",3,"value","selected","disabled","selectedChange"],[3,"phoneticOption","answeredGame"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(1,"mat-card",1),e._UZ(2,"card-header",2),e.TgZ(3,"mat-card-content")(4,"mat-selection-list",3),e.YNc(5,se,4,8,"div",4),e.qZA()(),e._UZ(6,"card-footer",5),e.qZA()()),2&o&&(e.Q6J("formGroup",n.myForm),e.xp6(2),e.Q6J("information",n.cardHeaderInformation),e.xp6(2),e.Q6J("multiple",!1),e.xp6(1),e.Q6J("ngForOf",n.phoneticOptions),e.xp6(1),e.Q6J("gameAnswer",n.todayAnswer)("disabled",n.disableCheck()))},dependencies:[d.mk,d.sg,a._Y,a.JJ,a.JL,a.sg,a.u,u.a8,u.dn,v.Ub,v.vS,b.d,k.n,J,re],encapsulation:2}),r})(),de=(()=>{var t;class r{constructor(){this.http=(0,e.f3M)(Z.eN)}getTodayDefinitions(){return this.http.get(`${p.N.API_PATH}/mini/definitions/${f()}`)}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();function le(t,r){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",i.word," ")}}const me=function(t){return{correct:t}};function ue(t,r){if(1&t&&(e.TgZ(0,"div",6)(1,"mat-list-option",7)(2,"div",8),e.YNc(3,le,2,1,"span",9),e._UZ(4,"span",10),e.qZA()(),e.TgZ(5,"p",11),e._uU(6),e.qZA(),e._UZ(7,"mat-divider"),e.qZA()),2&t){const i=r.$implicit,o=r.index,n=e.oxw();e.Q6J("ngClass",e.VKq(6,me,!!n.todayAnswer&&i.word===n.todayWord)),e.xp6(1),e.Q6J("selected",n.answeredOption(o))("value",o+1)("disabled",!!n.todayAnswer),e.xp6(2),e.Q6J("ngIf",!!n.todayAnswer),e.xp6(3),e.Oqu(i.definition.text)}}let pe=(()=>{var t;class r{constructor(o,n,s){this._dayService=o,this._definitionService=n,this._fb=s,this.cardHeaderInformation={icon:"description",title:"Definitions",description:"Pick the word's definition"},this.myForm=this._fb.group({selected:[0,[a.kI.required]]}),this.definitionOptions=[]}get selected(){return this.myForm.controls.selected.value}get todayAnswer(){return this._dayService.todayAnswers?.gameAnswers.find(o=>"DEFINITION"===o.miniGame)}get todayWord(){return this._dayService.todayWord}ngOnInit(){this._definitionService.getTodayDefinitions().subscribe(o=>{this.definitionOptions=C(o)}),this._dayService.reloadAnswer()}answeredOption(o){return this.definitionOptions[o].word==this.todayAnswer?.word}onSubmit(){this._dayService.answer("DEFINITION",this.definitionOptions[this.selected-1].word)}disableCheck(){return!this.selected||!!this.todayAnswer}select(){this.selectedIndex=this.myForm.controls.selected.value-1}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(S),e.Y36(de),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:7,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"card"],[3,"information"],["formControlName","selected",3,"multiple","selectionChange"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"gameAnswer","disabled"],[3,"ngClass"],["checkboxPosition","before",3,"selected","value","disabled"],[1,"row","centered"],[4,"ngIf"],[1,"spacer"],[1,"w-100"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(1,"mat-card",1),e._UZ(2,"card-header",2),e.TgZ(3,"mat-card-content")(4,"mat-selection-list",3),e.NdJ("selectionChange",function(){return n.select()}),e.YNc(5,ue,8,8,"div",4),e.qZA()(),e._UZ(6,"card-footer",5),e.qZA()()),2&o&&(e.Q6J("formGroup",n.myForm),e.xp6(2),e.Q6J("information",n.cardHeaderInformation),e.xp6(2),e.Q6J("multiple",!1),e.xp6(1),e.Q6J("ngForOf",n.definitionOptions),e.xp6(1),e.Q6J("gameAnswer",n.todayAnswer)("disabled",n.disableCheck()))},dependencies:[d.mk,d.sg,d.O5,a._Y,a.JJ,a.JL,a.sg,a.u,u.a8,u.dn,v.Ub,v.vS,b.d,k.n,J]}),r})(),he=(()=>{var t;class r{constructor(){this.http=(0,e.f3M)(Z.eN)}getTodaySynonyms(){return this.http.get(`${p.N.API_PATH}/mini/synonyms/${f()}`)}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();const ge=function(t){return{correct:t}};function fe(t,r){if(1&t&&(e.TgZ(0,"div",6)(1,"mat-list-option",7)(2,"div",8)(3,"div"),e._uU(4),e.qZA(),e._UZ(5,"span",9),e.qZA()(),e._UZ(6,"mat-divider"),e.qZA()),2&t){const i=r.$implicit,o=r.index,n=e.oxw();e.Q6J("ngClass",e.VKq(5,ge,!!n.todayAnswer&&i.word===n.todayWord)),e.xp6(1),e.Q6J("selected",n.answeredOption(o))("value",o+1)("disabled",!!n.todayAnswer),e.xp6(3),e.hij(" ",i.synonym," ")}}let _e=(()=>{var t;class r{constructor(o,n,s){this._dayService=o,this._synonymService=n,this._fb=s,this.cardHeaderInformation={icon:"invert_colors",title:"Related words",description:"Pick the word's synonym"},this.myForm=this._fb.group({selected:[0,[a.kI.required]]}),this.synonymOptions=[]}get selected(){return this.myForm.controls.selected.value}get todayAnswer(){return this._dayService.todayAnswers?.gameAnswers.find(o=>"SYNONYM"===o.miniGame)}get todayWord(){return this._dayService.todayWord}ngOnInit(){this._synonymService.getTodaySynonyms().subscribe(o=>{this.synonymOptions=C(o)}),this._dayService.reloadAnswer()}answeredOption(o){return this.synonymOptions[o].word==this.todayAnswer?.word}onSubmit(){this._dayService.answer("SYNONYM",this.synonymOptions[this.selected-1].word)}disableCheck(){return!this.selected||!!this.todayAnswer}select(){this.selectedIndex=this.myForm.controls.selected.value-1}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(S),e.Y36(he),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:7,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"card"],[3,"information"],["formControlName","selected",3,"multiple","selectionChange"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"gameAnswer","disabled"],[3,"ngClass"],["checkboxPosition","before",3,"selected","value","disabled"],[1,"row","centered"],[1,"spacer"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(1,"mat-card",1),e._UZ(2,"card-header",2),e.TgZ(3,"mat-card-content")(4,"mat-selection-list",3),e.NdJ("selectionChange",function(){return n.select()}),e.YNc(5,fe,7,7,"div",4),e.qZA()(),e._UZ(6,"card-footer",5),e.qZA()()),2&o&&(e.Q6J("formGroup",n.myForm),e.xp6(2),e.Q6J("information",n.cardHeaderInformation),e.xp6(2),e.Q6J("multiple",!1),e.xp6(1),e.Q6J("ngForOf",n.synonymOptions),e.xp6(1),e.Q6J("gameAnswer",n.todayAnswer)("disabled",n.disableCheck()))},dependencies:[d.mk,d.sg,a._Y,a.JJ,a.JL,a.sg,a.u,u.a8,u.dn,v.Ub,v.vS,b.d,k.n,J]}),r})(),ye=(()=>{var t;class r{ngOnInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(o,n){},encapsulation:2}),r})();var ve=c(6263);function we(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",8)(1,"mat-form-field",9)(2,"mat-label"),e._uU(3,"Syl"),e.qZA(),e._UZ(4,"input",10),e.qZA(),e.TgZ(5,"mat-form-field",11)(6,"mat-label"),e._uU(7,"Word"),e.qZA(),e._UZ(8,"input",12),e.TgZ(9,"button",13),e.NdJ("click",function(n){const l=e.CHM(i).$implicit,m=e.oxw();return e.KtG(m.play(n,l.phonetic.audio))})("keydown.enter",function(n){const l=e.CHM(i).$implicit,m=e.oxw();return e.KtG(m.play(n,l.phonetic.audio))}),e.TgZ(10,"mat-icon"),e._uU(11,"volume_up"),e.qZA()()(),e._UZ(12,"input",14),e.qZA()}if(2&t){const i=r.index;e.xp6(4),e.Q6J("formControlName","simPhSyllables"+i),e.xp6(4),e.Q6J("formControlName","simPhWord"+i),e.xp6(4),e.Q6J("formControlName","simPhAudio"+i)}}function Ae(t,r){if(1&t&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e._uU(2,"Similar"),e.qZA(),e._UZ(3,"input",12),e.qZA()),2&t){const i=r.index;e.xp6(3),e.Q6J("formControlName","simSyWord"+(1+i))}}function Ze(t,r){if(1&t&&(e.TgZ(0,"div",3)(1,"div",15)(2,"mat-form-field")(3,"mat-label"),e._uU(4,"Word"),e.qZA(),e._UZ(5,"input",12),e.qZA(),e.TgZ(6,"mat-form-field")(7,"mat-label"),e._uU(8,"Type"),e.qZA(),e._UZ(9,"input",12),e.qZA()(),e.TgZ(10,"mat-form-field",16),e._UZ(11,"mat-label")(12,"textarea",17,18),e.qZA()()),2&t){const i=r.index;e.xp6(5),e.Q6J("formControlName","simDfWord"+i),e.xp6(4),e.Q6J("formControlName","simDfType"+i),e.xp6(3),e.Q6J("formControlName","simDfText"+i)}}let G=(()=>{var t;class r{constructor(o){this._fb=o,this.editable=!1}ngOnInit(){this.buildForm()}get phonetics(){return null===this.game?[]:[{word:this.game?.word,phonetic:this.game?.phonetic},...this.game?.similarPhonetics]}get definitions(){return null===this.game?[]:[{word:this.game?.word,definition:this.game?.definition},...this.game?.similarDefinitions]}get synonyms(){return null===this.game?[]:[this.game?.synonym,...this.game?.similarSynonyms]}buildForm(){this.myForm=new a.cw({}),this.phonetics.forEach((o,n)=>{this.myForm.addControl("simPhWord"+n,new a.NI(o.word)),this.myForm.addControl("simPhAudio"+n,new a.NI(o.phonetic.audio)),this.myForm.addControl("simPhSyllables"+n,new a.NI(o.phonetic.syllables))}),this.definitions.forEach((o,n)=>{this.myForm.addControl("simDfWord"+n,new a.NI(o.word)),this.myForm.addControl("simDfType"+n,new a.NI(o.definition.type)),this.myForm.addControl("simDfText"+n,new a.NI(o.definition.text))}),this.synonyms.forEach((o,n)=>{this.myForm.addControl("simSyWord"+n,new a.NI(o))}),this.editable||this.myForm.disable()}play(o,n){o.preventDefault(),o.stopPropagation(),new Audio(n).play()}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["admin-game-form"]],inputs:{game:"game",editable:"editable"},decls:13,vars:4,consts:[[3,"formGroup"],[1,"row","row-responsive"],[1,"col","w-50"],[1,"column"],["class","row",4,"ngFor","ngForOf"],["type","text","matInput","","formControlName","simSyWord0"],[4,"ngFor","ngForOf"],["class","column",4,"ngFor","ngForOf"],[1,"row"],[2,"width","5em"],["type","number","matInput","","min","0","max","99",3,"formControlName"],[1,"spacer"],["type","text","matInput","",3,"formControlName"],["mat-icon-button","","matSuffix","","aria-label","search",3,"click","keydown.enter"],["type","hidden",3,"formControlName"],[1,"row","row-full"],[1,"w-100"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","5",3,"formControlName"],["autosize","cdkTextareaAutosize"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,we,13,3,"div",4),e.qZA()(),e.TgZ(5,"div",2)(6,"mat-form-field")(7,"mat-label"),e._uU(8,"Synonym"),e.qZA(),e._UZ(9,"input",5),e.qZA(),e.YNc(10,Ae,4,1,"mat-form-field",6),e.qZA()(),e.TgZ(11,"div"),e.YNc(12,Ze,14,3,"div",7),e.qZA()()),2&o&&(e.Q6J("formGroup",n.myForm),e.xp6(4),e.Q6J("ngForOf",n.phonetics),e.xp6(6),e.Q6J("ngForOf",null==n.game?null:n.game.similarSynonyms),e.xp6(2),e.Q6J("ngForOf",n.definitions))},dependencies:[d.sg,_.RK,h.KE,h.hX,h.R9,y.Hw,N.Nt,ve.IC,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.qQ,a.Fd,a.sg,a.u],encapsulation:2}),r})();var I=c(8034);function Se(t,r){if(1&t&&e._UZ(0,"admin-game-form",10),2&t){const i=e.oxw();e.Q6J("game",i.game)("editable",i.gameIsNew)}}const be=[{path:"",component:ee,children:[{path:"",component:ye},{path:"definition",component:pe},{path:"phonetic",component:ce},{path:"synonym",component:_e},{path:"admin",component:(()=>{var t;class r{constructor(o,n,s,l,m){this._authService=o,this._gameService=n,this._responseService=s,this._loadingService=l,this._router=m,this.game=null,this.datePicker=new a.NI(x()),this.wordPicker=new a.NI(this.game?.word)}get isAdmi(){return this._authService.user?.roles?.some(o=>"ADMIN"===o)}get gameIsNew(){return null!==this.game&&null===this.game.id}ngOnInit(){this.isAdmi||(this._authService.logout(),this._router.navigate(["/"])),this.searchGame(f())}onChangeDate(){this.searchGame(this.datePicker.value.format("YYYYMMDD"))}searchGame(o){this.game=null,this.wordPicker.setValue(""),this.wordPicker.enable(),this._gameService.getDateGame(o).subscribe(n=>{this.game=n,this.wordPicker.setValue(this.game.word),this.wordPicker.disable()})}build(){this._loadingService.loadingShow();let o=this._gameService.getNewGame();null!==this.wordPicker.value&&""!==this.wordPicker.value.trim()&&(o=this._gameService.getNewGameFromWord(this.wordPicker.value)),this.game=null,this.wordPicker.setValue(""),this.wordPicker.enable(),o.subscribe(n=>{this.game=n,this.wordPicker.setValue(this.game.word),this._loadingService.loadingHide()},n=>{this._loadingService.loadingHide(),this._responseService.showResponse(n)})}other(){this.wordPicker.setValue(""),this.game=null}save(){this._loadingService.loadingShow();let o={word:this.wordPicker.value,date:this.datePicker.value.format("YYYYMMDD")};Object.keys(this.adminGameFormComponent.myForm.controls).forEach(n=>o[n]=this.adminGameFormComponent.myForm.controls[n].value),this.game=null,this.wordPicker.setValue(""),this.wordPicker.enable(),this._gameService.save(o).subscribe(n=>{this.game=n,this.wordPicker.setValue(this.game.word),this.wordPicker.disable(),this._loadingService.loadingHide(),this._responseService.showMessage("Game created","","success")},n=>{this._loadingService.loadingHide(),this._responseService.showResponse(n)})}}return(t=r).\u0275fac=function(o){return new(o||t)(e.Y36(A.e),e.Y36(M),e.Y36(F.e),e.Y36(P.b),e.Y36(g.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(o,n){if(1&o&&e.Gf(G,5),2&o){let s;e.iGM(s=e.CRH())&&(n.adminGameFormComponent=s.first)}},decls:32,vars:8,consts:[[1,"card"],["mat-icon-button","","aria-label","Example icon-button with menu icon","disabled","",1,"example-icon","placeholder"],[1,"spacer"],["mat-icon-button","",3,"disabled","click"],[1,"row","row-full","row-responsive"],["type","text","matInput","",3,"formControl"],["matInput","",3,"matDatepicker","formControl","dateChange"],["matIconSuffix","",3,"for"],["picker",""],[3,"game","editable",4,"ngIf"],[3,"game","editable"]],template:function(o,n){if(1&o&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-toolbar")(3,"button",1),e._UZ(4,"mat-icon"),e.qZA(),e.TgZ(5,"span"),e._uU(6,"Games"),e.qZA(),e._UZ(7,"span",2),e.TgZ(8,"button",3),e.NdJ("click",function(){return n.build()}),e.TgZ(9,"mat-icon"),e._uU(10,"build"),e.qZA()(),e.TgZ(11,"button",3),e.NdJ("click",function(){return n.other()}),e.TgZ(12,"mat-icon"),e._uU(13,"thumb_down"),e.qZA()(),e.TgZ(14,"button",3),e.NdJ("click",function(){return n.save()}),e.TgZ(15,"mat-icon"),e._uU(16,"favorite"),e.qZA()()()(),e._UZ(17,"mat-divider"),e.TgZ(18,"mat-card-content")(19,"div",4)(20,"mat-form-field")(21,"mat-label"),e._uU(22,"Word"),e.qZA(),e._UZ(23,"input",5),e.qZA(),e.TgZ(24,"mat-form-field")(25,"mat-label"),e._uU(26,"Choose a date"),e.qZA(),e.TgZ(27,"input",6),e.NdJ("dateChange",function(){return n.onChangeDate()}),e.qZA(),e._UZ(28,"mat-datepicker-toggle",7)(29,"mat-datepicker",null,8),e.qZA()(),e.YNc(31,Se,1,2,"admin-game-form",9),e.qZA()()),2&o){const s=e.MAs(30);e.xp6(8),e.Q6J("disabled",null!==n.game),e.xp6(3),e.Q6J("disabled",!n.gameIsNew),e.xp6(3),e.Q6J("disabled",!n.gameIsNew),e.xp6(9),e.Q6J("formControl",n.wordPicker),e.xp6(4),e.Q6J("matDatepicker",s)("formControl",n.datePicker),e.xp6(1),e.Q6J("for",s),e.xp6(3),e.Q6J("ngIf",null!==n.game)}},dependencies:[d.O5,_.RK,u.a8,u.dn,u.dk,I.Mq,I.hl,I.nW,h.KE,h.hX,h.R9,b.d,y.Hw,N.Nt,Y.Ye,a.Fj,a.JJ,a.oH,G],encapsulation:2}),r})()},{path:"**",redirectTo:""}]}];let Te=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(be),g.Bz]}),r})();var w=c(5983);let Ce=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,w.q,a.UX,g.Bz]}),r})();var T=c(6379);let Pe=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,a.UX,w.q,T.m]}),r})(),Fe=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,a.UX,w.q,T.m]}),r})(),Ue=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,a.UX,w.q,T.m]}),r})(),Ne=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,w.q,g.Bz,a.UX,T.m]}),r})(),ke=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,w.q,Te,Ce,Fe,Pe,Ue,Ne]}),r})()}}]);
!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,o){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,o)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var o,i=a(e);if(t){var r=a(this).constructor;o=Reflect.construct(i,arguments,r)}else o=i.apply(this,arguments);return n(this,o)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{P5VE:function(n,a,i){"use strict";i.r(a),i.d(a,"PageLayoutsDemoModule",function(){return f});var r,c,l=i("ofXK"),s=i("8MG2"),b=i("N+3j"),u=i("fXoL"),d=i("0G9f"),p=i("tyNb"),m=i("vAyd"),h=((r=function(n){!function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&t(e,o)}(i,n);var a=o(i);function i(){var t;return e(this,i),(t=a.call(this,"page-layouts")).basePageCodeExample='\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n\n    <div class="content-header">\n        <clr-back-button></clr-back-button>\n        <h2>Base Pagelayout</h2>\n        <clr-button-group class="command-bar" [clrMenuPosition]="\'bottom-right\'">\n            <clr-button>Command1</clr-button>\n            <clr-button>Command2</clr-button>\n            <clr-button [clrInMenu]="true">Command3</clr-button>\n        </clr-button-group>\n    </div>\n    <div class="content-container">\n        <div class="content-area">\n            This is the page content\n        </div>\n    </div>\n</clr-main-container>\n',t.basePageRoutingCodeExample="\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n\n    <router-outlet></router-outlet>\n</clr-main-container>\n",t.basePageRoutingPageCodeExample='\n<div class="content-header">\n    <clr-back-button></clr-back-button>\n    <h2>Base Pagelayout</h2>\n    <clr-button-group class="command-bar" [clrMenuPosition]="\'bottom-right\'">\n        <clr-button>Command1</clr-button>\n        <clr-button>Command2</clr-button>\n        <clr-button [clrInMenu]="true">Command3</clr-button>\n    </clr-button-group>\n</div>\n<div class="content-container">\n    <div class="content-area">\n        This is the page content\n    </div>\n</div>\n',t.basePageRoutingPageTSCodeExample="\n@HostBinding('class.u-main-container') bindMainContainer = true;\n",t.flowbarCodeExample='\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n    <div class="content-header">\n        <h2>Flow Bar Layout with sticky footer</h2>\n        <clr-button-group class="command-bar" [clrMenuPosition]="\'bottom-right\'">\n            <clr-button (click)="contentPanel.toggle()">Show/Hide Right</clr-button>\n            <clr-button [clrInMenu]="true">Command1</clr-button>\n        </clr-button-group>\n    </div>\n    <clr-flow-bar #flowBar [clrSteps]="flowBarSteps" [clrActiveStep]="activeStep"\n                  (clrActiveStepChange)="setActiveStep($event)"></clr-flow-bar>\n    <clr-content-panel-container>\n        <clr-content-panel-container-content>\n            <h3 *ngIf="!activeStep?.subSteps || activeStep?.subSteps?.length === 0">{{activeStep?.title}}\n                {{flowBarSteps.indexOf(activeStep) + 1}}</h3>\n            <h3 *ngIf="activeStep?.subSteps && activeStep?.subSteps?.length > 0">\n                {{activeStep?.title}} {{flowBarSteps.indexOf(activeStep) + 1}} - {{activeStep.activeSubStep?.title}}\n            </h3>\n            <p *ngFor="let a of [1, 2, 3, 4, 5, 6, 7, 8]">\n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n                ea rebum.\n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n                aliquyam\n                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n                gubergren,\n                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n                sadipscing\n                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n                takimata sanctus\n                est\n                Lorem ipsum dolor sit amet.\n            </p>\n        </clr-content-panel-container-content>\n        <clr-content-panel-container-footer>\n            <div class="clr-row clr-flex-fill clr-justify-content-between clr-align-items-center">\n                <div class="clr-col">\n                    Current Step Info\n                </div>\n                <div class="clr-col-auto">\n                    <button type="button" class="btn btn-link" (click)="flowBar.previous()"\n                            *ngIf="flowBar.isPreviousAvailable()">Previous\n                    </button>\n                    <clr-dropdown *ngIf="activeStep?.subSteps?.length > 0">\n                        <button type="button" class="btn btn-outline-primary" clrDropdownTrigger>\n                            {{activeStep.activeSubStep?.title}}\n                            <clr-icon shape="caret down"></clr-icon>\n                        </button>\n                        <clr-dropdown-menu clrPosition="top-left" *clrIfOpen>\n                            <button class="btn" clrDropdownItem *ngFor="let subStep of activeStep?.subSteps"\n                                    (click)="setActiveSubStep(subStep)">\n                                {{subStep.title}}\n                            </button>\n                        </clr-dropdown-menu>\n                    </clr-dropdown>\n                    <button type="button" class="btn btn-primary" (click)="flowBar.next()"\n                            [disabled]="!flowBar.isNextAvailable()" *ngIf="!flowBar.isLastStep()">Next\n                    </button>\n                    <button type="button" class="btn btn-success" *ngIf="flowBar.isLastStep()">Finish</button>\n                </div>\n            </div>\n        </clr-content-panel-container-footer>\n        <clr-content-panel #contentPanel>\n            <ng-container clr-content-panel-title>Right Content Panel</ng-container>\n            <ng-container clr-content-panel-content>Content</ng-container>\n        </clr-content-panel>\n    </clr-content-panel-container>\n</clr-main-container>\n',t.flowbarHtmlExampleSubmitEnter='\n<form ... (submit)="flowBar.next()">\n    ...\n    <input type="submit" style="display: none"> \x3c!-- Not needed, if you already have a submit button--\x3e\n</form>\n',t.stickyFooterCodeExample='\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n    <div class="content-header">\n        <h2>Sticky Footer Layout</h2>\n    </div>\n    <div class="content-container clr-flex-column">\n        <div class="content-area">\n            <h3>Content Area</h3>\n            <p *ngFor="let a of [1, 2, 3, 4, 5, 6, 7, 8]">\n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n                ea rebum.\n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n                aliquyam\n                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n                gubergren,\n                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n                sadipscing\n                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n                takimata sanctus\n                est\n                Lorem ipsum dolor sit amet.\n            </p>\n        </div>\n        <div class="content-area-footer">\n            Sticky Footer\n        </div>\n    </div>\n</clr-main-container>\n',t.fullScreenDialogHtmlExample='\n\x3c!-- This is the router outlet for full screen dialogs --\x3e\n<router-outlet name="overlay" (activate)="overlayActive = true" (deactivate)="overlayActive = false"></router-outlet>\n\n\x3c!-- This is the default router outlet for all of your default pages --\x3e\n<div [hidden]="overlayActive">\n    <router-outlet></router-outlet>\n</div>\n',t}return i}(b.a)).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u.Eb({type:r,selectors:[["clr-page-layouts-demo-docu"]],hostVars:4,hostBindings:function(e,t){2&e&&u.Cb("content-area",!0)("dox-content-panel",!0)},features:[u.wb],decls:307,vars:9,consts:[[3,"title"],["id","generic-pager-header",1,"component-summary"],["id","design-guidelines"],[1,"list"],[1,"clr-code"],["id","code-examples"],["id","examples"],["shape","display"],["routerLink","/full-page-layouts/basepage-layout","routerLinkActive","active",1,"nav-link"],[1,"nav-text"],["routerLink","/full-page-layouts/basepage-layout-command","routerLinkActive","active",1,"nav-link"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],[1,"component-summary"],["routerLink","/full-page-layouts/flow-bar","routerLinkActive","active"],["routerLink","/full-page-layouts/sidebarpage-layout","routerLinkActive","active",1,"nav-link"],[1,"clr-row"],[1,"clr-col-md-12","clr-col-lg-6"],[1,"clrweb-DoxMedia","is-do-block"],[1,"clrweb-DoxMedia-block"],[1,"clrweb-DoxMedia-img"],["src","assets/images/documentation/do.png","alt","do"],[1,"clrweb-DoxMedia-text"],[1,"clrweb-DoxMedia-do-dont"],[1,"clrweb-DoxMedia","is-dont-block"],["src","assets/images/documentation/dont.png","alt","dont"],["routerLink","/full-page-layouts/sticky-footer","routerLinkActive","active"]],template:function(e,t){1&e&&(u.Qb(0,"clr-doc-wrapper",0),u.Qb(1,"article"),u.Qb(2,"h2"),u.Bc(3,"Base Pagelayout"),u.Pb(),u.Qb(4,"h5",1),u.Bc(5,"The Base Pagelayout provides the most fundamental navigation and content elements."),u.Pb(),u.Qb(6,"div",2),u.Qb(7,"h3"),u.Bc(8,"Design Guidelines"),u.Pb(),u.Qb(9,"p"),u.Bc(10,"All pages in an application should follow a common layout structure to ensure a consistent user experience across applications."),u.Pb(),u.Qb(11,"p"),u.Bc(12,"The Base Pagelayout includes the following components:"),u.Pb(),u.Qb(13,"ul",3),u.Qb(14,"li"),u.Bc(15,"Main Navigation"),u.Pb(),u.Qb(16,"li"),u.Bc(17,"Pagetitle"),u.Pb(),u.Qb(18,"li"),u.Bc(19,"Content Area"),u.Pb(),u.Pb(),u.Qb(20,"p"),u.Qb(21,"code",4),u.Bc(22,"ATTENTION!"),u.Pb(),u.Bc(23," Following DOM structure is vital for a correctly working page layout. They MUST be DIRECT children of each other!"),u.Pb(),u.Qb(24,"ul"),u.Qb(25,"li"),u.Bc(26,".main-container or .u-main-container "),u.Qb(27,"ul"),u.Qb(28,"li"),u.Bc(29,".content-header"),u.Pb(),u.Qb(30,"li"),u.Bc(31,"flowbar (optional)"),u.Pb(),u.Qb(32,"li"),u.Bc(33,".content-container "),u.Qb(34,"ul"),u.Qb(35,"li"),u.Bc(36,".content-area"),u.Pb(),u.Qb(37,"li"),u.Bc(38,"sidenav (optional)"),u.Pb(),u.Qb(39,"li"),u.Bc(40,".content-area-footer (optional)"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(41,"p"),u.Bc(42,"Further components may complete the pagelayout as needed:"),u.Pb(),u.Qb(43,"ul",3),u.Qb(44,"li"),u.Bc(45,"Back Button"),u.Pb(),u.Qb(46,"li"),u.Bc(47,"Command bar"),u.Pb(),u.Qb(48,"li"),u.Bc(49,"Sidebar"),u.Pb(),u.Qb(50,"li"),u.Bc(51,"Content-Panel"),u.Pb(),u.Pb(),u.Qb(52,"h4"),u.Bc(53,"Command Bar"),u.Pb(),u.Qb(54,"ul",3),u.Qb(55,"li"),u.Bc(56,"The Command Bar comprises the most common users tasks."),u.Pb(),u.Qb(57,"li"),u.Bc(58,"The most important ones are shown, additional ones are accessible in an overflow-menu."),u.Pb(),u.Qb(59,"li"),u.Bc(60,"Other commands, either less common ones or where the proximity to an ui element is crucial, are provided within the content area."),u.Pb(),u.Pb(),u.Pb(),u.Qb(61,"div",5),u.Qb(62,"h3",6),u.Bc(63,"Code & Examples"),u.Pb(),u.Qb(64,"h4"),u.Bc(65,"Demo"),u.Pb(),u.Qb(66,"div"),u.Lb(67,"clr-icon",7),u.Bc(68,"\xa0 "),u.Qb(69,"a",8),u.Qb(70,"span",9),u.Bc(71,"Base Pagelayout"),u.Pb(),u.Pb(),u.Pb(),u.Qb(72,"div"),u.Lb(73,"clr-icon",7),u.Bc(74,"\xa0 "),u.Qb(75,"a",10),u.Qb(76,"span",9),u.Bc(77,"Command bar"),u.Pb(),u.Pb(),u.Pb(),u.Qb(78,"p"),u.Bc(79,"Following example shows a base page layout without multiple pages. If you have different pages (different header, ...) with routing see next example."),u.Pb(),u.Lb(80,"clr-code-snippet",11),u.Qb(81,"p"),u.Bc(82,"To ensure a correct pagelayout when whole pages are inside a route you need to put .u-main-container on those pages which contain the layout"),u.Pb(),u.Bc(83," app.component.html "),u.Lb(84,"clr-code-snippet",11),u.Bc(85," page.component.html "),u.Lb(86,"clr-code-snippet",11),u.Bc(87," page.component.ts "),u.Lb(88,"clr-code-snippet",12),u.Pb(),u.Qb(89,"h2"),u.Bc(90,"Flow Bar Layout"),u.Pb(),u.Qb(91,"h5",13),u.Bc(92,"The Flow Bar Layout extends the Base Page Layout by adding a wizard-like navigation control."),u.Pb(),u.Qb(93,"p"),u.Bc(94," This layout that can be used to highlight the current progress a user is making throughout multiple steps. The Flow Bar allows the user to navigate between steps, by either clicking on a specific step or using the previous or next button. "),u.Pb(),u.Qb(95,"p"),u.Bc(96,"The Flow Bar Layout requires the "),u.Qb(97,"code",4),u.Bc(98,"ClrFlowBar"),u.Pb(),u.Bc(99," and can optionally also contain the Sticky Footer Layout."),u.Pb(),u.Qb(100,"div",2),u.Qb(101,"h3"),u.Bc(102,"Usage"),u.Pb(),u.Qb(103,"p"),u.Bc(104,"Use this layout if you want to guide the user through a sequence of multiple steps. Each step requires the user to perform a complex task like filling out a form. Don't use this layout if the user's steps are mutually exclusive; in this case use Tabs instead. "),u.Pb(),u.Qb(105,"p"),u.Bc(106," When implementing a flow bar on your page, you will need to insert a "),u.Qb(107,"code",4),u.Bc(108,"clr-flow-bar"),u.Pb(),u.Bc(109," right below your content-header but above your content-container. "),u.Pb(),u.Qb(110,"p"),u.Bc(111," Following inputs & outputs are available: "),u.Pb(),u.Qb(112,"ul"),u.Qb(113,"li"),u.Qb(114,"code",4),u.Bc(115,"[clrSteps]"),u.Pb(),u.Bc(116," - an array of "),u.Qb(117,"code",4),u.Bc(118,"FlowBarStep"),u.Pb(),u.Bc(119,". You can extend/implement this interface to save even more information in your steps. "),u.Pb(),u.Qb(120,"li"),u.Qb(121,"code",4),u.Bc(122,"[(clrActiveStep)]"),u.Pb(),u.Bc(123," two way binding of the active step. "),u.Pb(),u.Pb(),u.Qb(124,"p"),u.Bc(125," You can use the "),u.Qb(126,"code",4),u.Bc(127,"@ViewChild()"),u.Pb(),u.Bc(128," annotation to get a reference of your "),u.Qb(129,"code",4),u.Bc(130,"ClrFlowBar"),u.Pb(),u.Bc(131,", which will allow you to call its methods: "),u.Pb(),u.Qb(132,"ul"),u.Qb(133,"li"),u.Qb(134,"code",4),u.Bc(135,"previous()"),u.Pb(),u.Bc(136," - open the previous step."),u.Pb(),u.Qb(137,"li"),u.Qb(138,"code",4),u.Bc(139,"next()"),u.Pb(),u.Bc(140," - opens the next step."),u.Pb(),u.Qb(141,"li"),u.Qb(142,"code",4),u.Bc(143,"isPreviousAvailable()"),u.Pb(),u.Bc(144," - returns true if the previous step can be opened. "),u.Pb(),u.Qb(145,"li"),u.Qb(146,"code",4),u.Bc(147,"isNextAvailable()"),u.Pb(),u.Bc(148," - returns true if the next step can be opened."),u.Pb(),u.Qb(149,"li"),u.Qb(150,"code",4),u.Bc(151,"isLastStep()"),u.Pb(),u.Bc(152," - returns true if the current step is the last."),u.Pb(),u.Pb(),u.Pb(),u.Qb(153,"div",5),u.Qb(154,"h3",6),u.Bc(155,"Code & Examples"),u.Pb(),u.Qb(156,"h4"),u.Bc(157,"Demo"),u.Pb(),u.Qb(158,"a",14),u.Lb(159,"clr-icon",7),u.Bc(160,"\xa0 "),u.Qb(161,"span"),u.Bc(162,"Base Page Layout with a Flow Bar"),u.Pb(),u.Pb(),u.Lb(163,"clr-code-snippet",11),u.Qb(164,"h4"),u.Bc(165,"Submit form on enter and go to next page"),u.Pb(),u.Qb(166,"p"),u.Bc(167,"As the next button is outside your form, following steps need to be done to go to next page after submitting the form with 'enter'"),u.Pb(),u.Qb(168,"ul"),u.Qb(169,"li"),u.Bc(170,"Add hidden submit button to your form to activate 'enter' key handling in browser (only needed if you not already have one)"),u.Pb(),u.Qb(171,"li"),u.Bc(172,"React to submit of form and call next() on the flowbar"),u.Pb(),u.Pb(),u.Lb(173,"clr-code-snippet",11),u.Pb(),u.Qb(174,"h2"),u.Bc(175,"Sidebar Pagelayout"),u.Pb(),u.Qb(176,"h5",1),u.Bc(177,"The Sidebar Pagelayout enhances the Base Pagelayout with a vertical navigation sidebar."),u.Pb(),u.Qb(178,"div",2),u.Qb(179,"h3"),u.Bc(180,"Design Guidelines"),u.Pb(),u.Qb(181,"p"),u.Bc(182,"All pages in an application should follow a common layout structure to ensure a consistent user experience across applications."),u.Pb(),u.Qb(183,"p"),u.Bc(184,"The Sidebar Pagelayout includes the following components:"),u.Pb(),u.Qb(185,"ul",3),u.Qb(186,"li"),u.Bc(187,"Main Navigation"),u.Pb(),u.Qb(188,"li"),u.Bc(189,"Pagetitle"),u.Pb(),u.Qb(190,"li"),u.Bc(191,"Content Area"),u.Pb(),u.Qb(192,"li"),u.Bc(193,"Vertical Nav (Sidebar)"),u.Pb(),u.Pb(),u.Qb(194,"p"),u.Bc(195,"Futher components may complete the pagelayout as needed:"),u.Pb(),u.Qb(196,"ul",3),u.Qb(197,"li"),u.Bc(198,"Command Bar"),u.Pb(),u.Pb(),u.Qb(199,"h3"),u.Bc(200,"Use when"),u.Pb(),u.Qb(201,"p"),u.Bc(202,"Use the Sidebar Pagelayout when you have:"),u.Pb(),u.Qb(203,"ul",3),u.Qb(204,"li"),u.Bc(205,"Lots of content on one page, that can be junked in logical separated pages "),u.Pb(),u.Qb(206,"li"),u.Bc(207,"If you need a summary or overview-page, this should be the first element in the sidebar "),u.Pb(),u.Pb(),u.Pb(),u.Qb(208,"div",5),u.Qb(209,"h3",6),u.Bc(210,"Code & Examples"),u.Pb(),u.Qb(211,"h4"),u.Bc(212,"Demo"),u.Pb(),u.Lb(213,"clr-icon",7),u.Bc(214,"\xa0"),u.Qb(215,"a",15),u.Qb(216,"span",9),u.Bc(217,"Sidebar Page Layout"),u.Pb(),u.Pb(),u.Pb(),u.Qb(218,"h2"),u.Bc(219,"Sticky Footer Layout"),u.Pb(),u.Qb(220,"h5",13),u.Bc(221,"The Sticky footer represents a bar at the bottom of your page which is always visible - scrollable content is hidden behind the sticky footer."),u.Pb(),u.Qb(222,"p"),u.Bc(223,"The Sticky footer can be used for e.g. providing navigational buttons for a wizard (See also Flow Bar Layout). "),u.Pb(),u.Qb(224,"div",2),u.Qb(225,"h3"),u.Bc(226,"Usage"),u.Pb(),u.Qb(227,"p"),u.Bc(228,"Use this component when you want to display permanently visible elements on the bottom of a page. It works particularly well in combination with the Flow Bar Layout to provide navigational controls. When the Sticky Footer contains buttons for navigation, keep in mind to place them on the right hand side to follow a logical Z Pattern. "),u.Pb(),u.Qb(229,"div",16),u.Qb(230,"div",17),u.Qb(231,"div",18),u.Qb(232,"div",19),u.Qb(233,"div",20),u.Lb(234,"img",21),u.Pb(),u.Pb(),u.Qb(235,"div",22),u.Qb(236,"h6",23),u.Bc(237,"Do"),u.Pb(),u.Qb(238,"p"),u.Bc(239," Place buttons leading to next step on the right. Optional information about the user's actions are placed on the left side. "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(240,"div",17),u.Qb(241,"div",24),u.Qb(242,"div",19),u.Qb(243,"div",20),u.Lb(244,"img",25),u.Pb(),u.Pb(),u.Qb(245,"div",22),u.Qb(246,"h6",23),u.Bc(247,"Don't"),u.Pb(),u.Qb(248,"p"),u.Bc(249," Don't put navigational buttons on the left side. "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(250,"p"),u.Bc(251," When implementing a sticky footer on your page, you will want to insert a div with class "),u.Qb(252,"code",4),u.Bc(253,"content-area-footer"),u.Pb(),u.Bc(254," right below your "),u.Qb(255,"code",4),u.Bc(256,"content-area"),u.Pb(),u.Bc(257," div. This can be combined with a content panel layout, see the code example of the flow bar layout for more information. "),u.Pb(),u.Pb(),u.Qb(258,"div",5),u.Qb(259,"h3",6),u.Bc(260,"Code & Examples"),u.Pb(),u.Qb(261,"h4"),u.Bc(262,"Demo"),u.Pb(),u.Qb(263,"a",26),u.Lb(264,"clr-icon",7),u.Bc(265,"\xa0 "),u.Qb(266,"span"),u.Bc(267,"Base Page Layout with a Sticky Footer"),u.Pb(),u.Pb(),u.Lb(268,"clr-code-snippet",11),u.Pb(),u.Qb(269,"h2"),u.Bc(270,"Full Screen Dialog"),u.Pb(),u.Qb(271,"h5",1),u.Bc(272,"The Full Screen Dialog is an alternative to the default modal dialog."),u.Pb(),u.Qb(273,"p"),u.Bc(274,"The Full Screen Dialog looks and feels like any other page though it is conceptually a modal dialog. This means that a full screen dialog can have any page layout. From a technical point of view, full screen dialogs are shown in a router outlet above the current page. This eliminates the loading time which usually occurs while navigating from page to page."),u.Pb(),u.Qb(275,"div",2),u.Qb(276,"h3"),u.Bc(277,"Design Guidelines"),u.Pb(),u.Qb(278,"p"),u.Bc(279,"A Full Screen Dialog usually contains mutliple input elements and "),u.Qb(280,"strong"),u.Bc(281,"Save"),u.Pb(),u.Bc(282," and "),u.Qb(283,"strong"),u.Bc(284,"Cancel"),u.Pb(),u.Bc(285," options. Place these call to action buttons on the left side of the bottom of the page. Just like you would in a regular form. Optionally the dialog can also have a Back-button. Provide a confirmation prompt if the user has already entered data and Back was selected. Note that this prompt is not required for the Cancel-button, since the user deliberately choose Cancel to discard the input."),u.Pb(),u.Qb(286,"h3"),u.Bc(287,"Use when"),u.Pb(),u.Qb(288,"p"),u.Bc(289,"Use the Full Screen Dialog if:"),u.Pb(),u.Qb(290,"ul",3),u.Qb(291,"li"),u.Bc(292,"You want to display a complex input form that requires "),u.Qb(293,"strong"),u.Bc(294,"Save"),u.Pb(),u.Bc(295," and "),u.Qb(296,"strong"),u.Bc(297,"Cancel"),u.Pb(),u.Bc(298," options"),u.Pb(),u.Qb(299,"li"),u.Bc(300,"You need to show additional modal dialogs. In general you should not show another modal over a modal, but you can open a modal over a Full Screen Dialog."),u.Pb(),u.Qb(301,"li"),u.Bc(302,"The dialog's content would require too much scrolling in a modal dialog. Try to avoid scrolling in modal dialogs."),u.Pb(),u.Pb(),u.Pb(),u.Qb(303,"div",5),u.Qb(304,"h3",6),u.Bc(305,"Code"),u.Pb(),u.Lb(306,"clr-code-snippet",11),u.Pb(),u.Pb(),u.Pb()),2&e&&(u.hc("title",t.title),u.zb(80),u.hc("clrCode",t.basePageCodeExample),u.zb(4),u.hc("clrCode",t.basePageRoutingCodeExample),u.zb(2),u.hc("clrCode",t.basePageRoutingPageCodeExample),u.zb(2),u.hc("clrCode",t.basePageRoutingPageTSCodeExample),u.zb(75),u.hc("clrCode",t.flowbarCodeExample),u.zb(10),u.hc("clrCode",t.flowbarHtmlExampleSubmitEnter),u.zb(95),u.hc("clrCode",t.stickyFooterCodeExample),u.zb(38),u.hc("clrCode",t.fullScreenDialogHtmlExample))},directives:[d.a,s.B,p.f,p.e,m.a],encapsulation:2}),r),g=i("JsA7"),P=i("XPsC"),f=((c=function t(){e(this,t)}).\u0275fac=function(e){return new(e||c)},c.\u0275mod=u.Ib({type:c}),c.\u0275inj=u.Hb({imports:[[l.c,s.a,P.a,g.a,p.g.forChild([{path:"",component:h}])]]}),c)}}])}();
'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-client documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-a50d88543a21d4698bad001b85817eb4e14c9ae4a97b9a4c411079c2017073bfe52808e5726c5f322a9e7b33d16769f6945a05e2279ce2e0fe8c4113aed0685c"' : 'data-bs-target="#xs-components-links-module-AdminModule-a50d88543a21d4698bad001b85817eb4e14c9ae4a97b9a4c411079c2017073bfe52808e5726c5f322a9e7b33d16769f6945a05e2279ce2e0fe8c4113aed0685c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-a50d88543a21d4698bad001b85817eb4e14c9ae4a97b9a4c411079c2017073bfe52808e5726c5f322a9e7b33d16769f6945a05e2279ce2e0fe8c4113aed0685c"' :
                                            'id="xs-components-links-module-AdminModule-a50d88543a21d4698bad001b85817eb4e14c9ae4a97b9a4c411079c2017073bfe52808e5726c5f322a9e7b33d16769f6945a05e2279ce2e0fe8c4113aed0685c"' }>
                                            <li class="link">
                                                <a href="components/AdminGameFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminGameFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-7294b69d90342e0ddacea15fd6342ab7e5c1c87c4d7fce041a090afebe3b519fd818542865961b5760a8fac0d7e64d0260664fa76ba4ea537ebe626103039fcc"' : 'data-bs-target="#xs-components-links-module-AppModule-7294b69d90342e0ddacea15fd6342ab7e5c1c87c4d7fce041a090afebe3b519fd818542865961b5760a8fac0d7e64d0260664fa76ba4ea537ebe626103039fcc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7294b69d90342e0ddacea15fd6342ab7e5c1c87c4d7fce041a090afebe3b519fd818542865961b5760a8fac0d7e64d0260664fa76ba4ea537ebe626103039fcc"' :
                                            'id="xs-components-links-module-AppModule-7294b69d90342e0ddacea15fd6342ab7e5c1c87c4d7fce041a090afebe3b519fd818542865961b5760a8fac0d7e64d0260664fa76ba4ea537ebe626103039fcc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-962bec0d633427890a26e58f62d7396da34fa521d2755204cb96279ff13206f5776fffa11f8a88ad7f39570bf5e217781db14637bf6e402076542ab214da41c2"' : 'data-bs-target="#xs-components-links-module-AuthModule-962bec0d633427890a26e58f62d7396da34fa521d2755204cb96279ff13206f5776fffa11f8a88ad7f39570bf5e217781db14637bf6e402076542ab214da41c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-962bec0d633427890a26e58f62d7396da34fa521d2755204cb96279ff13206f5776fffa11f8a88ad7f39570bf5e217781db14637bf6e402076542ab214da41c2"' :
                                            'id="xs-components-links-module-AuthModule-962bec0d633427890a26e58f62d7396da34fa521d2755204cb96279ff13206f5776fffa11f8a88ad7f39570bf5e217781db14637bf6e402076542ab214da41c2"' }>
                                            <li class="link">
                                                <a href="components/AuthNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DefinitionModule.html" data-type="entity-link" >DefinitionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DefinitionModule-d19a001f0e6c48f2900880ff7450e2b10cbf2d0a264766910aabd7b97c9fa15cde86e06b12f56958541600a9906f1d897b02cdec3fb3e81cee462780e7a361ef"' : 'data-bs-target="#xs-components-links-module-DefinitionModule-d19a001f0e6c48f2900880ff7450e2b10cbf2d0a264766910aabd7b97c9fa15cde86e06b12f56958541600a9906f1d897b02cdec3fb3e81cee462780e7a361ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefinitionModule-d19a001f0e6c48f2900880ff7450e2b10cbf2d0a264766910aabd7b97c9fa15cde86e06b12f56958541600a9906f1d897b02cdec3fb3e81cee462780e7a361ef"' :
                                            'id="xs-components-links-module-DefinitionModule-d19a001f0e6c48f2900880ff7450e2b10cbf2d0a264766910aabd7b97c9fa15cde86e06b12f56958541600a9906f1d897b02cdec3fb3e81cee462780e7a361ef"' }>
                                            <li class="link">
                                                <a href="components/DefinitionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefinitionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LayoutModule-14c4b72df983a194a629f2b0f8f01eb4827f6c03ddc1f0fd0932193a6b6a4ad99ebdb552cbf92a8c4a18146bc6012be5652c1bcb69c1a0ae4b0d867b36d75b39"' : 'data-bs-target="#xs-components-links-module-LayoutModule-14c4b72df983a194a629f2b0f8f01eb4827f6c03ddc1f0fd0932193a6b6a4ad99ebdb552cbf92a8c4a18146bc6012be5652c1bcb69c1a0ae4b0d867b36d75b39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-14c4b72df983a194a629f2b0f8f01eb4827f6c03ddc1f0fd0932193a6b6a4ad99ebdb552cbf92a8c4a18146bc6012be5652c1bcb69c1a0ae4b0d867b36d75b39"' :
                                            'id="xs-components-links-module-LayoutModule-14c4b72df983a194a629f2b0f8f01eb4827f6c03ddc1f0fd0932193a6b6a4ad99ebdb552cbf92a8c4a18146bc6012be5652c1bcb69c1a0ae4b0d867b36d75b39"' }>
                                            <li class="link">
                                                <a href="components/LayoutFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutTabMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutTabMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PhoneticModule.html" data-type="entity-link" >PhoneticModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PhoneticModule-0b921650b452d1241dff906bc3cdba78684e7263320b6e8f1eafc990e7313440239eaf1e4841959a595ba39b3c8bf57facb2830a86a90308938c73a627f84e5f"' : 'data-bs-target="#xs-components-links-module-PhoneticModule-0b921650b452d1241dff906bc3cdba78684e7263320b6e8f1eafc990e7313440239eaf1e4841959a595ba39b3c8bf57facb2830a86a90308938c73a627f84e5f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PhoneticModule-0b921650b452d1241dff906bc3cdba78684e7263320b6e8f1eafc990e7313440239eaf1e4841959a595ba39b3c8bf57facb2830a86a90308938c73a627f84e5f"' :
                                            'id="xs-components-links-module-PhoneticModule-0b921650b452d1241dff906bc3cdba78684e7263320b6e8f1eafc990e7313440239eaf1e4841959a595ba39b3c8bf57facb2830a86a90308938c73a627f84e5f"' }>
                                            <li class="link">
                                                <a href="components/PhoneticAudioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneticAudioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhoneticOptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneticOptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhoneticPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneticPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-903adf8b1e7ecd10f03991e0b8a76686551987fe68c176a9adcaf3af00688ec4ae8b9ff2eea23d5f4ba137d8df9d96db855a65fcfc11c7484cfbb63a2be374f4"' : 'data-bs-target="#xs-components-links-module-SharedModule-903adf8b1e7ecd10f03991e0b8a76686551987fe68c176a9adcaf3af00688ec4ae8b9ff2eea23d5f4ba137d8df9d96db855a65fcfc11c7484cfbb63a2be374f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-903adf8b1e7ecd10f03991e0b8a76686551987fe68c176a9adcaf3af00688ec4ae8b9ff2eea23d5f4ba137d8df9d96db855a65fcfc11c7484cfbb63a2be374f4"' :
                                            'id="xs-components-links-module-SharedModule-903adf8b1e7ecd10f03991e0b8a76686551987fe68c176a9adcaf3af00688ec4ae8b9ff2eea23d5f4ba137d8df9d96db855a65fcfc11c7484cfbb63a2be374f4"' }>
                                            <li class="link">
                                                <a href="components/CardFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SynonymModule.html" data-type="entity-link" >SynonymModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SynonymModule-59366b77c0182e1ce8c81e9d01f92e88d1086305fddbe5c908a2e8a7b9ec735c70e18f1e385c715b07481f9332aef14f3475fd73ac53c783b3c38ad6e6a1be3e"' : 'data-bs-target="#xs-components-links-module-SynonymModule-59366b77c0182e1ce8c81e9d01f92e88d1086305fddbe5c908a2e8a7b9ec735c70e18f1e385c715b07481f9332aef14f3475fd73ac53c783b3c38ad6e6a1be3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SynonymModule-59366b77c0182e1ce8c81e9d01f92e88d1086305fddbe5c908a2e8a7b9ec735c70e18f1e385c715b07481f9332aef14f3475fd73ac53c783b3c38ad6e6a1be3e"' :
                                            'id="xs-components-links-module-SynonymModule-59366b77c0182e1ce8c81e9d01f92e88d1086305fddbe5c908a2e8a7b9ec735c70e18f1e385c715b07481f9332aef14f3475fd73ac53c783b3c38ad6e6a1be3e"' }>
                                            <li class="link">
                                                <a href="components/SynonymPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SynonymPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WordModule.html" data-type="entity-link" >WordModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WordRoutingModule.html" data-type="entity-link" >WordRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/WordPage.html" data-type="entity-link" >WordPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MailValidator.html" data-type="entity-link" >MailValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnswerService.html" data-type="entity-link" >AnswerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DayService.html" data-type="entity-link" >DayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DefinitionService.html" data-type="entity-link" >DefinitionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhoneticService.html" data-type="entity-link" >PhoneticService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseService.html" data-type="entity-link" >ResponseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SynonymService.html" data-type="entity-link" >SynonymService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/JwtTokenInterceptor.html" data-type="entity-link" >JwtTokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PublicGuard.html" data-type="entity-link" >PublicGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AnswerDone.html" data-type="entity-link" >AnswerDone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnswerToDo.html" data-type="entity-link" >AnswerToDo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CardHeaderInformation.html" data-type="entity-link" >CardHeaderInformation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Definition.html" data-type="entity-link" >Definition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DefinitionOption.html" data-type="entity-link" >DefinitionOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GameAnswer.html" data-type="entity-link" >GameAnswer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Phonetic.html" data-type="entity-link" >Phonetic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PhoneticOption.html" data-type="entity-link" >PhoneticOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SynonymOption.html" data-type="entity-link" >SynonymOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VerificationCode.html" data-type="entity-link" >VerificationCode</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
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
                    <a href="index.html" data-type="index-link">wonderq documentation</a>
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
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' : 'data-target="#xs-controllers-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' :
                                            'id="xs-controllers-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' : 'data-target="#xs-injectables-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' :
                                        'id="xs-injectables-links-module-AppModule-4bccff508c840e52eb9325f4153297692152d6e5dbb9ec734debce4abfa1a81965fc0bb1d654c203e12f697ad6ea9bdb92e5581d3ba47fcff83e13395c44c386"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DbService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AcknowledgeMessageDto.html" data-type="entity-link" >AcknowledgeMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AcknowledgeMessageResponseDto.html" data-type="entity-link" >AcknowledgeMessageResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConsumeMessageDto.html" data-type="entity-link" >ConsumeMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConsumeMessageResponseDto.html" data-type="entity-link" >ConsumeMessageResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Entity.html" data-type="entity-link" >Entity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublishedMessagesListResponse.html" data-type="entity-link" >PublishedMessagesListResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublishMessageDto.html" data-type="entity-link" >PublishMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublishMessageResponseDto.html" data-type="entity-link" >PublishMessageResponseDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RequeueMessageGuard.html" data-type="entity-link" >RequeueMessageGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AcknowledgeMessageResponseInterface.html" data-type="entity-link" >AcknowledgeMessageResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsumeMessageResponseInterface.html" data-type="entity-link" >ConsumeMessageResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DbInterface.html" data-type="entity-link" >DbInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityInterface.html" data-type="entity-link" >EntityInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityToJsonInterface.html" data-type="entity-link" >EntityToJsonInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InsertMessageInterface.html" data-type="entity-link" >InsertMessageInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PublishedMessagesResponseListInterface.html" data-type="entity-link" >PublishedMessagesResponseListInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PublishMessageResponseInterface.html" data-type="entity-link" >PublishMessageResponseInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
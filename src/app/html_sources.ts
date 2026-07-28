/* eslint-disable @typescript-eslint/no-explicit-any */
export const pagesHtml: Record<string, string> = {
  "about": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" aria-current="page" class="nav-link w-nav-link w--current">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Learn about the culture</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid featured-grid"><div id="w-node-_94cc9e38-11b4-69be-10d2-550dac8ce405-c5219754" class="featured-image"></div><div class="grid-text-wrapper"><h2>Everything to solve your construction problems</h2><div class="space-bottom"><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p></div><a href="/services" class="button w-button">Our Services</a></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>Our Members</h2><div class="heading-line"></div></div><div class="w-layout-grid people-grid spacing-small"><div><div class="person-image member-1"><div class="person-title"><div>Architect</div></div></div><div class="person-name"><h3 class="h3-product">Alberto Infantino</h3></div></div><div><div class="person-image member-2"><div class="person-title"><div>Project manager</div></div></div><div class="person-name"><h3 class="h3-product">Jess Musk</h3></div></div><div><div class="person-image member-3"><div class="person-title"><div>Support</div></div></div><div class="person-name"><h3 class="h3-product">Tomaas Hirschi</h3></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>Block Services</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div><img height="48" loading="lazy" src="/images//images/602245335521615d0a3e2f6f_icon-worker-orange.png" alt="service-icon" class="service-dark-image"/><h5>Exterior Design</h5><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div><div role="listitem" class="w-dyn-item"><div><img height="48" loading="lazy" src="/images//images/602245b6045ee7ce48d7150d_icon-ruler-orange.png" alt="service-icon" class="service-dark-image"/><h5>Renovation</h5><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div><div role="listitem" class="w-dyn-item"><div><img height="48" loading="lazy" src="/images//images/602245d100a403753c089577_icon-measure-orange.png" alt="service-icon" class="service-dark-image"/><h5>Industrial Design</h5><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></section><div class="divider-line"></div><section class="section spacing-small"><div class="container"><div class="logo-wrapper"><div class="logo-div"><img src="/images//images/601a94aa21150d5be2308c5e_logo-1.svg" loading="lazy" alt="logoipsum-1" class="logo"/></div><div class="logo-div"><img src="/images//images/601a94aa192d006ace4f61ac_logo-2.svg" loading="lazy" alt="logoipsum-2" class="logo"/></div><div class="logo-div"><img src="/images//images/601a94ab5613ad1fc7c38cc0_logo-3.svg" loading="lazy" alt="logoipsum-3" class="logo"/></div><div class="logo-div"><img src="/images//images/601a94aa79f2680e03159514_logo-4.svg" loading="lazy" alt="logoipsum-4" class="logo"/></div><div class="logo-div"><img src="/images//images/601a94aae8ddee13d0184266_logo-5.svg" loading="lazy" alt="logoipsum-5" class="logo"/></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" aria-current="page" class="footer-link w--current">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601d404bed0d274cc5219754" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "blog": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" aria-current="page" class="nav-link w-nav-link w--current">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Read about Block</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-dyn-list"><div role="list" class="blog-grid w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/block-fundamentals" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26982c042202203b6aab_blog-thumbnail-4.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/block-fundamentals" class="blog-h-link w-inline-block"><h5 class="h5-blog">Block Fundamentals</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/block-fundamentals" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/how-to-start-a-project" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26a2c90708aac0199b61_blog-thumbnail-5.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/how-to-start-a-project" class="blog-h-link w-inline-block"><h5 class="h5-blog">How to start a project</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/how-to-start-a-project" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/zero-energy-home" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26b2e1dfb56325f6fd43_blog-thumbnail-6.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/zero-energy-home" class="blog-h-link w-inline-block"><h5 class="h5-blog">Zero energy home</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/zero-energy-home" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/industry-myths" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26be2c042217d43b6abc_blog-thumbnail-7.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/industry-myths" class="blog-h-link w-inline-block"><h5 class="h5-blog">Industry myths</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/industry-myths" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/ecological-principles" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26c91f348f7b719c9fff_blog-thumbnail-8.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/ecological-principles" class="blog-h-link w-inline-block"><h5 class="h5-blog">Ecological principles </h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/ecological-principles" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601d51460cbec50e7da61881" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "category_drilling-tools": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-small"><div class="container"><div class="w-layout-grid shop-top"><div><h2 class="h2-top-0">Drilling Tools</h2><div class="heading-line"></div></div><div class="shop-categories"><a href="/shop" class="shop-all-link w-inline-block"><div>All Products</div></a><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/pliers" class="shop-category-link w-inline-block"><div>Pliers</div></a></div><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/electronics" class="shop-category-link w-inline-block"><div>Electronics</div></a></div></div></div></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833b894806a6351fbe8dc_product-4.jpg&quot;)" href="/product/flat-screwdriver" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/flat-screwdriver" class="product-h-link w-inline-block"><h3 class="h3-product">Flat Screwdriver</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 9.90 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833a60eafdde38f9b82fb_product-5.jpg&quot;)" href="/product/spiral-drilling-bits" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/spiral-drilling-bits" class="product-h-link w-inline-block"><h3 class="h3-product">Spiral Drilling Bits</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 49.50 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028339440d9f666da65cfb0_product-6.jpg&quot;)" href="/product/cutting-pliers" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/cutting-pliers" class="product-h-link w-inline-block"><h3 class="h3-product">Cutting Pliers</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 19.99 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602832b7f164fadd6fa88a94_product-7.jpg&quot;)" href="/product/metal-drill-bit" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/metal-drill-bit" class="product-h-link w-inline-block"><h3 class="h3-product">Metal Drill Bit</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 15.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028328c2dec1a91a57d0b9c_product-8.jpg&quot;)" href="/product/nail-puller-pliers" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/nail-puller-pliers" class="product-h-link w-inline-block"><h3 class="h3-product">Nail Puller Pliers</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" aria-current="page" class="footer-link w--current">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7787eb9aac151" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "category_electronics": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-small"><div class="container"><div class="w-layout-grid shop-top"><div><h2 class="h2-top-0">Electronics</h2><div class="heading-line"></div></div><div class="shop-categories"><a href="/shop" class="shop-all-link w-inline-block"><div>All Products</div></a><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/drilling-tools" class="shop-category-link w-inline-block"><div>Drilling Tools</div></a></div><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/pliers" class="shop-category-link w-inline-block"><div>Pliers</div></a></div></div></div></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833b894806a6351fbe8dc_product-4.jpg&quot;)" href="/product/flat-screwdriver" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/flat-screwdriver" class="product-h-link w-inline-block"><h3 class="h3-product">Flat Screwdriver</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 9.90 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" aria-current="page" class="footer-link w--current">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7787eb9aac151" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "category_pliers": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-small"><div class="container"><div class="w-layout-grid shop-top"><div><h2 class="h2-top-0">Pliers</h2><div class="heading-line"></div></div><div class="shop-categories"><a href="/shop" class="shop-all-link w-inline-block"><div>All Products</div></a><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/drilling-tools" class="shop-category-link w-inline-block"><div>Drilling Tools</div></a></div><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/electronics" class="shop-category-link w-inline-block"><div>Electronics</div></a></div></div></div></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833a60eafdde38f9b82fb_product-5.jpg&quot;)" href="/product/spiral-drilling-bits" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/spiral-drilling-bits" class="product-h-link w-inline-block"><h3 class="h3-product">Spiral Drilling Bits</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 49.50 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028339440d9f666da65cfb0_product-6.jpg&quot;)" href="/product/cutting-pliers" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/cutting-pliers" class="product-h-link w-inline-block"><h3 class="h3-product">Cutting Pliers</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 19.99 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028328c2dec1a91a57d0b9c_product-8.jpg&quot;)" href="/product/nail-puller-pliers" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/nail-puller-pliers" class="product-h-link w-inline-block"><h3 class="h3-product">Nail Puller Pliers</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" aria-current="page" class="footer-link w--current">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7787eb9aac151" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "checkout": `
<header class="section hero"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Checkout</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div data-node-type="commerce-checkout-form-container" data-wf-checkout-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      availableShippingMethods {
        description
        id
        mode
        name
        price {
          decimalValue
          string
          unit
          value
        }
        selected
      }
      comment
      customData {
        checkbox
        name
        textArea
        textInput
      }
      customerInfo {
        billingAddress {
          addressee
          city
          country
          japanType
          line1
          line2
          postalCode
          state
          type
        }
        identity {
          email
          fullName
        }
        shippingAddress {
          addressee
          city
          country
          japanType
          line1
          line2
          postalCode
          state
          type
        }
        stripePayment {
          card {
            expires {
              month
              year
            }
            last4
            provided
            provider
          }
        }
      }
      downloadFiles {
        id
        name
        url
      }
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      paymentProcessor
      startedOn
      statusFlags {
        billingAddressRequiresPostalCode
        hasDownloads
        hasSubscription
        isFreeOrder
        needAddress
        needIdentity
        needItems
        needPayment
        requiresShipping
        shippingAddressRequiresPostalCode
        shouldRecalc
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecheckoutformcontainer checkout-form"><div class="container flex-checkout"><div class="w-commerce-commercelayoutmain main-checkout"><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none" class="web-payments"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton pay-with-browser"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><form data-node-type="commerce-checkout-customer-info-wrapper" class="w-commerce-commercecheckoutcustomerinfowrapper"><div class="w-commerce-commercecheckoutblockheader block-header"><h5 class="h5-checkout">Customer Info</h5><div class="required-text">* Required</div></div><fieldset class="w-commerce-commercecheckoutblockcontent block-content"><label for="" class="w-commerce-commercecheckoutlabel field-label">Email *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.customerEmail%22%7D%7D%5D" class="w-commerce-commercecheckoutemailinput form-input" type="text" name="email" required=""/></fieldset></form><form data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" data-node-type="commerce-checkout-shipping-address-wrapper" class="w-commerce-commercecheckoutshippingaddresswrapper"><div class="w-commerce-commercecheckoutblockheader block-header"><h5 class="h5-checkout">Shipping Address</h5><div class="required-text">* Required</div></div><fieldset class="w-commerce-commercecheckoutblockcontent block-content"><label for="" class="w-commerce-commercecheckoutlabel field-label">Full Name *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressAddressee%22%7D%7D%5D" class="w-commerce-commercecheckoutshippingfullname form-input" name="name" type="text" required=""/><label for="" class="w-commerce-commercecheckoutlabel field-label">Street Address *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressLine1%22%7D%7D%5D" class="w-commerce-commercecheckoutshippingstreetaddress form-input" name="address_line1" type="text" required=""/><input aria-label="" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressLine2%22%7D%7D%5D" class="w-commerce-commercecheckoutshippingstreetaddressoptional form-input" name="address_line2" type="text"/><div class="w-commerce-commercecheckoutrow"><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">City *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressCity%22%7D%7D%5D" class="w-commerce-commercecheckoutshippingcity form-input" name="address_city" type="text" required=""/></div><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">State/Province</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressState%22%7D%7D%5D" class="w-commerce-commercecheckoutshippingstateprovince form-input" name="address_state" type="text"/></div><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">Zip/Postal Code *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressPostalCode%22%7D%7D%5D" data-node-type="commerce-checkout-shipping-zip-field" class="w-commerce-commercecheckoutshippingzippostalcode form-input" name="address_zip" type="text" required=""/></div></div><label for="" class="w-commerce-commercecheckoutlabel field-label">Country *</label><select data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.shippingAddressCountry%22%7D%7D%5D" class="w-commerce-commercecheckoutshippingcountryselector form-dropdown" name="address_country"><option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="CV">Cabo Verde</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czechia</option><option value="CD">Democratic Republic of the Congo</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="CG">Republic of the Congo</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="VI">U.S. Virgin Islands</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></fieldset></form><form data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" data-node-type="commerce-checkout-shipping-methods-wrapper" class="w-commerce-commercecheckoutshippingmethodswrapper"><div class="w-commerce-commercecheckoutblockheader block-header"><h5 class="h5-checkout">Shipping Method</h5></div><fieldset class="block-content"><div data-node-type="commerce-checkout-shipping-methods-list" class="w-commerce-commercecheckoutshippingmethodslist shipping-method-list" data-wf-collection="database.commerceOrder.availableShippingMethods" data-wf-template-id="wf-template-601a9b65393d59a123f93484000000000042"><label class="w-commerce-commercecheckoutshippingmethoditem shipping-method"><input required="" data-wf-bindings="%5B%7B%22id%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.id%22%7D%7D%2C%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.id%22%7D%7D%2C%7B%22checked%22%3A%7B%22type%22%3A%22Bool%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.selected%22%7D%7D%5D" class="radio-button" type="radio" name="shipping-method-choice"/><div class="w-commerce-commercecheckoutshippingmethoddescriptionblock"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.name%22%7D%7D%5D" class="w-commerce-commerceboldtextblock w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.description%22%7D%7D%5D" class="w-dyn-bind-empty"></div></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.availableShippingMethods%5B%5D.price%22%7D%7D%5D" class="price-text">$ 0.00 USD</div></label></div><div data-node-type="commerce-checkout-shipping-methods-empty-state" style="display:none" class="w-commerce-commercecheckoutshippingmethodsemptystate"><div>No shipping methods are available for the address given.</div></div></fieldset></form><div class="w-commerce-commercecheckoutpaymentinfowrapper"><div class="w-commerce-commercecheckoutblockheader block-header"><h5 class="h5-checkout">Payment Info</h5><div class="required-text">* Required</div></div><fieldset class="w-commerce-commercecheckoutblockcontent block-content"><label for="" class="w-commerce-commercecheckoutlabel field-label">Card Number *</label><div data-wf-stripe-element-type="cardNumber" data-wf-style-map="{}" class="w-commerce-commercecheckoutcardnumber form-input"><div></div></div><div class="w-commerce-commercecheckoutrow"><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">Expiration Date *</label><div data-wf-stripe-element-type="cardExpiry" data-wf-style-map="{}" class="w-commerce-commercecheckoutcardexpirationdate form-input"><div></div></div></div><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">Security Code *</label><div data-wf-stripe-element-type="cardCvc" data-wf-style-map="{}" class="w-commerce-commercecheckoutcardsecuritycode form-input"><div></div></div></div></div><div data-wf-bindings="%5B%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22requiresShipping%22%3A%7B%22eq%22%3A%22true%22%2C%22type%22%3A%22Bool%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder%22%7D" class="w-commerce-commercecheckoutbillingaddresstogglewrapper"><input id="billing-address-toggle" data-node-type="commerce-checkout-billing-address-toggle-checkbox" class="w-commerce-commercecheckoutbillingaddresstogglecheckbox checkbox" type="checkbox" checked=""/><label for="billing-address-toggle" class="w-commerce-commercecheckoutbillingaddresstogglelabel">Billing address same as shipping</label></div></fieldset></div><form data-node-type="commerce-checkout-billing-address-wrapper" style="display:none" class="w-commerce-commercecheckoutbillingaddresswrapper"><div class="w-commerce-commercecheckoutblockheader block-header"><h5 class="h5-checkout">Billing Address</h5><div class="required-text">* Required</div></div><fieldset class="w-commerce-commercecheckoutblockcontent block-content"><label for="" class="w-commerce-commercecheckoutlabel field-label">Full Name *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressAddressee%22%7D%7D%5D" class="w-commerce-commercecheckoutbillingfullname form-input" name="name" type="text" required=""/><label for="" class="w-commerce-commercecheckoutlabel field-label">Street Address *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressLine1%22%7D%7D%5D" class="w-commerce-commercecheckoutbillingstreetaddress form-input" name="address_line1" required="" type="text"/><input aria-label="" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressLine2%22%7D%7D%5D" class="w-commerce-commercecheckoutbillingstreetaddressoptional form-input" name="address_line2" type="text"/><div class="w-commerce-commercecheckoutrow"><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">City *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressCity%22%7D%7D%5D" class="w-commerce-commercecheckoutbillingcity form-input" name="address_city" type="text" required=""/></div><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">State/Province</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressState%22%7D%7D%5D" class="w-commerce-commercecheckoutbillingstateprovince form-input" name="address_state" type="text"/></div><div class="w-commerce-commercecheckoutcolumn"><label for="" class="w-commerce-commercecheckoutlabel field-label">Zip/Postal Code *</label><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressPostalCode%22%7D%7D%5D" data-node-type="commerce-checkout-billing-zip-field" class="w-commerce-commercecheckoutbillingzippostalcode form-input" name="address_zip" type="text" required=""/></div></div><label for="" class="w-commerce-commercecheckoutlabel field-label">Country *</label><select data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.billingAddressCountry%22%7D%7D%5D" class="w-commerce-commercecheckoutbillingcountryselector form-dropdown" name="address_country"><option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="CV">Cabo Verde</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czechia</option><option value="CD">Democratic Republic of the Congo</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="CG">Republic of the Congo</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="VI">U.S. Virgin Islands</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US" selected="">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></fieldset></form><div class="w-commerce-commercecheckoutorderitemswrapper"><div class="w-commerce-commercecheckoutsummaryblockheader block-header"><h5 class="h5-checkout">Items in Order</h5></div><fieldset class="w-commerce-commercecheckoutblockcontent block-content"><div role="list" class="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-601a9b65393d59a123f93484000000000086"><div role="listitem" class="w-commerce-commercecheckoutorderitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecheckoutorderitemdescriptionwrapper"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commerceboldtextblock w-dyn-bind-empty"></div><div class="w-commerce-commercecheckoutorderitemquantitywrapper"><div>Quantity:  </div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%5D">1</div></div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecheckoutorderitemoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-601a9b65393d59a123f9348400000000008f"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"></span></li></ul></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.rowTotal%22%7D%7D%5D">$ 0.00 USD</div></div></div></fieldset></div></div><div class="w-commerce-commercelayoutsidebar sidebar-checkout"><div class="w-commerce-commercecheckoutordersummarywrapper"><div class="w-commerce-commercecheckoutsummaryblockheader block-header-sidebar"><h4 class="heading">Order Summary</h4></div><fieldset class="w-commerce-commercecheckoutblockcontent block-content-sidebar"><div class="w-commerce-commercecheckoutsummarylineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"></div></div><div class="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-601a9b65393d59a123f934840000000000a0"><div class="w-commerce-commercecheckoutordersummaryextraitemslistitem"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.extraItems%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.extraItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div></div></div><div class="w-commerce-commercecheckoutsummarylineitem"><div>Total</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.total%22%7D%7D%5D" class="w-commerce-commercecheckoutsummarytotal"></div></div></fieldset></div><a href="#" value="Place Order" data-node-type="commerce-checkout-place-order-button" class="w-commerce-commercecheckoutplaceorderbutton button" data-loading-text="Placing Order...">Place Order</a><div data-node-type="commerce-checkout-error-state" style="display:none" class="w-commerce-commercecheckouterrorstate error-message"><div aria-live="polite" class="w-checkout-error-msg" data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems." data-w-shipping-error="Sorry. We can’t ship your order to the address provided." data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems." data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems." data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again." data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue." data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again." data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again." data-w-invalid-discount-error="This discount is invalid." data-w-expired-discount-error="This discount is no longer available." data-w-usage-reached-discount-error="This discount is no longer available." data-w-requirements-not-met-error="Your order does not meet the requirements for this discount.">There was an error processing your customer info. Please try again, or contact us if you continue to have problems.</div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7781b14aac154" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "contact": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" aria-current="page" class="nav-link w-nav-link w--current">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Contact our company</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid message-grid"><div><div class="person-image member-3"><div class="person-title right"><div>Customer service</div></div></div></div><div id="w-node-div-block-13039d5b"><h2>Send us a message</h2><div class="w-form"><form id="wf-form-contact-form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" class="contact-form" data-wf-page-id="601d582ff98eb90113039d5b" data-wf-element-id="fd75ab8b-d46f-e241-b1b5-67145ceebd0b"><div class="w-layout-grid form-grid"><input class="text-field w-node-fd75ab8b-d46f-e241-b1b5-67145ceebd0e-13039d5b w-input" maxlength="256" name="name" data-name="Name" placeholder="Name" type="text" id="contact-name" required=""/><input class="text-field w-node-fd75ab8b-d46f-e241-b1b5-67145ceebd11-13039d5b w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" type="email" id="contact-email" required=""/><textarea placeholder="Message" maxlength="5000" id="contact-message" name="field" required="" data-name="field" class="text-field message w-node-cbdda37d-fea2-fe73-0bfe-39c52302c551-13039d5b w-input"></textarea></div><input type="submit" data-wait="Please wait..." class="button w-button" value="Submit Message"/></form><div class="success-contact w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div class="w-layout-grid contact-grid"><div><img src="/images//images/601a945a99e3039f6d02559e_call-icon.png" loading="lazy" alt="call-icon" width="48" class="contact-icon"/><h5>Call us</h5><p>We’re available 24/7 for your work inquiries on the following nr:<!--$--><br/><!--/$-->(420) 428-8000</p></div><div><img src="/images//images/601a94610569edf47c1f1217_location-icon.png" loading="lazy" alt="visit-icon" width="48" class="contact-icon"/><h5>Visit us</h5><p>Visit us in our offices at:<!--$--><br/><!--/$-->1 First American Way, Santa Ana, <!--$--><br/><!--/$-->CA, 92707</p></div><div><img src="/images//images/601a94616d6c452cc4cb06ea_mail-icon.png" loading="lazy" alt="email-icon" width="48" class="contact-icon"/><h5>Contact us</h5><div class="service-dark-text-div"><p>Alternatively, you can send us email to info@startui.wf and we’ll answer you shortly.</p></div></div></div></div></section><section class="section"><div class="map w-widget w-widget-map" data-widget-style="roadmap" data-widget-latlng="" data-enable-scroll="true" role="" title="" data-enable-touch="true" data-widget-zoom="12" data-widget-tooltip=""></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" aria-current="page" class="footer-link w--current">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601d582ff98eb90113039d5b" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "home-2": `
<header class="section hero"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="hero-wrapper home-2"><h1 class="h1-big">We are a premier construction company in London</h1><div class="subtitle">See our latest projects or shop in our online store</div><div class="main-button-wrapper"><a href="/projects" class="button white w-button">Our Projects</a></div><a href="/shop" class="button white-text w-button">Shop Now</a></div></div></header><section class="section"><div class="grey-fade"></div><div class="container"><div class="w-dyn-list"><div role="list" class="hero-services-grid w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="hero-services"><img height="48" loading="lazy" src="/images//images/602245335521615d0a3e2f6f_icon-worker-orange.png" alt="service-icon" class="service-icon"/><h5>Exterior Design</h5><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div><div role="listitem" class="w-dyn-item"><div class="hero-services"><img height="48" loading="lazy" src="/images//images/602245b6045ee7ce48d7150d_icon-ruler-orange.png" alt="service-icon" class="service-icon"/><h5>Renovation</h5><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div><div role="listitem" class="w-dyn-item"><div class="hero-services"><img height="48" loading="lazy" src="/images//images/602245d100a403753c089577_icon-measure-orange.png" alt="service-icon" class="service-icon"/><h5>Industrial Design</h5><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div data-duration-in="300" data-duration-out="100" data-current="Tab 1" data-easing="ease" class="w-tabs"><div class="tabs-menu w-tab-menu"><a data-w-tab="Tab 1" id="w-node-fae757e1-5317-35f3-6d8a-5fe567c14e50-20d0fbbd" class="tab w-inline-block w-tab-link w--current"><div>Feature One</div></a><a data-w-tab="Tab 2" class="tab w-inline-block w-tab-link"><div>Feature Two</div></a><a data-w-tab="Tab 3" class="tab w-inline-block w-tab-link"><div>Feature Three</div></a></div><div class="w-tab-content"><div data-w-tab="Tab 1" class="w-tab-pane w--tab-active"><div class="w-layout-grid featured-grid"><div id="w-node-_9bf82a63-2d02-497b-2cf0-92f8f1a3b905-20d0fbbd" class="featured-image"></div><div class="grid-text-wrapper"><h2>Everything to solve your construction problems</h2><div class="space-bottom"><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p></div><a href="/services" class="button w-button">Our Services</a></div></div></div><div data-w-tab="Tab 2" class="w-tab-pane"><div class="w-layout-grid featured-grid"><div id="w-node-_162a81ed-59eb-12b5-b8a5-bf6b2bb15786-20d0fbbd" class="featured-image"></div><div class="grid-text-wrapper"><h2>Everything to solve your construction problems</h2><div class="space-bottom"><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p></div><a href="/services" class="button w-button">Our Services</a></div></div></div><div data-w-tab="Tab 3" class="w-tab-pane"><div class="w-layout-grid featured-grid"><div id="w-node-_2b84e2f5-1a40-44bc-c8d4-b85a5d5577be-20d0fbbd" class="featured-image"></div><div class="grid-text-wrapper"><h2>Everything to solve your construction problems</h2><div class="space-bottom"><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p></div><a href="/services" class="button w-button">Our Services</a></div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>Block Products</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><section class="section black-bg black-image padding-small"><div class="container"><div class="w-layout-grid video-grid"><div id="w-node-_59dcadc7-cc07-e34d-651f-aa5783f46f75-20d0fbbd" class="video-text"><h3 class="h3-white">See Block Features</h3><div class="video-subtitle">Professional Construction</div></div><a href="#" id="w-node-_512e9247-0aa4-ca7e-ceea-d71b755fafc6-20d0fbbd" class="lightbox-link spacing-big w-inline-block w-lightbox"><div class="outer-circle"><div class="inner-circle"><img src="/images//images/601a936c5613ad2b8dc3862d_icon-play-white.svg" loading="lazy" alt="video-play-icon" class="play-icon"/></div></div></a></div></div></section><section class="section spacing-medium"><div class="container"><div class="w-layout-grid pricing-grid"><div id="w-node-ceb24dc0-ab7a-6a53-69a0-9ca3612087d5-20d0fbbd" class="pricing-wrapper"><h6>Standard</h6><div class="pricing-price"><div class="price">$99</div><div class="year">/year</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit.</p><div class="checkmark-wrapper"><div class="checkmark-flex center"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Quisque consect oletur</div></div><div class="checkmark-flex center"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Nunc tempus lectus</div></div></div><a href="/shop" class="button fullwidth line w-button">Purchase</a></div><div id="w-node-_3289755d-619b-7fd6-8d78-b8d074b95c3c-20d0fbbd" class="pricing-wrapper"><div class="popular"><div class="popular-text">Most popular plan</div></div><h6>Premium</h6><div class="pricing-price"><div class="price">$399</div><div class="year">/year</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit.</p><div class="checkmark-wrapper"><div class="checkmark-flex center"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Quisque consect oletur</div></div><div class="checkmark-flex center"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Nunc tempus lectus</div></div></div><a href="/shop" class="button fullwidth w-button">Purchase</a></div><div id="w-node-f33b6d57-f436-ed00-483e-09c8d5fc64d4-20d0fbbd" class="pricing-wrapper"><h6>Exclusive</h6><div class="pricing-price"><div class="price">$999</div><div class="year">/year</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit.</p><div class="checkmark-wrapper"><div class="checkmark-flex center"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Quisque consect oletur</div></div><div class="checkmark-flex center"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Nunc tempus lectus</div></div></div><a href="/shop" class="button fullwidth line w-button">Purchase</a></div></div></div></section><section class="section spacing-medium"><div class="container black-bg"><div class="w-layout-grid newsletter-grid"><h2 class="h2-white">Subscribe to the Block weekly newsletter</h2><div id="w-node-_00d5d869-6c99-e90f-b49c-f7c7b3a2fce6-20d0fbbd" class="form-block w-form"><form id="wf-form-subscribe-form" name="wf-form-Subscribe-Form" data-name="Subscribe Form" method="get" class="subscribe-form" data-wf-page-id="601d19e9aaa536b020d0fbbd" data-wf-element-id="00d5d869-6c99-e90f-b49c-f7c7b3a2fce7"><input class="subscribe-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" type="email" id="subscribe-email" required=""/><div class="subscribe-button-div"><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></div></form><div class="success-dark w-form-done"><div class="success-dark-text">Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>Latest Projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" aria-current="page" class="footer-link w--current">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601d19e9aaa536b020d0fbbd" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "index": `
<header class="section hero"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" aria-current="page" class="brand w-nav-brand w--current"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="hero-wrapper"><h1 class="h1-big">We are a premier construction company in London</h1><div class="subtitle">See our latest projects or shop in our online store</div><div class="main-button-wrapper"><a href="/projects" class="button white w-button">Our Projects</a></div><a href="/shop" class="button white-text w-button">Shop Now</a></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid featured-grid"><div id="w-node-_9bf82a63-2d02-497b-2cf0-92f8f1a3b905-e5a843a5" class="featured-image"></div><div class="grid-text-wrapper"><h2>Everything to solve your construction problems</h2><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p><div class="checkmark-wrapper"><div class="checkmark-flex"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Quisque consectetur lacinia blandit.</div></div><div class="checkmark-flex"><img src="/images//images/601a936cb5d0307dab41275a_icon-checkmark-yellow.svg" loading="lazy" alt="checkmark-icon" class="checkmark"/><div>Nunc tempus ipsum lectus</div></div></div><a href="/about" class="button w-button">About Block</a></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>Block Products</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><section class="section orange-bg padding-medium"><div class="container"><div class="w-layout-grid service-orange-grid"><div class="w-layout-grid two-services-grid"><div class="white-service"><img src="/images//images/6023918045a2c2464223b6a5_location-icon-black.png" loading="lazy" alt="location-icon" width="48"/><h6>Visit us</h6><p>Visit us in our offices at:<br/>1 First American Way, Santa Ana, CA, 92707</p></div><div class="white-service"><img src="/images//images/60239181bc4426258229aeb2_mail-icon-black.png" loading="lazy" width="44" alt="email-icon"/><h6>Email us</h6><p>Send us email to info@startui.wf and we’ll answer you shortly.</p></div></div><div id="w-node-ba0bfdf1-a826-04b5-b560-beede160c221-e5a843a5" class="two-services-text"><h3 class="h3-white">Contact us now and get a great deal</h3><div class="two-services-paragraph"><p class="beige-text">Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>Latest Projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><section class="section black-bg padding-medium"><div class="container"><div><h2 class="h2-white">Block Services</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="services-dark-grid w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="service-dark"><img height="48" loading="lazy" src="/images//images/6022453af7079e0e4fa18914_icon-worker-yellow.png" alt="service-icon" class="service-dark-image"/><h5>Exterior Design</h5><div class="service-dark-text-div"><p class="text-grey">Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p></div><a href="/service/exterior-design" class="arrow-link white w-inline-block"><div>Details</div><img src="/images//images/601a934d6cf274a684e297e8_icon-arrow-white.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div><div role="listitem" class="w-dyn-item"><div class="service-dark"><img height="48" loading="lazy" src="/images//images/602245b9431e40e7a78e5966_icon-ruler-.png" alt="service-icon" class="service-dark-image"/><h5>Renovation</h5><div class="service-dark-text-div"><p class="text-grey">Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p></div><a href="/service/renovation" class="arrow-link white w-inline-block"><div>Details</div><img src="/images//images/601a934d6cf274a684e297e8_icon-arrow-white.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div><div role="listitem" class="w-dyn-item"><div class="service-dark"><img height="48" loading="lazy" src="/images//images/602245d33573d0faf50ef926_icon-measure-yellow.png" alt="service-icon" class="service-dark-image"/><h5>Industrial Design</h5><div class="service-dark-text-div"><p class="text-grey">Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p></div><a href="/service/industrial-design" class="arrow-link white w-inline-block"><div>Details</div><img src="/images//images/601a934d6cf274a684e297e8_icon-arrow-white.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div data-delay="4000" data-animation="outin" class="testimonial-slider w-slider" data-autoplay="false" data-easing="ease-in-out" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true"><div class="testimonial-mask w-slider-mask"><div class="slide w-slide"><div class="testimonial"><img src="/images//images/601a94b26cf2746c1ce29ded_testimonial-face-1.png" loading="lazy" width="64" alt="testimonial-image" class="testimonial-image"/><div class="testimonial-text">Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</div><h6 class="h6-project">Candace Simpson</h6><div>Realtor</div></div></div><div class="slide w-slide"><div class="testimonial"><img src="/images//images/601a94b2d334e32de0db18fd_testimonial-face-2.png" loading="lazy" width="64" alt="testimonial-image" class="testimonial-image"/><div class="testimonial-text">Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</div><h6 class="h6-project">Todd Kreischer</h6><div>Gym owner</div></div></div><div class="slide w-slide"><div class="testimonial"><img src="/images//images/601a94b18cf00d4fba5f56c6_testimonial-face-3.png" loading="lazy" width="64" alt="testimonial-image" class="testimonial-image"/><div class="testimonial-text">Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</div><h6 class="h6-project">Tammy Richards</h6><div>Cons Founder</div></div></div></div><div class="testimonial-left w-slider-arrow-left"><div class="testimonial-left-arrow"><img src="/images//images/601a936c7e990adb12436d7b_icon-arrow-left.svg" loading="lazy" alt="left-arrow-icon" class="arrow-left"/></div></div><div class="testimonial-right w-slider-arrow-right"><div class="testimonial-right-arrow"><img src="/images//images/601a936c8cf00d6c0d5f54e2_icon-arrow-right.svg" loading="lazy" alt="right-arrow-icon" class="arrow-right"/></div></div><div class="testimonial-nav w-slider-nav w-round"></div></div></div></section><div class="divider-line"></div><section class="section spacing-medium"><div class="container"><div><h2>Our Members</h2><div class="heading-line"></div></div><div class="w-layout-grid people-grid spacing-small"><div><div class="person-image member-1"><div class="person-title"><div>Architect</div></div></div><div class="person-name"><h3 class="h3-product">Alberta Infantino</h3></div></div><div><div class="person-image member-2"><div class="person-title"><div>Project manager</div></div></div><div class="person-name"><h3 class="h3-product">Jess Musk</h3></div></div><div><div class="person-image member-3"><div class="person-title"><div>Support</div></div></div><div class="person-name"><h3 class="h3-product">Tomaas Hirschi</h3></div></div></div></div></section><section class="section black-bg"><div class="container"><div class="above-wrapper padding-medium"><div><img src="/images//images/601a945f21150dbee1308c08_icon-ruler-white.png" loading="lazy" width="33" alt="about-block-icon"/><div class="above-text">Get to know Block</div><a href="/about" class="arrow-link white w-inline-block"><div>About Us</div><img src="/images//images/601a934d6cf274a684e297e8_icon-arrow-white.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div><a href="#" class="lightbox-link _20-right w-inline-block w-lightbox"><div class="outer-circle"><div class="inner-circle"><img src="/images//images/601a936c5613ad2b8dc3862d_icon-play-white.svg" loading="lazy" alt="video-play-icon" class="play-icon"/></div></div></a></div></div><div class="right-image"><div class="right-overlay"></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" aria-current="page" class="w-inline-block w--current"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" aria-current="page" class="footer-link w--current">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="60191a8d697f7e78e5a843a5" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "instructions": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Block Instructions</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Google Maps</h5><div><div class="w-richtext"><p>The <strong>map</strong> element on Contact page lets you embed an interactive map to your site via the Google Maps JavaScript API. You can specify the location to highlight and choose from various display options. From the start since there&#x27;s no API added yet, you&#x27;ll see a grey map placeholder.</p><h5>Adding API key</h5><ol start="" role="list"><li>Open the <strong>map settings</strong> (double-click the map on the canvas or select it and press enter)</li><li>Click<strong> &quot;Add API key&quot;. You&#x27;ll be taken to your</strong> <strong>project settings → integrations → Google maps</strong>. This is where you’ll paste in your API key for Google Maps.</li><li>Follow the steps from <a href="https://university.webflow.com/lesson/map" target="_blank">Webflow university</a> in how to generate the API key.<!--$--><br/><!--/$--></li></ol><figure style="max-width:1500px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/6034c252c4a4db01ef922f23_api.png" loading="lazy" alt=""/></div></figure><p>Once you added the API key, simple save the changes and Publish the website.</p></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" aria-current="page" class="footer-link w--current">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="6034bf722bcbb2828ccea771" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "licenses": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Block Licenses</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid template-grid spacing-small"><div></div><div><p>All graphical assets in this template are licensed for personal and commercial use. If you&#x27;d like to use a specific asset, please check the license below.</p></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Images</h5><div><p>All images found in this template are taken off of Unsplash (<a href="https://unsplash.com" target="_blank" class="paragraph-link">https://unsplash.com</a>) and Pexels (<a href="https://www.pexels.com" target="_blank" class="paragraph-link">https://www.pexels.com</a>).   <!--$--><br/><!--/$--><!--$--><br/><!--/$-->All photos from Unsplash and Pexels are free to use. They grant you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos from for free, including for commercial purposes, without permission from or attributing the photographer.</p></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Videos</h5><div><p>Videos in this template are taken off of Youtube, and have been uploaded to Youtube by Webflow.</p></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Fonts</h5><div><p>Block only uses one font, the Google’s DM Sans. This font is licensed under the Open Font License. You can use it freely in your products &amp; projects - print or digital, commercial or otherwise. However, you can&#x27;t sell the fonts on their own.</p></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Iconography</h5><div><p>All icons used in this template are sourced from Icons8.com and may be used with an attribution, as explained here: <a href="https://icons8.com/license" class="paragraph-link">https://icons8.com/license</a></p></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" aria-current="page" class="footer-link w--current">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601be9e99d294d5e666229fe" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_2021-building-trends": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>2021 Building trends</h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f494361dc4f72862999_project-inner-1.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/block-fundamentals" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26982c042202203b6aab_blog-thumbnail-4.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/block-fundamentals" class="blog-h-link w-inline-block"><h5 class="h5-blog">Block Fundamentals</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/block-fundamentals" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_block-fundamentals": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>Block Fundamentals</h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f758a8276df090e5fa9_project-inner-3.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_construction-tips": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>Construction tips</h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f94f516c045255bdd34_project-inner-2.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/block-fundamentals" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26982c042202203b6aab_blog-thumbnail-4.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/block-fundamentals" class="blog-h-link w-inline-block"><h5 class="h5-blog">Block Fundamentals</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/block-fundamentals" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_ecological-principles": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>Ecological principles </h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f5c2c0422028538b933_project-inner-7.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_how-to-start-a-project": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>How to start a project</h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f6dd368de8479f8886e_project-inner-4.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_industry-myths": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>Industry myths</h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a3f86365323c5c5eec1fd_project-inner-6.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_read-our-mission": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>Read our mission</h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f758a8276df090e5fa9_project-inner-3.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/block-fundamentals" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a26982c042202203b6aab_blog-thumbnail-4.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/block-fundamentals" class="blog-h-link w-inline-block"><h5 class="h5-blog">Block Fundamentals</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/block-fundamentals" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "post_zero-energy-home": `
<header style="background-image:url(&quot;https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602a24ec5a5d41c87b64a804_inner-bg.jpg&quot;)" class="section blog-post"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero template"><h1>Zero energy home</h1><div class="heading-line"></div></div></div></header><section class="section spacing-small"><div class="container narrow"><div class="w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu <strong>sollicitudin</strong>, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, <em>venenatis justo ac</em>, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</p><blockquote>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin.</blockquote><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. <a href="http://madebylumen.com">Aliquam egestas</a> elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f8235d51a929c017280_project-inner-5.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><ul role="list"><li>Construction companies</li><li>Renovation planning</li><li>CAD Construction</li></ul><p>Mauris laoreet sagittis velit, eget pretium nisl tristique sed. Aliquam egestas elit in quam commodo gravida. Aenean gravida arcu vitae arcu bibendum, quis tempor dui imperdiet. Aenean aliquam turpis vitae lectus dignissim, et lobortis lacus luctus. Ut a placerat massa. Vestibulum mollis velit vel velit venenatis convallis. Phasellus lobortis sollicitudin nisi sed lacinia. Vestibulum quis ullamcorper lectus. Integer imperdiet, eros a sodales blandit, arcu nibh pulvinar lorem, quis rutrum quam elit non erat. Sed sed nunc ornare, vulputate leo sed, semper elit.</p></div><div class="written"><div class="written-text">Written on</div><div class="written-text">January 20, 2021</div><div class="written-text">by Block</div></div></div></section><div class="divider-line bottom-20"></div><section class="section spacing-medium"><div class="container"><div><h2>More blog posts</h2><div class="heading-line"></div></div><div class="related-posts normal w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/read-our-mission" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a268bb5ed0853b4e8e578_blog-thumbnail-3.jpg" class="blog-image"/></a><div class="blog-box-tex"><a href="/post/read-our-mission" class="blog-h-link w-inline-block"><h5 class="h5-blog">Read our mission</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/read-our-mission" class="button arrow read-more w-button">Read More</a></div></div></div></div></div><div class="related-posts tablet w-dyn-list"><div role="list" class="blog-grid spacing-small w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/2021-building-trends" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2656f516c076ff5e963c_blog-thumbnail-1.jpg"/></a><div class="blog-box-tex"><a href="/post/2021-building-trends" class="blog-h-link w-inline-block"><h5 class="h5-blog">2021 Building trends</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/2021-building-trends" class="button arrow read-more w-button">Read More</a></div></div></div><div role="listitem" class="w-dyn-item"><div class="blog-box"><a href="/post/construction-tips" class="w-inline-block"><img alt="blog-thumbnail-image" loading="lazy" width="500" src="/images//images/602a2664145e139b751217f9_blog-thumbnail-2.jpg"/></a><div class="blog-box-tex"><a href="/post/construction-tips" class="blog-h-link w-inline-block"><h5 class="h5-blog">Construction tips</h5></a><div class="paragraph-div"><p>Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</p></div><a href="/post/construction-tips" class="button arrow read-more w-button">Read More</a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e9738d12078b4e90aa933" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_cutting-pliers": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028339440d9f666da65cfb0_product-6.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Cutting Pliers</h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 19.99 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="6028339b14d90218b13954b6" data-commerce-product-id="6028339ac2de687f0703e5fa" class="w-commerce-commerceaddtocartform default-state"><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_digital-multimeter": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Digital Multimeter</h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="602833cd3ae35c3d510c945f" data-commerce-product-id="602833cd3d84b96bf2e82b7a" class="w-commerce-commerceaddtocartform default-state"><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" aria-current="page" class="product-image w-inline-block w--current"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" aria-current="page" class="product-h-link w-inline-block w--current"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_flat-screwdriver": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833b894806a6351fbe8dc_product-4.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Flat Screwdriver</h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 9.90 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="602833bdaa37ba38edff890d" data-commerce-product-id="602833bdd1ade428edca9a48" class="w-commerce-commerceaddtocartform default-state"><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_metal-drill-bit": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602832b7f164fadd6fa88a94_product-7.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Metal Drill Bit</h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 15.00 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="602832bf31f5abcff283a0a9" data-commerce-product-id="602832bfc2de680bec03e5c2" class="w-commerce-commerceaddtocartform default-state"><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_nail-puller-pliers": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028328c2dec1a91a57d0b9c_product-8.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Nail Puller Pliers</h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="602832a199a6fc64b38bc268" data-commerce-product-id="602832a13d84b95812e82b79" class="w-commerce-commerceaddtocartform default-state"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_sku_values_3dr%22%2C%22to%22%3A%22optionValues%22%7D%5D" data-commerce-product-sku-values="%7B%7D" data-node-type="commerce-add-to-cart-option-list" data-commerce-product-id="602832a13d84b95812e82b79" data-preselect-default-variant="false" role="group"></div><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_ratchet-crimp-tool": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Ratchet Crimp Tool </h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="602833dfdf4dc140733e6613" data-commerce-product-id="602833dfc325e45b12b04eec" class="w-commerce-commerceaddtocartform default-state"><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" aria-current="page" class="product-image w-inline-block w--current"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" aria-current="page" class="product-h-link w-inline-block w--current"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_spiral-drilling-bits": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833a60eafdde38f9b82fb_product-5.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Spiral Drilling Bits</h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 49.50 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="602833ac317b0f59c6def036" data-commerce-product-id="602833ab8ff5666232ee747d" class="w-commerce-commerceaddtocartform default-state"><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "product_voltage-tester": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" class="nav-link dark w-nav-link">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-medium"><div class="container"><div class="product-single-grid"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" class="product-image single"><div class="new-tag w-condition-invisible"><div>New</div></div></div><div id="w-node-div-block-5caac14f"><h1 class="h1-product">Voltage Tester</h1><div class="heading-line"></div><div class="price-div"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="602833f09b9c4f7a9bd14f77" data-commerce-product-id="602833f02ee6396ac0f6d56e" class="w-commerce-commerceaddtocartform default-state"><div class="quantity-wrapper"><label for="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" class="quantity-label">QTY:</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-5bb6db39d71aa4dc03693e5a6338c7bb" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart"/></div><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" class="w-commerce-commercebuynowbutton button buy" href="/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock out-of-stock-state" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror error-message"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More products for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" aria-current="page" class="product-image w-inline-block w--current"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" aria-current="page" class="product-h-link w-inline-block w--current"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601a9b653dc7785f5caac14f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "projects": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" aria-current="page" class="nav-link w-nav-link w--current">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>See all our projects</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-dyn-list"><div role="list" class="project-grid w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029624ff6cb8873c4cc9865_project-4.jpg&quot;)" href="/project/steel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Steel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029618c4361dc34a885f171_project-5.jpg&quot;)" href="/project/skyscraper-planning" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Skyscraper Planning</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/stacked-housing" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Stacked Housing</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/60296233627ee84cf6e7df47_project-7.jpg&quot;)" href="/project/new-age-housing" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">New Age Housing</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" aria-current="page" class="footer-link w--current">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601bed9300f2a6c8fb4f19c5" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "project_hotel-construction": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Project detail page</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid project-single-grid"><div><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602962acb4409e25b7cf356a_project-inner-1.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602962acb4409e25b7cf356a_project-inner-1-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602962acb4409e25b7cf356a_project-inner-1.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-500.jpeg 500w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-800.jpeg 800w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="" class="project-image w-condition-invisible w-dyn-bind-empty"/></div><div id="w-node-div-block-3-9ff709f0" class="project-description"><h2 class="h2-project">Hotel Construction</h2><div class="project-category">Construction</div><div class="project-rich-text w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div><div><h5 class="h5-project">Created</h5><div>February 2021</div></div><div><h5 class="h5-project">Client</h5><div>Webflow Inc.</div></div><div><h5 class="h5-project">Location</h5><div>Santa Ana, California</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029624ff6cb8873c4cc9865_project-4.jpg&quot;)" href="/project/steel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Steel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e97e9e1fe7aac9ff709f0" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "project_new-age-housing": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Project detail page</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid project-single-grid"><div><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296227145e1338650eee84_project-inner-7.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296227145e1338650eee84_project-inner-7-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296227145e1338650eee84_project-inner-7.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-500.jpeg 500w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-800.jpeg 800w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="" class="project-image w-condition-invisible w-dyn-bind-empty"/></div><div id="w-node-div-block-3-9ff709f0" class="project-description"><h2 class="h2-project">New Age Housing</h2><div class="project-category">Residential</div><div class="project-rich-text w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div><div><h5 class="h5-project">Created</h5><div>October 2019</div></div><div><h5 class="h5-project">Client</h5><div>Webflow Inc.</div></div><div><h5 class="h5-project">Location</h5><div>Santa Ana, California</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e97e9e1fe7aac9ff709f0" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "project_residential-project": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Project detail page</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid project-single-grid"><div><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961885c43ccc9a9ccd6ea_project-inner-2.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961885c43ccc9a9ccd6ea_project-inner-2-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961885c43ccc9a9ccd6ea_project-inner-2.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-500.jpeg 500w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-800.jpeg 800w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="" class="project-image w-condition-invisible w-dyn-bind-empty"/></div><div id="w-node-div-block-3-9ff709f0" class="project-description"><h2 class="h2-project">Residential Project</h2><div class="project-category">Residential</div><div class="project-rich-text w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div><div><h5 class="h5-project">Created</h5><div>November 2020</div></div><div><h5 class="h5-project">Client</h5><div>Webflow Inc.</div></div><div><h5 class="h5-project">Location</h5><div>Santa Ana, California</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029624ff6cb8873c4cc9865_project-4.jpg&quot;)" href="/project/steel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Steel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e97e9e1fe7aac9ff709f0" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "project_roof-reconstruction": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Project detail page</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid project-single-grid"><div><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/6029625d202ffdf266d34988_project-inner-3.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/6029625d202ffdf266d34988_project-inner-3-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/6029625d202ffdf266d34988_project-inner-3.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-500.jpeg 500w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-800.jpeg 800w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="" class="project-image w-condition-invisible w-dyn-bind-empty"/></div><div id="w-node-div-block-3-9ff709f0" class="project-description"><h2 class="h2-project">Roof Reconstruction</h2><div class="project-category">Construction</div><div class="project-rich-text w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div><div><h5 class="h5-project">Created</h5><div>July 2020</div></div><div><h5 class="h5-project">Client</h5><div>Webflow Inc.</div></div><div><h5 class="h5-project">Location</h5><div>Santa Ana, California</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029624ff6cb8873c4cc9865_project-4.jpg&quot;)" href="/project/steel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Steel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e97e9e1fe7aac9ff709f0" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "project_skyscraper-planning": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Project detail page</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid project-single-grid"><div><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-500.jpeg 500w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-800.jpeg 800w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296227145e1338650eee84_project-inner-7.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296227145e1338650eee84_project-inner-7-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296227145e1338650eee84_project-inner-7.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="" class="project-image w-condition-invisible w-dyn-bind-empty"/></div><div id="w-node-div-block-3-9ff709f0" class="project-description"><h2 class="h2-project">Skyscraper Planning</h2><div class="project-category">Construction</div><div class="project-rich-text w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div><div><h5 class="h5-project">Created</h5><div>Januar 2020</div></div><div><h5 class="h5-project">Client</h5><div>Webflow Inc.</div></div><div><h5 class="h5-project">Location</h5><div>Santa Ana, California</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e97e9e1fe7aac9ff709f0" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "project_stacked-housing": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Project detail page</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid project-single-grid"><div><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961f7202ffd59a6d3458b_project-inner-6.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961f7202ffd59a6d3458b_project-inner-6-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961f7202ffd59a6d3458b_project-inner-6.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-500.jpeg 500w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-800.jpeg 800w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602961942c0422ec7b386cb0_project-inner-5.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="" class="project-image w-condition-invisible w-dyn-bind-empty"/></div><div id="w-node-div-block-3-9ff709f0" class="project-description"><h2 class="h2-project">Stacked Housing</h2><div class="project-category">Residential</div><div class="project-rich-text w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div><div><h5 class="h5-project">Created</h5><div>Januar 2020</div></div><div><h5 class="h5-project">Client</h5><div>Webflow Inc.</div></div><div><h5 class="h5-project">Location</h5><div>Santa Ana, California</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e97e9e1fe7aac9ff709f0" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "project_steel-construction": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Project detail page</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid project-single-grid"><div><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602962596e51f5c0678f678f_project-inner-4.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602962596e51f5c0678f678f_project-inner-4-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602962596e51f5c0678f678f_project-inner-4.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/6029625d202ffdf266d34988_project-inner-3.jpg" sizes="100vw" srcset="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/6029625d202ffdf266d34988_project-inner-3-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/601a9b653dc778273baac14a/6029625d202ffdf266d34988_project-inner-3.jpg 1100w" class="project-image"/><img alt="" loading="lazy" src="" class="project-image w-condition-invisible w-dyn-bind-empty"/></div><div id="w-node-div-block-3-9ff709f0" class="project-description"><h2 class="h2-project">Steel Construction</h2><div class="project-category">Construction</div><div class="project-rich-text w-richtext"><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div><div><h5 class="h5-project">Created</h5><div>March 2020</div></div><div><h5 class="h5-project">Client</h5><div>Webflow Inc.</div></div><div><h5 class="h5-project">Location</h5><div>Santa Ana, California</div></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More projects</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="project-grid spacing-small w-dyn-items"><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029617455b62d419d298056_project-1.jpg&quot;)" href="/project/hotel-construction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Hotel Construction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/602961dfbd9e72f74531a09d_project-2.jpg&quot;)" href="/project/residential-project" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Residential Project</h6><div class="project-category">Residential</div></div><div class="project-overlay"></div></a></div><div role="listitem" class="project-item w-dyn-item"><a style="background-image:url(&quot;/images//images/6029626f6e51f547ae8f6893_project-3.jpg&quot;)" href="/project/roof-reconstruction" class="project w-inline-block"><div class="project-div"><h6 class="h6-project">Roof Reconstruction</h6><div class="project-category">Construction</div></div><div class="project-overlay"></div></a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e97e9e1fe7aac9ff709f0" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "services": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" aria-current="page" class="nav-link w-nav-link w--current">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" aria-current="page" class="button small nav menu w-button w--current">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" aria-current="page" class="button small nav w-button w--current">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Discover our services</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979fa23b7654738775251_service-3.jpg&quot;)" href="/service/exterior-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f1a1f348ffa5899d7a5_icon-worker-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/exterior-design" class="service-h-link w-inline-block"><h3 class="h3-service">Exterior Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a156d3b4025ed544cc3_service-6.jpg&quot;)" href="/service/renovation" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f131f348f4ca699d714_icon-ruler-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/renovation" class="service-h-link w-inline-block"><h3 class="h3-service">Renovation</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a035a5d4174fe622e74_service-4.jpg&quot;)" href="/service/industrial-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f0bf9239c3e89b0677b_icon-measure-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/industrial-design" class="service-h-link w-inline-block"><h3 class="h3-service">Industrial Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a0cbae4ef08de6f5242_service-5.jpg&quot;)" href="/service/residential-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296efd4361dca96d862620_icon-excavator-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/residential-design" class="service-h-link w-inline-block"><h3 class="h3-service">Residential Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/residential-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979ef05a0876c00bc94d1_service-2.jpg&quot;)" href="/service/interior-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296ef5ff961262440e46ad_icon-tools-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/interior-design" class="service-h-link w-inline-block"><h3 class="h3-service">Interior Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/interior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979e35144ce49e4f81bc3_service-1.jpg&quot;)" href="/service/construction" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296eecbae4ef7f216f1a33_icon-crane-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/construction" class="service-h-link w-inline-block"><h3 class="h3-service">Construction</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/construction" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="6022390b9ed7dbe549aecbe3" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "service_construction": `
<header style="background-image:url(&quot;/images//images/602979e35144ce49e4f81bc3_service-1.jpg&quot;)" class="section service"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Construction</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="service-wrapper"><div class="main-service"><div class="service-rich-text w-richtext"><h2>Heading H2</h2><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f94f516c045255bdd34_project-inner-2.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div></div><div class="sidebar"><div class="other-services"><h5>Other Services</h5><div class="service-line"></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/service/exterior-design" class="category-link w-inline-block"><div>Exterior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/renovation" class="category-link w-inline-block"><div>Renovation</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/industrial-design" class="category-link w-inline-block"><div>Industrial Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/residential-design" class="category-link w-inline-block"><div>Residential Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/interior-design" class="category-link w-inline-block"><div>Interior Design</div></a></div></div></div></div><div><h5>Download brochure</h5><a href="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602241cb91d8be57ca661e68_brochure.pdf" class="brochure-link w-inline-block"><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/601a937e79f2684a571591f8_icon-brochure.svg" loading="lazy" alt="brochure-icon" class="brochure-image"/><div>construction-ser.pdf</div></a></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More services for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979fa23b7654738775251_service-3.jpg&quot;)" href="/service/exterior-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f1a1f348ffa5899d7a5_icon-worker-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/exterior-design" class="service-h-link w-inline-block"><h3 class="h3-service">Exterior Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a156d3b4025ed544cc3_service-6.jpg&quot;)" href="/service/renovation" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f131f348f4ca699d714_icon-ruler-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/renovation" class="service-h-link w-inline-block"><h3 class="h3-service">Renovation</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a035a5d4174fe622e74_service-4.jpg&quot;)" href="/service/industrial-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f0bf9239c3e89b0677b_icon-measure-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/industrial-design" class="service-h-link w-inline-block"><h3 class="h3-service">Industrial Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e98288ea931178f3ec152" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "service_exterior-design": `
<header style="background-image:url(&quot;/images//images/602979fa23b7654738775251_service-3.jpg&quot;)" class="section service"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Exterior Design</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="service-wrapper"><div class="main-service"><div class="service-rich-text w-richtext"><h2>Heading H2</h2><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f494361dc4f72862999_project-inner-1.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div></div><div class="sidebar"><div class="other-services"><h5>Other Services</h5><div class="service-line"></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/service/renovation" class="category-link w-inline-block"><div>Renovation</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/industrial-design" class="category-link w-inline-block"><div>Industrial Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/residential-design" class="category-link w-inline-block"><div>Residential Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/interior-design" class="category-link w-inline-block"><div>Interior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/construction" class="category-link w-inline-block"><div>Construction</div></a></div></div></div></div><div><h5>Download brochure</h5><a href="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602241cb91d8be57ca661e68_brochure.pdf" class="brochure-link w-inline-block"><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/601a937e79f2684a571591f8_icon-brochure.svg" loading="lazy" alt="brochure-icon" class="brochure-image"/><div>construction-ser.pdf</div></a></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More services for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a156d3b4025ed544cc3_service-6.jpg&quot;)" href="/service/renovation" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f131f348f4ca699d714_icon-ruler-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/renovation" class="service-h-link w-inline-block"><h3 class="h3-service">Renovation</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a035a5d4174fe622e74_service-4.jpg&quot;)" href="/service/industrial-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f0bf9239c3e89b0677b_icon-measure-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/industrial-design" class="service-h-link w-inline-block"><h3 class="h3-service">Industrial Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a0cbae4ef08de6f5242_service-5.jpg&quot;)" href="/service/residential-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296efd4361dca96d862620_icon-excavator-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/residential-design" class="service-h-link w-inline-block"><h3 class="h3-service">Residential Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/residential-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e98288ea931178f3ec152" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "service_industrial-design": `
<header style="background-image:url(&quot;/images//images/60297a035a5d4174fe622e74_service-4.jpg&quot;)" class="section service"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Industrial Design</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="service-wrapper"><div class="main-service"><div class="service-rich-text w-richtext"><h2>Heading H2</h2><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f6dd368de8479f8886e_project-inner-4.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div></div><div class="sidebar"><div class="other-services"><h5>Other Services</h5><div class="service-line"></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/service/exterior-design" class="category-link w-inline-block"><div>Exterior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/renovation" class="category-link w-inline-block"><div>Renovation</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/residential-design" class="category-link w-inline-block"><div>Residential Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/interior-design" class="category-link w-inline-block"><div>Interior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/construction" class="category-link w-inline-block"><div>Construction</div></a></div></div></div></div><div><h5>Download brochure</h5><a href="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602241cb91d8be57ca661e68_brochure.pdf" class="brochure-link w-inline-block"><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/601a937e79f2684a571591f8_icon-brochure.svg" loading="lazy" alt="brochure-icon" class="brochure-image"/><div>construction-ser.pdf</div></a></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More services for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979fa23b7654738775251_service-3.jpg&quot;)" href="/service/exterior-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f1a1f348ffa5899d7a5_icon-worker-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/exterior-design" class="service-h-link w-inline-block"><h3 class="h3-service">Exterior Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a156d3b4025ed544cc3_service-6.jpg&quot;)" href="/service/renovation" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f131f348f4ca699d714_icon-ruler-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/renovation" class="service-h-link w-inline-block"><h3 class="h3-service">Renovation</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a0cbae4ef08de6f5242_service-5.jpg&quot;)" href="/service/residential-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296efd4361dca96d862620_icon-excavator-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/residential-design" class="service-h-link w-inline-block"><h3 class="h3-service">Residential Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/residential-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e98288ea931178f3ec152" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "service_interior-design": `
<header style="background-image:url(&quot;/images//images/602979ef05a0876c00bc94d1_service-2.jpg&quot;)" class="section service"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Interior Design</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="service-wrapper"><div class="main-service"><div class="service-rich-text w-richtext"><h2>Heading H2</h2><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f8235d51a929c017280_project-inner-5.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div></div><div class="sidebar"><div class="other-services"><h5>Other Services</h5><div class="service-line"></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/service/exterior-design" class="category-link w-inline-block"><div>Exterior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/renovation" class="category-link w-inline-block"><div>Renovation</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/industrial-design" class="category-link w-inline-block"><div>Industrial Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/residential-design" class="category-link w-inline-block"><div>Residential Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/construction" class="category-link w-inline-block"><div>Construction</div></a></div></div></div></div><div><h5>Download brochure</h5><a href="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602241cb91d8be57ca661e68_brochure.pdf" class="brochure-link w-inline-block"><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/601a937e79f2684a571591f8_icon-brochure.svg" loading="lazy" alt="brochure-icon" class="brochure-image"/><div>construction-ser.pdf</div></a></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More services for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979fa23b7654738775251_service-3.jpg&quot;)" href="/service/exterior-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f1a1f348ffa5899d7a5_icon-worker-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/exterior-design" class="service-h-link w-inline-block"><h3 class="h3-service">Exterior Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a156d3b4025ed544cc3_service-6.jpg&quot;)" href="/service/renovation" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f131f348f4ca699d714_icon-ruler-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/renovation" class="service-h-link w-inline-block"><h3 class="h3-service">Renovation</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a035a5d4174fe622e74_service-4.jpg&quot;)" href="/service/industrial-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f0bf9239c3e89b0677b_icon-measure-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/industrial-design" class="service-h-link w-inline-block"><h3 class="h3-service">Industrial Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e98288ea931178f3ec152" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "service_renovation": `
<header style="background-image:url(&quot;/images//images/60297a156d3b4025ed544cc3_service-6.jpg&quot;)" class="section service"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Renovation</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="service-wrapper"><div class="main-service"><div class="service-rich-text w-richtext"><h2>Heading H2</h2><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f5c2c0422028538b933_project-inner-7.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div></div><div class="sidebar"><div class="other-services"><h5>Other Services</h5><div class="service-line"></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/service/exterior-design" class="category-link w-inline-block"><div>Exterior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/industrial-design" class="category-link w-inline-block"><div>Industrial Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/residential-design" class="category-link w-inline-block"><div>Residential Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/interior-design" class="category-link w-inline-block"><div>Interior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/construction" class="category-link w-inline-block"><div>Construction</div></a></div></div></div></div><div><h5>Download brochure</h5><a href="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602241cb91d8be57ca661e68_brochure.pdf" class="brochure-link w-inline-block"><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/601a937e79f2684a571591f8_icon-brochure.svg" loading="lazy" alt="brochure-icon" class="brochure-image"/><div>construction-ser.pdf</div></a></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More services for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979fa23b7654738775251_service-3.jpg&quot;)" href="/service/exterior-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f1a1f348ffa5899d7a5_icon-worker-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/exterior-design" class="service-h-link w-inline-block"><h3 class="h3-service">Exterior Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a035a5d4174fe622e74_service-4.jpg&quot;)" href="/service/industrial-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f0bf9239c3e89b0677b_icon-measure-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/industrial-design" class="service-h-link w-inline-block"><h3 class="h3-service">Industrial Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a0cbae4ef08de6f5242_service-5.jpg&quot;)" href="/service/residential-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296efd4361dca96d862620_icon-excavator-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/residential-design" class="service-h-link w-inline-block"><h3 class="h3-service">Residential Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/residential-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e98288ea931178f3ec152" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "service_residential-design": `
<header style="background-image:url(&quot;/images//images/60297a0cbae4ef08de6f5242_service-5.jpg&quot;)" class="section service"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Residential Design</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="service-wrapper"><div class="main-service"><div class="service-rich-text w-richtext"><h2>Heading H2</h2><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p><figure style="max-width:1100px" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/60296f758a8276df090e5fa9_project-inner-3.jpg" loading="lazy" alt=""/></div></figure><p>Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. <!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.<!--$--><br/><!--/$--><!--$--><br/><!--/$-->Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo.</p></div></div><div class="sidebar"><div class="other-services"><h5>Other Services</h5><div class="service-line"></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/service/exterior-design" class="category-link w-inline-block"><div>Exterior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/renovation" class="category-link w-inline-block"><div>Renovation</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/industrial-design" class="category-link w-inline-block"><div>Industrial Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/interior-design" class="category-link w-inline-block"><div>Interior Design</div></a></div><div role="listitem" class="w-dyn-item"><a href="/service/construction" class="category-link w-inline-block"><div>Construction</div></a></div></div></div></div><div><h5>Download brochure</h5><a href="https://cdn.prod.website-files.com/601a9b653dc778273baac14a/602241cb91d8be57ca661e68_brochure.pdf" class="brochure-link w-inline-block"><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/601a937e79f2684a571591f8_icon-brochure.svg" loading="lazy" alt="brochure-icon" class="brochure-image"/><div>construction-ser.pdf</div></a></div></div></div></div></section><section class="section spacing-medium"><div class="container"><div><h2>More services for you</h2><div class="heading-line"></div></div><div class="w-dyn-list"><div role="list" class="service-grid spacing-small w-dyn-items"><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/602979fa23b7654738775251_service-3.jpg&quot;)" href="/service/exterior-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f1a1f348ffa5899d7a5_icon-worker-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/exterior-design" class="service-h-link w-inline-block"><h3 class="h3-service">Exterior Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/exterior-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a156d3b4025ed544cc3_service-6.jpg&quot;)" href="/service/renovation" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f131f348f4ca699d714_icon-ruler-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/renovation" class="service-h-link w-inline-block"><h3 class="h3-service">Renovation</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/renovation" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div><div role="listitem" class="service-item w-dyn-item"><div><a style="background-image:url(&quot;/images//images/60297a035a5d4174fe622e74_service-4.jpg&quot;)" href="/service/industrial-design" class="service-image w-inline-block"><img height="48" loading="lazy" src="/images//images/60296f0bf9239c3e89b0677b_icon-measure-white.png" alt="service-icon"/></a><div class="service-name"><a href="/service/industrial-design" class="service-h-link w-inline-block"><h3 class="h3-service">Industrial Design</h3></a><p>Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales aenean sed.</p><a href="/service/industrial-design" class="arrow-link dark w-inline-block"><div>Details</div><img src="/images//images/601a934dd334e3293ddb120d_icon-arrow-black.svg" loading="lazy" alt="arrow-icon" class="arrow-icon"/></a></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601e98288ea931178f3ec152" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "shop": `
<div class="section"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a93082da74a1ae52e5634_logo-black.svg" loading="lazy" alt=""/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link dark w-nav-link">Services</a><a href="/projects" class="nav-link dark w-nav-link">Projects</a><a href="/about" class="nav-link dark w-nav-link">About</a><a href="/shop" aria-current="page" class="nav-link dark w-nav-link w--current">Shop</a><a href="/blog" class="nav-link dark w-nav-link">Blog</a><a href="/contact" class="nav-link dark w-nav-link">Contact</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933c1cce821a40f79749_icon-cart-black.svg" loading="lazy" alt=""/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity dark">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7c5"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist option-list" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-76c55978-6608-08a6-7548-1a09ab66e7cb"><li class="option"><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932ac0018d906d8d4fc4_icon-menu-black.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div></div><section class="section spacing-small"><div class="container"><div class="w-layout-grid shop-top"><div><h2 class="h2-top-0">Shop Now</h2><div class="heading-line"></div></div><div class="shop-categories"><a href="/shop" aria-current="page" class="shop-all-link w-inline-block w--current"><div>All Products</div></a><div class="collection-list-wrapper w-dyn-list"><div role="list" class="collection-list w-dyn-items"><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/drilling-tools" class="shop-category-link w-inline-block"><div>Drilling Tools</div></a></div><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/pliers" class="shop-category-link w-inline-block"><div>Pliers</div></a></div><div role="listitem" class="shop-category-item w-dyn-item"><a href="/category/electronics" class="shop-category-link w-inline-block"><div>Electronics</div></a></div></div></div></div></div><div class="w-dyn-list"><div role="list" class="product-grid spacing-small w-dyn-items"><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833ebeccd0a0985cd40d1_product-1.jpg&quot;)" href="/product/voltage-tester" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/voltage-tester" class="product-h-link w-inline-block"><h3 class="h3-product">Voltage Tester</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 59.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833d86f8ec714b45f22af_product-2.jpg&quot;)" href="/product/ratchet-crimp-tool" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/ratchet-crimp-tool" class="product-h-link w-inline-block"><h3 class="h3-product">Ratchet Crimp Tool </h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 79.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833c9d77afb62c3a0f240_product-3.jpg&quot;)" href="/product/digital-multimeter" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/digital-multimeter" class="product-h-link w-inline-block"><h3 class="h3-product">Digital Multimeter</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833b894806a6351fbe8dc_product-4.jpg&quot;)" href="/product/flat-screwdriver" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/flat-screwdriver" class="product-h-link w-inline-block"><h3 class="h3-product">Flat Screwdriver</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 9.90 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602833a60eafdde38f9b82fb_product-5.jpg&quot;)" href="/product/spiral-drilling-bits" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/spiral-drilling-bits" class="product-h-link w-inline-block"><h3 class="h3-product">Spiral Drilling Bits</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 49.50 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028339440d9f666da65cfb0_product-6.jpg&quot;)" href="/product/cutting-pliers" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/cutting-pliers" class="product-h-link w-inline-block"><h3 class="h3-product">Cutting Pliers</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 19.99 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/602832b7f164fadd6fa88a94_product-7.jpg&quot;)" href="/product/metal-drill-bit" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/metal-drill-bit" class="product-h-link w-inline-block"><h3 class="h3-product">Metal Drill Bit</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 15.00 USD</div></div></div></div><div role="listitem" class="product-item w-dyn-item"><div><a data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style="background-image:url(&quot;/images//images/6028328c2dec1a91a57d0b9c_product-8.jpg&quot;)" href="/product/nail-puller-pliers" class="product-image w-inline-block"><div class="new-tag w-condition-invisible"><div>New</div></div><div class="button arrow product">Details</div></a><div class="product-name"><a href="/product/nail-puller-pliers" class="product-h-link w-inline-block"><h3 class="h3-product">Nail Puller Pliers</h3></a><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">$ 99.00 USD</div></div></div></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" aria-current="page" class="footer-link w--current">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" class="footer-link">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601fc03bbe24d5685da4dac6" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
  "styleguides": `
<header class="section inner"><div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="container"><div class="nav-wrapper"><a href="/" class="brand w-nav-brand"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><nav role="navigation" class="nav-menu w-nav-menu"><a href="/services" class="nav-link w-nav-link">Services</a><a href="/projects" class="nav-link w-nav-link">Projects</a><a href="/about" class="nav-link w-nav-link">About</a><a href="/shop" class="nav-link w-nav-link">Shop</a><a href="/blog" class="nav-link w-nav-link">Blog</a><a href="/contact" class="nav-link w-nav-link">Contact</a><a href="/services" class="button small nav menu w-button">Our Services</a></nav><div class="nav-cta"><div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper"><a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"><img src="/images//images/601a933b769fa8181d5f1d38_icon-cart-white.svg" loading="lazy" alt="cart-logo"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity">0</div></a><div data-node-type="commerce-cart-container-wrapper" style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container"><div class="w-commerce-commercecartheader cart-header"><h4 class="w-commerce-commercecartheading">Your Cart</h4><a href="#" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart"><div class="close-div"><div class="close-div-line reverse"></div><div class="close-div-line"></div></div></a></div><div class="w-commerce-commercecartformwrapper"><form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform"><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b722a"><div class="w-commerce-commercecartitem cart-item"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-6f76eb68-426e-d4a4-55b1-e419a08b7230"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="w-commerce-commercecartquantity cart-quantity-2" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter cart-footer"><div aria-live="" aria-atomic="false" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a role="button" aria-haspopup="dialog" aria-label="Apple Pay" data-node-type="commerce-cart-apple-pay-button" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay small" tabindex="0"><div></div></a><a role="button" tabindex="0" aria-haspopup="dialog" data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button" data-loading-text="Hang Tight...">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate empty-cart"><div>No items found.</div></div><div aria-live="" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-cart"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div><a href="/services" class="button small nav w-button">Our Services</a></div><div class="menu-button w-nav-button"><img src="/images//images/601a932a6cf274050fe294fb_icon-menu-white.svg" loading="lazy" alt="" class="menu-button-image"/></div></div></div></div><div class="container"><div class="page-hero"><h1>Block Styleguides</h1><div class="heading-line"></div></div></div></header><section class="section spacing-medium"><div class="container"><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Headings</h5><div><div class="h1-div"><h1 class="h1-dark">Webflow Building Blocks</h1></div><h2>Webflow Building Blocks</h2><h3>Webflow Building Blocks</h3><h4>Webflow Building Blocks</h4><h5>Webflow Building Blocks</h5><h6>Webflow Building Blocks</h6></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Paragraphs</h5><div><p class="paragraph-big">Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis. Curabitur in posuere nisi, id fermentum arcu.</p><p>Aenean eget pulvinar enim. Quisque consectetur lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Rich Text</h5><div><div class="w-richtext"><p>Aenean eget pulvinar enim. Quisque <strong>consectetur</strong> lacinia blandit. Proin iaculis quam a elementum pharetra. <em>Nunc tempus</em> ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><ul role="list"><li>Bulletpoint I</li><li>Bulletpoint II</li></ul><p>Aenean eget pulvinar enim. Quisque <em>consectetur</em> lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero <a href="https://madebylumen.com" target="_blank">sodales</a> sed.</p><figure style="max-width:1440pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img src="https://cdn.prod.website-files.com/60191a8d697f7e7a06a843a4/602a3e451f348f2d6f9ce7fa_block-open-graph.png" loading="lazy" alt=""/></div><figcaption>Block template caption</figcaption></figure><p>Aenean eget pulvinar enim. <em>Quisque consectetur</em> lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p><ol start="" role="list"><li>Numbered list I</li><li>Numbered list iI</li></ol><p>Aenean eget pulvinar enim. Quisque <strong>consectetur</strong> lacinia blandit. Proin iaculis quam a elementum pharetra. <em>Nunc tempus</em> ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</p><blockquote>Aenean eget pulvinar enim. <em>Nunc tempus</em> ipsum lectus, ac cursus libero sodales sed. Aenean facilisis tristique facilisis.</blockquote><p>Aenean eget pulvinar enim. <em>Quisque consectetur</em> lacinia blandit. Proin iaculis quam a elementum pharetra. Nunc tempus ipsum lectus, ac cursus libero sodales sed.</p></div></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Colors</h5><div class="w-layout-grid colors-grid"><div class="color orange-bg"></div><div class="color yellow-bg"></div><div class="color black-bg"></div><div class="color white-bg"></div><div class="color grey-bg"></div></div></div><div class="w-layout-grid template-grid spacing-small"><h5 class="h5-styleguide">Buttons</h5><div class="buttons-flex"><div class="margin-right"><a href="#" class="button w-button">Button Text</a></div><div class="margin-right"><a href="#" class="button small w-button">Button Text</a></div><div class="margin-right"><a href="#" class="button arrow w-button">Details</a></div></div></div></div></section><footer class="section black-bg footer"><div class="container"><div class="footer-top"><a href="/" class="w-inline-block"><img src="/images//images/601a9308769fa8a2635f1caf_logo-white.svg" loading="lazy" alt="block-logo"/></a><div class="social-wrapper"><a href="https://www.linkedin.com/company/webflow-inc-/" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c379f26899cb159273_icon-linkedin.svg" loading="lazy" alt="linkedin-icon" class="social-image"/><div>Linkedin</div></a><a href="https://twitter.com/webflow" target="_blank" class="social-page w-inline-block"><img src="/images//images/601a93c34762ac4a4c84fe0d_icon-twitter.svg" loading="lazy" alt="twitter-icon" class="social-image"/><div>Twitter</div></a></div></div><div class="w-layout-grid footer-grid"><div id="w-node-_15405ed6-2aad-39be-8f76-459753cd14d9-53cd14ca" class="footer-col"><h6>Block Pages</h6><div class="footer-link-grid"><a href="/" class="footer-link">Home</a><a href="/projects" class="footer-link">Projects</a><a href="/home-2" class="footer-link">Home Alt</a><a href="/about" class="footer-link">About</a><a href="/contact" class="footer-link">Contact</a><a href="/shop" class="footer-link">Shop</a></div></div><div class="footer-col"><h6>Shop Categories</h6><div class="footer-flex"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/category/drilling-tools" class="footer-link">Drilling Tools</a></div><div role="listitem" class="w-dyn-item"><a href="/category/pliers" class="footer-link">Pliers</a></div><div role="listitem" class="w-dyn-item"><a href="/category/electronics" class="footer-link">Electronics</a></div></div></div></div></div><div class="footer-col"><h6>Template</h6><div class="footer-flex"><a href="/styleguides" aria-current="page" class="footer-link w--current">Styleguide</a><a href="/licenses" class="footer-link">Licenses</a><a href="/instructions" class="footer-link">Instructions</a></div></div><div class="footer-col"><h6>Subscribe to newsletter</h6><div class="footer-subscribe-text">Duis pretium, nisi ut fermentum fringilla, nunc est fermentum erat</div><div class="w-form"><form id="wf-form-footer-form" name="wf-form-Footer-Form" data-name="Footer Form" method="get" class="footer-form" data-wf-page-id="601bbae0440868939a90a85f" data-wf-element-id="2a29f301-f7ae-3202-1ff4-d74093224f6a"><input class="footer-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email" type="email" id="footer-form-email" required=""/><input type="submit" data-wait="Please wait..." class="button subscribe w-button" value="Subscribe"/></form><div class="success-dark w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Something went wront</div></div></div></div></div></div><div class="footer-line"></div><div class="container"><div class="footer-bottom"><div class="footer-text">Template by <a href="https://madebylumen.com" target="_blank" class="bottom-link">madebylumen, </a>Powered by <a href="https://www.webflow.com" target="_blank" class="bottom-link">Webflow</a></div><div class="footer-text">1 First American Way, Santa Ana, CA, 92707</div></div></div></footer>
`,
};

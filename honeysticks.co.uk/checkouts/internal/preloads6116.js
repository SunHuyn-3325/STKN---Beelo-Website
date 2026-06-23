
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DdM_vFj8.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.Dt8p4mNi.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.hjDOV4np.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser-legacy.B34V2aRW.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.DpjDUd9Z.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload-legacy.CNOfH-bq.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.5IgMAFKm.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.BK1T7XsN.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-userPrivacySettingsExperimentConsent-legacy.1aMR6ugD.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode-legacy.BNaBM8yN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.DTKHOqy-.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors-legacy.ChjukfLK.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes-legacy.ih-eZ_Gt.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.CdOfjVGi.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation-legacy.mWUbnuan.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate-legacy.Fqefi0pJ.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.nK5HQS4S.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.bZLMlCiL.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.Cep89xhv.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.uFUvNKkL.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences-legacy.CDCbJoRI.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.Ci8ii3yg.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.DbmV8d2e.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.DFzJYh1p.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCheckoutProtocolDarkTheme-legacy.C_KNISDf.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.B5PE7qbI.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.DmpxIkAr.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm-legacy.By2ahhkn.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField-legacy.CMXPdzgS.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index-legacy.DZ1M9EmL.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.Bc_kFKyx.js","/cdn/shopifycloud/checkout-web/assets/c1/ButtonWithRegisterWebPixel-legacy.C2L4IDk4.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.CusrQI8H.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping-legacy.BJIKxHNq.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture-legacy.CeiojDKu.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.B1oreJvO.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.CXyf2zUi.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.B6JAjT6Y.js","/cdn/shopifycloud/checkout-web/assets/c1/billing-address-hooks-legacy.Dw-0FyWx.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.B7dxs7nk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.fho3Qwlf.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.Cz-1mVkW.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.XwzpRZo-.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine-legacy.4uR-JYyf.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.Dk8snHcT.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.DYMrt_Pw.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.fP-ZXoy2.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.CwZDoVZx.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.CnYqGjX4.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod-legacy.DUsXvWGh.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour-legacy.DshFZem7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopCashCheckoutEligibility-legacy.BNX2HAgw.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants-legacy.CxiN0GmP.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector-legacy.Bj-T6rb_.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.B4ragupx.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.DsaKCC9h.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.DlEUXm1s.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.D6rsxiPm.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.q-M1fkwc.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.BDH5Mmpr.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryExpectationMethodLabel-legacy.D2gqdAsn.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent-legacy.BO50ymy3.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.Bur_3nA1.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.-ZpgSVax.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodLineFact-legacy.DyG47bjO.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.QKKdaXhs.js","/cdn/shopifycloud/checkout-web/assets/c1/assets-index-legacy.nEfWIFyA.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.DdOlJvCa.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.g3M7h4My.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets-legacy.C7auzg_T.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-v4-legacy.hxLzMo8h.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.BgnTfZYB.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.Bts_5c3l.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.BY7UTw_g.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-legacy.lvCUB399.worker.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0553/5465/4896/files/hs-logo_x320.png?v=1624081068"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
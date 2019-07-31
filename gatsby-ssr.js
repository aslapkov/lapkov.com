const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet, StyleSheetManager } = require('styled-components');

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();
  const app = () => (
    <StyleSheetManager sheet={sheet.instance}>
      {bodyComponent}
    </StyleSheetManager>
  );
  replaceBodyHTMLString(renderToString(<app />));
  setHeadComponents([sheet.getStyleElement()]);
};

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const useBeta = pluginOptions.version && pluginOptions.version === 2;
    const versionSuffix = useBeta ? '2' : '';
    const metrikaSrc = `https://mc.yandex.ru/metrika/${
      useBeta ? 'tag' : 'watch'
    }.js`;

    return setPostBodyComponents([
      <script
        key={`metrika`}
        dangerouslySetInnerHTML={{
          __html: `
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter = new Ya.Metrika${versionSuffix}({
                            id:${pluginOptions.trackingId},
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:${pluginOptions.webvisor},
                            trackHash:${pluginOptions.trackHash}
                        });
                    } catch(e) { }
                });
                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = "${metrikaSrc}";
                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
            })(document, window, "yandex_metrika_callbacks${versionSuffix}");
          `,
        }}
      />,
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${pluginOptions.trackingId}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>,
    ]);
  }
};

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

exports.onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    const trackingId = '43309609';
    const webvisor = true;
    const trackHash = true;
    const versionSuffix = '2';
    const metrikaSrc = `https://mc.yandex.ru/metrika/tag.js`;

    return setPostBodyComponents([
      <script
        key={`metrika`}
        dangerouslySetInnerHTML={{
          __html: `
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter = new Ya.Metrika${versionSuffix}({
                            id:${trackingId},
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:${webvisor},
                            trackHash:${trackHash}
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
            src={`https://mc.yandex.ru/watch/${trackingId}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>,
    ]);
  }
};

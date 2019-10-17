require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    const trackingId = process.env.YANDEX_TRACKING_ID;
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

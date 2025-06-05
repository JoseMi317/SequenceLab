import { useSelector } from "react-redux";
import { selectWapps } from "../../redux/wappsSlice";
import { selectUrl } from "../../redux/urlSlice";

import { Ticker } from "./Ticker";

// Función para convertir URL normal de YT a URL embed
function getYouTubeEmbedUrl(
  url,
  options = { autoplay: false, mute: false, controls: true, loop: false }
) {
  try {
    const urlObj = new URL(url);
    let videoId = null;

    if (
      urlObj.hostname === "www.youtube.com" ||
      urlObj.hostname === "youtube.com"
    ) {
      videoId = urlObj.searchParams.get("v");
    } else if (urlObj.hostname === "youtu.be") {
      videoId = urlObj.pathname.slice(1);
    }

    if (videoId) {
      let embedUrl = `https://www.youtube.com/embed/${videoId}`;
      const params = new URLSearchParams();

      if (options.autoplay) params.set("autoplay", "1");
      if (options.mute) params.set("mute", "1");
      params.set("controls", options.controls ? "1" : "0");
      if (options.loop) {
        params.set("loop", "1");
        params.set("playlist", videoId); // necesario para loop
      }
      params.set("rel", "0");
      params.set("modestbranding", "1");
      params.set("playsinline", "1");

      const paramString = params.toString();
      if (paramString) {
        embedUrl += `?${paramString}`;
      }

      return embedUrl;
    }
  } catch {
    return null;
  }
  return null;
}



const WappBuilder = () => {
  const wappType = useSelector(selectWapps);
  const url = useSelector(selectUrl);

  if (wappType === "ticker") {
    return <Ticker />;
  }

  let iframeSrc = url;

if (wappType === "youtube" && url) {
  const embedUrl = getYouTubeEmbedUrl(url, {
    autoplay: true,
    mute: true,
    controls: false, // <- oculta los controles
    loop: true,
  });
  iframeSrc = embedUrl || url;
}

  if ((wappType === "youtube" || wappType === "web") && iframeSrc) {
    return (
      <div className="aspect-video w-full border border-zinc-700 rounded overflow-hidden bg-black">
        <iframe
          src={iframeSrc}
          title="Vista previa"
          className="w-full h-full"
          frameBorder="0"
          referrerPolicy="no-referrer"
          allowFullScreen
        />
      </div>
    );
  }

  return null;
};

export { WappBuilder };

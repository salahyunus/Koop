import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MobileRedirect = () => {
  const history = useNavigate();

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    const mobileUserAgents = ["iphone", "android", "windows phone"];

    const isMobile = mobileUserAgents.some((agent) =>
      userAgent.includes(agent)
    );

    if (isMobile) {
      history.push("/mobile-page");
    }
  }, [history]);

  return null;
};

export default MobileRedirect;

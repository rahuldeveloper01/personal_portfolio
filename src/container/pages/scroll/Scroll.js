
import PageIndex from "../../../componets/PageIndex";

const Scroll = () => {
    const { hash, pathname } = PageIndex.useLocation();

   PageIndex.useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash, pathname]);

  return null;
};

export default Scroll;

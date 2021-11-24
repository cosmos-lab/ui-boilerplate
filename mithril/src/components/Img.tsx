import * as m from "mithril";
import Component from "@components/Component";

type Attrs = {
  src: string;
  height: string;
  class: string;
};

class Img extends Component<Attrs> {
  render(attrs: Attrs) {
    return (
      <img
        src={require(`../../static/${attrs.src}`).default}
        height={attrs.height || "auto"}
        class={attrs.class || ""}
      />
    );
  }
}

export default Img;

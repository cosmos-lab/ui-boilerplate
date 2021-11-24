import * as m from "mithril";
import { MithrilTsxComponent as MTX } from "mithril-tsx-component";

type Attrs = {
  [x: string]: any;
};

abstract class Component<A> extends MTX<A> {
  setState(val) {
    Object.assign(this, val);
  }

  render(props: Attrs) {}

  view(vnode: m.Vnode<Attrs>) {
    return this.render(vnode.attrs);
  }
}

export default Component;

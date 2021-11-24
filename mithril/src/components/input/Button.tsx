import * as m from "mithril";
import Component from "@components/Component";

class Button extends Component<any> {
  view() {
    return (
      <Button class="testClass">
        <div>Hello World!</div>
      </Button>
    );
  }
}

export default Button;

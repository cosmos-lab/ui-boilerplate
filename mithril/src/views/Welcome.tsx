import * as m from "mithril";
import Component from "@components/Component";
import Img from "@components/Img";
import css from "classnames";
import "@styles/style.scss";

class Welcome extends Component<any> {
  render(props: any) {
    return (
      <layout class="vh-100 theme-1 db tc">
        <wrapper class={css("tc dib mt3 pt3")}>
          <div class="mt2 pb3">Your Title</div>

          <box class="ba borderSecondary pa4 br1 db mt3">
            <box-title>Let's proceed with following options:</box-title>

            <a
              href="/auth/google/init"
              class="flex items-center ba borderSecondary bgHoverPrimary br1 mt3"
            >
              <icon class="bgDefault pa2 br borderSecondary">
                <Img src="icons/tp-google.png" height="20" />
              </icon>
              <span class="b pl3">Signin with Google</span>
            </a>

            <a
              href="/auth/linkedin/init"
              class="flex items-center ba borderSecondary bgHoverPrimary br1 mt3"
            >
              <icon class="bgDefault pa2 br borderSecondary">
                <Img src="icons/tp-linkedin.png" height="20" />
              </icon>
              <span class="b pl3">Signin with Linkedin</span>
            </a>
          </box>
        </wrapper>
      </layout>
    );
  }
}

export default Welcome;

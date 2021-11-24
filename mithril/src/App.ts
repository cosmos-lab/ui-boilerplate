import * as m from "mithril";
import routes from "@/Router";
import "tachyons";

m.route(document.body, "/", routes);
m.route.prefix = "#";

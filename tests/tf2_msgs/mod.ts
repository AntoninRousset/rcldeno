import { makeTypeSupports } from "../../mod.ts";

import * as action from "./action/mod.ts";
import * as msg from "./msg/mod.ts";
import * as srv from "./srv/mod.ts";

export default makeTypeSupports(
  "tf2_msgs",
  { action, msg, srv },
);

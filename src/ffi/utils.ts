import { path } from "../../deps.ts";

export function getLibPath(libName: string) {
  const amentPrefixPath = Deno.env.get("AMENT_PREFIX_PATH");
  if (!amentPrefixPath) {
    throw "AMENT_PREFIX_PATH environment variable is not set, did you forget to source setup ROS environment?";
  }

  return path.join(amentPrefixPath, "lib", libName);
}

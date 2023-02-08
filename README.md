# rcldeno

ROS2 client library for Deno

## Getting started

```js
import * as rcl from "https://deno.land/x/rcldeno/mod.ts";
import * as std_msgs from "https://deno.land/x/rcldeno/tests/std_msgs/mod.ts";

const initOptions = new rcl.InitOptions();
const context = new rcl.Context();
rcl.init(Deno.args, initOptions, context);

const nodeOptions = new rcl.NodeOptions();
const node = new rcl.Node("test", "/ns", context, nodeOptions);

const typeSupport = new std_msgs.Int8TypeSupport();

const publisherOptions = new rcl.PublisherOptions();
const publisher = new rcl.Publisher(
  node,
  typeSupport,
  "chatter",
  publisherOptions,
);

const subscriptionOptions = new rcl.SubscriptionOptions();
const subscription = new rcl.Subscription(
  node,
  typeSupport,
  "chatter",
  subscriptionOptions,
);

const publishedMessage = new std_msgs.Int8Message({ data: 43 });
await publisher.publish(publishedMessage);
const takenMessage = await subscription.take();

publisher.fini(node);
subscription.fini(node);
rcl.shutdown(context);
node.fini();
nodeOptions.fini();
context.fini();
initOptions.fini();
```

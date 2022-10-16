import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import user from "./user";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  types: schemaTypes.concat([user]),
});

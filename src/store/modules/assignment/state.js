import { INITIAL_ACTION_STATE_NEW } from "../../../helper/constants";

export default {
  list: {},
  actions: {
    getByProgram: { ...INITIAL_ACTION_STATE_NEW },
    create: { ...INITIAL_ACTION_STATE_NEW },
    update: { ...INITIAL_ACTION_STATE_NEW },
    delete: { ...INITIAL_ACTION_STATE_NEW },
  },
};

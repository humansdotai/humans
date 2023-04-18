local default = import 'default.jsonnet';

default {
  'humans_9000-1'+: {
    config+: {
      consensus+: {
        timeout_commit: '5s',
      },
    },
  },
}

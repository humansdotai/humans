local config = import 'default.jsonnet';

config {
  'humans_9000-1'+: {
    'app-config'+: {
      'minimum-gas-prices': '100000000000aheart',
    },
    genesis+: {
      app_state+: {
        feemarket+: {
          params+: {
            base_fee:: super.base_fee,
          },
        },
      },
    },
  },
}

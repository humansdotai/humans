local config = import 'default.jsonnet';

config {
  'humans_9000-1'+: {
    validators: super.validators[0:1] + [{
      name: 'fullnode',
    }],
  },
}

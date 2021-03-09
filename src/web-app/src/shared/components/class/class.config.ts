import * as _ from 'lodash';
export const Direction = {
  scss: {
    left: '$default-direction',
    right: '$opposite-direction',
    float: {
      left: '$default-float',
      right: '$opposite-float'
    },
    short: {
      left: '$default-direction-short',
      right: '$opposite-direction-short'
    }
  },
  less: {
    left: '',
    right: ''
  }
};

export const Font = {
  range: _.range(9, 25, 2),
  prefix: '$font-size-',
  list: ['xsmall', 'small', 'normal', 'lead', 'medium', 'large', 'xlarge', 'xxlarge'],
  scss: '$',
  less: '@'
};

export const Box = {
  range: _.range(0, 30, 5),
  margin: {
    base: {
      prefix: '.m-'
    },
    left: {
      prefix: '.m-l-'
    },
    right: {
      prefix: '.m-r-'
    },
    top: {
      prefix: '.m-t-'
    },
    bottom: {
      prefix: '.m-b-'
    }
  },
  padding: {
    base: {
      prefix: '.p-'
    },
    left: {
      prefix: '.p-l-'
    },
    right: {
      prefix: '.p-r-'
    },
    top: {
      prefix: '.p-t-'
    },
    bottom: {
      prefix: '.p-b-'
    }
  },
  gap: {
    base: {
      prefix: '.g-'
    },
    row: {
      prefix: '.g-r-'
    },
    column: {
      prefix: '.g-c-'
    }
  },
  text: {
    center: {
      prefix: `.t-a-c`
    },
    left: {
      prefix: `.t-a-l`
    },
    right: {
      prefix: `.t-a-r`
    },
    capitalize: {
      prefix: `.t-w-cap`,
      or: '.t-w-c'
    },
    uppercase: {
      prefix: `.t-w-u`
    },
    lowercase: {
      prefix: `.t-w-l`
    }
  },
  layout: {
    flex: {
      column: {
        prefix: `.flex-column`,
        reverse: `.flex-column-reverse`
      },
      row: {
        prefix: `.flex-row`,
        reverse: `.flex-row-reverse`
      }
    }
  }
};

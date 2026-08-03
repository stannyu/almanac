/**
 * Reusable helper utilities for the Almanac site.
 * Import functions individually or the full module as needed.
 */

/**
 * Capitalizes the first character of a string.
 * @param {string} value
 * @returns {string}
 */
export function capitalize(value) {
  if (typeof value !== 'string' || value.length === 0) {
    return '';
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Converts a string to a URL-friendly slug.
 * @param {string} value
 * @returns {string}
 */
export function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-');
}

/**
 * Formats a date into a readable string.
 * @param {Date|string|number} date
 * @param {string} [locale='en-US']
 * @param {Object} [options]
 * @returns {string}
 */
export function formatDate(date, locale = 'en-US', options = {}) {
  const parsedDate = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(parsedDate.getTime())) {
    return '';
  }
  return parsedDate.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

/**
 * Creates a debounced version of a function.
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(fn, delay = 200) {
  let timer;
  return function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Creates a throttled version of a function.
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function throttle(fn, delay = 200) {
  let lastCall = 0;
  return function throttled(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

/**
 * Performs a deep clone of arrays and plain objects.
 * @param {any} value
 * @returns {any}
 */
export function deepClone(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  return Object.keys(value).reduce((result, key) => {
    result[key] = deepClone(value[key]);
    return result;
  }, {});
}

/**
 * Gets a random integer between min and max, inclusive.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randomInt(min, max) {
  const parsedMin = Number(min);
  const parsedMax = Number(max);
  if (Number.isNaN(parsedMin) || Number.isNaN(parsedMax)) {
    return 0;
  }
  return Math.floor(Math.random() * (parsedMax - parsedMin + 1)) + parsedMin;
}

export default {
  capitalize,
  slugify,
  formatDate,
  debounce,
  throttle,
  deepClone,
  randomInt,
};

// @ts-check

// ========================================
// Helper Functions

/**
 * Applies a function to each element of a functor using the `map` method.
 *
 * @template T, U
 * @param {function(T): U} f - The function to apply to each element of the functor.
 * @param {Functor<T>} functor - The functor to map over.
 * @returns {Functor<U>} - A new functor with the transformed elements.
 */

/**
 * @template T
 * @typedef {Array<T>|Iterable<T>} Functor<T> - A functor representing a collection of elements.
 */
const map = f => functor => functor.map(f);

// ========================================
/**
 * Array of notification data.
 * @typedef {Object} Message
 *
 * @property {string} username - The username associated with the notification.
 * @property {string} message - The notification message.
 * @property {number} date - The date of the notification (in Unix timestamp format).
 * @property {string} displayName - The display name of the user associated with the notification.
 * @property {number} id - The unique identifier of the notification.
 * @property {boolean} read - Indicates whether the notification has been read or not.
 * @property {string} sourceId - The identifier of the source of the notification.
 * @property {string} sourceType - The type of the source of the notification.
 */

/**
 * Notification array
 * @type {Array<Message>}
 */
const notificationData = [
  {
    username: 'sherlock',
    message: 'Watson. Come at once if convenient.',
    date: -1461735479,
    displayName: 'Sherlock Homes',
    id: 221,
    read: false,
    sourceId: 'note-to-watson-1895',
    sourceType: 'note',
  },
  {
    username: 'sherlock',
    message: 'If not convenient, come all the same.',
    date: -1461735359,
    displayName: 'Sherlock Holmes',
    id: 221,
    read: false,
    sourceId: 'note‐to‐watson‐1895',
    sourceType: 'note',
  },
];

/**
 * Returns a new object with a modified property value based on a transformation function.
 *
 * @param {string} getKey - The key of the property to retrieve from the input object.
 * @param {string} setKey - The key of the property to set in the returned object.
 * @param {Function} transform - The transformation function to apply to the property value.
 * @param {Object} obj - The input object.
 * @returns {Object} - A new object with the modified property.
 */
const getSet = (getKey, setKey, transform) => obj => ({
  ...obj,
  [setKey]: transform(obj[getKey]),
});

/**
 * Returns a new object with an additional property representing a readable date.
 *
 * @param {string} getKey - The key of the property containing the date value in the input object.
 * @param {string} setKey - The key of the property to set in the returned object for the readable date.
 * @param {Function} transform - The transformation function to apply to the date value.
 * @param {Object} obj - The input object.
 * @returns {Object} - A new object with the additional property representing the readable date.
 */
const addReadableDate = getSet('date', 'readableDate', t =>
  new Date(t * 1000).toGMTString(),
);

/**
 * Returns a new object with a sanitized message property.
 *
 * @param {string} getKey - The key of the property containing the message in the input object.
 * @param {string} setKey - The key of the property to set in the returned object for the sanitized message.
 * @param {Function} transform - The transformation function to apply to the message value for sanitization.
 * @param {Object} obj - The input object.
 * @returns {Object} - A new object with the sanitized message property.
 */
const sanitizeMessage = getSet('message', 'message', msg =>
  msg.replace(/</g, '&lt;'),
);

/**
 * Returns a new object with a link to the sender's profile.
 *
 * @param {string} getKey - The key of the property containing the username in the input object.
 * @param {string} setKey - The key of the property to set in the returned object for the link to the sender.
 * @param {Function} transform - The transformation function to apply to the username value to build the link.
 * @param {Object} obj - The input object.
 * @returns {Object} - A new object with the link to the sender's profile.
 */
const buildLinkToSender = getSet(
  'username',
  'sender',
  u => `https://example.com/users/${u}`,
);

/**
 * Returns a new object with a link to the source of the notification.
 *
 * @param {Object} notification - The input object representing the notification.
 * @returns {Object} - A new object with the link to the source of the notification.
 */
const buildLinkToSource = notification => ({
  ...notification,
  source: `https://example.com/${notification.sourceType}/${notification.sourceId}`,
});

/**
 * The URL prefix for icons in the example.com website.
 * @type {string}
 */
const urlPrefix = 'https://example.com/assets/icons/';

/**
 * The suffix for small icons in the example.com website.
 * @type {string}
 */
const iconSuffix = '-small.svg';

/**
 * Returns a new object with an additional property representing the icon URL.
 *
 * @param {string} getKey - The key of the property containing the source type in the input object.
 * @param {string} setKey - The key of the property to set in the returned object for the icon URL.
 * @param {Function} transform - The transformation function to apply to the source type value to build the icon URL.
 * @param {Object} obj - The input object.
 * @returns {Object} - A new object with the additional property representing the icon URL.
 */
const addIcon = getSet(
  'sourceType',
  'icon',
  sourceType => `${urlPrefix}${sourceType}${iconSuffix}`,
);

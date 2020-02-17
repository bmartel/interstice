const { writeFileSync } = require('fs');

const rawData = require('emoji-datasource');

function getEmoji(unified) {
  const chars = unified.split('-');
  const codePoints = chars.map(char => parseInt(char, 16));
  return String.fromCodePoint(...codePoints);
}

const categoryKeys = {
  'Smileys & Emotion': 'smileys',
  'People & Body': 'smileys',
  'Animals & Nature': 'animals',
  'Food & Drink': 'food',
  Activities: 'activities',
  'Travel & Places': 'travel',
  Objects: 'objects',
  Symbols: 'symbols',
  Flags: 'flags',
  'Skin Tones': 'skinTones',
};

const smileysCount = rawData.filter(e => e.category === 'Smileys & Emotion').length;
rawData.filter(e => e.category === 'People & Body').forEach(e => (e.sort_order += smileysCount));

const categories = [];

rawData.sort((e1, e2) => e1.sort_order - e2.sort_order);

const newEmojiData = rawData.map(emojiItem => {
  let categoryIndex = categories.indexOf(emojiItem.category);
  if (categoryIndex < 0) {
    categories.push(emojiItem.category);
    categoryIndex = categories.length - 1;
  }

  const newData = {
    n: emojiItem.short_names,
    e: getEmoji(emojiItem.unified),
    c: categoryIndex,
    ver: emojiItem.added_in,
  };

  if (emojiItem.skin_variations) {
    newData.v = {};
    Object.keys(emojiItem.skin_variations).forEach(variation => {
      newData.v[variation] = {
        k: `${emojiItem.short_names[0]}-${variation}`,
        n: emojiItem.short_names[0],
        e: getEmoji(emojiItem.skin_variations[variation].unified),
      };
    });
  }

  return newData;
});

writeFileSync(
  'src/data.js',
  `export const categories = ${JSON.stringify(
    categories.map(category => categoryKeys[category]),
  )}; export default ${JSON.stringify(newEmojiData)};`,
);

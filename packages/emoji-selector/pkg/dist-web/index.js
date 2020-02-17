import { LitElement, css, html } from 'lit-element';

var emojis = [{
  "n": ["earth_africa"],
  "e": "🌍",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["grapes"],
  "e": "🍇",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["jack_o_lantern"],
  "e": "🎃",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["checkered_flag"],
  "e": "🏁",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["atm"],
  "e": "🏧",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["skin-tone-2"],
  "e": "🏻",
  "c": 5,
  "ver": "2.0"
}, {
  "n": ["monkey_face"],
  "e": "🐵",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["eyeglasses"],
  "e": "👓",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["grinning"],
  "e": "😀",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["earth_americas"],
  "e": "🌎",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["melon"],
  "e": "🍈",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["christmas_tree"],
  "e": "🎄",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["skin-tone-3"],
  "e": "🏼",
  "c": 5,
  "ver": "2.0"
}, {
  "n": ["monkey"],
  "e": "🐒",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["dark_sunglasses"],
  "e": "🕶️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["smiley"],
  "e": "😃",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["triangular_flag_on_post"],
  "e": "🚩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["put_litter_in_its_place"],
  "e": "🚮",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["earth_asia"],
  "e": "🌏",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["watermelon"],
  "e": "🍉",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["fireworks"],
  "e": "🎆",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["crossed_flags"],
  "e": "🎌",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["skin-tone-4"],
  "e": "🏽",
  "c": 5,
  "ver": "2.0"
}, {
  "n": ["smile"],
  "e": "😄",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["potable_water"],
  "e": "🚰",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["goggles"],
  "e": "🥽",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["gorilla"],
  "e": "🦍",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["globe_with_meridians"],
  "e": "🌐",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["tangerine"],
  "e": "🍊",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["sparkler"],
  "e": "🎇",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["waving_black_flag"],
  "e": "🏴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["skin-tone-5"],
  "e": "🏾",
  "c": 5,
  "ver": "2.0"
}, {
  "n": ["grin"],
  "e": "😁",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["lab_coat"],
  "e": "🥼",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["orangutan"],
  "e": "🦧",
  "c": 6,
  "ver": "12.1"
}, {
  "n": ["wheelchair"],
  "e": "♿",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["lemon"],
  "e": "🍋",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["waving_white_flag"],
  "e": "🏳️",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["skin-tone-6"],
  "e": "🏿",
  "c": 5,
  "ver": "2.0"
}, {
  "n": ["dog"],
  "e": "🐶",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["world_map"],
  "e": "🗺️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["laughing", "satisfied"],
  "e": "😆",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mens"],
  "e": "🚹",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["safety_vest"],
  "e": "🦺",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["firecracker"],
  "e": "🧨",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["banana"],
  "e": "🍌",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["rainbow-flag"],
  "e": "🏳️‍🌈",
  "c": 3,
  "ver": "4.0"
}, {
  "n": ["dog2"],
  "e": "🐕",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["necktie"],
  "e": "👔",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["japan"],
  "e": "🗾",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["sweat_smile"],
  "e": "😅",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["womens"],
  "e": "🚺",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["sparkles"],
  "e": "✨",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["pineapple"],
  "e": "🍍",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["balloon"],
  "e": "🎈",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["pirate_flag"],
  "e": "🏴‍☠️",
  "c": 3,
  "ver": "11.0"
}, {
  "n": ["shirt", "tshirt"],
  "e": "👕",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["restroom"],
  "e": "🚻",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["rolling_on_the_floor_laughing"],
  "e": "🤣",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["guide_dog"],
  "e": "🦮",
  "c": 6,
  "ver": "12.1"
}, {
  "n": ["compass"],
  "e": "🧭",
  "c": 0,
  "ver": "11.0"
}, {
  "n": ["flag-ac"],
  "e": "🇦🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["tada"],
  "e": "🎉",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["snow_capped_mountain"],
  "e": "🏔️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["service_dog"],
  "e": "🐕‍🦺",
  "c": 6,
  "ver": "12.1"
}, {
  "n": ["jeans"],
  "e": "👖",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["joy"],
  "e": "😂",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["baby_symbol"],
  "e": "🚼",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["mango"],
  "e": "🥭",
  "c": 1,
  "ver": "11.0"
}, {
  "n": ["flag-ad"],
  "e": "🇦🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["apple"],
  "e": "🍎",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["confetti_ball"],
  "e": "🎊",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["poodle"],
  "e": "🐩",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["slightly_smiling_face"],
  "e": "🙂",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["wc"],
  "e": "🚾",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["scarf"],
  "e": "🧣",
  "c": 7,
  "ver": "5.0"
}, {
  "n": ["mountain"],
  "e": "⛰️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-ae"],
  "e": "🇦🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["volcano"],
  "e": "🌋",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["green_apple"],
  "e": "🍏",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["tanabata_tree"],
  "e": "🎋",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["wolf"],
  "e": "🐺",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["upside_down_face"],
  "e": "🙃",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["passport_control"],
  "e": "🛂",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["gloves"],
  "e": "🧤",
  "c": 7,
  "ver": "5.0"
}, {
  "n": ["flag-af"],
  "e": "🇦🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["pear"],
  "e": "🍐",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["bamboo"],
  "e": "🎍",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["mount_fuji"],
  "e": "🗻",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["wink"],
  "e": "😉",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["customs"],
  "e": "🛃",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["fox_face"],
  "e": "🦊",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["coat"],
  "e": "🧥",
  "c": 7,
  "ver": "5.0"
}, {
  "n": ["flag-ag"],
  "e": "🇦🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["peach"],
  "e": "🍑",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["dolls"],
  "e": "🎎",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["camping"],
  "e": "🏕️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["blush"],
  "e": "😊",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["baggage_claim"],
  "e": "🛄",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["raccoon"],
  "e": "🦝",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["socks"],
  "e": "🧦",
  "c": 7,
  "ver": "5.0"
}, {
  "n": ["flag-ai"],
  "e": "🇦🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cherries"],
  "e": "🍒",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["flags"],
  "e": "🎏",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["beach_with_umbrella"],
  "e": "🏖️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["cat"],
  "e": "🐱",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["dress"],
  "e": "👗",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["innocent"],
  "e": "😇",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["left_luggage"],
  "e": "🛅",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-al"],
  "e": "🇦🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["strawberry"],
  "e": "🍓",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["wind_chime"],
  "e": "🎐",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["desert"],
  "e": "🏜️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["cat2"],
  "e": "🐈",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["kimono"],
  "e": "👘",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["smiling_face_with_3_hearts"],
  "e": "🥰",
  "c": 8,
  "ver": "11.0"
}, {
  "n": ["warning"],
  "e": "⚠️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-am"],
  "e": "🇦🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rice_scene"],
  "e": "🎑",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["desert_island"],
  "e": "🏝️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["heart_eyes"],
  "e": "😍",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["children_crossing"],
  "e": "🚸",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["kiwifruit"],
  "e": "🥝",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["sari"],
  "e": "🥻",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["lion_face"],
  "e": "🦁",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["flag-ao"],
  "e": "🇦🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["tomato"],
  "e": "🍅",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["national_park"],
  "e": "🏞️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["tiger"],
  "e": "🐯",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["star-struck", "grinning_face_with_star_eyes"],
  "e": "🤩",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["red_envelope"],
  "e": "🧧",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["one-piece_swimsuit"],
  "e": "🩱",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["no_entry"],
  "e": "⛔",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-aq"],
  "e": "🇦🇶",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ribbon"],
  "e": "🎀",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["stadium"],
  "e": "🏟️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["tiger2"],
  "e": "🐅",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["kissing_heart"],
  "e": "😘",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["no_entry_sign"],
  "e": "🚫",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["coconut"],
  "e": "🥥",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["briefs"],
  "e": "🩲",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-ar"],
  "e": "🇦🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["gift"],
  "e": "🎁",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["classical_building"],
  "e": "🏛️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["leopard"],
  "e": "🐆",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["kissing"],
  "e": "😗",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["no_bicycles"],
  "e": "🚳",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["avocado"],
  "e": "🥑",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["shorts"],
  "e": "🩳",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-as"],
  "e": "🇦🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["eggplant"],
  "e": "🍆",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["reminder_ribbon"],
  "e": "🎗️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["building_construction"],
  "e": "🏗️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["horse"],
  "e": "🐴",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["bikini"],
  "e": "👙",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["no_smoking"],
  "e": "🚭",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["relaxed"],
  "e": "☺️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["flag-at"],
  "e": "🇦🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["admission_tickets"],
  "e": "🎟️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["racehorse"],
  "e": "🐎",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["womans_clothes"],
  "e": "👚",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["kissing_closed_eyes"],
  "e": "😚",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["do_not_litter"],
  "e": "🚯",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["potato"],
  "e": "🥔",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["bricks"],
  "e": "🧱",
  "c": 0,
  "ver": "11.0"
}, {
  "n": ["flag-au"],
  "e": "🇦🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ticket"],
  "e": "🎫",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["house_buildings"],
  "e": "🏘️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["purse"],
  "e": "👛",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["kissing_smiling_eyes"],
  "e": "😙",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["non-potable_water"],
  "e": "🚱",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["carrot"],
  "e": "🥕",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["unicorn_face"],
  "e": "🦄",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["flag-aw"],
  "e": "🇦🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["corn"],
  "e": "🌽",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["medal"],
  "e": "🎖️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["derelict_house_building"],
  "e": "🏚️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["handbag"],
  "e": "👜",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["yum"],
  "e": "😋",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["no_pedestrians"],
  "e": "🚷",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["zebra_face"],
  "e": "🦓",
  "c": 6,
  "ver": "5.0"
}, {
  "n": ["flag-ax"],
  "e": "🇦🇽",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["hot_pepper"],
  "e": "🌶️",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["trophy"],
  "e": "🏆",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["house"],
  "e": "🏠",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pouch"],
  "e": "👝",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["no_mobile_phones"],
  "e": "📵",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["stuck_out_tongue"],
  "e": "😛",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["deer"],
  "e": "🦌",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["flag-az"],
  "e": "🇦🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sports_medal"],
  "e": "🏅",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["house_with_garden"],
  "e": "🏡",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["cow"],
  "e": "🐮",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["underage"],
  "e": "🔞",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["stuck_out_tongue_winking_eye"],
  "e": "😜",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["shopping_bags"],
  "e": "🛍️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["cucumber"],
  "e": "🥒",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["flag-ba"],
  "e": "🇧🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["school_satchel"],
  "e": "🎒",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["office"],
  "e": "🏢",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["ox"],
  "e": "🐂",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["zany_face", "grinning_face_with_one_large_and_one_small_eye"],
  "e": "🤪",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["first_place_medal"],
  "e": "🥇",
  "c": 2,
  "ver": "4.0"
}, {
  "n": ["leafy_green"],
  "e": "🥬",
  "c": 1,
  "ver": "11.0"
}, {
  "n": ["radioactive_sign"],
  "e": "☢️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bb"],
  "e": "🇧🇧",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["post_office"],
  "e": "🏣",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["water_buffalo"],
  "e": "🐃",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["mans_shoe", "shoe"],
  "e": "👞",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["stuck_out_tongue_closed_eyes"],
  "e": "😝",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["second_place_medal"],
  "e": "🥈",
  "c": 2,
  "ver": "4.0"
}, {
  "n": ["broccoli"],
  "e": "🥦",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["biohazard_sign"],
  "e": "☣️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bd"],
  "e": "🇧🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["european_post_office"],
  "e": "🏤",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["cow2"],
  "e": "🐄",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["athletic_shoe"],
  "e": "👟",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["money_mouth_face"],
  "e": "🤑",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["third_place_medal"],
  "e": "🥉",
  "c": 2,
  "ver": "4.0"
}, {
  "n": ["garlic"],
  "e": "🧄",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["arrow_up"],
  "e": "⬆️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-be"],
  "e": "🇧🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["hospital"],
  "e": "🏥",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pig"],
  "e": "🐷",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["hugging_face"],
  "e": "🤗",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["hiking_boot"],
  "e": "🥾",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["onion"],
  "e": "🧅",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["arrow_upper_right"],
  "e": "↗️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["soccer"],
  "e": "⚽",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-bf"],
  "e": "🇧🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["mushroom"],
  "e": "🍄",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["bank"],
  "e": "🏦",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pig2"],
  "e": "🐖",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["face_with_hand_over_mouth", "smiling_face_with_smiling_eyes_and_hand_covering_mouth"],
  "e": "🤭",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["womans_flat_shoe"],
  "e": "🥿",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["baseball"],
  "e": "⚾",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["arrow_right"],
  "e": "➡️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bg"],
  "e": "🇧🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["hotel"],
  "e": "🏨",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["boar"],
  "e": "🐗",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["high_heel"],
  "e": "👠",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["shushing_face", "face_with_finger_covering_closed_lips"],
  "e": "🤫",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["softball"],
  "e": "🥎",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["peanuts"],
  "e": "🥜",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["arrow_lower_right"],
  "e": "↘️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bh"],
  "e": "🇧🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["chestnut"],
  "e": "🌰",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["basketball"],
  "e": "🏀",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["love_hotel"],
  "e": "🏩",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pig_nose"],
  "e": "🐽",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["sandal"],
  "e": "👡",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["thinking_face"],
  "e": "🤔",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["arrow_down"],
  "e": "⬇️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bi"],
  "e": "🇧🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["bread"],
  "e": "🍞",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["volleyball"],
  "e": "🏐",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["convenience_store"],
  "e": "🏪",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["ram"],
  "e": "🐏",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["zipper_mouth_face"],
  "e": "🤐",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["ballet_shoes"],
  "e": "🩰",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["arrow_lower_left"],
  "e": "↙️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bj"],
  "e": "🇧🇯",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["football"],
  "e": "🏈",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["school"],
  "e": "🏫",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["sheep"],
  "e": "🐑",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["boot"],
  "e": "👢",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"],
  "e": "🤨",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["croissant"],
  "e": "🥐",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["arrow_left"],
  "e": "⬅️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bl"],
  "e": "🇧🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rugby_football"],
  "e": "🏉",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["department_store"],
  "e": "🏬",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["goat"],
  "e": "🐐",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["crown"],
  "e": "👑",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["neutral_face"],
  "e": "😐",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["baguette_bread"],
  "e": "🥖",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["arrow_upper_left"],
  "e": "↖️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bm"],
  "e": "🇧🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["tennis"],
  "e": "🎾",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["factory"],
  "e": "🏭",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["dromedary_camel"],
  "e": "🐪",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["womans_hat"],
  "e": "👒",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["expressionless"],
  "e": "😑",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["pretzel"],
  "e": "🥨",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["arrow_up_down"],
  "e": "↕️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bn"],
  "e": "🇧🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["tophat"],
  "e": "🎩",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["japanese_castle"],
  "e": "🏯",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["camel"],
  "e": "🐫",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["no_mouth"],
  "e": "😶",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["flying_disc"],
  "e": "🥏",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["bagel"],
  "e": "🥯",
  "c": 1,
  "ver": "11.0"
}, {
  "n": ["left_right_arrow"],
  "e": "↔️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bo"],
  "e": "🇧🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["mortar_board"],
  "e": "🎓",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["bowling"],
  "e": "🎳",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["european_castle"],
  "e": "🏰",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["smirk"],
  "e": "😏",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["pancakes"],
  "e": "🥞",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["llama"],
  "e": "🦙",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["leftwards_arrow_with_hook"],
  "e": "↩️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bq"],
  "e": "🇧🇶",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cricket_bat_and_ball"],
  "e": "🏏",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["wedding"],
  "e": "💒",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["unamused"],
  "e": "😒",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["giraffe_face"],
  "e": "🦒",
  "c": 6,
  "ver": "5.0"
}, {
  "n": ["waffle"],
  "e": "🧇",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["billed_cap"],
  "e": "🧢",
  "c": 7,
  "ver": "5.0"
}, {
  "n": ["arrow_right_hook"],
  "e": "↪️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-br"],
  "e": "🇧🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["field_hockey_stick_and_ball"],
  "e": "🏑",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["elephant"],
  "e": "🐘",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["tokyo_tower"],
  "e": "🗼",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["face_with_rolling_eyes"],
  "e": "🙄",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["cheese_wedge"],
  "e": "🧀",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["helmet_with_white_cross"],
  "e": "⛑️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["arrow_heading_up"],
  "e": "⤴️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bs"],
  "e": "🇧🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["meat_on_bone"],
  "e": "🍖",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["ice_hockey_stick_and_puck"],
  "e": "🏒",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["prayer_beads"],
  "e": "📿",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["statue_of_liberty"],
  "e": "🗽",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["grimacing"],
  "e": "😬",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["rhinoceros"],
  "e": "🦏",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["arrow_heading_down"],
  "e": "⤵️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-bt"],
  "e": "🇧🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["poultry_leg"],
  "e": "🍗",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["lipstick"],
  "e": "💄",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["arrows_clockwise"],
  "e": "🔃",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["lying_face"],
  "e": "🤥",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["lacrosse"],
  "e": "🥍",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["hippopotamus"],
  "e": "🦛",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["church"],
  "e": "⛪",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-bv"],
  "e": "🇧🇻",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["table_tennis_paddle_and_ball"],
  "e": "🏓",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["mouse"],
  "e": "🐭",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["ring"],
  "e": "💍",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["arrows_counterclockwise"],
  "e": "🔄",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["mosque"],
  "e": "🕌",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["relieved"],
  "e": "😌",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["cut_of_meat"],
  "e": "🥩",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["flag-bw"],
  "e": "🇧🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["badminton_racquet_and_shuttlecock"],
  "e": "🏸",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["mouse2"],
  "e": "🐁",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["gem"],
  "e": "💎",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["back"],
  "e": "🔙",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["pensive"],
  "e": "😔",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["hindu_temple"],
  "e": "🛕",
  "c": 0,
  "ver": "12.1"
}, {
  "n": ["bacon"],
  "e": "🥓",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["flag-by"],
  "e": "🇧🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["hamburger"],
  "e": "🍔",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["rat"],
  "e": "🐀",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["mute"],
  "e": "🔇",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["end"],
  "e": "🔚",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["synagogue"],
  "e": "🕍",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["sleepy"],
  "e": "😪",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["boxing_glove"],
  "e": "🥊",
  "c": 2,
  "ver": "4.0"
}, {
  "n": ["flag-bz"],
  "e": "🇧🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["fries"],
  "e": "🍟",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["hamster"],
  "e": "🐹",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["speaker"],
  "e": "🔈",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["on"],
  "e": "🔛",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["drooling_face"],
  "e": "🤤",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["martial_arts_uniform"],
  "e": "🥋",
  "c": 2,
  "ver": "4.0"
}, {
  "n": ["shinto_shrine"],
  "e": "⛩️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-ca"],
  "e": "🇨🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["pizza"],
  "e": "🍕",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["rabbit"],
  "e": "🐰",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["sound"],
  "e": "🔉",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["soon"],
  "e": "🔜",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["kaaba"],
  "e": "🕋",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["sleeping"],
  "e": "😴",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["goal_net"],
  "e": "🥅",
  "c": 2,
  "ver": "4.0"
}, {
  "n": ["flag-cc"],
  "e": "🇨🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["hotdog"],
  "e": "🌭",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["rabbit2"],
  "e": "🐇",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["loud_sound"],
  "e": "🔊",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["top"],
  "e": "🔝",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["mask"],
  "e": "😷",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["fountain"],
  "e": "⛲",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["golf"],
  "e": "⛳",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-cd"],
  "e": "🇨🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["chipmunk"],
  "e": "🐿️",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["loudspeaker"],
  "e": "📢",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["place_of_worship"],
  "e": "🛐",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["face_with_thermometer"],
  "e": "🤒",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["sandwich"],
  "e": "🥪",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["ice_skate"],
  "e": "⛸️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["tent"],
  "e": "⛺",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-cf"],
  "e": "🇨🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["foggy"],
  "e": "🌁",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["taco"],
  "e": "🌮",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["fishing_pole_and_fish"],
  "e": "🎣",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["mega"],
  "e": "📣",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["face_with_head_bandage"],
  "e": "🤕",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["hedgehog"],
  "e": "🦔",
  "c": 6,
  "ver": "5.0"
}, {
  "n": ["atom_symbol"],
  "e": "⚛️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cg"],
  "e": "🇨🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["night_with_stars"],
  "e": "🌃",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["burrito"],
  "e": "🌯",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["postal_horn"],
  "e": "📯",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["om_symbol"],
  "e": "🕉️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["nauseated_face"],
  "e": "🤢",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["diving_mask"],
  "e": "🤿",
  "c": 2,
  "ver": "12.1"
}, {
  "n": ["bat"],
  "e": "🦇",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["flag-ch"],
  "e": "🇨🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["running_shirt_with_sash"],
  "e": "🎽",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["cityscape"],
  "e": "🏙️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["bear"],
  "e": "🐻",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["bell"],
  "e": "🔔",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["face_vomiting", "face_with_open_mouth_vomiting"],
  "e": "🤮",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["stuffed_flatbread"],
  "e": "🥙",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["star_of_david"],
  "e": "✡️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ci"],
  "e": "🇨🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sunrise_over_mountains"],
  "e": "🌄",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["ski"],
  "e": "🎿",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["koala"],
  "e": "🐨",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["no_bell"],
  "e": "🔕",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["sneezing_face"],
  "e": "🤧",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["falafel"],
  "e": "🧆",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["wheel_of_dharma"],
  "e": "☸️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ck"],
  "e": "🇨🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sunrise"],
  "e": "🌅",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["musical_score"],
  "e": "🎼",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["panda_face"],
  "e": "🐼",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["sled"],
  "e": "🛷",
  "c": 2,
  "ver": "5.0"
}, {
  "n": ["egg"],
  "e": "🥚",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["hot_face"],
  "e": "🥵",
  "c": 8,
  "ver": "11.0"
}, {
  "n": ["yin_yang"],
  "e": "☯️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cl"],
  "e": "🇨🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["city_sunset"],
  "e": "🌆",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["fried_egg", "cooking"],
  "e": "🍳",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["musical_note"],
  "e": "🎵",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["curling_stone"],
  "e": "🥌",
  "c": 2,
  "ver": "5.0"
}, {
  "n": ["cold_face"],
  "e": "🥶",
  "c": 8,
  "ver": "11.0"
}, {
  "n": ["sloth"],
  "e": "🦥",
  "c": 6,
  "ver": "12.1"
}, {
  "n": ["latin_cross"],
  "e": "✝️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cm"],
  "e": "🇨🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["city_sunrise"],
  "e": "🌇",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["dart"],
  "e": "🎯",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["notes"],
  "e": "🎶",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["shallow_pan_of_food"],
  "e": "🥘",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["woozy_face"],
  "e": "🥴",
  "c": 8,
  "ver": "11.0"
}, {
  "n": ["otter"],
  "e": "🦦",
  "c": 6,
  "ver": "12.1"
}, {
  "n": ["orthodox_cross"],
  "e": "☦️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["cn", "flag-cn"],
  "e": "🇨🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["bridge_at_night"],
  "e": "🌉",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["stew"],
  "e": "🍲",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["studio_microphone"],
  "e": "🎙️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["dizzy_face"],
  "e": "😵",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["skunk"],
  "e": "🦨",
  "c": 6,
  "ver": "12.1"
}, {
  "n": ["yo-yo"],
  "e": "🪀",
  "c": 2,
  "ver": "12.1"
}, {
  "n": ["star_and_crescent"],
  "e": "☪️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-co"],
  "e": "🇨🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["level_slider"],
  "e": "🎚️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["exploding_head", "shocked_face_with_exploding_head"],
  "e": "🤯",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["bowl_with_spoon"],
  "e": "🥣",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["kangaroo"],
  "e": "🦘",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["kite"],
  "e": "🪁",
  "c": 2,
  "ver": "12.1"
}, {
  "n": ["peace_symbol"],
  "e": "☮️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["hotsprings"],
  "e": "♨️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-cp"],
  "e": "🇨🇵",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["control_knobs"],
  "e": "🎛️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["carousel_horse"],
  "e": "🎠",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["8ball"],
  "e": "🎱",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["menorah_with_nine_branches"],
  "e": "🕎",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["face_with_cowboy_hat"],
  "e": "🤠",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["green_salad"],
  "e": "🥗",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["badger"],
  "e": "🦡",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["flag-cr"],
  "e": "🇨🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["popcorn"],
  "e": "🍿",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["ferris_wheel"],
  "e": "🎡",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["microphone"],
  "e": "🎤",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["feet", "paw_prints"],
  "e": "🐾",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["crystal_ball"],
  "e": "🔮",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["six_pointed_star"],
  "e": "🔯",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["partying_face"],
  "e": "🥳",
  "c": 8,
  "ver": "11.0"
}, {
  "n": ["flag-cu"],
  "e": "🇨🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["roller_coaster"],
  "e": "🎢",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["headphones"],
  "e": "🎧",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["sunglasses"],
  "e": "😎",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["turkey"],
  "e": "🦃",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["butter"],
  "e": "🧈",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["nazar_amulet"],
  "e": "🧿",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["aries"],
  "e": "♈",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cv"],
  "e": "🇨🇻",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["video_game"],
  "e": "🎮",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["chicken"],
  "e": "🐔",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["barber"],
  "e": "💈",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["radio"],
  "e": "📻",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["nerd_face"],
  "e": "🤓",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["salt"],
  "e": "🧂",
  "c": 1,
  "ver": "11.0"
}, {
  "n": ["taurus"],
  "e": "♉",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cw"],
  "e": "🇨🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["circus_tent"],
  "e": "🎪",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["saxophone"],
  "e": "🎷",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["rooster"],
  "e": "🐓",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["joystick"],
  "e": "🕹️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["canned_food"],
  "e": "🥫",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["face_with_monocle"],
  "e": "🧐",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["gemini"],
  "e": "♊",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cx"],
  "e": "🇨🇽",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["bento"],
  "e": "🍱",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["slot_machine"],
  "e": "🎰",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["guitar"],
  "e": "🎸",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["hatching_chick"],
  "e": "🐣",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["confused"],
  "e": "😕",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["steam_locomotive"],
  "e": "🚂",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["cancer"],
  "e": "♋",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cy"],
  "e": "🇨🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rice_cracker"],
  "e": "🍘",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["game_die"],
  "e": "🎲",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["musical_keyboard"],
  "e": "🎹",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["baby_chick"],
  "e": "🐤",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["worried"],
  "e": "😟",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["railway_car"],
  "e": "🚃",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["leo"],
  "e": "♌",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-cz"],
  "e": "🇨🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rice_ball"],
  "e": "🍙",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["trumpet"],
  "e": "🎺",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["hatched_chick"],
  "e": "🐥",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["slightly_frowning_face"],
  "e": "🙁",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["bullettrain_side"],
  "e": "🚄",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["jigsaw"],
  "e": "🧩",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["virgo"],
  "e": "♍",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["de", "flag-de"],
  "e": "🇩🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rice"],
  "e": "🍚",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["violin"],
  "e": "🎻",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["bird"],
  "e": "🐦",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["bullettrain_front"],
  "e": "🚅",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["teddy_bear"],
  "e": "🧸",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["white_frowning_face"],
  "e": "☹️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["libra"],
  "e": "♎",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-dg"],
  "e": "🇩🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["curry"],
  "e": "🍛",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["penguin"],
  "e": "🐧",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["open_mouth"],
  "e": "😮",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["train2"],
  "e": "🚆",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["banjo"],
  "e": "🪕",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["scorpius"],
  "e": "♏",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["spades"],
  "e": "♠️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-dj"],
  "e": "🇩🇯",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ramen"],
  "e": "🍜",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["dove_of_peace"],
  "e": "🕊️",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["hushed"],
  "e": "😯",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["metro"],
  "e": "🚇",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["drum_with_drumsticks"],
  "e": "🥁",
  "c": 7,
  "ver": "4.0"
}, {
  "n": ["sagittarius"],
  "e": "♐",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["hearts"],
  "e": "♥️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-dk"],
  "e": "🇩🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["spaghetti"],
  "e": "🍝",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["iphone"],
  "e": "📱",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["astonished"],
  "e": "😲",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["light_rail"],
  "e": "🚈",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["eagle"],
  "e": "🦅",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["capricorn"],
  "e": "♑",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["diamonds"],
  "e": "♦️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-dm"],
  "e": "🇩🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sweet_potato"],
  "e": "🍠",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["calling"],
  "e": "📲",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flushed"],
  "e": "😳",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["station"],
  "e": "🚉",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["duck"],
  "e": "🦆",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["aquarius"],
  "e": "♒",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clubs"],
  "e": "♣️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-do"],
  "e": "🇩🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["oden"],
  "e": "🍢",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["tram"],
  "e": "🚊",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pleading_face"],
  "e": "🥺",
  "c": 8,
  "ver": "11.0"
}, {
  "n": ["swan"],
  "e": "🦢",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["phone", "telephone"],
  "e": "☎️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["pisces"],
  "e": "♓",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["chess_pawn"],
  "e": "♟️",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["black_joker"],
  "e": "🃏",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-dz"],
  "e": "🇩🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sushi"],
  "e": "🍣",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["telephone_receiver"],
  "e": "📞",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["frowning"],
  "e": "😦",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["monorail"],
  "e": "🚝",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["owl"],
  "e": "🦉",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["ophiuchus"],
  "e": "⛎",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["mahjong"],
  "e": "🀄",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["flag-ea"],
  "e": "🇪🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["fried_shrimp"],
  "e": "🍤",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["pager"],
  "e": "📟",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["twisted_rightwards_arrows"],
  "e": "🔀",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["anguished"],
  "e": "😧",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mountain_railway"],
  "e": "🚞",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flamingo"],
  "e": "🦩",
  "c": 6,
  "ver": "12.1"
}, {
  "n": ["flag-ec"],
  "e": "🇪🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["fish_cake"],
  "e": "🍥",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["flower_playing_cards"],
  "e": "🎴",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["fax"],
  "e": "📠",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["repeat"],
  "e": "🔁",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["fearful"],
  "e": "😨",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["train"],
  "e": "🚋",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["peacock"],
  "e": "🦚",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["flag-ee"],
  "e": "🇪🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["performing_arts"],
  "e": "🎭",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["repeat_one"],
  "e": "🔂",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["battery"],
  "e": "🔋",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["cold_sweat"],
  "e": "😰",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["bus"],
  "e": "🚌",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["moon_cake"],
  "e": "🥮",
  "c": 1,
  "ver": "11.0"
}, {
  "n": ["parrot"],
  "e": "🦜",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["flag-eg"],
  "e": "🇪🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["dango"],
  "e": "🍡",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["frog"],
  "e": "🐸",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["electric_plug"],
  "e": "🔌",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["frame_with_picture"],
  "e": "🖼️",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["disappointed_relieved"],
  "e": "😥",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["oncoming_bus"],
  "e": "🚍",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["arrow_forward"],
  "e": "▶️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-eh"],
  "e": "🇪🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["art"],
  "e": "🎨",
  "c": 2,
  "ver": "2.0"
}, {
  "n": ["crocodile"],
  "e": "🐊",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["computer"],
  "e": "💻",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["cry"],
  "e": "😢",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["trolleybus"],
  "e": "🚎",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["dumpling"],
  "e": "🥟",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["fast_forward"],
  "e": "⏩",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-er"],
  "e": "🇪🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["turtle"],
  "e": "🐢",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["desktop_computer"],
  "e": "🖥️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["sob"],
  "e": "😭",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["minibus"],
  "e": "🚐",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["fortune_cookie"],
  "e": "🥠",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["thread"],
  "e": "🧵",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["black_right_pointing_double_triangle_with_vertical_bar"],
  "e": "⏭️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["es", "flag-es"],
  "e": "🇪🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["printer"],
  "e": "🖨️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["scream"],
  "e": "😱",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["ambulance"],
  "e": "🚑",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["takeout_box"],
  "e": "🥡",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["lizard"],
  "e": "🦎",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["yarn"],
  "e": "🧶",
  "c": 2,
  "ver": "11.0"
}, {
  "n": ["black_right_pointing_triangle_with_double_vertical_bar"],
  "e": "⏯️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-et"],
  "e": "🇪🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["snake"],
  "e": "🐍",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["confounded"],
  "e": "😖",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["fire_engine"],
  "e": "🚒",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["crab"],
  "e": "🦀",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["keyboard"],
  "e": "⌨️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["arrow_backward"],
  "e": "◀️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-eu"],
  "e": "🇪🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["dragon_face"],
  "e": "🐲",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["three_button_mouse"],
  "e": "🖱️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["persevere"],
  "e": "😣",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["police_car"],
  "e": "🚓",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["lobster"],
  "e": "🦞",
  "c": 1,
  "ver": "11.0"
}, {
  "n": ["rewind"],
  "e": "⏪",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-fi"],
  "e": "🇫🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["dragon"],
  "e": "🐉",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["trackball"],
  "e": "🖲️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["disappointed"],
  "e": "😞",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["oncoming_police_car"],
  "e": "🚔",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["shrimp"],
  "e": "🦐",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["black_left_pointing_double_triangle_with_vertical_bar"],
  "e": "⏮️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-fj"],
  "e": "🇫🇯",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["minidisc"],
  "e": "💽",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["arrow_up_small"],
  "e": "🔼",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["sweat"],
  "e": "😓",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["taxi"],
  "e": "🚕",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["squid"],
  "e": "🦑",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["sauropod"],
  "e": "🦕",
  "c": 6,
  "ver": "5.0"
}, {
  "n": ["flag-fk"],
  "e": "🇫🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["floppy_disk"],
  "e": "💾",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["weary"],
  "e": "😩",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["oncoming_taxi"],
  "e": "🚖",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["t-rex"],
  "e": "🦖",
  "c": 6,
  "ver": "5.0"
}, {
  "n": ["oyster"],
  "e": "🦪",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["arrow_double_up"],
  "e": "⏫",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-fm"],
  "e": "🇫🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["icecream"],
  "e": "🍦",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["whale"],
  "e": "🐳",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["cd"],
  "e": "💿",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["arrow_down_small"],
  "e": "🔽",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["tired_face"],
  "e": "😫",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["car", "red_car"],
  "e": "🚗",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-fo"],
  "e": "🇫🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["shaved_ice"],
  "e": "🍧",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["whale2"],
  "e": "🐋",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["dvd"],
  "e": "📀",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["oncoming_automobile"],
  "e": "🚘",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["yawning_face"],
  "e": "🥱",
  "c": 8,
  "ver": "12.1"
}, {
  "n": ["arrow_double_down"],
  "e": "⏬",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["fr", "flag-fr"],
  "e": "🇫🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ice_cream"],
  "e": "🍨",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["dolphin", "flipper"],
  "e": "🐬",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["triumph"],
  "e": "😤",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["blue_car"],
  "e": "🚙",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["abacus"],
  "e": "🧮",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["double_vertical_bar"],
  "e": "⏸️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ga"],
  "e": "🇬🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["doughnut"],
  "e": "🍩",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["movie_camera"],
  "e": "🎥",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["fish"],
  "e": "🐟",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["rage"],
  "e": "😡",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["truck"],
  "e": "🚚",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["black_square_for_stop"],
  "e": "⏹️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["gb", "uk", "flag-gb"],
  "e": "🇬🇧",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cookie"],
  "e": "🍪",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["film_frames"],
  "e": "🎞️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["tropical_fish"],
  "e": "🐠",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["angry"],
  "e": "😠",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["articulated_lorry"],
  "e": "🚛",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["black_circle_for_record"],
  "e": "⏺️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-gd"],
  "e": "🇬🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["birthday"],
  "e": "🎂",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["blowfish"],
  "e": "🐡",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["film_projector"],
  "e": "📽️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["tractor"],
  "e": "🚜",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["face_with_symbols_on_mouth", "serious_face_with_symbols_covering_mouth"],
  "e": "🤬",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["eject"],
  "e": "⏏️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ge"],
  "e": "🇬🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cake"],
  "e": "🍰",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["cinema"],
  "e": "🎦",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clapper"],
  "e": "🎬",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["racing_car"],
  "e": "🏎️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["smiling_imp"],
  "e": "😈",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["shark"],
  "e": "🦈",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["flag-gf"],
  "e": "🇬🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["racing_motorcycle"],
  "e": "🏍️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["octopus"],
  "e": "🐙",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["imp"],
  "e": "👿",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["tv"],
  "e": "📺",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["low_brightness"],
  "e": "🔅",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["cupcake"],
  "e": "🧁",
  "c": 1,
  "ver": "11.0"
}, {
  "n": ["flag-gg"],
  "e": "🇬🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["shell"],
  "e": "🐚",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["skull"],
  "e": "💀",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["camera"],
  "e": "📷",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["high_brightness"],
  "e": "🔆",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["motor_scooter"],
  "e": "🛵",
  "c": 0,
  "ver": "4.0"
}, {
  "n": ["pie"],
  "e": "🥧",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["flag-gh"],
  "e": "🇬🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["chocolate_bar"],
  "e": "🍫",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["snail"],
  "e": "🐌",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["signal_strength"],
  "e": "📶",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["camera_with_flash"],
  "e": "📸",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["manual_wheelchair"],
  "e": "🦽",
  "c": 0,
  "ver": "12.1"
}, {
  "n": ["skull_and_crossbones"],
  "e": "☠️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["flag-gi"],
  "e": "🇬🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["candy"],
  "e": "🍬",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["hankey", "poop", "shit"],
  "e": "💩",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["vibration_mode"],
  "e": "📳",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["video_camera"],
  "e": "📹",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["butterfly"],
  "e": "🦋",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["motorized_wheelchair"],
  "e": "🦼",
  "c": 0,
  "ver": "12.1"
}, {
  "n": ["flag-gl"],
  "e": "🇬🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["lollipop"],
  "e": "🍭",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["bug"],
  "e": "🐛",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["mobile_phone_off"],
  "e": "📴",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["vhs"],
  "e": "📼",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["auto_rickshaw"],
  "e": "🛺",
  "c": 0,
  "ver": "12.1"
}, {
  "n": ["clown_face"],
  "e": "🤡",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["flag-gm"],
  "e": "🇬🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["custard"],
  "e": "🍮",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["ant"],
  "e": "🐜",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["japanese_ogre"],
  "e": "👹",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mag"],
  "e": "🔍",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["bike"],
  "e": "🚲",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["female_sign"],
  "e": "♀️",
  "c": 4,
  "ver": "4.0"
}, {
  "n": ["flag-gn"],
  "e": "🇬🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["honey_pot"],
  "e": "🍯",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["bee", "honeybee"],
  "e": "🐝",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["japanese_goblin"],
  "e": "👺",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mag_right"],
  "e": "🔎",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["scooter"],
  "e": "🛴",
  "c": 0,
  "ver": "4.0"
}, {
  "n": ["male_sign"],
  "e": "♂️",
  "c": 4,
  "ver": "4.0"
}, {
  "n": ["flag-gp"],
  "e": "🇬🇵",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["baby_bottle"],
  "e": "🍼",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["beetle"],
  "e": "🐞",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["ghost"],
  "e": "👻",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["candle"],
  "e": "🕯️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["skateboard"],
  "e": "🛹",
  "c": 0,
  "ver": "11.0"
}, {
  "n": ["medical_symbol", "staff_of_aesculapius"],
  "e": "⚕️",
  "c": 4,
  "ver": "4.0"
}, {
  "n": ["flag-gq"],
  "e": "🇬🇶",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["alien"],
  "e": "👽",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["bulb"],
  "e": "💡",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["busstop"],
  "e": "🚏",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["glass_of_milk"],
  "e": "🥛",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["cricket"],
  "e": "🦗",
  "c": 6,
  "ver": "5.0"
}, {
  "n": ["infinity"],
  "e": "♾️",
  "c": 4,
  "ver": "11.0"
}, {
  "n": ["flag-gr"],
  "e": "🇬🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["space_invader"],
  "e": "👾",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["flashlight"],
  "e": "🔦",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["spider"],
  "e": "🕷️",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["motorway"],
  "e": "🛣️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["coffee"],
  "e": "☕",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["recycle"],
  "e": "♻️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-gs"],
  "e": "🇬🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["tea"],
  "e": "🍵",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["izakaya_lantern", "lantern"],
  "e": "🏮",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["spider_web"],
  "e": "🕸️",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["railway_track"],
  "e": "🛤️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["robot_face"],
  "e": "🤖",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["fleur_de_lis"],
  "e": "⚜️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-gt"],
  "e": "🇬🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sake"],
  "e": "🍶",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["trident"],
  "e": "🔱",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["smiley_cat"],
  "e": "😺",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["oil_drum"],
  "e": "🛢️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["scorpion"],
  "e": "🦂",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["diya_lamp"],
  "e": "🪔",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-gu"],
  "e": "🇬🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["champagne"],
  "e": "🍾",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["notebook_with_decorative_cover"],
  "e": "📔",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["name_badge"],
  "e": "📛",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["smile_cat"],
  "e": "😸",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mosquito"],
  "e": "🦟",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["fuelpump"],
  "e": "⛽",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-gw"],
  "e": "🇬🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["wine_glass"],
  "e": "🍷",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["closed_book"],
  "e": "📕",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["beginner"],
  "e": "🔰",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["joy_cat"],
  "e": "😹",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["rotating_light"],
  "e": "🚨",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["microbe"],
  "e": "🦠",
  "c": 6,
  "ver": "11.0"
}, {
  "n": ["flag-gy"],
  "e": "🇬🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cocktail"],
  "e": "🍸",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["bouquet"],
  "e": "💐",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["book", "open_book"],
  "e": "📖",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["heart_eyes_cat"],
  "e": "😻",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["traffic_light"],
  "e": "🚥",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["o"],
  "e": "⭕",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-hk"],
  "e": "🇭🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cherry_blossom"],
  "e": "🌸",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["tropical_drink"],
  "e": "🍹",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["green_book"],
  "e": "📗",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["smirk_cat"],
  "e": "😼",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["vertical_traffic_light"],
  "e": "🚦",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["white_check_mark"],
  "e": "✅",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-hm"],
  "e": "🇭🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["beer"],
  "e": "🍺",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["white_flower"],
  "e": "💮",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["blue_book"],
  "e": "📘",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["kissing_cat"],
  "e": "😽",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["octagonal_sign"],
  "e": "🛑",
  "c": 0,
  "ver": "4.0"
}, {
  "n": ["ballot_box_with_check"],
  "e": "☑️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-hn"],
  "e": "🇭🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["beers"],
  "e": "🍻",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["rosette"],
  "e": "🏵️",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["orange_book"],
  "e": "📙",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["scream_cat"],
  "e": "🙀",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["construction"],
  "e": "🚧",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["heavy_check_mark"],
  "e": "✔️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-hr"],
  "e": "🇭🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rose"],
  "e": "🌹",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["books"],
  "e": "📚",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["crying_cat_face"],
  "e": "😿",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["clinking_glasses"],
  "e": "🥂",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["anchor"],
  "e": "⚓",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["heavy_multiplication_x"],
  "e": "✖️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ht"],
  "e": "🇭🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["notebook"],
  "e": "📓",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["pouting_cat"],
  "e": "😾",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["wilted_flower"],
  "e": "🥀",
  "c": 6,
  "ver": "4.0"
}, {
  "n": ["tumbler_glass"],
  "e": "🥃",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["boat", "sailboat"],
  "e": "⛵",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["x"],
  "e": "❌",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-hu"],
  "e": "🇭🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["hibiscus"],
  "e": "🌺",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["ledger"],
  "e": "📒",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["see_no_evil"],
  "e": "🙈",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["canoe"],
  "e": "🛶",
  "c": 0,
  "ver": "4.0"
}, {
  "n": ["cup_with_straw"],
  "e": "🥤",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["negative_squared_cross_mark"],
  "e": "❎",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ic"],
  "e": "🇮🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sunflower"],
  "e": "🌻",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["page_with_curl"],
  "e": "📃",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["hear_no_evil"],
  "e": "🙉",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["speedboat"],
  "e": "🚤",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["beverage_box"],
  "e": "🧃",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["heavy_plus_sign"],
  "e": "➕",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-id"],
  "e": "🇮🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["blossom"],
  "e": "🌼",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["scroll"],
  "e": "📜",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["speak_no_evil"],
  "e": "🙊",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["passenger_ship"],
  "e": "🛳️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["mate_drink"],
  "e": "🧉",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["heavy_minus_sign"],
  "e": "➖",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ie"],
  "e": "🇮🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["tulip"],
  "e": "🌷",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["kiss"],
  "e": "💋",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["page_facing_up"],
  "e": "📄",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["ice_cube"],
  "e": "🧊",
  "c": 1,
  "ver": "12.1"
}, {
  "n": ["ferry"],
  "e": "⛴️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["heavy_division_sign"],
  "e": "➗",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-il"],
  "e": "🇮🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["seedling"],
  "e": "🌱",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["love_letter"],
  "e": "💌",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["newspaper"],
  "e": "📰",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["motor_boat"],
  "e": "🛥️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["chopsticks"],
  "e": "🥢",
  "c": 1,
  "ver": "5.0"
}, {
  "n": ["curly_loop"],
  "e": "➰",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-im"],
  "e": "🇮🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["evergreen_tree"],
  "e": "🌲",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["knife_fork_plate"],
  "e": "🍽️",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["cupid"],
  "e": "💘",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["rolled_up_newspaper"],
  "e": "🗞️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["ship"],
  "e": "🚢",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["loop"],
  "e": "➿",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-in"],
  "e": "🇮🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["deciduous_tree"],
  "e": "🌳",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["fork_and_knife"],
  "e": "🍴",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["gift_heart"],
  "e": "💝",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["bookmark_tabs"],
  "e": "📑",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["airplane"],
  "e": "✈️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["part_alternation_mark"],
  "e": "〽️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-io"],
  "e": "🇮🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["palm_tree"],
  "e": "🌴",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["sparkling_heart"],
  "e": "💖",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["bookmark"],
  "e": "🔖",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["small_airplane"],
  "e": "🛩️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["spoon"],
  "e": "🥄",
  "c": 1,
  "ver": "4.0"
}, {
  "n": ["eight_spoked_asterisk"],
  "e": "✳️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-iq"],
  "e": "🇮🇶",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cactus"],
  "e": "🌵",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["label"],
  "e": "🏷️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["heartpulse"],
  "e": "💗",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["hocho", "knife"],
  "e": "🔪",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["airplane_departure"],
  "e": "🛫",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["eight_pointed_black_star"],
  "e": "✴️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ir"],
  "e": "🇮🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ear_of_rice"],
  "e": "🌾",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["amphora"],
  "e": "🏺",
  "c": 1,
  "ver": "2.0"
}, {
  "n": ["heartbeat"],
  "e": "💓",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["moneybag"],
  "e": "💰",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["airplane_arriving"],
  "e": "🛬",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["sparkle"],
  "e": "❇️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-is"],
  "e": "🇮🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["herb"],
  "e": "🌿",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["revolving_hearts"],
  "e": "💞",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["yen"],
  "e": "💴",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["parachute"],
  "e": "🪂",
  "c": 0,
  "ver": "12.1"
}, {
  "n": ["bangbang"],
  "e": "‼️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["it", "flag-it"],
  "e": "🇮🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["two_hearts"],
  "e": "💕",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["dollar"],
  "e": "💵",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["seat"],
  "e": "💺",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["interrobang"],
  "e": "⁉️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["shamrock"],
  "e": "☘️",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["flag-je"],
  "e": "🇯🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["four_leaf_clover"],
  "e": "🍀",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["heart_decoration"],
  "e": "💟",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["euro"],
  "e": "💶",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["helicopter"],
  "e": "🚁",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["question"],
  "e": "❓",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-jm"],
  "e": "🇯🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["maple_leaf"],
  "e": "🍁",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["pound"],
  "e": "💷",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["suspension_railway"],
  "e": "🚟",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["grey_question"],
  "e": "❔",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["heavy_heart_exclamation_mark_ornament"],
  "e": "❣️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["flag-jo"],
  "e": "🇯🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["fallen_leaf"],
  "e": "🍂",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["broken_heart"],
  "e": "💔",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["money_with_wings"],
  "e": "💸",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["mountain_cableway"],
  "e": "🚠",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["grey_exclamation"],
  "e": "❕",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["jp", "flag-jp"],
  "e": "🇯🇵",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["leaves"],
  "e": "🍃",
  "c": 6,
  "ver": "2.0"
}, {
  "n": ["credit_card"],
  "e": "💳",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["aerial_tramway"],
  "e": "🚡",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["exclamation", "heavy_exclamation_mark"],
  "e": "❗",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["heart"],
  "e": "❤️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["flag-ke"],
  "e": "🇰🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["satellite"],
  "e": "🛰️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["orange_heart"],
  "e": "🧡",
  "c": 8,
  "ver": "5.0"
}, {
  "n": ["receipt"],
  "e": "🧾",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["wavy_dash"],
  "e": "〰️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["copyright"],
  "e": "©️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-kg"],
  "e": "🇰🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["yellow_heart"],
  "e": "💛",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["chart"],
  "e": "💹",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["rocket"],
  "e": "🚀",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["registered"],
  "e": "®️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-kh"],
  "e": "🇰🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["green_heart"],
  "e": "💚",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["currency_exchange"],
  "e": "💱",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flying_saucer"],
  "e": "🛸",
  "c": 0,
  "ver": "5.0"
}, {
  "n": ["flag-ki"],
  "e": "🇰🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["blue_heart"],
  "e": "💙",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["heavy_dollar_sign"],
  "e": "💲",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["bellhop_bell"],
  "e": "🛎️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["tm"],
  "e": "™️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["hash"],
  "e": "#️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-km"],
  "e": "🇰🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["purple_heart"],
  "e": "💜",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["luggage"],
  "e": "🧳",
  "c": 0,
  "ver": "11.0"
}, {
  "n": ["email", "envelope"],
  "e": "✉️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["keycap_star"],
  "e": "*️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-kn"],
  "e": "🇰🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["e-mail"],
  "e": "📧",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["brown_heart"],
  "e": "🤎",
  "c": 8,
  "ver": "12.1"
}, {
  "n": ["hourglass"],
  "e": "⌛",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["zero"],
  "e": "0️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-kp"],
  "e": "🇰🇵",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["incoming_envelope"],
  "e": "📨",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["black_heart"],
  "e": "🖤",
  "c": 8,
  "ver": "4.0"
}, {
  "n": ["hourglass_flowing_sand"],
  "e": "⏳",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["one"],
  "e": "1️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["kr", "flag-kr"],
  "e": "🇰🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["envelope_with_arrow"],
  "e": "📩",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["white_heart"],
  "e": "🤍",
  "c": 8,
  "ver": "12.1"
}, {
  "n": ["watch"],
  "e": "⌚",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["two"],
  "e": "2️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-kw"],
  "e": "🇰🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["100"],
  "e": "💯",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["outbox_tray"],
  "e": "📤",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["alarm_clock"],
  "e": "⏰",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["three"],
  "e": "3️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-ky"],
  "e": "🇰🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["anger"],
  "e": "💢",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["inbox_tray"],
  "e": "📥",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["stopwatch"],
  "e": "⏱️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["four"],
  "e": "4️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-kz"],
  "e": "🇰🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["boom", "collision"],
  "e": "💥",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["package"],
  "e": "📦",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["timer_clock"],
  "e": "⏲️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["five"],
  "e": "5️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-la"],
  "e": "🇱🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["dizzy"],
  "e": "💫",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mailbox"],
  "e": "📫",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["mantelpiece_clock"],
  "e": "🕰️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["six"],
  "e": "6️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-lb"],
  "e": "🇱🇧",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sweat_drops"],
  "e": "💦",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mailbox_closed"],
  "e": "📪",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock12"],
  "e": "🕛",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["seven"],
  "e": "7️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-lc"],
  "e": "🇱🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["dash"],
  "e": "💨",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["mailbox_with_mail"],
  "e": "📬",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock1230"],
  "e": "🕧",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["eight"],
  "e": "8️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-li"],
  "e": "🇱🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["mailbox_with_no_mail"],
  "e": "📭",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock1"],
  "e": "🕐",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["hole"],
  "e": "🕳️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["nine"],
  "e": "9️⃣",
  "c": 4,
  "ver": "0.0"
}, {
  "n": ["flag-lk"],
  "e": "🇱🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["bomb"],
  "e": "💣",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["postbox"],
  "e": "📮",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock130"],
  "e": "🕜",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-lr"],
  "e": "🇱🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["speech_balloon"],
  "e": "💬",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["keycap_ten"],
  "e": "🔟",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clock2"],
  "e": "🕑",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["ballot_box_with_ballot"],
  "e": "🗳️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-ls"],
  "e": "🇱🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["eye-in-speech-bubble"],
  "e": "👁️‍🗨️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["capital_abcd"],
  "e": "🔠",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clock230"],
  "e": "🕝",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pencil2"],
  "e": "✏️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-lt"],
  "e": "🇱🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["abcd"],
  "e": "🔡",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clock3"],
  "e": "🕒",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["left_speech_bubble"],
  "e": "🗨️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["black_nib"],
  "e": "✒️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-lu"],
  "e": "🇱🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["1234"],
  "e": "🔢",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clock330"],
  "e": "🕞",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["lower_left_fountain_pen"],
  "e": "🖋️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["right_anger_bubble"],
  "e": "🗯️",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["flag-lv"],
  "e": "🇱🇻",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["thought_balloon"],
  "e": "💭",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["symbols"],
  "e": "🔣",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clock4"],
  "e": "🕓",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["lower_left_ballpoint_pen"],
  "e": "🖊️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-ly"],
  "e": "🇱🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["zzz"],
  "e": "💤",
  "c": 8,
  "ver": "2.0"
}, {
  "n": ["abc"],
  "e": "🔤",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["clock430"],
  "e": "🕟",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["lower_left_paintbrush"],
  "e": "🖌️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["a"],
  "e": "🅰️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ma"],
  "e": "🇲🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["wave"],
  "e": "👋",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "wave-1F3FB",
      "n": "wave",
      "e": "👋🏻"
    },
    "1F3FC": {
      "k": "wave-1F3FC",
      "n": "wave",
      "e": "👋🏼"
    },
    "1F3FD": {
      "k": "wave-1F3FD",
      "n": "wave",
      "e": "👋🏽"
    },
    "1F3FE": {
      "k": "wave-1F3FE",
      "n": "wave",
      "e": "👋🏾"
    },
    "1F3FF": {
      "k": "wave-1F3FF",
      "n": "wave",
      "e": "👋🏿"
    }
  }
}, {
  "n": ["clock5"],
  "e": "🕔",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["lower_left_crayon"],
  "e": "🖍️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["ab"],
  "e": "🆎",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mc"],
  "e": "🇲🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["memo", "pencil"],
  "e": "📝",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock530"],
  "e": "🕠",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["raised_back_of_hand"],
  "e": "🤚",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "raised_back_of_hand-1F3FB",
      "n": "raised_back_of_hand",
      "e": "🤚🏻"
    },
    "1F3FC": {
      "k": "raised_back_of_hand-1F3FC",
      "n": "raised_back_of_hand",
      "e": "🤚🏼"
    },
    "1F3FD": {
      "k": "raised_back_of_hand-1F3FD",
      "n": "raised_back_of_hand",
      "e": "🤚🏽"
    },
    "1F3FE": {
      "k": "raised_back_of_hand-1F3FE",
      "n": "raised_back_of_hand",
      "e": "🤚🏾"
    },
    "1F3FF": {
      "k": "raised_back_of_hand-1F3FF",
      "n": "raised_back_of_hand",
      "e": "🤚🏿"
    }
  }
}, {
  "n": ["b"],
  "e": "🅱️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-md"],
  "e": "🇲🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["briefcase"],
  "e": "💼",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock6"],
  "e": "🕕",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["raised_hand_with_fingers_splayed"],
  "e": "🖐️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "raised_hand_with_fingers_splayed-1F3FB",
      "n": "raised_hand_with_fingers_splayed",
      "e": "🖐🏻"
    },
    "1F3FC": {
      "k": "raised_hand_with_fingers_splayed-1F3FC",
      "n": "raised_hand_with_fingers_splayed",
      "e": "🖐🏼"
    },
    "1F3FD": {
      "k": "raised_hand_with_fingers_splayed-1F3FD",
      "n": "raised_hand_with_fingers_splayed",
      "e": "🖐🏽"
    },
    "1F3FE": {
      "k": "raised_hand_with_fingers_splayed-1F3FE",
      "n": "raised_hand_with_fingers_splayed",
      "e": "🖐🏾"
    },
    "1F3FF": {
      "k": "raised_hand_with_fingers_splayed-1F3FF",
      "n": "raised_hand_with_fingers_splayed",
      "e": "🖐🏿"
    }
  }
}, {
  "n": ["cl"],
  "e": "🆑",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-me"],
  "e": "🇲🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["file_folder"],
  "e": "📁",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock630"],
  "e": "🕡",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["hand", "raised_hand"],
  "e": "✋",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "hand-1F3FB",
      "n": "hand",
      "e": "✋🏻"
    },
    "1F3FC": {
      "k": "hand-1F3FC",
      "n": "hand",
      "e": "✋🏼"
    },
    "1F3FD": {
      "k": "hand-1F3FD",
      "n": "hand",
      "e": "✋🏽"
    },
    "1F3FE": {
      "k": "hand-1F3FE",
      "n": "hand",
      "e": "✋🏾"
    },
    "1F3FF": {
      "k": "hand-1F3FF",
      "n": "hand",
      "e": "✋🏿"
    }
  }
}, {
  "n": ["cool"],
  "e": "🆒",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mf"],
  "e": "🇲🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["open_file_folder"],
  "e": "📂",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock7"],
  "e": "🕖",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["spock-hand"],
  "e": "🖖",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "spock-hand-1F3FB",
      "n": "spock-hand",
      "e": "🖖🏻"
    },
    "1F3FC": {
      "k": "spock-hand-1F3FC",
      "n": "spock-hand",
      "e": "🖖🏼"
    },
    "1F3FD": {
      "k": "spock-hand-1F3FD",
      "n": "spock-hand",
      "e": "🖖🏽"
    },
    "1F3FE": {
      "k": "spock-hand-1F3FE",
      "n": "spock-hand",
      "e": "🖖🏾"
    },
    "1F3FF": {
      "k": "spock-hand-1F3FF",
      "n": "spock-hand",
      "e": "🖖🏿"
    }
  }
}, {
  "n": ["free"],
  "e": "🆓",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mg"],
  "e": "🇲🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ok_hand"],
  "e": "👌",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "ok_hand-1F3FB",
      "n": "ok_hand",
      "e": "👌🏻"
    },
    "1F3FC": {
      "k": "ok_hand-1F3FC",
      "n": "ok_hand",
      "e": "👌🏼"
    },
    "1F3FD": {
      "k": "ok_hand-1F3FD",
      "n": "ok_hand",
      "e": "👌🏽"
    },
    "1F3FE": {
      "k": "ok_hand-1F3FE",
      "n": "ok_hand",
      "e": "👌🏾"
    },
    "1F3FF": {
      "k": "ok_hand-1F3FF",
      "n": "ok_hand",
      "e": "👌🏿"
    }
  }
}, {
  "n": ["clock730"],
  "e": "🕢",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["card_index_dividers"],
  "e": "🗂️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-mh"],
  "e": "🇲🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["date"],
  "e": "📅",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock8"],
  "e": "🕗",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pinching_hand"],
  "e": "🤏",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "pinching_hand-1F3FB",
      "n": "pinching_hand",
      "e": "🤏🏻"
    },
    "1F3FC": {
      "k": "pinching_hand-1F3FC",
      "n": "pinching_hand",
      "e": "🤏🏼"
    },
    "1F3FD": {
      "k": "pinching_hand-1F3FD",
      "n": "pinching_hand",
      "e": "🤏🏽"
    },
    "1F3FE": {
      "k": "pinching_hand-1F3FE",
      "n": "pinching_hand",
      "e": "🤏🏾"
    },
    "1F3FF": {
      "k": "pinching_hand-1F3FF",
      "n": "pinching_hand",
      "e": "🤏🏿"
    }
  }
}, {
  "n": ["information_source"],
  "e": "ℹ️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["id"],
  "e": "🆔",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mk"],
  "e": "🇲🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["calendar"],
  "e": "📆",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock830"],
  "e": "🕣",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["v"],
  "e": "✌️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "v-1F3FB",
      "n": "v",
      "e": "✌🏻"
    },
    "1F3FC": {
      "k": "v-1F3FC",
      "n": "v",
      "e": "✌🏼"
    },
    "1F3FD": {
      "k": "v-1F3FD",
      "n": "v",
      "e": "✌🏽"
    },
    "1F3FE": {
      "k": "v-1F3FE",
      "n": "v",
      "e": "✌🏾"
    },
    "1F3FF": {
      "k": "v-1F3FF",
      "n": "v",
      "e": "✌🏿"
    }
  }
}, {
  "n": ["flag-ml"],
  "e": "🇲🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["clock9"],
  "e": "🕘",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["spiral_note_pad"],
  "e": "🗒️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["crossed_fingers", "hand_with_index_and_middle_fingers_crossed"],
  "e": "🤞",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "crossed_fingers-1F3FB",
      "n": "crossed_fingers",
      "e": "🤞🏻"
    },
    "1F3FC": {
      "k": "crossed_fingers-1F3FC",
      "n": "crossed_fingers",
      "e": "🤞🏼"
    },
    "1F3FD": {
      "k": "crossed_fingers-1F3FD",
      "n": "crossed_fingers",
      "e": "🤞🏽"
    },
    "1F3FE": {
      "k": "crossed_fingers-1F3FE",
      "n": "crossed_fingers",
      "e": "🤞🏾"
    },
    "1F3FF": {
      "k": "crossed_fingers-1F3FF",
      "n": "crossed_fingers",
      "e": "🤞🏿"
    }
  }
}, {
  "n": ["m"],
  "e": "Ⓜ️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["new"],
  "e": "🆕",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mm"],
  "e": "🇲🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["clock930"],
  "e": "🕤",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["spiral_calendar_pad"],
  "e": "🗓️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["i_love_you_hand_sign"],
  "e": "🤟",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "i_love_you_hand_sign-1F3FB",
      "n": "i_love_you_hand_sign",
      "e": "🤟🏻"
    },
    "1F3FC": {
      "k": "i_love_you_hand_sign-1F3FC",
      "n": "i_love_you_hand_sign",
      "e": "🤟🏼"
    },
    "1F3FD": {
      "k": "i_love_you_hand_sign-1F3FD",
      "n": "i_love_you_hand_sign",
      "e": "🤟🏽"
    },
    "1F3FE": {
      "k": "i_love_you_hand_sign-1F3FE",
      "n": "i_love_you_hand_sign",
      "e": "🤟🏾"
    },
    "1F3FF": {
      "k": "i_love_you_hand_sign-1F3FF",
      "n": "i_love_you_hand_sign",
      "e": "🤟🏿"
    }
  }
}, {
  "n": ["ng"],
  "e": "🆖",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mn"],
  "e": "🇲🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["card_index"],
  "e": "📇",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock10"],
  "e": "🕙",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["the_horns", "sign_of_the_horns"],
  "e": "🤘",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "the_horns-1F3FB",
      "n": "the_horns",
      "e": "🤘🏻"
    },
    "1F3FC": {
      "k": "the_horns-1F3FC",
      "n": "the_horns",
      "e": "🤘🏼"
    },
    "1F3FD": {
      "k": "the_horns-1F3FD",
      "n": "the_horns",
      "e": "🤘🏽"
    },
    "1F3FE": {
      "k": "the_horns-1F3FE",
      "n": "the_horns",
      "e": "🤘🏾"
    },
    "1F3FF": {
      "k": "the_horns-1F3FF",
      "n": "the_horns",
      "e": "🤘🏿"
    }
  }
}, {
  "n": ["o2"],
  "e": "🅾️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mo"],
  "e": "🇲🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["chart_with_upwards_trend"],
  "e": "📈",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock1030"],
  "e": "🕥",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["call_me_hand"],
  "e": "🤙",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "call_me_hand-1F3FB",
      "n": "call_me_hand",
      "e": "🤙🏻"
    },
    "1F3FC": {
      "k": "call_me_hand-1F3FC",
      "n": "call_me_hand",
      "e": "🤙🏼"
    },
    "1F3FD": {
      "k": "call_me_hand-1F3FD",
      "n": "call_me_hand",
      "e": "🤙🏽"
    },
    "1F3FE": {
      "k": "call_me_hand-1F3FE",
      "n": "call_me_hand",
      "e": "🤙🏾"
    },
    "1F3FF": {
      "k": "call_me_hand-1F3FF",
      "n": "call_me_hand",
      "e": "🤙🏿"
    }
  }
}, {
  "n": ["ok"],
  "e": "🆗",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mp"],
  "e": "🇲🇵",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["point_left"],
  "e": "👈",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "point_left-1F3FB",
      "n": "point_left",
      "e": "👈🏻"
    },
    "1F3FC": {
      "k": "point_left-1F3FC",
      "n": "point_left",
      "e": "👈🏼"
    },
    "1F3FD": {
      "k": "point_left-1F3FD",
      "n": "point_left",
      "e": "👈🏽"
    },
    "1F3FE": {
      "k": "point_left-1F3FE",
      "n": "point_left",
      "e": "👈🏾"
    },
    "1F3FF": {
      "k": "point_left-1F3FF",
      "n": "point_left",
      "e": "👈🏿"
    }
  }
}, {
  "n": ["chart_with_downwards_trend"],
  "e": "📉",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock11"],
  "e": "🕚",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["parking"],
  "e": "🅿️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mq"],
  "e": "🇲🇶",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["point_right"],
  "e": "👉",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "point_right-1F3FB",
      "n": "point_right",
      "e": "👉🏻"
    },
    "1F3FC": {
      "k": "point_right-1F3FC",
      "n": "point_right",
      "e": "👉🏼"
    },
    "1F3FD": {
      "k": "point_right-1F3FD",
      "n": "point_right",
      "e": "👉🏽"
    },
    "1F3FE": {
      "k": "point_right-1F3FE",
      "n": "point_right",
      "e": "👉🏾"
    },
    "1F3FF": {
      "k": "point_right-1F3FF",
      "n": "point_right",
      "e": "👉🏿"
    }
  }
}, {
  "n": ["bar_chart"],
  "e": "📊",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["clock1130"],
  "e": "🕦",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["sos"],
  "e": "🆘",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mr"],
  "e": "🇲🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["new_moon"],
  "e": "🌑",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["point_up_2"],
  "e": "👆",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "point_up_2-1F3FB",
      "n": "point_up_2",
      "e": "👆🏻"
    },
    "1F3FC": {
      "k": "point_up_2-1F3FC",
      "n": "point_up_2",
      "e": "👆🏼"
    },
    "1F3FD": {
      "k": "point_up_2-1F3FD",
      "n": "point_up_2",
      "e": "👆🏽"
    },
    "1F3FE": {
      "k": "point_up_2-1F3FE",
      "n": "point_up_2",
      "e": "👆🏾"
    },
    "1F3FF": {
      "k": "point_up_2-1F3FF",
      "n": "point_up_2",
      "e": "👆🏿"
    }
  }
}, {
  "n": ["clipboard"],
  "e": "📋",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["up"],
  "e": "🆙",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ms"],
  "e": "🇲🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["waxing_crescent_moon"],
  "e": "🌒",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["pushpin"],
  "e": "📌",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["middle_finger", "reversed_hand_with_middle_finger_extended"],
  "e": "🖕",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "middle_finger-1F3FB",
      "n": "middle_finger",
      "e": "🖕🏻"
    },
    "1F3FC": {
      "k": "middle_finger-1F3FC",
      "n": "middle_finger",
      "e": "🖕🏼"
    },
    "1F3FD": {
      "k": "middle_finger-1F3FD",
      "n": "middle_finger",
      "e": "🖕🏽"
    },
    "1F3FE": {
      "k": "middle_finger-1F3FE",
      "n": "middle_finger",
      "e": "🖕🏾"
    },
    "1F3FF": {
      "k": "middle_finger-1F3FF",
      "n": "middle_finger",
      "e": "🖕🏿"
    }
  }
}, {
  "n": ["vs"],
  "e": "🆚",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-mt"],
  "e": "🇲🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["first_quarter_moon"],
  "e": "🌓",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["point_down"],
  "e": "👇",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "point_down-1F3FB",
      "n": "point_down",
      "e": "👇🏻"
    },
    "1F3FC": {
      "k": "point_down-1F3FC",
      "n": "point_down",
      "e": "👇🏼"
    },
    "1F3FD": {
      "k": "point_down-1F3FD",
      "n": "point_down",
      "e": "👇🏽"
    },
    "1F3FE": {
      "k": "point_down-1F3FE",
      "n": "point_down",
      "e": "👇🏾"
    },
    "1F3FF": {
      "k": "point_down-1F3FF",
      "n": "point_down",
      "e": "👇🏿"
    }
  }
}, {
  "n": ["round_pushpin"],
  "e": "📍",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-mu"],
  "e": "🇲🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["koko"],
  "e": "🈁",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["moon", "waxing_gibbous_moon"],
  "e": "🌔",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["paperclip"],
  "e": "📎",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["point_up"],
  "e": "☝️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "point_up-1F3FB",
      "n": "point_up",
      "e": "☝🏻"
    },
    "1F3FC": {
      "k": "point_up-1F3FC",
      "n": "point_up",
      "e": "☝🏼"
    },
    "1F3FD": {
      "k": "point_up-1F3FD",
      "n": "point_up",
      "e": "☝🏽"
    },
    "1F3FE": {
      "k": "point_up-1F3FE",
      "n": "point_up",
      "e": "☝🏾"
    },
    "1F3FF": {
      "k": "point_up-1F3FF",
      "n": "point_up",
      "e": "☝🏿"
    }
  }
}, {
  "n": ["flag-mv"],
  "e": "🇲🇻",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["sa"],
  "e": "🈂️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["full_moon"],
  "e": "🌕",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["+1", "thumbsup"],
  "e": "👍",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "+1-1F3FB",
      "n": "+1",
      "e": "👍🏻"
    },
    "1F3FC": {
      "k": "+1-1F3FC",
      "n": "+1",
      "e": "👍🏼"
    },
    "1F3FD": {
      "k": "+1-1F3FD",
      "n": "+1",
      "e": "👍🏽"
    },
    "1F3FE": {
      "k": "+1-1F3FE",
      "n": "+1",
      "e": "👍🏾"
    },
    "1F3FF": {
      "k": "+1-1F3FF",
      "n": "+1",
      "e": "👍🏿"
    }
  }
}, {
  "n": ["linked_paperclips"],
  "e": "🖇️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-mw"],
  "e": "🇲🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u6708"],
  "e": "🈷️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["waning_gibbous_moon"],
  "e": "🌖",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["-1", "thumbsdown"],
  "e": "👎",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "-1-1F3FB",
      "n": "-1",
      "e": "👎🏻"
    },
    "1F3FC": {
      "k": "-1-1F3FC",
      "n": "-1",
      "e": "👎🏼"
    },
    "1F3FD": {
      "k": "-1-1F3FD",
      "n": "-1",
      "e": "👎🏽"
    },
    "1F3FE": {
      "k": "-1-1F3FE",
      "n": "-1",
      "e": "👎🏾"
    },
    "1F3FF": {
      "k": "-1-1F3FF",
      "n": "-1",
      "e": "👎🏿"
    }
  }
}, {
  "n": ["straight_ruler"],
  "e": "📏",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-mx"],
  "e": "🇲🇽",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u6709"],
  "e": "🈶",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["last_quarter_moon"],
  "e": "🌗",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["triangular_ruler"],
  "e": "📐",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["fist"],
  "e": "✊",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "fist-1F3FB",
      "n": "fist",
      "e": "✊🏻"
    },
    "1F3FC": {
      "k": "fist-1F3FC",
      "n": "fist",
      "e": "✊🏼"
    },
    "1F3FD": {
      "k": "fist-1F3FD",
      "n": "fist",
      "e": "✊🏽"
    },
    "1F3FE": {
      "k": "fist-1F3FE",
      "n": "fist",
      "e": "✊🏾"
    },
    "1F3FF": {
      "k": "fist-1F3FF",
      "n": "fist",
      "e": "✊🏿"
    }
  }
}, {
  "n": ["flag-my"],
  "e": "🇲🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u6307"],
  "e": "🈯",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["waning_crescent_moon"],
  "e": "🌘",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["facepunch", "punch"],
  "e": "👊",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "facepunch-1F3FB",
      "n": "facepunch",
      "e": "👊🏻"
    },
    "1F3FC": {
      "k": "facepunch-1F3FC",
      "n": "facepunch",
      "e": "👊🏼"
    },
    "1F3FD": {
      "k": "facepunch-1F3FD",
      "n": "facepunch",
      "e": "👊🏽"
    },
    "1F3FE": {
      "k": "facepunch-1F3FE",
      "n": "facepunch",
      "e": "👊🏾"
    },
    "1F3FF": {
      "k": "facepunch-1F3FF",
      "n": "facepunch",
      "e": "👊🏿"
    }
  }
}, {
  "n": ["scissors"],
  "e": "✂️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-mz"],
  "e": "🇲🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ideograph_advantage"],
  "e": "🉐",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["crescent_moon"],
  "e": "🌙",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["card_file_box"],
  "e": "🗃️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["left-facing_fist"],
  "e": "🤛",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "left-facing_fist-1F3FB",
      "n": "left-facing_fist",
      "e": "🤛🏻"
    },
    "1F3FC": {
      "k": "left-facing_fist-1F3FC",
      "n": "left-facing_fist",
      "e": "🤛🏼"
    },
    "1F3FD": {
      "k": "left-facing_fist-1F3FD",
      "n": "left-facing_fist",
      "e": "🤛🏽"
    },
    "1F3FE": {
      "k": "left-facing_fist-1F3FE",
      "n": "left-facing_fist",
      "e": "🤛🏾"
    },
    "1F3FF": {
      "k": "left-facing_fist-1F3FF",
      "n": "left-facing_fist",
      "e": "🤛🏿"
    }
  }
}, {
  "n": ["flag-na"],
  "e": "🇳🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u5272"],
  "e": "🈹",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["new_moon_with_face"],
  "e": "🌚",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["file_cabinet"],
  "e": "🗄️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["right-facing_fist"],
  "e": "🤜",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "right-facing_fist-1F3FB",
      "n": "right-facing_fist",
      "e": "🤜🏻"
    },
    "1F3FC": {
      "k": "right-facing_fist-1F3FC",
      "n": "right-facing_fist",
      "e": "🤜🏼"
    },
    "1F3FD": {
      "k": "right-facing_fist-1F3FD",
      "n": "right-facing_fist",
      "e": "🤜🏽"
    },
    "1F3FE": {
      "k": "right-facing_fist-1F3FE",
      "n": "right-facing_fist",
      "e": "🤜🏾"
    },
    "1F3FF": {
      "k": "right-facing_fist-1F3FF",
      "n": "right-facing_fist",
      "e": "🤜🏿"
    }
  }
}, {
  "n": ["flag-nc"],
  "e": "🇳🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u7121"],
  "e": "🈚",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["first_quarter_moon_with_face"],
  "e": "🌛",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["clap"],
  "e": "👏",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "clap-1F3FB",
      "n": "clap",
      "e": "👏🏻"
    },
    "1F3FC": {
      "k": "clap-1F3FC",
      "n": "clap",
      "e": "👏🏼"
    },
    "1F3FD": {
      "k": "clap-1F3FD",
      "n": "clap",
      "e": "👏🏽"
    },
    "1F3FE": {
      "k": "clap-1F3FE",
      "n": "clap",
      "e": "👏🏾"
    },
    "1F3FF": {
      "k": "clap-1F3FF",
      "n": "clap",
      "e": "👏🏿"
    }
  }
}, {
  "n": ["wastebasket"],
  "e": "🗑️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-ne"],
  "e": "🇳🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u7981"],
  "e": "🈲",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["last_quarter_moon_with_face"],
  "e": "🌜",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["lock"],
  "e": "🔒",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["raised_hands"],
  "e": "🙌",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "raised_hands-1F3FB",
      "n": "raised_hands",
      "e": "🙌🏻"
    },
    "1F3FC": {
      "k": "raised_hands-1F3FC",
      "n": "raised_hands",
      "e": "🙌🏼"
    },
    "1F3FD": {
      "k": "raised_hands-1F3FD",
      "n": "raised_hands",
      "e": "🙌🏽"
    },
    "1F3FE": {
      "k": "raised_hands-1F3FE",
      "n": "raised_hands",
      "e": "🙌🏾"
    },
    "1F3FF": {
      "k": "raised_hands-1F3FF",
      "n": "raised_hands",
      "e": "🙌🏿"
    }
  }
}, {
  "n": ["flag-nf"],
  "e": "🇳🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["accept"],
  "e": "🉑",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["thermometer"],
  "e": "🌡️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["open_hands"],
  "e": "👐",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "open_hands-1F3FB",
      "n": "open_hands",
      "e": "👐🏻"
    },
    "1F3FC": {
      "k": "open_hands-1F3FC",
      "n": "open_hands",
      "e": "👐🏼"
    },
    "1F3FD": {
      "k": "open_hands-1F3FD",
      "n": "open_hands",
      "e": "👐🏽"
    },
    "1F3FE": {
      "k": "open_hands-1F3FE",
      "n": "open_hands",
      "e": "👐🏾"
    },
    "1F3FF": {
      "k": "open_hands-1F3FF",
      "n": "open_hands",
      "e": "👐🏿"
    }
  }
}, {
  "n": ["unlock"],
  "e": "🔓",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-ng"],
  "e": "🇳🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u7533"],
  "e": "🈸",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["lock_with_ink_pen"],
  "e": "🔏",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["palms_up_together"],
  "e": "🤲",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "palms_up_together-1F3FB",
      "n": "palms_up_together",
      "e": "🤲🏻"
    },
    "1F3FC": {
      "k": "palms_up_together-1F3FC",
      "n": "palms_up_together",
      "e": "🤲🏼"
    },
    "1F3FD": {
      "k": "palms_up_together-1F3FD",
      "n": "palms_up_together",
      "e": "🤲🏽"
    },
    "1F3FE": {
      "k": "palms_up_together-1F3FE",
      "n": "palms_up_together",
      "e": "🤲🏾"
    },
    "1F3FF": {
      "k": "palms_up_together-1F3FF",
      "n": "palms_up_together",
      "e": "🤲🏿"
    }
  }
}, {
  "n": ["sunny"],
  "e": "☀️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-ni"],
  "e": "🇳🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u5408"],
  "e": "🈴",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["full_moon_with_face"],
  "e": "🌝",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["closed_lock_with_key"],
  "e": "🔐",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["handshake"],
  "e": "🤝",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["flag-nl"],
  "e": "🇳🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u7a7a"],
  "e": "🈳",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["sun_with_face"],
  "e": "🌞",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["key"],
  "e": "🔑",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["pray"],
  "e": "🙏",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "pray-1F3FB",
      "n": "pray",
      "e": "🙏🏻"
    },
    "1F3FC": {
      "k": "pray-1F3FC",
      "n": "pray",
      "e": "🙏🏼"
    },
    "1F3FD": {
      "k": "pray-1F3FD",
      "n": "pray",
      "e": "🙏🏽"
    },
    "1F3FE": {
      "k": "pray-1F3FE",
      "n": "pray",
      "e": "🙏🏾"
    },
    "1F3FF": {
      "k": "pray-1F3FF",
      "n": "pray",
      "e": "🙏🏿"
    }
  }
}, {
  "n": ["flag-no"],
  "e": "🇳🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["old_key"],
  "e": "🗝️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["ringed_planet"],
  "e": "🪐",
  "c": 0,
  "ver": "12.1"
}, {
  "n": ["writing_hand"],
  "e": "✍️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "writing_hand-1F3FB",
      "n": "writing_hand",
      "e": "✍🏻"
    },
    "1F3FC": {
      "k": "writing_hand-1F3FC",
      "n": "writing_hand",
      "e": "✍🏼"
    },
    "1F3FD": {
      "k": "writing_hand-1F3FD",
      "n": "writing_hand",
      "e": "✍🏽"
    },
    "1F3FE": {
      "k": "writing_hand-1F3FE",
      "n": "writing_hand",
      "e": "✍🏾"
    },
    "1F3FF": {
      "k": "writing_hand-1F3FF",
      "n": "writing_hand",
      "e": "✍🏿"
    }
  }
}, {
  "n": ["congratulations"],
  "e": "㊗️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-np"],
  "e": "🇳🇵",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["nail_care"],
  "e": "💅",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "nail_care-1F3FB",
      "n": "nail_care",
      "e": "💅🏻"
    },
    "1F3FC": {
      "k": "nail_care-1F3FC",
      "n": "nail_care",
      "e": "💅🏼"
    },
    "1F3FD": {
      "k": "nail_care-1F3FD",
      "n": "nail_care",
      "e": "💅🏽"
    },
    "1F3FE": {
      "k": "nail_care-1F3FE",
      "n": "nail_care",
      "e": "💅🏾"
    },
    "1F3FF": {
      "k": "nail_care-1F3FF",
      "n": "nail_care",
      "e": "💅🏿"
    }
  }
}, {
  "n": ["hammer"],
  "e": "🔨",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["star"],
  "e": "⭐",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["secret"],
  "e": "㊙️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-nr"],
  "e": "🇳🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u55b6"],
  "e": "🈺",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["star2"],
  "e": "🌟",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["selfie"],
  "e": "🤳",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "selfie-1F3FB",
      "n": "selfie",
      "e": "🤳🏻"
    },
    "1F3FC": {
      "k": "selfie-1F3FC",
      "n": "selfie",
      "e": "🤳🏼"
    },
    "1F3FD": {
      "k": "selfie-1F3FD",
      "n": "selfie",
      "e": "🤳🏽"
    },
    "1F3FE": {
      "k": "selfie-1F3FE",
      "n": "selfie",
      "e": "🤳🏾"
    },
    "1F3FF": {
      "k": "selfie-1F3FF",
      "n": "selfie",
      "e": "🤳🏿"
    }
  }
}, {
  "n": ["axe"],
  "e": "🪓",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-nu"],
  "e": "🇳🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["u6e80"],
  "e": "🈵",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["stars"],
  "e": "🌠",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["muscle"],
  "e": "💪",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "muscle-1F3FB",
      "n": "muscle",
      "e": "💪🏻"
    },
    "1F3FC": {
      "k": "muscle-1F3FC",
      "n": "muscle",
      "e": "💪🏼"
    },
    "1F3FD": {
      "k": "muscle-1F3FD",
      "n": "muscle",
      "e": "💪🏽"
    },
    "1F3FE": {
      "k": "muscle-1F3FE",
      "n": "muscle",
      "e": "💪🏾"
    },
    "1F3FF": {
      "k": "muscle-1F3FF",
      "n": "muscle",
      "e": "💪🏿"
    }
  }
}, {
  "n": ["pick"],
  "e": "⛏️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-nz"],
  "e": "🇳🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["milky_way"],
  "e": "🌌",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["red_circle"],
  "e": "🔴",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["mechanical_arm"],
  "e": "🦾",
  "c": 9,
  "ver": "12.1"
}, {
  "n": ["hammer_and_pick"],
  "e": "⚒️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-om"],
  "e": "🇴🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["hammer_and_wrench"],
  "e": "🛠️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["large_orange_circle"],
  "e": "🟠",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["mechanical_leg"],
  "e": "🦿",
  "c": 9,
  "ver": "12.1"
}, {
  "n": ["cloud"],
  "e": "☁️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-pa"],
  "e": "🇵🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["dagger_knife"],
  "e": "🗡️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["large_yellow_circle"],
  "e": "🟡",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["leg"],
  "e": "🦵",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "leg-1F3FB",
      "n": "leg",
      "e": "🦵🏻"
    },
    "1F3FC": {
      "k": "leg-1F3FC",
      "n": "leg",
      "e": "🦵🏼"
    },
    "1F3FD": {
      "k": "leg-1F3FD",
      "n": "leg",
      "e": "🦵🏽"
    },
    "1F3FE": {
      "k": "leg-1F3FE",
      "n": "leg",
      "e": "🦵🏾"
    },
    "1F3FF": {
      "k": "leg-1F3FF",
      "n": "leg",
      "e": "🦵🏿"
    }
  }
}, {
  "n": ["partly_sunny"],
  "e": "⛅",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-pe"],
  "e": "🇵🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["large_green_circle"],
  "e": "🟢",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["foot"],
  "e": "🦶",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "foot-1F3FB",
      "n": "foot",
      "e": "🦶🏻"
    },
    "1F3FC": {
      "k": "foot-1F3FC",
      "n": "foot",
      "e": "🦶🏼"
    },
    "1F3FD": {
      "k": "foot-1F3FD",
      "n": "foot",
      "e": "🦶🏽"
    },
    "1F3FE": {
      "k": "foot-1F3FE",
      "n": "foot",
      "e": "🦶🏾"
    },
    "1F3FF": {
      "k": "foot-1F3FF",
      "n": "foot",
      "e": "🦶🏿"
    }
  }
}, {
  "n": ["crossed_swords"],
  "e": "⚔️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["thunder_cloud_and_rain"],
  "e": "⛈️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-pf"],
  "e": "🇵🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["mostly_sunny", "sun_small_cloud"],
  "e": "🌤️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["ear"],
  "e": "👂",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "ear-1F3FB",
      "n": "ear",
      "e": "👂🏻"
    },
    "1F3FC": {
      "k": "ear-1F3FC",
      "n": "ear",
      "e": "👂🏼"
    },
    "1F3FD": {
      "k": "ear-1F3FD",
      "n": "ear",
      "e": "👂🏽"
    },
    "1F3FE": {
      "k": "ear-1F3FE",
      "n": "ear",
      "e": "👂🏾"
    },
    "1F3FF": {
      "k": "ear-1F3FF",
      "n": "ear",
      "e": "👂🏿"
    }
  }
}, {
  "n": ["gun"],
  "e": "🔫",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["large_blue_circle"],
  "e": "🔵",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-pg"],
  "e": "🇵🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["barely_sunny", "sun_behind_cloud"],
  "e": "🌥️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["bow_and_arrow"],
  "e": "🏹",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["large_purple_circle"],
  "e": "🟣",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["ear_with_hearing_aid"],
  "e": "🦻",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "ear_with_hearing_aid-1F3FB",
      "n": "ear_with_hearing_aid",
      "e": "🦻🏻"
    },
    "1F3FC": {
      "k": "ear_with_hearing_aid-1F3FC",
      "n": "ear_with_hearing_aid",
      "e": "🦻🏼"
    },
    "1F3FD": {
      "k": "ear_with_hearing_aid-1F3FD",
      "n": "ear_with_hearing_aid",
      "e": "🦻🏽"
    },
    "1F3FE": {
      "k": "ear_with_hearing_aid-1F3FE",
      "n": "ear_with_hearing_aid",
      "e": "🦻🏾"
    },
    "1F3FF": {
      "k": "ear_with_hearing_aid-1F3FF",
      "n": "ear_with_hearing_aid",
      "e": "🦻🏿"
    }
  }
}, {
  "n": ["flag-ph"],
  "e": "🇵🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["partly_sunny_rain", "sun_behind_rain_cloud"],
  "e": "🌦️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["nose"],
  "e": "👃",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "nose-1F3FB",
      "n": "nose",
      "e": "👃🏻"
    },
    "1F3FC": {
      "k": "nose-1F3FC",
      "n": "nose",
      "e": "👃🏼"
    },
    "1F3FD": {
      "k": "nose-1F3FD",
      "n": "nose",
      "e": "👃🏽"
    },
    "1F3FE": {
      "k": "nose-1F3FE",
      "n": "nose",
      "e": "👃🏾"
    },
    "1F3FF": {
      "k": "nose-1F3FF",
      "n": "nose",
      "e": "👃🏿"
    }
  }
}, {
  "n": ["shield"],
  "e": "🛡️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["large_brown_circle"],
  "e": "🟤",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["flag-pk"],
  "e": "🇵🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rain_cloud"],
  "e": "🌧️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["wrench"],
  "e": "🔧",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["brain"],
  "e": "🧠",
  "c": 9,
  "ver": "5.0"
}, {
  "n": ["black_circle"],
  "e": "⚫",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-pl"],
  "e": "🇵🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["snow_cloud"],
  "e": "🌨️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["nut_and_bolt"],
  "e": "🔩",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["tooth"],
  "e": "🦷",
  "c": 9,
  "ver": "11.0"
}, {
  "n": ["white_circle"],
  "e": "⚪",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-pm"],
  "e": "🇵🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["lightning", "lightning_cloud"],
  "e": "🌩️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["large_red_square"],
  "e": "🟥",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["bone"],
  "e": "🦴",
  "c": 9,
  "ver": "11.0"
}, {
  "n": ["gear"],
  "e": "⚙️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-pn"],
  "e": "🇵🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["tornado", "tornado_cloud"],
  "e": "🌪️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["eyes"],
  "e": "👀",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["compression"],
  "e": "🗜️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["large_orange_square"],
  "e": "🟧",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["flag-pr"],
  "e": "🇵🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["fog"],
  "e": "🌫️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["eye"],
  "e": "👁️",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["large_yellow_square"],
  "e": "🟨",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["scales"],
  "e": "⚖️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-ps"],
  "e": "🇵🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["wind_blowing_face"],
  "e": "🌬️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["tongue"],
  "e": "👅",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["large_green_square"],
  "e": "🟩",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["probing_cane"],
  "e": "🦯",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-pt"],
  "e": "🇵🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["cyclone"],
  "e": "🌀",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["lips"],
  "e": "👄",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["link"],
  "e": "🔗",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["large_blue_square"],
  "e": "🟦",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["flag-pw"],
  "e": "🇵🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["rainbow"],
  "e": "🌈",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["baby"],
  "e": "👶",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "baby-1F3FB",
      "n": "baby",
      "e": "👶🏻"
    },
    "1F3FC": {
      "k": "baby-1F3FC",
      "n": "baby",
      "e": "👶🏼"
    },
    "1F3FD": {
      "k": "baby-1F3FD",
      "n": "baby",
      "e": "👶🏽"
    },
    "1F3FE": {
      "k": "baby-1F3FE",
      "n": "baby",
      "e": "👶🏾"
    },
    "1F3FF": {
      "k": "baby-1F3FF",
      "n": "baby",
      "e": "👶🏿"
    }
  }
}, {
  "n": ["large_purple_square"],
  "e": "🟪",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["chains"],
  "e": "⛓️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-py"],
  "e": "🇵🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["closed_umbrella"],
  "e": "🌂",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["large_brown_square"],
  "e": "🟫",
  "c": 4,
  "ver": "12.1"
}, {
  "n": ["child"],
  "e": "🧒",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "child-1F3FB",
      "n": "child",
      "e": "🧒🏻"
    },
    "1F3FC": {
      "k": "child-1F3FC",
      "n": "child",
      "e": "🧒🏼"
    },
    "1F3FD": {
      "k": "child-1F3FD",
      "n": "child",
      "e": "🧒🏽"
    },
    "1F3FE": {
      "k": "child-1F3FE",
      "n": "child",
      "e": "🧒🏾"
    },
    "1F3FF": {
      "k": "child-1F3FF",
      "n": "child",
      "e": "🧒🏿"
    }
  }
}, {
  "n": ["toolbox"],
  "e": "🧰",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-qa"],
  "e": "🇶🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["boy"],
  "e": "👦",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "boy-1F3FB",
      "n": "boy",
      "e": "👦🏻"
    },
    "1F3FC": {
      "k": "boy-1F3FC",
      "n": "boy",
      "e": "👦🏼"
    },
    "1F3FD": {
      "k": "boy-1F3FD",
      "n": "boy",
      "e": "👦🏽"
    },
    "1F3FE": {
      "k": "boy-1F3FE",
      "n": "boy",
      "e": "👦🏾"
    },
    "1F3FF": {
      "k": "boy-1F3FF",
      "n": "boy",
      "e": "👦🏿"
    }
  }
}, {
  "n": ["magnet"],
  "e": "🧲",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["umbrella"],
  "e": "☂️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["black_large_square"],
  "e": "⬛",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-re"],
  "e": "🇷🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["girl"],
  "e": "👧",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "girl-1F3FB",
      "n": "girl",
      "e": "👧🏻"
    },
    "1F3FC": {
      "k": "girl-1F3FC",
      "n": "girl",
      "e": "👧🏼"
    },
    "1F3FD": {
      "k": "girl-1F3FD",
      "n": "girl",
      "e": "👧🏽"
    },
    "1F3FE": {
      "k": "girl-1F3FE",
      "n": "girl",
      "e": "👧🏾"
    },
    "1F3FF": {
      "k": "girl-1F3FF",
      "n": "girl",
      "e": "👧🏿"
    }
  }
}, {
  "n": ["umbrella_with_rain_drops"],
  "e": "☔",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["alembic"],
  "e": "⚗️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["white_large_square"],
  "e": "⬜",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-ro"],
  "e": "🇷🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["adult"],
  "e": "🧑",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "adult-1F3FB",
      "n": "adult",
      "e": "🧑🏻"
    },
    "1F3FC": {
      "k": "adult-1F3FC",
      "n": "adult",
      "e": "🧑🏼"
    },
    "1F3FD": {
      "k": "adult-1F3FD",
      "n": "adult",
      "e": "🧑🏽"
    },
    "1F3FE": {
      "k": "adult-1F3FE",
      "n": "adult",
      "e": "🧑🏾"
    },
    "1F3FF": {
      "k": "adult-1F3FF",
      "n": "adult",
      "e": "🧑🏿"
    }
  }
}, {
  "n": ["test_tube"],
  "e": "🧪",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["black_medium_square"],
  "e": "◼️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["umbrella_on_ground"],
  "e": "⛱️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-rs"],
  "e": "🇷🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["person_with_blond_hair"],
  "e": "👱",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "person_with_blond_hair-1F3FB",
      "n": "person_with_blond_hair",
      "e": "👱🏻"
    },
    "1F3FC": {
      "k": "person_with_blond_hair-1F3FC",
      "n": "person_with_blond_hair",
      "e": "👱🏼"
    },
    "1F3FD": {
      "k": "person_with_blond_hair-1F3FD",
      "n": "person_with_blond_hair",
      "e": "👱🏽"
    },
    "1F3FE": {
      "k": "person_with_blond_hair-1F3FE",
      "n": "person_with_blond_hair",
      "e": "👱🏾"
    },
    "1F3FF": {
      "k": "person_with_blond_hair-1F3FF",
      "n": "person_with_blond_hair",
      "e": "👱🏿"
    }
  }
}, {
  "n": ["petri_dish"],
  "e": "🧫",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["white_medium_square"],
  "e": "◻️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["zap"],
  "e": "⚡",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["ru", "flag-ru"],
  "e": "🇷🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man"],
  "e": "👨",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "man-1F3FB",
      "n": "man",
      "e": "👨🏻"
    },
    "1F3FC": {
      "k": "man-1F3FC",
      "n": "man",
      "e": "👨🏼"
    },
    "1F3FD": {
      "k": "man-1F3FD",
      "n": "man",
      "e": "👨🏽"
    },
    "1F3FE": {
      "k": "man-1F3FE",
      "n": "man",
      "e": "👨🏾"
    },
    "1F3FF": {
      "k": "man-1F3FF",
      "n": "man",
      "e": "👨🏿"
    }
  }
}, {
  "n": ["dna"],
  "e": "🧬",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["black_medium_small_square"],
  "e": "◾",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["snowflake"],
  "e": "❄️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-rw"],
  "e": "🇷🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["microscope"],
  "e": "🔬",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["bearded_person"],
  "e": "🧔",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "bearded_person-1F3FB",
      "n": "bearded_person",
      "e": "🧔🏻"
    },
    "1F3FC": {
      "k": "bearded_person-1F3FC",
      "n": "bearded_person",
      "e": "🧔🏼"
    },
    "1F3FD": {
      "k": "bearded_person-1F3FD",
      "n": "bearded_person",
      "e": "🧔🏽"
    },
    "1F3FE": {
      "k": "bearded_person-1F3FE",
      "n": "bearded_person",
      "e": "🧔🏾"
    },
    "1F3FF": {
      "k": "bearded_person-1F3FF",
      "n": "bearded_person",
      "e": "🧔🏿"
    }
  }
}, {
  "n": ["white_medium_small_square"],
  "e": "◽",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["snowman"],
  "e": "☃️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-sa"],
  "e": "🇸🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["red_haired_man"],
  "e": "👨‍🦰",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "red_haired_man-1F3FB",
      "n": "red_haired_man",
      "e": "👨🏻‍🦰"
    },
    "1F3FC": {
      "k": "red_haired_man-1F3FC",
      "n": "red_haired_man",
      "e": "👨🏼‍🦰"
    },
    "1F3FD": {
      "k": "red_haired_man-1F3FD",
      "n": "red_haired_man",
      "e": "👨🏽‍🦰"
    },
    "1F3FE": {
      "k": "red_haired_man-1F3FE",
      "n": "red_haired_man",
      "e": "👨🏾‍🦰"
    },
    "1F3FF": {
      "k": "red_haired_man-1F3FF",
      "n": "red_haired_man",
      "e": "👨🏿‍🦰"
    }
  }
}, {
  "n": ["telescope"],
  "e": "🔭",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["black_small_square"],
  "e": "▪️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["snowman_without_snow"],
  "e": "⛄",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-sb"],
  "e": "🇸🇧",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["curly_haired_man"],
  "e": "👨‍🦱",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "curly_haired_man-1F3FB",
      "n": "curly_haired_man",
      "e": "👨🏻‍🦱"
    },
    "1F3FC": {
      "k": "curly_haired_man-1F3FC",
      "n": "curly_haired_man",
      "e": "👨🏼‍🦱"
    },
    "1F3FD": {
      "k": "curly_haired_man-1F3FD",
      "n": "curly_haired_man",
      "e": "👨🏽‍🦱"
    },
    "1F3FE": {
      "k": "curly_haired_man-1F3FE",
      "n": "curly_haired_man",
      "e": "👨🏾‍🦱"
    },
    "1F3FF": {
      "k": "curly_haired_man-1F3FF",
      "n": "curly_haired_man",
      "e": "👨🏿‍🦱"
    }
  }
}, {
  "n": ["satellite_antenna"],
  "e": "📡",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["white_small_square"],
  "e": "▫️",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["comet"],
  "e": "☄️",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["flag-sc"],
  "e": "🇸🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["white_haired_man"],
  "e": "👨‍🦳",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "white_haired_man-1F3FB",
      "n": "white_haired_man",
      "e": "👨🏻‍🦳"
    },
    "1F3FC": {
      "k": "white_haired_man-1F3FC",
      "n": "white_haired_man",
      "e": "👨🏼‍🦳"
    },
    "1F3FD": {
      "k": "white_haired_man-1F3FD",
      "n": "white_haired_man",
      "e": "👨🏽‍🦳"
    },
    "1F3FE": {
      "k": "white_haired_man-1F3FE",
      "n": "white_haired_man",
      "e": "👨🏾‍🦳"
    },
    "1F3FF": {
      "k": "white_haired_man-1F3FF",
      "n": "white_haired_man",
      "e": "👨🏿‍🦳"
    }
  }
}, {
  "n": ["syringe"],
  "e": "💉",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["fire"],
  "e": "🔥",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["large_orange_diamond"],
  "e": "🔶",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-sd"],
  "e": "🇸🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["bald_man"],
  "e": "👨‍🦲",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "bald_man-1F3FB",
      "n": "bald_man",
      "e": "👨🏻‍🦲"
    },
    "1F3FC": {
      "k": "bald_man-1F3FC",
      "n": "bald_man",
      "e": "👨🏼‍🦲"
    },
    "1F3FD": {
      "k": "bald_man-1F3FD",
      "n": "bald_man",
      "e": "👨🏽‍🦲"
    },
    "1F3FE": {
      "k": "bald_man-1F3FE",
      "n": "bald_man",
      "e": "👨🏾‍🦲"
    },
    "1F3FF": {
      "k": "bald_man-1F3FF",
      "n": "bald_man",
      "e": "👨🏿‍🦲"
    }
  }
}, {
  "n": ["droplet"],
  "e": "💧",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["large_blue_diamond"],
  "e": "🔷",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["drop_of_blood"],
  "e": "🩸",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-se"],
  "e": "🇸🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["ocean"],
  "e": "🌊",
  "c": 0,
  "ver": "2.0"
}, {
  "n": ["woman"],
  "e": "👩",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "woman-1F3FB",
      "n": "woman",
      "e": "👩🏻"
    },
    "1F3FC": {
      "k": "woman-1F3FC",
      "n": "woman",
      "e": "👩🏼"
    },
    "1F3FD": {
      "k": "woman-1F3FD",
      "n": "woman",
      "e": "👩🏽"
    },
    "1F3FE": {
      "k": "woman-1F3FE",
      "n": "woman",
      "e": "👩🏾"
    },
    "1F3FF": {
      "k": "woman-1F3FF",
      "n": "woman",
      "e": "👩🏿"
    }
  }
}, {
  "n": ["pill"],
  "e": "💊",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["small_orange_diamond"],
  "e": "🔸",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["flag-sg"],
  "e": "🇸🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["red_haired_woman"],
  "e": "👩‍🦰",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "red_haired_woman-1F3FB",
      "n": "red_haired_woman",
      "e": "👩🏻‍🦰"
    },
    "1F3FC": {
      "k": "red_haired_woman-1F3FC",
      "n": "red_haired_woman",
      "e": "👩🏼‍🦰"
    },
    "1F3FD": {
      "k": "red_haired_woman-1F3FD",
      "n": "red_haired_woman",
      "e": "👩🏽‍🦰"
    },
    "1F3FE": {
      "k": "red_haired_woman-1F3FE",
      "n": "red_haired_woman",
      "e": "👩🏾‍🦰"
    },
    "1F3FF": {
      "k": "red_haired_woman-1F3FF",
      "n": "red_haired_woman",
      "e": "👩🏿‍🦰"
    }
  }
}, {
  "n": ["small_blue_diamond"],
  "e": "🔹",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["adhesive_bandage"],
  "e": "🩹",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-sh"],
  "e": "🇸🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["small_red_triangle"],
  "e": "🔺",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["red_haired_person"],
  "e": "🧑‍🦰",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "red_haired_person-1F3FB",
      "n": "red_haired_person",
      "e": "🧑🏻‍🦰"
    },
    "1F3FC": {
      "k": "red_haired_person-1F3FC",
      "n": "red_haired_person",
      "e": "🧑🏼‍🦰"
    },
    "1F3FD": {
      "k": "red_haired_person-1F3FD",
      "n": "red_haired_person",
      "e": "🧑🏽‍🦰"
    },
    "1F3FE": {
      "k": "red_haired_person-1F3FE",
      "n": "red_haired_person",
      "e": "🧑🏾‍🦰"
    },
    "1F3FF": {
      "k": "red_haired_person-1F3FF",
      "n": "red_haired_person",
      "e": "🧑🏿‍🦰"
    }
  }
}, {
  "n": ["stethoscope"],
  "e": "🩺",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-si"],
  "e": "🇸🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["curly_haired_woman"],
  "e": "👩‍🦱",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "curly_haired_woman-1F3FB",
      "n": "curly_haired_woman",
      "e": "👩🏻‍🦱"
    },
    "1F3FC": {
      "k": "curly_haired_woman-1F3FC",
      "n": "curly_haired_woman",
      "e": "👩🏼‍🦱"
    },
    "1F3FD": {
      "k": "curly_haired_woman-1F3FD",
      "n": "curly_haired_woman",
      "e": "👩🏽‍🦱"
    },
    "1F3FE": {
      "k": "curly_haired_woman-1F3FE",
      "n": "curly_haired_woman",
      "e": "👩🏾‍🦱"
    },
    "1F3FF": {
      "k": "curly_haired_woman-1F3FF",
      "n": "curly_haired_woman",
      "e": "👩🏿‍🦱"
    }
  }
}, {
  "n": ["small_red_triangle_down"],
  "e": "🔻",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["door"],
  "e": "🚪",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-sj"],
  "e": "🇸🇯",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["diamond_shape_with_a_dot_inside"],
  "e": "💠",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["bed"],
  "e": "🛏️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["curly_haired_person"],
  "e": "🧑‍🦱",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "curly_haired_person-1F3FB",
      "n": "curly_haired_person",
      "e": "🧑🏻‍🦱"
    },
    "1F3FC": {
      "k": "curly_haired_person-1F3FC",
      "n": "curly_haired_person",
      "e": "🧑🏼‍🦱"
    },
    "1F3FD": {
      "k": "curly_haired_person-1F3FD",
      "n": "curly_haired_person",
      "e": "🧑🏽‍🦱"
    },
    "1F3FE": {
      "k": "curly_haired_person-1F3FE",
      "n": "curly_haired_person",
      "e": "🧑🏾‍🦱"
    },
    "1F3FF": {
      "k": "curly_haired_person-1F3FF",
      "n": "curly_haired_person",
      "e": "🧑🏿‍🦱"
    }
  }
}, {
  "n": ["flag-sk"],
  "e": "🇸🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["white_haired_woman"],
  "e": "👩‍🦳",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "white_haired_woman-1F3FB",
      "n": "white_haired_woman",
      "e": "👩🏻‍🦳"
    },
    "1F3FC": {
      "k": "white_haired_woman-1F3FC",
      "n": "white_haired_woman",
      "e": "👩🏼‍🦳"
    },
    "1F3FD": {
      "k": "white_haired_woman-1F3FD",
      "n": "white_haired_woman",
      "e": "👩🏽‍🦳"
    },
    "1F3FE": {
      "k": "white_haired_woman-1F3FE",
      "n": "white_haired_woman",
      "e": "👩🏾‍🦳"
    },
    "1F3FF": {
      "k": "white_haired_woman-1F3FF",
      "n": "white_haired_woman",
      "e": "👩🏿‍🦳"
    }
  }
}, {
  "n": ["radio_button"],
  "e": "🔘",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["couch_and_lamp"],
  "e": "🛋️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-sl"],
  "e": "🇸🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["white_square_button"],
  "e": "🔳",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["white_haired_person"],
  "e": "🧑‍🦳",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "white_haired_person-1F3FB",
      "n": "white_haired_person",
      "e": "🧑🏻‍🦳"
    },
    "1F3FC": {
      "k": "white_haired_person-1F3FC",
      "n": "white_haired_person",
      "e": "🧑🏼‍🦳"
    },
    "1F3FD": {
      "k": "white_haired_person-1F3FD",
      "n": "white_haired_person",
      "e": "🧑🏽‍🦳"
    },
    "1F3FE": {
      "k": "white_haired_person-1F3FE",
      "n": "white_haired_person",
      "e": "🧑🏾‍🦳"
    },
    "1F3FF": {
      "k": "white_haired_person-1F3FF",
      "n": "white_haired_person",
      "e": "🧑🏿‍🦳"
    }
  }
}, {
  "n": ["chair"],
  "e": "🪑",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-sm"],
  "e": "🇸🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["bald_woman"],
  "e": "👩‍🦲",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "bald_woman-1F3FB",
      "n": "bald_woman",
      "e": "👩🏻‍🦲"
    },
    "1F3FC": {
      "k": "bald_woman-1F3FC",
      "n": "bald_woman",
      "e": "👩🏼‍🦲"
    },
    "1F3FD": {
      "k": "bald_woman-1F3FD",
      "n": "bald_woman",
      "e": "👩🏽‍🦲"
    },
    "1F3FE": {
      "k": "bald_woman-1F3FE",
      "n": "bald_woman",
      "e": "👩🏾‍🦲"
    },
    "1F3FF": {
      "k": "bald_woman-1F3FF",
      "n": "bald_woman",
      "e": "👩🏿‍🦲"
    }
  }
}, {
  "n": ["black_square_button"],
  "e": "🔲",
  "c": 4,
  "ver": "2.0"
}, {
  "n": ["toilet"],
  "e": "🚽",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-sn"],
  "e": "🇸🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["shower"],
  "e": "🚿",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["bald_person"],
  "e": "🧑‍🦲",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "bald_person-1F3FB",
      "n": "bald_person",
      "e": "🧑🏻‍🦲"
    },
    "1F3FC": {
      "k": "bald_person-1F3FC",
      "n": "bald_person",
      "e": "🧑🏼‍🦲"
    },
    "1F3FD": {
      "k": "bald_person-1F3FD",
      "n": "bald_person",
      "e": "🧑🏽‍🦲"
    },
    "1F3FE": {
      "k": "bald_person-1F3FE",
      "n": "bald_person",
      "e": "🧑🏾‍🦲"
    },
    "1F3FF": {
      "k": "bald_person-1F3FF",
      "n": "bald_person",
      "e": "🧑🏿‍🦲"
    }
  }
}, {
  "n": ["flag-so"],
  "e": "🇸🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["blond-haired-woman"],
  "e": "👱‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "blond-haired-woman-1F3FB",
      "n": "blond-haired-woman",
      "e": "👱🏻‍♀️"
    },
    "1F3FC": {
      "k": "blond-haired-woman-1F3FC",
      "n": "blond-haired-woman",
      "e": "👱🏼‍♀️"
    },
    "1F3FD": {
      "k": "blond-haired-woman-1F3FD",
      "n": "blond-haired-woman",
      "e": "👱🏽‍♀️"
    },
    "1F3FE": {
      "k": "blond-haired-woman-1F3FE",
      "n": "blond-haired-woman",
      "e": "👱🏾‍♀️"
    },
    "1F3FF": {
      "k": "blond-haired-woman-1F3FF",
      "n": "blond-haired-woman",
      "e": "👱🏿‍♀️"
    }
  }
}, {
  "n": ["bathtub"],
  "e": "🛁",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-sr"],
  "e": "🇸🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["blond-haired-man"],
  "e": "👱‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "blond-haired-man-1F3FB",
      "n": "blond-haired-man",
      "e": "👱🏻‍♂️"
    },
    "1F3FC": {
      "k": "blond-haired-man-1F3FC",
      "n": "blond-haired-man",
      "e": "👱🏼‍♂️"
    },
    "1F3FD": {
      "k": "blond-haired-man-1F3FD",
      "n": "blond-haired-man",
      "e": "👱🏽‍♂️"
    },
    "1F3FE": {
      "k": "blond-haired-man-1F3FE",
      "n": "blond-haired-man",
      "e": "👱🏾‍♂️"
    },
    "1F3FF": {
      "k": "blond-haired-man-1F3FF",
      "n": "blond-haired-man",
      "e": "👱🏿‍♂️"
    }
  }
}, {
  "n": ["razor"],
  "e": "🪒",
  "c": 7,
  "ver": "12.1"
}, {
  "n": ["flag-ss"],
  "e": "🇸🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["older_adult"],
  "e": "🧓",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "older_adult-1F3FB",
      "n": "older_adult",
      "e": "🧓🏻"
    },
    "1F3FC": {
      "k": "older_adult-1F3FC",
      "n": "older_adult",
      "e": "🧓🏼"
    },
    "1F3FD": {
      "k": "older_adult-1F3FD",
      "n": "older_adult",
      "e": "🧓🏽"
    },
    "1F3FE": {
      "k": "older_adult-1F3FE",
      "n": "older_adult",
      "e": "🧓🏾"
    },
    "1F3FF": {
      "k": "older_adult-1F3FF",
      "n": "older_adult",
      "e": "🧓🏿"
    }
  }
}, {
  "n": ["lotion_bottle"],
  "e": "🧴",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-st"],
  "e": "🇸🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["older_man"],
  "e": "👴",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "older_man-1F3FB",
      "n": "older_man",
      "e": "👴🏻"
    },
    "1F3FC": {
      "k": "older_man-1F3FC",
      "n": "older_man",
      "e": "👴🏼"
    },
    "1F3FD": {
      "k": "older_man-1F3FD",
      "n": "older_man",
      "e": "👴🏽"
    },
    "1F3FE": {
      "k": "older_man-1F3FE",
      "n": "older_man",
      "e": "👴🏾"
    },
    "1F3FF": {
      "k": "older_man-1F3FF",
      "n": "older_man",
      "e": "👴🏿"
    }
  }
}, {
  "n": ["safety_pin"],
  "e": "🧷",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-sv"],
  "e": "🇸🇻",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["older_woman"],
  "e": "👵",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "older_woman-1F3FB",
      "n": "older_woman",
      "e": "👵🏻"
    },
    "1F3FC": {
      "k": "older_woman-1F3FC",
      "n": "older_woman",
      "e": "👵🏼"
    },
    "1F3FD": {
      "k": "older_woman-1F3FD",
      "n": "older_woman",
      "e": "👵🏽"
    },
    "1F3FE": {
      "k": "older_woman-1F3FE",
      "n": "older_woman",
      "e": "👵🏾"
    },
    "1F3FF": {
      "k": "older_woman-1F3FF",
      "n": "older_woman",
      "e": "👵🏿"
    }
  }
}, {
  "n": ["broom"],
  "e": "🧹",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-sx"],
  "e": "🇸🇽",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["person_frowning"],
  "e": "🙍",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "person_frowning-1F3FB",
      "n": "person_frowning",
      "e": "🙍🏻"
    },
    "1F3FC": {
      "k": "person_frowning-1F3FC",
      "n": "person_frowning",
      "e": "🙍🏼"
    },
    "1F3FD": {
      "k": "person_frowning-1F3FD",
      "n": "person_frowning",
      "e": "🙍🏽"
    },
    "1F3FE": {
      "k": "person_frowning-1F3FE",
      "n": "person_frowning",
      "e": "🙍🏾"
    },
    "1F3FF": {
      "k": "person_frowning-1F3FF",
      "n": "person_frowning",
      "e": "🙍🏿"
    }
  }
}, {
  "n": ["basket"],
  "e": "🧺",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-sy"],
  "e": "🇸🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-frowning"],
  "e": "🙍‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-frowning-1F3FB",
      "n": "man-frowning",
      "e": "🙍🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-frowning-1F3FC",
      "n": "man-frowning",
      "e": "🙍🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-frowning-1F3FD",
      "n": "man-frowning",
      "e": "🙍🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-frowning-1F3FE",
      "n": "man-frowning",
      "e": "🙍🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-frowning-1F3FF",
      "n": "man-frowning",
      "e": "🙍🏿‍♂️"
    }
  }
}, {
  "n": ["roll_of_paper"],
  "e": "🧻",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-sz"],
  "e": "🇸🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-frowning"],
  "e": "🙍‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-frowning-1F3FB",
      "n": "woman-frowning",
      "e": "🙍🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-frowning-1F3FC",
      "n": "woman-frowning",
      "e": "🙍🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-frowning-1F3FD",
      "n": "woman-frowning",
      "e": "🙍🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-frowning-1F3FE",
      "n": "woman-frowning",
      "e": "🙍🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-frowning-1F3FF",
      "n": "woman-frowning",
      "e": "🙍🏿‍♀️"
    }
  }
}, {
  "n": ["soap"],
  "e": "🧼",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-ta"],
  "e": "🇹🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["person_with_pouting_face"],
  "e": "🙎",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "person_with_pouting_face-1F3FB",
      "n": "person_with_pouting_face",
      "e": "🙎🏻"
    },
    "1F3FC": {
      "k": "person_with_pouting_face-1F3FC",
      "n": "person_with_pouting_face",
      "e": "🙎🏼"
    },
    "1F3FD": {
      "k": "person_with_pouting_face-1F3FD",
      "n": "person_with_pouting_face",
      "e": "🙎🏽"
    },
    "1F3FE": {
      "k": "person_with_pouting_face-1F3FE",
      "n": "person_with_pouting_face",
      "e": "🙎🏾"
    },
    "1F3FF": {
      "k": "person_with_pouting_face-1F3FF",
      "n": "person_with_pouting_face",
      "e": "🙎🏿"
    }
  }
}, {
  "n": ["sponge"],
  "e": "🧽",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-tc"],
  "e": "🇹🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-pouting"],
  "e": "🙎‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-pouting-1F3FB",
      "n": "man-pouting",
      "e": "🙎🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-pouting-1F3FC",
      "n": "man-pouting",
      "e": "🙎🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-pouting-1F3FD",
      "n": "man-pouting",
      "e": "🙎🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-pouting-1F3FE",
      "n": "man-pouting",
      "e": "🙎🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-pouting-1F3FF",
      "n": "man-pouting",
      "e": "🙎🏿‍♂️"
    }
  }
}, {
  "n": ["fire_extinguisher"],
  "e": "🧯",
  "c": 7,
  "ver": "11.0"
}, {
  "n": ["flag-td"],
  "e": "🇹🇩",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-pouting"],
  "e": "🙎‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-pouting-1F3FB",
      "n": "woman-pouting",
      "e": "🙎🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-pouting-1F3FC",
      "n": "woman-pouting",
      "e": "🙎🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-pouting-1F3FD",
      "n": "woman-pouting",
      "e": "🙎🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-pouting-1F3FE",
      "n": "woman-pouting",
      "e": "🙎🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-pouting-1F3FF",
      "n": "woman-pouting",
      "e": "🙎🏿‍♀️"
    }
  }
}, {
  "n": ["shopping_trolley"],
  "e": "🛒",
  "c": 7,
  "ver": "4.0"
}, {
  "n": ["flag-tf"],
  "e": "🇹🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["no_good"],
  "e": "🙅",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "no_good-1F3FB",
      "n": "no_good",
      "e": "🙅🏻"
    },
    "1F3FC": {
      "k": "no_good-1F3FC",
      "n": "no_good",
      "e": "🙅🏼"
    },
    "1F3FD": {
      "k": "no_good-1F3FD",
      "n": "no_good",
      "e": "🙅🏽"
    },
    "1F3FE": {
      "k": "no_good-1F3FE",
      "n": "no_good",
      "e": "🙅🏾"
    },
    "1F3FF": {
      "k": "no_good-1F3FF",
      "n": "no_good",
      "e": "🙅🏿"
    }
  }
}, {
  "n": ["smoking"],
  "e": "🚬",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-tg"],
  "e": "🇹🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-gesturing-no"],
  "e": "🙅‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-gesturing-no-1F3FB",
      "n": "man-gesturing-no",
      "e": "🙅🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-gesturing-no-1F3FC",
      "n": "man-gesturing-no",
      "e": "🙅🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-gesturing-no-1F3FD",
      "n": "man-gesturing-no",
      "e": "🙅🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-gesturing-no-1F3FE",
      "n": "man-gesturing-no",
      "e": "🙅🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-gesturing-no-1F3FF",
      "n": "man-gesturing-no",
      "e": "🙅🏿‍♂️"
    }
  }
}, {
  "n": ["coffin"],
  "e": "⚰️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-th"],
  "e": "🇹🇭",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-gesturing-no"],
  "e": "🙅‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-gesturing-no-1F3FB",
      "n": "woman-gesturing-no",
      "e": "🙅🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-gesturing-no-1F3FC",
      "n": "woman-gesturing-no",
      "e": "🙅🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-gesturing-no-1F3FD",
      "n": "woman-gesturing-no",
      "e": "🙅🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-gesturing-no-1F3FE",
      "n": "woman-gesturing-no",
      "e": "🙅🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-gesturing-no-1F3FF",
      "n": "woman-gesturing-no",
      "e": "🙅🏿‍♀️"
    }
  }
}, {
  "n": ["funeral_urn"],
  "e": "⚱️",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["flag-tj"],
  "e": "🇹🇯",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["moyai"],
  "e": "🗿",
  "c": 7,
  "ver": "2.0"
}, {
  "n": ["ok_woman"],
  "e": "🙆",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "ok_woman-1F3FB",
      "n": "ok_woman",
      "e": "🙆🏻"
    },
    "1F3FC": {
      "k": "ok_woman-1F3FC",
      "n": "ok_woman",
      "e": "🙆🏼"
    },
    "1F3FD": {
      "k": "ok_woman-1F3FD",
      "n": "ok_woman",
      "e": "🙆🏽"
    },
    "1F3FE": {
      "k": "ok_woman-1F3FE",
      "n": "ok_woman",
      "e": "🙆🏾"
    },
    "1F3FF": {
      "k": "ok_woman-1F3FF",
      "n": "ok_woman",
      "e": "🙆🏿"
    }
  }
}, {
  "n": ["flag-tk"],
  "e": "🇹🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-gesturing-ok"],
  "e": "🙆‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-gesturing-ok-1F3FB",
      "n": "man-gesturing-ok",
      "e": "🙆🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-gesturing-ok-1F3FC",
      "n": "man-gesturing-ok",
      "e": "🙆🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-gesturing-ok-1F3FD",
      "n": "man-gesturing-ok",
      "e": "🙆🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-gesturing-ok-1F3FE",
      "n": "man-gesturing-ok",
      "e": "🙆🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-gesturing-ok-1F3FF",
      "n": "man-gesturing-ok",
      "e": "🙆🏿‍♂️"
    }
  }
}, {
  "n": ["flag-tl"],
  "e": "🇹🇱",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-gesturing-ok"],
  "e": "🙆‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-gesturing-ok-1F3FB",
      "n": "woman-gesturing-ok",
      "e": "🙆🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-gesturing-ok-1F3FC",
      "n": "woman-gesturing-ok",
      "e": "🙆🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-gesturing-ok-1F3FD",
      "n": "woman-gesturing-ok",
      "e": "🙆🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-gesturing-ok-1F3FE",
      "n": "woman-gesturing-ok",
      "e": "🙆🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-gesturing-ok-1F3FF",
      "n": "woman-gesturing-ok",
      "e": "🙆🏿‍♀️"
    }
  }
}, {
  "n": ["flag-tm"],
  "e": "🇹🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["information_desk_person"],
  "e": "💁",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "information_desk_person-1F3FB",
      "n": "information_desk_person",
      "e": "💁🏻"
    },
    "1F3FC": {
      "k": "information_desk_person-1F3FC",
      "n": "information_desk_person",
      "e": "💁🏼"
    },
    "1F3FD": {
      "k": "information_desk_person-1F3FD",
      "n": "information_desk_person",
      "e": "💁🏽"
    },
    "1F3FE": {
      "k": "information_desk_person-1F3FE",
      "n": "information_desk_person",
      "e": "💁🏾"
    },
    "1F3FF": {
      "k": "information_desk_person-1F3FF",
      "n": "information_desk_person",
      "e": "💁🏿"
    }
  }
}, {
  "n": ["flag-tn"],
  "e": "🇹🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-tipping-hand"],
  "e": "💁‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-tipping-hand-1F3FB",
      "n": "man-tipping-hand",
      "e": "💁🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-tipping-hand-1F3FC",
      "n": "man-tipping-hand",
      "e": "💁🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-tipping-hand-1F3FD",
      "n": "man-tipping-hand",
      "e": "💁🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-tipping-hand-1F3FE",
      "n": "man-tipping-hand",
      "e": "💁🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-tipping-hand-1F3FF",
      "n": "man-tipping-hand",
      "e": "💁🏿‍♂️"
    }
  }
}, {
  "n": ["flag-to"],
  "e": "🇹🇴",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-tipping-hand"],
  "e": "💁‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-tipping-hand-1F3FB",
      "n": "woman-tipping-hand",
      "e": "💁🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-tipping-hand-1F3FC",
      "n": "woman-tipping-hand",
      "e": "💁🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-tipping-hand-1F3FD",
      "n": "woman-tipping-hand",
      "e": "💁🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-tipping-hand-1F3FE",
      "n": "woman-tipping-hand",
      "e": "💁🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-tipping-hand-1F3FF",
      "n": "woman-tipping-hand",
      "e": "💁🏿‍♀️"
    }
  }
}, {
  "n": ["flag-tr"],
  "e": "🇹🇷",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["raising_hand"],
  "e": "🙋",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "raising_hand-1F3FB",
      "n": "raising_hand",
      "e": "🙋🏻"
    },
    "1F3FC": {
      "k": "raising_hand-1F3FC",
      "n": "raising_hand",
      "e": "🙋🏼"
    },
    "1F3FD": {
      "k": "raising_hand-1F3FD",
      "n": "raising_hand",
      "e": "🙋🏽"
    },
    "1F3FE": {
      "k": "raising_hand-1F3FE",
      "n": "raising_hand",
      "e": "🙋🏾"
    },
    "1F3FF": {
      "k": "raising_hand-1F3FF",
      "n": "raising_hand",
      "e": "🙋🏿"
    }
  }
}, {
  "n": ["flag-tt"],
  "e": "🇹🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-raising-hand"],
  "e": "🙋‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-raising-hand-1F3FB",
      "n": "man-raising-hand",
      "e": "🙋🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-raising-hand-1F3FC",
      "n": "man-raising-hand",
      "e": "🙋🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-raising-hand-1F3FD",
      "n": "man-raising-hand",
      "e": "🙋🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-raising-hand-1F3FE",
      "n": "man-raising-hand",
      "e": "🙋🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-raising-hand-1F3FF",
      "n": "man-raising-hand",
      "e": "🙋🏿‍♂️"
    }
  }
}, {
  "n": ["flag-tv"],
  "e": "🇹🇻",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-raising-hand"],
  "e": "🙋‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-raising-hand-1F3FB",
      "n": "woman-raising-hand",
      "e": "🙋🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-raising-hand-1F3FC",
      "n": "woman-raising-hand",
      "e": "🙋🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-raising-hand-1F3FD",
      "n": "woman-raising-hand",
      "e": "🙋🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-raising-hand-1F3FE",
      "n": "woman-raising-hand",
      "e": "🙋🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-raising-hand-1F3FF",
      "n": "woman-raising-hand",
      "e": "🙋🏿‍♀️"
    }
  }
}, {
  "n": ["flag-tw"],
  "e": "🇹🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["deaf_person"],
  "e": "🧏",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "deaf_person-1F3FB",
      "n": "deaf_person",
      "e": "🧏🏻"
    },
    "1F3FC": {
      "k": "deaf_person-1F3FC",
      "n": "deaf_person",
      "e": "🧏🏼"
    },
    "1F3FD": {
      "k": "deaf_person-1F3FD",
      "n": "deaf_person",
      "e": "🧏🏽"
    },
    "1F3FE": {
      "k": "deaf_person-1F3FE",
      "n": "deaf_person",
      "e": "🧏🏾"
    },
    "1F3FF": {
      "k": "deaf_person-1F3FF",
      "n": "deaf_person",
      "e": "🧏🏿"
    }
  }
}, {
  "n": ["flag-tz"],
  "e": "🇹🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["deaf_man"],
  "e": "🧏‍♂️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "deaf_man-1F3FB",
      "n": "deaf_man",
      "e": "🧏🏻‍♂️"
    },
    "1F3FC": {
      "k": "deaf_man-1F3FC",
      "n": "deaf_man",
      "e": "🧏🏼‍♂️"
    },
    "1F3FD": {
      "k": "deaf_man-1F3FD",
      "n": "deaf_man",
      "e": "🧏🏽‍♂️"
    },
    "1F3FE": {
      "k": "deaf_man-1F3FE",
      "n": "deaf_man",
      "e": "🧏🏾‍♂️"
    },
    "1F3FF": {
      "k": "deaf_man-1F3FF",
      "n": "deaf_man",
      "e": "🧏🏿‍♂️"
    }
  }
}, {
  "n": ["flag-ua"],
  "e": "🇺🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["deaf_woman"],
  "e": "🧏‍♀️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "deaf_woman-1F3FB",
      "n": "deaf_woman",
      "e": "🧏🏻‍♀️"
    },
    "1F3FC": {
      "k": "deaf_woman-1F3FC",
      "n": "deaf_woman",
      "e": "🧏🏼‍♀️"
    },
    "1F3FD": {
      "k": "deaf_woman-1F3FD",
      "n": "deaf_woman",
      "e": "🧏🏽‍♀️"
    },
    "1F3FE": {
      "k": "deaf_woman-1F3FE",
      "n": "deaf_woman",
      "e": "🧏🏾‍♀️"
    },
    "1F3FF": {
      "k": "deaf_woman-1F3FF",
      "n": "deaf_woman",
      "e": "🧏🏿‍♀️"
    }
  }
}, {
  "n": ["flag-ug"],
  "e": "🇺🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["bow"],
  "e": "🙇",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "bow-1F3FB",
      "n": "bow",
      "e": "🙇🏻"
    },
    "1F3FC": {
      "k": "bow-1F3FC",
      "n": "bow",
      "e": "🙇🏼"
    },
    "1F3FD": {
      "k": "bow-1F3FD",
      "n": "bow",
      "e": "🙇🏽"
    },
    "1F3FE": {
      "k": "bow-1F3FE",
      "n": "bow",
      "e": "🙇🏾"
    },
    "1F3FF": {
      "k": "bow-1F3FF",
      "n": "bow",
      "e": "🙇🏿"
    }
  }
}, {
  "n": ["flag-um"],
  "e": "🇺🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-bowing"],
  "e": "🙇‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-bowing-1F3FB",
      "n": "man-bowing",
      "e": "🙇🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-bowing-1F3FC",
      "n": "man-bowing",
      "e": "🙇🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-bowing-1F3FD",
      "n": "man-bowing",
      "e": "🙇🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-bowing-1F3FE",
      "n": "man-bowing",
      "e": "🙇🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-bowing-1F3FF",
      "n": "man-bowing",
      "e": "🙇🏿‍♂️"
    }
  }
}, {
  "n": ["flag-un"],
  "e": "🇺🇳",
  "c": 3,
  "ver": "4.0"
}, {
  "n": ["woman-bowing"],
  "e": "🙇‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-bowing-1F3FB",
      "n": "woman-bowing",
      "e": "🙇🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-bowing-1F3FC",
      "n": "woman-bowing",
      "e": "🙇🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-bowing-1F3FD",
      "n": "woman-bowing",
      "e": "🙇🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-bowing-1F3FE",
      "n": "woman-bowing",
      "e": "🙇🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-bowing-1F3FF",
      "n": "woman-bowing",
      "e": "🙇🏿‍♀️"
    }
  }
}, {
  "n": ["us", "flag-us"],
  "e": "🇺🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["face_palm"],
  "e": "🤦",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "face_palm-1F3FB",
      "n": "face_palm",
      "e": "🤦🏻"
    },
    "1F3FC": {
      "k": "face_palm-1F3FC",
      "n": "face_palm",
      "e": "🤦🏼"
    },
    "1F3FD": {
      "k": "face_palm-1F3FD",
      "n": "face_palm",
      "e": "🤦🏽"
    },
    "1F3FE": {
      "k": "face_palm-1F3FE",
      "n": "face_palm",
      "e": "🤦🏾"
    },
    "1F3FF": {
      "k": "face_palm-1F3FF",
      "n": "face_palm",
      "e": "🤦🏿"
    }
  }
}, {
  "n": ["flag-uy"],
  "e": "🇺🇾",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-facepalming"],
  "e": "🤦‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-facepalming-1F3FB",
      "n": "man-facepalming",
      "e": "🤦🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-facepalming-1F3FC",
      "n": "man-facepalming",
      "e": "🤦🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-facepalming-1F3FD",
      "n": "man-facepalming",
      "e": "🤦🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-facepalming-1F3FE",
      "n": "man-facepalming",
      "e": "🤦🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-facepalming-1F3FF",
      "n": "man-facepalming",
      "e": "🤦🏿‍♂️"
    }
  }
}, {
  "n": ["flag-uz"],
  "e": "🇺🇿",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-facepalming"],
  "e": "🤦‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-facepalming-1F3FB",
      "n": "woman-facepalming",
      "e": "🤦🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-facepalming-1F3FC",
      "n": "woman-facepalming",
      "e": "🤦🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-facepalming-1F3FD",
      "n": "woman-facepalming",
      "e": "🤦🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-facepalming-1F3FE",
      "n": "woman-facepalming",
      "e": "🤦🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-facepalming-1F3FF",
      "n": "woman-facepalming",
      "e": "🤦🏿‍♀️"
    }
  }
}, {
  "n": ["flag-va"],
  "e": "🇻🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["shrug"],
  "e": "🤷",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "shrug-1F3FB",
      "n": "shrug",
      "e": "🤷🏻"
    },
    "1F3FC": {
      "k": "shrug-1F3FC",
      "n": "shrug",
      "e": "🤷🏼"
    },
    "1F3FD": {
      "k": "shrug-1F3FD",
      "n": "shrug",
      "e": "🤷🏽"
    },
    "1F3FE": {
      "k": "shrug-1F3FE",
      "n": "shrug",
      "e": "🤷🏾"
    },
    "1F3FF": {
      "k": "shrug-1F3FF",
      "n": "shrug",
      "e": "🤷🏿"
    }
  }
}, {
  "n": ["flag-vc"],
  "e": "🇻🇨",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["man-shrugging"],
  "e": "🤷‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-shrugging-1F3FB",
      "n": "man-shrugging",
      "e": "🤷🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-shrugging-1F3FC",
      "n": "man-shrugging",
      "e": "🤷🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-shrugging-1F3FD",
      "n": "man-shrugging",
      "e": "🤷🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-shrugging-1F3FE",
      "n": "man-shrugging",
      "e": "🤷🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-shrugging-1F3FF",
      "n": "man-shrugging",
      "e": "🤷🏿‍♂️"
    }
  }
}, {
  "n": ["flag-ve"],
  "e": "🇻🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["woman-shrugging"],
  "e": "🤷‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-shrugging-1F3FB",
      "n": "woman-shrugging",
      "e": "🤷🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-shrugging-1F3FC",
      "n": "woman-shrugging",
      "e": "🤷🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-shrugging-1F3FD",
      "n": "woman-shrugging",
      "e": "🤷🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-shrugging-1F3FE",
      "n": "woman-shrugging",
      "e": "🤷🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-shrugging-1F3FF",
      "n": "woman-shrugging",
      "e": "🤷🏿‍♀️"
    }
  }
}, {
  "n": ["flag-vg"],
  "e": "🇻🇬",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["health_worker"],
  "e": "🧑‍⚕️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "health_worker-1F3FB",
      "n": "health_worker",
      "e": "🧑🏻‍⚕️"
    },
    "1F3FC": {
      "k": "health_worker-1F3FC",
      "n": "health_worker",
      "e": "🧑🏼‍⚕️"
    },
    "1F3FD": {
      "k": "health_worker-1F3FD",
      "n": "health_worker",
      "e": "🧑🏽‍⚕️"
    },
    "1F3FE": {
      "k": "health_worker-1F3FE",
      "n": "health_worker",
      "e": "🧑🏾‍⚕️"
    },
    "1F3FF": {
      "k": "health_worker-1F3FF",
      "n": "health_worker",
      "e": "🧑🏿‍⚕️"
    }
  }
}, {
  "n": ["flag-vi"],
  "e": "🇻🇮",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["male-doctor"],
  "e": "👨‍⚕️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-doctor-1F3FB",
      "n": "male-doctor",
      "e": "👨🏻‍⚕️"
    },
    "1F3FC": {
      "k": "male-doctor-1F3FC",
      "n": "male-doctor",
      "e": "👨🏼‍⚕️"
    },
    "1F3FD": {
      "k": "male-doctor-1F3FD",
      "n": "male-doctor",
      "e": "👨🏽‍⚕️"
    },
    "1F3FE": {
      "k": "male-doctor-1F3FE",
      "n": "male-doctor",
      "e": "👨🏾‍⚕️"
    },
    "1F3FF": {
      "k": "male-doctor-1F3FF",
      "n": "male-doctor",
      "e": "👨🏿‍⚕️"
    }
  }
}, {
  "n": ["flag-vn"],
  "e": "🇻🇳",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["female-doctor"],
  "e": "👩‍⚕️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-doctor-1F3FB",
      "n": "female-doctor",
      "e": "👩🏻‍⚕️"
    },
    "1F3FC": {
      "k": "female-doctor-1F3FC",
      "n": "female-doctor",
      "e": "👩🏼‍⚕️"
    },
    "1F3FD": {
      "k": "female-doctor-1F3FD",
      "n": "female-doctor",
      "e": "👩🏽‍⚕️"
    },
    "1F3FE": {
      "k": "female-doctor-1F3FE",
      "n": "female-doctor",
      "e": "👩🏾‍⚕️"
    },
    "1F3FF": {
      "k": "female-doctor-1F3FF",
      "n": "female-doctor",
      "e": "👩🏿‍⚕️"
    }
  }
}, {
  "n": ["flag-vu"],
  "e": "🇻🇺",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["student"],
  "e": "🧑‍🎓",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "student-1F3FB",
      "n": "student",
      "e": "🧑🏻‍🎓"
    },
    "1F3FC": {
      "k": "student-1F3FC",
      "n": "student",
      "e": "🧑🏼‍🎓"
    },
    "1F3FD": {
      "k": "student-1F3FD",
      "n": "student",
      "e": "🧑🏽‍🎓"
    },
    "1F3FE": {
      "k": "student-1F3FE",
      "n": "student",
      "e": "🧑🏾‍🎓"
    },
    "1F3FF": {
      "k": "student-1F3FF",
      "n": "student",
      "e": "🧑🏿‍🎓"
    }
  }
}, {
  "n": ["flag-wf"],
  "e": "🇼🇫",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["male-student"],
  "e": "👨‍🎓",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-student-1F3FB",
      "n": "male-student",
      "e": "👨🏻‍🎓"
    },
    "1F3FC": {
      "k": "male-student-1F3FC",
      "n": "male-student",
      "e": "👨🏼‍🎓"
    },
    "1F3FD": {
      "k": "male-student-1F3FD",
      "n": "male-student",
      "e": "👨🏽‍🎓"
    },
    "1F3FE": {
      "k": "male-student-1F3FE",
      "n": "male-student",
      "e": "👨🏾‍🎓"
    },
    "1F3FF": {
      "k": "male-student-1F3FF",
      "n": "male-student",
      "e": "👨🏿‍🎓"
    }
  }
}, {
  "n": ["flag-ws"],
  "e": "🇼🇸",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["female-student"],
  "e": "👩‍🎓",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-student-1F3FB",
      "n": "female-student",
      "e": "👩🏻‍🎓"
    },
    "1F3FC": {
      "k": "female-student-1F3FC",
      "n": "female-student",
      "e": "👩🏼‍🎓"
    },
    "1F3FD": {
      "k": "female-student-1F3FD",
      "n": "female-student",
      "e": "👩🏽‍🎓"
    },
    "1F3FE": {
      "k": "female-student-1F3FE",
      "n": "female-student",
      "e": "👩🏾‍🎓"
    },
    "1F3FF": {
      "k": "female-student-1F3FF",
      "n": "female-student",
      "e": "👩🏿‍🎓"
    }
  }
}, {
  "n": ["flag-xk"],
  "e": "🇽🇰",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["teacher"],
  "e": "🧑‍🏫",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "teacher-1F3FB",
      "n": "teacher",
      "e": "🧑🏻‍🏫"
    },
    "1F3FC": {
      "k": "teacher-1F3FC",
      "n": "teacher",
      "e": "🧑🏼‍🏫"
    },
    "1F3FD": {
      "k": "teacher-1F3FD",
      "n": "teacher",
      "e": "🧑🏽‍🏫"
    },
    "1F3FE": {
      "k": "teacher-1F3FE",
      "n": "teacher",
      "e": "🧑🏾‍🏫"
    },
    "1F3FF": {
      "k": "teacher-1F3FF",
      "n": "teacher",
      "e": "🧑🏿‍🏫"
    }
  }
}, {
  "n": ["flag-ye"],
  "e": "🇾🇪",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["male-teacher"],
  "e": "👨‍🏫",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-teacher-1F3FB",
      "n": "male-teacher",
      "e": "👨🏻‍🏫"
    },
    "1F3FC": {
      "k": "male-teacher-1F3FC",
      "n": "male-teacher",
      "e": "👨🏼‍🏫"
    },
    "1F3FD": {
      "k": "male-teacher-1F3FD",
      "n": "male-teacher",
      "e": "👨🏽‍🏫"
    },
    "1F3FE": {
      "k": "male-teacher-1F3FE",
      "n": "male-teacher",
      "e": "👨🏾‍🏫"
    },
    "1F3FF": {
      "k": "male-teacher-1F3FF",
      "n": "male-teacher",
      "e": "👨🏿‍🏫"
    }
  }
}, {
  "n": ["flag-yt"],
  "e": "🇾🇹",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["female-teacher"],
  "e": "👩‍🏫",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-teacher-1F3FB",
      "n": "female-teacher",
      "e": "👩🏻‍🏫"
    },
    "1F3FC": {
      "k": "female-teacher-1F3FC",
      "n": "female-teacher",
      "e": "👩🏼‍🏫"
    },
    "1F3FD": {
      "k": "female-teacher-1F3FD",
      "n": "female-teacher",
      "e": "👩🏽‍🏫"
    },
    "1F3FE": {
      "k": "female-teacher-1F3FE",
      "n": "female-teacher",
      "e": "👩🏾‍🏫"
    },
    "1F3FF": {
      "k": "female-teacher-1F3FF",
      "n": "female-teacher",
      "e": "👩🏿‍🏫"
    }
  }
}, {
  "n": ["flag-za"],
  "e": "🇿🇦",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["judge"],
  "e": "🧑‍⚖️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "judge-1F3FB",
      "n": "judge",
      "e": "🧑🏻‍⚖️"
    },
    "1F3FC": {
      "k": "judge-1F3FC",
      "n": "judge",
      "e": "🧑🏼‍⚖️"
    },
    "1F3FD": {
      "k": "judge-1F3FD",
      "n": "judge",
      "e": "🧑🏽‍⚖️"
    },
    "1F3FE": {
      "k": "judge-1F3FE",
      "n": "judge",
      "e": "🧑🏾‍⚖️"
    },
    "1F3FF": {
      "k": "judge-1F3FF",
      "n": "judge",
      "e": "🧑🏿‍⚖️"
    }
  }
}, {
  "n": ["flag-zm"],
  "e": "🇿🇲",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["male-judge"],
  "e": "👨‍⚖️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-judge-1F3FB",
      "n": "male-judge",
      "e": "👨🏻‍⚖️"
    },
    "1F3FC": {
      "k": "male-judge-1F3FC",
      "n": "male-judge",
      "e": "👨🏼‍⚖️"
    },
    "1F3FD": {
      "k": "male-judge-1F3FD",
      "n": "male-judge",
      "e": "👨🏽‍⚖️"
    },
    "1F3FE": {
      "k": "male-judge-1F3FE",
      "n": "male-judge",
      "e": "👨🏾‍⚖️"
    },
    "1F3FF": {
      "k": "male-judge-1F3FF",
      "n": "male-judge",
      "e": "👨🏿‍⚖️"
    }
  }
}, {
  "n": ["flag-zw"],
  "e": "🇿🇼",
  "c": 3,
  "ver": "2.0"
}, {
  "n": ["female-judge"],
  "e": "👩‍⚖️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-judge-1F3FB",
      "n": "female-judge",
      "e": "👩🏻‍⚖️"
    },
    "1F3FC": {
      "k": "female-judge-1F3FC",
      "n": "female-judge",
      "e": "👩🏼‍⚖️"
    },
    "1F3FD": {
      "k": "female-judge-1F3FD",
      "n": "female-judge",
      "e": "👩🏽‍⚖️"
    },
    "1F3FE": {
      "k": "female-judge-1F3FE",
      "n": "female-judge",
      "e": "👩🏾‍⚖️"
    },
    "1F3FF": {
      "k": "female-judge-1F3FF",
      "n": "female-judge",
      "e": "👩🏿‍⚖️"
    }
  }
}, {
  "n": ["flag-england"],
  "e": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "c": 3,
  "ver": "5.0"
}, {
  "n": ["farmer"],
  "e": "🧑‍🌾",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "farmer-1F3FB",
      "n": "farmer",
      "e": "🧑🏻‍🌾"
    },
    "1F3FC": {
      "k": "farmer-1F3FC",
      "n": "farmer",
      "e": "🧑🏼‍🌾"
    },
    "1F3FD": {
      "k": "farmer-1F3FD",
      "n": "farmer",
      "e": "🧑🏽‍🌾"
    },
    "1F3FE": {
      "k": "farmer-1F3FE",
      "n": "farmer",
      "e": "🧑🏾‍🌾"
    },
    "1F3FF": {
      "k": "farmer-1F3FF",
      "n": "farmer",
      "e": "🧑🏿‍🌾"
    }
  }
}, {
  "n": ["flag-scotland"],
  "e": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "c": 3,
  "ver": "5.0"
}, {
  "n": ["male-farmer"],
  "e": "👨‍🌾",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-farmer-1F3FB",
      "n": "male-farmer",
      "e": "👨🏻‍🌾"
    },
    "1F3FC": {
      "k": "male-farmer-1F3FC",
      "n": "male-farmer",
      "e": "👨🏼‍🌾"
    },
    "1F3FD": {
      "k": "male-farmer-1F3FD",
      "n": "male-farmer",
      "e": "👨🏽‍🌾"
    },
    "1F3FE": {
      "k": "male-farmer-1F3FE",
      "n": "male-farmer",
      "e": "👨🏾‍🌾"
    },
    "1F3FF": {
      "k": "male-farmer-1F3FF",
      "n": "male-farmer",
      "e": "👨🏿‍🌾"
    }
  }
}, {
  "n": ["flag-wales"],
  "e": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  "c": 3,
  "ver": "5.0"
}, {
  "n": ["female-farmer"],
  "e": "👩‍🌾",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-farmer-1F3FB",
      "n": "female-farmer",
      "e": "👩🏻‍🌾"
    },
    "1F3FC": {
      "k": "female-farmer-1F3FC",
      "n": "female-farmer",
      "e": "👩🏼‍🌾"
    },
    "1F3FD": {
      "k": "female-farmer-1F3FD",
      "n": "female-farmer",
      "e": "👩🏽‍🌾"
    },
    "1F3FE": {
      "k": "female-farmer-1F3FE",
      "n": "female-farmer",
      "e": "👩🏾‍🌾"
    },
    "1F3FF": {
      "k": "female-farmer-1F3FF",
      "n": "female-farmer",
      "e": "👩🏿‍🌾"
    }
  }
}, {
  "n": ["cook"],
  "e": "🧑‍🍳",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "cook-1F3FB",
      "n": "cook",
      "e": "🧑🏻‍🍳"
    },
    "1F3FC": {
      "k": "cook-1F3FC",
      "n": "cook",
      "e": "🧑🏼‍🍳"
    },
    "1F3FD": {
      "k": "cook-1F3FD",
      "n": "cook",
      "e": "🧑🏽‍🍳"
    },
    "1F3FE": {
      "k": "cook-1F3FE",
      "n": "cook",
      "e": "🧑🏾‍🍳"
    },
    "1F3FF": {
      "k": "cook-1F3FF",
      "n": "cook",
      "e": "🧑🏿‍🍳"
    }
  }
}, {
  "n": ["male-cook"],
  "e": "👨‍🍳",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-cook-1F3FB",
      "n": "male-cook",
      "e": "👨🏻‍🍳"
    },
    "1F3FC": {
      "k": "male-cook-1F3FC",
      "n": "male-cook",
      "e": "👨🏼‍🍳"
    },
    "1F3FD": {
      "k": "male-cook-1F3FD",
      "n": "male-cook",
      "e": "👨🏽‍🍳"
    },
    "1F3FE": {
      "k": "male-cook-1F3FE",
      "n": "male-cook",
      "e": "👨🏾‍🍳"
    },
    "1F3FF": {
      "k": "male-cook-1F3FF",
      "n": "male-cook",
      "e": "👨🏿‍🍳"
    }
  }
}, {
  "n": ["female-cook"],
  "e": "👩‍🍳",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-cook-1F3FB",
      "n": "female-cook",
      "e": "👩🏻‍🍳"
    },
    "1F3FC": {
      "k": "female-cook-1F3FC",
      "n": "female-cook",
      "e": "👩🏼‍🍳"
    },
    "1F3FD": {
      "k": "female-cook-1F3FD",
      "n": "female-cook",
      "e": "👩🏽‍🍳"
    },
    "1F3FE": {
      "k": "female-cook-1F3FE",
      "n": "female-cook",
      "e": "👩🏾‍🍳"
    },
    "1F3FF": {
      "k": "female-cook-1F3FF",
      "n": "female-cook",
      "e": "👩🏿‍🍳"
    }
  }
}, {
  "n": ["mechanic"],
  "e": "🧑‍🔧",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "mechanic-1F3FB",
      "n": "mechanic",
      "e": "🧑🏻‍🔧"
    },
    "1F3FC": {
      "k": "mechanic-1F3FC",
      "n": "mechanic",
      "e": "🧑🏼‍🔧"
    },
    "1F3FD": {
      "k": "mechanic-1F3FD",
      "n": "mechanic",
      "e": "🧑🏽‍🔧"
    },
    "1F3FE": {
      "k": "mechanic-1F3FE",
      "n": "mechanic",
      "e": "🧑🏾‍🔧"
    },
    "1F3FF": {
      "k": "mechanic-1F3FF",
      "n": "mechanic",
      "e": "🧑🏿‍🔧"
    }
  }
}, {
  "n": ["male-mechanic"],
  "e": "👨‍🔧",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-mechanic-1F3FB",
      "n": "male-mechanic",
      "e": "👨🏻‍🔧"
    },
    "1F3FC": {
      "k": "male-mechanic-1F3FC",
      "n": "male-mechanic",
      "e": "👨🏼‍🔧"
    },
    "1F3FD": {
      "k": "male-mechanic-1F3FD",
      "n": "male-mechanic",
      "e": "👨🏽‍🔧"
    },
    "1F3FE": {
      "k": "male-mechanic-1F3FE",
      "n": "male-mechanic",
      "e": "👨🏾‍🔧"
    },
    "1F3FF": {
      "k": "male-mechanic-1F3FF",
      "n": "male-mechanic",
      "e": "👨🏿‍🔧"
    }
  }
}, {
  "n": ["female-mechanic"],
  "e": "👩‍🔧",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-mechanic-1F3FB",
      "n": "female-mechanic",
      "e": "👩🏻‍🔧"
    },
    "1F3FC": {
      "k": "female-mechanic-1F3FC",
      "n": "female-mechanic",
      "e": "👩🏼‍🔧"
    },
    "1F3FD": {
      "k": "female-mechanic-1F3FD",
      "n": "female-mechanic",
      "e": "👩🏽‍🔧"
    },
    "1F3FE": {
      "k": "female-mechanic-1F3FE",
      "n": "female-mechanic",
      "e": "👩🏾‍🔧"
    },
    "1F3FF": {
      "k": "female-mechanic-1F3FF",
      "n": "female-mechanic",
      "e": "👩🏿‍🔧"
    }
  }
}, {
  "n": ["factory_worker"],
  "e": "🧑‍🏭",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "factory_worker-1F3FB",
      "n": "factory_worker",
      "e": "🧑🏻‍🏭"
    },
    "1F3FC": {
      "k": "factory_worker-1F3FC",
      "n": "factory_worker",
      "e": "🧑🏼‍🏭"
    },
    "1F3FD": {
      "k": "factory_worker-1F3FD",
      "n": "factory_worker",
      "e": "🧑🏽‍🏭"
    },
    "1F3FE": {
      "k": "factory_worker-1F3FE",
      "n": "factory_worker",
      "e": "🧑🏾‍🏭"
    },
    "1F3FF": {
      "k": "factory_worker-1F3FF",
      "n": "factory_worker",
      "e": "🧑🏿‍🏭"
    }
  }
}, {
  "n": ["male-factory-worker"],
  "e": "👨‍🏭",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-factory-worker-1F3FB",
      "n": "male-factory-worker",
      "e": "👨🏻‍🏭"
    },
    "1F3FC": {
      "k": "male-factory-worker-1F3FC",
      "n": "male-factory-worker",
      "e": "👨🏼‍🏭"
    },
    "1F3FD": {
      "k": "male-factory-worker-1F3FD",
      "n": "male-factory-worker",
      "e": "👨🏽‍🏭"
    },
    "1F3FE": {
      "k": "male-factory-worker-1F3FE",
      "n": "male-factory-worker",
      "e": "👨🏾‍🏭"
    },
    "1F3FF": {
      "k": "male-factory-worker-1F3FF",
      "n": "male-factory-worker",
      "e": "👨🏿‍🏭"
    }
  }
}, {
  "n": ["female-factory-worker"],
  "e": "👩‍🏭",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-factory-worker-1F3FB",
      "n": "female-factory-worker",
      "e": "👩🏻‍🏭"
    },
    "1F3FC": {
      "k": "female-factory-worker-1F3FC",
      "n": "female-factory-worker",
      "e": "👩🏼‍🏭"
    },
    "1F3FD": {
      "k": "female-factory-worker-1F3FD",
      "n": "female-factory-worker",
      "e": "👩🏽‍🏭"
    },
    "1F3FE": {
      "k": "female-factory-worker-1F3FE",
      "n": "female-factory-worker",
      "e": "👩🏾‍🏭"
    },
    "1F3FF": {
      "k": "female-factory-worker-1F3FF",
      "n": "female-factory-worker",
      "e": "👩🏿‍🏭"
    }
  }
}, {
  "n": ["office_worker"],
  "e": "🧑‍💼",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "office_worker-1F3FB",
      "n": "office_worker",
      "e": "🧑🏻‍💼"
    },
    "1F3FC": {
      "k": "office_worker-1F3FC",
      "n": "office_worker",
      "e": "🧑🏼‍💼"
    },
    "1F3FD": {
      "k": "office_worker-1F3FD",
      "n": "office_worker",
      "e": "🧑🏽‍💼"
    },
    "1F3FE": {
      "k": "office_worker-1F3FE",
      "n": "office_worker",
      "e": "🧑🏾‍💼"
    },
    "1F3FF": {
      "k": "office_worker-1F3FF",
      "n": "office_worker",
      "e": "🧑🏿‍💼"
    }
  }
}, {
  "n": ["male-office-worker"],
  "e": "👨‍💼",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-office-worker-1F3FB",
      "n": "male-office-worker",
      "e": "👨🏻‍💼"
    },
    "1F3FC": {
      "k": "male-office-worker-1F3FC",
      "n": "male-office-worker",
      "e": "👨🏼‍💼"
    },
    "1F3FD": {
      "k": "male-office-worker-1F3FD",
      "n": "male-office-worker",
      "e": "👨🏽‍💼"
    },
    "1F3FE": {
      "k": "male-office-worker-1F3FE",
      "n": "male-office-worker",
      "e": "👨🏾‍💼"
    },
    "1F3FF": {
      "k": "male-office-worker-1F3FF",
      "n": "male-office-worker",
      "e": "👨🏿‍💼"
    }
  }
}, {
  "n": ["female-office-worker"],
  "e": "👩‍💼",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-office-worker-1F3FB",
      "n": "female-office-worker",
      "e": "👩🏻‍💼"
    },
    "1F3FC": {
      "k": "female-office-worker-1F3FC",
      "n": "female-office-worker",
      "e": "👩🏼‍💼"
    },
    "1F3FD": {
      "k": "female-office-worker-1F3FD",
      "n": "female-office-worker",
      "e": "👩🏽‍💼"
    },
    "1F3FE": {
      "k": "female-office-worker-1F3FE",
      "n": "female-office-worker",
      "e": "👩🏾‍💼"
    },
    "1F3FF": {
      "k": "female-office-worker-1F3FF",
      "n": "female-office-worker",
      "e": "👩🏿‍💼"
    }
  }
}, {
  "n": ["scientist"],
  "e": "🧑‍🔬",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "scientist-1F3FB",
      "n": "scientist",
      "e": "🧑🏻‍🔬"
    },
    "1F3FC": {
      "k": "scientist-1F3FC",
      "n": "scientist",
      "e": "🧑🏼‍🔬"
    },
    "1F3FD": {
      "k": "scientist-1F3FD",
      "n": "scientist",
      "e": "🧑🏽‍🔬"
    },
    "1F3FE": {
      "k": "scientist-1F3FE",
      "n": "scientist",
      "e": "🧑🏾‍🔬"
    },
    "1F3FF": {
      "k": "scientist-1F3FF",
      "n": "scientist",
      "e": "🧑🏿‍🔬"
    }
  }
}, {
  "n": ["male-scientist"],
  "e": "👨‍🔬",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-scientist-1F3FB",
      "n": "male-scientist",
      "e": "👨🏻‍🔬"
    },
    "1F3FC": {
      "k": "male-scientist-1F3FC",
      "n": "male-scientist",
      "e": "👨🏼‍🔬"
    },
    "1F3FD": {
      "k": "male-scientist-1F3FD",
      "n": "male-scientist",
      "e": "👨🏽‍🔬"
    },
    "1F3FE": {
      "k": "male-scientist-1F3FE",
      "n": "male-scientist",
      "e": "👨🏾‍🔬"
    },
    "1F3FF": {
      "k": "male-scientist-1F3FF",
      "n": "male-scientist",
      "e": "👨🏿‍🔬"
    }
  }
}, {
  "n": ["female-scientist"],
  "e": "👩‍🔬",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-scientist-1F3FB",
      "n": "female-scientist",
      "e": "👩🏻‍🔬"
    },
    "1F3FC": {
      "k": "female-scientist-1F3FC",
      "n": "female-scientist",
      "e": "👩🏼‍🔬"
    },
    "1F3FD": {
      "k": "female-scientist-1F3FD",
      "n": "female-scientist",
      "e": "👩🏽‍🔬"
    },
    "1F3FE": {
      "k": "female-scientist-1F3FE",
      "n": "female-scientist",
      "e": "👩🏾‍🔬"
    },
    "1F3FF": {
      "k": "female-scientist-1F3FF",
      "n": "female-scientist",
      "e": "👩🏿‍🔬"
    }
  }
}, {
  "n": ["technologist"],
  "e": "🧑‍💻",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "technologist-1F3FB",
      "n": "technologist",
      "e": "🧑🏻‍💻"
    },
    "1F3FC": {
      "k": "technologist-1F3FC",
      "n": "technologist",
      "e": "🧑🏼‍💻"
    },
    "1F3FD": {
      "k": "technologist-1F3FD",
      "n": "technologist",
      "e": "🧑🏽‍💻"
    },
    "1F3FE": {
      "k": "technologist-1F3FE",
      "n": "technologist",
      "e": "🧑🏾‍💻"
    },
    "1F3FF": {
      "k": "technologist-1F3FF",
      "n": "technologist",
      "e": "🧑🏿‍💻"
    }
  }
}, {
  "n": ["male-technologist"],
  "e": "👨‍💻",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-technologist-1F3FB",
      "n": "male-technologist",
      "e": "👨🏻‍💻"
    },
    "1F3FC": {
      "k": "male-technologist-1F3FC",
      "n": "male-technologist",
      "e": "👨🏼‍💻"
    },
    "1F3FD": {
      "k": "male-technologist-1F3FD",
      "n": "male-technologist",
      "e": "👨🏽‍💻"
    },
    "1F3FE": {
      "k": "male-technologist-1F3FE",
      "n": "male-technologist",
      "e": "👨🏾‍💻"
    },
    "1F3FF": {
      "k": "male-technologist-1F3FF",
      "n": "male-technologist",
      "e": "👨🏿‍💻"
    }
  }
}, {
  "n": ["female-technologist"],
  "e": "👩‍💻",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-technologist-1F3FB",
      "n": "female-technologist",
      "e": "👩🏻‍💻"
    },
    "1F3FC": {
      "k": "female-technologist-1F3FC",
      "n": "female-technologist",
      "e": "👩🏼‍💻"
    },
    "1F3FD": {
      "k": "female-technologist-1F3FD",
      "n": "female-technologist",
      "e": "👩🏽‍💻"
    },
    "1F3FE": {
      "k": "female-technologist-1F3FE",
      "n": "female-technologist",
      "e": "👩🏾‍💻"
    },
    "1F3FF": {
      "k": "female-technologist-1F3FF",
      "n": "female-technologist",
      "e": "👩🏿‍💻"
    }
  }
}, {
  "n": ["singer"],
  "e": "🧑‍🎤",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "singer-1F3FB",
      "n": "singer",
      "e": "🧑🏻‍🎤"
    },
    "1F3FC": {
      "k": "singer-1F3FC",
      "n": "singer",
      "e": "🧑🏼‍🎤"
    },
    "1F3FD": {
      "k": "singer-1F3FD",
      "n": "singer",
      "e": "🧑🏽‍🎤"
    },
    "1F3FE": {
      "k": "singer-1F3FE",
      "n": "singer",
      "e": "🧑🏾‍🎤"
    },
    "1F3FF": {
      "k": "singer-1F3FF",
      "n": "singer",
      "e": "🧑🏿‍🎤"
    }
  }
}, {
  "n": ["male-singer"],
  "e": "👨‍🎤",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-singer-1F3FB",
      "n": "male-singer",
      "e": "👨🏻‍🎤"
    },
    "1F3FC": {
      "k": "male-singer-1F3FC",
      "n": "male-singer",
      "e": "👨🏼‍🎤"
    },
    "1F3FD": {
      "k": "male-singer-1F3FD",
      "n": "male-singer",
      "e": "👨🏽‍🎤"
    },
    "1F3FE": {
      "k": "male-singer-1F3FE",
      "n": "male-singer",
      "e": "👨🏾‍🎤"
    },
    "1F3FF": {
      "k": "male-singer-1F3FF",
      "n": "male-singer",
      "e": "👨🏿‍🎤"
    }
  }
}, {
  "n": ["female-singer"],
  "e": "👩‍🎤",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-singer-1F3FB",
      "n": "female-singer",
      "e": "👩🏻‍🎤"
    },
    "1F3FC": {
      "k": "female-singer-1F3FC",
      "n": "female-singer",
      "e": "👩🏼‍🎤"
    },
    "1F3FD": {
      "k": "female-singer-1F3FD",
      "n": "female-singer",
      "e": "👩🏽‍🎤"
    },
    "1F3FE": {
      "k": "female-singer-1F3FE",
      "n": "female-singer",
      "e": "👩🏾‍🎤"
    },
    "1F3FF": {
      "k": "female-singer-1F3FF",
      "n": "female-singer",
      "e": "👩🏿‍🎤"
    }
  }
}, {
  "n": ["artist"],
  "e": "🧑‍🎨",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "artist-1F3FB",
      "n": "artist",
      "e": "🧑🏻‍🎨"
    },
    "1F3FC": {
      "k": "artist-1F3FC",
      "n": "artist",
      "e": "🧑🏼‍🎨"
    },
    "1F3FD": {
      "k": "artist-1F3FD",
      "n": "artist",
      "e": "🧑🏽‍🎨"
    },
    "1F3FE": {
      "k": "artist-1F3FE",
      "n": "artist",
      "e": "🧑🏾‍🎨"
    },
    "1F3FF": {
      "k": "artist-1F3FF",
      "n": "artist",
      "e": "🧑🏿‍🎨"
    }
  }
}, {
  "n": ["male-artist"],
  "e": "👨‍🎨",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-artist-1F3FB",
      "n": "male-artist",
      "e": "👨🏻‍🎨"
    },
    "1F3FC": {
      "k": "male-artist-1F3FC",
      "n": "male-artist",
      "e": "👨🏼‍🎨"
    },
    "1F3FD": {
      "k": "male-artist-1F3FD",
      "n": "male-artist",
      "e": "👨🏽‍🎨"
    },
    "1F3FE": {
      "k": "male-artist-1F3FE",
      "n": "male-artist",
      "e": "👨🏾‍🎨"
    },
    "1F3FF": {
      "k": "male-artist-1F3FF",
      "n": "male-artist",
      "e": "👨🏿‍🎨"
    }
  }
}, {
  "n": ["female-artist"],
  "e": "👩‍🎨",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-artist-1F3FB",
      "n": "female-artist",
      "e": "👩🏻‍🎨"
    },
    "1F3FC": {
      "k": "female-artist-1F3FC",
      "n": "female-artist",
      "e": "👩🏼‍🎨"
    },
    "1F3FD": {
      "k": "female-artist-1F3FD",
      "n": "female-artist",
      "e": "👩🏽‍🎨"
    },
    "1F3FE": {
      "k": "female-artist-1F3FE",
      "n": "female-artist",
      "e": "👩🏾‍🎨"
    },
    "1F3FF": {
      "k": "female-artist-1F3FF",
      "n": "female-artist",
      "e": "👩🏿‍🎨"
    }
  }
}, {
  "n": ["pilot"],
  "e": "🧑‍✈️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "pilot-1F3FB",
      "n": "pilot",
      "e": "🧑🏻‍✈️"
    },
    "1F3FC": {
      "k": "pilot-1F3FC",
      "n": "pilot",
      "e": "🧑🏼‍✈️"
    },
    "1F3FD": {
      "k": "pilot-1F3FD",
      "n": "pilot",
      "e": "🧑🏽‍✈️"
    },
    "1F3FE": {
      "k": "pilot-1F3FE",
      "n": "pilot",
      "e": "🧑🏾‍✈️"
    },
    "1F3FF": {
      "k": "pilot-1F3FF",
      "n": "pilot",
      "e": "🧑🏿‍✈️"
    }
  }
}, {
  "n": ["male-pilot"],
  "e": "👨‍✈️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-pilot-1F3FB",
      "n": "male-pilot",
      "e": "👨🏻‍✈️"
    },
    "1F3FC": {
      "k": "male-pilot-1F3FC",
      "n": "male-pilot",
      "e": "👨🏼‍✈️"
    },
    "1F3FD": {
      "k": "male-pilot-1F3FD",
      "n": "male-pilot",
      "e": "👨🏽‍✈️"
    },
    "1F3FE": {
      "k": "male-pilot-1F3FE",
      "n": "male-pilot",
      "e": "👨🏾‍✈️"
    },
    "1F3FF": {
      "k": "male-pilot-1F3FF",
      "n": "male-pilot",
      "e": "👨🏿‍✈️"
    }
  }
}, {
  "n": ["female-pilot"],
  "e": "👩‍✈️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-pilot-1F3FB",
      "n": "female-pilot",
      "e": "👩🏻‍✈️"
    },
    "1F3FC": {
      "k": "female-pilot-1F3FC",
      "n": "female-pilot",
      "e": "👩🏼‍✈️"
    },
    "1F3FD": {
      "k": "female-pilot-1F3FD",
      "n": "female-pilot",
      "e": "👩🏽‍✈️"
    },
    "1F3FE": {
      "k": "female-pilot-1F3FE",
      "n": "female-pilot",
      "e": "👩🏾‍✈️"
    },
    "1F3FF": {
      "k": "female-pilot-1F3FF",
      "n": "female-pilot",
      "e": "👩🏿‍✈️"
    }
  }
}, {
  "n": ["astronaut"],
  "e": "🧑‍🚀",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "astronaut-1F3FB",
      "n": "astronaut",
      "e": "🧑🏻‍🚀"
    },
    "1F3FC": {
      "k": "astronaut-1F3FC",
      "n": "astronaut",
      "e": "🧑🏼‍🚀"
    },
    "1F3FD": {
      "k": "astronaut-1F3FD",
      "n": "astronaut",
      "e": "🧑🏽‍🚀"
    },
    "1F3FE": {
      "k": "astronaut-1F3FE",
      "n": "astronaut",
      "e": "🧑🏾‍🚀"
    },
    "1F3FF": {
      "k": "astronaut-1F3FF",
      "n": "astronaut",
      "e": "🧑🏿‍🚀"
    }
  }
}, {
  "n": ["male-astronaut"],
  "e": "👨‍🚀",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-astronaut-1F3FB",
      "n": "male-astronaut",
      "e": "👨🏻‍🚀"
    },
    "1F3FC": {
      "k": "male-astronaut-1F3FC",
      "n": "male-astronaut",
      "e": "👨🏼‍🚀"
    },
    "1F3FD": {
      "k": "male-astronaut-1F3FD",
      "n": "male-astronaut",
      "e": "👨🏽‍🚀"
    },
    "1F3FE": {
      "k": "male-astronaut-1F3FE",
      "n": "male-astronaut",
      "e": "👨🏾‍🚀"
    },
    "1F3FF": {
      "k": "male-astronaut-1F3FF",
      "n": "male-astronaut",
      "e": "👨🏿‍🚀"
    }
  }
}, {
  "n": ["female-astronaut"],
  "e": "👩‍🚀",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-astronaut-1F3FB",
      "n": "female-astronaut",
      "e": "👩🏻‍🚀"
    },
    "1F3FC": {
      "k": "female-astronaut-1F3FC",
      "n": "female-astronaut",
      "e": "👩🏼‍🚀"
    },
    "1F3FD": {
      "k": "female-astronaut-1F3FD",
      "n": "female-astronaut",
      "e": "👩🏽‍🚀"
    },
    "1F3FE": {
      "k": "female-astronaut-1F3FE",
      "n": "female-astronaut",
      "e": "👩🏾‍🚀"
    },
    "1F3FF": {
      "k": "female-astronaut-1F3FF",
      "n": "female-astronaut",
      "e": "👩🏿‍🚀"
    }
  }
}, {
  "n": ["firefighter"],
  "e": "🧑‍🚒",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "firefighter-1F3FB",
      "n": "firefighter",
      "e": "🧑🏻‍🚒"
    },
    "1F3FC": {
      "k": "firefighter-1F3FC",
      "n": "firefighter",
      "e": "🧑🏼‍🚒"
    },
    "1F3FD": {
      "k": "firefighter-1F3FD",
      "n": "firefighter",
      "e": "🧑🏽‍🚒"
    },
    "1F3FE": {
      "k": "firefighter-1F3FE",
      "n": "firefighter",
      "e": "🧑🏾‍🚒"
    },
    "1F3FF": {
      "k": "firefighter-1F3FF",
      "n": "firefighter",
      "e": "🧑🏿‍🚒"
    }
  }
}, {
  "n": ["male-firefighter"],
  "e": "👨‍🚒",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-firefighter-1F3FB",
      "n": "male-firefighter",
      "e": "👨🏻‍🚒"
    },
    "1F3FC": {
      "k": "male-firefighter-1F3FC",
      "n": "male-firefighter",
      "e": "👨🏼‍🚒"
    },
    "1F3FD": {
      "k": "male-firefighter-1F3FD",
      "n": "male-firefighter",
      "e": "👨🏽‍🚒"
    },
    "1F3FE": {
      "k": "male-firefighter-1F3FE",
      "n": "male-firefighter",
      "e": "👨🏾‍🚒"
    },
    "1F3FF": {
      "k": "male-firefighter-1F3FF",
      "n": "male-firefighter",
      "e": "👨🏿‍🚒"
    }
  }
}, {
  "n": ["female-firefighter"],
  "e": "👩‍🚒",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-firefighter-1F3FB",
      "n": "female-firefighter",
      "e": "👩🏻‍🚒"
    },
    "1F3FC": {
      "k": "female-firefighter-1F3FC",
      "n": "female-firefighter",
      "e": "👩🏼‍🚒"
    },
    "1F3FD": {
      "k": "female-firefighter-1F3FD",
      "n": "female-firefighter",
      "e": "👩🏽‍🚒"
    },
    "1F3FE": {
      "k": "female-firefighter-1F3FE",
      "n": "female-firefighter",
      "e": "👩🏾‍🚒"
    },
    "1F3FF": {
      "k": "female-firefighter-1F3FF",
      "n": "female-firefighter",
      "e": "👩🏿‍🚒"
    }
  }
}, {
  "n": ["cop"],
  "e": "👮",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "cop-1F3FB",
      "n": "cop",
      "e": "👮🏻"
    },
    "1F3FC": {
      "k": "cop-1F3FC",
      "n": "cop",
      "e": "👮🏼"
    },
    "1F3FD": {
      "k": "cop-1F3FD",
      "n": "cop",
      "e": "👮🏽"
    },
    "1F3FE": {
      "k": "cop-1F3FE",
      "n": "cop",
      "e": "👮🏾"
    },
    "1F3FF": {
      "k": "cop-1F3FF",
      "n": "cop",
      "e": "👮🏿"
    }
  }
}, {
  "n": ["male-police-officer"],
  "e": "👮‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-police-officer-1F3FB",
      "n": "male-police-officer",
      "e": "👮🏻‍♂️"
    },
    "1F3FC": {
      "k": "male-police-officer-1F3FC",
      "n": "male-police-officer",
      "e": "👮🏼‍♂️"
    },
    "1F3FD": {
      "k": "male-police-officer-1F3FD",
      "n": "male-police-officer",
      "e": "👮🏽‍♂️"
    },
    "1F3FE": {
      "k": "male-police-officer-1F3FE",
      "n": "male-police-officer",
      "e": "👮🏾‍♂️"
    },
    "1F3FF": {
      "k": "male-police-officer-1F3FF",
      "n": "male-police-officer",
      "e": "👮🏿‍♂️"
    }
  }
}, {
  "n": ["female-police-officer"],
  "e": "👮‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-police-officer-1F3FB",
      "n": "female-police-officer",
      "e": "👮🏻‍♀️"
    },
    "1F3FC": {
      "k": "female-police-officer-1F3FC",
      "n": "female-police-officer",
      "e": "👮🏼‍♀️"
    },
    "1F3FD": {
      "k": "female-police-officer-1F3FD",
      "n": "female-police-officer",
      "e": "👮🏽‍♀️"
    },
    "1F3FE": {
      "k": "female-police-officer-1F3FE",
      "n": "female-police-officer",
      "e": "👮🏾‍♀️"
    },
    "1F3FF": {
      "k": "female-police-officer-1F3FF",
      "n": "female-police-officer",
      "e": "👮🏿‍♀️"
    }
  }
}, {
  "n": ["sleuth_or_spy"],
  "e": "🕵️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "sleuth_or_spy-1F3FB",
      "n": "sleuth_or_spy",
      "e": "🕵🏻"
    },
    "1F3FC": {
      "k": "sleuth_or_spy-1F3FC",
      "n": "sleuth_or_spy",
      "e": "🕵🏼"
    },
    "1F3FD": {
      "k": "sleuth_or_spy-1F3FD",
      "n": "sleuth_or_spy",
      "e": "🕵🏽"
    },
    "1F3FE": {
      "k": "sleuth_or_spy-1F3FE",
      "n": "sleuth_or_spy",
      "e": "🕵🏾"
    },
    "1F3FF": {
      "k": "sleuth_or_spy-1F3FF",
      "n": "sleuth_or_spy",
      "e": "🕵🏿"
    }
  }
}, {
  "n": ["male-detective"],
  "e": "🕵️‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-detective-1F3FB",
      "n": "male-detective",
      "e": "🕵🏻‍♂️"
    },
    "1F3FC": {
      "k": "male-detective-1F3FC",
      "n": "male-detective",
      "e": "🕵🏼‍♂️"
    },
    "1F3FD": {
      "k": "male-detective-1F3FD",
      "n": "male-detective",
      "e": "🕵🏽‍♂️"
    },
    "1F3FE": {
      "k": "male-detective-1F3FE",
      "n": "male-detective",
      "e": "🕵🏾‍♂️"
    },
    "1F3FF": {
      "k": "male-detective-1F3FF",
      "n": "male-detective",
      "e": "🕵🏿‍♂️"
    }
  }
}, {
  "n": ["female-detective"],
  "e": "🕵️‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-detective-1F3FB",
      "n": "female-detective",
      "e": "🕵🏻‍♀️"
    },
    "1F3FC": {
      "k": "female-detective-1F3FC",
      "n": "female-detective",
      "e": "🕵🏼‍♀️"
    },
    "1F3FD": {
      "k": "female-detective-1F3FD",
      "n": "female-detective",
      "e": "🕵🏽‍♀️"
    },
    "1F3FE": {
      "k": "female-detective-1F3FE",
      "n": "female-detective",
      "e": "🕵🏾‍♀️"
    },
    "1F3FF": {
      "k": "female-detective-1F3FF",
      "n": "female-detective",
      "e": "🕵🏿‍♀️"
    }
  }
}, {
  "n": ["guardsman"],
  "e": "💂",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "guardsman-1F3FB",
      "n": "guardsman",
      "e": "💂🏻"
    },
    "1F3FC": {
      "k": "guardsman-1F3FC",
      "n": "guardsman",
      "e": "💂🏼"
    },
    "1F3FD": {
      "k": "guardsman-1F3FD",
      "n": "guardsman",
      "e": "💂🏽"
    },
    "1F3FE": {
      "k": "guardsman-1F3FE",
      "n": "guardsman",
      "e": "💂🏾"
    },
    "1F3FF": {
      "k": "guardsman-1F3FF",
      "n": "guardsman",
      "e": "💂🏿"
    }
  }
}, {
  "n": ["male-guard"],
  "e": "💂‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-guard-1F3FB",
      "n": "male-guard",
      "e": "💂🏻‍♂️"
    },
    "1F3FC": {
      "k": "male-guard-1F3FC",
      "n": "male-guard",
      "e": "💂🏼‍♂️"
    },
    "1F3FD": {
      "k": "male-guard-1F3FD",
      "n": "male-guard",
      "e": "💂🏽‍♂️"
    },
    "1F3FE": {
      "k": "male-guard-1F3FE",
      "n": "male-guard",
      "e": "💂🏾‍♂️"
    },
    "1F3FF": {
      "k": "male-guard-1F3FF",
      "n": "male-guard",
      "e": "💂🏿‍♂️"
    }
  }
}, {
  "n": ["female-guard"],
  "e": "💂‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-guard-1F3FB",
      "n": "female-guard",
      "e": "💂🏻‍♀️"
    },
    "1F3FC": {
      "k": "female-guard-1F3FC",
      "n": "female-guard",
      "e": "💂🏼‍♀️"
    },
    "1F3FD": {
      "k": "female-guard-1F3FD",
      "n": "female-guard",
      "e": "💂🏽‍♀️"
    },
    "1F3FE": {
      "k": "female-guard-1F3FE",
      "n": "female-guard",
      "e": "💂🏾‍♀️"
    },
    "1F3FF": {
      "k": "female-guard-1F3FF",
      "n": "female-guard",
      "e": "💂🏿‍♀️"
    }
  }
}, {
  "n": ["construction_worker"],
  "e": "👷",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "construction_worker-1F3FB",
      "n": "construction_worker",
      "e": "👷🏻"
    },
    "1F3FC": {
      "k": "construction_worker-1F3FC",
      "n": "construction_worker",
      "e": "👷🏼"
    },
    "1F3FD": {
      "k": "construction_worker-1F3FD",
      "n": "construction_worker",
      "e": "👷🏽"
    },
    "1F3FE": {
      "k": "construction_worker-1F3FE",
      "n": "construction_worker",
      "e": "👷🏾"
    },
    "1F3FF": {
      "k": "construction_worker-1F3FF",
      "n": "construction_worker",
      "e": "👷🏿"
    }
  }
}, {
  "n": ["male-construction-worker"],
  "e": "👷‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "male-construction-worker-1F3FB",
      "n": "male-construction-worker",
      "e": "👷🏻‍♂️"
    },
    "1F3FC": {
      "k": "male-construction-worker-1F3FC",
      "n": "male-construction-worker",
      "e": "👷🏼‍♂️"
    },
    "1F3FD": {
      "k": "male-construction-worker-1F3FD",
      "n": "male-construction-worker",
      "e": "👷🏽‍♂️"
    },
    "1F3FE": {
      "k": "male-construction-worker-1F3FE",
      "n": "male-construction-worker",
      "e": "👷🏾‍♂️"
    },
    "1F3FF": {
      "k": "male-construction-worker-1F3FF",
      "n": "male-construction-worker",
      "e": "👷🏿‍♂️"
    }
  }
}, {
  "n": ["female-construction-worker"],
  "e": "👷‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "female-construction-worker-1F3FB",
      "n": "female-construction-worker",
      "e": "👷🏻‍♀️"
    },
    "1F3FC": {
      "k": "female-construction-worker-1F3FC",
      "n": "female-construction-worker",
      "e": "👷🏼‍♀️"
    },
    "1F3FD": {
      "k": "female-construction-worker-1F3FD",
      "n": "female-construction-worker",
      "e": "👷🏽‍♀️"
    },
    "1F3FE": {
      "k": "female-construction-worker-1F3FE",
      "n": "female-construction-worker",
      "e": "👷🏾‍♀️"
    },
    "1F3FF": {
      "k": "female-construction-worker-1F3FF",
      "n": "female-construction-worker",
      "e": "👷🏿‍♀️"
    }
  }
}, {
  "n": ["prince"],
  "e": "🤴",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "prince-1F3FB",
      "n": "prince",
      "e": "🤴🏻"
    },
    "1F3FC": {
      "k": "prince-1F3FC",
      "n": "prince",
      "e": "🤴🏼"
    },
    "1F3FD": {
      "k": "prince-1F3FD",
      "n": "prince",
      "e": "🤴🏽"
    },
    "1F3FE": {
      "k": "prince-1F3FE",
      "n": "prince",
      "e": "🤴🏾"
    },
    "1F3FF": {
      "k": "prince-1F3FF",
      "n": "prince",
      "e": "🤴🏿"
    }
  }
}, {
  "n": ["princess"],
  "e": "👸",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "princess-1F3FB",
      "n": "princess",
      "e": "👸🏻"
    },
    "1F3FC": {
      "k": "princess-1F3FC",
      "n": "princess",
      "e": "👸🏼"
    },
    "1F3FD": {
      "k": "princess-1F3FD",
      "n": "princess",
      "e": "👸🏽"
    },
    "1F3FE": {
      "k": "princess-1F3FE",
      "n": "princess",
      "e": "👸🏾"
    },
    "1F3FF": {
      "k": "princess-1F3FF",
      "n": "princess",
      "e": "👸🏿"
    }
  }
}, {
  "n": ["man_with_turban"],
  "e": "👳",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "man_with_turban-1F3FB",
      "n": "man_with_turban",
      "e": "👳🏻"
    },
    "1F3FC": {
      "k": "man_with_turban-1F3FC",
      "n": "man_with_turban",
      "e": "👳🏼"
    },
    "1F3FD": {
      "k": "man_with_turban-1F3FD",
      "n": "man_with_turban",
      "e": "👳🏽"
    },
    "1F3FE": {
      "k": "man_with_turban-1F3FE",
      "n": "man_with_turban",
      "e": "👳🏾"
    },
    "1F3FF": {
      "k": "man_with_turban-1F3FF",
      "n": "man_with_turban",
      "e": "👳🏿"
    }
  }
}, {
  "n": ["man-wearing-turban"],
  "e": "👳‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-wearing-turban-1F3FB",
      "n": "man-wearing-turban",
      "e": "👳🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-wearing-turban-1F3FC",
      "n": "man-wearing-turban",
      "e": "👳🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-wearing-turban-1F3FD",
      "n": "man-wearing-turban",
      "e": "👳🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-wearing-turban-1F3FE",
      "n": "man-wearing-turban",
      "e": "👳🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-wearing-turban-1F3FF",
      "n": "man-wearing-turban",
      "e": "👳🏿‍♂️"
    }
  }
}, {
  "n": ["woman-wearing-turban"],
  "e": "👳‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-wearing-turban-1F3FB",
      "n": "woman-wearing-turban",
      "e": "👳🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-wearing-turban-1F3FC",
      "n": "woman-wearing-turban",
      "e": "👳🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-wearing-turban-1F3FD",
      "n": "woman-wearing-turban",
      "e": "👳🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-wearing-turban-1F3FE",
      "n": "woman-wearing-turban",
      "e": "👳🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-wearing-turban-1F3FF",
      "n": "woman-wearing-turban",
      "e": "👳🏿‍♀️"
    }
  }
}, {
  "n": ["man_with_gua_pi_mao"],
  "e": "👲",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "man_with_gua_pi_mao-1F3FB",
      "n": "man_with_gua_pi_mao",
      "e": "👲🏻"
    },
    "1F3FC": {
      "k": "man_with_gua_pi_mao-1F3FC",
      "n": "man_with_gua_pi_mao",
      "e": "👲🏼"
    },
    "1F3FD": {
      "k": "man_with_gua_pi_mao-1F3FD",
      "n": "man_with_gua_pi_mao",
      "e": "👲🏽"
    },
    "1F3FE": {
      "k": "man_with_gua_pi_mao-1F3FE",
      "n": "man_with_gua_pi_mao",
      "e": "👲🏾"
    },
    "1F3FF": {
      "k": "man_with_gua_pi_mao-1F3FF",
      "n": "man_with_gua_pi_mao",
      "e": "👲🏿"
    }
  }
}, {
  "n": ["person_with_headscarf"],
  "e": "🧕",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "person_with_headscarf-1F3FB",
      "n": "person_with_headscarf",
      "e": "🧕🏻"
    },
    "1F3FC": {
      "k": "person_with_headscarf-1F3FC",
      "n": "person_with_headscarf",
      "e": "🧕🏼"
    },
    "1F3FD": {
      "k": "person_with_headscarf-1F3FD",
      "n": "person_with_headscarf",
      "e": "🧕🏽"
    },
    "1F3FE": {
      "k": "person_with_headscarf-1F3FE",
      "n": "person_with_headscarf",
      "e": "🧕🏾"
    },
    "1F3FF": {
      "k": "person_with_headscarf-1F3FF",
      "n": "person_with_headscarf",
      "e": "🧕🏿"
    }
  }
}, {
  "n": ["man_in_tuxedo"],
  "e": "🤵",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man_in_tuxedo-1F3FB",
      "n": "man_in_tuxedo",
      "e": "🤵🏻"
    },
    "1F3FC": {
      "k": "man_in_tuxedo-1F3FC",
      "n": "man_in_tuxedo",
      "e": "🤵🏼"
    },
    "1F3FD": {
      "k": "man_in_tuxedo-1F3FD",
      "n": "man_in_tuxedo",
      "e": "🤵🏽"
    },
    "1F3FE": {
      "k": "man_in_tuxedo-1F3FE",
      "n": "man_in_tuxedo",
      "e": "🤵🏾"
    },
    "1F3FF": {
      "k": "man_in_tuxedo-1F3FF",
      "n": "man_in_tuxedo",
      "e": "🤵🏿"
    }
  }
}, {
  "n": ["bride_with_veil"],
  "e": "👰",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "bride_with_veil-1F3FB",
      "n": "bride_with_veil",
      "e": "👰🏻"
    },
    "1F3FC": {
      "k": "bride_with_veil-1F3FC",
      "n": "bride_with_veil",
      "e": "👰🏼"
    },
    "1F3FD": {
      "k": "bride_with_veil-1F3FD",
      "n": "bride_with_veil",
      "e": "👰🏽"
    },
    "1F3FE": {
      "k": "bride_with_veil-1F3FE",
      "n": "bride_with_veil",
      "e": "👰🏾"
    },
    "1F3FF": {
      "k": "bride_with_veil-1F3FF",
      "n": "bride_with_veil",
      "e": "👰🏿"
    }
  }
}, {
  "n": ["pregnant_woman"],
  "e": "🤰",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "pregnant_woman-1F3FB",
      "n": "pregnant_woman",
      "e": "🤰🏻"
    },
    "1F3FC": {
      "k": "pregnant_woman-1F3FC",
      "n": "pregnant_woman",
      "e": "🤰🏼"
    },
    "1F3FD": {
      "k": "pregnant_woman-1F3FD",
      "n": "pregnant_woman",
      "e": "🤰🏽"
    },
    "1F3FE": {
      "k": "pregnant_woman-1F3FE",
      "n": "pregnant_woman",
      "e": "🤰🏾"
    },
    "1F3FF": {
      "k": "pregnant_woman-1F3FF",
      "n": "pregnant_woman",
      "e": "🤰🏿"
    }
  }
}, {
  "n": ["breast-feeding"],
  "e": "🤱",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "breast-feeding-1F3FB",
      "n": "breast-feeding",
      "e": "🤱🏻"
    },
    "1F3FC": {
      "k": "breast-feeding-1F3FC",
      "n": "breast-feeding",
      "e": "🤱🏼"
    },
    "1F3FD": {
      "k": "breast-feeding-1F3FD",
      "n": "breast-feeding",
      "e": "🤱🏽"
    },
    "1F3FE": {
      "k": "breast-feeding-1F3FE",
      "n": "breast-feeding",
      "e": "🤱🏾"
    },
    "1F3FF": {
      "k": "breast-feeding-1F3FF",
      "n": "breast-feeding",
      "e": "🤱🏿"
    }
  }
}, {
  "n": ["angel"],
  "e": "👼",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "angel-1F3FB",
      "n": "angel",
      "e": "👼🏻"
    },
    "1F3FC": {
      "k": "angel-1F3FC",
      "n": "angel",
      "e": "👼🏼"
    },
    "1F3FD": {
      "k": "angel-1F3FD",
      "n": "angel",
      "e": "👼🏽"
    },
    "1F3FE": {
      "k": "angel-1F3FE",
      "n": "angel",
      "e": "👼🏾"
    },
    "1F3FF": {
      "k": "angel-1F3FF",
      "n": "angel",
      "e": "👼🏿"
    }
  }
}, {
  "n": ["santa"],
  "e": "🎅",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "santa-1F3FB",
      "n": "santa",
      "e": "🎅🏻"
    },
    "1F3FC": {
      "k": "santa-1F3FC",
      "n": "santa",
      "e": "🎅🏼"
    },
    "1F3FD": {
      "k": "santa-1F3FD",
      "n": "santa",
      "e": "🎅🏽"
    },
    "1F3FE": {
      "k": "santa-1F3FE",
      "n": "santa",
      "e": "🎅🏾"
    },
    "1F3FF": {
      "k": "santa-1F3FF",
      "n": "santa",
      "e": "🎅🏿"
    }
  }
}, {
  "n": ["mrs_claus", "mother_christmas"],
  "e": "🤶",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "mrs_claus-1F3FB",
      "n": "mrs_claus",
      "e": "🤶🏻"
    },
    "1F3FC": {
      "k": "mrs_claus-1F3FC",
      "n": "mrs_claus",
      "e": "🤶🏼"
    },
    "1F3FD": {
      "k": "mrs_claus-1F3FD",
      "n": "mrs_claus",
      "e": "🤶🏽"
    },
    "1F3FE": {
      "k": "mrs_claus-1F3FE",
      "n": "mrs_claus",
      "e": "🤶🏾"
    },
    "1F3FF": {
      "k": "mrs_claus-1F3FF",
      "n": "mrs_claus",
      "e": "🤶🏿"
    }
  }
}, {
  "n": ["superhero"],
  "e": "🦸",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "superhero-1F3FB",
      "n": "superhero",
      "e": "🦸🏻"
    },
    "1F3FC": {
      "k": "superhero-1F3FC",
      "n": "superhero",
      "e": "🦸🏼"
    },
    "1F3FD": {
      "k": "superhero-1F3FD",
      "n": "superhero",
      "e": "🦸🏽"
    },
    "1F3FE": {
      "k": "superhero-1F3FE",
      "n": "superhero",
      "e": "🦸🏾"
    },
    "1F3FF": {
      "k": "superhero-1F3FF",
      "n": "superhero",
      "e": "🦸🏿"
    }
  }
}, {
  "n": ["male_superhero"],
  "e": "🦸‍♂️",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "male_superhero-1F3FB",
      "n": "male_superhero",
      "e": "🦸🏻‍♂️"
    },
    "1F3FC": {
      "k": "male_superhero-1F3FC",
      "n": "male_superhero",
      "e": "🦸🏼‍♂️"
    },
    "1F3FD": {
      "k": "male_superhero-1F3FD",
      "n": "male_superhero",
      "e": "🦸🏽‍♂️"
    },
    "1F3FE": {
      "k": "male_superhero-1F3FE",
      "n": "male_superhero",
      "e": "🦸🏾‍♂️"
    },
    "1F3FF": {
      "k": "male_superhero-1F3FF",
      "n": "male_superhero",
      "e": "🦸🏿‍♂️"
    }
  }
}, {
  "n": ["female_superhero"],
  "e": "🦸‍♀️",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "female_superhero-1F3FB",
      "n": "female_superhero",
      "e": "🦸🏻‍♀️"
    },
    "1F3FC": {
      "k": "female_superhero-1F3FC",
      "n": "female_superhero",
      "e": "🦸🏼‍♀️"
    },
    "1F3FD": {
      "k": "female_superhero-1F3FD",
      "n": "female_superhero",
      "e": "🦸🏽‍♀️"
    },
    "1F3FE": {
      "k": "female_superhero-1F3FE",
      "n": "female_superhero",
      "e": "🦸🏾‍♀️"
    },
    "1F3FF": {
      "k": "female_superhero-1F3FF",
      "n": "female_superhero",
      "e": "🦸🏿‍♀️"
    }
  }
}, {
  "n": ["supervillain"],
  "e": "🦹",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "supervillain-1F3FB",
      "n": "supervillain",
      "e": "🦹🏻"
    },
    "1F3FC": {
      "k": "supervillain-1F3FC",
      "n": "supervillain",
      "e": "🦹🏼"
    },
    "1F3FD": {
      "k": "supervillain-1F3FD",
      "n": "supervillain",
      "e": "🦹🏽"
    },
    "1F3FE": {
      "k": "supervillain-1F3FE",
      "n": "supervillain",
      "e": "🦹🏾"
    },
    "1F3FF": {
      "k": "supervillain-1F3FF",
      "n": "supervillain",
      "e": "🦹🏿"
    }
  }
}, {
  "n": ["male_supervillain"],
  "e": "🦹‍♂️",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "male_supervillain-1F3FB",
      "n": "male_supervillain",
      "e": "🦹🏻‍♂️"
    },
    "1F3FC": {
      "k": "male_supervillain-1F3FC",
      "n": "male_supervillain",
      "e": "🦹🏼‍♂️"
    },
    "1F3FD": {
      "k": "male_supervillain-1F3FD",
      "n": "male_supervillain",
      "e": "🦹🏽‍♂️"
    },
    "1F3FE": {
      "k": "male_supervillain-1F3FE",
      "n": "male_supervillain",
      "e": "🦹🏾‍♂️"
    },
    "1F3FF": {
      "k": "male_supervillain-1F3FF",
      "n": "male_supervillain",
      "e": "🦹🏿‍♂️"
    }
  }
}, {
  "n": ["female_supervillain"],
  "e": "🦹‍♀️",
  "c": 9,
  "ver": "11.0",
  "v": {
    "1F3FB": {
      "k": "female_supervillain-1F3FB",
      "n": "female_supervillain",
      "e": "🦹🏻‍♀️"
    },
    "1F3FC": {
      "k": "female_supervillain-1F3FC",
      "n": "female_supervillain",
      "e": "🦹🏼‍♀️"
    },
    "1F3FD": {
      "k": "female_supervillain-1F3FD",
      "n": "female_supervillain",
      "e": "🦹🏽‍♀️"
    },
    "1F3FE": {
      "k": "female_supervillain-1F3FE",
      "n": "female_supervillain",
      "e": "🦹🏾‍♀️"
    },
    "1F3FF": {
      "k": "female_supervillain-1F3FF",
      "n": "female_supervillain",
      "e": "🦹🏿‍♀️"
    }
  }
}, {
  "n": ["mage"],
  "e": "🧙",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "mage-1F3FB",
      "n": "mage",
      "e": "🧙🏻"
    },
    "1F3FC": {
      "k": "mage-1F3FC",
      "n": "mage",
      "e": "🧙🏼"
    },
    "1F3FD": {
      "k": "mage-1F3FD",
      "n": "mage",
      "e": "🧙🏽"
    },
    "1F3FE": {
      "k": "mage-1F3FE",
      "n": "mage",
      "e": "🧙🏾"
    },
    "1F3FF": {
      "k": "mage-1F3FF",
      "n": "mage",
      "e": "🧙🏿"
    }
  }
}, {
  "n": ["male_mage"],
  "e": "🧙‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "male_mage-1F3FB",
      "n": "male_mage",
      "e": "🧙🏻‍♂️"
    },
    "1F3FC": {
      "k": "male_mage-1F3FC",
      "n": "male_mage",
      "e": "🧙🏼‍♂️"
    },
    "1F3FD": {
      "k": "male_mage-1F3FD",
      "n": "male_mage",
      "e": "🧙🏽‍♂️"
    },
    "1F3FE": {
      "k": "male_mage-1F3FE",
      "n": "male_mage",
      "e": "🧙🏾‍♂️"
    },
    "1F3FF": {
      "k": "male_mage-1F3FF",
      "n": "male_mage",
      "e": "🧙🏿‍♂️"
    }
  }
}, {
  "n": ["female_mage"],
  "e": "🧙‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "female_mage-1F3FB",
      "n": "female_mage",
      "e": "🧙🏻‍♀️"
    },
    "1F3FC": {
      "k": "female_mage-1F3FC",
      "n": "female_mage",
      "e": "🧙🏼‍♀️"
    },
    "1F3FD": {
      "k": "female_mage-1F3FD",
      "n": "female_mage",
      "e": "🧙🏽‍♀️"
    },
    "1F3FE": {
      "k": "female_mage-1F3FE",
      "n": "female_mage",
      "e": "🧙🏾‍♀️"
    },
    "1F3FF": {
      "k": "female_mage-1F3FF",
      "n": "female_mage",
      "e": "🧙🏿‍♀️"
    }
  }
}, {
  "n": ["fairy"],
  "e": "🧚",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "fairy-1F3FB",
      "n": "fairy",
      "e": "🧚🏻"
    },
    "1F3FC": {
      "k": "fairy-1F3FC",
      "n": "fairy",
      "e": "🧚🏼"
    },
    "1F3FD": {
      "k": "fairy-1F3FD",
      "n": "fairy",
      "e": "🧚🏽"
    },
    "1F3FE": {
      "k": "fairy-1F3FE",
      "n": "fairy",
      "e": "🧚🏾"
    },
    "1F3FF": {
      "k": "fairy-1F3FF",
      "n": "fairy",
      "e": "🧚🏿"
    }
  }
}, {
  "n": ["male_fairy"],
  "e": "🧚‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "male_fairy-1F3FB",
      "n": "male_fairy",
      "e": "🧚🏻‍♂️"
    },
    "1F3FC": {
      "k": "male_fairy-1F3FC",
      "n": "male_fairy",
      "e": "🧚🏼‍♂️"
    },
    "1F3FD": {
      "k": "male_fairy-1F3FD",
      "n": "male_fairy",
      "e": "🧚🏽‍♂️"
    },
    "1F3FE": {
      "k": "male_fairy-1F3FE",
      "n": "male_fairy",
      "e": "🧚🏾‍♂️"
    },
    "1F3FF": {
      "k": "male_fairy-1F3FF",
      "n": "male_fairy",
      "e": "🧚🏿‍♂️"
    }
  }
}, {
  "n": ["female_fairy"],
  "e": "🧚‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "female_fairy-1F3FB",
      "n": "female_fairy",
      "e": "🧚🏻‍♀️"
    },
    "1F3FC": {
      "k": "female_fairy-1F3FC",
      "n": "female_fairy",
      "e": "🧚🏼‍♀️"
    },
    "1F3FD": {
      "k": "female_fairy-1F3FD",
      "n": "female_fairy",
      "e": "🧚🏽‍♀️"
    },
    "1F3FE": {
      "k": "female_fairy-1F3FE",
      "n": "female_fairy",
      "e": "🧚🏾‍♀️"
    },
    "1F3FF": {
      "k": "female_fairy-1F3FF",
      "n": "female_fairy",
      "e": "🧚🏿‍♀️"
    }
  }
}, {
  "n": ["vampire"],
  "e": "🧛",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "vampire-1F3FB",
      "n": "vampire",
      "e": "🧛🏻"
    },
    "1F3FC": {
      "k": "vampire-1F3FC",
      "n": "vampire",
      "e": "🧛🏼"
    },
    "1F3FD": {
      "k": "vampire-1F3FD",
      "n": "vampire",
      "e": "🧛🏽"
    },
    "1F3FE": {
      "k": "vampire-1F3FE",
      "n": "vampire",
      "e": "🧛🏾"
    },
    "1F3FF": {
      "k": "vampire-1F3FF",
      "n": "vampire",
      "e": "🧛🏿"
    }
  }
}, {
  "n": ["male_vampire"],
  "e": "🧛‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "male_vampire-1F3FB",
      "n": "male_vampire",
      "e": "🧛🏻‍♂️"
    },
    "1F3FC": {
      "k": "male_vampire-1F3FC",
      "n": "male_vampire",
      "e": "🧛🏼‍♂️"
    },
    "1F3FD": {
      "k": "male_vampire-1F3FD",
      "n": "male_vampire",
      "e": "🧛🏽‍♂️"
    },
    "1F3FE": {
      "k": "male_vampire-1F3FE",
      "n": "male_vampire",
      "e": "🧛🏾‍♂️"
    },
    "1F3FF": {
      "k": "male_vampire-1F3FF",
      "n": "male_vampire",
      "e": "🧛🏿‍♂️"
    }
  }
}, {
  "n": ["female_vampire"],
  "e": "🧛‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "female_vampire-1F3FB",
      "n": "female_vampire",
      "e": "🧛🏻‍♀️"
    },
    "1F3FC": {
      "k": "female_vampire-1F3FC",
      "n": "female_vampire",
      "e": "🧛🏼‍♀️"
    },
    "1F3FD": {
      "k": "female_vampire-1F3FD",
      "n": "female_vampire",
      "e": "🧛🏽‍♀️"
    },
    "1F3FE": {
      "k": "female_vampire-1F3FE",
      "n": "female_vampire",
      "e": "🧛🏾‍♀️"
    },
    "1F3FF": {
      "k": "female_vampire-1F3FF",
      "n": "female_vampire",
      "e": "🧛🏿‍♀️"
    }
  }
}, {
  "n": ["merperson"],
  "e": "🧜",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "merperson-1F3FB",
      "n": "merperson",
      "e": "🧜🏻"
    },
    "1F3FC": {
      "k": "merperson-1F3FC",
      "n": "merperson",
      "e": "🧜🏼"
    },
    "1F3FD": {
      "k": "merperson-1F3FD",
      "n": "merperson",
      "e": "🧜🏽"
    },
    "1F3FE": {
      "k": "merperson-1F3FE",
      "n": "merperson",
      "e": "🧜🏾"
    },
    "1F3FF": {
      "k": "merperson-1F3FF",
      "n": "merperson",
      "e": "🧜🏿"
    }
  }
}, {
  "n": ["merman"],
  "e": "🧜‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "merman-1F3FB",
      "n": "merman",
      "e": "🧜🏻‍♂️"
    },
    "1F3FC": {
      "k": "merman-1F3FC",
      "n": "merman",
      "e": "🧜🏼‍♂️"
    },
    "1F3FD": {
      "k": "merman-1F3FD",
      "n": "merman",
      "e": "🧜🏽‍♂️"
    },
    "1F3FE": {
      "k": "merman-1F3FE",
      "n": "merman",
      "e": "🧜🏾‍♂️"
    },
    "1F3FF": {
      "k": "merman-1F3FF",
      "n": "merman",
      "e": "🧜🏿‍♂️"
    }
  }
}, {
  "n": ["mermaid"],
  "e": "🧜‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "mermaid-1F3FB",
      "n": "mermaid",
      "e": "🧜🏻‍♀️"
    },
    "1F3FC": {
      "k": "mermaid-1F3FC",
      "n": "mermaid",
      "e": "🧜🏼‍♀️"
    },
    "1F3FD": {
      "k": "mermaid-1F3FD",
      "n": "mermaid",
      "e": "🧜🏽‍♀️"
    },
    "1F3FE": {
      "k": "mermaid-1F3FE",
      "n": "mermaid",
      "e": "🧜🏾‍♀️"
    },
    "1F3FF": {
      "k": "mermaid-1F3FF",
      "n": "mermaid",
      "e": "🧜🏿‍♀️"
    }
  }
}, {
  "n": ["elf"],
  "e": "🧝",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "elf-1F3FB",
      "n": "elf",
      "e": "🧝🏻"
    },
    "1F3FC": {
      "k": "elf-1F3FC",
      "n": "elf",
      "e": "🧝🏼"
    },
    "1F3FD": {
      "k": "elf-1F3FD",
      "n": "elf",
      "e": "🧝🏽"
    },
    "1F3FE": {
      "k": "elf-1F3FE",
      "n": "elf",
      "e": "🧝🏾"
    },
    "1F3FF": {
      "k": "elf-1F3FF",
      "n": "elf",
      "e": "🧝🏿"
    }
  }
}, {
  "n": ["male_elf"],
  "e": "🧝‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "male_elf-1F3FB",
      "n": "male_elf",
      "e": "🧝🏻‍♂️"
    },
    "1F3FC": {
      "k": "male_elf-1F3FC",
      "n": "male_elf",
      "e": "🧝🏼‍♂️"
    },
    "1F3FD": {
      "k": "male_elf-1F3FD",
      "n": "male_elf",
      "e": "🧝🏽‍♂️"
    },
    "1F3FE": {
      "k": "male_elf-1F3FE",
      "n": "male_elf",
      "e": "🧝🏾‍♂️"
    },
    "1F3FF": {
      "k": "male_elf-1F3FF",
      "n": "male_elf",
      "e": "🧝🏿‍♂️"
    }
  }
}, {
  "n": ["female_elf"],
  "e": "🧝‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "female_elf-1F3FB",
      "n": "female_elf",
      "e": "🧝🏻‍♀️"
    },
    "1F3FC": {
      "k": "female_elf-1F3FC",
      "n": "female_elf",
      "e": "🧝🏼‍♀️"
    },
    "1F3FD": {
      "k": "female_elf-1F3FD",
      "n": "female_elf",
      "e": "🧝🏽‍♀️"
    },
    "1F3FE": {
      "k": "female_elf-1F3FE",
      "n": "female_elf",
      "e": "🧝🏾‍♀️"
    },
    "1F3FF": {
      "k": "female_elf-1F3FF",
      "n": "female_elf",
      "e": "🧝🏿‍♀️"
    }
  }
}, {
  "n": ["genie"],
  "e": "🧞",
  "c": 9,
  "ver": "5.0"
}, {
  "n": ["male_genie"],
  "e": "🧞‍♂️",
  "c": 9,
  "ver": "5.0"
}, {
  "n": ["female_genie"],
  "e": "🧞‍♀️",
  "c": 9,
  "ver": "5.0"
}, {
  "n": ["zombie"],
  "e": "🧟",
  "c": 9,
  "ver": "5.0"
}, {
  "n": ["male_zombie"],
  "e": "🧟‍♂️",
  "c": 9,
  "ver": "5.0"
}, {
  "n": ["female_zombie"],
  "e": "🧟‍♀️",
  "c": 9,
  "ver": "5.0"
}, {
  "n": ["massage"],
  "e": "💆",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "massage-1F3FB",
      "n": "massage",
      "e": "💆🏻"
    },
    "1F3FC": {
      "k": "massage-1F3FC",
      "n": "massage",
      "e": "💆🏼"
    },
    "1F3FD": {
      "k": "massage-1F3FD",
      "n": "massage",
      "e": "💆🏽"
    },
    "1F3FE": {
      "k": "massage-1F3FE",
      "n": "massage",
      "e": "💆🏾"
    },
    "1F3FF": {
      "k": "massage-1F3FF",
      "n": "massage",
      "e": "💆🏿"
    }
  }
}, {
  "n": ["man-getting-massage"],
  "e": "💆‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-getting-massage-1F3FB",
      "n": "man-getting-massage",
      "e": "💆🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-getting-massage-1F3FC",
      "n": "man-getting-massage",
      "e": "💆🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-getting-massage-1F3FD",
      "n": "man-getting-massage",
      "e": "💆🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-getting-massage-1F3FE",
      "n": "man-getting-massage",
      "e": "💆🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-getting-massage-1F3FF",
      "n": "man-getting-massage",
      "e": "💆🏿‍♂️"
    }
  }
}, {
  "n": ["woman-getting-massage"],
  "e": "💆‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-getting-massage-1F3FB",
      "n": "woman-getting-massage",
      "e": "💆🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-getting-massage-1F3FC",
      "n": "woman-getting-massage",
      "e": "💆🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-getting-massage-1F3FD",
      "n": "woman-getting-massage",
      "e": "💆🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-getting-massage-1F3FE",
      "n": "woman-getting-massage",
      "e": "💆🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-getting-massage-1F3FF",
      "n": "woman-getting-massage",
      "e": "💆🏿‍♀️"
    }
  }
}, {
  "n": ["haircut"],
  "e": "💇",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "haircut-1F3FB",
      "n": "haircut",
      "e": "💇🏻"
    },
    "1F3FC": {
      "k": "haircut-1F3FC",
      "n": "haircut",
      "e": "💇🏼"
    },
    "1F3FD": {
      "k": "haircut-1F3FD",
      "n": "haircut",
      "e": "💇🏽"
    },
    "1F3FE": {
      "k": "haircut-1F3FE",
      "n": "haircut",
      "e": "💇🏾"
    },
    "1F3FF": {
      "k": "haircut-1F3FF",
      "n": "haircut",
      "e": "💇🏿"
    }
  }
}, {
  "n": ["man-getting-haircut"],
  "e": "💇‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-getting-haircut-1F3FB",
      "n": "man-getting-haircut",
      "e": "💇🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-getting-haircut-1F3FC",
      "n": "man-getting-haircut",
      "e": "💇🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-getting-haircut-1F3FD",
      "n": "man-getting-haircut",
      "e": "💇🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-getting-haircut-1F3FE",
      "n": "man-getting-haircut",
      "e": "💇🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-getting-haircut-1F3FF",
      "n": "man-getting-haircut",
      "e": "💇🏿‍♂️"
    }
  }
}, {
  "n": ["woman-getting-haircut"],
  "e": "💇‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-getting-haircut-1F3FB",
      "n": "woman-getting-haircut",
      "e": "💇🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-getting-haircut-1F3FC",
      "n": "woman-getting-haircut",
      "e": "💇🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-getting-haircut-1F3FD",
      "n": "woman-getting-haircut",
      "e": "💇🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-getting-haircut-1F3FE",
      "n": "woman-getting-haircut",
      "e": "💇🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-getting-haircut-1F3FF",
      "n": "woman-getting-haircut",
      "e": "💇🏿‍♀️"
    }
  }
}, {
  "n": ["walking"],
  "e": "🚶",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "walking-1F3FB",
      "n": "walking",
      "e": "🚶🏻"
    },
    "1F3FC": {
      "k": "walking-1F3FC",
      "n": "walking",
      "e": "🚶🏼"
    },
    "1F3FD": {
      "k": "walking-1F3FD",
      "n": "walking",
      "e": "🚶🏽"
    },
    "1F3FE": {
      "k": "walking-1F3FE",
      "n": "walking",
      "e": "🚶🏾"
    },
    "1F3FF": {
      "k": "walking-1F3FF",
      "n": "walking",
      "e": "🚶🏿"
    }
  }
}, {
  "n": ["man-walking"],
  "e": "🚶‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-walking-1F3FB",
      "n": "man-walking",
      "e": "🚶🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-walking-1F3FC",
      "n": "man-walking",
      "e": "🚶🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-walking-1F3FD",
      "n": "man-walking",
      "e": "🚶🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-walking-1F3FE",
      "n": "man-walking",
      "e": "🚶🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-walking-1F3FF",
      "n": "man-walking",
      "e": "🚶🏿‍♂️"
    }
  }
}, {
  "n": ["woman-walking"],
  "e": "🚶‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-walking-1F3FB",
      "n": "woman-walking",
      "e": "🚶🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-walking-1F3FC",
      "n": "woman-walking",
      "e": "🚶🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-walking-1F3FD",
      "n": "woman-walking",
      "e": "🚶🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-walking-1F3FE",
      "n": "woman-walking",
      "e": "🚶🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-walking-1F3FF",
      "n": "woman-walking",
      "e": "🚶🏿‍♀️"
    }
  }
}, {
  "n": ["standing_person"],
  "e": "🧍",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "standing_person-1F3FB",
      "n": "standing_person",
      "e": "🧍🏻"
    },
    "1F3FC": {
      "k": "standing_person-1F3FC",
      "n": "standing_person",
      "e": "🧍🏼"
    },
    "1F3FD": {
      "k": "standing_person-1F3FD",
      "n": "standing_person",
      "e": "🧍🏽"
    },
    "1F3FE": {
      "k": "standing_person-1F3FE",
      "n": "standing_person",
      "e": "🧍🏾"
    },
    "1F3FF": {
      "k": "standing_person-1F3FF",
      "n": "standing_person",
      "e": "🧍🏿"
    }
  }
}, {
  "n": ["man_standing"],
  "e": "🧍‍♂️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "man_standing-1F3FB",
      "n": "man_standing",
      "e": "🧍🏻‍♂️"
    },
    "1F3FC": {
      "k": "man_standing-1F3FC",
      "n": "man_standing",
      "e": "🧍🏼‍♂️"
    },
    "1F3FD": {
      "k": "man_standing-1F3FD",
      "n": "man_standing",
      "e": "🧍🏽‍♂️"
    },
    "1F3FE": {
      "k": "man_standing-1F3FE",
      "n": "man_standing",
      "e": "🧍🏾‍♂️"
    },
    "1F3FF": {
      "k": "man_standing-1F3FF",
      "n": "man_standing",
      "e": "🧍🏿‍♂️"
    }
  }
}, {
  "n": ["woman_standing"],
  "e": "🧍‍♀️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "woman_standing-1F3FB",
      "n": "woman_standing",
      "e": "🧍🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman_standing-1F3FC",
      "n": "woman_standing",
      "e": "🧍🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman_standing-1F3FD",
      "n": "woman_standing",
      "e": "🧍🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman_standing-1F3FE",
      "n": "woman_standing",
      "e": "🧍🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman_standing-1F3FF",
      "n": "woman_standing",
      "e": "🧍🏿‍♀️"
    }
  }
}, {
  "n": ["kneeling_person"],
  "e": "🧎",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "kneeling_person-1F3FB",
      "n": "kneeling_person",
      "e": "🧎🏻"
    },
    "1F3FC": {
      "k": "kneeling_person-1F3FC",
      "n": "kneeling_person",
      "e": "🧎🏼"
    },
    "1F3FD": {
      "k": "kneeling_person-1F3FD",
      "n": "kneeling_person",
      "e": "🧎🏽"
    },
    "1F3FE": {
      "k": "kneeling_person-1F3FE",
      "n": "kneeling_person",
      "e": "🧎🏾"
    },
    "1F3FF": {
      "k": "kneeling_person-1F3FF",
      "n": "kneeling_person",
      "e": "🧎🏿"
    }
  }
}, {
  "n": ["man_kneeling"],
  "e": "🧎‍♂️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "man_kneeling-1F3FB",
      "n": "man_kneeling",
      "e": "🧎🏻‍♂️"
    },
    "1F3FC": {
      "k": "man_kneeling-1F3FC",
      "n": "man_kneeling",
      "e": "🧎🏼‍♂️"
    },
    "1F3FD": {
      "k": "man_kneeling-1F3FD",
      "n": "man_kneeling",
      "e": "🧎🏽‍♂️"
    },
    "1F3FE": {
      "k": "man_kneeling-1F3FE",
      "n": "man_kneeling",
      "e": "🧎🏾‍♂️"
    },
    "1F3FF": {
      "k": "man_kneeling-1F3FF",
      "n": "man_kneeling",
      "e": "🧎🏿‍♂️"
    }
  }
}, {
  "n": ["woman_kneeling"],
  "e": "🧎‍♀️",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "woman_kneeling-1F3FB",
      "n": "woman_kneeling",
      "e": "🧎🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman_kneeling-1F3FC",
      "n": "woman_kneeling",
      "e": "🧎🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman_kneeling-1F3FD",
      "n": "woman_kneeling",
      "e": "🧎🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman_kneeling-1F3FE",
      "n": "woman_kneeling",
      "e": "🧎🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman_kneeling-1F3FF",
      "n": "woman_kneeling",
      "e": "🧎🏿‍♀️"
    }
  }
}, {
  "n": ["person_with_probing_cane"],
  "e": "🧑‍🦯",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "person_with_probing_cane-1F3FB",
      "n": "person_with_probing_cane",
      "e": "🧑🏻‍🦯"
    },
    "1F3FC": {
      "k": "person_with_probing_cane-1F3FC",
      "n": "person_with_probing_cane",
      "e": "🧑🏼‍🦯"
    },
    "1F3FD": {
      "k": "person_with_probing_cane-1F3FD",
      "n": "person_with_probing_cane",
      "e": "🧑🏽‍🦯"
    },
    "1F3FE": {
      "k": "person_with_probing_cane-1F3FE",
      "n": "person_with_probing_cane",
      "e": "🧑🏾‍🦯"
    },
    "1F3FF": {
      "k": "person_with_probing_cane-1F3FF",
      "n": "person_with_probing_cane",
      "e": "🧑🏿‍🦯"
    }
  }
}, {
  "n": ["man_with_probing_cane"],
  "e": "👨‍🦯",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "man_with_probing_cane-1F3FB",
      "n": "man_with_probing_cane",
      "e": "👨🏻‍🦯"
    },
    "1F3FC": {
      "k": "man_with_probing_cane-1F3FC",
      "n": "man_with_probing_cane",
      "e": "👨🏼‍🦯"
    },
    "1F3FD": {
      "k": "man_with_probing_cane-1F3FD",
      "n": "man_with_probing_cane",
      "e": "👨🏽‍🦯"
    },
    "1F3FE": {
      "k": "man_with_probing_cane-1F3FE",
      "n": "man_with_probing_cane",
      "e": "👨🏾‍🦯"
    },
    "1F3FF": {
      "k": "man_with_probing_cane-1F3FF",
      "n": "man_with_probing_cane",
      "e": "👨🏿‍🦯"
    }
  }
}, {
  "n": ["woman_with_probing_cane"],
  "e": "👩‍🦯",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "woman_with_probing_cane-1F3FB",
      "n": "woman_with_probing_cane",
      "e": "👩🏻‍🦯"
    },
    "1F3FC": {
      "k": "woman_with_probing_cane-1F3FC",
      "n": "woman_with_probing_cane",
      "e": "👩🏼‍🦯"
    },
    "1F3FD": {
      "k": "woman_with_probing_cane-1F3FD",
      "n": "woman_with_probing_cane",
      "e": "👩🏽‍🦯"
    },
    "1F3FE": {
      "k": "woman_with_probing_cane-1F3FE",
      "n": "woman_with_probing_cane",
      "e": "👩🏾‍🦯"
    },
    "1F3FF": {
      "k": "woman_with_probing_cane-1F3FF",
      "n": "woman_with_probing_cane",
      "e": "👩🏿‍🦯"
    }
  }
}, {
  "n": ["person_in_motorized_wheelchair"],
  "e": "🧑‍🦼",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "person_in_motorized_wheelchair-1F3FB",
      "n": "person_in_motorized_wheelchair",
      "e": "🧑🏻‍🦼"
    },
    "1F3FC": {
      "k": "person_in_motorized_wheelchair-1F3FC",
      "n": "person_in_motorized_wheelchair",
      "e": "🧑🏼‍🦼"
    },
    "1F3FD": {
      "k": "person_in_motorized_wheelchair-1F3FD",
      "n": "person_in_motorized_wheelchair",
      "e": "🧑🏽‍🦼"
    },
    "1F3FE": {
      "k": "person_in_motorized_wheelchair-1F3FE",
      "n": "person_in_motorized_wheelchair",
      "e": "🧑🏾‍🦼"
    },
    "1F3FF": {
      "k": "person_in_motorized_wheelchair-1F3FF",
      "n": "person_in_motorized_wheelchair",
      "e": "🧑🏿‍🦼"
    }
  }
}, {
  "n": ["man_in_motorized_wheelchair"],
  "e": "👨‍🦼",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "man_in_motorized_wheelchair-1F3FB",
      "n": "man_in_motorized_wheelchair",
      "e": "👨🏻‍🦼"
    },
    "1F3FC": {
      "k": "man_in_motorized_wheelchair-1F3FC",
      "n": "man_in_motorized_wheelchair",
      "e": "👨🏼‍🦼"
    },
    "1F3FD": {
      "k": "man_in_motorized_wheelchair-1F3FD",
      "n": "man_in_motorized_wheelchair",
      "e": "👨🏽‍🦼"
    },
    "1F3FE": {
      "k": "man_in_motorized_wheelchair-1F3FE",
      "n": "man_in_motorized_wheelchair",
      "e": "👨🏾‍🦼"
    },
    "1F3FF": {
      "k": "man_in_motorized_wheelchair-1F3FF",
      "n": "man_in_motorized_wheelchair",
      "e": "👨🏿‍🦼"
    }
  }
}, {
  "n": ["woman_in_motorized_wheelchair"],
  "e": "👩‍🦼",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "woman_in_motorized_wheelchair-1F3FB",
      "n": "woman_in_motorized_wheelchair",
      "e": "👩🏻‍🦼"
    },
    "1F3FC": {
      "k": "woman_in_motorized_wheelchair-1F3FC",
      "n": "woman_in_motorized_wheelchair",
      "e": "👩🏼‍🦼"
    },
    "1F3FD": {
      "k": "woman_in_motorized_wheelchair-1F3FD",
      "n": "woman_in_motorized_wheelchair",
      "e": "👩🏽‍🦼"
    },
    "1F3FE": {
      "k": "woman_in_motorized_wheelchair-1F3FE",
      "n": "woman_in_motorized_wheelchair",
      "e": "👩🏾‍🦼"
    },
    "1F3FF": {
      "k": "woman_in_motorized_wheelchair-1F3FF",
      "n": "woman_in_motorized_wheelchair",
      "e": "👩🏿‍🦼"
    }
  }
}, {
  "n": ["person_in_manual_wheelchair"],
  "e": "🧑‍🦽",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "person_in_manual_wheelchair-1F3FB",
      "n": "person_in_manual_wheelchair",
      "e": "🧑🏻‍🦽"
    },
    "1F3FC": {
      "k": "person_in_manual_wheelchair-1F3FC",
      "n": "person_in_manual_wheelchair",
      "e": "🧑🏼‍🦽"
    },
    "1F3FD": {
      "k": "person_in_manual_wheelchair-1F3FD",
      "n": "person_in_manual_wheelchair",
      "e": "🧑🏽‍🦽"
    },
    "1F3FE": {
      "k": "person_in_manual_wheelchair-1F3FE",
      "n": "person_in_manual_wheelchair",
      "e": "🧑🏾‍🦽"
    },
    "1F3FF": {
      "k": "person_in_manual_wheelchair-1F3FF",
      "n": "person_in_manual_wheelchair",
      "e": "🧑🏿‍🦽"
    }
  }
}, {
  "n": ["man_in_manual_wheelchair"],
  "e": "👨‍🦽",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "man_in_manual_wheelchair-1F3FB",
      "n": "man_in_manual_wheelchair",
      "e": "👨🏻‍🦽"
    },
    "1F3FC": {
      "k": "man_in_manual_wheelchair-1F3FC",
      "n": "man_in_manual_wheelchair",
      "e": "👨🏼‍🦽"
    },
    "1F3FD": {
      "k": "man_in_manual_wheelchair-1F3FD",
      "n": "man_in_manual_wheelchair",
      "e": "👨🏽‍🦽"
    },
    "1F3FE": {
      "k": "man_in_manual_wheelchair-1F3FE",
      "n": "man_in_manual_wheelchair",
      "e": "👨🏾‍🦽"
    },
    "1F3FF": {
      "k": "man_in_manual_wheelchair-1F3FF",
      "n": "man_in_manual_wheelchair",
      "e": "👨🏿‍🦽"
    }
  }
}, {
  "n": ["woman_in_manual_wheelchair"],
  "e": "👩‍🦽",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB": {
      "k": "woman_in_manual_wheelchair-1F3FB",
      "n": "woman_in_manual_wheelchair",
      "e": "👩🏻‍🦽"
    },
    "1F3FC": {
      "k": "woman_in_manual_wheelchair-1F3FC",
      "n": "woman_in_manual_wheelchair",
      "e": "👩🏼‍🦽"
    },
    "1F3FD": {
      "k": "woman_in_manual_wheelchair-1F3FD",
      "n": "woman_in_manual_wheelchair",
      "e": "👩🏽‍🦽"
    },
    "1F3FE": {
      "k": "woman_in_manual_wheelchair-1F3FE",
      "n": "woman_in_manual_wheelchair",
      "e": "👩🏾‍🦽"
    },
    "1F3FF": {
      "k": "woman_in_manual_wheelchair-1F3FF",
      "n": "woman_in_manual_wheelchair",
      "e": "👩🏿‍🦽"
    }
  }
}, {
  "n": ["runner", "running"],
  "e": "🏃",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "runner-1F3FB",
      "n": "runner",
      "e": "🏃🏻"
    },
    "1F3FC": {
      "k": "runner-1F3FC",
      "n": "runner",
      "e": "🏃🏼"
    },
    "1F3FD": {
      "k": "runner-1F3FD",
      "n": "runner",
      "e": "🏃🏽"
    },
    "1F3FE": {
      "k": "runner-1F3FE",
      "n": "runner",
      "e": "🏃🏾"
    },
    "1F3FF": {
      "k": "runner-1F3FF",
      "n": "runner",
      "e": "🏃🏿"
    }
  }
}, {
  "n": ["man-running"],
  "e": "🏃‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-running-1F3FB",
      "n": "man-running",
      "e": "🏃🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-running-1F3FC",
      "n": "man-running",
      "e": "🏃🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-running-1F3FD",
      "n": "man-running",
      "e": "🏃🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-running-1F3FE",
      "n": "man-running",
      "e": "🏃🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-running-1F3FF",
      "n": "man-running",
      "e": "🏃🏿‍♂️"
    }
  }
}, {
  "n": ["woman-running"],
  "e": "🏃‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-running-1F3FB",
      "n": "woman-running",
      "e": "🏃🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-running-1F3FC",
      "n": "woman-running",
      "e": "🏃🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-running-1F3FD",
      "n": "woman-running",
      "e": "🏃🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-running-1F3FE",
      "n": "woman-running",
      "e": "🏃🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-running-1F3FF",
      "n": "woman-running",
      "e": "🏃🏿‍♀️"
    }
  }
}, {
  "n": ["dancer"],
  "e": "💃",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "dancer-1F3FB",
      "n": "dancer",
      "e": "💃🏻"
    },
    "1F3FC": {
      "k": "dancer-1F3FC",
      "n": "dancer",
      "e": "💃🏼"
    },
    "1F3FD": {
      "k": "dancer-1F3FD",
      "n": "dancer",
      "e": "💃🏽"
    },
    "1F3FE": {
      "k": "dancer-1F3FE",
      "n": "dancer",
      "e": "💃🏾"
    },
    "1F3FF": {
      "k": "dancer-1F3FF",
      "n": "dancer",
      "e": "💃🏿"
    }
  }
}, {
  "n": ["man_dancing"],
  "e": "🕺",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man_dancing-1F3FB",
      "n": "man_dancing",
      "e": "🕺🏻"
    },
    "1F3FC": {
      "k": "man_dancing-1F3FC",
      "n": "man_dancing",
      "e": "🕺🏼"
    },
    "1F3FD": {
      "k": "man_dancing-1F3FD",
      "n": "man_dancing",
      "e": "🕺🏽"
    },
    "1F3FE": {
      "k": "man_dancing-1F3FE",
      "n": "man_dancing",
      "e": "🕺🏾"
    },
    "1F3FF": {
      "k": "man_dancing-1F3FF",
      "n": "man_dancing",
      "e": "🕺🏿"
    }
  }
}, {
  "n": ["man_in_business_suit_levitating"],
  "e": "🕴️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "man_in_business_suit_levitating-1F3FB",
      "n": "man_in_business_suit_levitating",
      "e": "🕴🏻"
    },
    "1F3FC": {
      "k": "man_in_business_suit_levitating-1F3FC",
      "n": "man_in_business_suit_levitating",
      "e": "🕴🏼"
    },
    "1F3FD": {
      "k": "man_in_business_suit_levitating-1F3FD",
      "n": "man_in_business_suit_levitating",
      "e": "🕴🏽"
    },
    "1F3FE": {
      "k": "man_in_business_suit_levitating-1F3FE",
      "n": "man_in_business_suit_levitating",
      "e": "🕴🏾"
    },
    "1F3FF": {
      "k": "man_in_business_suit_levitating-1F3FF",
      "n": "man_in_business_suit_levitating",
      "e": "🕴🏿"
    }
  }
}, {
  "n": ["dancers"],
  "e": "👯",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-with-bunny-ears-partying"],
  "e": "👯‍♂️",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["woman-with-bunny-ears-partying"],
  "e": "👯‍♀️",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["person_in_steamy_room"],
  "e": "🧖",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "person_in_steamy_room-1F3FB",
      "n": "person_in_steamy_room",
      "e": "🧖🏻"
    },
    "1F3FC": {
      "k": "person_in_steamy_room-1F3FC",
      "n": "person_in_steamy_room",
      "e": "🧖🏼"
    },
    "1F3FD": {
      "k": "person_in_steamy_room-1F3FD",
      "n": "person_in_steamy_room",
      "e": "🧖🏽"
    },
    "1F3FE": {
      "k": "person_in_steamy_room-1F3FE",
      "n": "person_in_steamy_room",
      "e": "🧖🏾"
    },
    "1F3FF": {
      "k": "person_in_steamy_room-1F3FF",
      "n": "person_in_steamy_room",
      "e": "🧖🏿"
    }
  }
}, {
  "n": ["man_in_steamy_room"],
  "e": "🧖‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "man_in_steamy_room-1F3FB",
      "n": "man_in_steamy_room",
      "e": "🧖🏻‍♂️"
    },
    "1F3FC": {
      "k": "man_in_steamy_room-1F3FC",
      "n": "man_in_steamy_room",
      "e": "🧖🏼‍♂️"
    },
    "1F3FD": {
      "k": "man_in_steamy_room-1F3FD",
      "n": "man_in_steamy_room",
      "e": "🧖🏽‍♂️"
    },
    "1F3FE": {
      "k": "man_in_steamy_room-1F3FE",
      "n": "man_in_steamy_room",
      "e": "🧖🏾‍♂️"
    },
    "1F3FF": {
      "k": "man_in_steamy_room-1F3FF",
      "n": "man_in_steamy_room",
      "e": "🧖🏿‍♂️"
    }
  }
}, {
  "n": ["woman_in_steamy_room"],
  "e": "🧖‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "woman_in_steamy_room-1F3FB",
      "n": "woman_in_steamy_room",
      "e": "🧖🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman_in_steamy_room-1F3FC",
      "n": "woman_in_steamy_room",
      "e": "🧖🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman_in_steamy_room-1F3FD",
      "n": "woman_in_steamy_room",
      "e": "🧖🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman_in_steamy_room-1F3FE",
      "n": "woman_in_steamy_room",
      "e": "🧖🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman_in_steamy_room-1F3FF",
      "n": "woman_in_steamy_room",
      "e": "🧖🏿‍♀️"
    }
  }
}, {
  "n": ["person_climbing"],
  "e": "🧗",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "person_climbing-1F3FB",
      "n": "person_climbing",
      "e": "🧗🏻"
    },
    "1F3FC": {
      "k": "person_climbing-1F3FC",
      "n": "person_climbing",
      "e": "🧗🏼"
    },
    "1F3FD": {
      "k": "person_climbing-1F3FD",
      "n": "person_climbing",
      "e": "🧗🏽"
    },
    "1F3FE": {
      "k": "person_climbing-1F3FE",
      "n": "person_climbing",
      "e": "🧗🏾"
    },
    "1F3FF": {
      "k": "person_climbing-1F3FF",
      "n": "person_climbing",
      "e": "🧗🏿"
    }
  }
}, {
  "n": ["man_climbing"],
  "e": "🧗‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "man_climbing-1F3FB",
      "n": "man_climbing",
      "e": "🧗🏻‍♂️"
    },
    "1F3FC": {
      "k": "man_climbing-1F3FC",
      "n": "man_climbing",
      "e": "🧗🏼‍♂️"
    },
    "1F3FD": {
      "k": "man_climbing-1F3FD",
      "n": "man_climbing",
      "e": "🧗🏽‍♂️"
    },
    "1F3FE": {
      "k": "man_climbing-1F3FE",
      "n": "man_climbing",
      "e": "🧗🏾‍♂️"
    },
    "1F3FF": {
      "k": "man_climbing-1F3FF",
      "n": "man_climbing",
      "e": "🧗🏿‍♂️"
    }
  }
}, {
  "n": ["woman_climbing"],
  "e": "🧗‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "woman_climbing-1F3FB",
      "n": "woman_climbing",
      "e": "🧗🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman_climbing-1F3FC",
      "n": "woman_climbing",
      "e": "🧗🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman_climbing-1F3FD",
      "n": "woman_climbing",
      "e": "🧗🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman_climbing-1F3FE",
      "n": "woman_climbing",
      "e": "🧗🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman_climbing-1F3FF",
      "n": "woman_climbing",
      "e": "🧗🏿‍♀️"
    }
  }
}, {
  "n": ["fencer"],
  "e": "🤺",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["horse_racing"],
  "e": "🏇",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "horse_racing-1F3FB",
      "n": "horse_racing",
      "e": "🏇🏻"
    },
    "1F3FC": {
      "k": "horse_racing-1F3FC",
      "n": "horse_racing",
      "e": "🏇🏼"
    },
    "1F3FD": {
      "k": "horse_racing-1F3FD",
      "n": "horse_racing",
      "e": "🏇🏽"
    },
    "1F3FE": {
      "k": "horse_racing-1F3FE",
      "n": "horse_racing",
      "e": "🏇🏾"
    },
    "1F3FF": {
      "k": "horse_racing-1F3FF",
      "n": "horse_racing",
      "e": "🏇🏿"
    }
  }
}, {
  "n": ["skier"],
  "e": "⛷️",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["snowboarder"],
  "e": "🏂",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "snowboarder-1F3FB",
      "n": "snowboarder",
      "e": "🏂🏻"
    },
    "1F3FC": {
      "k": "snowboarder-1F3FC",
      "n": "snowboarder",
      "e": "🏂🏼"
    },
    "1F3FD": {
      "k": "snowboarder-1F3FD",
      "n": "snowboarder",
      "e": "🏂🏽"
    },
    "1F3FE": {
      "k": "snowboarder-1F3FE",
      "n": "snowboarder",
      "e": "🏂🏾"
    },
    "1F3FF": {
      "k": "snowboarder-1F3FF",
      "n": "snowboarder",
      "e": "🏂🏿"
    }
  }
}, {
  "n": ["golfer"],
  "e": "🏌️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "golfer-1F3FB",
      "n": "golfer",
      "e": "🏌🏻"
    },
    "1F3FC": {
      "k": "golfer-1F3FC",
      "n": "golfer",
      "e": "🏌🏼"
    },
    "1F3FD": {
      "k": "golfer-1F3FD",
      "n": "golfer",
      "e": "🏌🏽"
    },
    "1F3FE": {
      "k": "golfer-1F3FE",
      "n": "golfer",
      "e": "🏌🏾"
    },
    "1F3FF": {
      "k": "golfer-1F3FF",
      "n": "golfer",
      "e": "🏌🏿"
    }
  }
}, {
  "n": ["man-golfing"],
  "e": "🏌️‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-golfing-1F3FB",
      "n": "man-golfing",
      "e": "🏌🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-golfing-1F3FC",
      "n": "man-golfing",
      "e": "🏌🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-golfing-1F3FD",
      "n": "man-golfing",
      "e": "🏌🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-golfing-1F3FE",
      "n": "man-golfing",
      "e": "🏌🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-golfing-1F3FF",
      "n": "man-golfing",
      "e": "🏌🏿‍♂️"
    }
  }
}, {
  "n": ["woman-golfing"],
  "e": "🏌️‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-golfing-1F3FB",
      "n": "woman-golfing",
      "e": "🏌🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-golfing-1F3FC",
      "n": "woman-golfing",
      "e": "🏌🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-golfing-1F3FD",
      "n": "woman-golfing",
      "e": "🏌🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-golfing-1F3FE",
      "n": "woman-golfing",
      "e": "🏌🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-golfing-1F3FF",
      "n": "woman-golfing",
      "e": "🏌🏿‍♀️"
    }
  }
}, {
  "n": ["surfer"],
  "e": "🏄",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "surfer-1F3FB",
      "n": "surfer",
      "e": "🏄🏻"
    },
    "1F3FC": {
      "k": "surfer-1F3FC",
      "n": "surfer",
      "e": "🏄🏼"
    },
    "1F3FD": {
      "k": "surfer-1F3FD",
      "n": "surfer",
      "e": "🏄🏽"
    },
    "1F3FE": {
      "k": "surfer-1F3FE",
      "n": "surfer",
      "e": "🏄🏾"
    },
    "1F3FF": {
      "k": "surfer-1F3FF",
      "n": "surfer",
      "e": "🏄🏿"
    }
  }
}, {
  "n": ["man-surfing"],
  "e": "🏄‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-surfing-1F3FB",
      "n": "man-surfing",
      "e": "🏄🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-surfing-1F3FC",
      "n": "man-surfing",
      "e": "🏄🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-surfing-1F3FD",
      "n": "man-surfing",
      "e": "🏄🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-surfing-1F3FE",
      "n": "man-surfing",
      "e": "🏄🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-surfing-1F3FF",
      "n": "man-surfing",
      "e": "🏄🏿‍♂️"
    }
  }
}, {
  "n": ["woman-surfing"],
  "e": "🏄‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-surfing-1F3FB",
      "n": "woman-surfing",
      "e": "🏄🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-surfing-1F3FC",
      "n": "woman-surfing",
      "e": "🏄🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-surfing-1F3FD",
      "n": "woman-surfing",
      "e": "🏄🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-surfing-1F3FE",
      "n": "woman-surfing",
      "e": "🏄🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-surfing-1F3FF",
      "n": "woman-surfing",
      "e": "🏄🏿‍♀️"
    }
  }
}, {
  "n": ["rowboat"],
  "e": "🚣",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "rowboat-1F3FB",
      "n": "rowboat",
      "e": "🚣🏻"
    },
    "1F3FC": {
      "k": "rowboat-1F3FC",
      "n": "rowboat",
      "e": "🚣🏼"
    },
    "1F3FD": {
      "k": "rowboat-1F3FD",
      "n": "rowboat",
      "e": "🚣🏽"
    },
    "1F3FE": {
      "k": "rowboat-1F3FE",
      "n": "rowboat",
      "e": "🚣🏾"
    },
    "1F3FF": {
      "k": "rowboat-1F3FF",
      "n": "rowboat",
      "e": "🚣🏿"
    }
  }
}, {
  "n": ["man-rowing-boat"],
  "e": "🚣‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-rowing-boat-1F3FB",
      "n": "man-rowing-boat",
      "e": "🚣🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-rowing-boat-1F3FC",
      "n": "man-rowing-boat",
      "e": "🚣🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-rowing-boat-1F3FD",
      "n": "man-rowing-boat",
      "e": "🚣🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-rowing-boat-1F3FE",
      "n": "man-rowing-boat",
      "e": "🚣🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-rowing-boat-1F3FF",
      "n": "man-rowing-boat",
      "e": "🚣🏿‍♂️"
    }
  }
}, {
  "n": ["woman-rowing-boat"],
  "e": "🚣‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-rowing-boat-1F3FB",
      "n": "woman-rowing-boat",
      "e": "🚣🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-rowing-boat-1F3FC",
      "n": "woman-rowing-boat",
      "e": "🚣🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-rowing-boat-1F3FD",
      "n": "woman-rowing-boat",
      "e": "🚣🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-rowing-boat-1F3FE",
      "n": "woman-rowing-boat",
      "e": "🚣🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-rowing-boat-1F3FF",
      "n": "woman-rowing-boat",
      "e": "🚣🏿‍♀️"
    }
  }
}, {
  "n": ["swimmer"],
  "e": "🏊",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "swimmer-1F3FB",
      "n": "swimmer",
      "e": "🏊🏻"
    },
    "1F3FC": {
      "k": "swimmer-1F3FC",
      "n": "swimmer",
      "e": "🏊🏼"
    },
    "1F3FD": {
      "k": "swimmer-1F3FD",
      "n": "swimmer",
      "e": "🏊🏽"
    },
    "1F3FE": {
      "k": "swimmer-1F3FE",
      "n": "swimmer",
      "e": "🏊🏾"
    },
    "1F3FF": {
      "k": "swimmer-1F3FF",
      "n": "swimmer",
      "e": "🏊🏿"
    }
  }
}, {
  "n": ["man-swimming"],
  "e": "🏊‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-swimming-1F3FB",
      "n": "man-swimming",
      "e": "🏊🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-swimming-1F3FC",
      "n": "man-swimming",
      "e": "🏊🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-swimming-1F3FD",
      "n": "man-swimming",
      "e": "🏊🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-swimming-1F3FE",
      "n": "man-swimming",
      "e": "🏊🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-swimming-1F3FF",
      "n": "man-swimming",
      "e": "🏊🏿‍♂️"
    }
  }
}, {
  "n": ["woman-swimming"],
  "e": "🏊‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-swimming-1F3FB",
      "n": "woman-swimming",
      "e": "🏊🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-swimming-1F3FC",
      "n": "woman-swimming",
      "e": "🏊🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-swimming-1F3FD",
      "n": "woman-swimming",
      "e": "🏊🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-swimming-1F3FE",
      "n": "woman-swimming",
      "e": "🏊🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-swimming-1F3FF",
      "n": "woman-swimming",
      "e": "🏊🏿‍♀️"
    }
  }
}, {
  "n": ["person_with_ball"],
  "e": "⛹️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "person_with_ball-1F3FB",
      "n": "person_with_ball",
      "e": "⛹🏻"
    },
    "1F3FC": {
      "k": "person_with_ball-1F3FC",
      "n": "person_with_ball",
      "e": "⛹🏼"
    },
    "1F3FD": {
      "k": "person_with_ball-1F3FD",
      "n": "person_with_ball",
      "e": "⛹🏽"
    },
    "1F3FE": {
      "k": "person_with_ball-1F3FE",
      "n": "person_with_ball",
      "e": "⛹🏾"
    },
    "1F3FF": {
      "k": "person_with_ball-1F3FF",
      "n": "person_with_ball",
      "e": "⛹🏿"
    }
  }
}, {
  "n": ["man-bouncing-ball"],
  "e": "⛹️‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-bouncing-ball-1F3FB",
      "n": "man-bouncing-ball",
      "e": "⛹🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-bouncing-ball-1F3FC",
      "n": "man-bouncing-ball",
      "e": "⛹🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-bouncing-ball-1F3FD",
      "n": "man-bouncing-ball",
      "e": "⛹🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-bouncing-ball-1F3FE",
      "n": "man-bouncing-ball",
      "e": "⛹🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-bouncing-ball-1F3FF",
      "n": "man-bouncing-ball",
      "e": "⛹🏿‍♂️"
    }
  }
}, {
  "n": ["woman-bouncing-ball"],
  "e": "⛹️‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-bouncing-ball-1F3FB",
      "n": "woman-bouncing-ball",
      "e": "⛹🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-bouncing-ball-1F3FC",
      "n": "woman-bouncing-ball",
      "e": "⛹🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-bouncing-ball-1F3FD",
      "n": "woman-bouncing-ball",
      "e": "⛹🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-bouncing-ball-1F3FE",
      "n": "woman-bouncing-ball",
      "e": "⛹🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-bouncing-ball-1F3FF",
      "n": "woman-bouncing-ball",
      "e": "⛹🏿‍♀️"
    }
  }
}, {
  "n": ["weight_lifter"],
  "e": "🏋️",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "weight_lifter-1F3FB",
      "n": "weight_lifter",
      "e": "🏋🏻"
    },
    "1F3FC": {
      "k": "weight_lifter-1F3FC",
      "n": "weight_lifter",
      "e": "🏋🏼"
    },
    "1F3FD": {
      "k": "weight_lifter-1F3FD",
      "n": "weight_lifter",
      "e": "🏋🏽"
    },
    "1F3FE": {
      "k": "weight_lifter-1F3FE",
      "n": "weight_lifter",
      "e": "🏋🏾"
    },
    "1F3FF": {
      "k": "weight_lifter-1F3FF",
      "n": "weight_lifter",
      "e": "🏋🏿"
    }
  }
}, {
  "n": ["man-lifting-weights"],
  "e": "🏋️‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-lifting-weights-1F3FB",
      "n": "man-lifting-weights",
      "e": "🏋🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-lifting-weights-1F3FC",
      "n": "man-lifting-weights",
      "e": "🏋🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-lifting-weights-1F3FD",
      "n": "man-lifting-weights",
      "e": "🏋🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-lifting-weights-1F3FE",
      "n": "man-lifting-weights",
      "e": "🏋🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-lifting-weights-1F3FF",
      "n": "man-lifting-weights",
      "e": "🏋🏿‍♂️"
    }
  }
}, {
  "n": ["woman-lifting-weights"],
  "e": "🏋️‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-lifting-weights-1F3FB",
      "n": "woman-lifting-weights",
      "e": "🏋🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-lifting-weights-1F3FC",
      "n": "woman-lifting-weights",
      "e": "🏋🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-lifting-weights-1F3FD",
      "n": "woman-lifting-weights",
      "e": "🏋🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-lifting-weights-1F3FE",
      "n": "woman-lifting-weights",
      "e": "🏋🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-lifting-weights-1F3FF",
      "n": "woman-lifting-weights",
      "e": "🏋🏿‍♀️"
    }
  }
}, {
  "n": ["bicyclist"],
  "e": "🚴",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "bicyclist-1F3FB",
      "n": "bicyclist",
      "e": "🚴🏻"
    },
    "1F3FC": {
      "k": "bicyclist-1F3FC",
      "n": "bicyclist",
      "e": "🚴🏼"
    },
    "1F3FD": {
      "k": "bicyclist-1F3FD",
      "n": "bicyclist",
      "e": "🚴🏽"
    },
    "1F3FE": {
      "k": "bicyclist-1F3FE",
      "n": "bicyclist",
      "e": "🚴🏾"
    },
    "1F3FF": {
      "k": "bicyclist-1F3FF",
      "n": "bicyclist",
      "e": "🚴🏿"
    }
  }
}, {
  "n": ["man-biking"],
  "e": "🚴‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-biking-1F3FB",
      "n": "man-biking",
      "e": "🚴🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-biking-1F3FC",
      "n": "man-biking",
      "e": "🚴🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-biking-1F3FD",
      "n": "man-biking",
      "e": "🚴🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-biking-1F3FE",
      "n": "man-biking",
      "e": "🚴🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-biking-1F3FF",
      "n": "man-biking",
      "e": "🚴🏿‍♂️"
    }
  }
}, {
  "n": ["woman-biking"],
  "e": "🚴‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-biking-1F3FB",
      "n": "woman-biking",
      "e": "🚴🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-biking-1F3FC",
      "n": "woman-biking",
      "e": "🚴🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-biking-1F3FD",
      "n": "woman-biking",
      "e": "🚴🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-biking-1F3FE",
      "n": "woman-biking",
      "e": "🚴🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-biking-1F3FF",
      "n": "woman-biking",
      "e": "🚴🏿‍♀️"
    }
  }
}, {
  "n": ["mountain_bicyclist"],
  "e": "🚵",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "mountain_bicyclist-1F3FB",
      "n": "mountain_bicyclist",
      "e": "🚵🏻"
    },
    "1F3FC": {
      "k": "mountain_bicyclist-1F3FC",
      "n": "mountain_bicyclist",
      "e": "🚵🏼"
    },
    "1F3FD": {
      "k": "mountain_bicyclist-1F3FD",
      "n": "mountain_bicyclist",
      "e": "🚵🏽"
    },
    "1F3FE": {
      "k": "mountain_bicyclist-1F3FE",
      "n": "mountain_bicyclist",
      "e": "🚵🏾"
    },
    "1F3FF": {
      "k": "mountain_bicyclist-1F3FF",
      "n": "mountain_bicyclist",
      "e": "🚵🏿"
    }
  }
}, {
  "n": ["man-mountain-biking"],
  "e": "🚵‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-mountain-biking-1F3FB",
      "n": "man-mountain-biking",
      "e": "🚵🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-mountain-biking-1F3FC",
      "n": "man-mountain-biking",
      "e": "🚵🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-mountain-biking-1F3FD",
      "n": "man-mountain-biking",
      "e": "🚵🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-mountain-biking-1F3FE",
      "n": "man-mountain-biking",
      "e": "🚵🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-mountain-biking-1F3FF",
      "n": "man-mountain-biking",
      "e": "🚵🏿‍♂️"
    }
  }
}, {
  "n": ["woman-mountain-biking"],
  "e": "🚵‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-mountain-biking-1F3FB",
      "n": "woman-mountain-biking",
      "e": "🚵🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-mountain-biking-1F3FC",
      "n": "woman-mountain-biking",
      "e": "🚵🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-mountain-biking-1F3FD",
      "n": "woman-mountain-biking",
      "e": "🚵🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-mountain-biking-1F3FE",
      "n": "woman-mountain-biking",
      "e": "🚵🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-mountain-biking-1F3FF",
      "n": "woman-mountain-biking",
      "e": "🚵🏿‍♀️"
    }
  }
}, {
  "n": ["person_doing_cartwheel"],
  "e": "🤸",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "person_doing_cartwheel-1F3FB",
      "n": "person_doing_cartwheel",
      "e": "🤸🏻"
    },
    "1F3FC": {
      "k": "person_doing_cartwheel-1F3FC",
      "n": "person_doing_cartwheel",
      "e": "🤸🏼"
    },
    "1F3FD": {
      "k": "person_doing_cartwheel-1F3FD",
      "n": "person_doing_cartwheel",
      "e": "🤸🏽"
    },
    "1F3FE": {
      "k": "person_doing_cartwheel-1F3FE",
      "n": "person_doing_cartwheel",
      "e": "🤸🏾"
    },
    "1F3FF": {
      "k": "person_doing_cartwheel-1F3FF",
      "n": "person_doing_cartwheel",
      "e": "🤸🏿"
    }
  }
}, {
  "n": ["man-cartwheeling"],
  "e": "🤸‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-cartwheeling-1F3FB",
      "n": "man-cartwheeling",
      "e": "🤸🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-cartwheeling-1F3FC",
      "n": "man-cartwheeling",
      "e": "🤸🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-cartwheeling-1F3FD",
      "n": "man-cartwheeling",
      "e": "🤸🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-cartwheeling-1F3FE",
      "n": "man-cartwheeling",
      "e": "🤸🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-cartwheeling-1F3FF",
      "n": "man-cartwheeling",
      "e": "🤸🏿‍♂️"
    }
  }
}, {
  "n": ["woman-cartwheeling"],
  "e": "🤸‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-cartwheeling-1F3FB",
      "n": "woman-cartwheeling",
      "e": "🤸🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-cartwheeling-1F3FC",
      "n": "woman-cartwheeling",
      "e": "🤸🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-cartwheeling-1F3FD",
      "n": "woman-cartwheeling",
      "e": "🤸🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-cartwheeling-1F3FE",
      "n": "woman-cartwheeling",
      "e": "🤸🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-cartwheeling-1F3FF",
      "n": "woman-cartwheeling",
      "e": "🤸🏿‍♀️"
    }
  }
}, {
  "n": ["wrestlers"],
  "e": "🤼",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["man-wrestling"],
  "e": "🤼‍♂️",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["woman-wrestling"],
  "e": "🤼‍♀️",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["water_polo"],
  "e": "🤽",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "water_polo-1F3FB",
      "n": "water_polo",
      "e": "🤽🏻"
    },
    "1F3FC": {
      "k": "water_polo-1F3FC",
      "n": "water_polo",
      "e": "🤽🏼"
    },
    "1F3FD": {
      "k": "water_polo-1F3FD",
      "n": "water_polo",
      "e": "🤽🏽"
    },
    "1F3FE": {
      "k": "water_polo-1F3FE",
      "n": "water_polo",
      "e": "🤽🏾"
    },
    "1F3FF": {
      "k": "water_polo-1F3FF",
      "n": "water_polo",
      "e": "🤽🏿"
    }
  }
}, {
  "n": ["man-playing-water-polo"],
  "e": "🤽‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-playing-water-polo-1F3FB",
      "n": "man-playing-water-polo",
      "e": "🤽🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-playing-water-polo-1F3FC",
      "n": "man-playing-water-polo",
      "e": "🤽🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-playing-water-polo-1F3FD",
      "n": "man-playing-water-polo",
      "e": "🤽🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-playing-water-polo-1F3FE",
      "n": "man-playing-water-polo",
      "e": "🤽🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-playing-water-polo-1F3FF",
      "n": "man-playing-water-polo",
      "e": "🤽🏿‍♂️"
    }
  }
}, {
  "n": ["woman-playing-water-polo"],
  "e": "🤽‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-playing-water-polo-1F3FB",
      "n": "woman-playing-water-polo",
      "e": "🤽🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-playing-water-polo-1F3FC",
      "n": "woman-playing-water-polo",
      "e": "🤽🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-playing-water-polo-1F3FD",
      "n": "woman-playing-water-polo",
      "e": "🤽🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-playing-water-polo-1F3FE",
      "n": "woman-playing-water-polo",
      "e": "🤽🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-playing-water-polo-1F3FF",
      "n": "woman-playing-water-polo",
      "e": "🤽🏿‍♀️"
    }
  }
}, {
  "n": ["handball"],
  "e": "🤾",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "handball-1F3FB",
      "n": "handball",
      "e": "🤾🏻"
    },
    "1F3FC": {
      "k": "handball-1F3FC",
      "n": "handball",
      "e": "🤾🏼"
    },
    "1F3FD": {
      "k": "handball-1F3FD",
      "n": "handball",
      "e": "🤾🏽"
    },
    "1F3FE": {
      "k": "handball-1F3FE",
      "n": "handball",
      "e": "🤾🏾"
    },
    "1F3FF": {
      "k": "handball-1F3FF",
      "n": "handball",
      "e": "🤾🏿"
    }
  }
}, {
  "n": ["man-playing-handball"],
  "e": "🤾‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-playing-handball-1F3FB",
      "n": "man-playing-handball",
      "e": "🤾🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-playing-handball-1F3FC",
      "n": "man-playing-handball",
      "e": "🤾🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-playing-handball-1F3FD",
      "n": "man-playing-handball",
      "e": "🤾🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-playing-handball-1F3FE",
      "n": "man-playing-handball",
      "e": "🤾🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-playing-handball-1F3FF",
      "n": "man-playing-handball",
      "e": "🤾🏿‍♂️"
    }
  }
}, {
  "n": ["woman-playing-handball"],
  "e": "🤾‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-playing-handball-1F3FB",
      "n": "woman-playing-handball",
      "e": "🤾🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-playing-handball-1F3FC",
      "n": "woman-playing-handball",
      "e": "🤾🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-playing-handball-1F3FD",
      "n": "woman-playing-handball",
      "e": "🤾🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-playing-handball-1F3FE",
      "n": "woman-playing-handball",
      "e": "🤾🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-playing-handball-1F3FF",
      "n": "woman-playing-handball",
      "e": "🤾🏿‍♀️"
    }
  }
}, {
  "n": ["juggling"],
  "e": "🤹",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "juggling-1F3FB",
      "n": "juggling",
      "e": "🤹🏻"
    },
    "1F3FC": {
      "k": "juggling-1F3FC",
      "n": "juggling",
      "e": "🤹🏼"
    },
    "1F3FD": {
      "k": "juggling-1F3FD",
      "n": "juggling",
      "e": "🤹🏽"
    },
    "1F3FE": {
      "k": "juggling-1F3FE",
      "n": "juggling",
      "e": "🤹🏾"
    },
    "1F3FF": {
      "k": "juggling-1F3FF",
      "n": "juggling",
      "e": "🤹🏿"
    }
  }
}, {
  "n": ["man-juggling"],
  "e": "🤹‍♂️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "man-juggling-1F3FB",
      "n": "man-juggling",
      "e": "🤹🏻‍♂️"
    },
    "1F3FC": {
      "k": "man-juggling-1F3FC",
      "n": "man-juggling",
      "e": "🤹🏼‍♂️"
    },
    "1F3FD": {
      "k": "man-juggling-1F3FD",
      "n": "man-juggling",
      "e": "🤹🏽‍♂️"
    },
    "1F3FE": {
      "k": "man-juggling-1F3FE",
      "n": "man-juggling",
      "e": "🤹🏾‍♂️"
    },
    "1F3FF": {
      "k": "man-juggling-1F3FF",
      "n": "man-juggling",
      "e": "🤹🏿‍♂️"
    }
  }
}, {
  "n": ["woman-juggling"],
  "e": "🤹‍♀️",
  "c": 9,
  "ver": "4.0",
  "v": {
    "1F3FB": {
      "k": "woman-juggling-1F3FB",
      "n": "woman-juggling",
      "e": "🤹🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman-juggling-1F3FC",
      "n": "woman-juggling",
      "e": "🤹🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman-juggling-1F3FD",
      "n": "woman-juggling",
      "e": "🤹🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman-juggling-1F3FE",
      "n": "woman-juggling",
      "e": "🤹🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman-juggling-1F3FF",
      "n": "woman-juggling",
      "e": "🤹🏿‍♀️"
    }
  }
}, {
  "n": ["person_in_lotus_position"],
  "e": "🧘",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "person_in_lotus_position-1F3FB",
      "n": "person_in_lotus_position",
      "e": "🧘🏻"
    },
    "1F3FC": {
      "k": "person_in_lotus_position-1F3FC",
      "n": "person_in_lotus_position",
      "e": "🧘🏼"
    },
    "1F3FD": {
      "k": "person_in_lotus_position-1F3FD",
      "n": "person_in_lotus_position",
      "e": "🧘🏽"
    },
    "1F3FE": {
      "k": "person_in_lotus_position-1F3FE",
      "n": "person_in_lotus_position",
      "e": "🧘🏾"
    },
    "1F3FF": {
      "k": "person_in_lotus_position-1F3FF",
      "n": "person_in_lotus_position",
      "e": "🧘🏿"
    }
  }
}, {
  "n": ["man_in_lotus_position"],
  "e": "🧘‍♂️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "man_in_lotus_position-1F3FB",
      "n": "man_in_lotus_position",
      "e": "🧘🏻‍♂️"
    },
    "1F3FC": {
      "k": "man_in_lotus_position-1F3FC",
      "n": "man_in_lotus_position",
      "e": "🧘🏼‍♂️"
    },
    "1F3FD": {
      "k": "man_in_lotus_position-1F3FD",
      "n": "man_in_lotus_position",
      "e": "🧘🏽‍♂️"
    },
    "1F3FE": {
      "k": "man_in_lotus_position-1F3FE",
      "n": "man_in_lotus_position",
      "e": "🧘🏾‍♂️"
    },
    "1F3FF": {
      "k": "man_in_lotus_position-1F3FF",
      "n": "man_in_lotus_position",
      "e": "🧘🏿‍♂️"
    }
  }
}, {
  "n": ["woman_in_lotus_position"],
  "e": "🧘‍♀️",
  "c": 9,
  "ver": "5.0",
  "v": {
    "1F3FB": {
      "k": "woman_in_lotus_position-1F3FB",
      "n": "woman_in_lotus_position",
      "e": "🧘🏻‍♀️"
    },
    "1F3FC": {
      "k": "woman_in_lotus_position-1F3FC",
      "n": "woman_in_lotus_position",
      "e": "🧘🏼‍♀️"
    },
    "1F3FD": {
      "k": "woman_in_lotus_position-1F3FD",
      "n": "woman_in_lotus_position",
      "e": "🧘🏽‍♀️"
    },
    "1F3FE": {
      "k": "woman_in_lotus_position-1F3FE",
      "n": "woman_in_lotus_position",
      "e": "🧘🏾‍♀️"
    },
    "1F3FF": {
      "k": "woman_in_lotus_position-1F3FF",
      "n": "woman_in_lotus_position",
      "e": "🧘🏿‍♀️"
    }
  }
}, {
  "n": ["bath"],
  "e": "🛀",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "bath-1F3FB",
      "n": "bath",
      "e": "🛀🏻"
    },
    "1F3FC": {
      "k": "bath-1F3FC",
      "n": "bath",
      "e": "🛀🏼"
    },
    "1F3FD": {
      "k": "bath-1F3FD",
      "n": "bath",
      "e": "🛀🏽"
    },
    "1F3FE": {
      "k": "bath-1F3FE",
      "n": "bath",
      "e": "🛀🏾"
    },
    "1F3FF": {
      "k": "bath-1F3FF",
      "n": "bath",
      "e": "🛀🏿"
    }
  }
}, {
  "n": ["sleeping_accommodation"],
  "e": "🛌",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "sleeping_accommodation-1F3FB",
      "n": "sleeping_accommodation",
      "e": "🛌🏻"
    },
    "1F3FC": {
      "k": "sleeping_accommodation-1F3FC",
      "n": "sleeping_accommodation",
      "e": "🛌🏼"
    },
    "1F3FD": {
      "k": "sleeping_accommodation-1F3FD",
      "n": "sleeping_accommodation",
      "e": "🛌🏽"
    },
    "1F3FE": {
      "k": "sleeping_accommodation-1F3FE",
      "n": "sleeping_accommodation",
      "e": "🛌🏾"
    },
    "1F3FF": {
      "k": "sleeping_accommodation-1F3FF",
      "n": "sleeping_accommodation",
      "e": "🛌🏿"
    }
  }
}, {
  "n": ["people_holding_hands"],
  "e": "🧑‍🤝‍🧑",
  "c": 9,
  "ver": "12.1",
  "v": {
    "1F3FB-1F3FB": {
      "k": "people_holding_hands-1F3FB-1F3FB",
      "n": "people_holding_hands",
      "e": "🧑🏻‍🤝‍🧑🏻"
    },
    "1F3FB-1F3FC": {
      "k": "people_holding_hands-1F3FB-1F3FC",
      "n": "people_holding_hands",
      "e": "🧑🏻‍🤝‍🧑🏼"
    },
    "1F3FB-1F3FD": {
      "k": "people_holding_hands-1F3FB-1F3FD",
      "n": "people_holding_hands",
      "e": "🧑🏻‍🤝‍🧑🏽"
    },
    "1F3FB-1F3FE": {
      "k": "people_holding_hands-1F3FB-1F3FE",
      "n": "people_holding_hands",
      "e": "🧑🏻‍🤝‍🧑🏾"
    },
    "1F3FB-1F3FF": {
      "k": "people_holding_hands-1F3FB-1F3FF",
      "n": "people_holding_hands",
      "e": "🧑🏻‍🤝‍🧑🏿"
    },
    "1F3FC-1F3FB": {
      "k": "people_holding_hands-1F3FC-1F3FB",
      "n": "people_holding_hands",
      "e": "🧑🏼‍🤝‍🧑🏻"
    },
    "1F3FC-1F3FC": {
      "k": "people_holding_hands-1F3FC-1F3FC",
      "n": "people_holding_hands",
      "e": "🧑🏼‍🤝‍🧑🏼"
    },
    "1F3FC-1F3FD": {
      "k": "people_holding_hands-1F3FC-1F3FD",
      "n": "people_holding_hands",
      "e": "🧑🏼‍🤝‍🧑🏽"
    },
    "1F3FC-1F3FE": {
      "k": "people_holding_hands-1F3FC-1F3FE",
      "n": "people_holding_hands",
      "e": "🧑🏼‍🤝‍🧑🏾"
    },
    "1F3FC-1F3FF": {
      "k": "people_holding_hands-1F3FC-1F3FF",
      "n": "people_holding_hands",
      "e": "🧑🏼‍🤝‍🧑🏿"
    },
    "1F3FD-1F3FB": {
      "k": "people_holding_hands-1F3FD-1F3FB",
      "n": "people_holding_hands",
      "e": "🧑🏽‍🤝‍🧑🏻"
    },
    "1F3FD-1F3FC": {
      "k": "people_holding_hands-1F3FD-1F3FC",
      "n": "people_holding_hands",
      "e": "🧑🏽‍🤝‍🧑🏼"
    },
    "1F3FD-1F3FD": {
      "k": "people_holding_hands-1F3FD-1F3FD",
      "n": "people_holding_hands",
      "e": "🧑🏽‍🤝‍🧑🏽"
    },
    "1F3FD-1F3FE": {
      "k": "people_holding_hands-1F3FD-1F3FE",
      "n": "people_holding_hands",
      "e": "🧑🏽‍🤝‍🧑🏾"
    },
    "1F3FD-1F3FF": {
      "k": "people_holding_hands-1F3FD-1F3FF",
      "n": "people_holding_hands",
      "e": "🧑🏽‍🤝‍🧑🏿"
    },
    "1F3FE-1F3FB": {
      "k": "people_holding_hands-1F3FE-1F3FB",
      "n": "people_holding_hands",
      "e": "🧑🏾‍🤝‍🧑🏻"
    },
    "1F3FE-1F3FC": {
      "k": "people_holding_hands-1F3FE-1F3FC",
      "n": "people_holding_hands",
      "e": "🧑🏾‍🤝‍🧑🏼"
    },
    "1F3FE-1F3FD": {
      "k": "people_holding_hands-1F3FE-1F3FD",
      "n": "people_holding_hands",
      "e": "🧑🏾‍🤝‍🧑🏽"
    },
    "1F3FE-1F3FE": {
      "k": "people_holding_hands-1F3FE-1F3FE",
      "n": "people_holding_hands",
      "e": "🧑🏾‍🤝‍🧑🏾"
    },
    "1F3FE-1F3FF": {
      "k": "people_holding_hands-1F3FE-1F3FF",
      "n": "people_holding_hands",
      "e": "🧑🏾‍🤝‍🧑🏿"
    },
    "1F3FF-1F3FB": {
      "k": "people_holding_hands-1F3FF-1F3FB",
      "n": "people_holding_hands",
      "e": "🧑🏿‍🤝‍🧑🏻"
    },
    "1F3FF-1F3FC": {
      "k": "people_holding_hands-1F3FF-1F3FC",
      "n": "people_holding_hands",
      "e": "🧑🏿‍🤝‍🧑🏼"
    },
    "1F3FF-1F3FD": {
      "k": "people_holding_hands-1F3FF-1F3FD",
      "n": "people_holding_hands",
      "e": "🧑🏿‍🤝‍🧑🏽"
    },
    "1F3FF-1F3FE": {
      "k": "people_holding_hands-1F3FF-1F3FE",
      "n": "people_holding_hands",
      "e": "🧑🏿‍🤝‍🧑🏾"
    },
    "1F3FF-1F3FF": {
      "k": "people_holding_hands-1F3FF-1F3FF",
      "n": "people_holding_hands",
      "e": "🧑🏿‍🤝‍🧑🏿"
    }
  }
}, {
  "n": ["two_women_holding_hands", "women_holding_hands"],
  "e": "👭",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "two_women_holding_hands-1F3FB",
      "n": "two_women_holding_hands",
      "e": "👭🏻"
    },
    "1F3FC": {
      "k": "two_women_holding_hands-1F3FC",
      "n": "two_women_holding_hands",
      "e": "👭🏼"
    },
    "1F3FD": {
      "k": "two_women_holding_hands-1F3FD",
      "n": "two_women_holding_hands",
      "e": "👭🏽"
    },
    "1F3FE": {
      "k": "two_women_holding_hands-1F3FE",
      "n": "two_women_holding_hands",
      "e": "👭🏾"
    },
    "1F3FF": {
      "k": "two_women_holding_hands-1F3FF",
      "n": "two_women_holding_hands",
      "e": "👭🏿"
    },
    "1F3FB-1F3FC": {
      "k": "two_women_holding_hands-1F3FB-1F3FC",
      "n": "two_women_holding_hands",
      "e": "👩🏻‍🤝‍👩🏼"
    },
    "1F3FB-1F3FD": {
      "k": "two_women_holding_hands-1F3FB-1F3FD",
      "n": "two_women_holding_hands",
      "e": "👩🏻‍🤝‍👩🏽"
    },
    "1F3FB-1F3FE": {
      "k": "two_women_holding_hands-1F3FB-1F3FE",
      "n": "two_women_holding_hands",
      "e": "👩🏻‍🤝‍👩🏾"
    },
    "1F3FB-1F3FF": {
      "k": "two_women_holding_hands-1F3FB-1F3FF",
      "n": "two_women_holding_hands",
      "e": "👩🏻‍🤝‍👩🏿"
    },
    "1F3FC-1F3FB": {
      "k": "two_women_holding_hands-1F3FC-1F3FB",
      "n": "two_women_holding_hands",
      "e": "👩🏼‍🤝‍👩🏻"
    },
    "1F3FC-1F3FD": {
      "k": "two_women_holding_hands-1F3FC-1F3FD",
      "n": "two_women_holding_hands",
      "e": "👩🏼‍🤝‍👩🏽"
    },
    "1F3FC-1F3FE": {
      "k": "two_women_holding_hands-1F3FC-1F3FE",
      "n": "two_women_holding_hands",
      "e": "👩🏼‍🤝‍👩🏾"
    },
    "1F3FC-1F3FF": {
      "k": "two_women_holding_hands-1F3FC-1F3FF",
      "n": "two_women_holding_hands",
      "e": "👩🏼‍🤝‍👩🏿"
    },
    "1F3FD-1F3FB": {
      "k": "two_women_holding_hands-1F3FD-1F3FB",
      "n": "two_women_holding_hands",
      "e": "👩🏽‍🤝‍👩🏻"
    },
    "1F3FD-1F3FC": {
      "k": "two_women_holding_hands-1F3FD-1F3FC",
      "n": "two_women_holding_hands",
      "e": "👩🏽‍🤝‍👩🏼"
    },
    "1F3FD-1F3FE": {
      "k": "two_women_holding_hands-1F3FD-1F3FE",
      "n": "two_women_holding_hands",
      "e": "👩🏽‍🤝‍👩🏾"
    },
    "1F3FD-1F3FF": {
      "k": "two_women_holding_hands-1F3FD-1F3FF",
      "n": "two_women_holding_hands",
      "e": "👩🏽‍🤝‍👩🏿"
    },
    "1F3FE-1F3FB": {
      "k": "two_women_holding_hands-1F3FE-1F3FB",
      "n": "two_women_holding_hands",
      "e": "👩🏾‍🤝‍👩🏻"
    },
    "1F3FE-1F3FC": {
      "k": "two_women_holding_hands-1F3FE-1F3FC",
      "n": "two_women_holding_hands",
      "e": "👩🏾‍🤝‍👩🏼"
    },
    "1F3FE-1F3FD": {
      "k": "two_women_holding_hands-1F3FE-1F3FD",
      "n": "two_women_holding_hands",
      "e": "👩🏾‍🤝‍👩🏽"
    },
    "1F3FE-1F3FF": {
      "k": "two_women_holding_hands-1F3FE-1F3FF",
      "n": "two_women_holding_hands",
      "e": "👩🏾‍🤝‍👩🏿"
    },
    "1F3FF-1F3FB": {
      "k": "two_women_holding_hands-1F3FF-1F3FB",
      "n": "two_women_holding_hands",
      "e": "👩🏿‍🤝‍👩🏻"
    },
    "1F3FF-1F3FC": {
      "k": "two_women_holding_hands-1F3FF-1F3FC",
      "n": "two_women_holding_hands",
      "e": "👩🏿‍🤝‍👩🏼"
    },
    "1F3FF-1F3FD": {
      "k": "two_women_holding_hands-1F3FF-1F3FD",
      "n": "two_women_holding_hands",
      "e": "👩🏿‍🤝‍👩🏽"
    },
    "1F3FF-1F3FE": {
      "k": "two_women_holding_hands-1F3FF-1F3FE",
      "n": "two_women_holding_hands",
      "e": "👩🏿‍🤝‍👩🏾"
    }
  }
}, {
  "n": ["couple", "man_and_woman_holding_hands", "woman_and_man_holding_hands"],
  "e": "👫",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "couple-1F3FB",
      "n": "couple",
      "e": "👫🏻"
    },
    "1F3FC": {
      "k": "couple-1F3FC",
      "n": "couple",
      "e": "👫🏼"
    },
    "1F3FD": {
      "k": "couple-1F3FD",
      "n": "couple",
      "e": "👫🏽"
    },
    "1F3FE": {
      "k": "couple-1F3FE",
      "n": "couple",
      "e": "👫🏾"
    },
    "1F3FF": {
      "k": "couple-1F3FF",
      "n": "couple",
      "e": "👫🏿"
    },
    "1F3FB-1F3FC": {
      "k": "couple-1F3FB-1F3FC",
      "n": "couple",
      "e": "👩🏻‍🤝‍👨🏼"
    },
    "1F3FB-1F3FD": {
      "k": "couple-1F3FB-1F3FD",
      "n": "couple",
      "e": "👩🏻‍🤝‍👨🏽"
    },
    "1F3FB-1F3FE": {
      "k": "couple-1F3FB-1F3FE",
      "n": "couple",
      "e": "👩🏻‍🤝‍👨🏾"
    },
    "1F3FB-1F3FF": {
      "k": "couple-1F3FB-1F3FF",
      "n": "couple",
      "e": "👩🏻‍🤝‍👨🏿"
    },
    "1F3FC-1F3FB": {
      "k": "couple-1F3FC-1F3FB",
      "n": "couple",
      "e": "👩🏼‍🤝‍👨🏻"
    },
    "1F3FC-1F3FD": {
      "k": "couple-1F3FC-1F3FD",
      "n": "couple",
      "e": "👩🏼‍🤝‍👨🏽"
    },
    "1F3FC-1F3FE": {
      "k": "couple-1F3FC-1F3FE",
      "n": "couple",
      "e": "👩🏼‍🤝‍👨🏾"
    },
    "1F3FC-1F3FF": {
      "k": "couple-1F3FC-1F3FF",
      "n": "couple",
      "e": "👩🏼‍🤝‍👨🏿"
    },
    "1F3FD-1F3FB": {
      "k": "couple-1F3FD-1F3FB",
      "n": "couple",
      "e": "👩🏽‍🤝‍👨🏻"
    },
    "1F3FD-1F3FC": {
      "k": "couple-1F3FD-1F3FC",
      "n": "couple",
      "e": "👩🏽‍🤝‍👨🏼"
    },
    "1F3FD-1F3FE": {
      "k": "couple-1F3FD-1F3FE",
      "n": "couple",
      "e": "👩🏽‍🤝‍👨🏾"
    },
    "1F3FD-1F3FF": {
      "k": "couple-1F3FD-1F3FF",
      "n": "couple",
      "e": "👩🏽‍🤝‍👨🏿"
    },
    "1F3FE-1F3FB": {
      "k": "couple-1F3FE-1F3FB",
      "n": "couple",
      "e": "👩🏾‍🤝‍👨🏻"
    },
    "1F3FE-1F3FC": {
      "k": "couple-1F3FE-1F3FC",
      "n": "couple",
      "e": "👩🏾‍🤝‍👨🏼"
    },
    "1F3FE-1F3FD": {
      "k": "couple-1F3FE-1F3FD",
      "n": "couple",
      "e": "👩🏾‍🤝‍👨🏽"
    },
    "1F3FE-1F3FF": {
      "k": "couple-1F3FE-1F3FF",
      "n": "couple",
      "e": "👩🏾‍🤝‍👨🏿"
    },
    "1F3FF-1F3FB": {
      "k": "couple-1F3FF-1F3FB",
      "n": "couple",
      "e": "👩🏿‍🤝‍👨🏻"
    },
    "1F3FF-1F3FC": {
      "k": "couple-1F3FF-1F3FC",
      "n": "couple",
      "e": "👩🏿‍🤝‍👨🏼"
    },
    "1F3FF-1F3FD": {
      "k": "couple-1F3FF-1F3FD",
      "n": "couple",
      "e": "👩🏿‍🤝‍👨🏽"
    },
    "1F3FF-1F3FE": {
      "k": "couple-1F3FF-1F3FE",
      "n": "couple",
      "e": "👩🏿‍🤝‍👨🏾"
    }
  }
}, {
  "n": ["two_men_holding_hands", "men_holding_hands"],
  "e": "👬",
  "c": 9,
  "ver": "2.0",
  "v": {
    "1F3FB": {
      "k": "two_men_holding_hands-1F3FB",
      "n": "two_men_holding_hands",
      "e": "👬🏻"
    },
    "1F3FC": {
      "k": "two_men_holding_hands-1F3FC",
      "n": "two_men_holding_hands",
      "e": "👬🏼"
    },
    "1F3FD": {
      "k": "two_men_holding_hands-1F3FD",
      "n": "two_men_holding_hands",
      "e": "👬🏽"
    },
    "1F3FE": {
      "k": "two_men_holding_hands-1F3FE",
      "n": "two_men_holding_hands",
      "e": "👬🏾"
    },
    "1F3FF": {
      "k": "two_men_holding_hands-1F3FF",
      "n": "two_men_holding_hands",
      "e": "👬🏿"
    },
    "1F3FB-1F3FC": {
      "k": "two_men_holding_hands-1F3FB-1F3FC",
      "n": "two_men_holding_hands",
      "e": "👨🏻‍🤝‍👨🏼"
    },
    "1F3FB-1F3FD": {
      "k": "two_men_holding_hands-1F3FB-1F3FD",
      "n": "two_men_holding_hands",
      "e": "👨🏻‍🤝‍👨🏽"
    },
    "1F3FB-1F3FE": {
      "k": "two_men_holding_hands-1F3FB-1F3FE",
      "n": "two_men_holding_hands",
      "e": "👨🏻‍🤝‍👨🏾"
    },
    "1F3FB-1F3FF": {
      "k": "two_men_holding_hands-1F3FB-1F3FF",
      "n": "two_men_holding_hands",
      "e": "👨🏻‍🤝‍👨🏿"
    },
    "1F3FC-1F3FB": {
      "k": "two_men_holding_hands-1F3FC-1F3FB",
      "n": "two_men_holding_hands",
      "e": "👨🏼‍🤝‍👨🏻"
    },
    "1F3FC-1F3FD": {
      "k": "two_men_holding_hands-1F3FC-1F3FD",
      "n": "two_men_holding_hands",
      "e": "👨🏼‍🤝‍👨🏽"
    },
    "1F3FC-1F3FE": {
      "k": "two_men_holding_hands-1F3FC-1F3FE",
      "n": "two_men_holding_hands",
      "e": "👨🏼‍🤝‍👨🏾"
    },
    "1F3FC-1F3FF": {
      "k": "two_men_holding_hands-1F3FC-1F3FF",
      "n": "two_men_holding_hands",
      "e": "👨🏼‍🤝‍👨🏿"
    },
    "1F3FD-1F3FB": {
      "k": "two_men_holding_hands-1F3FD-1F3FB",
      "n": "two_men_holding_hands",
      "e": "👨🏽‍🤝‍👨🏻"
    },
    "1F3FD-1F3FC": {
      "k": "two_men_holding_hands-1F3FD-1F3FC",
      "n": "two_men_holding_hands",
      "e": "👨🏽‍🤝‍👨🏼"
    },
    "1F3FD-1F3FE": {
      "k": "two_men_holding_hands-1F3FD-1F3FE",
      "n": "two_men_holding_hands",
      "e": "👨🏽‍🤝‍👨🏾"
    },
    "1F3FD-1F3FF": {
      "k": "two_men_holding_hands-1F3FD-1F3FF",
      "n": "two_men_holding_hands",
      "e": "👨🏽‍🤝‍👨🏿"
    },
    "1F3FE-1F3FB": {
      "k": "two_men_holding_hands-1F3FE-1F3FB",
      "n": "two_men_holding_hands",
      "e": "👨🏾‍🤝‍👨🏻"
    },
    "1F3FE-1F3FC": {
      "k": "two_men_holding_hands-1F3FE-1F3FC",
      "n": "two_men_holding_hands",
      "e": "👨🏾‍🤝‍👨🏼"
    },
    "1F3FE-1F3FD": {
      "k": "two_men_holding_hands-1F3FE-1F3FD",
      "n": "two_men_holding_hands",
      "e": "👨🏾‍🤝‍👨🏽"
    },
    "1F3FE-1F3FF": {
      "k": "two_men_holding_hands-1F3FE-1F3FF",
      "n": "two_men_holding_hands",
      "e": "👨🏾‍🤝‍👨🏿"
    },
    "1F3FF-1F3FB": {
      "k": "two_men_holding_hands-1F3FF-1F3FB",
      "n": "two_men_holding_hands",
      "e": "👨🏿‍🤝‍👨🏻"
    },
    "1F3FF-1F3FC": {
      "k": "two_men_holding_hands-1F3FF-1F3FC",
      "n": "two_men_holding_hands",
      "e": "👨🏿‍🤝‍👨🏼"
    },
    "1F3FF-1F3FD": {
      "k": "two_men_holding_hands-1F3FF-1F3FD",
      "n": "two_men_holding_hands",
      "e": "👨🏿‍🤝‍👨🏽"
    },
    "1F3FF-1F3FE": {
      "k": "two_men_holding_hands-1F3FF-1F3FE",
      "n": "two_men_holding_hands",
      "e": "👨🏿‍🤝‍👨🏾"
    }
  }
}, {
  "n": ["couplekiss"],
  "e": "💏",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-kiss-man"],
  "e": "👩‍❤️‍💋‍👨",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-kiss-man"],
  "e": "👨‍❤️‍💋‍👨",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-kiss-woman"],
  "e": "👩‍❤️‍💋‍👩",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["couple_with_heart"],
  "e": "💑",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-heart-man"],
  "e": "👩‍❤️‍👨",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-heart-man"],
  "e": "👨‍❤️‍👨",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-heart-woman"],
  "e": "👩‍❤️‍👩",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["family", "man-woman-boy"],
  "e": "👪",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-woman-boy", "family"],
  "e": "👨‍👩‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-woman-girl"],
  "e": "👨‍👩‍👧",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-woman-girl-boy"],
  "e": "👨‍👩‍👧‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-woman-boy-boy"],
  "e": "👨‍👩‍👦‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-woman-girl-girl"],
  "e": "👨‍👩‍👧‍👧",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-man-boy"],
  "e": "👨‍👨‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-man-girl"],
  "e": "👨‍👨‍👧",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-man-girl-boy"],
  "e": "👨‍👨‍👧‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-man-boy-boy"],
  "e": "👨‍👨‍👦‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-man-girl-girl"],
  "e": "👨‍👨‍👧‍👧",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-woman-boy"],
  "e": "👩‍👩‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-woman-girl"],
  "e": "👩‍👩‍👧",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-woman-girl-boy"],
  "e": "👩‍👩‍👧‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-woman-boy-boy"],
  "e": "👩‍👩‍👦‍👦",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["woman-woman-girl-girl"],
  "e": "👩‍👩‍👧‍👧",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["man-boy"],
  "e": "👨‍👦",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["man-boy-boy"],
  "e": "👨‍👦‍👦",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["man-girl"],
  "e": "👨‍👧",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["man-girl-boy"],
  "e": "👨‍👧‍👦",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["man-girl-girl"],
  "e": "👨‍👧‍👧",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["woman-boy"],
  "e": "👩‍👦",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["woman-boy-boy"],
  "e": "👩‍👦‍👦",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["woman-girl"],
  "e": "👩‍👧",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["woman-girl-boy"],
  "e": "👩‍👧‍👦",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["woman-girl-girl"],
  "e": "👩‍👧‍👧",
  "c": 9,
  "ver": "4.0"
}, {
  "n": ["speaking_head_in_silhouette"],
  "e": "🗣️",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["bust_in_silhouette"],
  "e": "👤",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["busts_in_silhouette"],
  "e": "👥",
  "c": 9,
  "ver": "2.0"
}, {
  "n": ["footprints"],
  "e": "👣",
  "c": 9,
  "ver": "2.0"
}];

/**
 * @element i-emoji
 *
 * @cssprop --i-emoji-size
 */

class Emoji extends LitElement {
  static get properties() {
    return {
      name: String
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      button {
        font-size: var(--i-emoji-size, 20px);
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.value = '';
  }

  get emoji() {
    return this.value || emojis.find(e => e.n.find(n => n === this.name));
  }

  render() {
    return html`
      <button>${this.emoji}</button>
    `;
  }

}
customElements.define('i-emoji', Emoji);

/**
 * @element i-emoji-selector
 *
 * @cssprop --i-emoji-size
 */

class EmojiSelector extends LitElement {
  static get properties() {
    return {
      query: String
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
      }
      input {
        display: flex;
        width: 100%;
        margin-bottom: var(--gap);
      }
      ol {
        list-style: none;
        width: 100%;
        display: grid;
        grid-gap: var(--gap);
      }
      li {
        padding: 0;
      }
    `;
  }

  constructor() {
    super();
    this.query = '';
  }

  updateSearch(e) {
    this.query = e.target.value;
  }

  get results() {
    return this.query ? emojis.filter(emoji => emoji.n.filter(name => name.toLowerCase().indexOf(this.query.toLowerCase()) >= 0).length) : emojis.slice(0, 100);
  }

  renderResults() {
    return html`
      <ol>
        ${this.results.map(e => html`
              <li><i-emoji .value=${e.e}></i-emoji></li>
            `)}
      </ol>
    `;
  }

  render() {
    return html`
      ${this.renderResults()}
      <input @change=${this.updateSearch} .value=${this.query} />
    `;
  }

}
customElements.define('i-emoji-selector', EmojiSelector);

export { Emoji, EmojiSelector };
//# sourceMappingURL=index.js.map

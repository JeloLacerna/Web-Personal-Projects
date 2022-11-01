/* This script is for general webpage functionalities */

// Gacha Banners
const bannerFirst = [
    {
      name: 'Secretum Secretorum - Albedo Banner',
      pos: '40% 18%',
      zoom: '200%',
      image: 'secretum_secretorum_2.jpg',
      start: '2021-11-24 11:00:00',
      end: '2021-12-14 17:59:59',
      color: '#FFFAF5',
      url: 'https://www.hoyolab.com/article/1432611',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: 'Marvelous Merchandise',
      pos: '0% 60%',
      image: 'marvelous_merchandise_event.jpg',
      start: '2021-12-27 10:00:00',
      end: '2022-01-03 03:59:59',
      color: '#FFE248',
      zoom: '170%',
      url: 'https://www.hoyolab.com/article/1608464',
      showOnHome: true,
    },
    {
      name: 'The Transcendent One Returns - Shenhe Banner',
      pos: '40% 22%',
      zoom: '200%',
      image: 'the_transcendent_one_returns.jpg',
      start: '2022-01-05 10:00:00',
      end: '2022-01-25 17:59:59',
      color: '#81DDF0',
      url: 'https://www.hoyolab.com/article/1823224',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: 'Gentry of Hermitage - Zhongli Banner',
      pos: '40% 15%',
      zoom: '200%',
      image: 'gentry_of_hermitage_3.jpg',
      start: '2022-01-25 18:00:00',
      end: '2022-02-15 14:59:59',
      color: '#FFF5BF',
      url: 'https://www.hoyolab.com/article/1823206',
      showOnHome: true,
    },
    {
      name: 'Reign of Serenity - Raiden Banner',
      pos: '40% 15%',
      zoom: '200%',
      image: 'reign_of_serenity_2.jpg',
      start: '2022-03-08 18:00:00',
      end: '2022-03-29 14:59:59',
      color: '#D0AEF2',
      url: 'https://www.hoyolab.com/article/3643652',
      showOnHome: true,
    },
]
const bannerSecond = [
    {
      name: 'Born of Ocean Swell - Eula Banner',
      pos: '40% 22%',
      zoom: '200%',
      image: 'born_of_ocean_swell_2.jpg',
      start: '2021-11-24 11:00:00',
      end: '2021-12-14 17:59:59',
      color: '#E7F9FF',
      url: 'https://www.hoyolab.com/article/1432612',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: "Oni's Royale - Itto Banner",
      pos: '40% 22%',
      zoom: '200%',
      image: 'onis_royale.jpg',
      start: '2021-12-14 18:00:00',
      end: '2022-01-04 14:59:59',
      color: '#FFB455',
      url: 'https://www.hoyolab.com/article/1608406',
      showOnHome: true,
    },
    {
      name: 'Invitation to Mundane Life - Xiao Banner',
      pos: '40% 22%',
      zoom: '200%',
      image: 'invitation_to_mundane_life_2.jpg',
      start: '2022-01-05 10:00:00',
      end: '2022-01-25 17:59:59',
      color: '#5AD4D4',
      url: 'https://www.hoyolab.com/article/1823212',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: 'Adrift in the Harbor - Ganyu Banner',
      pos: '40% 15%',
      zoom: '200%',
      image: 'adrift_in_the_harbor_2.jpg',
      start: '2022-01-25 18:00:00',
      end: '2022-02-15 14:59:59',
      color: '#D7EDFA',
      url: 'https://www.hoyolab.com/article/1823218',
      showOnHome: true,
    },
    {
      name: 'Everbloom Violet - Yae Miko Banner',
      pos: '40% 15%',
      zoom: '200%',
      image: 'everbloom_violet_1.jpg',
      start: '2022-02-16 10:00:00',
      end: '2022-03-08 17:59:59',
      color: '#ffd1f9',
      url: 'https://www.hoyolab.com/article/3355975',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: 'Drifting Luminescence - Kokomi Banner',
      pos: '40% 15%',
      zoom: '200%',
      image: 'drifting_luminescence_2.jpg',
      start: '2022-03-08 18:00:00',
      end: '2022-03-29 14:59:59',
      color: '#53caf3',
      url: 'https://www.hoyolab.com/article/3643654',
      showOnHome: true,
    },
]
const weaponBanner = [
    {
      name: 'Epitome Invocation - Weapon Banner',
      pos: '40% 40%',
      image: 'epitome_invocation_21.jpg',
      start: '2021-11-24 11:00:00',
      end: '2021-12-14 17:59:59',
      color: '#FFAA4B',
      url: 'https://www.hoyolab.com/article/1432613',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: 'Epitome Invocation - Weapon Banner',
      pos: '40% 40%',
      image: 'epitome_invocation_22.jpg',
      start: '2021-12-14 18:00:00',
      end: '2022-01-04 14:59:59',
      color: '#FFAA4B',
      url: 'https://www.hoyolab.com/article/1608407',
      showOnHome: true,
    },
    {
      name: 'Epitome Invocation - Weapon Banner',
      pos: '30% 10%',
      zoom: '150%',
      image: 'epitome_invocation_23.jpg',
      start: '2022-01-05 10:00:00',
      end: '2022-01-25 17:59:59',
      color: '#FFAA4B',
      url: 'https://www.hoyolab.com/article/1823187',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: 'Epitome Invocation - Weapon Banner',
      pos: '30% 10%',
      zoom: '150%',
      image: 'epitome_invocation_24.jpg',
      start: '2022-01-25 18:00:00',
      end: '2022-02-15 14:59:59',
      color: '#FFAA4B',
      url: 'https://www.hoyolab.com/article/1823188',
      showOnHome: true,
    },
    {
      name: 'Epitome Invocation - Weapon Banner',
      pos: '30% 40%',
      zoom: '150%',
      image: 'epitome_invocation_25.jpg',
      start: '2022-02-16 10:00:00',
      end: '2022-03-08 17:59:59',
      color: '#FFAA4B',
      url: 'https://www.hoyolab.com/article/3355976',
      showOnHome: true,
      timezoneDependent: true,
    },
    {
      name: 'Epitome Invocation - Weapon Banner',
      pos: '30% 30%',
      zoom: '150%',
      image: 'epitome_invocation_26.jpg',
      start: '2022-03-08 18:00:00',
      end: '2022-03-29 14:59:59',
      color: '#FFAA4B',
      url: 'https://www.hoyolab.com/article/3643657',
      showOnHome: true,
    },
]
// Event data
const mainEvents = [
    {
        name: 'Shadows Amidst Snowstorms',
        pos: '0% 20%',
        zoom: '180%',
        image: 'shadows_amidst_snowstorms.jpg',
        start: '2021-11-25 11:00:00',
        end: '2021-12-13 03:59:59',
        color: '#dfe9f2',
        url: 'https://www.hoyolab.com/article/1432656',
        showOnHome: true,
      },
      {
        name: 'Fleeting Colors in Flight',
        image: 'fleeting_colors_in_flight.jpg',
        start: '2022-01-25 10:00:00',
        end: '2022-02-12 03:59:59',
        color: '#FEA283',
        pos: '100% 30%',
        zoom: '150%',
        url: 'https://www.hoyolab.com/article/1823189',
        showOnHome: true,
      },
      {
        name: 'Three Realms Gateway Offering',
        pos: '0% 0%',
        zoom: '100%',
        image: 'three_realms_gateway_offering.jpg',
        start: '2022-02-17 10:00:00',
        end: '2022-03-30 06:00:00',
        color: '#9c9cef',
        url: 'https://www.hoyolab.com/article/3356118',
        showOnHome: true,
      },
]
const secondaryEvents = [
      {
        name: 'Bantan Sango Case Files: The Warrior Dog',
        pos: '0% 60%',
        image: 'warrior_dog.jpg',
        start: '2021-12-07 10:00:00',
        end: '2021-12-20 03:59:59',
        color: '#838CE7',
        zoom: '200%',
        url: 'https://www.hoyolab.com/article/1432656',
        showOnHome: true,
      },
      {
        name: 'Misty Dungeon: Realm of Light',
        pos: '0% 60%',
        image: 'misty_dungeon.jpg',
        start: '2021-12-17 10:00:00',
        end: '2021-12-27 03:59:59',
        color: '#8EC0B3',
        zoom: '200%',
        url: 'https://www.hoyolab.com/article/1653437',
        showOnHome: true,
      },
      {
        name: 'A Study in Potions',
        pos: '0% 50%',
        image: 'a_study_in_potions.jpg',
        start: '2022-01-07 10:00:00',
        end: '2022-01-17 03:59:59',
        color: '#9FE0D4',
        zoom: '200%',
        url: 'https://www.hoyolab.com/article/1823273',
        showOnHome: true,
      },
      {
        name: 'May Fortune Find You - Daily Login',
        pos: '0% 30%',
        image: 'daily_login.jpg',
        start: '2022-01-25 04:00:00',
        end: '2022-02-09 03:59:59',
        color: '#F18B53',
        zoom: '200%',
        url: 'https://www.hoyolab.com/article/1823190',
        showOnHome: true,
      },
      {
        name: 'Of Drink A-Dreaming',
        pos: '0% 50%',
        image: 'of_drink_a_dreaming.jpg',
        start: '2022-03-10 10:00:00',
        end: '2022-03-21 03:59:59',
        color: '#e4d9c5',
        zoom: '180%',
        url: 'https://www.hoyolab.com/article/3714058',
        showOnHome: true,
      },
      {
        name: 'Overflowing Mastery',
        pos: '0% 50%',
        image: 'overflowing_mastery.jpg',
        start: '2022-03-21 04:00:00',
        end: '2022-03-28 03:59:59',
        color: '#f5debc',
        zoom: '200%',
        url: 'https://www.hoyolab.com/article/3643660',
        showOnHome: true,
      },
      {
        name: "Traveler's Picture Book Web Event",
        pos: '100% 50%',
        image: 'travelers_picture_book.jpg',
        start: '2021-12-03 11:00:00',
        end: '2021-12-13 03:59:59',
        color: '#DEECF7',
        zoom: '150%',
        url: 'https://www.hoyolab.com/article/1531728',
        showOnHome: true,
      },
      {
        name: 'The Crane in the Clouds Web Event',
        pos: '100% 30%',
        image: 'the_crane_in_the_clouds.jpg',
        start: '2021-12-31 12:00:00',
        end: '2022-01-04 23:59:59',
        color: '#FBF5DB',
        zoom: '150%',
        url: 'https://www.hoyolab.com/article/1823311',
        showOnHome: true,
      },
      {
        name: 'Windtrace',
        pos: '0% 80%',
        image: 'windtrace_2.jpg',
        start: '2022-01-13 10:00:00',
        end: '2022-01-27 03:59:59',
        color: '#FFF6DF',
        zoom: '170%',
        url: 'https://www.hoyolab.com/article/1823273',
        showOnHome: true,
      },
      {
        name: 'Flowing Lights and Colors',
        pos: '0% 50%',
        image: 'flowing_lights_and_colors.jpg',
        start: '2022-02-09 00:00:00',
        end: '2022-02-15 14:59:59',
        color: '#BB71AD',
        zoom: '200%',
        url: 'https://www.hoyolab.com/article/1823191',
        showOnHome: true,
      },
      {
        name: 'Divine Ingenuity',
        pos: '0% 30%',
        zoom: '170%',
        image: 'divine_ingenuity.jpg',
        start: '2022-03-02 10:00:00',
        end: '2022-03-21 03:59:59',
        color: '#aad0e1',
        url: 'https://www.hoyolab.com/article/3611497',
        showOnHome: true,
      },
      {
        name: 'Hyakunin Ikki',
        pos: '0% 70%',
        image: 'hyakunin_ikki.jpg',
        start: '2022-03-18 10:00:00',
        end: '2022-03-28 03:59:59',
        color: '#dfabbb',
        zoom: '200%',
        url: 'https://www.hoyolab.com/article/3643660',
        showOnHome: true,
      }, 
]
// Domain Data
const weapAscMats = [
  {
    id: 'fetters_of_the_dandelion_gladiator',
    name: 'Fetters of the Dandelion Gladiator',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 2, type: 'weapon-asc',
  },
  {
    id: 'chains_of_the_dandelion_gladiator',
    name: 'Chains of the Dandelion Gladiator',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 3,
    parent: 'fetters_of_the_dandelion_gladiator', type: 'weapon-asc',
  },
  {
    id: 'shackles_of_the_dandelion_gladiator',
    name: 'Shackles of the Dandelion Gladiator',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 4,
    parent: 'fetters_of_the_dandelion_gladiator', type: 'weapon-asc',
  },
  {
    id: 'dream_of_the_dandelion_gladiator',
    name: 'Dream of the Dandelion Gladiator',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 5,
    parent: 'fetters_of_the_dandelion_gladiator', type: 'weapon-asc',
  },
  {
    id: 'tile_of_decarabians_tower',
    name: "Tile of Decarabian's Tower",
    day: ['monday', 'thursday', 'sunday'],
    rarity: 2, type: 'weapon-asc',
  },
  {
    id: 'debris_of_decarabians_city',
    name: "Debris of Decarabian's City",
    day: ['monday', 'thursday', 'sunday'],
    rarity: 3,
    parent: 'tile_of_decarabians_tower', type: 'weapon-asc',
  },
  {
    id: 'fragment_of_decarabians_epic',
    name: "Fragment of Decarabian's Epic",
    day: ['monday', 'thursday', 'sunday'],
    rarity: 4,
    parent: 'tile_of_decarabians_tower', type: 'weapon-asc',
  },
  {
    id: 'scattered_piece_of_decarabians_dream',
    name: "Scattered Piece of Decarabian's Dream",
    day: ['monday', 'thursday', 'sunday'],
    rarity: 5,
    parent: 'tile_of_decarabians_tower', type: 'weapon-asc',
  },
  {
    id: 'boreal_wolfs_milk_tooth',
    name: "Boreal Wolf's Milk Tooth",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 2, type: 'weapon-asc',
  },
  {
    id: 'boreal_wolfs_cracked_tooth',
    name: "Boreal Wolf's Cracked Tooth",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 3,
    parent: 'boreal_wolfs_milk_tooth', type: 'weapon-asc',
  },
  {
    id: 'boreal_wolfs_broken_fang',
    name: "Boreal Wolf's Broken Fang",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 4,
    parent: 'boreal_wolfs_milk_tooth', type: 'weapon-asc',
  },
  {
    id: 'boreal_wolfs_nostalgia',
    name: "Boreal Wolf's Nostalgia",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 5,
    parent: 'boreal_wolfs_milk_tooth', type: 'weapon-asc',
  },
  {
    id: 'grain_of_aerosiderite',
    name: 'Grain of Aerosiderite',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 2, type: 'weapon-asc',
  },
  {
    id: 'piece_of_aerosiderite',
    name: 'Piece of Aerosiderite',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 3,
    parent: 'grain_of_aerosiderite', type: 'weapon-asc',
  },
  {
    id: 'bit_of_aerosiderite',
    name: 'Bit of Aerosiderite',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 4,
    parent: 'grain_of_aerosiderite', type: 'weapon-asc',
  },
  {
    id: 'chunk_of_aerosiderite',
    name: 'Chunk of Aerosiderite',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 5,
    parent: 'grain_of_aerosiderite', type: 'weapon-asc',
  },
  {
    id: 'mist_veiled_lead_elixir',
    name: 'Mist Veiled Lead Elixir',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 1, type: 'weapon-asc',
  },
  {
    id: 'mist_veiled_mercury_elixir',
    name: 'Mist Veiled Mercury Elixir',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 2,
    parent: 'mist_veiled_lead_elixir', type: 'weapon-asc',
  },
  {
    id: 'mist_veiled_gold_elixir',
    name: 'Mist Veiled Gold Elixir',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 3,
    parent: 'mist_veiled_lead_elixir', type: 'weapon-asc',
  },
  {
    id: 'mist_veiled_primo_elixir',
    name: 'Mist Veiled Primo Elixir',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 4,
    parent: 'mist_veiled_lead_elixir', type: 'weapon-asc',
  },
  {
    id: 'luminous_sands_from_guyun',
    name: 'Luminous Sands from Guyun',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 1, type: 'weapon-asc',
  },
  {
    id: 'lustrous_stone_from_guyun',
    name: 'Lustrous Stone from Guyun',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 2,
    parent: 'luminous_sands_from_guyun', type: 'weapon-asc',
  },
  {
    id: 'relic_from_guyun',
    name: 'Relic from Guyun',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 3,
    parent: 'luminous_sands_from_guyun', type: 'weapon-asc',
  },
  {
    id: 'divine_body_from_guyun',
    name: 'Divine Body from Guyun',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 4,
    parent: 'luminous_sands_from_guyun', type: 'weapon-asc',
  },
  {
    id: 'coral_branch_of_a_distant_sea',
    name: 'Coral Branch of a Distant Sea',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 2, type: 'weapon-asc',
  },
  {
    id: 'jeweled_branch_of_a_distant_sea',
    name: 'Jeweled Branch of a Distant Sea',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 3,
    parent: 'coral_branch_of_a_distant_sea', type: 'weapon-asc',
  },
  {
    id: 'jade_branch_of_a_distant_sea',
    name: 'Jade Branch of a Distant Sea',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 4,
    parent: 'coral_branch_of_a_distant_sea', type: 'weapon-asc',
  },
  {
    id: 'golden_branch_of_a_distant_sea',
    name: 'Golden Branch of a Golden Sea',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 5,
    parent: 'coral_branch_of_a_distant_sea', type: 'weapon-asc',
  },
  {
    id: 'narukamis_wisdom',
    name: "Narukami's Wisdom",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 2, type: 'weapon-asc',
  },
  {
    id: 'narukamis_joy',
    name: "Narukami's Joy",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 3,
    parent: 'narukamis_wisdom', type: 'weapon-asc',
  },
  {
    id: 'narukamis_affection',
    name: "Narukami's Affection",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 4,
    parent: 'narukamis_wisdom', type: 'weapon-asc',
  },
  {
    id: 'narukamis_valor',
    name: "Narukami's Valor",
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 5,
    parent: 'narukamis_wisdom', type: 'weapon-asc',
  },
  {
    id: 'mask_of_the_wicked_lieutenant',
    name: 'Mask of the Wicked Lieutenant',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 2, type: 'weapon-asc',
  },
  {
    id: 'mask_of_the_tigers_bite',
    name: "Mask of the Tiger's Bite",
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 3,
    parent: 'mask_of_the_wicked_lieutenant', type: 'weapon-asc',
  },
  {
    id: 'mask_of_the_one_horned',
    name: 'Mask of the One-Horned',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 4,
    parent: 'mask_of_the_wicked_lieutenant', type: 'weapon-asc',
  },
  {
    id: 'mask_of_the_kijin',
    name: 'Mask of the Kijin',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 5,
    parent: 'mask_of_the_wicked_lieutenant', type: 'weapon-asc',
  },
]
const talentBooks = [
  {
    id: 'teachings_of_freedom',
    name: 'Teachings of Freedom',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_freedom',
    name: 'Guide to Freedom',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_freedom', type: 'talent-book',
  },
  {
    id: 'philosophies_of_freedom',
    name: 'Philosophies of Freedom',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_freedom', type: 'talent-book',
  },
  {
    id: 'teachings_of_resistance',
    name: 'Teachings of Resistance',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_resistance',
    name: 'Guide to Resistance',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_resistance', type: 'talent-book',
  },
  {
    id: 'philosophies_of_resistance',
    name: 'Philosophies of Resistance',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_resistance', type: 'talent-book',
  },
  {
    id: 'teachings_of_ballad',
    name: 'Teachings of Ballad',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_ballad',
    name: 'Guide to Ballad',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_ballad', type: 'talent-book',
  },
  {
    id: 'philosophies_of_ballad',
    name: 'Philosophies of Ballad',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_ballad', type: 'talent-book',
  },
  {
    id: 'teachings_of_prosperity',
    name: 'Teachings of Prosperity',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_prosperity',
    name: 'Guide to Prosperity',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_prosperity', type: 'talent-book',
  },
  {
    id: 'philosophies_of_prosperity',
    name: 'Philosophies of Prosperity',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_prosperity', type: 'talent-book',
  },
  {
    id: 'teachings_of_diligence',
    name: 'Teachings of Diligence',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_diligence',
    name: 'Guide to Diligence',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_diligence', type: 'talent-book',
  },
  {
    id: 'philosophies_of_diligence',
    name: 'Philosophies of Diligence',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_diligence', type: 'talent-book',
  },
  {
    id: 'teachings_of_gold',
    name: 'Teachings of Gold',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_gold',
    name: 'Guide to Gold',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_gold', type: 'talent-book',
  },
  {
    id: 'philosophies_of_gold',
    name: 'Philosophies of Gold',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_gold', type: 'talent-book',
  },
  {
    id: 'teachings_of_transience',
    name: 'Teachings of Transience',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_transience',
    name: 'Guide to Transience',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_transience', type: 'talent-book',
  },
  {
    id: 'philosophies_of_transience',
    name: 'Philosophies of Transience',
    day: ['monday', 'thursday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_transience', type: 'talent-book',
  },
  {
    id: 'teachings_of_elegance',
    name: 'Teachings of Elegance',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_elegance',
    name: 'Guide to Elegance',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_elegance', type: 'talent-book',
  },
  {
    id: 'philosophies_of_elegance',
    name: 'Philosophies of Elegance',
    day: ['tuesday', 'friday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_elegance', type: 'talent-book',
  },
  {
    id: 'teachings_of_light',
    name: 'Teachings of Light',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 2, type: 'talent-book',
  },
  {
    id: 'guide_to_light',
    name: 'Guide to Light',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 3,
    parent: 'teachings_of_light', type: 'talent-book',
  },
  {
    id: 'philosophies_of_light',
    name: 'Philosophies of Light',
    day: ['wednesday', 'saturday', 'sunday'],
    rarity: 4,
    parent: 'teachings_of_light', type: 'talent-book',
  },
]

const characterList = [
  {
    id: 'albedo',
    name: 'Albedo',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 13226,
      atk: 251,
      def: 876,
    },
    ascension: [
      {
        items: [
          {
            item: 'prithiva_topaz_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'cecilia',
            amount: 3,
          },
          {
            item: 'divining_scroll',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 2,
          },
          {
            item: 'cecilia',
            amount: 10,
          },
          {
            item: 'divining_scroll',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 4,
          },
          {
            item: 'cecilia',
            amount: 20,
          },
          {
            item: 'sealed_scroll',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 8,
          },
          {
            item: 'cecilia',
            amount: 30,
          },
          {
            item: 'sealed_scroll',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 12,
          },
          {
            item: 'cecilia',
            amount: 45,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_gemstone',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 20,
          },
          {
            item: 'cecilia',
            amount: 60,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['divining_scroll', 'sealed_scroll', 'forbidden_curse_scroll'],
      book: ['teachings_of_ballad', 'guide_to_ballad', 'philosophies_of_ballad'],
      boss: 'tusk_of_monoceros_caeli',
    },
    element: 'geo',
  },
  {
    id: 'aloy',
    name: 'Aloy',
    rarity: 5,
    weapon: 'bow',
    stats: {
      hp: 10899,
      atk: 234,
      def: 676,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'crystal_marrow',
            amount: 3,
          },
          {
            item: 'spectral_husk',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'crystalline_bloom',
            amount: 2,
          },
          {
            item: 'crystal_marrow',
            amount: 10,
          },
          {
            item: 'spectral_husk',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'crystalline_bloom',
            amount: 4,
          },
          {
            item: 'crystal_marrow',
            amount: 20,
          },
          {
            item: 'spectral_heart',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'crystalline_bloom',
            amount: 8,
          },
          {
            item: 'crystal_marrow',
            amount: 30,
          },
          {
            item: 'spectral_heart',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'crystalline_bloom',
            amount: 12,
          },
          {
            item: 'crystal_marrow',
            amount: 45,
          },
          {
            item: 'spectral_nucleus',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'crystalline_bloom',
            amount: 20,
          },
          {
            item: 'crystal_marrow',
            amount: 60,
          },
          {
            item: 'spectral_nucleus',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['spectral_husk', 'spectral_heart', 'spectral_nucleus'],
      book: ['teachings_of_freedom', 'guide_to_freedom', 'philosophies_of_freedom'],
      boss: 'molten_moment',
    },
    element: 'cryo',
  },
  {
    id: 'amber',
    name: 'Amber',
    rarity: 4,
    weapon: 'bow',
    stats: {
      hp: 9461,
      atk: 223,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'small_lamp_grass',
            amount: 3,
          },
          {
            item: 'firm_arrowhead',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 2,
          },
          {
            item: 'small_lamp_grass',
            amount: 10,
          },
          {
            item: 'firm_arrowhead',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 4,
          },
          {
            item: 'small_lamp_grass',
            amount: 20,
          },
          {
            item: 'sharp_arrowhead',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 8,
          },
          {
            item: 'small_lamp_grass',
            amount: 30,
          },
          {
            item: 'sharp_arrowhead',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 12,
          },
          {
            item: 'small_lamp_grass',
            amount: 45,
          },
          {
            item: 'weathered_arrowhead',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 20,
          },
          {
            item: 'small_lamp_grass',
            amount: 60,
          },
          {
            item: 'weathered_arrowhead',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['firm_arrowhead', 'sharp_arrowhead', 'weathered_arrowhead'],
      book: ['teachings_of_freedom', 'guide_to_freedom', 'philosophies_of_freedom'],
      boss: 'dvalins_sigh',
    },
    element: 'pyro',
  },
  {
    id: 'arataki_itto',
    name: 'Arataki Itto',
    rarity: 5,
    weapon: 'claymore',
    stats: {
      hp: 12858,
      atk: 227,
      def: 959,
    },
    ascension: [
      {
        items: [
          {
            item: 'prithiva_topaz_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'onikabuto',
            amount: 3,
          },
          {
            item: 'slime_condensate',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 3,
          },
          {
            item: 'riftborn_regalia',
            amount: 2,
          },
          {
            item: 'onikabuto',
            amount: 10,
          },
          {
            item: 'slime_condensate',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 6,
          },
          {
            item: 'riftborn_regalia',
            amount: 4,
          },
          {
            item: 'onikabuto',
            amount: 20,
          },
          {
            item: 'slime_secretions',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 3,
          },
          {
            item: 'riftborn_regalia',
            amount: 8,
          },
          {
            item: 'onikabuto',
            amount: 30,
          },
          {
            item: 'slime_secretions',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 6,
          },
          {
            item: 'riftborn_regalia',
            amount: 12,
          },
          {
            item: 'onikabuto',
            amount: 45,
          },
          {
            item: 'slime_concentrate',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_gemstone',
            amount: 6,
          },
          {
            item: 'riftborn_regalia',
            amount: 20,
          },
          {
            item: 'onikabuto',
            amount: 60,
          },
          {
            item: 'slime_concentrate',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['slime_condensate', 'slime_secretions', 'slime_concentrate'],
      book: ['teachings_of_elegance', 'guide_to_elegance', 'philosophies_of_elegance'],
      boss: 'ashen_heart',
    },
    element: 'geo',
  },
  {
    id: 'barbara',
    name: 'Barbara',
    rarity: 4,
    weapon: 'catalyst',
    stats: {
      hp: 9787,
      atk: 159,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: 'varunada_lazurite_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'philanemo_mushroom',
            amount: 3,
          },
          {
            item: 'divining_scroll',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 2,
          },
          {
            item: 'philanemo_mushroom',
            amount: 10,
          },
          {
            item: 'divining_scroll',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 4,
          },
          {
            item: 'philanemo_mushroom',
            amount: 20,
          },
          {
            item: 'sealed_scroll',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 8,
          },
          {
            item: 'philanemo_mushroom',
            amount: 30,
          },
          {
            item: 'sealed_scroll',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 12,
          },
          {
            item: 'philanemo_mushroom',
            amount: 45,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_gemstone',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 20,
          },
          {
            item: 'philanemo_mushroom',
            amount: 60,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['divining_scroll', 'sealed_scroll', 'forbidden_curse_scroll'],
      book: ['teachings_of_freedom', 'guide_to_freedom', 'philosophies_of_freedom'],
      boss: 'ring_of_boreas',
    },
    element: 'hydro',
  },
  {
    id: 'beidou',
    name: 'Beidou',
    rarity: 4,
    weapon: 'claymore',
    stats: {
      hp: 13050,
      atk: 225,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'noctilucous_jade',
            amount: 3,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 2,
          },
          {
            item: 'noctilucous_jade',
            amount: 10,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 4,
          },
          {
            item: 'noctilucous_jade',
            amount: 20,
          },
          {
            item: 'silver_raven_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 8,
          },
          {
            item: 'noctilucous_jade',
            amount: 30,
          },
          {
            item: 'silver_raven_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 12,
          },
          {
            item: 'noctilucous_jade',
            amount: 45,
          },
          {
            item: 'golden_raven_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 20,
          },
          {
            item: 'noctilucous_jade',
            amount: 60,
          },
          {
            item: 'golden_raven_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['treasure_hoarder_insignia', 'silver_raven_insignia', 'golden_raven_insignia'],
      book: ['teachings_of_gold', 'guide_to_gold', 'philosophies_of_gold'],
      boss: 'dvalins_sigh',
    },
    element: 'electro',
  },
  {
    id: 'bennett',
    name: 'Bennett',
    rarity: 4,
    weapon: 'sword',
    stats: {
      hp: 12397,
      atk: 191,
      def: 771,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 3,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 2,
          },
          {
            item: 'windwheel_aster',
            amount: 10,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 4,
          },
          {
            item: 'windwheel_aster',
            amount: 20,
          },
          {
            item: 'silver_raven_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 8,
          },
          {
            item: 'windwheel_aster',
            amount: 30,
          },
          {
            item: 'silver_raven_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 12,
          },
          {
            item: 'windwheel_aster',
            amount: 45,
          },
          {
            item: 'golden_raven_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 20,
          },
          {
            item: 'windwheel_aster',
            amount: 60,
          },
          {
            item: 'golden_raven_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['treasure_hoarder_insignia', 'silver_raven_insignia', 'golden_raven_insignia'],
      book: ['teachings_of_resistance', 'guide_to_resistance', 'philosophies_of_resistance'],
      boss: 'dvalins_plume',
    },
    element: 'pyro',
  },
  {
    id: 'chongyun',
    name: 'Chongyun',
    rarity: 4,
    weapon: 'claymore',
    stats: {
      hp: 10984,
      atk: 223,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'cor_lapis',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 2,
          },
          {
            item: 'cor_lapis',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 4,
          },
          {
            item: 'cor_lapis',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 8,
          },
          {
            item: 'cor_lapis',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 12,
          },
          {
            item: 'cor_lapis',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 20,
          },
          {
            item: 'cor_lapis',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_diligence', 'guide_to_diligence', 'philosophies_of_diligence'],
      boss: 'dvalins_sigh',
    },
    element: 'cryo',
  },
  {
    id: 'diluc',
    name: 'Diluc',
    rarity: 5,
    weapon: 'claymore',
    stats: {
      hp: 12981,
      atk: 335,
      def: 784,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'small_lamp_grass',
            amount: 3,
          },
          {
            item: 'recruits_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 2,
          },
          {
            item: 'small_lamp_grass',
            amount: 10,
          },
          {
            item: 'recruits_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 4,
          },
          {
            item: 'small_lamp_grass',
            amount: 20,
          },
          {
            item: 'sergeants_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 8,
          },
          {
            item: 'small_lamp_grass',
            amount: 30,
          },
          {
            item: 'sergeants_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 12,
          },
          {
            item: 'small_lamp_grass',
            amount: 45,
          },
          {
            item: 'lieutenants_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 20,
          },
          {
            item: 'small_lamp_grass',
            amount: 60,
          },
          {
            item: 'lieutenants_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['recruits_insignia', 'sergeants_insignia', 'lieutenants_insignia'],
      book: ['teachings_of_resistance', 'guide_to_resistance', 'philosophies_of_resistance'],
      boss: 'dvalins_plume',
    },
    element: 'pyro',
  },
  {
    id: 'diona',
    name: 'Diona',
    rarity: 4,
    weapon: 'bow',
    stats: {
      hp: 9570,
      atk: 212,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'calla_lily',
            amount: 3,
          },
          {
            item: 'firm_arrowhead',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 2,
          },
          {
            item: 'calla_lily',
            amount: 10,
          },
          {
            item: 'firm_arrowhead',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 4,
          },
          {
            item: 'calla_lily',
            amount: 20,
          },
          {
            item: 'sharp_arrowhead',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 8,
          },
          {
            item: 'calla_lily',
            amount: 30,
          },
          {
            item: 'sharp_arrowhead',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 12,
          },
          {
            item: 'calla_lily',
            amount: 45,
          },
          {
            item: 'weathered_arrowhead',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 20,
          },
          {
            item: 'calla_lily',
            amount: 60,
          },
          {
            item: 'weathered_arrowhead',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['firm_arrowhead', 'sharp_arrowhead', 'weathered_arrowhead'],
      book: ['teachings_of_freedom', 'guide_to_freedom', 'philosophies_of_freedom'],
      boss: 'shard_of_a_foul_legacy',
    },
    element: 'cryo',
  },
  {
    id: 'eula',
    name: 'Eula',
    rarity: 5,
    weapon: 'claymore',
    stats: {
      hp: 13226,
      atk: 342,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'dandelion_seed',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'crystalline_bloom',
            amount: 2,
          },
          {
            item: 'dandelion_seed',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'crystalline_bloom',
            amount: 4,
          },
          {
            item: 'dandelion_seed',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'crystalline_bloom',
            amount: 8,
          },
          {
            item: 'dandelion_seed',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'crystalline_bloom',
            amount: 12,
          },
          {
            item: 'dandelion_seed',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'crystalline_bloom',
            amount: 20,
          },
          {
            item: 'dandelion_seed',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_resistance', 'guide_to_resistance', 'philosophies_of_resistance'],
      boss: 'dragon_lords_crown',
    },
    element: 'cryo',
  },
  {
    id: 'fischl',
    name: 'Fischl',
    rarity: 4,
    weapon: 'bow',
    stats: {
      hp: 9189,
      atk: 244,
      def: 594,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'small_lamp_grass',
            amount: 3,
          },
          {
            item: 'firm_arrowhead',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 2,
          },
          {
            item: 'small_lamp_grass',
            amount: 10,
          },
          {
            item: 'firm_arrowhead',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 4,
          },
          {
            item: 'small_lamp_grass',
            amount: 20,
          },
          {
            item: 'sharp_arrowhead',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 8,
          },
          {
            item: 'small_lamp_grass',
            amount: 30,
          },
          {
            item: 'sharp_arrowhead',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 12,
          },
          {
            item: 'small_lamp_grass',
            amount: 45,
          },
          {
            item: 'weathered_arrowhead',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 20,
          },
          {
            item: 'small_lamp_grass',
            amount: 60,
          },
          {
            item: 'weathered_arrowhead',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['firm_arrowhead', 'sharp_arrowhead', 'weathered_arrowhead'],
      book: ['teachings_of_ballad', 'guide_to_ballad', 'philosophies_of_ballad'],
      boss: 'spirit_locket_of_boreas',
    },
    element: 'electro',
  },
  {
    id: 'ganyu',
    name: 'Ganyu',
    rarity: 5,
    weapon: 'bow',
    stats: {
      hp: 9797,
      atk: 335,
      def: 630,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'qingxin',
            amount: 3,
          },
          {
            item: 'whopperflower_nectar',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 2,
          },
          {
            item: 'qingxin',
            amount: 10,
          },
          {
            item: 'whopperflower_nectar',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 4,
          },
          {
            item: 'qingxin',
            amount: 20,
          },
          {
            item: 'shimmering_nectar',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 8,
          },
          {
            item: 'qingxin',
            amount: 30,
          },
          {
            item: 'shimmering_nectar',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 12,
          },
          {
            item: 'qingxin',
            amount: 45,
          },
          {
            item: 'energy_nectar',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 20,
          },
          {
            item: 'qingxin',
            amount: 60,
          },
          {
            item: 'energy_nectar',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['whopperflower_nectar', 'shimmering_nectar', 'energy_nectar'],
      book: ['teachings_of_diligence', 'guide_to_diligence', 'philosophies_of_diligence'],
      boss: 'shadow_of_the_warrior',
    },
    element: 'cryo',
  },
  {
    id: 'gorou',
    name: 'Gorou',
    rarity: 4,
    weapon: 'bow',
    stats: {
      hp: 9570,
      atk: 183,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: 'prithiva_topaz_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'sango_pearl',
            amount: 3,
          },
          {
            item: 'spectral_husk',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 3,
          },
          {
            item: 'perpetual_heart',
            amount: 2,
          },
          {
            item: 'sango_pearl',
            amount: 10,
          },
          {
            item: 'spectral_husk',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 6,
          },
          {
            item: 'perpetual_heart',
            amount: 4,
          },
          {
            item: 'sango_pearl',
            amount: 20,
          },
          {
            item: 'spectral_heart',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 3,
          },
          {
            item: 'perpetual_heart',
            amount: 8,
          },
          {
            item: 'sango_pearl',
            amount: 30,
          },
          {
            item: 'spectral_heart',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 6,
          },
          {
            item: 'perpetual_heart',
            amount: 12,
          },
          {
            item: 'sango_pearl',
            amount: 45,
          },
          {
            item: 'spectral_nucleus',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_gemstone',
            amount: 6,
          },
          {
            item: 'perpetual_heart',
            amount: 20,
          },
          {
            item: 'sango_pearl',
            amount: 60,
          },
          {
            item: 'spectral_nucleus',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['spectral_husk', 'spectral_heart', 'spectral_nucleus'],
      book: ['teachings_of_light', 'guide_to_light', 'philosophies_of_light'],
      boss: 'molten_moment',
    },
    element: 'geo',
  },
  {
    id: 'hu_tao',
    name: 'Hu Tao',
    rarity: 5,
    weapon: 'polearm',
    stats: {
      hp: 15552,
      atk: 106,
      def: 876,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'silk_flower',
            amount: 3,
          },
          {
            item: 'whopperflower_nectar',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'juvenile_jade',
            amount: 2,
          },
          {
            item: 'silk_flower',
            amount: 10,
          },
          {
            item: 'whopperflower_nectar',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 4,
          },
          {
            item: 'silk_flower',
            amount: 20,
          },
          {
            item: 'shimmering_nectar',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'juvenile_jade',
            amount: 8,
          },
          {
            item: 'silk_flower',
            amount: 30,
          },
          {
            item: 'shimmering_nectar',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 12,
          },
          {
            item: 'silk_flower',
            amount: 45,
          },
          {
            item: 'energy_nectar',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 20,
          },
          {
            item: 'silk_flower',
            amount: 60,
          },
          {
            item: 'energy_nectar',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['whopperflower_nectar', 'shimmering_nectar', 'energy_nectar'],
      book: ['teachings_of_diligence', 'guide_to_diligence', 'philosophies_of_diligence'],
      boss: 'shard_of_a_foul_legacy',
    },
    element: 'pyro',
  },
  {
    id: 'jean',
    name: 'Jean',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 14695,
      atk: 239,
      def: 769,
    },
    ascension: [
      {
        items: [
          {
            item: 'vayuda_turquoise_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'dandelion_seed',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 3,
          },
          {
            item: 'hurricane_seed',
            amount: 2,
          },
          {
            item: 'dandelion_seed',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 4,
          },
          {
            item: 'dandelion_seed',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 3,
          },
          {
            item: 'hurricane_seed',
            amount: 8,
          },
          {
            item: 'dandelion_seed',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 12,
          },
          {
            item: 'dandelion_seed',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_gemstone',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 20,
          },
          {
            item: 'dandelion_seed',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_resistance', 'guide_to_resistance', 'philosophies_of_resistance'],
      boss: 'dvalins_plume',
    },
    element: 'anemo',
  },
  {
    id: 'kaedehara_kazuha',
    name: 'Kaedehara Kazuha',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 13348,
      atk: 297,
      def: 807,
    },
    ascension: [
      {
        items: [
          {
            item: 'vayuda_turquoise_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'sea_ganoderma',
            amount: 3,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 3,
          },
          {
            item: 'marionette_core',
            amount: 2,
          },
          {
            item: 'sea_ganoderma',
            amount: 10,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 6,
          },
          {
            item: 'marionette_core',
            amount: 4,
          },
          {
            item: 'sea_ganoderma',
            amount: 20,
          },
          {
            item: 'silver_raven_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 3,
          },
          {
            item: 'marionette_core',
            amount: 8,
          },
          {
            item: 'sea_ganoderma',
            amount: 30,
          },
          {
            item: 'silver_raven_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 6,
          },
          {
            item: 'marionette_core',
            amount: 12,
          },
          {
            item: 'sea_ganoderma',
            amount: 45,
          },
          {
            item: 'golden_raven_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_gemstone',
            amount: 6,
          },
          {
            item: 'marionette_core',
            amount: 20,
          },
          {
            item: 'sea_ganoderma',
            amount: 60,
          },
          {
            item: 'golden_raven_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['treasure_hoarder_insignia', 'silver_raven_insignia', 'golden_raven_insignia'],
      book: ['teachings_of_diligence', 'guide_to_diligence', 'philosophies_of_diligence'],
      boss: 'gilded_scale',
    },
    element: 'anemo',
  },
  {
    id: 'kaeya',
    name: 'Kaeya',
    rarity: 4,
    weapon: 'sword',
    stats: {
      hp: 11636,
      atk: 223,
      def: 792,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'calla_lily',
            amount: 3,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 2,
          },
          {
            item: 'calla_lily',
            amount: 10,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 4,
          },
          {
            item: 'calla_lily',
            amount: 20,
          },
          {
            item: 'silver_raven_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 8,
          },
          {
            item: 'calla_lily',
            amount: 30,
          },
          {
            item: 'silver_raven_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 12,
          },
          {
            item: 'calla_lily',
            amount: 45,
          },
          {
            item: 'golden_raven_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 20,
          },
          {
            item: 'calla_lily',
            amount: 60,
          },
          {
            item: 'golden_raven_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['treasure_hoarder_insignia', 'silver_raven_insignia', 'golden_raven_insignia'],
      book: ['teachings_of_ballad', 'guide_to_ballad', 'philosophies_of_ballad'],
      boss: 'spirit_locket_of_boreas',
    },
    element: 'cryo',
  },
  {
    id: 'kamisato_ayaka',
    name: 'Kamisato Ayaka',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 12858,
      atk: 342,
      def: 784,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'sakura_bloom',
            amount: 3,
          },
          {
            item: 'old_handguard',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'perpetual_heart',
            amount: 2,
          },
          {
            item: 'sakura_bloom',
            amount: 10,
          },
          {
            item: 'old_handguard',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'perpetual_heart',
            amount: 4,
          },
          {
            item: 'sakura_bloom',
            amount: 20,
          },
          {
            item: 'kageuchi_handguard',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'perpetual_heart',
            amount: 8,
          },
          {
            item: 'sakura_bloom',
            amount: 30,
          },
          {
            item: 'kageuchi_handguard',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'perpetual_heart',
            amount: 12,
          },
          {
            item: 'sakura_bloom',
            amount: 45,
          },
          {
            item: 'famed_handguard',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'perpetual_heart',
            amount: 20,
          },
          {
            item: 'sakura_bloom',
            amount: 60,
          },
          {
            item: 'famed_handguard',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['old_handguard', 'kageuchi_handguard', 'famed_handguard'],
      book: ['teachings_of_elegance', 'guide_to_elegance', 'philosophies_of_elegance'],
      boss: 'bloodjade_branch',
    },
    element: 'cryo',
  },
  {
    id: 'keqing',
    name: 'Keqing',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 13103,
      atk: 323,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'cor_lapis',
            amount: 3,
          },
          {
            item: 'whopperflower_nectar',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 2,
          },
          {
            item: 'cor_lapis',
            amount: 10,
          },
          {
            item: 'whopperflower_nectar',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 4,
          },
          {
            item: 'cor_lapis',
            amount: 20,
          },
          {
            item: 'shimmering_nectar',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 8,
          },
          {
            item: 'cor_lapis',
            amount: 30,
          },
          {
            item: 'shimmering_nectar',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 12,
          },
          {
            item: 'cor_lapis',
            amount: 45,
          },
          {
            item: 'energy_nectar',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 20,
          },
          {
            item: 'cor_lapis',
            amount: 60,
          },
          {
            item: 'energy_nectar',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['whopperflower_nectar', 'shimmering_nectar', 'energy_nectar'],
      book: ['teachings_of_prosperity', 'guide_to_prosperity', 'philosophies_of_prosperity'],
      boss: 'ring_of_boreas',
    },
    element: 'electro',
  },
  {
    id: 'klee',
    name: 'Klee',
    rarity: 5,
    weapon: 'catalyst',
    stats: {
      hp: 10287,
      atk: 311,
      def: 615,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'philanemo_mushroom',
            amount: 3,
          },
          {
            item: 'divining_scroll',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 2,
          },
          {
            item: 'philanemo_mushroom',
            amount: 10,
          },
          {
            item: 'divining_scroll',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 4,
          },
          {
            item: 'philanemo_mushroom',
            amount: 20,
          },
          {
            item: 'sealed_scroll',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 8,
          },
          {
            item: 'philanemo_mushroom',
            amount: 30,
          },
          {
            item: 'sealed_scroll',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 12,
          },
          {
            item: 'philanemo_mushroom',
            amount: 45,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 20,
          },
          {
            item: 'philanemo_mushroom',
            amount: 60,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['divining_scroll', 'sealed_scroll', 'forbidden_curse_scroll'],
      book: ['teachings_of_freedom', 'guide_to_freedom', 'philosophies_of_freedom'],
      boss: 'ring_of_boreas',
    },
    element: 'pyro',
  },
  {
    id: 'kujou_sara',
    name: 'Kujou Sara',
    rarity: 4,
    weapon: 'bow',
    stats: {
      hp: 9570,
      atk: 195,
      def: 628,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'dendrobium',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'storm_beads',
            amount: 2,
          },
          {
            item: 'dendrobium',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'storm_beads',
            amount: 4,
          },
          {
            item: 'dendrobium',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'storm_beads',
            amount: 8,
          },
          {
            item: 'dendrobium',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'storm_beads',
            amount: 12,
          },
          {
            item: 'dendrobium',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'storm_beads',
            amount: 20,
          },
          {
            item: 'dendrobium',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_elegance', 'guide_to_elegance', 'philosophies_of_elegance'],
      boss: 'ashen_heart',
    },
    element: 'electro',
  },
  {
    id: 'lisa',
    name: 'Lisa',
    rarity: 4,
    weapon: 'catalyst',
    stats: {
      hp: 9570,
      atk: 232,
      def: 573,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'valberry',
            amount: 3,
          },
          {
            item: 'slime_condensate',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 2,
          },
          {
            item: 'valberry',
            amount: 10,
          },
          {
            item: 'slime_condensate',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 4,
          },
          {
            item: 'valberry',
            amount: 20,
          },
          {
            item: 'slime_secretions',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 8,
          },
          {
            item: 'valberry',
            amount: 30,
          },
          {
            item: 'slime_secretions',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 12,
          },
          {
            item: 'valberry',
            amount: 45,
          },
          {
            item: 'slime_concentrate',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 20,
          },
          {
            item: 'valberry',
            amount: 60,
          },
          {
            item: 'slime_concentrate',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['slime_condensate', 'slime_secretions', 'slime_concentrate'],
      book: ['teachings_of_ballad', 'guide_to_ballad', 'philosophies_of_ballad'],
      boss: 'dvalins_claw',
    },
    element: 'electro',
  },
  {
    id: 'mona',
    name: 'Mona',
    rarity: 5,
    weapon: 'catalyst',
    stats: {
      hp: 10409,
      atk: 287,
      def: 653,
    },
    ascension: [
      {
        items: [
          {
            item: 'varunada_lazurite_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'philanemo_mushroom',
            amount: 3,
          },
          {
            item: 'whopperflower_nectar',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 2,
          },
          {
            item: 'philanemo_mushroom',
            amount: 10,
          },
          {
            item: 'whopperflower_nectar',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 4,
          },
          {
            item: 'philanemo_mushroom',
            amount: 20,
          },
          {
            item: 'shimmering_nectar',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 8,
          },
          {
            item: 'philanemo_mushroom',
            amount: 30,
          },
          {
            item: 'shimmering_nectar',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 12,
          },
          {
            item: 'philanemo_mushroom',
            amount: 45,
          },
          {
            item: 'energy_nectar',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_gemstone',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 20,
          },
          {
            item: 'philanemo_mushroom',
            amount: 60,
          },
          {
            item: 'energy_nectar',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['whopperflower_nectar', 'shimmering_nectar', 'energy_nectar'],
      book: ['teachings_of_resistance', 'guide_to_resistance', 'philosophies_of_resistance'],
      boss: 'ring_of_boreas',
    },
    element: 'hydro',
  },
  {
    id: 'ningguang',
    name: 'Ningguang',
    rarity: 4,
    weapon: 'catalyst',
    stats: {
      hp: 9787,
      atk: 212,
      def: 573,
    },
    ascension: [
      {
        items: [
          {
            item: 'prithiva_topaz_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'glaze_lily',
            amount: 3,
          },
          {
            item: 'recruits_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 2,
          },
          {
            item: 'glaze_lily',
            amount: 10,
          },
          {
            item: 'recruits_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 4,
          },
          {
            item: 'glaze_lily',
            amount: 20,
          },
          {
            item: 'sergeants_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 8,
          },
          {
            item: 'glaze_lily',
            amount: 30,
          },
          {
            item: 'sergeants_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 12,
          },
          {
            item: 'glaze_lily',
            amount: 45,
          },
          {
            item: 'lieutenants_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_gemstone',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 20,
          },
          {
            item: 'glaze_lily',
            amount: 60,
          },
          {
            item: 'lieutenants_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['recruits_insignia', 'sergeants_insignia', 'lieutenants_insignia'],
      book: ['teachings_of_prosperity', 'guide_to_prosperity', 'philosophies_of_prosperity'],
      boss: 'spirit_locket_of_boreas',
    },
    element: 'geo',
  },
  {
    id: 'noelle',
    name: 'Noelle',
    rarity: 4,
    weapon: 'claymore',
    stats: {
      hp: 12071,
      atk: 191,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: 'prithiva_topaz_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'valberry',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 2,
          },
          {
            item: 'valberry',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 4,
          },
          {
            item: 'valberry',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 8,
          },
          {
            item: 'valberry',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 12,
          },
          {
            item: 'valberry',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_gemstone',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 20,
          },
          {
            item: 'valberry',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_resistance', 'guide_to_resistance', 'philosophies_of_resistance'],
      boss: 'dvalins_claw',
    },
    element: 'geo',
  },
  {
    id: 'qiqi',
    name: 'Qiqi',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 12368,
      atk: 287,
      def: 922,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'violetgrass',
            amount: 3,
          },
          {
            item: 'divining_scroll',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 2,
          },
          {
            item: 'violetgrass',
            amount: 10,
          },
          {
            item: 'divining_scroll',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 4,
          },
          {
            item: 'violetgrass',
            amount: 20,
          },
          {
            item: 'sealed_scroll',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 8,
          },
          {
            item: 'violetgrass',
            amount: 30,
          },
          {
            item: 'sealed_scroll',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 12,
          },
          {
            item: 'violetgrass',
            amount: 45,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 20,
          },
          {
            item: 'violetgrass',
            amount: 60,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['divining_scroll', 'sealed_scroll', 'forbidden_curse_scroll'],
      book: ['teachings_of_prosperity', 'guide_to_prosperity', 'philosophies_of_prosperity'],
      boss: 'tail_of_boreas',
    },
    element: 'cryo',
  },
  {
    id: 'raiden_shogun',
    name: 'Raiden Shogun',
    rarity: 5,
    weapon: 'polearm',
    stats: {
      hp: 12907,
      atk: 337,
      def: 789,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'amakumo_fruit',
            amount: 3,
          },
          {
            item: 'old_handguard',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'storm_beads',
            amount: 2,
          },
          {
            item: 'amakumo_fruit',
            amount: 10,
          },
          {
            item: 'old_handguard',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'storm_beads',
            amount: 4,
          },
          {
            item: 'amakumo_fruit',
            amount: 20,
          },
          {
            item: 'kageuchi_handguard',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'storm_beads',
            amount: 8,
          },
          {
            item: 'amakumo_fruit',
            amount: 30,
          },
          {
            item: 'kageuchi_handguard',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'storm_beads',
            amount: 12,
          },
          {
            item: 'amakumo_fruit',
            amount: 45,
          },
          {
            item: 'famed_handguard',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'storm_beads',
            amount: 20,
          },
          {
            item: 'amakumo_fruit',
            amount: 60,
          },
          {
            item: 'famed_handguard',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['old_handguard', 'kageuchi_handguard', 'famed_handguard'],
      book: ['teachings_of_light', 'guide_to_light', 'philosophies_of_light'],
      boss: 'molten_moment',
    },
    element: 'electro',
  },
  {
    id: 'razor',
    name: 'Razor',
    rarity: 4,
    weapon: 'claymore',
    stats: {
      hp: 11962,
      atk: 234,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'wolfhook',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 2,
          },
          {
            item: 'wolfhook',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 4,
          },
          {
            item: 'wolfhook',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'lightning_prism',
            amount: 8,
          },
          {
            item: 'wolfhook',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 12,
          },
          {
            item: 'wolfhook',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'lightning_prism',
            amount: 20,
          },
          {
            item: 'wolfhook',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_resistance', 'guide_to_resistance', 'philosophies_of_resistance'],
      boss: 'dvalins_claw',
    },
    element: 'electro',
  },
  {
    id: 'rosaria',
    name: 'Rosaria',
    rarity: 4,
    weapon: 'polearm',
    stats: {
      hp: 12289,
      atk: 240,
      def: 710,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'valberry',
            amount: 3,
          },
          {
            item: 'recruits_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 2,
          },
          {
            item: 'valberry',
            amount: 10,
          },
          {
            item: 'recruits_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 4,
          },
          {
            item: 'valberry',
            amount: 20,
          },
          {
            item: 'sergeants_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'hoarfrost_core',
            amount: 8,
          },
          {
            item: 'valberry',
            amount: 30,
          },
          {
            item: 'sergeants_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 12,
          },
          {
            item: 'valberry',
            amount: 45,
          },
          {
            item: 'lieutenants_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'hoarfrost_core',
            amount: 20,
          },
          {
            item: 'valberry',
            amount: 60,
          },
          {
            item: 'lieutenants_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['recruits_insignia', 'sergeants_insignia', 'lieutenants_insignia'],
      book: ['teachings_of_ballad', 'guide_to_ballad', 'philosophies_of_ballad'],
      boss: 'shadow_of_the_warrior',
    },
    element: 'cryo',
  },
  {
    id: 'sangonomiya_kokomi',
    name: 'Sangonomiya Kokomi',
    rarity: 5,
    weapon: 'catalyst',
    stats: {
      hp: 13471,
      atk: 234,
      def: 657,
    },
    ascension: [
      {
        items: [
          {
            item: 'varunada_lazurite_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'sango_pearl',
            amount: 3,
          },
          {
            item: 'spectral_husk',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 3,
          },
          {
            item: 'dew_of_repudiation',
            amount: 2,
          },
          {
            item: 'sango_pearl',
            amount: 10,
          },
          {
            item: 'spectral_husk',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 6,
          },
          {
            item: 'dew_of_repudiation',
            amount: 4,
          },
          {
            item: 'sango_pearl',
            amount: 20,
          },
          {
            item: 'spectral_heart',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 3,
          },
          {
            item: 'dew_of_repudiation',
            amount: 8,
          },
          {
            item: 'sango_pearl',
            amount: 30,
          },
          {
            item: 'spectral_heart',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 6,
          },
          {
            item: 'dew_of_repudiation',
            amount: 12,
          },
          {
            item: 'sango_pearl',
            amount: 45,
          },
          {
            item: 'spectral_nucleus',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_gemstone',
            amount: 6,
          },
          {
            item: 'dew_of_repudiation',
            amount: 20,
          },
          {
            item: 'sango_pearl',
            amount: 60,
          },
          {
            item: 'spectral_nucleus',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['spectral_husk', 'spectral_heart', 'spectral_nucleus'],
      book: ['teachings_of_transience', 'guide_to_transience', 'philosophies_of_transience'],
      boss: 'hellfire_butterfly',
    },
    element: 'hydro',
  },
  {
    id: 'sayu',
    name: 'Sayu',
    rarity: 4,
    weapon: 'claymore',
    stats: {
      hp: 11854,
      atk: 244,
      def: 745,
    },
    ascension: [
      {
        items: [
          {
            item: 'vayuda_turquoise_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'crystal_marrow',
            amount: 3,
          },
          {
            item: 'whopperflower_nectar',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 3,
          },
          {
            item: 'marionette_core',
            amount: 2,
          },
          {
            item: 'crystal_marrow',
            amount: 10,
          },
          {
            item: 'whopperflower_nectar',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 6,
          },
          {
            item: 'marionette_core',
            amount: 4,
          },
          {
            item: 'crystal_marrow',
            amount: 20,
          },
          {
            item: 'shimmering_nectar',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 3,
          },
          {
            item: 'marionette_core',
            amount: 8,
          },
          {
            item: 'crystal_marrow',
            amount: 30,
          },
          {
            item: 'shimmering_nectar',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 6,
          },
          {
            item: 'marionette_core',
            amount: 12,
          },
          {
            item: 'crystal_marrow',
            amount: 45,
          },
          {
            item: 'energy_nectar',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_gemstone',
            amount: 6,
          },
          {
            item: 'marionette_core',
            amount: 20,
          },
          {
            item: 'crystal_marrow',
            amount: 60,
          },
          {
            item: 'energy_nectar',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['whopperflower_nectar', 'shimmering_nectar', 'energy_nectar'],
      book: ['teachings_of_light', 'guide_to_light', 'philosophies_of_light'],
      boss: 'gilded_scale',
    },
    element: 'anemo',
  },
  {
    id: 'shenhe',
    name: 'Shenhe',
    rarity: 5,
    weapon: 'polearm',
    stats: {
      hp: 12993,
      atk: 304,
      def: 830,
    },
    ascension: [
      {
        items: [
          {
            item: 'shivada_jade_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'qingxin',
            amount: 3,
          },
          {
            item: 'whopperflower_nectar',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 3,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 2,
          },
          {
            item: 'qingxin',
            amount: 10,
          },
          {
            item: 'whopperflower_nectar',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'shivada_jade_fragment',
            amount: 6,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 4,
          },
          {
            item: 'qingxin',
            amount: 20,
          },
          {
            item: 'shimmering_nectar',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 3,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 8,
          },
          {
            item: 'qingxin',
            amount: 30,
          },
          {
            item: 'shimmering_nectar',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'shivada_jade_chunk',
            amount: 6,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 12,
          },
          {
            item: 'qingxin',
            amount: 45,
          },
          {
            item: 'energy_nectar',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'shivada_jade_gemstone',
            amount: 6,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 20,
          },
          {
            item: 'qingxin',
            amount: 60,
          },
          {
            item: 'energy_nectar',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['whopperflower_nectar', 'shimmering_nectar', 'energy_nectar'],
      book: ['teachings_of_prosperity', 'guide_to_prosperity', 'philosophies_of_prosperity'],
      boss: 'hellfire_butterfly',
    },
    element: 'cryo',
  },
  {
    id: 'sucrose',
    name: 'Sucrose',
    rarity: 4,
    weapon: 'catalyst',
    stats: {
      hp: 9244,
      atk: 170,
      def: 703,
    },
    ascension: [
      {
        items: [
          {
            item: 'vayuda_turquoise_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 3,
          },
          {
            item: 'whopperflower_nectar',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 3,
          },
          {
            item: 'hurricane_seed',
            amount: 2,
          },
          {
            item: 'windwheel_aster',
            amount: 10,
          },
          {
            item: 'whopperflower_nectar',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 4,
          },
          {
            item: 'windwheel_aster',
            amount: 20,
          },
          {
            item: 'shimmering_nectar',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 3,
          },
          {
            item: 'hurricane_seed',
            amount: 8,
          },
          {
            item: 'windwheel_aster',
            amount: 30,
          },
          {
            item: 'shimmering_nectar',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 12,
          },
          {
            item: 'windwheel_aster',
            amount: 45,
          },
          {
            item: 'energy_nectar',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_gemstone',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 20,
          },
          {
            item: 'windwheel_aster',
            amount: 60,
          },
          {
            item: 'energy_nectar',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['whopperflower_nectar', 'shimmering_nectar', 'energy_nectar'],
      book: ['teachings_of_freedom', 'guide_to_freedom', 'philosophies_of_freedom'],
      boss: 'spirit_locket_of_boreas',
    },
    element: 'anemo',
  },
  {
    id: 'tartaglia',
    name: 'Tartaglia',
    rarity: 5,
    weapon: 'bow',
    stats: {
      hp: 13103,
      atk: 301,
      def: 815,
    },
    ascension: [
      {
        items: [
          {
            item: 'varunada_lazurite_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'starconch',
            amount: 3,
          },
          {
            item: 'recruits_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 2,
          },
          {
            item: 'starconch',
            amount: 10,
          },
          {
            item: 'recruits_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 4,
          },
          {
            item: 'starconch',
            amount: 20,
          },
          {
            item: 'sergeants_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 8,
          },
          {
            item: 'starconch',
            amount: 30,
          },
          {
            item: 'sergeants_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 12,
          },
          {
            item: 'starconch',
            amount: 45,
          },
          {
            item: 'lieutenants_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_gemstone',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 20,
          },
          {
            item: 'starconch',
            amount: 60,
          },
          {
            item: 'lieutenants_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['recruits_insignia', 'sergeants_insignia', 'lieutenants_insignia'],
      book: ['teachings_of_freedom', 'guide_to_freedom', 'philosophies_of_freedom'],
      boss: 'shard_of_a_foul_legacy',
    },
    element: 'hydro',
  },
  {
    id: 'thoma',
    name: 'Thoma',
    rarity: 4,
    weapon: 'polearm',
    stats: {
      hp: 10331,
      atk: 202,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'fluorescent_fungus',
            amount: 3,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'smoldering_pearl',
            amount: 2,
          },
          {
            item: 'fluorescent_fungus',
            amount: 10,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'smoldering_pearl',
            amount: 4,
          },
          {
            item: 'fluorescent_fungus',
            amount: 20,
          },
          {
            item: 'silver_raven_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'smoldering_pearl',
            amount: 8,
          },
          {
            item: 'fluorescent_fungus',
            amount: 30,
          },
          {
            item: 'silver_raven_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'smoldering_pearl',
            amount: 12,
          },
          {
            item: 'fluorescent_fungus',
            amount: 45,
          },
          {
            item: 'golden_raven_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'smoldering_pearl',
            amount: 20,
          },
          {
            item: 'fluorescent_fungus',
            amount: 60,
          },
          {
            item: 'golden_raven_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['treasure_hoarder_insignia', 'silver_raven_insignia', 'golden_raven_insignia'],
      book: ['teachings_of_transience', 'guide_to_transience', 'philosophies_of_transience'],
      boss: 'hellfire_butterfly',
    },
    element: 'pyro',
  },
  {
    id: 'traveler_anemo',
    name: 'Traveler Anemo',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 10875,
      atk: 212,
      def: 683,
    },
    ascension: [
      {
        items: [
          {
            item: 'brilliant_diamond_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_fragment',
            amount: 3,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_fragment',
            amount: 6,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_chunk',
            amount: 3,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_chunk',
            amount: 6,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_gemstone',
            amount: 6,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        'divining_scroll',
        'sealed_scroll',
        'sealed_scroll',
        'sealed_scroll',
        'sealed_scroll',
        'forbidden_curse_scroll',
        'forbidden_curse_scroll',
        'forbidden_curse_scroll',
        'forbidden_curse_scroll',
      ],
      book: [
        'teachings_of_freedom',
        'guide_to_resistance',
        'guide_to_ballad',
        'guide_to_freedom',
        'guide_to_resistance',
        'philosophies_of_ballad',
        'philosophies_of_freedom',
        'philosophies_of_resistance',
        'philosophies_of_ballad',
      ],
      boss: 'dvalins_sigh',
    },
    element: 'anemo',
  },
  {
    id: 'traveler_geo',
    name: 'Traveler Geo',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 10875,
      atk: 212,
      def: 683,
    },
    ascension: [
      {
        items: [
          { item: 'brilliant_diamond_sliver', amount: 1 },
          { item: 'none', amount: null },
          { item: 'windwheel_aster', amount: 3 },
          { item: 'damaged_mask', amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: 'brilliant_diamond_fragment', amount: 3 },
          { item: 'none', amount: null },
          { item: 'windwheel_aster', amount: 10 },
          { item: 'damaged_mask', amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: 'brilliant_diamond_fragment', amount: 6 },
          { item: 'none', amount: null },
          { item: 'windwheel_aster', amount: 20 },
          { item: 'stained_mask', amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: 'brilliant_diamond_chunk', amount: 3 },
          { item: 'none', amount: null },
          { item: 'windwheel_aster', amount: 30 },
          { item: 'stained_mask', amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: 'brilliant_diamond_chunk', amount: 6 },
          { item: 'none', amount: null },
          { item: 'windwheel_aster', amount: 45 },
          { item: 'ominous_mask', amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: 'brilliant_diamond_gemstone', amount: 6 },
          { item: 'none', amount: null },
          { item: 'windwheel_aster', amount: 60 },
          { item: 'ominous_mask', amount: 24 },
        ],
        mora: 120000,
      },
    ],
    material_atk: {
      book: [
        'teachings_of_freedom',
        'guide_to_resistance',
        'guide_to_ballad',
        'guide_to_freedom',
        'guide_to_resistance',
        'philosophies_of_ballad',
        'philosophies_of_freedom',
        'philosophies_of_resistance',
        'philosophies_of_ballad',
      ],
      material: [
        'divining_scroll',
        'sealed_scroll',
        'sealed_scroll',
        'sealed_scroll',
        'sealed_scroll',
        'forbidden_curse_scroll',
        'forbidden_curse_scroll',
        'forbidden_curse_scroll',
        'forbidden_curse_scroll',
      ],
      boss: 'dvalins_sigh',
    },
    material: {
      material: [
        'firm_arrowhead',
        'sharp_arrowhead',
        'sharp_arrowhead',
        'sharp_arrowhead',
        'sharp_arrowhead',
        'weathered_arrowhead',
        'weathered_arrowhead',
        'weathered_arrowhead',
        'weathered_arrowhead',
      ],
      book: [
        'teachings_of_prosperity',
        'guide_to_diligence',
        'guide_to_gold',
        'guide_to_prosperity',
        'guide_to_diligence',
        'philosophies_of_gold',
        'philosophies_of_prosperity',
        'philosophies_of_diligence',
        'philosophies_of_gold',
      ],
      boss: 'tail_of_boreas',
    },
    element: 'geo',
  },
  {
    id: 'traveler_electro',
    name: 'Traveler Electro',
    rarity: 5,
    weapon: 'sword',
    stats: {
      hp: 10875,
      atk: 212,
      def: 683,
    },
    ascension: [
      {
        items: [
          {
            item: 'brilliant_diamond_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_fragment',
            amount: 3,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_fragment',
            amount: 6,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_chunk',
            amount: 3,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_chunk',
            amount: 6,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'brilliant_diamond_gemstone',
            amount: 6,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'windwheel_aster',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        'old_handguard',
        'kageuchi_handguard',
        'kageuchi_handguard',
        'kageuchi_handguard',
        'kageuchi_handguard',
        'famed_handguard',
        'famed_handguard',
        'famed_handguard',
        'famed_handguard',
      ],
      book: [
        'teachings_of_transience',
        'guide_to_elegance',
        'guide_to_light',
        'guide_to_transience',
        'guide_to_elegance',
        'philosophies_of_light',
        'philosophies_of_transience',
        'philosophies_of_elegance',
        'philosophies_of_light',
      ],
      boss: 'dragon_lords_crown',
    },
    element: 'electro',
  },
  {
    id: 'venti',
    name: 'Venti',
    rarity: 5,
    weapon: 'bow',
    stats: {
      hp: 10531,
      atk: 263,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: 'vayuda_turquoise_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'cecilia',
            amount: 3,
          },
          {
            item: 'slime_condensate',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 3,
          },
          {
            item: 'hurricane_seed',
            amount: 2,
          },
          {
            item: 'cecilia',
            amount: 10,
          },
          {
            item: 'slime_condensate',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 4,
          },
          {
            item: 'cecilia',
            amount: 20,
          },
          {
            item: 'slime_secretions',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 3,
          },
          {
            item: 'hurricane_seed',
            amount: 8,
          },
          {
            item: 'cecilia',
            amount: 30,
          },
          {
            item: 'slime_secretions',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 12,
          },
          {
            item: 'cecilia',
            amount: 45,
          },
          {
            item: 'slime_concentrate',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_gemstone',
            amount: 6,
          },
          {
            item: 'hurricane_seed',
            amount: 20,
          },
          {
            item: 'cecilia',
            amount: 60,
          },
          {
            item: 'slime_concentrate',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['slime_condensate', 'slime_secretions', 'slime_concentrate'],
      book: ['teachings_of_ballad', 'guide_to_ballad', 'philosophies_of_ballad'],
      boss: 'tail_of_boreas',
    },
    element: 'anemo',
  },
  {
    id: 'xiangling',
    name: 'Xiangling',
    rarity: 4,
    weapon: 'polearm',
    stats: {
      hp: 10875,
      atk: 225,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'jueyun_chili',
            amount: 3,
          },
          {
            item: 'slime_condensate',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 2,
          },
          {
            item: 'jueyun_chili',
            amount: 10,
          },
          {
            item: 'slime_condensate',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 4,
          },
          {
            item: 'jueyun_chili',
            amount: 20,
          },
          {
            item: 'slime_secretions',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 8,
          },
          {
            item: 'jueyun_chili',
            amount: 30,
          },
          {
            item: 'slime_secretions',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 12,
          },
          {
            item: 'jueyun_chili',
            amount: 45,
          },
          {
            item: 'slime_concentrate',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 20,
          },
          {
            item: 'jueyun_chili',
            amount: 60,
          },
          {
            item: 'slime_concentrate',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['slime_condensate', 'slime_secretions', 'slime_concentrate'],
      book: ['teachings_of_diligence', 'guide_to_diligence', 'philosophies_of_diligence'],
      boss: 'dvalins_claw',
    },
    element: 'pyro',
  },
  {
    id: 'xiao',
    name: 'Xiao',
    rarity: 5,
    weapon: 'polearm',
    stats: {
      hp: 12736,
      atk: 349,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: 'vayuda_turquoise_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'qingxin',
            amount: 3,
          },
          {
            item: 'slime_condensate',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 3,
          },
          {
            item: 'juvenile_jade',
            amount: 2,
          },
          {
            item: 'qingxin',
            amount: 10,
          },
          {
            item: 'slime_condensate',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_fragment',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 4,
          },
          {
            item: 'qingxin',
            amount: 20,
          },
          {
            item: 'slime_secretions',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 3,
          },
          {
            item: 'juvenile_jade',
            amount: 8,
          },
          {
            item: 'qingxin',
            amount: 30,
          },
          {
            item: 'slime_secretions',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_chunk',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 12,
          },
          {
            item: 'qingxin',
            amount: 45,
          },
          {
            item: 'slime_concentrate',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vayuda_turquoise_gemstone',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 20,
          },
          {
            item: 'qingxin',
            amount: 60,
          },
          {
            item: 'slime_concentrate',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['slime_condensate', 'slime_secretions', 'slime_concentrate'],
      book: ['teachings_of_prosperity', 'guide_to_prosperity', 'philosophies_of_prosperity'],
      boss: 'shadow_of_the_warrior',
    },
    element: 'anemo',
  },
  {
    id: 'xingqiu',
    name: 'Xingqiu',
    rarity: 4,
    weapon: 'sword',
    stats: {
      hp: 10222,
      atk: 202,
      def: 758,
    },
    ascension: [
      {
        items: [
          {
            item: 'varunada_lazurite_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'silk_flower',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 2,
          },
          {
            item: 'silk_flower',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_fragment',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 4,
          },
          {
            item: 'silk_flower',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 3,
          },
          {
            item: 'cleansing_heart',
            amount: 8,
          },
          {
            item: 'silk_flower',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_chunk',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 12,
          },
          {
            item: 'silk_flower',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'varunada_lazurite_gemstone',
            amount: 6,
          },
          {
            item: 'cleansing_heart',
            amount: 20,
          },
          {
            item: 'silk_flower',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_gold', 'guide_to_gold', 'philosophies_of_gold'],
      boss: 'tail_of_boreas',
    },
    element: 'hydro',
  },
  {
    id: 'xinyan',
    name: 'Xinyan',
    rarity: 4,
    weapon: 'claymore',
    stats: {
      hp: 11201,
      atk: 249,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'violetgrass',
            amount: 3,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 2,
          },
          {
            item: 'violetgrass',
            amount: 10,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 4,
          },
          {
            item: 'violetgrass',
            amount: 20,
          },
          {
            item: 'silver_raven_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'everflame_seed',
            amount: 8,
          },
          {
            item: 'violetgrass',
            amount: 30,
          },
          {
            item: 'silver_raven_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 12,
          },
          {
            item: 'violetgrass',
            amount: 45,
          },
          {
            item: 'golden_raven_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'everflame_seed',
            amount: 20,
          },
          {
            item: 'violetgrass',
            amount: 60,
          },
          {
            item: 'golden_raven_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['treasure_hoarder_insignia', 'silver_raven_insignia', 'golden_raven_insignia'],
      book: ['teachings_of_gold', 'guide_to_gold', 'philosophies_of_gold'],
      boss: 'tusk_of_monoceros_caeli',
    },
    element: 'pyro',
  },
  {
    id: 'yae_miko',
    name: 'Yae Miko',
    rarity: 5,
    weapon: 'catalyst',
    stats: {
      hp: 10372,
      atk: 340,
      def: 569,
    },
    ascension: [
      {
        items: [
          {
            item: 'vajrada_amethyst_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'sea_ganoderma',
            amount: 3,
          },
          {
            item: 'old_handguard',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 3,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 2,
          },
          {
            item: 'sea_ganoderma',
            amount: 10,
          },
          {
            item: 'old_handguard',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_fragment',
            amount: 6,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 4,
          },
          {
            item: 'sea_ganoderma',
            amount: 20,
          },
          {
            item: 'kageuchi_handguard',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 3,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 8,
          },
          {
            item: 'sea_ganoderma',
            amount: 30,
          },
          {
            item: 'kageuchi_handguard',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_chunk',
            amount: 6,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 12,
          },
          {
            item: 'sea_ganoderma',
            amount: 45,
          },
          {
            item: 'famed_handguard',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'vajrada_amethyst_gemstone',
            amount: 6,
          },
          {
            item: 'dragonheirs_false_fin',
            amount: 20,
          },
          {
            item: 'sea_ganoderma',
            amount: 60,
          },
          {
            item: 'famed_handguard',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['old_handguard', 'kageuchi_handguard', 'famed_handguard'],
      book: ['teachings_of_light', 'guide_to_light', 'philosophies_of_light'],
      boss: 'the_meaning_of_aeons',
    },
    element: 'electro',
  },
  {
    id: 'yanfei',
    name: 'Yanfei',
    rarity: 4,
    weapon: 'catalyst',
    stats: {
      hp: 9352,
      atk: 240,
      def: 587,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'noctilucous_jade',
            amount: 3,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'juvenile_jade',
            amount: 2,
          },
          {
            item: 'noctilucous_jade',
            amount: 10,
          },
          {
            item: 'treasure_hoarder_insignia',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 4,
          },
          {
            item: 'noctilucous_jade',
            amount: 20,
          },
          {
            item: 'silver_raven_insignia',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'juvenile_jade',
            amount: 8,
          },
          {
            item: 'noctilucous_jade',
            amount: 30,
          },
          {
            item: 'silver_raven_insignia',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 12,
          },
          {
            item: 'noctilucous_jade',
            amount: 45,
          },
          {
            item: 'golden_raven_insignia',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'juvenile_jade',
            amount: 20,
          },
          {
            item: 'noctilucous_jade',
            amount: 60,
          },
          {
            item: 'golden_raven_insignia',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['treasure_hoarder_insignia', 'silver_raven_insignia', 'golden_raven_insignia'],
      book: ['teachings_of_gold', 'guide_to_gold', 'philosophies_of_gold'],
      boss: 'bloodjade_branch',
    },
    element: 'pyro',
  },
  {
    id: 'yoimiya',
    name: 'Yoimiya',
    rarity: 5,
    weapon: 'bow',
    stats: {
      hp: 10164,
      atk: 323,
      def: 615,
    },
    ascension: [
      {
        items: [
          {
            item: 'agnidus_agate_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'naku_weed',
            amount: 3,
          },
          {
            item: 'divining_scroll',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 3,
          },
          {
            item: 'smoldering_pearl',
            amount: 2,
          },
          {
            item: 'naku_weed',
            amount: 10,
          },
          {
            item: 'divining_scroll',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_fragment',
            amount: 6,
          },
          {
            item: 'smoldering_pearl',
            amount: 4,
          },
          {
            item: 'naku_weed',
            amount: 20,
          },
          {
            item: 'sealed_scroll',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 3,
          },
          {
            item: 'smoldering_pearl',
            amount: 8,
          },
          {
            item: 'naku_weed',
            amount: 30,
          },
          {
            item: 'sealed_scroll',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_chunk',
            amount: 6,
          },
          {
            item: 'smoldering_pearl',
            amount: 12,
          },
          {
            item: 'naku_weed',
            amount: 45,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'agnidus_agate_gemstone',
            amount: 6,
          },
          {
            item: 'smoldering_pearl',
            amount: 20,
          },
          {
            item: 'naku_weed',
            amount: 60,
          },
          {
            item: 'forbidden_curse_scroll',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['divining_scroll', 'sealed_scroll', 'forbidden_curse_scroll'],
      book: ['teachings_of_transience', 'guide_to_transience', 'philosophies_of_transience'],
      boss: 'dragon_lords_crown',
    },
    element: 'pyro',
  },
  {
    id: 'yun_jin',
    name: 'Yun Jin',
    rarity: 4,
    weapon: 'polearm',
    stats: {
      hp: 10657,
      atk: 191,
      def: 734,
    },
    ascension: [
      {
        items: [
          {
            item: 'prithiva_topaz_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'glaze_lily',
            amount: 3,
          },
          {
            item: 'damaged_mask',
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 3,
          },
          {
            item: 'riftborn_regalia',
            amount: 2,
          },
          {
            item: 'glaze_lily',
            amount: 10,
          },
          {
            item: 'damaged_mask',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_fragment',
            amount: 6,
          },
          {
            item: 'riftborn_regalia',
            amount: 4,
          },
          {
            item: 'glaze_lily',
            amount: 20,
          },
          {
            item: 'stained_mask',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 3,
          },
          {
            item: 'riftborn_regalia',
            amount: 8,
          },
          {
            item: 'glaze_lily',
            amount: 30,
          },
          {
            item: 'stained_mask',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_chunk',
            amount: 6,
          },
          {
            item: 'riftborn_regalia',
            amount: 12,
          },
          {
            item: 'glaze_lily',
            amount: 45,
          },
          {
            item: 'ominous_mask',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: 'prithiva_topaz_gemstone',
            amount: 6,
          },
          {
            item: 'riftborn_regalia',
            amount: 20,
          },
          {
            item: 'glaze_lily',
            amount: 60,
          },
          {
            item: 'ominous_mask',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['damaged_mask', 'stained_mask', 'ominous_mask'],
      book: ['teachings_of_diligence', 'guide_to_diligence', 'philosophies_of_diligence'],
      boss: 'ashen_heart',
    },
    element: 'geo',
  },
  {
    id: 'zhongli',
    name: 'Zhongli',
    rarity: 5,
    weapon: 'polearm',
    stats: {
      hp: 14695,
      atk: 251,
      def: 738,
    },
    ascension: [
      {
        items: [// A1   20/20 > 20/40
          {
            item: 'prithiva_topaz_sliver',
            amount: 1,
          },
          {
            item: 'none',
            amount: null,
          },
          {
            item: 'cor_lapis',
            amount: 3,
          },
          {
            item: 'slime_condensate', 
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [ // A2    40/40 > 40/50
          {
            item: 'prithiva_topaz_fragment',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 2,
          },
          {
            item: 'cor_lapis',
            amount: 10,
          },
          {
            item: 'slime_condensate',
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [ // A3    50/50 > 50/60
          {
            item: 'prithiva_topaz_fragment',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 4,
          },
          {
            item: 'cor_lapis',
            amount: 20,
          },
          {
            item: 'slime_secretions',
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [ // A4    60/60 > 60/70
          {
            item: 'prithiva_topaz_chunk',
            amount: 3,
          },
          {
            item: 'basalt_pillar',
            amount: 8,
          },
          {
            item: 'cor_lapis',
            amount: 30,
          },
          {
            item: 'slime_secretions',
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [ // A5    70/70 > 70/80
          {
            item: 'prithiva_topaz_chunk',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 12,
          },
          {
            item: 'cor_lapis',
            amount: 45,
          },
          {
            item: 'slime_concentrate',
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [ // A6    80/80 > 80/90
          {
            item: 'prithiva_topaz_gemstone',
            amount: 6,
          },
          {
            item: 'basalt_pillar',
            amount: 20,
          },
          {
            item: 'cor_lapis',
            amount: 60,
          },
          {
            item: 'slime_concentrate',
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: ['slime_condensate', 'slime_secretions', 'slime_concentrate'],
      book: ['teachings_of_gold', 'guide_to_gold', 'philosophies_of_gold'],
      boss: 'tusk_of_monoceros_caeli',
    },
    element: 'geo',
  },
]

//const dailyContainer = document.getElementById("daily-farm")
const bannerContainer = document.getElementById("main-banner-container")
const eventContainer = document.getElementById("main-event-container")
const bookContainer = document.getElementById("talent-books-container")
const weapMatContainer = document.getElementById("wea-asc-container")
var eventCounter = 0
var year, month, dateToday, day, hour, min, sec
var BreakException = {}

// initiating all processes
startInteraction()


// initiating interaction
function startInteraction() {
  document.addEventListener("click", changeActiveServer)
  getCurrentTime()
  parseFirstBanner()
  parseSecondBanner()
  parseWeaponBanner()
  parseMainEvents()
  parseSecondEvents()

  isSunday()
}

function isSunday() {
  if (getDayToday() == 'sun' && hour < 4) {
    parseWeapAscMats()
    parseTalentBooks()
  }
  else if (getDayToday() == 'sun' && hour > 4) {
    printSundayBook()
    printSundayMats()
  }
}

// Server time function
function getCurrentTime() {
    const date = new Date()
    year = date.getFullYear()
    month = date.getUTCMonth()
    dateToday = date.getUTCDate()
    day = date.getUTCDay()
    hour = date.getUTCHours()
    min = date.getUTCMinutes()
    sec = date.getUTCSeconds()
    if (activeServer() == "server-asia") {
        hour += 8
        // prevent hour overflow
        if (hour > 23) {
            hour -= 24
            day += 1
            dateToday += 1
        }
    }
    if (activeServer() == "server-america") {
        hour -= 4
        if (hour < 0) {
            hour += 24
            day -= 1
            dateToday -= 1
        } 
    }
    if (activeServer() == "server-europe") {
        hour += 1
        if (hour > 23) {
            hour -= 24
            day += 1
            dateToday += 1
        }
        
    }

    hour = updateTime(hour)
    min = updateTime(min)
    sec = updateTime(sec)
        
    printTime(year, month, dateToday, day, hour, min, sec)
    
    var t = setTimeout(function(){ getCurrentTime() }, 1000); /* setting timer for continuous functioning*/

    currentTime =   (year.toString() + "-" + (month+1).toString() + "-" + dateToday.toString() + " " + hour.toString() + ":" + min.toString() + ":" + sec.toString())

    currentTimeFixed = new Date(currentTime.replace(/-/g,'/'))

    return currentTimeFixed
}
// Make it so that time is base-10
function updateTime(k) {
    if (k < 10) {
      return "0" + k
    }
    else {
      return k
    }
}
// Print to html
function printTime(year, month, dateToday, day, hour, min, sec) {
    // Jank AF
    // I can't make switch() work
    // But hey, as long as it works
    if (day === 0) {
        document.getElementById("server-clock").innerText = "Sunday, " + dateToday + " " + getMonth(month) + ", " + year + " " + hour + ":" + min + ":" + sec
    }
    if (day === 1) {
        document.getElementById("server-clock").innerText = "Monday, " + dateToday + " " + getMonth(month) + ", " + year + " " + hour + ":" + min + ":" + sec
    }
    if (day === 2) {
        document.getElementById("server-clock").innerText = "Tuesday, " + dateToday + " " + getMonth(month) + ", " + year + " " + hour + ":" + min + ":" + sec
    }
    if (day === 3) {
        document.getElementById("server-clock").innerText = "Wednesday, " + dateToday + " " + getMonth(month) + ", " + year + " " + hour + ":" + min + ":" + sec
    }
    if (day === 4) {
        document.getElementById("server-clock").innerText = "Thursday, " + dateToday + " " + getMonth(month) + ", " + year + " " + hour + ":" + min + ":" + sec
    }
    if (day === 5) {
        document.getElementById("server-clock").innerText = "Friday, " + dateToday + " " + getMonth(month) + ", " + year + " " + hour + ":" + min + ":" + sec
    }
    if (day === 6 || day === -1) {
        document.getElementById("server-clock").innerText = "Saturday, " + dateToday + " " + getMonth(month) + ", " + year + " " + hour + ":" + min + ":" + sec
    }
}
// Convert month to string
function getMonth(i) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[i]
}
// function to call when clicking a server button
function changeActiveServer(e) {
  if (e.target.matches("[data-server-button]")) {
    if (e.target.dataset.state == 'active') return
    else {
        document.querySelector('[data-state="active"]').dataset.state = ""
        e.target.dataset.state = "active"
        getCurrentTime()
    }
  }
  
  bookContainer.innerHTML = '<h4 class="just-center">Talent Books</h4>'
  weapMatContainer.innerHTML = '<h4 class="alitems-center">Weapon Ascension</h4>'

  isSunday()
}
// get active server
function activeServer() {
    return document.querySelector('[data-state="active"]').id
}


// get first banner data
function parseFirstBanner() {
    var start, end
    bannerFirst.forEach(event => {
      start = new Date(event.start.replace(/-/g,'/'))
      end = new Date(event.end.replace(/-/g,'/'))
  
      if ((start < getCurrentTime()) && (end > getCurrentTime())) {
        printBanners(event, end)
      }
    })
}
//get second banner data
function parseWeaponBanner() {
    var start, end
    weaponBanner.forEach(event => {
      start = new Date(event.start.replace(/-/g,'/'))
      end = new Date(event.end.replace(/-/g,'/'))
  
      if ((start < getCurrentTime()) && (end > getCurrentTime())) {
        printBanners(event, end)
      }
    })
}
// get weapon banner data
function parseSecondBanner() {
    var start, end
    bannerSecond.forEach(event => {
      start = new Date(event.start.replace(/-/g,'/'))
      end = new Date(event.end.replace(/-/g,'/'))
  
      if ((start < getCurrentTime()) && (end > getCurrentTime())) {
        printBanners(event, end)
      }
    })
}
// print data to document
function printBanners(event, endDate) {
    // Construct card and its content
    const card = document.createElement('div')
    const id = "countdown-timer-" + eventCounter
  
    card.classList = 'col main-banner-content'
  
    const content = `
        <a href="${event.url}" target="_blank">
            <img src="https://paimon.moe/images/events/${event.image}" alt="">
        </a>
        <p class="border-b border-t margy-1 white-text ta-center shaded-bg inside" id="countdown-timer-${eventCounter}">
            Banner ends in:
        </p>
    `;
  
    //Appending to parent html
    card.innerHTML += content
    bannerContainer.append(card)
  
    setCountDownBanner(endDate ,id)
    eventCounter++
}
// get main event dat
function parseMainEvents() {
    var start, end
    mainEvents.forEach(event => {
      start = new Date(event.start.replace(/-/g,'/'))
      end = new Date(event.end.replace(/-/g,'/'))
  
      if ((start < getCurrentTime()) && (end > getCurrentTime())) {
        printMain(event, end)
      }
    })
}
// get secondary event data
function parseSecondEvents() {
    var start, end
    secondaryEvents.forEach(event => {
      start = new Date(event.start.replace(/-/g,'/'))
      end = new Date(event.end.replace(/-/g,'/'))
  
      if ((start < getCurrentTime()) && (end > getCurrentTime())) {
        printMain(event, end)
      }
    })
}
// print event data to document
function printMain(event, endDate) {
    // Construct card and its content
    const card = document.createElement('div')
    const id = "countdown-timer-" + eventCounter
  
    card.classList = 'col main-banner-content'
  
    const content = `
        <a href="${event.url}" target="_blank">
            <img src="https://paimon.moe/images/events/${event.image}" alt="" class="pb-1">
        </a>
        <p class="border-b border-t margy-1 white-text ta-center shaded-bg inside" id="countdown-timer-${eventCounter}">
            Event ends in:
        </p>
    `;
  
    //Appending to parent html
    card.innerHTML += content
    eventContainer.append(card)
  
    setCountDown(endDate ,id)
    eventCounter++
}
// set a countdown timer for events
function setCountDown(endDate, id) {
    // Update the count down every 1 second
    var x = setInterval(function() {
  
    // Get today's date and time
    var now = getCurrentTime()
  
    // Find the distance between now and the count down date
    var distance = endDate - now
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById(id).innerHTML = "Event ends in: " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    }, 1000);
}
// set a countdown timer for banners
function setCountDownBanner(endDate, id) {
  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = getCurrentTime()

  // Find the distance between now and the count down date
  var distance = endDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById(id).innerHTML = "Banner ends in: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  }, 1000);
}

// get day of the week today 
function getDayToday(e) {
  return getCurrentTime().toString().toLowerCase().substring(0,3)
}

function dayToString() {
  switch (day) {
    case 0: return 'sat'
    case 1: return 'sun'
    case 2: return 'mon'
    case 3: return 'tue'
    case 4: return 'wed'
    case 5: return 'thu'
    case 6: return 'fri'
    case -1: return 'sat'
  }
}

// get weap asc mat data
function parseWeapAscMats() {
    weapAscMats.forEach(mat => {
      if (getDayToday() == 'sun' && hour < 4) {
        if ( !mat.parent && ((mat.day[0].indexOf(dayToString()) > -1) || (mat.day[1].indexOf(dayToString()) > -1)) ) {
          printWeapMats(mat)
        }
      }
      else if (!mat.parent && (hour > 4) && ((mat.day[0].indexOf(getDayToday()) > -1) || (mat.day[1].indexOf(getDayToday()) > -1)) ) {
        printWeapMats(mat)
      }
    })

}
// get talent book data
function parseTalentBooks() {
    talentBooks.forEach(book => {
      if (getDayToday() == 'sun' && hour < 4) {
        if ( !book.parent && ((book.day[0].indexOf(dayToString()) > -1) || (book.day[1].indexOf(dayToString()) > -1)) ) {
          printBook(book)
        }
      }
      if ( !book.parent && ((book.day[0].indexOf(getDayToday()) > -1) || (book.day[1].indexOf(getDayToday()) > -1)) && (hour > 4) ) {
        printBook(book)
      }
    })
}
// get characters for each book 
function parseCharacters(book) {
  characterList.forEach( character => {
    if (character.material.book[0] === book.id) {
      printChars(character, book.id)
    }
  })
}

function printBook(book) {
  // Construct card and its content
  const card = document.createElement('div')
  card.id = book.id
  card.classList = 'border-b flex-display alitems-center ht-3'

  const content = `
  <div class="mats-img-container">
    <img src="https://paimon.moe/images/items/${book.id}.png" alt="">
  </div>
  `;

  //Appending to parent html
  card.innerHTML += content
  bookContainer.append(card)

  parseCharacters(book)
}

function printChars(character, id) {
  const container = document.getElementById(id)
  // Construct card and its content
  const card = document.createElement('span')

  card.classList = 'char-home-img-container flex-display alitems-center just-center'

  const content = `
    <img src="https://paimon.moe/images/characters/${character.id}.png" alt="">
  `;

  //Appending to parent html
  card.innerHTML += content
  container.append(card)
}

function printWeapMats(mat) {
  // Construct card and its content
  const card = document.createElement('div')
  card.classList = 'mats-img-container border-b ht-3'

  const content = `
  <img src="https://paimon.moe/images/items/${mat.id}.png" alt="">
  `;

  //Appending to parent html
  card.innerHTML += content
  weapMatContainer.append(card)
}

function printSundayMats() {
  //dailyContainer.innerHTML = ''
  // Construct card and its content
  const card = document.createElement('div')
  card.classList = 'mats-img-container border-b ht-3'

  const content = `
  <span> All Weapon Ascension Materials </span>
  `;

  //Appending to parent html
  card.innerHTML += content
  weapMatContainer.append(card)
}

function printSundayBook() {
  // Construct card and its content
  const card = document.createElement('div')
  card.classList = 'mats-img-container border-b ht-3'

  const content = `
  <span> All Talent Books </span>
  `;

  //Appending to parent html
  card.innerHTML += content
  bookContainer.append(card)
}

function displayLog(msg) {
    console.log(msg)
}
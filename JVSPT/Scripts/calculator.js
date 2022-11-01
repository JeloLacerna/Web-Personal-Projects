const characters = [
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

const characterExp = [
  0,
  1000,
  2325,
  4025,
  6175,
  8800,
  11950,
  15675,
  20025,
  25025,
  30725,
  37175,
  44400,
  52450,
  61375,
  71200,
  81950,
  93675,
  106400,
  120175,
  135050,
  151850,
  169850,
  189100,
  209650,
  231525,
  254775,
  279425,
  305525,
  333100,
  362200,
  392850,
  425100,
  458975,
  494525,
  531775,
  570750,
  611500,
  654075,
  698500,
  744800,
  795425,
  848125,
  902900,
  959800,
  1018875,
  1080150,
  1143675,
  1209475,
  1277600,
  1348075,
  1424575,
  1503625,
  1585275,
  1669550,
  1756500,
  1846150,
  1938550,
  2033725,
  2131725,
  2232600,
  2341550,
  2453600,
  2568775,
  2687100,
  2808625,
  2933400,
  3061475,
  3192875,
  3327650,
  3465825,
  3614525,
  3766900,
  3922975,
  4082800,
  4246400,
  4413825,
  4585125,
  4760350,
  4939525,
  5122700,
  5338925,
  5581950,
  5855050,
  6161850,
  6506450,
  6893400,
  7327825,
  7815450,
  8362650,
];

var activeCharacter = ""

var desiredCharacter // variable for character from the array

var desiredExp = 0
var currentExp = 0
var ascendedCurrent = false
var ascendedDesired = false
var currentLevel = 0
var desiredLevel = 0

var mora = 0
var exp1 = 0
var exp2 = 0
var exp3 = 0
var sliver = 0
var fragment = 0
var chunk = 0
var gem = 0
var com_asc1 = 0
var com_asc2 = 0
var com_asc3 = 0
var specialty = 0
var bossDrop = 0

const calcButton = document.getElementById("calc-button")
const HEROS_WIT = 20000
const ADV_EXP = 5000
const WAND_ADV = 1000
const HW_COST = 4000
const AE_COST = 1000
const WA_COST = 200
const container = document.getElementById("result-table-character")
container.style.display = "none"

var gem1, gem2, gem3, gem4, asc1, asc2, asc3, spec, boss

parseArray()

function parseArray() {
  characters.forEach(character => {
    populateSelectTag(character)
  })
}

function getCurrentExp(lvl) {
  currentExp = characterExp[lvl - 1]
}

function getDesiredExp(lvl) {
  desiredExp = characterExp[lvl - 1]
}

function populateSelectTag(character) {
  const container = document.getElementById('char-selector')

  const content = `
    <option value="${character.id}" class="pr-2 white-text">
      ${character.name}
    </option>
    `;

    

    container.innerHTML += content
}

function charSelect() {
  activeCharacter = document.getElementById("char-selector").value
  checkRequirements()
  displayLog(activeCharacter + " selected")
}

function handleCheckBox1() {
  ascendedCurrent = document.getElementById("check1").checked
  displayLog("ascendedCurrent = " + ascendedCurrent)
}

function handleCheckBox2() {
  ascendedDesired = document.getElementById("check2").checked
  displayLog("ascendedDesired = " + ascendedDesired)
}

function setCurrentLevel() {
  currentLevel = document.getElementById("current-lvl-char").value
  getCurrentExp(currentLevel)
  checkRequirements()
  displayLog("current level = " + currentLevel)
}

function setDesiredLevel() {
  desiredLevel = document.getElementById("desired-lvl-char").value
  getDesiredExp(desiredLevel)
  checkRequirements()
  displayLog("desired level = " + desiredLevel)
}

function checkRequirements() {
  if (activeCharacter === "" || (currentLevel <= 0 || currentLevel > 90) || (desiredLevel <= 1 || desiredLevel > 90) || ((desiredLevel - currentLevel) < 0) ) {
    calcButton.dataset.state = "inactive"
    calcButton.disabled = true
    return
  }
  calcButton.dataset.state = ""
  calcButton.disabled = false
  displayLog("enabled")
}

function getCharacterIDs() {
  characters.forEach( character => {
    if (character.id === activeCharacter) {
      gem1 = character.ascension[0].items[0].item
      gem2 = character.ascension[1].items[0].item
      gem3 = character.ascension[3].items[0].item
      gem4 = character.ascension[5].items[0].item

      asc1 = character.ascension[0].items[3].item
      asc2 = character.ascension[2].items[3].item
      asc3 = character.ascension[4].items[3].item

      spec = character.ascension[1].items[2].item

      boss = character.ascension[1].items[1].item

      desiredCharacter = character
    }
  })
}

function calculate() {
  
  getCharacterIDs()
  calculateLVL()

  // Not quick
  // But certainly dirty


  // Ascended Current, Desired Level > 80
  if ( (currentLevel == 20 || currentLevel == 40 || currentLevel == 50 || currentLevel == 60 || currentLevel == 70 || currentLevel == 80) && (ascendedCurrent && !ascendedDesired ) && (desiredLevel > 80) ) {
    displayLog("Ascended Current, Desired Level > 80")
    if (currentLevel == 20) {
      displayLog("ascendedCurrent 20>80")
      ascensionTwo(desiredCharacter)
      ascensionThree(desiredCharacter)
      ascensionFour(desiredCharacter)
      ascensionFive(desiredCharacter)
      ascensionSix(desiredCharacter)
    }
    if (currentLevel == 40) {
      displayLog("ascendedCurrent 40>80")
      ascensionThree(desiredCharacter)
      ascensionFour(desiredCharacter)
      ascensionFive(desiredCharacter)
      ascensionSix(desiredCharacter)
    }
    if (currentLevel == 50) {
      displayLog("ascendedCurrent 50>80")
      ascensionFour(desiredCharacter)
      ascensionFive(desiredCharacter)
      ascensionSix(desiredCharacter)
    }
    if (currentLevel == 60) {
      ascensionFive(desiredCharacter)
      ascensionSix(desiredCharacter)
    }
    if (currentLevel == 70) {
      displayLog("ascendedCurrent 70>80")
      ascensionSix(desiredCharacter)
    }
  }
  // Ascended Current, any Desired Level
  else if ( (currentLevel == 20 || currentLevel == 40 || currentLevel == 50 || currentLevel == 60 || currentLevel == 70 || currentLevel == 80) && (ascendedCurrent && !ascendedDesired ) ) {
    displayLog("Ascended Current, Non-ascension desired level")
    if (currentLevel == 20) {
      if (desiredLevel > 40 && desiredLevel < 50) {
        ascensionTwo(desiredCharacter)
      }
      if (desiredLevel > 50 && desiredLevel < 60) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
      }
      if (desiredLevel > 60 && desiredLevel < 70) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      if (desiredLevel > 70 && desiredLevel < 80) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      if (desiredLevel > 80) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel == 40) {
      if (desiredLevel > 50 && desiredLevel < 60) {
        ascensionThree(desiredCharacter)
      }
      if (desiredLevel > 60 && desiredLevel < 70) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      if (desiredLevel > 70 && desiredLevel < 80) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      if (desiredLevel > 80) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel == 50) {
      if (desiredLevel > 60 && desiredLevel < 70) {
        ascensionFour(desiredCharacter)
      }
      if (desiredLevel > 70 && desiredLevel < 80) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      if (desiredLevel > 80) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel == 60) {
      if (desiredLevel > 70 && desiredLevel < 80) {
        ascensionFive(desiredCharacter)
      }
      if (desiredLevel > 80) {
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel == 70) {
      if (desiredLevel > 80) {
        ascensionSix(desiredCharacter)
      }
    }
  }
  // Ascended Current, Ascended Desired
  else if ( (ascendedCurrent && ascendedDesired) && (currentLevel == 20 || currentLevel == 40 || currentLevel == 50 || currentLevel == 60 || currentLevel == 70 || currentLevel == 80) ) {
    displayLog("Ascended Current, Ascended Desired")
    if (currentLevel == 20) {
      if (desiredLevel == 40) {
        ascensionTwo(desiredCharacter)
        displayLog("20>40")
      }
      if (desiredLevel == 50) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        displayLog("20>50")
      }
      if (desiredLevel == 60) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        displayLog("20>60")
      }
      if (desiredLevel == 70) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        displayLog("20>70")
      }
      if (desiredLevel == 80) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
        displayLog("20>80")
      }
    }
    if (currentLevel == 40) {
      if (desiredLevel == 50) {
        ascensionThree(desiredCharacter)
        displayLog("40>50")
      }
      if (desiredLevel == 60) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        displayLog("40>60")
      }
      if (desiredLevel == 70) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        displayLog("40>70")
      }
      if (desiredLevel == 80) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
        displayLog("40>80")
      }
    }
    if (currentLevel == 50) {
      if (desiredLevel == 60) {
        ascensionFour(desiredCharacter)
        displayLog("50>60")
      }
      if (desiredLevel == 70) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        displayLog("50>70")
      }
      if (desiredLevel == 80) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
        displayLog("50>80")
      }
    }
    if (currentLevel == 60) {
      if (desiredLevel == 70) {
        ascensionFive(desiredCharacter)
        displayLog("60>70")
      }
      if (desiredLevel == 80) {
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
        displayLog("60>80")
      }
    }
    if (currentLevel == 70) {
      if (desiredLevel == 80) {
        ascensionSix(desiredCharacter)
        displayLog("70>80")
      }
    }
  }
  //Not Ascended Current, Ascended Desired
  else if ( (!ascendedCurrent && ascendedDesired) && (desiredLevel == 20 || desiredLevel == 40 || desiredLevel == 50 || desiredLevel == 60 || desiredLevel == 70 || desiredLevel == 80) ) {
    displayLog("Not Ascended Current, Ascended Desired")
    if (currentLevel <= 20) {
      if (desiredLevel == 20) {
        ascensionOne(desiredCharacter)
      }
      if (desiredLevel == 40) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
      }
      if (desiredLevel == 50) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
      }
      if (desiredLevel == 60) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      if (desiredLevel == 70) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      if (desiredLevel == 80) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    } 
    if (currentLevel <= 40 && currentLevel > 20) {
      if (desiredLevel == 40) {
        ascensionTwo(desiredCharacter)
      }
      if (desiredLevel == 50) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
      }
      if (desiredLevel == 60) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      if (desiredLevel == 70) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        
      }
      if (desiredLevel == 80) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }

    if (currentLevel <= 50 && currentLevel > 40) {
      if (desiredLevel == 50) {
        ascensionThree(desiredCharacter)
      }
      if (desiredLevel == 60) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      if (desiredLevel == 70) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        
      }
      if (desiredLevel == 80) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    if (currentLevel <= 60 && currentLevel > 50) {
      if (desiredLevel == 60) {
        ascensionFour(desiredCharacter)
      }
      if (desiredLevel == 70) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        
      }
      if (desiredLevel == 80) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    if (currentLevel <= 70 && currentLevel > 60) {
      if (desiredLevel == 70) {
        ascensionFive(desiredCharacter)
      }
      if (desiredLevel == 80) {
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    if (currentLevel <= 80 && currentLevel > 70) {
      if (desiredLevel == 80) {
        ascensionSix(desiredCharacter)
      }
    }
  }
  // Not Ascended Current, Desired Level > 80
  // Check for if the desired level will pass through ascension phases
  // Also for - Not Ascended current, Ascended desired is clicked but not applicable
  // OMG I'm so sorry for this
  // Forgive me JS gods for I committed a sin
  // But hey, it works
  else if ( 
    // Level difference should be > 9 for the ascension check
    (currentLevel < 20) &&
    (
      // These conditions are there just to prevent checking for Ascended when levels are not equal to Ascension level requirements
      // Total jank, I know
      ( (!ascendedCurrent && !ascendedDesired) ) || 
      ( (!ascendedCurrent && ascendedDesired) && (desiredLevel !== 20 || desiredLevel !== 40 || desiredLevel !== 50 || desiredLevel !== 60 || desiredLevel !== 70 || desiredLevel !== 80) ) || 
      ( (ascendedCurrent && !ascendedDesired) && (currentLevel !== 20 || currentLevel !== 40 || currentLevel !== 50 || currentLevel !== 60 || currentLevel !== 70 || currentLevel !== 80) ) ||
      ( (ascendedCurrent && ascendedDesired) && ((desiredLevel !== 20 || desiredLevel !== 40 || desiredLevel !== 50 || desiredLevel !== 60 || desiredLevel !== 70 || desiredLevel !== 80) && (currentLevel !== 20 || currentLevel !== 40 || currentLevel !== 50 || currentLevel !== 60 || currentLevel !== 70 || currentLevel !== 80)) )
    ) &&
    (desiredLevel > 80)
    )
  {
    displayLog("Current Level < 20, Desired Level > 80")
    if (desiredLevel > 20 && desiredLevel <= 40) {
      displayLog(">20")
      ascensionOne(desiredCharacter)
    }
    if (desiredLevel > 40 && desiredLevel <= 50) {
      displayLog(">40")
      ascensionOne(desiredCharacter)
      ascensionTwo(desiredCharacter)
    }
    if (desiredLevel > 50 && desiredLevel <= 60) {
      displayLog(">50")
      ascensionOne(desiredCharacter)
      ascensionTwo(desiredCharacter)
      ascensionThree(desiredCharacter)
    }
    if (desiredLevel > 60 && desiredLevel <= 70) {
      displayLog(">60") 
      ascensionOne(desiredCharacter)
      ascensionTwo(desiredCharacter)
      ascensionThree(desiredCharacter)
      ascensionFour(desiredCharacter)
    }
    if (desiredLevel > 70 && desiredLevel <= 80) {
      displayLog(">70")
      ascensionOne(desiredCharacter)
      ascensionTwo(desiredCharacter)
      ascensionThree(desiredCharacter)
      ascensionFour(desiredCharacter)
      ascensionFive(desiredCharacter)
    }
    if (desiredLevel > 80) {
      displayLog(">80")
      ascensionOne(desiredCharacter)
      ascensionTwo(desiredCharacter)
      ascensionThree(desiredCharacter)
      ascensionFour(desiredCharacter)
      ascensionFive(desiredCharacter)
      ascensionSix(desiredCharacter) 
    }
  }
  // Any current level, any Desired Level
  else if (
    ( (!ascendedCurrent && !ascendedDesired) ) || 
    ( (!ascendedCurrent && ascendedDesired) && (desiredLevel !== 20 || desiredLevel !== 40 || desiredLevel !== 50 || desiredLevel !== 60 || desiredLevel !== 70 || desiredLevel !== 80) ) || 
    ( (ascendedCurrent && !ascendedDesired) && (currentLevel !== 20 || currentLevel !== 40 || currentLevel !== 50 || currentLevel !== 60 || currentLevel !== 70 || currentLevel !== 80) ) ||
    ( (ascendedCurrent && ascendedDesired) && ((desiredLevel !== 20 || desiredLevel !== 40 || desiredLevel !== 50 || desiredLevel !== 60 || desiredLevel !== 70 || desiredLevel !== 80) && (currentLevel !== 20 || currentLevel !== 40 || currentLevel !== 50 || currentLevel !== 60 || currentLevel !== 70 || currentLevel !== 80)) )) {
    displayLog("Any current level, any desired level")
    if (currentLevel < 20) {
      if (desiredLevel > 20 && desiredLevel <= 40) {
        ascensionOne(desiredCharacter)
      }
      else if (desiredLevel > 40 && desiredLevel <= 50) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
      }
      else if (desiredLevel > 50 && desiredLevel <= 60) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
      }
      else if (desiredLevel > 60 && desiredLevel <= 70) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      else if (desiredLevel > 70 && desiredLevel <= 80) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      else if (desiredLevel > 80) {
        ascensionOne(desiredCharacter)
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel < 40) {
      if (desiredLevel > 40 && desiredLevel <= 50) {
        ascensionTwo(desiredCharacter)
      }
      else if (desiredLevel > 50 && desiredLevel <= 60) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
      }
      else if (desiredLevel > 60 && desiredLevel <= 70) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      else if (desiredLevel > 70 && desiredLevel <= 80) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      else if (desiredLevel > 80) {
        ascensionTwo(desiredCharacter)
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel < 50) {
      if (desiredLevel > 50 && desiredLevel <= 60) {
        ascensionThree(desiredCharacter)
      }
      else if (desiredLevel > 60 && desiredLevel <= 70) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
      }
      else if (desiredLevel > 70 && desiredLevel <= 80) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      else if (desiredLevel > 80) {
        ascensionThree(desiredCharacter)
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel < 60) {
      if (desiredLevel > 60 && desiredLevel <= 70) {
        ascensionFour(desiredCharacter)
      }
      else if (desiredLevel > 70 && desiredLevel <= 80) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
      }
      else if (desiredLevel > 80) {
        ascensionFour(desiredCharacter)
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel < 70) {
      if (desiredLevel > 70 && desiredLevel <= 80) {
        ascensionFive(desiredCharacter)
      }
      else if (desiredLevel > 80) {
        ascensionFive(desiredCharacter)
        ascensionSix(desiredCharacter)
      }
    }
    else if (currentLevel <= 80) {
      if (desiredLevel > 80) {
        ascensionSix(desiredCharacter)
      }
    }
  }

  printCards()
  resetCounters()
}

function resetCounters() {
  mora = 0
  exp1 = 0
  exp2 = 0
  exp3 = 0
  sliver = 0
  fragment = 0
  chunk = 0
  gem = 0
  com_asc1 = 0
  com_asc2 = 0
  com_asc3 = 0
  specialty = 0
  bossDrop = 0
}

function ascensionOne(desiredCharacter) {
  mora += 20000
  sliver += desiredCharacter.ascension[0].items[0].amount
  //bossDrop += desiredCharacter.ascension[0].items[1].amount
  specialty += desiredCharacter.ascension[0].items[2].amount
  com_asc1 += desiredCharacter.ascension[0].items[3].amount
}

function ascensionTwo(desiredCharacter) {
  mora += 40000
  fragment += desiredCharacter.ascension[1].items[0].amount
  bossDrop += desiredCharacter.ascension[1].items[1].amount
  specialty += desiredCharacter.ascension[1].items[2].amount
  com_asc1 += desiredCharacter.ascension[1].items[3].amount
}

function ascensionThree(desiredCharacter) {
  mora += 60000
  fragment += desiredCharacter.ascension[2].items[0].amount
  bossDrop += desiredCharacter.ascension[2].items[1].amount
  specialty += desiredCharacter.ascension[2].items[2].amount
  com_asc2 += desiredCharacter.ascension[2].items[3].amount
}

function ascensionFour(desiredCharacter) {
  mora += 80000
  chunk += desiredCharacter.ascension[3].items[0].amount
  bossDrop += desiredCharacter.ascension[3].items[1].amount
  specialty += desiredCharacter.ascension[3].items[2].amount
  com_asc2 += desiredCharacter.ascension[3].items[3].amount
}

function ascensionFive(desiredCharacter) {
  mora += 100000
  chunk += desiredCharacter.ascension[4].items[0].amount
  bossDrop += desiredCharacter.ascension[4].items[1].amount
  specialty += desiredCharacter.ascension[4].items[2].amount
  com_asc3 += desiredCharacter.ascension[4].items[3].amount
}

function ascensionSix(desiredCharacter) {
  mora += 120000
  gem += desiredCharacter.ascension[5].items[0].amount
  bossDrop += desiredCharacter.ascension[5].items[1].amount
  specialty += desiredCharacter.ascension[5].items[2].amount
  com_asc3 += desiredCharacter.ascension[5].items[3].amount
}

function calculateLVL() {
  const reqdEXP = desiredExp - currentExp
  exp1 = Math.floor(reqdEXP / HEROS_WIT) // get # of hero's wit
  mora += exp1 * HW_COST
  const exp_HW = exp1 * HEROS_WIT
  exp2 = Math.floor((reqdEXP - exp_HW) / ADV_EXP) // get # of adventurer's exp
  mora += exp2 * AE_COST
  const exp_AE = exp2 * ADV_EXP
  exp3 = Math.ceil((reqdEXP - exp_HW - exp_AE) / WAND_ADV) // get # of wanderer's advice
  mora += exp3 * WA_COST
}


function printCards() {
  var card
  container.style.display = ""
  if (document.getElementById("char-result-table")) {
    container.innerHTML = ""
  }
    card = document.createElement('table')
    card.id = "char-result-table"

  // Construct card and its content
  const content = `
  <tbody id="table-body-char">

</tbody>  
  `;

  card.innerHTML += content

  if (!exp1 == 0) {
    const content1 = `
    <tr id="row-heros-wit">
  <th scope="row" class="border-b left-cell left-text">
      <span>
        ${exp1}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/heros_wit.png" alt="">
      </span>
      <span class="white-text"> 
          Hero's Wit
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content1
  }
  if (!exp2 == 0) {
    const content2 = `
    <tr id="row-adv-exp">
  <th scope="row" class="border-b left-cell left-text">
      <span>
        ${exp2}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/adventurers_experience.png" alt="">
      </span>
      <span class="white-text"> 
          Adventurer's Experience
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content2
  }
  if (!exp3 == 0) {
    const content3 = `
    <tr id="row-wand-adv">
  <th scope="row" class="border-b left-cell left-text">
      <span>
        ${exp3}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/wanderes_advice.png" alt="">
      </span>
      <span class="white-text"> 
          Wanderer's Advice
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content3
  }
  if (!sliver == 0) {
    const sName = gem1.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content4 = `
    <tr id="row-gem1">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${sliver}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${gem1}.png" alt="">
      </span>
      <span class="white-text"> 
          ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content4
  }
  if (!fragment == 0) {
    const sName = gem2.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content4 = `
    <tr id="row-gem2">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${fragment}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${gem2}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content4
  }
  if (!chunk == 0) {
    const sName = gem3.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content5 = `
    <tr id="row-gem3">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${chunk}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${gem3}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content5
  }
  if (!gem == 0) {
    const sName = gem4.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content6 = `
    <tr id="row-gem4">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${gem}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${gem4}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content6
  }
  if (!com_asc1 == 0) {
    const sName = asc1.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content7 = `
    <tr id="row-com-asc1">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${com_asc1}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${asc1}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content7
  }
  if (!com_asc2 == 0) {
    const sName = asc2.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content8 = `
    <tr id="row-com-asc2">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${com_asc2}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${asc2}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content8
  }
  if (!com_asc3== 0) {
    const sName = asc3.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content9 = `
    <tr id="row-com-asc3">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${com_asc3}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${asc3}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content9
  }
  if (!specialty == 0) {
    const sName = spec.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content10 = `
    <tr id="row-spec">
  <th scope="row" class="border-b left-cell left-text">
      <span>
        ${specialty}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${spec}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content10
  }
  if (!bossDrop == 0) {
    const sName = boss.replaceAll('_', ' ')
    const name = sName[0].toUpperCase() + sName.substring(1)
    const content11 = `
    <tr id="row-boss-drop">
  <th scope="row" class="border-b left-cell left-text">
      <span>
      ${bossDrop}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/items/${boss}.png" alt="">
      </span>
      <span class="white-text"> 
      ${name}
      </span>
  </td>
</tr>
    `;

    card.innerHTML += content11
  }
  const content12 = `
  <tr id="row-mora">
  <th scope="row" class="border-b left-cell left-text">
      <span>
        ${mora}
      </span>
      <span>
          &times;
      </span>
  </th>
  <td class="border-b right-cell">
      <span class="cell-img-container">
          <img src="https://paimon.moe/images/mora.png" alt="">
      </span>
      <span class="white-text"> 
          Mora
      </span>
  </td>
  </tr>`;

  card.innerHTML += content12
  container.append(card)
}


function displayLog(msg) {
  console.log("log: " + msg)
}




